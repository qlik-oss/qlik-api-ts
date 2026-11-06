import { AuthorizationError, InvalidHostConfigError, type AuthError } from "#internal/auth/auth-errors";
import { toValidLocationUrl } from "#internal/auth/auth-functions";
import type { HostConfig } from "#internal/auth/auth-types";
import type { PerformInteractiveLoginFn } from "#internal/global-types";
import { generateRandomString } from "#internal/utils/random";
import { isBrowser, isNode } from "#internal/utils/utils";
import { requestRedirect } from "../../page-redirect-request-listeners";
import {
  clearStoredOauthTokens,
  createStorageNamespace,
  loadAndDeleteFromSessionStorage,
  loadCachedOauthTokens,
  loadOrAcquireAccessTokenOauth,
  saveInSessionStorage,
} from "./storage-helpers";

export type OAuthData = {
  accessToken?: string;
  refreshToken?: string;
  errors?: AuthError[];
};

type OauthResponse = { access_token?: string; refresh_token?: string; errors?: AuthError[] };

type GetAccessTokenFn = () => Promise<string>;

function toPerformInteractiveLoginFunction(
  performInteractiveLogin: string | PerformInteractiveLoginFn,
): PerformInteractiveLoginFn {
  if (typeof performInteractiveLogin === "string") {
    const fn = lookupInteractiveLoginFn(performInteractiveLogin);
    if (!fn) {
      throw new Error(`No such function: ${performInteractiveLogin}`);
    }
    return fn;
  }
  return performInteractiveLogin;
}

function lookupGetAccessFn(getAccessToken: string): GetAccessTokenFn {
  return (globalThis as unknown as Record<string, GetAccessTokenFn>)[getAccessToken];
}
function lookupInteractiveLoginFn(name: string): HostConfig<"oauth2">["performInteractiveLogin"] {
  return (globalThis as unknown as Record<string, HostConfig<"oauth2">["performInteractiveLogin"]>)[name];
}
function handlePossibleErrors(data: OAuthData) {
  if (data.errors) {
    throw new AuthorizationError(data.errors);
  }
}

function toQueryString(queryParams: Record<string, string>) {
  const queryParamsKeys = Object.keys(queryParams);
  queryParamsKeys.sort();
  const query = queryParamsKeys.map((k) => `${k}=${queryParams[k]}`).join("&");
  return query;
}

function byteArrayToBase64(hashArray: number[]): string {
  let result: string;
  // environment detection
  if (isBrowser()) {
    const byteArrayToString = String.fromCharCode.apply(null, hashArray);
    result = btoa(byteArrayToString);
  } else if (isNode()) {
    result = Buffer.from(hashArray).toString("base64");
  } else {
    throw new Error("Environment not supported for oauth2 authentication");
  }

  return result;
}

/**
 * @param message string to hash
 * @returns sha-256 hashed string
 */
async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer: ArrayBuffer = await globalThis.crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashBase64 = byteArrayToBase64(hashArray);
  return hashBase64.replaceAll(/\+/g, "-").replaceAll(/\//g, "_").replace(/=+$/, "");
}

export async function createInteractiveLoginUrl(
  hostConfig: HostConfig<"oauth2">,
  redirectUri: string,
  state: string,
  verifier: string,
): Promise<string> {
  const clientId = hostConfig.clientId || "";
  const locationUrl = toValidLocationUrl(hostConfig);
  const codeChallenge = await sha256(verifier);

  const queryParams = {
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: hostConfig.scope || "user_default",
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  };

  return `${locationUrl}/oauth/authorize?${toQueryString(queryParams)}`;
}

export async function startFullPageLoginFlow(hostConfig: HostConfig<"oauth2">): Promise<void> {
  const clientId = hostConfig.clientId || "";
  const locationUrl = toValidLocationUrl(hostConfig);
  const verifier = generateRandomString(128);
  const state = generateRandomString(43);
  const codeChallenge = await sha256(verifier);
  const redirectUri = hostConfig.redirectUri || globalThis.location.href;
  const topic = createStorageNamespace(hostConfig);

  clearStoredOauthTokens(hostConfig);

  saveInSessionStorage(topic, "state", state);
  saveInSessionStorage(topic, "verifier", verifier);
  saveInSessionStorage(topic, "href", globalThis.location.href);
  saveInSessionStorage("", "client-in-progress", topic);

  const queryParams = {
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: hostConfig.scope || "user_default",
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  };

  const url = `${locationUrl}/oauth/authorize?${toQueryString(queryParams)}`;
  globalThis.location.replace(url);
}

