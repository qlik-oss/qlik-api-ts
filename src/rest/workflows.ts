/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import automationConnections from "./workflows/automation-connections";
import automationConnectors from "./workflows/automation-connectors";
import automations from "./workflows/automations";

/* -------------------------------------------------------------------------- */
/*                              Submodule exports                             */
/* -------------------------------------------------------------------------- */

export * as automationConnections from "./workflows/automation-connections";
export * as automationConnectors from "./workflows/automation-connectors";
export * as automations from "./workflows/automations";

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type WorkflowsAPI = {};

/**
 * Functions for the workflows api
 */
const workflowsExport: WorkflowsAPI & {
  automationConnections: typeof automationConnections;
  automationConnectors: typeof automationConnectors;
  automations: typeof automations;
} = { automationConnections, automationConnectors, automations };
export default workflowsExport;
