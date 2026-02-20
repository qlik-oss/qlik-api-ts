import "./chunks/public-runtime-modules-Dl6Qu08B.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DqBb7hUC.js";

//#region src/public/rest/glossaries.ts
/**
* Returns all glossaries.
*
* @param query an object with query parameters
* @throws GetGlossariesHttpError
*/
async function getGlossaries(query, options) {
	return invokeFetch("glossaries", {
		method: "get",
		pathTemplate: "/api/v1/glossaries",
		query,
		options
	});
}
/**
* Only a steward can create a glossary.
*
* @param body an object with the body content
* @throws CreateGlossaryHttpError
*/
async function createGlossary(body, options) {
	return invokeFetch("glossaries", {
		method: "post",
		pathTemplate: "/api/v1/glossaries",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Creates a new or updates an existing glossary, including categories and terms, based on a glossary definition file.
* Supported formats are currently, qlik, atlan and atlas.
*
* @param query an object with query parameters
* @param body an object with the body content
* @throws ImportGlossaryHttpError
*/
async function importGlossary(query, body, options) {
	return invokeFetch("glossaries", {
		method: "post",
		pathTemplate: "/api/v1/glossaries/actions/import",
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes a glossary and all of its terms.
*
* @param id The id of the glossary to delete.
* @throws DeleteGlossaryHttpError
*/
async function deleteGlossary(id, options) {
	return invokeFetch("glossaries", {
		method: "delete",
		pathTemplate: "/api/v1/glossaries/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves a glossary.
*
* @param id The id of the glossary to retrieve.
* @throws GetGlossaryHttpError
*/
async function getGlossary(id, options) {
	return invokeFetch("glossaries", {
		method: "get",
		pathTemplate: "/api/v1/glossaries/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates glossary properties with json-patch formatted data.
*
* @param id The glossary id.
* @param body an object with the body content
* @throws PatchGlossaryHttpError
*/
async function patchGlossary(id, body, options) {
	return invokeFetch("glossaries", {
		method: "patch",
		pathTemplate: "/api/v1/glossaries/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Updates a glossary.
*
* @param id The id of the glossary to update.
* @param body an object with the body content
* @throws UpdateGlossaryHttpError
*/
async function updateGlossary(id, body, options) {
	return invokeFetch("glossaries", {
		method: "put",
		pathTemplate: "/api/v1/glossaries/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Exports a glossary.
*
* @param id The glossary id.
* @throws ExportGlossaryHttpError
*/
async function exportGlossary(id, options) {
	return invokeFetch("glossaries", {
		method: "get",
		pathTemplate: "/api/v1/glossaries/{id}/actions/export",
		pathVariables: { id },
		options
	});
}
/**
* Returns a list of categories for a glossary.
*
* @param id The glossary id.
* @param query an object with query parameters
* @throws GetGlossaryCategoriesHttpError
*/
async function getGlossaryCategories(id, query, options) {
	return invokeFetch("glossaries", {
		method: "get",
		pathTemplate: "/api/v1/glossaries/{id}/categories",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Creates a new category.
*
* @param id The glossary id.
* @param body an object with the body content
* @throws CreateGlossaryCategoryHttpError
*/
async function createGlossaryCategory(id, body, options) {
	return invokeFetch("glossaries", {
		method: "post",
		pathTemplate: "/api/v1/glossaries/{id}/categories",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes a category.
*
* @param id The id of the glossary.
* @param categoryId The id for the category to delete. All subcategories are also deleted
* @throws DeleteGlossaryCategoryHttpError
*/
async function deleteGlossaryCategory(id, categoryId, options) {
	return invokeFetch("glossaries", {
		method: "delete",
		pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
		pathVariables: {
			id,
			categoryId
		},
		options
	});
}
/**
* Retrieves a category.
*
* @param id The glossary id.
* @param categoryId The category id.
* @throws GetGlossaryCategoryHttpError
*/
async function getGlossaryCategory(id, categoryId, options) {
	return invokeFetch("glossaries", {
		method: "get",
		pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
		pathVariables: {
			id,
			categoryId
		},
		options
	});
}
/**
* Updates category properties with json-patch formatted data.
*
* @param id The glossary id.
* @param categoryId The category id.
* @param body an object with the body content
* @throws PatchGlossaryCategoryHttpError
*/
async function patchGlossaryCategory(id, categoryId, body, options) {
	return invokeFetch("glossaries", {
		method: "patch",
		pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
		pathVariables: {
			id,
			categoryId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Updates a category.
*
* @param id The glossary id.
* @param categoryId The category id.
* @param body an object with the body content
* @throws UpdateGlossaryCategoryHttpError
*/
async function updateGlossaryCategory(id, categoryId, body, options) {
	return invokeFetch("glossaries", {
		method: "put",
		pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
		pathVariables: {
			id,
			categoryId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns a list of terms for a glossary.
*
* @param id The glossary id.
* @param query an object with query parameters
* @throws GetGlossaryTermsHttpError
*/
async function getGlossaryTerms(id, query, options) {
	return invokeFetch("glossaries", {
		method: "get",
		pathTemplate: "/api/v1/glossaries/{id}/terms",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Creates a new term.
*
* @param id The glossary id.
* @param body an object with the body content
* @throws CreateGlossaryTermHttpError
*/
async function createGlossaryTerm(id, body, options) {
	return invokeFetch("glossaries", {
		method: "post",
		pathTemplate: "/api/v1/glossaries/{id}/terms",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes a term.
*
* @param id The glossary id.
* @param termId The term id.
* @throws DeleteGlossaryTermHttpError
*/
async function deleteGlossaryTerm(id, termId, options) {
	return invokeFetch("glossaries", {
		method: "delete",
		pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
		pathVariables: {
			id,
			termId
		},
		options
	});
}
/**
* Retrieves a term.
*
* @param id The glossary id.
* @param termId The term id.
* @throws GetGlossaryTermHttpError
*/
async function getGlossaryTerm(id, termId, options) {
	return invokeFetch("glossaries", {
		method: "get",
		pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
		pathVariables: {
			id,
			termId
		},
		options
	});
}
/**
* Updates term properties with json-patch formatted data
*
* @param id The glossary id.
* @param termId The term id.
* @param body an object with the body content
* @throws PatchGlossaryTermHttpError
*/
async function patchGlossaryTerm(id, termId, body, options) {
	return invokeFetch("glossaries", {
		method: "patch",
		pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
		pathVariables: {
			id,
			termId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Updates a term.
*
* @param id The glossary id.
* @param termId The term id.
* @param body an object with the body content
* @throws UpdateGlossaryTermHttpError
*/
async function updateGlossaryTerm(id, termId, body, options) {
	return invokeFetch("glossaries", {
		method: "put",
		pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
		pathVariables: {
			id,
			termId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Only a steward can verify a term. Once the term is verified only a steward can modify the term. Note that links to resources are considered external relations that can be managed independently of the status of the term.
*
* @param id The glossary id.
* @param termId The term id.
* @param query an object with query parameters
* @throws ChangeGlossaryTermStatusHttpError
*/
async function changeGlossaryTermStatus(id, termId, query, options) {
	return invokeFetch("glossaries", {
		method: "post",
		pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/actions/change-status",
		pathVariables: {
			id,
			termId
		},
		query,
		options
	});
}
/**
* Returns a list of links assigned to a term.
*
* @param id The glossary id.
* @param termId The term id.
* @param query an object with query parameters
* @throws GetGlossaryTermLinksHttpError
*/
async function getGlossaryTermLinks(id, termId, query, options) {
	return invokeFetch("glossaries", {
		method: "get",
		pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/links",
		pathVariables: {
			id,
			termId
		},
		query,
		options
	});
}
/**
* Links to resources are not considered term properties but external relations. Links can be created for terms in any status. Permissions on term and resource determine if the link can be created.
*
* @param id The glossary id.
* @param termId The term id.
* @param body an object with the body content
* @throws CreateGlossaryTermLinkHttpError
*/
async function createGlossaryTermLink(id, termId, body, options) {
	return invokeFetch("glossaries", {
		method: "post",
		pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/links",
		pathVariables: {
			id,
			termId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves previous revisions of a term.
*
* @param id The glossary id.
* @param termId The term id.
* @param query an object with query parameters
* @throws GetGlossaryTermRevisionsHttpError
*/
async function getGlossaryTermRevisions(id, termId, query, options) {
	return invokeFetch("glossaries", {
		method: "get",
		pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/revisions",
		pathVariables: {
			id,
			termId
		},
		query,
		options
	});
}
/**
* Clears the cache for glossaries api requests.
*/
function clearCache() {
	return clearApiCache("glossaries");
}
/**
* Functions for the glossaries api
*/
const glossariesExport = {
	getGlossaries,
	createGlossary,
	importGlossary,
	deleteGlossary,
	getGlossary,
	patchGlossary,
	updateGlossary,
	exportGlossary,
	getGlossaryCategories,
	createGlossaryCategory,
	deleteGlossaryCategory,
	getGlossaryCategory,
	patchGlossaryCategory,
	updateGlossaryCategory,
	getGlossaryTerms,
	createGlossaryTerm,
	deleteGlossaryTerm,
	getGlossaryTerm,
	patchGlossaryTerm,
	updateGlossaryTerm,
	changeGlossaryTermStatus,
	getGlossaryTermLinks,
	createGlossaryTermLink,
	getGlossaryTermRevisions,
	clearCache
};

//#endregion
export { changeGlossaryTermStatus, clearCache, createGlossary, createGlossaryCategory, createGlossaryTerm, createGlossaryTermLink, glossariesExport as default, deleteGlossary, deleteGlossaryCategory, deleteGlossaryTerm, exportGlossary, getGlossaries, getGlossary, getGlossaryCategories, getGlossaryCategory, getGlossaryTerm, getGlossaryTermLinks, getGlossaryTermRevisions, getGlossaryTerms, importGlossary, patchGlossary, patchGlossaryCategory, patchGlossaryTerm, updateGlossary, updateGlossaryCategory, updateGlossaryTerm };