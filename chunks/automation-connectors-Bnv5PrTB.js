import { t as __exportAll } from "./rolldown-runtime-CNh9ExCG.js";
import { n as invokeFetch, t as clearApiCache } from "./invoke-fetch-DC35wLOr.js";

// src/public/rest/workflows/automation-connectors.ts
var automation_connectors_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => automationConnectorsExport,
	getAutomationConnector: () => getAutomationConnector,
	getAutomationConnectorWebhooksConfiguration: () => getAutomationConnectorWebhooksConfiguration,
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
* Retrieves the full details of an automation connector, including its connection parameters, blocks, and snippets.
*
* @param connectorId The unique identifier of the automation connector.
* @throws GetAutomationConnectorHttpError
*/
async function getAutomationConnector(connectorId, options) {
	return invokeFetch("workflows/automation-connectors", {
		method: "get",
		pathTemplate: "/api/workflows/automation-connectors/{connectorId}",
		pathVariables: { connectorId },
		options
	});
}
/**
* Retrieves the webhook configuration for an automation connector, including its events and event parameters.
*
* @param connectorId The unique identifier of the automation connector.
* @throws GetAutomationConnectorWebhooksConfigurationHttpError
*/
async function getAutomationConnectorWebhooksConfiguration(connectorId, options) {
	return invokeFetch("workflows/automation-connectors", {
		method: "get",
		pathTemplate: "/api/workflows/automation-connectors/{connectorId}/webhooks/configuration",
		pathVariables: { connectorId },
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
	getAutomationConnector,
	getAutomationConnectorWebhooksConfiguration,
	clearCache
};

export { getAutomationConnectorWebhooksConfiguration as a, getAutomationConnector as i, automation_connectors_exports as n, getAutomationConnectors as o, clearCache as r, automationConnectorsExport as t };