import { y as ApiCallOptions } from "./auth-types-E99tzdN0.js";

//#region src/public/rest/data-credentials.d.ts
type ActionFilterOrphanRequest = {
  /** Filtering on datasource ID of credentials */
  datasourceID?: string;
  /** Filtering on separate status of credentials: * 0 - embedded credential * 1 - separated credential */
  qSeparated?: 0 | 1;
  /** Filtering on type of credentials */
  qType?: string;
};
type ActionFilterOrphanResponse = {
  /** Number of orphan credentials found */
  count: number;
  data: OrphanCredentialResItem[];
};
type Credential = {
  /** Datetime when the credential was created */
  created?: string;
  /** ID datasource that the credential is created for */
  datasourceID?: string;
  links?: Link;
  /** Number of linked connections */
  qConnCount: number;
  /** UUID of the credential */
  qID: string;
  /** Name of the credential */
  qName: string;
  /** Reference key of credential in redis */
  qReferenceKey?: string;
  /** Type of credential */
  qType: string;
  /** Datetime when the credential was last updated */
  updated?: string;
};
/**
 * Credential
 */
type CredentialCreate = {
  /** ID of connection that will be associated with the credential */
  connectionId?: string;
  /** ID datasource that the credential is created for */
  datasourceID?: string;
  /** UUID of the credential */
  qID?: string;
  /** Name of the credential */
  qName: string;
  /** Password */
  qPassword: string;
  /** Type of credential (i.e. connector provider of the corresponding connection) */
  qType: string;
  /** User name */
  qUsername: string;
};
type Error = {
  /** Unique internal error code */
  code?: string;
  /** More concrete details */
  detail?: string;
  /** HTTP status code */
  status?: number;
  /** A summary in english explaining what went wrong */
  title?: string;
};
type Errors = Error[];
type Link = {
  /** Link to current query */
  self: {
    /** URL pointing to the resource */
    href: string;
  };
};
/**
 * Orphan credential
 */
type OrphanCredentialResItem = {
  /** Datetime when the credential was created */
  created: string;
  /** ID datasource that the credential is created for */
  datasourceID?: string;
  /** UUID of the credential */
  qID: string;
  /** Name of the credential */
  qName: string;
  /** Type of credential (i.e. connector provider of the corresponding connection) */
  qType: string;
  /** Tenant ID of the credential's owner */
  tenant?: string;
  /** Datetime when the credential was last updated */
  updated: string;
  /** User ID of the credential's owner */
  user?: string;
};
type PatchRequest = {
  /** Operation type */
  op: "add" | "replace" | "remove";
  /** Path to the target field to be patched */
  path: string;
  /** Value used for the patch. Required only for `add` or `replace` operations. The value type should match the type of the target field. */
  value?: string | boolean | number | unknown[];
}[];
type ResponseErrors = {
  errors?: Errors;
};
/**
 * Gets list of orphan data credentials (i.e. credentials that are not associated to any data connection) filtering on properties defined in request body
 *
 * @param body an object with the body content
 * @throws FilterOrphanedDataCredentialsHttpError
 */
declare function filterOrphanedDataCredentials(body: ActionFilterOrphanRequest, options?: ApiCallOptions): Promise<FilterOrphanedDataCredentialsHttpResponse>;
type FilterOrphanedDataCredentialsHttpResponse = {
  data: ActionFilterOrphanResponse;
  headers: Headers;
  status: 200;
};
type FilterOrphanedDataCredentialsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Deletes the specified credential by ID (or by name when type=credentialname is set in query)
 * @example
 * deleteDataCredential(
 *   "027d2703-e745-43ec-8876-a2e6ac341700",
 *   {
 *     byCredentialName: false
 *   }
 * )
 *
 * @param qID Credential ID
 * @param query an object with query parameters
 * @throws DeleteDataCredentialHttpError
 */
declare function deleteDataCredential(qID: string, query: {
  /** If set to true, credentialId in the query will be interpreted as credential's name */
  byCredentialName?: boolean;
}, options?: ApiCallOptions): Promise<DeleteDataCredentialHttpResponse>;
type DeleteDataCredentialHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteDataCredentialHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 404;
};
/**
 * Gets a credential by ID (or by name when bycredentialname=true is set in query)
 * @example
 * getDataCredential(
 *   "027d2703-e745-43ec-8876-a2e6ac341700",
 *   {
 *     byCredentialName: false
 *   }
 * )
 *
 * @param qID Credential ID
 * @param query an object with query parameters
 * @throws GetDataCredentialHttpError
 */
