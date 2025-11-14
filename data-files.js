import "./chunks/utils-DI6bFnHB.js";
import "./chunks/public-runtime-modules-ubkNzy_K.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DmsPYERB.js";

//#region src/public/rest/data-files.ts
/**
* Get descriptive info for the specified data files.
* @example
* getDataFiles(
*   {
*     allowInternalFiles: false,
*     appId: "f34b91a1-0dc3-44ac-a847-51cb84122c84",
*     baseNameWildcard: "*SomeFileName*",
*     connectionId: "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc",
*     excludeFiles: false,
*     excludeSubFolders: false,
*     folderId: "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc",
*     folderPath: "some/folder",
*     includeAllSpaces: false,
*     includeFolders: false,
*     includeFolderStats: false,
*     limit: 5,
*     name: "MyFile.csv",
*     notOwnerId: "lDL4DIINndhL_iJkcbqWyJenuwizP-2D",
*     ownerId: "lDL4DIINndhL_iJkcbqWyJenuwizP-2D",
*     page: "NzlmNzI5NWMtZGJlZC00Y2Y4LThkNDAtMzQ5ZDU3YzNjMzQ1"
*   }
* )
*
* @param query an object with query parameters
* @throws GetDataFilesHttpError
*/
async function getDataFiles(query, options) {
	return invokeFetch("data-files", {
		method: "get",
		pathTemplate: "/api/v1/data-files",
		query,
		options
	});
}
/**
* Upload a new data file or create a new folder.
*
* @param body an object with the body content
* @throws UploadDataFileHttpError
*/
async function uploadDataFile(body, options) {
	return invokeFetch("data-files", {
		method: "post",
		pathTemplate: "/api/v1/data-files",
		body,
		contentType: "multipart/form-data",
		options
	});
}
/**
* This is to allow for a separate admin type of operation that is more global in terms of access in cases
* where admin users may not explicitly have been granted full access to a given space within the declared
* space-level permissions.  If the space ID is set to null, then the data file or folder will end up residing
* in the personal space of the user who is the owner of the item.
*
* @param body an object with the body content
* @throws MoveDataFilesHttpError
*/
async function moveDataFiles(body, options) {
	return invokeFetch("data-files", {
		method: "post",
		pathTemplate: "/api/v1/data-files/actions/change-space",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Delete the specified set of data files and/or folders as a single batch.
*
* @param body an object with the body content
* @throws DeleteDataFilesHttpError
*/
async function deleteDataFiles(body, options) {
	return invokeFetch("data-files", {
		method: "post",
		pathTemplate: "/api/v1/data-files/actions/delete",
		body,
		contentType: "application/json",
		options
	});
}
/**
* The non-filtered list contains a set of hardcoded connections, along with one connection per team space that
* the given user has access to.
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
	return invokeFetch("data-files", {
		method: "get",
		pathTemplate: "/api/v1/data-files/connections",
		query,
		options
	});
}
/**
* Get the built-in connection used by the engine to load/write data files given a connection ID.
* @example
* getDataFileConnection(
*   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
* )
*
* @param id The ID of the connection.
* @throws GetDataFileConnectionHttpError
*/
async function getDataFileConnection(id, options) {
	return invokeFetch("data-files", {
		method: "get",
		pathTemplate: "/api/v1/data-files/connections/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Get quota information for the calling user.
*
* @throws GetDataFilesQuotasHttpError
*/
async function getDataFilesQuotas(options) {
	return invokeFetch("data-files", {
		method: "get",
		pathTemplate: "/api/v1/data-files/quotas",
		options
	});
}
/**
* Delete the specified data file or folder.  Deleting a folder will also recursively delete all files and
* subfolders that reside within the specified folder.
* @example
* deleteDataFile(
*   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
* )
*
* @param id The ID of the data file or folder to delete.
* @throws DeleteDataFileHttpError
*/
async function deleteDataFile(id, options) {
	return invokeFetch("data-files", {
		method: "delete",
		pathTemplate: "/api/v1/data-files/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Get descriptive info for the specified data file.
* @example
* getDataFile(
*   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
* )
*
* @param id The ID of the data file.
* @throws GetDataFileHttpError
*/
async function getDataFile(id, options) {
	return invokeFetch("data-files", {
		method: "get",
		pathTemplate: "/api/v1/data-files/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Re-upload an existing data file or update an existing folder.
*
* @param id The ID of the data file to update.
* @param body an object with the body content
* @throws ReuploadDataFileHttpError
*/
async function reuploadDataFile(id, body, options) {
	return invokeFetch("data-files", {
		method: "put",
		pathTemplate: "/api/v1/data-files/{id}",
		pathVariables: { id },
		body,
		contentType: "multipart/form-data",
		options
	});
}
/**
* This is primarily an admin type of operation.  In general, the owner of a data file or folder is implicitly
* set as part of a create or update operation.  For data files or folders that reside in a personal space,
* changing the owner has the effect of moving the data file to the new owner's personal space.  Note that,
* If a given file or folder is not in the root of a personal space, this operation will not succeed, since
* the parent folder does not reside in the target owner's personal space.  If the owner of a folder in the
* root of a personal space is changed, the owner of all subfolders and files within those subfolders will
* also recursively change.
*
* @param id The ID of the data file or folder whose owner will be updated.
* @param body an object with the body content
* @throws ChangeDataFileOwnerHttpError
*/
async function changeDataFileOwner(id, body, options) {
	return invokeFetch("data-files", {
		method: "post",
		pathTemplate: "/api/v1/data-files/{id}/actions/change-owner",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* This is to allow for a separate admin type of operation that is more global in terms of access in cases
* where admin users may not explicitly have been granted full access to a given space within the declared
* space-level permissions.  If the space ID is set to null, then the datafile or folder will end up residing
* in the personal space of the user who is the owner of the item.  Note that, if a given file or folder is not
* in the root of a given space, this operation will not succeed, since the parent folder does not reside in
* the target space.  If the space of a folder in the root of the source space is changed, all subfolders and
* files within those subfolders will also recursively be moved to the new space.
* 
* @param id The ID of the data file or folder whose
space will be updated.
* @param body an object with the body content
* @throws MoveDataFileHttpError
*/
async function moveDataFile(id, body, options) {
	return invokeFetch("data-files", {
		method: "post",
		pathTemplate: "/api/v1/data-files/{id}/actions/change-space",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for data-files api requests.
*/
function clearCache() {
	return clearApiCache("data-files");
}
/**
* Functions for the data-files api
*/
const dataFilesExport = {
	getDataFiles,
	uploadDataFile,
	moveDataFiles,
	deleteDataFiles,
	getDataFilesConnections,
	getDataFileConnection,
	getDataFilesQuotas,
	deleteDataFile,
	getDataFile,
	reuploadDataFile,
	changeDataFileOwner,
	moveDataFile,
	clearCache
};
var data_files_default = dataFilesExport;

//#endregion
export { changeDataFileOwner, clearCache, data_files_default as default, deleteDataFile, deleteDataFiles, getDataFile, getDataFileConnection, getDataFiles, getDataFilesConnections, getDataFilesQuotas, moveDataFile, moveDataFiles, reuploadDataFile, uploadDataFile };