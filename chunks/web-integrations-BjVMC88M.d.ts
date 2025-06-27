import { ApiCallOptions } from "./auth-types-BlCWK0FP.js";

//#region src/public/rest/web-integrations.d.ts

/**
 * An error object describing the error.
 */
type Error = {
  /** The error code. */
  code: string;
  /** A human-readable explanation specific to this occurrence of the error. */
  detail?: string;
  /** Additional properties relating to the error. */
  meta?: unknown;
  /** References to the source of the error. */
  source?: {
    /** The URI query parameter that caused the error. */
    parameter?: string;
    /** A JSON Pointer to the property that caused the error. */
    pointer?: string;
  };
  /** The HTTP status code. */
  status: string;
  /** Summary of the problem. */
  title: string;
};
/**
 * The error response object describing the error from the handling of an HTTP request.
 * @example
 * {
 *   errors: [
 *     {
 *       code: "TENANTS-8",
 *       title: "Not found"
 *     }
 *   ],
 *   traceId: "000000000000000079cf1ebeae103de1"
 * }
 */
type Errors = {
  /** An array of errors related to the operation. */
  errors?: Error[];
  /** A unique identifier for tracing the error. */
  traceId?: string;
};
/**
 * A web integration object.
 */
type WebIntegration = {
  /** The time the web integration was created. */
  readonly created?: string;
  /** The user that created the web integration. */
  readonly createdBy?: string;
  /** The unique web integration identifier. */
  readonly id?: string;
  /** The time the web integration was last updated. */
  readonly lastUpdated?: string;
  /** The name of the web integration. */
  name?: string;
  /** The tenant that the web integration belongs to. */
  tenantId?: string;
  /** The origins that are allowed to make requests to the tenant. */
  validOrigins?: string[];
};
/**
 * A JSON Patch document as defined in http://tools.ietf.org/html/rfc6902.
 */
type WebIntegrationPatch = {
  /** The operation to be performed. */
  op: "replace";
  /** A JSON Pointer. */
  path: "/name" | "/validOrigins";
  /** New value to be used for this operation. */
  value: string;
};
/**
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/name",
 *     value: "New name"
 *   }
 * ]
 */
type WebIntegrationPatchSchema = WebIntegrationPatch[];
/**
 * The creation of a web integration response.
 */
type WebIntegrationPost = {
  /** The time the web integration was created. */
  readonly created?: string;
  /** The user that created the web integration. */
  readonly createdBy?: string;
  /** The unique web integration identifier. */
  readonly id?: string;
  /** The time the web integration was last updated. */
  readonly lastUpdated?: string;
  /** Pagination links */
  links?: {
    /** Link information for current page. */
    self: {
      /** URL to the current page of records. */
      href: string;
    };
  };
  /** The name of the newly created web integration. */
  name?: string;
  /** The tenant that the web integration belongs to. */
  tenantId?: string;
  /** The origins that are allowed to make requests to the tenant. */
  validOrigins?: string[];
};
type WebIntegrationPostSchema = {
  /** The name of the web integration to create. */
  name: string;
  /** The origins that are allowed to make requests to the tenant. */
  validOrigins?: string[];
};
/**
 * An array of web integration objects.
 */
type WebIntegrations = {
  /** Properties of web integrations in a given tenant. */
  data?: WebIntegration[];
  /** Pagination links */
  links?: {
    /** Link information for next page. */
    next?: {
      /** URL to the next page of records. */
      href: string;
    };
    /** Link information for previous page. */
    prev?: {
      /** URL to the previous page of records. */
      href: string;
    };
    /** Link information for current page. */
    self: {
      /** URL to the current page of records. */
      href: string;
    };
  };
};
/**
 * Retrieves web integrations matching the query.
 *
 * @param query an object with query parameters
 * @throws GetWebIntegrationsHttpError
 */
declare function getWebIntegrations(query: {
  /** The target web integration ID to start looking before for web integrations. Cannot be used in conjunction with startingAfter. */
  endingBefore?: string;
  /** The number of web integration entries to retrieve. */
  limit?: number;
  /** The field to sort by. Prefix with +/- to indicate ascending/descending order. */
  sort?: "name" | "+name" | "-name";
  /** The target web integration ID to start looking after for web integrations. Cannot be used in conjunction with endingBefore. */
  startingAfter?: string;
  /** The tenant ID to filter by. */
  tenantId?: string;
}, options?: ApiCallOptions): Promise<GetWebIntegrationsHttpResponse>;
type GetWebIntegrationsHttpResponse = {
  data: WebIntegrations;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetWebIntegrationsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetWebIntegrationsHttpResponse>;
};
type GetWebIntegrationsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Creates a web integration.
 *
 * @param body an object with the body content
 * @throws CreateWebIntegrationHttpError
 */
