import { getWebSocketAuthParams, toValidWebsocketLocationUrl } from "#internal/auth/auth-functions";
import { exposeInternalApiOnWindow } from "#internal/utils/expose-internal-test-apis";
import { isNode } from "#internal/utils/utils";
import type { OpenAppSessionProps } from "../qix-types";
import {
  createRequestInterceptorForProgressMonitor,
  createResponseInterceptorForProgressMonitor,
  retryAbortedErrorResponseInterceptor,
  retryModalObjectError,
  somethingWithEmptyMethodsRequestInterceptor,
  somethingWithErrorPopupsResponnseInterceptor,
} from "./interceptors";
import { mixins } from "./mixins/index";
import schema from "./schema/engine-api";
import type { ProgressMonitor } from "./progress-monitor";
import { appendQueryToUrl } from "#internal/invoke-fetch/internal/invoke-fetch-helpers";

type createSocketMethod = (socketUrl: string) => WebSocket;

type sessionWithRpc = {
  rpc: {
    createSocket: createSocketMethod;
  };
};

export { mixins, schema };

/** @internal */
export async function createEnigmaSession(
  { appId, identity, hostConfig, useReloadEngine = false, ttlSeconds, workloadType }: OpenAppSessionProps,
  progressMonitor: ProgressMonitor,
): Promise<EnigmaJS.Session> {
  // Check if noauth auth type is configured
  if (hostConfig?.authType === "noauth") {
    throw new Error("WebSocket connections are not allowed with noauth auth module");
  }

  const ttlPart = ttlSeconds !== undefined && ttlSeconds >= 0 ? `/ttl/${ttlSeconds}` : "";
  const identityPart = identity ? `/identity/${identity}` : "";
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

  const baseUrl = appendQueryToUrl(`${locationUrl}${path}`, query).replace(/^http/, "ws");

  // If auth type is set to "mock-backend" we will use a mock websocket
  //@ts-expect-error ts(2339)
  const unitTestCreateWebSocket = hostConfig?.createWebSocket as ((url: string) => WebSocket) | undefined;

  // createSocketBuilder creates a new createSocket function with a new url updated with
  // new auth-params. The returned function does NOT care about its input parameter, since
  // that url will possibly be outdated for the next resume.
  let createSocketBuilder: () => Promise<createSocketMethod>;

  if (isNode()) {
    const WS = (await import("ws")).default;
    createSocketBuilder = async () => {
      let url = baseUrl;
      const { headers, queryParams, pfxOptions } = await getWebSocketAuthParams({ hostConfig });
      url = appendQueryToUrl(url, queryParams);

      return (socketUrl: string) => {
        if (unitTestCreateWebSocket) {
          return unitTestCreateWebSocket(url);
        }
        return new WS(url, undefined, {
          headers,
          ...pfxOptions,
        }) as unknown as WebSocket;
      };
    };
  } else {
    createSocketBuilder = async () => {
      let url = baseUrl;
      const { queryParams } = await getWebSocketAuthParams({ hostConfig });
      url = appendQueryToUrl(url, queryParams);

      return (socketUrl: string) => {
        const socket = new WebSocket(url);
        // Only expose this in local development or the embed test envrionment running on localhost:4000
        exposeInternalApiOnWindow("closeLastWebSocket", (code: number) => {
          console.log("Closing websocket with code", code, socket);
          socket.close(code);
        });
        return socket;
      };
    };
  }

  const { default: enigma } = await import("enigma.js");
  const session = enigma.create({
    schema,
    mixins: mixins as any,
    url: baseUrl,
    suspendOnClose: !useReloadEngine,
    createSocket: await createSocketBuilder(),
    requestInterceptors: [
      somethingWithEmptyMethodsRequestInterceptor,
      createRequestInterceptorForProgressMonitor(progressMonitor),
    ],
    responseInterceptors: [
      retryAbortedErrorResponseInterceptor,
      retryModalObjectError,
      somethingWithErrorPopupsResponnseInterceptor,
      createResponseInterceptorForProgressMonitor(progressMonitor),
    ],
  });

  session.on("notification:OnConnected", (params: { qSessionState: any }) => {
    // In the enigma.js world anything goes when it comes to types
    // @ts-expect-error 2339
    session.sessionState = params.qSessionState;
  });

  // We create our own resume function (so many resume functions!) so that
  // it replaces the createSocket function of the "rpc" object within the enigma-session
  // when "resume" is called.
  // This allows us to update the url with new credentials if needed.
  const originalResume = session.resume.bind(session);
  const resume = async (onlyIfAttached?: boolean) => {
    (session as unknown as sessionWithRpc).rpc.createSocket = await createSocketBuilder();
    await originalResume(onlyIfAttached);
  };
  session.resume = resume;
  return session;
}
