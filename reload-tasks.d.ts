import { A as ApiCallOptions } from './global.types-TzVhFPid.js';
import './auth-types-nnUcWhuU.js';

type Error = {
    code: string;
    detail?: string;
    title: string;
};
type Errors = {
    errors?: Error[];
    traceId?: string;
};
type Href = {
    href: string;
};
type PaginationLinks = SelfLink & {
    next?: Href;
    prev?: Href;
};
type PostTaskBody = TaskBase & {
    /** Type of task being created - only contains the "scheduled_reload" value. Type value is not used for creating a schedule reload. It has been deprecated since 2022-04-05. */
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
    /** The fortress ID of the application */
    fortressId?: string;
    /** The ID of the task. */
    id: string;
    /** The last time the task executed. */
    lastExecutionTime?: string;
    links: SelfLink;
    /** The reason why the task was disabled. */
    log?: string;
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
 * Find and return the tasks that the user can access.
 *
 * @param query an object with query parameters
 * @throws GetReloadTasksHttpError
 */
declare const getReloadTasks: (query: {
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
}, options?: ApiCallOptions) => Promise<GetReloadTasksHttpResponse>;
type GetReloadTasksHttpResponse = {
    data: Tasks;
    headers: Headers;
    status: number;
};
type GetReloadTasksHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Create a task for a specified app.
 *
 * @param body an object with the body content
 * @throws CreateReloadTaskHttpError
 */
declare const createReloadTask: (body: PostTaskBody, options?: ApiCallOptions) => Promise<CreateReloadTaskHttpResponse>;
type CreateReloadTaskHttpResponse = {
    data: Task;
    headers: Headers;
    status: number;
};
type CreateReloadTaskHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Delete a task.
 *
 * @param taskId The unique identifier of the task.
 * @throws DeleteReloadTaskHttpError
 */
declare const deleteReloadTask: (taskId: string, options?: ApiCallOptions) => Promise<DeleteReloadTaskHttpResponse>;
type DeleteReloadTaskHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteReloadTaskHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Find and return a task.
 *
 * @param taskId The unique identifier of the task.
 * @throws GetReloadTaskHttpError
 */
declare const getReloadTask: (taskId: string, options?: ApiCallOptions) => Promise<GetReloadTaskHttpResponse>;
type GetReloadTaskHttpResponse = {
    data: Task;
    headers: Headers;
    status: number;
};
type GetReloadTaskHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Update an existing task.
 *
 * @param taskId The unique identifier of the task.
 * @param body an object with the body content
 * @throws UpdateReloadTaskHttpError
 */
declare const updateReloadTask: (taskId: string, body: PutTaskBody, options?: ApiCallOptions) => Promise<UpdateReloadTaskHttpResponse>;
type UpdateReloadTaskHttpResponse = {
    data: Task;
    headers: Headers;
    status: number;
};
type UpdateReloadTaskHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for reload-tasks api requests.
 */
declare function clearCache(): void;
interface ReloadTasksAPI {
    /**
     * Find and return the tasks that the user can access.
     *
     * @param query an object with query parameters
     * @throws GetReloadTasksHttpError
     */
    getReloadTasks: typeof getReloadTasks;
    /**
     * Create a task for a specified app.
     *
     * @param body an object with the body content
     * @throws CreateReloadTaskHttpError
     */
    createReloadTask: typeof createReloadTask;
    /**
     * Delete a task.
     *
     * @param taskId The unique identifier of the task.
     * @throws DeleteReloadTaskHttpError
     */
    deleteReloadTask: typeof deleteReloadTask;
    /**
     * Find and return a task.
     *
     * @param taskId The unique identifier of the task.
     * @throws GetReloadTaskHttpError
     */
    getReloadTask: typeof getReloadTask;
    /**
     * Update an existing task.
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
}
/**
 * Functions for the reload-tasks api
 */
declare const reloadTasksExport: ReloadTasksAPI;

export { type CreateReloadTaskHttpError, type CreateReloadTaskHttpResponse, type DeleteReloadTaskHttpError, type DeleteReloadTaskHttpResponse, type Error, type Errors, type GetReloadTaskHttpError, type GetReloadTaskHttpResponse, type GetReloadTasksHttpError, type GetReloadTasksHttpResponse, type Href, type PaginationLinks, type PostTaskBody, type PutTaskBody, type ReloadTasksAPI, type SelfLink, type Task, type TaskBase, type Tasks, type UpdateReloadTaskHttpError, type UpdateReloadTaskHttpResponse, clearCache, createReloadTask, reloadTasksExport as default, deleteReloadTask, getReloadTask, getReloadTasks, updateReloadTask };
