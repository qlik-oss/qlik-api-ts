import { ApiCallOptions } from "./auth-types-BlCWK0FP.js";

//#region src/public/rest/data-alerts.d.ts
type AlertingActionsTriggerCreateRequest = {
  alertingTaskID: string;
};
type AlertingActionsTriggerCreateResponse = {
  /** the workflow id created for the manual triggering of alert */
  workflowID?: string;
};
type AlertingConditionResponse = {
  /** Should reference ConditionResponse type in condition-manager api docs */
  conditionResponse?: unknown;
  hideSelections?: boolean;
};
type AlertingExecutionError = {
  /** Error code specific to sharing service. */
  readonly code?: string;
  /** Error cause. */
  readonly detail?: string;
  /** Error title. */
  readonly title?: string;
};
type AlertingExecutionErrors = AlertingExecutionError[];
type AlertingExecutionListResponse = StandardListResponseProps & {
  /** Gets a list of alerting-executions. */
  executions?: AlertingExecutionResponse[];
  links?: ListLinks;
};
type AlertingExecutionPersist = {
  accessMode?: "SOURCE_ACCESS" | "TARGET_ACCESS";
  /** ID for the alerting task that this execution references */
  alertId?: string;
  /** Id of the bookmark associated with an alert */
  bookmarkId?: string;
  /** Id of the condition the alert is associated with */
  conditionId?: string;
  conditionStatus?: "FINISHED" | "FAILED";
  /** Dimensions applied in the condition */
  dimensions?: string[];
  errors?: AlertingExecutionErrors;
  /** Id of the evaluation for the condition */
  evaluationId?: string;
  executionEvaluationStatus?: "CONDITION_MET" | "CONDITION_NOT_MET" | "FAILED";
  executionType?: "INDIVIDUAL" | "SHARED";
  /** Gets the execution identifier. */
  id?: string;
  /** Measures applied in the condition */
  measures?: string[];
  /** The owner that this execution belongs to */
  ownerId?: string;
  result?: AlertingExecutionResult;
  /** The tenant that this execution belongs to */
  tenantId?: string;
  /** Timestamp of execution start */
  triggerTime?: string;
  /** ID for the workflow, coming from eventing service */
  workflowId?: string;
};
type AlertingExecutionResponse = AlertingExecutionPersist & {
  evaluation?: Evaluation;
  links?: Links;
};
type AlertingExecutionResult = {
  alertTriggerStatus?: string;
  throttlerTokensLeft?: number;
};
type AlertingRecipientStats = {
  conditionStatus?: "OK" | "FAILED";
  /** Whether the recipient is enabled. */
  enabled: boolean;
  errors?: AlertingRecipientStatsErrors;
  /** A list of associated groups. If a user is added individually the "addedIndividually" pseudo group is included */
  groups?: string[];
  /** last time a trigger was detected, but not sure if executed */
  lastScan?: string;
  /** last time an execution had been created */
  lastTrigger?: string;
  /** Whether the recipient is subscribed. */
  subscribed?: boolean;
  type?: "userid";
  value?: string;
};
type AlertingRecipientStatsError = {
  /** Error code specific to sharing service. */
  readonly code?: string;
  /** Error cause. */
  readonly detail?: string;
  /** Error title. */
  readonly title?: string;
};
type AlertingRecipientStatsErrors = AlertingRecipientStatsError[];
type AlertingRecipientStatsResponse = {
  recipientStats?: AlertingRecipientStats[];
};
type AlertingSettings = {
  /** This indicates that there is an ongoing operation to either disable or enable the data alerting feature. none means that no such operation is ongoing. enabling/disabling means that system is currently enabling/disabling the feature */
  readonly "data-alerting-feature-operation-status"?: "none" | "enabling" | "disabling";
  /** UTC timestamp of the most recent change of data-alerting-feature-operation-status. If there has not been any such change, this is the timestamp of the initial creation of the record. */
  readonly "data-alerting-feature-operation-status-change"?: string;
  /** Whether the license for the tenant has the data alerting feature enabled. */
  "data-alerting-license-status"?: "enabled" | "disabled";
  /** Represents the number of data alerts consumed by the user either as an owner or recipient */
  readonly dataAlertsConsumed?: number;
  /** Represents the number of data alerts limit to be consumed by the user either as an owner or recipient */
  readonly dataAlertsLimits?: number;
  /** true if data-alerting feature is enabled for this tenant. Enabling this feature also requires that the license has this feature enabled. */
  "enable-data-alerting": boolean;
  /** The maximum number of recipients that can be present in an alerting task in TARGET_ACCESS mode. New recipients cannot be added when this limit is exceeded */
  readonly "max-recipients-in-target-access"?: number;
  /** These persisted alerting settings are only available for this tenant. Extracted from request JWT. */
  readonly tenantId?: string;
};
type AlertingSettingsUpload = {
  /** true if data-alerting feature is enabled. A status change could potentially result in a considerable amount of API operations to enable/disable triggers. Enabling this feature also requires that the license has this feature enabled. */
  "enable-data-alerting": boolean;
};
/**
 * a alerting task (a definition on an alert)
 */
