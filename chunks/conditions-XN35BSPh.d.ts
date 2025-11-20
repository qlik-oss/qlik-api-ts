import { y as ApiCallOptions } from "./auth-types-CHOUViJI.js";

//#region src/public/rest/conditions.d.ts
type APISettings = {
  /** Whether API endpoints for condition manager are enabled */
  "enable-conditions": boolean;
  /** These persisted api settings are only available for this tenant. Extracted from request JWT. */
  readonly tenantId?: string;
};
type APISettingsUpload = {
  /** Whether API endpoints for condition manager are enabled */
  "enable-conditions": boolean;
};
type CausalEvent = {
  data?: CausalEventData;
  /** the event id from eventing */
  eventID?: string;
  extensions?: CausalEventExtensions;
  manualTrigger?: boolean;
  /** the manual trigger id from eventing if present */
  manualTriggerID?: string;
};
type CausalEventData = {
  /** the event id from eventing service. */
  eventID?: string;
  /** The time of the last reload */
  lastReloadTime?: string;
};
type CausalEventExtensions = {
  sessionID?: string;
  tenantID?: string;
  userID?: string;
};
/**
 * A condition made up of other conditions
 */
type CompoundCondition = {
  /** A base condition */
  conditionBase?: ConditionBase;
  /** Condition data */
  data?: CompoundConditionData;
};
/**
 * Condition data
 */
type CompoundConditionData = {
  /** Array of condition ids */
  conditions?: string[];
  /** Boolean expression made up of variable names defined from the conditions section */
  expression?: string;
  /** History properties */
  history?: HistoryProperties;
};
/**
 * only one of compoundCondition or dataCondition should be set
 */
type Condition = {
  /** A condition made up of other conditions */
  compoundCondition?: CompoundCondition;
  /** A condition based on data within an app */
  dataCondition?: DataCondition;
  /** UserID of the condition owner */
  ownerId?: string;
  /** The tenant id */
  tenantId?: string;
  /** Indicates the condition type */
  type: "compound" | "data";
};
/**
 * A base condition
 */
type ConditionBase = {
  /** The id of the app the condition is evaluated against */
  appId?: string;
  /** The bookmark corresponding to the selection state to apply to the app at evaluation time */
  bookmarkId?: string;
  /** When the resource was created */
  readonly created?: string;
  /** The id of the user which created the condition */
  readonly createdById?: string;
  /** Description of the condition */
  description?: string;
  /** The unique id for the resource */
  readonly id?: string;
  /** The time of the last reload, if the scan is triggered by a reload. If exists and value does not match app's last reload time, the evaluation will fail. */
  readonly lastReloadTime?: string;
  /** The id of the user the user which owns the condition */
  readonly ownerId?: string;
  /** The tenant id */
  readonly tenantId?: string;
  /** Indicates the condition type */
  type?: "compound" | "data";
  /** When the resource was last updated */
  readonly updated?: string;
};
/**
 * only one of compoundCondition or dataCondition should be set
 */
type ConditionCreateRequest = {
  /** A condition made up of other conditions */
  compoundCondition?: CompoundCondition;
  /** A condition based on data within an app */
  dataCondition?: DataConditionCreateRequest;
  /** Indicates the condition type */
  type: "compound" | "data";
};
/**
 * List of returned dimensions
 */
type ConditionDimensions = ConditionDimensionsInner[];
type ConditionDimensionsInner = {
  /** Field referred to the dimension where the selection is made. This may be used to generate deep links. */
  field?: string;
  /** Refers to a dimension stored in the library */
  qLibraryId?: string;
  /** Dimension title */
  title?: string;
};
/**
 * List of header labels
 * @example
 * [
 *   "sumnum"
 * ]
 */
type ConditionHeaders = string[];
/**
 * List of returned measures
 */
