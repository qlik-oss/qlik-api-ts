import { x as ApiCallOptions } from "./auth-types-YxQFXW5F.js";
import "./invoke-fetch-BGcRWadc.js";
declare namespace data_contracts_d_exports {
  export { CreateDataContractResultItem, CreateDataContractsDatasetEntry, CreateDataContractsDatasetsHttpError, CreateDataContractsDatasetsHttpResponse, CreateDataContractsRequest, CreateDataContractsResponse, DataContractsAPI, DeleteDataContractsDatasetHttpError, DeleteDataContractsDatasetHttpResponse, DimensionStatus, Error, ErrorResponse, EvaluationStatus, EvaluationTrigger, ExpectationLastEvaluation, ExpectationStatus, GetDataContractsDatasetExpectationsHttpError, GetDataContractsDatasetExpectationsHttpResponse, GetExpectationItem, GetExpectationItemBase, GetExpectationsResponse, GetTrustScoreExpectationDetails, GetTrustScoreExpectationItem, GetVolumeExpectationDetails, GetVolumeExpectationItem, GetVolumeLastEvaluation, ItemUpdateStatus, PatchDataContractsDatasetExpectationsHttpError, PatchDataContractsDatasetExpectationsHttpResponse, TrustScoreDimensionName, UpdateExpectationLastEvaluation, UpdateExpectationResultItem, UpdateExpectationResultsByCategory, UpdateExpectationsByCategory, UpdateExpectationsRequest, UpdateExpectationsResponse, UpdateTrustScoreExpectationItem, UpdateVolumeExpectationItem, UpdateVolumeLastEvaluation, UpdateVolumeResultItem, VolumeExpectationName, clearCache, createDataContractsDatasets, dataContractsExport as default, deleteDataContractsDataset, getDataContractsDatasetExpectations, patchDataContractsDatasetExpectations };
}
type CreateDataContractResultItem = {
  /** Diagnostic error code for the failure (only present when updateStatus is ERROR). Provided to help troubleshooting; the example values shown are not an exhaustive list of possible codes. */
  code?: string;
  datasetId: string;
  /** Per-expectation results (only present when updateStatus is SUCCESS). */
  expectations?: UpdateExpectationResultsByCategory;
  /** The reason for failure (only present when updateStatus is ERROR). */
  reason?: string;
  updateStatus: ItemUpdateStatus;
};
type CreateDataContractsDatasetEntry = {
  /** Identifier of the dataset the data contract must be created for. */
  datasetId: string;
  expectations: UpdateExpectationsByCategory;
};
type CreateDataContractsRequest = {
  datasets: CreateDataContractsDatasetEntry[];
};
type CreateDataContractsResponse = {
  datasets: CreateDataContractResultItem[];
};
/**
 * The availability status of the trust score dimension.
 * @example
 * "AVAILABLE"
 */
type DimensionStatus = "AVAILABLE" | "NOT_AVAILABLE";
type Error = {
  code?: string;
  detail?: string;
  /** Optional additional context for the error. Null when none is provided. */
  meta?: unknown | null;
  status?: string;
  title?: string;
};
type ErrorResponse = {
  errors?: Error[];
  /** Identifier of the request trace. Quote it when reporting a problem so the request can be located in the logs. */
  traceId?: string;
};
/**
 * The outcome of an evaluation. `PASS`: the measured value meets the expectation. `WARN`: the measured value is in the warning range — above the threshold but below the warning level. `FAIL`: the measured value does not meet the expectation. `ERROR`: the expectation could not be evaluated (for example the source value could not be resolved).
 * @example
 * "PASS"
 */
type EvaluationStatus = "PASS" | "WARN" | "FAIL" | "ERROR";
/**
 * What triggered the evaluation. `PROFILE_EVENT`: a new data profile was computed for the dataset. `TRUST_SCORE_EVENT`: a new data quality (Trust Score) result was computed for the dataset. `INITIALISATION`: the expectation was activated. `MANUAL`: an on-demand evaluation requested through the evaluate endpoint.
 * @example
 * "TRUST_SCORE_EVENT"
 */
type EvaluationTrigger = "PROFILE_EVENT" | "TRUST_SCORE_EVENT" | "INITIALISATION" | "MANUAL";
/**
 * The last evaluation result. Only present when the expectation status is ACTIVATED or DEACTIVATED.
 */
