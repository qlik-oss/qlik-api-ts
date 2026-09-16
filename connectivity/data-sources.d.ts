import { x as ApiCallOptions } from "../chunks/auth-types-yKuw6LLB.js";
import "../chunks/invoke-fetch-DdmiOIkr.js";
declare namespace data_sources_d_exports {
  export { ApiSpecResponse, ConnectionInstance, ConnectorNodesInfo, DataSourceNew, DataSourceSettingsRequest, DataSourceSettingsResponse, DataSourcesAPI, DataSourcesResponseNew, DcaasApiError, EndpointInstanceRef, FilterDataSourceEndpointsHttpError, FilterDataSourceEndpointsHttpResponse, GenerateQriDataSourcesHttpError, GenerateQriDataSourcesHttpResponse, GetDataSourceApiSpecsHttpError, GetDataSourceApiSpecsHttpResponse, GetDataSourceEndpointsHttpError, GetDataSourceEndpointsHttpResponse, GetDataSourceGatewaysHttpError, GetDataSourceGatewaysHttpResponse, GetDataSourceSettingsHttpError, GetDataSourceSettingsHttpResponse, GetDataSourcesHttpError, GetDataSourcesHttpResponse, GetEndpointsResponse, PostEndpointRequestWithConnectionId, PostEndpointRequestWithConnectionName, PostEndpointRequestWithConnectionString, PostEndpointRequestWithDatasourceID, PostEndpointResponse, PublicApiError, PutDataSourceSettingsHttpError, PutDataSourceSettingsHttpResponse, QriConnectionType, QriDefinition, QriPropertyRef, QriRequest, QriRequestItem, QriRequestItemPropertyArray, QriRequestPathPropertyArray, QriResponseItem, QriTemplate, ResponseErrors, UiInfo, clearCache, dataSourcesExport as default, filterDataSourceEndpoints, generateQriDataSources, getDataSourceApiSpecs, getDataSourceEndpoints, getDataSourceGateways, getDataSourceSettings, getDataSources, putDataSourceSettings };
}
/**
 * Connection property schema and connector metadata for a datasource.
 */
export type ApiSpecResponse = {
  /** Map of connection property keys and their value types required to establish a connection to this datasource. */
  connectionProperties: unknown;
  /** Connector provider executable name. */
  connectorProvider: string;
  /** Version of the connector provider. */
  connectorVersion: string;
};
/**
 * Resolved connection details including credentials and QRI reference for an active endpoint.
 */
export type ConnectionInstance = {
  /** Unique identifier of the connection. */
  connectionId?: string;
  /** Connection string. */
  connectionString: string;
  /** Type of data interface used by the connection (for example, `data` for standard data loading). */
  dataInterfaceType: string;
  /** Password associated with the connection. */
  password?: string;
  /** Qlik Resource Identifier (QRI) for the connection. */
  qri?: string;
  /** Space-qualified name of the connection in the format `SpaceName:ConnectionName`. */
  spaceQualifiedConnectionName?: string;
  /** Username associated with the connection. */
  user?: string;
};
/**
 * Connector node metadata including URL, contract type, and datasource cache status.
 */
export type ConnectorNodesInfo = {
  /** List of datasource IDs currently cached from the connector provider. */
  cachedDataSources?: string[];
  /** Protocol contract type used to communicate with the connector node (between 0 and 3, inclusive). */
  contractType: number;
  /** When `true`, the cached datasource list is up to date. */
  dataSourcesUpdated: boolean;
  /** Display name of the connector provider. */
  providerName: string;
  /** Current operational state of the connector node. */
  state: string;
  /** Address of the connector node. */
  url: string;
};
/**
 * Complete datasource metadata including connector information, capabilities, and optional UI details.
 */
export type DataSourceNew = {
  /** List of capabilities supported by the datasource. */
  capabilities?: string[];
  /** Override URL for data loading. May be null if the default URL is used. */
  dataLoadUrlOverride?: string;
  /** Unique identifier of the datasource. */
  dataSourceId: string;
  /** Name of the property used to identify the datasource type in a connection string. May be null if not applicable. */
  dataSourcePropertyName?: string;
  /** Category type of the datasource. */
  dataSourceType?: string;
  /** When `true`, the datasource is disabled and excluded from results unless `includeDisabled` is set. */
  disabled?: boolean;
  /** Display name of the datasource. */
  name: string;
  /** Connector provider executable name. */
  provider: string;
  /** Display name of the connector provider. */
  providerName: string;
  /** QRI definition template for a datasource, specifying connection, path, and item parts. */
  qriDefinition?: QriDefinition;
  /** UI metadata for the datasource. Present only when `includeui` is `true` in the request. */
  uiInfo?: UiInfo;
};
/**
 * Request body for updating the configuration settings of a datasource.
 */
