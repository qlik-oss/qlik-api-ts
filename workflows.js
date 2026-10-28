import { n as automation_connections_exports, t as automationConnectionsExport } from "./chunks/automation-connections-DtcR5ojK.js";
import { n as automation_connectors_exports, t as automationConnectorsExport } from "./chunks/automation-connectors-Bnv5PrTB.js";
import { n as automations_exports, t as automationsExport } from "./chunks/automations-D9_Iop4i.js";

// src/public/rest/workflows.ts
/**
* Functions for the workflows api
*/
const workflowsExport = {
	automationConnections: automationConnectionsExport,
	automationConnectors: automationConnectorsExport,
	automations: automationsExport
};

export { automation_connections_exports as automationConnections, automation_connectors_exports as automationConnectors, automations_exports as automations, workflowsExport as default };