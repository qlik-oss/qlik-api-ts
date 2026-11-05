import { logEvent } from "./logger";

/**
 * Sets up listeners for user activity (mouse movement, document visibility, and window focus) and supplies an api that can be used to know
 * when to resume a session
 */
export function createInterestMonitor() {
  let activity = createPromiseAndResolveFunc();

  let listening = false;
  let onUserActivityDetectedCallback: () => void;
  function signalInterest() {
    stopListeningForActivity();
    logEvent("Someone is interested in this");
    onUserActivityDetectedCallback?.();
    activity.resolve();
  }

  function waitUntilSomeoneIsInterestedInThis(): Promise<void> {
    logEvent("Waiting for someone to be interested in this");
    startListeningForActivity();
    const result = activity.promise;
    activity = createPromiseAndResolveFunc();
    return result;
  }
  function resetAnyInterestSignalledBeforeNow() {
    logEvent("stop waiting for someone to be interested in this");
    stopListeningForActivity();
    activity = createPromiseAndResolveFunc();
  }

  function onUserActivityDetected(activityCallback: () => void) {
    onUserActivityDetectedCallback = activityCallback;
  }

  /* -------------------------------------------------------------------------- */
  /*                             DOM Event Listeners                            */
  /* -------------------------------------------------------------------------- */

  function mouseListener(this: Window) {
    signalInterest();
  }
  function visibilityChangeListener() {
    if (globalThis.document?.visibilityState === "visible") {
      logEvent("Document is visible");
      signalInterest();
    }
  }
  function focusListener() {
    logEvent("Document has focus");
    signalInterest();
  }

  /* -------------------------------------------------------------------------- */
  /*                                Start / stop                                */
  /* -------------------------------------------------------------------------- */

  function startListeningForActivity() {
    if (!listening) {
      listening = true;
      globalThis.window?.document.addEventListener("visibilitychange", visibilityChangeListener);
      globalThis.window?.addEventListener("focus", focusListener);
      globalThis.window?.addEventListener("mousemove", mouseListener);
    }
  }

  function stopListeningForActivity() {
    if (listening) {
      listening = false;
      globalThis.window?.document.removeEventListener("visibilitychange", visibilityChangeListener);
      globalThis.window?.removeEventListener("focus", focusListener);
      globalThis.window?.removeEventListener("mousemove", mouseListener);
    }
  }

  const api = {
    startListeningForActivity,
    stopListeningForActivity,
    waitUntilSomeoneIsInterestedInThis,
    resetAnyInterestSignalledBeforeNow,
    onUserActivityDetected,
    signalInterest,
  };
  return api;
}

function createPromiseAndResolveFunc(): { promise: Promise<void>; resolve: () => void } {
  let resolve: () => void = () => {};
  const promise = new Promise<void>((res) => {
    resolve = res;
  });
  return { promise, resolve };
}
