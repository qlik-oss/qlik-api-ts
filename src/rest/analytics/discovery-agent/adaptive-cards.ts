/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import { clearApiCache, invokeFetch, type ApiCallOptions, type PageCallOptions } from "#public/invoke-fetch";

/* -------------------------------------------------------------------------- */
/*                                Public types                                */
/* -------------------------------------------------------------------------- */

/**
 * Adaptive Card
 */
export type AdaptiveCard = unknown;

export type AdaptiveCards = {
  data: AdaptiveCard[];
  inAppMetrics?: FormattedInAppMetricRecord[];
  links: AdaptiveCardsLinks;
};

export type AdaptiveCardsLinks = {
  next?: Href;
  prev?: Href;
  self?: Href;
};

/**
 * Comparison period for the analysis.
 * @example
 * "D"
 */
export type AggregationFrequencyEnum = "D" | "W" | "M" | "Q" | "Y";

/**
 * Aggregation operation type
 * @example
 * "sum"
 */
export type AggregationType = "sum" | "avg" | "count" | "max" | "min";

/**
 * Type of analysis performed on the in-app metric.
 * @example
 * "spikesUp"
 */
export type AnalysisTypeEnum =
  | "recordHigh"
  | "recordLow"
  | "aboveModel"
  | "belowModel"
  | "spikesUp"
  | "spikesDown"
  | "newBaseLine"
  | "trendChanges";

/**
 * Breakdown dimension with filtering capabilities.
 * - `dimension` is required.
 * - `values` and `filter` are optional. If both are omitted (or `values` is empty and `filter` is null), the API interprets this as "analyze all values" for the given dimension.
 * @example
 * {
 *   dimension: "Region",
 *   filter: {
 *     type: "values",
 *     values: [
 *       "Europe",
 *       "Asia"
 *     ]
 *   },
 *   values: [
 *     "Europe",
 *     "Asia"
 *   ]
 * }
 */
export type BreakDownDimension = {
  /** The dimension name */
  dimension: string;
  /** Filter configuration for a breakdown dimension */
  filter?: BreakdownFilter;
  /** List of values (kept for backward compatibility) */
  values?: string[];
};

/**
 * Condition-based filtering configuration. Supports single comparisons (>, >=, <, <=) and range comparisons (> <, >= <=).
 *
 * **Single Comparisons:**
 * - Compare type: Uses `value` (Fixed) or `aggregation`+`field` (Calculated)
 * - General type: Uses `aggregation`+`field` and either `value` (Fixed) or `aggregation2`+`field2` (Calculated)
 *
 * **Range Comparisons (> < or >= <=):**
 * - Compare type: Uses `fromValue`+`toValue` (Fixed) or `fromAggregation`+`fromField`+`toAggregation`+`toField` (Calculated)
 * - General type: Uses `aggregation`+`field` plus either `fromValue`+`toValue` (Fixed) or `fromAggregation`+`fromField`+`toAggregation`+`toField` (Calculated)
 */
export type BreakdownConditionFilter = {
  /** Aggregation operation type */
  aggregation?: AggregationType;
  /** Aggregation operation type */
  aggregation2?: AggregationType;
  /** Comparison operation type */
  comparisonType: ComparisonType;
  /** Condition evaluation type */
  conditionType: ConditionType;
  /** Primary field for calculated values */
  field?: string;
  /** Additional field used only by General.Calculated for single comparisons */
  field2?: string;
  /** Aggregation operation type */
  fromAggregation?: AggregationType;
  /** Lower bound field for range comparisons with Calculated value type (used with > < or >= <=) */
  fromField?: string;
  /** Lower bound value for range comparisons with Fixed value type (used with > < or >= <=) */
  fromValue?: number;
  /** Aggregation operation type */
  toAggregation?: AggregationType;
  /** Upper bound field for range comparisons with Calculated value type (used with > < or >= <=) */
  toField?: string;
  /** Upper bound value for range comparisons with Fixed value type (used with > < or >= <=) */
  toValue?: number;
  /** Fixed numeric value (used by single comparisons with Compare.Fixed and General.Fixed) */
  value?: number;
  /** Whether the value is calculated or fixed */
  valueType?: ValueType;
};