async function exchangeCodeAndVerifierForAccessTokenData(
  hostConfig: HostConfig<"oauth2">,
  code: string,
  verifier: string,
  redirectUri: string | undefined,
): Promise<OAuthData> {
  try {
    const result = await fetch(`${toValidLocationUrl(hostConfig)}/oauth/token`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: { "content-type": "application/json" },
      redirect: "follow",
      body: JSON.stringify({
        grant_type: "authorization_code",
        scope: hostConfig.scope || "user_default",
        ...(code ? { code } : {}),
        redirect_uri: redirectUri || globalThis.location.href,
        ...(verifier ? { code_verifier: verifier } : {}),
        client_id: hostConfig.clientId,
      }),
    });

    const data = (await result.json()) as OauthResponse;

    handlePossibleErrors(data);

    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      errors: data.errors,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    // An error here means something is broken in the authentication process. Return a new promise
    // that never ever resolves. If we just throw the error it might cause an endless redirect loop
    return new Promise(() => {});
  }
}

function createBodyWithCredentialsEtc(
  clientId: string,
  clientSecret: string,
  scope: string,
  subject: string | undefined,
  userId: string | undefined,
) {
  const commonProps = {
    client_id: clientId,
    client_secret: clientSecret,
    scope,
  };
  if (subject) {
    return {
      ...commonProps,
      grant_type: "urn:qlik:oauth:user-impersonation",
      user_lookup: {
        field: "subject",
        value: subject,
      },
    };
  }
  if (userId) {
    return {
      ...commonProps,
      grant_type: "urn:qlik:oauth:user-impersonation",
      user_lookup: {
        field: "userId",
        value: userId,
      },
    };
  }
  return {
    ...commonProps,
    grant_type: "client_credentials",
  };
}

async function getOauthTokensWithCredentials(
  baseUrl: string,
  clientId: string,
  clientSecret: string,
  scope: string = "user_default",
  subject?: string,
  userId?: string,
): Promise<OAuthData | undefined> {
  const result = await fetch(`${baseUrl}/oauth/token`, {
    method: "POST",
    mode: "cors",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(createBodyWithCredentialsEtc(clientId, clientSecret, scope, subject, userId)),
  });
  const data = (await result.json()) as OauthResponse;
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    errors: data.errors,
  };
}

async function getOauthTokensWithRefreshToken(
  baseUrl: string,
  refreshToken: string,
  clientSecret: string,
): Promise<OAuthData | undefined> {
  const result = await fetch(`${baseUrl}/oauth/token`, {
    method: "POST",
    mode: "cors",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_secret: clientSecret,
    }),
  });
  const data = (await result.json()) as OauthResponse;
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    errors: data.errors,
  };
}

export async function getAnonymousOauthAccessToken(
  baseUrl: string,
  accessCode: string,
  clientId: string,
  trackingCode: string,
): Promise<OAuthData | undefined> {
  const result = await fetch(`${baseUrl}/oauth/token/anonymous-embed`, {
    method: "POST",
    mode: "cors",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      eac: accessCode,
      client_id: clientId,
      grant_type: "urn:qlik:oauth:anonymous-embed",
      tracking_code: trackingCode,
    }),
  });
  const data = (await result.json()) as OauthResponse;
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    errors: data.errors,
  };
}

/**
 * Fetches the access token from storage or memory.
 * This code is intended to run in a node environment
 */
async function getOAuthTokensForNode(hostConfig: HostConfig<"oauth2">): Promise<OAuthData | undefined> {
  const { clientId, clientSecret, performInteractiveLogin } = hostConfig;

  if (!clientId || (!clientSecret && !performInteractiveLogin)) {
    throw new InvalidHostConfigError(
      'A host config with authType set to "oauth2" has to provide a clientId and a clientSecret or a performInteractiveLogin function',
    );
  }

  const oauthTokens = await loadOrAcquireAccessTokenOauth(hostConfig, async () => {
    if (hostConfig.performInteractiveLogin) {
      return getOauthTokensWithInteractiveLogin(hostConfig);
    }

    if (!hostConfig.clientId || !hostConfig.clientSecret) {
      throw new InvalidHostConfigError(
        'A host config with authType set to "oauth2" has to provide a clientId and a clientSecret',
      );
    }
    return getOauthTokensWithCredentials(
      toValidLocationUrl(hostConfig),
      hostConfig.clientId,
      hostConfig.clientSecret,
      hostConfig.scope,
      hostConfig.subject,
      hostConfig.userId,
    );
  });
  return oauthTokens;
}

/**
 * Fetches the access token from storage or memory. If no one is found a code and verifier is expected to be found in the sesion storage
 * This code is intended to run in a browser
 */