type AlertingTaskCreateRequest = {
  /** appId associated to this alert definition */
  appId: string;
  /** bookmarkId associated to this alert definition */
  bookmarkId?: string;
  /** the id of the condition that determines if this data alert should be triggered */
  conditionId: string;
  /** description associated to alerting task */
  description?: string;
  /** if the alerting task is enabled */
  enabled?: boolean;
  /** name associated to alerting task */
  name: string;
  /** List of recipients. An internal recipient is represented by either their user id or group id. */
  recipients: Recipients;
  scheduleOptions?: ScheduleOptions;
  /** sheetId associated to this alert definition */
  sheetId?: string;
  /** The rules and setup for throttling */
  throttling?: ThrottlingResource;
  /** Type of job that triggered the task */
  triggerType: "RELOAD" | "SCHEDULED";
};
type AlertingTaskError = {
  /** Timestamp for the creation of the error */
  added?: string;
  /** Identifier for type of error occurring on alerting task */
  value?: "OWNER_DISABLED" | "OWNER_ACCESS" | "OWNER_LICENSE" | "APP_DELETED" | "NO_RECIPIENTS" | "PARTIAL_ACCESS" | "EVAL_ERROR" | "ORPHAN" | "CONVERSION_DENIED" | "EXPIRED" | "PARTIAL_SENT" | "QUOTA_REACHED" | "OWNER_HAS_NO_VALID_USER_ENTITLEMENT";
};
/**
 * @deprecated
 */
type AlertingTaskExecutionStats = StandardListResponseProps & {
  executionsStats?: ExecutionStats[];
  links?: ListLinks;
};
type AlertingTaskGroupRecipientError = {
  /** Timestamp for the creation of the error */
  added?: string;
  /** Identifier for type of error occurring on alerting task */
  value?: "GROUP_IS_DISABLED" | "MAX_ALERTS_LIMIT_REACHED" | "GROUP_WITH_NO_APP_ACCESS" | "GROUP_IS_DELETED";
};
type AlertingTaskListResponse = StandardListResponseProps & {
  links?: ListLinks;
  /** Gets a list of alerting tasks. */
  tasks?: AlertingTaskResponse[];
};
type AlertingTaskPatchRequestCompliant = {
  /** The operation to be performed */
  op: "replace";
  /** A JSON Patch document as defined in https://datatracker.ietf.org/doc/html/rfc6902 */
  path: "/ownerName" | "/ownerId" | "/conditionId" | "/enabledAction" | "/bookmarkId" | "/name" | "/description" | "/throttling" | "/triggerType" | "/scheduleOptions";
  /** The value to be used for this operation. */
  value?: unknown;
};
type AlertingTaskPatchRequestCompliantList = AlertingTaskPatchRequestCompliant[];
type AlertingTaskRecipientError = {
  /** Timestamp for the creation of the error */
  added?: string;
  /** Identifier for type of error occurring on alerting task */
  value?: "USER_IS_DELETED" | "USER_DISABLED_IN_QCS" | "NO_ACCESS_TO_APP" | "UNSUBSCRIBED_FROM_ALERT" | "CONDITION_EVAL_ERROR" | "USER_DISABLED_IN_ALERT_BY_OWNER" | "MAX_ALERTS_LIMIT_REACHED";
};
/**
 * A custom custom JSON Patch document, as an array of objects with operation, recipient type and value. Original defined in https://datatracker.ietf.org/doc/html/rfc6902.
 * @example
 * [
 *   {
 *     op: "add",
 *     recipientType: "userid",
 *     value: {
 *       "enabled": true,
 *       "value": "recipient-1"
 *     }
 *   },
 *   {
 *     op: "remove",
 *     recipientType: "userid"
 *   },
 *   {
 *     op: "enable",
 *     recipientType: "userid"
 *   },
 *   {
 *     op: "disable",
 *     recipientType: "userid"
 *   },
 *   {
 *     op: "replace",
 *     recipientType: "userid",
 *     value: [
 *       {
 *         "enabled": true,
 *         "value": "recipient-1"
 *       },
 *       {
 *         "enabled": false,
 *         "value": "recipient-2"
 *       }
 *     ]
 *   }
 * ]
 */
