import { x as ApiCallOptions } from "../chunks/auth-types-DjJJgiRF.js";
declare namespace tasks_d_exports {
  export { Action, ActionExecTimeout, CorrelationDef, CreateTaskHttpError, CreateTaskHttpResponse, Crondef, DeleteTaskHttpError, DeleteTaskHttpResponse, End, ErrorResponse, EventTimeout, Eventdef, Events, Eventstate, Functionref, GetTaskGraphsAncestors_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskGraphsAncestors_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTaskGraphsDescendants_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskGraphsDescendants_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTaskHttpError, GetTaskHttpResponse, GetTaskRunLogHttpError, GetTaskRunLogHttpResponse, GetTaskRunsHttpError, GetTaskRunsHttpResponse, GetTaskRunsLast_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskRunsLast_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTasksHttpError, GetTasksHttpResponse, GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpError, GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpResponse, HttpResult, JSONPatch, Link, Onevents, OrchMeta, OrchRun, OrchRunBase, OrchRunList, PatchTask200HttpResponse, PatchTask204HttpResponse, PatchTaskHttpError, PatchTaskHttpResponse, PatchValue, Schedule, StartTaskHttpError, StartTaskHttpResponse, Startdef, StateExecTimeout, Task, TaskGraph, TaskGraphEdge, TaskGraphVertex, TaskList, TaskMetadata, TaskTopology, TasksAPI, TriggerMeta, UpdateTaskHttpError, UpdateTaskHttpResponse, clearCache, createTask, tasksExport as default, deleteTask, getTask, getTaskGraphsAncestors_FIX_THIS_QUIRKY_NAME, getTaskGraphsChildren_FIX_THIS_QUIRKY_NAME, getTaskGraphsDescendants_FIX_THIS_QUIRKY_NAME, getTaskGraphsParents_FIX_THIS_QUIRKY_NAME, getTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAME, getTaskRunLog, getTaskRuns, getTaskRunsLast_FIX_THIS_QUIRKY_NAME, getTasks, getTasksResourceRuns_FIX_THIS_QUIRKY_NAME, patchTask, startTask, updateTask };
}
type ErrorResponse = {
  errors?: HttpResult[]; /** A trace identifier for correlating the error to a specific service request. */
  traceId?: string;
};
/**
 * CloudEvent definitions for the workflow. Defines the events that can be consumed or produced by the workflow.
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
type JSONPatch = {
  /** The patch operation to perform. */op: "add" | "remove" | "replace" | "move" | "copy"; /** A JSON Pointer (RFC 6901) identifying the field to patch. */
  path: string; /** The value to use in a JSON Patch operation. */
  value?: PatchValue;
}[];
type Link = {
  /** The URL of the linked resource. */href: string;
};
type OrchMeta = {
  /** Additional attributes of the orchestration instance associated with this task in the scheduling service. */attrs?: Record<string, string>; /** The unique identifier of the orchestration instance associated with this task in the scheduling service. */
  id: string;
  lastRun?: OrchRunBase; /** The type identifier of the orchestration system handling this task. */
  type: 0 | 1 | 2 | 3;
};
type OrchRun = OrchRunBase & {
  /** The unique identifier of the action that was executed. */actionId: string; /** The raw log output from the task run. */
  log?: string; /** The unique identifier of the resource the task operated on. */
  resourceId: string; /** The unique identifier of the task. */
  taskId: string;
  taskMeta: TaskMetadata; /** The name of the task at the time it was run. */
  taskName: string;
};
type OrchRunBase = {
  /** The UTC timestamp when the task run ended. */readonly endedAt?: string; /** The user ID of the user on whose behalf the task was executed. */
  executedAs?: string; /** The unique identifier of the task run. */
  id: string; /** The UTC timestamp when the task run started. */
  readonly startedAt?: string; /** The current status of the task run. */
  status: "RUNNING" | "SUCCEEDED" | "FAILED"; /** The identity or event that triggered the task run. */
  triggeredBy: string; /** The unique identifier of the worker that executed the job. For example, a reload run carries the reload ID from the engine, and an automation run carries the automation run ID. */
  workerId: string; /** The type or name of the target system that executed the run. */
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
/**
 * The value to use in a JSON Patch operation.
 */
type PatchValue = string | number | number | boolean | unknown[] | unknown;
/**
 * @example
 * {
 *   description: "this is an example of task response",
 *   enabled: true,
 *   events: [
 *     {
 *       correlation: [
 *         {
 *           contextAttributeName: "appId",
 *           contextAttributeValue: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
 *         }
 *       ],
 *       name: "event1",
 *       source: "dataset.updated",
 *       type: "com.qlik/active-analytics-orch"
 *     }
 *   ],
 *   id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
 *   keepActive: false,
 *   metadata: {
 *     createdAt: "2025-08-31T23:22:27.929Z",
 *     orchestration: {
 *       attrs: {
 *         "last_run_endedAt": "2025-08-31T23:28:06Z",
 *         "last_run_startedAt": "2025-08-31T23:28:04Z",
 *         "last_run_status": "SUCCEEDED",
 *         "last_run_worker_type": "reloads"
 *       },
 *       id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
 *       type: 3
 *     },
 *     spaceId: "",
 *     tenantId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *     trigger: {
 *       id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
 *       type: 4
 *     },
 *     updatedAt: "2025-08-31T23:27:51.207Z",
 *     usage: "ANALYTICS"
 *   },
 *   name: "TaskExample",
 *   resourceId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
 *   specVersion: "1.16.0",
 *   states: [
 *     {
 *       end: true,
 *       exclusive: false,
 *       name: "Reload",
 *       onEvents: [
 *         {
 *           actions: [
 *             {
 *               functionRef: {
 *                 arguments: {
 *                   "appId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
 *                   "partial": false
 *                 },
 *                 refName: "app.reload"
 *               },
 *               name: "app.reload"
 *             }
 *           ],
 *           eventRefs: [
 *             "app1-dataset-updated"
 *           ]
 *         }
 *       ]
 *     }
 *   ],
 *   version: "1.0.0"
 * }
 */
type Task = {
  /** A list of terms describing the workflow's intended purpose, subject areas, or other important qualities. */annotations?: string[]; /** A human-readable description of the workflow's purpose. */
  description?: string; /** Indicates whether the task is enabled. Disabled tasks will not trigger automatically. */
  enabled?: boolean; /** CloudEvent definitions for the workflow. Defines the events that can be consumed or produced by the workflow. */
  events?: Events; /** The unique identifier assigned to the task by the service. */
  readonly id?: string; /** When `true`, workflow instances are not terminated when there are no active execution paths. Instances can be ended via a terminate end definition or a configured `workflowExecTimeout`. */
  keepActive?: boolean; /** An optional expression used to generate a domain-specific workflow instance identifier. */
  key?: string;
  metadata?: TaskMetadata; /** The name that identifies the workflow definition. Combined with `version`, the name forms a unique identifier for the task. */
  name: string; /** The unique identifier of the resource this task operates on. The value supplied in a request body is ignored and is derived automatically from `states`. */
  resourceId?: string; /** The Serverless Workflow specification version used by this task. */
  specVersion: string; /** The start definition for a workflow, including optional schedule configuration. */
  start?: Startdef; /** The list of state definitions that compose the workflow. */
  states?: Eventstate[]; /** The semantic version of the workflow definition. */
  version?: string;
};
/**
 * @example
 * {
 *   edges: [
 *     {
 *       attrs: {
 *         "depth": 1
 *       },
 *       source: "22222222-2222-2222-2222-222222222222",
 *       target: "11111111-1111-1111-1111-111111111111"
 *     }
 *   ],
 *   taskId: "11111111-1111-1111-1111-111111111111",
 *   vertices: [
 *     {
 *       attrs: {
 *         "depth": 0,
 *         "isChild": false,
 *         "isParent": true
 *       },
 *       taskId: "11111111-1111-1111-1111-111111111111"
 *     },
 *     {
 *       attrs: {
 *         "depth": 1,
 *         "isChild": true,
 *         "isParent": false
 *       },
 *       taskId: "22222222-2222-2222-2222-222222222222"
 *     }
 *   ]
 * }
 */
type TaskGraph = {
  edges?: TaskGraphEdge[];
  taskId?: string;
  vertices?: TaskGraphVertex[];
};
/**
 * @example
 * {
 *   attrs: {
 *     "depth": 1
 *   },
 *   source: "22222222-2222-2222-2222-222222222222",
 *   target: "11111111-1111-1111-1111-111111111111"
 * }
 */
type TaskGraphEdge = {
  attrs?: unknown;
  source?: string;
  target?: string;
};
/**
 * @example
 * {
 *   attrs: {
 *     "depth": 0
 *   },
 *   task: {
 *     enabled: true,
 *     id: "11111111-1111-1111-1111-111111111111",
 *     name: "Reload app",
 *     resourceId: "80c6f35f-c9d7-4488-bb5a-ad973b13ec00",
 *     specVersion: "1.16.0",
 *     version: "1.0.0"
 *   },
 *   taskId: "11111111-1111-1111-1111-111111111111"
 * }
 */
type TaskGraphVertex = {
  attrs?: unknown;
  task?: Task;
  taskId?: string;
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
  /** The unique identifier of the trigger associated with this task. */id: string; /** The type identifier of the trigger associated with this task. */
  type: 0 | 1 | 2 | 3 | 4;
};
type Action = {
  /** An expression that must evaluate to `true` for this action to be performed. When `false`, the action is skipped. */condition?: string; /** A reference to a function to invoke, either as a name string or a structured object. */
  functionRef?: Functionref; /** A unique name for this action within the workflow. */
  name?: string; /** Workflow error references for which this action must not be retried. Used only when `autoRetries` is `true`. */
  nonRetryableErrors?: string[]; /** A reference to a defined workflow retry policy. If absent, the default retry policy applies. */
  retryRef?: string; /** Workflow error references for which this action must be retried. Used only when `autoRetries` is `false`. */
  retryableErrors?: string[];
} & unknown;
/**
 * The maximum duration for executing a single action, expressed as an ISO 8601 duration string or an expression that evaluates to one.
 * @example
 * "3S"
 */
type ActionExecTimeout = string;
/**
 * A correlation definition used to match a CloudEvent to a specific workflow instance.
 */
type CorrelationDef = {
  /** The name of the CloudEvent extension context attribute to match on. */contextAttributeName: "id" | "status" | "appId" | "spaceId" | "datasetId"; /** The expected value of the CloudEvent extension context attribute. */
  contextAttributeValue?: string;
};
type Crondef = string | {
  /** A cron expression describing when the workflow instance should be created. */expression: string; /** The date and time (ISO 8601 format) after which this cron expression is no longer active. */
  validUntil?: string;
};
/**
 * Marks this state as a terminal state in the workflow.
 */
type End = boolean;
/**
 * The maximum duration to wait for the defined events to be received, expressed as an ISO 8601 duration string or an expression that evaluates to one.
 * @example
 * "3S"
 */
type EventTimeout = string;
type Eventdef = {
  /** Correlation definitions used to match incoming CloudEvents to this workflow instance. */correlation?: CorrelationDef[]; /** When `true`, only the event payload is accessible to consuming workflow states. When `false`, both the payload and context attributes are accessible. */
  dataOnly?: boolean; /** A unique name identifying this event definition within the workflow. */
  name?: string; /** The CloudEvents source attribute identifying the origin of the event. */
  source?: "system-events.task" | "dataset.updated"; /** The CloudEvents type attribute identifying the kind of event. */
  type?: "com.qlik.v1.task.run.finished" | "com.qlik/active-analytics-orch";
};
/**
 * A workflow state that waits for one or more CloudEvents, then consumes them and invokes one or more actions sequentially or in parallel.
 */
type Eventstate = {
  /** The unique name of a workflow state responsible for compensating this state if it fails. */compensatedBy?: string; /** Marks this state as a terminal state in the workflow. */
  end?: End; /** When `true`, consuming any one of the defined events causes its associated actions to execute. When `false`, all defined events must be consumed before actions are performed. */
  exclusive?: boolean; /** The name of this state, unique within the workflow. */
  name?: string; /** The events to consume and the optional actions to perform when they are received. */
  onEvents?: Onevents[]; /** State-specific timeout durations. */
  timeouts?: {
    /** The maximum duration for executing a single action, expressed as an ISO 8601 duration string or an expression that evaluates to one. */actionExecTimeout?: ActionExecTimeout; /** The maximum duration to wait for the defined events to be received, expressed as an ISO 8601 duration string or an expression that evaluates to one. */
    eventTimeout?: EventTimeout; /** The maximum duration for executing this state, expressed as an ISO 8601 duration string or an expression that evaluates to one. */
    stateExecTimeout?: StateExecTimeout;
  }; /** The state type. Must be `EVENT` for event-driven states. */
  type?: "EVENT";
} & unknown;
/**
 * A reference to a function to invoke, either as a name string or a structured object.
 * @example
 * {
 *   arguments: {
 *     "appId": "80c6f35f-c9d7-4488-bb5a-ad973b13ec00",
 *     "partial": false
 *   },
 *   refName: "app.reload"
 * }
 */
type Functionref = string | {
  /** Arguments to pass to the function. */arguments?: unknown; /** Specifies whether the function is invoked synchronously or asynchronously. */
  invoke?: "SYNC" | "ASYNC"; /** The name of the function to invoke. */
  refName: "app.reload"; /** A GraphQL selection set string. Only applicable when the function type is `graphql`. */
  selectionSet?: string;
};
type Onevents = {
  /** Specifies whether actions are performed sequentially or in parallel. */actionMode?: "SEQUENTIAL" | "PARALLEL"; /** Actions to perform when the matched events are consumed. */
  actions?: Action[]; /** References to one or more unique event names defined in the workflow events list. */
  eventRefs: string[];
};
type Schedule = string | ({
  cron?: Crondef; /** The date and time (ISO 8601 format) when the workflow schedule ends. */
  endDateTime?: string; /** A repeating time interval in ISO 8601 format that defines when workflow instances are automatically created. */
  interval?: string; /** An RRULE recurrence rule string defining when the workflow recurs. */
  recurrence?: string; /** The date and time (ISO 8601 format) when the workflow schedule begins. */
  startDateTime?: string; /** The timezone name used to evaluate the interval and cron expression. Defaults to `UTC`. */
  timezone?: string;
} & unknown);
/**
 * The start definition for a workflow, including optional schedule configuration.
 * @example
 * {
 *   schedule: {
 *     recurrence: "RRULE:FREQ=DAILY;INTERVAL=1",
 *     startDateTime: "2025-08-31T23:22:27Z"
 *   }
 * }
 */
type Startdef = {
  schedule: Schedule; /** The name of the starting workflow state. */
  stateName?: string;
};
/**
 * The maximum duration for executing this state, expressed as an ISO 8601 duration string or an expression that evaluates to one.
 * @example
 * "3S"
 */
type StateExecTimeout = string;
type TaskMetadata = {
  /** The UTC timestamp when the task was created. */readonly createdAt?: string; /** The user ID of the user who created the task. */
  createdBy?: string; /** The UTC timestamp when the task was deleted. */
  readonly deletedAt?: string; /** The reason the task is currently disabled. */
  disabledCode?: "MANUALLY" | "CONSECUTIVE-FAILURES" | "APP-SCRIPT-UPDATED" | "OWNER-DELETED" | "OWNER-DISABLED" | "APP-MOVED-SPACE"; /** The unique identifier of the legacy reload task this task was migrated from, if applicable. */
  migratedFrom?: string;
  orchestration?: OrchMeta; /** The user ID of the task owner. */
  ownerId?: string; /** The name of the resource on which the task was created. */
  resourceName?: string; /** The subtype of resource on which the task was created. */
  resourceSubType?: string; /** The type of resource on which the task was created. */
  resourceType?: string; /** The user ID of the owner whose script context is used when running the task. */
  scriptOwnerId?: string; /** The unique identifier of the space the task operates in. */
  spaceId?: string; /** The type of space the task operates in. */
  spaceType?: "personal" | "shared" | "managed"; /** The unique identifier of the tenant the task operates in. */
  tenantId?: string; /** Indicates the task's position in a dependency graph. */
  topology?: TaskTopology;
  trigger?: TriggerMeta; /** The UTC timestamp when the task was last updated. */
  updatedAt?: string; /** The product domain in which the resource is used. Defaults to `ANALYTICS` when not present. */
  usage?: "ANALYTICS" | "DATA_PREPARATION" | "DATAFLOW_PREP" | "SINGLE_TABLE_PREP";
};
/**
 * Indicates the task's position in a dependency graph.
 */
type TaskTopology = {
  /** When `true`, this task is triggered by one or more parent tasks. */isChild?: boolean; /** When `true`, this task has one or more downstream dependent tasks. */
  isParent?: boolean;
};
/**
 * Retrieves a paginated list of tasks the requesting user has access to. Results include task metadata such as owner, resource, space, and last run status. Use the `filter` parameter to narrow results by field values, or `sort` to control the ordering.
 *
 * @param query an object with query parameters
 * @throws GetTasksHttpError
 */
declare function getTasks(query: {
  /** Advanced filter expression using RFC 7644 SCIM syntax. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for syntax details. All comparisons are case-insensitive. Supported fields: `name`, `enabled`, `resourceId`, `ownerId`, `spaceId`, `createdAt`, `updatedAt`, `updatedBy`, `lastStatus`, `lastTriggeredBy`, `lastStartedAt`, `lastEndedAt`, `lastExecutedAs`, and `triggerType`. */filter?: string; /** Maximum number of tasks to return per page. */
  limit?: number; /** Cursor token for fetching the next page of results. */
  page?: string; /** The unique identifier of the resource to filter tasks by. */
  resourceId?: string;
  /** Field and direction to sort results by. Prefix the field name with
   * `+` for ascending or `-` for descending order. Defaults to `-updatedAt`. */
  sort?: "+createdAt" | "-createdAt" | "+enabled" | "-enabled" | "+name" | "-name" | "+ownerId" | "-ownerId" | "+resourceId" | "-resourceId" | "+spaceId" | "-spaceId" | "+updatedAt" | "-updatedAt" | "+updatedBy" | "-updatedBy" | "+lastStatus" | "-lastStatus" | "+lastTriggeredBy" | "-lastTriggeredBy" | "+lastStartedAt" | "-lastStartedAt" | "+lastEndedAt" | "-lastEndedAt" | "+lastExecutedAs" | "-lastExecutedAs" | "+triggerType" | "-triggerType";
}, options?: ApiCallOptions): Promise<GetTasksHttpResponse>;
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
 * Creates a new task for the specified resource. The task is owned by the requesting user and is disabled by default until explicitly enabled. The `resourceId` is derived automatically from the task's state definitions and cannot be set directly in the request body.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws CreateTaskHttpError
 */
declare function createTask(query: {
  /** When provided, specifies the unique identifier of a legacy reload-task to migrate from the previous scheduling system. */migrateFrom?: string;
}, body: Task, options?: ApiCallOptions): Promise<CreateTaskHttpResponse>;
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
 * Retrieves a paginated list of task runs for a given resource, identified by `id`. Returns run history across all tasks associated with that resource, ordered by the most recent run by default.
 *
 * @param id The unique identifier of the resource to retrieve task runs for.
 * @param query an object with query parameters
 * @throws GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getTasksResourceRuns_FIX_THIS_QUIRKY_NAME(id: string, query: {
  /** Maximum number of task runs to return per page. */limit?: number; /** Cursor token for fetching the next page of results. */
  page?: string; /** Field and direction to sort results by. Prefix the field name with `+` for ascending or `-` for descending order. Defaults to `-startedAt`. */
  sort?: "+startedAt" | "-startedAt" | "+endedAt" | "-endedAt" | "+status" | "-status" | "+taskId" | "-taskId" | "+actionId" | "-actionId";
}, options?: ApiCallOptions): Promise<GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: OrchRunList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpResponse>;
};
type GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Deletes a specific task and cancels any scheduled or pending runs associated with it. This action cannot be undone. Tenant admins can delete tasks owned by other users.
 *
 * @param id The unique identifier of the task to delete.
 * @throws DeleteTaskHttpError
 */