declare function getDataCredential(qID: string, query: {
  /** If set to true, credentialId in the query will be interpreted as credential's name */
  byCredentialName?: boolean;
}, options?: ApiCallOptions): Promise<GetDataCredentialHttpResponse>;
type GetDataCredentialHttpResponse = {
  data: Credential;
  headers: Headers;
  status: 200;
};
type GetDataCredentialHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Patches a credential specified by ID (or by name when bycredentialname=true is set in query)
 *
 * @param qID Credential ID
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws PatchDataCredentialHttpError
 */
declare function patchDataCredential(qID: string, query: {
  /** If set to true, credentialId in the query will be interpreted as credential's name */
  byCredentialName?: boolean;
}, body: PatchRequest, options?: ApiCallOptions): Promise<PatchDataCredentialHttpResponse>;
type PatchDataCredentialHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchDataCredentialHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 404 | 409;
};
/**
 * Updates a credential specified by ID (or by name when bycredentialname=true is set in query)
 *
 * @param qID Credential ID
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws UpdateDataCredentialHttpError
 */
declare function updateDataCredential(qID: string, query: {
  /** If set to true, credentialId in the query will be interpreted as credential's name */
  byCredentialName?: boolean;
}, body: CredentialCreate, options?: ApiCallOptions): Promise<UpdateDataCredentialHttpResponse>;
type UpdateDataCredentialHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type UpdateDataCredentialHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 404 | 409;
};
/**
 * Clears the cache for data-credentials api requests.
 */
declare function clearCache(): void;
type DataCredentialsAPI = {
  /**
   * Gets list of orphan data credentials (i.e. credentials that are not associated to any data connection) filtering on properties defined in request body
   *
   * @param body an object with the body content
   * @throws FilterOrphanedDataCredentialsHttpError
   */
  filterOrphanedDataCredentials: typeof filterOrphanedDataCredentials;
  /**
   * Deletes the specified credential by ID (or by name when type=credentialname is set in query)
   * @example
   * deleteDataCredential(
   *   "027d2703-e745-43ec-8876-a2e6ac341700",
   *   {
   *     byCredentialName: false
   *   }
   * )
   *
   * @param qID Credential ID
   * @param query an object with query parameters
   * @throws DeleteDataCredentialHttpError
   */
  deleteDataCredential: typeof deleteDataCredential;
  /**
   * Gets a credential by ID (or by name when bycredentialname=true is set in query)
   * @example
   * getDataCredential(
   *   "027d2703-e745-43ec-8876-a2e6ac341700",
   *   {
   *     byCredentialName: false
   *   }
   * )
   *
   * @param qID Credential ID
   * @param query an object with query parameters
   * @throws GetDataCredentialHttpError
   */
  getDataCredential: typeof getDataCredential;
  /**
   * Patches a credential specified by ID (or by name when bycredentialname=true is set in query)
   *
   * @param qID Credential ID
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws PatchDataCredentialHttpError
   */
  patchDataCredential: typeof patchDataCredential;
  /**
   * Updates a credential specified by ID (or by name when bycredentialname=true is set in query)
   *
   * @param qID Credential ID
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws UpdateDataCredentialHttpError
   */
  updateDataCredential: typeof updateDataCredential;
  /**
   * Clears the cache for data-credentials api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the data-credentials api
 */
declare const dataCredentialsExport: DataCredentialsAPI;
//#endregion
export { dataCredentialsExport as C, patchDataCredential as D, getDataCredential as E, updateDataCredential as O, clearCache as S, filterOrphanedDataCredentials as T, PatchDataCredentialHttpResponse as _, DataCredentialsAPI as a, UpdateDataCredentialHttpError as b, Error as c, FilterOrphanedDataCredentialsHttpResponse as d, GetDataCredentialHttpError as f, PatchDataCredentialHttpError as g, OrphanCredentialResItem as h, CredentialCreate as i, Errors as l, Link as m, ActionFilterOrphanResponse as n, DeleteDataCredentialHttpError as o, GetDataCredentialHttpResponse as p, Credential as r, DeleteDataCredentialHttpResponse as s, ActionFilterOrphanRequest as t, FilterOrphanedDataCredentialsHttpError as u, PatchRequest as v, deleteDataCredential as w, UpdateDataCredentialHttpResponse as x, ResponseErrors as y };