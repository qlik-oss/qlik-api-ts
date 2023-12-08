"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6JERR27Kjs = require('./chunk-6JERR27K.js');
require('./chunk-H7SAZYEE.js');

// src/public/rest/data-connections.ts
var getDataConnections = async (query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-connections", {
  method: "get",
  pathTemplate: "/api/v1/data-connections",
  query,
  options
});
var createDataConnection = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-connections", {
  method: "post",
  pathTemplate: "/api/v1/data-connections",
  body,
  options
});
var deleteDataConnections = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-connections", {
  method: "post",
  pathTemplate: "/api/v1/data-connections/actions/delete",
  body,
  options
});
var duplicateDataAConnection = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-connections", {
  method: "post",
  pathTemplate: "/api/v1/data-connections/actions/duplicate",
  body,
  options
});
var updateDataConnections = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-connections", {
  method: "post",
  pathTemplate: "/api/v1/data-connections/actions/update",
  body,
  options
});
var deleteDataConnection = async (qID, query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-connections", {
  method: "delete",
  pathTemplate: "/api/v1/data-connections/{qID}",
  pathVariables: { qID },
  query,
  options
});
var getDataConnection = async (qID, query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-connections", {
  method: "get",
  pathTemplate: "/api/v1/data-connections/{qID}",
  pathVariables: { qID },
  query,
  options
});
var patchDataConnection = async (qID, query, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-connections", {
  method: "patch",
  pathTemplate: "/api/v1/data-connections/{qID}",
  pathVariables: { qID },
  query,
  body,
  options
});
var updateDataConnection = async (qID, query, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-connections", {
  method: "put",
  pathTemplate: "/api/v1/data-connections/{qID}",
  pathVariables: { qID },
  query,
  body,
  options
});
function clearCache() {
  return _chunk6JERR27Kjs.clearApiCache.call(void 0, "data-connections");
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












exports.clearCache = clearCache; exports.createDataConnection = createDataConnection; exports.default = data_connections_default; exports.deleteDataConnection = deleteDataConnection; exports.deleteDataConnections = deleteDataConnections; exports.duplicateDataAConnection = duplicateDataAConnection; exports.getDataConnection = getDataConnection; exports.getDataConnections = getDataConnections; exports.patchDataConnection = patchDataConnection; exports.updateDataConnection = updateDataConnection; exports.updateDataConnections = updateDataConnections;
