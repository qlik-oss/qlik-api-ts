import { t as __exportAll } from "../chunks/chunk-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-CpHbSqJB.js";

//#region src/public/rest/analytics/odag-requests.ts
var odag_requests_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createOdagRequestReloadApp: () => createOdagRequestReloadApp,
	createOdagRequestRenameApp: () => createOdagRequestRenameApp,
	default: () => odagRequestsExport,
	deleteOdagRequestApp: () => deleteOdagRequestApp,
	getOdagRequest: () => getOdagRequest,
	getOdagRequestSelections: () => getOdagRequestSelections,
	updateOdagRequest: () => updateOdagRequest
});
/**
* Retrieves the current status and details of an ODAG request, including its state (`queued`, `loading`, `succeeded`, `failed`), generated Analytics Application ID, and error information. For multi-application generation requests, includes nested status for each sub-request.
*
* @param requestId The ID of the ODAG request whose status is to be returned.
* @throws GetOdagRequestHttpError
*/
async function getOdagRequest(requestId, options) {
	return invokeFetch("analytics/odag-requests", {
		method: "get",
		pathTemplate: "/api/analytics/odag-requests/{requestId}",
		pathVariables: { requestId },
		options
	});
}
/**
* Performs actions on ODAG requests such as pausing, resuming, or canceling them. Cancel actions are effective only before the data loading phase. For multi-application generation requests, actions apply only to sub-requests that have not yet started loading. Automatic acknowledgment  option simplifies state transitions.
*
* @param requestId The ID of the request whose status is to be returned.
* @param query an object with query parameters
* @throws UpdateOdagRequestHttpError
*/
async function updateOdagRequest(requestId, query, options) {
	return invokeFetch("analytics/odag-requests", {
		method: "put",
		pathTemplate: "/api/analytics/odag-requests/{requestId}",
		pathVariables: { requestId },
		query,
		options
	});
}
/**
* Deletes the generated Analytics Application associated with a completed request. Only the request owner or ODAG link creator can delete generated Analytics Applications.
*
* @param requestId The ID of the request.
* @throws DeleteOdagRequestAppHttpError
*/
async function deleteOdagRequestApp(requestId, options) {
	return invokeFetch("analytics/odag-requests", {
		method: "delete",
		pathTemplate: "/api/analytics/odag-requests/{requestId}/app",
		pathVariables: { requestId },
		options
	});
}
/**
* Reloads data in a generated Analytics Application from the underlying data sources. Only the request owner or ODAG link creator can reload generated Analytics Applications.
*
* @param requestId The ID of the request.
* @param body an object with the body content
* @throws CreateOdagRequestReloadAppHttpError
*/
async function createOdagRequestReloadApp(requestId, body, options) {
	return invokeFetch("analytics/odag-requests", {
		method: "post",
		pathTemplate: "/api/analytics/odag-requests/{requestId}/reload-app",
		pathVariables: { requestId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Renames a generated Analytics Application. Only the request owner or ODAG link creator can rename generated Analytics Applications.
*
* @param requestId The ID of the request.
* @param body an object with the body content
* @throws CreateOdagRequestRenameAppHttpError
*/
async function createOdagRequestRenameApp(requestId, body, options) {
	return invokeFetch("analytics/odag-requests", {
		method: "post",
		pathTemplate: "/api/analytics/odag-requests/{requestId}/rename-app",
		pathVariables: { requestId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the selection state (selected and optional field values) that was active when the Analytics Application generation request was submitted.
*
* @param requestId The ID of the request.
* @throws GetOdagRequestSelectionsHttpError
*/
async function getOdagRequestSelections(requestId, options) {
	return invokeFetch("analytics/odag-requests", {
		method: "get",
		pathTemplate: "/api/analytics/odag-requests/{requestId}/selections",
		pathVariables: { requestId },
		options
	});
}
/**
* Clears the cache for analytics/odag-requests api requests.
*/
function clearCache() {
	return clearApiCache("analytics/odag-requests");
}
/**
* Functions for the odag-requests api
*/
const odagRequestsExport = {
	getOdagRequest,
	updateOdagRequest,
	deleteOdagRequestApp,
	createOdagRequestReloadApp,
	createOdagRequestRenameApp,
	getOdagRequestSelections,
	clearCache
};

//#endregion
export { clearCache, createOdagRequestReloadApp, createOdagRequestRenameApp, odagRequestsExport as default, deleteOdagRequestApp, getOdagRequest, getOdagRequestSelections, odag_requests_exports as t, updateOdagRequest };