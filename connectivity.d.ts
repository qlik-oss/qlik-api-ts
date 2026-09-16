import dataConnectionsExport, { t as data_connections_d_exports } from "./connectivity/data-connections.js";
import dataCredentialsExport, { t as data_credentials_d_exports } from "./connectivity/data-credentials.js";
import dataSourcesExport, { t as data_sources_d_exports } from "./connectivity/data-sources.js";
import directAccessAgentsExport, { t as direct_access_agents_d_exports } from "./connectivity/direct-access-agents.js";
//#region src/public/rest/connectivity.d.ts
export type ConnectivityAPI = {};
/**
 * Functions for the connectivity api
 */
declare const connectivityExport: ConnectivityAPI & {
  dataConnections: typeof dataConnectionsExport;
  dataCredentials: typeof dataCredentialsExport;
  dataSources: typeof dataSourcesExport;
  directAccessAgents: typeof directAccessAgentsExport;
};
//#endregion
export { data_connections_d_exports as dataConnections, data_credentials_d_exports as dataCredentials, data_sources_d_exports as dataSources, connectivityExport as default, direct_access_agents_d_exports as directAccessAgents };