type ConditionMeasures = ConditionMeasuresInner[];
type ConditionMeasuresInner = {
  /** Refers to a measure stored in the library */
  qLibraryId?: string;
  /** Format of the field */
  qNumFormat?: unknown;
  /** Measure title */
  title?: string;
};
/**
 * A JSON Patch document as defined in https://datatracker.ietf.org/doc/html/rfc6902.
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/compoundCondition/conditionBase/ownerId"
 *   },
 *   {
 *     op: "replace",
 *     path: "/dataCondition/conditionBase/description"
 *   },
 *   {
 *     op: "remove",
 *     path: "/compoundCondition/data/conditions/0"
 *   },
 *   {
 *     op: "replace",
 *     path: "/compoundCondition//data/expression"
 *   },
 *   {
 *     op: "replace",
 *     path: "/dataCondition/conditionData/measure"
 *   }
 * ]
 */
type ConditionPatch = ConditionPatchInner[];
type ConditionPatchInner = {
  /** The operation to be performed. */
  op: "replace" | "remove" | "add";
  /** The path for the given resource field to patch. */
  path: string;
  /** The value to be used for this operation. */
  value?: unknown;
};
type ConditionResponse = {
  /** only one of compoundCondition or dataCondition should be set */
  condition?: Condition;
  errors?: Errors;
};
type CreateEvaluationRequest = {
  /** The id of the alerting task the condition and evaluation is part of */
  alertId?: string;
  causalEvent: CausalEvent;
  /** Extra context information to carry through to the result if any */
  contextId: string;
};
type CreateEvaluationResponse = {
  /** Extra context information to carry through to the result if any */
  contextId?: string;
  errors?: Errors;
  /** Extra context information to carry through to the result if any */
  evaluationId?: string;
};
/**
 * A condition based on data within an app
 */
type DataCondition = {
  /** A base condition */
  conditionBase?: ConditionBase;
  /** List of parameters specific to data condition are available in DCE and will be passed as is to DCE as per the API docs of data-condition-evaluator */
  conditionData?: unknown;
  /** List of returned dimensions */
  dimensions?: ConditionDimensions;
  /** List of header labels */
  headers?: ConditionHeaders;
  /** History properties */
  history?: HistoryProperties;
  /** List of returned measures */
  measures?: ConditionMeasures;
  /** List of fields according to the bookmark definition */
  selections?: Selections;
};
/**
 * A condition based on data within an app
 */
type DataConditionCreateRequest = {
  /** A base condition */
  conditionBase?: ConditionBase;
  /** List of parameters specific to data condition are available in DCE and will be passed as is to DCE as per the API docs of data-condition-evaluator */
  conditionData?: unknown;
  /** List of returned dimensions */
  dimensions?: ConditionDimensions;
  /** List of header labels */
  headers?: ConditionHeaders;
  /** History properties */
  history?: HistoryProperties;
  /** List of returned measures */
  measures?: ConditionMeasures;
  /** List of fields according to the bookmark definition */
  selections?: Selections;
};
type Error = {
  /** Error code specific to condition manager. */
  readonly code?: string;
  /** Error cause. */
  readonly detail?: string;
  meta?: unknown;
  /** Error title. */
  readonly title?: string;
};
/**
 * @example
 * {
 *   errors: [
 *     {
 *       code: "HTTP-123",
 *       title: "short error message"
 *     }
 *   ],
 *   traceId: "7975401f3954aa47"
 * }
 */
