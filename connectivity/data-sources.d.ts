import { x as ApiCallOptions } from "../chunks/auth-types-BAiSvIRn.js";
declare namespace data_sources_d_exports {
  export { ApiSpecResponse, ConnectionInstance, ConnectorNodesInfo, DataSourceNew, DataSourceSettingsRequest, DataSourceSettingsResponse, DataSourcesAPI, DataSourcesResponseNew, DcaasApiError, EndpointInstanceRef, FilterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError, FilterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpResponse, GenerateQriDataSourcesHttpError, GenerateQriDataSourcesHttpResponse, GetDataSourceApiSpecsHttpError, GetDataSourceApiSpecsHttpResponse, GetDataSourceGatewaysHttpError, GetDataSourceGatewaysHttpResponse, GetDataSourceSettingsHttpError, GetDataSourceSettingsHttpResponse, GetDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError, GetDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpResponse, GetDataSourcesHttpError, GetDataSourcesHttpResponse, GetEndpointsResponse, PostEndpointRequestWithConnectionId, PostEndpointRequestWithConnectionName, PostEndpointRequestWithConnectionString, PostEndpointRequestWithDatasourceID, PostEndpointResponse, PublicApiError, PutDataSourceSettings_FIX_THIS_QUIRKY_NAMEHttpError, PutDataSourceSettings_FIX_THIS_QUIRKY_NAMEHttpResponse, QriConnectionType, QriDefinition, QriPropertyRef, QriRequest, QriRequestItem, QriRequestItemPropertyArray, QriRequestPathPropertyArray, QriResponseItem, QriTemplate, ResponseErrors, UiInfo, clearCache, dataSourcesExport as default, filterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME, generateQriDataSources, getDataSourceApiSpecs, getDataSourceGateways, getDataSourceSettings, getDataSources, getDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME, putDataSourceSettings_FIX_THIS_QUIRKY_NAME };
}
/**
 * Connection property schema and connector metadata for a datasource.
 */
type ApiSpecResponse = {
  /** Map of connection property keys and their value types required to establish a connection to this datasource. */connectionProperties: unknown; /** Connector provider executable name. */
  connectorProvider: string; /** Version of the connector provider. */
  connectorVersion: string;
};
/**
 * Resolved connection details including credentials and QRI reference for an active endpoint.
 */
type ConnectionInstance = {
  /** Unique identifier of the connection. */connectionId?: string; /** Connection string. */
  connectionString: string; /** Type of data interface used by the connection (for example, `data` for standard data loading). */
  dataInterfaceType: string; /** Password associated with the connection. */
  password?: string; /** Qlik Resource Identifier (QRI) for the connection. */
  qri?: string; /** Space-qualified name of the connection in the format `SpaceName:ConnectionName`. */
  spaceQualifiedConnectionName?: string; /** Username associated with the connection. */
  user?: string;
};
/**
 * Connector node metadata including URL, contract type, and datasource cache status.
 */
type ConnectorNodesInfo = {
  /** List of datasource IDs currently cached from the connector provider. */cachedDataSources?: string[]; /** Protocol contract type used to communicate with the connector node (between 0 and 3, inclusive). */
  contractType: number; /** When `true`, the cached datasource list is up to date. */
  dataSourcesUpdated: boolean; /** Display name of the connector provider. */
  providerName: string; /** Current operational state of the connector node. */
  state: string; /** Address of the connector node. */
  url: string;
};
/**
 * Complete datasource metadata including connector information, capabilities, and optional UI details.
 */
