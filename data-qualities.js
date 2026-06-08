import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CpHbSqJB.js";

//#region src/public/rest/data-qualities.ts
/**
* @deprecated
*
* Triggers a full data quality computation for a dataset, running profile calculation followed by data quality
* assessment. Returns a `computationId` that can be used to track progress via the computation status endpoint
* (`GET /data-qualities/computations/{computationId}`). The computation runs asynchronously.
* Poll the status endpoint until `status` is `SUCCEEDED` or `FAILED`.
*
* @param body an object with the body content
* @throws TriggerDataQualitiesComputationHttpError
*/
async function triggerDataQualitiesComputation(body, options) {
	return invokeFetch("data-qualities", {
		method: "post",
		pathTemplate: "/api/v1/data-qualities/computations",
		body,
		contentType: "application/json",
		options
	});
}
/**
* @deprecated
*
* Retrieves the current execution status of a data quality computation. Poll this endpoint after triggering a
* computation to determine when results are available. The `status` field returns one of `REQUESTED`,
* `SUBMITTED`, `PROFILE_REQUESTED`, `SUCCEEDED`, `FAILED`, or `PROFILE_FAILED`.
* @example
* getDataQualitiesComputation(
*   "4db06daa-3117-412e-8fb4-b29c937f9a0e"
* )
*
* @param computationId The unique identifier of the computation, as returned by `POST /data-governance/data-qualities/computations`.
* @throws GetDataQualitiesComputationHttpError
*/
async function getDataQualitiesComputation(computationId, options) {
	return invokeFetch("data-qualities", {
		method: "get",
		pathTemplate: "/api/v1/data-qualities/computations/{computationId}",
		pathVariables: { computationId },
		options
	});
}
/**
* @deprecated
*
* Retrieves the global quality results for a dataset, showing counts of valid, invalid, empty, and total
* sample cells.
*
* @param query an object with query parameters
* @throws GetDataQualitiesGlobalResultsHttpError
*/
async function getDataQualitiesGlobalResults(query, options) {
	return invokeFetch("data-qualities", {
		method: "get",
		pathTemplate: "/api/v1/data-qualities/global-results",
		query,
		options
	});
}
/**
* Clears the cache for data-qualities api requests.
*/
function clearCache() {
	return clearApiCache("data-qualities");
}
/**
* Functions for the data-qualities api
*/
const dataQualitiesExport = {
	triggerDataQualitiesComputation,
	getDataQualitiesComputation,
	getDataQualitiesGlobalResults,
	clearCache
};

//#endregion
export { clearCache, dataQualitiesExport as default, getDataQualitiesComputation, getDataQualitiesGlobalResults, triggerDataQualitiesComputation };