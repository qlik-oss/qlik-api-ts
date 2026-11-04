import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-D5WdETph.js";

// src/public/rest/direct-access-agents.ts
/**
* @deprecated
*
* Restarts the specified agent. The `restart` action is rejected with `409` while a reload is in `RELOADING` status. The `force-restart` action cancels the active reloads and restarts the agent. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
* @param agentAction The type of action to perform. Permitted values are `restart` (rejected with `409` while a reload is in `RELOADING` status) and `force-restart` (cancels the active reloads and restarts the agent).
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
* @deprecated
*
* Starts a background benchmark task that measures the throughput and latency of a Direct Access agent. Use the returned `benchmarkId` to monitor progress and retrieve performance metrics for capacity planning or performance optimization. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
* @deprecated
*
* Retrieves the current status, progress, and performance metrics for a benchmark task. Use this operation to monitor a running benchmark or inspect its completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
* @deprecated
*
* Requests cancellation of a running benchmark for the specified agent. The request is asynchronous. Use the returned status URL to monitor when cancellation completes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
* @deprecated
*
* Retrieves the connector agent configuration from the specified agent. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
* @deprecated
*
* Makes changes to the local agent configuration using JSON Patch. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
* @deprecated
*
* Retrieves the allowed paths settings for the File Connector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.6+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
* @deprecated
*
* Completely replaces the contents of the allowed paths configuration file for the File Connector. Partial updates are not supported. Omitting `fileConnectorAllowedPaths` or sending `null` is treated as an empty list and clears the file. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.6+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
* @deprecated
*
* Retrieves the custom data type mapping settings for the Generic ODBC Connector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.5+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
* @deprecated
*
* Completely replaces the contents of the custom data type mapping configuration file for the Generic ODBC connector. Partial updates are not supported. Omitting `odbcCustomDataTypes` or sending `null` is treated as an empty list and clears the file. There are property naming differences between the API and the file contents. Use the API property format when making changes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.5+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
* @deprecated
*
* Lists the configuration files of the connector: `file-connector`: `plain-text-configuration`, `allowed-paths`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`; `odbc-connector`: `allowed-drivers`, `allowed-dsns`, `custom-data-type-mappings`. `plain-text-configuration` and `custom-allowed-extensions` are read and written as raw lines through `connectors/{connectorType}/files/{fileType}`; the other files have dedicated typed operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
* @deprecated
*
* Lists the configuration files of the connector: `file-connector`: `plain-text-configuration`, `allowed-paths`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`; `odbc-connector`: `allowed-drivers`, `allowed-dsns`, `custom-data-type-mappings`. `plain-text-configuration` and `custom-allowed-extensions` are read and written as raw lines through `connectors/{connectorType}/files/{fileType}`; the other files have dedicated typed operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
* @deprecated
*
* Retrieves the configuration items in the flat file for the specified connector, as raw lines. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
* @param connectorType The connector type to retrieve
* @param fileType The type of file to retrieve. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
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
* @deprecated
*
* Completely replaces the contents of the connector's configuration file with the given raw lines. Partial updates are not supported. Omitting `contentsToSave` or sending `null` is treated as an empty list and clears the file. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
* @param connectorType The connector type to update
* @param fileType The file type to update. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
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
* @deprecated
*
* Completely replaces the contents of the connector's configuration file with the given raw lines. Partial updates are not supported. Omitting `contentsToSave` or sending `null` is treated as an empty list and clears the file. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
* @param connectorType The connector type to update
* @param fileType The file type to update. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
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
* @deprecated
*
* Retrieves the settings for the metrics collector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.9+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
* @throws GetDirectAccessAgentToolsMetricsCollectorConfigurationHttpError
*/
async function getDirectAccessAgentToolsMetricsCollectorConfiguration(agentId, options) {
	return invokeFetch("direct-access-agents", {
		method: "get",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/tools/metrics-collector/configuration",
		pathVariables: { agentId },
		options
	});
}
/**
* @deprecated
*
* Completely replaces the contents of the metrics collector settings configuration file. Partial updates are not supported. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.9+.
*
* @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
* @param body an object with the body content
* @throws SetDirectAccessAgentToolsMetricsCollectorConfigurationHttpError
*/
async function setDirectAccessAgentToolsMetricsCollectorConfiguration(agentId, body, options) {
	return invokeFetch("direct-access-agents", {
		method: "put",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/tools/metrics-collector/configuration",
		pathVariables: { agentId },
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
	getDirectAccessAgentToolsMetricsCollectorConfiguration,
	setDirectAccessAgentToolsMetricsCollectorConfiguration,
	clearCache
};

export { clearCache, createDirectAccessAgentBenchmark, createDirectAccessAgentBenchmarkCancel, directAccessAgentsExport as default, getDirectAccessAgentBenchmark, getDirectAccessAgentConfiguration, getDirectAccessAgentConnectorFile, getDirectAccessAgentConnectorFiles, getDirectAccessAgentConnectorFilesWithoutQuery, getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths, getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings, getDirectAccessAgentToolsMetricsCollectorConfiguration, patchDirectAccessAgentConfiguration, putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths, putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings, restartDirectAccessAgent, setDirectAccessAgentToolsMetricsCollectorConfiguration, updateDirectAccessAgentConnectorFile, updateDirectAccessAgentConnectorFileWithoutQuery };