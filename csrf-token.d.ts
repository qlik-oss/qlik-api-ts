import { A as ApiCallOptions } from './invoke-fetch-types-X7m1IIvI.js';
import './auth-types-Btwi7CsB.js';

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
declare const getCsrfToken: (options?: ApiCallOptions) => Promise<GetCsrfTokenHttpResponse>;
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
interface CsrfTokenAPI {
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
}
/**
 * Functions for the csrf-token api
 */
declare const csrfTokenExport: CsrfTokenAPI;

export { type CsrfTokenAPI, type Error, type Errors, type GetCsrfTokenHttpError, type GetCsrfTokenHttpResponse, clearCache, csrfTokenExport as default, getCsrfToken };
