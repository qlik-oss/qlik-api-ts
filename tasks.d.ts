import { A as ApiCallOptions } from './invoke-fetch-types-Cq7bjkqn.js';
import './auth-types-DqfMuSRX.js';

type ErrorResponse = {
    errors?: HttpResult[];
    /** A way to trace the source of the error. */
    traceId?: string;
};
/**
 * Workflow CloudEvent definitions. Defines CloudEvents that can be consumed or produced
 */
type Events = Eventdef[];
type HttpResult = {
    code?: number;
    context?: string;
    inner?: HttpResult;
    result?: unknown;
    timestamp?: string;
    title?: string;
};
type Link = {
    /** URL to a resource request */
    href: string;
};
type OrchMeta = {
    attrs?: Record<string, string>;
    /** The ID of the orchestration associated with the task in the choreographer */
    id: string;
    /** orchestration system type */
    type: 0 | 1 | 2 | 3;
};
type OrchRun = {
    /** The ID of the action */
    actionId: string;
    /** The UTC timestamp when the task run ended */
    readonly endedAt?: string;
    /** user ID of on behalf of whom the Task was executed. */
    executedAs?: string;
    /** The ID of the task run */
    id: string;
    /** log info of the run */
    log?: string;
    /** The ID of the resource */
    resourceId: string;
    /** The UTC timestamp when the task run started */
    readonly startedAt?: string;
    /** task run status */
    status: "RUNNING" | "SUCCEEDED" | "FAILED";
    /** The ID of the task */
    taskId: string;
    taskMeta: TaskMetadata;
    /** task name */
    taskName: string;
    /** Information about who or what triggered the task run. */
    triggeredBy: string;
    /** The ID of the worker who is carrying out the real job. e.g. App.Reload job is carried out by Reload Engine, in this case, workerId will be reloadId from reload engine. Or, if we are using Automation, workerId will be Automation runId. */
    workerId: string;
    /** worker type or target system */
    workerType: string;
};
type OrchRunList = {
    data?: OrchRun[];
    links?: {
        next?: Link;
        prev?: Link;
        self?: Link;
    };
};
type Task = {
    /** List of helpful terms describing the workflows intended purpose, subject areas, or other important qualities */
    annotations?: string[];
    /** Workflow description */
    description?: string;
    /** Indicates whether the task is enabled or not */
    enabled?: boolean;
    /** Workflow CloudEvent definitions. Defines CloudEvents that can be consumed or produced */
    events?: Events;
    /** The choreographer's unique identifier */
    readonly id?: string;
    /** If 'true', workflow instances is not terminated when there are no active execution paths. Instance can be terminated via 'terminate end definition' or reaching defined 'workflowExecTimeout' */
    keepActive?: boolean;
    /** Optional expression that will be used to generate a domain-specific workflow instance identifier */
    key?: string;
    metadata?: TaskMetadata;
    /** The name that identifies the workflow definition, and which, when combined with its version, forms a unique identifier. */
    name: string;
    /** The resource ID of the task. The `Task.resourceId` value from user input is ignored and will be calculated automatically from `Task.states`. */
    resourceId?: string;
    /** Serverless Workflow schema version */
    specVersion: string;
    start?: Startdef;
    /** State definitions */
    states?: Eventstate[];
    /** Workflow version */
    version?: string;
};
type TaskList = {
    data?: Task[];
    links?: {
        next?: Link;
        prev?: Link;
        self?: Link;
    };
};
type TriggerMeta = {
    /** The ID of the Trigger associated with the task in the choreographer */
    id: string;
    /** trigger type */
    type: 0 | 1 | 2 | 3;
};
type Action = {
    /** Expression, if defined, must evaluate to true for this action to be performed. If false, action is disregarded */
    condition?: string;
    functionRef?: Functionref;
    /** Unique action definition name */
    name?: string;
    /** List of unique references to defined workflow errors for which the action should not be retried. Used only when `autoRetries` is set to `true` */
    nonRetryableErrors?: string[];
    /** References a defined workflow retry definition. If not defined the default retry policy is assumed */
    retryRef?: string;
    /** List of unique references to defined workflow errors for which the action should be retried. Used only when `autoRetries` is set to `false` */
    retryableErrors?: string[];
} & unknown;
/**
 * Action execution timeout duration (literal ISO 8601 duration format or expression which evaluation results in an ISO 8601 duration)
 */
