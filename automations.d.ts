import { A as ApiCallOptions } from './global.types-qsBNouXJ.js';
import './auth-types-PkN9CAF_.js';

type AutomationDetailRequestObject = {
    description?: string;
    name?: string;
    schedules?: ScheduleRequestObject[];
    state?: "available" | "unavailable" | "disabled";
    /** The workspace generated by the Qlik Application Automations editor. */
    workspace?: unknown;
};
type AutomationDetailResponseObject = {
    /** A list of connectors that were detected the workspace. This includes Connectors present in blocks which are not connected to other blocks. Order of guids is not guaranteed. */
    readonly connectorIds?: string[];
    readonly createdAt?: string;
    description?: string;
    /** A list of endpoints that were detected inside the workspace. This includes Endpoints present in blocks which are not connected to other blocks. Order of guids is not guaranteed. */
    readonly endpointIds?: string[];
    readonly executionToken?: string;
    readonly id?: string;
    lastRun?: RunDetailResponseObject;
    readonly lastRunAt?: string;
    readonly lastRunStatus?: "failed" | "finished" | "finished with warnings" | "must stop" | "not started" | "paused" | "running" | "starting" | "stopped";
    name?: string;
    readonly ownerId?: string;
    readonly runMode?: "manual" | "scheduled" | "triggered" | "webhook";
    schedules?: ScheduleResponseObject[];
    /** A list of snippets that were detected inside the workspace. This includes snippet blocks that are not connected to other blocks. Order of guids is not guaranteed. */
    readonly snippetIds?: string[];
    state?: "available" | "unavailable" | "disabled";
    readonly updatedAt?: string;
    /** The workspace generated by the Qlik Application Automations editor. */
    workspace?: unknown;
};
type AutomationList = {
    data?: AutomationListObject[];
    links?: Links;
};
type AutomationListObject = {
    /** A list of connectors that were detected the workspace. This includes Connectors present in blocks which are not connected to other blocks. Order of guids is not guaranteed. */
    readonly connectorIds?: string[];
    readonly createdAt?: string;
    description?: string;
    /** Duration of the last run, indicated in seconds. Calculated from start and stop times */
    readonly duration?: number;
    /** A list of endpoints that were detected inside the workspace. This includes Endpoints present in blocks which are not connected to other blocks. Order of guids is not guaranteed. */
    readonly endpointIds?: string[];
    readonly executionToken?: string;
    readonly id?: string;
    lastRun?: RunDetailResponseObject;
    readonly lastRunAt?: string;
    readonly lastRunStatus?: "failed" | "finished" | "finished with warnings" | "must stop" | "not started" | "paused" | "running" | "starting" | "stopped";
    name?: string;
    readonly ownerId?: string;
    readonly runMode?: "manual" | "scheduled" | "triggered" | "webhook";
    /** A list of snippets that were detected inside the workspace. This includes snippet blocks that are not connected to other blocks. Order of guids is not guaranteed. */
    readonly snippetIds?: string[];
    state?: "available" | "unavailable" | "disabled";
    readonly updatedAt?: string;
    /** The workspace contains the JSON representation of the used blocks */
    readonly workspace?: unknown;
};
type AutomationUsageObject = {
    /** Duration of the last run, indicated in seconds. Calculated from start and stop times */
    duration?: number;
    /** The unique identifier for the automation. */
    guid?: string;
    /** The name for the automation. */
    name?: string;
    /** The unique identifier for the user who owns the automation */
    ownerId?: string;
};
type Error = {
    /** The unique code for the error */
    code: string;
    /** May be used to provide additional details */
    detail?: string;
    /** A summary of what went wrong */
    title: string;
};
type ErrorResponse = {
    errors?: Error[];
    /** A way to trace the source of the error. */
    traceId?: string;
};
type Links = {
    next?: PaginationLink;
    prev?: PaginationLink;
};
type PaginationLink = {
    /** The URL to a resource request */
    href?: string;
};
type RunDetailRequestObject = {
    /** The source that triggers the automation will set the context. */
    context: "api";
    readonly id?: string;
};
type RunDetailResponseObject = {
    /** The source that triggers the automation will set the context. Certain contexts impact the execution of an automation (for example, The "test_run" context will not process all results when listing items). */
    context?: "test_run" | "editor" | "detail" | "api_sync" | "api_async" | "webhook" | "lookup";
    readonly createdAt?: string;
    error?: unknown;
    readonly id?: string;
    readonly isArchived?: boolean;
    readonly isTestRun?: boolean;
    metrics?: {
        /** List of blocks used during execution. Note: this list currently only contains endpointBlocks and snippetBlocks */
        blocks?: {
            /** API calls to external resources made by the current block. */
            apiCalls?: number;
            /** Unique identifier for the connector used within the block of the execution. */
            connectorId?: string;
            /** Unique identifier for the snippet block used within the execution. */
            endpointId?: string;
            /** Total amount of received bytes sent by the current block. */
            rxBytes: number;
            /** Unique identifier for the snippet block used within the execution. */
            snippetId?: string;
            /** Total amount of sent bytes sent by the current block. */
            txBytes: number;
            /** Type of the block. */
            type: "snippetBlock" | "endpointBlock";
        }[];
        network?: {
            /** The number of received bytes. */
            rxBytes?: number;
            /** The number of received bytes. */
            txBytes?: number;
        };
        /** The number of API calls made. */
        totalApiCalls?: number;
    };
    readonly scheduledStartTime?: string;
    readonly startTime?: string;
    status?: "failed" | "finished" | "finished with warnings" | "must stop" | "not started" | "running" | "starting" | "stopped";
    readonly stopTime?: string;
    title?: string;
    readonly updatedAt?: string;
};
type RunList = {
    data?: RunListObject[];
    links?: Links;
};
type RunListObject = {
    context?: "test_run" | "editor" | "detail" | "api_sync" | "api_async" | "webhook" | "lookup";
    readonly createdAt?: string;
    /** Duration of the run, indicated in seconds. Calculated from start and stop times */
    readonly duration?: number;
    error?: unknown;
    readonly id?: string;
    readonly isArchived?: boolean;
    readonly isTestRun?: boolean;
    readonly scheduledStartTime?: string;
    readonly startTime?: string;
    status?: "failed" | "finished" | "finished with warnings" | "must stop" | "not started" | "running" | "starting" | "stopped";
    readonly stopTime?: string;
    title?: string;
    readonly updatedAt?: string;
};
type ScheduleRequestObject = {
    /** time in seconds. */
    interval?: number;
    startAt?: string;
    stopAt?: string;
    timezone?: string;
};
type ScheduleResponseObject = {
    readonly id?: string;
    /** time in seconds. */
    interval?: number;
    lastStartedAt?: string;
    startAt?: string;
    stopAt?: string;
    timezone?: string;
};
type SettingsObject = {
    automationsEnabled?: boolean;
};
type UsageList = {
    data?: UsageObject[];
    links?: Links;
};
type UsageObject = {
    automation?: AutomationUsageObject;
    /** The date for the metric */
    date: string;
    /** The name for the metric */
    name: "runs" | "scheduledRun" | "triggeredRun" | "webhookRuns" | "duration" | "bandwidthIn" | "bandwidthOut";
    /** The value count of the metric */
    value: number;
};
/**
 * Retrieves a list of automations
 *
 * @param query an object with query parameters
 * @throws GetAutomationsHttpError
 */
