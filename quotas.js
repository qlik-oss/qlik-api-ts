"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/quotas.ts
var getQuotas = async (query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas",
  query,
  options
});
var getQuota = async (id, query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas/{id}",
  pathVariables: { id },
  query,
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "quotas");
}
var quotasExport = { getQuotas, getQuota, clearCache };
var quotas_default = quotasExport;





exports.clearCache = clearCache; exports.default = quotas_default; exports.getQuota = getQuota; exports.getQuotas = getQuotas;