type ExpectationLastEvaluation = {
  /** The score value that was recorded at evaluation time (historical snapshot). Unlike the top-level `actualValue` on GetExpectationItem which is fetched live, this value reflects the score at the moment the evaluation was performed. Omitted when `status` is `ERROR` (an error evaluation carries no real measurement; never reported as `0`). */
  actualValue?: number;
  error?: string;
  /** Diagnostic error code, present only when status is ERROR. Provided to help troubleshooting; the example values shown are not an exhaustive list of possible codes. */
  errorCode?: string;
  evaluatedAt?: string;
  /** The threshold that was in effect when the evaluation was performed. */
  expectedThreshold?: number;
  /** The warning range that was in effect when the evaluation was performed. */
  expectedWarning?: number;
  /** The outcome of an evaluation. `PASS`: the measured value meets the expectation. `WARN`: the measured value is in the warning range — above the threshold but below the warning level. `FAIL`: the measured value does not meet the expectation. `ERROR`: the expectation could not be evaluated (for example the source value could not be resolved). */
  status?: EvaluationStatus;
  /** What triggered the evaluation. `PROFILE_EVENT`: a new data profile was computed for the dataset. `TRUST_SCORE_EVENT`: a new data quality (Trust Score) result was computed for the dataset. `INITIALISATION`: the expectation was activated. `MANUAL`: an on-demand evaluation requested through the evaluate endpoint. */
  trigger?: EvaluationTrigger;
};
/**
 * Activation status of an expectation. `ACTIVATED` means the expectation is enforced, `DEACTIVATED` means it was explicitly turned off, and `NOT_ACTIVATED` means it has never been activated.
 * @example
 * "ACTIVATED"
 */
type ExpectationStatus = "ACTIVATED" | "DEACTIVATED" | "NOT_ACTIVATED";
type GetExpectationItem = GetTrustScoreExpectationItem | GetVolumeExpectationItem;
type GetExpectationItemBase = {
  /** Whether the expectation can be activated right now. Present only for non-active items (NOT_ACTIVATED and DEACTIVATED); omitted for ACTIVATED items. For trust_score expectations it is true only when the dataset has a computed Trust Score and the dimension is available, and false otherwise (quality not computed, dimension disabled, or the Trust Score service is unreachable). Always true for data_profile expectations. */
  activatable?: boolean;
  /** The expectations category. */
  category: string;
  /** The name of the expectation. */
  name: string;
  /** Activation status of an expectation. `ACTIVATED` means the expectation is enforced, `DEACTIVATED` means it was explicitly turned off, and `NOT_ACTIVATED` means it has never been activated. */
  status: ExpectationStatus;
  /** When the expectation was last updated. Absent for NOT_ACTIVATED items. */
  updatedAt?: string;
};
type GetExpectationsResponse = {
  expectations: GetExpectationItem[];
};
type GetTrustScoreExpectationDetails = {
  /** The current score for this expectation. For ACTIVATED expectations this is the score recorded by the latest evaluation. For NOT_ACTIVATED and DEACTIVATED expectations it is fetched live from the Trust Score service when the response is built, because evaluations only run while an expectation is activated. Omitted when the external service is unreachable (fail-open behavior). */
  actualValue?: number;
  /** The availability status of the trust score dimension. */
  dimensionStatus?: DimensionStatus;
  /** The last evaluation result. Only present when the expectation status is ACTIVATED or DEACTIVATED. */
  lastEvaluation?: ExpectationLastEvaluation;
  threshold?: number;
  warning?: number;
};
type GetTrustScoreExpectationItem = GetExpectationItemBase & {
  /** The name of a trust score dimension. */
  name?: TrustScoreDimensionName;
  trustScore: GetTrustScoreExpectationDetails;
};
type GetVolumeExpectationDetails = {
  /** The current row count. For ACTIVATED expectations this is the count recorded by the latest evaluation. For NOT_ACTIVATED and DEACTIVATED expectations it is fetched live from Catalog when the response is built, because evaluations only run while an expectation is activated. Omitted when Catalog is unreachable (fail-open behavior). */
  actualRowCount?: number;
  /** The last volume evaluation result. Present only when the expectation status is ACTIVATED or DEACTIVATED. */
  lastEvaluation?: GetVolumeLastEvaluation;
  /** Upper bound (inclusive) on the row count. Omitted when the upper bound is disabled. */
  max?: number;
  /** Lower bound (inclusive) on the row count. Omitted when the lower bound is disabled. */
  min?: number;
};
type GetVolumeExpectationItem = GetExpectationItemBase & {
  dataProfile: GetVolumeExpectationDetails;
  /** The name of a volume expectation. */
  name?: VolumeExpectationName;
};
/**
 * The last volume evaluation result. Present only when the expectation status is ACTIVATED or DEACTIVATED.
 */
