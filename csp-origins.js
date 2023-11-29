"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkOULT3V2Ujs = require('./chunk-OULT3V2U.js');
require('./chunk-ZT4C7KCQ.js');

// src/public/rest/csp-origins.ts
var getCSPEntries = async (query, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "csp-origins", {
  method: "get",
  pathTemplate: "/api/v1/csp-origins",
  query,
  options
});
var createCSPEntry = async (body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "csp-origins", {
  method: "post",
  pathTemplate: "/api/v1/csp-origins",
  body,
  options
});
var getCSPHeader = async (options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "csp-origins", {
  method: "get",
  pathTemplate: "/api/v1/csp-origins/actions/generate-header",
  options
});
var deleteCSPEntry = async (id, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "csp-origins", {
  method: "delete",
  pathTemplate: "/api/v1/csp-origins/{id}",
  pathVariables: { id },
  options
});
var getCSPEntry = async (id, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "csp-origins", {
  method: "get",
  pathTemplate: "/api/v1/csp-origins/{id}",
  pathVariables: { id },
  options
});
var updateCSPEntry = async (id, body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "csp-origins", {
  method: "put",
  pathTemplate: "/api/v1/csp-origins/{id}",
  pathVariables: { id },
  body,
  options
});
function clearCache() {
  return _chunkOULT3V2Ujs.clearApiCache.call(void 0, "csp-origins");
}
var cspOriginsExport = {
  getCSPEntries,
  createCSPEntry,
  getCSPHeader,
  deleteCSPEntry,
  getCSPEntry,
  updateCSPEntry,
  clearCache
};
var csp_origins_default = cspOriginsExport;









exports.clearCache = clearCache; exports.createCSPEntry = createCSPEntry; exports.default = csp_origins_default; exports.deleteCSPEntry = deleteCSPEntry; exports.getCSPEntries = getCSPEntries; exports.getCSPEntry = getCSPEntry; exports.getCSPHeader = getCSPHeader; exports.updateCSPEntry = updateCSPEntry;
