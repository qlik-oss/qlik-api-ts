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

/**
 * Aggregated metrics for the field.
 */
export type AggregatedQualityMetrics = {
  /** Number of empty entries. */
  empty: number;
  /** Number of invalid entries. */
  invalid: number;
  /** Total number of entries. */
  total: number;
  /** Number of valid entries. */
  valid: number;
};

export type AssignTypeListRequest = {
  /** The ID of the dataset */
  datasetId: DatasetIdType;
  /** List of fields to update with their assigned types. */
  fields: AssignTypeRequest[];
};

export type AssignTypeRequest = {
  /** The name of the field. */
  name: string;
  /** Information about the type of the field. */
  type: FieldInformation;
};

/**
 * Overall status aggregated across all datasets in the batch.
 * @example
 * "IN_PROGRESS"
 */
export type BatchComputationAggregatedStatus = "IN_PROGRESS" | "FINISHED";

/**
 * Status of a single dataset within a batch computation.
 */
export type BatchComputationDatasetStatusResponse = {
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
export type BatchComputationStatusResponse = {
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
export type ComputationErrorCode =
  | "DQ-100"
  | "DQ-110"
  | "DQ-120"
  | "DQ-121"
  | "DQ-130"
  | "DQ-140"
  | "DQ-150"
  | "DQ-200"
  | "DQ-300"
  | "DQ-310"
  | "DQ-320"
  | "DQ-400"
  | "DQ-500"
  | "DQ-160"
  | "DQ-330"
  | "DQ-170"
  | "DQ-171";

/**
 * Response returned when a data quality computation is successfully triggered.
 */
export type ComputationResponse = {
  /** The unique identifier of the triggered computation. Use this value to poll for status. */
  computationId: string;
};

export type ComputationStatusResponse = {
  /** Status of a data quality computation. */
  status: ExecutionStatus;
};

/**
 * Metadata about the computation.
 */
export type ComputedInformation = {
  /** When the computation occurred. */
  at: string;
  /** Details about the user who computed the quality. */
  by: ComputedUserInformation;
};

/**
 * Details about the user who computed the quality.
 */
export type ComputedUserInformation = {
  /** Identifier of the user. */
  id: string;
};

/**
 * The ID of the connection
 * @example
 * "2b855c3d-426c-4aac-90cf-0edf9fc294d3"
 */
export type ConnectionIdType = string;

/**
 * Response containing data quality global results grouped by dataset.
 */
export type DataQualityByDatasetIdResponse = {
  /** List of data quality results, one per dataset and connection pair. */
  dataQualities: QualitiesAndErrorsResponse[];
};

/**
 * Request payload for triggering a data quality computation. The `connectionId` is optional for file-based datasets.
 * If none of the sampling parameters are provided, the following defaults apply:
 * - `executionMode: PULLUP`
 * - `sampleMode: ABSOLUTE`
 * - `sampleSize: 1000`
 * - `sampleMethod: HEAD` when `executionMode` is `PULLUP`, or `RANDOM` when `executionMode` is `PUSHDOWN`
 * @example
 * {
 *   connectionId: "2b855c3d-426c-4aac-90cf-0edf9fc294d3",
 *   datasetId: "669144f5aa2d642638ef1dd0"
 * }
 */
export type DataQualityComputationRequest = {
  /** The ID of the connection */
  connectionId?: ConnectionIdType;
  /** The ID of the dataset */
  datasetId?: DatasetIdType;
} & SamplingConfiguration;

/**
 * A single dataset identifier in a field quality filter request.
 */
export type DatasetFieldQualityRequestItem = {
  /** The ID of the dataset */
  datasetId: DatasetIdType;
};

/**
 * Field quality results for a single dataset.
 */
export type DatasetFieldQualityResult = {
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
export type DatasetIdType = string;

/**
 * Request containing a list of dataset IDs to filter on.
 */
export type DatasetListRequest = {
  /** List of dataset IDs to retrieve results for. */
  datasetIds: DatasetIdType[];
};

export type DatasetQualityGlobalResultsResponse = {
  /** The unique identifier of the dataset. */
  datasetId: string;
  qualities: QualitiesGlobalResultsResponse[];
};

/**
 * An individual error detail.
 */
export type Error = {
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
export type ErrorResponse = {
  /** List of errors that occurred. */
  errors: Error[];
  /** Trace identifier for debugging purposes. */
  traceId?: string;
};

/**
 * Details of an execution failure.
 */
export type ExecutionError = {
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
export type ExecutionStatus =
  | "PROFILE_REQUESTED"
  | "PROFILE_FAILED"
  | "REQUESTED"
  | "SUBMITTED"
  | "SUCCEEDED"
  | "FAILED";

/**
 * Information about the type of the field.
 */
export type FieldInformation = {
  /** The kind of the field type. */
  kind: FieldTypeEnum;
  /** The name of the standard type (if applicable). */
  name?: string;
  /** The precision of the type (e.g., for date/time fields). */
  precision?: PrecisionEnum;
  /** The ID of the semantic type (if applicable). */
  semanticTypeId?: string;
};

export type FieldQualitiesFilterRequest = {
  /** List of datasets to retrieve field qualities for. */
  datasets: DatasetFieldQualityRequestItem[];
};

/**
 * Response containing field quality results for the requested datasets.
 */
export type FieldQualitiesFilterResponse = {
  /** List of field quality results per dataset. */
  fieldQualities: DatasetFieldQualityResult[];
};

/**
 * Quality metrics for a single field.
 */
export type FieldQuality = {
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
export type FieldTypeEnum = "STANDARD" | "SEMANTIC";

/**
 * The precision of the type (e.g., for date/time fields).
 * @example
 * "timestamp-millis"
 */
export type PrecisionEnum = "timestamp-millis" | "timestamp-micros" | "time-millis" | "time-micros" | "date";

/**
 * Data quality global results or error for a specific dataset and connection.
 */
export type QualitiesAndErrorsResponse = {
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

export type QualitiesGlobalResultsResponse = {
  /** The unique identifier of the connection. */
  connectionId: string;
  quality?: QualityGlobalResultsResponse;
};

/**
 * Quality metrics for the field.
 */
export type Quality = {
  /** Aggregated metrics for the field. */
  aggregated: AggregatedQualityMetrics;
  /** Quality results per rule applied to this field. */
  rules: SchemaRulesQuality[];
  /** Quality metrics based on type validation. */
  type: SchemaTypeQuality;
};

export type QualityGlobalResultsResponse = {
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

/**
 * Summed quality counts across one or more field/rule-mapping entries.
 */
export type RuleQualityAggregateMetrics = {
  /** Sum of the numbers of cells that failed the rule across the included field/rule-mapping entries. */
  invalid: number;
  /** Sum of the numbers of cells where the rule does not apply across the included field/rule-mapping entries. */
  notApplicable: number;
  /** Sum of the numbers of cells where the rule could not be executed across the included field/rule-mapping entries. */
  notExecutable: number;
  /** Sum of the total cell counts across the included field/rule-mapping entries. */
  total: number;
  /** Sum of the numbers of cells that passed the rule across the included field/rule-mapping entries. */
  valid: number;
};

/**
 * Request to retrieve rule-quality outcomes for a rule across an optional dataset selection.
 */
export type RuleQualityAggregationRequest = {
  /** Optional selection of datasets. When non-empty, only these datasets are considered (filtered to those
   * accessible to the caller); the maximum number of dataset IDs is 100. When absent or empty, the service
   * determines all accessible datasets where the rule is instantiated. */
  datasetIds?: DatasetIdType[];
  /** The unique identifier of the rule to analyze, represented as a 24-character hexadecimal MongoDB ObjectId. */
  ruleId: string;
};

/**
 * Rule-quality outcomes for a rule, grouped per dataset, plus the aggregate across all included datasets.
 * `ruleQualityAggregate` sums the quality counts of all field/rule-mapping entries for the requested rule
 * across all included datasets, using the latest computation per dataset. It is independent of sorting
 * and pagination and is not limited to the datasets in the current `ruleQualities` page.
 */
export type RuleQualityAggregationResponse = {
  /** The unique identifier of the analyzed rule. */
  ruleId: string;
  /** Rule-quality outcomes, one entry per dataset in the current page. */
  ruleQualities: RuleQualityDatasetEntry[];
  /** Summed quality counts across one or more field/rule-mapping entries. */
  ruleQualityAggregate: RuleQualityAggregateMetrics;
};

/**
 * Rule-quality outcomes for a single dataset. `datasetAggregate` sums the quality counts of all
 * field/rule-mapping entries for the requested rule within this dataset's latest computation.
 */
export type RuleQualityDatasetEntry = {
  /** Summed quality counts across one or more field/rule-mapping entries. */
  datasetAggregate: RuleQualityAggregateMetrics;
  /** The ID of the dataset */
  datasetId: DatasetIdType;
  /** Rule-quality outcome for each field of this dataset where the rule is mapped. */
  fields: RuleQualityFieldEntry[];
};

/**
 * Rule-quality outcome for a single field/rule-mapping pair.
 */
export type RuleQualityFieldEntry = {
  /** The name of the field the rule is mapped to. */
  fieldName: string;
  /** Detailed quality counts for a rule applied to a single field, plus computation metadata. */
  quality: RuleQualityFieldMetrics;
  /** The unique identifier of the rule mapping. */
  ruleMappingId: string;
};

/**
 * Detailed quality counts for a rule applied to a single field, plus computation metadata.
 */
export type RuleQualityFieldMetrics = {
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
  /** Timestamp of the computation this outcome comes from. */
  updatedAt: string;
  /** Number of cells that passed the rule. */
  valid: number;
};

export type SamplingConfiguration = {
  /** Specifies where the data quality computation takes place. In `PUSHDOWN` mode, it runs within the Cloud Data Warehouse (e.g., Snowflake, Databricks), whereas in `PULLUP` mode, it runs in Qlik Cloud. */
  executionMode?: "PUSHDOWN" | "PULLUP";
  /** Specifies how rows are selected from the dataset. `HEAD` reads the first rows, while `RANDOM` reads a random selection of rows.
   * If omitted, defaults to `HEAD` when `executionMode` is `PULLUP`, or `RANDOM` when `executionMode` is `PUSHDOWN`.
   * Selecting `RANDOM` while `executionMode` is `PULLUP` is currently only supported for QVD datasets. */
  sampleMethod?: "HEAD" | "RANDOM";
  /** Specifies how the dataset is sampled. `ABSOLUTE` represents a fixed number of rows, while `RELATIVE` refers to a percentage of the total dataset rows. */
  sampleMode?: "ABSOLUTE" | "RELATIVE";
  /** The actual value of the selected sampling method size (either a fixed number for `ABSOLUTE` mode or a percentage for `RELATIVE` mode). Maximum allowed value for `ABSOLUTE` mode is `100000`. */
  sampleSize?: number;
};

/**
 * Detailed quality counts for a single rule.
 */
export type SchemaRuleQuality = {
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
export type SchemaRulesQuality = {
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
export type SchemaTypeQuality = {
  /** Number of empty sample cells. */
  empty: number;
  /** Number of invalid sample cells. */
  invalid: number;
  /** Total number of cells in the sample. */
  total: number;
  /** Number of valid sample cells. */
  valid: number;
};

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Retrieves the status of a batch computation, including per-dataset statuses.
 *
 * @param batchComputationId Batch computation ID for tracking progress of the overall data quality computations.
 * @throws GetDataQualitiesBatchComputationHttpError
 */
export async function getDataQualitiesBatchComputation(
  batchComputationId: string,
  options?: ApiCallOptions,
): Promise<GetDataQualitiesBatchComputationHttpResponse> {
  return invokeFetch("data-governance/data-qualities", {
    method: "get",
    pathTemplate: "/api/data-governance/data-qualities/batch-computations/{batchComputationId}",
    pathVariables: { batchComputationId },
    options,
  });
}

export type GetDataQualitiesBatchComputationHttpResponse = {
  data: BatchComputationStatusResponse;
  headers: Headers;
  status: 200;
};

export type GetDataQualitiesBatchComputationHttpError = {
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
export async function createDataQualityComputation(
  body: DataQualityComputationRequest,
  options?: ApiCallOptions,
): Promise<CreateDataQualityComputationHttpResponse> {
  return invokeFetch("data-governance/data-qualities", {
    method: "post",
    pathTemplate: "/api/data-governance/data-qualities/computations",
    body,
    contentType: "application/json",
    options,
  });
}

export type CreateDataQualityComputationHttpResponse = {
  data: ComputationResponse;
  headers: Headers;
  status: 202;
};

export type CreateDataQualityComputationHttpError = {
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
export async function getDataQualityComputation(
  computationId: string,
  options?: ApiCallOptions,
): Promise<GetDataQualityComputationHttpResponse> {
  return invokeFetch("data-governance/data-qualities", {
    method: "get",
    pathTemplate: "/api/data-governance/data-qualities/computations/{computationId}",
    pathVariables: { computationId },
    options,
  });
}

export type GetDataQualityComputationHttpResponse = {
  data: ComputationStatusResponse;
  headers: Headers;
  status: 200;
};

export type GetDataQualityComputationHttpError = {
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
export async function filterDataQualitiesFieldQualities(
  body: FieldQualitiesFilterRequest,
  options?: ApiCallOptions,
): Promise<FilterDataQualitiesFieldQualitiesHttpResponse> {
  return invokeFetch("data-governance/data-qualities", {
    method: "post",
    pathTemplate: "/api/data-governance/data-qualities/field-qualities/actions/filter",
    body,
    contentType: "application/json",
    options,
  });
}

export type FilterDataQualitiesFieldQualitiesHttpResponse = {
  data: FieldQualitiesFilterResponse;
  headers: Headers;
  status: 200;
};

export type FilterDataQualitiesFieldQualitiesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};

/**
 * Assigns a standard or semantic type to one or more fields in a dataset. This is a partial update:
 * only the fields included in the request are modified; any field not included in the request keeps
 * its current assigned structure unchanged.
 *
 * @param body an object with the body content
 * @throws PutDataQualitiesFieldsStructuresHttpError
 */
export async function putDataQualitiesFieldsStructures(
  body: AssignTypeListRequest,
  options?: ApiCallOptions,
): Promise<PutDataQualitiesFieldsStructuresHttpResponse> {
  return invokeFetch("data-governance/data-qualities", {
    method: "put",
    pathTemplate: "/api/data-governance/data-qualities/fields-structures",
    body,
    contentType: "application/json",
    options,
  });
}

export type PutDataQualitiesFieldsStructuresHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type PutDataQualitiesFieldsStructuresHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Retrieves the global quality results for a dataset, showing counts of valid, invalid, empty, and total
 * sample cells.
 *
 * @param query an object with query parameters
 * @throws GetDataQualityGlobalResultsHttpError
 */
export async function getDataQualityGlobalResults(
  query: {
    /** The unique identifier of the connection. */
    connectionId?: ConnectionIdType;
    /** The unique identifier of the dataset. */
    datasetId: DatasetIdType;
  },
  options?: ApiCallOptions,
): Promise<GetDataQualityGlobalResultsHttpResponse> {
  return invokeFetch("data-governance/data-qualities", {
    method: "get",
    pathTemplate: "/api/data-governance/data-qualities/global-results",
    query,
    options,
  });
}

export type GetDataQualityGlobalResultsHttpResponse = {
  data: DatasetQualityGlobalResultsResponse;
  headers: Headers;
  status: 200;
};

export type GetDataQualityGlobalResultsHttpError = {
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
export async function filterDataQualitiesGlobalResults(
  body: DatasetListRequest,
  options?: ApiCallOptions,
): Promise<FilterDataQualitiesGlobalResultsHttpResponse> {
  return invokeFetch("data-governance/data-qualities", {
    method: "post",
    pathTemplate: "/api/data-governance/data-qualities/global-results/actions/filter",
    body,
    contentType: "application/json",
    options,
  });
}

export type FilterDataQualitiesGlobalResultsHttpResponse = {
  data: DataQualityByDatasetIdResponse;
  headers: Headers;
  status: 200;
};

export type FilterDataQualitiesGlobalResultsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};

/**
 * Retrieves the dataset-level rule-quality outcomes for a rule, plus the aggregate outcome across the included
 * datasets. When `datasetIds` is provided (max 100), the result and aggregate are limited to those datasets
 * that are accessible to the caller. When `datasetIds` is absent or empty, the service determines all
 * accessible datasets where the rule is instantiated and returns the result and aggregate for that scope.
 *
 * For each dataset in the resolved scope, the service selects the most recent data quality computation
 * across all connections. Only datasets whose latest computation contains a result for the requested rule
 * are included in `ruleQualities` and contribute to `ruleQualityAggregate`. Datasets without a computed
 * quality result, or whose latest computation has no result for the requested rule, are excluded; the
 * service does not fall back to an older computation. This behavior also applies when `datasetIds` is
 * absent or empty.
 *
 * The `ruleQualities` list is sorted by `datasetId` and paginated using the `page` and `limit` query
 * parameters. Set `sortDescending` to `true` to sort in descending order (default is ascending).
 * `ruleQualityAggregate` always covers the full resolved scope, independently of sorting and pagination.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws FilterDataQualitiesGlobalResultsDataQualityRules_FIX_THIS_QUIRKY_NAMEHttpError
 */
export async function filterDataQualitiesGlobalResultsDataQualityRules_FIX_THIS_QUIRKY_NAME(
  query: {
    /** Maximum number of datasets to return in the `ruleQualities` page. */
    limit?: number;
    /** Page number to retrieve (1-indexed). Defaults to 1. */
    page?: number;
    /** When true, sorts the `ruleQualities` list by `datasetId` in descending order. Defaults to false (ascending). */
    sortDescending?: boolean;
  },
  body: RuleQualityAggregationRequest,
  options?: ApiCallOptions,
): Promise<FilterDataQualitiesGlobalResultsDataQualityRules_FIX_THIS_QUIRKY_NAMEHttpResponse> {
  return invokeFetch("data-governance/data-qualities", {
    method: "post",
    pathTemplate: "/api/data-governance/data-qualities/global-results/data-quality-rules/actions/filter",
    query,
    body,
    contentType: "application/json",
    options,
  });
}

export type FilterDataQualitiesGlobalResultsDataQualityRules_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: RuleQualityAggregationResponse;
  headers: Headers;
  status: 200;
};

export type FilterDataQualitiesGlobalResultsDataQualityRules_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Clears the cache for data-governance/data-qualities api requests.
 */
export function clearCache() {
  return clearApiCache("data-governance/data-qualities");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type DataQualitiesAPI = {
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
   * Assigns a standard or semantic type to one or more fields in a dataset. This is a partial update:
   * only the fields included in the request are modified; any field not included in the request keeps
   * its current assigned structure unchanged.
   *
   * @param body an object with the body content
   * @throws PutDataQualitiesFieldsStructuresHttpError
   */
  putDataQualitiesFieldsStructures: typeof putDataQualitiesFieldsStructures;
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
   * Retrieves the dataset-level rule-quality outcomes for a rule, plus the aggregate outcome across the included
   * datasets. When `datasetIds` is provided (max 100), the result and aggregate are limited to those datasets
   * that are accessible to the caller. When `datasetIds` is absent or empty, the service determines all
   * accessible datasets where the rule is instantiated and returns the result and aggregate for that scope.
   *
   * For each dataset in the resolved scope, the service selects the most recent data quality computation
   * across all connections. Only datasets whose latest computation contains a result for the requested rule
   * are included in `ruleQualities` and contribute to `ruleQualityAggregate`. Datasets without a computed
   * quality result, or whose latest computation has no result for the requested rule, are excluded; the
   * service does not fall back to an older computation. This behavior also applies when `datasetIds` is
   * absent or empty.
   *
   * The `ruleQualities` list is sorted by `datasetId` and paginated using the `page` and `limit` query
   * parameters. Set `sortDescending` to `true` to sort in descending order (default is ascending).
   * `ruleQualityAggregate` always covers the full resolved scope, independently of sorting and pagination.
   *
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws FilterDataQualitiesGlobalResultsDataQualityRules_FIX_THIS_QUIRKY_NAMEHttpError
   */
  filterDataQualitiesGlobalResultsDataQualityRules_FIX_THIS_QUIRKY_NAME: typeof filterDataQualitiesGlobalResultsDataQualityRules_FIX_THIS_QUIRKY_NAME;
  /**
   * Clears the cache for data-qualities api requests.
   */
  clearCache: typeof clearCache;
};

/**
 * Functions for the data-qualities api
 */
const dataQualitiesExport: DataQualitiesAPI = {
  getDataQualitiesBatchComputation,
  createDataQualityComputation,
  getDataQualityComputation,
  filterDataQualitiesFieldQualities,
  putDataQualitiesFieldsStructures,
  getDataQualityGlobalResults,
  filterDataQualitiesGlobalResults,
  filterDataQualitiesGlobalResultsDataQualityRules_FIX_THIS_QUIRKY_NAME,
  clearCache,
};
export default dataQualitiesExport;
