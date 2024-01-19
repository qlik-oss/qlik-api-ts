"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _EL2GSPZZjs = require('./chunks/EL2GSPZZ.js');
require('./chunks/W2I5OQA5.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/audits.ts
var getAudits = async (query, options) => _EL2GSPZZjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits",
  query,
  options
});
var getArchivedAudits = async (query, options) => _EL2GSPZZjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/archive",
  query,
  options
});
var getAuditsSettings = async (options) => _EL2GSPZZjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/settings",
  options
});
var getAuditSources = async (options) => _EL2GSPZZjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/sources",
  options
});
var getAuditTypes = async (options) => _EL2GSPZZjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/types",
  options
});
var getAudit = async (id, options) => _EL2GSPZZjs.invokeFetch.call(void 0, "audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/{id}",
  pathVariables: { id },
  options
});
function clearCache() {
  return _EL2GSPZZjs.clearApiCache.call(void 0, "audits");
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
