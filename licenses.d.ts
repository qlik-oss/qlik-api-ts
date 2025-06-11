import { A as ApiCallOptions } from './invoke-fetch-types-BYCD4pc9.js';
import './auth-types-Cj5bM3Yk.js';

/**
 * @example
 * {
 *   add: [
 *     {
 *       subject: "qlik\kalle",
 *       type: "professional"
 *     },
 *     {
 *       subject: "qlik\nalle",
 *       type: "analyzer"
 *     }
 *   ]
 * }
 */
type AssignmentsActionsAddRequest = {
    add: {
        /** User name */
        name?: string;
        /** User subject */
        subject: string;
        /** Allotment type */
        type: string;
        /** @deprecated
         * User ID */
        userId?: string;
    }[];
};
/**
 * @example
 * {
 *   data: [
 *     {
 *       status: 201,
 *       subject: "qlik\kalle",
 *       type: "professional"
 *     },
 *     {
 *       code: "LICENSES-011",
 *       status: 403,
 *       subject: "qlik\nalle",
 *       title: "No available allotment error, No available allotment.",
 *       type: "analyzer"
 *     }
 *   ]
 * }
 */
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
/**
 * @example
 * {
 *   delete: [
 *     {
 *       subject: "qlik\malik",
 *       type: "analyzer"
 *     }
 *   ]
 * }
 */
type AssignmentsActionsDeleteRequest = {
    delete: {
        /** User subject */
        subject: string;
        /** Allotment type */
        type: string;
    }[];
};
/**
 * @example
 * {
 *   data: [
 *     {
 *       status: 200,
 *       subject: "qlik\malik",
 *       type: "professional"
 *     },
 *     {
 *       code: "LICENSES-016",
 *       status: 404,
 *       subject: "qlik\no",
 *       title: "Assignment not found.",
 *       type: "analyzer"
 *     }
 *   ]
 * }
 */
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
/**
 * @example
 * {
 *   update: [
 *     {
 *       sourceType: "analyzer",
 *       subject: "qlik\malik",
 *       type: "professional"
 *     }
 *   ]
 * }
 */
type AssignmentsActionsUpdateRequest = {
    update: {
        /** The current user subject, in case that should be patched. */
        sourceSubject?: string;
        /** Current assignment type. */
        sourceType?: string;
        /** User subject, the current or the desired after the patch. */
        subject: string;
        /** Target assignment type. */
        type?: string;
    }[];
};
/**
 * @example
 * {
 *   data: [
 *     {
 *       sourceType: "analyzer",
 *       status: 200,
 *       subject: "qlik\malik",
 *       type: "professional"
 *     },
 *     {
 *       code: "LICENSES-016",
 *       sourceType: "analyzer",
 *       status: 404,
 *       subject: "qlik/sara",
 *       title: "Assignment not found."
 *     }
 *   ]
 * }
 */
type AssignmentsActionsUpdateResponse = {
    data: {
        /** Error code */
        code?: string;
        /** Current subject. */
        sourceSubject?: string;
        /** Current allotment type. */
        sourceType?: string;
        /** HTTP status code indicating the result of the individual assignment operation. A value of 200 represents a successful update, while 201 indicates a new resource was created due to a subject update. Any 400-level status codes indicate an error. */
        status: number;
        /** Target subject. */
        subject?: string;
        /** Error title */
        title?: string;
        /** Target allotment type. */
        type?: string;
    }[];
};
/**
 * @example
 * {
 *   data: [
 *     {
 *       created: "2020-12-03T09:24:48.114Z",
 *       excess: false,
 *       subject: "qlik\kalle",
 *       type: "analyzer"
 *     },
 *     {
 *       created: "2020-12-03T09:24:48.114Z",
 *       subject: "qlik\nalle"
 *     }
 *   ],
 *   links: {
 *     next: {
 *       href: "http://license/v1/licenses/assignments?limit=4&page=bmV4dDpGZ0FBQUFkZmFXUUFYOHBUcTlpM1U4UU1YWHZrQUE%3D"
 *     },
 *     prev: {
 *       href: "http://license/v1/licenses/assignments?limit=4&page=cHJldjpGZ0FBQUFkZmFXUUFYOHBUcTlpM1U4UU1YWHZ0QUE%3D"
 *     }
 *   }
 * }
 */
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
/**
 * @example
 * {
 *   error: "util.Error",
 *   errors: [
 *     {
 *       code: "LICENSES-123",
 *       title: "error title"
 *     }
 *   ],
 *   message: "error message"
 * }
 */
