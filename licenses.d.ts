import { A as ApiCallOptions } from './global.types-hIvp-WdX.js';
import './auth-types-nnUcWhuU.js';

type AssignmentsActionsAddRequest = {
    add: {
        /** User name */
        name?: string;
        /** User subject */
        subject: string;
        /** Allotment type */
        type: string;
        /** User ID */
        userId?: string;
    }[];
};
type AssignmentsActionsAddResponse = {
    data: {
        /** Error code */
        code?: string;
        /** Response status */
        status: number;
        /** Subject */
        subject: string;
        /** Error title */
        title?: string;
        /** Allotment type */
        type?: string;
    }[];
};
type AssignmentsActionsDeleteRequest = {
    delete: {
        /** User subject */
        subject: string;
        /** Allotment type */
        type: string;
    }[];
};
type AssignmentsActionsDeleteResponse = {
    data: {
        /** Error code */
        code?: string;
        /** Response status */
        status: number;
        /** Subject */
        subject?: string;
        /** Error title */
        title?: string;
        /** Allotment type */
        type?: string;
    }[];
};
type AssignmentsActionsUpdateRequest = {
    update: {
        /** Current assignment type. */
        sourceType: string;
        /** User subject */
        subject: string;
        /** Target assignment type. */
        type: string;
    }[];
};
type AssignmentsActionsUpdateResponse = {
    data: {
        /** Error code */
        code?: string;
        /** Current allotment type. */
        sourceType?: string;
        /** Response status */
        status: number;
        /** Subject */
        subject?: string;
        /** Error title */
        title?: string;
        /** Target allotment type. */
        type?: string;
    }[];
};
type AssignmentsResponse = {
    data: {
        /** Assignment created date. */
        created: string;
        /** Assignment excess status. */
        excess: boolean;
        /** Subject */
        subject: string;
        /** Allotment type */
        type: string;
        /** User ID */
        userId?: string;
    }[];
    links: {
        next?: Href;
        prev?: Href;
    };
};
type ConsumptionEventsResponse = {
    data: {
        /** Allotment ID */
        allotmentId?: string;
        /** App ID */
        appId?: string;
        /** Analyzer capacity chunks consumed. */
        capacityUsed?: number;
        /** Engine session duration. */
        duration?: string;
        /** Engine session end time. */
        endTime?: string;
        /** ID */
        id?: string;
        /** License usage */
        licenseUsage?: string;
        /** Analyzer capacity minutes consumed. */
        minutesUsed?: number;
        /** Engine session ID. */
        sessionId?: string;
        /** User ID */
        userId?: string;
    }[];
    links: {
        next?: Href;
        prev?: Href;
    };
};
type ErrorResponse = {
    /** Error type */
    error: string;
    errors: {
        /** Error code */
        code: string;
        /** Additional error detail. */
        detail?: string;
        /** Error title */
        title: string;
    }[];
    /** Error message */
    message: string;
};
type Href = {
    /** link */
    href?: string;
};
type LicenseOverview = {
    allotments: {
        name: "professional" | "analyzer" | "analyzer_time";
        /** Overage value; -1 means unbounded overage. */
        overage?: number;
        units: number;
        unitsUsed: number;
        usageClass: string;
    }[];
    /** An ISO 8601 timestamp for when the license was last changed. */
    changeTime?: string;
    /** An ISO 8601 timestamp for when the latest time the license has been known to be valid, a missing value indicates the indefinite future. */
    latestValidTime?: string;
    licenseKey: string;
    licenseNumber: string;
    licenseType?: string;
    /** Origin of license key. */
    origin: "Internal" | "External";
    /** The license parameters. */
    parameters: {
        /** Parameters for licenses to control access to the parameters. */
        access?: {
            /** Name of an allotment that the user must have access to. to */
            allotment?: string;
        };
        /** Parameter set (provision) name. */
        name: string;
        /** Time interval for parameter validity. */
        valid: string;
        /** Parameter values */
        values?: unknown;
    }[];
    /** The product the license is valid for. */
    product: string;
    /** The secondary number of a definition. */
    secondaryNumber: string;
    /** Enum with status of license. Only status Ok grants license. access. */
    status: "Ok" | "Blacklisted" | "Expired";
    /** Boolean indicating if it is a trial license. */
    trial: boolean;
    /** An ISO 8601 timestamp for when the license was last updated. */
    updated: string;
    /** Period that the license is currently set to be active. Represented as an ISO 8601 time interval with start and end. */
    valid: string;
};
type LicenseStatus = {
    /** Origin of license key. */
    origin: "Internal" | "External";
    /** The product the license is valid for. */
    product: string;
    /** Enum with status of license. Only status Ok grants license. access. */
    status: "Ok" | "Blacklisted" | "Expired" | "Missing";
    /** Boolean indicating if it is a trial license. */
    trial: boolean;
    /** Type of license key. */
    type: "Signed" | "Plain";
    /** Period that the license is currently set to be active. Represented as an ISO 8601 time interval with start and end. */
    valid: string;
};
type SettingsBody = {
    /** If analyzer users are available, they will be automatically assigned. Otherwise, analyzer capacity will be assigned, if available. */
    autoAssignAnalyzer?: boolean;
    /** If professional users are available, they will be automatically assigned. Otherwise, analyzer capacity will be assigned, if available. */
    autoAssignProfessional?: boolean;
};
/**
 * Retrieves assignments for the current tenant
 *
 * @param query an object with query parameters
 * @throws GetLicenseAssignmentsHttpError
 */
