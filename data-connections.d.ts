import { A as ApiCallOptions } from './global.types-oglBSD7D.js';
import './auth-types-nnUcWhuU.js';

type ActionDeleteRequest = {
    connections: {
        /** ID of connection */
        id: string;
        /** Connection name */
        name?: string;
    }[];
};
type ActionDuplicateRequest = {
    /** ID of the source connection being duplicated */
    id: string;
    /** Optional name for the duplicated connection, must be unique in the target scope. If not specified, a name will be automatically generated */
    name?: string;
    /** Optional credential password, specify to override credential embedded (or associated) with the source connection */
    qPassword?: string;
    /** Optional credential username, specify to override credential embedded (or associated) with the source connection */
    qUsername?: string;
    /** Optional target space ID for the duplicated connection. If not specified, the duplicated connection will be in the same space as the source connection */
    spaceId?: string;
};
type ActionUpdateRequest = {
    connections: {
        /** Connection ID */
        id: string;
        /** Connection name */
        name?: string;
        /** User ID to which the connection will be updated. If not present, the connection's owner wont be changed */
        ownerId?: string;
        /** Space ID to which the connection will be updated. If not present, the connection's space wont be changed. If it is empty string, then the connection will be moved to the personal space of the user identified by ownerId (If ownerId is undefined, then the connection will be in oroginal owner's personal space) */
        spaceId?: string;
        /** Space type. Required when spaceId is specified */
        spaceType?: "personal" | "shared" | "managed" | "data";
    }[];
};
type BulkResponse = {
    data?: {
        error?: Error;
        /** ID of the resource */
        id: string;
        /** Status code of operation on resource identified by ID */
        status: number;
    }[];
};
/**
 * Schema used to create a connection with given connection string (i.e. qConnectStatement) along with other metadata
 */
type ConnectionCreate = {
    /** ID of the datasource associated with this connection */
    datasourceID: string;
    /** App ID */
    owner?: string;
    /** 0 or 1 value indicating whether the data connector is 64-bit (0) or 32-bit (1). Defaults to 0 if not specified. */
    qArchitecture?: 0 | 1;
    /** Connection string for the data connection */
    qConnectStatement: string;
    /** String that contains connection specific secret (or password) that requires encryption before persist to database. This field is connection level secret */
    qConnectionSecret?: string;
    /** ID of the credential associated with the connection */
    qCredentialsID?: string;
    /** Name of the credential associated with the connection */
    qCredentialsName?: string;
    /** Unique identifier (UUID) for the data connection as specified by the Sense engine. A UUID will be generated automatically if this field is not specified or empty */
    qEngineObjectID?: string;
    /** Unique identifier (UUID) for the data connection. A UUID will be generated automatically if qID is not specified or empty */
    qID?: string;
    /** Indicates the type of user associated with the data connection. */
    qLogOn?: "0" | "1" | "LOG_ON_SERVICE_USER" | "LOG_ON_CURRENT_USER";
    /** Descriptive name of the data connection */
    qName: string;
    /** Any logon password associated with the data connection (connector encoded) */
    qPassword?: string;
    /** Indicates whether or not to create a credential-less connection */
    qSeparateCredentials?: boolean;
    /** Type of connection - indicates connection provider type */
    qType: string;
    /** Any logon username associated with the data connection */
    qUsername?: string;
    /** QRI string of the connection. The string will be persisted to mongo when the request is originated from trusted client (i.e. dcaas) to avoid invalid QRi string. */
    qriInRequest?: string;
    /** ID of the space to which the connection belongs */
    space?: string;
    /** List of tags attached to the connection (allow max 32 tags) */
    tags?: string[];
};
/**
 * Essential fields of a connection
 */
