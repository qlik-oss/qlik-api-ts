import { toValidLocationUrl } from "#internal/auth/auth-functions";
import type {
  AuthModule,
  AuthenticationErrorAction,
  GetRestCallAuthParamsProps,
  GetWebSocketAuthParamsProps,
  HandleAuthenticationErrorProps,
  RestCallAuthParams,
  WebSocketAuthParams,
} from "#internal/auth/auth-types";
import { clearCsrfToken, getCsrfToken } from "#internal/http/http-functions";
import { isNode } from "#internal/utils/utils";
import { internalGetCredentialsForCookieAuth } from "../internal-auth-functions";
import { requestRedirect } from "../page-redirect-request-listeners";

/**
 * Returns true if the verb might modify things requiring caches to be cleared
 */
function isModifyingVerb(verb: string) {
  return !(verb === "get" || verb === "GET");
}

async function getRestCallAuthParams({
  hostConfig,
  method,
}: GetRestCallAuthParamsProps<"cookie">): Promise<RestCallAuthParams> {
  const headers: Record<string, string> = {};
  if (isModifyingVerb(method)) {
    headers["qlik-csrf-token"] = await getCsrfToken(hostConfig);
  }
  if (hostConfig.webIntegrationId) {
    headers["qlik-web-integration-id"] = hostConfig.webIntegrationId;
  }
  return { headers, queryParams: {}, credentials: internalGetCredentialsForCookieAuth(hostConfig) };
}

async function getWebSocketAuthParams({
  hostConfig,
}: GetWebSocketAuthParamsProps<"cookie">): Promise<WebSocketAuthParams> {
  if (isNode()) {
    const headers: Record<string, string> = {};
    headers["qlik-csrf-token"] = await getCsrfToken(hostConfig);
    if (hostConfig.webIntegrationId) {
      headers["qlik-web-integration-id"] = hostConfig.webIntegrationId;
    }
    return { headers };
  }

  const params: Record<string, string> = {
    // Bypass the cache to get one rest call out the door that can catch a 401 since the websocket only returns a general error
    "qlik-csrf-token": await getCsrfToken(hostConfig, true),
  };
  if (hostConfig.webIntegrationId) {
    params["qlik-web-integration-id"] = hostConfig.webIntegrationId;
  }
  return { queryParams: params };
}

async function handleAuthenticationError({
  hostConfig,
  status,
}: HandleAuthenticationErrorProps<"cookie">): Promise<AuthenticationErrorAction> {
  clearCsrfToken(hostConfig);

  if (status === 403) {
    // If we are here, it means the cookie is invalid/not present so we retry
    return {
      preventDefault: false,
      retry: true,
    };
  }
  const webIntegrationParam = hostConfig.webIntegrationId
    ? `qlik-web-integration-id=${hostConfig?.webIntegrationId}&`
    : "";
  const locationUrl = toValidLocationUrl(hostConfig);

  await requestRedirect(hostConfig);

  globalThis.location.replace(
    `${locationUrl}/login?${webIntegrationParam}returnto=${encodeURIComponent(globalThis.location.href)}`,
  );
  return {
    preventDefault: true,
  };
}

/** @private */
export default {
  requiredProps: [],
  optionalProps: ["webIntegrationId", "crossSiteCookies", "anonymousMode"],
  getRestCallAuthParams,
  getWebSocketAuthParams,
  handleAuthenticationError,
} satisfies AuthModule<"cookie">;
