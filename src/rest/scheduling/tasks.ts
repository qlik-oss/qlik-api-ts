/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import { clearApiCache, invokeFetch, type ApiCallOptions, type PageCallOptions } from "#public/invoke-fetch";

/* -------------------------------------------------------------------------- */
/*                                Public types                                */
/* -------------------------------------------------------------------------- */

export type ErrorResponse = {
  errors?: HttpResult[];
  /** A trace identifier for correlating the error to a specific service request. */
  traceId?: string;
};

/**
 * CloudEvent definitions for the workflow. Defines the events that can be consumed or produced by the workflow.
 */
export type Events = Eventdef[];

export type HttpResult = {
  code?: number;
  context?: string;
  inner?: HttpResult;
  result?: unknown;
  timestamp?: string;
  title?: string;
};

export type JSONPatch = {
  /** The patch operation to perform. */
  op: "add" | "remove" | "replace" | "move" | "copy";
  /** A JSON Pointer (RFC 6901) identifying the field to patch. */
  path: string;
  /** The value to use in a JSON Patch operation. */
  value?: PatchValue;
}[];

export type Link = {
  /** The URL of the linked resource. */
  href: string;
};

export type OrchMeta = {
  /** Additional attributes of the orchestration instance associated with this task in the scheduling service. */
  attrs?: Record<string, string>;
  /** The unique identifier of the orchestration instance associated with this task in the scheduling service. */
  id: string;
  lastRun?: OrchRunBase;
  /** The type identifier of the orchestration system handling this task. */
  type: 0 | 1 | 2 | 3;
};

export type OrchRun = OrchRunBase & {
  /** The unique identifier of the action that was executed. */
  actionId: string;
  /** The raw log output from the task run. */
  log?: string;
  /** The unique identifier of the resource the task operated on. */
  resourceId: string;
  /** The unique identifier of the task. */
  taskId: string;
  taskMeta: TaskMetadata;
  /** The name of the task at the time it was run. */
  taskName: string;
};

export type OrchRunBase = {
  /** The UTC timestamp when the task run ended. */
  readonly endedAt?: string;
  /** The user ID of the user on whose behalf the task was executed. */
  executedAs?: string;
  /** The unique identifier of the task run. */
  id: string;
  /** The UTC timestamp when the task run started. */
  readonly startedAt?: string;
  /** The current status of the task run. */
  status: "RUNNING" | "SUCCEEDED" | "FAILED";
  /** The identity or event that triggered the task run. */
  triggeredBy: string;
  /** The unique identifier of the worker that executed the job. For example, a reload run carries the reload ID from the engine, and an automation run carries the automation run ID. */
  workerId: string;
  /** The type or name of the target system that executed the run. */
  workerType: string;
};

