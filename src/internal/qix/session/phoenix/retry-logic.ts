import schema from "../schema/engine-api";
import { QixError, type QixConnection, type QixRequest } from "./qix-connection";

// filter if the method should retry on LOCERR_GENERIC_ABORTED
// include Get methods and excludes the ones that starts with GetHyperCube* & GetListObject*
// also include OpenDoc
const retryRegexpFilter = /(?!^GetHyperCube|^GetListObject)(^Get|^Create|^OpenDoc$)/i;

export function shouldRetryRequest(
  request: QixRequest,
  error: unknown,
): {
  retry: boolean;
  retryPrepAction?: (props: { connection: QixConnection; appHandle: number }) => Promise<unknown>;
} {
  if (error instanceof QixError) {
    // Do not retry if the request is cancalled
    if (error.isCancelled) {
      return { retry: false };
    }
    // Do not retry if the request dooes not match the retry filter
    if (!retryRegexpFilter.test(request.method)) {
      return { retry: false };
    }

    // Retry aborted request
    if (error.code === schema.enums.LocalizedErrorCode.LOCERR_GENERIC_ABORTED) {
      return {
        retry: true,
      };
    }

    // Retry requests that got a "modal error" after aborting the modal selection mode
    if (error.code === schema.enums.LocalizedErrorCode.LOCERR_HC_MODAL_OBJECT_ERROR) {
      return {
        retry: true,
        retryPrepAction: async ({ connection, appHandle }) => {
          // Before we retry the request, we need to abort the modal selection
          return connection.invoke(appHandle, { method: "abortModalSelection", params: [] });
        },
      };
    }
    return { retry: false };
  }
  return { retry: true };
}

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