type ActionExecTimeout = string;
/**
 * CloudEvent correlation definition
 */
type CorrelationDef = {
    /** CloudEvent Extension Context Attribute name */
    contextAttributeName: "id" | "status";
    /** CloudEvent Extension Context Attribute value */
    contextAttributeValue?: string;
};
type Crondef = string | {
    /** Repeating interval (cron expression) describing when the workflow instance should be created */
    expression: string;
    /** Specific date and time (ISO 8601 format) when the cron expression invocation is no longer valid */
    validUntil?: string;
};
/**
 * State end definition
 */
type End = boolean;
/**
 * Timeout duration to wait for consuming defined events (literal ISO 8601 duration format or expression which evaluation results in an ISO 8601 duration)
 */
type EventTimeout = string;
type Eventdef = {
    /** CloudEvent correlation definitions */
    correlation?: CorrelationDef[];
    /** If `true`, only the Event payload is accessible to consuming Workflow states. If `false`, both event payload and context attributes should be accessible */
    dataOnly?: boolean;
    /** Unique event name */
    name?: string;
    /** CloudEvent source */
    source?: "system-events.task";
    /** CloudEvent type */
    type?: "com.qlik.v1.task.run.finished";
};
/**
 * This state is used to wait for events from event sources, then consumes them and invoke one or more actions to run in sequence or parallel
 */
type Eventstate = {
    /** Unique Name of a workflow state which is responsible for compensation of this state */
    compensatedBy?: string;
    /** State end definition */
    end?: End;
    /** If true consuming one of the defined events causes its associated actions to be performed. If false all of the defined events must be consumed in order for actions to be performed */
    exclusive?: boolean;
    /** State name */
    name?: string;
    /** Define the events to be consumed and optional actions to be performed */
    onEvents?: Onevents[];
    /** State specific timeouts */
    timeouts?: {
        /** Action execution timeout duration (literal ISO 8601 duration format or expression which evaluation results in an ISO 8601 duration) */
        actionExecTimeout?: ActionExecTimeout;
        /** Timeout duration to wait for consuming defined events (literal ISO 8601 duration format or expression which evaluation results in an ISO 8601 duration) */
        eventTimeout?: EventTimeout;
        /** Workflow state execution timeout duration (literal ISO 8601 duration format or expression which evaluation results in an ISO 8601 duration) */
        stateExecTimeout?: StateExecTimeout;
    };
    /** State type */
    type?: "EVENT";
} & unknown;
type Functionref = string | {
    /** Function arguments/inputs */
    arguments?: unknown;
    /** Specifies if the function should be invoked sync or async */
    invoke?: "SYNC" | "ASYNC";
    /** Name of the referenced function */
    refName: "app.reload";
    /** Only used if function type is 'graphql'. A string containing a valid GraphQL selection set */
    selectionSet?: string;
};
type Onevents = {
    /** Specifies how actions are to be performed (in sequence or in parallel) */
    actionMode?: "SEQUENTIAL" | "PARALLEL";
    /** Actions to be performed if expression matches */
    actions?: Action[];
    /** References one or more unique event names in the defined workflow events */
    eventRefs: string[];
};
type Schedule = string | ({
    cron?: Crondef;
    /** Specific date and time (ISO 8601 format) when the workflow instance should be terminated */
    endDateTime?: string;
    /** Time interval (must be repeating interval) described with ISO 8601 format. Declares when workflow instances will be automatically created. */
    interval?: string;
    /** The RRULE recurrence string for chronos job */
    recurrence?: string;
    /** Specific date and time (ISO 8601 format) when the workflow instance should be created */
    startDateTime?: string;
    /** Timezone name used to evaluate the interval & cron-expression. (default: UTC) */
    timezone?: string;
} & unknown);
type Startdef = {
    schedule: Schedule;
    /** Name of the starting workflow state */
    stateName?: string;
};
/**
 * Workflow state execution timeout duration (literal ISO 8601 duration format or expression which evaluation results in an ISO 8601 duration)
 */
