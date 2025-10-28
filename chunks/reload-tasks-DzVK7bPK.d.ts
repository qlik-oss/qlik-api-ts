import { y as ApiCallOptions } from "./auth-types-BK8AvfyD.js";

//#region src/public/rest/reload-tasks.d.ts
type Error = {
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
type Errors = {
  errors?: Error[];
  traceId?: string;
};
/**
 * @example
 * {
 *   href: "http://example.com"
 * }
 */
type Href = {
  href: string;
};
type PaginationLinks = SelfLink & {
  next?: Href;
  prev?: Href;
};
type PostTaskBody = TaskBase & {
  /** @deprecated
   * Type of task being created - only contains the "scheduled_reload" value. Type value is not used for creating a schedule reload. It has been deprecated since 2022-04-05. */
  type?: "scheduled_reload";
};
type PutTaskBody = TaskBase & {
  /** Toggle for enabling and disabling the reload task */
  state?: "Enabled" | "Disabled" | "Completed";
};
type SelfLink = {
  self: Href;
};
type Task = TaskBase & {
  /** The reason why the task was disabled. */
  disabledCode?: "MANUALLY" | "CONSECUTIVE-FAILURES" | "OWNER-DELETED" | "OWNER-DISABLED";
  /** @deprecated
   * The fortress ID of the application */
  fortressId?: string;
  /** The ID of the task. */
  id: string;
  /** The last time the task executed. */
  lastExecutionTime?: string;
  links: SelfLink;
  /** @deprecated
   * The reason why the task was disabled. */
  log?: string;
  /** A flag indicating whether the task has been migrated to the new scheduling service. */
  migrated?: boolean;
  /** The next time the task will execute. */
  nextExecutionTime?: string;
  /** The space ID of the application */
  spaceId?: string;
  /** Toggle for enabling and disabling the reload task */
  state: "Enabled" | "Disabled" | "Completed";
  /** The ID of the tenant who owns the task. */
  tenantId: string;
  /** The ID of the user who owns the task. */
  userId: string;
};
type TaskBase = {
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
type Tasks = {
  data: Task[];
  links: PaginationLinks;
};
/**
 * Finds and returns the tasks that the user has access to.
 *
 * @param query an object with query parameters
 * @throws GetReloadTasksHttpError
 */
declare function getReloadTasks(query: {
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
type GetReloadTasksHttpResponse = {
  data: Tasks;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetReloadTasksHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetReloadTasksHttpResponse>;
};
type GetReloadTasksHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429 | 500 | 503;
};
/**
 * Creates a task for a specified app.
 *
 * @param body an object with the body content
 * @throws CreateReloadTaskHttpError
 */
declare function createReloadTask(body: PostTaskBody, options?: ApiCallOptions): Promise<CreateReloadTaskHttpResponse>;
type CreateReloadTaskHttpResponse = {
  data: Task;
  headers: Headers;
  status: 201;
};
type CreateReloadTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Deletes a task
 *
 * @param taskId The unique identifier of the task.
 * @throws DeleteReloadTaskHttpError
 */
declare function deleteReloadTask(taskId: string, options?: ApiCallOptions): Promise<DeleteReloadTaskHttpResponse>;
type DeleteReloadTaskHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteReloadTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500;
};
/**
 * Finds and returns a task.
 *
 * @param taskId The unique identifier of the task.
 * @throws GetReloadTaskHttpError
 */
declare function getReloadTask(taskId: string, options?: ApiCallOptions): Promise<GetReloadTaskHttpResponse>;
type GetReloadTaskHttpResponse = {
  data: Task;
  headers: Headers;
  status: 200;
};
type GetReloadTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429 | 500 | 503;
};
/**
 * Updates an existing task
 *
 * @param taskId The unique identifier of the task.
 * @param body an object with the body content
 * @throws UpdateReloadTaskHttpError
 */
declare function updateReloadTask(taskId: string, body: PutTaskBody, options?: ApiCallOptions): Promise<UpdateReloadTaskHttpResponse>;
type UpdateReloadTaskHttpResponse = {
  data: Task;
  headers: Headers;
  status: 200;
};
type UpdateReloadTaskHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Clears the cache for reload-tasks api requests.
 */
declare function clearCache(): void;
type ReloadTasksAPI = {
  /**
   * Finds and returns the tasks that the user has access to.
   *
   * @param query an object with query parameters
   * @throws GetReloadTasksHttpError
   */
  getReloadTasks: typeof getReloadTasks;
  /**
   * Creates a task for a specified app.
   *
   * @param body an object with the body content
   * @throws CreateReloadTaskHttpError
   */
  createReloadTask: typeof createReloadTask;
  /**
   * Deletes a task
   *
   * @param taskId The unique identifier of the task.
   * @throws DeleteReloadTaskHttpError
   */
  deleteReloadTask: typeof deleteReloadTask;
  /**
   * Finds and returns a task.
   *
   * @param taskId The unique identifier of the task.
   * @throws GetReloadTaskHttpError
   */
  getReloadTask: typeof getReloadTask;
  /**
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
//#endregion
export { createReloadTask as C, reloadTasksExport as D, getReloadTasks as E, updateReloadTask as O, clearCache as S, getReloadTask as T, Task as _, Error as a, UpdateReloadTaskHttpError as b, GetReloadTaskHttpResponse as c, Href as d, PaginationLinks as f, SelfLink as g, ReloadTasksAPI as h, DeleteReloadTaskHttpResponse as i, GetReloadTasksHttpError as l, PutTaskBody as m, CreateReloadTaskHttpResponse as n, Errors as o, PostTaskBody as p, DeleteReloadTaskHttpError as r, GetReloadTaskHttpError as s, CreateReloadTaskHttpError as t, GetReloadTasksHttpResponse as u, TaskBase as v, deleteReloadTask as w, UpdateReloadTaskHttpResponse as x, Tasks as y };