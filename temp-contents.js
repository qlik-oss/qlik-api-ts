import "./chunks/utils-DI6bFnHB.js";
import "./chunks/public-runtime-modules-Ba7JShug.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CFT8jqUv.js";

//#region src/public/rest/temp-contents.ts
/**
* Upload a file as a temporary content resource. It returns a `201 Created` with a location header that contains the location of the created resource. If filename or TTL is not properly set, a `400 Bad request` is returned. For internal issues, a `500 Internal Server Error` is returned.
*
* @param query an object with query parameters
* @param body an object with the body content
* @throws UploadTempFileHttpError
*/
async function uploadTempFile(query, body, options) {
	return invokeFetch("temp-contents", {
		method: "post",
		pathTemplate: "/api/v1/temp-contents",
		query,
		body,
		contentType: "application/octet-stream",
		options
	});
}
/**
* This endpoint is used to retrieve a temporary content file. It returns a valid (`200 OK`) in case the file exists and the user is authorized to view the contents. It returns a `410 Gone` if the file has expired and `404 Not Found` if the criteria is not met.
*
* @param id The temporary contents ID.
* @param query an object with query parameters
* @throws DownloadTempFileHttpError
*/
async function downloadTempFile(id, query, options) {
	return invokeFetch("temp-contents", {
		method: "get",
		pathTemplate: "/api/v1/temp-contents/{id}",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Retrieve a summary of the metadata associated with a temporary content resource. It returns a `200 OK` with a model if the temporary resource is valid. It returns a `410 Gone` if the file has expired and `404 Not Found` if the criteria is not met.
*
* @param id The temporary contents ID.
* @throws GetTempFileDetailsHttpError
*/
async function getTempFileDetails(id, options) {
	return invokeFetch("temp-contents", {
		method: "get",
		pathTemplate: "/api/v1/temp-contents/{id}/details",
		pathVariables: { id },
		options
	});
}
/**
* Clears the cache for temp-contents api requests.
*/
function clearCache() {
	return clearApiCache("temp-contents");
}
/**
* Functions for the temp-contents api
*/
const tempContentsExport = {
	uploadTempFile,
	downloadTempFile,
	getTempFileDetails,
	clearCache
};
var temp_contents_default = tempContentsExport;

//#endregion
export { clearCache, temp_contents_default as default, downloadTempFile, getTempFileDetails, uploadTempFile };