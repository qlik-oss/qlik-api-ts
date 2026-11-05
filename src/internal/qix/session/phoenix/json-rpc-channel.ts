import { handleAuthenticationError, isWindows } from "#internal/auth/auth-functions";
import type { OpenAppSessionProps } from "../../qix-types";
import { logEvent } from "./logger";
import { createResolvablePromise } from "./protocol-helpers";
import type { Json, JsonObject } from "./protocol-types";
import { createQixWebSocket } from "./websocket";
import { WebsocketClosedError } from "./websocket-closed-error";

const RPC_CLOSE_NORMAL = 1000;
const RPC_CLOSE_MANUAL_SUSPEND = 4000;

export type JsonRpcCloseEvent = {
  code: number;
  reason: string;
  initiator: "manual" | "network";
};

export type JsonRpcRequest = {
  jsonrpc: "2.0";
  delta: boolean;
  id: number;
  return_empty?: boolean;

  handle: number;
  method: string;
  params: Array<Json> | Record<string, Json>;
};

export type JsonRpcResponse = {
  jsonrpc?: string;
  id: number;
  delta?: boolean;
  change?: Array<number>;
  close?: Array<number>;
  error?: { message?: string; code?: number; parameter?: string };
  result?: JsonObject;
};

export type JsonRpcChannel = {
  isClosed(): boolean;
  isReattached(): boolean;
  getSessionState(): string | undefined;
  send(request: JsonRpcRequest): Promise<JsonRpcResponse>;
  closeNormal: () => void;
  closeSuspend: () => void;
};

export type JsonRpcChannelListener = {
  onMessage: (message: JsonObject, handle: number | undefined) => void;
  onConnectionClosed(closeEvent: JsonRpcCloseEvent): void;
};

type PendingJsonRpcInvocation = {
  handle: number;
  resolve(response: JsonRpcResponse): void;
  reject(error: Error): void;
};

/**
 * Creates a new Json Rpc channel that listens for startup notifications, auth errors on windows etc and provides
 * the basic mechanism to make and wait for invocations and receive push messages.
 */
export async function createJsonRpcChannel(
  props: OpenAppSessionProps,
  listener: JsonRpcChannelListener,
): Promise<JsonRpcChannel> {
  const { hostConfig } = props;
  const [connectionInfoPromise, resolveConnectionInfo] = createResolvablePromise<string | undefined>();
  const [authenticationInfoPromise, resolveAuthenticationInfo] = createResolvablePromise<{
    loginUri?: string;
    mustAuthenticate?: boolean;
  }>();
  let pendingInvocations: Record<number, PendingJsonRpcInvocation> = {};

  let initiator: "network" | "manual" = "network";
  let closed = false;

  const socket = await createQixWebSocket(props, {
    onMessage: (event) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
      const data = JSON.parse(event.data);

      //REIMPLEMENT this.emit("traffic", "received", data, resolver.handle);

      if (isInvocationResponse(data)) {
        // REIMPLEMENT this.emit("message", data);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const pendingInvocation = pendingInvocations[data.id];
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        listener.onMessage(data, pendingInvocation?.handle);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        pendingInvocation?.resolve(data);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        listener.onMessage(data, undefined);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (data.method === "OnConnected") {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          resolveConnectionInfo(data.params?.qSessionState);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        } else if (data.method === "OnAuthenticationInformation") {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (data.mustAuthenticate) {
            // This is a special case for windows where we do not wait for the promise to resolve
            void handleAuthenticationError({
              headers: new Headers(),
              status: 101,
              canRetry: true,
              hostConfig,
            }).then(() => {
              socket.close();
            });
          } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            resolveAuthenticationInfo(data);
          }
        }
        //REIMPLEMENT this.emit(data.params ? "notification" : "message", data);
      }
    },
    onClose: ({ code, reason }) => {
      logEvent("Websocket closed", code, reason);
      closed = true;
      listener.onConnectionClosed({ code, reason, initiator });
      const pendingInvocationsAtCloseTime = Object.values(pendingInvocations);
      pendingInvocations = {};
      pendingInvocationsAtCloseTime.forEach((pendingInvocation) =>
        pendingInvocation.reject(new WebsocketClosedError()),
      );
    },
  });

  // Wait for the connection info to arrive
  const sessionState = await connectionInfoPromise;
  const reattached = sessionState === "SESSION_ATTACHED";

  // Wait for the authentication info on windows
  if (await isWindows(hostConfig)) {
    const authInfo = await authenticationInfoPromise;
    if (authInfo.mustAuthenticate) {
      throw new Error("Windows authentication needed");
    }
  }

  // Set up the API
  // --------------

  function send(request: JsonRpcRequest): Promise<JsonRpcResponse> {
    if (closed) {
      throw new WebsocketClosedError();
    }

    const promise = new Promise<JsonRpcResponse>((resolve, reject) => {
      pendingInvocations[request.id] = {
        handle: request.handle,
        resolve,
        reject,
      };
      socket.send(JSON.stringify(request));
    });
    return promise;
  }

  return {
    send,
    // oxlint-disable-next-line typescript/no-unnecessary-type-conversion
    isClosed: () => !!closed,
    // oxlint-disable-next-line typescript/no-unnecessary-type-conversion
    isReattached: () => !!reattached,
    getSessionState: () => sessionState,
    closeNormal: () => {
      logEvent("Closing websocket!");
      initiator = "manual";
      closed = true;
      socket.close(RPC_CLOSE_NORMAL, "Websocket closed from client side");
    },
    closeSuspend: () => {
      logEvent("Suspending websocket!");
      initiator = "manual";
      closed = true;
      socket.close(RPC_CLOSE_MANUAL_SUSPEND, "Websocket suspended from client side");
    },
  };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isInvocationResponse(data: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return data.id;
}
