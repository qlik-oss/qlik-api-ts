import type {
  AuthenticationErrorAction,
  AuthModule,
  GetRestCallAuthParamsProps,
  GetWebResourceAuthParamsProps,
  GetWebSocketAuthParamsProps,
  HandleAuthenticationErrorProps,
  HostConfig,
  RestCallAuthParams,
  WebResourceAuthParams,
  WebSocketAuthParams,
} from "#internal/auth/auth-types";
import { isBrowser, isNode } from "#internal/utils/utils";
import { requestRedirect } from "../page-redirect-request-listeners";
import { handleOAuthCallback } from "./oauth/callback";
import { getOAuthAccessToken, refreshAccessToken, startFullPageLoginFlow } from "./oauth/oauth-utils";
import { clearStoredOauthTokens } from "./oauth/storage-helpers";
import { exchangeAccessTokenForTemporaryToken } from "./oauth/temporary-token";

// only run this in a browser environment
if (isBrowser()) {
  // If the current page load is the result of an oauth callback `handleOAuthCallback`
  // and information in session storage verifies that it is expected, `handleOAuthCallback`
  // will take care of the incoming query parameters and potentially redirect the page again,
  // or just remove those query parameters.
  handleOAuthCallback();
}

/**
 * Retries the passed in function after calling handleAuthenticationError
 */
async function handlePotentialAuthenticationErrorAndRetry(
  hostConfig: HostConfig<"oauth2">,
  fn: () => Promise<string>,
): Promise<string> {
  try {
    return await fn();
  } catch (err) {
    const { retry } = await handleAuthenticationError({
      hostConfig,
      canRetry: true,
    });
    if (retry) {
      return fn();
    }
    throw err;
  }
}

async function getRestCallAuthParams({
  hostConfig,
}: GetRestCallAuthParamsProps<"oauth2">): Promise<RestCallAuthParams> {
  return {
    headers: {
      Authorization: `Bearer ${await getOAuthAccessToken(hostConfig)}`,
    },
    queryParams: {},
    credentials: "omit",
  };
}

async function getWebSocketAuthParams({
  hostConfig,
}: GetWebSocketAuthParamsProps<"oauth2">): Promise<WebSocketAuthParams> {
  if (isNode()) {
    return {
      headers: {
        Authorization: `Bearer ${await getOAuthAccessToken(hostConfig)}`,
      },
    };
  }

  const websocketAccessToken = await handlePotentialAuthenticationErrorAndRetry(hostConfig, async () => {
    const accessToken = await getOAuthAccessToken(hostConfig);
    return exchangeAccessTokenForTemporaryToken(hostConfig, accessToken, "websocket");
  });
  return {
    queryParams: {
      accessToken: websocketAccessToken,
    },
  };
}

async function getWebResourceAuthParams({
  hostConfig,
}: GetWebResourceAuthParamsProps<"oauth2">): Promise<WebResourceAuthParams> {
  const webResourceAccessToken = await handlePotentialAuthenticationErrorAndRetry(hostConfig, async () => {
    const accessToken = await getOAuthAccessToken(hostConfig);
    return exchangeAccessTokenForTemporaryToken(hostConfig, accessToken, "webresource");
  });
  return {
    queryParams: {
      accessToken: webResourceAccessToken,
    },
  };
}

async function handleAuthenticationError({
  hostConfig,
}: Omit<
  HandleAuthenticationErrorProps<"oauth2">,
  "headers" | "status" | "errorBody"
>): Promise<AuthenticationErrorAction> {
  if (hostConfig.getAccessToken) {
    clearStoredOauthTokens(hostConfig);
    return {
      preventDefault: false,
      retry: true,
    };
  }
  if (hostConfig.performInteractiveLogin) {
    clearStoredOauthTokens(hostConfig);
    // The external interactive login is done in the retry
    return {
      retry: true,
    };
  }
  if (isBrowser()) {
    await requestRedirect(hostConfig);
    void startFullPageLoginFlow(hostConfig);
    return {
      preventDefault: true,
    };
  }
  // Assume node environment
  await refreshAccessToken(hostConfig);

  return {
    preventDefault: false,
    retry: true,
  };
}

export default {
  requiredProps: ["clientId"],
  optionalProps: [
    "clientSecret",
    "redirectUri",
    "accessTokenStorage",
    "scope",
    "subject",
    "userId",
    "noCache",
    "getAccessToken",
    "performInteractiveLogin",
  ],
  getRestCallAuthParams,
  getWebSocketAuthParams,
  getWebResourceAuthParams,
  handleAuthenticationError,
} satisfies AuthModule<"oauth2">;
