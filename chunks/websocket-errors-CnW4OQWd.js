//#region src/qix/session/websocket-errors.ts
const closeCodeEngineTerminating = 4003;
const closeCodeEngineProxyGeneric = 4200;
const closeCodeClientTimeout = 4201;
const closeCodeBadRequest = 4202;
const closeCodePermissions = 4203;
const closeCodeNotFound = 4204;
const closeCodeTooManyRequests = 4205;
const closeCodeNetwork = 4206;
const closeCodeDependencyGeneric = 4210;
const closeCodeDependencyUnavailable = 4211;
const closeCodeEngineGeneric = 4220;
const closeCodeEntitlement = 4230;
const closeCodeNoEnginesAvailable = 4240;
const CloseCodeSessionReservationMissing = 4222;
const closeCodeMessages = {
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
const uknownCloseErrorMessage = "websocket closed for unknown reason";
/** Returns a human readable error message for the supplied close code */
function getHumanReadableSocketClosedErrorMessage(err, { appId, hostConfig }) {
	const closeCode = err?.original?.code || err?.code;
	const reason = err?.original?.reason || err?.reason;
	const closeMessage = closeCode && closeCodeMessages[closeCode] || reason || err.message || uknownCloseErrorMessage;
	if (hostConfig?.host) return `Failed to open app ${appId} on ${hostConfig?.host}: ${closeMessage}`;
	else return `Failed to open app ${appId}: ${closeMessage}`;
}

//#endregion
export { getHumanReadableSocketClosedErrorMessage };