declare function deleteTask(id: string, options?: ApiCallOptions): Promise<DeleteTaskHttpResponse>;
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
 * Retrieves the full definition and metadata for a specific task, including its trigger configuration, state definitions, owner, and last run status. Use this operation to inspect a task before updating or starting it.
 *
 * @param id The unique identifier of the task to retrieve.
 * @throws GetTaskHttpError
 */
declare function getTask(id: string, options?: ApiCallOptions): Promise<GetTaskHttpResponse>;
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
 * Partially updates a specific task using a JSON Patch document (RFC 6902). Only the fields included in the patch operations are modified. All other fields remain unchanged. If the task is owned by another user, ownership is transferred to the requesting user.
 *
 * @param id The unique identifier of the task to update.
 * @param body an object with the body content
 * @throws PatchTaskHttpError
 */
declare function patchTask(id: string, body: JSONPatch, options?: ApiCallOptions): Promise<PatchTaskHttpResponse>;
type PatchTaskHttpResponse = PatchTask200HttpResponse | PatchTask204HttpResponse;
type PatchTask200HttpResponse = {
  data: Task;
  headers: Headers;
  status: 200;
};
type PatchTask204HttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchTaskHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Replaces the full definition of a specific task with the supplied payload. All fields not included in the request body are reset to their defaults. If the task is owned by another user, ownership is transferred to the requesting user. Use `PATCH` instead to apply a partial update.
 *
 * @param id The unique identifier of the task to replace.
 * @param body an object with the body content
 * @throws UpdateTaskHttpError
 */
