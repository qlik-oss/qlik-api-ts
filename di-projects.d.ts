import { S as DownloadableBlob, y as ApiCallOptions } from "./chunks/auth-types-YrlH_R9f.js";
import "./chunks/invoke-fetch-C1Z0RJYU.js";

//#region src/public/rest/di-projects.d.ts
type AsyncActionDetails = {
  endTime?: string;
  error?: AsyncActionError;
  /** Name of the async operation */
  name?: string;
  startTime?: string;
  /** State of the action */
  state?: AsyncCallStatus;
  taskDetails?: {
    error?: AsyncActionError;
    /** Additional details about task state */
    info?: string;
    name?: string;
    /** State of the action */
    state?: AsyncCallStatus;
    taskId?: string;
  }[];
  taskProgress?: AsyncActionTaskProgress;
  /** Type of action being performed */
  type?: AsyncActionType;
};
type AsyncActionError = {
  /** Error code */
  code?: string;
  /** Additional error details */
  details?: string;
  /** Error message */
  message?: string;
};
type AsyncActionRsp = {
  /** Identifier for tracking the action */
  actionId: string;
};
type AsyncActionTaskProgress = {
  /** Number of tasks canceled */
  canceled?: number;
  /** Number of tasks completed successfully */
  completed?: number;
  /** Number of tasks currently executing */
  executing?: number;
  /** Number of tasks that failed */
  failed?: number;
  /** Number of tasks pending execution */
  pending?: number;
  /** Number of tasks skipped due to conflicts */
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
  /** The cloud staging connection string */
  cloudStagingConnection?: string;
  /** A description of the project */
  description?: string;
  /** The name of the project */
  name?: string;
  /** The platform connection string */
  platformConnection?: string;
  /** The platform type of the project. Supported values: - SNOWFLAKE: Snowflake - BIGQUERY: Google BigQuery - SYNAPSE: Azure Synapse - DATABRICKS: Databricks - REDSHIFT: Amazon Redshift - MSSQL: Microsoft SQL Server - FABRIC: Microsoft Fabric (OneLake) - QLIK_QVD: Qlik-managed QVD - QLIK_QVD_CUSTOMER_MANAGED: Customer-managed QVD */
  platformType?: "SNOWFLAKE" | "BIGQUERY" | "SYNAPSE" | "DATABRICKS" | "REDSHIFT" | "MSSQL" | "FABRIC" | "QLIK_QVD" | "QLIK_QVD_CUSTOMER_MANAGED";
  /** The ID of the space where the project will be created */
  space?: string;
  /** The type of the project */
  type?: "DATA_PIPELINE" | "DATA_MOVEMENT";
};
type DataTaskDatasetState = {
  cdcStatus?: {
    /** Number of DDL statements executed during the last run */
    ddlCount?: number;
    /** delete portion of totalProcessedCount. Only available for some task types */
    deleteCount?: number;
    /** Insert portion of totalProcessedCount. Only available for some task types */
    insertCount?: number;
    lastProcessed?: string;
    message?: string;
    state?: "QUEUED" | "PROCESSING" | "ACCUMULATING_CHANGES" | "COMPLETED" | "ERROR";
    /** Total number of changes/DMLs applied to the dataset */
    totalProcessedCount?: number;
    /** update portion of totalProcessedCount. Only available for some task types */
    updateCount?: number;
  };
  /** Is the data ready for use? */
  dataReadiness?: "READY" | "NOT_READY" | "ERROR";
  /** Id of the dataset */
  datasetId?: string;
  fullLoad?: {
    /** Number of changes captured and cached during full load (CDC landing/replication tasks only) */
    cachedChangesCount?: number;
    /** Duration in HH:MM:SS format (hours:minutes:seconds) */
    duration?: string;
    endTime?: string;
    /** Number of records that failed to load (currently only for knowledge marts) */
    failedRecordsCount?: number;
    message?: string;
    startTime?: string;
    state?: "QUEUED" | "LOADING" | "COMPLETED" | "ERROR";
    /** Number of records (or docs in knowledge marts) were loaded. */
    totalProcessedCount?: number;
  };
  lastBatchOfChanges?: {
    /** Duration in HH:MM:SS format (hours:minutes:seconds) */
    duration?: string;
    endTime?: string;
    message?: string;
    startTime?: string;
    state?: "QUEUED" | "PROCESSING" | "COMPLETED" | "ERROR";
    /** Throughput in records per second */
    throughputInRecordsPerSecond?: number;
    totalProcessedCount?: number;
  };
  /** Name of the dataset */
  name?: string;
  /** Original name of the dataset, relevant only for data movement tasks */
  sourceName?: string;
};
type DataTaskInstanceState = {
  cdcStatus?: {
    accumulatingChangesCount?: number;
    applyingChangesCount?: number;
    /** Duration in HH:MM:SS format (hours:minutes:seconds) */
    latency?: string;
    /** Throughput in kilobytes per second */
    throughputInKilobytesPerSecond?: number;
    totalProcessedCount?: number;
  };
  /** Duration in HH:MM:SS format (hours:minutes:seconds) */
  duration?: string;
  /** Timestamp indicating when the task instance ended */
  endTime?: string;
  fullLoad?: {
    /** Number of datasets that have completed full load in this task run */
    completedCount?: number;
    /** Number of datasets that have failed full load in this task run */
    errorCount?: number;
    /** Number of datasets that are currently being loaded in this task run */
    loadingCount?: number;
    /** Number of datasets that are queued for full load in this task run */
    queuedCount?: number;
  };
  general?: {
    /** The latest point in time the data reflects, based on updates from the source system. */
    dataTaskUpdatedTo?: string;
    /** Total number of datasets produced by the task, including ones in error */
    datasetCount?: number;
    /** Count of datasets that encountered errors */
    datasetsInErrorCount?: number;
    /** For tasks that run on a gateway, this is the id of the gateway */
    gatewayId?: string;
    /** For tasks that run on a gateway, this is the name of the gateway */
    gatewayName?: string;
    /** For tasks that run on a gateway, this is the internal name of the task on the gateway */
    gatewayTaskName?: string;
    /** For lakehouse storage tasks, this is the name of the cluster where the task runs */
    lakehouseClusterName?: string;
    /** The latest point in time the live views reflect, based on updates from the source system. */
    liveViewsUpdatedTo?: string;
  };
  lastBatchOfChanges?: {
    /** This batch starts with operational source changes from this time. */
    relatesToRecordsFrom?: string;
    /** This batch ends with operational source changes from this time. */
    relatesToRecordsTo?: string;
    /** Throughput in records per second */
    throughputInRecordsPerSecond?: number;
    totalProcessedCount?: number;
  };
  message?: string;
  /** Timestamp indicating when the task instance started */
  startTime?: string;
  state?: "STARTING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELED" | "STOPPING";
};
type DataTaskItemRsp = {
  description?: string;
  id?: string;
  name?: string;
  ownerId?: string;
  spaceId?: string;
  type?: DataTaskType;
};
type DataTaskRuntimeState = {
  lastRun?: DataTaskInstanceState;
  /** Name of the data task */
  name?: string;
  runReadiness?: {
    message?: string;
    state?: "READY_TO_RUN" | "ALREADY_RUNNING" | "NOT_RUNNABLE";
  };
  type?: DataTaskType;
};
type DataTaskType = "LANDING" | "STORAGE" | "QVD_STORAGE" | "TRANSFORM" | "DATAMART" | "REGISTERED_DATA" | "REPLICATION" | "DISTRIBUTION" | "LAKE_LANDING" | "KNOWLEDGE_MART" | "FILE_BASED_KNOWLEDGE_MART" | "LAKEHOUSE_STORAGE" | "LAKEHOUSE_MIRROR";
type DiProjectItemRsp = {
  description?: string;
  id?: string;
  name?: string;
  ownerId?: string;
  spaceId?: string;
};
type DiProjectOperationSelectedTask = {
  /** Task identifier */
  taskId: string;
};
type Error = {
  code?: string;
  detail?: string;
  source?: ErrorSource;
  status?: number;
  title?: string;
};
type ErrorSource = {
  parameter?: string;
  pointer?: string;
};
type Errors = {
  errors?: Error[];
  traceId?: string;
};
type ExportDiProjectReq = {
  /** Include bindings in the exported zip file (optional, default is false) */
  includeBindings?: boolean;
};
type GetDiExportProjectVariablesRsp = {
  nameToIdMap?: Record<string, string>;
  variables?: Record<string, string>;
};
type ImportDiProjectRsp = unknown;
type ListDataTasksRsp = {
  dataTasks?: DataTaskItemRsp[];
};
type ListDiProjectsRsp = {
  projects?: DiProjectItemRsp[];
};
type PrepareProjectReq = {
  allowRecreate?: boolean;
  /** Array of tasks to prepare. Leave empty to trigger project-level orchestration using built-in logic (same as in the user interface). */
  selectedTasks?: TaskSelectionList;
};
type PrepareTaskReq = {
  /** Allow recreation of existing artifacts */
  allowRecreate: boolean;
};
type ReloadDiTaskReq = {
  /** Reload strategy (optional, applies to materialized SQL transformations and transformation flows tasks) */
  reloadStrategy?: "NONE" | "TRUNCATE" | "COMPARE_AND_APPLY";
  /** Datasets to reload (optional, if omitted or empty, all datasets will be reloaded). */
  selectedDatasets?: {
    datasetId?: string;
  }[];
};
/**
 * Indicates whether the reload request was registered successfully.
 */
