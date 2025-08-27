import "./chunks/utils-CAGXTaqJ.js";
import "./chunks/public-runtime-modules-P9LEbn8i.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-09EW5w1d.js";

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
* Retrieves the allowed paths settings for the File Connector. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.6+.
*
* @param agentId The agent ID.
* @param connectorType The connector type. Must be `file-connector` for this endpoint.
* @throws GetDirectAccessAgentConnectorFilesAllowedPathsHttpError
*/
async function getDirectAccessAgentConnectorFilesAllowedPaths(agentId, connectorType, options) {
	return invokeFetch("direct-access-agents", {
		method: "get",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/allowed-paths",
		pathVariables: {
			agentId,
			connectorType
		},
		options
	});
}
/**
* Completely replaces the contents of the allowed paths configuration file for the File connector. Partial updates are not supported. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.6+.
*
* @param agentId The agent ID.
* @param connectorType The connector type. Must be `file-connector` for this endpoint.
* @param body an object with the body content
* @throws PutDirectAccessAgentConnectorFilesAllowedPathsHttpError
*/
async function putDirectAccessAgentConnectorFilesAllowedPaths(agentId, connectorType, body, options) {
	return invokeFetch("direct-access-agents", {
		method: "put",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/allowed-paths",
		pathVariables: {
			agentId,
			connectorType
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the custom data type mapping settings for the Generic ODBC Connector. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.5+.
*
* @param agentId The agent ID.
* @param connectorType The connector type. Must be `odbc-connector` for this endpoint.
* @throws GetDirectAccessAgentConnectorCustomDataTypeMappingsHttpError
*/
async function getDirectAccessAgentConnectorCustomDataTypeMappings(agentId, connectorType, options) {
	return invokeFetch("direct-access-agents", {
		method: "get",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/custom-data-type-mappings",
		pathVariables: {
			agentId,
			connectorType
		},
		options
	});
}
/**
* Completely replaces the contents of the custom data type mapping configuration file for the Generic ODBC connector. Partial updates are not supported. There are property naming differences between the API and the file contents. Use the API property format when making changes. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.5+.
*
* @param agentId The agent ID.
* @param connectorType The connector type. Must be `odbc-connector` for this endpoint.
* @param body an object with the body content
* @throws PutDirectAccessAgentConnectorCustomDataTypeMappingsHttpError
*/
async function putDirectAccessAgentConnectorCustomDataTypeMappings(agentId, connectorType, body, options) {
	return invokeFetch("direct-access-agents", {
		method: "put",
		pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/custom-data-type-mappings",
		pathVariables: {
			agentId,
			connectorType
		},
		body,
		contentType: "application/json",
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
	getDirectAccessAgentConfiguration,
	patchDirectAccessAgentConfiguration,
	getDirectAccessAgentConnectorFiles,
	getDirectAccessAgentConnectorFilesWithoutQuery,
	getDirectAccessAgentConnectorFilesAllowedPaths,
	putDirectAccessAgentConnectorFilesAllowedPaths,
	getDirectAccessAgentConnectorCustomDataTypeMappings,
	putDirectAccessAgentConnectorCustomDataTypeMappings,
	getDirectAccessAgentConnectorFile,
	updateDirectAccessAgentConnectorFile,
	updateDirectAccessAgentConnectorFileWithoutQuery,
	clearCache
};
var direct_access_agents_default = directAccessAgentsExport;

//#endregion
export { clearCache, direct_access_agents_default as default, getDirectAccessAgentConfiguration, getDirectAccessAgentConnectorCustomDataTypeMappings, getDirectAccessAgentConnectorFile, getDirectAccessAgentConnectorFiles, getDirectAccessAgentConnectorFilesAllowedPaths, getDirectAccessAgentConnectorFilesWithoutQuery, patchDirectAccessAgentConfiguration, putDirectAccessAgentConnectorCustomDataTypeMappings, putDirectAccessAgentConnectorFilesAllowedPaths, restartDirectAccessAgent, updateDirectAccessAgentConnectorFile, updateDirectAccessAgentConnectorFileWithoutQuery };