type DataSourceNew = {
  /** List of capabilities supported by the datasource. */capabilities?: string[]; /** Override URL for data loading. May be null if the default URL is used. */
  dataLoadUrlOverride?: string; /** Unique identifier of the datasource. */
  dataSourceId: string; /** Name of the property used to identify the datasource type in a connection string. May be null if not applicable. */
  dataSourcePropertyName?: string; /** Category type of the datasource. */
  dataSourceType?: string; /** When `true`, the datasource is disabled and excluded from results unless `includeDisabled` is set. */
  disabled?: boolean; /** Display name of the datasource. */
  name: string; /** Connector provider executable name. */
  provider: string; /** Display name of the connector provider. */
  providerName: string; /** QRI definition template for a datasource, specifying connection, path, and item parts. */
  qriDefinition?: QriDefinition; /** UI metadata for the datasource. Present only when `includeui` is `true` in the request. */
  uiInfo?: UiInfo;
};
/**
 * Request body for updating the configuration settings of a datasource.
 */
type DataSourceSettingsRequest = {
  /** When `true`, disables the datasource. When `false`, enables it. */disabled: boolean;
};
/**
 * Current configuration settings for a datasource.
 */
type DataSourceSettingsResponse = {
  /** When `true`, the datasource is disabled. When `false`, it is enabled. */disabled?: boolean;
};
/**
 * Response containing the list of available datasources and optional connector node details.
 */
type DataSourcesResponseNew = {
  /** List of connector nodes. Present only when `detail` is `true` in the request. */connectorNodes?: ConnectorNodesInfo[]; /** List of available datasources with their metadata. */
  dataSources: DataSourceNew[]; /** ISO 8601 timestamp of when the datasource list was last updated. */
  updatedAt: string;
};
/**
 * DCaaS-specific error information including error code, code name, and detailed message.
 */
type DcaasApiError = {
  /** DCaaS-specific numeric error code. */dcaasErrorCode?: number; /** Human-readable name corresponding to the DCaaS error code. */
  errorCodeName?: string; /** Summary of the error condition. */
  errorMessage?: string;
};
type EndpointInstanceRef = {
  /** Unique identifier of the datasource associated with this endpoint. */dataSourceId: string; /** Unique identifier of the endpoint instance. */
  id: string; /** When `true`, the `url` field contains a pod-specific URL. */
  isPodUrl?: boolean; /** gRPC URL of the endpoint. */
  url: string;
};
/**
 * Response containing the list of active datasource endpoint references on the connector node.
 */
type GetEndpointsResponse = {
  /** Array of active endpoint instances with their connection details. */endpoints?: EndpointInstanceRef[];
};
type PostEndpointRequestWithConnectionId = {
  /** When `true`, verifies that user credentials are present for connections configured with separate credentials. The default is `false`. */checkCredentials?: boolean; /** The unique identifier of the connection to use for the endpoint. */
  connectionId: string; /** Unique identifier of the reload session associated with this endpoint request. */
  reloadId?: string; /** Type of endpoint to provision. */
  type?: "rld" | "dq";
};
type PostEndpointRequestWithConnectionName = {
  /** When `true`, verifies that user credentials are present for connections configured with separate credentials. The default is `false`. */checkCredentials?: boolean;
  /** The name of the connection to use for the endpoint. The service resolves
   * the connection name to an active instance. If the name is space-qualified
   * (for example, `MySpace:ConnectionName`), `spaceId` is not required and is
   * ignored. If the name uses the current-space format (for example,
   * `:ConnectionName`), `spaceId` is used for resolution; the personal space
   * is assumed when `spaceId` is omitted. */
  connectionName: string; /** Unique identifier of the reload session associated with this endpoint request. */
  reloadId?: string; /** The unique identifier of the space containing the connection. Required only when `connectionName` is unqualified (not space-prefixed). */
  spaceId?: string; /** Type of endpoint to provision. */
  type?: "rld" | "dq";
};
type PostEndpointRequestWithConnectionString = {
  /** When `true`, verifies that user credentials are present for connections configured with separate credentials. The default is `false`. */checkCredentials?: boolean; /** Connection string in Qlik CONNECT format. */
  connectionString: string; /** Unique identifier of the reload session associated with this endpoint request. */
  reloadId?: string; /** Type of endpoint to provision. */
  type?: "rld" | "dq";
};
type PostEndpointRequestWithDatasourceID = {
  /** When `true`, verifies that user credentials are present for connections configured with separate credentials. The default is `false`. */checkCredentials?: boolean; /** The unique identifier of the datasource to use for the endpoint. */
  dataSourceId: string; /** Unique identifier of the reload session associated with this endpoint request. */
  reloadId?: string; /** Type of endpoint to provision. */
  type?: "rld" | "dq";
};
/**
 * Response containing the provisioned endpoint reference and resolved connection instance.
 */
