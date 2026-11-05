import { QLIK_API_VERSION_HEADER } from "#internal/http/http-constants";
import type { CacheEntry, CacheOptions, InvokeFetchResponse } from "#internal/invoke-fetch/invoke-fetch-types";

const headersExcludedFromCacheKey = new Set([QLIK_API_VERSION_HEADER.toLowerCase(), "user-agent"]);

export type CacheKeyProps = {
  url: string;
  headers?: Record<string, string>;
  serializedHostConfig: string;
};

export type CachingContext = {
  method: string;
  completeUrl: string;
  cacheKey: string;
  options?: CacheOptions;
};

type Cache = Record<string, CacheEntry>;

const responseCaches: Record<string, Cache> = {};

// Remove this once we've switched over to using QlikMain everywhere
globalThis.__API_CACHE__DO_NOT_USE_OR_YOU_WILL_BE_FIRED = responseCaches;
if (globalThis.QlikMain?.INTERNAL__DO_NOT_USE) {
  globalThis.QlikMain.INTERNAL__DO_NOT_USE.apiCache = responseCaches;
}

let defaultCacheTime = 1000 /* ms */ * 60 /* sec */ * 10; /* min */

/**
 * The global namespace is used as a fallback if an entry is not found in a specific cache.
 * This cache can be used internally, specifically by BFF interceptors,
 * where we cannot reliably map a response to an API-module.
 */
export const globalCacheNamespace = ".global";

/**
 * Gets a cached response-promise from the specified API-namespace (or global cache).
 * A promise is returned if options.noCache is not true, the promise exists and is not too
 * old (based on defaults and cache-options).
 *
 * @param api The cache-namespace of the API.
 * @param props CachingContext
 * @returns The cached response (cloned and ready to use) or undefined.
 */
export function getFromCache(api: string, props: CachingContext): Promise<InvokeFetchResponse> | undefined {
  if (isForbiddenApiName(api)) {
    throw new Error(`Forbidden api name: ${api}`);
  }
  if (props?.options?.noCache) {
    return undefined;
  }
  const { method, completeUrl, cacheKey } = props;
  const caches = getPossibleCaches(api);

  if (isModifyingOperation(method, completeUrl)) {
    return undefined;
  }

  let entry: CacheEntry | undefined;
  for (const cache of caches) {
    if (cacheKey in cache) {
      entry = cache[cacheKey];
      if (
        entry &&
        typeof entry.value !== "undefined" &&
        shouldUseCachedResult(props?.options, entry, defaultCacheTime)
      ) {
        break;
      }
      entry = undefined;
    }
  }

  if (!entry) {
    return undefined;
  }

  entry.lastHit = new Date();
  entry.hitCount += 1;
  entry.accessedPaths.add(globalThis.location ? globalThis.location.pathname : "node");

  const value = entry.value as Promise<InvokeFetchResponse>;
  return cloneResultPromise(value);
}

/**
 * Updates the cache of 'api' with the response-promise based on the caching-context.
 * If the promise comes from a modifying operation, related cache entries will be removed.
 * The returned promise is either the original promise (if it isn't cached) or a
 * cloned promise that is safe to use.
 *
 * Note: The original response-promise should not be reused directly, use the returned
 * equivalent instead.
 *
 * @private
 * @param api The cache-namespace of the API.
 * @param props CachingContext
 * @param responsePromise Promise<InvokeFetchResponse>, the thing to cache
 * @returns
 */
export function updateCache(
  api: string,
  props: CachingContext,
  responsePromise: Promise<InvokeFetchResponse>,
): Promise<InvokeFetchResponse> {
  if (isForbiddenApiName(api)) {
    throw new Error(`Forbidden api name: ${api}`);
  }
  if (!responseCaches[api]) {
    responseCaches[api] = {};
  }
  const { cacheKey } = props;
  if (isModifyingOperation(props.method, props.completeUrl)) {
    // Clear cache on OK response.
    return responsePromise.then((res) => {
      const caches = getPossibleCaches(api);
      for (const cache of caches) {
        clearRelatedCacheEntries(cache, cacheKey);
      }
      return res;
    });
  }

  const cacheNamespace = responseCaches[api];
  const responsePromiseWithCacheClearing = responsePromise.catch((error: unknown) => {
    // The precise task of this function is to delete an entry from the cache below
    delete cacheNamespace[cacheKey];
    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors -- re-throwing caught unknown error
    return Promise.reject(error);
  });
  cacheNamespace[cacheKey] = {
    lastPulled: Date.now(),
    value: responsePromiseWithCacheClearing,
    lastHit: null,
    hitCount: 0,
    accessedPaths: new Set<string>(),
  };
  return cloneResultPromise(responsePromiseWithCacheClearing);
}

/**
 * Returns true if it is ok the to use the cached promise from a previous invocation
 * @private
 */
function shouldUseCachedResult(
  options: CacheOptions | undefined,
  cacheEntry: CacheEntry | undefined,
  defaultMaxCacheTime: number,
): boolean {
  if (options?.noCache) {
    return false;
  }
  if (!cacheEntry || typeof cacheEntry.value === "undefined") {
    return false;
  }
  if (options?.useCacheIfAfter) {
    return options.useCacheIfAfter.getTime() <= cacheEntry.lastPulled;
  }
  const age = Date.now() - cacheEntry.lastPulled;
  if (typeof options?.maxCacheAge === "number") {
    return age <= options?.maxCacheAge;
  }
  return age < defaultMaxCacheTime;
}

/**
 * Builds a key used for caching based on a CachingContext
 *
 * NOTE: The `qlik-api-version` and `User-Agent` headers are intentionally not part of the key.
 * The api version only controls whether the server returns deprecation headers, not the shape
 * of the response, so responses fetched with different api versions are interchangeable. Revisit
 * this if any service starts returning version-dependent bodies.
 * @private
 * @param cachingContext
 * @returns a key used for caching
 */
