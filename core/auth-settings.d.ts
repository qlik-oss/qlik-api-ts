import { x as ApiCallOptions } from "../chunks/auth-types-DjJJgiRF.js";
declare namespace auth_settings_d_exports {
  export { AuthSettingsAPI, AuthSettingsJSONPatch, AuthSettingsJSONPatchArray, AuthSettingsResource, Error, Errors, GetAuthSettingsHttpError, GetAuthSettingsHttpResponse, PatchAuthSettingsHttpError, PatchAuthSettingsHttpResponse, clearCache, authSettingsExport as default, getAuthSettings, patchAuthSettings };
}
/**
 * A JSON Patch document for authentication settings as defined in http://tools.ietf.org/html/rfc6902.
 */
type AuthSettingsJSONPatch = {
  /** The operation to be performed. */op: "replace"; /** A JSON Pointer to the authentication settings field. */
  path: "/userSessionInactivityTimeoutMinutes" | "/maxUserSessionLifespanMinutes"; /** Integer value in minutes to set for the targeted authentication settings field. For `maxUserSessionLifespanMinutes`, the value must be a whole number of hours (divisible by 60). */
  value: number;
};
/**
 * An array of JSON Patch documents for authentication settings.
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/userSessionInactivityTimeoutMinutes",
 *     value: 60
 *   },
 *   {
 *     op: "replace",
 *     path: "/maxUserSessionLifespanMinutes",
 *     value: 1440
 *   }
 * ]
 */
type AuthSettingsJSONPatchArray = AuthSettingsJSONPatch[];
/**
 * The authentication settings for a tenant, controlling user session duration and inactivity behavior.
 */
type AuthSettingsResource = {
  /** The unique identifier for the authentication settings. */readonly id?: string; /** `true` if the authentication settings are using tenant-wide defaults. No custom values have been saved for this tenant. */
  readonly isDefault?: boolean; /** Maximum total lifespan for a user session, in minutes. Sessions are invalidated after this duration regardless of activity. */
  maxUserSessionLifespanMinutes: number; /** The tenant unique identifier associated with the authentication settings. */
  readonly tenantId: string; /** Maximum inactivity period for a user session, in minutes. Sessions that have been idle for longer than this value are invalidated. */
  userSessionInactivityTimeoutMinutes: number;
};
/**
 * An error object describing the error.
 */
type Error = {
  /** The error code. */code: string; /** A human-readable explanation specific to this occurrence of the problem. */
  detail?: string; /** Additional properties relating to the error. */
  meta?: unknown; /** References to the source of the error. */
  source?: {
    /** The URI query parameter that caused the error. */parameter?: string; /** A JSON Pointer to the property that caused the error. */
    pointer?: string;
  }; /** Summary of the problem. */
  title: string;
};
/**
 * The error response object describing the error from the handling of an HTTP request.
 * @example
 * {
 *   errors: [
 *     {
 *       code: "CODE-10402",
 *       title: "Not Found"
 *     }
 *   ],
 *   traceId: "0000000000000000200ba0714061b982"
 * }
 */
type Errors = {
  /** An array of errors related to the operation. */errors?: Error[]; /** A unique identifier for tracing the error. */
  traceId?: string;
};
/**
 * Returns the authentication settings for the tenant, including the session inactivity timeout and maximum session lifespan. If no custom values have been saved, the response reflects tenant-wide defaults with `isDefault` set to `true`. The user must be assigned the `TenantAdmin` role.
 *
 * @throws GetAuthSettingsHttpError
 */
declare function getAuthSettings(options?: ApiCallOptions): Promise<GetAuthSettingsHttpResponse>;
type GetAuthSettingsHttpResponse = {
  data: AuthSettingsResource;
  headers: Headers;
  status: 200;
};
type GetAuthSettingsHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 429 | 500;
};
/**
 * Updates one or more authentication settings for the tenant using JSON Patch (RFC 6902). Supports `replace` operations on `/userSessionInactivityTimeoutMinutes` and `/maxUserSessionLifespanMinutes`. The value for `maxUserSessionLifespanMinutes` must be a whole number of hours (divisible by 60). The user must be assigned the `TenantAdmin` role.
 *
 * @param body an object with the body content
 * @throws PatchAuthSettingsHttpError
 */
declare function patchAuthSettings(body: AuthSettingsJSONPatchArray, options?: ApiCallOptions): Promise<PatchAuthSettingsHttpResponse>;
type PatchAuthSettingsHttpResponse = {
  data: AuthSettingsResource;
  headers: Headers;
  status: 200;
};
type PatchAuthSettingsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429 | 500;
};
/**
 * Clears the cache for core/auth-settings api requests.
 */
declare function clearCache(): void;
type AuthSettingsAPI = {
  /**
   * Returns the authentication settings for the tenant, including the session inactivity timeout and maximum session lifespan. If no custom values have been saved, the response reflects tenant-wide defaults with `isDefault` set to `true`. The user must be assigned the `TenantAdmin` role.
   *
   * @throws GetAuthSettingsHttpError
   */
  getAuthSettings: typeof getAuthSettings;
  /**
   * Updates one or more authentication settings for the tenant using JSON Patch (RFC 6902). Supports `replace` operations on `/userSessionInactivityTimeoutMinutes` and `/maxUserSessionLifespanMinutes`. The value for `maxUserSessionLifespanMinutes` must be a whole number of hours (divisible by 60). The user must be assigned the `TenantAdmin` role.
   *
   * @param body an object with the body content
   * @throws PatchAuthSettingsHttpError
   */
  patchAuthSettings: typeof patchAuthSettings;
  /**
   * Clears the cache for auth-settings api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the auth-settings api
 */
declare const authSettingsExport: AuthSettingsAPI;
//#endregion
export { AuthSettingsAPI, AuthSettingsJSONPatch, AuthSettingsJSONPatchArray, AuthSettingsResource, Error, Errors, GetAuthSettingsHttpError, GetAuthSettingsHttpResponse, PatchAuthSettingsHttpError, PatchAuthSettingsHttpResponse, clearCache, authSettingsExport as default, getAuthSettings, patchAuthSettings, auth_settings_d_exports as t };