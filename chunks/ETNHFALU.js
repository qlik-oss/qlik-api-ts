// src/qix/session/websocket-errors.ts
var closeCodeEngineTerminating = 4003;
var closeCodeEngineProxyGeneric = 4200;
var closeCodeClientTimeout = 4201;
var closeCodeBadRequest = 4202;
var closeCodePermissions = 4203;
var closeCodeNotFound = 4204;
var closeCodeTooManyRequests = 4205;
var closeCodeNetwork = 4206;
var closeCodeDependencyGeneric = 4210;
var closeCodeDependencyUnavailable = 4211;
var closeCodeEngineGeneric = 4220;
var closeCodeEntitlement = 4230;
var closeCodeNoEnginesAvailable = 4240;
var CloseCodeSessionReservationMissing = 4222;
var closeCodeMessages = {
  1e3: "Connection closed normally.",
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
  [CloseCodeSessionReservationMissing]: "The reserved session is missing"
};
var uknownCloseErrorMessage = "websocket closed for unknown reason";
function getHumanReadableSocketClosedErrorMessage(err, { appId, hostConfig }) {
  const closeCode = err?.original?.code || err?.code;
  const reason = err?.original?.reason || err?.reason;
  const closeMessage = closeCode && closeCodeMessages[closeCode] || reason || err.message || uknownCloseErrorMessage;
  if (hostConfig?.host) {
    return `Failed to open app ${appId} on ${hostConfig?.host}: ${closeMessage}`;
  } else {
    return `Failed to open app ${appId}: ${closeMessage}`;
  }
}

export {
  getHumanReadableSocketClosedErrorMessage
};
