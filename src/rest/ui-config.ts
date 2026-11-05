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

export type BulkCreatePinnedLinkItemPayload = CreatePinnedLinkConfigPayload & {
  links: CreatePinnedLinkPayload[];
};

export type CreatePinnedLinkConfigPayload = {
  /** Specifies the scope of the link. Only supports `tenant`. */
  scope: "tenant";
  /** Specifies the type of the link. Only supports `custom-link`. */
  type: "custom-link";
};

export type CreatePinnedLinkPayload = {
  /** The URL the user will be taken to when they click on the custom link. Must be https. */
  link: string;
  /** The title of the link, which will be shown in the navigation bar. Max length 50 characters. */
  name: string;
};

export type Error = {
  /** Error code. */
  readonly code?: number;
  /** Error cause. */
  readonly message?: string;
};

export type ErrorResponse403 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};

export type JSONPatchPinnedLinkPayload = {
  op: "replace";
  path: "/name" | "/link";
  /** The value to be used for this operation. */
  value: string;
}[];

export type PinnedLink = {
  /** Date string */
  createdAt: string;
  createdBy: string;
  id: string;
  link: string;
  name: string;
  scope: "user" | "tenant";
  tenantId: string;
  type: "custom-link";
  /** Date string */
  updatedAt?: string;
  updatedBy?: string;
};

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Retrieves a list of all pinned links. All users can list pinned links. This endpoint does not support pagination as a tenant can have a maximum of 50 pinned links at one time.
 *
 * @throws GetUiConfigPinnedLinksHttpError
 */
export async function getUiConfigPinnedLinks(options?: ApiCallOptions): Promise<GetUiConfigPinnedLinksHttpResponse> {
  return invokeFetch("ui-config", {
    method: "get",
    pathTemplate: "/api/v1/ui-config/pinned-links",
    options,
  });
}

export type GetUiConfigPinnedLinksHttpResponse = {
  data: {
    data?: PinnedLink[];
  };
  headers: Headers;
  status: 200;
};

export type GetUiConfigPinnedLinksHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};

/**
 * Creates a pinned link, which will appear below any existing pinned links in the tenant. Requires calling user to be assigned the `TenantAdmin` role. A tenant can have a maximum of 50 pinned links.
 *
 * @param body an object with the body content
 * @throws CreateUiConfigPinnedLinkHttpError
 */
export async function createUiConfigPinnedLink(
  body: CreatePinnedLinkPayload & CreatePinnedLinkConfigPayload,
  options?: ApiCallOptions,
): Promise<CreateUiConfigPinnedLinkHttpResponse> {
  return invokeFetch("ui-config", {
    method: "post",
    pathTemplate: "/api/v1/ui-config/pinned-links",
    body,
    contentType: "application/json",
    options,
  });
}

export type CreateUiConfigPinnedLinkHttpResponse = {
  data: PinnedLink;
  headers: Headers;
  status: 201;
};

export type CreateUiConfigPinnedLinkHttpError =
  | CreateUiConfigPinnedLink403HttpError
  | CreateUiConfigPinnedLinkdefaultHttpError;

export type CreateUiConfigPinnedLink403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type CreateUiConfigPinnedLinkdefaultHttpError = {
  data: Error;
  headers: Headers;
  status: "default";
};

/**
 * Creates one or more pinned links for navigation, an alternative method to multiple calls to `/ui-config/pinned-links`. Links are displayed below any existing pinned links, and will be added in the order sent in the request. Requires calling user to be assigned the `TenantAdmin` role. A tenant can have a maximum of 50 pinned links.
 *
 * @param body an object with the body content
 * @throws CreateUiConfigPinnedLinksHttpError
 */
export async function createUiConfigPinnedLinks(
  body: BulkCreatePinnedLinkItemPayload,
  options?: ApiCallOptions,
): Promise<CreateUiConfigPinnedLinksHttpResponse> {
  return invokeFetch("ui-config", {
    method: "post",
    pathTemplate: "/api/v1/ui-config/pinned-links/actions/bulk-create-pinned-links",
    body,
    contentType: "application/json",
    options,
  });
}

