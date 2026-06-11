import { x as ApiCallOptions } from "../chunks/auth-types-BAiSvIRn.js";
declare namespace apps_d_exports {
  export { AppsAPI, Classification, CmpEngineSpec, Cmpbool, Cmpfloat, CmpfloatWithTimeout, Cmpint, Comparison, Comparisonfields, ComparisonobjMemoryLimit, Comparisonobjresponsetime, Comparisontables, CreateAppEvaluationHttpError, CreateAppEvaluationHttpResponse, DataSourceStatus, DownloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError, DownloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpResponse, DownloadAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError, DownloadAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpResponse, EngineSpec, ErrorItem, ErrorResponse, Evaluation, Evaluations, EvaluatorError, Event, GetAppEvaluationsHttpError, GetAppEvaluationsHttpResponse, GetAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError, GetAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpResponse, GetAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError, GetAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpResponse, Href, NxAppCreatePrivileges, NxAppV2, NxAttributesV2, Objectmetrics, Objectspec, Objecttopspec, OpenAppProgress, OpenAppStep, ReloadInformation, RestoreAppHttpError, RestoreAppHttpResponse, Result, Resultentry, ResultobjMemoryLimit, Resultobjresponsetime, Resultobjsheet, Resultsingle, Sortedcomparisonfields, Sortedcomparisonobjresponsetime, Sortedcomparisontables, StateEnum, UsageEnum, clearCache, createAppEvaluation, appsExport as default, downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME, downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME, getAppEvaluations, getAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME, getAppsEvaluation_FIX_THIS_QUIRKY_NAME, restoreApp };
}
type ErrorItem = {
  /** A unique code for the error. */code: string; /** Additional information about the error. */
  detail?: string; /** A human-readable description of the error. */
  title: string;
};
type ErrorResponse = {
  /** Array of all errors that occurred during the request. */errors?: ErrorItem[];
};
type EvaluatorError = {
  errors?: {
    code?: string;
    status?: number;
    title?: string;
  }[];
};
type NxAppCreatePrivileges = {
  /** Is set to true if the user has privileges to create the resource. */canCreate?: boolean; /** Type of resource. For example, sheet, story, bookmark, etc. */
  resource?: string;
};
/**
 * Application attributes and user privileges.
 */
type NxAppV2 = {
  /** Application attributes. */attributes?: NxAttributesV2; /** Object create privileges. Hints to the client what type of objects the user is allowed to create. */
  create?: NxAppCreatePrivileges[];
  /** Application privileges.
   * Hints to the client what actions the user is allowed to perform.
   * Could be any of:
   * * read
   * * create
   * * update
   * * delete
   * * reload
   * * import
   * * publish
   * * duplicate
   * * export
   * * exportdata
   * * change_owner
   * * change_space */
  privileges?: string[];
};
/**
 * App attributes.
 */
