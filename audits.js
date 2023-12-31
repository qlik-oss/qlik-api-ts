"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkXJKF347Cjs = require('./chunk-XJKF347C.js');
require('./chunk-JZAPZIPR.js');
require('./chunk-P57PW2II.js');

// src/public/rest/audits.ts
var getAudits = async (query, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits",
  query,
  options
});
var getArchivedAudits = async (query, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/archive",
  query,
  options
});
var getAuditsSettings = async (options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/settings",
  options
});
var getAuditSources = async (options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/sources",
  options
});
var getAuditTypes = async (options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/types",
  options
});
var getAudit = async (id, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/{id}",
  pathVariables: { id },
  options
});
function clearCache() {
  return _chunkXJKF347Cjs.clearApiCache.call(void 0, "audits");
}
var auditsExport = {
  getAudits,
  getArchivedAudits,
  getAuditsSettings,
  getAuditSources,
  getAuditTypes,
  getAudit,
  clearCache
};
var audits_default = auditsExport;









exports.clearCache = clearCache; exports.default = audits_default; exports.getArchivedAudits = getArchivedAudits; exports.getAudit = getAudit; exports.getAuditSources = getAuditSources; exports.getAuditTypes = getAuditTypes; exports.getAudits = getAudits; exports.getAuditsSettings = getAuditsSettings;
