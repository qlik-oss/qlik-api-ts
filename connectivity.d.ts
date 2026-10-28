import { H as data_connections_d_exports, V as dataConnectionsExport } from "./chunks/data-connections-DWWxLAoc.js";
import { C as dataCredentialsExport, w as data_credentials_d_exports } from "./chunks/data-credentials--A7yzhpt.js";
import { K as dataSourcesExport, q as data_sources_d_exports } from "./chunks/data-sources-BeEgW567.js";
import { D as directAccessAgentsExport, O as direct_access_agents_d_exports } from "./chunks/direct-access-agents-CJsEsvZp.js";
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
export { data_connections_d_exports as dataConnections, data_credentials_d_exports as dataCredentials, data_sources_d_exports as dataSources, connectivityExport as default, direct_access_agents_d_exports as directAccessAgents };