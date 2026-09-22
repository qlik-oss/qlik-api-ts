import { x as ApiCallOptions } from "./chunks/auth-types-DCwmQ7fk.js";
import "./chunks/invoke-fetch-eUbA2JSu.js";
//#region src/public/rest/data-stores.d.ts
export type BatchIdDto = {
  ids?: string[];
};
export type DataAsset = {
  appId?: string;
  appType: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly createdBy?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly createdTime?: string;
  /** The date-time when the source data was last changed */
  dataFreshness?: string;
  dataStoreInfo?: DataStoreInfo;
  description?: string;
  /** Only required when updating the resource. Must be null for new resources. */
  id?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly lastModifiedBy?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly lastModifiedTime?: string;
  name?: string;
  /** The value is automatically set by the application. */
  ownerId?: string;
  /** A Map of name-value pairs. */
  properties?: Record<string, unknown>;
  spaceId?: string;
  tags?: string[];
  technicalDescription?: string;
  technicalName: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly tenantId?: string;
  /** Only required when updating the resource. Must be null for new resources. */
  version?: number;
};
export type DataAssetInfo = {
  dataStoreInfo?: DataStoreInfo;
  id: string;
  readonly name?: string;
};
export type DataField = {
  /** Alias of the field. Must be unique within the schema and must not match another field's name. Returns `400` if violated. */
  alias?: string;
  dataType: FieldDataType;
  description?: string;
  encrypted?: boolean;
  readonly index?: number;
  name: string;
  nullable?: boolean;
  ordinalPositionInKey?: number;
  orphan?: boolean;
  primaryKey?: boolean;
  properties?: Record<string, unknown>;
  sensitive?: boolean;
  /** An array of system tags */
  tags?: string[];
  /** An array of user-supplied tags */
  userTags?: UserTag[];
};
export type DataSet = {
  /** Optional field to specify additional schemas for files where multiple tables or sheets are available. User must define primary schema in 'schema' attribute and rest of the sheets/ tables can be defined using this field. This field is not populated for the dataSets with single schema */
  additionalSchemas?: Schema[];
  /** Optional override of DataAsset appType. */
  appTypeOverride?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly createdBy?: string;
  /** The connectionId that created the Dataset. Optional. */
  createdByConnectionId?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly createdTime?: string;
  dataAssetInfo: DataAssetInfo;
  description?: string;
  /** Only required when updating the resource. Must be null for new resources. */
  id?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly lastModifiedBy?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly lastModifiedTime?: string;
  name?: string;
  operational?: Operational;
  /** The value is automatically set by the application. */
  ownerId?: string;
  /** A Map of name-value pairs. */
  properties?: Record<string, unknown>;
  /** NOTE: this will be deprecated after migration to secureQri. Required user defined field. All the parts in the format must be separated by ':'. The first part denotes the resourceType, followed by dataStoreType and tenant guid. The spaceGuid or userGuid is to be populated based on if the dataset is in shared or private space and finally the full file name. This field is auto populated for the dataSet generated for qix-datafiles. */
  qri: string;
  /** Optional field to specify additional schemas for files where multiple tables or sheets are available. User must define primary schema in 'schema' attribute and rest of the sheets/ tables can be defined using this field. This field is not populated for the dataSets with single schema */
  schema?: Schema;
  secureQri: string;
  spaceId?: string;
  tags?: string[];
  technicalDescription?: string;
  technicalName: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly tenantId?: string;
  type?: string;
  /** Only required when updating the resource. Must be null for new resources. */
  version?: number;
};
export type DataStore = {
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly createdBy?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly createdTime?: string;
  description?: string;
  /** Only required when updating the resource. Must be null for new resources. */
  id?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly lastModifiedBy?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly lastModifiedTime?: string;
  name?: string;
  /** The value is automatically set by the application. */
  ownerId?: string;
  /** A Map of name-value pairs. */
  properties?: Record<string, unknown>;
  spaceId?: string;
  tags?: string[];
  technicalDescription?: string;
  technicalName: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly tenantId?: string;
  type: string;
  uri?: string;
  /** Only required when updating the resource. Must be null for new resources. */
  version?: number;
};
export type DataStoreInfo = {
  id: string;
  readonly name?: string;
  readonly type?: string;
};
export type Error = {
  code?: string;
  detail?: string;
  /** Optional free-form metadata associated with the error. */
  meta?: unknown;
  status?: string;
  title?: string;
};
export type ErrorResponse = {
  errors?: Error[];
  traceId?: string;
};
export type FieldDataType = {
  originalType?: string;
  /** The properties map key is string and the value is of type object. Please note, Datatype DECIMAL requires two mandatory properties to be defined; these properties must be named: precision and scale, each of these property accepts integer value.  All other datatypes does not require any manadatory properties to be defined. */
  properties?: Record<string, unknown>;
  /** Each datatype may vary in terms of required properties. Example: Datatype DECIMAL requires two mandatory properties to be defined - precision and scale, each one accepts integer value. All other datatypes does not have any required properties. */
  type: "DATE" | "TIME" | "DATETIME" | "TIMESTAMP" | "STRING" | "DOUBLE" | "DECIMAL" | "INTEGER" | "BOOLEAN" | "BINARY" | "CUSTOM";
};
export type JsonPatch = {
  /** A JSON Pointer path pointing to the location to move/copy from. */
  from?: string;
  /** The operation to be performed. */
  op: "add" | "remove" | "replace" | "move" | "copy" | "test";
  /** A JSON pointer to the property being affected. */
  path: string;
  /** The value to add, replace or test. */
  value?: unknown;
};
export type Link = {
  href?: string;
};
export type Links = {
  first?: Link;
  last?: Link;
  next?: Link;
  prev?: Link;
  self?: Link;
};
export type Operational = {
  contentUpdated?: boolean;
  endDate?: string;
  lastLoadTime?: string;
  lastUpdateTime?: string;
  location?: string;
  logMessage?: string;
  rowCount?: number;
  size?: number;
  startDate?: string;
  status?: string;
  tableConnectionInfo?: TableConnectionInfo;
  tableOwner?: string;
};
export type PageDataAsset = {
  data?: DataAsset[];
  limit?: number;
  links?: Links;
  page?: number;
  pages?: number;
  total?: number;
};
export type PageDataSet = {
  data?: DataSet[];
  limit?: number;
  links?: Links;
  page?: number;
  pages?: number;
  total?: number;
};
export type PageDataStore = {
  data?: DataStore[];
  limit?: number;
  links?: Links;
  page?: number;
  pages?: number;
  total?: number;
};
/**
 * Optional field to specify additional schemas for files where multiple tables or sheets are available. User must define primary schema in 'schema' attribute and rest of the sheets/ tables can be defined using this field. This field is not populated for the dataSets with single schema
 */
