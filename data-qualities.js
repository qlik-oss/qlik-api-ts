import "./chunks/public-runtime-modules-QhLPeQr5.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-B7lGscuQ.js";

//#region src/public/rest/data-qualities.ts
/**
* Triggers the computation of data quality.
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
* Returns the execution status of a data quality computation.
* @example
* getDataQualitiesComputation(
*   "4db06daa-3117-412e-8fb4-b29c937f9a0e"
* )
*
* @param computationId The ID of the computation
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
* Returns the global data results for a dataset, including counts of total, valid, invalid, and empty sample cells.
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
var data_qualities_default = dataQualitiesExport;

//#endregion
export { clearCache, data_qualities_default as default, getDataQualitiesComputation, getDataQualitiesGlobalResults, triggerDataQualitiesComputation };