import { x as ApiCallOptions } from "../chunks/auth-types-yKuw6LLB.js";
import "../chunks/invoke-fetch-DdmiOIkr.js";
declare namespace trust_scores_d_exports {
  export { AxisId, AxisResponse, DatasetFilterRequest, DatasetId, Error, ErrorResponse, FilterDatasetsTrustScoreHttpError, FilterDatasetsTrustScoreHttpResponse, GenericScore, GenericWeight, MetricId, MetricResponse, TrustScoreResponse, TrustScoreResultListResponse, TrustScoresAPI, clearCache, trustScoresExport as default, filterDatasetsTrustScore };
}
/**
 * Defines the axis of the Trust Score.
 * @example
 * "TIMELINESS"
 */
export type AxisId = "VALIDITY" | "COMPLETENESS" | "USAGE" | "DISCOVERABILITY" | "ACCURACY" | "DIVERSITY" | "TIMELINESS";
/**
 * Score and configuration for a single Trust Score axis.
 */
export type AxisResponse = {
  /** Whether this axis is applicable for the dataset. An axis may be enabled but not applicable (for example, `TIMELINESS` when no freshness threshold is set). */
  applicable?: boolean;
  /** Whether this axis is enabled in the tenant configuration. Disabled axes have a `weight` of `0` and do not affect the overall score. */
  enabled?: boolean;
  /** Defines the axis of the Trust Score. */
  id: AxisId;
  /** Per-metric breakdown contributing to this axis score. */
  metrics: MetricResponse[];
  /** Axis score from the previous computation, for change tracking. */
  previousScore?: GenericScore;
  /** Computed score for this axis [0, 100]. Omitted when axis is not applicable. */
  score?: GenericScore;
  /** Defines the weight of the axis or metric in the Trust Score. */
  weight: GenericWeight;
};
/**
 * Request body for batch-filtering Trust Score results by dataset IDs.
 */
export type DatasetFilterRequest = {
  /** List of dataset IDs to retrieve Trust Scores for. Maximum 100 IDs per request. */
  datasetIds: DatasetId[];
  /** When true, refreshes the USAGE and TIMELINESS axes from source before returning the Trust Scores. */
  recomputeUsage?: boolean;
};
/**
 * Unique identifier of the dataset.
 * @example
 * "Jjk5NNHiUObQe8xTyeLgP5nQjKTpEr8R"
 */
export type DatasetId = string;
export type Error = {
  code?: string;
  detail?: string;
  status?: string;
  title?: string;
};
export type ErrorResponse = {
  errors?: Error[];
  traceId?: string;
};
/**
 * A numeric score value in the range [0, 100].
 */
export type GenericScore = number;
/**
 * Defines the weight of the axis or metric in the Trust Score.
 * @example
 * 50
 */
export type GenericWeight = number;
/**
 * Defines the metric of the axis in the Trust Score.
 * @example
 * "TIMELINESS_FRESHNESS"
 */
export type MetricId = "VALIDITY_QUALITY" | "COMPLETENESS_QUALITY" | "USAGE_APPS" | "USAGE_APP_VIEWS" | "DISCOVERABILITY_DESCRIPTION" | "DISCOVERABILITY_TAGS" | "DISCOVERABILITY_ACTIVATED" | "DISCOVERABILITY_FIELD_DESCRIPTION" | "DISCOVERABILITY_FIELD_TAGS" | "ACCURACY_QUALITY" | "DIVERSITY_SOURCE" | "DIVERSITY_VOLUME" | "DIVERSITY_EVENNESS" | "TIMELINESS_FRESHNESS";
/**
 * Score and configuration for a single Trust Score metric within an axis.
 */
export type MetricResponse = {
  /** Defines the metric of the axis in the Trust Score. */
  id: MetricId;
  /** Computed score for this metric [0, 100]. Omitted when metric is not applicable. */
  score?: GenericScore;
  /** Defines the weight of the axis or metric in the Trust Score. */
  weight: GenericWeight;
};
/**
 * Current Trust Score for a single dataset, including the overall weighted score, a per-axis breakdown, and per-metric details within each axis.
 */
export type TrustScoreResponse = {
  /** Per-axis breakdown of the Trust Score. */
  axes: AxisResponse[];
  /** Unique identifier of the dataset this score belongs to. */
  datasetId: string;
  /** Overall Trust Score from the previous computation, for change tracking. */
  previousScore?: GenericScore;
  /** Overall weighted Trust Score across all enabled axes [0, 100]. */
  score: GenericScore;
  /** Timestamp of the last Trust Score computation for this dataset. */
  updatedAt: string;
};
/**
 * Trust Score results for the requested datasets. Datasets with no computed Trust Score are omitted.
 */
export type TrustScoreResultListResponse = {
  /** List of Trust Score results, one entry per dataset found. */
  data: TrustScoreResponse[];
};
/**
 * Returns the current Trust Score for up to 100 datasets in a single request. Each result includes the overall score, per-axis breakdown (`weight`, `score`, `enabled` state), and per-metric details. Datasets with no computed Trust Score are omitted from the response. Requires `dataset:read` and `dataquality:read` permissions.
 *
 * @param body an object with the body content
 * @throws FilterDatasetsTrustScoreHttpError
 */
export declare function filterDatasetsTrustScore(body: DatasetFilterRequest, options?: ApiCallOptions): Promise<FilterDatasetsTrustScoreHttpResponse>;
export type FilterDatasetsTrustScoreHttpResponse = {
  data: TrustScoreResultListResponse;
  headers: Headers;
  status: 200;
};
export type FilterDatasetsTrustScoreHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Clears the cache for data-governance/trust-scores api requests.
 */
export declare function clearCache(): void;
export type TrustScoresAPI = {
  /**
   * Returns the current Trust Score for up to 100 datasets in a single request. Each result includes the overall score, per-axis breakdown (`weight`, `score`, `enabled` state), and per-metric details. Datasets with no computed Trust Score are omitted from the response. Requires `dataset:read` and `dataquality:read` permissions.
   *
   * @param body an object with the body content
   * @throws FilterDatasetsTrustScoreHttpError
   */
  filterDatasetsTrustScore: typeof filterDatasetsTrustScore;
  /**
   * Clears the cache for trust-scores api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the trust-scores api
 */
declare const trustScoresExport: TrustScoresAPI;
//#endregion
export { trustScoresExport as default, trust_scores_d_exports as t };