type GetVolumeLastEvaluation = {
  /** The row count recorded at evaluation time (historical snapshot). */
  actualRowCount?: number;
  /** Human-readable error detail, present only when status is ERROR. A volume evaluation is ERROR when the row count cannot be retrieved; a row count outside the configured bounds is reported as FAIL, not ERROR. */
  error?: string;
  /** Diagnostic error code, present only when status is ERROR. The example values shown are not an exhaustive list of possible codes. */
  errorCode?: string;
  evaluatedAt?: string;
  /** The upper bound in effect when the evaluation was performed. */
  expectedMax?: number;
  /** The lower bound in effect when the evaluation was performed. */
  expectedMin?: number;
  /** The outcome of an evaluation. `PASS`: the measured value meets the expectation. `WARN`: the measured value is in the warning range — above the threshold but below the warning level. `FAIL`: the measured value does not meet the expectation. `ERROR`: the expectation could not be evaluated (for example the source value could not be resolved). */
  status?: EvaluationStatus;
  /** What triggered the evaluation. `PROFILE_EVENT`: a new data profile was computed for the dataset. `TRUST_SCORE_EVENT`: a new data quality (Trust Score) result was computed for the dataset. `INITIALISATION`: the expectation was activated. `MANUAL`: an on-demand evaluation requested through the evaluate endpoint. */
  trigger?: EvaluationTrigger;
};
/**
 * @example
 * "SUCCESS"
 */
type ItemUpdateStatus = "SUCCESS" | "ERROR";
/**
 * The name of a trust score dimension.
 * @example
 * "validity"
 */
type TrustScoreDimensionName = "global" | "validity" | "completeness" | "accuracy" | "diversity" | "discoverability" | "usage" | "timeliness";
/**
 * The last evaluation result (only present when updateStatus is SUCCESS).
 */
type UpdateExpectationLastEvaluation = {
  /** The score recorded at evaluation time. Omitted when `status` is `ERROR` (an error evaluation carries no real measurement; never reported as `0`). */
  actualValue?: number;
  error?: string;
  /** Diagnostic error code, present only when status is ERROR. Provided to help troubleshooting; the example values shown are not an exhaustive list of possible codes. */
  errorCode?: string;
  evaluatedAt?: string;
  expectedThreshold?: number;
  expectedWarning?: number;
  /** The outcome of an evaluation. `PASS`: the measured value meets the expectation. `WARN`: the measured value is in the warning range — above the threshold but below the warning level. `FAIL`: the measured value does not meet the expectation. `ERROR`: the expectation could not be evaluated (for example the source value could not be resolved). */
  status?: EvaluationStatus;
  /** What triggered the evaluation. `PROFILE_EVENT`: a new data profile was computed for the dataset. `TRUST_SCORE_EVENT`: a new data quality (Trust Score) result was computed for the dataset. `INITIALISATION`: the expectation was activated. `MANUAL`: an on-demand evaluation requested through the evaluate endpoint. */
  trigger?: EvaluationTrigger;
};
type UpdateExpectationResultItem = {
  /** The expectation category (only present when updateStatus is SUCCESS). */
  category?: string;
  /** The error code for failure (only present when updateStatus is ERROR). */
  code?: string;
  /** The availability status of the trust score dimension. */
  dimensionStatus?: DimensionStatus;
  /** The last evaluation result (only present when updateStatus is SUCCESS). */
  lastEvaluation?: UpdateExpectationLastEvaluation;
  /** The name of the expectation. For trust score items, one of: global, validity, completeness, accuracy, diversity, discoverability, usage, timeliness. May also contain the raw input name for per-item error responses. */
  name: string;
  /** The reason for failure (only present when updateStatus is ERROR). */
  reason?: string;
  /** Activation status of an expectation. `ACTIVATED` means the expectation is enforced, `DEACTIVATED` means it was explicitly turned off, and `NOT_ACTIVATED` means it has never been activated. */
  status?: ExpectationStatus;
  /** The current threshold (only present when updateStatus is SUCCESS). */
  threshold?: number;
  updateStatus: ItemUpdateStatus;
  /** When the expectation was last updated (only present when updateStatus is SUCCESS). */
  updatedAt?: string;
  /** The current warning range (only present when updateStatus is SUCCESS). */
  warning?: number;
};
type UpdateExpectationResultsByCategory = {
  dataProfile?: UpdateVolumeResultItem[];
  trustScore?: UpdateExpectationResultItem[];
};
type UpdateExpectationsByCategory = {
  dataProfile?: UpdateVolumeExpectationItem[];
  trustScore?: UpdateTrustScoreExpectationItem[];
};
type UpdateExpectationsRequest = {
  expectations: UpdateExpectationsByCategory;
};
type UpdateExpectationsResponse = {
  expectations: UpdateExpectationResultsByCategory;
};
type UpdateTrustScoreExpectationItem = {
  /** The name of the trust score dimension. One of: global, validity, completeness, accuracy, diversity, discoverability, usage, timeliness. Unknown names produce a per-item error in the response. */
  name: string;
  /** Activation status of an expectation. `ACTIVATED` means the expectation is enforced, `DEACTIVATED` means it was explicitly turned off, and `NOT_ACTIVATED` means it has never been activated. */
  status?: ExpectationStatus;
  /** New failure threshold value (0-100 inclusive). */
  threshold?: number;
  /** New warning range value (0-100 inclusive). Must be strictly greater than threshold. Set to null to remove. */
  warning?: number | null;
};
type UpdateVolumeExpectationItem = {
  /** New upper bound (inclusive). Absent = unchanged, null = remove the bound, value = set. */
  max?: number | null;
  /** New lower bound (inclusive). Absent = unchanged, null = remove the bound, value = set. */
  min?: number | null;
  /** The name of the volume expectation. Currently only "volume" is supported. */
  name: string;
  /** Activation status of an expectation. `ACTIVATED` means the expectation is enforced, `DEACTIVATED` means it was explicitly turned off, and `NOT_ACTIVATED` means it has never been activated. */
  status?: ExpectationStatus;
};
/**
 * The last volume evaluation result (only present when updateStatus is SUCCESS).
 */