declare const getAutomations: (query: {
    /** Allows to select the actual fields to be returned. When no fields are defined, all are returned. */
    fields?: string;
    /** Allowed filters: name, runMode, lastRunStatus, ownerId */
    filter?: string;
    /** The number of automations to retrieve. */
    limit?: number;
    /** The field to sort by, with +- prefix indicating sort order. (?query=-name => sort on the name field using descending order) */
    sort?: "id" | "name" | "runMode" | "state" | "createdAt" | "updatedAt" | "lastRunAt" | "lastRunStatus" | "duration" | "+id" | "+name" | "+runMode" | "+state" | "+createdAt" | "+updatedAt" | "+lastRunAt" | "+lastRunStatus" | "-id" | "-name" | "-runMode" | "-state" | "-createdAt" | "-updatedAt" | "-lastRunAt" | "-lastRunStatus" | "+duration" | "-duration";
}, options?: ApiCallOptions) => Promise<GetAutomationsHttpResponse>;
type GetAutomationsHttpResponse = {
    data: AutomationList;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetAutomationsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetAutomationsHttpResponse>;
};
type GetAutomationsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Create an automation
 *
 * @param body an object with the body content
 * @throws CreateAutomationHttpError
 */
declare const createAutomation: (body: AutomationDetailRequestObject, options?: ApiCallOptions) => Promise<CreateAutomationHttpResponse>;
type CreateAutomationHttpResponse = {
    data: AutomationDetailResponseObject;
    headers: Headers;
    status: number;
};
type CreateAutomationHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * @deprecated
 *
 * Retrieves the automation settings.
 *
 * @throws GetAutomationsSettingsHttpError
 */
