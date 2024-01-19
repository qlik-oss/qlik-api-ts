import { A as ApiCallOptions } from './global.types-TzVhFPid.js';
import './auth-types-nnUcWhuU.js';

type Error = {
    /** The error code. */
    code: string;
    /** A human-readable explanation specific to this occurrence of the error. */
    detail?: string;
    /** Additional properties relating to the error. */
    meta?: unknown;
    /** References to the source of the error. */
    source?: {
        /** The URI query parameter that caused the error. */
        parameter?: string;
        /** A JSON Pointer to the property that caused the error. */
        pointer?: string;
    };
    /** The HTTP status code. */
    status: string;
    /** Summary of the problem. */
    title: string;
};
type Errors = {
    /** An array of errors related to the operation. */
    errors?: Error[];
    /** A unique identifier for tracing the error. */
    traceId?: string;
};
type Tenant = {
    autoAssignCreateSharedSpacesRoleToProfessionals?: boolean;
    autoAssignDataServicesContributorRoleToProfessionals?: boolean;
    autoAssignPrivateAnalyticsContentCreatorRoleToProfessionals?: boolean;
    /** The timestamp for when the tenant record was created (1970-01-01T00:00:00.001Z for static tenants). */
    readonly created?: string;
    /** The user ID who created the tenant. */
    createdByUser?: string;
    /** The datacenter where the tenant is located. */
    datacenter?: string;
    enableAnalyticCreation?: boolean;
    /** List of case insensitive hostnames that are mapped to the tenant. The first record maps to the display name and the subsequent entries are aliases. */
    hostnames?: string[];
    /** The timestamp for when the tenant record was last updated (1970-01-01T00:00:00.001Z for static tenants). */
    readonly lastUpdated?: string;
    readonly links?: {
        /** A link to this tenant. */
        self: {
            /** URL that defines the resource. */
            href: string;
        };
    };
    /** The display name of the tenant. */
    name: string;
    /** The status of the tenant. */
    status?: "active" | "disabled" | "deleted";
};
type TenantCreationRequest = {
    /** The datacenter where the tenant is located. */
    datacenter?: string;
    /** The signed license key of the license that will be associated with the created tenant. */
    licenseKey?: string;
};
type TenantDeactivateRequest = {
    /** Sets the number of days to purge the tenant after deactivation. Only available to OEMs. */
    purgeAfterDays?: number;
};
type TenantDeactivateResponse = {
    /** The estimated date time of when tenant will be purged. */
    estimatedPurgeDate?: string;
    /** The unique tenant identifier. */
    readonly id?: string;
    /** The status of the tenant. */
    status?: "disabled";
};
type TenantPatchErrors = {
    errors?: {
        /** The error code. */
        code: string;
        /** Additional properties relating to the error. */
        meta?: {
            /** The error code. */
            code?: string;
            /** Summary of the problem. */
            title?: string;
        };
        /** References to the source of the error. */
        source?: {
            /** The URI query parameter that caused the error. */
            parameter?: string;
            /** A JSON Pointer to the property that caused the error. */
            pointer?: string;
        };
        /** Summary of the problem. */
        title: string;
    }[];
};
type TenantPatchSchema = {
    /** The operation to be performed. */
    op: "replace";
    /** A JSON Pointer value that references a location within the target document where the operation is performed. */
    path: "/name" | "/hostnames/1" | "/autoAssignCreateSharedSpacesRoleToProfessionals" | "/autoAssignPrivateAnalyticsContentCreatorRoleToProfessionals" | "/autoAssignDataServicesContributorRoleToProfessionals" | "/enableAnalyticCreation";
    /** The value to be used for this operation. */
    value: string | boolean;
}[];
/**
 * Creates a Tenant
 *
 * @param body an object with the body content
 * @throws CreateTenantHttpError
 */
declare const createTenant: (body: TenantCreationRequest, options?: ApiCallOptions) => Promise<CreateTenantHttpResponse>;
type CreateTenantHttpResponse = {
    data: Tenant;
    headers: Headers;
    status: number;
};
type CreateTenantHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Redirects to current tenant.
 *
 * @throws GetMyTenantHttpError
 */
declare const getMyTenant: (options?: ApiCallOptions) => Promise<GetMyTenantHttpResponse>;
type GetMyTenantHttpResponse = {
    data: Tenant;
    headers: Headers;
    status: number;
};
type GetMyTenantHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Retrieve a single tenant by id.
 *
 * @param tenantId The id of the tenant to retrieve
 * @throws GetTenantHttpError
 */
