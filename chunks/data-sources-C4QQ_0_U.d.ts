import { y as ApiCallOptions } from "./auth-types-CMYVHKHt.js";

//#region src/public/rest/data-sources.d.ts
type ApiSpecResponse = {
  /** List of properties required for the given datasource */
  connectionProperties: unknown;
  /** Datasource provider */
  connectorProvider: string;
  /** Datasource provider (i.e. connector) version */
  connectorVersion: string;
};
/**
 * Datasource metadata
 */
type ConnectorNodesInfo = {
  /** List of datasource IDs provided by the provider */
  cachedDataSources?: string[];
  /** Contract type used to communicate with the connector (between 0 and 3) */
  contractType: number;
  /** Indicates whether the datasources are up to date */
  dataSourcesUpdated: boolean;
  /** Connector provider name */
  providerName: string;
  /** State of the connector node */
  state: string;
  /** URL of connector node */
  url: string;
};
/**
 * Datasource metadata
 */
type DataSourceNew = {
  /** List of capabilities supported by the datasource */
  capabilities?: string[];
  /** Override value of dataload URL (could be null) */
  dataLoadUrlOverride?: string;
  /** Unique identifier of datasource */
  dataSourceId: string;
  /** Datasource property name (could be null) */
  dataSourcePropertyName?: string;
  /** Indicates whether the datasource is disabled */
  disabled?: boolean;
  /** Datasource name */
  name: string;
  /** Connector provider */
  provider: string;
  /** Provider name */
  providerName: string;
  /** Qri definition template */
  qriDefinition?: QriDefinition;
  /** UI related metadata (only present when 'includeui' is set to true in query) */
  uiInfo?: UiInfo;
};
/**
 * Defines configuration settings for a data source.
 */
type DataSourceSettingsRequest = {
  /** Indicates whether the data source is disabled. */
  disabled: boolean;
};
/**
 * Represents the current settings of a data source.
 */
type DataSourceSettingsResponse = {
  /** Indicates whether the data source is disabled. */
  disabled?: boolean;
};
type DataSourcesResponseNew = {
  /** List of connector nodes (only present when query parameter 'detail' is set to true) */
  connectorNodes?: ConnectorNodesInfo[];
  /** List of datasources metadata object */
  dataSources: DataSourceNew[];
  /** Time stamp of last updated */
  lastUpdated: string;
};
type PublicApiError = {
  /** A service specific error code string */
  code: string;
  /** Concrete detail about the error */
  detail?: string;
  /** Additional metadata associated with the error */
  meta?: unknown;
  /** Summary of the error */
  title: string;
};
/**
 * Qri definition template
 */
type QriDefinition = {
  connectionPart: unknown & QriTemplate;
  itemPart?: unknown & {
    /** Prefix of the template */
    prefix?: string;
  } & QriTemplate;
  pathPart: unknown & {
    /** Prefix of the template */
    prefix?: string;
  } & QriTemplate;
  /** Qri prefix */
  qriPrefix: string;
};
/**
 * Connection part of Qri template
 */
type QriTemplate = {
  /** List of properties used in template */
  properties: string[];
  /** Qri template */
  template: string;
};
type ResponseErrors = {
  errors?: PublicApiError[];
};
/**
 * UI related metadata (only present when 'includeui' is set to true in query)
 */
type UiInfo = {
  /** Connect URL */
  connectUrl?: string;
  /** Connector main URL */
  connectorMainUrl?: string;
  /** Credentials URL */
  credentialsUrl?: string;
  /** Icon URL */
  iconRectUrl?: string;
  /** Square icon URL */
  iconSquareUrl?: string;
  /** If support iframe */
  iframe?: boolean;
  /** Indicate if the datasource supports load model */
  loadModelSupport?: string;
  /** Select URL */
  selectUrl?: string;
};
/**
 * Gets the list of data sources available on the node.
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
  /** Filtering on datasourceID, when multiple dataSourceId are set in query, last dataSourceId will be used */
  dataSourceId?: string;
  /** Determines if provider detail is returned */
  detail?: boolean;
  /** When true, disabled datasources are also included in the response */
  includeDisabled?: boolean;
  /** Determines if UI info is returned */
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
 * Get 'connectionProperties' for a given datasource
 * @example
 * getDataSourceApiSpecs(
 *   "rest"
 * )
 *
 * @param dataSourceId Datasource ID
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
 * Get list available gateway ID's for a given datasource
 * @example
 * getDataSourceGateways(
 *   "rest",
 *   {
 *     forceRefresh: true
 *   }
 * )
 *
 * @param dataSourceId Datasource ID
 * @param query an object with query parameters
 * @throws GetDataSourceGatewaysHttpError
 */
