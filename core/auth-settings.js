import { t as __exportAll } from "../chunks/chunk-BdHzlgOL.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-C6eGdcjv.js";

//#region src/public/rest/core/auth-settings.ts
var auth_settings_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => authSettingsExport,
	getAuthSettings: () => getAuthSettings,
	patchAuthSettings: () => patchAuthSettings
});
/**
* Returns the authentication settings for the tenant, including the session inactivity timeout and maximum session lifespan. If no custom values have been saved, the response reflects tenant-wide defaults with `isDefault` set to `true`. The user must be assigned the `TenantAdmin` role.
*
* @throws GetAuthSettingsHttpError
*/
async function getAuthSettings(options) {
	return invokeFetch("core/auth-settings", {
		method: "get",
		pathTemplate: "/api/core/auth-settings",
		options
	});
}
/**
* Updates one or more authentication settings for the tenant using JSON Patch (RFC 6902). Supports `replace` operations on `/userSessionInactivityTimeoutMinutes` and `/maxUserSessionLifespanMinutes`. The value for `maxUserSessionLifespanMinutes` must be a whole number of hours (divisible by 60). The user must be assigned the `TenantAdmin` role.
*
* @param body an object with the body content
* @throws PatchAuthSettingsHttpError
*/
async function patchAuthSettings(body, options) {
	return invokeFetch("core/auth-settings", {
		method: "patch",
		pathTemplate: "/api/core/auth-settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for core/auth-settings api requests.
*/
function clearCache() {
	return clearApiCache("core/auth-settings");
}
/**
* Functions for the auth-settings api
*/
const authSettingsExport = {
	getAuthSettings,
	patchAuthSettings,
	clearCache
};

//#endregion
export { clearCache, authSettingsExport as default, getAuthSettings, patchAuthSettings, auth_settings_exports as t };