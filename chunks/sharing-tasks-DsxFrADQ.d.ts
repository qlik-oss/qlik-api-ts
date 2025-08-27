import { ApiCallOptions, DownloadableBlob } from "./auth-types-B1c_1Nca.js";

//#region src/public/rest/sharing-tasks.d.ts
type APISettingsUpload = {
  /** Whether API endpoints for sharing are enabled */
  "enable-sharing": boolean;
  /** Maximum number of recipients when creating a sharing task */
  readonly maxRecipients?: number;
};
type AlertingTaskGroupRecipientError = {
  /** Timestamp for the creation of the error */
  added?: string;
  /** Identifier for type of error occurring on alerting task */
  value?: "GROUP_IS_DISABLED" | "MAX_ALERTS_LIMIT_REACHED" | "GROUP_WITH_NO_APP_ACCESS" | "GROUP_IS_DELETED";
};
type AlertingTaskRecipientError = {
  /** Timestamp for the creation of the error */
  added?: string;
  /** Identifier for type of error occurring on alerting task */
  value?: "USER_IS_DELETED" | "USER_DISABLED_IN_QCS" | "NO_ACCESS_TO_APP" | "UNSUBSCRIBED_FROM_ALERT" | "CONDITION_EVAL_ERROR" | "USER_DISABLED_IN_ALERT_BY_OWNER" | "MAX_ALERTS_LIMIT_REACHED";
};
/**
 * If the template type is not "chart", this can be null. Otherwise, the following properties are required: appId, sheetId, objectId, widthPx, heightPx, language. The following properties are optional: outZoom, outDpi
 */
type ChartTemplate = {
  /** ID of app */
  appId?: string;
  /** heightPx of chart */
  heightPx?: number;
  /** Visualization state from client as a string json value. Can include language, theme, viewState etc. */
  jsOpts?: unknown;
  /** Session chart object definition */
  objectDef?: unknown;
  /** ID of object */
  objectId?: string;
  /** outDpi of chart */
  outDpi?: number;
  /** outZoom of chart */
  outZoom?: number;
  /** Soft property changes on chart */
  patches?: unknown[];
  /** sheetId of app */
  sheetId?: string;
  /** widthPx of chart */
  widthPx?: number;
};
/**
 * recipient object model that is directly persisted in the DB
 */
type EmailAddressRecipientPersist = {
  /** Whether this recipient can receive alerts. */
  enabled?: boolean;
  taskRecipientErrors?: TaskRecipientError[];
  /** Email of recipient (external user). */
  value?: string;
};
type EmailComposition = {
  body?: string;
  subject?: string;
};
/**
 * Encrypted property in DB
 */
