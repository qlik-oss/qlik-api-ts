import { x as ApiCallOptions } from "../chunks/auth-types-DjJJgiRF.js";
declare namespace data_connections_d_exports {
  export { ActionDeleteRequest, ActionDuplicateRequest, ActionUpdateRequest, BulkResponse, ConnectionCreate, ConnectionCreateResponse, ConnectionGet, ConnectionUpdate, Connections, CreateDataConnectionHttpError, CreateDataConnectionHttpResponse, DataConnectionsAPI, DcaasConnectionCreate, DcaasConnectionCreateAuthResponse, DeleteDataConnectionHttpError, DeleteDataConnectionHttpResponse, DeleteDataConnectionsHttpError, DeleteDataConnectionsHttpResponse, DuplicateDataConnectionsHttpError, DuplicateDataConnectionsHttpResponse, Error, Errors, GetDataConnectionHttpError, GetDataConnectionHttpResponse, GetDataConnectionsHttpError, GetDataConnectionsHttpResponse, Link, Meta, PatchDataConnectionHttpError, PatchDataConnectionHttpResponse, PatchRequest, Privilege, ResponseErrors, TopLevelLink, UpdateDataConnectionHttpError, UpdateDataConnectionHttpResponse, UpdateDataConnectionsHttpError, UpdateDataConnectionsHttpResponse, clearCache, createDataConnection, dataConnectionsExport as default, deleteDataConnection, deleteDataConnections, duplicateDataConnections, getDataConnection, getDataConnections, patchDataConnection, updateDataConnection, updateDataConnections };
}
type ActionDeleteRequest = {
  connections: {
    /** ID of connection */id: string; /** Connection name */
    name?: string;
  }[];
};
type ActionDuplicateRequest = {
  /** ID of the source connection being duplicated */id: string; /** Optional name for the duplicated connection, must be unique in the target scope. If not specified, a name will be automatically generated */
  name?: string; /** Optional credential password, specify to override credential embedded (or associated) with the source connection */
  qPassword?: string; /** Optional credential username, specify to override credential embedded (or associated) with the source connection */
  qUsername?: string; /** Optional target space ID for the duplicated connection. If not specified, the duplicated connection will be in the same space as the source connection */
  spaceId?: string;
};
type ActionUpdateRequest = {
  connections: {
    /** Connection ID */id: string; /** Connection name */
    name?: string; /** The user ID to transfer ownership to. If omitted, the connection's owner is not changed. */
    ownerId?: string; /** The space ID to move the connection to. If omitted, the connection's space is not changed. If set to an empty string, the connection is moved to the personal space of the user identified by `ownerId`. If `ownerId` is also omitted, the connection is moved to the original owner's personal space. */
    spaceId?: string; /** The type of the target space. Required when `spaceId` is specified. */
    spaceType?: "personal" | "shared" | "managed" | "data";
  }[];
};
type BulkResponse = {
  data?: {
    error?: Error; /** ID of the resource */
    id: string; /** The HTTP status code indicating the outcome of the operation on the resource. */
    status: number;
  }[];
};
/**
 * Schema used to create a connection with given connection string (`qConnectStatement`) along with other metadata
 */
type ConnectionCreate = {
  /** ID of the datasource associated with this connection */datasourceID: string; /** App ID */
  ownerId?: string; /** Indicates the data connector architecture. `0` for 64-bit, `1` for 32-bit. Default is `0`, if not specified. */
  qArchitecture?: 0 | 1; /** Connection string for the data connection */
  qConnectStatement: string; /** String that contains connection specific secret (or password) that requires encryption before persist to database. This field is connection level secret */
  qConnectionSecret?: string; /** ID of the credential associated with the connection */
  qCredentialsID?: string; /** Name of the credential associated with the connection */
  qCredentialsName?: string; /** Unique identifier (UUID) for the data connection as specified by the Qlik Sense engine. A UUID will be generated automatically if this field is not specified or empty. */
  qEngineObjectID?: string; /** Unique identifier (UUID) for the data connection. A UUID will be generated automatically if `qID` is not specified or empty. */
  qID?: string; /** Logon type for the connection. `LOG_ON_SERVICE_USER` (or `0`) indicates service user logon; `LOG_ON_CURRENT_USER` (or `1`) indicates current user logon. */
  qLogOn?: "0" | "1" | "LOG_ON_SERVICE_USER" | "LOG_ON_CURRENT_USER"; /** Descriptive name of the data connection */
  qName: string; /** Any logon password associated with the data connection (connector encoded) */
  qPassword?: string; /** When `true`, creates a credential-less connection that does not embed authentication details. Default is `false`. */
  qSeparateCredentials?: boolean; /** The connection type, identifying the provider of the underlying connector. */
  qType: string; /** Any logon username associated with the data connection */
  qUsername?: string; /** The QRI (Qlik Resource Identifier) string for the connection. When provided by a trusted client, this value is persisted as the connection's QRI to ensure consistency. */
  qriInRequest?: string; /** ID of the space to which the connection belongs */
  space?: string; /** List of tags attached to the connection. A maximum of 32 tags is allowed. */
  tags?: string[];
};
/**
 * Represents a data connection returned after a successful create, update, or duplicate operation.
 */
