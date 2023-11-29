import {
  clearApiCache,
  invokeFetch
} from "./chunk-3YE7EI7I.mjs";
import "./chunk-WM7FQU2U.mjs";

// src/public/rest/web-integrations.ts
var getWebIntegrations = async (query, options) => invokeFetch("web-integrations", {
  method: "get",
  pathTemplate: "/api/v1/web-integrations",
  query,
  options
});
var createWebIntegration = async (body, options) => invokeFetch("web-integrations", {
  method: "post",
  pathTemplate: "/api/v1/web-integrations",
  body,
  options
});
var deleteWebIntegration = async (id, options) => invokeFetch("web-integrations", {
  method: "delete",
  pathTemplate: "/api/v1/web-integrations/{id}",
  pathVariables: { id },
  options
});
var getWebIntegration = async (id, options) => invokeFetch("web-integrations", {
  method: "get",
  pathTemplate: "/api/v1/web-integrations/{id}",
  pathVariables: { id },
  options
});
var patchWebIntegration = async (id, body, options) => invokeFetch("web-integrations", {
  method: "patch",
  pathTemplate: "/api/v1/web-integrations/{id}",
  pathVariables: { id },
  body,
  options
});
function clearCache() {
  return clearApiCache("web-integrations");
}
var webIntegrationsExport = {
  getWebIntegrations,
  createWebIntegration,
  deleteWebIntegration,
  getWebIntegration,
  patchWebIntegration,
  clearCache
};
var web_integrations_default = webIntegrationsExport;
export {
  clearCache,
  createWebIntegration,
  web_integrations_default as default,
  deleteWebIntegration,
  getWebIntegration,
  getWebIntegrations,
  patchWebIntegration
};
