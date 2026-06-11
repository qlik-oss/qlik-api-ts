import { w as DownloadableBlob, x as ApiCallOptions } from "./chunks/auth-types-BAiSvIRn.js";
//#region src/public/rest/di-projects.d.ts
type AsyncActionDetails = {
  endTime?: string;
  error?: AsyncActionError; /** Name of the async operation */
  name?: string;
  startTime?: string; /** State of the action */
  state?: AsyncCallStatus;
  taskDetails?: {
    error?: AsyncActionError; /** Additional details about task state */
    info?: string;
    name?: string; /** State of the action */
    state?: AsyncCallStatus;
    taskId?: string;
  }[];
  taskProgress?: AsyncActionTaskProgress; /** Type of action being performed */
  type?: AsyncActionType;
};
type AsyncActionError = {
  /** Error code */code?: string; /** Additional error details */
  details?: string; /** Error message */
  message?: string;
};
type AsyncActionRsp = {
  /** Identifier for tracking the action */actionId: string;
};
type AsyncActionTaskProgress = {
  /** Number of tasks canceled */canceled?: number; /** Number of tasks completed successfully */
  completed?: number; /** Number of tasks currently executing */
  executing?: number; /** Number of tasks that failed */
  failed?: number; /** Number of tasks pending execution */
  pending?: number; /** Number of tasks skipped due to conflicts */
  skipped?: number;
};
/**
 * Type of action being performed
 */
type AsyncActionType = "PROJECT_PREPARE" | "PROJECT_VALIDATE" | "TASK_PREPARE" | "TASK_VALIDATE";
/**
 * State of the action
 */
type AsyncCallStatus = "PENDING" | "EXECUTING" | "COMPLETED" | "FAILED" | "CANCELED" | "SKIPPED";
type CreateDiProjectReq = {
  /** The cloud staging connection string */cloudStagingConnection?: string; /** A description of the project */
  description?: string; /** The name of the project */
  name?: string; /** The platform connection string */
  platformConnection?: string; /** The platform type of the project. Supported values: - SNOWFLAKE: Snowflake - BIGQUERY: Google BigQuery - SYNAPSE: Azure Synapse - DATABRICKS: Databricks - REDSHIFT: Amazon Redshift - MSSQL: Microsoft SQL Server - FABRIC: Microsoft Fabric (OneLake) - QLIK_QVD: Qlik-managed QVD - QLIK_QVD_CUSTOMER_MANAGED: Customer-managed QVD - QLIK_OPEN_LAKEHOUSE: Qlik Open Lakehouse - NONE: No platform (e.g. replication-only projects) */
  platformType?: PlatformType; /** The ID of the space where the project will be created */
  space?: string; /** The type of the project */
  type?: "DATA_PIPELINE" | "DATA_MOVEMENT";
};
/**
 * Represents the execution state of a single dataset within a task run, including full load, CDC, and streaming progress.
 */
type DataTaskDatasetState = {
  /** Change Data Capture state for the dataset, tracking incremental changes applied and any errors. */cdcStatus?: {
    /** Number of DDL statements executed during the last run */ddlCount?: number; /** delete portion of totalProcessedCount. Only available for some task types */
    deleteCount?: number; /** Number of incoming changes for the dataset. Only relevant for 'Iceberg Storage' and 'Streaming Transform' tasks. */
    incomingChangesCount?: number; /** Insert portion of totalProcessedCount. Only available for some task types */
    insertCount?: number;
    lastProcessed?: string;
    message?: string;
    state?: "QUEUED" | "PROCESSING" | "ACCUMULATING_CHANGES" | "COMPLETED" | "ERROR"; /** Total number of changes/DMLs applied to the dataset */
    totalProcessedCount?: number; /** Number of records that are queryable via the view, but not yet merged into optimized Iceberg partitions. Only relevant for 'Iceberg Storage' and 'Streaming Transform' tasks. */
    unoptimizedRecordsCount?: number; /** update portion of totalProcessedCount. Only available for some task types */
    updateCount?: number;
  }; /** Is the data ready for use? */
  dataReadiness?: "READY" | "NOT_READY" | "ERROR"; /** Id of the dataset */
  datasetId?: string;
  fullLoad?: {
    /** Number of changes captured and cached during full load (CDC landing/replication tasks only) */cachedChangesCount?: number; /** Duration in HH:MM:SS format (hours:minutes:seconds) */
    duration?: string;
    endTime?: string; /** Number of records that failed to load (currently only for knowledge marts) */
    failedRecordsCount?: number; /** Statistics for file-based tasks. */
    fileStats?: FileStatistics;
    message?: string;
    startTime?: string;
    state?: "QUEUED" | "LOADING" | "COMPLETED" | "ERROR"; /** Number of records (or docs in knowledge marts) were loaded. */
    totalProcessedCount?: number;
  };
  lastBatchOfChanges?: {
    /** Duration in HH:MM:SS format (hours:minutes:seconds) */duration?: string;
    endTime?: string; /** Statistics for file-based tasks. */
    fileStats?: FileStatistics;
    message?: string; /** Breakdown of operations for record-oriented tasks. */
    operationStats?: OperationStatistics;
    startTime?: string;
    state?: "QUEUED" | "PROCESSING" | "COMPLETED" | "ERROR"; /** Throughput in records per second */
    throughputInRecordsPerSecond?: number;
    totalProcessedCount?: number;
  }; /** Name of the dataset */
  name?: string; /** Original name of the dataset, relevant only for data movement tasks */
  sourceName?: string; /** Real-time streaming state for the dataset, tracking record processing and transformation statistics. */
  streaming?: {
    /** Timestamp of the latest source record inserted into the target dataset. */lastProcessed?: string;
    message?: string; /** Number of records that had parsing issues */
    parseIssueCount?: number; /** Total number of records filtered out and not written to the dataset */
    recordsFilteredCount?: number; /** Total number of records written to the dataset */
    recordsWrittenCount?: number;
    state?: "QUEUED" | "RUNNING" | "ERROR"; /** Total number of processed changes for the dataset */
    totalProcessedCount?: number; /** Queryable records pending merge into optimized Iceberg partitions. */
    unoptimizedRecordsCount?: number;
  };
};
/**
 * Represents the execution state of a task instance, including progress metrics, errors, and operation-specific statistics.
 */
