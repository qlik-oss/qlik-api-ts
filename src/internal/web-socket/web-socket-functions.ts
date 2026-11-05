import {
  getWebSocketAuthParams,
  handleAuthenticationError,
  toValidWebsocketLocationUrl,
} from "#internal/auth/auth-functions";
import { appendQueryToUrl } from "#internal/invoke-fetch/internal/invoke-fetch-helpers";
import type { InvokeFetchError } from "#internal/invoke-fetch/invoke-fetch-errors";
import { exposeInternalApiOnWindow } from "#internal/utils/expose-internal-test-apis";
import { createResolvablePromise, isNode } from "#internal/utils/utils";
import { WebSocketError } from "./web-socket-errors";
import { type WebSocketProperties } from "./web-socket-types";

export type SocketFactory = {
  createWebSocket: (url: string) => WebSocket;
};

/**
 * Establishes a new web-socket connection towards the provided relative path
 * using the authorization and host provided through hostConfig and sets up the
 * listeners. Handles auth-related retries.
 * @param webSocketProps WebSocketProperties
 * @returns a WebSocket promise
 */
export async function createWebSocket(webSocketProps: WebSocketProperties): Promise<WebSocket> {
  // Check if noauth auth type is configured
  if (webSocketProps.hostConfig?.authType === "noauth") {
    throw new Error("WebSocket connections are not allowed with noauth auth module");
  }

  try {
    return await createWebSocketInternal(webSocketProps);
  } catch (error) {
    const err = error as InvokeFetchError;
    const errorBody = err.data as Record<string, unknown> | undefined;
    const { status } = err;
    if (status === 401 || (status === 403 && errorBody?.code === "CSRF-TOKEN-2")) {
      const action = await handleAuthenticationError({
        headers: new Headers(),
        status,
        canRetry: true,
        hostConfig: webSocketProps.hostConfig,
      });
      if (action.retry) {
        return createWebSocketInternal(webSocketProps);
      }
      if (action.preventDefault) {
        // Return never resolving promise
        return new Promise<WebSocket>(() => {});
      }
    }
    throw err;
  }
}

/**
 * @private
 * Establishes a new web-socket connection based on the passed in properties.
 * @param webSocketProps WebSocketProperties
 * @returns a WebSocket promise
 */
async function createWebSocketInternal(webSocketProps: WebSocketProperties): Promise<WebSocket> {
  const { relativePath, queryParams, hostConfig, listeners } = webSocketProps;
  const isNodeEnvironment = isNode();
  const unitTestCreateWebSocket = (hostConfig as Partial<SocketFactory>)?.createWebSocket;

  const [socketOpenPromise, resolveSocketOpenPromise, rejectSocketOpenPromise] = createResolvablePromise<WebSocket>();

  const baseUrl = queryParams
    ? appendQueryToUrl(`${toValidWebsocketLocationUrl(hostConfig)}${relativePath}`, queryParams)
    : `${toValidWebsocketLocationUrl(hostConfig)}${relativePath}`;

  const { headers, queryParams: authQueryParams, pfxOptions } = await getWebSocketAuthParams({ hostConfig });
  const url = appendQueryToUrl(baseUrl, authQueryParams);

  let socket: WebSocket;
  if (unitTestCreateWebSocket) {
    socket = unitTestCreateWebSocket(url);
  } else if (isNodeEnvironment) {
    const WS = (await import("ws")).default;
    socket = new WS(url, undefined, {
      headers,
      ...pfxOptions,
    }) as unknown as WebSocket;
  } else {
    socket = new WebSocket(url);
    exposeInternalApiOnWindow("closeLastWebSocket", (code: number) => {
      // eslint-disable-next-line no-console
      console.log("Closing websocket with code", code, socket);
      socket.close(code);
    });
  }

  let opened = false;
  socket.onopen = () => {
    socket.onopen = null;
    socket.onerror = null;
    opened = true;
    resolveSocketOpenPromise(socket);
  };
  socket.onerror = () => {
    socket.onopen = null;
    socket.onerror = null;
  };
  socket.onmessage = (message) => {
    listeners.onMessage(message);
  };
  socket.onclose = (ev) => {
    if (!opened) {
      const { code, reason } = ev;
      rejectSocketOpenPromise(new WebSocketError({ code, reason, host: hostConfig?.host || "" }));
    } else {
      listeners.onClose(ev);
    }
  };

  return socketOpenPromise;
}
