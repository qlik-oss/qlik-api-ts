import { isHostCrossOrigin } from "#internal/auth/auth-functions";
import type { HostConfig } from "#internal/auth/auth-types";
import type { CacheEntry, InvokeFetchResponse } from "#internal/invoke-fetch/invoke-fetch-types";
import { getPlatform } from "#internal/platform/platform-functions";
import { isBrowser, isDevelopment } from "#internal/utils/utils";

/** The set of valid quarter-month suffixes defined by the API versioning policy. */
const VALID_QUARTER_MONTHS = new Set(["02", "05", "08", "11"]);

/** Matches `YYYY-MM` where the year is 4 digits and the month is 2 digits. */
const API_VERSION_REGEX = /^(\d{4})-(0[1-9]|1[0-2])$/;

/**
 * Returns `true` when `version` is a valid `qlik-api-version` value.
 *
 * Valid values are:
 * - `"latest"` — always treated as acknowledging the most recent release; no deprecation headers are returned.
 * - `"YYYY-MM"` where MM ∈ `{ "02", "05", "08", "11" }` — a stable quarterly release date.
 *
 * Invalid or unrecognised values are handled server-side by falling back to the oldest supported
 * release, but passing them is still an error in the calling code.
 */
export function isValidApiVersion(version: string): boolean {
  if (version === "latest") {
    return true;
  }
  const match = API_VERSION_REGEX.exec(version);
  if (!match) {
    return false;
  }
  return VALID_QUARTER_MONTHS.has(match[2]);
}

export async function canSendApiVersionHeader(hostConfig: HostConfig): Promise<boolean> {
  const platform = await getPlatform({ hostConfig });
  if (!platform.isCloud) {
    return false;
  }
  if (isBrowser() && isHostCrossOrigin(hostConfig) && platform.isQCG) {
    return false;
  }
  return true;
}

/**
 * Appends the specified query parameters (encoded) to the provided url.
 * @private
 */
export function appendQueryToUrl(url: string, queryParams?: Record<string, unknown>): string {
  if (!queryParams) {
    return url;
  }
  if (Object.keys(queryParams).length === 0) {
    return url;
  }
  const queryString = encodeQueryParams(queryParams);
  let firstQueryDelim: string;
  if (url.indexOf("?") === -1) {
    firstQueryDelim = "?";
  } else {
    firstQueryDelim = "&";
  }
  return `${url}${firstQueryDelim}${queryString}`;
}

/**
 * Encode the query map into a query string
 * @private
 */
export function encodeQueryParams(query?: Record<string, unknown>): string {
  if (!query) {
    return "";
  }
  const devMode = isDevelopment();
  const keys = Object.keys(query);
  keys.sort();
  return keys
    .map((k) => {
      const value = query[k];
      // Prevent keys with undefined from being included
      if (value === undefined) {
        return undefined;
      }
      return `${encodeURIComponent(tryDecodeURIComponent(k, devMode))}=${encodeURIComponent(tryDecodeURIComponent(value, devMode))}`;
    })
    .filter(Boolean)
    .join("&");
}

// tryDecodeURIComponent decodes a URI component if it's a string that seems to be pre-encoded.
function tryDecodeURIComponent(val: unknown, devMode?: boolean) {
  if (typeof val !== "string") {
    return String(val);
  }
  try {
    const pattern = /^(?:[^%]|%[0-9A-Fa-f]{2})*$/;
    if (pattern.test(val)) {
      const decoded = decodeURIComponent(val);
      if (decoded !== val && devMode) {
        // eslint-disable-next-line no-console
        console.warn("[Qlik] Usage of pre-encoded query parameters is strongly discouraged.");
      }
      return decoded;
    }
  } catch {}
  return val;
}

/**
 * Replaces the variable placeholders in the path template with the variable values
 * @param pathTemplate
 * @param pathVariables
 * @private
 */
export function applyPathVariables(pathTemplate: string, pathVariables?: Record<string, string> | null) {
  let result = pathTemplate;

  if (pathVariables) {
    Object.keys(pathVariables).forEach((key) => {
      result = result.replace(`{${key}}`, pathVariables[key]);
    });
  }
  return result;
}

/**
 * Adds the query params that aren't already present in the query string of the url
 * @private
 * @returns the url and the query params that were added to it
 */
export function addMissingQueryParams(
  url: string,
  query: Record<string, string>,
): { url: string; added: Record<string, string> } {
  const queryStart = url.indexOf("?");
  const existing = new URLSearchParams(queryStart === -1 ? "" : url.slice(queryStart + 1));
  const added = Object.fromEntries(Object.entries(query).filter(([name]) => !existing.has(name)));
  const queryString = encodeQueryParams(added);
  if (queryString === "") {
    return { url, added };
  }
  return { url: `${url}${queryStart === -1 ? "?" : "&"}${queryString}`, added };
}

/**
 * if the response is any kind of error clear the cached value for that completeUrl
 * @private
 */
export function clearCacheOnError<T extends InvokeFetchResponse>(
  cacheEntry: Record<string, CacheEntry>,
  cacheKey: string,
  value: Promise<T>,
): Promise<InvokeFetchResponse> {
  return value.catch((error: unknown) => {
    // The precise task if this function is to delete an entry from the cache below
    // eslint-disable-next-line no-param-reassign
    delete cacheEntry[cacheKey];
    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors -- re-throwing caught error of unknown type
    return Promise.reject(error);
  });
}

/**
 * If the result is a 401 the promise chain will be stopped and the action callback will be called
 * @private
 */
export function interceptAndStopOn401<T extends InvokeFetchResponse>(
  response: Promise<T>,
  action: () => void,
): Promise<InvokeFetchResponse> {
  // Return a brand new promise that we can choose never to resolve!
  return new Promise((resolve, reject) => {
    response
      .then((result) => {
        // Just forward the result
        resolve(result);
      })
      .catch((error: unknown) => {
        const err = error as InvokeFetchResponse;
        if (err.status === 401) {
          action();
        } else {
          // Just forward the error
          // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors -- re-throwing caught error of unknown type
          reject(error);
        }
      });
  });
}

/**
 * Returns true if the status code is 301 or 302 or for ..../qps/csrftoken with 403 which really should be 401 on windows but isn't for historical reasons
 */
export function means401OnWindows(completeUrl: string, statusCode: number): boolean {
  const url = new URL(completeUrl, "http://dummy"); // Base is required to parse relative URLs
  const isQpsCsrfTokenUrl = url.pathname.endsWith("/qps/csrftoken") && url.searchParams.has("xrfkey");
  return statusCode === 301 || statusCode === 302 || (isQpsCsrfTokenUrl && statusCode === 403);
}