type EncryptedProperty = {
  cipher?: string;
  value?: unknown;
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
/**
 * recipient object model that is directly persisted in the DB
 */
type GroupIDRecipientPersist = {
  alertingTaskGroupRecipientErrors?: AlertingTaskGroupRecipientError[];
  /** Whether this recipient can receive alerts, set by external settings. */
  enabledBySystem?: boolean;
  /** Whether this recipient can receive alerts, set by api calls. */
  enabledByUser?: boolean;
  taskGroupRecipientErrors?: TaskGroupRecipientError[];
  /** Group ID of recipient. */
  value?: string;
};
/**
 * In case of multiple insight urls for multi-sheet sharing (or subsequent multi types) this defines those URLs and a mapping to the correct object.
 */
type InsightURL = {
  directURL?: string;
  fallbackURL?: string;
  insightID?: string;
  /** an identifier for the object within the template that this insight link points to */
  resourceID?: string;
  /** the status of the creation for this insight URL */
  status?: "successful" | "failed";
  /** @deprecated
   * an identifier for the template that this insight link points to */
  templateID?: string;
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
type MultiSheetTemplate = {
  /** ID of app */
  appId?: string;
  /** heightPx of chart, must be 0 or omitted for autofit. */
  heightPx?: number;
  /** optional value to indicate that this sheet is private */
  isPrivate?: boolean;
  /** Sheet state from client as a string json value. Can include language, theme, viewState etc. */
  jsOpts?: unknown;
  jsOptsById?: Record<string, unknown>;
  patchesById?: Record<string, unknown[]>;
  /** Currently only autofit is supported.
   * If omitted, autofit is the default.
   * The type of resize to be performed:
   *   - none is used to export a visualization, sheet as is (e.g. normal size), regardless its size. This may result in cropping.
   *   - autofit automatically fits the visualization, sheet into the output size (i.e. A4, A3 etc.). Any provided resizeData parameter will be ignored for this configuration.
   *   - fit fits the visualization, sheet into the area specified in resizeData. The content will be rescaled to fit in that area. */
  resizeType?: "none" | "fit" | "autofit";
  /** ID of sheet */
  sheetId?: string;
  /** an optional name for the sheet */
  sheetName?: string;
  /** widthPx of chart, must be 0 or omitted for autofit. */
  widthPx?: number;
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
 * List of persisted recipients.
 */
type RecipientsPersist = {
  DLGroups?: unknown[];
  DLUsers?: unknown[];
  emailAddresses?: EmailAddressRecipientPersist[];
  groupIds?: GroupIDRecipientPersist[];
  /** Net count of recipients in DLGroups and DLUsers. */
  netRecipientCount?: number;
  userIds?: UserIDRecipientPersist[];
};
type RetentionPolicy = {
  /** Number indicating the size of the window which stores the history. For Chart monitoring, the size should be 10. */
  historySize?: number;
  /** Using RFC-5545 provide the time interval in which the previous generated can be overridden with the newly generated report. For Chart monitoring, interval should be FREQ=DAILY;INTERVAL=1 */
  overrideInterval?: string;
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
type Selection = {
  displayName?: string;
  displayValues?: string[];
  isNumeric: boolean;
  name: string;
  stateName: string;
  values: string[];
};
/**
 * Object with Href to a particular element or set of elements
 */
type Self = {
  href?: string;
};
type SharingActionsTriggerCreateRequest = {
  sharingTaskID: string;
};
type SharingExecutionError = {
  /** Error code specific to sharing service. */
  readonly code?: string;
  /** Error cause. */
  readonly detail?: string;
  /** Error title. */
  readonly title?: string;
};
type SharingExecutionErrors = SharingExecutionError[];
type SharingExecutionFile = {
  fileAlias?: string;
  fileID?: string;
  tempContentsLocation?: string;
  /** identify the source task template */
  readonly templateId?: string;
  type?: "image" | "pdf" | "pptx" | "xlsx" | "html";
  /** userId associated with the file */
  readonly userId?: string;
};
type SharingExecutionListResponse = StandardListResponseProps & {
  /** Gets a list of sharing-executions. */
  executions?: SharingExecutionResponse[];
  links?: ListLinks;
};
type SharingExecutionPersist = {
  /** appId associated to sharing task execution */
  readonly appId?: string;
  /** @deprecated
   * The ID of a filter in a reporting request */
  readonly bookmarkId?: string;
  readonly bookmarkIds?: string[];
  /** Total count of cancelled reports in this execution */
  readonly cancelledCount?: number;
  /** Timestamp of execution cancel */
  readonly cancelledTime?: string;
  /** Timestamp of execution successful stop */
  readonly endTime?: string;
  errors?: SharingExecutionErrors;
  /** eventID of the trigger NATS event */
  readonly eventID?: string;
  /** eventTime of the trigger NATS event */
  readonly eventTime?: string;
  /** Total count of failed reports in this execution */
  readonly failedCount?: number;
  /** Timestamp of execution stop */
  readonly failedTime?: string;
  /** Total count of failed uploaded reports in this execution */
  readonly failedUploadCount?: number;
  readonly files?: SharingExecutionFile[];
  /** Gets the execution identifier. */
  readonly id?: string;
  /** Owner of the execution */
  readonly ownerId?: string;
  /** If this execution was triggered by an app reload. This will contain the reloadId from reloads service. Otherwise it is empty or omitted. */
  readonly reloadId?: string;
  /** If this execution was triggered by an app reload. This will contain the reload time to compare with reporting service when the report is requested. */
  readonly reloadTime?: string;
  /** ID for the sharing task that this execution references */
  readonly sharingTaskID?: string;
  /** Timestamp of execution start */
  readonly startTime?: string;
  /** Status of the task execution */
  readonly status?: "initialized" | "in-progress" | "successful" | "failed" | "cancelled" | "invalid" | "presuccessful" | "cancelling";
  /** Total count of successfully generated reports in this execution */
  readonly successCount?: number;
  /** Total count of successfully uploaded reports in this execution */
  readonly successUploadCount?: number;
  /** User that this execution is targeting as a recipient */
  targetUser?: TargetUser;
  /** The tenant that this execution belongs to */
  readonly tenantId?: string;
  /** Total count of reports in this execution */
  readonly totalCount?: number;
  /** Total count of reports to be uploaded in this execution */
  readonly totalUploadCount?: number;
  /** Workflow that the execution belongs to. Note that in a multi-recipient context we can have multiple executions (one per recipient) that share the same unique workflow. */
  readonly workflowID?: string;
};
type SharingExecutionResponse = SharingExecutionPersist & {
  fileLocations?: string[];
  links?: Links;
};
type SharingSettings = {
  /** true if report-subscription feature is enabled for this tenant */
  "enable-report-subscription": boolean;
  /** true if reporting-template-subscription feature is enabled for this tenant */
  "enable-reporting-template-subscription": boolean;
  /** Whether API endpoints for sharing are enabled */
  "enable-sharing": boolean;
  /** Maximum number of recipients when creating a sharing task */
  readonly maxRecipients?: number;
  /** Max Recipients accepted when creating a new subscription (excluding the owner) */
  readonly maxSubscriptionRecipients?: number;
  /** This indicates that there is an ongoing operation to either disable or enable the report subscription feature. none means that no such operation is ongoing. enabling/disabling means that system is currently enabling/disabling the feature */
  readonly reportSubscriptionStatus?: "none" | "enabling" | "disabling";
  /** UTC timestamp of the most recent change of reportSubscriptionStatus. If there has not been any such change, this is the timestamp of the initial creation of the record. */
  readonly reportSubscriptionStatusChangeTime?: string;
  /** Whether the license for the tenant has the reportingService feature enabled. */
  "reporting-service-license-status"?: "enabled" | "disabled";
  /** This indicates that there is an ongoing operation to either disable or enable the reporting template subscription feature. none means that no such operation is ongoing. enabling/disabling means that system is currently enabling/disabling the feature */
  readonly reportingTemplateSubscriptionStatus?: "none" | "enabling" | "disabling";
  /** UTC timestamp of the most recent change of reportSubscriptionStatus. If there has not been any such change, this is the timestamp of the initial creation of the record. */
  readonly reportingTemplateSubscriptionStatusChangeTime?: string;
  /** These persisted sharing settings are only available for this tenant. Extracted from request JWT. */
  readonly tenantId?: string;
};
type SharingSettingsPatchCompliant = {
  /** The operation to be performed. */
  op: "replace";
  /** The path for the given resource field to patch. */
  path: "/enable-sharing" | "/enable-report-subscription" | "/enable-reporting-template-subscription";
  /** The value to be used for this operation. */
  value?: unknown;
};
/**
 * A JSON Patch document as defined in https://datatracker.ietf.org/doc/html/rfc6902.
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/enable-sharing",
 *     value: true
 *   },
 *   {
 *     op: "replace",
 *     path: "/enable-sharing",
 *     value: false
 *   },
 *   {
 *     op: "replace",
 *     path: "/enable-report-subscription",
 *     value: true
 *   },
 *   {
 *     op: "replace",
 *     path: "/enable-report-subscription",
 *     value: false
 *   },
 *   {
 *     op: "replace",
 *     path: "/enable-reporting-template-subscription",
 *     value: true
 *   },
 *   {
 *     op: "replace",
 *     path: "/enable-reporting-template-subscription",
 *     value: false
 *   }
 * ]
 */
type SharingSettingsPatchCompliantList = SharingSettingsPatchCompliant[];
/**
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/name"
 *   },
 *   {
 *     op: "replace",
 *     path: "/tags",
 *     value: [
 *       "tag1",
 *       "tag2"
 *     ]
 *   },
 *   {
 *     op: "replace",
 *     path: "/tags"
 *   },
 *   {
 *     op: "replace",
 *     path: "/tags"
 *   },
 *   {
 *     op: "replace",
 *     path: "/ownerId"
 *   },
 *   {
 *     op: "replace",
 *     path: "/enabled",
 *     value: true
 *   },
 *   {
 *     op: "replace",
 *     path: "/description"
 *   }
 * ]
 */
type SharingTaskPatchRequestCompliantList = SharingTaskRecurringPatchRequestCompliant[];
type SharingTaskRecurringCreateRequest = {
  /** @deprecated
   * Name of the app associated (through the templates) with this sharing task */
  appName?: string;
  /** the id of the data connection */
  dataConnectionID?: string;
  /** Description of the sharing task */
  description?: string;
  /** the id of the distribution list associated to the app */
  distributionListId?: string;
  emailContent?: EmailComposition;
  /** Toggle for enabling sharing task. */
  enabled?: boolean;
  /** making this true will execute the sharing task upon creation regardless of next trigger */
  executeOnCreation?: boolean;
  /** Timestamp for the termination of the task */
  expiration?: string;
  /** Message along with sharing task */
  message?: string;
  /** Name of this sharing task */
  name: string;
  /** List of recipients. An internal recipient is represented by their user id. */
  recipients?: SharingTaskRecurringRecipients;
  retentionPolicy?: RetentionPolicy;
  scheduleOptions?: ScheduleOptions;
  /** the SharePoint folder to upload the report to */
  sharePointFolder?: string;
  /** Space ID of the sharing task */
  spaceId?: string;
  /** Time to start capturing the history */
  startTime?: string;
  /** State of the selections and jsOpts */
  state: State;
  /** @deprecated
   * the sharing task resource mashup sub type. */
  subType?: "pdf" | "pptx" | "xlsx" | "html";
  /** used to assign sharing task to a collection bucket (tags) */
  tags?: string[];
  templates: TemplateResult[];
  /** the transport type for the report */
  transportChannels?: ("email" | "sharepoint")[];
  trigger?: Trigger;
  /** the sharing task resource type. */
  type: "chart-monitoring" | "chart-sharing" | "sheet-sharing" | "template-sharing";
};
type SharingTaskRecurringListResponse = StandardListResponseProps & {
  links?: ListLinks;
  /** List of recipients. An internal recipient is represented by their user id. */
  recipients?: SharingTaskRecurringRecipients;
  /** Gets a list of recurring sharing tasks. */
  sharingTasks?: SharingTaskRecurringResponse[];
};
type SharingTaskRecurringPatchRequestCompliant = {
  /** The operation to be performed */
  op: "replace" | "remove";
  /** A JSON Patch document as defined in http://tools.ietf.org/html/rfc6902 */
  path: "/name" | "/tags" | "/ownerId" | "/enabled" | "/description" | "/scheduleOptions" | "/templates" | "/recipients" | "/recipient" | "/sharePointFolder" | "/dataConnectionID" | "/transportChannels" | "/bookmarkId";
  /** The value to be used for this operation. */
  value?: unknown;
};
/**
 * Type of object stored in the database. Required fields mean that property cannot be null
 */
type SharingTaskRecurringPersist = {
  /** ID of the app associated (through the templates) with this sharing task */
  appId?: string;
  /** Name of the app associated (through the templates) with this sharing task */
  appName?: string;
  /** internal identifier used when migrating keys */
  byokMigrationId?: string;
  /** ID of creator */
  createdBy?: string;
  /** the id of the data connection */
  dataConnectionID?: string;
  /** Timestamp for the creation of the task */
  dateCreated?: string;
  /** A description of this sharing task */
  description?: string;
  /** the id of the distribution list associated to the app */
  distributionListId?: string;
  emailContent?: EmailComposition;
  /** Toggle for enabling sharing task (system level). Example: when task owner gets enabled/ disabled. */
  enabledBySystem?: boolean;
  /** Toggle for enabling sharing task (user level). Example: user chooses to enable/ disable task. */
  enabledByUser?: boolean;
  /** the subject and body content for the email to send on report subscriptions */
  encryptedEmailContent?: SharingTaskRecurringPersistEncryptedEmailContent;
  /** Encrypted property in DB */
  encryptedState?: EncryptedProperty;
  /** Encrypted property in DB */
  encryptedTemplates?: EncryptedProperty;
  /** making this true will execute the sharing task upon creation regardless of next trigger */
  executeOnCreation?: boolean;
  /** Time for the termination of the task */
  expiration?: string;
  /** the number of consecutive failed executions for all recipeints. This is reset on a successful execution for at least one recipient */
  failedExecutionsCount?: number;
  /** the number of failed verifications. This is reset on a successful verification */
  failedVerificationsCount?: number;
  /** true if the associated app has section access enabled */
  hasSectionAccess?: boolean;
  /** Gets the sharing task resource identifier. */
  id?: string;
  /** The direct insights URL for the first template of this sharing task. (currently not used in multi-sheet scenarios) */
  insightDirectURL?: string;
  /** The insights fallback URL for the first template of this sharing task. (currently not used in multi-sheet scenarios) */
  insightFallbackURL?: string;
  /** The identifier for the insight URLs in this sharing task. Needed to remove the permanent insight upon task deletion. (currently not used in multi-sheet scenarios) */
  insightID?: string;
  /** true if the sharing task is a candidate for verification */
  isCandidateForVerification?: boolean;
  /** The last execution end date time timestamp of the task */
  readonly lastExecutionDate?: string;
  /** The last execution start date time timestamp of the task */
  lastRun?: string;
  /** Timestamp of the most recent update. */
  lastUpdated?: string;
  /** Timestamp of the most recent view by the user. */
  lastViewed?: string;
  /** Message along with sharing task */
  message?: string;
  /** Contains one or more insight links. Currently only used in multi sheet scenarios. Sharing will ensure that the persisted sort order is aligned to the order of sheets provided. */
  multiInsightURLs?: InsightURL[];
  /** Name of this sharing task */
  name?: string;
  /** Time for the next scheduled run */
  nextScheduledRun?: string;
  /** User id of owner of the sharing task */
  owner?: string;
  /** User name of owner of the sharing task */
  ownerName?: string;
  /** flag sent by UI to configure the persistent bookmark to use variables */
  persistentBookmarkIncludeVariables?: boolean;
  /** List of persisted recipients. */
  recipients?: RecipientsPersist;
  reportProperties?: unknown;
  retentionPolicy?: RetentionPolicy;
  scheduleOptions?: ScheduleOptions;
  /** reporting service returns rendering errors for missing selections */
  selectionErrors?: unknown;
  /** the SharePoint folder to upload the report to */
  sharePointFolder?: string;
  /** spaceId of the app associated to this task definition */
  spaceId?: string;
  /** Time to start capturing the history */
  startTime?: string;
  /** State of the selections and jsOpts */
  state?: State;
  /** the status of this recurring sharing task */
  readonly statusCode?: "CHART_NOT_FOUND" | "APP_NOT_FOUND" | "STORY_NOT_FOUND" | "SHEET_NOT_FOUND" | "ENGINE_POD_NOT_AVAILABLE" | "APP_FORBIDDEN" | "CHART_TYPE_NOT_ALLOWED" | "FAILED" | "DELETING" | "IN_PROGRESS" | "VALID" | "MAX_FAILURES_REACHED" | "BOOKMARK_NOT_FOUND" | "CANCELLING" | "CANCELLED" | "REPORTING_CONSUMPTION_EXCEEDED" | "REPORTING_CAPABILITY_NOT_FOUND";
  /** error message indicating the underlying failure */
  readonly statusLabel?: string;
  /** @deprecated
   * Mashup subType of sharing task */
  readonly subType?: "pdf" | "pptx" | "xlsx" | "html";
  tags?: string[];
  taskErrors?: TaskError[];
  /** @deprecated
   * ID of unique template */
  readonly templateId?: string;
  templates?: TemplateResult[];
  /** Tenant of the sharing task */
  tenant?: string;
  thumbnail?: string;
  /** the transport type for the report */
  transportChannels?: ("email" | "sharepoint")[];
  trigger?: Trigger;
  /** The sharing task resource type */
  type?: "chart-monitoring" | "chart-sharing" | "sheet-sharing" | "template-sharing";
  /** ID of a user that updated this task last */
  updatedBy?: string;
};
/**
 * the subject and body content for the email to send on report subscriptions
 */
type SharingTaskRecurringPersistEncryptedEmailContent = {
  /** Encrypted property in DB */
  body?: EncryptedProperty;
  /** Encrypted property in DB */
  subject?: EncryptedProperty;
};
/**
 * List of recipients. An internal recipient is represented by their user id.
 */
type SharingTaskRecurringRecipients = {
  DLGroups?: unknown[];
  DLUsers?: unknown[];
  emailAddresses?: string[];
  userIds?: UserIDRecipient[];
};
/**
 * Whatever is persisted in the db + links
 */
type SharingTaskRecurringResponse = SharingTaskRecurringPersist & {
  /** true if the sharing task is enabled */
  enabled?: boolean;
  /** URL to querying the files of the latest execution tied to this sharing task */
  latestExecutionFilesURL?: string[];
  /** URL to querying the latest execution tied to this sharing task */
  latestExecutionURL?: string;
  links?: Links;
};
/**
 * @deprecated
 */
type SheetTemplate = {
  /** ID of app */
  appId?: string;
  /** heightPx of chart */
  heightPx?: number;
  /** @deprecated
   * optional value to indicate that this sheet is private (used in multi-sheet sharing) */
  isPrivate?: boolean;
  /** Sheet state from client as a string json value. Can include language, theme, viewState etc. */
  jsOpts?: unknown;
  jsOptsById?: Record<string, unknown>;
  patchesById?: Record<string, unknown[]>;
  /** ID of sheet */
  sheetId?: string;
  /** @deprecated
   * an optional name for the sheet (used in multi-sheet sharing) */
  sheetName?: string;
  /** widthPx of chart */
  widthPx?: number;
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
/**
 * State of the selections and jsOpts
 */
type State = {
  /** Selected fields that led to discovery of monitored Insight Advisor chart */
  fields?: unknown[];
  /** Query that led to discovery of monitored Insight Advisor chart */
  queryItems?: unknown[];
  selections?: Selection[];
};
type StoryTemplate = {
  /** ID of app */
  appId?: string;
  /** ID of story */
  storyId?: string;
};
/**
 * User that this execution is targeting as a recipient
 */
type TargetUser = {
  /** @deprecated */
  filterName?: string;
  filterNames?: string[];
  /** timezone for the timestamp on the attached file name */
  timezone?: string;
  /** type of user eg email, userId, groupId */
  type?: string;
  /** contains the value of user type e.g. abc@xyz.com, 213efewr3 */
  value?: string;
};
type TaskError = {
  /** Timestamp for the creation of the error */
  timestamp?: string;
  /** Identifier for type of error occurring on sharing task */
  value?: "OWNER_DISABLED" | "OWNER_ACCESS" | "OWNER_LICENSE" | "APP_DELETED" | "NO_RECIPIENTS" | "PARTIAL_ACCESS" | "ORPHAN" | "PARTIAL_SENT" | "FATAL_SENT_ERROR" | "SECTION_ACCESS_MODIFIED" | "INVALID_DISTRIBUTION_LIST" | "MAX_DL_RECIPIENTS_LIMIT_REACHED" | "TEMPLATE_NOT_FOUND" | "REPORTING_BOOKMARK_NOT_FOUND" | "DATA_CONNECTION_NOT_FOUND" | "INVALID_SHAREPOINT_DIRECTORY" | "GENERIC_FILE_UPLOAD_ERROR" | "DISABLED_DUE_TO_OWNERSHIP_CHANGE" | "REPORTING_CONSUMPTION_EXCEEDED" | "REPORTING_CAPABILITY_NOT_FOUND" | "EXECUTION_TIME_OUT" | "OWNER_INSUFFICIENT_PERMISSIONS" | "MAX_UNIQUE_REPORTS_LIMIT_REACHED" | "MISSING_DISTRIBUTION_LIST" | "SECTION_ACCESS_NOT_SUPPORTED";
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
 * Depending on the value of type, sharing service will internally validate a specific property regarding its data. Type "file" validates property "fileData", type "chart" validates property "chartData", type "story" validates property "storyData". Check description of each of the models for their required properties.
 */
type TemplatePersist = {
  /** If the template type is not "chart", this can be null. Otherwise, the following properties are required: appId, sheetId, objectId, widthPx, heightPx, language. The following properties are optional: outZoom, outDpi */
  chartData?: ChartTemplate;
  /** fileAlias provide an opaqueId for the client which can be used to filter and select the report generated */
  fileAlias?: string;
  /** fileName to be used when generating the report */
  fileName?: string;
  /** file name timestamp to be used when generating the report */
  fileTimeStamp?: "yyyy-MM-dd" | "yyyy-MM-dd_HH-mm" | "yyyyMMdd" | "yyyyMMdd_HH-mm";
  /** array of sheet data for multi-sheet type template */
  multiSheetData?: MultiSheetTemplate[];
  /** @deprecated */
  sheetData?: SheetTemplate;
  storyData?: StoryTemplate;
  subType?: "image" | "snapshot" | "pdf" | "pptx" | "xlsx" | "qpxp" | "qhtml";
  /** @deprecated
   * ID of unique template */
  readonly templateId?: string;
  type: "file" | "chart" | "story" | "sheet" | "multi-sheet" | "excel" | "pixel-perfect" | "html";
};
type TemplateResult = TemplatePersist & unknown;
type Trigger = {
  /** The chronosJobId which triggers the sharing task */
  readonly chronosJobID?: string;
  /** Toggle for executing sharing task on app reload. */
  executeOnAppReload?: boolean;
  /** To prevent overflow in the history, setting this to daily store the chart of a previous day in the history and maintain the live version with the tag latest. */
  executionHistoryInterval?: "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "quarterly" | "yearly";
  /** List of RRULE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND, UNTIL lines are not allowed in this field; event start and end times are specified in the start and end fields. RDATE and EXDATE lines are not currently supported. EXRULE is not supported since it is deprecated by RFC5545. This field is omitted for single events. */
  recurrence: string[];
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
 * recipient object model that is directly persisted in the DB
 */
type UserIDRecipientPersist = {
  alertingTaskRecipientErrors?: AlertingTaskRecipientError[];
  /** Whether this recipient can receive alerts, set by external settings. */
  enabledBySystem?: boolean;
  /** Whether this recipient can receive alerts, set by api calls. */
  enabledByUser?: boolean;
  /** A list of associated groups. If a user is added individually the "addedIndividually" pseudo group is included */
  groups?: string[];
  /** Whether this user is subscribed to alerts in this task */
  subscribed?: boolean;
  taskRecipientErrors?: TaskRecipientError[];
  /** User ID of recipient (internal user). */
  value?: string;
};
/**
 * Retrieves all sharing tasks accessible to the user. Users assigned the `TenantAdmin` or `AnalyticsAdmin` role can view all tasks.
 *
 * @param query an object with query parameters
 * @throws GetSharingTasksHttpError
 */
declare function getSharingTasks(query: {
  /** the filter by sharing task resource app id. TenantAdmin users may omit this parameter to list all sharing-tasks in the tenant. */
  appid?: string;
  /** Indicates if task with the status DELETING should be excluded from the list */
  excludeDeleting?: boolean;
  /** Limit the returned result set */
  limit?: number;
  /** @deprecated
   * The cursor to the next page of data. Only one of next or previous may be specified. */
  next?: string;
  /** Offset for finding a list of entities - used for pagination */
  offset?: number;
  /** the filter by sharing task resource owner id. */
  owner?: string;
  /** the filter by sharing task resource owner name. */
  ownername?: string;
  /** The cursor to the page of data. */
  page?: string;
  /** @deprecated
   * The cursor to the previous page of data. Only one of next or previous may be specified. */
  prev?: string;
  /** the filter by sharing task resource role. */
  role?: ("owner" | "recipient")[];
  /** Sort the returned result set by the specified field */
  sort?: ("-datecreated" | "datecreated" | "+datecreated" | "-name" | "name" | "+name" | "-ownername" | "ownername" | "+ownername" | "-enabled" | "enabled" | "+enabled" | "-status" | "status" | "+status" | "-type" | "type" | "+type" | "-sent" | "sent" | "+sent" | "-scheduled" | "scheduled" | "+scheduled" | "-appname" | "appname" | "+appname" | "-appid" | "appid" | "+appid")[];
  /** array of template ids to filter by */
  templateId?: string[];
  /** the filter by sharing task resource type. If type is template-sharing only and user is not tenant admin, appid is also required. */
  type?: ("chart-monitoring" | "chart-sharing" | "sheet-sharing" | "template-sharing")[];
}, options?: ApiCallOptions): Promise<GetSharingTasksHttpResponse>;
type GetSharingTasksHttpResponse = {
  data: SharingTaskRecurringListResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetSharingTasksHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetSharingTasksHttpResponse>;
};
type GetSharingTasksHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Creates a new recurring sharing task.
 *
 * @param body an object with the body content
 * @throws CreateSharingTaskHttpError
 */
declare function createSharingTask(body: SharingTaskRecurringCreateRequest, options?: ApiCallOptions): Promise<CreateSharingTaskHttpResponse>;
type CreateSharingTaskHttpResponse = {
  data: SharingTaskRecurringResponse;
  headers: Headers;
  status: 201;
};
type CreateSharingTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Requests execution of the specified recurring sharing task.
 *
 * @param body an object with the body content
 * @throws ExecuteSharingTasksHttpError
 */
declare function executeSharingTasks(body: SharingActionsTriggerCreateRequest, options?: ApiCallOptions): Promise<ExecuteSharingTasksHttpResponse>;
type ExecuteSharingTasksHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type ExecuteSharingTasksHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Retrieves the current settings for sharing tasks, reports, and other related configuration.
 *
 * @throws GetSharingTasksSettingsHttpError
 */
declare function getSharingTasksSettings(options?: ApiCallOptions): Promise<GetSharingTasksSettingsHttpResponse>;
type GetSharingTasksSettingsHttpResponse = {
  data: SharingSettings;
  headers: Headers;
  status: 200;
};
type GetSharingTasksSettingsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Patches the toggle settings for sharing tasks, reports, and other related configuration in the tenant. User must be assigned the `TenantAdmin` role.
 *
 * @param body an object with the body content
 * @throws UpdateSharingTasksSettingsHttpError
 */
declare function updateSharingTasksSettings(body: SharingSettingsPatchCompliantList, options?: ApiCallOptions): Promise<UpdateSharingTasksSettingsHttpResponse>;
type UpdateSharingTasksSettingsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type UpdateSharingTasksSettingsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Updates the settings for sharing tasks, reports, and other related configuration in the tenant. User must be assigned the `TenantAdmin` role.
 *
 * @param body an object with the body content
 * @throws ConfigureSharingTasksSettingsHttpError
 */
declare function configureSharingTasksSettings(body: APISettingsUpload, options?: ApiCallOptions): Promise<ConfigureSharingTasksSettingsHttpResponse>;
type ConfigureSharingTasksSettingsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type ConfigureSharingTasksSettingsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Deletes a specific sharing task.
 *
 * @param taskId The sharing task identifier.
 * @throws DeleteSharingTaskHttpError
 */
declare function deleteSharingTask(taskId: string, options?: ApiCallOptions): Promise<DeleteSharingTaskHttpResponse>;
type DeleteSharingTaskHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteSharingTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Returns the details of a specific sharing task.
 *
 * @param taskId The sharing task identifier.
 * @param query an object with query parameters
 * @throws GetSharingTaskHttpError
 */
declare function getSharingTask(taskId: string, query: {
  /** Determines whether to update the `lastViewed` property for the sharing task, which is used to determine whether the sharing task is still in use. If set to `true`, this will be updated to current time. */
  isViewChart?: boolean;
}, options?: ApiCallOptions): Promise<GetSharingTaskHttpResponse>;
type GetSharingTaskHttpResponse = {
  data: SharingTaskRecurringResponse;
  headers: Headers;
  status: 200;
};
type GetSharingTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Updates one or more properties of a specific sharing task.
 *
 * @param taskId The sharing task identifier.
 * @param body an object with the body content
 * @throws PatchSharingTaskHttpError
 */
declare function patchSharingTask(taskId: string, body: SharingTaskPatchRequestCompliantList, options?: ApiCallOptions): Promise<PatchSharingTaskHttpResponse>;
type PatchSharingTaskHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchSharingTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Requests cancellation of an execution of the specified recurring sharing task.
 *
 * @param taskId The sharing task identifier.
 * @throws CancelSharingTaskHttpError
 */
declare function cancelSharingTask(taskId: string, options?: ApiCallOptions): Promise<CancelSharingTaskHttpResponse>;
type CancelSharingTaskHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type CancelSharingTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Lists executions for the specified sharing task.
 *
 * @param taskId The sharing task identifier.
 * @param query an object with query parameters
 * @throws GetSharingTaskExecutionsHttpError
 */
declare function getSharingTaskExecutions(taskId: string, query: {
  /** Limit the returned result set */
  limit?: number;
  /** The cursor to the next page of data. Only one of next or previous may be specified. */
  next?: string;
  /** Offset for pagination - how many elements to skip */
  offset?: number;
  /** The cursor to the previous page of data. Only one of next or previous may be specified. */
  prev?: string;
  /** Sort the returned result set by the specified field */
  sort?: ("starttime" | "-starttime" | "+starttime")[];
  /** Specifies a filter for a particular field and value of an execution */
  status?: "successful" | "failed";
}, options?: ApiCallOptions): Promise<GetSharingTaskExecutionsHttpResponse>;
type GetSharingTaskExecutionsHttpResponse = {
  data: SharingExecutionListResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetSharingTaskExecutionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetSharingTaskExecutionsHttpResponse>;
};
type GetSharingTaskExecutionsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Retrieves a specific sharing task execution.
 *
 * @param taskId The sharing task identifier.
 * @param executionId The execution identifier. If value is "latest", the latest execution will be returned
 * @param query an object with query parameters
 * @throws GetSharingTaskExecutionHttpError
 */
declare function getSharingTaskExecution(taskId: string, executionId: string, query: {
  /** Filter by status. If not present then no filtering is done on the status. This is only relevant when requesting latest execution. */
  status?: "successful" | "failed" | "cancelled";
}, options?: ApiCallOptions): Promise<GetSharingTaskExecutionHttpResponse>;
type GetSharingTaskExecutionHttpResponse = {
  data: SharingExecutionResponse;
  headers: Headers;
  status: 200;
};
type GetSharingTaskExecutionHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Retrieves the file content for the requested execution and file type.
 *
 * @param taskId The sharing task identifier.
 * @param executionId The execution identifier.
 * @param fileAlias The execution identifier. If value is "latest", the latest execution will be returned
 * @param query an object with query parameters
 * @throws GetSharingTaskExecutionFileHttpError
 */
declare function getSharingTaskExecutionFile(taskId: string, executionId: string, fileAlias: string, query: {
  /** Filter by status. If not present then no filtering is done on the status. This is only relevant when requesting latest execution. */
  status?: "successful" | "failed" | "cancelled";
}, options?: ApiCallOptions): Promise<GetSharingTaskExecutionFileHttpResponse>;
type GetSharingTaskExecutionFileHttpResponse = {
  data: DownloadableBlob;
  headers: Headers;
  status: 200;
};
type GetSharingTaskExecutionFileHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Clears the cache for sharing-tasks api requests.
 */
declare function clearCache(): void;
interface SharingTasksAPI {
  /**
   * Retrieves all sharing tasks accessible to the user. Users assigned the `TenantAdmin` or `AnalyticsAdmin` role can view all tasks.
   *
   * @param query an object with query parameters
   * @throws GetSharingTasksHttpError
   */
  getSharingTasks: typeof getSharingTasks;
  /**
   * Creates a new recurring sharing task.
   *
   * @param body an object with the body content
   * @throws CreateSharingTaskHttpError
   */
  createSharingTask: typeof createSharingTask;
  /**
   * Requests execution of the specified recurring sharing task.
   *
   * @param body an object with the body content
   * @throws ExecuteSharingTasksHttpError
   */
  executeSharingTasks: typeof executeSharingTasks;
  /**
   * Retrieves the current settings for sharing tasks, reports, and other related configuration.
   *
   * @throws GetSharingTasksSettingsHttpError
   */
  getSharingTasksSettings: typeof getSharingTasksSettings;
  /**
   * Patches the toggle settings for sharing tasks, reports, and other related configuration in the tenant. User must be assigned the `TenantAdmin` role.
   *
   * @param body an object with the body content
   * @throws UpdateSharingTasksSettingsHttpError
   */
  updateSharingTasksSettings: typeof updateSharingTasksSettings;
  /**
   * Updates the settings for sharing tasks, reports, and other related configuration in the tenant. User must be assigned the `TenantAdmin` role.
   *
   * @param body an object with the body content
   * @throws ConfigureSharingTasksSettingsHttpError
   */
  configureSharingTasksSettings: typeof configureSharingTasksSettings;
  /**
   * Deletes a specific sharing task.
   *
   * @param taskId The sharing task identifier.
   * @throws DeleteSharingTaskHttpError
   */
  deleteSharingTask: typeof deleteSharingTask;
  /**
   * Returns the details of a specific sharing task.
   *
   * @param taskId The sharing task identifier.
   * @param query an object with query parameters
   * @throws GetSharingTaskHttpError
   */
  getSharingTask: typeof getSharingTask;
  /**
   * Updates one or more properties of a specific sharing task.
   *
   * @param taskId The sharing task identifier.
   * @param body an object with the body content
   * @throws PatchSharingTaskHttpError
   */
  patchSharingTask: typeof patchSharingTask;
  /**
   * Requests cancellation of an execution of the specified recurring sharing task.
   *
   * @param taskId The sharing task identifier.
   * @throws CancelSharingTaskHttpError
   */
  cancelSharingTask: typeof cancelSharingTask;
  /**
   * Lists executions for the specified sharing task.
   *
   * @param taskId The sharing task identifier.
   * @param query an object with query parameters
   * @throws GetSharingTaskExecutionsHttpError
   */
  getSharingTaskExecutions: typeof getSharingTaskExecutions;
  /**
   * Retrieves a specific sharing task execution.
   *
   * @param taskId The sharing task identifier.
   * @param executionId The execution identifier. If value is "latest", the latest execution will be returned
   * @param query an object with query parameters
   * @throws GetSharingTaskExecutionHttpError
   */
  getSharingTaskExecution: typeof getSharingTaskExecution;
  /**
   * Retrieves the file content for the requested execution and file type.
   *
   * @param taskId The sharing task identifier.
   * @param executionId The execution identifier.
   * @param fileAlias The execution identifier. If value is "latest", the latest execution will be returned
   * @param query an object with query parameters
   * @throws GetSharingTaskExecutionFileHttpError
   */
  getSharingTaskExecutionFile: typeof getSharingTaskExecutionFile;
  /**
   * Clears the cache for sharing-tasks api requests.
   */
  clearCache: typeof clearCache;
}
/**
 * Functions for the sharing-tasks api
 */
declare const sharingTasksExport: SharingTasksAPI;
//#endregion
export { APISettingsUpload, AlertingTaskGroupRecipientError, AlertingTaskRecipientError, CancelSharingTaskHttpError, CancelSharingTaskHttpResponse, ChartTemplate, ConfigureSharingTasksSettingsHttpError, ConfigureSharingTasksSettingsHttpResponse, CreateSharingTaskHttpError, CreateSharingTaskHttpResponse, DeleteSharingTaskHttpError, DeleteSharingTaskHttpResponse, EmailAddressRecipientPersist, EmailComposition, EncryptedProperty, Error, ErrorMeta, Errors, ExecuteSharingTasksHttpError, ExecuteSharingTasksHttpResponse, GetSharingTaskExecutionFileHttpError, GetSharingTaskExecutionFileHttpResponse, GetSharingTaskExecutionHttpError, GetSharingTaskExecutionHttpResponse, GetSharingTaskExecutionsHttpError, GetSharingTaskExecutionsHttpResponse, GetSharingTaskHttpError, GetSharingTaskHttpResponse, GetSharingTasksHttpError, GetSharingTasksHttpResponse, GetSharingTasksSettingsHttpError, GetSharingTasksSettingsHttpResponse, GroupIDRecipientPersist, InsightURL, Links, ListLinks, MultiSheetTemplate, Page, PatchSharingTaskHttpError, PatchSharingTaskHttpResponse, RecipientsPersist, RetentionPolicy, ScheduleOptions, Selection, Self, SharingActionsTriggerCreateRequest, SharingExecutionError, SharingExecutionErrors, SharingExecutionFile, SharingExecutionListResponse, SharingExecutionPersist, SharingExecutionResponse, SharingSettings, SharingSettingsPatchCompliant, SharingSettingsPatchCompliantList, SharingTaskPatchRequestCompliantList, SharingTaskRecurringCreateRequest, SharingTaskRecurringListResponse, SharingTaskRecurringPatchRequestCompliant, SharingTaskRecurringPersist, SharingTaskRecurringPersistEncryptedEmailContent, SharingTaskRecurringRecipients, SharingTaskRecurringResponse, SharingTasksAPI, SheetTemplate, StandardListResponseProps, State, StoryTemplate, TargetUser, TaskError, TaskGroupRecipientError, TaskRecipientError, TemplatePersist, TemplateResult, Trigger, UpdateSharingTasksSettingsHttpError, UpdateSharingTasksSettingsHttpResponse, UserIDRecipient, UserIDRecipientPersist, cancelSharingTask, clearCache, configureSharingTasksSettings, createSharingTask, deleteSharingTask, executeSharingTasks, getSharingTask, getSharingTaskExecution, getSharingTaskExecutionFile, getSharingTaskExecutions, getSharingTasks, getSharingTasksSettings, patchSharingTask, sharingTasksExport, updateSharingTasksSettings };