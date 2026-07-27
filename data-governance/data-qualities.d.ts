import { x as ApiCallOptions } from "../chunks/auth-types-o-bqAUAV.js";
import "../chunks/invoke-fetch-DcXyLc5n.js";
declare namespace data_qualities_d_exports {
  export { AggregatedQualityMetrics, BatchComputationAggregatedStatus, BatchComputationDatasetStatusResponse, BatchComputationStatusResponse, ComputationErrorCode, ComputationResponse, ComputationStatusResponse, ComputedInformation, ComputedUserInformation, ConnectionIdType, CreateDataQualityComputationHttpError, CreateDataQualityComputationHttpResponse, DataQualitiesAPI, DataQualityByDatasetIdResponse, DataQualityComputationRequest, DatasetFieldQualityRequestItem, DatasetFieldQualityResult, DatasetIdType, DatasetListRequest, DatasetQualityGlobalResultsResponse, Error, ErrorResponse, ExecutionError, ExecutionStatus, FieldInformation, FieldQualitiesFilterRequest, FieldQualitiesFilterResponse, FieldQuality, FieldTypeEnum, FilterDataQualitiesFieldQualitiesHttpError, FilterDataQualitiesFieldQualitiesHttpResponse, FilterDataQualitiesGlobalResultsHttpError, FilterDataQualitiesGlobalResultsHttpResponse, GetDataQualitiesBatchComputationHttpError, GetDataQualitiesBatchComputationHttpResponse, GetDataQualityComputationHttpError, GetDataQualityComputationHttpResponse, GetDataQualityGlobalResultsHttpError, GetDataQualityGlobalResultsHttpResponse, PrecisionEnum, QualitiesAndErrorsResponse, QualitiesGlobalResultsResponse, Quality, QualityGlobalResultsResponse, SamplingConfiguration, SchemaRuleQuality, SchemaRulesQuality, SchemaTypeQuality, clearCache, createDataQualityComputation, dataQualitiesExport as default, filterDataQualitiesFieldQualities, filterDataQualitiesGlobalResults, getDataQualitiesBatchComputation, getDataQualityComputation, getDataQualityGlobalResults };
}
/**
 * Aggregated metrics for the field.
 */
type AggregatedQualityMetrics = {
  /** Number of empty entries. */
  empty: number;
  /** Number of invalid entries. */
  invalid: number;
  /** Total number of entries. */
  total: number;
  /** Number of valid entries. */
  valid: number;
};
/**
 * Overall status aggregated across all datasets in the batch.
 * @example
 * "IN_PROGRESS"
 */
type BatchComputationAggregatedStatus = "IN_PROGRESS" | "FINISHED";
/**
 * Status of a single dataset within a batch computation.
 */
type BatchComputationDatasetStatusResponse = {
  /** The unique identifier of the individual computation for this dataset. */
  computationId: string;
  /** The ID of the dataset */
  datasetId: DatasetIdType;
  /** Error code indicating the reason for failure. */
  errorCode?: ComputationErrorCode;
  /** Status of a data quality computation. */
  status: ExecutionStatus;
};
/**
 * Status of a batch computation, including per-dataset breakdown.
 */
type BatchComputationStatusResponse = {
  /** The unique identifier of the batch computation. */
  batchComputationId: string;
  /** Status of each individual dataset computation within the batch. */
  computationStatuses: BatchComputationDatasetStatusResponse[];
  /** Overall status aggregated across all datasets in the batch. */
  status: BatchComputationAggregatedStatus;
};
/**
 * Error code indicating the reason for failure.
 */
type ComputationErrorCode = "DQ-100" | "DQ-110" | "DQ-120" | "DQ-121" | "DQ-130" | "DQ-140" | "DQ-150" | "DQ-200" | "DQ-300" | "DQ-310" | "DQ-320" | "DQ-400" | "DQ-500" | "DQ-160";
/**
 * Response returned when a data quality computation is successfully triggered.
 */
type ComputationResponse = {
  /** The unique identifier of the triggered computation. Use this value to poll for status. */
  computationId: string;
};
type ComputationStatusResponse = {
  /** Status of a data quality computation. */
  status: ExecutionStatus;
};
/**
 * Metadata about the computation.
 */