type ConnectionCreateResponse = {
  /** The date and time when the connection was created, in ISO 8601 format. */createdAt?: string;
  links?: Link; /** The user's access privileges on this connection, such as `update`, `delete`, or `read`. */
  privileges: Privilege[]; /** Indicates the data connector architecture. `0` for 64-bit, `1` for 32-bit. Default is `0`, if not specified. */
  qArchitecture: 0 | 1; /** Connection string for the data connection */
  qConnectStatement: string; /** ID of the credential associated with the connection. */
  qCredentialsID?: string; /** Name of the credential associated with the connection. */
  qCredentialsName?: string; /** The unique identifier for the data connection. Must match `qID`. */
  qEngineObjectID: string; /** The unique identifier of the data connection. Must match `qEngineObjectID`. */
  qID: string; /** Logon type for the connection. `LOG_ON_SERVICE_USER` (or `0`) indicates service user logon; `LOG_ON_CURRENT_USER` (or `1`) indicates current user logon. */
  qLogOn: "0" | "1" | "LOG_ON_SERVICE_USER" | "LOG_ON_CURRENT_USER"; /** Descriptive name of the data connection */
  qName: string; /** Internal reference key for the credential. */
  qReferenceKey?: string; /** When `true`, this connection is credential-less and does not embed authentication details. When `false`, credentials are embedded in the connection. */
  qSeparateCredentials: boolean; /** The connection type, identifying the provider of the underlying connector. */
  qType: string; /** ID of the space to which the connection belongs. */
  space?: string; /** The date and time when the connection was last updated, in ISO 8601 format. */
  updated?: string; /** User ID of the connection's creator. */
  user?: string;
};
/**
 * Represents a data connection returned from a GET request.
 */
