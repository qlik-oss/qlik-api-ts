import type { ApiCallOptions } from "#internal/invoke-fetch/invoke-fetch-types";

/* -------------------------------------------------------------------------- */
/*                              http module types                             */
/* -------------------------------------------------------------------------- */

// re-export for convinience
export type { ApiCallOptions };

/**
 * Response from CachedFetch call
 */
export type CachedFetchResponse<T> = {
  // data parsed from http response body
  data: T;
  // response headers
  headers: Headers;
  // response status
  status: number;
};

/**
 * Properties for CachedFetch call
 */
export type CachedFetchProperties = {
  // http method
  method: string;
  // additional query to url, e.g. { param1: "a", param2: "b" } -> ?param1=a&param2=b
  query?: Record<string, unknown>;
  // http request body
  body?: unknown;
  // additional api call options
  options?: ApiCallOptions;
};

export default {};
