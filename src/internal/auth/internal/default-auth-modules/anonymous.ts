import { AuthorizationError, InvalidHostConfigError } from "#internal/auth/auth-errors";
import { toValidLocationUrl } from "#internal/auth/auth-functions";
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
import { generateRandomHexString } from "#internal/utils/random";
import { isBrowser, isNode } from "#internal/utils/utils";
import { getAnonymousOauthAccessToken } from "./oauth/oauth-utils";
import {
  clearStoredAnonymousTokens,
  getTopicFromAnonHostConfig,
  loadFromLocalStorage,
  loadOrAcquireAccessTokenAnon,
  saveInLocalStorage,
} from "./oauth/storage-helpers";
import { exchangeAccessTokenForTemporaryToken } from "./oauth/temporary-token";

/**
 * Retries the passed in function after calling handleAuthenticationError
 */
async function handlePotentialAuthenticationErrorAndRetry(
  hostConfig: HostConfig<"anonymous">,
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

async function getOrCreateTrackingCode(hostConfig: HostConfig<"anonymous">): Promise<string> {
  let trackingCode: string | undefined;
  if (isBrowser()) {
    const topic = getTopicFromAnonHostConfig(hostConfig);
    trackingCode = loadFromLocalStorage(topic, "tracking-code");
    if (!trackingCode) {
      trackingCode = createTrackingCode();
    }
    saveInLocalStorage(topic, "tracking-code", trackingCode);
  } else {
    // Unclear how to store this if it's not a browser.
    trackingCode = createTrackingCode();
  }
  return trackingCode;
}

function createTrackingCode(): string {
  const timeStamp = Math.floor(Date.now() / 1000).toString(16);
  const randomString = generateRandomHexString(40 - timeStamp.length);
  return `${timeStamp}${randomString}`;
}

async function getAnonymousAccessToken(hostConfig: HostConfig<"anonymous">): Promise<string> {
  const { accessCode, clientId } = hostConfig;
  if (!accessCode || !clientId) {
    throw new InvalidHostConfigError(
      'A host config with authType set to "anonymous" has to provide both an accessCode and clientId',
    );
  }
  const tokens = await loadOrAcquireAccessTokenAnon(hostConfig, async () => {
    const baseUrl = toValidLocationUrl(hostConfig);
    const trackingCode = await getOrCreateTrackingCode(hostConfig);
    return getAnonymousOauthAccessToken(baseUrl, accessCode, clientId, trackingCode);
  });
  if (!tokens) {
    return "";
  }
  if (tokens.errors) {
    throw new AuthorizationError(tokens.errors);
  }
  if (tokens.accessToken) {
    return tokens.accessToken;
  }
  return "";
}

async function getRestCallAuthParams({
  hostConfig,
}: GetRestCallAuthParamsProps<"anonymous">): Promise<RestCallAuthParams> {
  return {
    headers: {
      Authorization: `Bearer ${await getAnonymousAccessToken(hostConfig)}`,
    },
    queryParams: {},
    credentials: "omit",
  };
}

async function getWebSocketAuthParams({
  hostConfig,
}: GetWebSocketAuthParamsProps<"anonymous">): Promise<WebSocketAuthParams> {
  if (isNode()) {
    return {
      headers: {
        Authorization: `Bearer ${await getAnonymousAccessToken(hostConfig)}`,
      },
    };
  }
  const websocketAccessToken = await handlePotentialAuthenticationErrorAndRetry(hostConfig, async () => {
    const accessToken = await getAnonymousAccessToken(hostConfig);
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
}: GetWebResourceAuthParamsProps<"anonymous">): Promise<WebResourceAuthParams> {
  const websocketResourceAccessToken = await handlePotentialAuthenticationErrorAndRetry(hostConfig, async () => {
    const accessToken = await getAnonymousAccessToken(hostConfig);
    return exchangeAccessTokenForTemporaryToken(hostConfig, accessToken, "websocket");
  });

  return {
    queryParams: {
      accessToken: websocketResourceAccessToken,
    },
  };
}

async function handleAuthenticationError({
  hostConfig,
}: Omit<
  HandleAuthenticationErrorProps<"anonymous">,
  "headers" | "status" | "errorBody"
>): Promise<AuthenticationErrorAction> {
  clearStoredAnonymousTokens(hostConfig);
  return {
    preventDefault: false,
    retry: true,
  };
}

export default {
  requiredProps: ["clientId", "accessCode"],
  optionalProps: [],
  getRestCallAuthParams,
  getWebSocketAuthParams,
  getWebResourceAuthParams,
  handleAuthenticationError,
} satisfies AuthModule<"anonymous">;
