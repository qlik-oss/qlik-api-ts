import "./chunks/utils-1j8VpsDa.js";
import "./chunks/public-runtime-modules-n0gcxl0_.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DLQ5LN79.js";

//#region src/public/rest/notes.ts
/**
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
var notes_default = notesExport;

//#endregion
export { clearCache, notes_default as default, getNotesSettings, setNotesSettings };