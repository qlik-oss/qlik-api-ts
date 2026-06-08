import { t as __exportAll } from "../chunks/chunk-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-CpHbSqJB.js";

//#region src/public/rest/analytics/odag-settings.ts
var odag_settings_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => odagSettingsExport,
	getOdagSettings: () => getOdagSettings,
	getOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAME: () => getOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAME,
	putOdagSettings_FIX_THIS_QUIRKY_NAME: () => putOdagSettings_FIX_THIS_QUIRKY_NAME
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
* @throws PutOdagSettings_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function putOdagSettings_FIX_THIS_QUIRKY_NAME(body, options) {
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
* @throws GetOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAME(options) {
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
	putOdagSettings_FIX_THIS_QUIRKY_NAME,
	getOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAME,
	clearCache
};

//#endregion
export { clearCache, odagSettingsExport as default, getOdagSettings, getOdagSettingsCanupdate_FIX_THIS_QUIRKY_NAME, putOdagSettings_FIX_THIS_QUIRKY_NAME, odag_settings_exports as t };