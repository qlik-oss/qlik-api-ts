import "./chunks/utils-1j8VpsDa.js";
import "./chunks/public-runtime-modules-Bid7jvqK.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-B-tEkc9D.js";

//#region src/public/rest/themes.ts
/**
* Lists all imported themes in the tenant.
*
* @throws GetThemesHttpError
*/
async function getThemes(options) {
	return invokeFetch("themes", {
		method: "get",
		pathTemplate: "/api/v1/themes",
		options
	});
}
/**
* Creates a new theme. Accepts either provided file or data object. The name of the new theme must be different to any existing themes.
*
* @param body an object with the body content
* @throws UploadThemeHttpError
*/
async function uploadTheme(body, options) {
	return invokeFetch("themes", {
		method: "post",
		pathTemplate: "/api/v1/themes",
		body,
		contentType: "multipart/form-data",
		options
	});
}
/**
* Deletes a specific theme matching either theme ID or theme name.
*
* @param id Theme identifier or its qextFilename.
* @throws DeleteThemeHttpError
*/
async function deleteTheme(id, options) {
	return invokeFetch("themes", {
		method: "delete",
		pathTemplate: "/api/v1/themes/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Returns a specific theme matching either theme ID or theme name.
*
* @param id Theme identifier or its qextFilename
* @throws GetThemeHttpError
*/
async function getTheme(id, options) {
	return invokeFetch("themes", {
		method: "get",
		pathTemplate: "/api/v1/themes/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates a specific theme matching either theme ID or theme name. Accepts either provided file or data object.
*
* @param id Theme identifier or its qextFilename.
* @param body an object with the body content
* @throws PatchThemeHttpError
*/
async function patchTheme(id, body, options) {
	return invokeFetch("themes", {
		method: "patch",
		pathTemplate: "/api/v1/themes/{id}",
		pathVariables: { id },
		body,
		contentType: "multipart/form-data",
		options
	});
}
/**
* Downloads all files in the theme matching either theme ID or theme name as a `.zip` archive.
*
* @param id Theme identifier or its qextFilename
* @throws DownloadThemeHttpError
*/
async function downloadTheme(id, options) {
	return invokeFetch("themes", {
		method: "get",
		pathTemplate: "/api/v1/themes/{id}/file",
		pathVariables: { id },
		options
	});
}
/**
* Downloads a file from the theme matching either theme ID or theme name, identified by the file path within the imported extension.
*
* @param id Theme identifier or its qextFilename.
* @param filepath Path to the file location within the specified theme archive. Folders separated with forward slashes.
* @throws DownloadFileFromThemeHttpError
*/
async function downloadFileFromTheme(id, filepath, options) {
	return invokeFetch("themes", {
		method: "get",
		pathTemplate: "/api/v1/themes/{id}/file/{filepath}",
		pathVariables: {
			id,
			filepath
		},
		options
	});
}
/**
* Clears the cache for themes api requests.
*/
function clearCache() {
	return clearApiCache("themes");
}
/**
* Functions for the themes api
*/
const themesExport = {
	getThemes,
	uploadTheme,
	deleteTheme,
	getTheme,
	patchTheme,
	downloadTheme,
	downloadFileFromTheme,
	clearCache
};
var themes_default = themesExport;

//#endregion
export { clearCache, themes_default as default, deleteTheme, downloadFileFromTheme, downloadTheme, getTheme, getThemes, patchTheme, uploadTheme };