/**
 * Filter configuration for a breakdown dimension
 * @example
 * {
 *   type: "values",
 *   values: [
 *     "Europe",
 *     "Asia",
 *     "North America"
 *   ]
 * }
 */
export type BreakdownFilter = {
  /** Condition-based filtering configuration. Supports single comparisons (>, >=, <, <=) and range comparisons (> <, >= <=).
   *
   * **Single Comparisons:**
   * - Compare type: Uses `value` (Fixed) or `aggregation`+`field` (Calculated)
   * - General type: Uses `aggregation`+`field` and either `value` (Fixed) or `aggregation2`+`field2` (Calculated)
   *
   * **Range Comparisons (> < or >= <=):**
   * - Compare type: Uses `fromValue`+`toValue` (Fixed) or `fromAggregation`+`fromField`+`toAggregation`+`toField` (Calculated)
   * - General type: Uses `aggregation`+`field` plus either `fromValue`+`toValue` (Fixed) or `fromAggregation`+`fromField`+`toAggregation`+`toField` (Calculated) */
  condition?: BreakdownConditionFilter;
  /** When set to true, the filter values are excluded from analysis instead of included.
   * - If exclude is false or omitted, only the matched values are analyzed (max 50).
   * - If exclude is true, all dimension values EXCEPT the matched values are analyzed (max 50). */
  exclude?: boolean;
  /** Search-based filtering configuration. If searchString is empty or not provided, all dimension values will be analyzed (no filtering applied). */
  search?: BreakdownSearchFilter;
  /** Top/bottom filtering configuration */
  topBottom?: BreakdownTopBottomFilter;
  /** Type of breakdown filter */
  type: BreakdownFilterType;
  /** List of values to filter by (used when type is Values) */
  values?: string[];
};

/**
 * Type of breakdown filter
 * @example
 * "values"
 */
export type BreakdownFilterType = "values" | "search" | "condition" | "topBottom";

/**
 * Search-based filtering configuration. If searchString is empty or not provided, all dimension values will be analyzed (no filtering applied).
 */
export type BreakdownSearchFilter = {
  /** String to search for. If empty, all dimension values are analyzed. */
  searchString?: string;
  /** Search operation type */
  searchType: SearchType;
};

/**
 * Top/bottom filtering configuration
 */
export type BreakdownTopBottomFilter = {
  /** Number of top/bottom values to select */
  number: number;
  /** Whether to select top or bottom values */
  type: TopBottomType;
  /** Unit for top/bottom selection */
  unit: TopBottomUnit;
};

export type Categories = {
  /** The IDs of the categories. */
  categoryIds?: string[];
  /** The ID of the glossary that the category belongs to. */
  glossaryId?: string;
};

/**
 * Comparison operation type
 * @example
 * ">"
 */
export type ComparisonType = ">" | ">=" | "<" | "<=" | "> <" | ">= <=";

/**
 * Condition evaluation type
 * @example
 * "general"
 */
export type ConditionType = "general" | "compare";

export type Error = {
  /** The error code is in the form of 'OWL-xxx', ranges from 'OWL-001' to 'OWL-016'. */
  code: string;
  detail?: string;
  title: string;
};

/**
 * @example
 * {
 *   errors: [
 *     {
 *       code: "OWL-001",
 *       title: "Invalid request."
 *     },
 *     {
 *       code: "OWL-002",
 *       detail: "You may need to login to access this resource.",
 *       title: "Unauthorized access."
 *     },
 *     {
 *       code: "OWL-003",
 *       detail: "The resource either never existed, or may have been deleted.",
 *       title: "Resource not found."
 *     },
 *     {
 *       code: "OWL-013",
 *       detail: "",
 *       title: "The analysis can not be started because the analysis frequency quota has been met."
 *     },
 *     {
 *       code: "OWL-015",
 *       detail: "",
 *       title: "Too many breakdown dimensions."
 *     },
 *     {
 *       code: "OWL-016",
 *       detail: "",
 *       title: "Too many breakdown values."
 *     }
 *   ]
 * }
 */
export type Errors = {
  errors?: Error[];
};