export type OrchRunList = {
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
export type PatchValue = string | number | number | boolean | unknown[] | unknown;

/**
 * Request body for creating a reload task that runs when a dataset the app uses is updated by a Data Integration pipeline.
 */
export type ReloadOnDatasetUpdatedRequest = {
  /** A human-readable description of the task's purpose. */
  description?: string;
  /** Whether the task is enabled. A disabled task never runs on its own. Defaults to `false`. */
  enabled?: boolean;
  /** The name that identifies the task. */
  name: string;
  /** Whether the reload is partial. */
  partial?: boolean;
};

/**
 * Request body for creating a reload task that runs when another task finishes with a given status.
 */
export type ReloadOnTaskEventRequest = {
  /** A human-readable description of the task's purpose. */
  description?: string;
  /** Whether the task is enabled. A disabled task never runs on its own. Defaults to `false`. */
  enabled?: boolean;
  /** The name that identifies the task. */
  name: string;
  /** The unique identifier of the upstream task whose runs trigger this reload. It must belong to the caller's tenant, and the caller needs read access to its app. */
  onTaskId: string;
  /** The outcome of an upstream task run that triggers this reload. Defaults to `succeeded`.
   * - `succeeded`: the run completed successfully. For an automation, `finished`
   *   and `finished with warnings` count as success.
   * - `failed`: the run ended in any unsuccessful state, such as failed, canceled
   *   or exceeded limits.
   * - `any`: either of the above.
   *
   * Only runs started by the scheduling service count: scheduled, triggered or
   * manual task runs. A reload started directly on the app does not. */
  onTaskStatus?: "succeeded" | "failed" | "any";
  /** Whether the reload is partial. */
  partial?: boolean;
};

/**
 * Request body for creating a reload task that runs on a recurring time schedule.
 */
export type ReloadOnTimeScheduleRequest = {
  /** A human-readable description of the task's purpose. */
  description?: string;
  /** Whether the task is enabled. A disabled task never runs on its own. Defaults to `false`. */
  enabled?: boolean;
  /** The local date and time in `timezone` when the schedule ends, in the same format as `startDateTime`; any offset or `Z` is ignored in the same way. It must be after `startDateTime` and in the future. Omit it for a schedule with no end. */
  endDateTime?: string;
  /** The name that identifies the task. */
  name: string;
  /** Whether the reload is partial. */
  partial?: boolean;
  /** An RFC 5545 recurrence rule prefixed with `RRULE:`, for example
   * `RRULE:FREQ=DAILY;BYHOUR=9;BYMINUTE=0;BYSECOND=0` to run every day at 09:00:00.
   * `FREQ` is required. The scheduler also enforces these limits:
   * - The shortest frequency is `MINUTELY`; `SECONDLY` is not supported.
   * - `COUNT` is at most 100.
   * - `INTERVAL` is at most 1000 for `MINUTELY` and `HOURLY`, 548 for `DAILY`,
   *   78 for `WEEKLY`, 18 for `MONTHLY` and 2 for `YEARLY`.
   * - An `INTERVAL` greater than 1 cannot be combined with the `BY*` part of the
   *   same unit, for example `FREQ=MINUTELY;INTERVAL=5;BYMINUTE=10`.
   * - `DTSTART`, `UNTIL`, `EXDATE` and `RDATE` are not supported; use
   *   `startDateTime` and `endDateTime` instead.
   *
   * Time-of-day parts that are left out (`BYHOUR`, `BYMINUTE`, `BYSECOND`) are taken
   * from `startDateTime`, or from the creation time when `startDateTime` is omitted.
   * Set them explicitly to run at a fixed time of day. */
  recurrence: string;
  /** The local date and time in `timezone` when the schedule starts, in the format `YYYY-MM-DDThh:mm:ss`. Any offset or `Z` is ignored: the value is always read as wall-clock time in `timezone`, so `2026-11-02T09:00:00Z` with `timezone` set to `Europe/Stockholm` means 09:00 Stockholm time. Defaults to the time the task is created. Occurrences before the task is created are skipped, not caught up, but they still count towards `COUNT`. */
  startDateTime?: string;
  /** An IANA time zone name, such as `Europe/Stockholm`, used to evaluate `recurrence`, `startDateTime` and `endDateTime`. Defaults to `UTC`. */
  timezone?: string;
};

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
 *           contextAttributeValue: "80c6f35f-c9d7-4488-bb5a-ad973b13ec00"
 *         }
 *       ],
 *       name: "event1",
 *       source: "dataset.updated",
 *       type: "com.qlik/active-analytics-orch"
 *     }
 *   ],
 *   id: "3c9d1f6e-8b2a-4d7c-a5e1-0f4b6d8e2a17",
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
 *       id: "9a7b5c3d-1e2f-4a6b-8c0d-2e4f6a8b0c1d",
 *       type: 3
 *     },
 *     spaceId: "",
 *     tenantId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *     trigger: {
 *       id: "5e6f7a8b-9c0d-4e1f-a2b3-c4d5e6f7a8b9",
 *       type: 4
 *     },
 *     updatedAt: "2025-08-31T23:27:51.207Z",
 *     usage: "ANALYTICS"
 *   },
 *   name: "TaskExample",
 *   resourceId: "80c6f35f-c9d7-4488-bb5a-ad973b13ec00",
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
 *                   "appId": "80c6f35f-c9d7-4488-bb5a-ad973b13ec00",
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
export type Task = {
  /** A list of terms describing the workflow's intended purpose, subject areas, or other important qualities. */
  annotations?: string[];
  /** A human-readable description of the workflow's purpose. */
  description?: string;
  /** Indicates whether the task is enabled. Disabled tasks will not trigger automatically. */
  enabled?: boolean;
  /** CloudEvent definitions for the workflow. Defines the events that can be consumed or produced by the workflow. */
  events?: Events;
  /** The unique identifier assigned to the task by the service. */
  readonly id?: string;
  /** When `true`, workflow instances are not terminated when there are no active execution paths. Instances can be ended via a terminate end definition or a configured `workflowExecTimeout`. */
  keepActive?: boolean;
  /** An optional expression used to generate a domain-specific workflow instance identifier. */
  key?: string;
  metadata?: TaskMetadata;
  /** The name that identifies the workflow definition. Combined with `version`, the name forms a unique identifier for the task. */
  name: string;
  /** The unique identifier of the resource this task operates on. The value supplied in a request body is ignored and is derived automatically from `states`. */
  resourceId?: string;
  /** The version of the task definition format. If omitted, the service sets it to the API version that created the task. Tasks created by the simplified reload endpoints always get the API version. */
  specVersion: string;
  /** The start definition for a workflow, including optional schedule configuration. */
  start?: Startdef;
  /** The list of state definitions that compose the workflow. */
  states?: Eventstate[];
  /** The semantic version of the workflow definition. */
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
export type TaskGraph = {
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
export type TaskGraphEdge = {
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
export type TaskGraphVertex = {
  attrs?: unknown;
  task?: Task;
  taskId?: string;
};

export type TaskList = {
  data?: Task[];
  links?: {
    next?: Link;
    prev?: Link;
    self?: Link;
  };
};

export type TriggerMeta = {
  /** The unique identifier of the trigger associated with this task. */
  id: string;
  /** The type identifier of the trigger associated with this task. */
  type: 0 | 1 | 2 | 3 | 4;
};

export type Action = {
  /** An expression that must evaluate to `true` for this action to be performed. When `false`, the action is skipped. */
  condition?: string;
  /** A reference to a function to invoke, either as a name string or a structured object. */
  functionRef?: Functionref;
  /** A unique name for this action within the workflow. */
  name?: string;
  /** Workflow error references for which this action must not be retried. Used only when `autoRetries` is `true`. */
  nonRetryableErrors?: string[];
  /** A reference to a defined workflow retry policy. If absent, the default retry policy applies. */
  retryRef?: string;
  /** Workflow error references for which this action must be retried. Used only when `autoRetries` is `false`. */
  retryableErrors?: string[];
};

/**
 * The maximum duration for executing a single action, expressed as an ISO 8601 duration string or an expression that evaluates to one.
 * @example
 * "3S"
 */
export type ActionExecTimeout = string;

/**
 * A correlation definition used to match a CloudEvent to a specific workflow instance.
 */
export type CorrelationDef = {
  /** The name of the CloudEvent extension context attribute to match on. */
  contextAttributeName: "id" | "status" | "appId" | "spaceId" | "datasetId";
  /** The expected value of the CloudEvent extension context attribute. */
  contextAttributeValue?: string;
};

export type Crondef =
  | string
  | {
      /** A cron expression describing when the workflow instance should be created. */
      expression: string;
      /** The date and time (ISO 8601 format) after which this cron expression is no longer active. */
      validUntil?: string;
    };

/**
 * Marks this state as a terminal state in the workflow.
 */
export type End = boolean;

/**
 * The maximum duration to wait for the defined events to be received, expressed as an ISO 8601 duration string or an expression that evaluates to one.
 * @example
 * "3S"
 */
export type EventTimeout = string;

export type Eventdef = {
  /** Correlation definitions used to match incoming CloudEvents to this workflow instance. */
  correlation?: CorrelationDef[];
  /** When `true`, only the event payload is accessible to consuming workflow states. When `false`, both the payload and context attributes are accessible. */
  dataOnly?: boolean;
  /** A unique name identifying this event definition within the workflow. */
  name?: string;
  /** The CloudEvents source attribute identifying the origin of the event. */
  source?: "system-events.task" | "dataset.updated";
  /** The CloudEvents type attribute identifying the kind of event. */
  type?: "com.qlik.v1.task.run.finished" | "com.qlik/active-analytics-orch";
};

/**
 * A workflow state that waits for one or more CloudEvents, then consumes them and invokes one or more actions sequentially or in parallel.
 */
export type Eventstate = {
  /** The unique name of a workflow state responsible for compensating this state if it fails. */
  compensatedBy?: string;
  /** Marks this state as a terminal state in the workflow. */
  end?: End;
  /** When `true`, consuming any one of the defined events causes its associated actions to execute. When `false`, all defined events must be consumed before actions are performed. */
  exclusive?: boolean;
  /** The name of this state, unique within the workflow. */
  name?: string;
  /** The events to consume and the optional actions to perform when they are received. */
  onEvents?: Onevents[];
  /** State-specific timeout durations. */
  timeouts?: {
    /** The maximum duration for executing a single action, expressed as an ISO 8601 duration string or an expression that evaluates to one. */
    actionExecTimeout?: ActionExecTimeout;
    /** The maximum duration to wait for the defined events to be received, expressed as an ISO 8601 duration string or an expression that evaluates to one. */
    eventTimeout?: EventTimeout;
    /** The maximum duration for executing this state, expressed as an ISO 8601 duration string or an expression that evaluates to one. */
    stateExecTimeout?: StateExecTimeout;
  };
  /** The state type. Must be `EVENT` for event-driven states. */
  type?: "EVENT";
};

/**
 * A reference to a function to invoke, either as a name string or a structured object.
 * @example
 * {
 *   arguments: {
 *     "appId": "80c6f35f-c9d7-4488-bb5a-ad973b13ec00",
 *     "partial": false,
 *     "weight": 5
 *   },
 *   refName: "app.reload"
 * }
 */
export type Functionref =
  | string
  | {
      /** Arguments to pass to the function. The `app.reload` function accepts:
       * - `appId` (string, required): The ID of the app to reload.
       * - `partial` (boolean, default `false`): Whether to perform a partial reload.
       * - `weight` (integer, `1` to `10`, default `1`): How quickly the reload is picked up
       *   relative to other reloads already queued for your subscription. A weight of `10`
       *   starts sooner than a weight of `1`. It does not affect the reload once running.
       *   Apps in personal spaces always run with weight `1`. Values outside `1` to `10` are rejected. */
      arguments?: unknown;
      /** Specifies whether the function is invoked synchronously or asynchronously. */
      invoke?: "SYNC" | "ASYNC";
      /** The name of the function to invoke. */
      refName: "app.reload";
      /** A GraphQL selection set string. Only applicable when the function type is `graphql`. */
      selectionSet?: string;
    };

export type Onevents = {
  /** Specifies whether actions are performed sequentially or in parallel. */
  actionMode?: "SEQUENTIAL" | "PARALLEL";
  /** Actions to perform when the matched events are consumed. */
  actions?: Action[];
  /** References to one or more unique event names defined in the workflow events list. */
  eventRefs: string[];
};

export type Schedule =
  | string
  | {
      cron?: Crondef;
      /** The date and time (ISO 8601 format) when the workflow schedule ends. */
      endDateTime?: string;
      /** A repeating time interval in ISO 8601 format that defines when workflow instances are automatically created. */
      interval?: string;
      /** An RRULE recurrence rule string defining when the workflow recurs. */
      recurrence?: string;
      /** The date and time (ISO 8601 format) when the workflow schedule begins. */
      startDateTime?: string;
      /** The timezone name used to evaluate the interval and cron expression. Defaults to `UTC`. */
      timezone?: string;
    };

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
export type Startdef = {
  schedule: Schedule;
  /** The name of the starting workflow state. */
  stateName?: string;
};

/**
 * The maximum duration for executing this state, expressed as an ISO 8601 duration string or an expression that evaluates to one.
 * @example
 * "3S"
 */
export type StateExecTimeout = string;

export type TaskMetadata = {
  /** The UTC timestamp when the task was created. */
  readonly createdAt?: string;
  /** The user ID of the user who created the task. */
  createdBy?: string;
  /** The UTC timestamp when the task was deleted. */
  readonly deletedAt?: string;
  /** The reason the task is currently disabled. `SCHEDULE-EXPIRED` is reserved for tasks migrated from a legacy reload-task whose schedule had already ended; it is stripped when supplied on create or update. */
  disabledCode?:
    | "MANUALLY"
    | "CONSECUTIVE-FAILURES"
    | "APP-SCRIPT-UPDATED"
    | "OWNER-DELETED"
    | "OWNER-DISABLED"
    | "APP-MOVED-SPACE"
    | "OWNER-MOVED"
    | "SCHEDULE-EXPIRED";
  /** The unique identifier of the legacy reload task this task was migrated from, if applicable. */
  migratedFrom?: string;
  orchestration?: OrchMeta;
  /** The user ID of the task owner. */
  ownerId?: string;
  /** The name of the resource on which the task was created. */
  resourceName?: string;
  /** The subtype of resource on which the task was created. */
  resourceSubType?: string;
  /** The type of resource on which the task was created. */
  resourceType?: string;
  /** The user ID of the owner whose script context is used when running the task. */
  scriptOwnerId?: string;
  /** The unique identifier of the space the task operates in. */
  spaceId?: string;
  /** The type of space the task operates in. */
  spaceType?: "personal" | "shared" | "managed";
  /** The unique identifier of the tenant the task operates in. */
  tenantId?: string;
  /** Indicates the task's position in a dependency graph. */
  topology?: TaskTopology;
  trigger?: TriggerMeta;
  /** The UTC timestamp when the task was last updated. */
  updatedAt?: string;
  /** The product domain in which the resource is used. Defaults to `ANALYTICS` when not present. */
  usage?: "ANALYTICS" | "DATA_PREPARATION" | "DATAFLOW_PREP" | "SINGLE_TABLE_PREP";
};

/**
 * Indicates the task's position in a dependency graph.
 */
export type TaskTopology = {
  /** When `true`, this task is triggered by one or more parent tasks. */
  isChild?: boolean;
  /** When `true`, this task has one or more downstream dependent tasks. */
  isParent?: boolean;
};

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Retrieves a paginated list of tasks the requesting user has access to. Results include task metadata such as owner, resource, space, and last run status. Use the `filter` parameter to narrow results by field values, or `sort` to control the ordering.
 *
 * @param query an object with query parameters
 * @throws GetTasksHttpError
 */
export async function getTasks(
  query: {
    /** Advanced filter expression using RFC 7644 SCIM syntax. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for syntax details. All comparisons are case-insensitive. Supported fields: `name`, `enabled`, `resourceId`, `ownerId`, `spaceId`, `createdAt`, `updatedAt`, `updatedBy`, `lastStatus`, `lastTriggeredBy`, `lastStartedAt`, `lastEndedAt`, `lastExecutedAs`, and `triggerType`. */
    filter?: string;
    /** Maximum number of tasks to return per page. */
    limit?: number;
    /** Cursor token for fetching the next page of results. */
    page?: string;
    /** The unique identifier of the resource to filter tasks by. */
    resourceId?: string;
    /** Field and direction to sort results by. Prefix the field name with
     * `+` for ascending or `-` for descending order. Defaults to `-updatedAt`. */
    sort?:
      | "+createdAt"
      | "-createdAt"
      | "+enabled"
      | "-enabled"
      | "+name"
      | "-name"
      | "+ownerId"
      | "-ownerId"
      | "+resourceId"
      | "-resourceId"
      | "+spaceId"
      | "-spaceId"
      | "+updatedAt"
      | "-updatedAt"
      | "+updatedBy"
      | "-updatedBy"
      | "+lastStatus"
      | "-lastStatus"
      | "+lastTriggeredBy"
      | "-lastTriggeredBy"
      | "+lastStartedAt"
      | "-lastStartedAt"
      | "+lastEndedAt"
      | "-lastEndedAt"
      | "+lastExecutedAs"
      | "-lastExecutedAs"
      | "+triggerType"
      | "-triggerType";
  },
  options?: ApiCallOptions,
): Promise<GetTasksHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "get",
    pathTemplate: "/api/scheduling/tasks",
    query,
    options,
  });
}

