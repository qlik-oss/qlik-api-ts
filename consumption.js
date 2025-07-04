import "./chunks/utils-qEQ6sEXX.js";
import "./chunks/public-runtime-modules-Bfh2smA7.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DJFDz11x.js";

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