export type DataSourceSettingsRequest = {
  /** When `true`, disables the datasource. When `false`, enables it. */
  disabled: boolean;
};
/**
 * Current configuration settings for a datasource.
 */
export type DataSourceSettingsResponse = {
  /** When `true`, the datasource is disabled. When `false`, it is enabled. */
  disabled?: boolean;
};
/**
 * Response containing the list of available datasources and optional connector node details.
 */
export type DataSourcesResponseNew = {
  /** List of connector nodes. Present only when `detail` is `true` in the request. */
  connectorNodes?: ConnectorNodesInfo[];
  /** List of available datasources with their metadata. */
  dataSources: DataSourceNew[];
  /** ISO 8601 timestamp of when the datasource list was last updated. */
  updatedAt: string;
};
/**
 * DCaaS-specific error information including error code, code name, and detailed message.
 */
export type DcaasApiError = {
  /** DCaaS-specific numeric error code. */
  dcaasErrorCode?: number;
  /** Human-readable name corresponding to the DCaaS error code. */
  errorCodeName?: string;
  /** Summary of the error condition. */
  errorMessage?: string;
};
export type EndpointInstanceRef = {
  /** Unique identifier of the datasource associated with this endpoint. */
  dataSourceId: string;
  /** Unique identifier of the endpoint instance. */
  id: string;
  /** When `true`, the `url` field contains a pod-specific URL. */
  isPodUrl?: boolean;
  /** gRPC URL of the endpoint. */
  url: string;
};
/**
 * Response containing the list of active datasource endpoint references on the connector node.
 */
export type GetEndpointsResponse = {
  /** Array of active endpoint instances with their connection details. */
  endpoints?: EndpointInstanceRef[];
};
export type PostEndpointRequestWithConnectionId = {
  /** When `true`, verifies that user credentials are present for connections configured with separate credentials. The default is `false`. */
  checkCredentials?: boolean;
  /** The unique identifier of the connection to use for the endpoint. */
  connectionId: string;
  /** Unique identifier of the reload session associated with this endpoint request. */
  reloadId?: string;
  /** Type of endpoint to provision. */
  type?: "rld" | "dq";
};
export type PostEndpointRequestWithConnectionName = {
  /** When `true`, verifies that user credentials are present for connections configured with separate credentials. The default is `false`. */
  checkCredentials?: boolean;
  /** The name of the connection to use for the endpoint. The service resolves
   * the connection name to an active instance. If the name is space-qualified
   * (for example, `MySpace:ConnectionName`), `spaceId` is not required and is
   * ignored. If the name uses the current-space format (for example,
   * `:ConnectionName`), `spaceId` is used for resolution; the personal space
   * is assumed when `spaceId` is omitted. */
  connectionName: string;
  /** Unique identifier of the reload session associated with this endpoint request. */
  reloadId?: string;
  /** The unique identifier of the space containing the connection. Required only when `connectionName` is unqualified (not space-prefixed). */
  spaceId?: string;
  /** Type of endpoint to provision. */
  type?: "rld" | "dq";
};
export type PostEndpointRequestWithConnectionString = {
  /** When `true`, verifies that user credentials are present for connections configured with separate credentials. The default is `false`. */
  checkCredentials?: boolean;
  /** Connection string in Qlik CONNECT format. */
  connectionString: string;
  /** Unique identifier of the reload session associated with this endpoint request. */
  reloadId?: string;
  /** Type of endpoint to provision. */
  type?: "rld" | "dq";
};
export type PostEndpointRequestWithDatasourceID = {
  /** When `true`, verifies that user credentials are present for connections configured with separate credentials. The default is `false`. */
  checkCredentials?: boolean;
  /** The unique identifier of the datasource to use for the endpoint. */
  dataSourceId: string;
  /** Unique identifier of the reload session associated with this endpoint request. */
  reloadId?: string;
  /** Type of endpoint to provision. */
  type?: "rld" | "dq";
};
/**
 * Response containing the provisioned endpoint reference and resolved connection instance.
 */