type StateExecTimeout = string;
type TaskMetadata = {
    /** The UTC timestamp when the task was created */
    readonly createdAt?: string;
    /** The user ID of the user that created the task */
    createdBy?: string;
    /** The UTC timestamp when the task was deleted */
    readonly deletedAt?: string;
    /** why the Task is disabled */
    disabledCode?: "MANUALLY" | "CONSECUTIVE-FAILURES" | "APP-SCRIPT-UPDATED" | "OWNER-DELETED" | "OWNER-DISABLED";
    /** The ID of the reload-task this one was migrated from (if applicable) */
    migratedFrom?: string;
    orchestration?: OrchMeta;
    /** The user ID of the owner of the task */
    ownerId?: string;
    /** The space ID that the Task will operate in */
    spaceId?: string;
    /** The tenant ID that the Task will operate in */
    tenantId?: string;
    trigger?: TriggerMeta;
    /** The UTC timestamp when the task was last updated */
    updatedAt?: string;
    /** resource usage. Normally it means in which product domain the resource is used. if this field is not presented, it has default of `ANALYTICS` */
    usage?: "ANALYTICS" | "DATA_PREPARATION" | "DATAFLOW_PREP" | "SINGLE_TABLE_PREP";
};
/**
 * Retrieves a list of the tasks that the requesting user has access to.
 *
 * @param query an object with query parameters
 * @throws GetTasksHttpError
 */
declare const getTasks: (query: {
    /** The maximum number of resources to return for a request. */
    limit?: number;
    /** The page cursor. */
    page?: string;
    /** **Required**. Filter tasks by its target resource ID. If not provided, request will fail with 400 (Bad Request). */
    resourceId: string;
    /** The property of a resource to sort on (default sort is
     * -updatedAt). A property must be prefixed by + or - to
     * indicate ascending or descending sort order respectively. */
    sort?: "+createdAt" | "-createdAt" | "+updatedAt" | "-updatedAt";
}, options?: ApiCallOptions) => Promise<GetTasksHttpResponse>;
type GetTasksHttpResponse = {
    data: TaskList;
    headers: Headers;
    status: 200;
    prev?: (options?: ApiCallOptions) => Promise<GetTasksHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetTasksHttpResponse>;
};
type GetTasksHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Creates a new task.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws CreateTaskHttpError
 */
declare const createTask: (query: {
    /** ID of the reload-task to migrate from the old system (optional). */
    migrateFrom?: string;
}, body: Task, options?: ApiCallOptions) => Promise<CreateTaskHttpResponse>;
type CreateTaskHttpResponse = {
    data: Task;
    headers: Headers;
    status: 201;
};
type CreateTaskHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Returns a list of task runs for a specified `resourceId`.
 *
 * @param id Filter tasks by its target resource ID
 * @param query an object with query parameters
 * @throws GetTasksResourceRunsHttpError
 */
