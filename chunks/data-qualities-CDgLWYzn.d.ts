import { y as ApiCallOptions } from "./auth-types-CHOUViJI.js";

//#region src/public/rest/data-qualities.d.ts

/**
 * The ID of the computation
 */
type ComputationResponse = {
  computationId: string;
};
type ComputationStatusResponse = {
  status: ExecutionStatus;
};
/**
 * The ID of the connection
 */
type ConnectionIdType = string;
/**
 * Represents a data quality computation request. The `connectionId` attribute is optional for file-based datasets. If no sampling parameters (`executionMode`, `sampleMode`, `sampleSize`) are provided, the following default configuration is used: - `executionMode: PULLUP` - `sampleMode: ABSOLUTE` - `sampleSize: 1000`
 * @example
 * {
 *   connectionId: "2b855c3d-426c-4aac-90cf-0edf9fc294d3",
 *   datasetId: "669144f5aa2d642638ef1dd0"
 * }
 */
type DataQualityComputationRequest = {
  /** The ID of the connection */
  connectionId?: ConnectionIdType;
  /** The ID of the dataset */
  datasetId?: DatasetIdType;
} & SamplingConfiguration;
/**
 * The ID of the dataset
 */
type DatasetIdType = string;
type DatasetQualityGlobalResultsResponse = {
  /** The ID of the dataset */
  datasetId: string;
  qualities: QualitiesGlobalResultsResponse[];
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
type ExecutionStatus = "PROFILE_REQUESTED" | "PROFILE_FAILED" | "REQUESTED" | "SUBMITTED" | "SUCCEEDED" | "FAILED";
type QualitiesGlobalResultsResponse = {
  /** The ID of the connection */
  connectionId: string;
  quality: QualityGlobalResultsResponse;
};
type QualityGlobalResultsResponse = {
  /** Number of empty sample cells */
  empty: number;
  /** Number of invalid sample cells */
  invalid: number;
  /** Total number of cells in the sample */
  total: number;
  updatedAt: string;
  /** Number of valid sample cells */
  valid: number;
};
type SamplingConfiguration = {
  /** Specifies where the data quality computation takes place. In PUSHDOWN mode, it runs within the Cloud Data Warehouse (e.g., Snowflake, Databricks), whereas in PULLUP mode, it runs in Qlik Cloud. */
  executionMode?: "PUSHDOWN" | "PULLUP";
  /** Specifies how the dataset is sampled. ABSOLUTE represents a fixed number of rows, while RELATIVE refers to a percentage of the total dataset rows. */
  sampleMode?: "ABSOLUTE" | "RELATIVE";
  /** The actual value of the selected sampling method size (either a fixed number for ABSOLUTE mode or a percentage for RELATIVE mode). */
  sampleSize?: number;
};
/**
 * Triggers the computation of data quality.
 *
 * @param body an object with the body content
 * @throws TriggerDataQualitiesComputationHttpError
 */
declare function triggerDataQualitiesComputation(body: DataQualityComputationRequest, options?: ApiCallOptions): Promise<TriggerDataQualitiesComputationHttpResponse>;
type TriggerDataQualitiesComputationHttpResponse = {
  data: ComputationResponse;
  headers: Headers;
  status: 202;
};
type TriggerDataQualitiesComputationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Returns the execution status of a data quality computation.
 * @example
 * getDataQualitiesComputation(
 *   "4db06daa-3117-412e-8fb4-b29c937f9a0e"
 * )
 *
 * @param computationId The ID of the computation
 * @throws GetDataQualitiesComputationHttpError
 */
declare function getDataQualitiesComputation(computationId: string, options?: ApiCallOptions): Promise<GetDataQualitiesComputationHttpResponse>;
type GetDataQualitiesComputationHttpResponse = {
  data: ComputationStatusResponse;
  headers: Headers;
  status: 200;
};
type GetDataQualitiesComputationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Returns the global data results for a dataset, including counts of total, valid, invalid, and empty sample cells.
 *
 * @param query an object with query parameters
 * @throws GetDataQualitiesGlobalResultsHttpError
 */
declare function getDataQualitiesGlobalResults(query: {
  /** The connection ID */
  connectionId?: ConnectionIdType;
  /** The ID of the dataset */
  datasetId: DatasetIdType;
}, options?: ApiCallOptions): Promise<GetDataQualitiesGlobalResultsHttpResponse>;
type GetDataQualitiesGlobalResultsHttpResponse = {
  data: DatasetQualityGlobalResultsResponse;
  headers: Headers;
  status: 200;
};
type GetDataQualitiesGlobalResultsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Clears the cache for data-qualities api requests.
 */
declare function clearCache(): void;
type DataQualitiesAPI = {
  /**
   * Triggers the computation of data quality.
   *
   * @param body an object with the body content
   * @throws TriggerDataQualitiesComputationHttpError
   */
  triggerDataQualitiesComputation: typeof triggerDataQualitiesComputation;
  /**
   * Returns the execution status of a data quality computation.
   * @example
   * getDataQualitiesComputation(
   *   "4db06daa-3117-412e-8fb4-b29c937f9a0e"
   * )
   *
   * @param computationId The ID of the computation
   * @throws GetDataQualitiesComputationHttpError
   */
  getDataQualitiesComputation: typeof getDataQualitiesComputation;
  /**
   * Returns the global data results for a dataset, including counts of total, valid, invalid, and empty sample cells.
   *
   * @param query an object with query parameters
   * @throws GetDataQualitiesGlobalResultsHttpError
   */
  getDataQualitiesGlobalResults: typeof getDataQualitiesGlobalResults;
  /**
   * Clears the cache for data-qualities api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the data-qualities api
 */
declare const dataQualitiesExport: DataQualitiesAPI;
//#endregion
export { getDataQualitiesGlobalResults as C, getDataQualitiesComputation as S, SamplingConfiguration as _, DataQualityComputationRequest as a, clearCache as b, Error as c, GetDataQualitiesComputationHttpError as d, GetDataQualitiesComputationHttpResponse as f, QualityGlobalResultsResponse as g, QualitiesGlobalResultsResponse as h, DataQualitiesAPI as i, ErrorResponse as l, GetDataQualitiesGlobalResultsHttpResponse as m, ComputationStatusResponse as n, DatasetIdType as o, GetDataQualitiesGlobalResultsHttpError as p, ConnectionIdType as r, DatasetQualityGlobalResultsResponse as s, ComputationResponse as t, ExecutionStatus as u, TriggerDataQualitiesComputationHttpError as v, triggerDataQualitiesComputation as w, dataQualitiesExport as x, TriggerDataQualitiesComputationHttpResponse as y };