export type PostEndpointResponse = {
  /** Resolved connection details including credentials and QRI reference for an active endpoint. */
  connection?: ConnectionInstance;
  endpoint?: EndpointInstanceRef;
};
/**
 * Standard error response object with code, title, and details.
 */
export type PublicApiError = {
  /** Unique DCaaS error code (for example, `DCAAS-2001`). */
  code: string;
  /** Detailed explanation of the error and possible remediation steps. */
  detail?: string;
  /** Additional context or debugging information related to the error. */
  meta?: unknown;
  /** Short human-readable error title. */
  title: string;
};
/**
 * Type of connection identifier used in QRI generation requests:
 *   * `id` — connection UUID
 *   * `name` — connection name, optionally space-qualified (for example, `MySpace:MyConnection` or `:MyConnection`)
 *   * `properties` — connection string in Qlik CONNECT format
 */
export type QriConnectionType = "id" | "name" | "properties";
/**
 * QRI definition template for a datasource, specifying connection, path, and item parts.
 */
export type QriDefinition = {
  connectionPart: unknown & QriTemplate;
  itemPart?: unknown & {
    /** Literal prefix prepended to the item segment. */
    prefix?: string;
  } & QriTemplate;
  pathPart: unknown & {
    /** Literal prefix prepended to the path segment. */
    prefix?: string;
  } & QriTemplate;
  /** Fixed prefix for QRIs generated by this datasource. */
  qriPrefix: string;
};
/**
 * A single property value used to populate a QRI template placeholder.
 */
export type QriPropertyRef = {
  /** The name of the property as defined in the QRI definition template. When omitted, properties are treated as an ordered array. */
  name?: string;
  /** The value to substitute for this property in the QRI template. */
  value?: string;
};
/**
 * Batch request to generate QRI values for multiple connections.
 */
export type QriRequest = {
  /** Array of QRI generation requests. Maximum 100 items per batch. */
  data?: QriRequestItem[];
  /** When `true`, returns raw QRI values. When `false`, returns hashed QRI values. */
  rawValues?: boolean;
};
/**
 * Single QRI generation request for a specific connection.
 */
export type QriRequestItem = {
  /** The connection identifier — a UUID, name, or connection string — corresponding to the value of `connectionType`. */
  connection: string;
  /** Type of connection identifier used in QRI generation requests:
   *   * `id` — connection UUID
   *   * `name` — connection name, optionally space-qualified (for example, `MySpace:MyConnection` or `:MyConnection`)
   *   * `properties` — connection string in Qlik CONNECT format */
  connectionType: QriConnectionType;
  /** The unique identifier of the datasource for the connection. Must match the datasource type when `connectionType` is `properties`. */
  dataSourceId?: string;
  /** Optional ordered list of property values used to populate the item segment of the QRI template. */
  itemProperties?: QriRequestItemPropertyArray;
  /** Ordered list of property values used to populate the path segment of the QRI template. */
  pathProperties?: QriRequestPathPropertyArray;
  /** Optional caller-provided identifier used to correlate this request entry with its response. Should be unique within a batch request. */
  requestId?: string;
  /** The unique identifier of the space containing the connection. Required for name-based lookups; ignored when `connectionType` is `properties`. */
  spaceId?: string;
};
/**
 * Optional ordered list of property values used to populate the item segment of the QRI template.
 */
export type QriRequestItemPropertyArray = QriPropertyRef[];
/**
 * Ordered list of property values used to populate the path segment of the QRI template.
 * @example
 * [
 *   {
 *     name: "database",
 *     value: "Northwind"
 *   },
 *   {
 *     name: "schema",
 *     value: "Person"
 *   },
 *   {
 *     name: "table",
 *     value: "Address"
 *   }
 * ]
 */
export type QriRequestPathPropertyArray = QriPropertyRef[];
/**
 * Result of a single QRI generation request, including status and the generated QRI value.
 */
export type QriResponseItem = {
  connection: string;
  /** Type of connection identifier used in QRI generation requests:
   *   * `id` — connection UUID
   *   * `name` — connection name, optionally space-qualified (for example, `MySpace:MyConnection` or `:MyConnection`)
   *   * `properties` — connection string in Qlik CONNECT format */
  connectionType: QriConnectionType;
  dataSourceId: string;
  isFullyQualified: boolean;
  qri: string;
  /** Echo of the caller-provided `requestId` from the corresponding request entry. */
  requestId?: string;
  /** Status of this QRI generation entry. */
  status?: {
    /** HTTP-style status code for this entry. `200` indicates success; values above `200` indicate failure. Detailed error information is included in `errorResponse` on failure. */
    code: number;
    /** DCaaS-specific error information including error code, code name, and detailed message. */
    errorResponse?: DcaasApiError;
  };
};
/**
 * Template definition used to construct a QRI segment from connection property values.
 */
