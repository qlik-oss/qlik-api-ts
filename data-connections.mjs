import {
  clearApiCache,
  invokeFetch
} from "./chunk-MP2QZCTY.mjs";
import "./chunk-2OXQN2IV.mjs";

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
  options
});
var deleteDataConnections = async (body, options) => invokeFetch("data-connections", {
  method: "post",
  pathTemplate: "/api/v1/data-connections/actions/delete",
  body,
  options
});
var duplicateDataAConnection = async (body, options) => invokeFetch("data-connections", {
  method: "post",
  pathTemplate: "/api/v1/data-connections/actions/duplicate",
  body,
  options
});
var updateDataConnections = async (body, options) => invokeFetch("data-connections", {
  method: "post",
  pathTemplate: "/api/v1/data-connections/actions/update",
  body,
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
  options
});
var updateDataConnection = async (qID, query, body, options) => invokeFetch("data-connections", {
  method: "put",
  pathTemplate: "/api/v1/data-connections/{qID}",
  pathVariables: { qID },
  query,
  body,
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
