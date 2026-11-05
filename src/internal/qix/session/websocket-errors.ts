// Close codes of engine (Socket/WebSocket.h) and of engine-proxy (websocket close codes).

import type { OpenSessionProps } from "../internal/session-types";

// closeCodeEngineTerminating is a WebSocket close code to identify that the engine is in terminating state.
export const closeCodeEngineTerminating = 4003;
// closeCodeEngineProxyGeneric is a WebSocket close code to identify that a problem occurred in engine-proxy.
export const closeCodeEngineProxyGeneric = 4200;
// closeCodeClientTimeout is a WebSocket close code to indicate the client has closed the connection.
export const closeCodeClientTimeout = 4201;
// closeCodeBadRequest is a WebSocket close code to indicate that the provided request is invalid and/or malformed.
export const closeCodeBadRequest = 4202;
// closeCodePermissions is a WebSocket close code to indicate that the request cannot be fulfilled because of a permissions issue.
export const closeCodePermissions = 4203;
// closeCodeNotFound is a WebSocket close code to indicate that something could not be found.
export const closeCodeNotFound = 4204;
// closeCodeTooManyRequests is a WebSocket close code to indicate that too many requests have been sent in a given amount of time.
export const closeCodeTooManyRequests = 4205;
// closeCodeNetwork is a WebSocket close code to indicate networking issues.
export const closeCodeNetwork = 4206;
// closeCodeDependencyGeneric is a WebSocket close code to identify that a problem occurred in a dependency of engine-proxy.
export const closeCodeDependencyGeneric = 4210;
// closeCodeDependencyUnavailable is a WebSocket close code to identify that a dependency is unavailable and not serving any requests.
export const closeCodeDependencyUnavailable = 4211;
// closeCodeEngineGeneric is a WebSocket close code to identify that a problem occurred in an engine.
export const closeCodeEngineGeneric = 4220;
// closeCodeEntitlement is a WebSocket close code to indicate that you are not entitled to perform that operation.
export const closeCodeEntitlement = 4230;
// closeCodeNoEnginesAvailable is a WebSocket close code to indicate that there are currently no engines available.
export const closeCodeNoEnginesAvailable = 4240;
// CloseCodeSessionReservationMissing is a WebSocket close code to indicate that the reserved session is missing.
export const CloseCodeSessionReservationMissing = 4222;

export const closeCodeMessages: Record<number, string> = {
  1000: "Connection closed normally.",
  1001: "Going away.",
  1002: "Protocol error.",
  1003: "Unsupported data.",
  1005: "No status received.",
  1006: "Abnormal closure.",
  1007: "Invalid frame payload data.",
  1008: "Policy violation.",
  1009: "Message too big.",
  1010: "Mandatory extension missing.",
  1011: "Server internal error.",
  1012: "Service restart.",
  1013: "Try again later.",
  1014: "Bad gateway.",
  1015: "TLS handshake failure.",

  [closeCodeEngineTerminating]: "The engine is in terminating state",

  [closeCodeEngineProxyGeneric]: "A problem occurred in engine-proxy",

  [closeCodeClientTimeout]: "The client has closed the connection",

  [closeCodeBadRequest]: "The provided request is invalid and/or malformed",

  [closeCodePermissions]: "No permission to open the app",

  [closeCodeNotFound]: "App not found",

  [closeCodeTooManyRequests]: "Too many requests have been sent in a given amount of time",

  [closeCodeNetwork]: "Networking issues",

  [closeCodeDependencyGeneric]: "A problem occurred in a dependency of engine-proxy",

  [closeCodeDependencyUnavailable]: "A dependency is unavailable and not serving any requests",

  [closeCodeEngineGeneric]: "A problem occurred in an engine",

  [closeCodeEntitlement]: "You are not entitled to perform that operation",

  [closeCodeNoEnginesAvailable]: "There are currently no engines available",

  [CloseCodeSessionReservationMissing]: "The reserved session is missing",
};

const uknownCloseErrorMessage = "websocket closed for unknown reason";

/** Returns a human readable error message for the supplied close code */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getHumanReadableSocketClosedErrorMessage(err: any, { appId, hostConfig }: OpenSessionProps) {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
  const closeCode: number | undefined = err?.original?.code || err?.code;
  const reason: string | undefined = err?.original?.reason || err?.reason;

  const closeMessage = (closeCode && closeCodeMessages[closeCode]) || reason || err.message || uknownCloseErrorMessage;
  /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
  if (hostConfig?.host) {
    return `Failed to open app ${appId} on ${hostConfig?.host}: ${closeMessage}`;
  } else {
    return `Failed to open app ${appId}: ${closeMessage}`;
  }
}