type UpdateVolumeLastEvaluation = {
  actualRowCount?: number;
  /** Human-readable error detail, present only when status is ERROR. A volume evaluation is ERROR when the row count cannot be retrieved ; a row count outside the configured bounds is reported as FAIL, not ERROR. */
  error?: string;
  /** Diagnostic error code, present only when status is ERROR . The example values shown are not an exhaustive list of possible codes. */
  errorCode?: string;
  evaluatedAt?: string;
  expectedMax?: number;
  expectedMin?: number;
  /** The outcome of an evaluation. `PASS`: the measured value meets the expectation. `WARN`: the measured value is in the warning range — above the threshold but below the warning level. `FAIL`: the measured value does not meet the expectation. `ERROR`: the expectation could not be evaluated (for example the source value could not be resolved). */
  status?: EvaluationStatus;
  /** What triggered the evaluation. `PROFILE_EVENT`: a new data profile was computed for the dataset. `TRUST_SCORE_EVENT`: a new data quality (Trust Score) result was computed for the dataset. `INITIALISATION`: the expectation was activated. `MANUAL`: an on-demand evaluation requested through the evaluate endpoint. */
  trigger?: EvaluationTrigger;
};
type UpdateVolumeResultItem = {
  /** The expectation category (only present when updateStatus is SUCCESS). */
  category?: string;
  /** Diagnostic error code for the failure (only present when updateStatus is ERROR). Provided to help troubleshooting; the example values shown are not an exhaustive list of possible codes. */
  code?: string;
  /** The last volume evaluation result (only present when updateStatus is SUCCESS). */
  lastEvaluation?: UpdateVolumeLastEvaluation;
  /** The current upper bound (only present when updateStatus is SUCCESS). */
  max?: number;
  /** The current lower bound (only present when updateStatus is SUCCESS). */
  min?: number;
  /** The name of the volume expectation. Currently only "volume" is supported. */
  name: string;
  /** The reason for failure (only present when updateStatus is ERROR). */
  reason?: string;
  /** Activation status of an expectation. `ACTIVATED` means the expectation is enforced, `DEACTIVATED` means it was explicitly turned off, and `NOT_ACTIVATED` means it has never been activated. */
  status?: ExpectationStatus;
  updateStatus: ItemUpdateStatus;
  /** When the expectation was last updated (only present when updateStatus is SUCCESS). */
  updatedAt?: string;
};
/**
 * The name of a volume expectation.
 * @example
 * "volume"
 */
