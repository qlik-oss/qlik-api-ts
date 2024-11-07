import { A as ApiCallOptions } from './invoke-fetch-types-BLrpeZOL.js';
import './auth-types-PkN9CAF_.js';

type ErrorResponse = {
    errors?: {
        code?: string;
        detail?: string;
        title?: string;
    }[];
    traceId?: string;
};
/**
 * The availability of the properties depends on the event and the context it was triggered in.
 */
type EventExtensions = {
    /** Specifies the entity performing the action on behalf of another party listed as triggering the action. */
    actor?: {
        /** Opaque value identifying impersonating entity. */
        sub?: string;
        /** The type of the impersonating entity. */
        subType?: string;
    };
    /** Id of the owner of the resource affected by the eventContext. */
    ownerId?: string;
    /** Id of the space related to the action performed on the eventContext. */
    spaceId?: string;
    /** If the event originated from a sub resource the topLevelResourceId contains the id of the top level resource associated with the sub resource. */
    topLevelResourceId?: string;
    /** Might be present if the action is of type "updated" and should contain information about the changes made to the resource. */
    updates?: unknown;
};
type GetArchiveResult = {
    /** List of archived events. The structure of the events depend on their type and version. */
    data?: unknown[];
};
type GetByIDResult = {
    /** The type that content is encoded in, always "application/json". */
    contentType?: string;
    /** Additional information about the event's details. The structure depends on the type and version of the event. */
    data?: unknown;
    /** The event's unique identifier. */
    eventId?: string;
    /** The RFC3339 datetime when the event happened. */
    eventTime?: string;
    /** The type of event that describes committed action. */
    eventType?: string;
    /** The version of the event type. */
    eventTypeVersion?: string;
    /** The availability of the properties depends on the event and the context it was triggered in. */
    extensions?: EventExtensions;
    /** The resource item's unique identifier. */
    id?: string;
    links?: GetLinks;
    /** The source of the event message, usually the producing service. */
    source?: string;
    /** The ID of the tenant that owns the item. This is populated using the JWT. */
    tenantId?: string;
    /** The ID of the user who performed the action that triggered the event. */
    userId?: string;
};
type GetLinks = {
    self?: Href;
};
type GetObjectsResult = {
    /** List of requested resources. */
    data?: string[];
    links?: ListLinks;
};
type GetResult = {
    /** List of audit items. */
    data?: GetByIDResult[];
    links?: ListLinks;
};
type GetSettingsResult = {
    /** Server configuration options. */
    data?: {
        /** Is Long Term Storage archiving enabled?. */
        ArchiveEnabled?: boolean;
        /** The events TTL in seconds. */
        EventTTL?: number;
    };
};
type ListLinks = {
    next?: Href;
    prev?: Href;
    self?: Href;
};
type Href = {
    href?: string;
};
/**
 * Retrieves list of events for subscribed services for your tenant. Stores events for 90 days, after which they can be accessed via `/v1/audits/archive`.
 *
 * @param query an object with query parameters
 * @throws GetAuditsHttpError
 */
declare const getAudits: (query: {
    /** The start/end time interval formatted in ISO 8601 to search by eventTime. For example, "?eventTime=2021-07-14T18:41:15.00Z/2021-07-14T18:41:15.99Z". */
    eventTime?: string;
    /** The case-sensitive string used to search by eventType. Retrieve a list of possible eventTypes with `/v1/audits/types`. */
    eventType?: string;
    /** The comma separated list of audit unique identifiers. */
    id?: string;
    /** The maximum number of resources to return for a request. */
    limit?: number;
    /** The cursor to the next page of resources. Provide either the next or prev cursor, but not both. */
    next?: string;
    /** The cursor to the previous page of resources. Provide either the next or prev cursor, but not both. */
    prev?: string;
    /** The property of a resource to sort on (default sort is -eventTime). The supported properties are source, eventType, and eventTime. A property must be prefixed by + or - to indicate ascending or descending sort order respectively. */
    sort?: string;
    /** The case-sensitive string used to search by source. Retrieve a list of possible sources with `/v1/audits/sources`. */
    source?: string;
    /** The case-sensitive string used to search by userId. */
    userId?: string;
}, options?: ApiCallOptions) => Promise<GetAuditsHttpResponse>;
type GetAuditsHttpResponse = {
    data: GetResult;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetAuditsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetAuditsHttpResponse>;
};
type GetAuditsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves audit events from long term storage. Finds and returns audit events from the archive, formatted as a JSON array, for the given date and tenant (in JWT). Archived events are not removed.
 *
 * @param query an object with query parameters
 * @throws GetArchivedAuditsHttpError
 */
