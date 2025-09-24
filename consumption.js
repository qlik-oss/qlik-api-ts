import "./chunks/utils-1j8VpsDa.js";
import "./chunks/public-runtime-modules-n0gcxl0_.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DLQ5LN79.js";

//#region src/public/rest/consumption.ts
/**
* Retrieves the list of executions on an specific tenant
*
* @param query an object with query parameters
* @throws GetConsumptionExecutionsHttpError
*/
async function getConsumptionExecutions(query, options) {
	return invokeFetch("consumption", {
		method: "get",
		pathTemplate: "/api/v1/consumption/executions",
		query,
		options
	});
}
/**
* Clears the cache for consumption api requests.
*/
function clearCache() {
	return clearApiCache("consumption");
}
/**
* Functions for the consumption api
*/
const consumptionExport = {
	getConsumptionExecutions,
	clearCache
};
var consumption_default = consumptionExport;

//#endregion
export { clearCache, consumption_default as default, getConsumptionExecutions };