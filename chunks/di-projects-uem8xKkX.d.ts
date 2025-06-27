import { ApiCallOptions, DownloadableBlob } from "./auth-types-BlCWK0FP.js";

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
type DataTaskInstanceState = {
  message?: string;
  state?: "STARTING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELED";
};
type DataTaskItemRsp = {
  description?: string;
  id?: string;
  name?: string;
  ownerId?: string;
  spaceId?: string;
  type?: DataTaskType;
};
type DataTaskType = "LANDING" | "STORAGE" | "QVD_STORAGE" | "TRANSFORM" | "DATAMART" | "REGISTERED_DATA" | "REPLICATION" | "DISTRIBUTION" | "LAKE_LANDING";
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
 * @example
 * getDiProjectExportVariables(
 *   "65424a71c11367914c1e659b",
 *   {
 *     recalculate: true
 *   }
 * )
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
 * @example
 * getDiProjectDiTasks(
 *   "65424a71c11367914c1e659b"
 * )
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
 * @example
 * getDiProjectDiTask(
 *   "65424a71c11367914c1e659b",
 *   "task-cYSY"
 * )
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
 * @param dataTaskId Data task ID
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
 * @example
 * validateDiProjectDiTask(
 *   "65424a71c11367914c1e659b",
 *   "task-cYSY",
 *   null
 * )
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
 * @example
 * startDiProjectDiTaskRuntime(
 *   "65424a71c11367914c1e659b",
 *   "task-cYSY"
 * )
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
 * @example
 * stopDiProjectDiTaskRuntime(
 *   "65424a71c11367914c1e659b",
 *   "task-cYSY"
 * )
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
 * Get data task runtime state within a data integration project.
 * @example
 * getDiProjectDiTaskRuntimeState(
 *   "65424a71c11367914c1e659b",
 *   "task-cYSY"
 * )
 *
 * @param projectId
 * @param dataTaskId
 * @throws GetDiProjectDiTaskRuntimeStateHttpError
 */
declare function getDiProjectDiTaskRuntimeState(projectId: string, dataTaskId: string, options?: ApiCallOptions): Promise<GetDiProjectDiTaskRuntimeStateHttpResponse>;
type GetDiProjectDiTaskRuntimeStateHttpResponse = {
  data: {
    lastRun?: DataTaskInstanceState;
    runReadiness?: {
      message?: string;
      state?: "READY_TO_RUN" | "ALREADY_RUNNING" | "NOT_RUNNABLE";
    };
  };
  headers: Headers;
  status: 200;
};
type GetDiProjectDiTaskRuntimeStateHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404;
};
/**
 * Clears the cache for di-projects api requests.
 */
declare function clearCache(): void;
interface DiProjectsAPI {
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
   * @example
   * getDiProjectExportVariables(
   *   "65424a71c11367914c1e659b",
   *   {
   *     recalculate: true
   *   }
   * )
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
   * @example
   * getDiProjectDiTasks(
   *   "65424a71c11367914c1e659b"
   * )
   *
   * @param projectId Data project id
   * @throws GetDiProjectDiTasksHttpError
   */
  getDiProjectDiTasks: typeof getDiProjectDiTasks;
  /**
   * Get a specific data task within a project.
   * @example
   * getDiProjectDiTask(
   *   "65424a71c11367914c1e659b",
   *   "task-cYSY"
   * )
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
   * @param dataTaskId Data task ID
   * @param body an object with the body content
   * @throws PrepareDiProjectDiTaskHttpError
   */
  prepareDiProjectDiTask: typeof prepareDiProjectDiTask;
  /**
   * Validates the specified data task.
   * @example
   * validateDiProjectDiTask(
   *   "65424a71c11367914c1e659b",
   *   "task-cYSY",
   *   null
   * )
   *
   * @param projectId Data project ID
   * @param dataTaskId Data task ID
   * @param body an object with the body content
   * @throws ValidateDiProjectDiTaskHttpError
   */
  validateDiProjectDiTask: typeof validateDiProjectDiTask;
  /**
   * Start a data task on a data integration project.
   * @example
   * startDiProjectDiTaskRuntime(
   *   "65424a71c11367914c1e659b",
   *   "task-cYSY"
   * )
   *
   * @param projectId Data project id
   * @param dataTaskId Data task id
   * @throws StartDiProjectDiTaskRuntimeHttpError
   */
  startDiProjectDiTaskRuntime: typeof startDiProjectDiTaskRuntime;
  /**
   * Stop a data task on a data integration project.
   * @example
   * stopDiProjectDiTaskRuntime(
   *   "65424a71c11367914c1e659b",
   *   "task-cYSY"
   * )
   *
   * @param projectId
   * @param dataTaskId
   * @throws StopDiProjectDiTaskRuntimeHttpError
   */
  stopDiProjectDiTaskRuntime: typeof stopDiProjectDiTaskRuntime;
  /**
   * Get data task runtime state within a data integration project.
   * @example
   * getDiProjectDiTaskRuntimeState(
   *   "65424a71c11367914c1e659b",
   *   "task-cYSY"
   * )
   *
   * @param projectId
   * @param dataTaskId
   * @throws GetDiProjectDiTaskRuntimeStateHttpError
   */
  getDiProjectDiTaskRuntimeState: typeof getDiProjectDiTaskRuntimeState;
  /**
   * Clears the cache for di-projects api requests.
   */
  clearCache: typeof clearCache;
}
/**
 * Functions for the di-projects api
 */