export type GetTasksHttpResponse = {
  data: TaskList;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetTasksHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetTasksHttpResponse>;
};

export type GetTasksHttpError = {
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
export async function createTask(
  query: Record<string, unknown>,
  body: Task,
  options?: ApiCallOptions,
): Promise<CreateTaskHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "post",
    pathTemplate: "/api/scheduling/tasks",
    query,
    body,
    contentType: "application/json",
    options,
  });
}

export type CreateTaskHttpResponse = {
  data: Task;
  headers: Headers;
  status: 201;
};

export type CreateTaskHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Creates a new task for the specified resource. The task is owned by the requesting user and is disabled by default until explicitly enabled. The `resourceId` is derived automatically from the task's state definitions and cannot be set directly in the request body.
 *
 * @param body an object with the body content
 * @throws CreateTaskWithoutQueryHttpError
 */
export async function createTaskWithoutQuery(
  body: Task,
  options?: ApiCallOptions,
): Promise<CreateTaskWithoutQueryHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "post",
    pathTemplate: "/api/scheduling/tasks",
    body,
    contentType: "application/json",
    options,
  });
}

export type CreateTaskWithoutQueryHttpResponse = {
  data: Task;
  headers: Headers;
  status: 201;
};

export type CreateTaskWithoutQueryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Creates a reload task for the app that runs when a Data Integration (Qlik Talend
 * Cloud) pipeline finishes updating or loading a dataset (QVD or data warehouse
 * storage) that the app uses.
 * This is a convenience wrapper over `POST /scheduling/tasks`; the full task
 * definition is generated server-side. Use `POST /scheduling/tasks` for advanced
 * configurations.
 *
 * Eligible datasets are resolved from the app's lineage when the task is created,
 * as the task owner; datasets the app starts using later are not picked up. Other
 * data sources, such as data files or QVDs in spaces, do not trigger the task.
 * An app can have only one such task, and it is shared with the app's legacy
 * reload-task auto-reload setting: changing that setting replaces or removes this
 * task's trigger. One pipeline run may start the task more than once.
 *
 * Errors:
 * - `400` `CHO-001`: the request body or the path `id` is invalid. This includes a
 *   `name` or `description` over its maximum length.
 * - `403` `CHO-003`: the app does not exist, is not accessible, or the caller
 *   lacks `app:reload` on it.
 * - `404`: not returned for a missing app, which gets `403` as above. Kept for
 *   compatibility.
 * - `409` `CHO-031`: the app already has a dataset-update task, enabled or not. Its ID
 *   is returned in `value.existingTaskId`.
 * - `422` `CHO-030`: the app does not use any dataset produced by a Data Integration
 *   pipeline, or the task owner cannot see all of them.
 *   `CHO-014`: the app already has the maximum number of tasks.
 *   `CHO-018`: the caller has reached the per-user task quota, when one is configured.
 * - `424` `CHO-013`: the task could not be stored. Nothing is created.
 *
 * @param id The unique identifier of the app to reload.
 * @param body an object with the body content
 * @throws ReloadTasksResourceOnDatasetUpdatedHttpError
 */
