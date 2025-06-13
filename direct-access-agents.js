import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/direct-access-agents.ts
async function restartDirectAccessAgent(agentId, agentAction, options) {
  return invokeFetch("direct-access-agents", {
    method: "post",
    pathTemplate: "/api/v1/direct-access-agents/{agentId}/actions/{agentAction}",
    pathVariables: { agentId, agentAction },
    options
  });
}
async function getDirectAccessAgentConfiguration(agentId, query, options) {
  return invokeFetch("direct-access-agents", {
    method: "get",
    pathTemplate: "/api/v1/direct-access-agents/{agentId}/configurations",
    pathVariables: { agentId },
    query,
    options
  });
}
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
async function getDirectAccessAgentConnectorFiles(agentId, connectorType, query, options) {
  return invokeFetch("direct-access-agents", {
    method: "get",
    pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files",
    pathVariables: { agentId, connectorType },
    query,
    options
  });
}
async function getDirectAccessAgentConnectorFilesWithoutQuery(agentId, connectorType, options) {
  return invokeFetch("direct-access-agents", {
    method: "get",
    pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files",
    pathVariables: { agentId, connectorType },
    options
  });
}
async function getDirectAccessAgentConnectorFile(agentId, connectorType, fileType, options) {
  return invokeFetch("direct-access-agents", {
    method: "get",
    pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/{fileType}",
    pathVariables: { agentId, connectorType, fileType },
    options
  });
}
async function updateDirectAccessAgentConnectorFile(agentId, connectorType, fileType, query, body, options) {
  return invokeFetch("direct-access-agents", {
    method: "put",
    pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/{fileType}",
    pathVariables: { agentId, connectorType, fileType },
    query,
    body,
    contentType: "application/json",
    options
  });
}
async function updateDirectAccessAgentConnectorFileWithoutQuery(agentId, connectorType, fileType, body, options) {
  return invokeFetch("direct-access-agents", {
    method: "put",
    pathTemplate: "/api/v1/direct-access-agents/{agentId}/connectors/{connectorType}/files/{fileType}",
    pathVariables: { agentId, connectorType, fileType },
    body,
    contentType: "application/json",
    options
  });
}
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