type ConnectionCreateResponse = {
    /** Datetime when the connection was created */
    created?: string;
    links?: Link;
    /** Array of string (i.e. update, delete, read) indicating the user's privileges on the associated connection */
    privileges: Privilege[];
    /** 0 or 1 value indicating whether the data connector is 64-bit (0) or 32-bit (1). Defaults to 0 if not specified. */
    qArchitecture: 0 | 1;
    /** Connection string for the data connection */
    qConnectStatement: string;
    /** ID of the credential associated with the connection */
    qCredentialsID?: string;
    /** Name of the credential associated with the connection */
    qCredentialsName?: string;
    /** Unique identifier (UUID) for the data connection, must be same as qID */
    qEngineObjectID: string;
    /** Unique identifier (UUID) for the data connection, must be same as qEngineObjectID */
    qID: string;
    /** Indicates the type of user associated with the data connection. */
    qLogOn: "0" | "1" | "LOG_ON_SERVICE_USER" | "LOG_ON_CURRENT_USER";
    /** Descriptive name of the data connection */
    qName: string;
    /** Reference key of credential in redis */
    qReferenceKey?: string;
    /** Indicates whether or not this is a credential-less connection */
    qSeparateCredentials: boolean;
    /** Type of connection - indicates connection provider type */
    qType: string;
    /** ID of the space to which the connection belongs */
    space?: string;
    /** Datetime when the connection was last updated */
    updated?: string;
    /** User ID of the connection's creator */
    user?: string;
};
/**
 * Essential fields of a connection
 */
type ConnectionGet = {
    /** List of connection parsed from connection string (only available when query parseConnection=true is set) */
    connectionProperties?: unknown;
    /** Datetime when the connection was created */
    created: string;
    /** Data source ID */
    datasourceID?: string;
    links?: Link;
    /** Array of string (i.e. update, delete, read) indicating the user's privileges on the associated connection */
    privileges: Privilege[];
    /** 0 or 1 value indicating whether the data connector is 64-bit (0) or 32-bit (1). Defaults to 0 if not specified. */
    qArchitecture: 0 | 1;
    /** Connection string for the data connection */
    qConnectStatement: string;
    /** String that contains connection specific secret (or password). This field will not be included in response of GET /data-connections, will only be included in the response of GET /data-connections/{qID} */
    qConnectionSecret?: string;
    /** ID of the credential associated with the connection */
    qCredentialsID?: string;
    /** Unique identifier (UUID) for the data connection, must be same as qID */
    qEngineObjectID: string;
    /** Unique identifier (UUID) for the data connection, must be same as qEngineObjectID */
    qID: string;
    /** Indicates the type of user associated with the data connection */
    qLogOn: 0 | 1;
    /** Descriptive name of the data connection */
    qName: string;
    /** Indicates whether or not this is a credential-less connection */
    qSeparateCredentials: boolean;
    /** Type of connection, i.e. provider type of underlying connector */
    qType: string;
    /** Encrypted base Qri string */
    qri?: string;
    /** ID of the space to which the connection belongs */
    space?: string;
    /** List of tags attached to the connection */
    tags?: string[];
    /** Tenant ID of the connection's creator */
    tenant: string;
    /** Datetime when the connection was last updated */
    updated: string;
    /** User ID of the connection's creator */
    user: string;
};
type ConnectionUpdate = {
    /** ID of the datasource associated with this connection */
    datasourceID?: string;
    /** 0 or 1 value indicating whether the data connector is 64-bit (0) or 32-bit (1). Defaults to 0 if not specified. */
    qArchitecture?: 0 | 1;
    /** Connection string for the data connection */
    qConnectStatement: string;
    /** String that contains connection level secret (or password). If this field presents in request, then existing connection secret will be updated to its value. If is an empty string, then eixsting connection secret will be cleared. If this field is missing, existing secret will not be updated. */
    qConnectionSecret?: string;
    /** ID of the credential associated with the connection */
    qCredentialsID?: string;
    /** Name of the credential associated with the connection */
    qCredentialsName?: string;
    /** Unique identifier for the data connection as specified by the Sense engine */
    qEngineObjectID: string;
    /** Unique identifier for the data connection */
    qID: string;
    /** Indicates the type of user associated with the data connection. */
    qLogOn?: "0" | "1" | "LOG_ON_SERVICE_USER" | "LOG_ON_CURRENT_USER";
    /** Descriptive name of the data connection */
    qName: string;
    /** Any logon password associated with the data connection */
    qPassword?: string;
    /** Indicates whether or not this is a credential-less connection */
    qSeparateCredentials?: boolean;
    /** Type of connection - indicates connection provider type */
    qType: string;
    /** Any logon username associated with the data connection */
    qUsername?: string;
    /** ID of the space to which the connection belongs */
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
    /** When set to true, only authentication URL will be returned (i.e. no connection will be created) if datasource supports OAuth, and other properties set in the request will ignored. This property will be ignored if the request is not OAuth or datasource doesn't support OAuth */
    authUrlOnly?: boolean;
    /** Connection properties required to create dataconnection for the given datasource, which is defined by the response of 'GET /v1/data-sources/:{datasourceId}/api-specs' */
    connectionProperties: unknown;
    /** ID of the datasource of the connection */
    datasourceID: string;
    /** Descriptive name of the data connection */
    qName: string;
    /** ID of the space in which the connection shall be created. Connection will be created in user's personal space if undefined */
    space?: string;
    /** List of tags attached to the connection (allow max 31 tags) */
    tags?: string[];
};
/**
 * Authentication URL response for OAuth datasources (when authUrlOnly is set to true in request)
 */