type ConnectionGet = {
  /** Connection properties parsed from the connection string. Only included in the response when `parseConnection` is `true`. */connectionProperties?: unknown; /** The date and time when the connection was created, in ISO 8601 format. */
  createdAt?: string; /** Data source ID */
  datasourceID?: string;
  links: Link; /** The user's access privileges on the associated connection, such as `update`, `delete`, or `read`. */
  privileges: Privilege[]; /** Indicates the data connector architecture. `0` for 64-bit, `1` for 32-bit. Default is `0`, if not specified. */
  qArchitecture: 0 | 1; /** Connection string for the data connection. */
  qConnectStatement: string; /** A connection-specific secret or password. This field is not included in list responses. It is only included when retrieving a single connection using `GET /data-connections/{qID}`. */
  qConnectionSecret?: string; /** ID of the credential associated with the connection */
  qCredentialsID?: string; /** The unique identifier for the data connection. Must match `qID`. */
  qEngineObjectID: string; /** The unique identifier of the data connection. Must match `qEngineObjectID`. */
  qID: string; /** Logon type for the data connection. `0` indicates service user logon; `1` indicates current user logon. */
  qLogOn: 0 | 1; /** Descriptive name of the data connection. */
  qName: string; /** When `true`, this connection is credential-less and does not embed authentication details. When `false`, credentials are embedded in the connection. */
  qSeparateCredentials?: boolean; /** The connection type, identifying the provider of the underlying connector. */
  qType: string; /** Encrypted base QRI (Qlik Resource Identifier) string for this connection. Only included when `includeQris` is `true`. Filterable using SCIM filter expressions, for example: `qri co "snowflake"`. */
  qri?: string; /** ID of the space to which the connection belongs */
  space?: string; /** List of tags attached to the connection */
  tags?: string[]; /** Tenant ID of the connection's creator */
  tenant: string; /** The date and time when the connection was last updated, in ISO 8601 format. */
  updated?: string; /** User ID of the connection's creator */
  user?: string;
};
type ConnectionUpdate = {
  /** ID of the datasource associated with this connection */datasourceID?: string; /** Indicates the data connector architecture. `0` for 64-bit, `1` for 32-bit. Default is `0`, if not specified. */
  qArchitecture?: 0 | 1; /** Connection string for the data connection */
  qConnectStatement: string; /** A connection-specific secret or password. When provided, replaces the existing secret. When set to an empty string, clears the existing secret. When omitted, the existing secret is preserved. */
  qConnectionSecret?: string; /** ID of the credential associated with the connection */
  qCredentialsID?: string; /** Name of the credential associated with the connection */
  qCredentialsName?: string; /** Unique identifier for the data connection as specified by the Sense engine */
  qEngineObjectID: string; /** Unique identifier for the data connection */
  qID: string; /** Logon type for the connection. `LOG_ON_SERVICE_USER` (or `0`) indicates service user logon; `LOG_ON_CURRENT_USER` (or `1`) indicates current user logon. */
  qLogOn?: "0" | "1" | "LOG_ON_SERVICE_USER" | "LOG_ON_CURRENT_USER"; /** Descriptive name of the data connection */
  qName: string; /** Any logon password associated with the data connection */
  qPassword?: string; /** Indicates whether or not this is a credential-less connection */
  qSeparateCredentials?: boolean; /** The connection type, identifying the provider of the underlying connector. */
  qType: string; /** Any logon username associated with the data connection */
  qUsername?: string; /** ID of the space to which the connection belongs */
  space?: string;
};
type Connections = {
  data?: ConnectionGet[];
  errors?: Errors;
  links?: TopLevelLink;
  meta?: Meta;
};
/**
 * Schema used to create a connection using a list of connection properties for given datasource
 */
type DcaasConnectionCreate = {
  /** When `true`, only the authentication URL is returned and no connection is created, provided the data source supports OAuth. All other request properties are ignored. Has no effect if the data source does not support OAuth. */authUrlOnly?: boolean; /** Connection properties required to establish the connection for the specified data source. The expected properties are defined by the response of `GET /connectivity/data-sources/{datasourceId}/api-specs`. */
  connectionProperties: unknown; /** ID of the datasource of the connection */
  datasourceID: string; /** Descriptive name of the data connection */
  qName: string; /** ID of the space in which the connection shall be created. Connection will be created in user's personal space if undefined */
  space?: string; /** List of tags attached to the connection (allow max 32 tags) */
  tags?: string[];
};
/**
 * Authentication URL returned when `authUrlOnly` is `true` in the request body. Only returned for data sources that support OAuth.
 */
