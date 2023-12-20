"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkJNGURO23js = require('./chunk-JNGURO23.js');
require('./chunk-2STFUQKQ.js');
require('./chunk-P57PW2II.js');

// src/public/rest/quotas.ts
var getQuotas = async (query, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas",
  query,
  options
});
var getQuota = async (id, query, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas/{id}",
  pathVariables: { id },
  query,
  options
});
function clearCache() {
  return _chunkJNGURO23js.clearApiCache.call(void 0, "quotas");
}
var quotasExport = { getQuotas, getQuota, clearCache };
var quotas_default = quotasExport;





exports.clearCache = clearCache; exports.default = quotas_default; exports.getQuota = getQuota; exports.getQuotas = getQuotas;
