import { A as ApiCallOptions } from './global.types-Xt6XzwlN.js';
import './auth-types-Bqw3vbLs.js';

type CSPEntry = {
    /** The CSP entry's unique identifier. */
    id?: string;
} & CSPEntryContent;
type CSPEntryContent = {
    /** Defines the valid sources for loading web workers and nested browsing contexts using elements such as frame and iFrame. */
    childSrc?: boolean;
    /** Restricts the URLs that can be loaded using script interfaces. */
    connectSrc?: boolean;
    /** Restricts the URLs that can be connected to websockets (all sources will be prefixed with 'wss://'). */
    connectSrcWSS?: boolean;
    /** The UTC timestamp when the CSP entry was created. */
    readonly createdDate?: string;
    /** The reason for adding this origin to the Content Security Policy. */
    description?: string;
    /** Specifies valid sources for loading fonts. */
    fontSrc?: boolean;
    /** Allow forms to be submitted to the origin. */
    formAction?: boolean;
    /** Specifies valid sources for embedding the resource using frame, iFrame, object, embed and applet. */
    frameAncestors?: boolean;
    /** Specifies valid sources for loading nested browsing contexts using elements such as frame and iFrame. */
    frameSrc?: boolean;
    /** Specifies valid sources of images and favicons. */
    imgSrc?: boolean;
    /** Specifies valid sources for loading media using the audio and video elements. */
    mediaSrc?: boolean;
    /** The UTC timestamp when the CSP entry was last modified. */
    readonly modifiedDate?: string;
    /** The name for this entry. */
    name?: string;
    /** Specifies valid sources for the object, embed, and applet elements. */
    objectSrc?: boolean;
    /** The origin that the CSP directives should be applied to. */
    origin: string;
    /** Specifies valid sources for JavaScript. */
    scriptSrc?: boolean;
    /** Specifies valid sources for stylesheets. */
    styleSrc?: boolean;
    /** Specifies valid sources for Worker, SharedWorker, or ServiceWorker scripts. */
    workerSrc?: boolean;
};
type CSPEntryList = {
    data?: CSPEntry[];
    links?: {
        next?: Link;
        prev?: Link;
        self?: Link;
    };
};
type CSPHeader = {
    /** The compiled CSP header. */
    "Content-Security-Policy"?: string;
};
type Error = {
    /** The unique code for the error. */
    code: string;
    /** May be used to provide additional details. */
    detail?: string;
    /** A summary of what went wrong. */
    title: string;
};
type ErrorResponse = {
    errors?: Error[];
};
type Link = {
    /** URL to a resource request. */
    href: string;
};
/**
 * Retrieves all CSP entries for a tenant
 *
 * @param query an object with query parameters
 * @throws GetCSPEntriesHttpError
 */
declare const getCSPEntries: (query: {
    /** Filter resources by directive 'childSrc', true/false. */
    childSrc?: boolean;
    /** Filter resources by directive 'connectSrc', true/false. */
    connectSrc?: boolean;
    /** Filter resources by directive 'connectSrcWSS', true/false. */
    connectSrcWSS?: boolean;
    /** Filter resources by directive 'fontSrc', true/false. */
    fontSrc?: boolean;
    /** Filter resources by directive 'formAction', true/false. */
    formAction?: boolean;
    /** Filter resources by directive 'frameAncestors', true/false. */
    frameAncestors?: boolean;
    /** Filter resources by directive 'frameSrc', true/false. */
    frameSrc?: boolean;
    /** Filter resources by directive 'imgSrc', true/false. */
    imgSrc?: boolean;
    /** Maximum number of CSP-Origins to retrieve. */
    limit?: number;
    /** Filter resources by directive 'mediaSrc', true/false. */
    mediaSrc?: boolean;
    /** Filter resources by name (wildcard and case insensitive). */
    name?: string;
    /** Cursor to the next page. */
    next?: string;
    /** Filter resources by directive 'objectSrc', true/false. */
    objectSrc?: boolean;
    /** Filter resources by origin (wildcard and case insensitive). */
    origin?: string;
    /** Cursor to previous next page. */
    prev?: string;
    /** Filter resources by directive 'scriptSrc', true/false. */
    scriptSrc?: boolean;
    /** Field to sort by, prefix with -/+ to indicate order. */
    sort?: "name" | "-name" | "origin" | "-origin" | "createdDate" | "-createdDate" | "modifiedDate" | "-modifiedDate";
    /** Filter resources by directive 'styleSrc', true/false. */
    styleSrc?: boolean;
    /** Filter resources by directive 'workerSrc', true/false. */
    workerSrc?: boolean;
}, options?: ApiCallOptions) => Promise<GetCSPEntriesHttpResponse>;
type GetCSPEntriesHttpResponse = {
    data: CSPEntryList;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetCSPEntriesHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetCSPEntriesHttpResponse>;
};
type GetCSPEntriesHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Creates a new CSP entry
 *
 * @param body an object with the body content
 * @throws CreateCSPEntryHttpError
 */
