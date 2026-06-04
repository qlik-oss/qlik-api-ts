import { t as __exportAll } from "../chunks/chunk-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-CpHbSqJB.js";

//#region src/public/rest/analytics/odag-apps.ts
var odag_apps_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => odagAppsExport,
	getOdagApps: () => getOdagApps
});
/**
* Retrieves ODAG Analytics Applications filtered by type: `selection` (used as entry points), `template` (source Analytics Application for generation), or `generated` (Analytics Applications created via ODAG requests).
*
* @param query an object with query parameters
* @throws GetOdagAppsHttpError
*/
async function getOdagApps(query, options) {
	return invokeFetch("analytics/odag-apps", {
		method: "get",
		pathTemplate: "/api/analytics/odag-apps",
		query,
		options
	});
}
/**
* Clears the cache for analytics/odag-apps api requests.
*/
function clearCache() {
	return clearApiCache("analytics/odag-apps");
}
/**
* Functions for the odag-apps api
*/
const odagAppsExport = {
	getOdagApps,
	clearCache
};

//#endregion
export { clearCache, odagAppsExport as default, getOdagApps, odag_apps_exports as t };