type PostEndpointResponse = {
  /** Resolved connection details including credentials and QRI reference for an active endpoint. */connection?: ConnectionInstance;
  endpoint?: EndpointInstanceRef;
};
/**
 * Standard error response object with code, title, and details.
 */
type PublicApiError = {
  /** Unique DCaaS error code (for example, `DCAAS-2001`). */code: string; /** Detailed explanation of the error and possible remediation steps. */
  detail?: string; /** Additional context or debugging information related to the error. */
  meta?: unknown; /** Short human-readable error title. */
  title: string;
};
/**
 * Type of connection identifier used in QRI generation requests:
 *   * `id` — connection UUID
 *   * `name` — connection name, optionally space-qualified (for example, `MySpace:MyConnection` or `:MyConnection`)
 *   * `properties` — connection string in Qlik CONNECT format
 */
type QriConnectionType = "id" | "name" | "properties";
/**
 * QRI definition template for a datasource, specifying connection, path, and item parts.
 */
type QriDefinition = {
  connectionPart: unknown & QriTemplate;
  itemPart?: unknown & {
    /** Literal prefix prepended to the item segment. */prefix?: string;
  } & QriTemplate;
  pathPart: unknown & {
    /** Literal prefix prepended to the path segment. */prefix?: string;
  } & QriTemplate; /** Fixed prefix for QRIs generated by this datasource. */
  qriPrefix: string;
};
/**
 * A single property value used to populate a QRI template placeholder.
 */
type QriPropertyRef = {
  /** The name of the property as defined in the QRI definition template. When omitted, properties are treated as an ordered array. */name?: string; /** The value to substitute for this property in the QRI template. */
  value?: string;
};
/**
 * Batch request to generate QRI values for multiple connections.
 */
type QriRequest = {
  /** Array of QRI generation requests. Maximum 100 items per batch. */data?: QriRequestItem[]; /** When `true`, returns raw QRI values. When `false`, returns hashed QRI values. */
  rawValues?: boolean;
};
/**
 * Single QRI generation request for a specific connection.
 */
type QriRequestItem = {
  /** The connection identifier — a UUID, name, or connection string — corresponding to the value of `connectionType`. */connection: string;
  /** Type of connection identifier used in QRI generation requests:
   *   * `id` — connection UUID
   *   * `name` — connection name, optionally space-qualified (for example, `MySpace:MyConnection` or `:MyConnection`)
   *   * `properties` — connection string in Qlik CONNECT format */
  connectionType: QriConnectionType; /** The unique identifier of the datasource for the connection. Must match the datasource type when `connectionType` is `properties`. */
  dataSourceId?: string; /** Optional ordered list of property values used to populate the item segment of the QRI template. */
  itemProperties?: QriRequestItemPropertyArray; /** Ordered list of property values used to populate the path segment of the QRI template. */
  pathProperties?: QriRequestPathPropertyArray; /** Optional caller-provided identifier used to correlate this request entry with its response. Should be unique within a batch request. */
  requestId?: string; /** The unique identifier of the space containing the connection. Required for name-based lookups; ignored when `connectionType` is `properties`. */
  spaceId?: string;
};
/**
 * Optional ordered list of property values used to populate the item segment of the QRI template.
 */
type QriRequestItemPropertyArray = QriPropertyRef[];
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
type QriRequestPathPropertyArray = QriPropertyRef[];
/**
 * Result of a single QRI generation request, including status and the generated QRI value.
 */
