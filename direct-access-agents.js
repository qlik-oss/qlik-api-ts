import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/direct-access-agents.ts
var restartDirectAccessAgent = async (agentId, agentAction, options) => invokeFetch("direct-access-agents", {
  method: "post",
  pathTemplate: "/api/v1/direct-access-agents/{agentId}/actions/{agentAction}",
  pathVariables: { agentId, agentAction },
  options
});
var getDirectAccessAgentConfiguration = async (agentId, query, options) => invokeFetch("direct-access-agents", {
  method: "get",
  pathTemplate: "/api/v1/direct-access-agents/{agentId}/configurations",
  pathVariables: { agentId },
  query,
  options
});
var patchDirectAccessAgentConfiguration = async (agentId, body, options) => invokeFetch("direct-access-agents", {
  method: "patch",
  pathTemplate: "/api/v1/direct-access-agents/{agentId}/configurations",
  pathVariables: { agentId },
  body,
  contentType: "application/json",
  options
});
var getDirectAccessAgentConnectorFiles = async (agentId, connectorType, query, options) => invokeFetch("direct-access-agents", {
  method: "get",
  pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files",
  pathVariables: { agentId, connectorType },
  query,
  options
});
var getDirectAccessAgentConnectorFilesWithoutQuery = async (agentId, connectorType, options) => invokeFetch("direct-access-agents", {
  method: "get",
  pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files",
  pathVariables: { agentId, connectorType },
  options
});
var getDirectAccessAgentConnectorFile = async (agentId, connectorType, fileType, options) => invokeFetch("direct-access-agents", {
  method: "get",
  pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/{fileType}",
  pathVariables: { agentId, connectorType, fileType },
  options
});
var updateDirectAccessAgentConnectorFile = async (agentId, connectorType, fileType, query, body, options) => invokeFetch("direct-access-agents", {
  method: "put",
  pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/{fileType}",
  pathVariables: { agentId, connectorType, fileType },
  query,
  body,
  contentType: "application/json",
  options
});
var updateDirectAccessAgentConnectorFileWithoutQuery = async (agentId, connectorType, fileType, body, options) => invokeFetch("direct-access-agents", {
  method: "put",
  pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/{fileType}",
  pathVariables: { agentId, connectorType, fileType },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return clearApiCache("direct-access-agents");
}
var directAccessAgentsExport = {
  restartDirectAccessAgent,
  getDirectAccessAgentConfiguration,
  patchDirectAccessAgentConfiguration,
  getDirectAccessAgentConnectorFiles,
  getDirectAccessAgentConnectorFilesWithoutQuery,
  getDirectAccessAgentConnectorFile,
  updateDirectAccessAgentConnectorFile,
  updateDirectAccessAgentConnectorFileWithoutQuery,
  clearCache
};
var direct_access_agents_default = directAccessAgentsExport;
export {
  clearCache,
  direct_access_agents_default as default,
  getDirectAccessAgentConfiguration,
  getDirectAccessAgentConnectorFile,
  getDirectAccessAgentConnectorFiles,
  getDirectAccessAgentConnectorFilesWithoutQuery,
  patchDirectAccessAgentConfiguration,
  restartDirectAccessAgent,
  updateDirectAccessAgentConnectorFile,
  updateDirectAccessAgentConnectorFileWithoutQuery
};