declare const getLicenseAssignments: (query: {
    /** The filter for finding entries. */
    filter?: string;
    /** The preferred number of entries to return. */
    limit?: number;
    /** Only return assignments which are 'orphans' in the current tenant. */
    orphans?: boolean;
    /** The requested page. */
    page?: string;
    /** The field to sort on; can be prefixed with +/- for ascending/descending sort order. */
    sort?: string;
}, options?: ApiCallOptions) => Promise<GetLicenseAssignmentsHttpResponse>;
type GetLicenseAssignmentsHttpResponse = {
    data: AssignmentsResponse;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetLicenseAssignmentsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetLicenseAssignmentsHttpResponse>;
};
type GetLicenseAssignmentsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Assigns license access to the given users
 *
 * @param body an object with the body content
 * @throws AddLicenseAssignmentsHttpError
 */
declare const addLicenseAssignments: (body: AssignmentsActionsAddRequest, options?: ApiCallOptions) => Promise<AddLicenseAssignmentsHttpResponse>;
type AddLicenseAssignmentsHttpResponse = {
    data: AssignmentsActionsAddResponse;
    headers: Headers;
    status: number;
};
type AddLicenseAssignmentsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Removes license access for the given users
 *
 * @param body an object with the body content
 * @throws DeleteLicenseAssignmentsHttpError
 */
declare const deleteLicenseAssignments: (body: AssignmentsActionsDeleteRequest, options?: ApiCallOptions) => Promise<DeleteLicenseAssignmentsHttpResponse>;
type DeleteLicenseAssignmentsHttpResponse = {
    data: AssignmentsActionsDeleteResponse;
    headers: Headers;
    status: number;
};
type DeleteLicenseAssignmentsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Updates license access for the given users
 *
 * @param body an object with the body content
 * @throws UpdateLicenseAssignmentsHttpError
 */
declare const updateLicenseAssignments: (body: AssignmentsActionsUpdateRequest, options?: ApiCallOptions) => Promise<UpdateLicenseAssignmentsHttpResponse>;
type UpdateLicenseAssignmentsHttpResponse = {
    data: AssignmentsActionsUpdateResponse;
    headers: Headers;
    status: number;
};
type UpdateLicenseAssignmentsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves license consumption for the current tenant
 *
 * @param query an object with query parameters
 * @throws GetLicenseConsumptionHttpError
 */
declare const getLicenseConsumption: (query: {
    /** The filter for finding entries. */
    filter?: string;
    /** The preferred number of entries to return. */
    limit?: number;
    /** The requested page. */
    page?: string;
    /** The field to sort on; can be prefixed with +/- for ascending/descending sort order. */
    sort?: string;
}, options?: ApiCallOptions) => Promise<GetLicenseConsumptionHttpResponse>;
type GetLicenseConsumptionHttpResponse = {
    data: ConsumptionEventsResponse;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetLicenseConsumptionHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetLicenseConsumptionHttpResponse>;
};
type GetLicenseConsumptionHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Gets the general information of the license applied to the current tenant
 *
 * @throws GetLicenseOverviewHttpError
 */
declare const getLicenseOverview: (options?: ApiCallOptions) => Promise<GetLicenseOverviewHttpResponse>;
type GetLicenseOverviewHttpResponse = {
    data: LicenseOverview;
    headers: Headers;
    status: number;
};
type GetLicenseOverviewHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Get auto assign settings for tenant.
 *
 * @throws GetLicenseSettingsHttpError
 */