type ErrorResponse = {
  /** Array of errors */
  errors?: SingleErrorResponse[];
  /** trace id */
  traceId?: string;
};
type Errors = Error[];
type Evaluation = {
  /** The id of the alerting task the condition and evaluation is part of */
  alertId?: string;
  /** internal identifier used when migrating keys */
  byokMigrationId?: string;
  /** Representation of the event that caused the condition to be evaluated if one was included on when the evaluation was triggered */
  causalEvent?: unknown;
  /** only one of compoundCondition or dataCondition should be set */
  condition?: Condition;
  /** The unique id of the associated condition */
  readonly conditionId?: string;
  /** Extra context information to carry through to the result if one was included on when the evaluation was triggered */
  contextId?: string;
  /** @deprecated
   * The unique id for the resource given from Data Condition Evaluator. */
  readonly dataConditionEvaluatorId?: string;
  /** The time the evaluation ended */
  readonly endTime?: string;
  errors?: EvaluationErrors;
  /** The unique id for the resource */
  readonly id?: string;
  /** userId of user being impersonated to evaluate the condition */
  readonly ownerId?: string;
  /** The time when the reload was completed in Engine */
  readonly reloadEndTime?: string;
  /** The number of times we have attempted to remove this evaluation data-file */
  removalErrorCount?: number;
  /** The final result of the evalution */
  readonly result?: boolean;
  /** Condition type specific result, one of dataResult or compoundResult */
  resultData?: unknown;
  /** number of retries sent to DCE */
  readonly retries?: number;
  /** what kind of retry policy this evaluation has */
  retryPolicy?: "NONE" | "TOO_MANY_REQUESTS" | "GENERIC_ERROR";
  /** The time the evaluation started */
  readonly startTime?: string;
  /** The status of the evaluation execution */
  readonly status?: "RUNNING" | "FAILED" | "FINISHED" | "DELETING";
  /** The tenant id */
  readonly tenantId?: string;
};
type EvaluationError = {
  /** Error code specific to condition smanager. */
  readonly code?: string;
  meta?: EvaluationErrorMeta;
  /** Error status. */
  readonly status?: unknown;
  /** Error title. */
  readonly title?: string;
};
type EvaluationErrorMeta = {
  /** defines whether an error is recoverable or not */
  fatal?: boolean;
};
type EvaluationErrors = EvaluationError[];
/**
 * Get response returns the evaluation and condition associated
 */
type GetEvaluationResponse = {
  /** only one of compoundCondition or dataCondition should be set */
  condition?: Condition;
  evaluation?: Evaluation;
};
/**
 * History properties
 */
type HistoryProperties = {
  /** Is history enabled */
  enabled?: boolean;
};
type PreviewEvaluation = {
  /** The time the evaluation ended */
  readonly endTime?: string;
  /** userId of user being impersonated to evaluate the condition */
  readonly ownerId?: string;
  /** URL to download the condition results */
  resultUrl?: string;
  /** The time the evaluation started */
  readonly startTime?: string;
  /** The tenant id */
  readonly tenantId?: string;
};
type PreviewResponse = {
  /** When the resource was created */
  readonly previewId?: string;
};
type PreviewStatusResponse = {
  /** only one of compoundCondition or dataCondition should be set */
  condition?: Condition;
  errors?: Errors;
  evaluation?: PreviewEvaluation;
  /** When the resource was created */
  readonly previewId?: string;
  readonly status?: "ACCEPTED" | "FAILED" | "RUNNING" | "SUCCESSFUL";
};
/**
 * List of fields according to the bookmark definition
 */
type Selections = SelectionsInner[];
type SelectionsInner = {
  /** The count */
  count?: number;
  /** Field name */
  field?: string;
  /** Array of selected */
  selectedSummary?: string[];
};
type SingleErrorResponse = {
  /** Error code specific to condition manager. */
  readonly code?: string;
  /** Error cause. */
  readonly detail?: string;
  /** meta properties for an error. */
  meta?: unknown;
  /** Error title. */
  readonly title?: string;
};
/**
 * Creates a new condition.
 *
 * @param body an object with the body content
 * @throws CreateConditionHttpError
 */
declare function createCondition(body: ConditionCreateRequest, options?: ApiCallOptions): Promise<CreateConditionHttpResponse>;
type CreateConditionHttpResponse = {
  data: ConditionResponse;
  headers: Headers;
  status: 201;
};
type CreateConditionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Create condition preview request.
 *
 * @param body an object with the body content
 * @throws CreateConditionPreviewHttpError
 */
declare function createConditionPreview(body: ConditionCreateRequest, options?: ApiCallOptions): Promise<CreateConditionPreviewHttpResponse>;
type CreateConditionPreviewHttpResponse = {
  data: PreviewResponse;
  headers: Headers;
  status: 201;
};
type CreateConditionPreviewHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Get condition preview response.
 *
 * @param id The id of the condition
 * @throws GetConditionPreviewHttpError
 */