declare const getAutomationsSettings: (options?: ApiCallOptions) => Promise<GetAutomationsSettingsHttpResponse>;
type GetAutomationsSettingsHttpResponse = {
    data: SettingsObject;
    headers: Headers;
    status: number;
};
type GetAutomationsSettingsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * @deprecated
 *
 * Update the automation settings.
 *
 * @param body an object with the body content
 * @throws UpdateAutomationsSettingsHttpError
 */
declare const updateAutomationsSettings: (body: SettingsObject, options?: ApiCallOptions) => Promise<UpdateAutomationsSettingsHttpResponse>;
type UpdateAutomationsSettingsHttpResponse = {
    data: SettingsObject;
    headers: Headers;
    status: number;
};
type UpdateAutomationsSettingsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves all automation usage for a tenant
 *
 * @param query an object with query parameters
 * @throws GetAutomationsUsageMetricsHttpError
 */
declare const getAutomationsUsageMetrics: (query: {
    /** If specified, result will be broken apart for each automation */
    breakdownBy?: string;
    /** Indicates how the metrics should be filtered */
    filter?: string;
}, options?: ApiCallOptions) => Promise<GetAutomationsUsageMetricsHttpResponse>;
type GetAutomationsUsageMetricsHttpResponse = {
    data: UsageList;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetAutomationsUsageMetricsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetAutomationsUsageMetricsHttpResponse>;
};
type GetAutomationsUsageMetricsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Delete an automation
 *
 * @param id The unique identifier for the automation.
 * @throws DeleteAutomationHttpError
 */
declare const deleteAutomation: (id: string, options?: ApiCallOptions) => Promise<DeleteAutomationHttpResponse>;
type DeleteAutomationHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteAutomationHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves an automation
 *
 * @param id The unique identifier for the automation.
 * @param query an object with query parameters
 * @throws GetAutomationWithQueryHttpError
 */
declare const getAutomationWithQuery: (id: string, query: {
    /** Allows to select the actual fields to be returned. Where the default is all fields */
    fields?: string;
}, options?: ApiCallOptions) => Promise<GetAutomationWithQueryHttpResponse>;
type GetAutomationWithQueryHttpResponse = {
    data: AutomationDetailResponseObject;
    headers: Headers;
    status: number;
};
type GetAutomationWithQueryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves an automation
 *
 * @param id The unique identifier for the automation.
 * @throws GetAutomationHttpError
 */
declare const getAutomation: (id: string, options?: ApiCallOptions) => Promise<GetAutomationHttpResponse>;
type GetAutomationHttpResponse = {
    data: AutomationDetailResponseObject;
    headers: Headers;
    status: number;
};
type GetAutomationHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Update an automation
 *
 * @param id The unique identifier for the automation.
 * @param body an object with the body content
 * @throws UpdateAutomationHttpError
 */
declare const updateAutomation: (id: string, body: AutomationDetailRequestObject, options?: ApiCallOptions) => Promise<UpdateAutomationHttpResponse>;
type UpdateAutomationHttpResponse = {
    data: AutomationDetailResponseObject;
    headers: Headers;
    status: number;
};
type UpdateAutomationHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Copy an automation.
 *
 * @param id The unique identifier for the automation.
 * @param body an object with the body content
 * @throws CopyAutomationHttpError
 */
