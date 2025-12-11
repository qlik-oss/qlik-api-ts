import { y as ApiCallOptions } from "./auth-types-CJNqN_zp.js";

//#region src/public/rest/ui-config.d.ts
type BulkCreatePinnedLinkItemPayload = CreatePinnedLinkConfigPayload & {
  links: CreatePinnedLinkPayload[];
};
type CreatePinnedLinkConfigPayload = {
  /** Specifies the scope of the link. Only supports `tenant`. */
  scope: "tenant";
  /** Specifies the type of the link. Only supports `custom-link`. */
  type: "custom-link";
};
type CreatePinnedLinkPayload = {
  /** The URL the user will be taken to when they click on the custom link. Must be https. */
  link: string;
  /** The title of the link, which will be shown in the navigation bar. Max length 50 characters. */
  name: string;
};
type Error = {
  /** Error code. */
  readonly code?: number;
  /** Error cause. */
  readonly message?: string;
};
type ErrorResponse403 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};
type JSONPatchPinnedLinkPayload = {
  op: "replace";
  path: "/name" | "/link";
  /** The value to be used for this operation. */
  value: string;
}[];
type PinnedLink = {
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
/**
 * Retrieves a list of all pinned links. All users can list pinned links. This endpoint does not support pagination as a tenant can have a maximum of 50 pinned links at one time.
 *
 * @throws GetUiConfigPinnedLinksHttpError
 */
declare function getUiConfigPinnedLinks(options?: ApiCallOptions): Promise<GetUiConfigPinnedLinksHttpResponse>;
type GetUiConfigPinnedLinksHttpResponse = {
  data: {
    data?: PinnedLink[];
  };
  headers: Headers;
  status: 200;
};
type GetUiConfigPinnedLinksHttpError = {
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
declare function createUiConfigPinnedLink(body: CreatePinnedLinkPayload & CreatePinnedLinkConfigPayload, options?: ApiCallOptions): Promise<CreateUiConfigPinnedLinkHttpResponse>;
type CreateUiConfigPinnedLinkHttpResponse = {
  data: PinnedLink;
  headers: Headers;
  status: 201;
};
type CreateUiConfigPinnedLinkHttpError = CreateUiConfigPinnedLink403HttpError | CreateUiConfigPinnedLinkdefaultHttpError;
type CreateUiConfigPinnedLink403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type CreateUiConfigPinnedLinkdefaultHttpError = {
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
declare function createUiConfigPinnedLinks(body: BulkCreatePinnedLinkItemPayload, options?: ApiCallOptions): Promise<CreateUiConfigPinnedLinksHttpResponse>;
type CreateUiConfigPinnedLinksHttpResponse = {
  data: {
    data?: PinnedLink[];
  };
  headers: Headers;
  status: 200;
};
type CreateUiConfigPinnedLinksHttpError = CreateUiConfigPinnedLinks403HttpError | CreateUiConfigPinnedLinksdefaultHttpError;
type CreateUiConfigPinnedLinks403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type CreateUiConfigPinnedLinksdefaultHttpError = {
  data: Error;
  headers: Headers;
  status: "default";
};
/**
 * Deletes all pinned links in the tenant. Requires calling user to be assigned the `TenantAdmin` role.
 *
 * @throws DeleteAllUiConfigPinnedLinksHttpError
 */
declare function deleteAllUiConfigPinnedLinks(options?: ApiCallOptions): Promise<DeleteAllUiConfigPinnedLinksHttpResponse>;
type DeleteAllUiConfigPinnedLinksHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteAllUiConfigPinnedLinksHttpError = DeleteAllUiConfigPinnedLinks403HttpError | DeleteAllUiConfigPinnedLinksdefaultHttpError;
type DeleteAllUiConfigPinnedLinks403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type DeleteAllUiConfigPinnedLinksdefaultHttpError = {
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
declare function deleteUiConfigPinnedLink(id: string, options?: ApiCallOptions): Promise<DeleteUiConfigPinnedLinkHttpResponse>;
type DeleteUiConfigPinnedLinkHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteUiConfigPinnedLinkHttpError = DeleteUiConfigPinnedLink403HttpError | DeleteUiConfigPinnedLinkdefaultHttpError;
type DeleteUiConfigPinnedLink403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type DeleteUiConfigPinnedLinkdefaultHttpError = {
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
declare function getUiConfigPinnedLink(id: string, options?: ApiCallOptions): Promise<GetUiConfigPinnedLinkHttpResponse>;
type GetUiConfigPinnedLinkHttpResponse = {
  data: PinnedLink;
  headers: Headers;
  status: 200;
};
type GetUiConfigPinnedLinkHttpError = GetUiConfigPinnedLink403HttpError | GetUiConfigPinnedLinkdefaultHttpError;
type GetUiConfigPinnedLink403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type GetUiConfigPinnedLinkdefaultHttpError = {
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
declare function patchUiConfigPinnedLink(id: string, body: JSONPatchPinnedLinkPayload, options?: ApiCallOptions): Promise<PatchUiConfigPinnedLinkHttpResponse>;
type PatchUiConfigPinnedLinkHttpResponse = {
  data: PinnedLink;
  headers: Headers;
  status: 200;
};
type PatchUiConfigPinnedLinkHttpError = PatchUiConfigPinnedLink403HttpError | PatchUiConfigPinnedLinkdefaultHttpError;
type PatchUiConfigPinnedLink403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type PatchUiConfigPinnedLinkdefaultHttpError = {
  data: Error;
  headers: Headers;
  status: "default";
};
/**
 * Clears the cache for ui-config api requests.
 */
declare function clearCache(): void;
type UiConfigAPI = {
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
declare const uiConfigExport: UiConfigAPI;
//#endregion
export { PatchUiConfigPinnedLinkHttpError as A, getUiConfigPinnedLink as B, GetUiConfigPinnedLinkHttpError as C, GetUiConfigPinnedLinksHttpResponse as D, GetUiConfigPinnedLinksHttpError as E, clearCache as F, patchUiConfigPinnedLink as H, createUiConfigPinnedLink as I, createUiConfigPinnedLinks as L, PatchUiConfigPinnedLinkdefaultHttpError as M, PinnedLink as N, JSONPatchPinnedLinkPayload as O, UiConfigAPI as P, deleteAllUiConfigPinnedLinks as R, GetUiConfigPinnedLink403HttpError as S, GetUiConfigPinnedLinkdefaultHttpError as T, uiConfigExport as U, getUiConfigPinnedLinks as V, DeleteUiConfigPinnedLinkHttpError as _, CreateUiConfigPinnedLinkHttpError as a, Error as b, CreateUiConfigPinnedLinks403HttpError as c, CreateUiConfigPinnedLinksdefaultHttpError as d, DeleteAllUiConfigPinnedLinks403HttpError as f, DeleteUiConfigPinnedLink403HttpError as g, DeleteAllUiConfigPinnedLinksdefaultHttpError as h, CreateUiConfigPinnedLink403HttpError as i, PatchUiConfigPinnedLinkHttpResponse as j, PatchUiConfigPinnedLink403HttpError as k, CreateUiConfigPinnedLinksHttpError as l, DeleteAllUiConfigPinnedLinksHttpResponse as m, CreatePinnedLinkConfigPayload as n, CreateUiConfigPinnedLinkHttpResponse as o, DeleteAllUiConfigPinnedLinksHttpError as p, CreatePinnedLinkPayload as r, CreateUiConfigPinnedLinkdefaultHttpError as s, BulkCreatePinnedLinkItemPayload as t, CreateUiConfigPinnedLinksHttpResponse as u, DeleteUiConfigPinnedLinkHttpResponse as v, GetUiConfigPinnedLinkHttpResponse as w, ErrorResponse403 as x, DeleteUiConfigPinnedLinkdefaultHttpError as y, deleteUiConfigPinnedLink as z };