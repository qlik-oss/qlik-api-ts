import { ApiCallOptions } from "./auth-types-BlCWK0FP.js";

//#region src/public/rest/tenants.d.ts

/**
 * An error object describing the error.
 */
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
/**
 * The error response object describing the error from the handling of an HTTP request.
 * @example
 * {
 *   errors: [
 *     {
 *       code: "TENANTS-8",
 *       title: "Not found"
 *     }
 *   ],
 *   traceId: "000000000000000079cf1ebeae103de1"
 * }
 */
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
  enableAppOpeningFeedback?: boolean;
  /** List of case insensitive hostnames that are mapped to the tenant. The first record maps to the display name and the subsequent entries are aliases. */
  hostnames?: string[];
  /** The unique tenant identifier. */
  readonly id: string;
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
  /** The region where the tenant is located. */
  readonly region?: string;
  /** The status of the tenant. */
  status?: "active" | "disabled" | "deleted";
};
type TenantCreationRequest = {
  /** The datacenter where the tenant is located.
   *
   * Supported locations for commercial licenses:
   * - `ap-northeast-1`: Japan (jp)
   * - `ap-southeast-1`: Australia (ap)
   * - `ap-southeast-2`: Singapore (sg)
   * - `eu-central-1`: Germany (de)
   * - `eu-west-1`: Ireland (eu)
   * - `eu-west-2`: United Kingdom (uk)
   * - `us-east-1`: United States of America (us) */
  datacenter?: string;
  /** The signed license key of the license that will be associated with the created tenant. */
  licenseKey?: string;
};
/**
 * A request to deactivate a tenant.
 */
type TenantDeactivateRequest = {
  /** Sets the number of days to purge the tenant after deactivation. Only available to OEMs. */
  purgeAfterDays?: number;
};
/**
 * The result of tenant deactivation.
 */
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
/**
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/name",
 *     value: "Corp"
 *   },
 *   {
 *     op: "replace",
 *     path: "/hostnames/1",
 *     value: "example-tenant.us.qlikcloud.com"
 *   },
 *   {
 *     op: "replace",
 *     path: "/autoAssignCreateSharedSpacesRoleToProfessionals",
 *     value: true
 *   },
 *   {
 *     op: "replace",
 *     path: "/autoAssignPrivateAnalyticsContentCreatorRoleToProfessionals",
 *     value: false
 *   },
 *   {
 *     op: "replace",
 *     path: "/autoAssignDataServicesContributorRoleToProfessionals",
 *     value: true
 *   },
 *   {
 *     op: "replace",
 *     path: "/enableAnalyticCreation",
 *     value: false
 *   }
 * ]
 */
type TenantPatchSchema = {
  /** The operation to be performed. */
  op: "replace";
  /** A JSON Pointer value that references a location within the target document where the operation is performed. */
  path: "/name" | "/hostnames/1" | "/autoAssignCreateSharedSpacesRoleToProfessionals" | "/autoAssignPrivateAnalyticsContentCreatorRoleToProfessionals" | "/autoAssignDataServicesContributorRoleToProfessionals" | "/enableAnalyticCreation" | "/enableAppOpeningFeedback";
  /** The value to be used for this operation. */
  value: string | boolean;
}[];
/**
 * Creates a tenant in the requested region, linked to the provided license key. You must use a regional OAuth client generated via the [My Qlik portal](https://account.myqlik.qlik.com/account) to call this endpoint. Tenant creation, deactivation, and reactivation requests must be sent to the register endpoint in the relevant Qlik Cloud region, e.g. `https://register.us.qlikcloud.com/api/v1/tenants` if interacting with tenants in the `us` region.
 *
 * @param body an object with the body content
 * @throws CreateTenantHttpError
 */