declare const copyAutomation: (id: string, body: {
    /** Name of the new automation. */
    name: string;
}, options?: ApiCallOptions) => Promise<CopyAutomationHttpResponse>;
type CopyAutomationHttpResponse = {
    data: {
        /** The unique identifier for the automation. */
        id?: string;
    };
    headers: Headers;
    status: number;
};
type CopyAutomationHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Disables an automation.
 *
 * @param id The unique identifier for the automation.
 * @throws DisableAutomationHttpError
 */
declare const disableAutomation: (id: string, options?: ApiCallOptions) => Promise<DisableAutomationHttpResponse>;
type DisableAutomationHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DisableAutomationHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Enable an automation.
 *
 * @param id The unique identifier for the automation.
 * @throws EnableAutomationHttpError
 */
declare const enableAutomation: (id: string, options?: ApiCallOptions) => Promise<EnableAutomationHttpResponse>;
type EnableAutomationHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type EnableAutomationHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * This step will remove the history and change logs of this automation. All linked connections used inside an automation will be detached.
 *
 * @param id The unique identifier for the automation.
 * @param body an object with the body content
 * @throws MoveAutomationHttpError
 */
declare const moveAutomation: (id: string, body: {
    userId: string;
}, options?: ApiCallOptions) => Promise<MoveAutomationHttpResponse>;
type MoveAutomationHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type MoveAutomationHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves a list of runs for a specific automation.
 *
 * @param id The unique identifier for the automation.
 * @param query an object with query parameters
 * @throws GetAutomationRunsHttpError
 */
declare const getAutomationRuns: (id: string, query: {
    /** Allows to select the actual fields to be returned. Where the default is all fields */
    fields?: string;
    /** Allowed filters: status, context, startTime and title */
    filter?: string;
    /** The number of runs to retrieve. */
    limit?: number;
    /** The field to sort by, with +- prefix indicating sort order. (?query=-startTime => sort on the startTime field using descending order) */
    sort?: "id" | "status" | "startTime" | "-id" | "-status" | "-startTime" | "+id" | "+status" | "+startTime";
}, options?: ApiCallOptions) => Promise<GetAutomationRunsHttpResponse>;
type GetAutomationRunsHttpResponse = {
    data: RunList;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetAutomationRunsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetAutomationRunsHttpResponse>;
};
type GetAutomationRunsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Create a run
 *
 * @param id The unique identifier for the automation.
 * @param body an object with the body content
 * @throws QueueAutomationRunHttpError
 */
declare const queueAutomationRun: (id: string, body: RunDetailRequestObject, options?: ApiCallOptions) => Promise<QueueAutomationRunHttpResponse>;
type QueueAutomationRunHttpResponse = {
    data: RunDetailResponseObject;
    headers: Headers;
    status: number;
};
type QueueAutomationRunHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves a run
 *
 * @param id The unique identifier for the automation.
 * @param runId The unique identifier for the run.
 * @param query an object with query parameters
 * @throws GetAutomationRunWithQueryHttpError
 */
declare const getAutomationRunWithQuery: (id: string, runId: string, query: {
    /** Allows to select the actual fields to be returned. Where the default is all fields */
    fields?: string;
}, options?: ApiCallOptions) => Promise<GetAutomationRunWithQueryHttpResponse>;
type GetAutomationRunWithQueryHttpResponse = {
    data: RunDetailResponseObject;
    headers: Headers;
    status: number;
};
type GetAutomationRunWithQueryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves a run
 *
 * @param id The unique identifier for the automation.
 * @param runId The unique identifier for the run.
 * @throws GetAutomationRunHttpError
 */
declare const getAutomationRun: (id: string, runId: string, options?: ApiCallOptions) => Promise<GetAutomationRunHttpResponse>;
type GetAutomationRunHttpResponse = {
    data: RunDetailResponseObject;
    headers: Headers;
    status: number;
};
type GetAutomationRunHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Creates a temporary pre-signed AWS S3 URL to download the raw logs of a completed run. This URL is valid for 5 minutes.
 *
 * @param id The unique identifier for the automation.
 * @param runId The unique identifier for the run.
 * @throws GetAutomationRunDetailsHttpError
 */