declare function getConditionPreview(id: string, options?: ApiCallOptions): Promise<GetConditionPreviewHttpResponse>;
type GetConditionPreviewHttpResponse = {
  data: PreviewStatusResponse;
  headers: Headers;
  status: 200;
};
type GetConditionPreviewHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Retrieves condition manager settings
 *
 * @throws GetConditionsSettingsHttpError
 */
declare function getConditionsSettings(options?: ApiCallOptions): Promise<GetConditionsSettingsHttpResponse>;
type GetConditionsSettingsHttpResponse = {
  data: APISettings;
  headers: Headers;
  status: 200;
};
type GetConditionsSettingsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Updates API configuration. Accessible only by tenant admins.
 *
 * @param body an object with the body content
 * @throws SetConditionsSettingsHttpError
 */
declare function setConditionsSettings(body: APISettingsUpload, options?: ApiCallOptions): Promise<SetConditionsSettingsHttpResponse>;
type SetConditionsSettingsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type SetConditionsSettingsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Delete the condition
 *
 * @param id The id of the condition
 * @throws DeleteConditionHttpError
 */
declare function deleteCondition(id: string, options?: ApiCallOptions): Promise<DeleteConditionHttpResponse>;
type DeleteConditionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteConditionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Retrieve a specific condition by id.
 *
 * @param id The id of the condition
 * @throws GetConditionHttpError
 */
declare function getCondition(id: string, options?: ApiCallOptions): Promise<GetConditionHttpResponse>;
type GetConditionHttpResponse = {
  data: Condition;
  headers: Headers;
  status: 200;
};
type GetConditionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Patch values in the condition
 *
 * @param id The id of the condition
 * @param body an object with the body content
 * @throws PatchConditionHttpError
 */
declare function patchCondition(id: string, body: ConditionPatch, options?: ApiCallOptions): Promise<PatchConditionHttpResponse>;
type PatchConditionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchConditionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Executes the condition
 *
 * @param id The id of the condition
 * @param body an object with the body content
 * @throws CreateConditionEvaluationHttpError
 */
declare function createConditionEvaluation(id: string, body: CreateEvaluationRequest, options?: ApiCallOptions): Promise<CreateConditionEvaluationHttpResponse>;
type CreateConditionEvaluationHttpResponse = {
  data: CreateEvaluationResponse;
  headers: Headers;
  status: 201;
};
type CreateConditionEvaluationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Delete an Evaluation
 *
 * @param id The id of the condition
 * @param evaluationId The id of the evaluation
 * @throws DeleteConditionEvaluationHttpError
 */
declare function deleteConditionEvaluation(id: string, evaluationId: string, options?: ApiCallOptions): Promise<DeleteConditionEvaluationHttpResponse>;
type DeleteConditionEvaluationHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteConditionEvaluationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Get an Evaluation
 *
 * @param id The id of the condition
 * @param evaluationId The id of the evaluation
 * @throws GetConditionEvaluationHttpError
 */
declare function getConditionEvaluation(id: string, evaluationId: string, options?: ApiCallOptions): Promise<GetConditionEvaluationHttpResponse>;
type GetConditionEvaluationHttpResponse = {
  data: GetEvaluationResponse;
  headers: Headers;
  status: 200;
};
type GetConditionEvaluationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Clears the cache for conditions api requests.
 */
