import { A as ApiCallOptions } from './invoke-fetch-types-Cq7bjkqn.js';
import './auth-types-DqfMuSRX.js';

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
type DataSourceNew = {
    /** List of capabilities supported by the datasource */
    capabilities?: string[];
    /** Override value of dataload URL (could be null) */
    dataLoadUrlOverride?: string;
    /** Unique identifier of datasource */
    dataSourceId: string;
    /** Datasource property name (could be null) */
    dataSourcePropertyName?: string;
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
 *     includeui: true
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetDataSourcesHttpError
 */
declare const getDataSources: (query: {
    /** Filtering on datasourceID, when multiple dataSourceId are set in query, last dataSourceId will be used */
    dataSourceId?: string;
    /** Determines if provider detail is returned */
    detail?: boolean;
    /** Determines if UI info is returned */
    includeui?: boolean;
}, options?: ApiCallOptions) => Promise<GetDataSourcesHttpResponse>;
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
declare const getDataSourceApiSpecs: (dataSourceId: string, options?: ApiCallOptions) => Promise<GetDataSourceApiSpecsHttpResponse>;
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
declare const getDataSourceGateways: (dataSourceId: string, query: {
    /** Force to get a refreshed list from backend. Cached list will be returned if not set or set to false. */
    forceRefresh?: boolean;
}, options?: ApiCallOptions) => Promise<GetDataSourceGatewaysHttpResponse>;
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
 * Clears the cache for data-sources api requests.
 */
declare function clearCache(): void;
interface DataSourcesAPI {
    /**
     * Gets the list of data sources available on the node.
     * @example
     * getDataSources(
     *   {
     *     dataSourceId: "rest",
     *     detail: true,
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
     * Clears the cache for data-sources api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the data-sources api
 */
declare const dataSourcesExport: DataSourcesAPI;

export { type ApiSpecResponse, type ConnectorNodesInfo, type DataSourceNew, type DataSourcesAPI, type DataSourcesResponseNew, type GetDataSourceApiSpecsHttpError, type GetDataSourceApiSpecsHttpResponse, type GetDataSourceGatewaysHttpError, type GetDataSourceGatewaysHttpResponse, type GetDataSourcesHttpError, type GetDataSourcesHttpResponse, type PublicApiError, type QriDefinition, type QriTemplate, type ResponseErrors, type UiInfo, clearCache, dataSourcesExport as default, getDataSourceApiSpecs, getDataSourceGateways, getDataSources };