declare const getTasksResourceRuns: (id: string, query: {
    /** The maximum number of task runs to return for a request. */
    limit?: number;
    /** The page cursor. */
    page?: string;
    /** The property of a resource to sort on (default sort is -startedAt).
     * A property must be prefixed by + or - to indicate ascending or descending sort order respectively. */
    sort?: "+startedAt" | "-startedAt" | "+endedAt" | "-endedAt" | "+status" | "-status" | "+taskId" | "-taskId" | "+actionId" | "-actionId";
}, options?: ApiCallOptions) => Promise<GetTasksResourceRunsHttpResponse>;
type GetTasksResourceRunsHttpResponse = {
    data: OrchRunList;
    headers: Headers;
    status: 200;
    prev?: (options?: ApiCallOptions) => Promise<GetTasksResourceRunsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetTasksResourceRunsHttpResponse>;
};
type GetTasksResourceRunsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Deletes a specific task.
 *
 * @param id The task's unique identifier.
 * @throws DeleteTaskHttpError
 */
declare const deleteTask: (id: string, options?: ApiCallOptions) => Promise<DeleteTaskHttpResponse>;
type DeleteTaskHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type DeleteTaskHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Retrieves details for a specific task.
 *
 * @param id The task's unique identifier.
 * @throws GetTaskHttpError
 */
declare const getTask: (id: string, options?: ApiCallOptions) => Promise<GetTaskHttpResponse>;
type GetTaskHttpResponse = {
    data: Task;
    headers: Headers;
    status: 200;
};
type GetTaskHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Updates a specific task. If the task is owned by another user, ownership will be transferred to the requesting user.
 *
 * @param id The task's unique identifier.
 * @param body an object with the body content
 * @throws UpdateTaskHttpError
 */
declare const updateTask: (id: string, body: Task, options?: ApiCallOptions) => Promise<UpdateTaskHttpResponse>;
type UpdateTaskHttpResponse = {
    data: Task;
    headers: Headers;
    status: 200;
};
type UpdateTaskHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Starts the specified task.
 *
 * @param id The task's unique identifier.
 * @param query an object with query parameters
 * @throws StartTaskHttpError
 */
declare const startTask: (id: string, query: {
    /** Indicates the origin of the trigger. If not provided, defaults to 'manual'. For event-triggered tasks, this can be the name of the triggering task. */
    source?: string;
}, options?: ApiCallOptions) => Promise<StartTaskHttpResponse>;
type StartTaskHttpResponse = {
    data: {
        message?: string;
    };
    headers: Headers;
    status: 200;
};
type StartTaskHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Returns runs for the specified task.
 *
 * @param id The task's unique identifier.
 * @param query an object with query parameters
 * @throws GetTaskRunsHttpError
 */
declare const getTaskRuns: (id: string, query: {
    /** The maximum number of task runs to return for a request. */
    limit?: number;
    /** The page cursor. */
    page?: string;
    /** The property of a resource to sort on (default sort is -startedAt).
     * A property must be prefixed by + or - to indicate ascending or descending sort order respectively. */
    sort?: "+startedAt" | "-startedAt" | "+endedAt" | "-endedAt" | "+status" | "-status" | "+taskId" | "-taskId" | "+actionId" | "-actionId";
}, options?: ApiCallOptions) => Promise<GetTaskRunsHttpResponse>;
type GetTaskRunsHttpResponse = {
    data: OrchRunList;
    headers: Headers;
    status: 200;
    prev?: (options?: ApiCallOptions) => Promise<GetTaskRunsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetTaskRunsHttpResponse>;
};
type GetTaskRunsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Returns the last run of a specific task.
 *
 * @param id The task's unique identifier.
 * @throws GetLastTaskRunHttpError
 */
declare const getLastTaskRun: (id: string, options?: ApiCallOptions) => Promise<GetLastTaskRunHttpResponse>;
type GetLastTaskRunHttpResponse = {
    data: OrchRun;
    headers: Headers;
    status: 200;
};
type GetLastTaskRunHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Get specific run log of a task.
 *
 * @param id The task's unique identifier.
 * @param runId The run's unique identifier.
 * @throws GetTaskRunLogHttpError
 */
