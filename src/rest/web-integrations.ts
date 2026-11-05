/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import { clearApiCache, invokeFetch, type ApiCallOptions, type PageCallOptions } from "#public/invoke-fetch";

/* -------------------------------------------------------------------------- */
/*                                Public types                                */
/* -------------------------------------------------------------------------- */

/**
 * An error object describing the error.
 */
export type Error = {
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
export type Errors = {
  /** An array of errors related to the operation. */
  errors?: Error[];
  /** A unique identifier for tracing the error. */
  traceId?: string;
};

/**
 * A web integration object.
 */
export type WebIntegration = {
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
export type WebIntegrationPatch = {
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
export type WebIntegrationPatchSchema = WebIntegrationPatch[];

/**
 * The creation of a web integration response.
 */
export type WebIntegrationPost = {
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

export type WebIntegrationPostSchema = {
  /** The name of the web integration to create. */
  name: string;
  /** The origins that are allowed to make requests to the tenant. */
  validOrigins?: string[];
};

/**
 * An array of web integration objects.
 */
export type WebIntegrations = {
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

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Retrieves web integrations matching the query.
 *
 * @param query an object with query parameters
 * @throws GetWebIntegrationsHttpError
 */
export async function getWebIntegrations(
  query: {
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
  },
  options?: ApiCallOptions,
): Promise<GetWebIntegrationsHttpResponse> {
  return invokeFetch("web-integrations", {
    method: "get",
    pathTemplate: "/api/v1/web-integrations",
    query,
    options,
  });
}

export type GetWebIntegrationsHttpResponse = {
  data: WebIntegrations;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetWebIntegrationsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetWebIntegrationsHttpResponse>;
};

export type GetWebIntegrationsHttpError = {
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
export async function createWebIntegration(
  body: WebIntegrationPostSchema,
  options?: ApiCallOptions,
): Promise<CreateWebIntegrationHttpResponse> {
  return invokeFetch("web-integrations", {
    method: "post",
    pathTemplate: "/api/v1/web-integrations",
    body,
    contentType: "application/json",
    options,
  });
}

export type CreateWebIntegrationHttpResponse = {
  data: WebIntegrationPost;
  headers: Headers;
  status: 201;
};

export type CreateWebIntegrationHttpError = {
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
export async function deleteWebIntegration(
  id: string,
  options?: ApiCallOptions,
): Promise<DeleteWebIntegrationHttpResponse> {
  return invokeFetch("web-integrations", {
    method: "delete",
    pathTemplate: "/api/v1/web-integrations/{id}",
    pathVariables: { id },
    options,
  });
}

export type DeleteWebIntegrationHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type DeleteWebIntegrationHttpError = {
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
export async function getWebIntegration(id: string, options?: ApiCallOptions): Promise<GetWebIntegrationHttpResponse> {
  return invokeFetch("web-integrations", {
    method: "get",
    pathTemplate: "/api/v1/web-integrations/{id}",
    pathVariables: { id },
    options,
  });
}

export type GetWebIntegrationHttpResponse = {
  data: WebIntegration;
  headers: Headers;
  status: 200;
};

export type GetWebIntegrationHttpError = {
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
export async function patchWebIntegration(
  id: string,
  body: WebIntegrationPatchSchema,
  options?: ApiCallOptions,
): Promise<PatchWebIntegrationHttpResponse> {
  return invokeFetch("web-integrations", {
    method: "patch",
    pathTemplate: "/api/v1/web-integrations/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options,
  });
}

export type PatchWebIntegrationHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type PatchWebIntegrationHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};

/**
 * Clears the cache for web-integrations api requests.
 */
export function clearCache() {
  return clearApiCache("web-integrations");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type WebIntegrationsAPI = {
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
};

/**
 * Functions for the web-integrations api
 */
const webIntegrationsExport: WebIntegrationsAPI = {
  getWebIntegrations,
  createWebIntegration,
  deleteWebIntegration,
  getWebIntegration,
  patchWebIntegration,
  clearCache,
};
export default webIntegrationsExport;
