"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6JERR27Kjs = require('./chunk-6JERR27K.js');
require('./chunk-H7SAZYEE.js');

// src/public/rest/reloads.ts
var getReloads = async (query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "reloads", {
  method: "get",
  pathTemplate: "/api/v1/reloads",
  query,
  options
});
var queueReload = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "reloads", {
  method: "post",
  pathTemplate: "/api/v1/reloads",
  body,
  options
});
var getReload = async (reloadId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "reloads", {
  method: "get",
  pathTemplate: "/api/v1/reloads/{reloadId}",
  pathVariables: { reloadId },
  options
});
var cancelReload = async (reloadId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "reloads", {
  method: "post",
  pathTemplate: "/api/v1/reloads/{reloadId}/actions/cancel",
  pathVariables: { reloadId },
  options
});
function clearCache() {
  return _chunk6JERR27Kjs.clearApiCache.call(void 0, "reloads");
}
var reloadsExport = { getReloads, queueReload, getReload, cancelReload, clearCache };
var reloads_default = reloadsExport;







exports.cancelReload = cancelReload; exports.clearCache = clearCache; exports.default = reloads_default; exports.getReload = getReload; exports.getReloads = getReloads; exports.queueReload = queueReload;
