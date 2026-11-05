import type { JsonObject } from "./protocol-types";
import { WebsocketClosedError } from "./websocket-closed-error";

export function getDeltaAndReturnEmptyProps(request: { method: string; outKey: string | number }): {
  return_empty?: boolean;
  delta: boolean;
} {
  if (request.method === "GetProperties" || request.method === "GetFullPropertyTree") {
    return {
      return_empty: true,
      delta: false, // return_empty require delta to be false to work
    };
  } else {
    return {
      delta: request.outKey !== -1 && request.outKey !== "qSuccess",
    };
  }
}

export function extractResult(request: { method: string; outKey: string | number }, resultObject: JsonObject) {
  if (typeof resultObject !== "object") {
    return resultObject;
  }

  if (request.method === "CreateSessionApp" || request.method === "CreateSessionAppFromApp") {
    // this method returns multiple out params that we need
    // to normalize before processing the response further:
    // eslint-disable-next-line no-param-reassign
    (resultObject.qReturn as JsonObject).qGenericId =
      resultObject.qSessionAppId || (resultObject.qReturn as JsonObject).qGenericId;
  } else if (
    request.method === "GetInteract" ||
    request.method === "StoreTempSelectionState" ||
    request.method === "CreateTemporaryBookmark"
  ) {
    // this method returns a qReturn value when it should only return
    // meta.outKey: GetInteract
    // qId: StoreTempSelectionState
    // eslint-disable-next-line no-param-reassign
    delete resultObject.qReturn;
  }

  if (typeof resultObject.qReturn !== "undefined") {
    return resultObject.qReturn;
  }
  if (request.outKey !== -1) {
    return resultObject[request.outKey || "qReturn"];
  }

  return resultObject;
}

export function shouldRetry(error: unknown) {
  if (error instanceof WebsocketClosedError) {
    return true;
    // TODO HANDLE RETRY LOGIC
    // const api = request.handle ? session.apis.getApi(request.handle) : undefined;
    //   if (
    //     api &&
    //     !api.isCancelled &&
    //     error.code === enums.LocalizedErrorCode.LOCERR_GENERIC_ABORTED &&
    //     retryRegexpFilter.test(request.method)
    //   ) {
    //     // eslint-disable-next-line no-param-reassign
    //     error.isHandled = true;
    //     return request.retry();
    //   }

    //   if (error.code === schema.enums.LocalizedErrorCode.LOCERR_HC_MODAL_OBJECT_ERROR) {
    //     // eslint-disable-next-line no-param-reassign
    //     error.isHandled = true;

    //     // Application is in modal state, abort modal and try rpc call again
    //     return session.app.abortModalSelection().then(() => request.retry());
    //   }
  }
  return false;
}
export function createResolvablePromise<T>(): [Promise<T>, (result: T) => void, (error: Error) => void] {
  let resolve: (result: T) => void = () => {
    throw new Error("Promise resolver not initialized");
  };
  let reject: (error: Error) => void = () => {
    throw new Error("Promise rejector not initialized");
  };
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return [promise, resolve, reject];
}
