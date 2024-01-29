import {
  clearApiCache,
  invokeFetch
} from "./chunks/VCYQUP4Y.mjs";
import "./chunks/X474LM7J.mjs";
import "./chunks/VSY5YIQY.mjs";

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
  contentType: "application/json",
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
  contentType: "application/json",
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