declare const createCSPEntry: (body: CSPEntryContent, options?: ApiCallOptions) => Promise<CreateCSPEntryHttpResponse>;
type CreateCSPEntryHttpResponse = {
    data: CSPEntry;
    headers: Headers;
    status: number;
};
type CreateCSPEntryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves the CSP header for a tenant
 *
 * @throws GetCSPHeaderHttpError
 */
declare const getCSPHeader: (options?: ApiCallOptions) => Promise<GetCSPHeaderHttpResponse>;
type GetCSPHeaderHttpResponse = {
    data: CSPHeader;
    headers: Headers;
    status: number;
};
type GetCSPHeaderHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Deletes a specific CSP entry
 *
 * @param id The CSP entry's unique identifier.
 * @throws DeleteCSPEntryHttpError
 */
declare const deleteCSPEntry: (id: string, options?: ApiCallOptions) => Promise<DeleteCSPEntryHttpResponse>;
type DeleteCSPEntryHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteCSPEntryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Returns details for a specific CSP entry
 *
 * @param id The CSP entry's unique identifier.
 * @throws GetCSPEntryHttpError
 */
declare const getCSPEntry: (id: string, options?: ApiCallOptions) => Promise<GetCSPEntryHttpResponse>;
type GetCSPEntryHttpResponse = {
    data: CSPEntry;
    headers: Headers;
    status: number;
};
type GetCSPEntryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Updates a CSP entry
 *
 * @param id The CSP entry's unique identifier.
 * @param body an object with the body content
 * @throws UpdateCSPEntryHttpError
 */
declare const updateCSPEntry: (id: string, body: CSPEntryContent, options?: ApiCallOptions) => Promise<UpdateCSPEntryHttpResponse>;
type UpdateCSPEntryHttpResponse = {
    data: CSPEntry;
    headers: Headers;
    status: number;
};
type UpdateCSPEntryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for csp-origins api requests.
 */
declare function clearCache(): void;
interface CspOriginsAPI {
    /**
     * Retrieves all CSP entries for a tenant
     *
     * @param query an object with query parameters
     * @throws GetCSPEntriesHttpError
     */
    getCSPEntries: typeof getCSPEntries;
    /**
     * Creates a new CSP entry
     *
     * @param body an object with the body content
     * @throws CreateCSPEntryHttpError
     */
    createCSPEntry: typeof createCSPEntry;
    /**
     * Retrieves the CSP header for a tenant
     *
     * @throws GetCSPHeaderHttpError
     */
    getCSPHeader: typeof getCSPHeader;
    /**
     * Deletes a specific CSP entry
     *
     * @param id The CSP entry's unique identifier.
     * @throws DeleteCSPEntryHttpError
     */
    deleteCSPEntry: typeof deleteCSPEntry;
    /**
     * Returns details for a specific CSP entry
     *
     * @param id The CSP entry's unique identifier.
     * @throws GetCSPEntryHttpError
     */
    getCSPEntry: typeof getCSPEntry;
    /**
     * Updates a CSP entry
     *
     * @param id The CSP entry's unique identifier.
     * @param body an object with the body content
     * @throws UpdateCSPEntryHttpError
     */
    updateCSPEntry: typeof updateCSPEntry;
    /**
     * Clears the cache for csp-origins api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the csp-origins api
 */
declare const cspOriginsExport: CspOriginsAPI;

export { type CSPEntry, type CSPEntryContent, type CSPEntryList, type CSPHeader, type CreateCSPEntryHttpError, type CreateCSPEntryHttpResponse, type CspOriginsAPI, type DeleteCSPEntryHttpError, type DeleteCSPEntryHttpResponse, type Error, type ErrorResponse, type GetCSPEntriesHttpError, type GetCSPEntriesHttpResponse, type GetCSPEntryHttpError, type GetCSPEntryHttpResponse, type GetCSPHeaderHttpError, type GetCSPHeaderHttpResponse, type Link, type UpdateCSPEntryHttpError, type UpdateCSPEntryHttpResponse, clearCache, createCSPEntry, cspOriginsExport as default, deleteCSPEntry, getCSPEntries, getCSPEntry, getCSPHeader, updateCSPEntry };
