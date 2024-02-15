import {
  clearApiCache,
  invokeFetch
} from "./chunks/GSEWMHIF.mjs";
import "./chunks/64DUENIM.mjs";
import "./chunks/VSY5YIQY.mjs";

// src/public/rest/reloads.ts
var getReloads = async (query, options) => invokeFetch("reloads", {
  method: "get",
  pathTemplate: "/api/v1/reloads",
  query,
  options
});
var queueReload = async (body, options) => invokeFetch("reloads", {
  method: "post",
  pathTemplate: "/api/v1/reloads",
  body,
  contentType: "application/json",
  options
});
var getReload = async (reloadId, options) => invokeFetch("reloads", {
  method: "get",
  pathTemplate: "/api/v1/reloads/{reloadId}",
  pathVariables: { reloadId },
  options
});
var cancelReload = async (reloadId, options) => invokeFetch("reloads", {
  method: "post",
  pathTemplate: "/api/v1/reloads/{reloadId}/actions/cancel",
  pathVariables: { reloadId },
  options
});
function clearCache() {
  return clearApiCache("reloads");
}
var reloadsExport = { getReloads, queueReload, getReload, cancelReload, clearCache };
var reloads_default = reloadsExport;
export {
  cancelReload,
  clearCache,
  reloads_default as default,
  getReload,
  getReloads,
  queueReload
};
