"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/extensions.ts
var getExtensions = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions",
  options
});
var uploadExtension = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "extensions", {
  method: "post",
  pathTemplate: "/api/v1/extensions",
  body,
  options
});
var deleteExtension = async (id, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "extensions", {
  method: "delete",
  pathTemplate: "/api/v1/extensions/{id}",
  pathVariables: { id },
  options
});
var getExtension = async (id, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions/{id}",
  pathVariables: { id },
  options
});
var patchExtension = async (id, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "extensions", {
  method: "patch",
  pathTemplate: "/api/v1/extensions/{id}",
  pathVariables: { id },
  body,
  options
});
var downloadExtension = async (id, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions/{id}/file",
  pathVariables: { id },
  options
});
var downloadFileFromExtension = async (id, filepath, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "extensions", {
  method: "get",
  pathTemplate: "/api/v1/extensions/{id}/file/{filepath}",
  pathVariables: { id, filepath },
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "extensions");
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










exports.clearCache = clearCache; exports.default = extensions_default; exports.deleteExtension = deleteExtension; exports.downloadExtension = downloadExtension; exports.downloadFileFromExtension = downloadFileFromExtension; exports.getExtension = getExtension; exports.getExtensions = getExtensions; exports.patchExtension = patchExtension; exports.uploadExtension = uploadExtension;