export type QriTemplate = {
  /** Ordered list of property names referenced by the template placeholders. */
  properties: string[];
  /** Template string with `{propertyName}` placeholders for connection property values. */
  template: string;
};
/**
 * Error response containing one or more error details.
 */
export type ResponseErrors = {
  /** Array of error objects describing what went wrong. */
  errors?: PublicApiError[];
};
/**
 * UI metadata for the datasource. Present only when `includeui` is `true` in the request.
 */
export type UiInfo = {
  /** URL of the connector's connection dialog. */
  connectUrl?: string;
  /** URL of the connector's main iframe entry point. */
  connectorMainUrl?: string;
  /** URL of the connector's credentials dialog. */
  credentialsUrl?: string;
  /** URL of the rectangular connector icon. */
  iconRectUrl?: string;
  /** URL of the square connector icon. */
  iconSquareUrl?: string;
  /** When `true`, the connector UI is rendered in an iframe. */
  iframe?: boolean;
  /** Indicates whether the datasource supports the load model feature. */
  loadModelSupport?: string;
  /** URL of the connector's data selection dialog. */
  selectUrl?: string;
};
/**
 * Returns the list of datasources available on the connector node. Each entry
 * includes the connector provider, capabilities, and optional UI metadata. Filter
 * by `dataSourceId` to retrieve a specific datasource, or set `includeDisabled`
 * to `true` to include datasources that have been disabled.
 * @example
 * getDataSources(
 *   {
 *     dataSourceId: "rest",
 *     detail: true,
 *     includeDisabled: true,
 *     includeui: true
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetDataSourcesHttpError
 */
export declare function getDataSources(query: {
  /** Filters results to the specified datasource ID. When this parameter appears multiple times, only the last value is used. */
  dataSourceId?: string;
  /** When `true`, includes connector node details in the response. */
  detail?: boolean;
  /** When `true`, includes disabled datasources in the response. Disabled datasources are excluded by default. */
  includeDisabled?: boolean;
  /** When `true`, includes UI metadata such as connect, credentials, and select dialog URLs in the response. */
  includeui?: boolean;
}, options?: ApiCallOptions): Promise<GetDataSourcesHttpResponse>;
export type GetDataSourcesHttpResponse = {
  data: DataSourcesResponseNew;
  headers: Headers;
  status: 200;
};
export type GetDataSourcesHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 401 | 404 | 500;
};
/**
 * Generates Qlik Resource Identifiers (QRIs) for a batch of connections. Each
 * connection can be identified by ID, name, or connection string. Partial
 * failures are reported per entry in the response — a `207 Multi-Status`
 * response is always returned regardless of individual entry outcomes.
 *
 * @param body an object with the body content
 * @throws GenerateQriDataSourcesHttpError
 */
export declare function generateQriDataSources(body: QriRequest, options?: ApiCallOptions): Promise<GenerateQriDataSourcesHttpResponse>;
export type GenerateQriDataSourcesHttpResponse = {
  data: {
    /** Array of QRI generation results, one per requested connection. */
    data: QriResponseItem[];
  };
  headers: Headers;
  status: 207;
};
export type GenerateQriDataSourcesHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 401 | 500;
};
/**
 * Returns the list of endpoint references currently active on the connector
 * node. Each entry identifies the datasource and gRPC URL for an active
 * endpoint session. Use this operation to audit active endpoint allocations
 * or to locate the URL for an existing endpoint.
 *
 * @throws GetDataSourceEndpointsHttpError
 */
export declare function getDataSourceEndpoints(options?: ApiCallOptions): Promise<GetDataSourceEndpointsHttpResponse>;
export type GetDataSourceEndpointsHttpResponse = {
  data: GetEndpointsResponse;
  headers: Headers;
  status: 200;
};
export type GetDataSourceEndpointsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 401 | 500;
};
/**
 * Provisions a gRPC endpoint for loading data using the specified connection.
 * The connection can be resolved by name, ID, connection string, or datasource
 * ID. Returns the endpoint reference and resolved connection details required to
 * initiate a data load session.
 *
 * @param body an object with the body content
 * @throws FilterDataSourceEndpointsHttpError
 */
