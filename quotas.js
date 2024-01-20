"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _DMU5PHUVjs = require('./chunks/DMU5PHUV.js');
require('./chunks/MBVF2FVP.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/quotas.ts
var getQuotas = async (query, options) => _DMU5PHUVjs.invokeFetch.call(void 0, "quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas",
  query,
  options
});
var getQuota = async (id, query, options) => _DMU5PHUVjs.invokeFetch.call(void 0, "quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas/{id}",
  pathVariables: { id },
  query,
  options
});
function clearCache() {
  return _DMU5PHUVjs.clearApiCache.call(void 0, "quotas");
}
var quotasExport = { getQuotas, getQuota, clearCache };
var quotas_default = quotasExport;





exports.clearCache = clearCache; exports.default = quotas_default; exports.getQuota = getQuota; exports.getQuotas = getQuotas;
