import automationConnectionsExport, { t as automation_connections_d_exports } from "./workflows/automation-connections.js";
import automationConnectorsExport, { t as automation_connectors_d_exports } from "./workflows/automation-connectors.js";
import automationsExport, { t as automations_d_exports } from "./workflows/automations.js";

//#region src/public/rest/workflows.d.ts
type WorkflowsAPI = {};
/**
 * Functions for the workflows api
 */
declare const workflowsExport: WorkflowsAPI & {
  automationConnections: typeof automationConnectionsExport;
  automationConnectors: typeof automationConnectorsExport;
  automations: typeof automationsExport;
};
//#endregion
export { WorkflowsAPI, automation_connections_d_exports as automationConnections, automation_connectors_d_exports as automationConnectors, automations_d_exports as automations, workflowsExport as default };