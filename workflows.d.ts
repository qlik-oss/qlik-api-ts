import { F as automation_connections_d_exports, P as automationConnectionsExport } from "./chunks/automation-connections-CGVr1uHV.js";
import { C as automation_connectors_d_exports, S as automationConnectorsExport } from "./chunks/automation-connectors-DbH9LzwR.js";
import { lt as automationsExport, ut as automations_d_exports } from "./chunks/automations-B_95UpXs.js";
export type WorkflowsAPI = {};
/**
 * Functions for the workflows api
 */
declare const workflowsExport: WorkflowsAPI & {
  automationConnections: typeof automationConnectionsExport;
  automationConnectors: typeof automationConnectorsExport;
  automations: typeof automationsExport;
};
export { automation_connections_d_exports as automationConnections, automation_connectors_d_exports as automationConnectors, automations_d_exports as automations, workflowsExport as default };