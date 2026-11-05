import { isBrowser } from "#internal/utils/utils";
import type { AppSession, CloseProps, WebSocketEvent } from "./qix-types";
import type { Client, SharedSession } from "./shared-sessions-manager";
import type { WebSocketEventListener } from "./types/websocket-events";
import type { ProgressListener, ProgressType, QixProgressEvent } from "./types/progress";

const isBrowserEnvironment = isBrowser();

/**
 * Trims a progress event's persistent log to only the messages not yet delivered to a listener, so
 * the full accumulated history is not re-sent on every event. `started` resets the cursor for the
 * new request; other fields (`errors`, `transient`) are left as the complete current values.
 * Returns the (possibly trimmed) event and the new cursor for that listener.
 */
function toListenerEvent(
  event: QixProgressEvent,
  persistentDelivered: number,
): { event: QixProgressEvent; persistentDelivered: number } {
  if (event.status === "started") {
    return { event, persistentDelivered: 0 };
  }
  const from = event.persistent.length < persistentDelivered ? 0 : persistentDelivered;
  return {
    event: { ...event, persistent: event.persistent.slice(from) },
    persistentDelivered: event.persistent.length,
  };
}

export function createAppSession(sharedSession: SharedSession): AppSession {
  const listeners = new Set<WebSocketEventListener>();
  // Value is the number of persistent messages already delivered to that listener.
  const progressListeners: Record<ProgressType, Map<ProgressListener, number>> = {
    open: new Map<ProgressListener, number>(),
    reload: new Map<ProgressListener, number>(),
    save: new Map<ProgressListener, number>(),
  };
  let alreadyClosed = false;

  const sharedSessionClient: Client = {
    onWebSocketEvent(event: WebSocketEvent) {
      listeners.forEach((listener) => {
        listener(event);
      });
    },
    hasProgressListener(progressType) {
      return progressListeners[progressType].size > 0;
    },
    onProgress(event) {
      const listenersForType = progressListeners[event.type];
      listenersForType.forEach((persistentDelivered, fn) => {
        const result = toListenerEvent(event, persistentDelivered);
        listenersForType.set(fn, result.persistentDelivered);
        fn(result.event);
      });
    },
  };

  const addProgressListener = (progressType: ProgressType, fn: ProgressListener) => {
    if (sharedSession.supportsProgressReporting === false) {
      throw new Error("Progress reporting is not supported for externally registered app sessions.");
    }
    progressListeners[progressType].set(fn, 0);
    return () => {
      progressListeners[progressType].delete(fn);
    };
  };

  const appSession: AppSession = {
    getDoc: () => sharedSession.getDoc(),
    onWebSocketEvent(fn: WebSocketEventListener): () => void {
      listeners.add(fn);
      return () => {
        listeners.delete(fn);
      };
    },
    onOpenProgress(fn: (event: QixProgressEvent) => void): () => void {
      return addProgressListener("open", fn);
    },
    onReloadProgress(fn: (event: QixProgressEvent) => void): () => void {
      return addProgressListener("reload", fn);
    },
    onSaveProgress(fn: (event: QixProgressEvent) => void): () => void {
      return addProgressListener("save", fn);
    },
    resume: async () => {
      return sharedSession.resume();
    },
    close(props?: CloseProps): Promise<void> {
      if (!alreadyClosed) {
        alreadyClosed = true;
        // browser environment needs a timout so that parcels can hook on to the same appSession when switching views
        // node environment however needs no timout.
        const defaultDelay = isBrowserEnvironment ? 5000 : -1;
        return sharedSession.removeClient(sharedSessionClient, props?.websocketCloseDelay ?? defaultDelay);
      }
      return Promise.resolve();
    },
    /* Only for test cases */
    // @ts-expect-error ts(2353)
    _listeners: listeners,
  };
  sharedSession.addClient(sharedSessionClient);
  return appSession;
}
