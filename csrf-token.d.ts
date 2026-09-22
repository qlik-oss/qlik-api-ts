import { x as ApiCallOptions } from "./chunks/auth-types-DCwmQ7fk.js";
import "./chunks/invoke-fetch-eUbA2JSu.js";
//#region src/public/rest/csrf-token.d.ts
/**
 * An error object.
 */
export type Error = {
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
export type Errors = {
  errors?: Error[];
};
/**
 * Returns CSRF token via the qlik-csrf-token header.
 *
 * @throws GetCsrfTokenHttpError
 */
export declare function getCsrfToken(options?: ApiCallOptions): Promise<GetCsrfTokenHttpResponse>;
export type GetCsrfTokenHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type GetCsrfTokenHttpError = {
  data: Errors & unknown;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Clears the cache for csrf-token api requests.
 */
export declare function clearCache(): void;
export type CsrfTokenAPI = {
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
export { csrfTokenExport as default };