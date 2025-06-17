import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/reloads.ts
async function getReloads(query, options) {
  return invokeFetch("reloads", {
    method: "get",
    pathTemplate: "/api/v1/reloads",
    query,
    options
  });
}
async function queueReload(body, options) {
  return invokeFetch("reloads", {
    method: "post",
    pathTemplate: "/api/v1/reloads",
    body,
    contentType: "application/json",
    options
  });
}
async function getReload(reloadId, options) {
  return invokeFetch("reloads", {
    method: "get",
    pathTemplate: "/api/v1/reloads/{reloadId}",
    pathVariables: { reloadId },
    options
  });
}
async function cancelReload(reloadId, options) {
  return invokeFetch("reloads", {
    method: "post",
    pathTemplate: "/api/v1/reloads/{reloadId}/actions/cancel",
    pathVariables: { reloadId },
    options
  });
}
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