type NxAttributesV2 = {
  /** The date and time when the app was created. */createdAt?: string; /** App description. */
  description?: string; /** If set to true, the app has section access configured. */
  hasSectionAccess?: boolean; /** The App ID. */
  id?: string; /** App name. */
  name?: string; /** The Origin App ID for promoted apps. */
  originAppId?: string; /** Identifier of the app owner. */
  ownerId?: string; /** The date and time when the app was promoted, empty if not promoted. Use to determine if an app is promoted in Qlik Cloud. */
  promotedAt?: string; /** Date and time of the last reload of the app. */
  reloadedAt?: string; /** App resource type. */
  resourceType?: string; /** The ID of the app's space. */
  spaceId?: string;
  /** Promotion state of the app.
   * Promotion state of an app.
   * One of:
   * * EMPTY
   * * PROMOTED
   * * DISTRIBUTED */
  state?: string & StateEnum; /** The date and time when the app was modified. */
  updatedAt?: string;
  /** Indicates the use for the app.
   *
   * One of:
   * * ANALYTICS
   * * DATA_PREPARATION
   * * DATAFLOW_PREP
   * * SINGLE_TABLE_PREP
   * * DIRECT_QUERY_MODE */
  usage?: string & UsageEnum;
};
type StateEnum = string | string | string;
type UsageEnum = string | string | string | string | string;
type Classification = {
  absoluteDiff?: number;
  diff?: number;
  trend?: string;
};
type CmpEngineSpec = {
  baseline?: EngineSpec;
  changed?: boolean;
  comparison?: EngineSpec;
};
type Cmpbool = Classification & {
  baseline?: boolean;
  comparison?: boolean;
};
type Cmpfloat = Classification & {
  baseline?: number;
  comparison?: number;
};
type CmpfloatWithTimeout = Cmpfloat & {
  baselineTimeoutStatusCode?: string;
  comparisonTimeoutStatusCode?: string;
};
type Cmpint = Classification & {
  baseline?: number;
  comparison?: number;
};
type Comparison = {
  documentSizeMiB?: Cmpfloat;
  engine?: CmpEngineSpec;
  hasSectionAccess?: Cmpbool;
  objMemoryLimit?: ComparisonobjMemoryLimit;
  objNoCache?: Sortedcomparisonobjresponsetime;
  objSingleThreaded?: Sortedcomparisonobjresponsetime;
  objSlowCached?: Sortedcomparisonobjresponsetime;
  objSlowUncached?: Sortedcomparisonobjresponsetime;
  objectCount?: Cmpint;
  rowCount?: Cmpint;
  sheetCount?: Cmpint;
  sheetsCached?: Sortedcomparisonobjresponsetime;
  sheetsUncached?: Sortedcomparisonobjresponsetime;
  topFieldsByBytes?: Sortedcomparisonfields;
  topTablesByBytes?: Sortedcomparisontables;
};
type Comparisonfields = {
  byteSize?: Cmpint;
  cardinal?: Cmpint;
  dataSourceStatus?: DataSourceStatus;
  isSystem?: boolean;
  name?: string;
  totalCount?: Cmpint;
}[];
type ComparisonobjMemoryLimit = (Objectspec & {
  baselineMemoryLimitStatusCode?: string;
  comparisonMemoryLimitStatusCode?: string;
  dataSourceStatus?: DataSourceStatus;
})[];
type Comparisonobjresponsetime = (Objectspec & {
  dataSourceStatus?: DataSourceStatus;
  responseTimeSeconds1?: CmpfloatWithTimeout;
  responseTimeSeconds2?: CmpfloatWithTimeout;
})[];
type Comparisontables = {
  byteSize?: Cmpint;
  dataSourceStatus?: DataSourceStatus;
  isSystem?: boolean;
  name?: string;
  noOfRows?: Cmpint;
}[];
/**
 * @example
 * "full"
 */
type DataSourceStatus = "full" | "none" | "baselinemissing" | "comparisonmissing";
type EngineSpec = {
  shortName?: string;
};
type Evaluation = {
  appId?: string;
  appItemId?: string;
  appName?: string;
  details?: {
    concurrentReload?: boolean;
    engineHasCache?: boolean;
    errors?: string[];
    objectMetrics?: Record<string, Resultentry>;
    warnings?: string[];
  };
  ended?: string;
  engine?: EngineSpec;
  events?: Event[];
  id?: string;
  openAppProgress?: OpenAppProgress;
  reloadInformation?: ReloadInformation;
  result?: Result;
  started?: string;
  status?: string;
  tenantId?: string;
  timestamp?: string;
  version?: number;
};
type Evaluations = {
  data?: Evaluation[];
  links?: {
    next?: {
      href?: Href;
    };
    prev?: {
      href?: Href;
    };
  };
};
type Event = {
  errorCode?: string;
  message?: string;
  objectId?: string;
  objectTitle?: string;
  objectType?: string;
  objectVisualization?: string;
  severity?: string;
  sheetId?: string;
  sheetTitle?: string;
};
/**
 * @example
 * "/analytics/apps/evaluations/appId=a84c22cf-31e5-41fe-9e8f-544b85513484&prev=5f5201908b3fc5fc132dbd35"
 */