export declare function filterDataSourceEndpoints(body: PostEndpointRequestWithConnectionName | PostEndpointRequestWithConnectionId | PostEndpointRequestWithConnectionString | PostEndpointRequestWithDatasourceID, options?: ApiCallOptions): Promise<FilterDataSourceEndpointsHttpResponse>;
export type FilterDataSourceEndpointsHttpResponse = {
  data: PostEndpointResponse;
  headers: Headers;
  status: 201;
};
export type FilterDataSourceEndpointsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 401 | 500;
};
/**
 * Retrieves the connection property schema for the specified datasource,
 * including the connector provider, version, and the full list of properties
 * required to establish a connection. Use this operation to discover which
 * fields must be supplied when creating or generating a connection string for
 * this datasource.
 * @example
 * getDataSourceApiSpecs(
 *   "rest"
 * )
 *
 * @param dataSourceId The unique identifier of the datasource to retrieve the connection schema for.
 * @throws GetDataSourceApiSpecsHttpError
 */
export declare function getDataSourceApiSpecs(dataSourceId: string, options?: ApiCallOptions): Promise<GetDataSourceApiSpecsHttpResponse>;
export type GetDataSourceApiSpecsHttpResponse = {
  data: ApiSpecResponse;
  headers: Headers;
  status: 200;
};
export type GetDataSourceApiSpecsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 401 | 404 | 500 | 503;
};
/**
 * Returns the list of gateway IDs available for the specified Direct Access
 * Gateway datasource. Gateways enable on-premises datasources to be accessed
 * from Qlik Cloud. Results are returned from a cache by default; set
 * `forceRefresh` to `true` to retrieve the current list from the backend.
 * @example
 * getDataSourceGateways(
 *   "DG_rest",
 *   {
 *     forceRefresh: true
 *   }
 * )
 *
 * @param dataSourceId The unique identifier of the Direct Access Gateway datasource to list gateways for. Must be prefixed with `DG_`.
 * @param query an object with query parameters
 * @throws GetDataSourceGatewaysHttpError
 */
export declare function getDataSourceGateways(dataSourceId: string, query: {
  /** When `true`, bypasses the cache and retrieves the current gateway list from the backend. When `false` or omitted, a cached list is returned. */
  forceRefresh?: boolean;
}, options?: ApiCallOptions): Promise<GetDataSourceGatewaysHttpResponse>;
export type GetDataSourceGatewaysHttpResponse = {
  data: {
    /** List of gateway IDs for the specified datasource. */
    gateways?: {
      /** When `true`, this gateway is the default for the datasource. */
      default?: boolean;
      /** Unique identifier of the gateway. */
      id?: string;
      /** Display name of the gateway. */
      name?: string;
    }[];
    /** ISO 8601 timestamp of when the gateway list was last refreshed from the backend. */
    refreshedAt?: string;
  };
  headers: Headers;
  status: 200;
};
export type GetDataSourceGatewaysHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 401 | 404 | 500;
};
/**
 * Retrieves the current configuration settings for the specified datasource.
 * Settings control operational behaviour such as whether the datasource is
 * enabled or disabled for tenant use.
 * @example
 * getDataSourceSettings(
 *   "rest"
 * )
 *
 * @param dataSourceId The unique identifier of the datasource to retrieve settings for.
 * @throws GetDataSourceSettingsHttpError
 */
export declare function getDataSourceSettings(dataSourceId: string, options?: ApiCallOptions): Promise<GetDataSourceSettingsHttpResponse>;
export type GetDataSourceSettingsHttpResponse = {
  data: DataSourceSettingsResponse;
  headers: Headers;
  status: 200;
};
export type GetDataSourceSettingsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 401 | 404 | 500;
};
/**
 * Updates the configuration settings for the specified datasource. Use this
 * operation to enable or disable a datasource for the tenant. The full settings
 * object must be supplied; partial updates are not supported.
 *
 * @param dataSourceId The unique identifier of the datasource to update settings for.
 * @param body an object with the body content
 * @throws PutDataSourceSettingsHttpError
 */
export declare function putDataSourceSettings(dataSourceId: string, body: DataSourceSettingsRequest, options?: ApiCallOptions): Promise<PutDataSourceSettingsHttpResponse>;
export type PutDataSourceSettingsHttpResponse = {
  data: DataSourceSettingsResponse;
  headers: Headers;
  status: 200;
};
export type PutDataSourceSettingsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 401 | 404 | 409 | 500;
};
/**
 * Clears the cache for connectivity/data-sources api requests.
 */