type ErrorResponse = {
    /** @deprecated
     * Error type */
    error: string;
    errors: {
        /** Error code */
        code: string;
        /** Additional error detail. */
        detail?: string;
        /** Error title */
        title: string;
    }[];
    /** @deprecated
     * Error message */
    message: string;
};
type Href = {
    /** link */
    href?: string;
};
/**
 * @example
 * {
 *   allotments: [
 *     {
 *       name: "analyzer_time",
 *       overage: 100,
 *       units: 300,
 *       unitsUsed: 242,
 *       usageClass: "time"
 *     },
 *     {
 *       name: "professional",
 *       units: 200,
 *       unitsUsed: 15,
 *       usageClass: "assigned"
 *     }
 *   ],
 *   licenseKey: "hejhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IktFWTEifQ.eyJqdGkiOiIxZjZkZTc0Zi04MDcyLTRjMTQtYjc1OS02ZjlkYmJmYWM5MjAiLCJsaWNlbnNlIjoiOTk5OTAwMDAwMDAwMTIzNCJ9.fwa6l6gY1MR_Ja2OMnV65V68fbzQYW5OAKUFnLfG9oZjNAbjhdDkZvS2S2zHaBnSrSva1ARh5iq_S0KTBOKKcJJDTb7jRVURyaAvbCuBDk_0ITrUudHaT9U_Mc9EKkfT8mR6vthhZxVzEhyYPFS7gDw7M6bav2ntpDsoJFPgous",
 *   licenseNumber: "9999000000001204",
 *   origin: "Internal",
 *   parameters: [
 *     {
 *       name: "qlikAlerting",
 *       valid: "./.",
 *       values: {
 *         "saas_alerting": "FULL"
 *       }
 *     }
 *   ],
 *   product: "Qlik Sense Enterprise SaaS",
 *   secondaryNumber: "12345",
 *   status: "Ok",
 *   trial: false,
 *   valid: "2018-01-01/2018-12-31"
 * }
 */
type LicenseOverview = {
    allotments: {
        name: "professional" | "analyzer" | "analyzer_time";
        /** Overage value; -1 means unbounded overage. */
        overage?: number;
        units: number;
        unitsUsed: number;
        usageClass: string;
    }[];
    /** the capability bank id */
    capabilityBankId?: string;
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
    /** the parent number of the license. can be shared by multiple license numbers */
    parentLicenseNumber?: string;
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
/**
 * @example
 * {
 *   extensionStatus: "Unavailable",
 *   origin: "Internal",
 *   product: "Qlik Sense Business",
 *   status: "Ok",
 *   trial: false,
 *   type: "Signed",
 *   valid: "2018-01-01/2018-12-31"
 * }
 */
type LicenseStatus = {
    /** Enum with extension status of license. access. */
    extensionStatus: "Unavailable" | "Pending" | "Available";
    /** Origin of license key. */
    origin: "Internal" | "External";
    /** The product the license is valid for. */
    product: string;
    /** Enum with status of license. Only status Ok grants license. access. */
    status: "Ok" | "Blacklisted" | "Expired" | "Missing";
    /** Boolean indicating if it is a trial license. */
    trial: boolean;
    /** Type of license key. */
    type: "Signed" | "Plain" | 2;
    /** Period that the license is currently set to be active. Represented as an ISO 8601 time interval with start and end. */
    valid: string;
};
/**
 * @example
 * {
 *   autoAssignAnalyzer: true,
 *   autoAssignProfessional: false
 * }
 */
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
declare function getLicenseAssignments(query: {
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
}, options?: ApiCallOptions): Promise<GetLicenseAssignmentsHttpResponse>;
type GetLicenseAssignmentsHttpResponse = {
    data: AssignmentsResponse;
    headers: Headers;
    status: 200;
    prev?: (options?: ApiCallOptions) => Promise<GetLicenseAssignmentsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetLicenseAssignmentsHttpResponse>;
};
type GetLicenseAssignmentsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403;
};
/**
 * Assigns license access to the given users
 *
 * @param body an object with the body content
 * @throws AddLicenseAssignmentsHttpError
 */
