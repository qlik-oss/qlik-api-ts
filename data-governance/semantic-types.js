import { t as __exportAll } from "../chunks/rolldown-runtime-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-B6hSp2sU.js";

//#region src/public/rest/data-governance/semantic-types.ts
var semantic_types_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createSemanticType: () => createSemanticType,
	default: () => semanticTypesExport,
	deleteSemanticType: () => deleteSemanticType,
	exportSemanticTypes: () => exportSemanticTypes,
	getSemanticType: () => getSemanticType,
	getSemanticTypeDatasetFields: () => getSemanticTypeDatasetFields,
	getSemanticTypes: () => getSemanticTypes,
	importSemanticTypes: () => importSemanticTypes,
	patchSemanticType: () => patchSemanticType
});
/**
* Retrieves all semantic types for a tenant. Supports conditional requests via the `If-None-Match` header.
* @example
* getSemanticTypes(
*   {
*     fields: "label,type"
*   }
* )
*
* @param query an object with query parameters
* @throws GetSemanticTypesHttpError
*/
async function getSemanticTypes(query, options) {
	return invokeFetch("data-governance/semantic-types", {
		method: "get",
		pathTemplate: "/api/data-governance/semantic-types",
		query,
		options
	});
}
/**
* Creates a new semantic type for the current tenant. A semantic type can be defined as a regular expression, a dictionary of values, or a compound of other semantic types, as specified by the `type` field in the request body.
*
* @param body an object with the body content
* @throws CreateSemanticTypeHttpError
*/
async function createSemanticType(body, options) {
	return invokeFetch("data-governance/semantic-types", {
		method: "post",
		pathTemplate: "/api/data-governance/semantic-types",
		body,
		contentType: "application/json",
		options
	});
}
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
* Permanently deletes a semantic type identified by its ID. This operation cannot be undone. Any dataset fields previously associated with the semantic type will no longer be classified by it. A semantic type used as a child of a `COMPOUND` type cannot be deleted until it is removed from that `COMPOUND` type.
*
* @param semanticTypeId The unique identifier of the semantic type.
* @throws DeleteSemanticTypeHttpError
*/
async function deleteSemanticType(semanticTypeId, options) {
	return invokeFetch("data-governance/semantic-types", {
		method: "delete",
		pathTemplate: "/api/data-governance/semantic-types/{semanticTypeId}",
		pathVariables: { semanticTypeId },
		options
	});
}
/**
* Returns the definition of a single semantic type identified by its ID, including its configuration (regex, dictionary, or compound rules).
*
* @param semanticTypeId The unique identifier of the semantic type.
* @param query an object with query parameters
* @throws GetSemanticTypeHttpError
*/
async function getSemanticType(semanticTypeId, query, options) {
	return invokeFetch("data-governance/semantic-types", {
		method: "get",
		pathTemplate: "/api/data-governance/semantic-types/{semanticTypeId}",
		pathVariables: { semanticTypeId },
		query,
		options
	});
}
/**
* Partially updates an existing semantic type identified by its ID. Only the fields included in the request payload are modified; omitted fields keep their current values.
*
* @param semanticTypeId The unique identifier of the semantic type.
* @param body an object with the body content
* @throws PatchSemanticTypeHttpError
*/
async function patchSemanticType(semanticTypeId, body, options) {
	return invokeFetch("data-governance/semantic-types", {
		method: "patch",
		pathTemplate: "/api/data-governance/semantic-types/{semanticTypeId}",
		pathVariables: { semanticTypeId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns a paginated list of datasets and their field names that are associated with the specified semantic type. Data is pre-computed from the dataset relationship collection and populated lazily when data quality events are processed.
*
* @param semanticTypeId The unique identifier of the semantic type.
* @param query an object with query parameters
* @throws GetSemanticTypeDatasetFieldsHttpError
*/
async function getSemanticTypeDatasetFields(semanticTypeId, query, options) {
	return invokeFetch("data-governance/semantic-types", {
		method: "get",
		pathTemplate: "/api/data-governance/semantic-types/{semanticTypeId}/dataset-fields",
		pathVariables: { semanticTypeId },
		query,
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
	getSemanticTypes,
	createSemanticType,
	exportSemanticTypes,
	importSemanticTypes,
	deleteSemanticType,
	getSemanticType,
	patchSemanticType,
	getSemanticTypeDatasetFields,
	clearCache
};

//#endregion
export { clearCache, createSemanticType, semanticTypesExport as default, deleteSemanticType, exportSemanticTypes, getSemanticType, getSemanticTypeDatasetFields, getSemanticTypes, importSemanticTypes, patchSemanticType, semantic_types_exports as t };