declare const getTaskRunLog: (id: string, runId: string, options?: ApiCallOptions) => Promise<GetTaskRunLogHttpResponse>;
type GetTaskRunLogHttpResponse = {
    data: {
        /** Log content in plain text format */
        logContent?: string;
    };
    headers: Headers;
    status: 200;
};
type GetTaskRunLogHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Clears the cache for tasks api requests.
 */
declare function clearCache(): void;
interface TasksAPI {
    /**
     * Retrieves a list of the tasks that the requesting user has access to.
     *
     * @param query an object with query parameters
     * @throws GetTasksHttpError
     */
    getTasks: typeof getTasks;
    /**
     * Creates a new task.
     *
     * @param query an object with query parameters
     * @param body an object with the body content
     * @throws CreateTaskHttpError
     */
    createTask: typeof createTask;
    /**
     * Returns a list of task runs for a specified `resourceId`.
     *
     * @param id Filter tasks by its target resource ID
     * @param query an object with query parameters
     * @throws GetTasksResourceRunsHttpError
     */
    getTasksResourceRuns: typeof getTasksResourceRuns;
    /**
     * Deletes a specific task.
     *
     * @param id The task's unique identifier.
     * @throws DeleteTaskHttpError
     */
    deleteTask: typeof deleteTask;
    /**
     * Retrieves details for a specific task.
     *
     * @param id The task's unique identifier.
     * @throws GetTaskHttpError
     */
    getTask: typeof getTask;
    /**
     * Updates a specific task. If the task is owned by another user, ownership will be transferred to the requesting user.
     *
     * @param id The task's unique identifier.
     * @param body an object with the body content
     * @throws UpdateTaskHttpError
     */
    updateTask: typeof updateTask;
    /**
     * Starts the specified task.
     *
     * @param id The task's unique identifier.
     * @param query an object with query parameters
     * @throws StartTaskHttpError
     */
    startTask: typeof startTask;
    /**
     * Returns runs for the specified task.
     *
     * @param id The task's unique identifier.
     * @param query an object with query parameters
     * @throws GetTaskRunsHttpError
     */
    getTaskRuns: typeof getTaskRuns;
    /**
     * Returns the last run of a specific task.
     *
     * @param id The task's unique identifier.
     * @throws GetLastTaskRunHttpError
     */
    getLastTaskRun: typeof getLastTaskRun;
    /**
     * Get specific run log of a task.
     *
     * @param id The task's unique identifier.
     * @param runId The run's unique identifier.
     * @throws GetTaskRunLogHttpError
     */
    getTaskRunLog: typeof getTaskRunLog;
    /**
     * Clears the cache for tasks api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the tasks api
 */
declare const tasksExport: TasksAPI;

export { type Action, type ActionExecTimeout, type CorrelationDef, type CreateTaskHttpError, type CreateTaskHttpResponse, type Crondef, type DeleteTaskHttpError, type DeleteTaskHttpResponse, type End, type ErrorResponse, type EventTimeout, type Eventdef, type Events, type Eventstate, type Functionref, type GetLastTaskRunHttpError, type GetLastTaskRunHttpResponse, type GetTaskHttpError, type GetTaskHttpResponse, type GetTaskRunLogHttpError, type GetTaskRunLogHttpResponse, type GetTaskRunsHttpError, type GetTaskRunsHttpResponse, type GetTasksHttpError, type GetTasksHttpResponse, type GetTasksResourceRunsHttpError, type GetTasksResourceRunsHttpResponse, type HttpResult, type Link, type Onevents, type OrchMeta, type OrchRun, type OrchRunList, type Schedule, type StartTaskHttpError, type StartTaskHttpResponse, type Startdef, type StateExecTimeout, type Task, type TaskList, type TaskMetadata, type TasksAPI, type TriggerMeta, type UpdateTaskHttpError, type UpdateTaskHttpResponse, clearCache, createTask, tasksExport as default, deleteTask, getLastTaskRun, getTask, getTaskRunLog, getTaskRuns, getTasks, getTasksResourceRuns, startTask, updateTask };
