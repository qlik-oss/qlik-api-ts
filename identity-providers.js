"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/identity-providers.ts
var getIdps = async (query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "identity-providers", {
  method: "get",
  pathTemplate: "/api/v1/identity-providers",
  query,
  options
});
var createIdp = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "identity-providers", {
  method: "post",
  pathTemplate: "/api/v1/identity-providers",
  body,
  options
});
var getIdpWellKnownMetaData = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "identity-providers", {
  method: "get",
  pathTemplate: "/api/v1/identity-providers/.well-known/metadata.json",
  options
});
var getMyIdpMeta = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "identity-providers", {
  method: "get",
  pathTemplate: "/api/v1/identity-providers/me/meta",
  options
});
var getIdpStatuses = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "identity-providers", {
  method: "get",
  pathTemplate: "/api/v1/identity-providers/status",
  options
});
var deleteIdp = async (id, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "identity-providers", {
  method: "delete",
  pathTemplate: "/api/v1/identity-providers/{id}",
  pathVariables: { id },
  options
});
var getIdp = async (id, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "identity-providers", {
  method: "get",
  pathTemplate: "/api/v1/identity-providers/{id}",
  pathVariables: { id },
  options
});
var patchIdp = async (id, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "identity-providers", {
  method: "patch",
  pathTemplate: "/api/v1/identity-providers/{id}",
  pathVariables: { id },
  body,
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "identity-providers");
}
var identityProvidersExport = {
  getIdps,
  createIdp,
  getIdpWellKnownMetaData,
  getMyIdpMeta,
  getIdpStatuses,
  deleteIdp,
  getIdp,
  patchIdp,
  clearCache
};
var identity_providers_default = identityProvidersExport;











exports.clearCache = clearCache; exports.createIdp = createIdp; exports.default = identity_providers_default; exports.deleteIdp = deleteIdp; exports.getIdp = getIdp; exports.getIdpStatuses = getIdpStatuses; exports.getIdpWellKnownMetaData = getIdpWellKnownMetaData; exports.getIdps = getIdps; exports.getMyIdpMeta = getMyIdpMeta; exports.patchIdp = patchIdp;