export type CreateUiConfigPinnedLinksHttpResponse = {
  data: {
    data?: PinnedLink[];
  };
  headers: Headers;
  status: 200;
};

export type CreateUiConfigPinnedLinksHttpError =
  | CreateUiConfigPinnedLinks403HttpError
  | CreateUiConfigPinnedLinksdefaultHttpError;

export type CreateUiConfigPinnedLinks403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type CreateUiConfigPinnedLinksdefaultHttpError = {
  data: Error;
  headers: Headers;
  status: "default";
};

/**
 * Deletes all pinned links in the tenant. Requires calling user to be assigned the `TenantAdmin` role.
 *
 * @throws DeleteAllUiConfigPinnedLinksHttpError
 */
export async function deleteAllUiConfigPinnedLinks(
  options?: ApiCallOptions,
): Promise<DeleteAllUiConfigPinnedLinksHttpResponse> {
  return invokeFetch("ui-config", {
    method: "post",
    pathTemplate: "/api/v1/ui-config/pinned-links/actions/delete-all-pinned-links",
    options,
  });
}

export type DeleteAllUiConfigPinnedLinksHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type DeleteAllUiConfigPinnedLinksHttpError =
  | DeleteAllUiConfigPinnedLinks403HttpError
  | DeleteAllUiConfigPinnedLinksdefaultHttpError;

export type DeleteAllUiConfigPinnedLinks403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type DeleteAllUiConfigPinnedLinksdefaultHttpError = {
  data: Error;
  headers: Headers;
  status: "default";
};

/**
 * Deletes a specific pinned link. Requires calling user to be assigned the `TenantAdmin` role.
 *
 * @param id The pinned link identifier.
 * @throws DeleteUiConfigPinnedLinkHttpError
 */
export async function deleteUiConfigPinnedLink(
  id: string,
  options?: ApiCallOptions,
): Promise<DeleteUiConfigPinnedLinkHttpResponse> {
  return invokeFetch("ui-config", {
    method: "delete",
    pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
    pathVariables: { id },
    options,
  });
}

export type DeleteUiConfigPinnedLinkHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type DeleteUiConfigPinnedLinkHttpError =
  | DeleteUiConfigPinnedLink403HttpError
  | DeleteUiConfigPinnedLink404HttpError
  | DeleteUiConfigPinnedLinkdefaultHttpError;

export type DeleteUiConfigPinnedLink403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type DeleteUiConfigPinnedLink404HttpError = {
  data: Error;
  headers: Headers;
  status: 404;
};

export type DeleteUiConfigPinnedLinkdefaultHttpError = {
  data: Error;
  headers: Headers;
  status: "default";
};

/**
 * Retrieves a specific pinned link.
 *
 * @param id The pinned link identifier.
 * @throws GetUiConfigPinnedLinkHttpError
 */
export async function getUiConfigPinnedLink(
  id: string,
  options?: ApiCallOptions,
): Promise<GetUiConfigPinnedLinkHttpResponse> {
  return invokeFetch("ui-config", {
    method: "get",
    pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
    pathVariables: { id },
    options,
  });
}

export type GetUiConfigPinnedLinkHttpResponse = {
  data: PinnedLink;
  headers: Headers;
  status: 200;
};

export type GetUiConfigPinnedLinkHttpError = GetUiConfigPinnedLink403HttpError | GetUiConfigPinnedLinkdefaultHttpError;

export type GetUiConfigPinnedLink403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type GetUiConfigPinnedLinkdefaultHttpError = {
  data: Error;
  headers: Headers;
  status: "default";
};

/**
 * Updates a specific pinned link with an array of JSON patches. Requires calling user to be assigned the `TenantAdmin` role.
 *
 * @param id The pinned link identifier.
 * @param body an object with the body content
 * @throws PatchUiConfigPinnedLinkHttpError
 */
