import { x as ApiCallOptions } from "../chunks/auth-types-DjJJgiRF.js";
declare namespace data_credentials_d_exports {
  export { ActionFilterOrphanRequest, ActionFilterOrphanResponse, Credential, CredentialCreate, DataCredentialsAPI, DeleteDataCredentialHttpError, DeleteDataCredentialHttpResponse, Error, Errors, FilterOrphanDataCredentialsHttpError, FilterOrphanDataCredentialsHttpResponse, GetDataCredentialHttpError, GetDataCredentialHttpResponse, Link, OrphanCredentialResItem, PatchDataCredentialHttpError, PatchDataCredentialHttpResponse, PatchRequest, ResponseErrors, UpdateDataCredentialHttpError, UpdateDataCredentialHttpResponse, clearCache, dataCredentialsExport as default, deleteDataCredential, filterOrphanDataCredentials, getDataCredential, patchDataCredential, updateDataCredential };
}
type ActionFilterOrphanRequest = {
  /** Filter orphan credentials by data source ID. */datasourceID?: string; /** Filter orphan credentials by separation status. `0` returns only embedded credentials. `1` returns only separated credentials. */
  qSeparated?: 0 | 1; /** Filter orphan credentials by credential type. */
  qType?: string;
};
type ActionFilterOrphanResponse = {
  /** Number of orphan credentials found */count: number;
  data: OrphanCredentialResItem[];
};
type Credential = {
  /** Datetime when the credential was created. */createdAt?: string; /** The identifier of the data source this credential is created for. */
  datasourceID?: string;
  links?: Link; /** Number of linked connections. */
  qConnCount: number; /** The unique identifier of the credential. */
  qID: string; /** The name of the credential. */
  qName: string; /** Internal reference key for the credential. */
  qReferenceKey?: string; /** The credential type. */
  qType: string; /** Datetime when the credential was last updated. */
  updated?: string;
};
/**
 * Request body for creating or updating a new data credential.
 */
type CredentialCreate = {
  /** The identifier of the data connection to associate with this credential. */connectionId?: string; /** The identifier of the data source this credential is created for. */
  datasourceID?: string; /** The unique identifier of the credential. */
  qID?: string; /** The name of the credential. */
  qName: string; /** Password */
  qPassword: string; /** The credential type, corresponding to the connector provider of the associated connection. */
  qType: string; /** User name */
  qUsername: string;
};
type Error = {
  /** A unique internal error code identifying the error type. */code?: string; /** Additional details about the error. */
  detail?: string; /** The HTTP status code associated with this error. */
  status?: number; /** A short, human-readable description of what went wrong. */
  title?: string;
};
type Errors = Error[];
type Link = {
  /** Link to current query */self: {
    /** URL pointing to the resource */href: string;
  };
};
/**
 * An orphan credential not associated with any data connection.
 */
type OrphanCredentialResItem = {
  /** Datetime when the credential was created */createdAt?: string; /** ID datasource that the credential is created for */
  datasourceID?: string; /** The unique identifier of the credential. */
  qID: string; /** Name of the credential */
  qName: string; /** The credential type, corresponding to the connector provider of the associated connection. */
  qType: string; /** Tenant ID of the credential's owner */
  tenant?: string; /** Datetime when the credential was last updated */
  updated: string; /** User ID of the credential's owner */
  user?: string;
};
type PatchRequest = {
  /** The patch operation type. */op: "add" | "replace" | "remove"; /** JSON Pointer path to the field to patch. */
  path: string; /** Value used for the patch. Required only for `add` or `replace` operations. The value type should match the type of the target field. */
  value?: string | boolean | number | unknown[];
}[];
type ResponseErrors = {
  errors?: Errors;
};
/**
 * Use this operation to retrieve data credentials that are not associated with any data connection. Filter results by credential type, data source ID, or separation status using the request body.
 *
 * @param body an object with the body content
 * @throws FilterOrphanDataCredentialsHttpError
 */
declare function filterOrphanDataCredentials(body: ActionFilterOrphanRequest, options?: ApiCallOptions): Promise<FilterOrphanDataCredentialsHttpResponse>;
type FilterOrphanDataCredentialsHttpResponse = {
  data: ActionFilterOrphanResponse;
  headers: Headers;
  status: 200;
};
type FilterOrphanDataCredentialsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Use this operation to delete a data credential by its unique identifier. To delete a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
 * @example
 * deleteDataCredential(
 *   "027d2703-e745-43ec-8876-a2e6ac341700",
 *   {
 *     byCredentialName: false
 *   }
 * )
 *
 * @param qID The unique identifier of the credential.
 * @param query an object with query parameters
 * @throws DeleteDataCredentialHttpError
 */
