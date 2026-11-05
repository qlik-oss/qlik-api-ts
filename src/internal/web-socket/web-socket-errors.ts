const closeCodeMessages: Record<number, string> = {
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
};

const unknownCloseErrorMessage = "websocket closed for unknown reason";

export class WebSocketError extends Error {
  code: number;
  reason: string;
  // oxlint-disable-next-line typescript/no-useless-default-assignment
  constructor({ code = 0, reason = "", host }: { code: number; reason: string; host: string }) {
    super(getHumanReadableSocketClosedErrorMessage({ code, reason, host }));
    this.code = code;
    this.reason = reason;
  }
}

/** Returns a human readable error message for the supplied close code */
function getHumanReadableSocketClosedErrorMessage(err: { code: number; reason: string; host: string }) {
  const { code, reason, host } = err;
  const closeMessage = (code && closeCodeMessages[code]) || reason || unknownCloseErrorMessage;

  if (host) {
    return `Failed to open web-socket on ${host}: ${closeMessage}`;
  } else {
    return `Failed to open web-socket: ${closeMessage}`;
  }
}