type DcaasConnectionCreateAuthResponse = {
  /** Authentication URL used to generate authentication code for datasources supporting OAuth */authUrl: string;
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
type Meta = {
  /** Total count of resources being requested. */count?: number;
};
type PatchRequest = {
  /** The patch operation type. */op: "add" | "replace" | "remove"; /** JSON Pointer path to the field to patch. */
  path: string; /** Value used for the patch. Required only for `add` or `replace` operations. The value type should match the type of the target field. */
  value?: string | boolean | number | unknown[];
}[];
/**
 * Access type allowed on associated data connection
 * @example
 * "list"
 */
type Privilege = "list" | "update" | "delete" | "read" | "change_owner" | "change_space";
type ResponseErrors = {
  errors?: Errors;
};
type TopLevelLink = {
  /** URL link to next page of requested resources (available to paged request only) */next?: {
    /** URL pointing to the next page of resources */href: string;
  }; /** URL link to previous page of requested resources (available to paged request only) */
  prev?: {
    /** URL pointing to the previous page of resources */href: string;
  }; /** Link to current query */
  self: {
    /** URL pointing to the resource */href: string;
  };
};
/**
 * Use this operation to retrieve a list of data connections available to the caller. Results are filtered based on the caller's space access permissions. Use the `spaceId`, `personal`, or `filter` parameters to narrow results to a specific scope.
 * @example
 * getDataConnections(
 *   {
 *     dataName: "data",
 *     extended: false,
 *     spaceId: "611bcebaeec1203d88211ac4",
 *     personal: false,
 *     owner: "928e2a66-01ba-4678-aa32-e74c213896fa",
 *     ownedByMe: true,
 *     limit: 30,
 *     page: "page=JwAAAAljcmVhdGVkAPfQ-sx0AQAAB19pZABfb93nZcM4SN1M0e8A",
 *     noDatafiles: true,
 *     userId: "6K9xjsItDexffolu5vg1oWYkY8x7f-0G",
 *     caseinsensitive: true,
 *     locale: "en",
 *     includeQris: true,
 *     includeDisabled: true
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetDataConnectionsHttpError
 */
declare function getDataConnections(query: {
  /** When `true`, sorting is applied case-insensitively. Only applies when `sort` is also specified. */caseinsensitive?: boolean; /** Provides an alternate name to be used for data[] element in GET response. */
  dataName?: string; /** When `true`, returns an extended set of properties, including the encrypted credential string. */
  extended?: boolean; /** Filter connections by property values using a SCIM filter string. Only filterable properties are supported. Filtering does not apply to datafile connections. Datetime values must be in RFC 3339 format, for example: `created gt "2000-01-10T15:04:05Z"`. */
  filter?: string; /** When `true`, includes connections that use disabled data sources. */
  includeDisabled?: boolean; /** When `true`, includes the encrypted base QRI string in the response. Default is `false`. */
  includeQris?: boolean; /** Maximum number of results to return per page. Defaults to 20 if not specified. */
  limit?: number; /** An ICU locale identifier that controls case-insensitive sort order. Only applies when `caseinsensitive` is `true`. Defaults to `en` if not specified. */
  locale?: string; /** When `true`, datafile connections are excluded from the results. */
  noDatafiles?: boolean; /** Filtering on connections, return connections owned by the caller if set to true (doesn't apply to datafiles connections) */
  ownedByMe?: boolean; /** Filter data file connections by owner (app) ID. */
  owner?: string; /** Pagination cursor string, which is generated automatically in previous pagination query. */
  page?: string; /** When `true`, returns only personal connections. Ignored if `spaceId` is also specified. */
  personal?: boolean; /** Field to sort results by. Prefix the field name with `+` for ascending order or `-` for descending order. This parameter is only applicable to paginated requests (e.g. `?limit=30&sort=+qName`) For data connections, sorting only applies to non-datafile connections. Datafile connections are always returned after standard connections, regardless of sort order. */
  sort?: "+_id" | "-_id" | "+qName" | "-qName" | "+created" | "-created" | "+updated" | "-updated"; /** Filter connections by space ID. */
  spaceId?: string; /** Filter by `userId`. Requires Admin role if specified `userId` doesn't match that is defined in JWT. */
  userId?: string;
}, options?: ApiCallOptions): Promise<GetDataConnectionsHttpResponse>;
type GetDataConnectionsHttpResponse = {
  data: Connections;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataConnectionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataConnectionsHttpResponse>;
};
type GetDataConnectionsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 500 | 502;
};
/**
 * Use this operation to create a new data connection in your tenant. Depending on the fields provided in the request body, credentials embedded in or associated with the connection are created or updated alongside the connection.
 *
 * @param body an object with the body content
 * @throws CreateDataConnectionHttpError
 */
declare function createDataConnection(body: ConnectionCreate | DcaasConnectionCreate, options?: ApiCallOptions): Promise<CreateDataConnectionHttpResponse>;
type CreateDataConnectionHttpResponse = {
  data: ConnectionCreateResponse | DcaasConnectionCreateAuthResponse;
  headers: Headers;
  status: 201;
};
type CreateDataConnectionHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 403 | 404 | 409;
};
/**
 * Use this operation to delete multiple data connections in a single request. Requires the Admin role. Returns a 207 Multi-Status response indicating the outcome for each connection in the request.
 *
 * @param body an object with the body content
 * @throws DeleteDataConnectionsHttpError
 */
