import { isWindows, toValidLocationUrl } from "#internal/auth/auth-functions";
import type { HostConfig } from "#internal/auth/auth-types";
import type { InvokeFetchError } from "#internal/invoke-fetch/invoke-fetch-errors";
import { clearApiCache, invokeFetch, parseFetchResponse } from "#internal/invoke-fetch/invoke-fetch-functions";
import { QLIK_CSRF_TOKEN_HEADER } from "./http-constants";
import type { CachedFetchProperties, CachedFetchResponse } from "./http-types";

/* -------------------------------------------------------------------------- */
/*                            http module functions                           */
/* -------------------------------------------------------------------------- */

/**
 * Clears the CSRF token
 * @param location an optional location that is used to clear the csrf tokens when embedded
 */
export function clearCsrfToken(hostConfig?: HostConfig): void {
  const locationUrl = toValidLocationUrl(hostConfig);
  delete csrfTokens[locationUrl];
  clearApiCache("csrf-token");
}

/**
 * Fetches the CSRF token from the server. The token is cached and will be reused for subsequent calls.
 * @param hostConfig HostConfig object containing the location url and authentication options
 * @param noCache Set to true to force a new token to be fetched
 * @returns csrf token
 */
export async function getCsrfToken(hostConfig?: HostConfig, noCache?: boolean): Promise<string> {
  const locationUrl = toValidLocationUrl(hostConfig);

  let pathTemplate: string;
  if (await isWindows(hostConfig)) {
    pathTemplate = "/qps/csrftoken";
  } else {
    pathTemplate = "/api/v1/csrf-token";
  }

  const fetchCsrfToken = async () => {
    try {
      const res = await invokeFetch("csrf-token", {
        method: "get",
        pathTemplate,
        options: {
          hostConfig,
          maxCacheAge: 5000,
          noCache,
        },
      });
      const csrfToken = res.headers.get(QLIK_CSRF_TOKEN_HEADER);
      if (!csrfToken) {
        return "";
      }
      return csrfToken;
    } catch (e) {
      const error = e as InvokeFetchError;

      // Edge auth throws a 404 if CSRF tokens are not needed which is technically not an error
      if (error.status === 404) {
        return "";
      }

      throw e;
    }
  };

  if (noCache) {
    csrfTokens[locationUrl] = fetchCsrfToken();
    return csrfTokens[locationUrl];
  }

  csrfTokens[locationUrl] = csrfTokens[locationUrl] || fetchCsrfToken();
  return csrfTokens[locationUrl];
}

export async function fetchResource<T>(resourceUrl: string): Promise<CachedFetchResponse<T>> {
  const method = "GET";
  const request: RequestInit = {
    method,
    mode: "cors",
    headers: {
      Accept: "application/json",
    },
    redirect: "follow",
  };

  if (globalThis.QlikMain?.resourceNeedsCredentials(resourceUrl)) {
    request.credentials = "include";
  }

  return fetch(resourceUrl, request).then((res) => parseFetchResponse(res, resourceUrl)) as Promise<
    CachedFetchResponse<T>
  >;
}

export async function cachedFetch<T>(
  requestUrl: string,
  props: CachedFetchProperties,
): Promise<CachedFetchResponse<T>> {
  return invokeFetch<CachedFetchResponse<T>>("cached-fetch", {
    method: props.method,
    pathTemplate: requestUrl,
    query: props.query,
    body: props.body,
    options: props.options,
  });
}

export function clearCache() {
  clearApiCache("cached-fetch");
}

/* -------------------------------------------------------------------------- */
/*                                   private                                  */
/* -------------------------------------------------------------------------- */

const csrfTokens: Record<string, Promise<string>> = {};
