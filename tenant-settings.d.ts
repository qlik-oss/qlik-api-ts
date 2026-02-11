import { ApiCallOptions } from "./invoke-fetch-types.js";
import "./chunks/invoke-fetch-DFc3yzaj.js";

//#region src/public/rest/tenant-settings.d.ts
type CustomizeNoAccess = {
  linkEnabled: boolean;
  linkLabel?: string;
  linkUrl?: string;
  message?: string;
};
type Error = {
  errors?: {
    /** Error code. */readonly code?: number; /** Error cause. */
    readonly title?: string;
  }[];
};
type ErrorResponse400 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
type ErrorResponse401 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
type ErrorResponse403 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
type ErrorResponse500 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
type JSONPatchRequestAddReplaceTest = {
  /** The operation to perform. */op: "add" | "replace" | "test"; /** A JSON Pointer path. */
  path: string; /** The value to add, replace or test. */
  value: unknown;
};
type JSONPatchRequestMoveCopy = {
  /** A JSON Pointer path. */from: string; /** The operation to perform. */
  op: "move" | "copy"; /** A JSON Pointer path. */
  path: string;
};
type JSONPatchRequestRemove = {
  /** The operation to perform. */op: "remove"; /** A JSON Pointer path. */
  path: string;
};
type PatchRequest = (JSONPatchRequestAddReplaceTest | JSONPatchRequestRemove | JSONPatchRequestMoveCopy)[];
/**
 * Set the release cadence
 */
type ReleaseCadenceConfig = "monthly" | "continuous";
/**
 * Set to true to enable cross-region inference, false to disable. Defaults to false.
 */
type SetCrossRegionDataProcessing = {
  /** Set to true to enable cross-region inference, false to disable. */value: SetCrossRegionDataProcessingConfig;
};
/**
 * Set to true to enable cross-region inference, false to disable.
 */
type SetCrossRegionDataProcessingConfig = boolean;
type StartPage = "analytics-hub" | "data-integration-hub" | "management-console";
type StartPageConfigConsole = {
  route?: "/console";
  value?: "management-console";
};
type StartPageConfigCreationHub = {
  route?: "/analytics";
  value?: "analytics-creation-hub";
};
type StartPageConfigHub = {
  route?: "/insights";
  value?: "analytics-hub";
};
type StartPageConfigQdi = {
  route?: "/qdi";
  value?: "data-integration-hub";
};
/**
 * Create a new tenant settings entry for the tenant ID specified in the JWT. At least one of preferredStartPage or customizeNoAccess must be provided.
 */
type TenantSettingsCreateDefinition = {
  customizeNoAccess?: CustomizeNoAccess;
  preferredStartPage?: StartPage;
};
type TenantSettingsDefinition = {
  readonly createdAt: string; /** userId of the user who created the settings */
  createdBy: string; /** Set to true to enable cross-region inference, false to disable. */
  crossRegionDataProcessing?: SetCrossRegionDataProcessingConfig;
  customizeNoAccess?: CustomizeNoAccess;
  readonly id: string;
  preferredStartPage?: StartPageConfigHub | StartPageConfigCreationHub | StartPageConfigQdi | StartPageConfigConsole; /** Set the release cadence */
  releaseCadence?: ReleaseCadenceConfig;
  readonly tenantId: string;
  readonly updatedAt: string; /** userId of the user who last modified the settings */
  updatedBy?: string;
};
type TenantStartPagesResponse = {
  defaultValue: "analytics-hub";
  values: (StartPageConfigHub | StartPageConfigCreationHub | StartPageConfigQdi)[];
};
/**
 * Deletes the tenant settings associated with the tenant ID specified in JWT. This is access controlled by the permission admin.tenant-settings:delete.
 *
 * @throws DeleteTenantSettingsHttpError
 */
declare function deleteTenantSettings(options?: ApiCallOptions): Promise<DeleteTenantSettingsHttpResponse>;
type DeleteTenantSettingsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteTenantSettingsHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};
/**
 * Retrieves tenant settings associated with the tenant ID specified in JWT. This is access controlled by the permission admin.tenant-settings:read.
 *
 * @throws GetTenantSettingsHttpError
 */