async function getOAuthTokensForBrowser(hostConfig: HostConfig<"oauth2">): Promise<OAuthData | undefined> {
  const { clientId } = hostConfig;
  if (!clientId) {
    throw new InvalidHostConfigError('A host config with authType set to "oauth2" has to also provide a clientId');
  }
  const oauthTokens = await loadOrAcquireAccessTokenOauth(hostConfig, async () => {
    if (hostConfig.getAccessToken) {
      try {
        // Feth the access token from the backend
        const tokenFetchedFromRemote: string =
          typeof hostConfig.getAccessToken === "string"
            ? await lookupGetAccessFn(hostConfig.getAccessToken)()
            : await hostConfig.getAccessToken();
        return {
          accessToken: tokenFetchedFromRemote,
          refreshToken: undefined,
          errors: undefined,
        };
      } catch {
        return errorMessageToAuthData("Could not fetch access token using custom function");
      }
    }

    if (hostConfig.performInteractiveLogin) {
      return getOauthTokensWithInteractiveLogin(hostConfig);
    }

    const topic = createStorageNamespace(hostConfig);
    const code = loadAndDeleteFromSessionStorage(topic, "code");
    const verifier = loadAndDeleteFromSessionStorage(topic, "verifier");
    if (code && verifier) {
      const tokenResponse = await exchangeCodeAndVerifierForAccessTokenData(
        hostConfig,
        code,
        verifier,
        hostConfig.redirectUri,
      );
      if (tokenResponse) {
        return tokenResponse;
      }
    }
    return undefined;
  });
  if (oauthTokens) {
    return oauthTokens;
  }

  if (hostConfig.performInteractiveLogin) {
    // We really shouldn't end up in this state. Block so we don't end up in andless loop
    return new Promise(() => {});
  }

  await requestRedirect(hostConfig);
  void startFullPageLoginFlow(hostConfig);
  // Return a promise that will never resolve so that nothing happens in the page
  // until the browser has redirected to the login page
  return new Promise(() => {});
}

async function getOauthTokensWithInteractiveLogin(hostConfig: HostConfig<"oauth2">): Promise<OAuthData> {
  if (!hostConfig.performInteractiveLogin) {
    // We shouldn't end up here since the caller should check this, but just in case, return an error message wrapped in the expected data shape
    return errorMessageToAuthData("No performInteractiveLogin function in hostConfig");
  }
  let usedRedirectUri: string | undefined;
  try {
    const verifier = generateRandomString(128);
    const originalState = generateRandomString(43);
    const { code, state } = extractCodeAndState(
      await toPerformInteractiveLoginFunction(hostConfig.performInteractiveLogin)({
        getLoginUrl: async ({ redirectUri }) => {
          usedRedirectUri = redirectUri;
          return createInteractiveLoginUrl(hostConfig, redirectUri, originalState, verifier);
        },
      }),
    );
    if (!usedRedirectUri) {
      return errorMessageToAuthData("No redirect uri provided");
    }
    if (originalState !== state) {
      return errorMessageToAuthData("State returned by custom interactive login function does not match original");
    }
    if (!code) {
      return errorMessageToAuthData("No code found in response from custom interactive login function");
    }
    const tokenResponse = await exchangeCodeAndVerifierForAccessTokenData(hostConfig, code, verifier, usedRedirectUri);
    return tokenResponse;
  } catch (error) {
    return {
      accessToken: undefined,
      refreshToken: undefined,
      errors: [
        {
          code: "",
          status: 401,
          title: "Could not perform custom interactive login",
          detail: String(error),
        },
      ],
    };
  }
}

let lastOauthTokensCall: Promise<string> = Promise.resolve("");
export async function getOAuthAccessToken(hostConfig: HostConfig<"oauth2">): Promise<string> {
  if (isNode()) {
    const tokens = await getOAuthTokensForNode(hostConfig);
    if (tokens) {
      handlePossibleErrors(tokens);
      return tokens.accessToken || "";
    }
    return "";
  }
  if (isBrowser()) {
    lastOauthTokensCall = lastOauthTokensCall.then(async () => {
      const tokens = await getOAuthTokensForBrowser(hostConfig);
      if (tokens) {
        handlePossibleErrors(tokens);
        return tokens.accessToken || "";
      }
      return "";
    });
  }
  return lastOauthTokensCall;
}

export async function refreshAccessToken(hostConfig: HostConfig<"oauth2">): Promise<void> {
  const tokens = await loadCachedOauthTokens(hostConfig);
  // delete tokens in storage
  clearStoredOauthTokens(hostConfig);
  if (tokens && tokens.refreshToken && hostConfig.clientSecret) {
    const refreshedTokens = await loadOrAcquireAccessTokenOauth(hostConfig, async () => {
      if (!tokens || !tokens.refreshToken || !hostConfig.clientSecret) {
        throw new Error("Trying to refresh tokens without refreshToken or clientSecret");
      }
      return getOauthTokensWithRefreshToken(
        toValidLocationUrl(hostConfig),
        tokens.refreshToken,
        hostConfig.clientSecret,
      );
    });
    if (refreshedTokens) {
      handlePossibleErrors(refreshedTokens);
    }
  }
}
function extractCodeAndState(input: { code: string; state: string } | string): { code: string; state: string } {
  if (typeof input === "string") {
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(input);
    } catch {
      parsedUrl = new URL(input, "http://localhost");
    }
    const queryParams = new URLSearchParams(parsedUrl.search);
    return {
      code: queryParams.get("code") || "",
      state: queryParams.get("state") || "",
    };
  }
  return input;
}

function errorMessageToAuthData(message: string) {
  return {
    accessToken: undefined,
    refreshToken: undefined,
    errors: [
      {
        code: "",
        status: 401,
        title: message,
        detail: "",
      },
    ],
  };
}
