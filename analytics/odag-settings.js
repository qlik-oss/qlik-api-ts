import { t as __exportAll } from "../chunks/rolldown-runtime-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-uJH1SWdc.js";

//#region src/public/rest/analytics/odag-settings.ts
var odag_settings_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => odagSettingsExport,
	getOdagSettings: () => getOdagSettings,
	getOdagSettingsUpdatePermission: () => getOdagSettingsUpdatePermission,
	putOdagSettings: () => putOdagSettings
});
/**
* Retrieves ODAG settings, including feature enablement status. Available only to administrators.
*
* @throws GetOdagSettingsHttpError
*/
async function getOdagSettings(options) {
	return invokeFetch("analytics/odag-settings", {
		method: "get",
		pathTemplate: "/api/analytics/odag-settings",
		options
	});
}
/**
* Modifies ODAG settings such as feature enablement. Available only to administrators. Changes apply immediately to all ODAG operations.
*
* @param body an object with the body content
* @throws PutOdagSettingsHttpError
*/
async function putOdagSettings(body, options) {
	return invokeFetch("analytics/odag-settings", {
		method: "put",
		pathTemplate: "/api/analytics/odag-settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Checks whether the current user has permission to modify ODAG settings.
*
* @throws GetOdagSettingsUpdatePermissionHttpError
*/
async function getOdagSettingsUpdatePermission(options) {
	return invokeFetch("analytics/odag-settings", {
		method: "get",
		pathTemplate: "/api/analytics/odag-settings/canupdate",
		options
	});
}
/**
* Clears the cache for analytics/odag-settings api requests.
*/
function clearCache() {
	return clearApiCache("analytics/odag-settings");
}
/**
* Functions for the odag-settings api
*/
const odagSettingsExport = {
	getOdagSettings,
	putOdagSettings,
	getOdagSettingsUpdatePermission,
	clearCache
};

//#endregion
export { clearCache, odagSettingsExport as default, getOdagSettings, getOdagSettingsUpdatePermission, putOdagSettings, odag_settings_exports as t };