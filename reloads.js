import "./chunks/utils-1j8VpsDa.js";
import "./chunks/public-runtime-modules-Bid7jvqK.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-B-tEkc9D.js";

//#region src/public/rest/reloads.ts
/**
* Finds and returns the reloads that the user has access to.
* @example
* getReloads(
*   {
*     filter: "(status eq \"FAILED\" or status eq \"EXCEEDED_LIMIT\") and partial eq \"false\" and type eq \"chronos\"
*     "
*   }
* )
*
* @param query an object with query parameters
* @throws GetReloadsHttpError
*/
async function getReloads(query, options) {
	return invokeFetch("reloads", {
		method: "get",
		pathTemplate: "/api/v1/reloads",
		query,
		options
	});
}
/**
* Reloads an app specified by an app ID.
*
* @param body an object with the body content
* @throws QueueReloadHttpError
*/
async function queueReload(body, options) {
	return invokeFetch("reloads", {
		method: "post",
		pathTemplate: "/api/v1/reloads",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Finds and returns a reload record.
*
* @param reloadId The unique identifier of the reload.
* @throws GetReloadHttpError
*/
async function getReload(reloadId, options) {
	return invokeFetch("reloads", {
		method: "get",
		pathTemplate: "/api/v1/reloads/{reloadId}",
		pathVariables: { reloadId },
		options
	});
}
/**
* Cancels a reload that is in progress or has been queued
*
* @param reloadId The unique identifier of the reload.
* @throws CancelReloadHttpError
*/
async function cancelReload(reloadId, options) {
	return invokeFetch("reloads", {
		method: "post",
		pathTemplate: "/api/v1/reloads/{reloadId}/actions/cancel",
		pathVariables: { reloadId },
		options
	});
}
/**
* Clears the cache for reloads api requests.
*/
function clearCache() {
	return clearApiCache("reloads");
}
/**
* Functions for the reloads api
*/
const reloadsExport = {
	getReloads,
	queueReload,
	getReload,
	cancelReload,
	clearCache
};
var reloads_default = reloadsExport;

//#endregion
export { cancelReload, clearCache, reloads_default as default, getReload, getReloads, queueReload };