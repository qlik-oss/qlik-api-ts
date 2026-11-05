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

export type ApiSpecResponse = {
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
export type ConnectorNodesInfo = {
  /** List of datasource Ids provided by the provider */
  cachedDataSources?: string[];
  /** Contract type used to communicate with the connector (between 0 and 3) */
  contractType: number;
  /** Indicates if the datasources is up to date */
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
export type DataSourceNew = {
  /** List of capabilities supported by the datasource */
  capabilities?: string[];
  /** Override URL for data loading. Empty if the default URL is used. */
  dataLoadUrlOverride?: string;
  /** Unique identifier of datasource */
  dataSourceId: string;
  /** Display name of the datasource. */
  dataSourceName?: string;
  /** Name of the property used to identify the datasource type in a connection string. Empty if not applicable. */
  dataSourcePropertyName?: string;
  /** Type of datasource */
  dataSourceType?: string;
  /** Indicates if the datasource is disabled */
  disabled?: boolean;
  /** Name of the feature flag that controls the availability of the datasource. Null if the datasource is not behind a feature flag. */
  featureFlag?: string | null;
  /** Base64 encoded flags (4 bytes) used by the client to control how the datasource is presented. Null if not defined by the connector. */
  frontendFlags?: string | null;
  /** Datasource name */
  name: string;
  /** Connector provider */
  provider: string;
  /** Provider name */
  providerName: string;
  /** Qri definition template */
  qriDefinition?: QriDefinition;
  /** Connector-defined settings of the datasource. Empty if there are none. */
  settings?: {
    /** Name of the setting. */
    name: string;
    /** Value of the setting. */
    value: string;
  }[];
  /** UI related metadata (only present when 'includeui' is set to true in query) */
  uiInfo?: UiInfo;
};

export type DataSourceSettingsRequest = {
  /** Indicates if the datasource is disabled or not */
  disabled?: boolean;
};

export type DataSourceSettingsResponse = {
  /** Indicates if the datasource is disabled or not */
  disabled?: boolean;
};

export type DataSourcesResponseNew = {
  /** List of connector nodes (only present when query parameter 'detail' is set to true) */
  connectorNodes?: ConnectorNodesInfo[];
  /** List of datasources metadata object */
  dataSources: DataSourceNew[];
  /** Time stamp of last updated */
  lastUpdated: string;
  /** Same value as `lastUpdated`. Replaces `lastUpdated` when the `qlik-api-version` header is set. */
  updatedAt?: string;
};

export type PublicApiError = {
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
export type QriDefinition = {
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
export type QriTemplate = {
  /** List of properties used in template */
  properties: string[];
  /** Qri template */
  template: string;
};

export type ResponseErrors = {
  errors?: PublicApiError[];
};

/**
 * UI related metadata (only present when 'includeui' is set to true in query)
 */
export type UiInfo = {
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

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

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
export async function getDataSources(
  query: {
    /** Filtering on datasourceID, when multiple dataSourceId are set in query, last dataSourceId will be used */
    dataSourceId?: string;
    /** Determines if provider detail is returned */
    detail?: boolean;
    /** When true, disabled datasources are also included in the response */
    includeDisabled?: boolean;
    /** Determines if UI info is returned */
    includeui?: boolean;
  },
  options?: ApiCallOptions,
): Promise<GetDataSourcesHttpResponse> {
  return invokeFetch("data-sources", {
    method: "get",
    pathTemplate: "/api/v1/data-sources",
    query,
    options,
  });
}

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
 * Get 'connectionProperties' for a given datasource
 * @example
 * getDataSourceApiSpecs(
 *   "rest"
 * )
 *
 * @param dataSourceId Datasource ID
 * @throws GetDataSourceApiSpecsHttpError
 */
export async function getDataSourceApiSpecs(
  dataSourceId: string,
  options?: ApiCallOptions,
): Promise<GetDataSourceApiSpecsHttpResponse> {
  return invokeFetch("data-sources", {
    method: "get",
    pathTemplate: "/api/v1/data-sources/{dataSourceId}/api-specs",
    pathVariables: { dataSourceId },
    options,
  });
}

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
export async function getDataSourceGateways(
  dataSourceId: string,
  query: {
    /** Force to get a refreshed list from backend. Cached list will be returned if not set or set to false. */
    forceRefresh?: boolean;
  },
  options?: ApiCallOptions,
): Promise<GetDataSourceGatewaysHttpResponse> {
  return invokeFetch("data-sources", {
    method: "get",
    pathTemplate: "/api/v1/data-sources/{dataSourceId}/gateways",
    pathVariables: { dataSourceId },
    query,
    options,
  });
}

export type GetDataSourceGatewaysHttpResponse = {
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

export type GetDataSourceGatewaysHttpError = {
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
export async function getDataSourceSettings(
  dataSourceId: string,
  options?: ApiCallOptions,
): Promise<GetDataSourceSettingsHttpResponse> {
  return invokeFetch("data-sources", {
    method: "get",
    pathTemplate: "/api/v1/data-sources/{dataSourceId}/settings",
    pathVariables: { dataSourceId },
    options,
  });
}

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
 * Updates the settings for a data source.
 *
 * @param dataSourceId Datasource ID
 * @param body an object with the body content
 * @throws PutDataSourceSettingsHttpError
 */
export async function putDataSourceSettings(
  dataSourceId: string,
  body: DataSourceSettingsRequest,
  options?: ApiCallOptions,
): Promise<PutDataSourceSettingsHttpResponse> {
  return invokeFetch("data-sources", {
    method: "put",
    pathTemplate: "/api/v1/data-sources/{dataSourceId}/settings",
    pathVariables: { dataSourceId },
    body,
    contentType: "application/json",
    options,
  });
}

export type PutDataSourceSettingsHttpResponse = {
  data: DataSourceSettingsResponse;
  headers: Headers;
  status: 200;
};

export type PutDataSourceSettingsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 401 | 404 | 500;
};

/**
 * Clears the cache for data-sources api requests.
 */
export function clearCache() {
  return clearApiCache("data-sources");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type DataSourcesAPI = {
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
const dataSourcesExport: DataSourcesAPI = {
  getDataSources,
  getDataSourceApiSpecs,
  getDataSourceGateways,
  getDataSourceSettings,
  putDataSourceSettings,
  clearCache,
};
export default dataSourcesExport;
