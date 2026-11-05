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
import { getCsrfToken } from "#internal/http/http-functions";
import { internalGetCredentialsForCookieAuth, resolveTokenIfPresent } from "../internal-auth-functions";
import { requestRedirect } from "../page-redirect-request-listeners";
import { getXrfKey } from "./windows-cookie/xrf-keys";

async function getRestCallAuthParams({
  hostConfig,
}: GetRestCallAuthParamsProps<"windowscookie">): Promise<RestCallAuthParams> {
  return {
    headers: {
      "X-Qlik-XrfKey": getXrfKey(hostConfig),
    },
    queryParams: {
      xrfkey: getXrfKey(hostConfig),
    },
    credentials: internalGetCredentialsForCookieAuth(hostConfig),
  };
}

async function getWebSocketAuthParams({
  hostConfig,
}: GetWebSocketAuthParamsProps<"windowscookie">): Promise<WebSocketAuthParams> {
  return {
    queryParams: {
      xrfkey: getXrfKey(hostConfig),
      "qlik-csrf-token": await getCsrfToken(hostConfig, true),
    },
  };
}

async function handleAuthenticationError({
  hostConfig,
}: HandleAuthenticationErrorProps<"windowscookie">): Promise<AuthenticationErrorAction> {
  if (hostConfig.loginUri) {
    await requestRedirect(hostConfig);

    globalThis.location.replace(
      hostConfig.loginUri.replace("{location}", encodeURIComponent(globalThis.location.href)),
    );
    return {
      preventDefault: true,
    };
  }
  if (hostConfig.getAccessToken) {
    const token = await resolveTokenIfPresent(hostConfig.getAccessToken);
    if (token) {
      // Make a request with the token to set the windows auth cookie
      await fetch(`${toValidLocationUrl(hostConfig)}/qlik-embed/main.js`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-cache",
      });
      return {
        retry: true,
      };
    }
  }
  return {
    // Do nothing, just let the error be thrown to calling code
  };
}

/** @private */
export default {
  requiredProps: [],
  optionalProps: ["loginUri", "crossSiteCookies", "getAccessToken"],
  getRestCallAuthParams,
  getWebSocketAuthParams,
  handleAuthenticationError,
} satisfies AuthModule<"windowscookie">;