declare function deleteDataConnections(body: ActionDeleteRequest, options?: ApiCallOptions): Promise<DeleteDataConnectionsHttpResponse>;
type DeleteDataConnectionsHttpResponse = {
  data: BulkResponse;
  headers: Headers;
  status: 207;
};
type DeleteDataConnectionsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Use this operation to create a copy of an existing data connection. The duplicated connection can optionally be placed in a different space by specifying `spaceId`. You can override the credentials in the duplicate by providing `qUsername` and `qPassword` in the request body.
 *
 * @param body an object with the body content
 * @throws DuplicateDataConnectionsHttpError
 */
declare function duplicateDataConnections(body: ActionDuplicateRequest, options?: ApiCallOptions): Promise<DuplicateDataConnectionsHttpResponse>;
type DuplicateDataConnectionsHttpResponse = {
  data: ConnectionCreateResponse;
  headers: Headers;
  status: 201;
};
type DuplicateDataConnectionsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 403 | 404 | 409;
};
/**
 * Use this operation to update multiple data connections in a single request. Requires the Admin role. Returns a 207 Multi-Status response with the outcome for each connection. When transferring ownership, credentials associated with the connection are not automatically transferred to the new owner; the new owner must provide their own credentials.
 *
 * @param body an object with the body content
 * @throws UpdateDataConnectionsHttpError
 */
declare function updateDataConnections(body: ActionUpdateRequest, options?: ApiCallOptions): Promise<UpdateDataConnectionsHttpResponse>;
type UpdateDataConnectionsHttpResponse = {
  data: BulkResponse;
  headers: Headers;
  status: 207;
};
type UpdateDataConnectionsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Use this operation to delete a data connection by its unique identifier. To delete a connection by name instead of ID, set the `type` query parameter to `connectionname`. This action cannot be undone.
 * @example
 * deleteDataConnection(
 *   "82ee7b44-0c4d-491b-bd38-82640c0430a5",
 *   {
 *     type: "connectionname",
 *     spaceId: "611bcebaeec1203d88211ac4"
 *   }
 * )
 *
 * @param qID The unique identifier of the connection.
 * @param query an object with query parameters
 * @throws DeleteDataConnectionHttpError
 */
declare function deleteDataConnection(qID: string, query: {
  /** Filter connections by space ID. */spaceId?: string; /** When set to `connectionname`, the value of the connection ID in the path is interpreted as the connection's name rather than its unique identifier. */
  type?: "connectionname";
}, options?: ApiCallOptions): Promise<DeleteDataConnectionHttpResponse>;
type DeleteDataConnectionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteDataConnectionHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 403 | 404;
};
/**
 * Use this operation to retrieve a single data connection by its unique identifier. To look up a connection by name instead of ID, set the `type` query parameter to `connectionname`. Returns the full connection object including the caller's access privileges.
 * @example
 * getDataConnection(
 *   "82ee7b44-0c4d-491b-bd38-82640c0430a5",
 *   {
 *     extended: false,
 *     type: "connectionname",
 *     credentialId: "22379dc5-076e-4fec-ae20-5529a8a57dc2",
 *     byCredentialName: false,
 *     spaceId: "611bcebaeec1203d88211ac4",
 *     noCache: false,
 *     parseConnection: true
 *   }
 * )
 *
 * @param qID The unique identifier of the connection.
 * @param query an object with query parameters
 * @throws GetDataConnectionHttpError
 */
