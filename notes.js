import "./chunks/public-runtime-modules-Dl6Qu08B.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DqBb7hUC.js";

//#region src/public/rest/notes.ts
/**
* @deprecated
*
* Get the enablement status of the notes feature set for this tenant and user.
*
* @throws GetNotesSettingsHttpError
*/
async function getNotesSettings(options) {
	return invokeFetch("notes", {
		method: "get",
		pathTemplate: "/api/v1/notes/settings",
		options
	});
}
/**
* @deprecated
*
* update the settings
*
* @param body an object with the body content
* @throws SetNotesSettingsHttpError
*/
async function setNotesSettings(body, options) {
	return invokeFetch("notes", {
		method: "put",
		pathTemplate: "/api/v1/notes/settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for notes api requests.
*/
function clearCache() {
	return clearApiCache("notes");
}
/**
* Functions for the notes api
*/
const notesExport = {
	getNotesSettings,
	setNotesSettings,
	clearCache
};

//#endregion
export { clearCache, notesExport as default, getNotesSettings, setNotesSettings };