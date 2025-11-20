import { y as ApiCallOptions } from "./auth-types-CHOUViJI.js";

//#region src/public/rest/csrf-token.d.ts

/**
 * An error object.
 */
type Error = {
  /** The error code. */
  code: string;
  /** The detailed error message */
  detail?: string;
  /** Non-standard information about the error */
  meta?: unknown;
  /** The http status code. */
  status?: string;
  /** The error title. */
  title: string;
};
/**
 * A representation of the errors encountered from the HTTP request.
 */
type Errors = {
  errors?: Error[];
};
/**
 * Returns CSRF token via the qlik-csrf-token header.
 *
 * @throws GetCsrfTokenHttpError
 */
declare function getCsrfToken(options?: ApiCallOptions): Promise<GetCsrfTokenHttpResponse>;
type GetCsrfTokenHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type GetCsrfTokenHttpError = {
  data: Errors & unknown;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Clears the cache for csrf-token api requests.
 */
declare function clearCache(): void;
type CsrfTokenAPI = {
  /**
   * Returns CSRF token via the qlik-csrf-token header.
   *
   * @throws GetCsrfTokenHttpError
   */
  getCsrfToken: typeof getCsrfToken;
  /**
   * Clears the cache for csrf-token api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the csrf-token api
 */
declare const csrfTokenExport: CsrfTokenAPI;
//#endregion
export { GetCsrfTokenHttpResponse as a, getCsrfToken as c, GetCsrfTokenHttpError as i, Error as n, clearCache as o, Errors as r, csrfTokenExport as s, CsrfTokenAPI as t };