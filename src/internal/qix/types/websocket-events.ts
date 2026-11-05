import type { OpenAppSessionProps } from "../qix-types";

export type WebSocketEventPayloads = {
  opened: object;
  suspended: {
    code: number;
    reason: string;
    initiator: "manual" | "network";
  };
  resuming: object;
  resumed: object;
  closed: {
    code: number;
    reason: string;
  };
};

export type WebSocketEventType = keyof WebSocketEventPayloads;

/**
 * @experimental
 * The type of event that is sent to any listeners added through onWebSocketEvent.
 */
export type WebSocketEvent<ET extends WebSocketEventType = WebSocketEventType> = {
  [K in WebSocketEventType]: {
    eventType: K;
  } & WebSocketEventPayloads[K] &
    OpenAppSessionProps;
}[ET];

export type WebSocketEventListener = (event: WebSocketEvent) => void;

export type CombinedWebSocketStateState = "open" | "suspended" | "resuming" | "closed";

/**
 * @experimental
 * The type of event that is sent to listeners added through onCombinedWebSocketStateChange.
 */
export type CombinedWebSocketStateEvent = {
  state: CombinedWebSocketStateState;
};

// SuspendedSessionsStates
export type CombinedWebSocketStateEventListener = (event: CombinedWebSocketStateEvent) => void;
