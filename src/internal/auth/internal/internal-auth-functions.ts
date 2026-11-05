import { isHostCrossOrigin } from "#internal/auth/auth-functions";
import type { Credentials, HostConfig } from "#internal/auth/auth-types";

type GetAccessTokenFn = () => Promise<string>;

/**
 * Returns the fetch credentials string based on the host config. Note that this
 * assumes cookies are used so it should only be used by the cookie auth modes
 * @param hostConfig the HostConfig containing authentication details
 * @private
 */
export function internalGetCredentialsForCookieAuth(
  hostConfig: HostConfig<"cookie"> | HostConfig<"windowscookie">,
): Credentials {
  if (hostConfig.crossSiteCookies === false) {
    // Cross site cookies are explicitly disabled
    return "same-origin";
  }
  if (isHostCrossOrigin(hostConfig)) {
    // We are in cors mode so include cookies
    return "include";
  }
  // We are on the same origin so just set same-origin
  return "same-origin";
}

export async function resolveTokenIfPresent(
  getAccessToken: string | GetAccessTokenFn | undefined,
): Promise<string | undefined> {
  if (typeof getAccessToken === "function") {
    return getAccessToken();
  }

  if (typeof getAccessToken === "string") {
    const accessTokenFn = lookupGlobalGetAccessTokenFn(getAccessToken);
    if (typeof accessTokenFn !== "function") {
      throw new Error(
        `getAccessToken function "${getAccessToken}" not found on globalThis. Please make sure it is defined.`,
      );
    }
    return accessTokenFn();
  }
  return undefined;
}

function lookupGlobalGetAccessTokenFn(getAccessToken: string): GetAccessTokenFn {
  return (globalThis as unknown as Record<string, GetAccessTokenFn>)[getAccessToken];
}