declare function clearCache(): void;
type ConditionsAPI = {
  /**
   * Creates a new condition.
   *
   * @param body an object with the body content
   * @throws CreateConditionHttpError
   */
  createCondition: typeof createCondition;
  /**
   * Create condition preview request.
   *
   * @param body an object with the body content
   * @throws CreateConditionPreviewHttpError
   */
  createConditionPreview: typeof createConditionPreview;
  /**
   * Get condition preview response.
   *
   * @param id The id of the condition
   * @throws GetConditionPreviewHttpError
   */
  getConditionPreview: typeof getConditionPreview;
  /**
   * Retrieves condition manager settings
   *
   * @throws GetConditionsSettingsHttpError
   */
  getConditionsSettings: typeof getConditionsSettings;
  /**
   * Updates API configuration. Accessible only by tenant admins.
   *
   * @param body an object with the body content
   * @throws SetConditionsSettingsHttpError
   */
  setConditionsSettings: typeof setConditionsSettings;
  /**
   * Delete the condition
   *
   * @param id The id of the condition
   * @throws DeleteConditionHttpError
   */
  deleteCondition: typeof deleteCondition;
  /**
   * Retrieve a specific condition by id.
   *
   * @param id The id of the condition
   * @throws GetConditionHttpError
   */
  getCondition: typeof getCondition;
  /**
   * Patch values in the condition
   *
   * @param id The id of the condition
   * @param body an object with the body content
   * @throws PatchConditionHttpError
   */
  patchCondition: typeof patchCondition;
  /**
   * Executes the condition
   *
   * @param id The id of the condition
   * @param body an object with the body content
   * @throws CreateConditionEvaluationHttpError
   */
  createConditionEvaluation: typeof createConditionEvaluation;
  /**
   * Delete an Evaluation
   *
   * @param id The id of the condition
   * @param evaluationId The id of the evaluation
   * @throws DeleteConditionEvaluationHttpError
   */
  deleteConditionEvaluation: typeof deleteConditionEvaluation;
  /**
   * Get an Evaluation
   *
   * @param id The id of the condition
   * @param evaluationId The id of the evaluation
   * @throws GetConditionEvaluationHttpError
   */
  getConditionEvaluation: typeof getConditionEvaluation;
  /**
   * Clears the cache for conditions api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the conditions api
 */
declare const conditionsExport: ConditionsAPI;
//#endregion
export { PreviewEvaluation as $, DeleteConditionEvaluationHttpError as A, EvaluationErrors as B, CreateConditionHttpResponse as C, CreateEvaluationResponse as D, CreateEvaluationRequest as E, ErrorResponse as F, GetConditionPreviewHttpError as G, GetConditionEvaluationHttpResponse as H, Errors as I, GetConditionsSettingsHttpResponse as J, GetConditionPreviewHttpResponse as K, Evaluation as L, DeleteConditionHttpError as M, DeleteConditionHttpResponse as N, DataCondition as O, Error as P, PatchConditionHttpResponse as Q, EvaluationError as R, CreateConditionHttpError as S, CreateConditionPreviewHttpResponse as T, GetConditionHttpError as U, GetConditionEvaluationHttpError as V, GetConditionHttpResponse as W, HistoryProperties as X, GetEvaluationResponse as Y, PatchConditionHttpError as Z, ConditionPatchInner as _, getConditionsSettings as _t, CausalEventExtensions as a, SetConditionsSettingsHttpResponse as at, CreateConditionEvaluationHttpError as b, Condition as c, conditionsExport as ct, ConditionDimensions as d, createConditionPreview as dt, PreviewResponse as et, ConditionDimensionsInner as f, deleteCondition as ft, ConditionPatch as g, getConditionPreview as gt, ConditionMeasuresInner as h, getConditionEvaluation as ht, CausalEventData as i, SetConditionsSettingsHttpError as it, DeleteConditionEvaluationHttpResponse as j, DataConditionCreateRequest as k, ConditionBase as l, createCondition as lt, ConditionMeasures as m, getCondition as mt, APISettingsUpload as n, Selections as nt, CompoundCondition as o, SingleErrorResponse as ot, ConditionHeaders as p, deleteConditionEvaluation as pt, GetConditionsSettingsHttpError as q, CausalEvent as r, SelectionsInner as rt, CompoundConditionData as s, clearCache as st, APISettings as t, PreviewStatusResponse as tt, ConditionCreateRequest as u, createConditionEvaluation as ut, ConditionResponse as v, patchCondition as vt, CreateConditionPreviewHttpError as w, CreateConditionEvaluationHttpResponse as x, ConditionsAPI as y, setConditionsSettings as yt, EvaluationErrorMeta as z };