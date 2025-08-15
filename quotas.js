import "./chunks/utils-qEQ6sEXX.js";
import "./chunks/public-runtime-modules-CNGnt1rU.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DbVuX5mE.js";

//#region src/public/rest/quotas.ts
/**
* Returns all quota items for the tenant (provided in JWT).
*
* @param query an object with query parameters
* @throws GetQuotasHttpError
*/
async function getQuotas(query, options) {
	return invokeFetch("quotas", {
		method: "get",
		pathTemplate: "/api/v1/quotas",
		query,
		options
	});
}
/**
* Returns a specific quota item for the tenant (provided in JWT).
*
* @param id The unique identifier of the quota item. For example, "app_mem_size", "app_upload_disk_size", or "shared_spaces".
* @param query an object with query parameters
* @throws GetQuotaHttpError
*/
async function getQuota(id, query, options) {
	return invokeFetch("quotas", {
		method: "get",
		pathTemplate: "/api/v1/quotas/{id}",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Clears the cache for quotas api requests.
*/
function clearCache() {
	return clearApiCache("quotas");
}
/**
* Functions for the quotas api
*/
const quotasExport = {
	getQuotas,
	getQuota,
	clearCache
};
var quotas_default = quotasExport;

//#endregion
export { clearCache, quotas_default as default, getQuota, getQuotas };