declare function createTenant(body: TenantCreationRequest, options?: ApiCallOptions): Promise<CreateTenantHttpResponse>;
type CreateTenantHttpResponse = {
  data: Tenant;
  headers: Headers;
  status: 201;
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
declare function getMyTenant(options?: ApiCallOptions): Promise<GetMyTenantHttpResponse>;
type GetMyTenantHttpResponse = {
  data: Tenant;
  headers: Headers;
  status: 200;
};
type GetMyTenantHttpError = {
  data: unknown;
  headers: Headers;
  status: number;
};
/**
 * Retrieves a specific tenant by ID.
 *
 * @param tenantId The ID of the tenant to retrieve
 * @throws GetTenantHttpError
 */
declare function getTenant(tenantId: string, options?: ApiCallOptions): Promise<GetTenantHttpResponse>;
type GetTenantHttpResponse = {
  data: Tenant;
  headers: Headers;
  status: 200;
};
type GetTenantHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Updates properties of a specific tenant by ID.
 *
 * @param tenantId The ID of the tenant to update
 * @param body an object with the body content
 * @throws PatchTenantHttpError
 */
declare function patchTenant(tenantId: string, body: TenantPatchSchema, options?: ApiCallOptions): Promise<PatchTenantHttpResponse>;
type PatchTenantHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchTenantHttpError = PatchTenant400HttpError | PatchTenant403HttpError | PatchTenant404HttpError | PatchTenant429HttpError | PatchTenantdefaultHttpError;
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
type PatchTenantdefaultHttpError = {
  data: Errors;
  headers: Headers;
  status: "default";
};
/**
 * Deactivates a specific tenant. Once deactivated, tenant will be deleted on or after `estimatedPurgeDate`. Tenant can be reactivated using `/v1/tenants/{tenantId}/actions/reactivate` until this date. You must use a regional OAuth client generated via the [My Qlik portal](https://account.myqlik.qlik.com/account) to call this endpoint. Tenant creation, deactivation, and reactivation requests must be sent to the register endpoint in the relevant Qlik Cloud region, e.g. `https://register.us.qlikcloud.com/api/v1/tenants/{tenantId}/actions/deactivate` if interacting with tenants in the `us` region.
 *
 * @param tenantId The id of the tenant to deactivate
 * @param body an object with the body content
 * @throws DeactivateTenantHttpError
 */
declare function deactivateTenant(tenantId: string, body: TenantDeactivateRequest, options?: ApiCallOptions): Promise<DeactivateTenantHttpResponse>;
type DeactivateTenantHttpResponse = {
  data: TenantDeactivateResponse;
  headers: Headers;
  status: 200;
};
type DeactivateTenantHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Reactivates a deactivated tenant. Tenants can be reactivated until the `estimatedPurgeDate` provided at time of deactivation. You must use a regional OAuth client generated via the [My Qlik portal](https://account.myqlik.qlik.com/account) to call this endpoint. Tenant creation, deactivation, and reactivation requests must be sent to the register endpoint in the relevant Qlik Cloud region, e.g. `https://register.us.qlikcloud.com/api/v1/tenants/{tenantId}/actions/reactivate` if interacting with tenants in the `us` region.
 *
 * @param tenantId The id of the tenant to reactivate
 * @param body an object with the body content
 * @throws ReactivateTenantHttpError
 */
declare function reactivateTenant(tenantId: string, body: unknown, options?: ApiCallOptions): Promise<ReactivateTenantHttpResponse>;
type ReactivateTenantHttpResponse = {
  data: unknown;
  headers: Headers;
  status: 200;
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
   * Creates a tenant in the requested region, linked to the provided license key. You must use a regional OAuth client generated via the [My Qlik portal](https://account.myqlik.qlik.com/account) to call this endpoint. Tenant creation, deactivation, and reactivation requests must be sent to the register endpoint in the relevant Qlik Cloud region, e.g. `https://register.us.qlikcloud.com/api/v1/tenants` if interacting with tenants in the `us` region.
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
   * Retrieves a specific tenant by ID.
   *
   * @param tenantId The ID of the tenant to retrieve
   * @throws GetTenantHttpError
   */
  getTenant: typeof getTenant;
  /**
   * Updates properties of a specific tenant by ID.
   *
   * @param tenantId The ID of the tenant to update
   * @param body an object with the body content
   * @throws PatchTenantHttpError
   */
  patchTenant: typeof patchTenant;
  /**
   * Deactivates a specific tenant. Once deactivated, tenant will be deleted on or after `estimatedPurgeDate`. Tenant can be reactivated using `/v1/tenants/{tenantId}/actions/reactivate` until this date. You must use a regional OAuth client generated via the [My Qlik portal](https://account.myqlik.qlik.com/account) to call this endpoint. Tenant creation, deactivation, and reactivation requests must be sent to the register endpoint in the relevant Qlik Cloud region, e.g. `https://register.us.qlikcloud.com/api/v1/tenants/{tenantId}/actions/deactivate` if interacting with tenants in the `us` region.
   *
   * @param tenantId The id of the tenant to deactivate
   * @param body an object with the body content
   * @throws DeactivateTenantHttpError
   */
  deactivateTenant: typeof deactivateTenant;
  /**
   * Reactivates a deactivated tenant. Tenants can be reactivated until the `estimatedPurgeDate` provided at time of deactivation. You must use a regional OAuth client generated via the [My Qlik portal](https://account.myqlik.qlik.com/account) to call this endpoint. Tenant creation, deactivation, and reactivation requests must be sent to the register endpoint in the relevant Qlik Cloud region, e.g. `https://register.us.qlikcloud.com/api/v1/tenants/{tenantId}/actions/reactivate` if interacting with tenants in the `us` region.
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
//#endregion
export { CreateTenantHttpError, CreateTenantHttpResponse, DeactivateTenantHttpError, DeactivateTenantHttpResponse, Error, Errors, GetMyTenantHttpError, GetMyTenantHttpResponse, GetTenantHttpError, GetTenantHttpResponse, PatchTenant400HttpError, PatchTenant403HttpError, PatchTenant404HttpError, PatchTenant429HttpError, PatchTenantHttpError, PatchTenantHttpResponse, PatchTenantdefaultHttpError, ReactivateTenantHttpError, ReactivateTenantHttpResponse, Tenant, TenantCreationRequest, TenantDeactivateRequest, TenantDeactivateResponse, TenantPatchErrors, TenantPatchSchema, TenantsAPI, clearCache, createTenant, deactivateTenant, getMyTenant, getTenant, patchTenant, reactivateTenant, tenantsExport };