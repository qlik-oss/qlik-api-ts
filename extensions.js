import "./chunks/utils-1j8VpsDa.js";
import "./chunks/public-runtime-modules-BWdSJoOb.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DUEcQxLv.js";

//#region src/public/rest/extensions.ts
/**
* Lists all imported extensions in the tenant.
*
* @throws GetExtensionsHttpError
*/
async function getExtensions(options) {
	return invokeFetch("extensions", {
		method: "get",
		pathTemplate: "/api/v1/extensions",
		options
	});
}
/**
* Creates a new extension. Accepts either provided file or data object. The name of the new extension must be different to any existing extensions.
*
* @param body an object with the body content
* @throws UploadExtensionHttpError
*/
async function uploadExtension(body, options) {
	return invokeFetch("extensions", {
		method: "post",
		pathTemplate: "/api/v1/extensions",
		body,
		contentType: "multipart/form-data",
		options
	});
}
/**
* Deletes a specific extension matching either extension ID or extension name.
*
* @param id Extension identifier or its qextFilename.
* @throws DeleteExtensionHttpError
*/
async function deleteExtension(id, options) {
	return invokeFetch("extensions", {
		method: "delete",
		pathTemplate: "/api/v1/extensions/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Returns a specific extension matching either extension ID or extension name.
*
* @param id Extension identifier or its qextFilename.
* @throws GetExtensionHttpError
*/
async function getExtension(id, options) {
	return invokeFetch("extensions", {
		method: "get",
		pathTemplate: "/api/v1/extensions/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates a specific extension matching either extension ID or extension name. Accepts either provided file or data object.
*
* @param id Extension identifier or its qextFilename.
* @param body an object with the body content
* @throws PatchExtensionHttpError
*/
async function patchExtension(id, body, options) {
	return invokeFetch("extensions", {
		method: "patch",
		pathTemplate: "/api/v1/extensions/{id}",
		pathVariables: { id },
		body,
		contentType: "multipart/form-data",
		options
	});
}
/**
* Downloads all files in the extension matching either extension ID or extension name as a `.zip` archive.
*
* @param id Extension identifier or its qextFilename.
* @throws DownloadExtensionHttpError
*/
async function downloadExtension(id, options) {
	return invokeFetch("extensions", {
		method: "get",
		pathTemplate: "/api/v1/extensions/{id}/file",
		pathVariables: { id },
		options
	});
}
/**
* Downloads a specific file from the extension matching either extension ID or extension name, identified by the file path within the imported extension.
*
* @param id Extension identifier or its qextFilename.
* @param filepath Path to the file location within the specified extension archive. Folders separated with forward slashes.
* @throws DownloadFileFromExtensionHttpError
*/
async function downloadFileFromExtension(id, filepath, options) {
	return invokeFetch("extensions", {
		method: "get",
		pathTemplate: "/api/v1/extensions/{id}/file/{filepath}",
		pathVariables: {
			id,
			filepath
		},
		options
	});
}
/**
* Clears the cache for extensions api requests.
*/
function clearCache() {
	return clearApiCache("extensions");
}
/**
* Functions for the extensions api
*/
const extensionsExport = {
	getExtensions,
	uploadExtension,
	deleteExtension,
	getExtension,
	patchExtension,
	downloadExtension,
	downloadFileFromExtension,
	clearCache
};
var extensions_default = extensionsExport;

//#endregion
export { clearCache, extensions_default as default, deleteExtension, downloadExtension, downloadFileFromExtension, getExtension, getExtensions, patchExtension, uploadExtension };