import "./chunks/utils-BnC4lrlq.js";
import "./chunks/public-runtime-modules-Dwjzb3l8.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-PcVIxLW4.js";

//#region src/public/rest/reports.ts
/**
* Queue a new report request generation.
*
* @param body an object with the body content
* @throws CreateReportHttpError
*/
async function createReport(body, options) {
	return invokeFetch("reports", {
		method: "post",
		pathTemplate: "/api/v1/reports",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Get the list of the outputs produced so far for the given report request. The outputs are generated asynchronously
* and are complete only when the status of the report request is 'done' or 'failed' or 'aborted'.
*
* @param id Identifier of the request.
* @param query an object with query parameters
* @throws GetReportOutputsHttpError
*/
async function getReportOutputs(id, query, options) {
	return invokeFetch("reports", {
		method: "get",
		pathTemplate: "/api/v1/reports/{id}/outputs",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Get report request processing status.
*
* @param id Identifier of the request.
* @throws GetReportStatusHttpError
*/
async function getReportStatus(id, options) {
	return invokeFetch("reports", {
		method: "get",
		pathTemplate: "/api/v1/reports/{id}/status",
		pathVariables: { id },
		options
	});
}
/**
* Clears the cache for reports api requests.
*/
function clearCache() {
	return clearApiCache("reports");
}
/**
* Functions for the reports api
*/
const reportsExport = {
	createReport,
	getReportOutputs,
	getReportStatus,
	clearCache
};
var reports_default = reportsExport;

//#endregion
export { clearCache, createReport, reports_default as default, getReportOutputs, getReportStatus };