type ComputedInformation = {
  /** When the computation occurred. */
  at: string;
  /** Details about the user who computed the quality. */
  by: ComputedUserInformation;
};
/**
 * Details about the user who computed the quality.
 */
type ComputedUserInformation = {
  /** Identifier of the user. */
  id: string;
};
/**
 * The ID of the connection
 * @example
 * "2b855c3d-426c-4aac-90cf-0edf9fc294d3"
 */
type ConnectionIdType = string;
/**
 * Response containing data quality global results grouped by dataset.
 */
type DataQualityByDatasetIdResponse = {
  /** List of data quality results, one per dataset and connection pair. */
  dataQualities: QualitiesAndErrorsResponse[];
};
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
  /** The ID of the connection */
  connectionId?: ConnectionIdType;
  /** The ID of the dataset */
  datasetId?: DatasetIdType;
} & SamplingConfiguration;
/**
 * A single dataset identifier in a field quality filter request.
 */
type DatasetFieldQualityRequestItem = {
  /** The ID of the dataset */
  datasetId: DatasetIdType;
};
/**
 * Field quality results for a single dataset.
 */
type DatasetFieldQualityResult = {
  /** Metadata about the computation. */
  computed: ComputedInformation;
  /** The ID of the dataset */
  datasetId: DatasetIdType;
  /** List of fields and their quality metrics. */
  fields: FieldQuality[];
};
/**
 * The ID of the dataset
 * @example
 * "669144f5aa2d642638ef1dd0"
 */
type DatasetIdType = string;
/**
 * Request containing a list of dataset IDs to filter on.
 */
type DatasetListRequest = {
  /** List of dataset IDs to retrieve results for. */
  datasetIds: DatasetIdType[];
};
type DatasetQualityGlobalResultsResponse = {
  /** The unique identifier of the dataset. */
  datasetId: string;
  qualities: QualitiesGlobalResultsResponse[];
};
/**
 * An individual error detail.
 */
type Error = {
  /** The error code identifying the type of error. */
  code: string;
  /** A human-readable explanation of the error. */
  detail?: string;
  /** A short summary of the error. */
  title: string;
};
/**
 * Standard error response wrapper.
 */
type ErrorResponse = {
  /** List of errors that occurred. */
  errors: Error[];
  /** Trace identifier for debugging purposes. */
  traceId?: string;
};
/**
 * Details of an execution failure.
 */
type ExecutionError = {
  /** The error code identifying the failure reason. */
  errorCode: string;
  /** Timestamp when the execution failed. */
  executedAt?: string;
  /** A human-readable explanation of the failure. */
  reason?: string;
};
/**
 * Status of a data quality computation.
 * @example
 * "SUCCEEDED"
 */
type ExecutionStatus = "PROFILE_REQUESTED" | "PROFILE_FAILED" | "REQUESTED" | "SUBMITTED" | "SUCCEEDED" | "FAILED";
/**
 * Information about the type of the field.
 */
type FieldInformation = {
  /** The kind of the field type. */
  kind: FieldTypeEnum;
  /** The name of the standard type (if applicable). */
  name?: string;
  /** The precision of the type (e.g., for date/time fields). */
  precision?: PrecisionEnum;
  /** The ID of the semantic type (if applicable). */
  semanticTypeId?: string;
};
type FieldQualitiesFilterRequest = {
  /** List of datasets to retrieve field qualities for. */
  datasets: DatasetFieldQualityRequestItem[];
};
/**
 * Response containing field quality results for the requested datasets.
 */
type FieldQualitiesFilterResponse = {
  /** List of field quality results per dataset. */
  fieldQualities: DatasetFieldQualityResult[];
};
/**
 * Quality metrics for a single field.
 */
type FieldQuality = {
  /** The name of the field. */
  name: string;
  /** Quality metrics for the field. */
  quality: Quality;
  /** Information about the type of the field. */
  type: FieldInformation;
};
/**
 * The kind of the field type.
 * @example
 * "STANDARD"
 */
type FieldTypeEnum = "STANDARD" | "SEMANTIC";
/**
 * The precision of the type (e.g., for date/time fields).
 * @example
 * "timestamp-millis"
 */
