import { x as ApiCallOptions } from "../chunks/auth-types-BAiSvIRn.js";
declare namespace odag_apps_d_exports {
  export { AppIdV2, AppNameV2, AppStateCondensedV2, AppTypeV2, ErrorDetailsV2, ErrorV2, GetOdagAppsHttpError, GetOdagAppsHttpResponse, MetaV2, OdagAppsAPI, OdagAppsResponseBodyV2, clearCache, odagAppsExport as default, getOdagApps };
}
/**
 * The system-assigned ID for an Analytics Application.
 */
type AppIdV2 = string;
/**
 * The name of an Analytics Application.
 * @example
 * "appname"
 */
type AppNameV2 = string;
/**
 * Condensed state of an Analytics Application returned in `state` for Link, LinkUsage, Request, and ODAG Apps GET calls.
 */
type AppStateCondensedV2 = {
  /** The system-assigned ID for an Analytics Application. */id: AppIdV2; /** The name of an Analytics Application. */
  name: AppNameV2;
};
/**
 * The type of the ODAG Analytics Application.
 */
type AppTypeV2 = "selection" | "template" | "generated";
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
 * The response body for ODAG Analytics Applications.
 */
type OdagAppsResponseBodyV2 = {
  data?: AppStateCondensedV2[];
};
/**
 * Retrieves ODAG Analytics Applications filtered by type: `selection` (used as entry points), `template` (source Analytics Application for generation), or `generated` (Analytics Applications created via ODAG requests).
 *
 * @param query an object with query parameters
 * @throws GetOdagAppsHttpError
 */
declare function getOdagApps(query: {
  /** The type of ODAG Analytics Application. */appType: AppTypeV2;
}, options?: ApiCallOptions): Promise<GetOdagAppsHttpResponse>;
type GetOdagAppsHttpResponse = {
  data: OdagAppsResponseBodyV2;
  headers: Headers;
  status: 200;
};
type GetOdagAppsHttpError = {
  data: ErrorV2;
  headers: Headers;
  status: 403;
};
/**
 * Clears the cache for analytics/odag-apps api requests.
 */
declare function clearCache(): void;
type OdagAppsAPI = {
  /**
   * Retrieves ODAG Analytics Applications filtered by type: `selection` (used as entry points), `template` (source Analytics Application for generation), or `generated` (Analytics Applications created via ODAG requests).
   *
   * @param query an object with query parameters
   * @throws GetOdagAppsHttpError
   */
  getOdagApps: typeof getOdagApps;
  /**
   * Clears the cache for odag-apps api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the odag-apps api
 */
declare const odagAppsExport: OdagAppsAPI;
//#endregion
export { AppIdV2, AppNameV2, AppStateCondensedV2, AppTypeV2, ErrorDetailsV2, ErrorV2, GetOdagAppsHttpError, GetOdagAppsHttpResponse, MetaV2, OdagAppsAPI, OdagAppsResponseBodyV2, clearCache, odagAppsExport as default, getOdagApps, odag_apps_d_exports as t };