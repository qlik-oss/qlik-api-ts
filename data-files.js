import {
  clearApiCache,
  invokeFetch
} from "./chunks/FFGE2RP7.js";
import "./chunks/TT66UJZY.js";
import "./chunks/4HB3TAEO.js";

// src/public/rest/data-files.ts
var getDataFiles = async (query, options) => invokeFetch("data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files",
  query,
  options
});
var uploadDataFile = async (body, options) => invokeFetch("data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files",
  body,
  contentType: "multipart/form-data",
  options
});
var moveDataFiles = async (body, options) => invokeFetch("data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/actions/change-space",
  body,
  contentType: "application/json",
  options
});
var deleteDataFiles = async (body, options) => invokeFetch("data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/actions/delete",
  body,
  contentType: "application/json",
  options
});
var getDataFilesConnections = async (query, options) => invokeFetch("data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/connections",
  query,
  options
});
var getDataFileConnection = async (id, options) => invokeFetch("data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/connections/{id}",
  pathVariables: { id },
  options
});
var getDataFilesQuotas = async (options) => invokeFetch("data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/quotas",
  options
});
var deleteDataFile = async (id, options) => invokeFetch("data-files", {
  method: "delete",
  pathTemplate: "/api/v1/data-files/{id}",
  pathVariables: { id },
  options
});
var getDataFile = async (id, options) => invokeFetch("data-files", {
  method: "get",
  pathTemplate: "/api/v1/data-files/{id}",
  pathVariables: { id },
  options
});
var reuploadDataFile = async (id, body, options) => invokeFetch("data-files", {
  method: "put",
  pathTemplate: "/api/v1/data-files/{id}",
  pathVariables: { id },
  body,
  contentType: "multipart/form-data",
  options
});
var changeDataFileOwner = async (id, body, options) => invokeFetch("data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/{id}/actions/change-owner",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var moveDataFile = async (id, body, options) => invokeFetch("data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/{id}/actions/change-space",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return clearApiCache("data-files");
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
export {
  changeDataFileOwner,
  clearCache,
  data_files_default as default,
  deleteDataFile,
  deleteDataFiles,
  getDataFile,
  getDataFileConnection,
  getDataFiles,
  getDataFilesConnections,
  getDataFilesQuotas,
  moveDataFile,
  moveDataFiles,
  reuploadDataFile,
  uploadDataFile
};