declare function addLicenseAssignments(body: AssignmentsActionsAddRequest, options?: ApiCallOptions): Promise<AddLicenseAssignmentsHttpResponse>;
type AddLicenseAssignmentsHttpResponse = {
    data: AssignmentsActionsAddResponse;
    headers: Headers;
    status: 207;
};
type AddLicenseAssignmentsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403;
};
/**
 * Removes license access for the given users
 *
 * @param body an object with the body content
 * @throws DeleteLicenseAssignmentsHttpError
 */
declare function deleteLicenseAssignments(body: AssignmentsActionsDeleteRequest, options?: ApiCallOptions): Promise<DeleteLicenseAssignmentsHttpResponse>;
type DeleteLicenseAssignmentsHttpResponse = {
    data: AssignmentsActionsDeleteResponse;
    headers: Headers;
    status: 207;
};
type DeleteLicenseAssignmentsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403;
};
/**
 * Updates license access for the given users
 *
 * @param body an object with the body content
 * @throws UpdateLicenseAssignmentsHttpError
 */
declare function updateLicenseAssignments(body: AssignmentsActionsUpdateRequest, options?: ApiCallOptions): Promise<UpdateLicenseAssignmentsHttpResponse>;
type UpdateLicenseAssignmentsHttpResponse = {
    data: AssignmentsActionsUpdateResponse;
    headers: Headers;
    status: 207;
};
type UpdateLicenseAssignmentsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403;
};
/**
 * Retrieves license consumption for the current tenant
 *
 * @param query an object with query parameters
 * @throws GetLicenseConsumptionHttpError
 */
declare function getLicenseConsumption(query: {
    /** The SCIM filter for the query. Filterable property is "endTime". */
    filter?: string;
    /** The preferred number of entries to return. */
    limit?: number;
    /** The requested page. */
    page?: string;
    /** The field to sort on; can be prefixed with +/- for ascending/descending sort order. */
    sort?: string;
}, options?: ApiCallOptions): Promise<GetLicenseConsumptionHttpResponse>;
type GetLicenseConsumptionHttpResponse = {
    data: ConsumptionEventsResponse;
    headers: Headers;
    status: 200;
    prev?: (options?: ApiCallOptions) => Promise<GetLicenseConsumptionHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetLicenseConsumptionHttpResponse>;
};
type GetLicenseConsumptionHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403;
};
/**
 * Gets the general information of the license applied to the current tenant
 *
 * @throws GetLicenseOverviewHttpError
 */
declare function getLicenseOverview(options?: ApiCallOptions): Promise<GetLicenseOverviewHttpResponse>;
type GetLicenseOverviewHttpResponse = {
    data: LicenseOverview;
    headers: Headers;
    status: 200;
};
type GetLicenseOverviewHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 404;
};
/**
 * Get auto assign settings for tenant.
 *
 * @throws GetLicenseSettingsHttpError
 */
declare function getLicenseSettings(options?: ApiCallOptions): Promise<GetLicenseSettingsHttpResponse>;
type GetLicenseSettingsHttpResponse = {
    data: SettingsBody;
    headers: Headers;
    status: 200;
};
type GetLicenseSettingsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403;
};
/**
 * Set auto assign settings for tenant
 *
 * @param body an object with the body content
 * @throws UpdateLicenseSettingsHttpError
 */
declare function updateLicenseSettings(body: SettingsBody, options?: ApiCallOptions): Promise<UpdateLicenseSettingsHttpResponse>;
type UpdateLicenseSettingsHttpResponse = {
    data: SettingsBody;
    headers: Headers;
    status: 200;
};
type UpdateLicenseSettingsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403;
};
/**
 * Gets the license status information of the current tenant
 *
 * @throws GetLicenseStatusHttpError
 */
declare function getLicenseStatus(options?: ApiCallOptions): Promise<GetLicenseStatusHttpResponse>;
type GetLicenseStatusHttpResponse = {
    data: LicenseStatus;
    headers: Headers;
    status: 200;
};
type GetLicenseStatusHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401;
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
