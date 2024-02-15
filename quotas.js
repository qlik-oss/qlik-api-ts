"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _LHCJKIEOjs = require('./chunks/LHCJKIEO.js');
require('./chunks/4V5AAWUI.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/quotas.ts
var getQuotas = async (query, options) => _LHCJKIEOjs.invokeFetch.call(void 0, "quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas",
  query,
  options
});
var getQuota = async (id, query, options) => _LHCJKIEOjs.invokeFetch.call(void 0, "quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas/{id}",
  pathVariables: { id },
  query,
  options
});
function clearCache() {
  return _LHCJKIEOjs.clearApiCache.call(void 0, "quotas");
}
var quotasExport = { getQuotas, getQuota, clearCache };
var quotas_default = quotasExport;





exports.clearCache = clearCache; exports.default = quotas_default; exports.getQuota = getQuota; exports.getQuotas = getQuotas;