type PrecisionEnum = "timestamp-millis" | "timestamp-micros" | "time-millis" | "time-micros" | "date";
/**
 * Data quality global results or error for a specific dataset and connection.
 */
type QualitiesAndErrorsResponse = {
  /** The ID of the connection */
  connectionId: string;
  /** The ID of the dataset */
  datasetId: string;
  /** Details of an execution failure. */
  error?: ExecutionError;
  quality?: QualityGlobalResultsResponse;
  /** Status of a data quality computation. */
  status: ExecutionStatus;
};
type QualitiesGlobalResultsResponse = {
  /** The unique identifier of the connection. */
  connectionId: string;
  quality: QualityGlobalResultsResponse;
};
/**
 * Quality metrics for the field.
 */
type Quality = {
  /** Aggregated metrics for the field. */
  aggregated: AggregatedQualityMetrics;
  /** Quality results per rule applied to this field. */
  rules: SchemaRulesQuality[];
  /** Quality metrics based on type validation. */
  type: SchemaTypeQuality;
};
type QualityGlobalResultsResponse = {
  /** Number of empty sample cells. */
  empty: number;
  /** Number of invalid sample cells. */
  invalid: number;
  /** Total number of cells in the sample. */
  total: number;
  /** Timestamp of the most recent data quality computation for this dataset and connection. */
  updatedAt: string;
  /** Number of valid sample cells. */
  valid: number;
};
type SamplingConfiguration = {
  /** Specifies where the data quality computation takes place. In `PUSHDOWN` mode, it runs within the Cloud Data Warehouse (e.g., Snowflake, Databricks), whereas in `PULLUP` mode, it runs in Qlik Cloud. */
  executionMode?: "PUSHDOWN" | "PULLUP";
  /** Specifies how the dataset is sampled. `ABSOLUTE` represents a fixed number of rows, while `RELATIVE` refers to a percentage of the total dataset rows. */
  sampleMode?: "ABSOLUTE" | "RELATIVE";
  /** The actual value of the selected sampling method size (either a fixed number for `ABSOLUTE` mode or a percentage for `RELATIVE` mode). Maximum allowed value for `ABSOLUTE` mode is `100000`. */
  sampleSize?: number;
};
/**
 * Detailed quality counts for a single rule.
 */
type SchemaRuleQuality = {
  /** List of error identifiers encountered during rule execution. */
  errors?: string[];
  /** Number of cells that failed the rule. */
  invalid: number;
  /** Number of cells where the rule does not apply. */
  notApplicable: number;
  /** Number of cells where the rule could not be executed. */
  notExecutable: number;
  /** Total number of cells evaluated by the rule. */
  total: number;
  /** Number of cells that passed the rule. */
  valid: number;
};
/**
 * Quality assessment for a specific rule applied to a field.
 */
type SchemaRulesQuality = {
  /** Detailed quality counts for a single rule. */
  quality?: SchemaRuleQuality;
  /** The unique identifier of the rule. */
  ruleId?: string;
  /** The unique identifier of the rule mapping. */
  ruleMappingId?: string;
};
/**
 * Quality metrics based on type validation.
 */
type SchemaTypeQuality = {
  /** Number of empty sample cells. */
  empty: number;
  /** Number of invalid sample cells. */
  invalid: number;
  /** Total number of cells in the sample. */
  total: number;
  /** Number of valid sample cells. */
  valid: number;
};
/**
 * Retrieves the status of a batch computation, including per-dataset statuses.
 *
 * @param batchComputationId Batch computation ID for tracking progress of the overall data quality computations.
 * @throws GetDataQualitiesBatchComputationHttpError
 */
declare function getDataQualitiesBatchComputation(batchComputationId: string, options?: ApiCallOptions): Promise<GetDataQualitiesBatchComputationHttpResponse>;
type GetDataQualitiesBatchComputationHttpResponse = {
  data: BatchComputationStatusResponse;
  headers: Headers;
  status: 200;
};
type GetDataQualitiesBatchComputationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Triggers a full data quality computation for a dataset, running profile calculation followed by data quality
 * assessment. Returns a `computationId` that can be used to track progress via the computation status endpoint
 * (`GET /data-governance/data-qualities/computations/{computationId}`). The computation runs asynchronously.
 * Poll the status endpoint until `status` is `SUCCEEDED` or `FAILED`.
 *
 * @param body an object with the body content
 * @throws CreateDataQualityComputationHttpError
 */