export async function reloadTasksResourceOnDatasetUpdated(
  id: string,
  body: ReloadOnDatasetUpdatedRequest,
  options?: ApiCallOptions,
): Promise<ReloadTasksResourceOnDatasetUpdatedHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "post",
    pathTemplate: "/api/scheduling/tasks/resources/{id}/actions/reload/on-dataset-updated",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options,
  });
}

export type ReloadTasksResourceOnDatasetUpdatedHttpResponse = {
  data: Task;
  headers: Headers;
  status: 201;
};

export type ReloadTasksResourceOnDatasetUpdatedHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 422 | 424 | 500 | 503;
};

/**
 * Creates a reload task for the app that runs when another task finishes with
 * the given status.
 * This is a convenience wrapper over `POST /scheduling/tasks`; the full task
 * definition is generated server-side. Use `POST /scheduling/tasks` for advanced
 * configurations.
 *
 * The upstream task (`onTaskId`) must belong to the caller's tenant, and the caller
 * needs read access to the upstream task's app. The server adds the upstream task's
 * `spaceId` and `appId` to the event correlations of the created task. If the
 * upstream task is deleted later, this task no longer runs.
 *
 * Errors:
 * - `400` `CHO-001`: the request body or the path `id` is invalid. This includes a
 *   `name` or `description` over its maximum length, and an `onTaskStatus` other
 *   than `succeeded`, `failed` or `any`.
 * - `400` `CHO-016`: `onTaskId` is not a UUID, or no such task exists in the caller's tenant.
 * - `403` `CHO-003`: the app does not exist, is not accessible, or the caller
 *   lacks `app:reload` on it.
 *   `CHO-015`: the caller cannot read the upstream task's app.
 * - `422` `CHO-014`: the app already has the maximum number of tasks.
 *   `CHO-018`: the caller has reached the per-user task quota, when one is configured.
 * - `424` `CHO-013`: the task could not be stored. Nothing is created.
 * - `404` `CHO-004`: the upstream task was deleted while the request was processed.
 *
 * @param id The unique identifier of the app to reload.
 * @param body an object with the body content
 * @throws ReloadTasksResourceOnTaskEventHttpError
 */
