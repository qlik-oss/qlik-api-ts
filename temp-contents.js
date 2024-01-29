"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _TH75GYUYjs = require('./chunks/TH75GYUY.js');
require('./chunks/SEXEAWEC.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/temp-contents.ts
var uploadTempFile = async (query, body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "temp-contents", {
  method: "post",
  pathTemplate: "/api/v1/temp-contents",
  query,
  body,
  contentType: "application/octet-stream",
  options
});
var downloadTempFile = async (id, query, options) => _TH75GYUYjs.invokeFetch.call(void 0, "temp-contents", {
  method: "get",
  pathTemplate: "/api/v1/temp-contents/{id}",
  pathVariables: { id },
  query,
  options
});
var getTempFileDetails = async (id, options) => _TH75GYUYjs.invokeFetch.call(void 0, "temp-contents", {
  method: "get",
  pathTemplate: "/api/v1/temp-contents/{id}/details",
  pathVariables: { id },
  options
});
function clearCache() {
  return _TH75GYUYjs.clearApiCache.call(void 0, "temp-contents");
}
var tempContentsExport = { uploadTempFile, downloadTempFile, getTempFileDetails, clearCache };
var temp_contents_default = tempContentsExport;






exports.clearCache = clearCache; exports.default = temp_contents_default; exports.downloadTempFile = downloadTempFile; exports.getTempFileDetails = getTempFileDetails; exports.uploadTempFile = uploadTempFile;
