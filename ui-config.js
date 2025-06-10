import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/ui-config.ts
var getUiConfigPinnedLinks = async (options) => invokeFetch("ui-config", {
  method: "get",
  pathTemplate: "/api/v1/ui-config/pinned-links",
  options
});
var createUiConfigPinnedLink = async (body, options) => invokeFetch("ui-config", {
  method: "post",
  pathTemplate: "/api/v1/ui-config/pinned-links",
  body,
  contentType: "application/json",
  options
});
var createUiConfigPinnedLinks = async (body, options) => invokeFetch("ui-config", {
  method: "post",
  pathTemplate: "/api/v1/ui-config/pinned-links/actions/bulk-create-pinned-links",
  body,
  contentType: "application/json",
  options
});
var deleteAllUiConfigPinnedLinks = async (options) => invokeFetch("ui-config", {
  method: "post",
  pathTemplate: "/api/v1/ui-config/pinned-links/actions/delete-all-pinned-links",
  options
});
var deleteUiConfigPinnedLink = async (id, options) => invokeFetch("ui-config", {
  method: "delete",
  pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
  pathVariables: { id },
  options
});
var getUiConfigPinnedLink = async (id, options) => invokeFetch("ui-config", {
  method: "get",
  pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
  pathVariables: { id },
  options
});
var patchUiConfigPinnedLink = async (id, body, options) => invokeFetch("ui-config", {
  method: "patch",
  pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
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
