import { handleAuthenticationError, isWindows } from "#internal/auth/auth-functions";
import type { HostConfig } from "#internal/auth/auth-types";
import { InvokeFetchError } from "#internal/invoke-fetch/invoke-fetch-errors";
import { invokeFetch } from "#internal/invoke-fetch/invoke-fetch-functions";
import type { OpenSessionProps } from "../internal/session-types";
import type { DocAction, OpenAppSessionProps, WebSocketEvent } from "../qix-types";
import type { Client, SharedSession } from "../shared-sessions-manager";
import type { Doc } from "../types/doc";
import type { Global } from "../types/global";
import type { WebSocketEventPayloads, WebSocketEventType } from "../types/websocket-events";
import type { CreateSharedSessionProps } from "./shared-sessions-phoenix";
import { getHumanReadableSocketClosedErrorMessage } from "./websocket-errors";
import { createProgressMonitor, type ProgressMonitor } from "./progress-monitor";

export type Listener = (event: WebSocketEvent) => void;

type WindowsAuthenticationInformation = {
  loginUri: string;
  mustAuthenticate: boolean;
};

/**
 * Resolves with the OnAuthenticationInformation event coming from windows web socket on connect. If no such event has been received within 2 seconds undefined is returned
 */
function listenForWindowsAuthenticationInformation(
  session: EnigmaJS.Session,
): Promise<WindowsAuthenticationInformation | undefined> {
  let resolveAuthSuggestedInWebsocket: (
    value: WindowsAuthenticationInformation | undefined | PromiseLike<WindowsAuthenticationInformation | undefined>,
  ) => void;
  const authSuggestedInWebsocket = new Promise<WindowsAuthenticationInformation | undefined>((resolve, reject) => {
    resolveAuthSuggestedInWebsocket = resolve;
    setTimeout(() => {
      resolve(undefined);
    }, 2000);
  });
  session.on(
    "notification:OnAuthenticationInformation",
    ({ loginUri, mustAuthenticate }: { loginUri: string; mustAuthenticate: boolean }) => {
      if (mustAuthenticate && loginUri) {
        if (resolveAuthSuggestedInWebsocket) {
          resolveAuthSuggestedInWebsocket({ loginUri, mustAuthenticate });
        }
      }
    },
  );
  return authSuggestedInWebsocket;
}

/**
 * Opens the websocket and handles a few windows authentication details
 */
async function createAndSetupEnigmaSession(
  props: OpenAppSessionProps,
  canRetry: boolean,
  onWebSocketEvent: (event: WebSocketEvent) => void,
  progressMonitor: ProgressMonitor,
): Promise<{
  session: EnigmaJS.Session;
  global: Global;
}> {
  const { createEnigmaSessionEntrypoint } = await import("./qix-chunk-entrypoint.js");
  const isWin = await isWindows(props.hostConfig);
  const session = await createEnigmaSessionEntrypoint(props, progressMonitor);
  setupSessionListeners(session, props, onWebSocketEvent, isWin);
  let global: Global;

  if (isWin) {
    // On windows there is no rest calls prior to the websocket opening that can trigger authentication
    // Instead there is a message sent inside the websocket stating that you need to login, so listen for that!
    const loginInfoPromise = listenForWindowsAuthenticationInformation(session);
    global = (await session.open()) as unknown as Global;

    const loginInfo = await loginInfoPromise;
    if (loginInfo?.mustAuthenticate) {
      const action = await handleAuthenticationError({
        headers: new Headers(),
        status: 101,
        canRetry,
        hostConfig: props.hostConfig,
      });
      if (canRetry && action.retry) {
        return createAndSetupEnigmaSession(props, false, onWebSocketEvent, progressMonitor);
      }
      if (action.preventDefault) {
        // Return never resolving promise
        return new Promise(() => {});
      }
    }
  } else {
    global = (await session.open()) as unknown as Global;
  }
  return {
    session,
    global,
  };
}

