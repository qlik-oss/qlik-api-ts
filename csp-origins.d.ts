import { x as ApiCallOptions } from "./chunks/auth-types-yKuw6LLB.js";
import "./chunks/invoke-fetch-DdmiOIkr.js";
//#region src/public/rest/csp-origins.d.ts
export type CSPEntry = {
  /** The CSP entry's unique identifier. */
  id?: string;
} & CSPEntryContent;
export type CSPEntryContent = {
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
export type CSPEntryList = {
  data?: CSPEntry[];
  links?: {
    next?: Link;
    prev?: Link;
    self?: Link;
  };
};
export type CSPHeader = {
  /** The compiled CSP header. */
  "Content-Security-Policy"?: string;
};
export type Error = {
  /** The unique code for the error. */
  code: string;
  /** May be used to provide additional details. */
  detail?: string;
  /** A summary of what went wrong. */
  title: string;
};
export type ErrorResponse = {
  errors?: Error[];
};
export type Link = {
  /** URL to a resource request. */
  href: string;
};
/**
 * Retrieves all content security policies for a tenant.
 *
 * @param query an object with query parameters
 * @throws GetCSPEntriesHttpError
 */
export declare function getCSPEntries(query: {
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
}, options?: ApiCallOptions): Promise<GetCSPEntriesHttpResponse>;
export type GetCSPEntriesHttpResponse = {
  data: CSPEntryList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetCSPEntriesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetCSPEntriesHttpResponse>;
};
export type GetCSPEntriesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Creates a new content security policy for an origin.
 *
 * @param body an object with the body content
 * @throws CreateCSPEntryHttpError
 */
export declare function createCSPEntry(body: CSPEntryContent, options?: ApiCallOptions): Promise<CreateCSPEntryHttpResponse>;
export type CreateCSPEntryHttpResponse = {
  data: CSPEntry;
  headers: Headers;
  status: 201;
};
export type CreateCSPEntryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Retrieves the full content security policy header (including all configured policies and origins) for the tenant.
 *
 * @throws GetCSPHeaderHttpError
 */
export declare function getCSPHeader(options?: ApiCallOptions): Promise<GetCSPHeaderHttpResponse>;
export type GetCSPHeaderHttpResponse = {
  data: CSPHeader;
  headers: Headers;
  status: 200;
};
export type GetCSPHeaderHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 401 | 406 | 500 | 503;
};
/**
 * Deletes a specific content security policy.
 *
 * @param id The CSP entry's unique identifier.
 * @throws DeleteCSPEntryHttpError
 */
export declare function deleteCSPEntry(id: string, options?: ApiCallOptions): Promise<DeleteCSPEntryHttpResponse>;
export type DeleteCSPEntryHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteCSPEntryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Returns details for a specific content security policy.
 *
 * @param id The CSP entry's unique identifier.
 * @throws GetCSPEntryHttpError
 */
export declare function getCSPEntry(id: string, options?: ApiCallOptions): Promise<GetCSPEntryHttpResponse>;
export type GetCSPEntryHttpResponse = {
  data: CSPEntry;
  headers: Headers;
  status: 200;
};
export type GetCSPEntryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Updates a content security policy.
 *
 * @param id The CSP entry's unique identifier.
 * @param body an object with the body content
 * @throws UpdateCSPEntryHttpError
 */
export declare function updateCSPEntry(id: string, body: CSPEntryContent, options?: ApiCallOptions): Promise<UpdateCSPEntryHttpResponse>;
export type UpdateCSPEntryHttpResponse = {
  data: CSPEntry;
  headers: Headers;
  status: 200;
};
export type UpdateCSPEntryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Clears the cache for csp-origins api requests.
 */
export declare function clearCache(): void;
export type CspOriginsAPI = {
  /**
   * Retrieves all content security policies for a tenant.
   *
   * @param query an object with query parameters
   * @throws GetCSPEntriesHttpError
   */
  getCSPEntries: typeof getCSPEntries;
  /**
   * Creates a new content security policy for an origin.
   *
   * @param body an object with the body content
   * @throws CreateCSPEntryHttpError
   */
  createCSPEntry: typeof createCSPEntry;
  /**
   * Retrieves the full content security policy header (including all configured policies and origins) for the tenant.
   *
   * @throws GetCSPHeaderHttpError
   */
  getCSPHeader: typeof getCSPHeader;
  /**
   * Deletes a specific content security policy.
   *
   * @param id The CSP entry's unique identifier.
   * @throws DeleteCSPEntryHttpError
   */
  deleteCSPEntry: typeof deleteCSPEntry;
  /**
   * Returns details for a specific content security policy.
   *
   * @param id The CSP entry's unique identifier.
   * @throws GetCSPEntryHttpError
   */
  getCSPEntry: typeof getCSPEntry;
  /**
   * Updates a content security policy.
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
};
/**
 * Functions for the csp-origins api
 */
declare const cspOriginsExport: CspOriginsAPI;
//#endregion
export { cspOriginsExport as default };