export type Schema = {
  /** Anomalies associated with this schema. Example: $warning-unknown-headers */
  anomalies?: string[];
  dataFields: DataField[];
  readonly effectiveDate?: string;
  /** Options for loading files. Example: "qLabel": "embedded labels" */
  loadOptions?: Record<string, unknown>;
  overrideSchemaAnomalies?: boolean;
  schemaName?: string;
};
export type TableConnectionInfo = {
  additionalProperties?: Record<string, string>;
  selectionScript?: string;
  tableName?: string;
};
/**
 * An array of user-supplied tags
 */
export type UserTag = {
  /** The id of the tag in Collections */
  id?: string;
  name?: string;
};
/**
 * Delete data stores if it does not contain any data-assets.
 *
 * @param body an object with the body content
 * @throws DeleteDataStoresHttpError
 */
export declare function deleteDataStores(body: BatchIdDto, options?: ApiCallOptions): Promise<DeleteDataStoresHttpResponse>;
export type DeleteDataStoresHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteDataStoresHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Get all data stores.
 *
 * @param query an object with query parameters
 * @throws GetDataStoresHttpError
 */
export declare function getDataStores(query: {
  /** Page size limit. */
  limit?: number;
  page?: number;
  /** Comma-separated fields to return in the response. */
  projections?: string[];
  /** Comma-separated fields and field start with '-' character sorts the result set in descending order. */
  sort?: string[];
}, options?: ApiCallOptions): Promise<GetDataStoresHttpResponse>;
export type GetDataStoresHttpResponse = {
  data: PageDataStore;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataStoresHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataStoresHttpResponse>;
};
export type GetDataStoresHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Save new data store.
 *
 * @param body an object with the body content
 * @throws CreateDataStoreHttpError
 */
