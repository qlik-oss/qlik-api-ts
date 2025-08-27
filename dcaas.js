import "./chunks/utils-CAGXTaqJ.js";
import "./chunks/public-runtime-modules-P9LEbn8i.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-09EW5w1d.js";

//#region src/public/rest/dcaas.ts
/**
* @deprecated
*
* DEPRECATED. Use POST /v1/data-connections to create connection.
*
* @param body an object with the body content
* @throws DataConnectionsDcaasHttpError
*/
async function dataConnectionsDcaas(body, options) {
	return invokeFetch("dcaas", {
		method: "post",
		pathTemplate: "/api/v1/dcaas/actions/data-connections",
		body,
		contentType: "application/json",
		options
	});
}
/**
* @deprecated
*
* DEPRECATED. Use GET /v1/data-sources/{dataSourceId}/api-specs to return 'connectionProperties' for a given datasource.
*
* @param query an object with query parameters
* @throws DataConnectionsDcaasApiSpecsHttpError
*/
async function dataConnectionsDcaasApiSpecs(query, options) {
	return invokeFetch("dcaas", {
		method: "get",
		pathTemplate: "/api/v1/dcaas/actions/data-connections/api-specs",
		query,
		options
	});
}
/**
* @deprecated
*
* DEPRECATED. Use GET /v1/data-connections/{connectionId}?parseConnection=true to get connection with parsed connection properties.
*
* @param connectionId ID of the connection
* @throws DataConnectionsDcaaHttpError
*/
async function dataConnectionsDcaa(connectionId, options) {
	return invokeFetch("dcaas", {
		method: "get",
		pathTemplate: "/api/v1/dcaas/actions/data-connections/{connectionId}",
		pathVariables: { connectionId },
		options
	});
}
/**
* Clears the cache for dcaas api requests.
*/
function clearCache() {
	return clearApiCache("dcaas");
}
/**
* Functions for the dcaas api
*/
const dcaasExport = {
	dataConnectionsDcaas,
	dataConnectionsDcaasApiSpecs,
	dataConnectionsDcaa,
	clearCache
};
var dcaas_default = dcaasExport;

//#endregion
export { clearCache, dataConnectionsDcaa, dataConnectionsDcaas, dataConnectionsDcaasApiSpecs, dcaas_default as default };