export function toCacheKey({ url, headers, serializedHostConfig }: CacheKeyProps) {
  let cacheKey = url;

  const serializedHeaders = serializeHeaders(headers);
  if (serializedHeaders) {
    cacheKey = cacheKey.concat(`+headers=${serializedHeaders}`);
  }
  if (serializedHostConfig && serializedHostConfig !== "{}") {
    cacheKey = cacheKey.concat(`+host-config=${serializedHostConfig}`);
  }
  return cacheKey;
}

function serializeHeaders(headers?: Record<string, string>): string | undefined {
  if (!headers) {
    return undefined;
  }
  const h: Record<string, string> = {};
  const fields = Object.keys(headers);
  fields.sort();
  let c = 0;
  for (const field of fields) {
    const name = field.toLowerCase();
    if (headersExcludedFromCacheKey.has(name)) {
      continue;
    }
    h[name] = headers[field];
    c++;
  }
  if (c === 0) {
    return undefined;
  }
  return JSON.stringify(h);
}

/**
 * Convenience function for getting a list of caches that are OK to use
 * in the context of an API-namespace.
 * @param api
 * @returns
 */
function getPossibleCaches(api: string): Array<Cache> {
  const caches: Array<Cache> = [];
  if (responseCaches[api]) {
    caches.push(responseCaches[api]);
  }
  if (responseCaches[globalCacheNamespace]) {
    caches.push(responseCaches[globalCacheNamespace]);
  }
  return caches;
}

/**
 * @private
 * Clears all cache entries where the modifying URL starts with the cached URL
 * @param cache
 * @param cacheKey
 */
export function clearRelatedCacheEntries(cache: Record<string, CacheEntry>, cacheKey: string) {
  const modifyingUrl = cacheKeyToUrl(cacheKey);

  for (const existingCacheKey in cache) {
    const cleanUrl = cacheKeyToUrl(existingCacheKey);
    if (
      // Either up or down the path...
      modifyingUrl.startsWith(cleanUrl) ||
      cleanUrl.startsWith(modifyingUrl)
    ) {
      // the purpose of this function is precisely to delete things from the input
      // eslint-disable-next-line no-param-reassign
      delete cache[existingCacheKey];
    }
  }
}

/**
 * Removes query, headers and host-config from the cache key to get a clean URL.
 */
function cacheKeyToUrl(cachedUrl: string) {
  const queryIdx = cachedUrl.indexOf("?");
  if (queryIdx >= 0) {
    return cachedUrl.substring(0, queryIdx);
  }
  const headersIdx = cachedUrl.indexOf("+headers=");
  if (headersIdx >= 0) {
    return cachedUrl.substring(0, headersIdx);
  }
  const hostConfigIdx = cachedUrl.indexOf("+host-config=");
  if (hostConfigIdx >= 0) {
    return cachedUrl.substring(0, hostConfigIdx);
  }
  return cachedUrl;
}

/**
 * Clone mutable-objects using JSON.stringify.
 * Strings, Blobs and ReadableStreams are not cloned.
 * @private
 */
function clone(value: unknown): unknown {
  // Clone is needed to keep the cache immutable.

  // Undefined and null are immutable.
  if (typeof value === "undefined" || value === null) {
    return value;
  }

  // Blobs are readonly... we probably don't need to clone them.
  // Note: The strange value.toString condition is needed in testing where
  // for some reason a new Blob() isn't an instance of Blob. ¯\_(ツ)_/¯

  // eslint-disable-next-line @typescript-eslint/no-base-to-string -- intentional: detecting test-environment fake Blob
  if (value && (value instanceof Blob || (value instanceof Object && value.toString() === "[object Blob]"))) {
    return value;
  }

  // ReadableStreams only allow for one reader at a time. If the stream should be
  // read in multiple places at once it's currently up to the user to clone the stream,
  // e.g. using .tee()
  if (value && value instanceof ReadableStream) {
    return value;
  }

  // Strings are already immutable.
  if (typeof value === "string") {
    return value;
  }
  return JSON.parse(JSON.stringify(value));
}

/**
 * Clones the result so that no one can tamper with the cache. Note that the headers object is NOT cloned
 * @private
 */
export function cloneResultPromise(value: Promise<InvokeFetchResponse>): Promise<InvokeFetchResponse> {
  return value.then((resp) => {
    const result: InvokeFetchResponse = {
      data: clone(resp.data),
      headers: resp.headers,
      status: resp.status,
    };
    if (resp.next) {
      result.next = resp.next;
    }
    if (resp.prev) {
      result.prev = resp.prev;
    }
    return result;
  });
}

/**
 * Clears cached responses
 * @param api the api to clear cache in
 */
export function clearApiCacheInternal(api: string): void {
  responseCaches[api] = {};
}

/**
 * @private
 * Used for testing to reset the responseCache.
 */
export function clearEntireApiCacheForTesting(): void {
  for (const key of Object.keys(responseCaches)) {
    delete responseCaches[key];
  }
}

/**
 * Sets cached time, default is 10 min.
 * @param time cached time in milliseconds
 */
export function setCacheTime(time: number): void {
  defaultCacheTime = time;
}

/**
 * Returns true if the method might modify things requiring caches to be cleared
 */
function isModifyingOperation(method: string, url: string) {
  if (method === "get" || method === "GET") {
    return false;
  }
  if (url.endsWith("/api/v1/licenses/allotments") && (method === "post" || method === "POST")) {
    return false;
  }
  return true;
}

function isForbiddenApiName(api: string): boolean {
  return api === "__proto__";
}