export declare function createDataStore(body: DataStore, options?: ApiCallOptions): Promise<CreateDataStoreHttpResponse>;
export type CreateDataStoreHttpResponse = {
  data: DataStore;
  headers: Headers;
  status: 201;
};
export type CreateDataStoreHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Delete data assets and child data-sets by data-store IDs.
 *
 * @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
 * @throws DeleteDataStoreDataAssetsHttpError
 */
export declare function deleteDataStoreDataAssets(dataStoreIds: string, options?: ApiCallOptions): Promise<DeleteDataStoreDataAssetsHttpResponse>;
export type DeleteDataStoreDataAssetsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteDataStoreDataAssetsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Get all data assets belonging to the data store(s).
 *
 * @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
 * @param query an object with query parameters
 * @throws GetDataStoreDataAssetsHttpError
 */
export declare function getDataStoreDataAssets(dataStoreIds: string, query: {
  /** Page size limit. */
  limit?: number;
  page?: number;
  /** Comma-separated fields to return in the response. */
  projections?: string[];
  /** Comma-separated fields and field start with '-' character sorts the result set in descending order. */
  sort?: string[];
}, options?: ApiCallOptions): Promise<GetDataStoreDataAssetsHttpResponse>;
export type GetDataStoreDataAssetsHttpResponse = {
  data: PageDataAsset;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataStoreDataAssetsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataStoreDataAssetsHttpResponse>;
};
export type GetDataStoreDataAssetsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Delete data sets by data-store IDs and data-asset IDs.
 *
 * @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
 * @param dataAssetIds Comma-separated data asset IDs or * to include all data assets.
 * @throws DeleteDataStoreDataAssetDataSetsHttpError
 */
export declare function deleteDataStoreDataAssetDataSets(dataStoreIds: string, dataAssetIds: string, options?: ApiCallOptions): Promise<DeleteDataStoreDataAssetDataSetsHttpResponse>;
export type DeleteDataStoreDataAssetDataSetsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteDataStoreDataAssetDataSetsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Get all data sets belonging to the data store(s) and data asset(s).
 *
 * @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
 * @param dataAssetIds Comma-separated data asset IDs or * to include all data assets.
 * @param query an object with query parameters
 * @throws GetDataStoreDataAssetDataSetsHttpError
 */
export declare function getDataStoreDataAssetDataSets(dataStoreIds: string, dataAssetIds: string, query: {
  /** Page size limit. */
  limit?: number;
  page?: number;
  /** Comma-separated fields to return in the response. */
  projections?: string[];
  /** Comma-separated fields and field start with '-' character sorts the result set in descending order. */
  sort?: string[];
}, options?: ApiCallOptions): Promise<GetDataStoreDataAssetDataSetsHttpResponse>;
export type GetDataStoreDataAssetDataSetsHttpResponse = {
  data: PageDataSet;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataStoreDataAssetDataSetsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataStoreDataAssetDataSetsHttpResponse>;
};
export type GetDataStoreDataAssetDataSetsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Get data store by ID.
 *
 * @param dataStoreId
 * @param query an object with query parameters
 * @throws GetDataStoreHttpError
 */
