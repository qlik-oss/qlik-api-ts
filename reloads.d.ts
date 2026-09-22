import { x as ApiCallOptions } from "./chunks/auth-types-DCwmQ7fk.js";
import "./chunks/invoke-fetch-eUbA2JSu.js";
//#region src/public/rest/reloads.d.ts
export type Error = {
  /** The error code is in form of 'RELOADS-xxx'. ranges from 'RELOADS-001' to 'RELOADS-013'.  */
  code: string;
  detail?: string;
  title: string;
};
/**
 * @example
 * {
 *   errors: [
 *     {
 *       code: "HTTP-123",
 *       title: "short error message"
 *     }
 *   ]
 * }
 */
export type Errors = {
  errors?: Error[];
};
/**
 * @example
 * {
 *   href: "http://example.com"
 * }
 */
export type Href = {
  href?: string;
};
/**
 * The boolean value used to present the reload is partial or not.
 * @example
 * false
 */
export type Partial = boolean;
export type Reload = {
  /** The ID of the app. */
  appId: string;
  /** The time the reload job was created. */
  creationTime: string;
  /** The time the reload job finished. */
  endTime?: string;
  /** The timestamp returned from the Sense engine upon successful reload. */
  engineTime?: string;
  /** The error code when the status is FAILED. */
  errorCode?: string;
  /** The error message when the status is FAILED. */
  errorMessage?: string;
  /** The ID of the reload. */
  id: string;
  links?: ReloadLinks;
  /** The log describing the result of the latest reload execution from the request. */
  log?: string;
  /** The boolean value used to present the reload is partial or not. */
  partial?: Partial;
  /** The String field identifying the specific resource ID within that service */
  resourceId?: ResourceId;
  /** The String field identifying the service type that triggered the reload, e.g. "api" */
  resourceType?: ResourceType;
  /** The time the reload job was consumed from the queue. */
  startTime?: string;
  /** The status of the reload. There are seven statuses. `QUEUED`, `RELOADING`, `CANCELING` are the active statuses. `SUCCEEDED`, `FAILED`, `CANCELED`, `EXCEEDED_LIMIT` are the end statuses. */
  status: Status;
  /** The ID of the tenant who owns the reload. */
  tenantId: string;
  /** What initiated the reload: hub = one-time reload manually triggered in hub, chronos = time based scheduled reload triggered by chronos, external = reload triggered via external API request, automations = reload triggered in automation, data-refresh = reload triggered by refresh of data, choreographer = reload triggered by choreographer. */
  type: Type;
  /** The ID of the user who created the reload. */
  userId: string;
  /** The weight of the reload for the same tenant. The higher the weight, the sooner the reload will be scheduled relative to other reloads for the same tenant. The personal app will be always set as 1. */
  weight?: Weight;
};
export type ReloadLinks = {
  self?: Href;
};
export type ReloadRequest = {
  /** The ID of the app to be reloaded. */
  appId: string;
  /** The boolean value used to present the reload is partial or not */
  partial?: boolean;
  /** The String field identifying the specific resource ID within that service */
  resourceId?: ResourceId;
  /** The String field identifying the service type that triggered the reload, e.g. "api" */
  resourceType?: ResourceType;
  /** The variables to be used in the load script. Maximum of 20 variables allowed with a maximum length of 256 characters for each name/value. */
  variables?: Record<string, string>;
  /** The weight of the reload for the same tenant. The higher the weight, the sooner the reload will be scheduled relative to other reloads for the same tenant. The personal app will be always set as 1. */
  weight?: Weight;
};
export type ReloadStatus = {
  /** The status of the reload. */
  status?: "QUEUED" | "RELOADING" | "CANCELING" | "SUCCEEDED" | "FAILED" | "CANCELED" | "EXCEEDED_LIMIT";
};
export type Reloads = {
  data: Reload[];
  links: ReloadsLinks;
};
export type ReloadsLinks = ReloadLinks & {
  next?: Href;
  prev?: Href;
};
/**
 * The String field identifying the specific resource ID within that service
 * @example
 * "5be59decca62aa00097268a4"
 */
export type ResourceId = string;
/**
 * The String field identifying the service type that triggered the reload, e.g. "api"
 * @example
 * "api"
 */
export type ResourceType = "api" | "reload-tasks" | "tasks" | "automate";
/**
 * The status of the reload. There are seven statuses. `QUEUED`, `RELOADING`, `CANCELING` are the active statuses. `SUCCEEDED`, `FAILED`, `CANCELED`, `EXCEEDED_LIMIT` are the end statuses.
 * @example
 * "FAILED"
 */
export type Status = "QUEUED" | "RELOADING" | "CANCELING" | "SUCCEEDED" | "FAILED" | "CANCELED" | "EXCEEDED_LIMIT";
/**
 * What initiated the reload: hub = one-time reload manually triggered in hub, chronos = time based scheduled reload triggered by chronos, external = reload triggered via external API request, automations = reload triggered in automation, data-refresh = reload triggered by refresh of data, choreographer = reload triggered by choreographer.
 * @example
 * "chronos"
 */
