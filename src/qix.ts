import type { CloseProps, Doc, OpenAppSessionProps, WebSocketEvent, QixProgressEvent } from "#internal/qix/qix-types";
import type { HostConfig } from "./auth";
import { getQixRuntimeModule } from "./public-runtime-modules";

export type * from "#internal/qix/qix-types";

export function openAppSession(appSessionProps: OpenAppSessionProps) {
  const appSessionPromise = getQixRuntimeModule(appSessionProps.hostConfig).then((impl) =>
    impl.openAppSession(appSessionProps),
  );
  const appSessionProxy = {
    /**
     * Returns a promise of the Qix Doc object with a set of client-side Api extensions.
     * Note that while the AppSession object is returned immediately this promise might take a while
     * to resolve for bigger apps.
     */
    async getDoc(): Promise<Doc> {
      return (await appSessionPromise).getDoc();
    },

    /**
     * @experimental
     * Add an event-listener for this app-session.
     */
    onWebSocketEvent(listener: (event: WebSocketEvent) => void): () => void {
      const returnedFnPromise = appSessionPromise.then((appSession) => appSession.onWebSocketEvent(listener));
      return () => {
        void returnedFnPromise.then((fn) => fn());
      };
    },

    /**
     * @experimental
     * Add a progress-listener for an app open process. This is the process behind the `getDoc` promise.
     */
    onOpenProgress(listener: (event: QixProgressEvent) => void): () => void {
      const returnedFnPromise = appSessionPromise.then((appSession) => appSession.onOpenProgress(listener));
      return () => {
        void returnedFnPromise.then((fn) => fn());
      };
    },
    /**
     * @experimental
     * Add a progress-listener for an app reload process.
     * A reload is triggered by calling `Doc.DoReload` or `Doc.DoReloadEx`.
     */
    onReloadProgress(listener: (event: QixProgressEvent) => void): () => void {
      const returnedFnPromise = appSessionPromise.then((appSession) => appSession.onReloadProgress(listener));
      return () => {
        void returnedFnPromise.then((fn) => fn());
      };
    },
    /**
     * @experimental
     * Add a progress-listener for an app save process (triggered by `DoSave` on a `Doc`).
     */
    onSaveProgress(listener: (event: QixProgressEvent) => void): () => void {
      const returnedFnPromise = appSessionPromise.then((appSession) => appSession.onSaveProgress(listener));
      return () => {
        void returnedFnPromise.then((fn) => fn());
      };
    },

    /**
     * @experimental
     * Resume a suspended session. This will resume exactly
     * once if the session is currently suspended, otherwise
     * nothing will be done.
     */
    async resume() {
      return (await appSessionPromise).resume();
    },

    /**
     * When the app session is no longer in use it must be closed using this function.
     * If the same underlying enigma websocket is used somewhere else in the browser
     * this is basically a no op, but if this is the last/only usage
     * of the underlying enigma websocket that websocket will be closed.
     */
    async close(props?: CloseProps) {
      return (await appSessionPromise).close(props);
    },
  };
  return appSessionProxy;
}

export interface QixAPI {
  /**
   * Open a qix session in engine on the current domain for the supplied appId. If the same app is opened multiple times
   * only a single enigma websocket session is opened and shared.
   * When all open sessions are closed again the shared enigma websocket session is also closed.
   * @param appId The resource id of the app to open
   * @param host Configuration of what host to connect to
   */
  openAppSession: typeof openAppSession;
}

export function withHostConfig(hostConfig: HostConfig | undefined): QixAPI {
  return {
    openAppSession: (openAppSessionProps) =>
      openAppSession(
        typeof openAppSessionProps === "string"
          ? { hostConfig, appId: openAppSessionProps }
          : { hostConfig, ...openAppSessionProps },
      ),
  };
}

// Ensure that we adhere to the runtime API.
const qix: QixAPI & { withHostConfig: (hostConfig: HostConfig | undefined) => QixAPI } = {
  openAppSession,
  withHostConfig,
};

export default qix;
