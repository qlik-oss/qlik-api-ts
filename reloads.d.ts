import { A as ApiCallOptions } from './global.types-CMQsAHYd.js';
import './auth-types-Bqw3vbLs.js';

type Error = {
    /** The error code is in form of 'RELOADS-xxx'. ranges from 'RELOADS-001' to 'RELOADS-013'.  */
    code: string;
    detail?: string;
    title: string;
};
type Errors = {
    errors?: Error[];
};
type Href = {
    href?: string;
};
/**
 * The boolean value used to present the reload is partial or not.
 */
type Partial = boolean;
type Reload = {
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
    /** The time the reload job was consumed from the queue. */
    startTime?: string;
    /** The status of the reload. There are seven statuses. `QUEUED`, `RELOADING`, `CANCELING` are the active statuses. `SUCCEEDED`, `FAILED`, `CANCELED`, `EXCEEDED_LIMIT` are the end statuses. */
    status: Status;
    /** The ID of the tenant who owns the reload. */
    tenantId: string;
    /** What initiated the reload: hub = one-time reload manually triggered in hub, chronos = time based scheduled reload triggered by chronos, external = reload triggered via external API request, automations = reload triggered in automation, data-refresh = reload triggered by refresh of data. */
    type: Type;
    /** The ID of the user who created the reload. */
    userId: string;
};
type ReloadLinks = {
    self?: Href;
};
type ReloadRequest = {
    /** The ID of the app to be reloaded. */
    appId: string;
    /** The boolean value used to present the reload is partial or not */
    partial?: boolean;
};
type Reloads = {
    data: Reload[];
    links: ReloadsLinks;
};
type ReloadsLinks = ReloadLinks & {
    next?: Href;
    prev?: Href;
};
/**
 * The status of the reload. There are seven statuses. `QUEUED`, `RELOADING`, `CANCELING` are the active statuses. `SUCCEEDED`, `FAILED`, `CANCELED`, `EXCEEDED_LIMIT` are the end statuses.
 */
type Status = "QUEUED" | "RELOADING" | "CANCELING" | "SUCCEEDED" | "FAILED" | "CANCELED" | "EXCEEDED_LIMIT";
/**
 * What initiated the reload: hub = one-time reload manually triggered in hub, chronos = time based scheduled reload triggered by chronos, external = reload triggered via external API request, automations = reload triggered in automation, data-refresh = reload triggered by refresh of data.
 */
type Type = "hub" | "external" | "chronos" | "automations" | "data-refresh";
/**
 * Finds and returns the reloads that the user has access to.
 *
 * @param query an object with query parameters
 * @throws GetReloadsHttpError
 */
declare const getReloads: (query: {
    /** The UUID formatted string used to search for an app's reload history entries. TenantAdmin users may omit this parameter to list all reload history in the tenant. */
    appId?: string;
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
    /** The boolean value used to include the log field or not, default is included, set log=false to exclude the log field. */
    log?: boolean;
    /** The cursor to the next page of resources. Provide either the next or prev cursor, but not both. */
    next?: string;
    /** The boolean value used to search for a reload is partial or not. */
    partial?: boolean;
    /** The cursor to the previous page of resources. Provide either the next or prev cursor, but not both. */
    prev?: string;
}, options?: ApiCallOptions) => Promise<GetReloadsHttpResponse>;
type GetReloadsHttpResponse = {
    data: Reloads;
    headers: Headers;
    status: number;
};
type GetReloadsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Reloads an app specified by an app ID.
 *
 * @param body an object with the body content
 * @throws QueueReloadHttpError
 */
declare const queueReload: (body: ReloadRequest, options?: ApiCallOptions) => Promise<QueueReloadHttpResponse>;
type QueueReloadHttpResponse = {
    data: Reload;
    headers: Headers;
    status: number;
};
type QueueReloadHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns a reload record
 *
 * @param reloadId The unique identifier of the reload.
 * @throws GetReloadHttpError
 */
declare const getReload: (reloadId: string, options?: ApiCallOptions) => Promise<GetReloadHttpResponse>;
type GetReloadHttpResponse = {
    data: Reload;
    headers: Headers;
    status: number;
};
type GetReloadHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Cancels a reload that is in progress or has been queued
 *
 * @param reloadId The unique identifier of the reload.
 * @throws CancelReloadHttpError
 */
declare const cancelReload: (reloadId: string, options?: ApiCallOptions) => Promise<CancelReloadHttpResponse>;
type CancelReloadHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type CancelReloadHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for reloads api requests.
 */
declare function clearCache(): void;
interface ReloadsAPI {
    /**
     * Finds and returns the reloads that the user has access to.
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
     * Finds and returns a reload record
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
}
/**
 * Functions for the reloads api
 */
declare const reloadsExport: ReloadsAPI;

export { type CancelReloadHttpError, type CancelReloadHttpResponse, type Error, type Errors, type GetReloadHttpError, type GetReloadHttpResponse, type GetReloadsHttpError, type GetReloadsHttpResponse, type Href, type Partial, type QueueReloadHttpError, type QueueReloadHttpResponse, type Reload, type ReloadLinks, type ReloadRequest, type Reloads, type ReloadsAPI, type ReloadsLinks, type Status, type Type, cancelReload, clearCache, reloadsExport as default, getReload, getReloads, queueReload };
