"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/data-files.ts
var getDataFiles = async (query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files",
  query,
  options
});
var uploadDataFile = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files",
  body,
  options
});
var moveDataFiles = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/actions/change-space",
  body,
  options
});
var deleteDataFiles = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/actions/delete",
  body,
  options
});
var getDataFilesConnections = async (query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/connections",
  query,
  options
});
var getDataFileConnection = async (id, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/connections/{id}",
  pathVariables: { id },
  options
});
var getDataFilesQuotas = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/quotas",
  options
});
var deleteDataFile = async (id, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "delete",
  pathTemplate: "/api/v1/data-files/{id}",
  pathVariables: { id },
  options
});
var getDataFile = async (id, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/{id}",
  pathVariables: { id },
  options
});
var reuploadDataFile = async (id, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "put",
  pathTemplate: "/api/v1/data-files/{id}",
  pathVariables: { id },
  body,
  options
});
var changeDataFileOwner = async (id, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/{id}/actions/change-owner",
  pathVariables: { id },
  body,
  options
});
var moveDataFile = async (id, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/{id}/actions/change-space",
  pathVariables: { id },
  body,
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "data-files");
}
var dataFilesExport = {
  getDataFiles,
  uploadDataFile,
  moveDataFiles,
  deleteDataFiles,
  getDataFilesConnections,
  getDataFileConnection,
  getDataFilesQuotas,
  deleteDataFile,
  getDataFile,
  reuploadDataFile,
  changeDataFileOwner,
  moveDataFile,
  clearCache
};
var data_files_default = dataFilesExport;















exports.changeDataFileOwner = changeDataFileOwner; exports.clearCache = clearCache; exports.default = data_files_default; exports.deleteDataFile = deleteDataFile; exports.deleteDataFiles = deleteDataFiles; exports.getDataFile = getDataFile; exports.getDataFileConnection = getDataFileConnection; exports.getDataFiles = getDataFiles; exports.getDataFilesConnections = getDataFilesConnections; exports.getDataFilesQuotas = getDataFilesQuotas; exports.moveDataFile = moveDataFile; exports.moveDataFiles = moveDataFiles; exports.reuploadDataFile = reuploadDataFile; exports.uploadDataFile = uploadDataFile;
