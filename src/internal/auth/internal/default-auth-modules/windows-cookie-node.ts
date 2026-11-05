import { InvalidHostConfigError } from "#internal/auth/auth-errors";
import { serializeHostConfig, toValidLocationUrl } from "#internal/auth/auth-functions";
import type {
  AuthModule,
  AuthenticationErrorAction,
  GetRestCallAuthParamsProps,
  GetWebSocketAuthParamsProps,
  HandleAuthenticationErrorProps,
  HostConfig,
  RestCallAuthParams,
  WebSocketAuthParams,
} from "#internal/auth/auth-types";
import { getCsrfToken } from "#internal/http/http-functions";
import { internalGetCredentialsForCookieAuth, resolveTokenIfPresent } from "../internal-auth-functions";
import { getXrfKey } from "./windows-cookie/xrf-keys";

const nodeCookieStore = new Map<string, string>();

function clearCookieInStore(hostConfig: HostConfig) {
  const key = serializeHostConfig(hostConfig);
  nodeCookieStore.delete(key);
}
function setCookieInStore(hostConfig: HostConfig, cookie: string) {
  const key = serializeHostConfig(hostConfig);
  nodeCookieStore.set(key, cookie);
}

function getCookieInStore(hostConfig: HostConfig): string | undefined {
  const key = serializeHostConfig(hostConfig);
  return nodeCookieStore.get(key);
}

async function getCookie(hostConfig: HostConfig<"windowscookie">): Promise<string> {
  let cookie = getCookieInStore(hostConfig);
  if (!cookie) {
    const token = await resolveTokenIfPresent(hostConfig.getAccessToken);
    if (!token) {
      throw new Error("Failed to acquire access token");
    }
    const res = await fetch(`${toValidLocationUrl(hostConfig)}/qlik-embed/main.js`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    cookie = res.headers.get("Set-Cookie") || undefined;
    if (cookie) {
      setCookieInStore(hostConfig, cookie);
    }
  }
  if (!cookie) {
    throw new Error("Failed to exchange access token for cookie");
  }
  return cookie;
}

async function getRestCallAuthParams({
  hostConfig,
}: GetRestCallAuthParamsProps<"windowscookie">): Promise<RestCallAuthParams> {
  return {
    queryParams: {
      xrfkey: getXrfKey(hostConfig),
    },
    headers: {
      Cookie: await getCookie(hostConfig),
      "X-Qlik-XrfKey": getXrfKey(hostConfig),
    },
    credentials: internalGetCredentialsForCookieAuth(hostConfig),
  };
}

async function getWebSocketAuthParams({
  hostConfig,
}: GetWebSocketAuthParamsProps<"windowscookie">): Promise<WebSocketAuthParams> {
  return {
    queryParams: {
      "qlik-csrf-token": await getCsrfToken(hostConfig, true),
    },
    headers: {
      Cookie: await getCookie(hostConfig),
    },
  };
}

async function handleAuthenticationError({
  hostConfig,
}: HandleAuthenticationErrorProps<"windowscookie">): Promise<AuthenticationErrorAction> {
  clearCookieInStore(hostConfig);
  return {
    retry: true,
  };
}

/** @private */
export default {
  requiredProps: [],
  optionalProps: ["loginUri", "crossSiteCookies", "getAccessToken"],
  validateHostConfig: (hostConfig) => {
    if (typeof hostConfig.getAccessToken === "function") {
      return true;
    }
    if (typeof hostConfig.getAccessToken === "string") {
      const existsOnGlobalThis = !!(globalThis as unknown as Record<string, unknown>)[hostConfig.getAccessToken];
      if (!existsOnGlobalThis) {
        throw new InvalidHostConfigError('The "getAccessToken" function name provided does not exist on globalThis.');
      }
      return true;
    }
    throw new InvalidHostConfigError(
      'The "getAccessToken" property must be a function or the name of a globally defined function.',
    );
  },
  getRestCallAuthParams,
  getWebSocketAuthParams,
  handleAuthenticationError,
} satisfies AuthModule<"windowscookie">;
