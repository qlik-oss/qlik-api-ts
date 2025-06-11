import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/automation-connections.ts
var getAutomationConnections = async (query, options) => invokeFetch("automation-connections", {
  method: "get",
  pathTemplate: "/api/v1/automation-connections",
  query,
  options
});
var createAutomationConnection = async (body, options) => invokeFetch("automation-connections", {
  method: "post",
  pathTemplate: "/api/v1/automation-connections",
  body,
  contentType: "application/json",
  options
});
var deleteAutomationConnection = async (id, query, options) => invokeFetch("automation-connections", {
  method: "delete",
  pathTemplate: "/api/v1/automation-connections/{id}",
  pathVariables: { id },
  query,
  options
});
var getAutomationConnection = async (id, options) => invokeFetch("automation-connections", {
  method: "get",
  pathTemplate: "/api/v1/automation-connections/{id}",
  pathVariables: { id },
  options
});
var updateAutomationConnection = async (id, body, options) => invokeFetch("automation-connections", {
  method: "put",
  pathTemplate: "/api/v1/automation-connections/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var changeOwnerAutomationConnection = async (id, body, options) => invokeFetch("automation-connections", {
  method: "post",
  pathTemplate: "/api/v1/automation-connections/{id}/actions/change-owner",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var changeSpaceAutomationConnection = async (id, body, options) => invokeFetch("automation-connections", {
  method: "post",
  pathTemplate: "/api/v1/automation-connections/{id}/actions/change-space",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var checkAutomationConnection = async (id, options) => invokeFetch("automation-connections", {
  method: "post",
  pathTemplate: "/api/v1/automation-connections/{id}/actions/check",
  pathVariables: { id },
  options
});
function clearCache() {
  return clearApiCache("automation-connections");
}
var automationConnectionsExport = {
  getAutomationConnections,
  createAutomationConnection,
  deleteAutomationConnection,
  getAutomationConnection,
  updateAutomationConnection,
  changeOwnerAutomationConnection,
  changeSpaceAutomationConnection,
  checkAutomationConnection,
  clearCache
};
var automation_connections_default = automationConnectionsExport;
export {
  changeOwnerAutomationConnection,
  changeSpaceAutomationConnection,
  checkAutomationConnection,
  clearCache,
  createAutomationConnection,
  automation_connections_default as default,
  deleteAutomationConnection,
  getAutomationConnection,
  getAutomationConnections,
  updateAutomationConnection
};
