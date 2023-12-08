"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6JERR27Kjs = require('./chunk-6JERR27K.js');
require('./chunk-H7SAZYEE.js');

// src/public/rest/temp-contents.ts
var uploadTempFile = async (query, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "temp-contents", {
  method: "post",
  pathTemplate: "/api/v1/temp-contents",
  query,
  body,
  options
});
var downloadTempFile = async (id, query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "temp-contents", {
  method: "get",
  pathTemplate: "/api/v1/temp-contents/{id}",
  pathVariables: { id },
  query,
  options
});
var getTempFileDetails = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "temp-contents", {
  method: "get",
  pathTemplate: "/api/v1/temp-contents/{id}/details",
  pathVariables: { id },
  options
});
function clearCache() {
  return _chunk6JERR27Kjs.clearApiCache.call(void 0, "temp-contents");
}
var tempContentsExport = { uploadTempFile, downloadTempFile, getTempFileDetails, clearCache };
var temp_contents_default = tempContentsExport;






exports.clearCache = clearCache; exports.default = temp_contents_default; exports.downloadTempFile = downloadTempFile; exports.getTempFileDetails = getTempFileDetails; exports.uploadTempFile = uploadTempFile;