type DcaasConnectionCreateAuthResponse = {
    /** Authentication URL used to generate authentication code for datasources supporting OAuth */
    authUrl: string;
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
    /** Link to cirrent query */
    self: {
        /** URL pointing to the resource */
        href: string;
    };
};
type Meta = {
    /** Total count of resources being requested. */
    count?: number;
};
type PatchRequest = {
    patchData: {
        /** Operation type */
        op?: "add" | "replace" | "remove";
        /** Path to the target field to be patched */
        path?: string;
        /** The value used for the patch, only needed for 'add' or 'replace'. Value type could be either string or integer, should match with the type of the target field */
        value?: string;
    }[];
};
/**
 * Access type allowed on associated data connection
 */
type Privilege = "list" | "update" | "delete" | "read" | "change_owner" | "change_space";
type ResponseErrors = {
    errors?: Errors;
};
type TopLevelLink = {
    /** URL link to next page of requested resources (available to paged request only) */
    next?: {
        /** URL pointing to the next page of resources */
        href: string;
    };
    /** URL link to previous page of requested resources (available to paged request only) */
    prev?: {
        /** URL pointing to the previous page of resources */
        href: string;
    };
    /** Link to cirrent query */
    self: {
        /** URL pointing to the resource */
        href: string;
    };
};
/**
 * Gets a list of connections
 *
 * @param query an object with query parameters
 * @throws GetDataConnectionsHttpError
 */
declare const getDataConnections: (query: {
    /** Sort results will be returned in case insensitive order if set to true (Only used along with sort query) */
    caseinsensitive?: boolean;
    /** Provides an alternate name to be used for data[] element in GET response. */
    dataName?: string;
    /** Returns extended list of properties (e.g. encrypted credential string) when set to true. */
    extended?: boolean;
    /** Filtering resources by properties (filterable properties only) using SCIM filter string. Note the filter string only applies to connections managed by data-connections service, i.e. filtering doesn't apply to DataFile connections. */
    filter?: string;
    /** Base Qri (encrypted) will be returned when the query is set to true, default is false */
    includeQris?: boolean;
    /** Number of resources to be returned (between 1 and 100) */
    limit?: number;
    /** ICU locale ID, used only when caseinsensitive is set to true, default to 'en' if undefined */
    locale?: string;
    /** Datafiles connections will not be returned if set to true */
    noDatafiles?: boolean;
    /** Filtering on connections, return connections owned by the caller if set to true (doesn't apply to datafiles connections) */
    ownedByMe?: boolean;
    /** Filtering on datafile connections by owner (i.e. app) ID. */
    owner?: string;
    /** Pagination sursor string, which is generated auotmatically in previous pagination query. */
    page?: string;
    /** Filtering on personal connections, ignored if spaceId is defined in same request */
    personal?: boolean;
    /** Name of field sort on for pagination, with prefix with + or - indicating ascending or descending order. When used for data-connections, sort field only applies to non-datafiles connections. Whatever sorting order is, datafiles connections will be returned after all regular connections being returned. */
    sort?: string;
    /** Filtering on connections by space ID */
    spaceId?: string;
    /** Filtering on userId. Requires admin role if specified userId doesn't match that is defined in JWT. */
    userId?: string;
}, options?: ApiCallOptions) => Promise<GetDataConnectionsHttpResponse>;
type GetDataConnectionsHttpResponse = {
    data: Connections;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetDataConnectionsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetDataConnectionsHttpResponse>;
};
type GetDataConnectionsHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Creates a new connection. Depending on the fields defined in the request body, credentials embedded (or associated) in the connection can be updated or created.
 *
 * @param body an object with the body content
 * @throws CreateDataConnectionHttpError
 */