declare const getAutomationRunDetails: (id: string, runId: string, options?: ApiCallOptions) => Promise<GetAutomationRunDetailsHttpResponse>;
type GetAutomationRunDetailsHttpResponse = {
    data: {
        url?: string;
    };
    headers: Headers;
    status: number;
};
type GetAutomationRunDetailsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * This action allows you to retry a specific run by creating a new run using the same inputs.
 *
 * @param id The unique identifier for the automation.
 * @param runId The unique identifier for the run.
 * @throws RetryAutomationRunHttpError
 */
declare const retryAutomationRun: (id: string, runId: string, options?: ApiCallOptions) => Promise<RetryAutomationRunHttpResponse>;
type RetryAutomationRunHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type RetryAutomationRunHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Force a run to be stopped immediately.
 *
 * @param id The unique identifier for the automation.
 * @param runId The unique identifier for the run.
 * @throws StopAutomationRunHttpError
 */
declare const stopAutomationRun: (id: string, runId: string, options?: ApiCallOptions) => Promise<StopAutomationRunHttpResponse>;
type StopAutomationRunHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type StopAutomationRunHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for automations api requests.
 */
declare function clearCache(): void;
interface AutomationsAPI {
    /**
     * Retrieves a list of automations
     *
     * @param query an object with query parameters
     * @throws GetAutomationsHttpError
     */
    getAutomations: typeof getAutomations;
    /**
     * Create an automation
     *
     * @param body an object with the body content
     * @throws CreateAutomationHttpError
     */
    createAutomation: typeof createAutomation;
    /**
     * @deprecated
     *
     * Retrieves the automation settings.
     *
     * @throws GetAutomationsSettingsHttpError
     */
    getAutomationsSettings: typeof getAutomationsSettings;
    /**
     * @deprecated
     *
     * Update the automation settings.
     *
     * @param body an object with the body content
     * @throws UpdateAutomationsSettingsHttpError
     */
    updateAutomationsSettings: typeof updateAutomationsSettings;
    /**
     * Retrieves all automation usage for a tenant
     *
     * @param query an object with query parameters
     * @throws GetAutomationsUsageMetricsHttpError
     */
    getAutomationsUsageMetrics: typeof getAutomationsUsageMetrics;
    /**
     * Delete an automation
     *
     * @param id The unique identifier for the automation.
     * @throws DeleteAutomationHttpError
     */
    deleteAutomation: typeof deleteAutomation;
    /**
     * Retrieves an automation
     *
     * @param id The unique identifier for the automation.
     * @param query an object with query parameters
     * @throws GetAutomationWithQueryHttpError
     */
    getAutomationWithQuery: typeof getAutomationWithQuery;
    /**
     * Retrieves an automation
     *
     * @param id The unique identifier for the automation.
     * @throws GetAutomationHttpError
     */
    getAutomation: typeof getAutomation;
    /**
     * Update an automation
     *
     * @param id The unique identifier for the automation.
     * @param body an object with the body content
     * @throws UpdateAutomationHttpError
     */
    updateAutomation: typeof updateAutomation;
    /**
     * Copy an automation.
     *
     * @param id The unique identifier for the automation.
     * @param body an object with the body content
     * @throws CopyAutomationHttpError
     */
    copyAutomation: typeof copyAutomation;
    /**
     * Disables an automation.
     *
     * @param id The unique identifier for the automation.
     * @throws DisableAutomationHttpError
     */
    disableAutomation: typeof disableAutomation;
    /**
     * Enable an automation.
     *
     * @param id The unique identifier for the automation.
     * @throws EnableAutomationHttpError
     */
    enableAutomation: typeof enableAutomation;
    /**
     * This step will remove the history and change logs of this automation. All linked connections used inside an automation will be detached.
     *
     * @param id The unique identifier for the automation.
     * @param body an object with the body content
     * @throws MoveAutomationHttpError
     */
    moveAutomation: typeof moveAutomation;
    /**
     * Retrieves a list of runs for a specific automation.
     *
     * @param id The unique identifier for the automation.
     * @param query an object with query parameters
     * @throws GetAutomationRunsHttpError
     */
    getAutomationRuns: typeof getAutomationRuns;
    /**
     * Create a run
     *
     * @param id The unique identifier for the automation.
     * @param body an object with the body content
     * @throws QueueAutomationRunHttpError
     */
    queueAutomationRun: typeof queueAutomationRun;
    /**
     * Retrieves a run
     *
     * @param id The unique identifier for the automation.
     * @param runId The unique identifier for the run.
     * @param query an object with query parameters
     * @throws GetAutomationRunWithQueryHttpError
     */
    getAutomationRunWithQuery: typeof getAutomationRunWithQuery;
    /**
     * Retrieves a run
     *
     * @param id The unique identifier for the automation.
     * @param runId The unique identifier for the run.
     * @throws GetAutomationRunHttpError
     */
    getAutomationRun: typeof getAutomationRun;
    /**
     * Creates a temporary pre-signed AWS S3 URL to download the raw logs of a completed run. This URL is valid for 5 minutes.
     *
     * @param id The unique identifier for the automation.
     * @param runId The unique identifier for the run.
     * @throws GetAutomationRunDetailsHttpError
     */
    getAutomationRunDetails: typeof getAutomationRunDetails;
    /**
     * This action allows you to retry a specific run by creating a new run using the same inputs.
     *
     * @param id The unique identifier for the automation.
     * @param runId The unique identifier for the run.
     * @throws RetryAutomationRunHttpError
     */
    retryAutomationRun: typeof retryAutomationRun;
    /**
     * Force a run to be stopped immediately.
     *
     * @param id The unique identifier for the automation.
     * @param runId The unique identifier for the run.
     * @throws StopAutomationRunHttpError
     */
    stopAutomationRun: typeof stopAutomationRun;
    /**
     * Clears the cache for automations api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the automations api
 */
declare const automationsExport: AutomationsAPI;

export { type AutomationDetailRequestObject, type AutomationDetailResponseObject, type AutomationList, type AutomationListObject, type AutomationUsageObject, type AutomationsAPI, type CopyAutomationHttpError, type CopyAutomationHttpResponse, type CreateAutomationHttpError, type CreateAutomationHttpResponse, type DeleteAutomationHttpError, type DeleteAutomationHttpResponse, type DisableAutomationHttpError, type DisableAutomationHttpResponse, type EnableAutomationHttpError, type EnableAutomationHttpResponse, type Error, type ErrorResponse, type GetAutomationHttpError, type GetAutomationHttpResponse, type GetAutomationRunDetailsHttpError, type GetAutomationRunDetailsHttpResponse, type GetAutomationRunHttpError, type GetAutomationRunHttpResponse, type GetAutomationRunWithQueryHttpError, type GetAutomationRunWithQueryHttpResponse, type GetAutomationRunsHttpError, type GetAutomationRunsHttpResponse, type GetAutomationWithQueryHttpError, type GetAutomationWithQueryHttpResponse, type GetAutomationsHttpError, type GetAutomationsHttpResponse, type GetAutomationsSettingsHttpError, type GetAutomationsSettingsHttpResponse, type GetAutomationsUsageMetricsHttpError, type GetAutomationsUsageMetricsHttpResponse, type Links, type MoveAutomationHttpError, type MoveAutomationHttpResponse, type PaginationLink, type QueueAutomationRunHttpError, type QueueAutomationRunHttpResponse, type RetryAutomationRunHttpError, type RetryAutomationRunHttpResponse, type RunDetailRequestObject, type RunDetailResponseObject, type RunList, type RunListObject, type ScheduleRequestObject, type ScheduleResponseObject, type SettingsObject, type StopAutomationRunHttpError, type StopAutomationRunHttpResponse, type UpdateAutomationHttpError, type UpdateAutomationHttpResponse, type UpdateAutomationsSettingsHttpError, type UpdateAutomationsSettingsHttpResponse, type UsageList, type UsageObject, clearCache, copyAutomation, createAutomation, automationsExport as default, deleteAutomation, disableAutomation, enableAutomation, getAutomation, getAutomationRun, getAutomationRunDetails, getAutomationRunWithQuery, getAutomationRuns, getAutomationWithQuery, getAutomations, getAutomationsSettings, getAutomationsUsageMetrics, moveAutomation, queueAutomationRun, retryAutomationRun, stopAutomationRun, updateAutomation, updateAutomationsSettings };
