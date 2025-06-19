import {
  clearApiCache,
  invokeFetch
} from "./chunks/P6F6QA4Y.js";
import "./chunks/DN5SVV4X.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/extensions.ts
async function getExtensions(options) {
  return invokeFetch("extensions", {
    method: "get",
    pathTemplate: "/api/v1/extensions",
    options
  });
}
async function uploadExtension(body, options) {
  return invokeFetch("extensions", {
    method: "post",
    pathTemplate: "/api/v1/extensions",
    body,
    contentType: "multipart/form-data",
    options
  });
}
async function deleteExtension(id, options) {
  return invokeFetch("extensions", {
    method: "delete",
    pathTemplate: "/api/v1/extensions/{id}",
    pathVariables: { id },
    options
  });
}
async function getExtension(id, options) {
  return invokeFetch("extensions", {
    method: "get",
    pathTemplate: "/api/v1/extensions/{id}",
    pathVariables: { id },
    options
  });
}
async function patchExtension(id, body, options) {
  return invokeFetch("extensions", {
    method: "patch",
    pathTemplate: "/api/v1/extensions/{id}",
    pathVariables: { id },
    body,
    contentType: "multipart/form-data",
    options
  });
}
async function downloadExtension(id, options) {
  return invokeFetch("extensions", {
    method: "get",
    pathTemplate: "/api/v1/extensions/{id}/file",
    pathVariables: { id },
    options
  });
}
async function downloadFileFromExtension(id, filepath, options) {
  return invokeFetch("extensions", {
    method: "get",
    pathTemplate: "/api/v1/extensions/{id}/file/{filepath}",
    pathVariables: { id, filepath },
    options
  });
}
function clearCache() {
  return clearApiCache("extensions");
}
var extensionsExport = {
  getExtensions,
  uploadExtension,
  deleteExtension,
  getExtension,
  patchExtension,
  downloadExtension,
  downloadFileFromExtension,
  clearCache
};
var extensions_default = extensionsExport;
export {
  clearCache,
  extensions_default as default,
  deleteExtension,
  downloadExtension,
  downloadFileFromExtension,
  getExtension,
  getExtensions,
  patchExtension,
  uploadExtension
};