declare function createDataQualityComputation(body: DataQualityComputationRequest, options?: ApiCallOptions): Promise<CreateDataQualityComputationHttpResponse>;
type CreateDataQualityComputationHttpResponse = {
  data: ComputationResponse;
  headers: Headers;
  status: 202;
};
type CreateDataQualityComputationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Retrieves the current execution status of a data quality computation. Poll this endpoint after triggering a
 * computation to determine when results are available. The `status` field returns one of `REQUESTED`,
 * `SUBMITTED`, `PROFILE_REQUESTED`, `SUCCEEDED`, `FAILED`, or `PROFILE_FAILED`.
 * @example
 * getDataQualityComputation(
 *   "4db06daa-3117-412e-8fb4-b29c937f9a0e"
 * )
 *
 * @param computationId The unique identifier of the computation, as returned by `POST /data-governance/data-qualities/computations`.
 * @throws GetDataQualityComputationHttpError
 */
declare function getDataQualityComputation(computationId: string, options?: ApiCallOptions): Promise<GetDataQualityComputationHttpResponse>;
type GetDataQualityComputationHttpResponse = {
  data: ComputationStatusResponse;
  headers: Headers;
  status: 200;
};
type GetDataQualityComputationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Retrieves the latest computed field quality metrics for a list of datasets. The maximum number of datasets is 100.
 * When a dataset has been analyzed through multiple connections, the response returns the result from the most recently computed connection.
 *
 * @param body an object with the body content
 * @throws FilterDataQualitiesFieldQualitiesHttpError
 */
declare function filterDataQualitiesFieldQualities(body: FieldQualitiesFilterRequest, options?: ApiCallOptions): Promise<FilterDataQualitiesFieldQualitiesHttpResponse>;
type FilterDataQualitiesFieldQualitiesHttpResponse = {
  data: FieldQualitiesFilterResponse;
  headers: Headers;
  status: 200;
};
type FilterDataQualitiesFieldQualitiesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Retrieves the global quality results for a dataset, showing counts of valid, invalid, empty, and total
 * sample cells.
 *
 * @param query an object with query parameters
 * @throws GetDataQualityGlobalResultsHttpError
 */
declare function getDataQualityGlobalResults(query: {
  /** The unique identifier of the connection. */
  connectionId?: ConnectionIdType;
  /** The unique identifier of the dataset. */
  datasetId: DatasetIdType;
}, options?: ApiCallOptions): Promise<GetDataQualityGlobalResultsHttpResponse>;
type GetDataQualityGlobalResultsHttpResponse = {
  data: DatasetQualityGlobalResultsResponse;
  headers: Headers;
  status: 200;
};
type GetDataQualityGlobalResultsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Retrieves the latest computed global quality metrics for a list of datasets. The maximum number of datasets is 100.
 * When a dataset has been analyzed through multiple connections, the response returns the result from the most recently computed connection.
 *
 * @param body an object with the body content
 * @throws FilterDataQualitiesGlobalResultsHttpError
 */
declare function filterDataQualitiesGlobalResults(body: DatasetListRequest, options?: ApiCallOptions): Promise<FilterDataQualitiesGlobalResultsHttpResponse>;
type FilterDataQualitiesGlobalResultsHttpResponse = {
  data: DataQualityByDatasetIdResponse;
  headers: Headers;
  status: 200;
};
type FilterDataQualitiesGlobalResultsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Clears the cache for data-governance/data-qualities api requests.
 */
