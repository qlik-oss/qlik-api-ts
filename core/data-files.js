import { t as __exportAll } from "../chunks/chunk-BdHzlgOL.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch--Qa19wyc.js";

//#region src/public/rest/core/data-files.ts
var data_files_exports = /* @__PURE__ */ __exportAll({
	changeOwnerDataFile: () => changeOwnerDataFile,
	changeSpaceDataFile: () => changeSpaceDataFile,
	changeSpaceDataFiles: () => changeSpaceDataFiles,
	clearCache: () => clearCache,
	default: () => dataFilesExport,
	deleteDataFile: () => deleteDataFile,
	filterDataFilesConnections: () => filterDataFilesConnections,
	getDataFile: () => getDataFile,
	getDataFileFolderStats: () => getDataFileFolderStats,
	getDataFilesConnections: () => getDataFilesConnections,
	getDataFilesDeletes: () => getDataFilesDeletes,
	postDataFiles: () => postDataFiles
});
/**
* Use this operation to move multiple data files and folders to new spaces in a single
* request. Set `spaceId` to `null` for any item to move it to the personal space of its
* owner. The response includes the individual result status for each specified item.
* This is an administrative operation that bypasses explicit space-level permission requirements.
*
* @param body an object with the body content
* @throws ChangeSpaceDataFilesHttpError
*/
async function changeSpaceDataFiles(body, options) {
	return invokeFetch("core/data-files", {
		method: "post",
		pathTemplate: "/api/core/data-files/actions/change-space",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to perform multiple upload (`POST`) operations on data files and folders
* in a single request. The response includes the individual result status for each
* specified item.
*
* @param body an object with the body content
* @throws PostDataFilesHttpError
*/
async function postDataFiles(body, options) {
	return invokeFetch("core/data-files", {
		method: "post",
		pathTemplate: "/api/core/data-files/actions/post",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to retrieve the list of built-in data file connections available to the calling user.
* Use the `spaceId`, `appId`, or `name` parameters to filter results to a specific space or app scope.
* @example
* getDataFilesConnections(
*   {
*     appId: "f34b91a1-0dc3-44ac-a847-51cb84122c84",
*     includeSpaceStats: false,
*     limit: 5,
*     name: "MySenseApp",
*     page: "NzlmNzI5NWMtZGJlZC00Y2Y4LThkNDAtMzQ5ZDU3YzNjMzQ1",
*     personal: true,
*     spaceId: "617979737a9f56e49dea2e6e"
*   }
* )
*
* @param query an object with query parameters
* @throws GetDataFilesConnectionsHttpError
*/
async function getDataFilesConnections(query, options) {
	return invokeFetch("core/data-files", {
		method: "get",
		pathTemplate: "/api/core/data-files/connections",
		query,
		options
	});
}
/**
* Use this operation to retrieve data file connections for a specified set of space IDs.
* This is useful when the list of space IDs is too large to pass as query parameters.
*
* @param body an object with the body content
* @throws FilterDataFilesConnectionsHttpError
*/
async function filterDataFilesConnections(body, options) {
	return invokeFetch("core/data-files", {
		method: "post",
		pathTemplate: "/api/core/data-files/connections/actions/filter",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to retrieve records of data files and folders deleted within a given
* time range, across all spaces in the tenant. Use `deleteStartDate` and `deleteEndDate`
* to constrain the results to a specific window. This operation requires elevated
* service-to-service privileges.
* @example
* getDataFilesDeletes(
*   {
*     allowInternalFiles: false,
*     deleteEndDate: "2020-07-07T20:52:40.8534780Z",
*     deleteStartDate: "2020-07-07T20:52:40.8534780Z",
*     includeFolders: false,
*     limit: 5,
*     page: "NzlmNzI5NWMtZGJlZC00Y2Y4LThkNDAtMzQ5ZDU3YzNjMzQ1"
*   }
* )
*
* @param query an object with query parameters
* @throws GetDataFilesDeletesHttpError
*/
async function getDataFilesDeletes(query, options) {
	return invokeFetch("core/data-files", {
		method: "get",
		pathTemplate: "/api/core/data-files/deletes",
		query,
		options
	});
}
/**
* Use this operation to permanently delete a data file or folder.
* Deleting a folder also recursively deletes all files and subfolders it contains.
* @example
* deleteDataFile(
*   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
* )
*
* @param id The unique identifier of the data file or folder to delete.
* @throws DeleteDataFileHttpError
*/
async function deleteDataFile(id, options) {
	return invokeFetch("core/data-files", {
		method: "delete",
		pathTemplate: "/api/core/data-files/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Use this operation to retrieve details for a specific data file or folder.
* The response includes the file name, size, creation date, owner, space, and permitted
* actions.
* @example
* getDataFile(
*   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
* )
*
* @param id The unique identifier of the data file or folder to retrieve.
* @throws GetDataFileHttpError
*/
async function getDataFile(id, options) {
	return invokeFetch("core/data-files", {
		method: "get",
		pathTemplate: "/api/core/data-files/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Use this operation to transfer ownership of a data file or folder to a different user.
* When the item is in a personal space, changing the owner moves it to the new owner's
* personal space. The item must be in the root of its current space for this operation to
* succeed. Items nested inside subfolders cannot be moved this way. Changing the owner
* of a root-level folder also recursively updates the owner for all files and subfolders
* within it.
*
* @param id The unique identifier of the data file or folder whose owner will be updated.
* @param body an object with the body content
* @throws ChangeOwnerDataFileHttpError
*/
async function changeOwnerDataFile(id, body, options) {
	return invokeFetch("core/data-files", {
		method: "post",
		pathTemplate: "/api/core/data-files/{id}/actions/change-owner",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to move a data file or folder to a different space. Set `spaceId` to
* `null` to move the item to the personal space of its owner. The item must be in the root
* of its current space for this operation to succeed. Moving a root-level folder also
* recursively moves all files and subfolders within it to the new space. This is an
* administrative operation that bypasses explicit space-level permission requirements.
*
* @param id The unique identifier of the data file or folder whose space will be updated.
* @param body an object with the body content
* @throws ChangeSpaceDataFileHttpError
*/
async function changeSpaceDataFile(id, body, options) {
	return invokeFetch("core/data-files", {
		method: "post",
		pathTemplate: "/api/core/data-files/{id}/actions/change-space",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to retrieve aggregate statistics for a specific folder.
* The response includes file and subfolder counts, as well as the total size of all files
* within the folder hierarchy.
* @example
* getDataFileFolderStats(
*   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
* )
*
* @param id The unique identifier of the folder.
* @throws GetDataFileFolderStatsHttpError
*/
async function getDataFileFolderStats(id, options) {
	return invokeFetch("core/data-files", {
		method: "get",
		pathTemplate: "/api/core/data-files/{id}/folder-stats",
		pathVariables: { id },
		options
	});
}
/**
* Clears the cache for core/data-files api requests.
*/
function clearCache() {
	return clearApiCache("core/data-files");
}
/**
* Functions for the data-files api
*/
const dataFilesExport = {
	changeSpaceDataFiles,
	postDataFiles,
	getDataFilesConnections,
	filterDataFilesConnections,
	getDataFilesDeletes,
	deleteDataFile,
	getDataFile,
	changeOwnerDataFile,
	changeSpaceDataFile,
	getDataFileFolderStats,
	clearCache
};

//#endregion
export { changeOwnerDataFile, changeSpaceDataFile, changeSpaceDataFiles, clearCache, dataFilesExport as default, deleteDataFile, filterDataFilesConnections, getDataFile, getDataFileFolderStats, getDataFilesConnections, getDataFilesDeletes, postDataFiles, data_files_exports as t };