type VolumeExpectationName = "volume";
/**
 * Creates a data contract for each listed dataset ID, notably to apply a contract to every dataset of a data product at once. The caller's "Compute data quality" write privilege is checked once for the whole request, before any dataset is processed: it does not depend on any single dataset, so a caller lacking it is rejected upfront with HTTP 403, rather than failing every dataset entry individually. Each dataset is then processed independently and concurrently: a failure on one dataset (no write permission on its space, dataset not found, or a contract already existing for that dataset) does not block the others. An existing contract is never overwritten. The request is capped at 100 datasets; a larger batch is rejected upfront with HTTP 400, before any contract is created.
 *
 * @param body an object with the body content
 * @throws CreateDataContractsDatasetsHttpError
 */
declare function createDataContractsDatasets(body: CreateDataContractsRequest, options?: ApiCallOptions): Promise<CreateDataContractsDatasetsHttpResponse>;
type CreateDataContractsDatasetsHttpResponse = {
  data: CreateDataContractsResponse;
  headers: Headers;
  status: 200;
};
type CreateDataContractsDatasetsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500;
};
/**
 * Permanently deletes the data contract for the given dataset, along with every expectation and evaluation belonging to it. This is a hard delete: unlike deactivation, nothing is preserved and the operation cannot be undone.
 * @example
 * deleteDataContractsDataset(
 *   "66a3aa9800358457159ecd12"
 * )
 *
 * @param datasetId
 * @throws DeleteDataContractsDatasetHttpError
 */
declare function deleteDataContractsDataset(datasetId: string, options?: ApiCallOptions): Promise<DeleteDataContractsDatasetHttpResponse>;
type DeleteDataContractsDatasetHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteDataContractsDatasetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 502;
};
/**
 * Returns every expectation for the dataset — the Trust Score dimension expectations and the data volume expectation — with their current activation status, configured thresholds or bounds, latest actual value, and last evaluation result. If the dataset has no data contract, the operation still returns 200 with the default, non-activated expectations. For non-activated expectations, the actual value (Trust Score) or row count (volume) is fetched live while the response is built and is omitted if it cannot be retrieved.
 * @example
 * getDataContractsDatasetExpectations(
 *   "66a3aa9800358457159ecd12"
 * )
 *
 * @param datasetId
 * @throws GetDataContractsDatasetExpectationsHttpError
 */
declare function getDataContractsDatasetExpectations(datasetId: string, options?: ApiCallOptions): Promise<GetDataContractsDatasetExpectationsHttpResponse>;
type GetDataContractsDatasetExpectationsHttpResponse = {
  data: GetExpectationsResponse;
  headers: Headers;
  status: 200;
};
type GetDataContractsDatasetExpectationsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 502;
};
/**
 * Updates, activates, or deactivates the dataset's expectations in a single call. Trust Score and data volume expectations are supplied in their respective arrays, and each item is processed independently: some items may succeed while others fail, and the per-item outcome is reported in the response with HTTP 200. When the dataset has no data contract yet, activating at least one expectation creates the contract; a request that would create a contract without activating any expectation is rejected with HTTP 400. For Trust Score items, threshold and warning must be within 0-100 and warning, when set, must be strictly greater than threshold.
 *
 * @param datasetId
 * @param body an object with the body content
 * @throws PatchDataContractsDatasetExpectationsHttpError
 */
declare function patchDataContractsDatasetExpectations(datasetId: string, body: UpdateExpectationsRequest, options?: ApiCallOptions): Promise<PatchDataContractsDatasetExpectationsHttpResponse>;
type PatchDataContractsDatasetExpectationsHttpResponse = {
  data: UpdateExpectationsResponse;
  headers: Headers;
  status: 200;
};
type PatchDataContractsDatasetExpectationsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 502;
};
/**
 * Clears the cache for data-governance/data-contracts api requests.
 */
