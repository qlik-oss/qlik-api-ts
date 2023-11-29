import {
  clearApiCache,
  invokeFetch
} from "./chunk-3YE7EI7I.mjs";
import "./chunk-WM7FQU2U.mjs";

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
  options
});
var moveDataFiles = async (body, options) => invokeFetch("data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/actions/change-space",
  body,
  options
});
var deleteDataFiles = async (body, options) => invokeFetch("data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/actions/delete",
  body,
  options
});
var getDataFileConnections = async (query, options) => invokeFetch("data-files", {
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
var getDataFileQuotas = async (options) => invokeFetch("data-files", {
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
  options
});
var changeDataFileOwner = async (id, body, options) => invokeFetch("data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/{id}/actions/change-owner",
  pathVariables: { id },
  body,
  options
});
var moveDataFile = async (id, body, options) => invokeFetch("data-files", {
  method: "post",
  pathTemplate: "/api/v1/data-files/{id}/actions/change-space",
  pathVariables: { id },
  body,
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
  getDataFileConnections,
  getDataFileConnection,
  getDataFileQuotas,
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
  getDataFileConnections,
  getDataFileQuotas,
  getDataFiles,
  moveDataFile,
  moveDataFiles,
  reuploadDataFile,
  uploadDataFile
};
