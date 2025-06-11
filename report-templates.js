import {
  clearApiCache,
  invokeFetch
} from "./chunks/LIEZG7IM.js";
import "./chunks/GPRUNZV4.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/report-templates.ts
async function getReportTemplates(query, options) {
  return invokeFetch("report-templates", {
    method: "get",
    pathTemplate: "/api/v1/report-templates",
    query,
    options
  });
}
async function createReportTemplate(body, options) {
  return invokeFetch("report-templates", {
    method: "post",
    pathTemplate: "/api/v1/report-templates",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteReportTemplate(id, options) {
  return invokeFetch("report-templates", {
    method: "delete",
    pathTemplate: "/api/v1/report-templates/{id}",
    pathVariables: { id },
    options
  });
}
async function getReportTemplate(id, options) {
  return invokeFetch("report-templates", {
    method: "get",
    pathTemplate: "/api/v1/report-templates/{id}",
    pathVariables: { id },
    options
  });
}
async function patchReportTemplate(id, body, options) {
  return invokeFetch("report-templates", {
    method: "patch",
    pathTemplate: "/api/v1/report-templates/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function updateReportTemplate(id, body, options) {
  return invokeFetch("report-templates", {
    method: "put",
    pathTemplate: "/api/v1/report-templates/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function downloadReportTemplate(id, options) {
  return invokeFetch("report-templates", {
    method: "post",
    pathTemplate: "/api/v1/report-templates/{id}/actions/download",
    pathVariables: { id },
    options
  });
}
function clearCache() {
  return clearApiCache("report-templates");
}
var reportTemplatesExport = {
  getReportTemplates,
  createReportTemplate,
  deleteReportTemplate,
  getReportTemplate,
  patchReportTemplate,
  updateReportTemplate,
  downloadReportTemplate,
  clearCache
};
var report_templates_default = reportTemplatesExport;
export {
  clearCache,
  createReportTemplate,
  report_templates_default as default,
  deleteReportTemplate,
  downloadReportTemplate,
  getReportTemplate,
  getReportTemplates,
  patchReportTemplate,
  updateReportTemplate
};
