import { x as ApiCallOptions } from "./chunks/auth-types-BAiSvIRn.js";
//#region src/public/rest/data-qualities.d.ts
/**
 * Response returned when a data quality computation is successfully triggered.
 */
type ComputationResponse = {
  /** The unique identifier of the triggered computation. Use this value to poll for status. */computationId: string;
};
type ComputationStatusResponse = {
  status: ExecutionStatus;
};
/**
 * The ID of the connection
 */
type ConnectionIdType = string;
/**
 * Request payload for triggering a data quality computation. The `connectionId` is optional for file-based datasets.
 * If none of the sampling parameters are provided, the following defaults apply:
 * - `executionMode: PULLUP`
 * - `sampleMode: ABSOLUTE`
 * - `sampleSize: 1000`
 * @example
 * {
 *   connectionId: "2b855c3d-426c-4aac-90cf-0edf9fc294d3",
 *   datasetId: "669144f5aa2d642638ef1dd0"
 * }
 */
type DataQualityComputationRequest = {
  /** The ID of the connection */connectionId?: ConnectionIdType; /** The ID of the dataset */
  datasetId?: DatasetIdType;
} & SamplingConfiguration;
/**
 * The ID of the dataset
 */
type DatasetIdType = string;
type DatasetQualityGlobalResultsResponse = {
  /** The unique identifier of the dataset. */datasetId: string;
  qualities: QualitiesGlobalResultsResponse[];
};
type Error = {
  code?: string;
  detail?: string;
  title?: string;
};
type ErrorResponse = {
  errors?: Error[];
  traceId?: string;
};
type ExecutionStatus = "PROFILE_REQUESTED" | "PROFILE_FAILED" | "REQUESTED" | "SUBMITTED" | "SUCCEEDED" | "FAILED";
type QualitiesGlobalResultsResponse = {
  /** The unique identifier of the connection. */connectionId: string;
  quality: QualityGlobalResultsResponse;
};
type QualityGlobalResultsResponse = {
  /** Number of empty sample cells. */empty: number; /** Number of invalid sample cells. */
  invalid: number; /** Total number of cells in the sample. */
  total: number; /** Timestamp of the most recent data quality computation for this dataset and connection. */
  updatedAt: string; /** Number of valid sample cells. */
  valid: number;
};
type SamplingConfiguration = {
  /** Specifies where the data quality computation takes place. In `PUSHDOWN` mode, it runs within the Cloud Data Warehouse (e.g., Snowflake, Databricks), whereas in `PULLUP` mode, it runs in Qlik Cloud. */executionMode?: "PUSHDOWN" | "PULLUP"; /** Specifies how the dataset is sampled. `ABSOLUTE` represents a fixed number of rows, while `RELATIVE` refers to a percentage of the total dataset rows. */
  sampleMode?: "ABSOLUTE" | "RELATIVE"; /** The actual value of the selected sampling method size (either a fixed number for `ABSOLUTE` mode or a percentage for `RELATIVE` mode). Maximum allowed value for `ABSOLUTE` mode is `100000`. */
  sampleSize?: number;
};
/**
 * @deprecated
 *
 * Triggers a full data quality computation for a dataset, running profile calculation followed by data quality
 * assessment. Returns a `computationId` that can be used to track progress via the computation status endpoint
 * (`GET /data-qualities/computations/{computationId}`). The computation runs asynchronously.
 * Poll the status endpoint until `status` is `SUCCEEDED` or `FAILED`.
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
 * @deprecated
 *
 * Retrieves the current execution status of a data quality computation. Poll this endpoint after triggering a
 * computation to determine when results are available. The `status` field returns one of `REQUESTED`,
 * `SUBMITTED`, `PROFILE_REQUESTED`, `SUCCEEDED`, `FAILED`, or `PROFILE_FAILED`.
 * @example
 * getDataQualitiesComputation(
 *   "4db06daa-3117-412e-8fb4-b29c937f9a0e"
 * )
 *
 * @param computationId The unique identifier of the computation, as returned by `POST /data-governance/data-qualities/computations`.
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
 * @deprecated
 *
 * Retrieves the global quality results for a dataset, showing counts of valid, invalid, empty, and total
 * sample cells.
 *
 * @param query an object with query parameters
 * @throws GetDataQualitiesGlobalResultsHttpError
 */
declare function getDataQualitiesGlobalResults(query: {
  /** The unique identifier of the connection. */connectionId?: ConnectionIdType; /** The unique identifier of the dataset. */
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
   * @deprecated
   *
   * Triggers a full data quality computation for a dataset, running profile calculation followed by data quality
   * assessment. Returns a `computationId` that can be used to track progress via the computation status endpoint
   * (`GET /data-qualities/computations/{computationId}`). The computation runs asynchronously.
   * Poll the status endpoint until `status` is `SUCCEEDED` or `FAILED`.
   *
   * @param body an object with the body content
   * @throws TriggerDataQualitiesComputationHttpError
   */
  triggerDataQualitiesComputation: typeof triggerDataQualitiesComputation;
  /**
   * @deprecated
   *
   * Retrieves the current execution status of a data quality computation. Poll this endpoint after triggering a
   * computation to determine when results are available. The `status` field returns one of `REQUESTED`,
   * `SUBMITTED`, `PROFILE_REQUESTED`, `SUCCEEDED`, `FAILED`, or `PROFILE_FAILED`.
   * @example
   * getDataQualitiesComputation(
   *   "4db06daa-3117-412e-8fb4-b29c937f9a0e"
   * )
   *
   * @param computationId The unique identifier of the computation, as returned by `POST /data-governance/data-qualities/computations`.
   * @throws GetDataQualitiesComputationHttpError
   */
  getDataQualitiesComputation: typeof getDataQualitiesComputation;
  /**
   * @deprecated
   *
   * Retrieves the global quality results for a dataset, showing counts of valid, invalid, empty, and total
   * sample cells.
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
export { ComputationResponse, ComputationStatusResponse, ConnectionIdType, DataQualitiesAPI, DataQualityComputationRequest, DatasetIdType, DatasetQualityGlobalResultsResponse, Error, ErrorResponse, ExecutionStatus, GetDataQualitiesComputationHttpError, GetDataQualitiesComputationHttpResponse, GetDataQualitiesGlobalResultsHttpError, GetDataQualitiesGlobalResultsHttpResponse, QualitiesGlobalResultsResponse, QualityGlobalResultsResponse, SamplingConfiguration, TriggerDataQualitiesComputationHttpError, TriggerDataQualitiesComputationHttpResponse, clearCache, dataQualitiesExport as default, getDataQualitiesComputation, getDataQualitiesGlobalResults, triggerDataQualitiesComputation };