import {
  clearApiCache,
  invokeFetch
} from "./chunks/QOUQIYWW.js";
import "./chunks/TDKU6D4Z.js";
import "./chunks/4HB3TAEO.js";

// src/public/rest/audits.ts
var getAudits = async (query, options) => invokeFetch("audits", {
  method: "get",
  pathTemplate: "/api/v1/audits",
  query,
  options
});
var getArchivedAudits = async (query, options) => invokeFetch("audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/archive",
  query,
  options
});
var getAuditsSettings = async (options) => invokeFetch("audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/settings",
  options
});
var getAuditSources = async (options) => invokeFetch("audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/sources",
  options
});
var getAuditTypes = async (options) => invokeFetch("audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/types",
  options
});
var getAudit = async (id, options) => invokeFetch("audits", {
  method: "get",
  pathTemplate: "/api/v1/audits/{id}",
  pathVariables: { id },
  options
});
function clearCache() {
  return clearApiCache("audits");
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
export {
  clearCache,
  audits_default as default,
  getArchivedAudits,
  getAudit,
  getAuditSources,
  getAuditTypes,
  getAudits,
  getAuditsSettings
};
