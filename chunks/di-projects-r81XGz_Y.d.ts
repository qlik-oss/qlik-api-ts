import { S as DownloadableBlob, y as ApiCallOptions } from "./auth-types-CMYVHKHt.js";

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
 * @param actionId Action ID
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
 * @param projectId Data project ID
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
 * @param projectId Data project ID
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
 * @param projectId Data project ID
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
 * @param projectId Data project ID
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
 * @param projectId Data project ID
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
 * @param projectId Data project ID
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
 * @param projectId Data project id
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
 * @param projectId Data project id
 * @param dataTaskId Data task id
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
 * @param projectId Data project ID
 * @param dataTaskId Data task id
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
 * Validates the specified data task.
 *
 * @param projectId Data project ID
 * @param dataTaskId Data task ID
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
 * @param projectId Data project id
 * @param dataTaskId Data task id
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
 * @param projectId
 * @param dataTaskId
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
 * @param projectId
 * @param dataTaskId
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
 * @param projectId ID of the project
 * @param dataTaskId ID of the data task
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
   * @param actionId Action ID
   * @param query an object with query parameters
   * @throws GetDiProjectHttpError
   */
  getDiProject: typeof getDiProject;
  /**
   * Exports the specified data integration project.
   *
   * @param projectId Data project ID
   * @param body an object with the body content
   * @throws ExportDiProjectHttpError
   */
  exportDiProject: typeof exportDiProject;
  /**
   * Imports a data integration project from a `.zip` file.
   *
   * @param projectId Data project ID
   * @param body an object with the body content
   * @throws ImportDiProjectHttpError
   */
  importDiProject: typeof importDiProject;
  /**
   * Prepares the data integration project and its tasks for execution.
   *
   * @param projectId Data project ID
   * @param body an object with the body content
   * @throws PrepareDiProjectHttpError
   */
  prepareDiProject: typeof prepareDiProject;
  /**
   * Validates the data integration project and its tasks.
   *
   * @param projectId Data project ID
   * @param body an object with the body content
   * @throws ValidateDiProjectHttpError
   */
  validateDiProject: typeof validateDiProject;
  /**
   * Retrieves the export variables for a specific data integration project.
   *
   * @param projectId Data project ID
   * @param query an object with query parameters
   * @throws GetDiProjectExportVariablesHttpError
   */
  getDiProjectExportVariables: typeof getDiProjectExportVariables;
  /**
   * Updates the export variables for a specific data integration project.
   *
   * @param projectId Data project ID
   * @param body an object with the body content
   * @throws SetDiProjectExportVariablesHttpError
   */
  setDiProjectExportVariables: typeof setDiProjectExportVariables;
  /**
   * Lists data tasks within a given data integration project.
   *
   * @param projectId Data project id
   * @throws GetDiProjectDiTasksHttpError
   */
  getDiProjectDiTasks: typeof getDiProjectDiTasks;
  /**
   * Get a specific data task within a project.
   *
   * @param projectId Data project id
   * @param dataTaskId Data task id
   * @throws GetDiProjectDiTaskHttpError
   */
  getDiProjectDiTask: typeof getDiProjectDiTask;
  /**
   * Prepares the specified data task for execution.
   *
   * @param projectId Data project ID
   * @param dataTaskId Data task id
   * @param body an object with the body content
   * @throws PrepareDiProjectDiTaskHttpError
   */
  prepareDiProjectDiTask: typeof prepareDiProjectDiTask;
  /**
   * Validates the specified data task.
   *
   * @param projectId Data project ID
   * @param dataTaskId Data task ID
   * @param body an object with the body content
   * @throws ValidateDiProjectDiTaskHttpError
   */
  validateDiProjectDiTask: typeof validateDiProjectDiTask;
  /**
   * Start a data task on a data integration project.
   *
   * @param projectId Data project id
   * @param dataTaskId Data task id
   * @throws StartDiProjectDiTaskRuntimeHttpError
   */
  startDiProjectDiTaskRuntime: typeof startDiProjectDiTaskRuntime;
  /**
   * Stop a data task on a data integration project.
   *
   * @param projectId
   * @param dataTaskId
   * @throws StopDiProjectDiTaskRuntimeHttpError
   */
  stopDiProjectDiTaskRuntime: typeof stopDiProjectDiTaskRuntime;
  /**
   * Get the current runtime state of a data task
   *
   * @param projectId
   * @param dataTaskId
   * @throws GetDiProjectDiTaskRuntimeStateHttpError
   */
  getDiProjectDiTaskRuntimeState: typeof getDiProjectDiTaskRuntimeState;
  /**
   * Returns dataset-level runtime state for a data task
   *
   * @param projectId ID of the project
   * @param dataTaskId ID of the data task
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
export { StartDiProjectDiTaskRuntimeHttpResponse as $, GetDiProjectDiTaskRuntimeStateHttpResponse as A, ImportDiProjectHttpResponse as B, ExportDiProjectReq as C, prepareDiProject as Ct, GetDiProjectDiTaskRuntimeStateDatasetsHttpError as D, stopDiProjectDiTaskRuntime as Dt, GetDiProjectDiTaskHttpResponse as E, startDiProjectDiTaskRuntime as Et, GetDiProjectHttpError as F, PrepareDiProjectDiTaskHttpResponse as G, ListDataTasksRsp as H, GetDiProjectHttpResponse as I, PrepareProjectReq as J, PrepareDiProjectHttpError as K, GetDiProjectsHttpError as L, GetDiProjectDiTasksHttpResponse as M, GetDiProjectExportVariablesHttpError as N, GetDiProjectDiTaskRuntimeStateDatasetsHttpResponse as O, validateDiProject as Ot, GetDiProjectExportVariablesHttpResponse as P, StartDiProjectDiTaskRuntimeHttpError as Q, GetDiProjectsHttpResponse as R, ExportDiProjectHttpResponse as S, importDiProject as St, GetDiProjectDiTaskHttpError as T, setDiProjectExportVariables as Tt, ListDiProjectsRsp as U, ImportDiProjectRsp as V, PrepareDiProjectDiTaskHttpError as W, SetDiProjectExportVariablesHttpError as X, PrepareTaskReq as Y, SetDiProjectExportVariablesHttpResponse as Z, DiProjectsAPI as _, getDiProjectDiTaskRuntimeState as _t, AsyncActionType as a, ValidateDiProjectDiTaskHttpError as at, Errors as b, getDiProjectExportVariables as bt, CreateDiProjectHttpResponse as c, ValidateDiProjectHttpResponse as ct, DataTaskInstanceState as d, clearCache as dt, StopDiProjectDiTaskRuntimeHttpError as et, DataTaskItemRsp as f, createDiProject as ft, DiProjectOperationSelectedTask as g, getDiProjectDiTask as gt, DiProjectItemRsp as h, getDiProject as ht, AsyncActionTaskProgress as i, UpdateDiExportProjectVariablesRsp as it, GetDiProjectDiTasksHttpError as j, GetDiProjectDiTaskRuntimeStateHttpError as k, validateDiProjectDiTask as kt, CreateDiProjectReq as l, ValidateProjectReq as lt, DataTaskType as m, exportDiProject as mt, AsyncActionError as n, TaskSelectionList as nt, AsyncCallStatus as o, ValidateDiProjectDiTaskHttpResponse as ot, DataTaskRuntimeState as p, diProjectsExport as pt, PrepareDiProjectHttpResponse as q, AsyncActionRsp as r, UpdateDiExportProjectVariablesReq as rt, CreateDiProjectHttpError as s, ValidateDiProjectHttpError as st, AsyncActionDetails as t, StopDiProjectDiTaskRuntimeHttpResponse as tt, DataTaskDatasetState as u, ValidateTaskReq as ut, Error as v, getDiProjectDiTaskRuntimeStateDatasets as vt, GetDiExportProjectVariablesRsp as w, prepareDiProjectDiTask as wt, ExportDiProjectHttpError as x, getDiProjects as xt, ErrorSource as y, getDiProjectDiTasks as yt, ImportDiProjectHttpError as z };