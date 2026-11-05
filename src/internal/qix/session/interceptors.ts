import type { ProgressMonitor } from "./progress-monitor";
import schema from "./schema/engine-api";
import enums from "./schema/engine-enums";

const RETURN_EMPTY_METHODS = ["GetProperties", "GetFullPropertyTree"];

// filter if the method should retry on LOCERR_GENERIC_ABORTED
// include Get methods and excludes the ones that starts with GetHyperCube* & GetListObject*
// also include OpenDoc
const retryRegexpFilter = /(?!^GetHyperCube|^GetListObject)(^Get|^Create|^OpenDoc$)/i;

/** @private */
export const somethingWithEmptyMethodsRequestInterceptor = {
  onFulfilled(sessionReference: any, request: any) {
    if (RETURN_EMPTY_METHODS.indexOf(request.method) !== -1) {
      request.return_empty = true;
      request.delta = false; // return_empty require delta to be false to work
    }
    return request;
  },
};

const observableMethods: Set<string> = new Set(["OpenDoc", "DoReload", "DoReloadEx", "DoSave"]);

/** @private */
export const createRequestInterceptorForProgressMonitor = (monitor: ProgressMonitor) => {
  return {
    onFulfilled(sessionReference: any, request: any) {
      const { method, id } = request as { method: string; id: number };
      if (observableMethods.has(method)) {
        monitor.startMonitoringProgress(method, id);
      }
      return request;
    },
  };
};

/** @private */
export const createResponseInterceptorForProgressMonitor = (monitor: ProgressMonitor) => {
  return {
    onFulfilled(sessionReference: any, request: any, response: any) {
      const { method, id } = request as { method: string; id: number };
      if (observableMethods.has(method)) {
        monitor.stopMonitoringProgress(id);
      }
      return response;
    },
    onRejected(sessionReference: any, request: any, error: any) {
      const { method, id } = request as { method: string; id: number };
      if (observableMethods.has(method)) {
        monitor.stopMonitoringProgress(id, "error");
      }
      return Promise.reject(error);
    },
  };
};

/** @private */
export const retryAbortedErrorResponseInterceptor = {
  onRejected(session: any, request: any, error: any) {
    // depends on logic in state mixin
    const api = request.handle ? session.apis.getApi(request.handle) : undefined;
    if (
      api &&
      !api.isCancelled &&
      error.code === enums.LocalizedErrorCode.LOCERR_GENERIC_ABORTED &&
      retryRegexpFilter.test(request.method)
    ) {
      // eslint-disable-next-line no-param-reassign
      error.isHandled = true;
      return request.retry();
    }
    return Promise.reject(error);
  },
};

/** @private */
export const retryModalObjectError = {
  onRejected(session: any, request: any, error: any): any {
    if (error.code === schema.enums.LocalizedErrorCode.LOCERR_HC_MODAL_OBJECT_ERROR) {
      // eslint-disable-next-line no-param-reassign
      error.isHandled = true;

      // Application is in modal state, abort modal and try rpc call again
      return session.app.abortModalSelection().then(() => request.retry());
    }
    return Promise.reject(error);
  },
};

/** @private */
export const somethingWithErrorPopupsResponnseInterceptor = {
  onRejected(session: any, request: any, error: any) {
    //  can't just swallow the error. Callers will need to know when errors occured
    return Promise.reject(error);

    // TODO GWE REMOVED THIS
    // if (error.code === errorCodes.NOT_CONNECTED) {
    //   return Promise.reject(error);
    // }
    //
    //     if (!suppressErrorDialog) {
    //       const { onError, qEvent } = sessionConfig;
    //       presentError({ error, onError, qEvent, originalEvent: "error" });
    //     }
    //     return Promise.reject(error);
    //   },
  },
};
// },