type QriResponseItem = {
  connection: string;
  /** Type of connection identifier used in QRI generation requests:
   *   * `id` — connection UUID
   *   * `name` — connection name, optionally space-qualified (for example, `MySpace:MyConnection` or `:MyConnection`)
   *   * `properties` — connection string in Qlik CONNECT format */
  connectionType: QriConnectionType;
  dataSourceId: string;
  isFullyQualified: boolean;
  qri: string; /** Echo of the caller-provided `requestId` from the corresponding request entry. */
  requestId?: string; /** Status of this QRI generation entry. */
  status?: {
    /** HTTP-style status code for this entry. `200` indicates success; values above `200` indicate failure. Detailed error information is included in `errorResponse` on failure. */code: number; /** DCaaS-specific error information including error code, code name, and detailed message. */
    errorResponse?: DcaasApiError;
  };
};
/**
 * Template definition used to construct a QRI segment from connection property values.
 */
type QriTemplate = {
  /** Ordered list of property names referenced by the template placeholders. */properties: string[]; /** Template string with `{propertyName}` placeholders for connection property values. */
  template: string;
};
/**
 * Error response containing one or more error details.
 */
type ResponseErrors = {
  /** Array of error objects describing what went wrong. */errors?: PublicApiError[];
};
/**
 * UI metadata for the datasource. Present only when `includeui` is `true` in the request.
 */
