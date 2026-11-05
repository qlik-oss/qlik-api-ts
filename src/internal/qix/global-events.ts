import { toGlobalAppSessionId } from "./internal/global-app-session.id";
import type { WebSocketEvent } from "./qix-types";
import type {
  CombinedWebSocketStateEventListener,
  WebSocketEventListener,
  WebSocketEventType,
} from "./types/websocket-events";

export const globalEventListeners: Set<WebSocketEventListener> = new Set<WebSocketEventListener>();
const globalStateListeners: Set<CombinedWebSocketStateEventListener> = new Set<CombinedWebSocketStateEventListener>();

/**
 * @experimental
 * Adds an event-listener to the list of global event-listeners which
 * will get called on every event from every session.
 */
export function onWebSocketEvent(listener: WebSocketEventListener): () => void {
  globalEventListeners.add(listener);
  return () => {
    globalEventListeners.delete(listener);
  };
}

/**
 * @experimental
 * Adds a state-listener to the list of global state-listeners which.
 */
export function onCombinedWebSocketStateChange(listener: CombinedWebSocketStateEventListener): () => void {
  globalStateListeners.add(listener);
  return () => {
    globalStateListeners.delete(listener);
  };
}

/**
 * Returns the number of registered global listeners. Only for testing.
 * @private
 */
export function globalListenersCount(): number {
  return globalEventListeners.size;
}

type GlobalState = {
  sessionStates: Record<string, WebSocketEventType>;
  state: string;
};

/**
 * @private
 */
export const globalState: GlobalState = {
  sessionStates: {},
  state: "closed",
};

export type StateListener = (event: StateEvent) => void;

type StateType = "open" | "suspended" | "resuming" | "closed";

export type StateEvent = {
  state: StateType;
};

export function stateListener(key: string, event: WebSocketEvent) {
  if (event.eventType === "closed") {
    delete globalState.sessionStates[key];
  } else {
    globalState.sessionStates[key] = event.eventType;
  }
  const states = Object.values(globalState.sessionStates);
  let anySuspended = false;
  let anyResuming = false;
  for (const state of states) {
    if (state === "suspended") {
      anySuspended = true;
    } else if (state === "resuming") {
      anyResuming = true;
    }
  }

  let newState: StateType;
  if (states.length === 0) {
    newState = "closed";
  } else if (anySuspended) {
    newState = "suspended";
  } else if (anyResuming) {
    newState = "resuming";
  } else {
    newState = "open";
  }

  if (globalState.state !== newState) {
    globalState.state = newState;
    for (const fn of globalStateListeners) {
      fn({ state: newState });
    }
  }
}
export function triggerGlobalWebSocketEventListeners(event: WebSocketEvent) {
  for (const fn of globalEventListeners) {
    fn(event);
  }
  stateListener(toGlobalAppSessionId(event), event);
}
