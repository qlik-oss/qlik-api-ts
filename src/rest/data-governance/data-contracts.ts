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

export type CreateDataContractResultItem = {
  /** Diagnostic error code for the failure (only present when updateStatus is ERROR). The example values shown are not an exhaustive list of possible codes. */
  code?: string;
  datasetId: string;
  /** Per-expectation results (only present when updateStatus is SUCCESS). */
  expectations?: UpdateExpectationResultsByCategory;
  /** The reason for failure (only present when updateStatus is ERROR). */
  reason?: string;
  updateStatus: ItemUpdateStatus;
};

/**
 * `expectations` has the same shape and validation rules as the `expectations` field of PATCH /expectations (non-empty arrays, no duplicate names, at least one processable expectation); a malformed entry is rejected with 400 DC-002 before any contract is created for any dataset. Auto-baseline vs explicit threshold follows the same rules as activation via PATCH. A `schema` or `field` item is rejected per item with DCI-003, whatever the schema compliance flag, until creation supports the schema expectation (DGAI-10167); neither counts as a processable expectation, so an entry holding only such items is a 400 DC-002. An entry where at least one expectation activates is reported with `updateStatus: SUCCESS` and an `expectations` block using the same per-category result shape as PATCH's response, including per-expectation `updateStatus: ERROR` items for names that individually failed. An entry where every expectation fails is reported as a per-dataset failure (DCI-016) and no contract is created for it.
 */
export type CreateDataContractsDatasetEntry = {
  /** Identifier of the dataset the data contract must be created for. */
  datasetId: string;
  /** Object whose keys are category identifiers in camelCase (e.g. `trustScore` maps to the `trust_score` category), each containing an array of updates. Unknown keys are silently ignored. `name` is matched case-insensitively for `trustScore`, `dataProfile` and `schema` (e.g. `VAlidity` matches `validity`), and the response `name` is always the canonical stored name (e.g. `validity`; a per-item error result may carry the name as sent). A `field` name, and the name of a `schema[].fields` item, is matched exactly and case-sensitively: `City` and `city` are two fields. Each `status` accepts only ACTIVATED and DEACTIVATED, the lifecycle status of the expectation.
   * Partial success: valid items are applied and invalid ones are reported per item. When no data contract exists, a batch with at least one activation of a NOT_ACTIVATED expectation creates (upserts) the contract instead of returning DC-008; a batch with no `status: ACTIVATED` item is rejected with 400 DC-008. A contract that exists but is not yet activated is activated in place before the batch is processed. For Trust Score items, threshold and warning must be within 0-100 and warning, when set, strictly greater than threshold.
   * Activation. Routing depends only on the requested target status: any item carrying `status: ACTIVATED` goes through the full activation pipeline, whatever the current status (NOT_ACTIVATED or DEACTIVATED), instead of returning a per-item error, so a caller can activate and update expectations in a single request. First-time activation: if no threshold is provided, it is bootstrapped from the current actual value returned by the external service; a provided threshold (and optionally a warning) is used directly. Reactivation (DEACTIVATED to ACTIVATED) applies the same partial-override semantics. Trust Score: a `threshold` or `warning` in the request is applied; an absent one keeps the stored value, and an explicit `null` warning clears it. Data Profile: a `min` or `max` in the request is applied; an absent one keeps the stored value, and an explicit removal clears it. In both cases the external service (Trust Score service / Catalog dataset row count) is called for the current live value, and the evaluation is recorded with trigger `MANUAL` against that value and the resulting threshold/warning or bounds. Result items for activated expectations use the same `updateStatus: SUCCESS` / `ERROR` shape as regular update results.
   * Trust Score activation failures. A Trust Score activation item is rejected with `updateStatus: ERROR`, never SUCCESS, regardless of any provided threshold, and no expectation and no evaluation are persisted for it (a failed reactivation leaves the existing expectation DEACTIVATED); the HTTP response is still 200 and other items are unaffected. `DCI-002`: the Trust Score service is unreachable (transient, retryable). `DCI-010`: no Trust Score has ever been computed for the dataset (profiling / Data Quality never ran; not retryable until quality is computed). `DCI-001`: the dataset has a computed Trust Score but this specific dimension is turned off in the Trust Score settings (the most common cause of a non-GLOBAL activation failure); activation or reactivation always requires the dimension to be available, and an explicit threshold does not bypass this check.
   * Re-evaluation. A re-evaluation using the `actualValue` of the most recent evaluation is triggered when `threshold` or `warning` changes and the expectation is (or becomes) ACTIVATED, and when `status` changes from DEACTIVATED to ACTIVATED even if threshold/warning remain unchanged. An expectation that ends up DEACTIVATED is not re-evaluated automatically, although a manual evaluation via the evaluate API can still be triggered. When a re-evaluation fails, `lastEvaluation.status` is ERROR and the `lastEvaluation` block carries both `error` (human-readable message) and `errorCode` (machine-readable DCI-NNN code). */
  expectations: UpdateExpectationsByCategory;
};

