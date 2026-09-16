import dataConnectionsExport, { t as data_connections_exports } from "./connectivity/data-connections.js";
import dataCredentialsExport, { t as data_credentials_exports } from "./connectivity/data-credentials.js";
import dataSourcesExport, { t as data_sources_exports } from "./connectivity/data-sources.js";
import directAccessAgentsExport, { t as direct_access_agents_exports } from "./connectivity/direct-access-agents.js";

//#region src/public/rest/connectivity.ts
/**
* Functions for the connectivity api
*/
const connectivityExport = {
	dataConnections: dataConnectionsExport,
	dataCredentials: dataCredentialsExport,
	dataSources: dataSourcesExport,
	directAccessAgents: directAccessAgentsExport
};

//#endregion
export { data_connections_exports as dataConnections, data_credentials_exports as dataCredentials, data_sources_exports as dataSources, connectivityExport as default, direct_access_agents_exports as directAccessAgents };