declare function getDataSourceGateways(dataSourceId: string, query: {
  /** Force to get a refreshed list from backend. Cached list will be returned if not set or set to false. */
  forceRefresh?: boolean;
}, options?: ApiCallOptions): Promise<GetDataSourceGatewaysHttpResponse>;
type GetDataSourceGatewaysHttpResponse = {
  data: {
    /** List of gateway ID's for given datasource ID */
    gateways?: {
      /** Whether the gateway is default */
      default?: boolean;
      /** Gateway ID */
      id?: string;
      /** Gateway name */
      name?: string;
    }[];
    /** Time stamp when the gateways data were refreshed */
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
 * Retrieves the settings for a data source.
 * @example
 * getDataSourceSettings(
 *   "rest"
 * )
 *
 * @param dataSourceId Datasource ID
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
 * Updates the settings for a data source.
 *
 * @param dataSourceId Datasource ID
 * @param body an object with the body content
 * @throws PutDataSourceSettingsHttpError
 */
declare function putDataSourceSettings(dataSourceId: string, body: DataSourceSettingsRequest, options?: ApiCallOptions): Promise<PutDataSourceSettingsHttpResponse>;
type PutDataSourceSettingsHttpResponse = {
  data: DataSourceSettingsResponse;
  headers: Headers;
  status: 200;
};
type PutDataSourceSettingsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 401 | 404 | 500;
};
/**
 * Clears the cache for data-sources api requests.
 */
declare function clearCache(): void;
type DataSourcesAPI = {
  /**
   * Gets the list of data sources available on the node.
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
   * Get 'connectionProperties' for a given datasource
   * @example
   * getDataSourceApiSpecs(
   *   "rest"
   * )
   *
   * @param dataSourceId Datasource ID
   * @throws GetDataSourceApiSpecsHttpError
   */
  getDataSourceApiSpecs: typeof getDataSourceApiSpecs;
  /**
   * Get list available gateway ID's for a given datasource
   * @example
   * getDataSourceGateways(
   *   "rest",
   *   {
   *     forceRefresh: true
   *   }
   * )
   *
   * @param dataSourceId Datasource ID
   * @param query an object with query parameters
   * @throws GetDataSourceGatewaysHttpError
   */
  getDataSourceGateways: typeof getDataSourceGateways;
  /**
   * Retrieves the settings for a data source.
   * @example
   * getDataSourceSettings(
   *   "rest"
   * )
   *
   * @param dataSourceId Datasource ID
   * @throws GetDataSourceSettingsHttpError
   */
  getDataSourceSettings: typeof getDataSourceSettings;
  /**
   * Updates the settings for a data source.
   *
   * @param dataSourceId Datasource ID
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
export { clearCache as C, getDataSourceSettings as D, getDataSourceGateways as E, getDataSources as O, UiInfo as S, getDataSourceApiSpecs as T, PutDataSourceSettingsHttpError as _, DataSourceSettingsResponse as a, QriTemplate as b, GetDataSourceApiSpecsHttpError as c, GetDataSourceGatewaysHttpResponse as d, GetDataSourceSettingsHttpError as f, PublicApiError as g, GetDataSourcesHttpResponse as h, DataSourceSettingsRequest as i, putDataSourceSettings as k, GetDataSourceApiSpecsHttpResponse as l, GetDataSourcesHttpError as m, ConnectorNodesInfo as n, DataSourcesAPI as o, GetDataSourceSettingsHttpResponse as p, DataSourceNew as r, DataSourcesResponseNew as s, ApiSpecResponse as t, GetDataSourceGatewaysHttpError as u, PutDataSourceSettingsHttpResponse as v, dataSourcesExport as w, ResponseErrors as x, QriDefinition as y };