import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/reports.ts
async function createReport(body, options) {
  return invokeFetch("reports", {
    method: "post",
    pathTemplate: "/api/v1/reports",
    body,
    contentType: "application/json",
    options
  });
}
async function getReportStatus(id, options) {
  return invokeFetch("reports", {
    method: "get",
    pathTemplate: "/api/v1/reports/{id}/status",
    pathVariables: { id },
    options
  });
}
function clearCache() {
  return clearApiCache("reports");
}
var reportsExport = { createReport, getReportStatus, clearCache };
var reports_default = reportsExport;
export {
  clearCache,
  createReport,
  reports_default as default,
  getReportStatus
};
