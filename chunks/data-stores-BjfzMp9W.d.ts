import { ApiCallOptions } from "./auth-types-B1c_1Nca.js";

//#region src/public/rest/data-stores.d.ts
type BatchIdDto = {
  ids?: string[];
};
type DataAsset = {
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
type DataAssetInfo = {
  dataStoreInfo?: DataStoreInfo;
  id: string;
  readonly name?: string;
};
type DataField = {
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
type DataSet = {
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
type DataStore = {
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
type DataStoreInfo = {
  id: string;
  readonly name?: string;
  readonly type?: string;
};
type Error = {
  code?: string;
  detail?: string;
  status?: string;
  title?: string;
};
type ErrorResponse = {
  errors?: Error[];
  traceId?: string;
};
type FieldDataType = {
  originalType?: string;
  /** The properties map key is string and the value is of type object. Please note, Datatype DECIMAL requires two mandatory properties to be defined; these properties must be named: precision and scale, each of these property accepts integer value.  All other datatypes does not require any manadatory properties to be defined. */
  properties?: Record<string, unknown>;
  /** Each datatype may vary in terms of required properties. Example: Datatype DECIMAL requires two mandatory properties to be defined - precision and scale, each one accepts integer value. All other datatypes does not have any required properties. */
  type: "DATE" | "TIME" | "DATETIME" | "TIMESTAMP" | "STRING" | "DOUBLE" | "DECIMAL" | "INTEGER" | "BOOLEAN" | "BINARY" | "CUSTOM";
};
type JsonPatch = {
  /** A JSON Pointer path pointing to the location to move/copy from. */
  from?: string;
  /** The operation to be performed. */
  op: "add" | "remove" | "replace" | "move" | "copy" | "test";
  /** A JSON pointer to the property being affected. */
  path: string;
  /** The value to add, replace or test. */
  value?: unknown;
};
type Link = {
  href?: string;
};
type Links = {
  first?: Link;
  last?: Link;
  next?: Link;
  prev?: Link;
  self?: Link;
};
type Operational = {
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
type PageDataAsset = {
  data?: DataAsset[];
  limit?: number;
  links?: Links;
  page?: number;
  pages?: number;
  total?: number;
};
type PageDataSet = {
  data?: DataSet[];
  limit?: number;
  links?: Links;
  page?: number;
  pages?: number;
  total?: number;
};
type PageDataStore = {
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
type Schema = {
  /** Anomalies associated with this schema. Example: $warning-unknown-headers */
  anomalies?: string[];
  dataFields: DataField[];
  readonly effectiveDate?: string;
  /** Options for loading files. Example: "qLabel": "embedded labels" */
  loadOptions?: Record<string, unknown>;
  overrideSchemaAnomalies?: boolean;
  schemaName?: string;
};
type TableConnectionInfo = {
  additionalProperties?: Record<string, string>;
  selectionScript?: string;
  tableName?: string;
};
/**
 * An array of user-supplied tags
 */
type UserTag = {
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
declare function deleteDataStores(body: BatchIdDto, options?: ApiCallOptions): Promise<DeleteDataStoresHttpResponse>;
type DeleteDataStoresHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteDataStoresHttpError = {
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
declare function getDataStores(query: {
  /** Page size limit. */
  limit?: number;
  page?: number;
  /** Comma-separated fields to return in the response. */
  projections?: string[];
  /** Comma-separated fields and field start with '-' character sorts the result set in descending order. */
  sort?: string[];
}, options?: ApiCallOptions): Promise<GetDataStoresHttpResponse>;
type GetDataStoresHttpResponse = {
  data: PageDataStore;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataStoresHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataStoresHttpResponse>;
};
type GetDataStoresHttpError = {
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
declare function createDataStore(body: DataStore, options?: ApiCallOptions): Promise<CreateDataStoreHttpResponse>;
type CreateDataStoreHttpResponse = {
  data: DataStore;
  headers: Headers;
  status: 201;
};
type CreateDataStoreHttpError = {
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
declare function deleteDataStoreDataAssets(dataStoreIds: string, options?: ApiCallOptions): Promise<DeleteDataStoreDataAssetsHttpResponse>;
type DeleteDataStoreDataAssetsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteDataStoreDataAssetsHttpError = {
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
declare function getDataStoreDataAssets(dataStoreIds: string, query: {
  /** Page size limit. */
  limit?: number;
  page?: number;
  /** Comma-separated fields to return in the response. */
  projections?: string[];
  /** Comma-separated fields and field start with '-' character sorts the result set in descending order. */
  sort?: string[];
}, options?: ApiCallOptions): Promise<GetDataStoreDataAssetsHttpResponse>;
type GetDataStoreDataAssetsHttpResponse = {
  data: PageDataAsset;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataStoreDataAssetsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataStoreDataAssetsHttpResponse>;
};
type GetDataStoreDataAssetsHttpError = {
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
declare function deleteDataStoreDataAssetDataSets(dataStoreIds: string, dataAssetIds: string, options?: ApiCallOptions): Promise<DeleteDataStoreDataAssetDataSetsHttpResponse>;
type DeleteDataStoreDataAssetDataSetsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteDataStoreDataAssetDataSetsHttpError = {
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
declare function getDataStoreDataAssetDataSets(dataStoreIds: string, dataAssetIds: string, query: {
  /** Page size limit. */
  limit?: number;
  page?: number;
  /** Comma-separated fields to return in the response. */
  projections?: string[];
  /** Comma-separated fields and field start with '-' character sorts the result set in descending order. */
  sort?: string[];
}, options?: ApiCallOptions): Promise<GetDataStoreDataAssetDataSetsHttpResponse>;
type GetDataStoreDataAssetDataSetsHttpResponse = {
  data: PageDataSet;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataStoreDataAssetDataSetsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataStoreDataAssetDataSetsHttpResponse>;
};
type GetDataStoreDataAssetDataSetsHttpError = {
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
declare function getDataStore(dataStoreId: string, query: {
  /** Comma-separated fields to return in the response. */
  projections?: string[];
}, options?: ApiCallOptions): Promise<GetDataStoreHttpResponse>;
type GetDataStoreHttpResponse = {
  data: DataStore;
  headers: Headers;
  status: 200;
};
type GetDataStoreHttpError = {
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
declare function patchDataStore(dataStoreId: string, body: JsonPatch[], options?: ApiCallOptions): Promise<PatchDataStoreHttpResponse>;
type PatchDataStoreHttpResponse = {
  data: DataStore;
  headers: Headers;
  status: 200 | 204;
};
type PatchDataStoreHttpError = {
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
declare function updateDataStore(dataStoreId: string, body: DataStore, options?: ApiCallOptions): Promise<UpdateDataStoreHttpResponse>;
type UpdateDataStoreHttpResponse = {
  data: DataStore;
  headers: Headers;
  status: 200;
};
type UpdateDataStoreHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Clears the cache for data-stores api requests.
 */
declare function clearCache(): void;
interface DataStoresAPI {
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
}
/**
 * Functions for the data-stores api
 */
declare const dataStoresExport: DataStoresAPI;
//#endregion
export { BatchIdDto, CreateDataStoreHttpError, CreateDataStoreHttpResponse, DataAsset, DataAssetInfo, DataField, DataSet, DataStore, DataStoreInfo, DataStoresAPI, DeleteDataStoreDataAssetDataSetsHttpError, DeleteDataStoreDataAssetDataSetsHttpResponse, DeleteDataStoreDataAssetsHttpError, DeleteDataStoreDataAssetsHttpResponse, DeleteDataStoresHttpError, DeleteDataStoresHttpResponse, Error, ErrorResponse, FieldDataType, GetDataStoreDataAssetDataSetsHttpError, GetDataStoreDataAssetDataSetsHttpResponse, GetDataStoreDataAssetsHttpError, GetDataStoreDataAssetsHttpResponse, GetDataStoreHttpError, GetDataStoreHttpResponse, GetDataStoresHttpError, GetDataStoresHttpResponse, JsonPatch, Link, Links, Operational, PageDataAsset, PageDataSet, PageDataStore, PatchDataStoreHttpError, PatchDataStoreHttpResponse, Schema, TableConnectionInfo, UpdateDataStoreHttpError, UpdateDataStoreHttpResponse, UserTag, clearCache, createDataStore, dataStoresExport, deleteDataStoreDataAssetDataSets, deleteDataStoreDataAssets, deleteDataStores, getDataStore, getDataStoreDataAssetDataSets, getDataStoreDataAssets, getDataStores, patchDataStore, updateDataStore };