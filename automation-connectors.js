import "./chunks/public-runtime-modules-C7GMbX7E.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CBsbPeVH.js";

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
var automation_connectors_default = automationConnectorsExport;

//#endregion
export { clearCache, automation_connectors_default as default, getAutomationConnectors };