type ReloadRequestResponse = {
  /** Always true when the server successfully registers the request. */
  success: boolean;
};
type StartTaskReq = {
  /** Task run option for the task (optional, applies to Replication tasks only). */
  option?: "PROCESS_CHANGES_FROM_TIMESTAMP" | "PROCESS_CHANGES_FROM_POSITION" | "RECOVER_USING_LOCALLY_STORED_CHECKPOINT";
  /** The value indicating where to resume the process, either a timestamp or an offset depending on the run option (optional, applies to Replication tasks only). */
  processChangesFrom?: string;
};
/**
 * Array of tasks to prepare. Leave empty to trigger project-level orchestration using built-in logic (same as in the user interface).
 */
type TaskSelectionList = DiProjectOperationSelectedTask[];
type UpdateDiExportProjectVariablesReq = {
  variables?: Record<string, string>;
};
type UpdateDiExportProjectVariablesRsp = unknown;
type ValidateProjectReq = {
  /** Array of tasks to prepare. Leave empty to trigger project-level orchestration using built-in logic (same as in the user interface). */
  selectedTasks?: TaskSelectionList;
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
  /** Filter by space id */
  spaceId?: string;
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
  /** Specifies whether to include detailed status information in the response. Set to `true` to return detailed information. */
  detailed?: boolean;
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
  /** Recalculate the bindings if true, otherwise saved bindings are returned. */
  recalculate?: boolean;
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
export { AsyncActionDetails, AsyncActionError, AsyncActionRsp, AsyncActionTaskProgress, AsyncActionType, AsyncCallStatus, CreateDiProjectHttpError, CreateDiProjectHttpResponse, CreateDiProjectReq, DataTaskDatasetState, DataTaskInstanceState, DataTaskItemRsp, DataTaskRuntimeState, DataTaskType, DiProjectItemRsp, DiProjectOperationSelectedTask, DiProjectsAPI, Error, ErrorSource, Errors, ExportDiProjectHttpError, ExportDiProjectHttpResponse, ExportDiProjectReq, GetDiExportProjectVariablesRsp, GetDiProjectDiTaskHttpError, GetDiProjectDiTaskHttpResponse, GetDiProjectDiTaskRuntimeStateDatasetsHttpError, GetDiProjectDiTaskRuntimeStateDatasetsHttpResponse, GetDiProjectDiTaskRuntimeStateHttpError, GetDiProjectDiTaskRuntimeStateHttpResponse, GetDiProjectDiTasksHttpError, GetDiProjectDiTasksHttpResponse, GetDiProjectExportVariablesHttpError, GetDiProjectExportVariablesHttpResponse, GetDiProjectHttpError, GetDiProjectHttpResponse, GetDiProjectsHttpError, GetDiProjectsHttpResponse, ImportDiProjectHttpError, ImportDiProjectHttpResponse, ImportDiProjectRsp, ListDataTasksRsp, ListDiProjectsRsp, PrepareDiProjectDiTaskHttpError, PrepareDiProjectDiTaskHttpResponse, PrepareDiProjectHttpError, PrepareDiProjectHttpResponse, PrepareProjectReq, PrepareTaskReq, ReloadDiTaskReq, ReloadRequestResponse, RequestReloadDiProjectDiTaskHttpError, RequestReloadDiProjectDiTaskHttpResponse, SetDiProjectExportVariablesHttpError, SetDiProjectExportVariablesHttpResponse, StartDiProjectDiTaskRuntimeHttpError, StartDiProjectDiTaskRuntimeHttpResponse, StartDiProjectDiTaskRuntimeWithBodyHttpError, StartDiProjectDiTaskRuntimeWithBodyHttpResponse, StartTaskReq, StopDiProjectDiTaskRuntimeHttpError, StopDiProjectDiTaskRuntimeHttpResponse, TaskSelectionList, UpdateDiExportProjectVariablesReq, UpdateDiExportProjectVariablesRsp, ValidateDiProjectDiTaskHttpError, ValidateDiProjectDiTaskHttpResponse, ValidateDiProjectHttpError, ValidateDiProjectHttpResponse, ValidateProjectReq, ValidateTaskReq, clearCache, createDiProject, diProjectsExport as default, exportDiProject, getDiProject, getDiProjectDiTask, getDiProjectDiTaskRuntimeState, getDiProjectDiTaskRuntimeStateDatasets, getDiProjectDiTasks, getDiProjectExportVariables, getDiProjects, importDiProject, prepareDiProject, prepareDiProjectDiTask, requestReloadDiProjectDiTask, setDiProjectExportVariables, startDiProjectDiTaskRuntime, startDiProjectDiTaskRuntimeWithBody, stopDiProjectDiTaskRuntime, validateDiProject, validateDiProjectDiTask };