declare function getDataConnection(qID: string, query: {
  /** When `true`, the value of the `credentialId` in the query is interpreted as the credential's name rather than its unique identifier. */byCredentialName?: boolean; /** Filter by credential ID. */
  credentialId?: string; /** When `true`, returns an extended set of properties, including the encrypted credential string. */
  extended?: boolean; /** When `true`, bypasses the cache and returns the most up-to-date data file connections. By default, datafile connections may be served from cache. */
  noCache?: boolean; /** When `true`, includes a list of parsed connection properties in the response. Default is `false`. */
  parseConnection?: boolean; /** Filter connections by space ID. */
  spaceId?: string; /** When set to `connectionname`, the value of the connection ID in the path is interpreted as the connection's name rather than its unique identifier. */
  type?: "connectionname";
}, options?: ApiCallOptions): Promise<GetDataConnectionHttpResponse>;
type GetDataConnectionHttpResponse = {
  data: ConnectionGet;
  headers: Headers;
  status: 200;
};
type GetDataConnectionHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};
/**
 * Use this operation to apply partial updates to a data connection using JSON Patch operations. To patch a connection by name instead of ID, set the `type` query parameter to `connectionname`. Some data sources require an OAuth authentication code; provide it using the `qlik-auth-code` request header.
 *
 * @param qID The unique identifier of the connection.
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws PatchDataConnectionHttpError
 */
declare function patchDataConnection(qID: string, query: {
  /** When set to `connectionname`, the value of the connection ID in the path is interpreted as the connection's name rather than its unique identifier. */type?: "connectionname";
}, body: PatchRequest, options?: ApiCallOptions): Promise<PatchDataConnectionHttpResponse>;
type PatchDataConnectionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchDataConnectionHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 403 | 404 | 409;
};
/**
 * Use this operation to replace a data connection with the values provided in the request body. All required fields must be included. To update a connection by name instead of ID, set the `type` query parameter to `connectionname`. Credentials embedded in or associated with the connection are created or updated based on the fields provided.
 *
 * @param qID The unique identifier of the connection.
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws UpdateDataConnectionHttpError
 */
declare function updateDataConnection(qID: string, query: {
  /** Filter connections by space ID. */spaceId?: string; /** When set to `connectionname`, the value of the connection ID in the path is interpreted as the connection's name rather than its unique identifier. */
  type?: "connectionname";
}, body: ConnectionUpdate, options?: ApiCallOptions): Promise<UpdateDataConnectionHttpResponse>;
type UpdateDataConnectionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type UpdateDataConnectionHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 403 | 404 | 409;
};
/**
 * Clears the cache for connectivity/data-connections api requests.
 */
