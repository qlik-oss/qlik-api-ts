import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/report-templates.ts
var getReportTemplates = async (query, options) => invokeFetch("report-templates", {
  method: "get",
  pathTemplate: "/api/v1/report-templates",
  query,
  options
});
var createReportTemplate = async (body, options) => invokeFetch("report-templates", {
  method: "post",
  pathTemplate: "/api/v1/report-templates",
  body,
  contentType: "application/json",
  options
});
var deleteReportTemplate = async (id, options) => invokeFetch("report-templates", {
  method: "delete",
  pathTemplate: "/api/v1/report-templates/{id}",
  pathVariables: { id },
  options
});
var getReportTemplate = async (id, options) => invokeFetch("report-templates", {
  method: "get",
  pathTemplate: "/api/v1/report-templates/{id}",
  pathVariables: { id },
  options
});
var patchReportTemplate = async (id, body, options) => invokeFetch("report-templates", {
  method: "patch",
  pathTemplate: "/api/v1/report-templates/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var updateReportTemplate = async (id, body, options) => invokeFetch("report-templates", {
  method: "put",
  pathTemplate: "/api/v1/report-templates/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var downloadReportTemplate = async (id, options) => invokeFetch("report-templates", {
  method: "post",
  pathTemplate: "/api/v1/report-templates/{id}/actions/download",
  pathVariables: { id },
  options
});
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
