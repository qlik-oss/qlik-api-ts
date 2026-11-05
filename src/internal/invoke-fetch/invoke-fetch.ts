/**
 * Used for performing the actual fetch call with features like handling authentication, csrf-token and caching
 * @module invoke-fetch
 */

import { clearApiCache, invokeFetch, parseFetchResponse } from "./invoke-fetch-functions";

/* -------------------------------------------------------------------------- */
/*                             invoke-fetch module                            */
/* -------------------------------------------------------------------------- */

// Export all types/classes/functions from invoke-fetch-errors.ts
export * from "./invoke-fetch-errors";

// Export all types inside invoke-fetch-types.ts
export type * from "./invoke-fetch-types";

// Export these methods on InvokeFetchAPI as named exports from invoke-fetch-functions.ts
export { clearApiCache, invokeFetch, parseFetchResponse };

/**
 * The InvokeFetchAPI interface provides the public interface for the invoke-fetch module.
 */
export interface InvokeFetchAPI {
  /**
   * Makes an HTTP call with the browser's fetch API to the endpoint configured in the call's arguments
   * @param namespace
   * @param invokeFetchProps InvokeFetchProperties
   * @param interceptors Array of interceptors to run with the fetch call
   */
  invokeFetch: typeof invokeFetch;

  /**
   * Clears cached responses for an api namespace
   * @example
   * clearNameSpaceCache("spaces"); // clears the cache for the "spaces" api
   * @param apiNamespace the api namespace to clear cache in
   */
  clearApiCache: typeof clearApiCache;

  /**
   * Function that extracts the payload from the fetch response.
   * @param fetchResponse fetch response
   * @param url to where the request as made
   * @returns parsed fetch response
   */
  parseFetchResponse: typeof parseFetchResponse;
}

/**
 * Functions for sending http request to fetch resources utilizing a cache.
 */
const invokeFetchExp: InvokeFetchAPI = {
  invokeFetch,
  clearApiCache,
  parseFetchResponse,
};

export default invokeFetchExp;