type DataTaskInstanceState = {
  /** Change Data Capture status information for tasks performing incremental updates, including latency and processing counts. */cdcStatus?: {
    accumulatingChangesCount?: number;
    applyingChangesCount?: number; /** Number of incoming changes. Only relevant for 'Iceberg Storage' and 'Streaming Transform' tasks. */
    incomingChangesCount?: number; /** Duration in HH:MM:SS format (hours:minutes:seconds) */
    latency?: string; /** Throughput in kilobytes per second */
    throughputInKilobytesPerSecond?: number;
    totalProcessedCount?: number;
  }; /** Duration in HH:MM:SS format (hours:minutes:seconds) */
  duration?: string; /** Timestamp indicating when the task instance ended */
  endTime?: string; /** List of errors encountered during the last run */
  errors?: Error[]; /** Statistics for the full load phase of the task run, tracking dataset processing progress. */
  fullLoad?: {
    /** Number of datasets that have completed full load in this task run */completedCount?: number; /** Number of datasets that have failed full load in this task run */
    errorCount?: number; /** Number of datasets that are currently being loaded in this task run */
    loadingCount?: number; /** Number of datasets that are queued for full load in this task run */
    queuedCount?: number;
  }; /** Overall task execution statistics including dataset counts, data freshness timestamps, and infrastructure details. */
  general?: {
    /** The latest point in time the data reflects, based on updates from the source system. */dataTaskUpdatedTo?: string; /** Total number of datasets produced by the task, including ones in error */
    datasetCount?: number; /** Count of datasets that encountered errors */
    datasetsInErrorCount?: number; /** For tasks that run on a gateway, this is the id of the gateway */
    gatewayId?: string; /** For tasks that run on a gateway, this is the name of the gateway */
    gatewayName?: string; /** For tasks that run on a gateway, this is the internal name of the task on the gateway */
    gatewayTaskName?: string; /** For lakehouse storage tasks, this is the id of the cluster where the task runs */
    lakehouseClusterId?: string; /** For lakehouse storage tasks, this is the name of the cluster where the task runs */
    lakehouseClusterName?: string; /** The latest point in time the live views reflect, based on updates from the source system. */
    liveViewsUpdatedTo?: string;
  }; /** Statistics for the most recent batch of changes processed during the task run, including timing and throughput metrics. */
  lastBatchOfChanges?: {
    /** This batch starts with operational source changes from this time. */relatesToRecordsFrom?: string; /** This batch ends with operational source changes from this time. */
    relatesToRecordsTo?: string; /** Throughput in records per second */
    throughputInRecordsPerSecond?: number;
    totalProcessedCount?: number;
  };
  message?: string; /** Timestamp indicating when the task instance started */
  startTime?: string;
  state?: "STARTING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELED" | "STOPPING"; /** Real-time streaming statistics for tasks that continuously process data streams. */
  streaming?: {
    /** Number of streaming datasets that have encountered errors */errorCount?: number; /** Duration in HH:MM:SS format (hours:minutes:seconds) */
    latency?: string; /** Number of streaming datasets that are queued */
    queuedCount?: number; /** Number of streaming datasets that are currently running */
    runningCount?: number; /** Total number of records processed */
    totalProcessedCount?: number;
  }; /** Trace identifier for the last run, useful for diagnostics and support */
  traceId?: string;
};
type DataTaskItemRsp = {
  description?: string;
  id?: string;
  name?: string;
  ownerId?: string;
  spaceId?: string;
  type?: DataTaskType;
};
/**
 * Represents the current or historical execution state of a data task, including progress information, error details, and dataset-level statistics.
 */
type DataTaskRuntimeState = {
  /** Represents the execution state of a task instance, including progress metrics, errors, and operation-specific statistics. */lastRun?: DataTaskInstanceState; /** Name of the data task */
  name?: string;
  runReadiness?: {
    message?: string;
    state?: "READY_TO_RUN" | "ALREADY_RUNNING" | "NOT_RUNNABLE";
  };
  type?: DataTaskType;
};
type DataTaskType = "LANDING" | "STORAGE" | "QVD_STORAGE" | "TRANSFORM" | "DATAMART" | "REGISTERED_DATA" | "REPLICATION" | "DISTRIBUTION" | "LAKE_LANDING" | "KNOWLEDGE_MART" | "FILE_BASED_KNOWLEDGE_MART" | "LAKEHOUSE_STORAGE" | "LAKEHOUSE_MIRROR" | "STREAMING_LAKE_LANDING" | "STREAMING_TRANSFORM";
/**
 * Defines the export format for the project files.
 * - 'LEGACY': Exports a ZIP of the previous JSON files. Deprecated and will be removed in a future release.
 * - 'MINIMAL': Exports a ZIP of the new YAML files, including only non-default attribute values.
 * - 'ALL': Exports a ZIP of the new YAML files, including all attributes.
 */