export async function reloadTasksResourceOnTaskEvent(
  id: string,
  body: ReloadOnTaskEventRequest,
  options?: ApiCallOptions,
): Promise<ReloadTasksResourceOnTaskEventHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "post",
    pathTemplate: "/api/scheduling/tasks/resources/{id}/actions/reload/on-task-event",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options,
  });
}

export type ReloadTasksResourceOnTaskEventHttpResponse = {
  data: Task;
  headers: Headers;
  status: 201;
};

export type ReloadTasksResourceOnTaskEventHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 422 | 424 | 500 | 503;
};

/**
 * Creates a reload task for the app that runs on a recurring time schedule.
 * This is a convenience wrapper over `POST /scheduling/tasks`; the full task
 * definition is generated server-side. Use `POST /scheduling/tasks` for advanced
 * configurations.
 *
 * The schedule is evaluated in `timezone`. The first run is the next occurrence of
 * `recurrence` after the task is created; creating a task never runs it immediately.
 * A task is created disabled unless `enabled` is `true`.
 *
 * Errors:
 * - `400` `CHO-001`: the request body or the path `id` is invalid. This includes a
 *   `name` or `description` over its maximum length.
 * - `400` `CHO-017`: the schedule was rejected: `recurrence` or `timezone` is
 *   invalid, `endDateTime` is not after `startDateTime`, or `endDateTime` is in the past.
 * - `403` `CHO-003`: the app does not exist, is not accessible, or the caller
 *   lacks `app:reload` on it.
 * - `404`: not returned for a missing app, which gets `403` as above. Kept for
 *   compatibility.
 * - `422` `CHO-014`: the app already has the maximum number of tasks.
 *   `CHO-018`: the caller has reached the per-user task quota, when one is configured.
 * - `424` `CHO-013`: the task could not be stored. Nothing is created.
 * - `503` `CHO-024`: the scheduler is temporarily unavailable. Nothing is created.
 *
 * @param id The unique identifier of the app to reload.
 * @param body an object with the body content
 * @throws ReloadTasksResourceOnTimeScheduleHttpError
 */
export async function reloadTasksResourceOnTimeSchedule(
  id: string,
  body: ReloadOnTimeScheduleRequest,
  options?: ApiCallOptions,
): Promise<ReloadTasksResourceOnTimeScheduleHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "post",
    pathTemplate: "/api/scheduling/tasks/resources/{id}/actions/reload/on-time-schedule",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options,
  });
}

export type ReloadTasksResourceOnTimeScheduleHttpResponse = {
  data: Task;
  headers: Headers;
  status: 201;
};

export type ReloadTasksResourceOnTimeScheduleHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 422 | 424 | 500 | 503;
};

/**
 * Retrieves a paginated list of task runs for a given resource, identified by `id`. Returns run history across all tasks associated with that resource, ordered by the most recent run by default.
 *
 * @param id The unique identifier of the resource to retrieve task runs for.
 * @param query an object with query parameters
 * @throws GetTaskResourceRunsHttpError
 */
export async function getTaskResourceRuns(
  id: string,
  query: {
    /** Maximum number of task runs to return per page. */
    limit?: number;
    /** Cursor token for fetching the next page of results. */
    page?: string;
    /** Field and direction to sort results by. Prefix the field name with `+` for ascending or `-` for descending order. Defaults to `-startedAt`. */
    sort?:
      | "+startedAt"
      | "-startedAt"
      | "+endedAt"
      | "-endedAt"
      | "+status"
      | "-status"
      | "+taskId"
      | "-taskId"
      | "+actionId"
      | "-actionId";
  },
  options?: ApiCallOptions,
): Promise<GetTaskResourceRunsHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "get",
    pathTemplate: "/api/scheduling/tasks/resources/{id}/runs",
    pathVariables: { id },
    query,
    options,
  });
}

export type GetTaskResourceRunsHttpResponse = {
  data: OrchRunList;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetTaskResourceRunsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetTaskResourceRunsHttpResponse>;
};

export type GetTaskResourceRunsHttpError = {
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
export async function deleteTask(id: string, options?: ApiCallOptions): Promise<DeleteTaskHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "delete",
    pathTemplate: "/api/scheduling/tasks/{id}",
    pathVariables: { id },
    options,
  });
}

export type DeleteTaskHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type DeleteTaskHttpError = {
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
export async function getTask(id: string, options?: ApiCallOptions): Promise<GetTaskHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "get",
    pathTemplate: "/api/scheduling/tasks/{id}",
    pathVariables: { id },
    options,
  });
}

export type GetTaskHttpResponse = {
  data: Task;
  headers: Headers;
  status: 200;
};

export type GetTaskHttpError = {
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
export async function patchTask(id: string, body: JSONPatch, options?: ApiCallOptions): Promise<PatchTaskHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "patch",
    pathTemplate: "/api/scheduling/tasks/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options,
  });
}

export type PatchTaskHttpResponse = PatchTask200HttpResponse | PatchTask204HttpResponse;

export type PatchTask200HttpResponse = {
  data: Task;
  headers: Headers;
  status: 200;
};

export type PatchTask204HttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type PatchTaskHttpError = {
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
export async function updateTask(id: string, body: Task, options?: ApiCallOptions): Promise<UpdateTaskHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "put",
    pathTemplate: "/api/scheduling/tasks/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options,
  });
}

export type UpdateTaskHttpResponse = {
  data: Task;
  headers: Headers;
  status: 200;
};

