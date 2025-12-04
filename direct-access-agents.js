import "./chunks/utils-BnC4lrlq.js";
import "./chunks/public-runtime-modules-Dwjzb3l8.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-PcVIxLW4.js";

//#region src/public/rest/direct-access-agents.ts
/**
* Restarts the specified agent. If a reload is in `RELOADING` status the `restart` action will be ignored. Use `force-restart` to restart the agent even if a reload is in `RELOADING` status. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
*
* @param agentId The agent ID
* @param agentAction The type of action to perform. Permitted values are `restart` (will not restart the agent if a reload is in `RELOADING` status) and `force-restart` (will restart the agent even if a reload is in `RELOADING` status).
* @throws RestartDirectAccessAgentHttpError
*/
async function restartDirectAccessAgent(agentId, agentAction, options) {
	return invokeFetch("direct-access-agents", {
		method: "post",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/actions/{agentAction}",
		pathVariables: {
			agentId,
			agentAction
		},
		options
	});
}
/**
* Starts a background benchmark task to measure the performance of a Direct Access agent. Use this endpoint to evaluate agent throughput and latency for capacity planning and performance optiization. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
*
* @param agentId The agent ID
* @param query an object with query parameters
* @throws CreateDirectAccessAgentBenchmarkHttpError
*/
async function createDirectAccessAgentBenchmark(agentId, query, options) {
	return invokeFetch("direct-access-agents", {
		method: "post",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/benchmarks",
		pathVariables: { agentId },
		query,
		options
	});
}
/**
* Retrieves the current status and progress of a running or completed benchmark task. Use this endpoint to monitor benchmark execution and retrieve performance metrics once the task is completed. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
*
* @param agentId The agent ID
* @param benchmarkId The benchmark ID
* @throws GetDirectAccessAgentBenchmarkHttpError
*/
async function getDirectAccessAgentBenchmark(agentId, benchmarkId, options) {
	return invokeFetch("direct-access-agents", {
		method: "get",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/benchmarks/{benchmarkId}",
		pathVariables: {
			agentId,
			benchmarkId
		},
		options
	});
}
/**
* Requests a cancellation on a running benchmark by id for the specified agent. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
*
* @param agentId The agent ID
* @param benchmarkId The benchmark ID
* @throws CreateDirectAccessAgentBenchmarkCancelHttpError
*/
async function createDirectAccessAgentBenchmarkCancel(agentId, benchmarkId, options) {
	return invokeFetch("direct-access-agents", {
		method: "post",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/benchmarks/{benchmarkId}/cancel",
		pathVariables: {
			agentId,
			benchmarkId
		},
		options
	});
}
/**
* Retrieves the connector agent configuration from the specified agent. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
*
* @param agentId The agent ID
* @param query an object with query parameters
* @throws GetDirectAccessAgentConfigurationHttpError
*/
async function getDirectAccessAgentConfiguration(agentId, query, options) {
	return invokeFetch("direct-access-agents", {
		method: "get",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/configurations",
		pathVariables: { agentId },
		query,
		options
	});
}
/**
* Makes changes to the local agent configuration using JSON Patch. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
*
* @param agentId The agent ID
* @param body an object with the body content
* @throws PatchDirectAccessAgentConfigurationHttpError
*/
async function patchDirectAccessAgentConfiguration(agentId, body, options) {
	return invokeFetch("direct-access-agents", {
		method: "patch",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/configurations",
		pathVariables: { agentId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the allowed paths settings for the File Connector. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.6+.
*
* @param agentId The agent ID
* @throws GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError
*/
async function getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths(agentId, options) {
	return invokeFetch("direct-access-agents", {
		method: "get",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/file-connector/files/allowed-paths",
		pathVariables: { agentId },
		options
	});
}
/**
* Completely replaces the contents of the allowed paths configuration file for the File Connector. Partial updates are not supported. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.6+.
*
* @param agentId The agent id
* @param body an object with the body content
* @throws PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError
*/
async function putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths(agentId, body, options) {
	return invokeFetch("direct-access-agents", {
		method: "put",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/file-connector/files/allowed-paths",
		pathVariables: { agentId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the custom data type mapping settings for the Generic ODBC Connector. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.5+.
*
* @param agentId The agent ID.
* @throws GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError
*/
async function getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings(agentId, options) {
	return invokeFetch("direct-access-agents", {
		method: "get",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/odbc-connector/files/custom-data-type-mappings",
		pathVariables: { agentId },
		options
	});
}
/**
* Completely replaces the contents of the custom data type mapping configuration file for the Generic ODBC connector. Partial updates are not supported. There are property naming differences between the API and the file contents. Use the API property format when making changes. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.5+.
*
* @param agentId The agent ID.
* @param body an object with the body content
* @throws PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError
*/
async function putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings(agentId, body, options) {
	return invokeFetch("direct-access-agents", {
		method: "put",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/odbc-connector/files/custom-data-type-mappings",
		pathVariables: { agentId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the configuration files associated with the connector. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
*
* @param agentId The agent ID
* @param connectorType The connector to retrieve the list of files for
* @param query an object with query parameters
* @throws GetDirectAccessAgentConnectorFilesHttpError
*/
async function getDirectAccessAgentConnectorFiles(agentId, connectorType, query, options) {
	return invokeFetch("direct-access-agents", {
		method: "get",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files",
		pathVariables: {
			agentId,
			connectorType
		},
		query,
		options
	});
}
/**
* Retrieves the configuration files associated with the connector. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
*
* @param agentId The agent ID
* @param connectorType The connector to retrieve the list of files for
* @throws GetDirectAccessAgentConnectorFilesWithoutQueryHttpError
*/
async function getDirectAccessAgentConnectorFilesWithoutQuery(agentId, connectorType, options) {
	return invokeFetch("direct-access-agents", {
		method: "get",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files",
		pathVariables: {
			agentId,
			connectorType
		},
		options
	});
}
/**
* Retrieves the configuration items in the flat file for the specified connector. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
*
* @param agentId The agent ID
* @param connectorType The connector type to retrieve
* @param fileType The type of file to retrieve
* @throws GetDirectAccessAgentConnectorFileHttpError
*/
async function getDirectAccessAgentConnectorFile(agentId, connectorType, fileType, options) {
	return invokeFetch("direct-access-agents", {
		method: "get",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/{fileType}",
		pathVariables: {
			agentId,
			connectorType,
			fileType
		},
		options
	});
}
/**
* Completely replaces the contents of the connector's configuration file. Partial updates are not supported. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
*
* @param agentId The agent ID
* @param connectorType The connector type to update
* @param fileType The file type to update
* @param query an object with query parameters
* @param body an object with the body content
* @throws UpdateDirectAccessAgentConnectorFileHttpError
*/
async function updateDirectAccessAgentConnectorFile(agentId, connectorType, fileType, query, body, options) {
	return invokeFetch("direct-access-agents", {
		method: "put",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/{fileType}",
		pathVariables: {
			agentId,
			connectorType,
			fileType
		},
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Completely replaces the contents of the connector's configuration file. Partial updates are not supported. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
*
* @param agentId The agent ID
* @param connectorType The connector type to update
* @param fileType The file type to update
* @param body an object with the body content
* @throws UpdateDirectAccessAgentConnectorFileWithoutQueryHttpError
*/
async function updateDirectAccessAgentConnectorFileWithoutQuery(agentId, connectorType, fileType, body, options) {
	return invokeFetch("direct-access-agents", {
		method: "put",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/{fileType}",
		pathVariables: {
			agentId,
			connectorType,
			fileType
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for direct-access-agents api requests.
*/
function clearCache() {
	return clearApiCache("direct-access-agents");
}
/**
* Functions for the direct-access-agents api
*/
const directAccessAgentsExport = {
	restartDirectAccessAgent,
	createDirectAccessAgentBenchmark,
	getDirectAccessAgentBenchmark,
	createDirectAccessAgentBenchmarkCancel,
	getDirectAccessAgentConfiguration,
	patchDirectAccessAgentConfiguration,
	getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths,
	putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths,
	getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings,
	putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings,
	getDirectAccessAgentConnectorFiles,
	getDirectAccessAgentConnectorFilesWithoutQuery,
	getDirectAccessAgentConnectorFile,
	updateDirectAccessAgentConnectorFile,
	updateDirectAccessAgentConnectorFileWithoutQuery,
	clearCache
};
var direct_access_agents_default = directAccessAgentsExport;

//#endregion
export { clearCache, createDirectAccessAgentBenchmark, createDirectAccessAgentBenchmarkCancel, direct_access_agents_default as default, getDirectAccessAgentBenchmark, getDirectAccessAgentConfiguration, getDirectAccessAgentConnectorFile, getDirectAccessAgentConnectorFiles, getDirectAccessAgentConnectorFilesWithoutQuery, getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths, getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings, patchDirectAccessAgentConfiguration, putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths, putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings, restartDirectAccessAgent, updateDirectAccessAgentConnectorFile, updateDirectAccessAgentConnectorFileWithoutQuery };