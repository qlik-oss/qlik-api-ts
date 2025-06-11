import {
  clearApiCache,
  invokeFetch
} from "./chunks/LIEZG7IM.js";
import "./chunks/GPRUNZV4.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/csp-origins.ts
async function getCSPEntries(query, options) {
  return invokeFetch("csp-origins", {
    method: "get",
    pathTemplate: "/api/v1/csp-origins",
    query,
    options
  });
}
async function createCSPEntry(body, options) {
  return invokeFetch("csp-origins", {
    method: "post",
    pathTemplate: "/api/v1/csp-origins",
    body,
    contentType: "application/json",
    options
  });
}
async function getCSPHeader(options) {
  return invokeFetch("csp-origins", {
    method: "get",
    pathTemplate: "/api/v1/csp-origins/actions/generate-header",
    options
  });
}
async function deleteCSPEntry(id, options) {
  return invokeFetch("csp-origins", {
    method: "delete",
    pathTemplate: "/api/v1/csp-origins/{id}",
    pathVariables: { id },
    options
  });
}
async function getCSPEntry(id, options) {
  return invokeFetch("csp-origins", {
    method: "get",
    pathTemplate: "/api/v1/csp-origins/{id}",
    pathVariables: { id },
    options
  });
}
async function updateCSPEntry(id, body, options) {
  return invokeFetch("csp-origins", {
    method: "put",
    pathTemplate: "/api/v1/csp-origins/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
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
