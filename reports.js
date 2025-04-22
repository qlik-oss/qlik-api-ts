import {
  clearApiCache,
  invokeFetch
} from "./chunks/YKZ2QYHN.js";
import "./chunks/DLKLPD7T.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/reports.ts
var createReport = async (body, options) => invokeFetch("reports", {
  method: "post",
  pathTemplate: "/api/v1/reports",
  body,
  contentType: "application/json",
  options
});
var getReportStatus = async (id, options) => invokeFetch("reports", {
  method: "get",
  pathTemplate: "/api/v1/reports/{id}/status",
  pathVariables: { id },
  options
});
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