export type Type = "hub" | "external" | "chronos" | "automations" | "data-refresh" | "choreographer";
/**
 * The weight of the reload for the same tenant. The higher the weight, the sooner the reload will be scheduled relative to other reloads for the same tenant. The personal app will be always set as 1.
 */
export type Weight = number;
/**
 * Finds and returns the reloads that the user has access to.
 * @example
 * getReloads(
 *   {
 *     filter: "(status eq \"FAILED\" or status eq \"EXCEEDED_LIMIT\") and partial eq \"false\" and type eq \"chronos\"
 *     "
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetReloadsHttpError
 */
export declare function getReloads(query: {
  /** The UUID formatted string used to search for an app's reload history entries. TenantAdmin users may omit this parameter to list all reload history in the tenant. */
  appId: string;
  /** SCIM filter expression used to search for reloads.
   * The filter syntax is defined in RFC 7644 section 3.4.2.2
   *
   * Supported attributes:
   * - status: see #schemas/Status
   * - partial: see #schemas/Partial
   * - type: see #schemas/Type
   *
   * Supported operators:
   * - eq */
  filter?: string;
  /** The maximum number of resources to return for a request. The limit must be an integer between 1 and 100 (inclusive). */
  limit?: number;
  /** The boolean value used to include the log field or not, set log=true to include the log field. */
  log?: boolean;
  /** The cursor to the next page of resources. Provide either the next or prev cursor, but not both. */
  next?: string;
  /** The boolean value used to search for a reload is partial or not. */
  partial?: boolean;
  /** The cursor to the previous page of resources. Provide either the next or prev cursor, but not both. */
  prev?: string;
  /** The field to sort by, with +/- prefix indicating sort order */
  sort?: "creationTime" | "+creationTime" | "-creationTime" | "status" | "+status" | "-status" | "startTime" | "+startTime" | "-startTime" | "endTime" | "+endTime" | "-endTime";
}, options?: ApiCallOptions): Promise<GetReloadsHttpResponse>;
export type GetReloadsHttpResponse = {
  data: Reloads;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetReloadsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetReloadsHttpResponse>;
};
export type GetReloadsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 500;
};
/**
 * Reloads an app specified by an app ID.
 *
 * @param body an object with the body content
 * @throws QueueReloadHttpError
 */
export declare function queueReload(body: ReloadRequest, options?: ApiCallOptions): Promise<QueueReloadHttpResponse>;
export type QueueReloadHttpResponse = {
  data: Reload;
  headers: Headers;
  status: 201;
};
export type QueueReloadHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 429 | 500;
};
/**
 * Finds and returns a reload record.
 *
 * @param reloadId The unique identifier of the reload.
 * @throws GetReloadHttpError
 */
export declare function getReload(reloadId: string, options?: ApiCallOptions): Promise<GetReloadHttpResponse>;
export type GetReloadHttpResponse = {
  data: Reload;
  headers: Headers;
  status: 200;
};
export type GetReloadHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500;
};
/**
 * Cancels a reload that is in progress or has been queued
 *
 * @param reloadId The unique identifier of the reload.
 * @throws CancelReloadHttpError
 */
export declare function cancelReload(reloadId: string, options?: ApiCallOptions): Promise<CancelReloadHttpResponse>;
export type CancelReloadHttpResponse = CancelReload202HttpResponse | CancelReload204HttpResponse;
export type CancelReload202HttpResponse = {
  data: ReloadStatus;
  headers: Headers;
  status: 202;
};
export type CancelReload204HttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type CancelReloadHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500;
};
/**
 * Clears the cache for reloads api requests.
 */
export declare function clearCache(): void;
export type ReloadsAPI = {
  /**
   * Finds and returns the reloads that the user has access to.
   * @example
   * getReloads(
   *   {
   *     filter: "(status eq \"FAILED\" or status eq \"EXCEEDED_LIMIT\") and partial eq \"false\" and type eq \"chronos\"
   *     "
   *   }
   * )
   *
   * @param query an object with query parameters
   * @throws GetReloadsHttpError
   */
  getReloads: typeof getReloads;
  /**
   * Reloads an app specified by an app ID.
   *
   * @param body an object with the body content
   * @throws QueueReloadHttpError
   */
  queueReload: typeof queueReload;
  /**
   * Finds and returns a reload record.
   *
   * @param reloadId The unique identifier of the reload.
   * @throws GetReloadHttpError
   */
  getReload: typeof getReload;
  /**
   * Cancels a reload that is in progress or has been queued
   *
   * @param reloadId The unique identifier of the reload.
   * @throws CancelReloadHttpError
   */
  cancelReload: typeof cancelReload;
  /**
   * Clears the cache for reloads api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the reloads api
 */
declare const reloadsExport: ReloadsAPI;
//#endregion
export { reloadsExport as default };