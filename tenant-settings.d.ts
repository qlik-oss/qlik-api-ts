import { x as ApiCallOptions } from "./chunks/auth-types-yKuw6LLB.js";
import "./chunks/invoke-fetch-DdmiOIkr.js";
//#region src/public/rest/tenant-settings.d.ts
export type CustomizeNoAccess = {
  linkEnabled: boolean;
  linkLabel?: string;
  linkUrl?: string;
  message?: string;
};
export type Error = {
  errors?: {
    /** Error code. */
    readonly code?: number;
    /** Error cause. */
    readonly title?: string;
  }[];
};
export type ErrorResponse400 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
export type ErrorResponse401 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
export type ErrorResponse403 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
export type ErrorResponse500 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
export type JSONPatchRequestAddReplaceTest = {
  /** The operation to perform. */
  op: "add" | "replace" | "test";
  /** A JSON Pointer path. */
  path: string;
  /** The value to add, replace or test. */
  value: unknown;
};
export type JSONPatchRequestMoveCopy = {
  /** A JSON Pointer path. */
  from: string;
  /** The operation to perform. */
  op: "move" | "copy";
  /** A JSON Pointer path. */
  path: string;
};
export type JSONPatchRequestRemove = {
  /** The operation to perform. */
  op: "remove";
  /** A JSON Pointer path. */
  path: string;
};
export type PatchRequest = (JSONPatchRequestAddReplaceTest | JSONPatchRequestRemove | JSONPatchRequestMoveCopy)[];
/**
 * Set the release cadence
 */
export type ReleaseCadenceConfig = "monthly" | "continuous";
/**
 * Set to true to enable cross-region inference, false to disable. Defaults to false.
 */
export type SetCrossRegionDataProcessing = {
  /** Set to true to enable cross-region inference, false to disable. */
  value: SetCrossRegionDataProcessingConfig;
};
/**
 * Set to true to enable cross-region inference, false to disable.
 */
export type SetCrossRegionDataProcessingConfig = boolean;
export type StartPage = "analytics-hub" | "data-integration-hub" | "management-console" | "analytics-creation-hub";
export type StartPageConfigConsole = {
  route?: "/console";
  value?: "management-console";
};
export type StartPageConfigCreationHub = {
  route?: "/analytics";
  value?: "analytics-creation-hub";
};
export type StartPageConfigHub = {
  route?: "/insights";
  value?: "analytics-hub";
};
export type StartPageConfigQdi = {
  route?: "/qdi";
  value?: "data-integration-hub";
};
/**
 * Create a new tenant settings entry for the tenant ID specified in the JWT. At least one of preferredStartPage or customizeNoAccess must be provided.
 */
export type TenantSettingsCreateDefinition = {
  customizeNoAccess?: CustomizeNoAccess;
  preferredStartPage?: StartPage;
};
export type TenantSettingsDefinition = {
  readonly createdAt: string;
  /** userId of the user who created the settings */
  createdBy: string;
  /** Set to true to enable cross-region inference, false to disable. */
  crossRegionDataProcessing?: SetCrossRegionDataProcessingConfig;
  customizeNoAccess?: CustomizeNoAccess;
  readonly id: string;
  preferredStartPage?: StartPageConfigHub | StartPageConfigCreationHub | StartPageConfigQdi | StartPageConfigConsole;
  /** Set the release cadence */
  releaseCadence?: ReleaseCadenceConfig;
  /** Tenant-wide preference for opting out of session replay. When set, this value overrides individual user preferences. EU regions default to true (opted out) if this is not explicitly configured. */
  sessionReplayOptOut?: boolean;
  readonly tenantId: string;
  readonly updatedAt: string;
  /** userId of the user who last modified the settings */
  updatedBy?: string;
};
export type TenantStartPagesResponse = {
  defaultValue: "analytics-hub";
  values: (StartPageConfigHub | StartPageConfigCreationHub | StartPageConfigQdi)[];
};
/**
 * Deletes the tenant settings associated with the tenant ID specified in JWT. This is access controlled by the permission admin.tenant-settings:delete.
 *
 * @throws DeleteTenantSettingsHttpError
 */
export declare function deleteTenantSettings(options?: ApiCallOptions): Promise<DeleteTenantSettingsHttpResponse>;
export type DeleteTenantSettingsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteTenantSettingsHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};
/**
 * Retrieves tenant settings associated with the tenant ID specified in JWT. This is access controlled by the permission admin.tenant-settings:read.
 *
 * @throws GetTenantSettingsHttpError
 */
export declare function getTenantSettings(options?: ApiCallOptions): Promise<GetTenantSettingsHttpResponse>;
export type GetTenantSettingsHttpResponse = {
  data: TenantSettingsDefinition;
  headers: Headers;
  status: 200;
};
export type GetTenantSettingsHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};
/**
 * Updates existing tenant settings. This is access controlled by the permission admin.tenant-settings:update.
 *
 * @param body an object with the body content
 * @throws UpdateTenantSettingsHttpError
 */
export declare function updateTenantSettings(body: PatchRequest, options?: ApiCallOptions): Promise<UpdateTenantSettingsHttpResponse>;
export type UpdateTenantSettingsHttpResponse = {
  data: TenantSettingsDefinition;
  headers: Headers;
  status: 200;
};
export type UpdateTenantSettingsHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};
/**
 * Creates a new tenant settings entry for the tenant ID specified in the JWT. This is access controlled by the permission admin.tenant-settings:create.
 *
 * @param body an object with the body content
 * @throws CreateTenantSettingsHttpError
 */