function setupSessionListeners(
  session: EnigmaJS.Session,
  props: OpenAppSessionProps,
  eventListener: <T extends WebSocketEventType>(event: WebSocketEvent<T>) => void,
  isWin: boolean,
): void {
  // On windows the close event is swallowed by enigma.
  // To work around this we will send a synthetic suspend event when we receive a notification in the websocket.
  // This variable is to make sure we don't send two suspend events.
  let syntheticSuspendEventOnWindowsAlreadySent = false;

  if (isWin) {
    // Listen for the message coming inside the websocket that tells us that
    // we need to authenticate, and send a synthetic suspend event
    session.on("notification:OnSessionTimedOut", () => {
      syntheticSuspendEventOnWindowsAlreadySent = true;
      eventListener({
        eventType: "suspended",
        code: 4001,
        reason: "Session timed out",
        initiator: "network",
        ...props,
      });
    });
  }

  // Setup listeners for each event-type relevant to a session's life-cycle.
  // This is quite verbose, but for a reason: we simply cannot use variables
  // here, at least not in any way I can perceive.
  // TODO: Fix the typing in Enigma.JS to make this less verbose.

  session.on("opened", (event: WebSocketEventPayloads["opened"]) => {
    const wsEvent: WebSocketEvent<"opened"> = {
      eventType: "opened",
      ...props,
      ...event,
    };
    eventListener(wsEvent);
  });

  session.on("closed", (event: WebSocketEventPayloads["closed"]) => {
    const wsEvent: WebSocketEvent<"closed"> = {
      eventType: "closed",
      ...props,
      ...event,
    };
    eventListener(wsEvent);
  });

  session.on("suspended", (event: WebSocketEventPayloads["suspended"]) => {
    // In case the close events stops being swallowed by enigma on windows some day make sure we don't send duplicate suspend events.
    if (!syntheticSuspendEventOnWindowsAlreadySent) {
      const wsEvent: WebSocketEvent = {
        eventType: "suspended",
        ...props,
        ...event,
      };
      eventListener(wsEvent);
    }
  });

  session.on("resuming", (event: WebSocketEventPayloads["resuming"]) => {
    const wsEvent: WebSocketEvent<"resuming"> = {
      eventType: "resuming",
      ...props,
      ...event,
    };
    eventListener(wsEvent);
  });

  session.on("resumed", (event: WebSocketEventPayloads["resumed"]) => {
    const wsEvent: WebSocketEvent<"resumed"> = {
      eventType: "resumed",
      ...props,
      ...event,
    };
    eventListener(wsEvent);
  });
}

function separatePromises(input: Promise<{ session: EnigmaJS.Session; global: Global }>): {
  sessionPromise: Promise<EnigmaJS.Session>;
  globalPromise: Promise<Global>;
} {
  return {
    sessionPromise: input.then((res) => res.session),
    globalPromise: input.then((res) => res.global),
  };
}

// Sneaky type for emitting events from an enigma-session.
type emitter = {
  emit: (evtType: string, evt: unknown) => void;
};

// Custom close-codes sent by engine (and enigma.js).
// If needed, there are more custom-codes sent by engine-proxy, see its websocket errors.
const WEBSOCKET_CUSTOM_CLOSE_CODES = {
  /** The client itself "suspended" the session, don't auto-resume. */
  MANUAL_SUSPEND: 4000,
  /** Engine closed the session due to idleness, don't auto-resume */
  IDLE_TIMEOUT: 4001,
  /** Some license issue, doesn't sound like auto-resume would do much good. */
  LICENSE_RENEWAL: 4002,
  /** The engine hosting the session is shutting down,
   *  auto-resume to get another session from another engine. */
  ENGINE_TERMINATING: 4003,
  /** App deleted from an engine, auto-resume to open it on another engine. */
  APP_DELETED: 4004,
  /** Session closed due to session-limit, seems unwise to auto-resume here. */
  SESSION_LIMIT_REACHED: 4005,
  /** Authentication issue, auto-resume doesn't seem like a good idea. */
  AUTHENTICATION_FAILED: 4006,
  /** App-mode changed to Direct Query mode, let's auto-resume */
  APP_MODE_CHANGED: 4007,
};

