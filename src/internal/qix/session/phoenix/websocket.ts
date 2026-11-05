import { toValidWebsocketLocationUrl } from "#internal/auth/auth-functions";
import { exposeInternalApiOnWindow } from "#internal/utils/expose-internal-test-apis";
import { generateRandomString } from "#internal/utils/random";
import { WebSocketError } from "#internal/web-socket/web-socket-errors";
import { createWebSocket } from "#internal/web-socket/web-socket-functions";
import type { OpenSessionProps } from "../../internal/session-types";
import type { OpenAppSessionProps } from "../../qix-types";
import { getHumanReadableSocketClosedErrorMessage } from "../websocket-errors";
import { logEvent } from "./logger";

type WebSocketListeners = {
  onClose: (ev: { code: number; reason: string }) => void;
  onMessage: (ev: MessageEvent) => void;
};

let forceUniqueSessionForTestPurposes = false;

exposeInternalApiOnWindow("makeNextWebsocketGetNewEngineSession", () => {
  forceUniqueSessionForTestPurposes = true;
});

class QixWebSocketError extends Error {
  code: number;
  reason: string;
  // oxlint-disable-next-line typescript/no-useless-default-assignment
  constructor({ code = 0, reason = "" }: { code: number; reason: string }, { appId, hostConfig }: OpenSessionProps) {
    super(getHumanReadableSocketClosedErrorMessage({ code, reason }, { appId, hostConfig }));
    this.code = code;
    this.reason = reason;
  }
}

/**
 * Creates a websocket using the appropriate authentication mechanism. Retries once if the attempt fails.
 * Resolves once
 */
export async function createQixWebSocket(
  props: OpenAppSessionProps,
  listeners: WebSocketListeners,
): Promise<WebSocket> {
  const { relativePath, queryParams } = buildQixPathAndQuery(props);
  const { appId, hostConfig } = props;

  try {
    logEvent("Creating web-socket", relativePath);
    const socketPromise = createWebSocket({ relativePath, queryParams, hostConfig, listeners });
    logEvent("Created web-socket", relativePath);
    const socket = await socketPromise;
    logEvent("Opened web-socket", relativePath);
    return socket;
  } catch (err) {
    if (err instanceof WebSocketError) {
      const { code, reason } = err;
      throw new QixWebSocketError({ code, reason }, { appId, hostConfig });
    }
    throw err;
  }
}

/**
 * Creates the path and the query-parameters, based on the OpenAppSessionProps,
 * that should be added to the host to build the full URL for the (QIX)
 * web-socket connection.
 */
function buildQixPathAndQuery({
  appId,
  identity,
  hostConfig,
  useReloadEngine = false,
  workloadType,
  ttlSeconds,
}: OpenAppSessionProps): { relativePath: string; queryParams: Record<string, unknown> } {
  const identityToUse = forceUniqueSessionForTestPurposes ? generateRandomString(16) : identity;

  if (forceUniqueSessionForTestPurposes) {
    logEvent("Forcing a new session for testing purposes");
    forceUniqueSessionForTestPurposes = false; // Reset it again so a new session is only forced once
  }
  const ttlPart = ttlSeconds !== undefined && ttlSeconds >= 0 ? `/ttl/${ttlSeconds}` : "";
  const identityPart = identityToUse ? `/identity/${identityToUse}` : "";
  const path = `/app/${appId}${identityPart}${ttlPart}`;

  const locationUrl = toValidWebsocketLocationUrl(hostConfig);
  const reloadUri = `${locationUrl}/sense/app/${appId}`;
  const query: Record<string, unknown> = {
    reloadUri,
  };
  if (useReloadEngine) {
    query["workloadType"] = "interactive-reload";
  } else if (workloadType) {
    query["workloadType"] = workloadType;
  }

  return { relativePath: path, queryParams: query };
}
