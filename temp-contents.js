"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkOULT3V2Ujs = require('./chunk-OULT3V2U.js');
require('./chunk-ZT4C7KCQ.js');

// src/public/rest/temp-contents.ts
var uploadTempFile = async (query, body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "temp-contents", {
  method: "post",
  pathTemplate: "/api/v1/temp-contents",
  query,
  body,
  options
});
var createTus = async (options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "temp-contents", {
  method: "post",
  pathTemplate: "/api/v1/temp-contents/files",
  options
});
var patchTus = async (id, body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "temp-contents", {
  method: "patch",
  pathTemplate: "/api/v1/temp-contents/files/{id}",
  pathVariables: { id },
  body,
  options
});
var downloadTempFile = async (id, query, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "temp-contents", {
  method: "get",
  pathTemplate: "/api/v1/temp-contents/{id}",
  pathVariables: { id },
  query,
  options
});
var getTempFileDetails = async (id, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "temp-contents", {
  method: "get",
  pathTemplate: "/api/v1/temp-contents/{id}/details",
  pathVariables: { id },
  options
});
function clearCache() {
  return _chunkOULT3V2Ujs.clearApiCache.call(void 0, "temp-contents");
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








exports.clearCache = clearCache; exports.createTus = createTus; exports.default = temp_contents_default; exports.downloadTempFile = downloadTempFile; exports.getTempFileDetails = getTempFileDetails; exports.patchTus = patchTus; exports.uploadTempFile = uploadTempFile;