declare const getArchivedAudits: (query: {
    /** Date to be used as filter and criteria during extraction. */
    date?: string;
}, options?: ApiCallOptions) => Promise<GetArchivedAuditsHttpResponse>;
type GetArchivedAuditsHttpResponse = {
    data: GetArchiveResult;
    headers: Headers;
    status: number;
};
type GetArchivedAuditsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Returns the server configuration options. It includes options that represent the server configuration state and parameters that were used to run the server with certain functionality.
 *
 * @throws GetAuditsSettingsHttpError
 */
declare const getAuditsSettings: (options?: ApiCallOptions) => Promise<GetAuditsSettingsHttpResponse>;
type GetAuditsSettingsHttpResponse = {
    data: GetSettingsResult;
    headers: Headers;
    status: number;
};
type GetAuditsSettingsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns the list of possible event sources for this tenant.
 *
 * @throws GetAuditSourcesHttpError
 */
declare const getAuditSources: (options?: ApiCallOptions) => Promise<GetAuditSourcesHttpResponse>;
type GetAuditSourcesHttpResponse = {
    data: GetObjectsResult;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetAuditSourcesHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetAuditSourcesHttpResponse>;
};
type GetAuditSourcesHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns the list of possible event types for this tenant.
 *
 * @throws GetAuditTypesHttpError
 */
declare const getAuditTypes: (options?: ApiCallOptions) => Promise<GetAuditTypesHttpResponse>;
type GetAuditTypesHttpResponse = {
    data: GetObjectsResult;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetAuditTypesHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetAuditTypesHttpResponse>;
};
type GetAuditTypesHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns a specific audit events for the given event ID.
 *
 * @param id The audit item's unique identifier.
 * @throws GetAuditHttpError
 */
declare const getAudit: (id: string, options?: ApiCallOptions) => Promise<GetAuditHttpResponse>;
type GetAuditHttpResponse = {
    data: GetByIDResult;
    headers: Headers;
    status: number;
};
type GetAuditHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for audits api requests.
 */
declare function clearCache(): void;
interface AuditsAPI {
    /**
     * Retrieves list of events for subscribed services for your tenant. Stores events for 90 days, after which they can be accessed via `/v1/audits/archive`.
     *
     * @param query an object with query parameters
     * @throws GetAuditsHttpError
     */
    getAudits: typeof getAudits;
    /**
     * Retrieves audit events from long term storage. Finds and returns audit events from the archive, formatted as a JSON array, for the given date and tenant (in JWT). Archived events are not removed.
     *
     * @param query an object with query parameters
     * @throws GetArchivedAuditsHttpError
     */
    getArchivedAudits: typeof getArchivedAudits;
    /**
     * Returns the server configuration options. It includes options that represent the server configuration state and parameters that were used to run the server with certain functionality.
     *
     * @throws GetAuditsSettingsHttpError
     */
    getAuditsSettings: typeof getAuditsSettings;
    /**
     * Finds and returns the list of possible event sources for this tenant.
     *
     * @throws GetAuditSourcesHttpError
     */
    getAuditSources: typeof getAuditSources;
    /**
     * Finds and returns the list of possible event types for this tenant.
     *
     * @throws GetAuditTypesHttpError
     */
    getAuditTypes: typeof getAuditTypes;
    /**
     * Finds and returns a specific audit events for the given event ID.
     *
     * @param id The audit item's unique identifier.
     * @throws GetAuditHttpError
     */
    getAudit: typeof getAudit;
    /**
     * Clears the cache for audits api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the audits api
 */
declare const auditsExport: AuditsAPI;

export { type AuditsAPI, type ErrorResponse, type EventExtensions, type GetArchiveResult, type GetArchivedAuditsHttpError, type GetArchivedAuditsHttpResponse, type GetAuditHttpError, type GetAuditHttpResponse, type GetAuditSourcesHttpError, type GetAuditSourcesHttpResponse, type GetAuditTypesHttpError, type GetAuditTypesHttpResponse, type GetAuditsHttpError, type GetAuditsHttpResponse, type GetAuditsSettingsHttpError, type GetAuditsSettingsHttpResponse, type GetByIDResult, type GetLinks, type GetObjectsResult, type GetResult, type GetSettingsResult, type Href, type ListLinks, clearCache, auditsExport as default, getArchivedAudits, getAudit, getAuditSources, getAuditTypes, getAudits, getAuditsSettings };