declare function clearCache(): void;
type DataQualitiesAPI = {
  /**
   * Retrieves the status of a batch computation, including per-dataset statuses.
   *
   * @param batchComputationId Batch computation ID for tracking progress of the overall data quality computations.
   * @throws GetDataQualitiesBatchComputationHttpError
   */
  getDataQualitiesBatchComputation: typeof getDataQualitiesBatchComputation;
  /**
   * Triggers a full data quality computation for a dataset, running profile calculation followed by data quality
   * assessment. Returns a `computationId` that can be used to track progress via the computation status endpoint
   * (`GET /data-governance/data-qualities/computations/{computationId}`). The computation runs asynchronously.
   * Poll the status endpoint until `status` is `SUCCEEDED` or `FAILED`.
   *
   * @param body an object with the body content
   * @throws CreateDataQualityComputationHttpError
   */
  createDataQualityComputation: typeof createDataQualityComputation;
  /**
   * Retrieves the current execution status of a data quality computation. Poll this endpoint after triggering a
   * computation to determine when results are available. The `status` field returns one of `REQUESTED`,
   * `SUBMITTED`, `PROFILE_REQUESTED`, `SUCCEEDED`, `FAILED`, or `PROFILE_FAILED`.
   * @example
   * getDataQualityComputation(
   *   "4db06daa-3117-412e-8fb4-b29c937f9a0e"
   * )
   *
   * @param computationId The unique identifier of the computation, as returned by `POST /data-governance/data-qualities/computations`.
   * @throws GetDataQualityComputationHttpError
   */
  getDataQualityComputation: typeof getDataQualityComputation;
  /**
   * Retrieves the latest computed field quality metrics for a list of datasets. The maximum number of datasets is 100.
   * When a dataset has been analyzed through multiple connections, the response returns the result from the most recently computed connection.
   *
   * @param body an object with the body content
   * @throws FilterDataQualitiesFieldQualitiesHttpError
   */
  filterDataQualitiesFieldQualities: typeof filterDataQualitiesFieldQualities;
  /**
   * Retrieves the global quality results for a dataset, showing counts of valid, invalid, empty, and total
   * sample cells.
   *
   * @param query an object with query parameters
   * @throws GetDataQualityGlobalResultsHttpError
   */
  getDataQualityGlobalResults: typeof getDataQualityGlobalResults;
  /**
   * Retrieves the latest computed global quality metrics for a list of datasets. The maximum number of datasets is 100.
   * When a dataset has been analyzed through multiple connections, the response returns the result from the most recently computed connection.
   *
   * @param body an object with the body content
   * @throws FilterDataQualitiesGlobalResultsHttpError
   */
  filterDataQualitiesGlobalResults: typeof filterDataQualitiesGlobalResults;
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
export { AggregatedQualityMetrics, BatchComputationAggregatedStatus, BatchComputationDatasetStatusResponse, BatchComputationStatusResponse, ComputationErrorCode, ComputationResponse, ComputationStatusResponse, ComputedInformation, ComputedUserInformation, ConnectionIdType, CreateDataQualityComputationHttpError, CreateDataQualityComputationHttpResponse, DataQualitiesAPI, DataQualityByDatasetIdResponse, DataQualityComputationRequest, DatasetFieldQualityRequestItem, DatasetFieldQualityResult, DatasetIdType, DatasetListRequest, DatasetQualityGlobalResultsResponse, Error, ErrorResponse, ExecutionError, ExecutionStatus, FieldInformation, FieldQualitiesFilterRequest, FieldQualitiesFilterResponse, FieldQuality, FieldTypeEnum, FilterDataQualitiesFieldQualitiesHttpError, FilterDataQualitiesFieldQualitiesHttpResponse, FilterDataQualitiesGlobalResultsHttpError, FilterDataQualitiesGlobalResultsHttpResponse, GetDataQualitiesBatchComputationHttpError, GetDataQualitiesBatchComputationHttpResponse, GetDataQualityComputationHttpError, GetDataQualityComputationHttpResponse, GetDataQualityGlobalResultsHttpError, GetDataQualityGlobalResultsHttpResponse, PrecisionEnum, QualitiesAndErrorsResponse, QualitiesGlobalResultsResponse, Quality, QualityGlobalResultsResponse, SamplingConfiguration, SchemaRuleQuality, SchemaRulesQuality, SchemaTypeQuality, clearCache, createDataQualityComputation, dataQualitiesExport as default, filterDataQualitiesFieldQualities, filterDataQualitiesGlobalResults, getDataQualitiesBatchComputation, getDataQualityComputation, getDataQualityGlobalResults, data_qualities_d_exports as t };