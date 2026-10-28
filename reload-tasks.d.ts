import { D as PageCallOptions, x as ApiCallOptions } from "./chunks/auth-types-YxQFXW5F.js";
import "./chunks/invoke-fetch-BGcRWadc.js";
export type Error = {
  code: string;
  detail?: string;
  title: string;
};
/**
 * @example
 * {
 *   errors: [
 *     {
 *       code: "TASKS-123",
 *       title: "short error message"
 *     }
 *   ],
 *   traceId: "7975401f3954aa47"
 * }
 */
export type Errors = {
  errors?: Error[];
  traceId?: string;
};
/**
 * @example
 * {
 *   href: "http://example.com"
 * }
 */
export type Href = {
  /** href link to the resource. */
  readonly href: string;
};
export type PaginationLinks = SelfLink & {
  next?: Href;
  prev?: Href;
};
export type PostTaskBody = TaskBase & {
  /** @deprecated
   * Type of task being created - only contains the "scheduled_reload" value. Type value is not used for creating a schedule reload. It has been deprecated since 2022-04-05. */
  type?: "scheduled_reload";
};
export type PutTaskBody = Task;
export type SelfLink = {
  self: Href;
};
export type Task = TaskBase & {
  /** The ID of the app. */
  readonly appId: string;
  /** The reason why the task was disabled. */
  readonly disabledCode?: "MANUALLY" | "CONSECUTIVE-FAILURES" | "OWNER-DELETED" | "OWNER-DISABLED";
  /** @deprecated
   * The fortress ID of the application */
  readonly fortressId?: string;
  /** The ID of the task. */
  readonly id: string;
  /** The ID of the scheduler job associated with the task. */
  readonly jobId: string;
  /** The last time the task executed. */
  readonly lastExecutionTime?: string;
  links: SelfLink;
  /** @deprecated
   * The reason why the task was disabled. */
  readonly log?: string;
  /** A flag indicating whether the task has been migrated to the new scheduling service. */
  readonly migrated?: boolean;
  /** The next time the task will execute. */
  readonly nextExecutionTime?: string;
  /** The space ID of the application */
  readonly spaceId?: string;
  /** Toggle for enabling and disabling the reload task */
  state: "Enabled" | "Disabled" | "Completed";
  /** The ID of the tenant who owns the task. */
  readonly tenantId: string;
  /** The ID of the user who owns the task. */
  readonly userId: string;
};
export type TaskBase = {
  /** The ID of the app. */
  appId?: string;
  /** A flag that indicates whether a reload is triggered when data of the app is changed */
  autoReload?: boolean;
  /** A flag that indicates whether it is a partial reload or not for the auto reload */
  autoReloadPartial?: boolean;
  /** The time that the task will stop recurring. If the time zone is missing, this is a combined date-time value expressing a time with a fixed UTC offset (formatted according to RFC3339). If a time zone is given, the zone offset must be omitted. */
  endDateTime?: string;
  /** The task is partial reload or not */
  partial?: boolean;
  /** List of RECUR lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events */
  recurrence?: string[];
  /** The time that the task execution start recurring. If the time zone is missing, this is a combined date-time value expressing a time with a fixed UTC offset (formatted according to RFC3339). If a time zone is given, the zone offset must be omitted. Field startDateTime should not be before the Unix epoch 00:00:00 UTC on 1 January 1970. Note that the empty string value with the empty recurrence array indicates the scheduled job is not set. */
  startDateTime?: string;
  /** The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. Europe/Zurich.) This field specifies the time zone in which the event start/end are expanded. If missing the start/end fields must specify a UTC offset in RFC3339 format. */
  timeZone?: string;
};
export type Tasks = {
  data: Task[];
  links: PaginationLinks;
};
/**
 * @deprecated
 *
 * Finds and returns the tasks that the user has access to.
 *
 * @param query an object with query parameters
 * @throws GetReloadTasksHttpError
 */
