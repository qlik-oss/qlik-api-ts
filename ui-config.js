import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/ui-config.ts
async function getUiConfigPinnedLinks(options) {
  return invokeFetch("ui-config", {
    method: "get",
    pathTemplate: "/api/v1/ui-config/pinned-links",
    options
  });
}
async function createUiConfigPinnedLink(body, options) {
  return invokeFetch("ui-config", {
    method: "post",
    pathTemplate: "/api/v1/ui-config/pinned-links",
    body,
    contentType: "application/json",
    options
  });
}
async function createUiConfigPinnedLinks(body, options) {
  return invokeFetch("ui-config", {
    method: "post",
    pathTemplate: "/api/v1/ui-config/pinned-links/actions/bulk-create-pinned-links",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteAllUiConfigPinnedLinks(options) {
  return invokeFetch("ui-config", {
    method: "post",
    pathTemplate: "/api/v1/ui-config/pinned-links/actions/delete-all-pinned-links",
    options
  });
}
async function deleteUiConfigPinnedLink(id, options) {
  return invokeFetch("ui-config", {
    method: "delete",
    pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
    pathVariables: { id },
    options
  });
}
async function getUiConfigPinnedLink(id, options) {
  return invokeFetch("ui-config", {
    method: "get",
    pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
    pathVariables: { id },
    options
  });
}
async function patchUiConfigPinnedLink(id, body, options) {
  return invokeFetch("ui-config", {
    method: "patch",
    pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
function clearCache() {
  return clearApiCache("ui-config");
}
var uiConfigExport = {
  getUiConfigPinnedLinks,
  createUiConfigPinnedLink,
  createUiConfigPinnedLinks,
  deleteAllUiConfigPinnedLinks,
  deleteUiConfigPinnedLink,
  getUiConfigPinnedLink,
  patchUiConfigPinnedLink,
  clearCache
};
var ui_config_default = uiConfigExport;
export {
  clearCache,
  createUiConfigPinnedLink,
  createUiConfigPinnedLinks,
  ui_config_default as default,
  deleteAllUiConfigPinnedLinks,
  deleteUiConfigPinnedLink,
  getUiConfigPinnedLink,
  getUiConfigPinnedLinks,
  patchUiConfigPinnedLink
};