declare function clearCache(): void;
type DataConnectionsAPI = {
  /**
   * Use this operation to retrieve a list of data connections available to the caller. Results are filtered based on the caller's space access permissions. Use the `spaceId`, `personal`, or `filter` parameters to narrow results to a specific scope.
   * @example
   * getDataConnections(
   *   {
   *     dataName: "data",
   *     extended: false,
   *     spaceId: "611bcebaeec1203d88211ac4",
   *     personal: false,
   *     owner: "928e2a66-01ba-4678-aa32-e74c213896fa",
   *     ownedByMe: true,
   *     limit: 30,
   *     page: "page=JwAAAAljcmVhdGVkAPfQ-sx0AQAAB19pZABfb93nZcM4SN1M0e8A",
   *     noDatafiles: true,
   *     userId: "6K9xjsItDexffolu5vg1oWYkY8x7f-0G",
   *     caseinsensitive: true,
   *     locale: "en",
   *     includeQris: true,
   *     includeDisabled: true
   *   }
   * )
   *
   * @param query an object with query parameters
   * @throws GetDataConnectionsHttpError
   */
  getDataConnections: typeof getDataConnections;
  /**
   * Use this operation to create a new data connection in your tenant. Depending on the fields provided in the request body, credentials embedded in or associated with the connection are created or updated alongside the connection.
   *
   * @param body an object with the body content
   * @throws CreateDataConnectionHttpError
   */
  createDataConnection: typeof createDataConnection;
  /**
   * Use this operation to delete multiple data connections in a single request. Requires the Admin role. Returns a 207 Multi-Status response indicating the outcome for each connection in the request.
   *
   * @param body an object with the body content
   * @throws DeleteDataConnectionsHttpError
   */
  deleteDataConnections: typeof deleteDataConnections;
  /**
   * Use this operation to create a copy of an existing data connection. The duplicated connection can optionally be placed in a different space by specifying `spaceId`. You can override the credentials in the duplicate by providing `qUsername` and `qPassword` in the request body.
   *
   * @param body an object with the body content
   * @throws DuplicateDataConnectionsHttpError
   */
  duplicateDataConnections: typeof duplicateDataConnections;
  /**
   * Use this operation to update multiple data connections in a single request. Requires the Admin role. Returns a 207 Multi-Status response with the outcome for each connection. When transferring ownership, credentials associated with the connection are not automatically transferred to the new owner; the new owner must provide their own credentials.
   *
   * @param body an object with the body content
   * @throws UpdateDataConnectionsHttpError
   */
  updateDataConnections: typeof updateDataConnections;
  /**
   * Use this operation to delete a data connection by its unique identifier. To delete a connection by name instead of ID, set the `type` query parameter to `connectionname`. This action cannot be undone.
   * @example
   * deleteDataConnection(
   *   "82ee7b44-0c4d-491b-bd38-82640c0430a5",
   *   {
   *     type: "connectionname",
   *     spaceId: "611bcebaeec1203d88211ac4"
   *   }
   * )
   *
   * @param qID The unique identifier of the connection.
   * @param query an object with query parameters
   * @throws DeleteDataConnectionHttpError
   */
  deleteDataConnection: typeof deleteDataConnection;
  /**
   * Use this operation to retrieve a single data connection by its unique identifier. To look up a connection by name instead of ID, set the `type` query parameter to `connectionname`. Returns the full connection object including the caller's access privileges.
   * @example
   * getDataConnection(
   *   "82ee7b44-0c4d-491b-bd38-82640c0430a5",
   *   {
   *     extended: false,
   *     type: "connectionname",
   *     credentialId: "22379dc5-076e-4fec-ae20-5529a8a57dc2",
   *     byCredentialName: false,
   *     spaceId: "611bcebaeec1203d88211ac4",
   *     noCache: false,
   *     parseConnection: true
   *   }
   * )
   *
   * @param qID The unique identifier of the connection.
   * @param query an object with query parameters
   * @throws GetDataConnectionHttpError
   */
  getDataConnection: typeof getDataConnection;
  /**
   * Use this operation to apply partial updates to a data connection using JSON Patch operations. To patch a connection by name instead of ID, set the `type` query parameter to `connectionname`. Some data sources require an OAuth authentication code; provide it using the `qlik-auth-code` request header.
   *
   * @param qID The unique identifier of the connection.
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws PatchDataConnectionHttpError
   */
  patchDataConnection: typeof patchDataConnection;
  /**
   * Use this operation to replace a data connection with the values provided in the request body. All required fields must be included. To update a connection by name instead of ID, set the `type` query parameter to `connectionname`. Credentials embedded in or associated with the connection are created or updated based on the fields provided.
   *
   * @param qID The unique identifier of the connection.
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws UpdateDataConnectionHttpError
   */
  updateDataConnection: typeof updateDataConnection;
  /**
   * Clears the cache for data-connections api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the data-connections api
 */
declare const dataConnectionsExport: DataConnectionsAPI;
//#endregion
export { ActionDeleteRequest, ActionDuplicateRequest, ActionUpdateRequest, BulkResponse, ConnectionCreate, ConnectionCreateResponse, ConnectionGet, ConnectionUpdate, Connections, CreateDataConnectionHttpError, CreateDataConnectionHttpResponse, DataConnectionsAPI, DcaasConnectionCreate, DcaasConnectionCreateAuthResponse, DeleteDataConnectionHttpError, DeleteDataConnectionHttpResponse, DeleteDataConnectionsHttpError, DeleteDataConnectionsHttpResponse, DuplicateDataConnectionsHttpError, DuplicateDataConnectionsHttpResponse, Error, Errors, GetDataConnectionHttpError, GetDataConnectionHttpResponse, GetDataConnectionsHttpError, GetDataConnectionsHttpResponse, Link, Meta, PatchDataConnectionHttpError, PatchDataConnectionHttpResponse, PatchRequest, Privilege, ResponseErrors, TopLevelLink, UpdateDataConnectionHttpError, UpdateDataConnectionHttpResponse, UpdateDataConnectionsHttpError, UpdateDataConnectionsHttpResponse, clearCache, createDataConnection, dataConnectionsExport as default, deleteDataConnection, deleteDataConnections, duplicateDataConnections, getDataConnection, getDataConnections, patchDataConnection, data_connections_d_exports as t, updateDataConnection, updateDataConnections };