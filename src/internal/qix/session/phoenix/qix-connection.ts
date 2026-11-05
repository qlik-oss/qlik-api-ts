import type { OpenAppSessionProps } from "../../qix-types";
import schema from "../schema/engine-api";
import { unwrapDeltas, type DeltaState } from "./delta-compression";
import {
  createJsonRpcChannel,
  type JsonRpcCloseEvent,
  type JsonRpcRequest,
  type JsonRpcResponse,
} from "./json-rpc-channel";
import { logJsonRpcChannelError, logRequest, logResponse } from "./logger";
import { extractResult, getDeltaAndReturnEmptyProps } from "./protocol-helpers";
import type { Json, JsonObject } from "./protocol-types";
import { isQixObjectNotFoundError } from "./rpc-object-ref";

export type QixRequest = {
  method: string;
  params: Array<Json> | Record<string, Json>;
  outKey?: string | number | undefined;
};

export type QixResponse<R = Json> = {
  change?: Array<number>;
  close?: Array<number>;
  error?: { message?: string; code?: number; parameter?: string };
  result: R;
};

export class QixError extends Error {
  code: number | undefined;
  parameter: string | undefined;
  enigmaError = true;
  isCancelled: boolean;
  constructor(
    {
      message,
      code,
      parameter,
    }: {
      message?: string;
      code?: number;
      parameter?: string;
    },
    isCancelled: boolean,
  ) {
    super(message);
    this.code = code;
    this.parameter = parameter;
    this.isCancelled = isCancelled || false;
  }
}

export type QixConnection = {
  invoke<R = Json>(
    handle: number | { getHandle(): number },
    req: QixRequest,
    reportRequestId?: (requestId: number) => void,
    objectlogName?: string,
  ): Promise<R>;
  isClosed(): boolean;
  isReattached(): boolean;
  getSessionState(): string | undefined;
  closeNormal(): void;
  closeSuspend(): void;
};

export type QixConnectionListener = {
  onMessageSent(websocketRequest: JsonRpcRequest, handle: number): unknown;
  onMessageReceived(message: JsonObject, handle: number | undefined): void;
  onNotification(message: JsonObject & { method: string; params: JsonObject }): void;
  onObjectChanged(handle: number): void;
  onObjectClosed(handle: number): void;
  onConnectionClosed(closeEvent?: JsonRpcCloseEvent): void;
};

function isCancelRequest(handleOrObject: number | { getHandle(): number }, method: string): boolean {
  const handle = typeof handleOrObject === "object" ? handleOrObject.getHandle() : handleOrObject;
  return handle === 1 && method === "CancelRequest";
}
/**
 * Creates a connection that can be used to invoke QIX objects on the backend. Takes care of protocol stuff like request ids, delta etc.
 * Does NOT resolve object references into objects.
 */
