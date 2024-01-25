"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _QMWU5E4Djs = require('./chunks/QMWU5E4D.js');
require('./chunks/FG5GDUSZ.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/data-files.ts
var getDataFiles = async (query, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files",
  query,
  options
});
var uploadDataFile = async (body, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files",
  body,
  contentType: "multipart/form-data",
  options
});
var moveDataFiles = async (body, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/actions/change-space",
  body,
  contentType: "application/json",
  options
});
var deleteDataFiles = async (body, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/actions/delete",
  body,
  contentType: "application/json",
  options
});
var getDataFilesConnections = async (query, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/connections",
  query,
  options
});
var getDataFileConnection = async (id, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/connections/{id}",
  pathVariables: { id },
  options
});
var getDataFilesQuotas = async (options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/quotas",
  options
});
var deleteDataFile = async (id, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "delete",
  pathTemplate: "/api/v1/data-files/{id}",
  pathVariables: { id },
  options
});
var getDataFile = async (id, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/{id}",
  pathVariables: { id },
  options
});
var reuploadDataFile = async (id, body, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "put",
  pathTemplate: "/api/v1/data-files/{id}",
  pathVariables: { id },
  body,
  contentType: "multipart/form-data",
  options
});
var changeDataFileOwner = async (id, body, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/{id}/actions/change-owner",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var moveDataFile = async (id, body, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/{id}/actions/change-space",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _QMWU5E4Djs.clearApiCache.call(void 0, "data-files");
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
