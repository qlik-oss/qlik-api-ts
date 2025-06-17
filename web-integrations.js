import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/web-integrations.ts
async function getWebIntegrations(query, options) {
  return invokeFetch("web-integrations", {
    method: "get",
    pathTemplate: "/api/v1/web-integrations",
    query,
    options
  });
}
async function createWebIntegration(body, options) {
  return invokeFetch("web-integrations", {
    method: "post",
    pathTemplate: "/api/v1/web-integrations",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteWebIntegration(id, options) {
  return invokeFetch("web-integrations", {
    method: "delete",
    pathTemplate: "/api/v1/web-integrations/{id}",
    pathVariables: { id },
    options
  });
}
async function getWebIntegration(id, options) {
  return invokeFetch("web-integrations", {
    method: "get",
    pathTemplate: "/api/v1/web-integrations/{id}",
    pathVariables: { id },
    options
  });
}
async function patchWebIntegration(id, body, options) {
  return invokeFetch("web-integrations", {
    method: "patch",
    pathTemplate: "/api/v1/web-integrations/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
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