declare function updateTask(id: string, body: Task, options?: ApiCallOptions): Promise<UpdateTaskHttpResponse>;
type UpdateTaskHttpResponse = {
  data: Task;
  headers: Headers;
  status: 200;
};
type UpdateTaskHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Triggers an immediate run of the specified task outside its normal schedule. The optional `source` parameter identifies what initiated the run, which is recorded in the run history for auditing purposes.
 *
 * @param id The unique identifier of the task to start.
 * @param query an object with query parameters
 * @throws StartTaskHttpError
 */
declare function startTask(id: string, query: {
  /** The origin of the trigger. Defaults to `manual`. For event-triggered tasks, this can be the name of the triggering task. */source?: string;
}, options?: ApiCallOptions): Promise<StartTaskHttpResponse>;
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
 * Retrieves the ancestor subgraph for a specific task, with the requested task as the root vertex. Traverses parent relationships breadth-first up to the depth specified by `level`. Use this to understand all upstream dependencies of a task.
 *
 * @param id The unique identifier of the task.
 * @param query an object with query parameters
 * @throws GetTaskGraphsAncestors_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getTaskGraphsAncestors_FIX_THIS_QUIRKY_NAME(id: string, query: {
  /** Maximum ancestor depth to traverse breadth-first. */level?: number; /** When `true`, includes the full task document for each accessible vertex in the response. */
  withTask?: boolean;
}, options?: ApiCallOptions): Promise<GetTaskGraphsAncestors_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetTaskGraphsAncestors_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: TaskGraph;
  headers: Headers;
  status: 200;
};
type GetTaskGraphsAncestors_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Retrieves a paginated list of tasks that are direct children of the specified task in the dependency graph. A child task is one that is triggered when the parent task completes successfully.
 *
 * @param id The unique identifier of the parent task.
 * @param query an object with query parameters
 * @throws GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getTaskGraphsChildren_FIX_THIS_QUIRKY_NAME(id: string, query: {
  /** Advanced filter expression using RFC 7644 SCIM syntax. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for syntax details. All comparisons are case-insensitive. Supported fields: `name`, `enabled`, `resourceId`, `ownerId`, `spaceId`, `createdAt`, `updatedAt`, `updatedBy`, `lastStatus`, `lastTriggeredBy`, `lastStartedAt`, `lastEndedAt`, `lastExecutedAs`, and `triggerType`. */filter?: string; /** Maximum number of tasks to return per page. */
  limit?: number; /** Cursor token for fetching the next page of results. */
  page?: string;
  /** Field and direction to sort results by. Prefix the field name with
   * `+` for ascending or `-` for descending order. Defaults to `-updatedAt`. */
  sort?: "+createdAt" | "-createdAt" | "+enabled" | "-enabled" | "+name" | "-name" | "+ownerId" | "-ownerId" | "+resourceId" | "-resourceId" | "+spaceId" | "-spaceId" | "+updatedAt" | "-updatedAt" | "+updatedBy" | "-updatedBy" | "+lastStatus" | "-lastStatus" | "+lastTriggeredBy" | "-lastTriggeredBy" | "+lastStartedAt" | "-lastStartedAt" | "+lastEndedAt" | "-lastEndedAt" | "+lastExecutedAs" | "-lastExecutedAs" | "+triggerType" | "-triggerType";
}, options?: ApiCallOptions): Promise<GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: TaskList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpResponse>;
};
type GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Retrieves the descendant subgraph for a specific task, with the requested task as the root vertex. Traverses child relationships breadth-first down to the depth specified by `level`. Use this to identify all downstream tasks that will be triggered when this task completes.
 *
 * @param id The unique identifier of the task.
 * @param query an object with query parameters
 * @throws GetTaskGraphsDescendants_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getTaskGraphsDescendants_FIX_THIS_QUIRKY_NAME(id: string, query: {
  /** Maximum descendant depth to traverse breadth-first. */level?: number; /** When `true`, includes the full task document for each accessible vertex in the response. */
  withTask?: boolean;
}, options?: ApiCallOptions): Promise<GetTaskGraphsDescendants_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetTaskGraphsDescendants_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: TaskGraph;
  headers: Headers;
  status: 200;
};
type GetTaskGraphsDescendants_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Retrieves a paginated list of tasks that are direct parents of the specified task in the dependency graph. A parent task is one whose completion triggers the current task.
 *
 * @param id The unique identifier of the child task.
 * @param query an object with query parameters
 * @throws GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getTaskGraphsParents_FIX_THIS_QUIRKY_NAME(id: string, query: {
  /** Advanced filter expression using RFC 7644 SCIM syntax. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for syntax details. All comparisons are case-insensitive. Supported fields: `name`, `enabled`, `resourceId`, `ownerId`, `spaceId`, `createdAt`, `updatedAt`, `updatedBy`, `lastStatus`, `lastTriggeredBy`, `lastStartedAt`, `lastEndedAt`, `lastExecutedAs`, and `triggerType`. */filter?: string; /** Maximum number of tasks to return per page. */
  limit?: number; /** Cursor token for fetching the next page of results. */
  page?: string;
  /** Field and direction to sort results by. Prefix the field name with
   * `+` for ascending or `-` for descending order. Defaults to `-updatedAt`. */
  sort?: "+createdAt" | "-createdAt" | "+enabled" | "-enabled" | "+name" | "-name" | "+ownerId" | "-ownerId" | "+resourceId" | "-resourceId" | "+spaceId" | "-spaceId" | "+updatedAt" | "-updatedAt" | "+updatedBy" | "-updatedBy" | "+lastStatus" | "-lastStatus" | "+lastTriggeredBy" | "-lastTriggeredBy" | "+lastStartedAt" | "-lastStartedAt" | "+lastEndedAt" | "-lastEndedAt" | "+lastExecutedAs" | "-lastExecutedAs" | "+triggerType" | "-triggerType";
}, options?: ApiCallOptions): Promise<GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: TaskList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpResponse>;
};
type GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Retrieves the combined ancestor-and-descendant subgraph for a specific task, with the requested task as the root vertex. Traverses both parent and child relationships breadth-first up to the depth specified by `level`. Use this to see the full dependency context for a task in one request.
 *
 * @param id The unique identifier of the task.
 * @param query an object with query parameters
 * @throws GetTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAME(id: string, query: {
  /** Maximum ancestor and descendant depth to traverse breadth-first. */level?: number; /** When `true`, includes the full task document for each accessible vertex in the response. */
  withTask?: boolean;
}, options?: ApiCallOptions): Promise<GetTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: TaskGraph;
  headers: Headers;
  status: 200;
};
type GetTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Retrieves a paginated list of execution runs for the specified task, ordered by most recent run by default. Each run record includes the start and end time, status, and the identity that triggered it.
 *
 * @param id The unique identifier of the task.
 * @param query an object with query parameters
 * @throws GetTaskRunsHttpError
 */