export declare function getDataStore(dataStoreId: string, query: {
  /** Comma-separated fields to return in the response. */
  projections?: string[];
}, options?: ApiCallOptions): Promise<GetDataStoreHttpResponse>;
export type GetDataStoreHttpResponse = {
  data: DataStore;
  headers: Headers;
  status: 200;
};
export type GetDataStoreHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Patch data store.
 *
 * @param dataStoreId
 * @param body an object with the body content
 * @throws PatchDataStoreHttpError
 */
export declare function patchDataStore(dataStoreId: string, body: JsonPatch[], options?: ApiCallOptions): Promise<PatchDataStoreHttpResponse>;
export type PatchDataStoreHttpResponse = {
  data: DataStore;
  headers: Headers;
  status: 200 | 204;
};
export type PatchDataStoreHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Update data store.
 *
 * @param dataStoreId
 * @param body an object with the body content
 * @throws UpdateDataStoreHttpError
 */
export declare function updateDataStore(dataStoreId: string, body: DataStore, options?: ApiCallOptions): Promise<UpdateDataStoreHttpResponse>;
export type UpdateDataStoreHttpResponse = {
  data: DataStore;
  headers: Headers;
  status: 200;
};
export type UpdateDataStoreHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Clears the cache for data-stores api requests.
 */
export declare function clearCache(): void;
export type DataStoresAPI = {
  /**
   * Delete data stores if it does not contain any data-assets.
   *
   * @param body an object with the body content
   * @throws DeleteDataStoresHttpError
   */
  deleteDataStores: typeof deleteDataStores;
  /**
   * Get all data stores.
   *
   * @param query an object with query parameters
   * @throws GetDataStoresHttpError
   */
  getDataStores: typeof getDataStores;
  /**
   * Save new data store.
   *
   * @param body an object with the body content
   * @throws CreateDataStoreHttpError
   */
  createDataStore: typeof createDataStore;
  /**
   * Delete data assets and child data-sets by data-store IDs.
   *
   * @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
   * @throws DeleteDataStoreDataAssetsHttpError
   */
  deleteDataStoreDataAssets: typeof deleteDataStoreDataAssets;
  /**
   * Get all data assets belonging to the data store(s).
   *
   * @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
   * @param query an object with query parameters
   * @throws GetDataStoreDataAssetsHttpError
   */
  getDataStoreDataAssets: typeof getDataStoreDataAssets;
  /**
   * Delete data sets by data-store IDs and data-asset IDs.
   *
   * @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
   * @param dataAssetIds Comma-separated data asset IDs or * to include all data assets.
   * @throws DeleteDataStoreDataAssetDataSetsHttpError
   */
  deleteDataStoreDataAssetDataSets: typeof deleteDataStoreDataAssetDataSets;
  /**
   * Get all data sets belonging to the data store(s) and data asset(s).
   *
   * @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
   * @param dataAssetIds Comma-separated data asset IDs or * to include all data assets.
   * @param query an object with query parameters
   * @throws GetDataStoreDataAssetDataSetsHttpError
   */
  getDataStoreDataAssetDataSets: typeof getDataStoreDataAssetDataSets;
  /**
   * Get data store by ID.
   *
   * @param dataStoreId
   * @param query an object with query parameters
   * @throws GetDataStoreHttpError
   */
  getDataStore: typeof getDataStore;
  /**
   * Patch data store.
   *
   * @param dataStoreId
   * @param body an object with the body content
   * @throws PatchDataStoreHttpError
   */
  patchDataStore: typeof patchDataStore;
  /**
   * Update data store.
   *
   * @param dataStoreId
   * @param body an object with the body content
   * @throws UpdateDataStoreHttpError
   */
  updateDataStore: typeof updateDataStore;
  /**
   * Clears the cache for data-stores api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the data-stores api
 */
declare const dataStoresExport: DataStoresAPI;
//#endregion
export { dataStoresExport as default };