declare const createDataConnection: (body: ConnectionCreate | DcaasConnectionCreate, options?: ApiCallOptions) => Promise<CreateDataConnectionHttpResponse>;
type CreateDataConnectionHttpResponse = {
    data: ConnectionCreateResponse | DcaasConnectionCreateAuthResponse;
    headers: Headers;
    status: number;
};
type CreateDataConnectionHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Delete multiple connections, only available to Admin
 *
 * @param body an object with the body content
 * @throws DeleteDataConnectionsHttpError
 */
declare const deleteDataConnections: (body: ActionDeleteRequest, options?: ApiCallOptions) => Promise<DeleteDataConnectionsHttpResponse>;
type DeleteDataConnectionsHttpResponse = {
    data: BulkResponse;
    headers: Headers;
    status: number;
};
type DeleteDataConnectionsHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Duplicate a connection
 *
 * @param body an object with the body content
 * @throws DuplicateDataAConnectionHttpError
 */
declare const duplicateDataAConnection: (body: ActionDuplicateRequest, options?: ApiCallOptions) => Promise<DuplicateDataAConnectionHttpResponse>;
type DuplicateDataAConnectionHttpResponse = {
    data: ConnectionCreateResponse;
    headers: Headers;
    status: number;
};
type DuplicateDataAConnectionHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Update multiple connections, only available to Admin
 *
 * @param body an object with the body content
 * @throws UpdateDataConnectionsHttpError
 */
declare const updateDataConnections: (body: ActionUpdateRequest, options?: ApiCallOptions) => Promise<UpdateDataConnectionsHttpResponse>;
type UpdateDataConnectionsHttpResponse = {
    data: BulkResponse;
    headers: Headers;
    status: number;
};
type UpdateDataConnectionsHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Deletes the specified data connection by ID (or by name when type=connectionname is set in query)
 *
 * @param qID Connection ID
 * @param query an object with query parameters
 * @throws DeleteDataConnectionHttpError
 */
declare const deleteDataConnection: (qID: string, query: {
    /** Filtering on connections by space ID */
    spaceId?: string;
    /** Connection / credential ID defined in path become connection / credential name when this query parameter is set */
    type?: "connectionname" | "credentialname";
}, options?: ApiCallOptions) => Promise<DeleteDataConnectionHttpResponse>;
type DeleteDataConnectionHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteDataConnectionHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Retrieves a connection by connection ID, or by name when the query parameter "type" is set to "connectionname."
 *
 * @param qID Connection ID
 * @param query an object with query parameters
 * @throws GetDataConnectionHttpError
 */
declare const getDataConnection: (qID: string, query: {
    /** If set to true, credentialId in the query will be intepreted as credential's name */
    byCredentialName?: boolean;
    /** Credential ID */
    credentialId?: string;
    /** Returns extended list of properties (e.g. encrypted credential string) when set to true. */
    extended?: boolean;
    /** datafiles connections will be returned from cache by default (if data-connections is configured to use cache), this query parameter is used disable this default behavior, e.g. return an update-to-date datafiles connection if the query is set to true */
    noCache?: boolean;
    /** List of connection properties shall be returned when the query is set to true, default is false */
    parseConnection?: boolean;
    /** Filtering on connections by space ID */
    spaceId?: string;
    /** Connection / credential ID defined in path become connection / credential name when this query parameter is set */
    type?: "connectionname" | "credentialname";
}, options?: ApiCallOptions) => Promise<GetDataConnectionHttpResponse>;
type GetDataConnectionHttpResponse = {
    data: ConnectionGet;
    headers: Headers;
    status: number;
};
type GetDataConnectionHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Patches a connection specified by connection ID (or by name when type=connectionname is set in query).
 *
 * @param qID Connection ID
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws PatchDataConnectionHttpError
 */
declare const patchDataConnection: (qID: string, query: {
    /** Connection / credential ID defined in path become connection / credential name when this query parameter is set */
    type?: "connectionname" | "credentialname";
}, body: PatchRequest, options?: ApiCallOptions) => Promise<PatchDataConnectionHttpResponse>;
type PatchDataConnectionHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchDataConnectionHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Updates a connection specified by connection ID (or by name when type=connectionname is set in query). Depends on the fields defined in the request body, credentials embedded (or associated) in the connection can be updated or created.
 *
 * @param qID Connection ID
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws UpdateDataConnectionHttpError
 */