export async function createQixConnection(
  props: OpenAppSessionProps,
  listener: QixConnectionListener,
): Promise<QixConnection> {
  let requestCounter = 1;
  const canceledRequests: Record<number, true> = {};

  function storeCanceledRequestId(request: QixRequest): void {
    if (Array.isArray(request.params) && request.params.length > 0) {
      const cancelledRequestId = request.params[0] as number;
      canceledRequests[cancelledRequestId] = true;
    }
  }

  function requestWasCanceled(requestId: number): boolean {
    if (canceledRequests[requestId]) {
      delete canceledRequests[requestId];
      return true;
    }
    return false;
  }

  function onMessage(message: JsonObject & { change?: number[]; close?: number[] }, handle: number | undefined) {
    listener.onMessageReceived(message, handle);

    if (message.change) {
      message.change.forEach((changedHandle) => listener.onObjectChanged(changedHandle));
    }
    if (message.close) {
      message.close.forEach((closedHandle) => listener.onObjectClosed(closedHandle));
    }
    if (message.params) {
      listener.onNotification(message as { method: string; params: JsonObject });
    }
  }

  function onConnectionClosed(closeEvent: JsonRpcCloseEvent) {
    listener.onConnectionClosed(closeEvent);
  }

  const lowLevelConnection = await createJsonRpcChannel(props, { onMessage, onConnectionClosed });
  const deltaState: DeltaState = {};

  /**
   * Basically performs the following tasks:
   * * Builds the actual request to send to the backend
   * * Reports the request id to the reportRequestId listener so it can be used to cancel the request
   * * Stores information about the request in the canceledRequests object if it was a cancel request
   * * Logs the request
   * * Sends the request to the backend
   * * Listens for the response from the backend
   * * If the response is an error, throws a QixError. Also add isCanceled to true if it was canceled
   * * If the response is a delta, unwraps the delta and stores the new state of the object for the next response
   * * If the response is a success, extracts the result and returns it
   * * Logs the response
   * * Returns the response
   * * Sends the request to the backend
   */
  async function invoke<R = Json>(
    handleOrObject: number | { getHandle(): number },
    request: QixRequest,
    reportRequestId?: (requestId: number) => void,
  ): Promise<R> {
    // Turn the QixRequest in to an actual websocket request we can send to the backend
    const { outKey, ...requestWithoutOutKey } = request;
    const handle = typeof handleOrObject === "object" ? handleOrObject.getHandle() : handleOrObject;
    const websocketRequest: JsonRpcRequest = {
      jsonrpc: "2.0",
      handle,
      id: requestCounter++,
      ...getDeltaAndReturnEmptyProps({ method: request.method, outKey: outKey || -1 }),
      ...requestWithoutOutKey,
    };
    reportRequestId?.(websocketRequest.id);
    if (isCancelRequest(handleOrObject, request.method)) {
      storeCanceledRequestId(request);
    }

    logRequest(handleOrObject, websocketRequest, request);

    listener.onMessageSent(websocketRequest, websocketRequest.handle);
    // Call the backend
    let response: JsonRpcResponse;
    try {
      response = await lowLevelConnection.send(websocketRequest);
    } catch (error: unknown) {
      // Intercept and log errors
      logJsonRpcChannelError(handleOrObject, websocketRequest, error);
      throw error;
    }
    // Turn error responses into thrown exceptions
    if (response.error) {
      const isCancelled = requestWasCanceled(websocketRequest.id);
      // Remove a few fields from the response object using spread syntax
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { jsonrpc, delta, id, ...errorResponse } = response;
      logResponse(handleOrObject, websocketRequest, errorResponse);
      throw new QixError(response.error, isCancelled);
    }
    if (isQixObjectNotFoundError(response.result)) {
      const isCancelled = requestWasCanceled(websocketRequest.id);
      throw new QixError(
        {
          code: schema.enums.LocalizedErrorCode.LOCERR_GENERIC_NOT_FOUND,
          message: "Object not found",
        },
        isCancelled,
      );
    }

    // Bring out the result part
    let resultObject = response.result || {};

    // Apply the delta protocol
    if (response.delta) {
      resultObject = unwrapDeltas(resultObject, deltaState, handle, request.method);
    }
    // Do some fiddling with the resultObject to get what we want to return to the calling functinos
    const result = extractResult({ method: request.method, outKey: outKey || -1 }, resultObject) as R;

    // Remove a few fields from the response object using spread syntax
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { jsonrpc, delta, id, ...sendResponse } = { ...response, result };
    logResponse(handleOrObject, websocketRequest, sendResponse);
    return result;
  }

  return {
    invoke,
    isReattached: () => lowLevelConnection.isReattached(),
    getSessionState: () => lowLevelConnection.getSessionState(),
    isClosed: () => lowLevelConnection.isClosed(),
    closeNormal: () => lowLevelConnection.closeNormal(),
    closeSuspend: () => lowLevelConnection.closeSuspend(),
  };
}