export async function patchUiConfigPinnedLink(
  id: string,
  body: JSONPatchPinnedLinkPayload,
  options?: ApiCallOptions,
): Promise<PatchUiConfigPinnedLinkHttpResponse> {
  return invokeFetch("ui-config", {
    method: "patch",
    pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options,
  });
}

export type PatchUiConfigPinnedLinkHttpResponse = {
  data: PinnedLink;
  headers: Headers;
  status: 200;
};

export type PatchUiConfigPinnedLinkHttpError =
  | PatchUiConfigPinnedLink403HttpError
  | PatchUiConfigPinnedLinkdefaultHttpError;

export type PatchUiConfigPinnedLink403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type PatchUiConfigPinnedLinkdefaultHttpError = {
  data: Error;
  headers: Headers;
  status: "default";
};

/**
 * Clears the cache for ui-config api requests.
 */
export function clearCache() {
  return clearApiCache("ui-config");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type UiConfigAPI = {
  /**
   * Retrieves a list of all pinned links. All users can list pinned links. This endpoint does not support pagination as a tenant can have a maximum of 50 pinned links at one time.
   *
   * @throws GetUiConfigPinnedLinksHttpError
   */
  getUiConfigPinnedLinks: typeof getUiConfigPinnedLinks;
  /**
   * Creates a pinned link, which will appear below any existing pinned links in the tenant. Requires calling user to be assigned the `TenantAdmin` role. A tenant can have a maximum of 50 pinned links.
   *
   * @param body an object with the body content
   * @throws CreateUiConfigPinnedLinkHttpError
   */
  createUiConfigPinnedLink: typeof createUiConfigPinnedLink;
  /**
   * Creates one or more pinned links for navigation, an alternative method to multiple calls to `/ui-config/pinned-links`. Links are displayed below any existing pinned links, and will be added in the order sent in the request. Requires calling user to be assigned the `TenantAdmin` role. A tenant can have a maximum of 50 pinned links.
   *
   * @param body an object with the body content
   * @throws CreateUiConfigPinnedLinksHttpError
   */
  createUiConfigPinnedLinks: typeof createUiConfigPinnedLinks;
  /**
   * Deletes all pinned links in the tenant. Requires calling user to be assigned the `TenantAdmin` role.
   *
   * @throws DeleteAllUiConfigPinnedLinksHttpError
   */
  deleteAllUiConfigPinnedLinks: typeof deleteAllUiConfigPinnedLinks;
  /**
   * Deletes a specific pinned link. Requires calling user to be assigned the `TenantAdmin` role.
   *
   * @param id The pinned link identifier.
   * @throws DeleteUiConfigPinnedLinkHttpError
   */
  deleteUiConfigPinnedLink: typeof deleteUiConfigPinnedLink;
  /**
   * Retrieves a specific pinned link.
   *
   * @param id The pinned link identifier.
   * @throws GetUiConfigPinnedLinkHttpError
   */
  getUiConfigPinnedLink: typeof getUiConfigPinnedLink;
  /**
   * Updates a specific pinned link with an array of JSON patches. Requires calling user to be assigned the `TenantAdmin` role.
   *
   * @param id The pinned link identifier.
   * @param body an object with the body content
   * @throws PatchUiConfigPinnedLinkHttpError
   */
  patchUiConfigPinnedLink: typeof patchUiConfigPinnedLink;
  /**
   * Clears the cache for ui-config api requests.
   */
  clearCache: typeof clearCache;
};

/**
 * Functions for the ui-config api
 */
const uiConfigExport: UiConfigAPI = {
  getUiConfigPinnedLinks,
  createUiConfigPinnedLink,
  createUiConfigPinnedLinks,
  deleteAllUiConfigPinnedLinks,
  deleteUiConfigPinnedLink,
  getUiConfigPinnedLink,
  patchUiConfigPinnedLink,
  clearCache,
};
export default uiConfigExport;