declare const updateDataConnection: (qID: string, query: {
    /** Filtering on connections by space ID */
    spaceId?: string;
    /** Connection / credential ID defined in path become connection / credential name when this query parameter is set */
    type?: "connectionname" | "credentialname";
}, body: ConnectionUpdate, options?: ApiCallOptions) => Promise<UpdateDataConnectionHttpResponse>;
type UpdateDataConnectionHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type UpdateDataConnectionHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for data-connections api requests.
 */
declare function clearCache(): void;
interface DataConnectionsAPI {
    /**
     * Gets a list of connections
     *
     * @param query an object with query parameters
     * @throws GetDataConnectionsHttpError
     */
    getDataConnections: typeof getDataConnections;
    /**
     * Creates a new connection. Depending on the fields defined in the request body, credentials embedded (or associated) in the connection can be updated or created.
     *
     * @param body an object with the body content
     * @throws CreateDataConnectionHttpError
     */
    createDataConnection: typeof createDataConnection;
    /**
     * Delete multiple connections, only available to Admin
     *
     * @param body an object with the body content
     * @throws DeleteDataConnectionsHttpError
     */
    deleteDataConnections: typeof deleteDataConnections;
    /**
     * Duplicate a connection
     *
     * @param body an object with the body content
     * @throws DuplicateDataAConnectionHttpError
     */
    duplicateDataAConnection: typeof duplicateDataAConnection;
    /**
     * Update multiple connections, only available to Admin
     *
     * @param body an object with the body content
     * @throws UpdateDataConnectionsHttpError
     */
    updateDataConnections: typeof updateDataConnections;
    /**
     * Deletes the specified data connection by ID (or by name when type=connectionname is set in query)
     *
     * @param qID Connection ID
     * @param query an object with query parameters
     * @throws DeleteDataConnectionHttpError
     */
    deleteDataConnection: typeof deleteDataConnection;
    /**
     * Retrieves a connection by connection ID, or by name when the query parameter "type" is set to "connectionname."
     *
     * @param qID Connection ID
     * @param query an object with query parameters
     * @throws GetDataConnectionHttpError
     */
    getDataConnection: typeof getDataConnection;
    /**
     * Patches a connection specified by connection ID (or by name when type=connectionname is set in query).
     *
     * @param qID Connection ID
     * @param query an object with query parameters
     * @param body an object with the body content
     * @throws PatchDataConnectionHttpError
     */
    patchDataConnection: typeof patchDataConnection;
    /**
     * Updates a connection specified by connection ID (or by name when type=connectionname is set in query). Depends on the fields defined in the request body, credentials embedded (or associated) in the connection can be updated or created.
     *
     * @param qID Connection ID
     * @param query an object with query parameters
     * @param body an object with the body content
     * @throws UpdateDataConnectionHttpError
     */
    updateDataConnection: typeof updateDataConnection;
    /**
     * Clears the cache for data-connections api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the data-connections api
 */
declare const dataConnectionsExport: DataConnectionsAPI;

export { type ActionDeleteRequest, type ActionDuplicateRequest, type ActionUpdateRequest, type BulkResponse, type ConnectionCreate, type ConnectionCreateResponse, type ConnectionGet, type ConnectionUpdate, type Connections, type CreateDataConnectionHttpError, type CreateDataConnectionHttpResponse, type DataConnectionsAPI, type DcaasConnectionCreate, type DcaasConnectionCreateAuthResponse, type DeleteDataConnectionHttpError, type DeleteDataConnectionHttpResponse, type DeleteDataConnectionsHttpError, type DeleteDataConnectionsHttpResponse, type DuplicateDataAConnectionHttpError, type DuplicateDataAConnectionHttpResponse, type Error, type Errors, type GetDataConnectionHttpError, type GetDataConnectionHttpResponse, type GetDataConnectionsHttpError, type GetDataConnectionsHttpResponse, type Link, type Meta, type PatchDataConnectionHttpError, type PatchDataConnectionHttpResponse, type PatchRequest, type Privilege, type ResponseErrors, type TopLevelLink, type UpdateDataConnectionHttpError, type UpdateDataConnectionHttpResponse, type UpdateDataConnectionsHttpError, type UpdateDataConnectionsHttpResponse, clearCache, createDataConnection, dataConnectionsExport as default, deleteDataConnection, deleteDataConnections, duplicateDataAConnection, getDataConnection, getDataConnections, patchDataConnection, updateDataConnection, updateDataConnections };