declare const getTenant: (tenantId: string, options?: ApiCallOptions) => Promise<GetTenantHttpResponse>;
type GetTenantHttpResponse = {
    data: Tenant;
    headers: Headers;
    status: number;
};
type GetTenantHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Update a tenant by id.
 *
 * @param tenantId The id of the tenant to update
 * @param body an object with the body content
 * @throws PatchTenantHttpError
 */
declare const patchTenant: (tenantId: string, body: TenantPatchSchema, options?: ApiCallOptions) => Promise<PatchTenantHttpResponse>;
type PatchTenantHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchTenant400HttpError = {
    data: TenantPatchErrors;
    headers: Headers;
    status: 400;
};
type PatchTenant403HttpError = {
    data: Errors;
    headers: Headers;
    status: 403;
};
type PatchTenant404HttpError = {
    data: Errors;
    headers: Headers;
    status: 404;
};
type PatchTenant429HttpError = {
    data: Errors;
    headers: Headers;
    status: 429;
};
type PatchTenantDefaultHttpError = {
    data: Errors;
    headers: Headers;
    status: "default";
};
type PatchTenantHttpError = PatchTenant400HttpError | PatchTenant403HttpError | PatchTenant404HttpError | PatchTenant429HttpError | PatchTenantDefaultHttpError;
/**
 * Deactivates a tenant.
 *
 * @param tenantId The id of the tenant to deactivate
 * @param body an object with the body content
 * @throws DeactivateTenantHttpError
 */
declare const deactivateTenant: (tenantId: string, body: TenantDeactivateRequest, options?: ApiCallOptions) => Promise<DeactivateTenantHttpResponse>;
type DeactivateTenantHttpResponse = {
    data: TenantDeactivateResponse;
    headers: Headers;
    status: number;
};
type DeactivateTenantHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Reactivates a disabled tenant.
 *
 * @param tenantId The id of the tenant to reactivate
 * @param body an object with the body content
 * @throws ReactivateTenantHttpError
 */
declare const reactivateTenant: (tenantId: string, body: unknown, options?: ApiCallOptions) => Promise<ReactivateTenantHttpResponse>;
type ReactivateTenantHttpResponse = {
    data: unknown;
    headers: Headers;
    status: number;
};
type ReactivateTenantHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for tenants api requests.
 */
declare function clearCache(): void;
interface TenantsAPI {
    /**
     * Creates a Tenant
     *
     * @param body an object with the body content
     * @throws CreateTenantHttpError
     */
    createTenant: typeof createTenant;
    /**
     * Redirects to current tenant.
     *
     * @throws GetMyTenantHttpError
     */
    getMyTenant: typeof getMyTenant;
    /**
     * Retrieve a single tenant by id.
     *
     * @param tenantId The id of the tenant to retrieve
     * @throws GetTenantHttpError
     */
    getTenant: typeof getTenant;
    /**
     * Update a tenant by id.
     *
     * @param tenantId The id of the tenant to update
     * @param body an object with the body content
     * @throws PatchTenantHttpError
     */
    patchTenant: typeof patchTenant;
    /**
     * Deactivates a tenant.
     *
     * @param tenantId The id of the tenant to deactivate
     * @param body an object with the body content
     * @throws DeactivateTenantHttpError
     */
    deactivateTenant: typeof deactivateTenant;
    /**
     * Reactivates a disabled tenant.
     *
     * @param tenantId The id of the tenant to reactivate
     * @param body an object with the body content
     * @throws ReactivateTenantHttpError
     */
    reactivateTenant: typeof reactivateTenant;
    /**
     * Clears the cache for tenants api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the tenants api
 */
declare const tenantsExport: TenantsAPI;

export { type CreateTenantHttpError, type CreateTenantHttpResponse, type DeactivateTenantHttpError, type DeactivateTenantHttpResponse, type Error, type Errors, type GetMyTenantHttpError, type GetMyTenantHttpResponse, type GetTenantHttpError, type GetTenantHttpResponse, type PatchTenant400HttpError, type PatchTenant403HttpError, type PatchTenant404HttpError, type PatchTenant429HttpError, type PatchTenantDefaultHttpError, type PatchTenantHttpError, type PatchTenantHttpResponse, type ReactivateTenantHttpError, type ReactivateTenantHttpResponse, type Tenant, type TenantCreationRequest, type TenantDeactivateRequest, type TenantDeactivateResponse, type TenantPatchErrors, type TenantPatchSchema, type TenantsAPI, clearCache, createTenant, deactivateTenant, tenantsExport as default, getMyTenant, getTenant, patchTenant, reactivateTenant };