export type CreateDataContractsRequest = {
  /** The batch of datasets to create contracts for. 1 to 100 entries, no duplicate `datasetId`. */
  datasets: CreateDataContractsDatasetEntry[];
};

export type CreateDataContractsResponse = {
  datasets: CreateDataContractResultItem[];
};

/**
 * The availability status of the trust score dimension.
 * @example
 * "AVAILABLE"
 */
export type DimensionStatus = "AVAILABLE" | "NOT_AVAILABLE";

export type Error = {
  code?: string;
  detail?: string;
  /** Optional additional context for the error. Null when none is provided. */
  meta?: unknown | null;
  status?: string;
  title?: string;
};

export type ErrorResponse = {
  errors?: Error[];
  /** Identifier of the request trace. Quote it when reporting a problem so the request can be located in the logs. */
  traceId?: string;
};

/**
 * The outcome of an evaluation. `PASS`: the measured value meets the expectation. `WARN`: the measured value is in the warning range — above the threshold but below the warning level. `FAIL`: the measured value does not meet the expectation. `ERROR`: the expectation could not be evaluated (for example the source value could not be resolved).
 * @example
 * "PASS"
 */
export type EvaluationStatus = "PASS" | "WARN" | "FAIL" | "ERROR";

/**
 * What triggered the evaluation. `PROFILE_EVENT`: a new data profile was computed for the dataset. `TRUST_SCORE_EVENT`: a new data quality (Trust Score) result was computed for the dataset. `INITIALISATION`: the expectation was activated. `MANUAL`: an on-demand evaluation requested through the evaluate endpoint.
 * @example
 * "TRUST_SCORE_EVENT"
 */
export type EvaluationTrigger = "PROFILE_EVENT" | "TRUST_SCORE_EVENT" | "INITIALISATION" | "MANUAL";

/**
 * The last evaluation result. Only present when the expectation status is ACTIVATED or DEACTIVATED.
 */