type Href = string;
type Objectmetrics = {
  cpuQuotients?: number[];
  cpuSeconds?: number[];
  errorCode?: string;
  responseTimeSeconds?: number;
};
type Objectspec = {
  id?: string;
  objectType?: string;
  sheetId?: string;
  sheetTitle?: string;
  title?: string;
};
type Objecttopspec = {
  byteSize?: number;
  isSystem?: boolean;
  name?: string;
};
type OpenAppProgress = {
  messages?: {
    message?: string;
    timeSinceStartMilliseconds?: string;
  }[];
};
type OpenAppStep = {
  durationMilliseconds?: number;
  name?: string;
};
type ReloadInformation = {
  amountofcardinalfieldvalues?: number;
  amountoffields?: number;
  amountoffieldvalues?: number;
  amountofrows?: number;
  amountoftables?: number;
  hassectionaccess?: boolean;
  reloadmeta?: {
    cpuspent?: number;
    peakmemorybytes?: number;
  };
  staticbytesize?: number;
};
type Result = {
  documentSizeMiB?: number;
  hasSectionAccess?: boolean;
  objMemoryLimit?: ResultobjMemoryLimit[];
  objNoCache?: Resultobjresponsetime[];
  objSingleThreaded?: Resultsingle[];
  objSlowCached?: Resultobjresponsetime[];
  objSlowUncached?: Resultobjresponsetime[];
  objectCount?: number;
  openApp?: {
    steps?: OpenAppStep[];
    totalDurationMilliseconds?: number;
  };
  rowCount?: number;
  sheetCount?: number;
  sheetsCached?: Resultobjsheet[];
  sheetsUncached?: Resultobjsheet[];
  topFieldsByBytes?: Objecttopspec[];
  topTablesByBytes?: Objecttopspec[];
};
type Resultentry = Objectspec & {
  passes?: Objectmetrics[];
};
type ResultobjMemoryLimit = Objectspec & {
  memoryLimitStatusCode?: string;
};
type Resultobjresponsetime = Objectspec & {
  responseTimeSeconds?: number;
  timeoutStatusCode?: string;
};
type Resultobjsheet = {
  objectCount?: number;
  sheet?: Resultobjresponsetime;
  sheetObjects?: Resultobjresponsetime[];
};
type Resultsingle = Objectspec & {
  cpuQuotients?: number[];
  responseTimeSeconds?: number;
};
type Sortedcomparisonfields = {
  absoluteDiffAsc?: Comparisonfields;
  absoluteDiffDesc?: Comparisonfields;
  dataSourceStatus?: DataSourceStatus;
  list?: Comparisonfields;
  relativeDiffAsc?: Comparisonfields;
  relativeDiffDesc?: Comparisonfields;
};
type Sortedcomparisonobjresponsetime = {
  absoluteDiffAsc?: Comparisonobjresponsetime;
  absoluteDiffDesc?: Comparisonobjresponsetime;
  dataSourceStatus?: DataSourceStatus;
  list?: Comparisonobjresponsetime;
  relativeDiffAsc?: Comparisonobjresponsetime;
  relativeDiffDesc?: Comparisonobjresponsetime;
};
type Sortedcomparisontables = {
  absoluteDiffAsc?: Comparisontables;
  absoluteDiffDesc?: Comparisontables;
  dataSourceStatus?: DataSourceStatus;
  list?: Comparisontables;
  relativeDiffAsc?: Comparisontables;
  relativeDiffDesc?: Comparisontables;
};
/**
 * Compares exactly two app evaluations, a baseline and a comparison, returning a structured
 * diff of performance metrics between them. Use this operation to detect regressions
 * after app changes or engine upgrades. Both evaluations must belong to the same app.
 *
 * @param baselineId The unique identifier of the baseline app evaluation.
 * @param comparisonId The unique identifier of the comparison app evaluation.
 * @param query an object with query parameters
 * @throws GetAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME(baselineId: string, comparisonId: string, query: {
  /** When `true`, includes all comparison entries regardless of significance. */all?: boolean; /** The output format for the response. Accepts `json` or `xml`. */
  format?: string;
}, options?: ApiCallOptions): Promise<GetAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: Comparison;
  headers: Headers;
  status: 200;
};
type GetAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: EvaluatorError;
  headers: Headers;
  status: 404 | 500;
};
/**
 * Downloads a comparison log for the two specified app evaluations (baseline and comparison),
 * defaulting to XML format. Use the `Accept` header to request JSON output instead.
 * Both evaluations must belong to the same app.
 * @example
 * downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME(
 *   "abcdefghijklmnopq",
 *   "abcdefghijklmnopq"
 * )
 *
 * @param baselineId The unique identifier of the baseline app evaluation.
 * @param comparisonId The unique identifier of the comparison app evaluation.
 * @throws DownloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME(baselineId: string, comparisonId: string, options?: ApiCallOptions): Promise<DownloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type DownloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: Comparison;
  headers: Headers;
  status: 200;
};
type DownloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: EvaluatorError;
  headers: Headers;
  status: 404 | 500;
};
/**
 * Retrieves a single app evaluation by its unique identifier. Use the `all` parameter
 * to include full evaluation details in the response.
 *
 * @param id The unique identifier of the app evaluation to retrieve.
 * @param query an object with query parameters
 * @throws GetAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getAppsEvaluation_FIX_THIS_QUIRKY_NAME(id: string, query: {
  /** When `true`, includes full app evaluation details in the response. */all?: boolean; /** The output format for the response. Accepts `json` or `xml`. */
  format?: string;
}, options?: ApiCallOptions): Promise<GetAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: Evaluation;
  headers: Headers;
  status: 200;
};
type GetAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: EvaluatorError;
  headers: Headers;
  status: 404 | 500;
};
/**
 * Downloads the evaluation log for the specified app evaluation, defaulting to XML
 * format. Use the `Accept` header to request JSON output instead.
 * @example
 * downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME(
 *   "abcdefghijklmnopq"
 * )
 *
 * @param id The unique identifier of the app evaluation to download.
 * @throws DownloadAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME(id: string, options?: ApiCallOptions): Promise<DownloadAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type DownloadAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: Evaluation;
  headers: Headers;
  status: 200;
};
type DownloadAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: EvaluatorError;
  headers: Headers;
  status: 404 | 500;
};
/**
 * Restores a soft-deleted Qlik Cloud Analytics application to the same space with the same app ID, retaining the properties it had at the time of deletion.
 * This operation is available to the app owner and Tenant Admins. The app owner can restore the app only if the original space still exists and they still have delete permission in the space; otherwise, a 403 Forbidden error is returned.
 * Associated resources such as data alerts, subscriptions, collections, notes, and tags are deleted when the app is deleted and cannot be restored.
 *
 * @param appId Identifier of the app.
 * @throws RestoreAppHttpError
 */
