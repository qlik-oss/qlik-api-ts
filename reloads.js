"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/reloads.ts
var getReloads = async (query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "reloads", {
  method: "get",
  pathTemplate: "/api/v1/reloads",
  query,
  options
});
var queueReload = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "reloads", {
  method: "post",
  pathTemplate: "/api/v1/reloads",
  body,
  options
});
var getReload = async (reloadId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "reloads", {
  method: "get",
  pathTemplate: "/api/v1/reloads/{reloadId}",
  pathVariables: { reloadId },
  options
});
var cancelReload = async (reloadId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "reloads", {
  method: "post",
  pathTemplate: "/api/v1/reloads/{reloadId}/actions/cancel",
  pathVariables: { reloadId },
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "reloads");
}
var reloadsExport = { getReloads, queueReload, getReload, cancelReload, clearCache };
var reloads_default = reloadsExport;







exports.cancelReload = cancelReload; exports.clearCache = clearCache; exports.default = reloads_default; exports.getReload = getReload; exports.getReloads = getReloads; exports.queueReload = queueReload;
