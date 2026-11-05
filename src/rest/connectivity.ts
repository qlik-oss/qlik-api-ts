/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import dataConnections from "./connectivity/data-connections";
import dataCredentials from "./connectivity/data-credentials";
import dataSources from "./connectivity/data-sources";
import directAccessAgents from "./connectivity/direct-access-agents";

/* -------------------------------------------------------------------------- */
/*                              Submodule exports                             */
/* -------------------------------------------------------------------------- */

export * as dataConnections from "./connectivity/data-connections";
export * as dataCredentials from "./connectivity/data-credentials";
export * as dataSources from "./connectivity/data-sources";
export * as directAccessAgents from "./connectivity/direct-access-agents";

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type ConnectivityAPI = {};

/**
 * Functions for the connectivity api
 */
const connectivityExport: ConnectivityAPI & {
  dataConnections: typeof dataConnections;
  dataCredentials: typeof dataCredentials;
  dataSources: typeof dataSources;
  directAccessAgents: typeof directAccessAgents;
} = { dataConnections, dataCredentials, dataSources, directAccessAgents };
export default connectivityExport;
