import { t as __exportAll } from "../chunks/rolldown-runtime-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-BQlTFu41.js";

//#region src/public/rest/data-governance/data-qualities.ts
var data_qualities_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createDataQualityComputation: () => createDataQualityComputation,
	default: () => dataQualitiesExport,
	filterDataQualitiesFieldQualities: () => filterDataQualitiesFieldQualities,
	filterDataQualitiesGlobalResults: () => filterDataQualitiesGlobalResults,
	getDataQualitiesBatchComputation: () => getDataQualitiesBatchComputation,
	getDataQualityComputation: () => getDataQualityComputation,
	getDataQualityGlobalResults: () => getDataQualityGlobalResults
});
/**
* Retrieves the status of a batch computation, including per-dataset statuses.
*
* @param batchComputationId Batch computation ID for tracking progress of the overall data quality computations.
* @throws GetDataQualitiesBatchComputationHttpError
*/
async function getDataQualitiesBatchComputation(batchComputationId, options) {
	return invokeFetch("data-governance/data-qualities", {
		method: "get",
		pathTemplate: "/api/data-governance/data-qualities/batch-computations/{batchComputationId}",
		pathVariables: { batchComputationId },
		options
	});
}
/**
* Triggers a full data quality computation for a dataset, running profile calculation followed by data quality
* assessment. Returns a `computationId` that can be used to track progress via the computation status endpoint
* (`GET /data-governance/data-qualities/computations/{computationId}`). The computation runs asynchronously.
* Poll the status endpoint until `status` is `SUCCEEDED` or `FAILED`.
*
* @param body an object with the body content
* @throws CreateDataQualityComputationHttpError
*/
async function createDataQualityComputation(body, options) {
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
* getDataQualityComputation(
*   "4db06daa-3117-412e-8fb4-b29c937f9a0e"
* )
*
* @param computationId The unique identifier of the computation, as returned by `POST /data-governance/data-qualities/computations`.
* @throws GetDataQualityComputationHttpError
*/
async function getDataQualityComputation(computationId, options) {
	return invokeFetch("data-governance/data-qualities", {
		method: "get",
		pathTemplate: "/api/data-governance/data-qualities/computations/{computationId}",
		pathVariables: { computationId },
		options
	});
}
/**
* Retrieves the latest computed field quality metrics for a list of datasets. The maximum number of datasets is 100.
* When a dataset has been analyzed through multiple connections, the response returns the result from the most recently computed connection.
*
* @param body an object with the body content
* @throws FilterDataQualitiesFieldQualitiesHttpError
*/
async function filterDataQualitiesFieldQualities(body, options) {
	return invokeFetch("data-governance/data-qualities", {
		method: "post",
		pathTemplate: "/api/data-governance/data-qualities/field-qualities/actions/filter",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the global quality results for a dataset, showing counts of valid, invalid, empty, and total
* sample cells.
*
* @param query an object with query parameters
* @throws GetDataQualityGlobalResultsHttpError
*/
async function getDataQualityGlobalResults(query, options) {
	return invokeFetch("data-governance/data-qualities", {
		method: "get",
		pathTemplate: "/api/data-governance/data-qualities/global-results",
		query,
		options
	});
}
/**
* Retrieves the latest computed global quality metrics for a list of datasets. The maximum number of datasets is 100.
* When a dataset has been analyzed through multiple connections, the response returns the result from the most recently computed connection.
*
* @param body an object with the body content
* @throws FilterDataQualitiesGlobalResultsHttpError
*/
async function filterDataQualitiesGlobalResults(body, options) {
	return invokeFetch("data-governance/data-qualities", {
		method: "post",
		pathTemplate: "/api/data-governance/data-qualities/global-results/actions/filter",
		body,
		contentType: "application/json",
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
	getDataQualitiesBatchComputation,
	createDataQualityComputation,
	getDataQualityComputation,
	filterDataQualitiesFieldQualities,
	getDataQualityGlobalResults,
	filterDataQualitiesGlobalResults,
	clearCache
};

//#endregion
export { clearCache, createDataQualityComputation, dataQualitiesExport as default, filterDataQualitiesFieldQualities, filterDataQualitiesGlobalResults, getDataQualitiesBatchComputation, getDataQualityComputation, getDataQualityGlobalResults, data_qualities_exports as t };