export type UpdateTaskHttpError = {
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
export async function startTask(
  id: string,
  query: {
    /** The origin of the trigger. Defaults to `manual`. For event-triggered tasks, this can be the name of the triggering task. */
    source?: string;
  },
  options?: ApiCallOptions,
): Promise<StartTaskHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "post",
    pathTemplate: "/api/scheduling/tasks/{id}/actions/start",
    pathVariables: { id },
    query,
    options,
  });
}

export type StartTaskHttpResponse = {
  data: {
    message?: string;
  };
  headers: Headers;
  status: 200;
};

export type StartTaskHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Retrieves the ancestor subgraph for a specific task, with the requested task as the root vertex. Traverses parent relationships breadth-first up to the depth specified by `level`. Use this to understand all upstream dependencies of a task.
 *
 * @param id The unique identifier of the task.
 * @param query an object with query parameters
 * @throws GetTaskGraphAncestorsHttpError
 */
export async function getTaskGraphAncestors(
  id: string,
  query: {
    /** Maximum ancestor depth to traverse breadth-first. */
    level?: number;
    /** When `true`, includes the full task document for each accessible vertex in the response. */
    withTask?: boolean;
  },
  options?: ApiCallOptions,
): Promise<GetTaskGraphAncestorsHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "get",
    pathTemplate: "/api/scheduling/tasks/{id}/graphs/ancestors",
    pathVariables: { id },
    query,
    options,
  });
}

export type GetTaskGraphAncestorsHttpResponse = {
  data: TaskGraph;
  headers: Headers;
  status: 200;
};

export type GetTaskGraphAncestorsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Retrieves a paginated list of tasks that are direct children of the specified task in the dependency graph. A child task is one that is triggered when the parent task completes successfully.
 *
 * @param id The unique identifier of the parent task.
 * @param query an object with query parameters
 * @throws GetTaskGraphChildrenHttpError
 */
export async function getTaskGraphChildren(
  id: string,
  query: {
    /** Advanced filter expression using RFC 7644 SCIM syntax. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for syntax details. All comparisons are case-insensitive. Supported fields: `name`, `enabled`, `resourceId`, `ownerId`, `spaceId`, `createdAt`, `updatedAt`, `updatedBy`, `lastStatus`, `lastTriggeredBy`, `lastStartedAt`, `lastEndedAt`, `lastExecutedAs`, and `triggerType`. */
    filter?: string;
    /** Maximum number of tasks to return per page. */
    limit?: number;
    /** Cursor token for fetching the next page of results. */
    page?: string;
    /** Field and direction to sort results by. Prefix the field name with
     * `+` for ascending or `-` for descending order. Defaults to `-updatedAt`. */
    sort?:
      | "+createdAt"
      | "-createdAt"
      | "+enabled"
      | "-enabled"
      | "+name"
      | "-name"
      | "+ownerId"
      | "-ownerId"
      | "+resourceId"
      | "-resourceId"
      | "+spaceId"
      | "-spaceId"
      | "+updatedAt"
      | "-updatedAt"
      | "+updatedBy"
      | "-updatedBy"
      | "+lastStatus"
      | "-lastStatus"
      | "+lastTriggeredBy"
      | "-lastTriggeredBy"
      | "+lastStartedAt"
      | "-lastStartedAt"
      | "+lastEndedAt"
      | "-lastEndedAt"
      | "+lastExecutedAs"
      | "-lastExecutedAs"
      | "+triggerType"
      | "-triggerType";
  },
  options?: ApiCallOptions,
): Promise<GetTaskGraphChildrenHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "get",
    pathTemplate: "/api/scheduling/tasks/{id}/graphs/children",
    pathVariables: { id },
    query,
    options,
  });
}

export type GetTaskGraphChildrenHttpResponse = {
  data: TaskList;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetTaskGraphChildrenHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetTaskGraphChildrenHttpResponse>;
};

export type GetTaskGraphChildrenHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Retrieves the descendant subgraph for a specific task, with the requested task as the root vertex. Traverses child relationships breadth-first down to the depth specified by `level`. Use this to identify all downstream tasks that will be triggered when this task completes.
 *
 * @param id The unique identifier of the task.
 * @param query an object with query parameters
 * @throws GetTaskGraphDescendantsHttpError
 */
export async function getTaskGraphDescendants(
  id: string,
  query: {
    /** Maximum descendant depth to traverse breadth-first. */
    level?: number;
    /** When `true`, includes the full task document for each accessible vertex in the response. */
    withTask?: boolean;
  },
  options?: ApiCallOptions,
): Promise<GetTaskGraphDescendantsHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "get",
    pathTemplate: "/api/scheduling/tasks/{id}/graphs/descendants",
    pathVariables: { id },
    query,
    options,
  });
}

export type GetTaskGraphDescendantsHttpResponse = {
  data: TaskGraph;
  headers: Headers;
  status: 200;
};

export type GetTaskGraphDescendantsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Retrieves a paginated list of tasks that are direct parents of the specified task in the dependency graph. A parent task is one whose completion triggers the current task.
 *
 * @param id The unique identifier of the child task.
 * @param query an object with query parameters
 * @throws GetTaskGraphParentsHttpError
 */
export async function getTaskGraphParents(
  id: string,
  query: {
    /** Advanced filter expression using RFC 7644 SCIM syntax. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for syntax details. All comparisons are case-insensitive. Supported fields: `name`, `enabled`, `resourceId`, `ownerId`, `spaceId`, `createdAt`, `updatedAt`, `updatedBy`, `lastStatus`, `lastTriggeredBy`, `lastStartedAt`, `lastEndedAt`, `lastExecutedAs`, and `triggerType`. */
    filter?: string;
    /** Maximum number of tasks to return per page. */
    limit?: number;
    /** Cursor token for fetching the next page of results. */
    page?: string;
    /** Field and direction to sort results by. Prefix the field name with
     * `+` for ascending or `-` for descending order. Defaults to `-updatedAt`. */
    sort?:
      | "+createdAt"
      | "-createdAt"
      | "+enabled"
      | "-enabled"
      | "+name"
      | "-name"
      | "+ownerId"
      | "-ownerId"
      | "+resourceId"
      | "-resourceId"
      | "+spaceId"
      | "-spaceId"
      | "+updatedAt"
      | "-updatedAt"
      | "+updatedBy"
      | "-updatedBy"
      | "+lastStatus"
      | "-lastStatus"
      | "+lastTriggeredBy"
      | "-lastTriggeredBy"
      | "+lastStartedAt"
      | "-lastStartedAt"
      | "+lastEndedAt"
      | "-lastEndedAt"
      | "+lastExecutedAs"
      | "-lastExecutedAs"
      | "+triggerType"
      | "-triggerType";
  },
  options?: ApiCallOptions,
): Promise<GetTaskGraphParentsHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "get",
    pathTemplate: "/api/scheduling/tasks/{id}/graphs/parents",
    pathVariables: { id },
    query,
    options,
  });
}

