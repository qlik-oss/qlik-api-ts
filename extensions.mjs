import {
  clearApiCache,
  invokeFetch
} from "./chunk-TE7XMBT5.mjs";
import "./chunk-3SVRHJII.mjs";
import "./chunk-ZFXKCRJC.mjs";

// src/public/rest/extensions.ts
var getExtensions = async (options) => invokeFetch("extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions",
  options
});
var uploadExtension = async (body, options) => invokeFetch("extensions", {
  method: "post",
  pathTemplate: "/api/v1/extensions",
  body,
  contentType: "multipart/form-data",
  options
});
var deleteExtension = async (id, options) => invokeFetch("extensions", {
  method: "delete",
  pathTemplate: "/api/v1/extensions/{id}",
  pathVariables: { id },
  options
});
var getExtension = async (id, options) => invokeFetch("extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions/{id}",
  pathVariables: { id },
  options
});
var patchExtension = async (id, body, options) => invokeFetch("extensions", {
  method: "patch",
  pathTemplate: "/api/v1/extensions/{id}",
  pathVariables: { id },
  body,
  contentType: "multipart/form-data",
  options
});
var downloadExtension = async (id, options) => invokeFetch("extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions/{id}/file",
  pathVariables: { id },
  options
});
var downloadFileFromExtension = async (id, filepath, options) => invokeFetch("extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions/{id}/file/{filepath}",
  pathVariables: { id, filepath },
  options
});
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
