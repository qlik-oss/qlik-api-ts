import { y as ApiCallOptions } from "./auth-types-D63pRJnS.js";

//#region src/public/rest/data-sets.d.ts
type BatchIdDto = {
  ids?: string[];
};
type BinnedFrequency = {
  binEdge?: number;
  frequency?: number;
};
type Classification = {
  obfuscation?: string;
  pii?: boolean;
  sensitive?: boolean;
  tags?: Tag[];
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
type DataSetProfile = {
  meta?: ProfileMetadata;
  readonly profiles?: TableProfile[];
  readonly samples?: TableSample[];
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
type FieldProfile = {
  average?: number;
  averageStringLength?: number;
  classification?: Classification;
  dataType?: "DATE" | "TIME" | "DATETIME" | "TIMESTAMP" | "STRING" | "DOUBLE" | "DECIMAL" | "INTEGER" | "BOOLEAN" | "BINARY" | "CUSTOM";
  distinctValueCount?: number;
  emptyStringCount?: number;
  evenness?: number;
  firstSortedStringValue?: string;
  fractiles?: number[];
  frequencyDistribution?: BinnedFrequency[];
  index?: number;
  kurtosis?: number;
  lastSortedStringValue?: string;
  maxNumericValue?: number;
  maxStringLength?: number;
  median?: number;
  minNumericValue?: number;
  minStringLength?: number;
  mostFrequentValues?: Frequency[];
  name?: string;
  negativeValueCount?: number;
  nullValueCount?: number;
  numericValueCount?: number;
  positiveValueCount?: number;
  sampleValues?: string[];
  skewness?: number;
  standardDeviation?: number;
  sumNumericValues?: number;
  sumSquaredNumericValues?: number;
  sumStringLength?: number;
  tags?: string[];
  technicalName?: string;
  textValueCount?: number;
  zeroValueCount?: number;
};
type Frequency = {
  frequency?: number;
  value?: string;
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
type PageDataSetProfile = {
  data?: DataSetProfile[];
  limit?: number;
  links?: Links;
  page?: number;
  pages?: number;
  total?: number;
};
type ProfileMetadata = {
  computationEndTime?: string;
  computationStartTime?: string;
  connectionId?: string;
  dataSetId?: string;
  lastLoadTime?: string;
  messages?: string[];
  resultType?: "NORMAL" | "BASIC";
  status?: "QUEUED" | "RUNNING" | "FINISHED" | "FAILED" | "INCOMPLETE" | "CANCELLED" | "STALE" | "PARTIAL" | "DEFERRED";
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
type TableProfile = {
  readonly fieldProfiles?: FieldProfile[];
  readonly name?: string;
  readonly numberOfRows?: number;
  readonly sizeInBytes?: number;
};
type TableRecord = {
  values?: string[];
};
type TableSample = {
  readonly fieldNames?: string[];
  readonly name?: string;
  readonly records?: TableRecord[];
};
type Tag = {
  score?: number;
  tag?: string;
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
 * Batch delete data sets.
 *
 * @param body an object with the body content
 * @throws DeleteDataSetsHttpError
 */
declare function deleteDataSets(body: BatchIdDto, options?: ApiCallOptions): Promise<DeleteDataSetsHttpResponse>;
type DeleteDataSetsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteDataSetsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Save new data set
 *
 * @param body an object with the body content
 * @throws CreateDataSetHttpError
 */
declare function createDataSet(body: DataSet, options?: ApiCallOptions): Promise<CreateDataSetHttpResponse>;
type CreateDataSetHttpResponse = {
  data: DataSet;
  headers: Headers;
  status: 201;
};
type CreateDataSetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Get data set by ID.
 *
 * @param dataSetId
 * @param query an object with query parameters
 * @throws GetDataSetHttpError
 */
declare function getDataSet(dataSetId: string, query: {
  /** Comma-separated fields to return in the response. */
  projections?: string[];
}, options?: ApiCallOptions): Promise<GetDataSetHttpResponse>;
type GetDataSetHttpResponse = {
  data: DataSet;
  headers: Headers;
  status: 200;
};
type GetDataSetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Patch data set.
 *
 * @param dataSetId
 * @param body an object with the body content
 * @throws PatchDataSetHttpError
 */
declare function patchDataSet(dataSetId: string, body: JsonPatch[], options?: ApiCallOptions): Promise<PatchDataSetHttpResponse>;
type PatchDataSetHttpResponse = {
  data: DataSet;
  headers: Headers;
  status: 200 | 204;
};
type PatchDataSetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Update data set.
 *
 * @param dataSetId
 * @param body an object with the body content
 * @throws UpdateDataSetHttpError
 */
declare function updateDataSet(dataSetId: string, body: DataSet, options?: ApiCallOptions): Promise<UpdateDataSetHttpResponse>;
type UpdateDataSetHttpResponse = {
  data: DataSet;
  headers: Headers;
  status: 200;
};
type UpdateDataSetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Get profile for the given dataset and connection Id pair, if the profile already exists in the system. Profile returned can be either latest or Stale one based on when it was computed.
 *
 * @param dataSetId
 * @param query an object with query parameters
 * @throws GetDataSetProfilesHttpError
 */
declare function getDataSetProfiles(dataSetId: string, query: {
  /** Comma-separated data connection IDs. */
  dataConnectionIds?: string[];
  /** Page size limit. */
  limit?: number;
  page?: number;
  /** Comma-separated fields to return in the response. */
  projections?: string[];
  sort?: string[];
}, options?: ApiCallOptions): Promise<GetDataSetProfilesHttpResponse>;
type GetDataSetProfilesHttpResponse = {
  data: PageDataSetProfile;
  headers: Headers;
  status: 200 | 202;
  prev?: (options?: ApiCallOptions) => Promise<GetDataSetProfilesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataSetProfilesHttpResponse>;
};
type GetDataSetProfilesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Clears the cache for data-sets api requests.
 */
declare function clearCache(): void;
type DataSetsAPI = {
  /**
   * Batch delete data sets.
   *
   * @param body an object with the body content
   * @throws DeleteDataSetsHttpError
   */
  deleteDataSets: typeof deleteDataSets;
  /**
   * Save new data set
   *
   * @param body an object with the body content
   * @throws CreateDataSetHttpError
   */
  createDataSet: typeof createDataSet;
  /**
   * Get data set by ID.
   *
   * @param dataSetId
   * @param query an object with query parameters
   * @throws GetDataSetHttpError
   */
  getDataSet: typeof getDataSet;
  /**
   * Patch data set.
   *
   * @param dataSetId
   * @param body an object with the body content
   * @throws PatchDataSetHttpError
   */
  patchDataSet: typeof patchDataSet;
  /**
   * Update data set.
   *
   * @param dataSetId
   * @param body an object with the body content
   * @throws UpdateDataSetHttpError
   */
  updateDataSet: typeof updateDataSet;
  /**
   * Get profile for the given dataset and connection Id pair, if the profile already exists in the system. Profile returned can be either latest or Stale one based on when it was computed.
   *
   * @param dataSetId
   * @param query an object with query parameters
   * @throws GetDataSetProfilesHttpError
   */
  getDataSetProfiles: typeof getDataSetProfiles;
  /**
   * Clears the cache for data-sets api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the data-sets api
 */
declare const dataSetsExport: DataSetsAPI;
//#endregion
export { ProfileMetadata as A, clearCache as B, JsonPatch as C, PageDataSetProfile as D, Operational as E, TableSample as F, getDataSetProfiles as G, dataSetsExport as H, Tag as I, patchDataSet as K, UpdateDataSetHttpError as L, TableConnectionInfo as M, TableProfile as N, PatchDataSetHttpError as O, TableRecord as P, UpdateDataSetHttpResponse as R, GetDataSetProfilesHttpResponse as S, Links as T, deleteDataSets as U, createDataSet as V, getDataSet as W, FieldProfile as _, CreateDataSetHttpResponse as a, GetDataSetHttpResponse as b, DataSet as c, DataStoreInfo as d, DeleteDataSetsHttpError as f, FieldDataType as g, ErrorResponse as h, CreateDataSetHttpError as i, Schema as j, PatchDataSetHttpResponse as k, DataSetProfile as l, Error as m, BinnedFrequency as n, DataAssetInfo as o, DeleteDataSetsHttpResponse as p, updateDataSet as q, Classification as r, DataField as s, BatchIdDto as t, DataSetsAPI as u, Frequency as v, Link as w, GetDataSetProfilesHttpError as x, GetDataSetHttpError as y, UserTag as z };