function shouldAutoResume(code: number): boolean {
  switch (code) {
    case WEBSOCKET_CUSTOM_CLOSE_CODES.MANUAL_SUSPEND:
    case WEBSOCKET_CUSTOM_CLOSE_CODES.IDLE_TIMEOUT:
    case WEBSOCKET_CUSTOM_CLOSE_CODES.LICENSE_RENEWAL:
    case WEBSOCKET_CUSTOM_CLOSE_CODES.SESSION_LIMIT_REACHED:
    case WEBSOCKET_CUSTOM_CLOSE_CODES.AUTHENTICATION_FAILED:
      return false;
    case WEBSOCKET_CUSTOM_CLOSE_CODES.ENGINE_TERMINATING:
    case WEBSOCKET_CUSTOM_CLOSE_CODES.APP_DELETED:
    case WEBSOCKET_CUSTOM_CLOSE_CODES.APP_MODE_CHANGED:
      return true;
  }
  return false;
}

export function createSharedEnigmaSession(
  props: OpenSessionProps,
  { getInitialAppActions, onClose, onWebSocketEvent: onGlobalWebsocketEvent }: CreateSharedSessionProps,
): SharedSession {
  const clients: Client[] = [];
  const alreadyExecutedInitialActions: DocAction[] = [];
  const progressMonitor = createProgressMonitor(clients);

  /**
   * Runs any initial app actions that have not yet been run
   */
  async function runPendingInitialActions(initialActionsForApp: DocAction[], doc: Doc) {
    for (const initialAction of initialActionsForApp) {
      if (alreadyExecutedInitialActions.indexOf(initialAction) === -1) {
        alreadyExecutedInitialActions.push(initialAction);
        await initialAction(doc);
      }
    }
  }

  let resumePromise: Promise<void> | undefined;
  function onWebSocketEvent(event: WebSocketEvent) {
    if (event.eventType === "suspended" || event.eventType === "closed") {
      // A lost or closed connection ends any in-flight progress monitoring; report it as aborted.
      progressMonitor.stopMonitoringProgress(undefined, "aborted");
    }
    if (event.eventType === "suspended") {
      resumePromise = undefined; // Signal that we can resume again
      if (shouldAutoResume(event.code)) {
        // Auto-resume after all listeners have gotten the event.
        resume().catch((err) => {
          console.error("Failed to auto-resume:", err.message);
        });
      }
    }
    for (const client of clients) {
      client.onWebSocketEvent(event);
    }
    onGlobalWebsocketEvent(event);
  }
  const { sessionPromise, globalPromise } = separatePromises(
    createAndSetupEnigmaSession(props, true, onWebSocketEvent, progressMonitor),
  );

  async function resume() {
    if (!resumePromise) {
      resumePromise = (async () => {
        let session = await sessionPromise;
        // Resume and call session.suspend() on fail (which will be a manual suspend).
        await sessionResumeWithRetry(session, props.hostConfig).catch((err) => {
          const { cause } = err;
          if (cause && (cause === "offline" || cause === "unauthorized")) {
            // Reset resume promise if we're offline or unauthorized.
            resumePromise = undefined;
          } else {
            session.suspend();
          }
          return Promise.reject(err);
        });
      })();
    }
    return resumePromise;
  }

  const docPromise = globalPromise
    .then(async (global) => {
      progressMonitor.setGetProgressFn(global.getProgress.bind(global));
      if (props.useSessionApp) {
        return global.createSessionApp();
      } else {
        return global.openDoc(props.appId, "", "", "", !!props.withoutData).then((doc) => {
          if (!doc) {
            //This seems to be the result from enigma.js of a bad app id
            return Promise.reject(new Error("Doc could not be opened"));
          }
          // Sneak global into the doc...
          // eslint-disable-next-line no-param-reassign
          (doc as any).global = global;
          return doc;
        });
      }
    })
    .then(async (doc: Doc) => {
      // Doc succesfully opened means the session is connected (and opened).

      const initialActionsForApp = getInitialAppActions();
      if (initialActionsForApp && doc) {
        await runPendingInitialActions(initialActionsForApp, doc);
      }
      return doc;
    })
    .catch((err) => {
      closeEnigmaSession();
      const errorWithReadableMessage = new Error(getHumanReadableSocketClosedErrorMessage(err.original || err, props));
      /* Copy over props to keep backwards compatibility */
      Object.entries(err).forEach(([key, value]) => {
        // @ts-expect-error ts(7053) Copyt over
        errorWithReadableMessage[key] = value;
      });

      return Promise.reject(errorWithReadableMessage);
    });

  function closeEnigmaSession() {
    onClose();
    return sessionPromise.then((session) => session.close()).catch(() => {});
  }

  const sharedSession: SharedSession = {
    getDoc: () => docPromise,
    addClient(client: Client) {
      const index = clients.indexOf(client, 0);
      if (index === -1) {
        clients.push(client);
      }
    },
    removeClient(client: Client, closeDelay: number): Promise<void> {
      const actuallyRemove = () => {
        const index = clients.indexOf(client, 0);
        if (index > -1) {
          clients.splice(index, 1);
        }
        if (clients.length === 0) {
          closeEnigmaSession();
        }
      };

      if (closeDelay > 0) {
        return new Promise((resolve) => {
          setTimeout(async () => {
            actuallyRemove();
            resolve();
          }, closeDelay);
        });
      }
      actuallyRemove();
      return Promise.resolve();
    },
    resume,
    initialActionsUpdated() {
      getInitialAppActions();
    },
    clientsCount: () => clients.length,
  };
  return sharedSession;
}

