/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import { clearApiCache, invokeFetch, type ApiCallOptions } from "#public/invoke-fetch";

/* -------------------------------------------------------------------------- */
/*                                Public types                                */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Returns CSRF token via the qlik-csrf-token header.
 *
 * @throws GetCsrfTokenHttpError
 */
export async function getCsrfToken(options?: ApiCallOptions): Promise<GetCsrfTokenHttpResponse> {
  return invokeFetch("csrf-token", {
    method: "get",
    pathTemplate: "/api/v1/csrf-token",
    options,
  });
}

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
export function clearCache() {
  return clearApiCache("csrf-token");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

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
const csrfTokenExport: CsrfTokenAPI = { getCsrfToken, clearCache };
export default csrfTokenExport;
