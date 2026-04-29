import dataConnectionsExport, { t as data_connections_exports } from "./connectivity/data-connections.js";
import dataCredentialsExport, { t as data_credentials_exports } from "./connectivity/data-credentials.js";
import dataSourcesExport, { t as data_sources_exports } from "./connectivity/data-sources.js";

//#region src/public/rest/connectivity.ts
/**
* Functions for the connectivity api
*/
const connectivityExport = {
	dataConnections: dataConnectionsExport,
	dataCredentials: dataCredentialsExport,
	dataSources: dataSourcesExport
};

//#endregion
export { data_connections_exports as dataConnections, data_credentials_exports as dataCredentials, data_sources_exports as dataSources, connectivityExport as default };