declare function restoreApp(appId: string, options?: ApiCallOptions): Promise<RestoreAppHttpResponse>;
type RestoreAppHttpResponse = {
  data: NxAppV2;
  headers: Headers;
  status: 200;
};
type RestoreAppHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404;
};
/**
 * Returns a paginated list of historical evaluations for the specified app. Use
 * the `next` and `prev` cursor values from the response links to navigate through
 * pages of results.
 *
 * @param guid The unique identifier of the app.
 * @param query an object with query parameters
 * @throws GetAppEvaluationsHttpError
 */
declare function getAppEvaluations(guid: string, query: {
  /** When `true`, includes full evaluation details in each result. When `false`, detail fields are omitted. */all?: boolean; /** When `true`, adds file download headers to the response. */
  fileMode?: boolean; /** The output format for the response. Accepts `json` or `xml`. */
  format?: string; /** Maximum number of results to return per page. */
  limit?: number; /** A cursor token for fetching the next page of results. */
  next?: string; /** A cursor token for fetching the previous page of results. */
  prev?: string; /** The field to sort results by. Prefix with `-` for descending order or `+` for ascending. */
  sort?: "started" | "+started" | "-started";
}, options?: ApiCallOptions): Promise<GetAppEvaluationsHttpResponse>;
type GetAppEvaluationsHttpResponse = {
  data: Evaluations;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetAppEvaluationsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetAppEvaluationsHttpResponse>;
};
type GetAppEvaluationsHttpError = {
  data: EvaluatorError;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};
/**
 * Queues a performance and scalability evaluation for the specified app, scheduling
 * it for execution by the evaluation engine. The evaluation measures object response
 * times, CPU usage, document size, and data model metrics. Once queued, use the
 * returned `id` with the retrieval operations to poll for results.
 * @example
 * createAppEvaluation(
 *   "abcdefghijklmnopq"
 * )
 *
 * @param guid The unique identifier of the app to evaluate.
 * @throws CreateAppEvaluationHttpError
 */
declare function createAppEvaluation(guid: string, options?: ApiCallOptions): Promise<CreateAppEvaluationHttpResponse>;
type CreateAppEvaluationHttpResponse = {
  data: Evaluation;
  headers: Headers;
  status: 201;
};
type CreateAppEvaluationHttpError = {
  data: EvaluatorError;
  headers: Headers;
  status: 400 | 403 | 404 | 429 | 500;
};
/**
 * Clears the cache for analytics/apps api requests.
 */