export type FormattedInAppMetricDefinition = {
  analysisTypes: AnalysisTypeEnum[];
  breakDownDimensions?: BreakDownDimension[];
  categories?: Categories[];
  comparisonPeriods?: AggregationFrequencyEnum[];
  /** A description of the in-app metric. */
  description?: string;
  dimension: string;
  /** The ID of the glossary that the in-app metric belongs to. */
  glossaryId?: string;
  measure: string;
  name: string;
  /** Number of days to offset the execution of analyses for this aggregation period. */
  nextExecutionOffset?: number;
  /** Status of the in app metrics (0 - inactive, 1 - active). */
  status?: StatusEnum;
  /** Indicates whether an increase in the metric is considered neutral (0), positive (1) or negative (-1). */
  upwardIs?: UpwardIsEnum;
};

export type FormattedInAppMetricRecord = {
  /** The ID of the app. */
  appId: string;
  /** The time when the in-app metric was created. */
  creationTime: string;
  definition: FormattedInAppMetricDefinition;
  /** The ID of the in-app metric in the database. */
  id: string;
  links: {
    self?: Href;
  };
  /** Status of the in app metrics (0 - inactive, 1 - active). */
  status: StatusEnum;
  /** The ID of the tenant who owns the in-app metric. */
  tenantId: string;
  /** The time when the in-app metric was last updated. */
  updateTime: string;
  /** The ID of the user who created the in-app-metric. */
  userId: string;
};

/**
 * @example
 * {
 *   href: "http://example.com"
 * }
 */
export type Href = {
  href?: string;
};

/**
 * Search operation type
 * @example
 * "contains"
 */
export type SearchType = "contains" | "exactMatch" | "startsWith" | "endsWith" | "beginningOfWord";

/**
 * Status of the in app metrics (0 - inactive, 1 - active).
 * @example
 * 1
 */
export type StatusEnum = 0 | 1;

/**
 * Whether to select top or bottom values
 * @example
 * "top"
 */
export type TopBottomType = "top" | "bottom";

/**
 * Unit for top/bottom selection
 * @example
 * "numerical"
 */
export type TopBottomUnit = "numerical" | "percentage";

/**
 * Indicates whether an increase in the metric is considered neutral (0), positive (1) or negative (-1).
 * @example
 * 1
 */
export type UpwardIsEnum = 0 | 1 | -1;

/**
 * Whether the value is calculated or fixed
 * @example
 * "fixed"
 */
export type ValueType = "calculated" | "fixed";

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Retrieves Adaptive Cards for in-app metrics. Supports fetching a single card by metric ID or multiple cards by a list of metric IDs. Supports filtering by app IDs, measures, dimensions, categories, breakdown dimensions, analysis types, and triggered time range. When filtering by measures, use the `appIds` parameter to scope results to specific apps, as the same measure expression can exist across multiple apps.
 *
 * When called without any filter parameters, only the top-ranked result per metric is returned. When any filtering parameter is supplied (`metricIds`, `dimensions`, `measures`, `appIds`, `breakdowns`, `analysisTypes`, `comparisonPeriods`, `timeRangeStart`, `timeRangeEnd`), ranking is not applied and all matching results are returned.
 *
 * @param query an object with query parameters
 * @throws GetAdaptiveCardsHttpError
 */
