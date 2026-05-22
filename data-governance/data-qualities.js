import { t as __exportAll } from "../chunks/chunk-BdHzlgOL.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch--Qa19wyc.js";

//#region src/public/rest/data-governance/data-qualities.ts
var data_qualities_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createDataQualitiesComputation_FIX_THIS_QUIRKY_NAME: () => createDataQualitiesComputation_FIX_THIS_QUIRKY_NAME,
	default: () => dataQualitiesExport,
	getDataQualitiesComputation_FIX_THIS_QUIRKY_NAME: () => getDataQualitiesComputation_FIX_THIS_QUIRKY_NAME,
	getDataQualitiesGlobalResults_FIX_THIS_QUIRKY_NAME: () => getDataQualitiesGlobalResults_FIX_THIS_QUIRKY_NAME
});
/**
* Triggers a full data quality computation for a dataset, running profile calculation followed by data quality
* assessment. Returns a `computationId` that can be used to track progress via the computation status endpoint
* (`GET /data-governance/data-qualities/computations/{computationId}`). The computation runs asynchronously.
* Poll the status endpoint until `status` is `SUCCEEDED` or `FAILED`.
*
* @param body an object with the body content
* @throws CreateDataQualitiesComputation_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function createDataQualitiesComputation_FIX_THIS_QUIRKY_NAME(body, options) {
	return invokeFetch("data-governance/data-qualities", {
		method: "post",
		pathTemplate: "/api/data-governance/data-qualities/computations",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the current execution status of a data quality computation. Poll this endpoint after triggering a
* computation to determine when results are available. The `status` field returns one of `REQUESTED`,
* `SUBMITTED`, `PROFILE_REQUESTED`, `SUCCEEDED`, `FAILED`, or `PROFILE_FAILED`.
* @example
* getDataQualitiesComputation_FIX_THIS_QUIRKY_NAME(
*   "4db06daa-3117-412e-8fb4-b29c937f9a0e"
* )
*
* @param computationId The unique identifier of the computation, as returned by `POST /data-governance/data-qualities/computations`.
* @throws GetDataQualitiesComputation_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getDataQualitiesComputation_FIX_THIS_QUIRKY_NAME(computationId, options) {
	return invokeFetch("data-governance/data-qualities", {
		method: "get",
		pathTemplate: "/api/data-governance/data-qualities/computations/{computationId}",
		pathVariables: { computationId },
		options
	});
}
/**
* Retrieves the global quality results for a dataset, showing counts of valid, invalid, empty, and total
* sample cells.
*
* @param query an object with query parameters
* @throws GetDataQualitiesGlobalResults_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getDataQualitiesGlobalResults_FIX_THIS_QUIRKY_NAME(query, options) {
	return invokeFetch("data-governance/data-qualities", {
		method: "get",
		pathTemplate: "/api/data-governance/data-qualities/global-results",
		query,
		options
	});
}
/**
* Clears the cache for data-governance/data-qualities api requests.
*/
function clearCache() {
	return clearApiCache("data-governance/data-qualities");
}
/**
* Functions for the data-qualities api
*/
const dataQualitiesExport = {
	createDataQualitiesComputation_FIX_THIS_QUIRKY_NAME,
	getDataQualitiesComputation_FIX_THIS_QUIRKY_NAME,
	getDataQualitiesGlobalResults_FIX_THIS_QUIRKY_NAME,
	clearCache
};

//#endregion
export { clearCache, createDataQualitiesComputation_FIX_THIS_QUIRKY_NAME, dataQualitiesExport as default, getDataQualitiesComputation_FIX_THIS_QUIRKY_NAME, getDataQualitiesGlobalResults_FIX_THIS_QUIRKY_NAME, data_qualities_exports as t };