declare const diProjectsExport: DiProjectsAPI;
//#endregion
export { AsyncActionDetails, AsyncActionError, AsyncActionRsp, AsyncActionTaskProgress, AsyncActionType, AsyncCallStatus, CreateDiProjectHttpError, CreateDiProjectHttpResponse, CreateDiProjectReq, DataTaskInstanceState, DataTaskItemRsp, DataTaskType, DiProjectItemRsp, DiProjectOperationSelectedTask, DiProjectsAPI, Error, ErrorSource, Errors, ExportDiProjectHttpError, ExportDiProjectHttpResponse, ExportDiProjectReq, GetDiExportProjectVariablesRsp, GetDiProjectDiTaskHttpError, GetDiProjectDiTaskHttpResponse, GetDiProjectDiTaskRuntimeStateHttpError, GetDiProjectDiTaskRuntimeStateHttpResponse, GetDiProjectDiTasksHttpError, GetDiProjectDiTasksHttpResponse, GetDiProjectExportVariablesHttpError, GetDiProjectExportVariablesHttpResponse, GetDiProjectHttpError, GetDiProjectHttpResponse, GetDiProjectsHttpError, GetDiProjectsHttpResponse, ImportDiProjectHttpError, ImportDiProjectHttpResponse, ImportDiProjectRsp, ListDataTasksRsp, ListDiProjectsRsp, PrepareDiProjectDiTaskHttpError, PrepareDiProjectDiTaskHttpResponse, PrepareDiProjectHttpError, PrepareDiProjectHttpResponse, PrepareProjectReq, PrepareTaskReq, SetDiProjectExportVariablesHttpError, SetDiProjectExportVariablesHttpResponse, StartDiProjectDiTaskRuntimeHttpError, StartDiProjectDiTaskRuntimeHttpResponse, StopDiProjectDiTaskRuntimeHttpError, StopDiProjectDiTaskRuntimeHttpResponse, TaskSelectionList, UpdateDiExportProjectVariablesReq, UpdateDiExportProjectVariablesRsp, ValidateDiProjectDiTaskHttpError, ValidateDiProjectDiTaskHttpResponse, ValidateDiProjectHttpError, ValidateDiProjectHttpResponse, ValidateProjectReq, ValidateTaskReq, clearCache, createDiProject, diProjectsExport, exportDiProject, getDiProject, getDiProjectDiTask, getDiProjectDiTaskRuntimeState, getDiProjectDiTasks, getDiProjectExportVariables, getDiProjects, importDiProject, prepareDiProject, prepareDiProjectDiTask, setDiProjectExportVariables, startDiProjectDiTaskRuntime, stopDiProjectDiTaskRuntime, validateDiProject, validateDiProjectDiTask };