export type GetTaskGraphParentsHttpResponse = {
  data: TaskList;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetTaskGraphParentsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetTaskGraphParentsHttpResponse>;
};

export type GetTaskGraphParentsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Retrieves the combined ancestor-and-descendant subgraph for a specific task, with the requested task as the root vertex. Traverses both parent and child relationships breadth-first up to the depth specified by `level`. Use this to see the full dependency context for a task in one request.
 *
 * @param id The unique identifier of the task.
 * @param query an object with query parameters
 * @throws GetTaskSubgraphHttpError
 */
export async function getTaskSubgraph(
  id: string,
  query: {
    /** Maximum ancestor and descendant depth to traverse breadth-first. */
    level?: number;
    /** When `true`, includes the full task document for each accessible vertex in the response. */
    withTask?: boolean;
  },
  options?: ApiCallOptions,
): Promise<GetTaskSubgraphHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "get",
    pathTemplate: "/api/scheduling/tasks/{id}/graphs/subgraph",
    pathVariables: { id },
    query,
    options,
  });
}

export type GetTaskSubgraphHttpResponse = {
  data: TaskGraph;
  headers: Headers;
  status: 200;
};

export type GetTaskSubgraphHttpError = {
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
export async function getTaskRuns(
  id: string,
  query: {
    /** Maximum number of task runs to return per page. */
    limit?: number;
    /** Cursor token for fetching the next page of results. */
    page?: string;
    /** Field and direction to sort results by. Prefix the field name with `+` for ascending or `-` for descending order. Defaults to `-startedAt`. */
    sort?:
      | "+startedAt"
      | "-startedAt"
      | "+endedAt"
      | "-endedAt"
      | "+status"
      | "-status"
      | "+taskId"
      | "-taskId"
      | "+actionId"
      | "-actionId";
  },
  options?: ApiCallOptions,
): Promise<GetTaskRunsHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "get",
    pathTemplate: "/api/scheduling/tasks/{id}/runs",
    pathVariables: { id },
    query,
    options,
  });
}

export type GetTaskRunsHttpResponse = {
  data: OrchRunList;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetTaskRunsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetTaskRunsHttpResponse>;
};

export type GetTaskRunsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Retrieves the most recent execution run for the specified task. Returns a 404 response if the task has never been run. Use this operation to quickly check whether the last run succeeded or failed without paginating through the full run history.
 *
 * @param id The unique identifier of the task.
 * @throws GetTaskLastRunHttpError
 */
export async function getTaskLastRun(id: string, options?: ApiCallOptions): Promise<GetTaskLastRunHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "get",
    pathTemplate: "/api/scheduling/tasks/{id}/runs/last",
    pathVariables: { id },
    options,
  });
}

export type GetTaskLastRunHttpResponse = {
  data: OrchRun;
  headers: Headers;
  status: 200;
};