declare function getTaskRuns(id: string, query: {
  /** Maximum number of task runs to return per page. */limit?: number; /** Cursor token for fetching the next page of results. */
  page?: string; /** Field and direction to sort results by. Prefix the field name with `+` for ascending or `-` for descending order. Defaults to `-startedAt`. */
  sort?: "+startedAt" | "-startedAt" | "+endedAt" | "-endedAt" | "+status" | "-status" | "+taskId" | "-taskId" | "+actionId" | "-actionId";
}, options?: ApiCallOptions): Promise<GetTaskRunsHttpResponse>;
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
 * Retrieves the most recent execution run for the specified task. Returns a 404 response if the task has never been run. Use this operation to quickly check whether the last run succeeded or failed without paginating through the full run history.
 *
 * @param id The unique identifier of the task.
 * @throws GetTaskRunsLast_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getTaskRunsLast_FIX_THIS_QUIRKY_NAME(id: string, options?: ApiCallOptions): Promise<GetTaskRunsLast_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetTaskRunsLast_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: OrchRun;
  headers: Headers;
  status: 200;
};
type GetTaskRunsLast_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Retrieves the execution log for a specific task run. Set the `Accept` header to `text/plain` to receive the raw log as a downloadable file, or `application/json` (default) to receive it wrapped in a JSON object with a `logContent` field.
 *
 * @param id The unique identifier of the task.
 * @param runId The unique identifier of the task run.
 * @throws GetTaskRunLogHttpError
 */
