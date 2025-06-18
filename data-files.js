import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/data-files.ts
async function getDataFiles(query, options) {
  return invokeFetch("data-files", {
    method: "get",
    pathTemplate: "/api/v1/data-files",
    query,
    options
  });
}
async function uploadDataFile(body, options) {
  return invokeFetch("data-files", {
    method: "post",
    pathTemplate: "/api/v1/data-files",
    body,
    contentType: "multipart/form-data",
    options
  });
}
async function moveDataFiles(body, options) {
  return invokeFetch("data-files", {
    method: "post",
    pathTemplate: "/api/v1/data-files/actions/change-space",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteDataFiles(body, options) {
  return invokeFetch("data-files", {
    method: "post",
    pathTemplate: "/api/v1/data-files/actions/delete",
    body,
    contentType: "application/json",
    options
  });
}
async function getDataFilesConnections(query, options) {
  return invokeFetch("data-files", {
    method: "get",
    pathTemplate: "/api/v1/data-files/connections",
    query,
    options
  });
}
async function getDataFileConnection(id, options) {
  return invokeFetch("data-files", {
    method: "get",
    pathTemplate: "/api/v1/data-files/connections/{id}",
    pathVariables: { id },
    options
  });
}
async function getDataFilesQuotas(options) {
  return invokeFetch("data-files", {
    method: "get",
    pathTemplate: "/api/v1/data-files/quotas",
    options
  });
}
async function deleteDataFile(id, options) {
  return invokeFetch("data-files", {
    method: "delete",
    pathTemplate: "/api/v1/data-files/{id}",
    pathVariables: { id },
    options
  });
}
async function getDataFile(id, options) {
  return invokeFetch("data-files", {
    method: "get",
    pathTemplate: "/api/v1/data-files/{id}",
    pathVariables: { id },
    options
  });
}
async function reuploadDataFile(id, body, options) {
  return invokeFetch("data-files", {
    method: "put",
    pathTemplate: "/api/v1/data-files/{id}",
    pathVariables: { id },
    body,
    contentType: "multipart/form-data",
    options
  });
}
async function changeDataFileOwner(id, body, options) {
  return invokeFetch("data-files", {
    method: "post",
    pathTemplate: "/api/v1/data-files/{id}/actions/change-owner",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function moveDataFile(id, body, options) {
  return invokeFetch("data-files", {
    method: "post",
    pathTemplate: "/api/v1/data-files/{id}/actions/change-space",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
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
