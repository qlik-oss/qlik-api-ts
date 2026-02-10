import "./chunks/public-runtime-modules-2KfyI2qM.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DMAi6Fg3.js";

//#region src/public/rest/automation-connectors.ts
/**
* Retrieves a list of automation connectors.
*
* @param query an object with query parameters
* @throws GetAutomationConnectorsHttpError
*/
async function getAutomationConnectors(query, options) {
	return invokeFetch("automation-connectors", {
		method: "get",
		pathTemplate: "/api/v1/automation-connectors",
		query,
		options
	});
}
/**
* Clears the cache for automation-connectors api requests.
*/
function clearCache() {
	return clearApiCache("automation-connectors");
}
/**
* Functions for the automation-connectors api
*/
const automationConnectorsExport = {
	getAutomationConnectors,
	clearCache
};

//#endregion
export { clearCache, automationConnectorsExport as default, getAutomationConnectors };