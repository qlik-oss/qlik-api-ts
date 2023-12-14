"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/data-credentials.ts
var deleteDataCredential = async (qID, query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-credentials", {
  method: "delete",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  options
});
var getDataCredential = async (qID, query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-credentials", {
  method: "get",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  options
});
var patchDataCredential = async (qID, query, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-credentials", {
  method: "patch",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  body,
  options
});
var updateDataCredential = async (qID, query, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-credentials", {
  method: "put",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  body,
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "data-credentials");
}
var dataCredentialsExport = {
  deleteDataCredential,
  getDataCredential,
  patchDataCredential,
  updateDataCredential,
  clearCache
};
var data_credentials_default = dataCredentialsExport;







exports.clearCache = clearCache; exports.default = data_credentials_default; exports.deleteDataCredential = deleteDataCredential; exports.getDataCredential = getDataCredential; exports.patchDataCredential = patchDataCredential; exports.updateDataCredential = updateDataCredential;