declare function clearCache(): void;
type AppsAPI = {
  /**
   * Compares exactly two app evaluations, a baseline and a comparison, returning a structured
   * diff of performance metrics between them. Use this operation to detect regressions
   * after app changes or engine upgrades. Both evaluations must belong to the same app.
   *
   * @param baselineId The unique identifier of the baseline app evaluation.
   * @param comparisonId The unique identifier of the comparison app evaluation.
   * @param query an object with query parameters
   * @throws GetAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME: typeof getAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME;
  /**
   * Downloads a comparison log for the two specified app evaluations (baseline and comparison),
   * defaulting to XML format. Use the `Accept` header to request JSON output instead.
   * Both evaluations must belong to the same app.
   * @example
   * downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME(
   *   "abcdefghijklmnopq",
   *   "abcdefghijklmnopq"
   * )
   *
   * @param baselineId The unique identifier of the baseline app evaluation.
   * @param comparisonId The unique identifier of the comparison app evaluation.
   * @throws DownloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError
   */
  downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME: typeof downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME;
  /**
   * Retrieves a single app evaluation by its unique identifier. Use the `all` parameter
   * to include full evaluation details in the response.
   *
   * @param id The unique identifier of the app evaluation to retrieve.
   * @param query an object with query parameters
   * @throws GetAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getAppsEvaluation_FIX_THIS_QUIRKY_NAME: typeof getAppsEvaluation_FIX_THIS_QUIRKY_NAME;
  /**
   * Downloads the evaluation log for the specified app evaluation, defaulting to XML
   * format. Use the `Accept` header to request JSON output instead.
   * @example
   * downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME(
   *   "abcdefghijklmnopq"
   * )
   *
   * @param id The unique identifier of the app evaluation to download.
   * @throws DownloadAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError
   */
  downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME: typeof downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME;
  /**
   * Restores a soft-deleted Qlik Cloud Analytics application to the same space with the same app ID, retaining the properties it had at the time of deletion.
   * This operation is available to the app owner and Tenant Admins. The app owner can restore the app only if the original space still exists and they still have delete permission in the space; otherwise, a 403 Forbidden error is returned.
   * Associated resources such as data alerts, subscriptions, collections, notes, and tags are deleted when the app is deleted and cannot be restored.
   *
   * @param appId Identifier of the app.
   * @throws RestoreAppHttpError
   */
  restoreApp: typeof restoreApp;
  /**
   * Returns a paginated list of historical evaluations for the specified app. Use
   * the `next` and `prev` cursor values from the response links to navigate through
   * pages of results.
   *
   * @param guid The unique identifier of the app.
   * @param query an object with query parameters
   * @throws GetAppEvaluationsHttpError
   */
  getAppEvaluations: typeof getAppEvaluations;
  /**
   * Queues a performance and scalability evaluation for the specified app, scheduling
   * it for execution by the evaluation engine. The evaluation measures object response
   * times, CPU usage, document size, and data model metrics. Once queued, use the
   * returned `id` with the retrieval operations to poll for results.
   * @example
   * createAppEvaluation(
   *   "abcdefghijklmnopq"
   * )
   *
   * @param guid The unique identifier of the app to evaluate.
   * @throws CreateAppEvaluationHttpError
   */
  createAppEvaluation: typeof createAppEvaluation;
  /**
   * Clears the cache for apps api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the apps api
 */
declare const appsExport: AppsAPI;
//#endregion
export { AppsAPI, Classification, CmpEngineSpec, Cmpbool, Cmpfloat, CmpfloatWithTimeout, Cmpint, Comparison, Comparisonfields, ComparisonobjMemoryLimit, Comparisonobjresponsetime, Comparisontables, CreateAppEvaluationHttpError, CreateAppEvaluationHttpResponse, DataSourceStatus, DownloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError, DownloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpResponse, DownloadAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError, DownloadAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpResponse, EngineSpec, ErrorItem, ErrorResponse, Evaluation, Evaluations, EvaluatorError, Event, GetAppEvaluationsHttpError, GetAppEvaluationsHttpResponse, GetAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError, GetAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpResponse, GetAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError, GetAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpResponse, Href, NxAppCreatePrivileges, NxAppV2, NxAttributesV2, Objectmetrics, Objectspec, Objecttopspec, OpenAppProgress, OpenAppStep, ReloadInformation, RestoreAppHttpError, RestoreAppHttpResponse, Result, Resultentry, ResultobjMemoryLimit, Resultobjresponsetime, Resultobjsheet, Resultsingle, Sortedcomparisonfields, Sortedcomparisonobjresponsetime, Sortedcomparisontables, StateEnum, UsageEnum, clearCache, createAppEvaluation, appsExport as default, downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME, downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME, getAppEvaluations, getAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME, getAppsEvaluation_FIX_THIS_QUIRKY_NAME, restoreApp, apps_d_exports as t };