declare function getTenantSettings(options?: ApiCallOptions): Promise<GetTenantSettingsHttpResponse>;
type GetTenantSettingsHttpResponse = {
  data: TenantSettingsDefinition;
  headers: Headers;
  status: 200;
};
type GetTenantSettingsHttpError = {
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
declare function updateTenantSettings(body: PatchRequest, options?: ApiCallOptions): Promise<UpdateTenantSettingsHttpResponse>;
type UpdateTenantSettingsHttpResponse = {
  data: TenantSettingsDefinition;
  headers: Headers;
  status: 200;
};
type UpdateTenantSettingsHttpError = {
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
declare function createTenantSettings(body: TenantSettingsCreateDefinition, options?: ApiCallOptions): Promise<CreateTenantSettingsHttpResponse>;
type CreateTenantSettingsHttpResponse = {
  data: TenantSettingsDefinition;
  headers: Headers;
  status: 201;
};
type CreateTenantSettingsHttpError = CreateTenantSettings400HttpError | CreateTenantSettings401HttpError | CreateTenantSettings403HttpError | CreateTenantSettings500HttpError | CreateTenantSettingsdefaultHttpError;
type CreateTenantSettings400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type CreateTenantSettings401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type CreateTenantSettings403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type CreateTenantSettings500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
type CreateTenantSettingsdefaultHttpError = {
  data: Error;
  headers: Headers;
  status: "default";
};
/**
 * Sets the cross region inference setting for the tenant. Creates tenant settings if none exist, or updates existing settings. This is access controlled by the permission admin.tenant-settings:update.
 * When cross-region processing is required, you must include an additional header x-qlik-consent-verified: true in your API requests to confirm that you have the authority to enable this feature and accept the associated terms.
 *
 * @param body an object with the body content
 * @throws ToggleCrossRegionDataProcessingTenantSettingsHttpError
 */
declare function toggleCrossRegionDataProcessingTenantSettings(body: SetCrossRegionDataProcessing, options?: ApiCallOptions): Promise<ToggleCrossRegionDataProcessingTenantSettingsHttpResponse>;
type ToggleCrossRegionDataProcessingTenantSettingsHttpResponse = {
  data: TenantSettingsDefinition;
  headers: Headers;
  status: 200;
};
type ToggleCrossRegionDataProcessingTenantSettingsHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};
/**
 * Retrieves start pages for the tenant settings.
 *
 * @throws GetStartPagesHttpError
 */
declare function getStartPages(options?: ApiCallOptions): Promise<GetStartPagesHttpResponse>;
type GetStartPagesHttpResponse = {
  data: TenantStartPagesResponse;
  headers: Headers;
  status: 200;
};
type GetStartPagesHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};
/**
 * Clears the cache for tenant-settings api requests.
 */
declare function clearCache(): void;
type TenantSettingsAPI = {
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
   * Sets the cross region inference setting for the tenant. Creates tenant settings if none exist, or updates existing settings. This is access controlled by the permission admin.tenant-settings:update.
   * When cross-region processing is required, you must include an additional header x-qlik-consent-verified: true in your API requests to confirm that you have the authority to enable this feature and accept the associated terms.
   *
   * @param body an object with the body content
   * @throws ToggleCrossRegionDataProcessingTenantSettingsHttpError
   */
  toggleCrossRegionDataProcessingTenantSettings: typeof toggleCrossRegionDataProcessingTenantSettings;
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
export { CreateTenantSettings400HttpError, CreateTenantSettings401HttpError, CreateTenantSettings403HttpError, CreateTenantSettings500HttpError, CreateTenantSettingsHttpError, CreateTenantSettingsHttpResponse, CreateTenantSettingsdefaultHttpError, CustomizeNoAccess, DeleteTenantSettingsHttpError, DeleteTenantSettingsHttpResponse, Error, ErrorResponse400, ErrorResponse401, ErrorResponse403, ErrorResponse500, GetStartPagesHttpError, GetStartPagesHttpResponse, GetTenantSettingsHttpError, GetTenantSettingsHttpResponse, JSONPatchRequestAddReplaceTest, JSONPatchRequestMoveCopy, JSONPatchRequestRemove, PatchRequest, ReleaseCadenceConfig, SetCrossRegionDataProcessing, SetCrossRegionDataProcessingConfig, StartPage, StartPageConfigConsole, StartPageConfigCreationHub, StartPageConfigHub, StartPageConfigQdi, TenantSettingsAPI, TenantSettingsCreateDefinition, TenantSettingsDefinition, TenantStartPagesResponse, ToggleCrossRegionDataProcessingTenantSettingsHttpError, ToggleCrossRegionDataProcessingTenantSettingsHttpResponse, UpdateTenantSettingsHttpError, UpdateTenantSettingsHttpResponse, clearCache, createTenantSettings, tenantSettingsExport as default, deleteTenantSettings, getStartPages, getTenantSettings, toggleCrossRegionDataProcessingTenantSettings, updateTenantSettings };