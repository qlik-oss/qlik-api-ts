import "./chunks/utils-BnC4lrlq.js";
import "./chunks/public-runtime-modules-Dwjzb3l8.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-PcVIxLW4.js";

//#region src/public/rest/data-sources.ts
/**
* Gets the list of data sources available on the node.
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
	return invokeFetch("data-sources", {
		method: "get",
		pathTemplate: "/api/v1/data-sources",
		query,
		options
	});
}
/**
* Get 'connectionProperties' for a given datasource
* @example
* getDataSourceApiSpecs(
*   "rest"
* )
*
* @param dataSourceId Datasource ID
* @throws GetDataSourceApiSpecsHttpError
*/
async function getDataSourceApiSpecs(dataSourceId, options) {
	return invokeFetch("data-sources", {
		method: "get",
		pathTemplate: "/api/v1/data-sources/{dataSourceId}/api-specs",
		pathVariables: { dataSourceId },
		options
	});
}
/**
* Get list available gateway ID's for a given datasource
* @example
* getDataSourceGateways(
*   "rest",
*   {
*     forceRefresh: true
*   }
* )
*
* @param dataSourceId Datasource ID
* @param query an object with query parameters
* @throws GetDataSourceGatewaysHttpError
*/
async function getDataSourceGateways(dataSourceId, query, options) {
	return invokeFetch("data-sources", {
		method: "get",
		pathTemplate: "/api/v1/data-sources/{dataSourceId}/gateways",
		pathVariables: { dataSourceId },
		query,
		options
	});
}
/**
* Retrieves the settings for a data source.
* @example
* getDataSourceSettings(
*   "rest"
* )
*
* @param dataSourceId Datasource ID
* @throws GetDataSourceSettingsHttpError
*/
async function getDataSourceSettings(dataSourceId, options) {
	return invokeFetch("data-sources", {
		method: "get",
		pathTemplate: "/api/v1/data-sources/{dataSourceId}/settings",
		pathVariables: { dataSourceId },
		options
	});
}
/**
* Updates the settings for a data source.
*
* @param dataSourceId Datasource ID
* @param body an object with the body content
* @throws PutDataSourceSettingsHttpError
*/
async function putDataSourceSettings(dataSourceId, body, options) {
	return invokeFetch("data-sources", {
		method: "put",
		pathTemplate: "/api/v1/data-sources/{dataSourceId}/settings",
		pathVariables: { dataSourceId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for data-sources api requests.
*/
function clearCache() {
	return clearApiCache("data-sources");
}
/**
* Functions for the data-sources api
*/
const dataSourcesExport = {
	getDataSources,
	getDataSourceApiSpecs,
	getDataSourceGateways,
	getDataSourceSettings,
	putDataSourceSettings,
	clearCache
};
var data_sources_default = dataSourcesExport;

//#endregion
export { clearCache, data_sources_default as default, getDataSourceApiSpecs, getDataSourceGateways, getDataSourceSettings, getDataSources, putDataSourceSettings };