export declare function createTenantSettings(body: TenantSettingsCreateDefinition, options?: ApiCallOptions): Promise<CreateTenantSettingsHttpResponse>;
export type CreateTenantSettingsHttpResponse = {
  data: TenantSettingsDefinition;
  headers: Headers;
  status: 201;
};
export type CreateTenantSettingsHttpError = CreateTenantSettings400HttpError | CreateTenantSettings401HttpError | CreateTenantSettings403HttpError | CreateTenantSettings500HttpError | CreateTenantSettingsdefaultHttpError;
export type CreateTenantSettings400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
export type CreateTenantSettings401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
export type CreateTenantSettings403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
export type CreateTenantSettings500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
export type CreateTenantSettingsdefaultHttpError = {
  data: Error;
  headers: Headers;
  status: "default";
};
/**
 * @deprecated
 *
 * Sets the cross region inference setting for the tenant. Creates tenant settings if none exist, or updates existing settings. This is access controlled by the permission `admin.tenant-settings:update`.
 * When cross-region processing is required, you must include an additional header `x-qlik-consent-verified: true` in your API requests to confirm that you have the authority to enable this feature and accept the associated terms.
 *
 * @param body an object with the body content
 * @throws ToggleCrossRegionDataProcessingTenantSettingsHttpError
 */
export declare function toggleCrossRegionDataProcessingTenantSettings(body: SetCrossRegionDataProcessing, options?: ApiCallOptions): Promise<ToggleCrossRegionDataProcessingTenantSettingsHttpResponse>;
export type ToggleCrossRegionDataProcessingTenantSettingsHttpResponse = {
  data: TenantSettingsDefinition;
  headers: Headers;
  status: 200;
};
export type ToggleCrossRegionDataProcessingTenantSettingsHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};
/**
 * Sets the cross-region inference setting for the tenant. Creates tenant settings if none exist, or updates existing settings. This is access controlled by the permission `admin.tenant-settings:update`.
 * When cross-region inference is required, you must include an additional header `x-qlik-consent-verified: true` in your API requests to confirm that you have the authority to enable this feature and accept the associated terms.
 *
 * @param body an object with the body content
 * @throws ToggleCrossRegionInferenceTenantSettingsHttpError
 */
export declare function toggleCrossRegionInferenceTenantSettings(body: SetCrossRegionDataProcessing, options?: ApiCallOptions): Promise<ToggleCrossRegionInferenceTenantSettingsHttpResponse>;
export type ToggleCrossRegionInferenceTenantSettingsHttpResponse = {
  data: TenantSettingsDefinition;
  headers: Headers;
  status: 200;
};
export type ToggleCrossRegionInferenceTenantSettingsHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};
/**
 * Retrieves start pages for the tenant settings.
 *
 * @throws GetStartPagesHttpError
 */
export declare function getStartPages(options?: ApiCallOptions): Promise<GetStartPagesHttpResponse>;
export type GetStartPagesHttpResponse = {
  data: TenantStartPagesResponse;
  headers: Headers;
  status: 200;
};
export type GetStartPagesHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};
/**
 * Clears the cache for tenant-settings api requests.
 */
export declare function clearCache(): void;
export type TenantSettingsAPI = {
  /**
   * Deletes the tenant settings associated with the tenant ID specified in JWT. This is access controlled by the permission admin.tenant-settings:delete.
   *
   * @throws DeleteTenantSettingsHttpError
   */
  deleteTenantSettings: typeof deleteTenantSettings;
  /**
   * Retrieves tenant settings associated with the tenant ID specified in JWT. This is access controlled by the permission admin.tenant-settings:read.
   *
   * @throws GetTenantSettingsHttpError
   */
  getTenantSettings: typeof getTenantSettings;
  /**
   * Updates existing tenant settings. This is access controlled by the permission admin.tenant-settings:update.
   *
   * @param body an object with the body content
   * @throws UpdateTenantSettingsHttpError
   */
  updateTenantSettings: typeof updateTenantSettings;
  /**
   * Creates a new tenant settings entry for the tenant ID specified in the JWT. This is access controlled by the permission admin.tenant-settings:create.
   *
   * @param body an object with the body content
   * @throws CreateTenantSettingsHttpError
   */
  createTenantSettings: typeof createTenantSettings;
  /**
   * @deprecated
   *
   * Sets the cross region inference setting for the tenant. Creates tenant settings if none exist, or updates existing settings. This is access controlled by the permission `admin.tenant-settings:update`.
   * When cross-region processing is required, you must include an additional header `x-qlik-consent-verified: true` in your API requests to confirm that you have the authority to enable this feature and accept the associated terms.
   *
   * @param body an object with the body content
   * @throws ToggleCrossRegionDataProcessingTenantSettingsHttpError
   */
  toggleCrossRegionDataProcessingTenantSettings: typeof toggleCrossRegionDataProcessingTenantSettings;
  /**
   * Sets the cross-region inference setting for the tenant. Creates tenant settings if none exist, or updates existing settings. This is access controlled by the permission `admin.tenant-settings:update`.
   * When cross-region inference is required, you must include an additional header `x-qlik-consent-verified: true` in your API requests to confirm that you have the authority to enable this feature and accept the associated terms.
   *
   * @param body an object with the body content
   * @throws ToggleCrossRegionInferenceTenantSettingsHttpError
   */
  toggleCrossRegionInferenceTenantSettings: typeof toggleCrossRegionInferenceTenantSettings;
  /**
   * Retrieves start pages for the tenant settings.
   *
   * @throws GetStartPagesHttpError
   */
  getStartPages: typeof getStartPages;
  /**
   * Clears the cache for tenant-settings api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the tenant-settings api
 */
declare const tenantSettingsExport: TenantSettingsAPI;
//#endregion
export { tenantSettingsExport as default };