declare function clearCache(): void;
type DataContractsAPI = {
  /**
   * Creates a data contract for each listed dataset ID, notably to apply a contract to every dataset of a data product at once. The caller's "Compute data quality" write privilege is checked once for the whole request, before any dataset is processed: it does not depend on any single dataset, so a caller lacking it is rejected upfront with HTTP 403, rather than failing every dataset entry individually. Each dataset is then processed independently and concurrently: a failure on one dataset (no write permission on its space, dataset not found, or a contract already existing for that dataset) does not block the others. An existing contract is never overwritten. The request is capped at 100 datasets; a larger batch is rejected upfront with HTTP 400, before any contract is created.
   *
   * @param body an object with the body content
   * @throws CreateDataContractsDatasetsHttpError
   */
  createDataContractsDatasets: typeof createDataContractsDatasets;
  /**
   * Permanently deletes the data contract for the given dataset, along with every expectation and evaluation belonging to it. This is a hard delete: unlike deactivation, nothing is preserved and the operation cannot be undone.
   * @example
   * deleteDataContractsDataset(
   *   "66a3aa9800358457159ecd12"
   * )
   *
   * @param datasetId
   * @throws DeleteDataContractsDatasetHttpError
   */
  deleteDataContractsDataset: typeof deleteDataContractsDataset;
  /**
   * Returns every expectation for the dataset — the Trust Score dimension expectations and the data volume expectation — with their current activation status, configured thresholds or bounds, latest actual value, and last evaluation result. If the dataset has no data contract, the operation still returns 200 with the default, non-activated expectations. For non-activated expectations, the actual value (Trust Score) or row count (volume) is fetched live while the response is built and is omitted if it cannot be retrieved.
   * @example
   * getDataContractsDatasetExpectations(
   *   "66a3aa9800358457159ecd12"
   * )
   *
   * @param datasetId
   * @throws GetDataContractsDatasetExpectationsHttpError
   */
  getDataContractsDatasetExpectations: typeof getDataContractsDatasetExpectations;
  /**
   * Updates, activates, or deactivates the dataset's expectations in a single call. Trust Score and data volume expectations are supplied in their respective arrays, and each item is processed independently: some items may succeed while others fail, and the per-item outcome is reported in the response with HTTP 200. When the dataset has no data contract yet, activating at least one expectation creates the contract; a request that would create a contract without activating any expectation is rejected with HTTP 400. For Trust Score items, threshold and warning must be within 0-100 and warning, when set, must be strictly greater than threshold.
   *
   * @param datasetId
   * @param body an object with the body content
   * @throws PatchDataContractsDatasetExpectationsHttpError
   */
  patchDataContractsDatasetExpectations: typeof patchDataContractsDatasetExpectations;
  /**
   * Clears the cache for data-contracts api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the data-contracts api
 */
declare const dataContractsExport: DataContractsAPI;
export { TrustScoreDimensionName as A, UpdateVolumeResultItem as B, GetTrustScoreExpectationItem as C, ItemUpdateStatus as D, GetVolumeLastEvaluation as E, UpdateExpectationsRequest as F, data_contracts_d_exports as G, clearCache as H, UpdateExpectationsResponse as I, patchDataContractsDatasetExpectations as J, deleteDataContractsDataset as K, UpdateTrustScoreExpectationItem as L, UpdateExpectationResultItem as M, UpdateExpectationResultsByCategory as N, PatchDataContractsDatasetExpectationsHttpError as O, UpdateExpectationsByCategory as P, UpdateVolumeExpectationItem as R, GetTrustScoreExpectationDetails as S, GetVolumeExpectationItem as T, createDataContractsDatasets as U, VolumeExpectationName as V, dataContractsExport as W, GetDataContractsDatasetExpectationsHttpError as _, CreateDataContractsRequest as a, GetExpectationItemBase as b, DeleteDataContractsDatasetHttpError as c, Error as d, ErrorResponse as f, ExpectationStatus as g, ExpectationLastEvaluation as h, CreateDataContractsDatasetsHttpResponse as i, UpdateExpectationLastEvaluation as j, PatchDataContractsDatasetExpectationsHttpResponse as k, DeleteDataContractsDatasetHttpResponse as l, EvaluationTrigger as m, CreateDataContractsDatasetEntry as n, CreateDataContractsResponse as o, EvaluationStatus as p, getDataContractsDatasetExpectations as q, CreateDataContractsDatasetsHttpError as r, DataContractsAPI as s, CreateDataContractResultItem as t, DimensionStatus as u, GetDataContractsDatasetExpectationsHttpResponse as v, GetVolumeExpectationDetails as w, GetExpectationsResponse as x, GetExpectationItem as y, UpdateVolumeLastEvaluation as z };