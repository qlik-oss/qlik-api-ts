import { x as ApiCallOptions } from "../chunks/auth-types-BAiSvIRn.js";
declare namespace odag_settings_d_exports {
  export { CanUpdateSettings, ErrorDetailsV2, ErrorV2, GetOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAMEHttpError, GetOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAMEHttpResponse, GetOdagSettingsHttpError, GetOdagSettingsHttpResponse, MetaV2, OdagSettingsAPI, OdagSettingsV2, PutOdagSettings_FIX_THIS_QUIRKY_NAMEHttpError, PutOdagSettings_FIX_THIS_QUIRKY_NAMEHttpResponse, SettingsPutPayload, clearCache, odagSettingsExport as default, getOdagSettings, getOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAME, putOdagSettings_FIX_THIS_QUIRKY_NAME };
}
/**
 * An object used to inform the caller whether the current user has privilege to update ODAG settings.
 */
type CanUpdateSettings = {
  canUpdateSettings?: boolean;
};
/**
 * A single error entry within an error response.
 */
type ErrorDetailsV2 = {
  /** A unique code used to identify the template form of the message in i18n tables (language independent). */code?: string; /** The message describing the error. */
  detail?: string; /** Additional metadata associated with an error. */
  meta?: MetaV2;
  title?: string;
};
/**
 * A standard error response containing a list of one or more errors.
 */
type ErrorV2 = {
  errors?: ErrorDetailsV2[]; /** A unique ID of the trace which the error occurred in. Makes it possible to locate involved services and find log messages from the time of the error. */
  traceId?: string;
};
/**
 * Additional metadata associated with an error.
 */
type MetaV2 = {
  /** The HTTP status code for the error. Generally speaking, the following codes have these meanings: `200` - Success, `201` - Success (object created), `400` - Error with user input, `403` - Authorization error (user lacks permission), `404` - Object not found, `409` - Attempt to change an object using an obsolete last ModifiedDate. */statusCode?: number;
};
/**
 * The state of the ODAG settings available for users assigned the `TenantAdmin` role to view and configure.
 */
type OdagSettingsV2 = {
  /** Whether the dynamic view feature is enabled. */dynamicViewEnabled?: boolean; /** Whether the ODAG feature is enabled. */
  odagEnabled?: boolean;
};
/**
 * An object that defines the properties of ODAG settings to be modified.
 */
type SettingsPutPayload = {
  dynamicViewEnabled?: boolean;
  odagEnabled?: boolean;
};
/**
 * Retrieves ODAG settings, including feature enablement status. Available only to administrators.
 *
 * @throws GetOdagSettingsHttpError
 */
declare function getOdagSettings(options?: ApiCallOptions): Promise<GetOdagSettingsHttpResponse>;
type GetOdagSettingsHttpResponse = {
  data: OdagSettingsV2;
  headers: Headers;
  status: 200;
};
type GetOdagSettingsHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 403 | 500;
};
/**
 * Modifies ODAG settings such as feature enablement. Available only to administrators. Changes apply immediately to all ODAG operations.
 *
 * @param body an object with the body content
 * @throws PutOdagSettings_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function putOdagSettings_FIX_THIS_QUIRKY_NAME(body: SettingsPutPayload, options?: ApiCallOptions): Promise<PutOdagSettings_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type PutOdagSettings_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: OdagSettingsV2;
  headers: Headers;
  status: 200;
};
type PutOdagSettings_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 403 | 500;
};
/**
 * Checks whether the current user has permission to modify ODAG settings.
 *
 * @throws GetOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAMEHttpError
 */
declare function getOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAME(options?: ApiCallOptions): Promise<GetOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAMEHttpResponse>;
type GetOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: CanUpdateSettings;
  headers: Headers;
  status: 200;
};
type GetOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 403;
};
/**
 * Clears the cache for analytics/odag-settings api requests.
 */
declare function clearCache(): void;
type OdagSettingsAPI = {
  /**
   * Retrieves ODAG settings, including feature enablement status. Available only to administrators.
   *
   * @throws GetOdagSettingsHttpError
   */
  getOdagSettings: typeof getOdagSettings;
  /**
   * Modifies ODAG settings such as feature enablement. Available only to administrators. Changes apply immediately to all ODAG operations.
   *
   * @param body an object with the body content
   * @throws PutOdagSettings_FIX_THIS_QUIRKY_NAMEHttpError
   */
  putOdagSettings_FIX_THIS_QUIRKY_NAME: typeof putOdagSettings_FIX_THIS_QUIRKY_NAME;
  /**
   * Checks whether the current user has permission to modify ODAG settings.
   *
   * @throws GetOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAME: typeof getOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAME;
  /**
   * Clears the cache for odag-settings api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the odag-settings api
 */
declare const odagSettingsExport: OdagSettingsAPI;
//#endregion
export { CanUpdateSettings, ErrorDetailsV2, ErrorV2, GetOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAMEHttpError, GetOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAMEHttpResponse, GetOdagSettingsHttpError, GetOdagSettingsHttpResponse, MetaV2, OdagSettingsAPI, OdagSettingsV2, PutOdagSettings_FIX_THIS_QUIRKY_NAMEHttpError, PutOdagSettings_FIX_THIS_QUIRKY_NAMEHttpResponse, SettingsPutPayload, clearCache, odagSettingsExport as default, getOdagSettings, getOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAME, putOdagSettings_FIX_THIS_QUIRKY_NAME, odag_settings_d_exports as t };