export async function getAdaptiveCards(
  query: {
    /** Filter by analysis type. Repeat the parameter to include multiple types. When this parameter is present, all matching results are returned regardless of ranking. */
    analysisTypes?: AnalysisTypeEnum[];
    /** Filter by app ID(s). Use this to scope results to specific apps. When combined with measures, returns only cards matching BOTH criteria (AND logic). Repeat the parameter to supply multiple app IDs (OR logic within appIds).
     *
     * **Recommendation:** Use consistent parameter order for better HTTP cache hit rates:
     * 1. appIds (if present)
     * 2. measures (if present)
     * 3. other filters
     * 4. pagination (limit, next, prev)
     *
     * **Example - One app, multiple measures:**
     * `?appIds=app-123&measures=Sum(Sales)&measures=Avg(Revenue)&measures=Count(Orders)`
     *
     * **Example - Multiple apps, one measure:**
     * `?appIds=app-retail&appIds=app-wholesale&measures=Sum(Sales)`
     *
     * **Example - Multiple apps, multiple measures:**
     * `?appIds=app-sales&appIds=app-hr&measures=Sum(Revenue)&measures=Avg(Salary)` */
    appIds?: string[];
    /** Filter by one or more breakdown selections in the form `dimension:value` (example `Region:EMEA`). Values are selected from the UI dropdown — not free text — and should match available dimension/value pairs.
     * Repeat the parameter to supply multiple breakdowns; results match any of the provided breakdown pairs. */
    breakdowns?: string[];
    /** Filter by category IDs from the business glossary. Category filtering is not currently applied to the result set. */
    categories?: string[];
    /** Filter by comparison period. Example values: `D`, `W`, `M`, `Q`, `Y`. When this parameter is present, all matching results are returned regardless of ranking. */
    comparisonPeriods?: AggregationFrequencyEnum[];
    /** Filter by dimension(s). Matching is case-sensitive; leading and trailing whitespace will be trimmed. Repeat the parameter to supply multiple dimensions. */
    dimensions?: string[];
    /** The maximum number of resources to return for a request. The limit must be an integer between 1 and 100 (inclusive). */
    limit?: number;
    /** Filter by measure(s). Matching is case-sensitive; leading and trailing whitespace will be trimmed. Repeat the parameter to supply multiple measures. */
    measures?: string[];
    /** Filter by metric ID. Repeat the parameter to supply multiple IDs. When omitted, returns cards for all metrics visible to the caller. */
    metricIds?: string[];
    /** The numeric offset to the next page of resources. Provide either the next or prev parameter, but not both. */
    next?: number;
    /** The numeric offset to the previous page of resources. Provide either the next or prev parameter, but not both. */
    prev?: number;
    /** The field to sort by, with +/- prefix indicating sort order */
    sort?: "creationTime" | "+creationTime" | "-creationTime";
    /** Exclusive upper bound for filtering by analysis result end time. Use ISO 8601 format. */
    timeRangeEnd?: string;
    /** Inclusive lower bound for filtering by analysis result end time. Use ISO 8601 format. */
    timeRangeStart?: string;
    /** Filter by Adaptive Card category. When omitted, cards from all categories are returned. */
    type?: "measures" | "dimensions" | "breakdowns";
  },
  options?: ApiCallOptions,
): Promise<GetAdaptiveCardsHttpResponse> {
  return invokeFetch("analytics/discovery-agent/adaptive-cards", {
    method: "get",
    pathTemplate: "/api/analytics/discovery-agent/adaptive-cards",
    query,
    options,
  });
}

export type GetAdaptiveCardsHttpResponse = {
  data: AdaptiveCards;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetAdaptiveCardsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetAdaptiveCardsHttpResponse>;
};

export type GetAdaptiveCardsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 500;
};

/**
 * Clears the cache for analytics/discovery-agent/adaptive-cards api requests.
 */
export function clearCache() {
  return clearApiCache("analytics/discovery-agent/adaptive-cards");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type AdaptiveCardsAPI = {
  /**
   * Retrieves Adaptive Cards for in-app metrics. Supports fetching a single card by metric ID or multiple cards by a list of metric IDs. Supports filtering by app IDs, measures, dimensions, categories, breakdown dimensions, analysis types, and triggered time range. When filtering by measures, use the `appIds` parameter to scope results to specific apps, as the same measure expression can exist across multiple apps.
   *
   * When called without any filter parameters, only the top-ranked result per metric is returned. When any filtering parameter is supplied (`metricIds`, `dimensions`, `measures`, `appIds`, `breakdowns`, `analysisTypes`, `comparisonPeriods`, `timeRangeStart`, `timeRangeEnd`), ranking is not applied and all matching results are returned.
   *
   * @param query an object with query parameters
   * @throws GetAdaptiveCardsHttpError
   */
  getAdaptiveCards: typeof getAdaptiveCards;
  /**
   * Clears the cache for adaptive-cards api requests.
   */
  clearCache: typeof clearCache;
};

/**
 * Functions for the adaptive-cards api
 */
const adaptiveCardsExport: AdaptiveCardsAPI = { getAdaptiveCards, clearCache };
export default adaptiveCardsExport;
