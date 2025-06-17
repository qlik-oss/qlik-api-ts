import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/automation-connections.ts
async function getAutomationConnections(query, options) {
  return invokeFetch("automation-connections", {
    method: "get",
    pathTemplate: "/api/v1/automation-connections",
    query,
    options
  });
}
async function createAutomationConnection(body, options) {
  return invokeFetch("automation-connections", {
    method: "post",
    pathTemplate: "/api/v1/automation-connections",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteAutomationConnection(id, query, options) {
  return invokeFetch("automation-connections", {
    method: "delete",
    pathTemplate: "/api/v1/automation-connections/{id}",
    pathVariables: { id },
    query,
    options
  });
}
async function getAutomationConnection(id, options) {
  return invokeFetch("automation-connections", {
    method: "get",
    pathTemplate: "/api/v1/automation-connections/{id}",
    pathVariables: { id },
    options
  });
}
async function updateAutomationConnection(id, body, options) {
  return invokeFetch("automation-connections", {
    method: "put",
    pathTemplate: "/api/v1/automation-connections/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function changeOwnerAutomationConnection(id, body, options) {
  return invokeFetch("automation-connections", {
    method: "post",
    pathTemplate: "/api/v1/automation-connections/{id}/actions/change-owner",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function changeSpaceAutomationConnection(id, body, options) {
  return invokeFetch("automation-connections", {
    method: "post",
    pathTemplate: "/api/v1/automation-connections/{id}/actions/change-space",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function checkAutomationConnection(id, options) {
  return invokeFetch("automation-connections", {
    method: "post",
    pathTemplate: "/api/v1/automation-connections/{id}/actions/check",
    pathVariables: { id },
    options
  });
}
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
