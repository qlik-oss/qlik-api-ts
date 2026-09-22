import { x as ApiCallOptions } from "./chunks/auth-types-DCwmQ7fk.js";
import "./chunks/invoke-fetch-eUbA2JSu.js";
//#region src/public/rest/data-sets.d.ts
export type BatchIdDto = {
  ids?: string[];
};
export type BinnedFrequency = {
  binEdge?: number;
  frequency?: number;
};
export type Classification = {
  obfuscation?: string;
  pii?: boolean;
  sensitive?: boolean;
  tags?: Tag[];
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
export type DataSetProfile = {
  meta?: ProfileMetadata;
  readonly profiles?: TableProfile[];
  readonly samples?: TableSample[];
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
export type ErrorCopy = {
  code?: string;
  detail?: string;
  status?: string;
  title?: string;
};
export type ErrorResponse = {
  errors?: Error[];
  traceId?: string;
};
export type ErrorResponseCopy = {
  errors?: ErrorCopy[];
  traceId?: string;
};
export type FieldDataType = {
  originalType?: string;
  /** The properties map key is string and the value is of type object. Please note, Datatype DECIMAL requires two mandatory properties to be defined; these properties must be named: precision and scale, each of these property accepts integer value.  All other datatypes does not require any manadatory properties to be defined. */
  properties?: Record<string, unknown>;
  /** Each datatype may vary in terms of required properties. Example: Datatype DECIMAL requires two mandatory properties to be defined - precision and scale, each one accepts integer value. All other datatypes does not have any required properties. */
  type: "DATE" | "TIME" | "DATETIME" | "TIMESTAMP" | "STRING" | "DOUBLE" | "DECIMAL" | "INTEGER" | "BOOLEAN" | "BINARY" | "CUSTOM";
};
export type FieldProfile = {
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
export type Frequency = {
  frequency?: number;
  value?: string;
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
export type PageDataSetProfile = {
  data?: DataSetProfile[];
  limit?: number;
  links?: Links;
  page?: number;
  pages?: number;
  total?: number;
};
export type ProfileMetadata = {
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
export type TableProfile = {
  readonly fieldProfiles?: FieldProfile[];
  readonly name?: string;
  readonly numberOfRows?: number;
  readonly sizeInBytes?: number;
};
export type TableRecord = {
  values?: string[];
};
export type TableSample = {
  readonly fieldNames?: string[];
  readonly name?: string;
  readonly records?: TableRecord[];
};
export type Tag = {
  score?: number;
  tag?: string;
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
 * Batch delete data sets.
 *
 * @param body an object with the body content
 * @throws DeleteDataSetsHttpError
 */
export declare function deleteDataSets(body: BatchIdDto, options?: ApiCallOptions): Promise<DeleteDataSetsHttpResponse>;
export type DeleteDataSetsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteDataSetsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Creates and saves a new data set in the catalog.
 *
 * @param body an object with the body content
 * @throws CreateDataSetHttpError
 */
export declare function createDataSet(body: DataSet, options?: ApiCallOptions): Promise<CreateDataSetHttpResponse>;
export type CreateDataSetHttpResponse = {
  data: DataSet;
  headers: Headers;
  status: 201;
};
export type CreateDataSetHttpError = {
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
export declare function getDataSet(dataSetId: string, query: {
  /** Comma-separated fields to return in the response. */
  projections?: string[];
}, options?: ApiCallOptions): Promise<GetDataSetHttpResponse>;
export type GetDataSetHttpResponse = {
  data: DataSet;
  headers: Headers;
  status: 200;
};
export type GetDataSetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Partially updates an existing DataSet by ID using JSON Patch operations (RFC 6902), including ownership attributes.
 *
 * A user can update any DataSet within a space if they fulfill **one** of the following conditions:
 *
 * - Has **Can edit** permission in a **data space**.
 * - Is a **Professional** user with the **Editor** or **Operator** role in a **shared space**.
 * - Is a **Professional** user with the **Facilitator** or **Operator** role in a **managed space**.
 *
 * @param dataSetId
 * @param body an object with the body content
 * @throws PatchDataSetHttpError
 */
export declare function patchDataSet(dataSetId: string, body: JsonPatch[], options?: ApiCallOptions): Promise<PatchDataSetHttpResponse>;
export type PatchDataSetHttpResponse = {
  data: DataSet;
  headers: Headers;
  status: 200 | 204;
};
export type PatchDataSetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Fully replaces an existing DataSet by ID, including ownership attributes.
 *
 * A user can update any DataSet within a space if they fulfill **one** of the following conditions:
 *
 * - Has **Can edit** permission in a **data space**.
 * - Is a **Professional** user with the **Editor** or **Operator** role in a **shared space**.
 * - Is a **Professional** user with the **Facilitator** or **Operator** role in a **managed space**.
 *
 * @param dataSetId
 * @param body an object with the body content
 * @throws UpdateDataSetHttpError
 */
export declare function updateDataSet(dataSetId: string, body: DataSet, options?: ApiCallOptions): Promise<UpdateDataSetHttpResponse>;
export type UpdateDataSetHttpResponse = {
  data: DataSet;
  headers: Headers;
  status: 200;
};
export type UpdateDataSetHttpError = {
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
export declare function getDataSetProfiles(dataSetId: string, query: {
  /** Comma-separated data connection IDs. */
  dataConnectionIds?: string[];
  /** Page size limit. */
  limit?: number;
  page?: number;
  /** Comma-separated fields to return in the response. */
  projections?: string[];
  sort?: string[];
}, options?: ApiCallOptions): Promise<GetDataSetProfilesHttpResponse>;
export type GetDataSetProfilesHttpResponse = {
  data: PageDataSetProfile;
  headers: Headers;
  status: 200 | 202;
  prev?: (options?: ApiCallOptions) => Promise<GetDataSetProfilesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataSetProfilesHttpResponse>;
};
export type GetDataSetProfilesHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Clears the cache for data-sets api requests.
 */
export declare function clearCache(): void;
export type DataSetsAPI = {
  /**
   * Batch delete data sets.
   *
   * @param body an object with the body content
   * @throws DeleteDataSetsHttpError
   */
  deleteDataSets: typeof deleteDataSets;
  /**
   * Creates and saves a new data set in the catalog.
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
   * Partially updates an existing DataSet by ID using JSON Patch operations (RFC 6902), including ownership attributes.
   *
   * A user can update any DataSet within a space if they fulfill **one** of the following conditions:
   *
   * - Has **Can edit** permission in a **data space**.
   * - Is a **Professional** user with the **Editor** or **Operator** role in a **shared space**.
   * - Is a **Professional** user with the **Facilitator** or **Operator** role in a **managed space**.
   *
   * @param dataSetId
   * @param body an object with the body content
   * @throws PatchDataSetHttpError
   */
  patchDataSet: typeof patchDataSet;
  /**
   * Fully replaces an existing DataSet by ID, including ownership attributes.
   *
   * A user can update any DataSet within a space if they fulfill **one** of the following conditions:
   *
   * - Has **Can edit** permission in a **data space**.
   * - Is a **Professional** user with the **Editor** or **Operator** role in a **shared space**.
   * - Is a **Professional** user with the **Facilitator** or **Operator** role in a **managed space**.
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
export { dataSetsExport as default };