type DiExportMode = "MINIMAL" | "ALL" | "LEGACY";
type DiProjectItemRsp = {
  description?: string;
  id?: string;
  name?: string;
  ownerId?: string; /** The platform type of the project. Supported values: - SNOWFLAKE: Snowflake - BIGQUERY: Google BigQuery - SYNAPSE: Azure Synapse - DATABRICKS: Databricks - REDSHIFT: Amazon Redshift - MSSQL: Microsoft SQL Server - FABRIC: Microsoft Fabric (OneLake) - QLIK_QVD: Qlik-managed QVD - QLIK_QVD_CUSTOMER_MANAGED: Customer-managed QVD - QLIK_OPEN_LAKEHOUSE: Qlik Open Lakehouse - NONE: No platform (e.g. replication-only projects) */
  platformType?: PlatformType;
  spaceId?: string; /** The type of the project */
  type?: "DATA_PIPELINE" | "DATA_MOVEMENT";
};
type DiProjectOperationSelectedTask = {
  /** Task identifier */taskId: string;
};
/**
 * Request parameters for searching task run history, including filter criteria and pagination options.
 */
type DiSearchTaskRunHistoryReq = {
  /** Field filters to apply to the search. */filters?: TaskRunSearchFilter[]; /** Cursor for paging. Pass the `runId` of the last item from the previous response to fetch the next page; omit on the first request. */
  lastId?: string; /** Maximum number of runs to return. */
  limit?: number;
};
type DiSearchTaskRunHistoryRsp = {
  /** Identifier of the last run in this page. Pass this value back as `lastId` in the next request to fetch the following page. */lastId?: string; /** True when more pages are available after this one; false when this is the last page. */
  nextPageExists?: boolean; /** List of task run instances matching the search. */
  runs?: TaskRunItemRsp[];
};
/**
 * Represents a single error condition with details about what went wrong.
 */
type Error = {
  /** Machine-readable error code for programmatic handling. */code?: string; /** Detailed explanation of the error and suggested remediation steps. */
  detail?: string; /** Identifies the location of the error in the request. */
  source?: ErrorSource; /** HTTP status code associated with the error. */
  status?: number; /** Brief human-readable summary of the error. */
  title?: string;
};
/**
 * Identifies the location of the error in the request.
 */
type ErrorSource = {
  /** Name of the query parameter or path parameter that caused the error. */parameter?: string; /** JSON Pointer (RFC 6901) to the field in the request body that caused the error. */
  pointer?: string;
};
/**
 * Standard error response wrapper containing one or more error details and a trace ID for diagnostics.
 */
type Errors = {
  /** Array of error objects describing what went wrong. */errors?: Error[]; /** Unique identifier for this error response, useful for tracking and support inquiries. */
  traceId?: string;
};
type ExportDiProjectReq = {
  /** Include bindings in the exported zip file (optional, default is false) */includeBindings?: boolean;
  /** Defines the export format for the project files.
   * - 'LEGACY': Exports a ZIP of the previous JSON files. Deprecated and will be removed in a future release.
   * - 'MINIMAL': Exports a ZIP of the new YAML files, including only non-default attribute values.
   * - 'ALL': Exports a ZIP of the new YAML files, including all attributes. */
  mode?: DiExportMode;
};
/**
 * Statistics for file-based tasks.
 */
type FileStatistics = {
  /** Number of files processed. */processedCount?: number; /** Volume of data processed (e.g. '10.91 MiB'). */
  volume?: string;
};
type GetDiExportProjectVariablesRsp = {
  nameToIdMap?: Record<string, string>;
  variables?: Record<string, string>;
};
type ImportDiProjectRsp = unknown;
type ListDataTaskDatasetsRsp = {
  datasets?: DataTaskDatasetState[];
};
type ListDataTasksRsp = {
  dataTasks?: DataTaskItemRsp[];
};
type ListDiProjectsRsp = {
  projects?: DiProjectItemRsp[];
};
/**
 * Breakdown of operations for record-oriented tasks.
 */
type OperationStatistics = {
  /** Number of delete operations. */deleteCount?: number; /** Number of failed operations. */
  failedCount?: number; /** Number of insert operations. */
  insertCount?: number; /** Number of update operations. */
  updateCount?: number;
};
/**
 * The platform type of the project. Supported values: - SNOWFLAKE: Snowflake - BIGQUERY: Google BigQuery - SYNAPSE: Azure Synapse - DATABRICKS: Databricks - REDSHIFT: Amazon Redshift - MSSQL: Microsoft SQL Server - FABRIC: Microsoft Fabric (OneLake) - QLIK_QVD: Qlik-managed QVD - QLIK_QVD_CUSTOMER_MANAGED: Customer-managed QVD - QLIK_OPEN_LAKEHOUSE: Qlik Open Lakehouse - NONE: No platform (e.g. replication-only projects)
 * @example
 * "SNOWFLAKE"
 */
type PlatformType = "SNOWFLAKE" | "BIGQUERY" | "SYNAPSE" | "DATABRICKS" | "REDSHIFT" | "MSSQL" | "FABRIC" | "QLIK_QVD" | "QLIK_QVD_CUSTOMER_MANAGED" | "QLIK_OPEN_LAKEHOUSE" | "NONE";
type PrepareProjectReq = {
  allowRecreate?: boolean; /** Array of tasks to prepare. Leave empty to trigger project-level orchestration using built-in logic (same as in the user interface). */
  selectedTasks?: TaskSelectionList;
};
type PrepareTaskReq = {
  /** Allow recreation of existing artifacts */allowRecreate: boolean;
};
/**
 * Request body to recreate task datasets.
 */
