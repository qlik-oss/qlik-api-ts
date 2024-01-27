import {
  clearApiCache,
  invokeFetch
} from "./chunks/J3UXBHGX.mjs";
import "./chunks/E3HDOP72.mjs";
import "./chunks/VSY5YIQY.mjs";

// src/public/rest/csp-origins.ts
var getCSPEntries = async (query, options) => invokeFetch("csp-origins", {
  method: "get",
  pathTemplate: "/api/v1/csp-origins",
  query,
  options
});
var createCSPEntry = async (body, options) => invokeFetch("csp-origins", {
  method: "post",
  pathTemplate: "/api/v1/csp-origins",
  body,
  contentType: "application/json",
  options
});
var getCSPHeader = async (options) => invokeFetch("csp-origins", {
  method: "get",
  pathTemplate: "/api/v1/csp-origins/actions/generate-header",
  options
});
var deleteCSPEntry = async (id, options) => invokeFetch("csp-origins", {
  method: "delete",
  pathTemplate: "/api/v1/csp-origins/{id}",
  pathVariables: { id },
  options
});
var getCSPEntry = async (id, options) => invokeFetch("csp-origins", {
  method: "get",
  pathTemplate: "/api/v1/csp-origins/{id}",
  pathVariables: { id },
  options
});
var updateCSPEntry = async (id, body, options) => invokeFetch("csp-origins", {
  method: "put",
  pathTemplate: "/api/v1/csp-origins/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return clearApiCache("csp-origins");
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
export {
  clearCache,
  createCSPEntry,
  csp_origins_default as default,
  deleteCSPEntry,
  getCSPEntries,
  getCSPEntry,
  getCSPHeader,
  updateCSPEntry
};
