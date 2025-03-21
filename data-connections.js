import {
  clearApiCache,
  invokeFetch
} from "./chunks/U2WIRQWE.js";
import "./chunks/WSUDVT4U.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/data-connections.ts
var getDataConnections = async (query, options) => invokeFetch("data-connections", {
  method: "get",
  pathTemplate: "/api/v1/data-connections",
  query,
  options
});
var createDataConnection = async (body, options) => invokeFetch("data-connections", {
  method: "post",
  pathTemplate: "/api/v1/data-connections",
  body,
  contentType: "application/json",
  options
});
var deleteDataConnections = async (body, options) => invokeFetch("data-connections", {
  method: "post",
  pathTemplate: "/api/v1/data-connections/actions/delete",
  body,
  contentType: "application/json",
  options
});
var duplicateDataAConnection = async (body, options) => invokeFetch("data-connections", {
  method: "post",
  pathTemplate: "/api/v1/data-connections/actions/duplicate",
  body,
  contentType: "application/json",
  options
});
var updateDataConnections = async (body, options) => invokeFetch("data-connections", {
  method: "post",
  pathTemplate: "/api/v1/data-connections/actions/update",
  body,
  contentType: "application/json",
  options
});
var deleteDataConnection = async (qID, query, options) => invokeFetch("data-connections", {
  method: "delete",
  pathTemplate: "/api/v1/data-connections/{qID}",
  pathVariables: { qID },
  query,
  options
});
var getDataConnection = async (qID, query, options) => invokeFetch("data-connections", {
  method: "get",
  pathTemplate: "/api/v1/data-connections/{qID}",
  pathVariables: { qID },
  query,
  options
});
var patchDataConnection = async (qID, query, body, options) => invokeFetch("data-connections", {
  method: "patch",
  pathTemplate: "/api/v1/data-connections/{qID}",
  pathVariables: { qID },
  query,
  body,
  contentType: "application/json",
  options
});
var updateDataConnection = async (qID, query, body, options) => invokeFetch("data-connections", {
  method: "put",
  pathTemplate: "/api/v1/data-connections/{qID}",
  pathVariables: { qID },
  query,
  body,
  contentType: "application/json",
  options
});
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