type RecreateTaskDatasetsReq = unknown;
type ReloadDiTaskReq = {
  /** Reload strategy (optional, applies to materialized SQL transformations and transformation flows tasks) */reloadStrategy?: "NONE" | "TRUNCATE" | "COMPARE_AND_APPLY"; /** Datasets to reload (optional, if omitted or empty, all datasets will be reloaded). */
  selectedDatasets?: {
    datasetId?: string;
  }[];
};
/**
 * Indicates whether the reload request was registered successfully.
 */
type ReloadRequestResponse = {
  /** Always true when the server successfully registers the request. */success: boolean;
};
type StartTaskReq = {
  /** Task run option for the task (optional, applies to Replication tasks only). */option?: "PROCESS_CHANGES_FROM_TIMESTAMP" | "PROCESS_CHANGES_FROM_POSITION" | "RECOVER_USING_LOCALLY_STORED_CHECKPOINT"; /** The value indicating where to resume the process, either a timestamp or an offset depending on the run option (optional, applies to Replication tasks only). */
  processChangesFrom?: string;
};
/**
 * Represents a single historical task run instance with execution status, timing, and error information.
 */
type TaskRunItemRsp = {
  /** Total number of datasets processed in this run. */datasetsCount?: number; /** Number of datasets that encountered errors in this run. */
  datasetsErrorCount?: number; /** Duration of the run in HH:MM:SS format. */
  duration?: string; /** Timestamp indicating when the run ended. */
  endTime?: string; /** Error message, if the run failed. */
  errorMessage?: string; /** Origin-specific sub-status of the run, when applicable. */
  originSubStatus?: string; /** Identifier of the run instance. */
  runId?: string; /** Timestamp indicating when the run started. */
  startTime?: string; /** Execution status of a task run instance. */
  status?: TaskRunStatus; /** Sub-status of the run, when applicable. */
  subStatus?: string;
};
/**
 * Specifies a single filter criterion to apply when searching task run history.
 */
type TaskRunSearchFilter = {
  /** The run-history field to filter on. */field: TaskRunSearchFilterField;
  /** Filter operator.
   * - `IN` / `NOT_IN`: exact match against the values list (recommended for ID, STATUS, SUB_STATUS).
   * - `BETWEEN`: only valid with the `PERIOD` field. The `value` list must contain two ISO-8601 timestamps (start, end). */
  operator: TaskRunSearchFilterOperator; /** Values to match. For `BETWEEN` on `PERIOD`, supply exactly two ISO-8601 timestamps. */
  value: string[];
};
/**
 * The run-history field to filter on.
 */
type TaskRunSearchFilterField = "ID" | "STATUS" | "SUB_STATUS" | "PERIOD";
/**
 * Filter operator.
 * - `IN` / `NOT_IN`: exact match against the values list (recommended for ID, STATUS, SUB_STATUS).
 * - `BETWEEN`: only valid with the `PERIOD` field. The `value` list must contain two ISO-8601 timestamps (start, end).
 */
type TaskRunSearchFilterOperator = "IN" | "NOT_IN" | "BETWEEN";
/**
 * Execution status of a task run instance.
 */
type TaskRunStatus = "STARTING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELED" | "MISFIRED";
/**
 * Array of tasks to prepare. Leave empty to trigger project-level orchestration using built-in logic (same as in the user interface).
 */
type TaskSelectionList = DiProjectOperationSelectedTask[];
type UpdateDiExportProjectVariablesReq = {
  variables?: Record<string, string>;
};
type UpdateDiExportProjectVariablesRsp = unknown;
type ValidateProjectReq = {
  /** Array of tasks to prepare. Leave empty to trigger project-level orchestration using built-in logic (same as in the user interface). */selectedTasks?: TaskSelectionList;
};
/**
 * Request body for task validation
 */
type ValidateTaskReq = unknown;
/**
 * List data integration projects.
 *
 * @param query an object with query parameters
 * @throws GetDiProjectsHttpError
 */
declare function getDiProjects(query: {
  /** Filter by space id */spaceId?: string;
}, options?: ApiCallOptions): Promise<GetDiProjectsHttpResponse>;
type GetDiProjectsHttpResponse = {
  data: ListDiProjectsRsp;
  headers: Headers;
  status: 200;
};
type GetDiProjectsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Creates a new data integration project in the specified space.
 *
 * @param body an object with the body content
 * @throws CreateDiProjectHttpError
 */
declare function createDiProject(body: CreateDiProjectReq, options?: ApiCallOptions): Promise<CreateDiProjectHttpResponse>;
type CreateDiProjectHttpResponse = {
  data: DiProjectItemRsp;
  headers: Headers;
  status: 201;
};
type CreateDiProjectHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 500;
};
/**
 * Retrieves the status of an asynchronous operation.
 *
 * @param actionId Identifier of the action.
 * @param query an object with query parameters
 * @throws GetDiProjectHttpError
 */
declare function getDiProject(actionId: string, query: {
  /** Specifies whether to include detailed status information in the response. Set to `true` to return detailed information. */detailed?: boolean;
}, options?: ApiCallOptions): Promise<GetDiProjectHttpResponse>;
type GetDiProjectHttpResponse = {
  data: AsyncActionDetails;
  headers: Headers;
  status: 200;
};
type GetDiProjectHttpError = {
  data: Errors;
  headers: Headers;
  status: 404;
};
/**
 * Exports the specified data integration project.
 *
 * @param projectId Identifier of the data project.
 * @param body an object with the body content
 * @throws ExportDiProjectHttpError
 */
