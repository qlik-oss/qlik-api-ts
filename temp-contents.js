import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/temp-contents.ts
async function uploadTempFile(query, body, options) {
  return invokeFetch("temp-contents", {
    method: "post",
    pathTemplate: "/api/v1/temp-contents",
    query,
    body,
    contentType: "application/octet-stream",
    options
  });
}
async function downloadTempFile(id, query, options) {
  return invokeFetch("temp-contents", {
    method: "get",
    pathTemplate: "/api/v1/temp-contents/{id}",
    pathVariables: { id },
    query,
    options
  });
}
async function getTempFileDetails(id, options) {
  return invokeFetch("temp-contents", {
    method: "get",
    pathTemplate: "/api/v1/temp-contents/{id}/details",
    pathVariables: { id },
    options
  });
}
function clearCache() {
  return clearApiCache("temp-contents");
}
var tempContentsExport = { uploadTempFile, downloadTempFile, getTempFileDetails, clearCache };
var temp_contents_default = tempContentsExport;
export {
  clearCache,
  temp_contents_default as default,
  downloadTempFile,
  getTempFileDetails,
  uploadTempFile
};
