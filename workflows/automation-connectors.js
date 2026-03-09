import { t as __exportAll } from "../chunks/chunk-BdHzlgOL.js";
import "../chunks/public-runtime-modules-mBjjPn7I.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-DxtIsSVQ.js";

//#region src/public/rest/workflows/automation-connectors.ts
var automation_connectors_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => automationConnectorsExport,
	getAutomationConnectors: () => getAutomationConnectors
});
/**
* Retrieves a list of automation connectors.
*
* @param query an object with query parameters
* @throws GetAutomationConnectorsHttpError
*/
async function getAutomationConnectors(query, options) {
	return invokeFetch("workflows/automation-connectors", {
		method: "get",
		pathTemplate: "/api/workflows/automation-connectors",
		query,
		options
	});
}
/**
* Clears the cache for workflows/automation-connectors api requests.
*/
function clearCache() {
	return clearApiCache("workflows/automation-connectors");
}
/**
* Functions for the automation-connectors api
*/
const automationConnectorsExport = {
	getAutomationConnectors,
	clearCache
};

//#endregion
export { clearCache, automationConnectorsExport as default, getAutomationConnectors, automation_connectors_exports as t };