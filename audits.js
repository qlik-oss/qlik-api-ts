"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _QMWU5E4Djs = require('./chunks/QMWU5E4D.js');
require('./chunks/FG5GDUSZ.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/audits.ts
var getAudits = async (query, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits",
  query,
  options
});
var getArchivedAudits = async (query, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/archive",
  query,
  options
});
var getAuditsSettings = async (options) => _QMWU5E4Djs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/settings",
  options
});
var getAuditSources = async (options) => _QMWU5E4Djs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/sources",
  options
});
var getAuditTypes = async (options) => _QMWU5E4Djs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/types",
  options
});
var getAudit = async (id, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/{id}",
  pathVariables: { id },
  options
});
function clearCache() {
  return _QMWU5E4Djs.clearApiCache.call(void 0, "audits");
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