declare function getTaskRunLog(id: string, runId: string, options?: ApiCallOptions): Promise<GetTaskRunLogHttpResponse>;
type GetTaskRunLogHttpResponse = {
  data: {
    /** Log content in plain text format. */logContent?: string;
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
 * Clears the cache for scheduling/tasks api requests.
 */
declare function clearCache(): void;
type TasksAPI = {
  /**
   * Retrieves a paginated list of tasks the requesting user has access to. Results include task metadata such as owner, resource, space, and last run status. Use the `filter` parameter to narrow results by field values, or `sort` to control the ordering.
   *
   * @param query an object with query parameters
   * @throws GetTasksHttpError
   */
  getTasks: typeof getTasks;
  /**
   * Creates a new task for the specified resource. The task is owned by the requesting user and is disabled by default until explicitly enabled. The `resourceId` is derived automatically from the task's state definitions and cannot be set directly in the request body.
   *
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws CreateTaskHttpError
   */
  createTask: typeof createTask;
  /**
   * Retrieves a paginated list of task runs for a given resource, identified by `id`. Returns run history across all tasks associated with that resource, ordered by the most recent run by default.
   *
   * @param id The unique identifier of the resource to retrieve task runs for.
   * @param query an object with query parameters
   * @throws GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getTasksResourceRuns_FIX_THIS_QUIRKY_NAME: typeof getTasksResourceRuns_FIX_THIS_QUIRKY_NAME;
  /**
   * Deletes a specific task and cancels any scheduled or pending runs associated with it. This action cannot be undone. Tenant admins can delete tasks owned by other users.
   *
   * @param id The unique identifier of the task to delete.
   * @throws DeleteTaskHttpError
   */
  deleteTask: typeof deleteTask;
  /**
   * Retrieves the full definition and metadata for a specific task, including its trigger configuration, state definitions, owner, and last run status. Use this operation to inspect a task before updating or starting it.
   *
   * @param id The unique identifier of the task to retrieve.
   * @throws GetTaskHttpError
   */
  getTask: typeof getTask;
  /**
   * Partially updates a specific task using a JSON Patch document (RFC 6902). Only the fields included in the patch operations are modified. All other fields remain unchanged. If the task is owned by another user, ownership is transferred to the requesting user.
   *
   * @param id The unique identifier of the task to update.
   * @param body an object with the body content
   * @throws PatchTaskHttpError
   */
  patchTask: typeof patchTask;
  /**
   * Replaces the full definition of a specific task with the supplied payload. All fields not included in the request body are reset to their defaults. If the task is owned by another user, ownership is transferred to the requesting user. Use `PATCH` instead to apply a partial update.
   *
   * @param id The unique identifier of the task to replace.
   * @param body an object with the body content
   * @throws UpdateTaskHttpError
   */
  updateTask: typeof updateTask;
  /**
   * Triggers an immediate run of the specified task outside its normal schedule. The optional `source` parameter identifies what initiated the run, which is recorded in the run history for auditing purposes.
   *
   * @param id The unique identifier of the task to start.
   * @param query an object with query parameters
   * @throws StartTaskHttpError
   */
  startTask: typeof startTask;
  /**
   * Retrieves the ancestor subgraph for a specific task, with the requested task as the root vertex. Traverses parent relationships breadth-first up to the depth specified by `level`. Use this to understand all upstream dependencies of a task.
   *
   * @param id The unique identifier of the task.
   * @param query an object with query parameters
   * @throws GetTaskGraphsAncestors_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getTaskGraphsAncestors_FIX_THIS_QUIRKY_NAME: typeof getTaskGraphsAncestors_FIX_THIS_QUIRKY_NAME;
  /**
   * Retrieves a paginated list of tasks that are direct children of the specified task in the dependency graph. A child task is one that is triggered when the parent task completes successfully.
   *
   * @param id The unique identifier of the parent task.
   * @param query an object with query parameters
   * @throws GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getTaskGraphsChildren_FIX_THIS_QUIRKY_NAME: typeof getTaskGraphsChildren_FIX_THIS_QUIRKY_NAME;
  /**
   * Retrieves the descendant subgraph for a specific task, with the requested task as the root vertex. Traverses child relationships breadth-first down to the depth specified by `level`. Use this to identify all downstream tasks that will be triggered when this task completes.
   *
   * @param id The unique identifier of the task.
   * @param query an object with query parameters
   * @throws GetTaskGraphsDescendants_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getTaskGraphsDescendants_FIX_THIS_QUIRKY_NAME: typeof getTaskGraphsDescendants_FIX_THIS_QUIRKY_NAME;
  /**
   * Retrieves a paginated list of tasks that are direct parents of the specified task in the dependency graph. A parent task is one whose completion triggers the current task.
   *
   * @param id The unique identifier of the child task.
   * @param query an object with query parameters
   * @throws GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getTaskGraphsParents_FIX_THIS_QUIRKY_NAME: typeof getTaskGraphsParents_FIX_THIS_QUIRKY_NAME;
  /**
   * Retrieves the combined ancestor-and-descendant subgraph for a specific task, with the requested task as the root vertex. Traverses both parent and child relationships breadth-first up to the depth specified by `level`. Use this to see the full dependency context for a task in one request.
   *
   * @param id The unique identifier of the task.
   * @param query an object with query parameters
   * @throws GetTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAME: typeof getTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAME;
  /**
   * Retrieves a paginated list of execution runs for the specified task, ordered by most recent run by default. Each run record includes the start and end time, status, and the identity that triggered it.
   *
   * @param id The unique identifier of the task.
   * @param query an object with query parameters
   * @throws GetTaskRunsHttpError
   */
  getTaskRuns: typeof getTaskRuns;
  /**
   * Retrieves the most recent execution run for the specified task. Returns a 404 response if the task has never been run. Use this operation to quickly check whether the last run succeeded or failed without paginating through the full run history.
   *
   * @param id The unique identifier of the task.
   * @throws GetTaskRunsLast_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getTaskRunsLast_FIX_THIS_QUIRKY_NAME: typeof getTaskRunsLast_FIX_THIS_QUIRKY_NAME;
  /**
   * Retrieves the execution log for a specific task run. Set the `Accept` header to `text/plain` to receive the raw log as a downloadable file, or `application/json` (default) to receive it wrapped in a JSON object with a `logContent` field.
   *
   * @param id The unique identifier of the task.
   * @param runId The unique identifier of the task run.
   * @throws GetTaskRunLogHttpError
   */
  getTaskRunLog: typeof getTaskRunLog;
  /**
   * Clears the cache for tasks api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the tasks api
 */
declare const tasksExport: TasksAPI;
//#endregion
export { Action, ActionExecTimeout, CorrelationDef, CreateTaskHttpError, CreateTaskHttpResponse, Crondef, DeleteTaskHttpError, DeleteTaskHttpResponse, End, ErrorResponse, EventTimeout, Eventdef, Events, Eventstate, Functionref, GetTaskGraphsAncestors_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskGraphsAncestors_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTaskGraphsDescendants_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskGraphsDescendants_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTaskHttpError, GetTaskHttpResponse, GetTaskRunLogHttpError, GetTaskRunLogHttpResponse, GetTaskRunsHttpError, GetTaskRunsHttpResponse, GetTaskRunsLast_FIX_THIS_QUIRKY_NAMEHttpError, GetTaskRunsLast_FIX_THIS_QUIRKY_NAMEHttpResponse, GetTasksHttpError, GetTasksHttpResponse, GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpError, GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpResponse, HttpResult, JSONPatch, Link, Onevents, OrchMeta, OrchRun, OrchRunBase, OrchRunList, PatchTask200HttpResponse, PatchTask204HttpResponse, PatchTaskHttpError, PatchTaskHttpResponse, PatchValue, Schedule, StartTaskHttpError, StartTaskHttpResponse, Startdef, StateExecTimeout, Task, TaskGraph, TaskGraphEdge, TaskGraphVertex, TaskList, TaskMetadata, TaskTopology, TasksAPI, TriggerMeta, UpdateTaskHttpError, UpdateTaskHttpResponse, clearCache, createTask, tasksExport as default, deleteTask, getTask, getTaskGraphsAncestors_FIX_THIS_QUIRKY_NAME, getTaskGraphsChildren_FIX_THIS_QUIRKY_NAME, getTaskGraphsDescendants_FIX_THIS_QUIRKY_NAME, getTaskGraphsParents_FIX_THIS_QUIRKY_NAME, getTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAME, getTaskRunLog, getTaskRuns, getTaskRunsLast_FIX_THIS_QUIRKY_NAME, getTasks, getTasksResourceRuns_FIX_THIS_QUIRKY_NAME, patchTask, startTask, tasks_d_exports as t, updateTask };