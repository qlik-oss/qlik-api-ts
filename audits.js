import {
  clearApiCache,
  invokeFetch
} from "./chunks/P6F6QA4Y.js";
import "./chunks/DN5SVV4X.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/audits.ts
async function getAudits(query, options) {
  return invokeFetch("audits", {
    method: "get",
    pathTemplate: "/api/v1/audits",
    query,
    options
  });
}
async function getArchivedAudits(query, options) {
  return invokeFetch("audits", {
    method: "get",
    pathTemplate: "/api/v1/audits/archive",
    query,
    options
  });
}
async function getAuditsSettings(options) {
  return invokeFetch("audits", {
    method: "get",
    pathTemplate: "/api/v1/audits/settings",
    options
  });
}
async function getAuditSources(options) {
  return invokeFetch("audits", {
    method: "get",
    pathTemplate: "/api/v1/audits/sources",
    options
  });
}
async function getAuditTypes(options) {
  return invokeFetch("audits", {
    method: "get",
    pathTemplate: "/api/v1/audits/types",
    options
  });
}
async function getAudit(id, options) {
  return invokeFetch("audits", {
    method: "get",
    pathTemplate: "/api/v1/audits/{id}",
    pathVariables: { id },
    options
  });
}
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
