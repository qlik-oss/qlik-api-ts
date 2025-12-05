import { y as ApiCallOptions } from "./auth-types-E99tzdN0.js";

//#region src/public/rest/dcaas.d.ts
type ApiSpecResponse = {
  /** List of properties required for the given datasource */
  connectionProperties: unknown;
  /** Datasource provider */
  connectorProvider: string;
  /** Datasource provider (i.e. connector) version */
  connectorVersion: string;
};
/**
 * Response returned when 'authUrlOnly' is set to true in the request body
 */
type AuthUrlResponse = {
  /** Authentication URL for OAuth datasource */
  authUrl: string;
};
type CreateConnectionReq = {
  /** When set to true, only authentication URL will be returned if datasource supports OAuth (other properties set in the request will ignored). This property will be ignored if the request is not OAuth or datasource doesn't support OAuth */
  authUrlOnly?: boolean;
  /** Connection name */
  connectionName: string;
  /** List of connection properties required to create dataconnection for a given datasource, which is defined by the response of 'GET /v1/data-datasources/:{datasourceId}/api-specs' */
  connectionProperties: unknown;
  /** Datasource ID */
  dataSourceId: string;
  /** Target connection space ID */
  spaceId?: string;
  /** string tags (32 or less) persisted with the connection object */
  tags?: string[];
};
type CreateConnectionRes = {
  /** Connection ID */
  connectionId: string;
  /** Connection name */
  connectionName: string;
  /** Created at time stamp */
  createdAt: string;
  /** Credentials ID (if credentials are included in the request) */
  credentialsId?: string;
  /** Datasource ID */
  dataSourceId: string;
  /** Space ID */
  spaceId?: string;
  /** Tenant ID */
  tenantId: string;
  /** Updated at time stamp */
  updateAt: string;
  /** User ID */
  userId: string;
};
type GetConnectionResponse = {
  /** Connection ID */
  connectionId: string;
  /** Connection name */
  connectionName: string;
  /** List of connection properties */
  connectionProperties: unknown;
  /** Created at time stamp */
  createdAt: string;
  /** Credentials ID (associated with the connection, either embedded or separated) */
  credentialsId?: string;
  /** Datasource ID */
  dataSourceId: string;
  /** Space ID */
  spaceId?: string;
  /** string tags associated with the connection */
  tags?: string[];
  /** Tenant ID */
  tenantId: string;
  /** Updated at time stamp */
  updateAt: string;
  /** User ID */
  userId: string;
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
type ResponseErrors = {
  errors?: PublicApiError[];
};
/**
 * @deprecated
 *
 * DEPRECATED. Use POST /v1/data-connections to create connection.
 *
 * @param body an object with the body content
 * @throws DataConnectionsDcaasHttpError
 */
declare function dataConnectionsDcaas(body: CreateConnectionReq, options?: ApiCallOptions): Promise<DataConnectionsDcaasHttpResponse>;
type DataConnectionsDcaasHttpResponse = {
  data: CreateConnectionRes | AuthUrlResponse;
  headers: Headers;
  status: 201;
};
type DataConnectionsDcaasHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * @deprecated
 *
 * DEPRECATED. Use GET /v1/data-sources/{dataSourceId}/api-specs to return 'connectionProperties' for a given datasource.
 *
 * @param query an object with query parameters
 * @throws DataConnectionsDcaasApiSpecsHttpError
 */
declare function dataConnectionsDcaasApiSpecs(query: {
  /** Datasource ID */
  dataSourceId: string;
}, options?: ApiCallOptions): Promise<DataConnectionsDcaasApiSpecsHttpResponse>;
type DataConnectionsDcaasApiSpecsHttpResponse = {
  data: ApiSpecResponse;
  headers: Headers;
  status: 200;
};
type DataConnectionsDcaasApiSpecsHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 401 | 403 | 500 | 503;
};
/**
 * @deprecated
 *
 * DEPRECATED. Use GET /v1/data-connections/{connectionId}?parseConnection=true to get connection with parsed connection properties.
 *
 * @param connectionId ID of the connection
 * @throws DataConnectionsDcaaHttpError
 */
declare function dataConnectionsDcaa(connectionId: string, options?: ApiCallOptions): Promise<DataConnectionsDcaaHttpResponse>;
type DataConnectionsDcaaHttpResponse = {
  data: GetConnectionResponse;
  headers: Headers;
  status: 200;
};
type DataConnectionsDcaaHttpError = {
  data: ResponseErrors;
  headers: Headers;
  status: 401 | 403 | 404 | 500 | 503;
};
/**
 * Clears the cache for dcaas api requests.
 */
declare function clearCache(): void;
type DcaasAPI = {
  /**
   * @deprecated
   *
   * DEPRECATED. Use POST /v1/data-connections to create connection.
   *
   * @param body an object with the body content
   * @throws DataConnectionsDcaasHttpError
   */
  dataConnectionsDcaas: typeof dataConnectionsDcaas;
  /**
   * @deprecated
   *
   * DEPRECATED. Use GET /v1/data-sources/{dataSourceId}/api-specs to return 'connectionProperties' for a given datasource.
   *
   * @param query an object with query parameters
   * @throws DataConnectionsDcaasApiSpecsHttpError
   */
  dataConnectionsDcaasApiSpecs: typeof dataConnectionsDcaasApiSpecs;
  /**
   * @deprecated
   *
   * DEPRECATED. Use GET /v1/data-connections/{connectionId}?parseConnection=true to get connection with parsed connection properties.
   *
   * @param connectionId ID of the connection
   * @throws DataConnectionsDcaaHttpError
   */
  dataConnectionsDcaa: typeof dataConnectionsDcaa;
  /**
   * Clears the cache for dcaas api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the dcaas api
 */
declare const dcaasExport: DcaasAPI;
//#endregion
export { dataConnectionsDcaas as _, DataConnectionsDcaaHttpError as a, DataConnectionsDcaasApiSpecsHttpResponse as c, DcaasAPI as d, GetConnectionResponse as f, dataConnectionsDcaa as g, clearCache as h, CreateConnectionRes as i, DataConnectionsDcaasHttpError as l, ResponseErrors as m, AuthUrlResponse as n, DataConnectionsDcaaHttpResponse as o, PublicApiError as p, CreateConnectionReq as r, DataConnectionsDcaasApiSpecsHttpError as s, ApiSpecResponse as t, DataConnectionsDcaasHttpResponse as u, dataConnectionsDcaasApiSpecs as v, dcaasExport as y };