export declare function getReloadTasks(query: {
  /** The case sensitive string used to search for a task by app ID. */
  appId?: string;
  /** The maximum number of resources to return for a request. The limit must be an integer between 1 and 100 (inclusive). */
  limit?: number;
  /** The cursor to the next page of resources. Provide either the next or prev cursor, but not both. */
  next?: string;
  /** The boolean value used to search for a task is partial or not */
  partial?: boolean;
  /** The cursor to the previous page of resources. Provide either the next or prev cursor, but not both. */
  prev?: string;
}, options?: ApiCallOptions): Promise<GetReloadTasksHttpResponse>;
export type GetReloadTasksHttpResponse = {
  data: Tasks;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetReloadTasksHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetReloadTasksHttpResponse>;
};
export type GetReloadTasksHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429 | 500 | 503;
};
/**
 * @deprecated
 *
 * Creates a task for a specified app.
 *
 * @param body an object with the body content
 * @throws CreateReloadTaskHttpError
 */
export declare function createReloadTask(body: PostTaskBody, options?: ApiCallOptions): Promise<CreateReloadTaskHttpResponse>;
export type CreateReloadTaskHttpResponse = {
  data: Task;
  headers: Headers;
  status: 201;
};
export type CreateReloadTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 410 | 500 | 503;
};
/**
 * @deprecated
 *
 * Deletes a task
 *
 * @param taskId The unique identifier of the task.
 * @throws DeleteReloadTaskHttpError
 */
export declare function deleteReloadTask(taskId: string, options?: ApiCallOptions): Promise<DeleteReloadTaskHttpResponse>;
export type DeleteReloadTaskHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteReloadTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 410 | 500;
};
/**
 * @deprecated
 *
 * Finds and returns a task.
 *
 * @param taskId The unique identifier of the task.
 * @throws GetReloadTaskHttpError
 */
export declare function getReloadTask(taskId: string, options?: ApiCallOptions): Promise<GetReloadTaskHttpResponse>;
export type GetReloadTaskHttpResponse = {
  data: Task;
  headers: Headers;
  status: 200;
};
export type GetReloadTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429 | 500 | 503;
};
/**
 * @deprecated
 *
 * Updates an existing task
 *
 * @param taskId The unique identifier of the task.
 * @param body an object with the body content
 * @throws UpdateReloadTaskHttpError
 */
export declare function updateReloadTask(taskId: string, body: PutTaskBody, options?: ApiCallOptions): Promise<UpdateReloadTaskHttpResponse>;
export type UpdateReloadTaskHttpResponse = {
  data: Task;
  headers: Headers;
  status: 200;
};
export type UpdateReloadTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 410 | 500 | 503;
};
/**
 * Clears the cache for reload-tasks api requests.
 */
export declare function clearCache(): void;
export type ReloadTasksAPI = {
  /**
   * @deprecated
   *
   * Finds and returns the tasks that the user has access to.
   *
   * @param query an object with query parameters
   * @throws GetReloadTasksHttpError
   */
  getReloadTasks: typeof getReloadTasks;
  /**
   * @deprecated
   *
   * Creates a task for a specified app.
   *
   * @param body an object with the body content
   * @throws CreateReloadTaskHttpError
   */
  createReloadTask: typeof createReloadTask;
  /**
   * @deprecated
   *
   * Deletes a task
   *
   * @param taskId The unique identifier of the task.
   * @throws DeleteReloadTaskHttpError
   */
  deleteReloadTask: typeof deleteReloadTask;
  /**
   * @deprecated
   *
   * Finds and returns a task.
   *
   * @param taskId The unique identifier of the task.
   * @throws GetReloadTaskHttpError
   */
  getReloadTask: typeof getReloadTask;
  /**
   * @deprecated
   *
   * Updates an existing task
   *
   * @param taskId The unique identifier of the task.
   * @param body an object with the body content
   * @throws UpdateReloadTaskHttpError
   */
  updateReloadTask: typeof updateReloadTask;
  /**
   * Clears the cache for reload-tasks api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the reload-tasks api
 */
declare const reloadTasksExport: ReloadTasksAPI;
export { reloadTasksExport as default };