declare const getLicenseSettings: (options?: ApiCallOptions) => Promise<GetLicenseSettingsHttpResponse>;
type GetLicenseSettingsHttpResponse = {
    data: SettingsBody;
    headers: Headers;
    status: number;
};
type GetLicenseSettingsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Set auto assign settings for tenant
 *
 * @param body an object with the body content
 * @throws UpdateLicenseSettingsHttpError
 */
declare const updateLicenseSettings: (body: SettingsBody, options?: ApiCallOptions) => Promise<UpdateLicenseSettingsHttpResponse>;
type UpdateLicenseSettingsHttpResponse = {
    data: SettingsBody;
    headers: Headers;
    status: number;
};
type UpdateLicenseSettingsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Gets the license status information of the current tenant
 *
 * @throws GetLicenseStatusHttpError
 */
declare const getLicenseStatus: (options?: ApiCallOptions) => Promise<GetLicenseStatusHttpResponse>;
type GetLicenseStatusHttpResponse = {
    data: LicenseStatus;
    headers: Headers;
    status: number;
};
type GetLicenseStatusHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for licenses api requests.
 */
declare function clearCache(): void;
interface LicensesAPI {
    /**
     * Retrieves assignments for the current tenant
     *
     * @param query an object with query parameters
     * @throws GetLicenseAssignmentsHttpError
     */
    getLicenseAssignments: typeof getLicenseAssignments;
    /**
     * Assigns license access to the given users
     *
     * @param body an object with the body content
     * @throws AddLicenseAssignmentsHttpError
     */
    addLicenseAssignments: typeof addLicenseAssignments;
    /**
     * Removes license access for the given users
     *
     * @param body an object with the body content
     * @throws DeleteLicenseAssignmentsHttpError
     */
    deleteLicenseAssignments: typeof deleteLicenseAssignments;
    /**
     * Updates license access for the given users
     *
     * @param body an object with the body content
     * @throws UpdateLicenseAssignmentsHttpError
     */
    updateLicenseAssignments: typeof updateLicenseAssignments;
    /**
     * Retrieves license consumption for the current tenant
     *
     * @param query an object with query parameters
     * @throws GetLicenseConsumptionHttpError
     */
    getLicenseConsumption: typeof getLicenseConsumption;
    /**
     * Gets the general information of the license applied to the current tenant
     *
     * @throws GetLicenseOverviewHttpError
     */
    getLicenseOverview: typeof getLicenseOverview;
    /**
     * Get auto assign settings for tenant.
     *
     * @throws GetLicenseSettingsHttpError
     */
    getLicenseSettings: typeof getLicenseSettings;
    /**
     * Set auto assign settings for tenant
     *
     * @param body an object with the body content
     * @throws UpdateLicenseSettingsHttpError
     */
    updateLicenseSettings: typeof updateLicenseSettings;
    /**
     * Gets the license status information of the current tenant
     *
     * @throws GetLicenseStatusHttpError
     */
    getLicenseStatus: typeof getLicenseStatus;
    /**
     * Clears the cache for licenses api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the licenses api
 */
declare const licensesExport: LicensesAPI;

export { type AddLicenseAssignmentsHttpError, type AddLicenseAssignmentsHttpResponse, type AssignmentsActionsAddRequest, type AssignmentsActionsAddResponse, type AssignmentsActionsDeleteRequest, type AssignmentsActionsDeleteResponse, type AssignmentsActionsUpdateRequest, type AssignmentsActionsUpdateResponse, type AssignmentsResponse, type ConsumptionEventsResponse, type DeleteLicenseAssignmentsHttpError, type DeleteLicenseAssignmentsHttpResponse, type ErrorResponse, type GetLicenseAssignmentsHttpError, type GetLicenseAssignmentsHttpResponse, type GetLicenseConsumptionHttpError, type GetLicenseConsumptionHttpResponse, type GetLicenseOverviewHttpError, type GetLicenseOverviewHttpResponse, type GetLicenseSettingsHttpError, type GetLicenseSettingsHttpResponse, type GetLicenseStatusHttpError, type GetLicenseStatusHttpResponse, type Href, type LicenseOverview, type LicenseStatus, type LicensesAPI, type SettingsBody, type UpdateLicenseAssignmentsHttpError, type UpdateLicenseAssignmentsHttpResponse, type UpdateLicenseSettingsHttpError, type UpdateLicenseSettingsHttpResponse, addLicenseAssignments, clearCache, licensesExport as default, deleteLicenseAssignments, getLicenseAssignments, getLicenseConsumption, getLicenseOverview, getLicenseSettings, getLicenseStatus, updateLicenseAssignments, updateLicenseSettings };
