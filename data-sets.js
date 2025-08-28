import "./chunks/utils-CAGXTaqJ.js";
import "./chunks/public-runtime-modules-BDwfbach.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DuiAX21K.js";

//#region src/public/rest/data-sets.ts
/**
* Batch delete data sets.
*
* @param body an object with the body content
* @throws DeleteDataSetsHttpError
*/
async function deleteDataSets(body, options) {
	return invokeFetch("data-sets", {
		method: "delete",
		pathTemplate: "/api/v1/data-sets",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Save new data set
*
* @param body an object with the body content
* @throws CreateDataSetHttpError
*/
async function createDataSet(body, options) {
	return invokeFetch("data-sets", {
		method: "post",
		pathTemplate: "/api/v1/data-sets",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Get data set by ID.
*
* @param dataSetId
* @param query an object with query parameters
* @throws GetDataSetHttpError
*/
async function getDataSet(dataSetId, query, options) {
	return invokeFetch("data-sets", {
		method: "get",
		pathTemplate: "/api/v1/data-sets/{data-set-id}",
		pathVariables: { "data-set-id": dataSetId },
		query,
		options
	});
}
/**
* Patch data set.
*
* @param dataSetId
* @param body an object with the body content
* @throws PatchDataSetHttpError
*/
async function patchDataSet(dataSetId, body, options) {
	return invokeFetch("data-sets", {
		method: "patch",
		pathTemplate: "/api/v1/data-sets/{data-set-id}",
		pathVariables: { "data-set-id": dataSetId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Update data set.
*
* @param dataSetId
* @param body an object with the body content
* @throws UpdateDataSetHttpError
*/
async function updateDataSet(dataSetId, body, options) {
	return invokeFetch("data-sets", {
		method: "put",
		pathTemplate: "/api/v1/data-sets/{data-set-id}",
		pathVariables: { "data-set-id": dataSetId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Get profile for the given dataset and connection Id pair, if the profile already exists in the system. Profile returned can be either latest or Stale one based on when it was computed.
*
* @param dataSetId
* @param query an object with query parameters
* @throws GetDataSetProfilesHttpError
*/
async function getDataSetProfiles(dataSetId, query, options) {
	return invokeFetch("data-sets", {
		method: "get",
		pathTemplate: "/api/v1/data-sets/{data-set-id}/profiles",
		pathVariables: { "data-set-id": dataSetId },
		query,
		options
	});
}
/**
* Clears the cache for data-sets api requests.
*/
function clearCache() {
	return clearApiCache("data-sets");
}
/**
* Functions for the data-sets api
*/
const dataSetsExport = {
	deleteDataSets,
	createDataSet,
	getDataSet,
	patchDataSet,
	updateDataSet,
	getDataSetProfiles,
	clearCache
};
var data_sets_default = dataSetsExport;

//#endregion
export { clearCache, createDataSet, data_sets_default as default, deleteDataSets, getDataSet, getDataSetProfiles, patchDataSet, updateDataSet };