declare function deleteDataCredential(qID: string, query: {
  /** When `true`, the value of the `credentialId` in the query is interpreted as the credential's name rather than its unique identifier. */byCredentialName?: boolean;
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
 * Use this operation to retrieve a single data credential by its unique identifier. To look up a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
 * @example
 * getDataCredential(
 *   "027d2703-e745-43ec-8876-a2e6ac341700",
 *   {
 *     byCredentialName: false
 *   }
 * )
 *
 * @param qID The unique identifier of the credential.
 * @param query an object with query parameters
 * @throws GetDataCredentialHttpError
 */
declare function getDataCredential(qID: string, query: {
  /** When `true`, the value of the `credentialId` in the query is interpreted as the credential's name rather than its unique identifier. */byCredentialName?: boolean;
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
 * Use this operation to apply partial updates to a data credential using JSON Patch operations. To patch a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
 *
 * @param qID The unique identifier of the credential.
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws PatchDataCredentialHttpError
 */
declare function patchDataCredential(qID: string, query: {
  /** When `true`, the value of the `credentialId` in the query is interpreted as the credential's name rather than its unique identifier. */byCredentialName?: boolean;
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
 * Use this operation to replace an existing data credential with the values provided in the request body. To update a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
 *
 * @param qID The unique identifier of the credential.
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws UpdateDataCredentialHttpError
 */
declare function updateDataCredential(qID: string, query: {
  /** When `true`, the value of the `credentialId` in the query is interpreted as the credential's name rather than its unique identifier. */byCredentialName?: boolean;
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
 * Clears the cache for connectivity/data-credentials api requests.
 */
declare function clearCache(): void;
type DataCredentialsAPI = {
  /**
   * Use this operation to retrieve data credentials that are not associated with any data connection. Filter results by credential type, data source ID, or separation status using the request body.
   *
   * @param body an object with the body content
   * @throws FilterOrphanDataCredentialsHttpError
   */
  filterOrphanDataCredentials: typeof filterOrphanDataCredentials;
  /**
   * Use this operation to delete a data credential by its unique identifier. To delete a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
   * @example
   * deleteDataCredential(
   *   "027d2703-e745-43ec-8876-a2e6ac341700",
   *   {
   *     byCredentialName: false
   *   }
   * )
   *
   * @param qID The unique identifier of the credential.
   * @param query an object with query parameters
   * @throws DeleteDataCredentialHttpError
   */
  deleteDataCredential: typeof deleteDataCredential;
  /**
   * Use this operation to retrieve a single data credential by its unique identifier. To look up a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
   * @example
   * getDataCredential(
   *   "027d2703-e745-43ec-8876-a2e6ac341700",
   *   {
   *     byCredentialName: false
   *   }
   * )
   *
   * @param qID The unique identifier of the credential.
   * @param query an object with query parameters
   * @throws GetDataCredentialHttpError
   */
  getDataCredential: typeof getDataCredential;
  /**
   * Use this operation to apply partial updates to a data credential using JSON Patch operations. To patch a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
   *
   * @param qID The unique identifier of the credential.
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws PatchDataCredentialHttpError
   */
  patchDataCredential: typeof patchDataCredential;
  /**
   * Use this operation to replace an existing data credential with the values provided in the request body. To update a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
   *
   * @param qID The unique identifier of the credential.
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
export { ActionFilterOrphanRequest, ActionFilterOrphanResponse, Credential, CredentialCreate, DataCredentialsAPI, DeleteDataCredentialHttpError, DeleteDataCredentialHttpResponse, Error, Errors, FilterOrphanDataCredentialsHttpError, FilterOrphanDataCredentialsHttpResponse, GetDataCredentialHttpError, GetDataCredentialHttpResponse, Link, OrphanCredentialResItem, PatchDataCredentialHttpError, PatchDataCredentialHttpResponse, PatchRequest, ResponseErrors, UpdateDataCredentialHttpError, UpdateDataCredentialHttpResponse, clearCache, dataCredentialsExport as default, deleteDataCredential, filterOrphanDataCredentials, getDataCredential, patchDataCredential, data_credentials_d_exports as t, updateDataCredential };