export type ExpectationLastEvaluation = {
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
export type ExpectationStatus = "ACTIVATED" | "DEACTIVATED" | "NOT_ACTIVATED";

/**
 * One expectation of the dataset. The notes below apply to every item.
 *
 * - `category`: one of `trust_score`, `data_profile` or `schema`.
 * - `status`: `ACTIVATED` means the expectation is enforced and being evaluated, `DEACTIVATED`
 *   means it was previously activated but is currently disabled (explicitly turned off), and
 *   `NOT_ACTIVATED` means it exists in the catalog but has never been activated for this
 *   dataset.
 * - `activatable`: for `schema` it is true when Catalog reports at least one non-orphan field
 *   for the dataset, false otherwise (no schema, no field, only orphan fields, or Catalog
 *   unreachable).
 * - `trustScore.dimensionStatus` is AVAILABLE or NOT_AVAILABLE, as recorded on the stored
 *   expectation; absent for NOT_ACTIVATED items. `trustScore.threshold` and
 *   `trustScore.warning` are absent for NOT_ACTIVATED.
 * - `trustScore.actualValue`: the current score. ACTIVATED: the score recorded by the latest
 *   evaluation (evaluations run on every incoming Trust Score event, so it is current),
 *   omitted when that evaluation is an ERROR (dimension unavailable / service failure), as an
 *   ERROR evaluation carries no real measurement. NOT_ACTIVATED and DEACTIVATED: fetched live
 *   from the Trust Score service when the response is built, once per expectation category
 *   per request, and never falling back to the stale stored value; evaluations only run
 *   while an expectation is activated, so the stored value of a DEACTIVATED expectation
 *   dates from the moment it was deactivated and drifts further from reality the longer it
 *   stays off, and a NOT_ACTIVATED expectation has no evaluation record at all (the live
 *   value lets a caller see the current score before activating). The field is always
 *   omitted rather than defaulted to 0 whenever no actual value is available (a genuine
 *   measured 0 is still reported as 0), notably when the external service is unreachable
 *   (fail-open behavior): no error is returned to the client and the rest of the response is
 *   unaffected. For an ACTIVATED item it normally agrees with `lastEvaluation.actualValue`;
 *   for a DEACTIVATED item they usually differ, and that is expected.
 * - `dataProfile.min` and `dataProfile.max`: ACTIVATED/DEACTIVATED: the stored bound (absent
 *   if the bound was removed). NOT_ACTIVATED: a preview of the bound activation would apply
 *   right now, `ceil(actualRowCount * 0.95)` for `min` (-5% baseline) and
 *   `ceil(actualRowCount * 1.05)` for `max` (+5% baseline), present only when
 *   `actualRowCount` is available and absent otherwise, so a caller can preview the default
 *   bounds before activating.
 * - `dataProfile.actualRowCount`: the current row count, with the same semantics as
 *   `trustScore.actualValue` (recorded by the latest evaluation for ACTIVATED, omitted when
 *   that evaluation is an ERROR, never 0; fetched live, once per expectation category per
 *   request, for NOT_ACTIVATED and DEACTIVATED, never falling back to the stale stored
 *   value; omitted rather than defaulted to 0 when unavailable) but taken from Catalog:
 *   evaluations run on every incoming profile event, and when Catalog is unreachable the
 *   field is omitted (fail-open behavior), with no error returned to the client and the rest
 *   of the response unaffected. For an ACTIVATED item it normally agrees with
 *   `lastEvaluation.actualRowCount`; for a DEACTIVATED item they usually differ, and that is
 *   expected.
 * - `lastEvaluation` is present for ACTIVATED/DEACTIVATED items with at least one
 *   evaluation. `lastEvaluation.error`: human-readable error message, present when status is
 *   ERROR. `lastEvaluation.actualValue`: the score recorded at evaluation time; for an
 *   ACTIVATED item it normally agrees with the top-level `actualValue`, for a DEACTIVATED
 *   item they usually differ, and that is expected. `lastEvaluation.expectedWarning`:
 *   omitted when no warning was set.
 * - `schema.fields`: every non-deleted field of the schema, nested here and never as a
 *   sibling `category: field` item; always present, `[]` when the schema has no field or was
 *   never activated. Not counted by `meta.count` and not paged: present in full whatever the
 *   page `limit`.
 */
export type GetExpectationItem = GetTrustScoreExpectationItem | GetVolumeExpectationItem;

export type GetExpectationItemBase = {
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

export type GetExpectationsResponse = {
  expectations: GetExpectationItem[];
};

export type GetTrustScoreExpectationDetails = {
  /** The current score for this expectation. For ACTIVATED expectations this is the score recorded by the latest evaluation. For NOT_ACTIVATED and DEACTIVATED expectations it is fetched live from the Trust Score service when the response is built, because evaluations only run while an expectation is activated. Omitted when the external service is unreachable (fail-open behavior). */
  actualValue?: number;
  /** The availability status of the trust score dimension. */
  dimensionStatus?: DimensionStatus;
  /** The last evaluation result. Only present when the expectation status is ACTIVATED or DEACTIVATED. */
  lastEvaluation?: ExpectationLastEvaluation;
  threshold?: number;
  warning?: number;
};

export type GetTrustScoreExpectationItem = GetExpectationItemBase & {
  /** The name of a trust score dimension. */
  name?: TrustScoreDimensionName;
  trustScore: GetTrustScoreExpectationDetails;
};

export type GetVolumeExpectationDetails = {
  /** The current row count. For ACTIVATED expectations this is the count recorded by the latest evaluation. For NOT_ACTIVATED and DEACTIVATED expectations it is fetched live from Catalog when the response is built, because evaluations only run while an expectation is activated. Omitted when Catalog is unreachable (fail-open behavior). */
  actualRowCount?: number;
  /** The last volume evaluation result. Present only when the expectation status is ACTIVATED or DEACTIVATED. */
  lastEvaluation?: GetVolumeLastEvaluation;
  /** Upper bound (inclusive) on the row count. Omitted when the upper bound is disabled. */
  max?: number;
  /** Lower bound (inclusive) on the row count. Omitted when the lower bound is disabled. */
  min?: number;
};

export type GetVolumeExpectationItem = GetExpectationItemBase & {
  dataProfile: GetVolumeExpectationDetails;
  /** The name of a volume expectation. */
  name?: VolumeExpectationName;
};

/**
 * The last volume evaluation result. Present only when the expectation status is ACTIVATED or DEACTIVATED.
 */
export type GetVolumeLastEvaluation = {
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
export type ItemUpdateStatus = "SUCCESS" | "ERROR";

/**
 * The name of a trust score dimension.
 * @example
 * "validity"
 */
export type TrustScoreDimensionName =
  | "global"
  | "validity"
  | "completeness"
  | "accuracy"
  | "diversity"
  | "discoverability"
  | "usage"
  | "timeliness";

/**
 * The last evaluation result (only present when updateStatus is SUCCESS).
 */
export type UpdateExpectationLastEvaluation = {
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

export type UpdateExpectationResultItem = {
  /** The expectation category (only present when updateStatus is SUCCESS). */
  category?: string;
  /** Diagnostic error code for the failure (only present when updateStatus is ERROR). The example values shown are not an exhaustive list of possible codes. */
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

export type UpdateExpectationResultsByCategory = {
  dataProfile?: UpdateVolumeResultItem[];
  trustScore?: UpdateExpectationResultItem[];
};

/**
 * Object whose keys are category identifiers in camelCase (e.g. `trustScore` maps to the `trust_score` category), each containing an array of updates. Unknown keys are silently ignored. `name` is matched case-insensitively for `trustScore`, `dataProfile` and `schema` (e.g. `VAlidity` matches `validity`), and the response `name` is always the canonical stored name (e.g. `validity`; a per-item error result may carry the name as sent). A `field` name, and the name of a `schema[].fields` item, is matched exactly and case-sensitively: `City` and `city` are two fields. Each `status` accepts only ACTIVATED and DEACTIVATED, the lifecycle status of the expectation.
 * Partial success: valid items are applied and invalid ones are reported per item. When no data contract exists, a batch with at least one activation of a NOT_ACTIVATED expectation creates (upserts) the contract instead of returning DC-008; a batch with no `status: ACTIVATED` item is rejected with 400 DC-008. A contract that exists but is not yet activated is activated in place before the batch is processed. For Trust Score items, threshold and warning must be within 0-100 and warning, when set, strictly greater than threshold.
 * Activation. Routing depends only on the requested target status: any item carrying `status: ACTIVATED` goes through the full activation pipeline, whatever the current status (NOT_ACTIVATED or DEACTIVATED), instead of returning a per-item error, so a caller can activate and update expectations in a single request. First-time activation: if no threshold is provided, it is bootstrapped from the current actual value returned by the external service; a provided threshold (and optionally a warning) is used directly. Reactivation (DEACTIVATED to ACTIVATED) applies the same partial-override semantics. Trust Score: a `threshold` or `warning` in the request is applied; an absent one keeps the stored value, and an explicit `null` warning clears it. Data Profile: a `min` or `max` in the request is applied; an absent one keeps the stored value, and an explicit removal clears it. In both cases the external service (Trust Score service / Catalog dataset row count) is called for the current live value, and the evaluation is recorded with trigger `MANUAL` against that value and the resulting threshold/warning or bounds. Result items for activated expectations use the same `updateStatus: SUCCESS` / `ERROR` shape as regular update results.
 * Trust Score activation failures. A Trust Score activation item is rejected with `updateStatus: ERROR`, never SUCCESS, regardless of any provided threshold, and no expectation and no evaluation are persisted for it (a failed reactivation leaves the existing expectation DEACTIVATED); the HTTP response is still 200 and other items are unaffected. `DCI-002`: the Trust Score service is unreachable (transient, retryable). `DCI-010`: no Trust Score has ever been computed for the dataset (profiling / Data Quality never ran; not retryable until quality is computed). `DCI-001`: the dataset has a computed Trust Score but this specific dimension is turned off in the Trust Score settings (the most common cause of a non-GLOBAL activation failure); activation or reactivation always requires the dimension to be available, and an explicit threshold does not bypass this check.
 * Re-evaluation. A re-evaluation using the `actualValue` of the most recent evaluation is triggered when `threshold` or `warning` changes and the expectation is (or becomes) ACTIVATED, and when `status` changes from DEACTIVATED to ACTIVATED even if threshold/warning remain unchanged. An expectation that ends up DEACTIVATED is not re-evaluated automatically, although a manual evaluation via the evaluate API can still be triggered. When a re-evaluation fails, `lastEvaluation.status` is ERROR and the `lastEvaluation` block carries both `error` (human-readable message) and `errorCode` (machine-readable DCI-NNN code).
 */
export type UpdateExpectationsByCategory = {
  /** Array of data profile (volume) expectation update items. Must not be empty if present. */
  dataProfile?: UpdateVolumeExpectationItem[];
  /** Array of trust score expectation update items. Must not be empty if present. */
  trustScore?: UpdateTrustScoreExpectationItem[];
};

export type UpdateExpectationsRequest = {
  /** Object whose keys are category identifiers in camelCase (e.g. `trustScore` maps to the `trust_score` category), each containing an array of updates. Unknown keys are silently ignored. `name` is matched case-insensitively for `trustScore`, `dataProfile` and `schema` (e.g. `VAlidity` matches `validity`), and the response `name` is always the canonical stored name (e.g. `validity`; a per-item error result may carry the name as sent). A `field` name, and the name of a `schema[].fields` item, is matched exactly and case-sensitively: `City` and `city` are two fields. Each `status` accepts only ACTIVATED and DEACTIVATED, the lifecycle status of the expectation.
   * Partial success: valid items are applied and invalid ones are reported per item. When no data contract exists, a batch with at least one activation of a NOT_ACTIVATED expectation creates (upserts) the contract instead of returning DC-008; a batch with no `status: ACTIVATED` item is rejected with 400 DC-008. A contract that exists but is not yet activated is activated in place before the batch is processed. For Trust Score items, threshold and warning must be within 0-100 and warning, when set, strictly greater than threshold.
   * Activation. Routing depends only on the requested target status: any item carrying `status: ACTIVATED` goes through the full activation pipeline, whatever the current status (NOT_ACTIVATED or DEACTIVATED), instead of returning a per-item error, so a caller can activate and update expectations in a single request. First-time activation: if no threshold is provided, it is bootstrapped from the current actual value returned by the external service; a provided threshold (and optionally a warning) is used directly. Reactivation (DEACTIVATED to ACTIVATED) applies the same partial-override semantics. Trust Score: a `threshold` or `warning` in the request is applied; an absent one keeps the stored value, and an explicit `null` warning clears it. Data Profile: a `min` or `max` in the request is applied; an absent one keeps the stored value, and an explicit removal clears it. In both cases the external service (Trust Score service / Catalog dataset row count) is called for the current live value, and the evaluation is recorded with trigger `MANUAL` against that value and the resulting threshold/warning or bounds. Result items for activated expectations use the same `updateStatus: SUCCESS` / `ERROR` shape as regular update results.
   * Trust Score activation failures. A Trust Score activation item is rejected with `updateStatus: ERROR`, never SUCCESS, regardless of any provided threshold, and no expectation and no evaluation are persisted for it (a failed reactivation leaves the existing expectation DEACTIVATED); the HTTP response is still 200 and other items are unaffected. `DCI-002`: the Trust Score service is unreachable (transient, retryable). `DCI-010`: no Trust Score has ever been computed for the dataset (profiling / Data Quality never ran; not retryable until quality is computed). `DCI-001`: the dataset has a computed Trust Score but this specific dimension is turned off in the Trust Score settings (the most common cause of a non-GLOBAL activation failure); activation or reactivation always requires the dimension to be available, and an explicit threshold does not bypass this check.
   * Re-evaluation. A re-evaluation using the `actualValue` of the most recent evaluation is triggered when `threshold` or `warning` changes and the expectation is (or becomes) ACTIVATED, and when `status` changes from DEACTIVATED to ACTIVATED even if threshold/warning remain unchanged. An expectation that ends up DEACTIVATED is not re-evaluated automatically, although a manual evaluation via the evaluate API can still be triggered. When a re-evaluation fails, `lastEvaluation.status` is ERROR and the `lastEvaluation` block carries both `error` (human-readable message) and `errorCode` (machine-readable DCI-NNN code). */
  expectations: UpdateExpectationsByCategory;
};

export type UpdateExpectationsResponse = {
  expectations: UpdateExpectationResultsByCategory;
};

export type UpdateTrustScoreExpectationItem = {
  /** The name of the trust score dimension. One of: global, validity, completeness, accuracy, diversity, discoverability, usage, timeliness. Matched case-insensitively. Unknown names produce a per-item error in the response. */
  name: string;
  /** Activation status of an expectation. `ACTIVATED` means the expectation is enforced, `DEACTIVATED` means it was explicitly turned off, and `NOT_ACTIVATED` means it has never been activated. */
  status?: ExpectationStatus;
  /** New failure threshold value (0-100 inclusive). */
  threshold?: number;
  /** New warning range value (0-100 inclusive). Must be strictly greater than the effective threshold. Absent means no change. Set to null to remove. */
  warning?: number | null;
};

export type UpdateVolumeExpectationItem = {
  /** New upper bound (inclusive). Absent = unchanged, null = remove the bound, value = set. */
  max?: number | null;
  /** New lower bound (inclusive). Absent = unchanged, null = remove the bound, value = set. */
  min?: number | null;
  /** The name of the volume expectation. Currently only "volume" is supported (case-insensitive). Unknown names produce per-item errors (not 400). */
  name: string;
  /** Activation status of an expectation. `ACTIVATED` means the expectation is enforced, `DEACTIVATED` means it was explicitly turned off, and `NOT_ACTIVATED` means it has never been activated. */
  status?: ExpectationStatus;
};

/**
 * The last volume evaluation result (only present when updateStatus is SUCCESS).
 */
export type UpdateVolumeLastEvaluation = {
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

export type UpdateVolumeResultItem = {
  /** The expectation category (only present when updateStatus is SUCCESS). */
  category?: string;
  /** Diagnostic error code for the failure (only present when updateStatus is ERROR). The example values shown are not an exhaustive list of possible codes. */
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
export type VolumeExpectationName = "volume";

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Creates a data contract for each listed dataset ID, notably to apply a contract to every dataset of a data product at once. The caller's "Compute data quality" write privilege is checked once for the whole request, before any dataset is processed, so a caller lacking it is rejected upfront with HTTP 403 rather than failing every entry individually. Each dataset is then processed independently and concurrently: a failure on one (no write permission on its space, dataset not found, or a contract already existing) does not block the others. Unlike PATCH /expectations, an existing contract is never overwritten: it is reported as a failure. The dataset-level write permission, which depends on each dataset's space/owner, is still checked per dataset. The request is capped at 100 datasets; a larger batch is rejected upfront with HTTP 400, before any contract is created.
 *
 * @param body an object with the body content
 * @throws CreateDataContractsDatasetsHttpError
 */
export async function createDataContractsDatasets(
  body: CreateDataContractsRequest,
  options?: ApiCallOptions,
): Promise<CreateDataContractsDatasetsHttpResponse> {
  return invokeFetch("data-governance/data-contracts", {
    method: "post",
    pathTemplate: "/api/data-governance/data-contracts/datasets/actions/create",
    body,
    contentType: "application/json",
    options,
  });
}

export type CreateDataContractsDatasetsHttpResponse = {
  data: CreateDataContractsResponse;
  headers: Headers;
  status: 200;
};

export type CreateDataContractsDatasetsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500;
};

/**
 * Permanently deletes the data contract for the given dataset, along with every expectation and evaluation belonging to it. This is a hard delete: unlike deactivation, nothing is preserved and the operation cannot be undone. The schema expectation, its field expectations and all their evaluations are deleted too, whatever the schema flag.
 * @example
 * deleteDataContractsDataset(
 *   "66a3aa9800358457159ecd12"
 * )
 *
 * @param datasetId
 * @throws DeleteDataContractsDatasetHttpError
 */
export async function deleteDataContractsDataset(
  datasetId: string,
  options?: ApiCallOptions,
): Promise<DeleteDataContractsDatasetHttpResponse> {
  return invokeFetch("data-governance/data-contracts", {
    method: "delete",
    pathTemplate: "/api/data-governance/data-contracts/datasets/{datasetId}",
    pathVariables: { datasetId },
    options,
  });
}

export type DeleteDataContractsDatasetHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type DeleteDataContractsDatasetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 502;
};

/**
 * Returns the list of all expectations of the global catalog, merged with the dataset's activated ones, with their current activation status, configured thresholds or bounds, latest actual value and last evaluation result. The catalog holds `trust_score` (8 dimensions: global, validity, completeness, accuracy, diversity, discoverability, usage, timeliness), `data_profile` (1 expectation: volume) and `schema` (1 expectation: structure, experimental). Each item has the four top-level fields `category`, `name`, `status`, `updatedAt` and exactly one category-specific details sub-object (`trustScore`, `dataProfile` or `schema`) holding every category-specific field. If the dataset has no data contract, the operation still returns 200 with the default, non-activated expectations. For non-activated expectations the actual value (Trust Score) or row count (volume) is fetched live while the response is built and is omitted if it cannot be retrieved.
 * When schema compliance is enabled for the tenant, the schema / structure expectation is listed too (experimental), with every non-deleted field of the activated schema nested under it in `schema.fields` (experimental), sorted by name in case-sensitive order — never as sibling items of their own: this response never has a `category: field` item. The schema expectation also stores the name of every field it knows, deleted ones included (`fieldNames`), for the drift detection of later tickets; no response exposes it.
 * Order, the same on every page: the top-level items, ACTIVATED ones before the others; the `schema` item is one of them. When schema compliance is disabled (or the flag service cannot answer), the schema entry, stored or NOT_ACTIVATED placeholder, is omitted from this response, from suggest and from lookup; a schema activated before the flag was turned off is kept, only hidden, and so are its fields, nested under it.
 * Pagination (experimental): at most `limit` items per page, in this order, which never changes from one page to the next. `links.next.href` leads to the next page and is null on the last one; a page that ends exactly on the last item also has `next: null`, so no next link ever leads to an empty page. `links.prev.href` leads to the previous page, which holds the `limit` items before the current one or fewer, and is null on the first. There is no page number: the Qlik pagination guidelines are cursor-based, so call the links as is. `meta.count` is the total number of top-level items over all pages, the same on every page of one pass. Only the top-level items are paged and counted: the fields nested under `schema.fields` are never paged nor counted, and the page that holds the schema item holds every one of its fields regardless of `limit` — a deliberate exception, since a cap would silently drop fields from the only API that lists them; a dataset with many fields can return 1,000 or more of them in that one schema item. When schema compliance is disabled there is no schema item, so every item comes on a single page with `links.prev` and `links.next` both null.
 * @example
 * getDataContractsDatasetExpectations(
 *   "66a3aa9800358457159ecd12"
 * )
 *
 * @param datasetId
 * @throws GetDataContractsDatasetExpectationsHttpError
 */
export async function getDataContractsDatasetExpectations(
  datasetId: string,
  options?: ApiCallOptions,
): Promise<GetDataContractsDatasetExpectationsHttpResponse> {
  return invokeFetch("data-governance/data-contracts", {
    method: "get",
    pathTemplate: "/api/data-governance/data-contracts/datasets/{datasetId}/expectations",
    pathVariables: { datasetId },
    options,
  });
}

export type GetDataContractsDatasetExpectationsHttpResponse = {
  data: GetExpectationsResponse;
  headers: Headers;
  status: 200;
};

export type GetDataContractsDatasetExpectationsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 502;
};

/**
 * Updates, activates or deactivates the dataset's expectations in a single call. The request body groups update items by category key (`trustScore`, `dataProfile`, `schema`, `field`); a field can also be updated inside the schema item that owns it, under `schema[].fields`; items are processed independently (partial success): valid items are applied when the transaction commits, failures are reported per item, and the response is 200. A write conflict that cannot be resolved rolls back the transaction and reports DCI-005 for every item submitted to that transaction. Activating at least one expectation creates the data contract when none exists. `schema` (structure) and `field` items are experimental and processed only while schema compliance is enabled for the tenant. Activation, re-evaluation and per-category rules are on `UpdateExpectationsByCategory` and its item schemas.
 *
 * @param datasetId
 * @param body an object with the body content
 * @throws PatchDataContractsDatasetExpectationsHttpError
 */
export async function patchDataContractsDatasetExpectations(
  datasetId: string,
  body: UpdateExpectationsRequest,
  options?: ApiCallOptions,
): Promise<PatchDataContractsDatasetExpectationsHttpResponse> {
  return invokeFetch("data-governance/data-contracts", {
    method: "patch",
    pathTemplate: "/api/data-governance/data-contracts/datasets/{datasetId}/expectations",
    pathVariables: { datasetId },
    body,
    contentType: "application/json",
    options,
  });
}

export type PatchDataContractsDatasetExpectationsHttpResponse = {
  data: UpdateExpectationsResponse;
  headers: Headers;
  status: 200;
};

export type PatchDataContractsDatasetExpectationsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 502;
};

/**
 * Clears the cache for data-governance/data-contracts api requests.
 */
export function clearCache() {
  return clearApiCache("data-governance/data-contracts");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type DataContractsAPI = {
  /**
   * Creates a data contract for each listed dataset ID, notably to apply a contract to every dataset of a data product at once. The caller's "Compute data quality" write privilege is checked once for the whole request, before any dataset is processed, so a caller lacking it is rejected upfront with HTTP 403 rather than failing every entry individually. Each dataset is then processed independently and concurrently: a failure on one (no write permission on its space, dataset not found, or a contract already existing) does not block the others. Unlike PATCH /expectations, an existing contract is never overwritten: it is reported as a failure. The dataset-level write permission, which depends on each dataset's space/owner, is still checked per dataset. The request is capped at 100 datasets; a larger batch is rejected upfront with HTTP 400, before any contract is created.
   *
   * @param body an object with the body content
   * @throws CreateDataContractsDatasetsHttpError
   */
  createDataContractsDatasets: typeof createDataContractsDatasets;
  /**
   * Permanently deletes the data contract for the given dataset, along with every expectation and evaluation belonging to it. This is a hard delete: unlike deactivation, nothing is preserved and the operation cannot be undone. The schema expectation, its field expectations and all their evaluations are deleted too, whatever the schema flag.
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
   * Returns the list of all expectations of the global catalog, merged with the dataset's activated ones, with their current activation status, configured thresholds or bounds, latest actual value and last evaluation result. The catalog holds `trust_score` (8 dimensions: global, validity, completeness, accuracy, diversity, discoverability, usage, timeliness), `data_profile` (1 expectation: volume) and `schema` (1 expectation: structure, experimental). Each item has the four top-level fields `category`, `name`, `status`, `updatedAt` and exactly one category-specific details sub-object (`trustScore`, `dataProfile` or `schema`) holding every category-specific field. If the dataset has no data contract, the operation still returns 200 with the default, non-activated expectations. For non-activated expectations the actual value (Trust Score) or row count (volume) is fetched live while the response is built and is omitted if it cannot be retrieved.
   * When schema compliance is enabled for the tenant, the schema / structure expectation is listed too (experimental), with every non-deleted field of the activated schema nested under it in `schema.fields` (experimental), sorted by name in case-sensitive order — never as sibling items of their own: this response never has a `category: field` item. The schema expectation also stores the name of every field it knows, deleted ones included (`fieldNames`), for the drift detection of later tickets; no response exposes it.
   * Order, the same on every page: the top-level items, ACTIVATED ones before the others; the `schema` item is one of them. When schema compliance is disabled (or the flag service cannot answer), the schema entry, stored or NOT_ACTIVATED placeholder, is omitted from this response, from suggest and from lookup; a schema activated before the flag was turned off is kept, only hidden, and so are its fields, nested under it.
   * Pagination (experimental): at most `limit` items per page, in this order, which never changes from one page to the next. `links.next.href` leads to the next page and is null on the last one; a page that ends exactly on the last item also has `next: null`, so no next link ever leads to an empty page. `links.prev.href` leads to the previous page, which holds the `limit` items before the current one or fewer, and is null on the first. There is no page number: the Qlik pagination guidelines are cursor-based, so call the links as is. `meta.count` is the total number of top-level items over all pages, the same on every page of one pass. Only the top-level items are paged and counted: the fields nested under `schema.fields` are never paged nor counted, and the page that holds the schema item holds every one of its fields regardless of `limit` — a deliberate exception, since a cap would silently drop fields from the only API that lists them; a dataset with many fields can return 1,000 or more of them in that one schema item. When schema compliance is disabled there is no schema item, so every item comes on a single page with `links.prev` and `links.next` both null.
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
   * Updates, activates or deactivates the dataset's expectations in a single call. The request body groups update items by category key (`trustScore`, `dataProfile`, `schema`, `field`); a field can also be updated inside the schema item that owns it, under `schema[].fields`; items are processed independently (partial success): valid items are applied when the transaction commits, failures are reported per item, and the response is 200. A write conflict that cannot be resolved rolls back the transaction and reports DCI-005 for every item submitted to that transaction. Activating at least one expectation creates the data contract when none exists. `schema` (structure) and `field` items are experimental and processed only while schema compliance is enabled for the tenant. Activation, re-evaluation and per-category rules are on `UpdateExpectationsByCategory` and its item schemas.
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
const dataContractsExport: DataContractsAPI = {
  createDataContractsDatasets,
  deleteDataContractsDataset,
  getDataContractsDatasetExpectations,
  patchDataContractsDatasetExpectations,
  clearCache,
};
export default dataContractsExport;
