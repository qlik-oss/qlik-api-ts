import "./chunks/utils-qEQ6sEXX.js";
import "./chunks/public-runtime-modules-CNGnt1rU.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DbVuX5mE.js";

//#region src/public/rest/report-templates.ts
/**
* Get descriptive info for the specified templates.
*
* @param query an object with query parameters
* @throws GetReportTemplatesHttpError
*/
async function getReportTemplates(query, options) {
	return invokeFetch("report-templates", {
		method: "get",
		pathTemplate: "/api/v1/report-templates",
		query,
		options
	});
}
/**
* Create a new report template.
*
* @param body an object with the body content
* @throws CreateReportTemplateHttpError
*/
async function createReportTemplate(body, options) {
	return invokeFetch("report-templates", {
		method: "post",
		pathTemplate: "/api/v1/report-templates",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Delete the specified report template.
*
* @param id The ID of the report template to delete.
* @throws DeleteReportTemplateHttpError
*/
async function deleteReportTemplate(id, options) {
	return invokeFetch("report-templates", {
		method: "delete",
		pathTemplate: "/api/v1/report-templates/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Get descriptive info for the specified report template.
*
* @param id The ID of the report template.
* @throws GetReportTemplateHttpError
*/
async function getReportTemplate(id, options) {
	return invokeFetch("report-templates", {
		method: "get",
		pathTemplate: "/api/v1/report-templates/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Patch an existing report template.
*
* @param id The ID of the report template to patch.
* @param body an object with the body content
* @throws PatchReportTemplateHttpError
*/
async function patchReportTemplate(id, body, options) {
	return invokeFetch("report-templates", {
		method: "patch",
		pathTemplate: "/api/v1/report-templates/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Update an existing report template.
*
* @param id The ID of the report template to update.
* @param body an object with the body content
* @throws UpdateReportTemplateHttpError
*/
async function updateReportTemplate(id, body, options) {
	return invokeFetch("report-templates", {
		method: "put",
		pathTemplate: "/api/v1/report-templates/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Download the template file of the specified report template
*
* @param id The ID of the report template.
* @throws DownloadReportTemplateHttpError
*/
async function downloadReportTemplate(id, options) {
	return invokeFetch("report-templates", {
		method: "post",
		pathTemplate: "/api/v1/report-templates/{id}/actions/download",
		pathVariables: { id },
		options
	});
}
/**
* Clears the cache for report-templates api requests.
*/
function clearCache() {
	return clearApiCache("report-templates");
}
/**
* Functions for the report-templates api
*/
const reportTemplatesExport = {
	getReportTemplates,
	createReportTemplate,
	deleteReportTemplate,
	getReportTemplate,
	patchReportTemplate,
	updateReportTemplate,
	downloadReportTemplate,
	clearCache
};
var report_templates_default = reportTemplatesExport;

//#endregion
export { clearCache, createReportTemplate, report_templates_default as default, deleteReportTemplate, downloadReportTemplate, getReportTemplate, getReportTemplates, patchReportTemplate, updateReportTemplate };