export type GetTaskLastRunHttpError = {
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
export async function getTaskRunLog(
  id: string,
  runId: string,
  options?: ApiCallOptions,
): Promise<GetTaskRunLogHttpResponse> {
  return invokeFetch("scheduling/tasks", {
    method: "get",
    pathTemplate: "/api/scheduling/tasks/{id}/runs/{runId}/log",
    pathVariables: { id, runId },
    options,
  });
}

export type GetTaskRunLogHttpResponse = {
  data: {
    /** Log content in plain text format. */
    logContent?: string;
  };
  headers: Headers;
  status: 200;
};

export type GetTaskRunLogHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Clears the cache for scheduling/tasks api requests.
 */
export function clearCache() {
  return clearApiCache("scheduling/tasks");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type TasksAPI = {
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
   * Creates a new task for the specified resource. The task is owned by the requesting user and is disabled by default until explicitly enabled. The `resourceId` is derived automatically from the task's state definitions and cannot be set directly in the request body.
   *
   * @param body an object with the body content
   * @throws CreateTaskWithoutQueryHttpError
   */
  createTaskWithoutQuery: typeof createTaskWithoutQuery;
  /**
   * Creates a reload task for the app that runs when a Data Integration (Qlik Talend
   * Cloud) pipeline finishes updating or loading a dataset (QVD or data warehouse
   * storage) that the app uses.
   * This is a convenience wrapper over `POST /scheduling/tasks`; the full task
   * definition is generated server-side. Use `POST /scheduling/tasks` for advanced
   * configurations.
   *
   * Eligible datasets are resolved from the app's lineage when the task is created,
   * as the task owner; datasets the app starts using later are not picked up. Other
   * data sources, such as data files or QVDs in spaces, do not trigger the task.
   * An app can have only one such task, and it is shared with the app's legacy
   * reload-task auto-reload setting: changing that setting replaces or removes this
   * task's trigger. One pipeline run may start the task more than once.
   *
   * Errors:
   * - `400` `CHO-001`: the request body or the path `id` is invalid. This includes a
   *   `name` or `description` over its maximum length.
   * - `403` `CHO-003`: the app does not exist, is not accessible, or the caller
   *   lacks `app:reload` on it.
   * - `404`: not returned for a missing app, which gets `403` as above. Kept for
   *   compatibility.
   * - `409` `CHO-031`: the app already has a dataset-update task, enabled or not. Its ID
   *   is returned in `value.existingTaskId`.
   * - `422` `CHO-030`: the app does not use any dataset produced by a Data Integration
   *   pipeline, or the task owner cannot see all of them.
   *   `CHO-014`: the app already has the maximum number of tasks.
   *   `CHO-018`: the caller has reached the per-user task quota, when one is configured.
   * - `424` `CHO-013`: the task could not be stored. Nothing is created.
   *
   * @param id The unique identifier of the app to reload.
   * @param body an object with the body content
   * @throws ReloadTasksResourceOnDatasetUpdatedHttpError
   */
  reloadTasksResourceOnDatasetUpdated: typeof reloadTasksResourceOnDatasetUpdated;
  /**
   * Creates a reload task for the app that runs when another task finishes with
   * the given status.
   * This is a convenience wrapper over `POST /scheduling/tasks`; the full task
   * definition is generated server-side. Use `POST /scheduling/tasks` for advanced
   * configurations.
   *
   * The upstream task (`onTaskId`) must belong to the caller's tenant, and the caller
   * needs read access to the upstream task's app. The server adds the upstream task's
   * `spaceId` and `appId` to the event correlations of the created task. If the
   * upstream task is deleted later, this task no longer runs.
   *
   * Errors:
   * - `400` `CHO-001`: the request body or the path `id` is invalid. This includes a
   *   `name` or `description` over its maximum length, and an `onTaskStatus` other
   *   than `succeeded`, `failed` or `any`.
   * - `400` `CHO-016`: `onTaskId` is not a UUID, or no such task exists in the caller's tenant.
   * - `403` `CHO-003`: the app does not exist, is not accessible, or the caller
   *   lacks `app:reload` on it.
   *   `CHO-015`: the caller cannot read the upstream task's app.
   * - `422` `CHO-014`: the app already has the maximum number of tasks.
   *   `CHO-018`: the caller has reached the per-user task quota, when one is configured.
   * - `424` `CHO-013`: the task could not be stored. Nothing is created.
   * - `404` `CHO-004`: the upstream task was deleted while the request was processed.
   *
   * @param id The unique identifier of the app to reload.
   * @param body an object with the body content
   * @throws ReloadTasksResourceOnTaskEventHttpError
   */
  reloadTasksResourceOnTaskEvent: typeof reloadTasksResourceOnTaskEvent;
  /**
   * Creates a reload task for the app that runs on a recurring time schedule.
   * This is a convenience wrapper over `POST /scheduling/tasks`; the full task
   * definition is generated server-side. Use `POST /scheduling/tasks` for advanced
   * configurations.
   *
   * The schedule is evaluated in `timezone`. The first run is the next occurrence of
   * `recurrence` after the task is created; creating a task never runs it immediately.
   * A task is created disabled unless `enabled` is `true`.
   *
   * Errors:
   * - `400` `CHO-001`: the request body or the path `id` is invalid. This includes a
   *   `name` or `description` over its maximum length.
   * - `400` `CHO-017`: the schedule was rejected: `recurrence` or `timezone` is
   *   invalid, `endDateTime` is not after `startDateTime`, or `endDateTime` is in the past.
   * - `403` `CHO-003`: the app does not exist, is not accessible, or the caller
   *   lacks `app:reload` on it.
   * - `404`: not returned for a missing app, which gets `403` as above. Kept for
   *   compatibility.
   * - `422` `CHO-014`: the app already has the maximum number of tasks.
   *   `CHO-018`: the caller has reached the per-user task quota, when one is configured.
   * - `424` `CHO-013`: the task could not be stored. Nothing is created.
   * - `503` `CHO-024`: the scheduler is temporarily unavailable. Nothing is created.
   *
   * @param id The unique identifier of the app to reload.
   * @param body an object with the body content
   * @throws ReloadTasksResourceOnTimeScheduleHttpError
   */
  reloadTasksResourceOnTimeSchedule: typeof reloadTasksResourceOnTimeSchedule;
  /**
   * Retrieves a paginated list of task runs for a given resource, identified by `id`. Returns run history across all tasks associated with that resource, ordered by the most recent run by default.
   *
   * @param id The unique identifier of the resource to retrieve task runs for.
   * @param query an object with query parameters
   * @throws GetTaskResourceRunsHttpError
   */
  getTaskResourceRuns: typeof getTaskResourceRuns;
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
   * @throws GetTaskGraphAncestorsHttpError
   */
  getTaskGraphAncestors: typeof getTaskGraphAncestors;
  /**
   * Retrieves a paginated list of tasks that are direct children of the specified task in the dependency graph. A child task is one that is triggered when the parent task completes successfully.
   *
   * @param id The unique identifier of the parent task.
   * @param query an object with query parameters
   * @throws GetTaskGraphChildrenHttpError
   */
  getTaskGraphChildren: typeof getTaskGraphChildren;
  /**
   * Retrieves the descendant subgraph for a specific task, with the requested task as the root vertex. Traverses child relationships breadth-first down to the depth specified by `level`. Use this to identify all downstream tasks that will be triggered when this task completes.
   *
   * @param id The unique identifier of the task.
   * @param query an object with query parameters
   * @throws GetTaskGraphDescendantsHttpError
   */
  getTaskGraphDescendants: typeof getTaskGraphDescendants;
  /**
   * Retrieves a paginated list of tasks that are direct parents of the specified task in the dependency graph. A parent task is one whose completion triggers the current task.
   *
   * @param id The unique identifier of the child task.
   * @param query an object with query parameters
   * @throws GetTaskGraphParentsHttpError
   */
  getTaskGraphParents: typeof getTaskGraphParents;
  /**
   * Retrieves the combined ancestor-and-descendant subgraph for a specific task, with the requested task as the root vertex. Traverses both parent and child relationships breadth-first up to the depth specified by `level`. Use this to see the full dependency context for a task in one request.
   *
   * @param id The unique identifier of the task.
   * @param query an object with query parameters
   * @throws GetTaskSubgraphHttpError
   */
  getTaskSubgraph: typeof getTaskSubgraph;
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
   * @throws GetTaskLastRunHttpError
   */
  getTaskLastRun: typeof getTaskLastRun;
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
const tasksExport: TasksAPI = {
  getTasks,
  createTask,
  createTaskWithoutQuery,
  reloadTasksResourceOnDatasetUpdated,
  reloadTasksResourceOnTaskEvent,
  reloadTasksResourceOnTimeSchedule,
  getTaskResourceRuns,
  deleteTask,
  getTask,
  patchTask,
  updateTask,
  startTask,
  getTaskGraphAncestors,
  getTaskGraphChildren,
  getTaskGraphDescendants,
  getTaskGraphParents,
  getTaskSubgraph,
  getTaskRuns,
  getTaskLastRun,
  getTaskRunLog,
  clearCache,
};
export default tasksExport;