export declare function clearCache(): void;
export type DataSourcesAPI = {
  /**
   * Returns the list of datasources available on the connector node. Each entry
   * includes the connector provider, capabilities, and optional UI metadata. Filter
   * by `dataSourceId` to retrieve a specific datasource, or set `includeDisabled`
   * to `true` to include datasources that have been disabled.
   * @example
   * getDataSources(
   *   {
   *     dataSourceId: "rest",
   *     detail: true,
   *     includeDisabled: true,
   *     includeui: true
   *   }
   * )
   *
   * @param query an object with query parameters
   * @throws GetDataSourcesHttpError
   */
  getDataSources: typeof getDataSources;
  /**
   * Generates Qlik Resource Identifiers (QRIs) for a batch of connections. Each
   * connection can be identified by ID, name, or connection string. Partial
   * failures are reported per entry in the response — a `207 Multi-Status`
   * response is always returned regardless of individual entry outcomes.
   *
   * @param body an object with the body content
   * @throws GenerateQriDataSourcesHttpError
   */
  generateQriDataSources: typeof generateQriDataSources;
  /**
   * Returns the list of endpoint references currently active on the connector
   * node. Each entry identifies the datasource and gRPC URL for an active
   * endpoint session. Use this operation to audit active endpoint allocations
   * or to locate the URL for an existing endpoint.
   *
   * @throws GetDataSourceEndpointsHttpError
   */
  getDataSourceEndpoints: typeof getDataSourceEndpoints;
  /**
   * Provisions a gRPC endpoint for loading data using the specified connection.
   * The connection can be resolved by name, ID, connection string, or datasource
   * ID. Returns the endpoint reference and resolved connection details required to
   * initiate a data load session.
   *
   * @param body an object with the body content
   * @throws FilterDataSourceEndpointsHttpError
   */
  filterDataSourceEndpoints: typeof filterDataSourceEndpoints;
  /**
   * Retrieves the connection property schema for the specified datasource,
   * including the connector provider, version, and the full list of properties
   * required to establish a connection. Use this operation to discover which
   * fields must be supplied when creating or generating a connection string for
   * this datasource.
   * @example
   * getDataSourceApiSpecs(
   *   "rest"
   * )
   *
   * @param dataSourceId The unique identifier of the datasource to retrieve the connection schema for.
   * @throws GetDataSourceApiSpecsHttpError
   */
  getDataSourceApiSpecs: typeof getDataSourceApiSpecs;
  /**
   * Returns the list of gateway IDs available for the specified Direct Access
   * Gateway datasource. Gateways enable on-premises datasources to be accessed
   * from Qlik Cloud. Results are returned from a cache by default; set
   * `forceRefresh` to `true` to retrieve the current list from the backend.
   * @example
   * getDataSourceGateways(
   *   "DG_rest",
   *   {
   *     forceRefresh: true
   *   }
   * )
   *
   * @param dataSourceId The unique identifier of the Direct Access Gateway datasource to list gateways for. Must be prefixed with `DG_`.
   * @param query an object with query parameters
   * @throws GetDataSourceGatewaysHttpError
   */
  getDataSourceGateways: typeof getDataSourceGateways;
  /**
   * Retrieves the current configuration settings for the specified datasource.
   * Settings control operational behaviour such as whether the datasource is
   * enabled or disabled for tenant use.
   * @example
   * getDataSourceSettings(
   *   "rest"
   * )
   *
   * @param dataSourceId The unique identifier of the datasource to retrieve settings for.
   * @throws GetDataSourceSettingsHttpError
   */
  getDataSourceSettings: typeof getDataSourceSettings;
  /**
   * Updates the configuration settings for the specified datasource. Use this
   * operation to enable or disable a datasource for the tenant. The full settings
   * object must be supplied; partial updates are not supported.
   *
   * @param dataSourceId The unique identifier of the datasource to update settings for.
   * @param body an object with the body content
   * @throws PutDataSourceSettingsHttpError
   */
  putDataSourceSettings: typeof putDataSourceSettings;
  /**
   * Clears the cache for data-sources api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the data-sources api
 */
declare const dataSourcesExport: DataSourcesAPI;
//#endregion
export { dataSourcesExport as default, data_sources_d_exports as t };