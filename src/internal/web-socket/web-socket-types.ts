import type { HostConfig } from "#internal/auth/auth-types";

export type WebSocketProperties = {
  /** The relative path to connect to. The host is provided through the hostConfig. */
  relativePath: string;
  /** query parameters to include */
  queryParams?: Record<string, unknown>;
  /**
   * Specify the host config if the api call is a cross-domain request. Typically used in embedding, mashups and node.
   */
  hostConfig?: HostConfig;
  /** The callbacks to register */
  listeners: WebSocketListeners;
};

export type WebSocketListeners = {
  /** when the web-socket receives a message */
  onMessage: (ev: MessageEvent) => void;
  /** when the web-socket is closed, may be called before onOpen if connection cannot be established */
  onClose: (ev: CloseEvent) => void;
};
