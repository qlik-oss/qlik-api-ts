/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */

/** Logs websocket traffic and events. It only relies on the shape of JSON-RPC frames, so any session implementation can use it. */

type LoggedRequest = { id: number };
type LoggedParams = unknown[] | Record<string, unknown>;
/** The parts of a phoenix remote object used to name it in the log */
type LoggedObject = {
  id?: string;
  getHandle(): number;
  respawnInfo?: { creatingRequest?: { params?: LoggedParams } };
};

const ongoingRequests = new Set<number>();
const requestDepths = new Map<number, number>();
const startIntent = 0;
const baseIndent = "      ";

let logEnabled = false;
try {
  // @ts-expect-error ts(7017)
  logEnabled = globalThis.qlikQixWebSocketLogEnabled || localStorage?.getItem("qlik-qix-websocket-log") === "true";
} catch {
  // Better safe than sorry
}

export function logRequest(
  handleOrObject: number | { getHandle(): number },
  websocketRequest: LoggedRequest,
  request: { method: string; params: LoggedParams },
) {
  if (logEnabled) {
    const indent = startIndent(websocketRequest);
    const preThing = `${indent} ===> ${websocketRequest.id} call `;

    console.log(`${preThing}${toLogName(handleOrObject)}.${request.method}`, ...formatParams(request.params));
  }
}

export function logResponse(
  handleOrObject: number | { getHandle(): number },
  websocketRequest: LoggedRequest,
  sendResponse: {
    result?: unknown;
    change?: Array<number>;
    close?: Array<number>;
    error?: {
      message?: string;
      code?: number;
      parameter?: string;
    };
  },
) {
  if (logEnabled) {
    const indent = endIndent(websocketRequest);

    if (sendResponse?.change) {
      console.log(`${indent} <--- ${websocketRequest.id} Changed: ${sendResponse.change.join(", ")}`);
    }
    if (sendResponse?.close) {
      console.log(`${indent} <--- ${websocketRequest.id} Closed:  ${sendResponse.close.join(", ")}`);
    }

    const preThing = `${indent} <=== ${websocketRequest.id} return`;
    if (sendResponse.error) {
      console.log(preThing, JSON.stringify(sendResponse.error));
    } else {
      console.log(preThing, sendResponse.result);
    }
  }
}

export function logJsonRpcChannelError(
  handleOrObject: number | { getHandle(): number },
  websocketRequest: LoggedRequest,
  error: unknown,
) {
  if (logEnabled) {
    const indent = endIndent(websocketRequest);
    const preThing = `${indent} <=== ${websocketRequest.id} throw`;
    console.log(preThing, JSON.stringify(error));
  }
}

export function logEvent(message?: any, ...optionalParams: any[]) {
  if (logEnabled) {
    console.log("QIX", message, ...optionalParams);
  }
}

function startIndent(websocketRequest: LoggedRequest) {
  ongoingRequests.add(websocketRequest.id);
  requestDepths.set(websocketRequest.id, ongoingRequests.size);
  const indent = baseIndent.repeat(startIntent + ongoingRequests.size);
  return indent;
}

function endIndent(websocketRequest: LoggedRequest) {
  const indent = baseIndent.repeat(startIntent + (requestDepths.get(websocketRequest.id) || 0));
  ongoingRequests.delete(websocketRequest.id);
  requestDepths.delete(websocketRequest.id);
  return indent;
}

function toLogName(handleOrObject: number | { getHandle(): number }): any {
  if (handleOrObject === 1) {
    return "Doc";
  } else if (handleOrObject === -1) {
    return "Global";
  } else if (typeof handleOrObject === "undefined") {
    return "(undefined handle)";
  } else if (typeof handleOrObject === "object") {
    const obj = handleOrObject as LoggedObject;
    if (!obj.id) {
      const params = obj.respawnInfo?.creatingRequest?.params;
      if (Array.isArray(params)) {
        return params?.filter((arg) => typeof arg === "string").join("/");
      }
    }
    return `${obj.id}/${obj.getHandle()}`;
  } else {
    return handleOrObject;
  }
}

function formatParams(params: LoggedParams): unknown[] {
  if (Array.isArray(params)) {
    const result: unknown[] = ["("];
    for (let i = 0; i < params.length; i++) {
      result.push(params[i]);
      if (i < params.length - 1) {
        result.push(",");
      }
    }
    result.push(")");
    return result;
  } else {
    return [params];
  }
}