declare function createWebIntegration(body: WebIntegrationPostSchema, options?: ApiCallOptions): Promise<CreateWebIntegrationHttpResponse>;
type CreateWebIntegrationHttpResponse = {
  data: WebIntegrationPost;
  headers: Headers;
  status: 201;
};
type CreateWebIntegrationHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Deletes a single web integration by ID.
 *
 * @param id The ID of the web integration to delete.
 * @throws DeleteWebIntegrationHttpError
 */
declare function deleteWebIntegration(id: string, options?: ApiCallOptions): Promise<DeleteWebIntegrationHttpResponse>;
type DeleteWebIntegrationHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteWebIntegrationHttpError = {
  data: Errors;
  headers: Headers;
  status: 404;
};
/**
 * Retrieves a single web integration by ID.
 *
 * @param id The ID of the web integration to retrieve.
 * @throws GetWebIntegrationHttpError
 */
declare function getWebIntegration(id: string, options?: ApiCallOptions): Promise<GetWebIntegrationHttpResponse>;
type GetWebIntegrationHttpResponse = {
  data: WebIntegration;
  headers: Headers;
  status: 200;
};
type GetWebIntegrationHttpError = {
  data: Errors;
  headers: Headers;
  status: 404;
};
/**
 * Updates a single web integration by ID.
 *
 * @param id The ID of the web integration to update.
 * @param body an object with the body content
 * @throws PatchWebIntegrationHttpError
 */
declare function patchWebIntegration(id: string, body: WebIntegrationPatchSchema, options?: ApiCallOptions): Promise<PatchWebIntegrationHttpResponse>;
type PatchWebIntegrationHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchWebIntegrationHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Clears the cache for web-integrations api requests.
 */
declare function clearCache(): void;
interface WebIntegrationsAPI {
  /**
   * Retrieves web integrations matching the query.
   *
   * @param query an object with query parameters
   * @throws GetWebIntegrationsHttpError
   */
  getWebIntegrations: typeof getWebIntegrations;
  /**
   * Creates a web integration.
   *
   * @param body an object with the body content
   * @throws CreateWebIntegrationHttpError
   */
  createWebIntegration: typeof createWebIntegration;
  /**
   * Deletes a single web integration by ID.
   *
   * @param id The ID of the web integration to delete.
   * @throws DeleteWebIntegrationHttpError
   */
  deleteWebIntegration: typeof deleteWebIntegration;
  /**
   * Retrieves a single web integration by ID.
   *
   * @param id The ID of the web integration to retrieve.
   * @throws GetWebIntegrationHttpError
   */
  getWebIntegration: typeof getWebIntegration;
  /**
   * Updates a single web integration by ID.
   *
   * @param id The ID of the web integration to update.
   * @param body an object with the body content
   * @throws PatchWebIntegrationHttpError
   */
  patchWebIntegration: typeof patchWebIntegration;
  /**
   * Clears the cache for web-integrations api requests.
   */
  clearCache: typeof clearCache;
}
/**
 * Functions for the web-integrations api
 */
declare const webIntegrationsExport: WebIntegrationsAPI;
//#endregion
export { CreateWebIntegrationHttpError, CreateWebIntegrationHttpResponse, DeleteWebIntegrationHttpError, DeleteWebIntegrationHttpResponse, Error, Errors, GetWebIntegrationHttpError, GetWebIntegrationHttpResponse, GetWebIntegrationsHttpError, GetWebIntegrationsHttpResponse, PatchWebIntegrationHttpError, PatchWebIntegrationHttpResponse, WebIntegration, WebIntegrationPatch, WebIntegrationPatchSchema, WebIntegrationPost, WebIntegrationPostSchema, WebIntegrations, WebIntegrationsAPI, clearCache, createWebIntegration, deleteWebIntegration, getWebIntegration, getWebIntegrations, patchWebIntegration, webIntegrationsExport };