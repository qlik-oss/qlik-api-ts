"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6JERR27Kjs = require('./chunk-6JERR27K.js');
require('./chunk-H7SAZYEE.js');

// src/public/rest/csp-origins.ts
var getCSPEntries = async (query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "csp-origins", {
  method: "get",
  pathTemplate: "/api/v1/csp-origins",
  query,
  options
});
var createCSPEntry = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "csp-origins", {
  method: "post",
  pathTemplate: "/api/v1/csp-origins",
  body,
  options
});
var getCSPHeader = async (options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "csp-origins", {
  method: "get",
  pathTemplate: "/api/v1/csp-origins/actions/generate-header",
  options
});
var deleteCSPEntry = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "csp-origins", {
  method: "delete",
  pathTemplate: "/api/v1/csp-origins/{id}",
  pathVariables: { id },
  options
});
var getCSPEntry = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "csp-origins", {
  method: "get",
  pathTemplate: "/api/v1/csp-origins/{id}",
  pathVariables: { id },
  options
});
var updateCSPEntry = async (id, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "csp-origins", {
  method: "put",
  pathTemplate: "/api/v1/csp-origins/{id}",
  pathVariables: { id },
  body,
  options
});
function clearCache() {
  return _chunk6JERR27Kjs.clearApiCache.call(void 0, "csp-origins");
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
