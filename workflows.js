import "./chunks/public-runtime-modules-mBjjPn7I.js";
import "./chunks/invoke-fetch-DxtIsSVQ.js";
import automationConnectionsExport, { t as automation_connections_exports } from "./workflows/automation-connections.js";
import automationConnectorsExport, { t as automation_connectors_exports } from "./workflows/automation-connectors.js";
import automationsExport, { t as automations_exports } from "./workflows/automations.js";

//#region src/public/rest/workflows.ts
/**
* Functions for the workflows api
*/
const workflowsExport = {
	automationConnections: automationConnectionsExport,
	automationConnectors: automationConnectorsExport,
	automations: automationsExport
};

//#endregion
export { automation_connections_exports as automationConnections, automation_connectors_exports as automationConnectors, automations_exports as automations, workflowsExport as default };