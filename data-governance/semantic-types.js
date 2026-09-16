import { t as __exportAll } from "../chunks/rolldown-runtime-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-uJH1SWdc.js";

//#region src/public/rest/data-governance/semantic-types.ts
var semantic_types_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => semanticTypesExport,
	exportSemanticTypes: () => exportSemanticTypes,
	importSemanticTypes: () => importSemanticTypes
});
/**
* Exports semantic types from the current tenant as a downloadable JSON file. Supports optional filtering by type IDs, category, creator, or search term.  Without filters, all types (user-created and Qlik defaults) are exported.
*
* @param body an object with the body content
* @throws ExportSemanticTypesHttpError
*/
async function exportSemanticTypes(body, options) {
	return invokeFetch("data-governance/semantic-types", {
		method: "post",
		pathTemplate: "/api/data-governance/semantic-types/actions/export",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Imports semantic types from a JSON file. Supports Qlik Cloud format (`QlikSemanticTypesExport`) and Talend legacy format (`DQDictionaryImportExport`). Format is auto-detected from the `exportFormat` field in the payload.
*
* **Conflict handling** is controlled by the `skipConfirmation` flag and the optional `conflictResolutions` array:
*
* - **Preview** (`skipConfirmation` false/absent, no `conflictResolutions`):
*   the file is analysed but nothing is imported. Returns `200` with a
*   per-type conflict/summary body. Re-submit with `skipConfirmation=true`
*   or `conflictResolutions` to actually apply the import.
*
*
* - **One-shot** (`skipConfirmation=true`, no `conflictResolutions`):
*   if real conflicts or in-file duplicates exist, returns `200` with the
*   conflict body and imports nothing; otherwise the import is applied and
*   `201` is returned with the import report.
*
*
* - **Resolved** (`conflictResolutions` provided): the import is applied using
*   the per-label strategies, falling back to `defaultConflictStrategy`
*   (defaults to `SKIP`) for unlisted labels. Returns `201` in both cases
*   (conflicts present or not), with the import report.
*
*
* Import is best-effort: each type is processed independently. Failures are logged in the response report without blocking other types.
*
* @param body an object with the body content
* @throws ImportSemanticTypesHttpError
*/
async function importSemanticTypes(body, options) {
	return invokeFetch("data-governance/semantic-types", {
		method: "post",
		pathTemplate: "/api/data-governance/semantic-types/actions/import",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for data-governance/semantic-types api requests.
*/
function clearCache() {
	return clearApiCache("data-governance/semantic-types");
}
/**
* Functions for the semantic-types api
*/
const semanticTypesExport = {
	exportSemanticTypes,
	importSemanticTypes,
	clearCache
};

//#endregion
export { clearCache, semanticTypesExport as default, exportSemanticTypes, importSemanticTypes, semantic_types_exports as t };