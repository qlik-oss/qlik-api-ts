import {
  clearApiCache,
  invokeFetch
} from "./chunk-3YE7EI7I.mjs";
import "./chunk-WM7FQU2U.mjs";

// src/public/rest/temp-contents.ts
var uploadTempFile = async (query, body, options) => invokeFetch("temp-contents", {
  method: "post",
  pathTemplate: "/api/v1/temp-contents",
  query,
  body,
  options
});
var createTus = async (options) => invokeFetch("temp-contents", {
  method: "post",
  pathTemplate: "/api/v1/temp-contents/files",
  options
});
var patchTus = async (id, body, options) => invokeFetch("temp-contents", {
  method: "patch",
  pathTemplate: "/api/v1/temp-contents/files/{id}",
  pathVariables: { id },
  body,
  options
});
var downloadTempFile = async (id, query, options) => invokeFetch("temp-contents", {
  method: "get",
  pathTemplate: "/api/v1/temp-contents/{id}",
  pathVariables: { id },
  query,
  options
});
var getTempFileDetails = async (id, options) => invokeFetch("temp-contents", {
  method: "get",
  pathTemplate: "/api/v1/temp-contents/{id}/details",
  pathVariables: { id },
  options
});
function clearCache() {
  return clearApiCache("temp-contents");
}
var tempContentsExport = {
  uploadTempFile,
  createTus,
  patchTus,
  downloadTempFile,
  getTempFileDetails,
  clearCache
};
var temp_contents_default = tempContentsExport;
export {
  clearCache,
  createTus,
  temp_contents_default as default,
  downloadTempFile,
  getTempFileDetails,
  patchTus,
  uploadTempFile
};