declare function exportDiProject(projectId: string, body: ExportDiProjectReq, options?: ApiCallOptions): Promise<ExportDiProjectHttpResponse>;
type ExportDiProjectHttpResponse = {
  data: DownloadableBlob;
  headers: Headers;
  status: 200;
};
type ExportDiProjectHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404 | 500;
};
/**
 * Imports a data integration project from a `.zip` file.
 *
 * @param projectId Identifier of the data project.
 * @param body an object with the body content
 * @throws ImportDiProjectHttpError
 */
declare function importDiProject(projectId: string, body: {
  zip?: BodyInit;
}, options?: ApiCallOptions): Promise<ImportDiProjectHttpResponse>;
type ImportDiProjectHttpResponse = {
  data: ImportDiProjectRsp;
  headers: Headers;
  status: 200;
};
type ImportDiProjectHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404 | 500;
};
/**
 * Prepares the data integration project and its tasks for execution.
 *
 * @param projectId Identifier of the data project.
 * @param body an object with the body content
 * @throws PrepareDiProjectHttpError
 */
declare function prepareDiProject(projectId: string, body: PrepareProjectReq, options?: ApiCallOptions): Promise<PrepareDiProjectHttpResponse>;
type PrepareDiProjectHttpResponse = {
  data: AsyncActionRsp;
  headers: Headers;
  status: 202;
};
type PrepareDiProjectHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Validates the data integration project and its tasks.
 *
 * @param projectId Identifier of the data project.
 * @param body an object with the body content
 * @throws ValidateDiProjectHttpError
 */
declare function validateDiProject(projectId: string, body: ValidateProjectReq, options?: ApiCallOptions): Promise<ValidateDiProjectHttpResponse>;
type ValidateDiProjectHttpResponse = {
  data: AsyncActionRsp;
  headers: Headers;
  status: 202;
};
type ValidateDiProjectHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Retrieves the export variables for a specific data integration project.
 *
 * @param projectId Identifier of the data project.
 * @param query an object with query parameters
 * @throws GetDiProjectExportVariablesHttpError
 */
declare function getDiProjectExportVariables(projectId: string, query: {
  /** Recalculate the bindings if true, otherwise saved bindings are returned. */recalculate?: boolean;
}, options?: ApiCallOptions): Promise<GetDiProjectExportVariablesHttpResponse>;
type GetDiProjectExportVariablesHttpResponse = {
  data: GetDiExportProjectVariablesRsp;
  headers: Headers;
  status: 200;
};
type GetDiProjectExportVariablesHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Updates the export variables for a specific data integration project.
 *
 * @param projectId Identifier of the data project.
 * @param body an object with the body content
 * @throws SetDiProjectExportVariablesHttpError
 */
declare function setDiProjectExportVariables(projectId: string, body: UpdateDiExportProjectVariablesReq, options?: ApiCallOptions): Promise<SetDiProjectExportVariablesHttpResponse>;
type SetDiProjectExportVariablesHttpResponse = {
  data: UpdateDiExportProjectVariablesRsp;
  headers: Headers;
  status: 200;
};
type SetDiProjectExportVariablesHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404 | 500;
};
/**
 * Lists data tasks within a given data integration project.
 *
 * @param projectId Identifier of the data project.
 * @throws GetDiProjectDiTasksHttpError
 */
declare function getDiProjectDiTasks(projectId: string, options?: ApiCallOptions): Promise<GetDiProjectDiTasksHttpResponse>;
type GetDiProjectDiTasksHttpResponse = {
  data: ListDataTasksRsp;
  headers: Headers;
  status: 200;
};
type GetDiProjectDiTasksHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Get a specific data task within a project.
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @throws GetDiProjectDiTaskHttpError
 */
declare function getDiProjectDiTask(projectId: string, dataTaskId: string, options?: ApiCallOptions): Promise<GetDiProjectDiTaskHttpResponse>;
type GetDiProjectDiTaskHttpResponse = {
  data: DataTaskItemRsp;
  headers: Headers;
  status: 200;
};
type GetDiProjectDiTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Prepares the specified data task for execution.
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @param body an object with the body content
 * @throws PrepareDiProjectDiTaskHttpError
 */
declare function prepareDiProjectDiTask(projectId: string, dataTaskId: string, body: PrepareTaskReq, options?: ApiCallOptions): Promise<PrepareDiProjectDiTaskHttpResponse>;
type PrepareDiProjectDiTaskHttpResponse = {
  data: AsyncActionRsp;
  headers: Headers;
  status: 202;
};
type PrepareDiProjectDiTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Recreates datasets in the specified data task.
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @param body an object with the body content
 * @throws RecreateDatasetsDiProjectDiTaskHttpError
 */
declare function recreateDatasetsDiProjectDiTask(projectId: string, dataTaskId: string, body: RecreateTaskDatasetsReq, options?: ApiCallOptions): Promise<RecreateDatasetsDiProjectDiTaskHttpResponse>;
type RecreateDatasetsDiProjectDiTaskHttpResponse = {
  data: AsyncActionRsp;
  headers: Headers;
  status: 202;
};
type RecreateDatasetsDiProjectDiTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Registers a request to reload the datasets associated with the specified data task. The reload does not occur immediately; it will take effect on the next scheduled or manual run of the task.
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @param body an object with the body content
 * @throws RequestReloadDiProjectDiTaskHttpError
 */
