"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkJNGURO23js = require('./chunk-JNGURO23.js');
require('./chunk-2STFUQKQ.js');
require('./chunk-P57PW2II.js');

// src/public/rest/data-credentials.ts
var deleteDataCredential = async (qID, query, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "data-credentials", {
  method: "delete",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  options
});
var getDataCredential = async (qID, query, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "data-credentials", {
  method: "get",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  options
});
var patchDataCredential = async (qID, query, body, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "data-credentials", {
  method: "patch",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  body,
  contentType: "application/json",
  options
});
var updateDataCredential = async (qID, query, body, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "data-credentials", {
  method: "put",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _chunkJNGURO23js.clearApiCache.call(void 0, "data-credentials");
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
