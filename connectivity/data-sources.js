import { t as __exportAll } from "../chunks/chunk-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-CpHbSqJB.js";

//#region src/public/rest/connectivity/data-sources.ts
var data_sources_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => dataSourcesExport,
	filterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME: () => filterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME,
	generateQriDataSources: () => generateQriDataSources,
	getDataSourceApiSpecs: () => getDataSourceApiSpecs,
	getDataSourceGateways: () => getDataSourceGateways,
	getDataSourceSettings: () => getDataSourceSettings,
	getDataSources: () => getDataSources,
	getDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME: () => getDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME,
	putDataSourceSettings_FIX_THIS_QUIRKY_NAME: () => putDataSourceSettings_FIX_THIS_QUIRKY_NAME
});
/**
* Returns the list of datasources available on the connector node. Each entry
* includes the connector provider, capabilities, and optional UI metadata. Filter
* by `dataSourceId` to retrieve a specific datasource, or set `includeDisabled`
* to `true` to include datasources that have been disabled.
* @example
* getDataSources(
*   {
*     dataSourceId: "rest",
*     detail: true,
*     includeDisabled: true,
*     includeui: true
*   }
* )
*
* @param query an object with query parameters
* @throws GetDataSourcesHttpError
*/
async function getDataSources(query, options) {
	return invokeFetch("connectivity/data-sources", {
		method: "get",
		pathTemplate: "/api/connectivity/data-sources",
		query,
		options
	});
}
/**
* Generates Qlik Resource Identifiers (QRIs) for a batch of connections. Each
* connection can be identified by ID, name, or connection string. Partial
* failures are reported per entry in the response — a `207 Multi-Status`
* response is always returned regardless of individual entry outcomes.
*
* @param body an object with the body content
* @throws GenerateQriDataSourcesHttpError
*/
async function generateQriDataSources(body, options) {
	return invokeFetch("connectivity/data-sources", {
		method: "post",
		pathTemplate: "/api/connectivity/data-sources/actions/generate-qri",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns the list of endpoint references currently active on the connector
* node. Each entry identifies the datasource and gRPC URL for an active
* endpoint session. Use this operation to audit active endpoint allocations
* or to locate the URL for an existing endpoint.
*
* @throws GetDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME(options) {
	return invokeFetch("connectivity/data-sources", {
		method: "get",
		pathTemplate: "/api/connectivity/data-sources/endpoints",
		options
	});
}
/**
* Provisions a gRPC endpoint for loading data using the specified connection.
* The connection can be resolved by name, ID, connection string, or datasource
* ID. Returns the endpoint reference and resolved connection details required to
* initiate a data load session.
*
* @param body an object with the body content
* @throws FilterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function filterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME(body, options) {
	return invokeFetch("connectivity/data-sources", {
		method: "post",
		pathTemplate: "/api/connectivity/data-sources/endpoints/actions/filter",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the connection property schema for the specified datasource,
* including the connector provider, version, and the full list of properties
* required to establish a connection. Use this operation to discover which
* fields must be supplied when creating or generating a connection string for
* this datasource.
* @example
* getDataSourceApiSpecs(
*   "rest"
* )
*
* @param dataSourceId The unique identifier of the datasource to retrieve the connection schema for.
* @throws GetDataSourceApiSpecsHttpError
*/
async function getDataSourceApiSpecs(dataSourceId, options) {
	return invokeFetch("connectivity/data-sources", {
		method: "get",
		pathTemplate: "/api/connectivity/data-sources/{dataSourceId}/api-specs",
		pathVariables: { dataSourceId },
		options
	});
}
/**
* Returns the list of gateway IDs available for the specified Direct Access
* Gateway datasource. Gateways enable on-premises datasources to be accessed
* from Qlik Cloud. Results are returned from a cache by default; set
* `forceRefresh` to `true` to retrieve the current list from the backend.
* @example
* getDataSourceGateways(
*   "DG_rest",
*   {
*     forceRefresh: true
*   }
* )
*
* @param dataSourceId The unique identifier of the Direct Access Gateway datasource to list gateways for. Must be prefixed with `DG_`.
* @param query an object with query parameters
* @throws GetDataSourceGatewaysHttpError
*/
async function getDataSourceGateways(dataSourceId, query, options) {
	return invokeFetch("connectivity/data-sources", {
		method: "get",
		pathTemplate: "/api/connectivity/data-sources/{dataSourceId}/gateways",
		pathVariables: { dataSourceId },
		query,
		options
	});
}
/**
* Retrieves the current configuration settings for the specified datasource.
* Settings control operational behaviour such as whether the datasource is
* enabled or disabled for tenant use.
* @example
* getDataSourceSettings(
*   "rest"
* )
*
* @param dataSourceId The unique identifier of the datasource to retrieve settings for.
* @throws GetDataSourceSettingsHttpError
*/
async function getDataSourceSettings(dataSourceId, options) {
	return invokeFetch("connectivity/data-sources", {
		method: "get",
		pathTemplate: "/api/connectivity/data-sources/{dataSourceId}/settings",
		pathVariables: { dataSourceId },
		options
	});
}
/**
* Updates the configuration settings for the specified datasource. Use this
* operation to enable or disable a datasource for the tenant. The full settings
* object must be supplied; partial updates are not supported.
*
* @param dataSourceId The unique identifier of the datasource to update settings for.
* @param body an object with the body content
* @throws PutDataSourceSettings_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function putDataSourceSettings_FIX_THIS_QUIRKY_NAME(dataSourceId, body, options) {
	return invokeFetch("connectivity/data-sources", {
		method: "put",
		pathTemplate: "/api/connectivity/data-sources/{dataSourceId}/settings",
		pathVariables: { dataSourceId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for connectivity/data-sources api requests.
*/
function clearCache() {
	return clearApiCache("connectivity/data-sources");
}
/**
* Functions for the data-sources api
*/
const dataSourcesExport = {
	getDataSources,
	generateQriDataSources,
	getDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME,
	filterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME,
	getDataSourceApiSpecs,
	getDataSourceGateways,
	getDataSourceSettings,
	putDataSourceSettings_FIX_THIS_QUIRKY_NAME,
	clearCache
};

//#endregion
export { clearCache, dataSourcesExport as default, filterDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME, generateQriDataSources, getDataSourceApiSpecs, getDataSourceGateways, getDataSourceSettings, getDataSources, getDataSourcesEndpoints_FIX_THIS_QUIRKY_NAME, putDataSourceSettings_FIX_THIS_QUIRKY_NAME, data_sources_exports as t };