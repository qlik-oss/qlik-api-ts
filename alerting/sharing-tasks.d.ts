import { x as ApiCallOptions } from "../chunks/auth-types-PqpGAZ9_.js";
import "../chunks/invoke-fetch-CL7DhyRH.js";
declare namespace sharing_tasks_d_exports {
  export { Error, ErrorMeta, Errors, GetSharingTaskTaskExecutionHttpError, GetSharingTaskTaskExecutionHttpResponse, GetSharingTaskTaskExecutionsHttpError, GetSharingTaskTaskExecutionsHttpResponse, ListLinks, Page, Self, SharingTaskExecution, SharingTaskExecutionError, SharingTasksAPI, StandardListResponseProps, TaskExecutionsGetResponse, TemplateMetadata, clearCache, sharingTasksExport as default, getSharingTaskTaskExecution, getSharingTaskTaskExecutions };
}
export type Error = {
  /** Error code specific to sharing service. */
  readonly code?: string;
  /** Error cause. */
  readonly detail?: string;
  meta?: ErrorMeta;
  /** Error title. */
  readonly title?: string;
};
export type ErrorMeta = {
  /** HTTP error code. */
  readonly httpCode?: number;
};
/**
 * @example
 * {
 *   errors: [
 *     {
 *       code: "HTTP-123",
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
export type ListLinks = {
  next?: Page;
  prev?: Page;
  /** Object with Href to a particular element or set of elements */
  self?: Self;
};
export type Page = {
  /** URL to particular set of elements */
  href?: string;
  /** Page unique token */
  token?: string;
  /** Page type, can be next or prev */
  type?: "prev" | "next";
};
/**
 * Object with Href to a particular element or set of elements
 */
export type Self = {
  href?: string;
};
export type SharingTaskExecution = {
  /** The number of cancelled reports. */
  cancelledReportCount?: number;
  /** The creator of the task, represented by user ID. */
  createdBy?: string;
  /** The errors that occurred during the task execution. */
  errors?: SharingTaskExecutionError[];
  /** The event ID. */
  eventId?: string;
  /** The event timestamp. */
  eventTimestamp?: string;
  /** The number of failed reports. */
  failedReportCount?: number;
  /** The finish timestamp. */
  finishedAt?: string;
  /** The task execution ID. */
  id?: string;
  /** The number of recipients. */
  recipientsCount?: number;
  /** The 'FREQ' component of the RRULE at execution time, empty when triggered by a non-scheduled execution. */
  recurrenceFrequency?: "SECONDLY" | "MINUTELY" | "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
  /** The number of reports on SharePoint. */
  reportOnSharePointCount?: number;
  /** The sharing task ID. */
  sharingTaskId?: string;
  /** The start timestamp. */
  startedAt?: string;
  /** The status of the task execution. */
  status?: string;
  /** The number of successful reports. */
  successReportCount?: number;
  /** A map of template metadata, where the key is the task template ID. */
  templateMetadata?: Record<string, TemplateMetadata>;
  /** The tenant ID. */
  tenantId?: string;
  /** A list of transport channels. */
  transportChannels?: ("email" | "sharepoint")[];
  /** The type of trigger. */
  triggerType?: "manual" | "onSchedule" | "onReload";
  /** The update timestamp. */
  updatedAt?: string;
};
export type SharingTaskExecutionError = {
  /** The error code. */
  code?: string;
  /** The details about the error. */
  detail?: string;
  /** The title of the error. */
  title?: string;
};
/**
 * properties that should be added to every list response
 */
export type StandardListResponseProps = {
  /** count of entries on the currently shown page */
  currentPageCount: number;
  /** total count of entries in the collection as a whole */
  totalCount: number;
};
export type TaskExecutionsGetResponse = StandardListResponseProps & {
  /** The list of task executions. */
  data?: SharingTaskExecution[];
  links?: ListLinks;
};
export type TemplateMetadata = {
  /** The fields used for report cycles. */
  cycleFields?: string[];
  /** The file name to use when generating the report. */
  fileName?: string;
  /** The name of the template. */
  name?: string;
  /** The output format of the template */
  outputFormat?: string;
  /** The template type. */
  type?: string;
};
/**
 * Returns the execution history of a sharing task. Executions that are in progress are not included.
 *
 * @param taskId The sharing task identifier.
 * @param query an object with query parameters
 * @throws GetSharingTaskTaskExecutionsHttpError
 */
export declare function getSharingTaskTaskExecutions(taskId: string, query: {
  /** The filter for finding entries. */
  filter?: string;
  /** The maximum number of entries to return. */
  limit?: number;
  /** The number of elements to skip for pagination. */
  offset?: number;
  /** The cursor to the page of data. */
  page?: string;
  /** Sort the returned result set by the specified field */
  sort?: ("status" | "-status" | "+status" | "startedAt" | "-startedAt" | "+startedAt")[];
}, options?: ApiCallOptions): Promise<GetSharingTaskTaskExecutionsHttpResponse>;
export type GetSharingTaskTaskExecutionsHttpResponse = {
  data: TaskExecutionsGetResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetSharingTaskTaskExecutionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetSharingTaskTaskExecutionsHttpResponse>;
};
export type GetSharingTaskTaskExecutionsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Get a sharing task execution by ID
 *
 * @param taskId The sharing task identifier.
 * @param taskExecutionId The task execution identifier.
 * @throws GetSharingTaskTaskExecutionHttpError
 */
export declare function getSharingTaskTaskExecution(taskId: string, taskExecutionId: string, options?: ApiCallOptions): Promise<GetSharingTaskTaskExecutionHttpResponse>;
export type GetSharingTaskTaskExecutionHttpResponse = {
  data: SharingTaskExecution;
  headers: Headers;
  status: 200;
};
export type GetSharingTaskTaskExecutionHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Clears the cache for alerting/sharing-tasks api requests.
 */
export declare function clearCache(): void;
export type SharingTasksAPI = {
  /**
   * Returns the execution history of a sharing task. Executions that are in progress are not included.
   *
   * @param taskId The sharing task identifier.
   * @param query an object with query parameters
   * @throws GetSharingTaskTaskExecutionsHttpError
   */
  getSharingTaskTaskExecutions: typeof getSharingTaskTaskExecutions;
  /**
   * Get a sharing task execution by ID
   *
   * @param taskId The sharing task identifier.
   * @param taskExecutionId The task execution identifier.
   * @throws GetSharingTaskTaskExecutionHttpError
   */
  getSharingTaskTaskExecution: typeof getSharingTaskTaskExecution;
  /**
   * Clears the cache for sharing-tasks api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the sharing-tasks api
 */
declare const sharingTasksExport: SharingTasksAPI;
//#endregion
export { sharingTasksExport as default, sharing_tasks_d_exports as t };