type AlertingTaskRecipientPatch = AlertingTaskRecipientPatchInner[];
type AlertingTaskRecipientPatchInner = {
  /** The operation to be performed. */
  op: "remove" | "add" | "replace" | "enable" | "disable" | "subscribe" | "unsubscribe";
  /** Defines the path for the given resource field to patch. */
  recipientType: "userid" | "groupid";
  /** The value to be used for this operation. */
  value: unknown;
};
type AlertingTaskResponse = {
  /** last time a trigger was detected, but not sure if executed */
  absoluteLastScan?: string;
  /** last time an execution had been created */
  absoluteLastTrigger?: string;
  accessMode?: "SOURCE_ACCESS" | "TARGET_ACCESS";
  alertingTaskErrors?: AlertingTaskError[];
  /** appId associated to this alert definition */
  appId?: string;
  /** bookmarkId associated to this alert definition */
  bookmarkId?: string;
  /** the id of the condition that determines if this data alert should be triggered */
  conditionId?: string;
  /** Should reference ConditionResponse type in condition-manager api docs */
  conditionResponse?: unknown;
  /** Timestamp for the creation of the task (rfc3339 format) */
  dateCreated?: string;
  /** description associated to alerting task */
  description?: string;
  /** true if the alerting task is enabled */
  enabled?: boolean;
  /** error labels from the latest workflow that happened within the task */
  errorStatus?: "OK" | "FATAL-ERROR" | "PARTIAL-TRIGGER";
  /** the number of actual evaluations with engine this task has consumed in the current month */
  evaluationCount?: number;
  /** true if the alert has history condition enabled */
  hasHistoryCondition?: boolean;
  /** Whether the selection needs to be hidden. */
  hideSelections?: boolean;
  /** data alerting identifier (this is the alertID) */
  id?: string;
  /** the date when the evaluation count was updated */
  lastEvaluationCountUpdate?: string;
  lastExecutionStatus?: "OK" | "FAILED";
  /** last time a trigger was detected, but not sure if executed for requesting user */
  lastScan?: string;
  /** last time an execution had been created for requesting user */
  lastTrigger?: string;
  /** Timestamp of the most recent update. */
  lastUpdated?: string;
  links?: Links;
  /** name associated to alerting task */
  name?: string;
  /** the owner of this alert */
  ownerId?: string;
  /** the owner name of this alert */
  ownerName?: string;
  /** List of recipients. An internal recipient is represented by either their user id or group id. */
  recipients?: Recipients;
  recipientsChangeHistory?: RecipientsChange[];
  scheduleOptions?: ScheduleOptions;
  /** sheetId associated to this alert definition */
  sheetId?: string;
  /** particular status of the alerting task */
  status?: "creating" | "deleting";
  /** list of subscriptions related to this alerting task */
  subscriptionIds?: string[];
  /** the tenant of this alert */
  tenantId?: string;
  /** The rules and setup for throttling */
  throttling?: ThrottlingResource;
  triggerStats: AlertingTaskTriggerStats;
  /** Type of job that triggered the task */
  triggerType?: "RELOAD" | "SCHEDULED" | "MANUAL";
};
type AlertingTaskTriggerStats = {
  /** The number of triggers out of the last 100 scans for the current condition. */
  last100Scans: number;
  /** The number of triggers out of the last 10 scans for the current condition. */
  last10Scans: number;
  /** The number of scans for the current condition. */
  totalScans: number;
};
type AlertingTaskValidation = {
  /** Description of the error */
  description?: string;
  /** @deprecated
   * Identifier for a validation error occurring on alerting task */
  error?: "NO_ACCESS" | "USER_IS_DISABLED" | "INVALID_CONDITION" | "GROUP_IS_DISABLED" | "GROUP_SIZE_EXCEEDED";
  /** Identifies for user id or condition id */
  id?: string;
  /** Identifier for type of a validation error occurring on alerting task */
  type?: "RECIPIENT" | "CONDITION" | "RECIPIENT_GROUP";
  validationErrors?: ("NO_ACCESS" | "USER_IS_DISABLED" | "INVALID_CONDITION" | "MAX_ALERTS_LIMIT_REACHED" | "MAX_ALERT_RECIPIENTS_LIMIT_REACHED" | "GROUP_IS_DISABLED" | "GROUP_SIZE_EXCEEDED")[];
};
type AlertingTaskValidationResponse = {
  status?: "FAILURE" | "SUCCESS";
  validations?: AlertingTaskValidation[];
};
type Error = {
  /** Error code specific to sharing service. */
  readonly code?: string;
  /** Error cause. */
  readonly detail?: string;
  meta?: ErrorMeta;
  /** Error title. */
  readonly title?: string;
};
type ErrorMeta = {
  /** HTTP error code. */
  readonly httpCode?: number;
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
type Errors = {
  errors?: Error[];
  traceId?: string;
};
type Evaluation = {
  /** Representation of the event that caused the condition to be evaluated if one was included on when the evaluation was triggered */
  causalEvent?: unknown;
  /** The unique id of the associated condition */
  readonly conditionId?: string;
  /** Extra context information to carry through to the result if one was included on when the evaluation was triggered */
  contextId?: string;
  /** The unique id for the resource given from Data Condition Evaluator */
  readonly dataConditionEvaluatorId?: string;
  /** The time the evaluation ended */
  readonly endTime?: string;
  /** The unique id for the resource */
  readonly id?: string;
  /** userId of user being impersonated to evaluate the condition */
  readonly ownerId?: string;
  /** The final result of the evalution */
  readonly result?: "success" | "failure" | "error";
  /** Condition type specific result, one of dataResult or compoundResult */
  resultData?: unknown;
  /** The time the evaluation started */
  readonly startTime?: string;
  /** The status of the evaluation execution */
  readonly status?: "RUNNING" | "FAILED" | "FINISHED";
  /** The tenant id */
  readonly tenantId?: string;
};
type EvaluationGetResponse = {
  condition?: unknown;
  evaluation?: Evaluation;
  hideSelections?: boolean;
};
type ExecutionStats = {
  endTime?: string;
  periodKey?: string;
  startTime?: string;
  totalExecutions?: string;
  triggeredExecutions?: string;
};
/**
 * an internal recipient based on its group id.
 */
type GroupIDRecipient = {
  alertingTaskGroupRecipientErrors?: AlertingTaskGroupRecipientError[];
  /** Whether this recipient can receive alerts. */
  enabled?: boolean;
  taskGroupRecipientErrors?: TaskGroupRecipientError[];
  /** Group ID of recipient. */
  value?: string;
};
type Links = {
  /** Object with Href to a particular element or set of elements */
  self?: Self;
};
type ListLinks = {
  next?: Page;
  prev?: Page;
  /** Object with Href to a particular element or set of elements */
  self?: Self;
};
type Page = {
  /** URL to particular set of elements */
  href?: string;
  /** Page unique token */
  token?: string;
  /** Page type, can be next or prev */
  type?: "prev" | "next";
};
/**
 * List of recipients. An internal recipient is represented by either their user id or group id.
 */
type Recipients = {
  DLGroups?: unknown[];
  DLListId?: string;
  DLUsers?: unknown[];
  groupIds?: GroupIDRecipient[];
  userIds: UserIDRecipient[];
};
/**
 * Change in a recipient for an alerting task
 */
type RecipientsChange = {
  /** time of recipient state change */
  dateTime?: string;
  /** A custom custom JSON Patch document, as an array of objects with operation, recipient type and value. Original defined in https://datatracker.ietf.org/doc/html/rfc6902. */
  patchAction?: AlertingTaskRecipientPatch;
};
type ScheduleOptions = {
  /** The chronos job identifier. It is set once the related chronos job is created. */
  readonly chronosJobID?: string;
  /** EndDateTime is a local date time with respect to the above timezone parameter. If the timezone parameter is missing, then the timezone used is the one retrieved from user infos. Therefore ISO8601 time offsets are not allowed (e.g. "2026-01-02T16:04:05Z" or "2026-01-02T16:04:05+01"), if passed an error will be returned. EndDateTime is an optional parameter, when not set or when it's an empty string, the recurrence is intended to be never ending. */
  endDateTime?: string;
  /** lastExecutionTime is the time of the chronos job last execution in RFC3339 format (a time with a fixed UTC offset). Could be empty if job has not run yet. */
  readonly lastExecutionTime?: string;
  /** nextExecutionTime is the time of the chronos job next execution in RFC3339 format (a time with a fixed UTC offset). Could be empty if the job is completed. */
  readonly nextExecutionTime?: string;
  /** List of RRULEs for SCHEDULED triggers, as specified in RFC5545. Note that DTSTART and DTEND, UNTIL lines are not allowed in this field; start and end times are specified in the start and end fields. RDATE and EXDATE lines are not currently supported. EXRULE is not supported since it is deprecated by RFC5545. It is mandatory if the trigger type is SCHEDULED. At least 1 rule must be set and maximum 5 rules are allowed. */
  recurrence?: string[];
  /** StartDateTime is a local date time with respect to the above timezone parameter. If the timezone parameter is missing, then the timezone used is the one retrieved from user infos. Therefore ISO8601 time offsets are not allowed (e.g. "2026-01-02T16:04:05Z" or "2026-01-02T16:04:05+01"), if passed an error will be returned. StartDateTime should not be older than 1 year from current date. StartDateTime is an optional parameter, when not set or when it's an empty string, its value is set to the current local date time. */
  startDateTime?: string;
  /** The timezone for time calculations in SCHEDULED triggers, optional. */
  timezone?: string;
};
/**
 * Object with Href to a particular element or set of elements
 */
type Self = {
  href?: string;
};
/**
 * properties that should be added to every list response
 */
type StandardListResponseProps = {
  /** count of entries on the currently shown page */
  currentPageCount: number;
  /** total count of entries in the collection as a whole */
  totalCount: number;
};
type TaskGroupRecipientError = {
  /** Timestamp for the creation of the error */
  timestamp?: string;
  /** Identifier for type of error occurring on sharing task specific for group recipient */
  value?: "GROUP_IS_DISABLED" | "MAX_ALERTS_LIMIT_REACHED" | "GROUP_WITH_NO_APP_ACCESS" | "GROUP_IS_DELETED" | "GROUP_NOT_FOUND_DL" | "GROUP_DISABLED_IN_DL";
};
type TaskRecipientError = {
  /** Timestamp for the creation of the error */
  timestamp?: string;
  /** Identifier for type of error occurring on sharing task specific for recipient */
  value?: "USER_IS_DELETED" | "USER_DISABLED_IN_QCS" | "NO_ACCESS_TO_APP" | "UNSUBSCRIBED_FROM_SHARING" | "USER_DISABLED_IN_SHARING_BY_OWNER" | "CHART_NOT_FOUND" | "APP_NOT_FOUND" | "SHEET_NOT_FOUND" | "ENGINE_POD_NOT_AVAILABLE" | "CHART_TYPE_NOT_ALLOWED" | "GENERIC_EXECUTION_FAILURE" | "USER_NOT_FOUND_DL" | "USER_DISABLED_IN_DL" | "FILTER_NOT_FOUND" | "BOOKMARK_NOT_FOUND";
};
/**
 * The rules and setup for throttling
 */
type ThrottlingResource = {
  /** the maximum number of tokens that the bucket can contain */
  capacity?: number;
  /** the initial amount of tokens in the bucket upon creation. cannot exceed capacity. */
  initialTokenCount?: number;
  /** A string that supports a subset of RFC5545 recurrence rule directives. */
  recurrenceRule?: string;
  /** a date and time reference specified in RFC3339 format */
  referenceTimestamp?: string;
  /** the amount of tokens to insert into the bucket on the specified interval. (tokens exceeding capacity are discarded) */
  replenishRate?: number;
  /** the timezone for time calculations in this throttlingresource, for current time and time reference. */
  timezone?: string;
};
/**
 * an internal recipient based on its user id.
 */
type UserIDRecipient = {
  alertingTaskRecipientErrors?: AlertingTaskRecipientError[];
  /** Whether this recipient can receive alerts. */
  enabled?: boolean;
  /** A list of associated groups. If a user is added individually the "addedIndividually" pseudo group is included */
  groups?: string[];
  /** Whether this recipient is subscribed to alerts of a task */
  subscribed?: boolean;
  taskRecipientErrors?: TaskRecipientError[];
  /** User ID of recipient (internal user). */
  value?: string;
};
/**
 * Retrieves all data alert tasks accessible to the user. Users assigned the `TenantAdmin` or `AnalyticsAdmin` role can view all tasks.
 *
 * @param query an object with query parameters
 * @throws GetDataAlertsHttpError
 */
declare function getDataAlerts(query: {
  /** The app ID you would like to filter by */
  appID?: string;
  /** The conditionId you would like to filter by */
  conditionId?: string;
  /** Limit the returned result set */
  limit?: number;
  /** The cursor to the next page of data. Only one of next or previous may be specified. */
  next?: string;
  /** Offset for finding a list of entities - used for pagination */
  offset?: number;
  /** The id of the owner you would like to filter by */
  ownerId?: string;
  /** The name of the owner you would like to filter by */
  ownerName?: string;
  /** The cursor to the previous page of data. Only one of next or previous may be specified. */
  prev?: string;
  /** The role you would like to filter by */
  role?: ("owner" | "recipient" | "notowner")[];
  /** Sort the returned result set by the specified field */
  sort?: ("-datecreated" | "datecreated" | "+datecreated" | "-ownername" | "ownername" | "+ownername" | "lasttrigger" | "-lasttrigger" | "+lasttrigger" | "lastscan" | "-lastscan" | "+lastscan" | "name" | "-name" | "+name" | "enabled" | "-enabled" | "+enabled" | "status" | "-status" | "+status" | "nextexecutiontime" | "-nextexecutiontime" | "+nextexecutiontime")[];
  /** The status you would like to filter by */
  status?: ("INVALID_RECIPIENT" | "INVALID_OWNER" | "DISABLED" | "VALID")[];
}, options?: ApiCallOptions): Promise<GetDataAlertsHttpResponse>;
type GetDataAlertsHttpResponse = {
  data: AlertingTaskListResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataAlertsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataAlertsHttpResponse>;
};
type GetDataAlertsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Creates a new data alerting task.
 *
 * @param body an object with the body content
 * @throws CreateDataAlertHttpError
 */
declare function createDataAlert(body: AlertingTaskCreateRequest, options?: ApiCallOptions): Promise<CreateDataAlertHttpResponse>;
type CreateDataAlertHttpResponse = {
  data: AlertingTaskResponse;
  headers: Headers;
  status: 202;
};
type CreateDataAlertHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Creates a new data alerting task trigger action.
 *
 * @param body an object with the body content
 * @throws TriggerDataAlertsHttpError
 */
declare function triggerDataAlerts(body: AlertingActionsTriggerCreateRequest, options?: ApiCallOptions): Promise<TriggerDataAlertsHttpResponse>;
type TriggerDataAlertsHttpResponse = {
  data: AlertingActionsTriggerCreateResponse;
  headers: Headers;
  status: 202;
};
type TriggerDataAlertsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Validates a new data alerting task. Current support includes validation for recipients only.
 *
 * @param body an object with the body content
 * @throws ValidateDataAlertsHttpError
 */
declare function validateDataAlerts(body: AlertingTaskCreateRequest, options?: ApiCallOptions): Promise<ValidateDataAlertsHttpResponse>;
type ValidateDataAlertsHttpResponse = {
  data: AlertingTaskValidationResponse;
  headers: Headers;
  status: 200;
};
type ValidateDataAlertsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Retrieves the current settings for data alerts.
 *
 * @throws GetDataAlertsSettingsHttpError
 */
declare function getDataAlertsSettings(options?: ApiCallOptions): Promise<GetDataAlertsSettingsHttpResponse>;
type GetDataAlertsSettingsHttpResponse = {
  data: AlertingSettings;
  headers: Headers;
  status: 200;
};
type GetDataAlertsSettingsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Updates the settings for data alerts. User must be assigned the `TenantAdmin` role.
 *
 * @param body an object with the body content
 * @throws SetDataAlertsSettingsHttpError
 */
declare function setDataAlertsSettings(body: AlertingSettingsUpload, options?: ApiCallOptions): Promise<SetDataAlertsSettingsHttpResponse>;
type SetDataAlertsSettingsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type SetDataAlertsSettingsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Deletes a specific data alerting task.
 *
 * @param alertId The alerting task identifier.
 * @throws DeleteDataAlertHttpError
 */
declare function deleteDataAlert(alertId: string, options?: ApiCallOptions): Promise<DeleteDataAlertHttpResponse>;
type DeleteDataAlertHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteDataAlertHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Returns the details of a specific data alert task.
 *
 * @param alertId The alerting task identifier.
 * @throws GetDataAlertHttpError
 */
declare function getDataAlert(alertId: string, options?: ApiCallOptions): Promise<GetDataAlertHttpResponse>;
type GetDataAlertHttpResponse = {
  data: AlertingTaskResponse;
  headers: Headers;
  status: 200;
};
type GetDataAlertHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Updates one or more properties of a specific data alerting task.
 *
 * @param alertId The alerting task identifier.
 * @param body an object with the body content
 * @throws PatchDataAlertHttpError
 */
declare function patchDataAlert(alertId: string, body: AlertingTaskPatchRequestCompliantList, options?: ApiCallOptions): Promise<PatchDataAlertHttpResponse>;
type PatchDataAlertHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchDataAlertHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Retrieves the condition associated with a data alerting task.
 *
 * @param alertId The alerting task identifier.
 * @throws GetDataAlertConditionHttpError
 */
declare function getDataAlertCondition(alertId: string, options?: ApiCallOptions): Promise<GetDataAlertConditionHttpResponse>;
type GetDataAlertConditionHttpResponse = {
  data: AlertingConditionResponse;
  headers: Headers;
  status: 200;
};
type GetDataAlertConditionHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Deletes a specific data alerting task execution.
 *
 * @param alertId The alerting task identifier.
 * @param executionId The execution identifier.
 * @throws DeleteDataAlertExecutionHttpError
 */
declare function deleteDataAlertExecution(alertId: string, executionId: string, options?: ApiCallOptions): Promise<DeleteDataAlertExecutionHttpResponse>;
type DeleteDataAlertExecutionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteDataAlertExecutionHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Retrieves a specific execution for the specified data alerting task.
 *
 * @param alertId The alerting task identifier.
 * @param executionId The execution identifier. If value is "latest", the latest execution will be returned
 * @throws GetDataAlertExecutionHttpError
 */
declare function getDataAlertExecution(alertId: string, executionId: string, options?: ApiCallOptions): Promise<GetDataAlertExecutionHttpResponse>;
type GetDataAlertExecutionHttpResponse = {
  data: AlertingExecutionResponse;
  headers: Headers;
  status: 200;
};
type GetDataAlertExecutionHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Retrieve the recipient stats for a data alerting task.
 *
 * @param alertId The alerting task identifier.
 * @param query an object with query parameters
 * @throws GetDataAlertRecipientStatsHttpError
 */
declare function getDataAlertRecipientStats(alertId: string, query: {
  /** The name of the groups you would like to filter by */
  groups?: string[];
  /** Sort the returned result set by the specified field */
  sort?: ("+userID" | "-userID" | "subscribed" | "+subscribed")[];
  /** Subscribed property you would like to filter by */
  subscribed?: boolean;
  /** The recipients ID you would like to filter by */
  userID?: string;
}, options?: ApiCallOptions): Promise<GetDataAlertRecipientStatsHttpResponse>;
type GetDataAlertRecipientStatsHttpResponse = {
  data: AlertingRecipientStatsResponse;
  headers: Headers;
  status: 200;
};
type GetDataAlertRecipientStatsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Lists executions for the specified data alerting task.
 *
 * @param taskId The alerting task identifier.
 * @param query an object with query parameters
 * @throws GetDataAlertExecutionsHttpError
 */
declare function getDataAlertExecutions(taskId: string, query: {
  /** Filter by condition id related to the executions. */
  conditionId?: string;
  /** Filter by whether the alerting task execution status is FINISHED or FAILED. */
  conditionStatus?: "FINISHED" | "FAILED" | "ALL";
  /** Specifies required days of the month that the execution was created in */
  daysOfMonth?: number[];
  /** Specifies a filter for custom handled periods of time in which the executions were handled */
  daysOfWeek?: ("MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY")[];
  /** Specifies specific properties to be populated */
  fields?: ("evaluationId" | "triggerTime" | "conditionStatus" | "executionEvaluationStatus" | "evaluation" | "evaluation.endTime" | "evaluation.resultData" | "evaluation.resultData.count" | "evaluation.resultData.headers" | "evaluation.resultData.positive" | "evaluation.resultData.negative" | "evaluation.resultData.dimensions" | "evaluation.resultData.measures")[];
  /** Specifies whether to include evaluation details */
  includeEvaluation?: boolean;
  /** Specifies whether to only show the last execution in each day */
  lastEachDay?: boolean;
  /** Limit the returned result set */
  limit?: number;
  /** Specifies the number of days required between each entry. This should require a sort by triggertime */
  minimumGapDays?: number;
  /** The cursor to the next page of data. Only one of next or previous may be specified. */
  next?: string;
  /** Offset for pagination - how many elements to skip */
  offset?: number;
  /** The cursor to the previous page of data. Only one of next or previous may be specified. */
  prev?: string;
  /** Specifies a limit number for the search query, affects total count and is not related to pagination */
  searchResultsLimit?: number;
  /** Specifies a date that executions should have been created after. Date in RFC3339Nano format, such as 2020-01-01T00:00:00.000Z */
  since?: string;
  /** Sort the returned result set by the specified field */
  sort?: ("triggertime" | "-triggertime" | "+triggertime")[];
  /** Specifies a timezone the other time-based filters in this query should consider. Expecting a momentjs format, such as America/Los_Angeles */
  timezone?: string;
  /** Filter by whether the alerting task is triggered. */
  triggered?: boolean;
  /** Specifies a date that executions should have been created before. Date in RFC3339Nano format, such as 2020-01-01T00:00:00.000Z */
  until?: string;
}, options?: ApiCallOptions): Promise<GetDataAlertExecutionsHttpResponse>;
type GetDataAlertExecutionsHttpResponse = {
  data: AlertingExecutionListResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataAlertExecutionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataAlertExecutionsHttpResponse>;
};
type GetDataAlertExecutionsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * @deprecated
 *
 * Retrieves stats for overall data alerting task executions.
 *
 * @param taskId The alerting task identifier.
 * @param query an object with query parameters
 * @throws GetDataAlertExecutionsStatsHttpError
 */
declare function getDataAlertExecutionsStats(taskId: string, query: {
  /** The period by which the stats aggregation needs to be performed. */
  period: "month";
}, options?: ApiCallOptions): Promise<GetDataAlertExecutionsStatsHttpResponse>;
type GetDataAlertExecutionsStatsHttpResponse = {
  data: AlertingTaskExecutionStats;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataAlertExecutionsStatsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataAlertExecutionsStatsHttpResponse>;
};
type GetDataAlertExecutionsStatsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Retrieves the content of an evaluation for a specified data alerting task execution.
 *
 * @param taskId The alerting task identifier.
 * @param executionId The execution identifier.
 * @throws GetDataAlertExecutionEvaluationsHttpError
 */
declare function getDataAlertExecutionEvaluations(taskId: string, executionId: string, options?: ApiCallOptions): Promise<GetDataAlertExecutionEvaluationsHttpResponse>;
type GetDataAlertExecutionEvaluationsHttpResponse = {
  data: EvaluationGetResponse;
  headers: Headers;
  status: 200;
};
type GetDataAlertExecutionEvaluationsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Clears the cache for data-alerts api requests.
 */
declare function clearCache(): void;
interface DataAlertsAPI {
  /**
   * Retrieves all data alert tasks accessible to the user. Users assigned the `TenantAdmin` or `AnalyticsAdmin` role can view all tasks.
   *
   * @param query an object with query parameters
   * @throws GetDataAlertsHttpError
   */
  getDataAlerts: typeof getDataAlerts;
  /**
   * Creates a new data alerting task.
   *
   * @param body an object with the body content
   * @throws CreateDataAlertHttpError
   */
  createDataAlert: typeof createDataAlert;
  /**
   * Creates a new data alerting task trigger action.
   *
   * @param body an object with the body content
   * @throws TriggerDataAlertsHttpError
   */
  triggerDataAlerts: typeof triggerDataAlerts;
  /**
   * Validates a new data alerting task. Current support includes validation for recipients only.
   *
   * @param body an object with the body content
   * @throws ValidateDataAlertsHttpError
   */
  validateDataAlerts: typeof validateDataAlerts;
  /**
   * Retrieves the current settings for data alerts.
   *
   * @throws GetDataAlertsSettingsHttpError
   */
  getDataAlertsSettings: typeof getDataAlertsSettings;
  /**
   * Updates the settings for data alerts. User must be assigned the `TenantAdmin` role.
   *
   * @param body an object with the body content
   * @throws SetDataAlertsSettingsHttpError
   */
  setDataAlertsSettings: typeof setDataAlertsSettings;
  /**
   * Deletes a specific data alerting task.
   *
   * @param alertId The alerting task identifier.
   * @throws DeleteDataAlertHttpError
   */
  deleteDataAlert: typeof deleteDataAlert;
  /**
   * Returns the details of a specific data alert task.
   *
   * @param alertId The alerting task identifier.
   * @throws GetDataAlertHttpError
   */
  getDataAlert: typeof getDataAlert;
  /**
   * Updates one or more properties of a specific data alerting task.
   *
   * @param alertId The alerting task identifier.
   * @param body an object with the body content
   * @throws PatchDataAlertHttpError
   */
  patchDataAlert: typeof patchDataAlert;
  /**
   * Retrieves the condition associated with a data alerting task.
   *
   * @param alertId The alerting task identifier.
   * @throws GetDataAlertConditionHttpError
   */
  getDataAlertCondition: typeof getDataAlertCondition;
  /**
   * Deletes a specific data alerting task execution.
   *
   * @param alertId The alerting task identifier.
   * @param executionId The execution identifier.
   * @throws DeleteDataAlertExecutionHttpError
   */
  deleteDataAlertExecution: typeof deleteDataAlertExecution;
  /**
   * Retrieves a specific execution for the specified data alerting task.
   *
   * @param alertId The alerting task identifier.
   * @param executionId The execution identifier. If value is "latest", the latest execution will be returned
   * @throws GetDataAlertExecutionHttpError
   */
  getDataAlertExecution: typeof getDataAlertExecution;
  /**
   * Retrieve the recipient stats for a data alerting task.
   *
   * @param alertId The alerting task identifier.
   * @param query an object with query parameters
   * @throws GetDataAlertRecipientStatsHttpError
   */
  getDataAlertRecipientStats: typeof getDataAlertRecipientStats;
  /**
   * Lists executions for the specified data alerting task.
   *
   * @param taskId The alerting task identifier.
   * @param query an object with query parameters
   * @throws GetDataAlertExecutionsHttpError
   */
  getDataAlertExecutions: typeof getDataAlertExecutions;
  /**
   * @deprecated
   *
   * Retrieves stats for overall data alerting task executions.
   *
   * @param taskId The alerting task identifier.
   * @param query an object with query parameters
   * @throws GetDataAlertExecutionsStatsHttpError
   */
  getDataAlertExecutionsStats: typeof getDataAlertExecutionsStats;
  /**
   * Retrieves the content of an evaluation for a specified data alerting task execution.
   *
   * @param taskId The alerting task identifier.
   * @param executionId The execution identifier.
   * @throws GetDataAlertExecutionEvaluationsHttpError
   */
  getDataAlertExecutionEvaluations: typeof getDataAlertExecutionEvaluations;
  /**
   * Clears the cache for data-alerts api requests.
   */
  clearCache: typeof clearCache;
}
/**
 * Functions for the data-alerts api
 */
declare const dataAlertsExport: DataAlertsAPI;
//#endregion
export { AlertingActionsTriggerCreateRequest, AlertingActionsTriggerCreateResponse, AlertingConditionResponse, AlertingExecutionError, AlertingExecutionErrors, AlertingExecutionListResponse, AlertingExecutionPersist, AlertingExecutionResponse, AlertingExecutionResult, AlertingRecipientStats, AlertingRecipientStatsError, AlertingRecipientStatsErrors, AlertingRecipientStatsResponse, AlertingSettings, AlertingSettingsUpload, AlertingTaskCreateRequest, AlertingTaskError, AlertingTaskExecutionStats, AlertingTaskGroupRecipientError, AlertingTaskListResponse, AlertingTaskPatchRequestCompliant, AlertingTaskPatchRequestCompliantList, AlertingTaskRecipientError, AlertingTaskRecipientPatch, AlertingTaskRecipientPatchInner, AlertingTaskResponse, AlertingTaskTriggerStats, AlertingTaskValidation, AlertingTaskValidationResponse, CreateDataAlertHttpError, CreateDataAlertHttpResponse, DataAlertsAPI, DeleteDataAlertExecutionHttpError, DeleteDataAlertExecutionHttpResponse, DeleteDataAlertHttpError, DeleteDataAlertHttpResponse, Error, ErrorMeta, Errors, Evaluation, EvaluationGetResponse, ExecutionStats, GetDataAlertConditionHttpError, GetDataAlertConditionHttpResponse, GetDataAlertExecutionEvaluationsHttpError, GetDataAlertExecutionEvaluationsHttpResponse, GetDataAlertExecutionHttpError, GetDataAlertExecutionHttpResponse, GetDataAlertExecutionsHttpError, GetDataAlertExecutionsHttpResponse, GetDataAlertExecutionsStatsHttpError, GetDataAlertExecutionsStatsHttpResponse, GetDataAlertHttpError, GetDataAlertHttpResponse, GetDataAlertRecipientStatsHttpError, GetDataAlertRecipientStatsHttpResponse, GetDataAlertsHttpError, GetDataAlertsHttpResponse, GetDataAlertsSettingsHttpError, GetDataAlertsSettingsHttpResponse, GroupIDRecipient, Links, ListLinks, Page, PatchDataAlertHttpError, PatchDataAlertHttpResponse, Recipients, RecipientsChange, ScheduleOptions, Self, SetDataAlertsSettingsHttpError, SetDataAlertsSettingsHttpResponse, StandardListResponseProps, TaskGroupRecipientError, TaskRecipientError, ThrottlingResource, TriggerDataAlertsHttpError, TriggerDataAlertsHttpResponse, UserIDRecipient, ValidateDataAlertsHttpError, ValidateDataAlertsHttpResponse, clearCache, createDataAlert, dataAlertsExport, deleteDataAlert, deleteDataAlertExecution, getDataAlert, getDataAlertCondition, getDataAlertExecution, getDataAlertExecutionEvaluations, getDataAlertExecutions, getDataAlertExecutionsStats, getDataAlertRecipientStats, getDataAlerts, getDataAlertsSettings, patchDataAlert, setDataAlertsSettings, triggerDataAlerts, validateDataAlerts };