let onlyOnReattach = false;
export function resumeShouldRejectPromiseIfNotReattached(bool: boolean) {
  onlyOnReattach = bool;
}

type ConnectivityStatus = "online" | "offline" | "unauthorized";

async function checkConnectivity(hostConfig?: HostConfig): Promise<ConnectivityStatus> {
  let status: ConnectivityStatus = "online";
  const method = "get";
  const options = {
    hostConfig,
    timeoutMs: 4000,
    noCache: true,
  };
  // Check /api/v1/user-locale since it's light and exists on both QCS and Windows.
  // If we receive an application/json response we're online. If we receive text/html
  // we're unauthorized and if we don't receive anything we're offline.
  try {
    const result = await invokeFetch("", { method, pathTemplate: "/api/v1/user-locale", options });
    if (!result.headers.get("content-type")?.includes("application/json")) {
      status = "unauthorized";
    }
  } catch (err) {
    const fetchErr = err as InvokeFetchError;
    switch (fetchErr.status) {
      case 0:
        status = "offline";
        break;
      case 401:
        status = "unauthorized";
        break;
    }
  }

  return status;
}

/**
 * Takes the enigma-session and attempts to resume it.
 * @private
 */
async function sessionResumeWithRetry(session: EnigmaJS.Session, hostConfig?: HostConfig): Promise<void> {
  // Fail fast if we're not online.
  const status = await checkConnectivity(hostConfig);
  if (status !== "online") {
    const error = new Error(`failed to resume: ${status}`, { cause: status });
    return Promise.reject(error);
  }
  // The addition of the retry-logic makes it less clear when we're
  // actually resuming and when we're trying to resume. Let's consider
  // us to be in a retrying state when we are ready to attempt resuming.
  // Emit a custom-event in a slightly hacky fashion.
  (session as unknown as emitter).emit("resuming", {});

  // These values are taken from sense-client's default reconnect-configuration.
  const maxRetries = 10;
  const retryTimeoutMs = 2000;

  let resumed = false;
  let i = 0;
  let error: any;
  // First call is not retry, right?
  while (!resumed && i <= maxRetries) {
    try {
      await session.resume(onlyOnReattach);
      resumed = true;
    } catch (err) {
      // Keep error so we can pass it through Promise.reject.
      error = err;
      // TODO figure out for which errors we don't want to retry!
      // Do a promise-sleep.
      let resolve = () => {};
      const promise = new Promise<void>((res) => {
        resolve = res;
      });
      setTimeout(resolve, retryTimeoutMs);
      await promise;
    }
    i++;
  }
  if (!resumed) {
    return Promise.reject(error);
  }
  return Promise.resolve();
}