declare function requestReloadDiProjectDiTask(projectId: string, dataTaskId: string, body: ReloadDiTaskReq, options?: ApiCallOptions): Promise<RequestReloadDiProjectDiTaskHttpResponse>;
type RequestReloadDiProjectDiTaskHttpResponse = {
  data: ReloadRequestResponse;
  headers: Headers;
  status: 200;
};
type RequestReloadDiProjectDiTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Validates the specified data task.
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @param body an object with the body content
 * @throws ValidateDiProjectDiTaskHttpError
 */
declare function validateDiProjectDiTask(projectId: string, dataTaskId: string, body: ValidateTaskReq, options?: ApiCallOptions): Promise<ValidateDiProjectDiTaskHttpResponse>;
type ValidateDiProjectDiTaskHttpResponse = {
  data: AsyncActionRsp;
  headers: Headers;
  status: 202;
};
type ValidateDiProjectDiTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Start a data task on a data integration project.
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @param body an object with the body content
 * @throws StartDiProjectDiTaskRuntimeWithBodyHttpError
 */
declare function startDiProjectDiTaskRuntimeWithBody(projectId: string, dataTaskId: string, body: StartTaskReq, options?: ApiCallOptions): Promise<StartDiProjectDiTaskRuntimeWithBodyHttpResponse>;
type StartDiProjectDiTaskRuntimeWithBodyHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type StartDiProjectDiTaskRuntimeWithBodyHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Start a data task on a data integration project.
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @throws StartDiProjectDiTaskRuntimeHttpError
 */
declare function startDiProjectDiTaskRuntime(projectId: string, dataTaskId: string, options?: ApiCallOptions): Promise<StartDiProjectDiTaskRuntimeHttpResponse>;
type StartDiProjectDiTaskRuntimeHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type StartDiProjectDiTaskRuntimeHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Stop a data task on a data integration project.
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @throws StopDiProjectDiTaskRuntimeHttpError
 */
declare function stopDiProjectDiTaskRuntime(projectId: string, dataTaskId: string, options?: ApiCallOptions): Promise<StopDiProjectDiTaskRuntimeHttpResponse>;
type StopDiProjectDiTaskRuntimeHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type StopDiProjectDiTaskRuntimeHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Returns a paginated list of historical run instances for the specified data task, filtered by the provided criteria.
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @param body an object with the body content
 * @throws SearchDiProjectDiTaskRuntimeRuns_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function searchDiProjectDiTaskRuntimeRuns_FIX_THIS_QUIRKY_NAME(projectId: string, dataTaskId: string, body: DiSearchTaskRunHistoryReq, options?: ApiCallOptions): Promise<SearchDiProjectDiTaskRuntimeRuns_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type SearchDiProjectDiTaskRuntimeRuns_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: DiSearchTaskRunHistoryRsp;
  headers: Headers;
  status: 200;
};
type SearchDiProjectDiTaskRuntimeRuns_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Returns the state of a specific historical run instance for a data task, including execution progress and any errors encountered.
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @param runId Identifier of the run instance.
 * @throws GetDiProjectDiTaskRuntimeRunState_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getDiProjectDiTaskRuntimeRunState_FIX_THIS_QUIRKY_NAME(projectId: string, dataTaskId: string, runId: string, options?: ApiCallOptions): Promise<GetDiProjectDiTaskRuntimeRunState_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetDiProjectDiTaskRuntimeRunState_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: DataTaskRuntimeState;
  headers: Headers;
  status: 200;
};
type GetDiProjectDiTaskRuntimeRunState_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Returns dataset-level state for a specific historical run instance of a data task. All datasets for the run are returned in a single response; this endpoint does not paginate.
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @param runId Identifier of the run instance.
 * @throws GetDiProjectDiTaskRuntimeRunStateDatasets_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getDiProjectDiTaskRuntimeRunStateDatasets_FIX_THIS_QUIRKY_NAME(projectId: string, dataTaskId: string, runId: string, options?: ApiCallOptions): Promise<GetDiProjectDiTaskRuntimeRunStateDatasets_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetDiProjectDiTaskRuntimeRunStateDatasets_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: ListDataTaskDatasetsRsp;
  headers: Headers;
  status: 200;
};
type GetDiProjectDiTaskRuntimeRunStateDatasets_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404 | 410 | 413;
};
/**
 * Get the current runtime state of a data task
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @throws GetDiProjectDiTaskRuntimeStateHttpError
 */
declare function getDiProjectDiTaskRuntimeState(projectId: string, dataTaskId: string, options?: ApiCallOptions): Promise<GetDiProjectDiTaskRuntimeStateHttpResponse>;
type GetDiProjectDiTaskRuntimeStateHttpResponse = {
  data: DataTaskRuntimeState;
  headers: Headers;
  status: 200;
};
type GetDiProjectDiTaskRuntimeStateHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Returns dataset-level runtime state for a data task
 *
 * @param projectId Identifier of the data project.
 * @param dataTaskId Identifier of the data task.
 * @throws GetDiProjectDiTaskRuntimeStateDatasetsHttpError
 */
declare function getDiProjectDiTaskRuntimeStateDatasets(projectId: string, dataTaskId: string, options?: ApiCallOptions): Promise<GetDiProjectDiTaskRuntimeStateDatasetsHttpResponse>;
type GetDiProjectDiTaskRuntimeStateDatasetsHttpResponse = {
  data: {
    datasets?: DataTaskDatasetState[];
  };
  headers: Headers;
  status: 200;
};
type GetDiProjectDiTaskRuntimeStateDatasetsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Clears the cache for di-projects api requests.
 */