type UiInfo = {
  /** URL of the connector's connection dialog. */connectUrl?: string; /** URL of the connector's main iframe entry point. */
  connectorMainUrl?: string; /** URL of the connector's credentials dialog. */
  credentialsUrl?: string; /** URL of the rectangular connector icon. */
  iconRectUrl?: string; /** URL of the square connector icon. */
  iconSquareUrl?: string; /** When `true`, the connector UI is rendered in an iframe. */
  iframe?: boolean; /** Indicates whether the datasource supports the load model feature. */
  loadModelSupport?: string; /** URL of the connector's data selection dialog. */
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
declare function getDataSources(query: {
  /** Filters results to the specified datasource ID. When this parameter appears multiple times, only the last value is used. */dataSourceId?: string; /** When `true`, includes connector node details in the response. */
  detail?: boolean; /** When `true`, includes disabled datasources in the response. Disabled datasources are excluded by default. */
  includeDisabled?: boolean; /** When `true`, includes UI metadata such as connect, credentials, and select dialog URLs in the response. */
  includeui?: boolean;
}, options?: ApiCallOptions): Promise<GetDataSourcesHttpResponse>;
type GetDataSourcesHttpResponse = {
  data: DataSourcesResponseNew;
  headers: Headers;
  status: 200;
};
type GetDataSourcesHttpError = {
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
declare function generateQriDataSources(body: QriRequest, options?: ApiCallOptions): Promise<GenerateQriDataSourcesHttpResponse>;
type GenerateQriDataSourcesHttpResponse = {
  data: {
    /** Array of QRI generation results, one per requested connection. */data: QriResponseItem[];
  };
  headers: Headers;
  status: 207;
};
type GenerateQriDataSourcesHttpError = {
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
 * @throws GetDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME(options?: ApiCallOptions): Promise<GetDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: GetEndpointsResponse;
  headers: Headers;
  status: 200;
};
type GetDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError = {
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
 * @throws FilterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function filterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME(body: PostEndpointRequestWithConnectionName | PostEndpointRequestWithConnectionId | PostEndpointRequestWithConnectionString | PostEndpointRequestWithDatasourceID, options?: ApiCallOptions): Promise<FilterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type FilterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: PostEndpointResponse;
  headers: Headers;
  status: 201;
};
type FilterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError = {
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
declare function getDataSourceApiSpecs(dataSourceId: string, options?: ApiCallOptions): Promise<GetDataSourceApiSpecsHttpResponse>;
type GetDataSourceApiSpecsHttpResponse = {
  data: ApiSpecResponse;
  headers: Headers;
  status: 200;
};
type GetDataSourceApiSpecsHttpError = {
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
declare function getDataSourceGateways(dataSourceId: string, query: {
  /** When `true`, bypasses the cache and retrieves the current gateway list from the backend. When `false` or omitted, a cached list is returned. */forceRefresh?: boolean;
}, options?: ApiCallOptions): Promise<GetDataSourceGatewaysHttpResponse>;
type GetDataSourceGatewaysHttpResponse = {
  data: {
    /** List of gateway IDs for the specified datasource. */gateways?: {
      /** When `true`, this gateway is the default for the datasource. */default?: boolean; /** Unique identifier of the gateway. */
      id?: string; /** Display name of the gateway. */
      name?: string;
    }[]; /** ISO 8601 timestamp of when the gateway list was last refreshed from the backend. */
    refreshedAt?: string;
  };
  headers: Headers;
  status: 200;
};
type GetDataSourceGatewaysHttpError = {
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
declare function getDataSourceSettings(dataSourceId: string, options?: ApiCallOptions): Promise<GetDataSourceSettingsHttpResponse>;
type GetDataSourceSettingsHttpResponse = {
  data: DataSourceSettingsResponse;
  headers: Headers;
  status: 200;
};
type GetDataSourceSettingsHttpError = {
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
 * @throws PutDataSourceSettings_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function putDataSourceSettings_FIX_THIS_QUIRKY_NAME(dataSourceId: string, body: DataSourceSettingsRequest, options?: ApiCallOptions): Promise<PutDataSourceSettings_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type PutDataSourceSettings_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: DataSourceSettingsResponse;
  headers: Headers;
  status: 200;
};
type PutDataSourceSettings_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 401 | 404 | 409 | 500;
};
/**
 * Clears the cache for connectivity/data-sources api requests.
 */
declare function clearCache(): void;
type DataSourcesAPI = {
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
   * @throws GetDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME: typeof getDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME;
  /**
   * Provisions a gRPC endpoint for loading data using the specified connection.
   * The connection can be resolved by name, ID, connection string, or datasource
   * ID. Returns the endpoint reference and resolved connection details required to
   * initiate a data load session.
   *
   * @param body an object with the body content
   * @throws FilterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError
   */
  filterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME: typeof filterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME;
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
   * @throws PutDataSourceSettings_FIX_THIS_QUIRKY_NAMEHttpError
   */
  putDataSourceSettings_FIX_THIS_QUIRKY_NAME: typeof putDataSourceSettings_FIX_THIS_QUIRKY_NAME;
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
export { ApiSpecResponse, ConnectionInstance, ConnectorNodesInfo, DataSourceNew, DataSourceSettingsRequest, DataSourceSettingsResponse, DataSourcesAPI, DataSourcesResponseNew, DcaasApiError, EndpointInstanceRef, FilterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError, FilterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpResponse, GenerateQriDataSourcesHttpError, GenerateQriDataSourcesHttpResponse, GetDataSourceApiSpecsHttpError, GetDataSourceApiSpecsHttpResponse, GetDataSourceGatewaysHttpError, GetDataSourceGatewaysHttpResponse, GetDataSourceSettingsHttpError, GetDataSourceSettingsHttpResponse, GetDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError, GetDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpResponse, GetDataSourcesHttpError, GetDataSourcesHttpResponse, GetEndpointsResponse, PostEndpointRequestWithConnectionId, PostEndpointRequestWithConnectionName, PostEndpointRequestWithConnectionString, PostEndpointRequestWithDatasourceID, PostEndpointResponse, PublicApiError, PutDataSourceSettings_FIX_THIS_QUIRKY_NAMEHttpError, PutDataSourceSettings_FIX_THIS_QUIRKY_NAMEHttpResponse, QriConnectionType, QriDefinition, QriPropertyRef, QriRequest, QriRequestItem, QriRequestItemPropertyArray, QriRequestPathPropertyArray, QriResponseItem, QriTemplate, ResponseErrors, UiInfo, clearCache, dataSourcesExport as default, filterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME, generateQriDataSources, getDataSourceApiSpecs, getDataSourceGateways, getDataSourceSettings, getDataSources, getDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME, putDataSourceSettings_FIX_THIS_QUIRKY_NAME, data_sources_d_exports as t };