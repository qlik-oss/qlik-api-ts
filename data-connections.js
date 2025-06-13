import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/data-connections.ts
async function getDataConnections(query, options) {
  return invokeFetch("data-connections", {
    method: "get",
    pathTemplate: "/api/v1/data-connections",
    query,
    options
  });
}
async function createDataConnection(body, options) {
  return invokeFetch("data-connections", {
    method: "post",
    pathTemplate: "/api/v1/data-connections",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteDataConnections(body, options) {
  return invokeFetch("data-connections", {
    method: "post",
    pathTemplate: "/api/v1/data-connections/actions/delete",
    body,
    contentType: "application/json",
    options
  });
}
async function duplicateDataAConnection(body, options) {
  return invokeFetch("data-connections", {
    method: "post",
    pathTemplate: "/api/v1/data-connections/actions/duplicate",
    body,
    contentType: "application/json",
    options
  });
}
async function updateDataConnections(body, options) {
  return invokeFetch("data-connections", {
    method: "post",
    pathTemplate: "/api/v1/data-connections/actions/update",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteDataConnection(qID, query, options) {
  return invokeFetch("data-connections", {
    method: "delete",
    pathTemplate: "/api/v1/data-connections/{qID}",
    pathVariables: { qID },
    query,
    options
  });
}
async function getDataConnection(qID, query, options) {
  return invokeFetch("data-connections", {
    method: "get",
    pathTemplate: "/api/v1/data-connections/{qID}",
    pathVariables: { qID },
    query,
    options
  });
}
async function patchDataConnection(qID, query, body, options) {
  return invokeFetch("data-connections", {
    method: "patch",
    pathTemplate: "/api/v1/data-connections/{qID}",
    pathVariables: { qID },
    query,
    body,
    contentType: "application/json",
    options
  });
}
async function updateDataConnection(qID, query, body, options) {
  return invokeFetch("data-connections", {
    method: "put",
    pathTemplate: "/api/v1/data-connections/{qID}",
    pathVariables: { qID },
    query,
    body,
    contentType: "application/json",
    options
  });
}
function clearCache() {
  return clearApiCache("data-connections");
}
var dataConnectionsExport = {
  getDataConnections,
  createDataConnection,
  deleteDataConnections,
  duplicateDataAConnection,
  updateDataConnections,
  deleteDataConnection,
  getDataConnection,
  patchDataConnection,
  updateDataConnection,
  clearCache
};
var data_connections_default = dataConnectionsExport;
export {
  clearCache,
  createDataConnection,
  data_connections_default as default,
  deleteDataConnection,
  deleteDataConnections,
  duplicateDataAConnection,
  getDataConnection,
  getDataConnections,
  patchDataConnection,
  updateDataConnection,
  updateDataConnections
};