declare function clearCache(): void;
type DiProjectsAPI = {
  /**
   * List data integration projects.
   *
   * @param query an object with query parameters
   * @throws GetDiProjectsHttpError
   */
  getDiProjects: typeof getDiProjects;
  /**
   * Creates a new data integration project in the specified space.
   *
   * @param body an object with the body content
   * @throws CreateDiProjectHttpError
   */
  createDiProject: typeof createDiProject;
  /**
   * Retrieves the status of an asynchronous operation.
   *
   * @param actionId Identifier of the action.
   * @param query an object with query parameters
   * @throws GetDiProjectHttpError
   */
  getDiProject: typeof getDiProject;
  /**
   * Exports the specified data integration project.
   *
   * @param projectId Identifier of the data project.
   * @param body an object with the body content
   * @throws ExportDiProjectHttpError
   */
  exportDiProject: typeof exportDiProject;
  /**
   * Imports a data integration project from a `.zip` file.
   *
   * @param projectId Identifier of the data project.
   * @param body an object with the body content
   * @throws ImportDiProjectHttpError
   */
  importDiProject: typeof importDiProject;
  /**
   * Prepares the data integration project and its tasks for execution.
   *
   * @param projectId Identifier of the data project.
   * @param body an object with the body content
   * @throws PrepareDiProjectHttpError
   */
  prepareDiProject: typeof prepareDiProject;
  /**
   * Validates the data integration project and its tasks.
   *
   * @param projectId Identifier of the data project.
   * @param body an object with the body content
   * @throws ValidateDiProjectHttpError
   */
  validateDiProject: typeof validateDiProject;
  /**
   * Retrieves the export variables for a specific data integration project.
   *
   * @param projectId Identifier of the data project.
   * @param query an object with query parameters
   * @throws GetDiProjectExportVariablesHttpError
   */
  getDiProjectExportVariables: typeof getDiProjectExportVariables;
  /**
   * Updates the export variables for a specific data integration project.
   *
   * @param projectId Identifier of the data project.
   * @param body an object with the body content
   * @throws SetDiProjectExportVariablesHttpError
   */
  setDiProjectExportVariables: typeof setDiProjectExportVariables;
  /**
   * Lists data tasks within a given data integration project.
   *
   * @param projectId Identifier of the data project.
   * @throws GetDiProjectDiTasksHttpError
   */
  getDiProjectDiTasks: typeof getDiProjectDiTasks;
  /**
   * Get a specific data task within a project.
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @throws GetDiProjectDiTaskHttpError
   */
  getDiProjectDiTask: typeof getDiProjectDiTask;
  /**
   * Prepares the specified data task for execution.
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @param body an object with the body content
   * @throws PrepareDiProjectDiTaskHttpError
   */
  prepareDiProjectDiTask: typeof prepareDiProjectDiTask;
  /**
   * Recreates datasets in the specified data task.
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @param body an object with the body content
   * @throws RecreateDatasetsDiProjectDiTaskHttpError
   */
  recreateDatasetsDiProjectDiTask: typeof recreateDatasetsDiProjectDiTask;
  /**
   * Registers a request to reload the datasets associated with the specified data task. The reload does not occur immediately; it will take effect on the next scheduled or manual run of the task.
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @param body an object with the body content
   * @throws RequestReloadDiProjectDiTaskHttpError
   */
  requestReloadDiProjectDiTask: typeof requestReloadDiProjectDiTask;
  /**
   * Validates the specified data task.
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @param body an object with the body content
   * @throws ValidateDiProjectDiTaskHttpError
   */
  validateDiProjectDiTask: typeof validateDiProjectDiTask;
  /**
   * Start a data task on a data integration project.
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @param body an object with the body content
   * @throws StartDiProjectDiTaskRuntimeWithBodyHttpError
   */
  startDiProjectDiTaskRuntimeWithBody: typeof startDiProjectDiTaskRuntimeWithBody;
  /**
   * Start a data task on a data integration project.
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @throws StartDiProjectDiTaskRuntimeHttpError
   */
  startDiProjectDiTaskRuntime: typeof startDiProjectDiTaskRuntime;
  /**
   * Stop a data task on a data integration project.
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @throws StopDiProjectDiTaskRuntimeHttpError
   */
  stopDiProjectDiTaskRuntime: typeof stopDiProjectDiTaskRuntime;
  /**
   * Returns a paginated list of historical run instances for the specified data task, filtered by the provided criteria.
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @param body an object with the body content
   * @throws SearchDiProjectDiTaskRuntimeRuns_FIX_THIS_QUIRKY_NAMEHttpError
   */
  searchDiProjectDiTaskRuntimeRuns_FIX_THIS_QUIRKY_NAME: typeof searchDiProjectDiTaskRuntimeRuns_FIX_THIS_QUIRKY_NAME;
  /**
   * Returns the state of a specific historical run instance for a data task, including execution progress and any errors encountered.
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @param runId Identifier of the run instance.
   * @throws GetDiProjectDiTaskRuntimeRunState_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getDiProjectDiTaskRuntimeRunState_FIX_THIS_QUIRKY_NAME: typeof getDiProjectDiTaskRuntimeRunState_FIX_THIS_QUIRKY_NAME;
  /**
   * Returns dataset-level state for a specific historical run instance of a data task. All datasets for the run are returned in a single response; this endpoint does not paginate.
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @param runId Identifier of the run instance.
   * @throws GetDiProjectDiTaskRuntimeRunStateDatasets_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getDiProjectDiTaskRuntimeRunStateDatasets_FIX_THIS_QUIRKY_NAME: typeof getDiProjectDiTaskRuntimeRunStateDatasets_FIX_THIS_QUIRKY_NAME;
  /**
   * Get the current runtime state of a data task
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @throws GetDiProjectDiTaskRuntimeStateHttpError
   */
  getDiProjectDiTaskRuntimeState: typeof getDiProjectDiTaskRuntimeState;
  /**
   * Returns dataset-level runtime state for a data task
   *
   * @param projectId Identifier of the data project.
   * @param dataTaskId Identifier of the data task.
   * @throws GetDiProjectDiTaskRuntimeStateDatasetsHttpError
   */
  getDiProjectDiTaskRuntimeStateDatasets: typeof getDiProjectDiTaskRuntimeStateDatasets;
  /**
   * Clears the cache for di-projects api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the di-projects api
 */
declare const diProjectsExport: DiProjectsAPI;
//#endregion
export { AsyncActionDetails, AsyncActionError, AsyncActionRsp, AsyncActionTaskProgress, AsyncActionType, AsyncCallStatus, CreateDiProjectHttpError, CreateDiProjectHttpResponse, CreateDiProjectReq, DataTaskDatasetState, DataTaskInstanceState, DataTaskItemRsp, DataTaskRuntimeState, DataTaskType, DiExportMode, DiProjectItemRsp, DiProjectOperationSelectedTask, DiProjectsAPI, DiSearchTaskRunHistoryReq, DiSearchTaskRunHistoryRsp, Error, ErrorSource, Errors, ExportDiProjectHttpError, ExportDiProjectHttpResponse, ExportDiProjectReq, FileStatistics, GetDiExportProjectVariablesRsp, GetDiProjectDiTaskHttpError, GetDiProjectDiTaskHttpResponse, GetDiProjectDiTaskRuntimeRunStateDatasets_FIX_THIS_QUIRKY_NAMEHttpError, GetDiProjectDiTaskRuntimeRunStateDatasets_FIX_THIS_QUIRKY_NAMEHttpResponse, GetDiProjectDiTaskRuntimeRunState_FIX_THIS_QUIRKY_NAMEHttpError, GetDiProjectDiTaskRuntimeRunState_FIX_THIS_QUIRKY_NAMEHttpResponse, GetDiProjectDiTaskRuntimeStateDatasetsHttpError, GetDiProjectDiTaskRuntimeStateDatasetsHttpResponse, GetDiProjectDiTaskRuntimeStateHttpError, GetDiProjectDiTaskRuntimeStateHttpResponse, GetDiProjectDiTasksHttpError, GetDiProjectDiTasksHttpResponse, GetDiProjectExportVariablesHttpError, GetDiProjectExportVariablesHttpResponse, GetDiProjectHttpError, GetDiProjectHttpResponse, GetDiProjectsHttpError, GetDiProjectsHttpResponse, ImportDiProjectHttpError, ImportDiProjectHttpResponse, ImportDiProjectRsp, ListDataTaskDatasetsRsp, ListDataTasksRsp, ListDiProjectsRsp, OperationStatistics, PlatformType, PrepareDiProjectDiTaskHttpError, PrepareDiProjectDiTaskHttpResponse, PrepareDiProjectHttpError, PrepareDiProjectHttpResponse, PrepareProjectReq, PrepareTaskReq, RecreateDatasetsDiProjectDiTaskHttpError, RecreateDatasetsDiProjectDiTaskHttpResponse, RecreateTaskDatasetsReq, ReloadDiTaskReq, ReloadRequestResponse, RequestReloadDiProjectDiTaskHttpError, RequestReloadDiProjectDiTaskHttpResponse, SearchDiProjectDiTaskRuntimeRuns_FIX_THIS_QUIRKY_NAMEHttpError, SearchDiProjectDiTaskRuntimeRuns_FIX_THIS_QUIRKY_NAMEHttpResponse, SetDiProjectExportVariablesHttpError, SetDiProjectExportVariablesHttpResponse, StartDiProjectDiTaskRuntimeHttpError, StartDiProjectDiTaskRuntimeHttpResponse, StartDiProjectDiTaskRuntimeWithBodyHttpError, StartDiProjectDiTaskRuntimeWithBodyHttpResponse, StartTaskReq, StopDiProjectDiTaskRuntimeHttpError, StopDiProjectDiTaskRuntimeHttpResponse, TaskRunItemRsp, TaskRunSearchFilter, TaskRunSearchFilterField, TaskRunSearchFilterOperator, TaskRunStatus, TaskSelectionList, UpdateDiExportProjectVariablesReq, UpdateDiExportProjectVariablesRsp, ValidateDiProjectDiTaskHttpError, ValidateDiProjectDiTaskHttpResponse, ValidateDiProjectHttpError, ValidateDiProjectHttpResponse, ValidateProjectReq, ValidateTaskReq, clearCache, createDiProject, diProjectsExport as default, exportDiProject, getDiProject, getDiProjectDiTask, getDiProjectDiTaskRuntimeRunStateDatasets_FIX_THIS_QUIRKY_NAME, getDiProjectDiTaskRuntimeRunState_FIX_THIS_QUIRKY_NAME, getDiProjectDiTaskRuntimeState, getDiProjectDiTaskRuntimeStateDatasets, getDiProjectDiTasks, getDiProjectExportVariables, getDiProjects, importDiProject, prepareDiProject, prepareDiProjectDiTask, recreateDatasetsDiProjectDiTask, requestReloadDiProjectDiTask, searchDiProjectDiTaskRuntimeRuns_FIX_THIS_QUIRKY_NAME, setDiProjectExportVariables, startDiProjectDiTaskRuntime, startDiProjectDiTaskRuntimeWithBody, stopDiProjectDiTaskRuntime, validateDiProject, validateDiProjectDiTask };