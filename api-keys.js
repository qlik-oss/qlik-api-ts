import {
  clearApiCache,
  invokeFetch
} from "./chunks/P6F6QA4Y.js";
import "./chunks/DN5SVV4X.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/api-keys.ts
async function getApiKeys(query, options) {
  return invokeFetch("api-keys", {
    method: "get",
    pathTemplate: "/api/v1/api-keys",
    query,
    options
  });
}
async function createApiKey(body, options) {
  return invokeFetch("api-keys", {
    method: "post",
    pathTemplate: "/api/v1/api-keys",
    body,
    contentType: "application/json",
    options
  });
}
async function getApiKeysConfig(tenantId, options) {
  return invokeFetch("api-keys", {
    method: "get",
    pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
    pathVariables: { tenantId },
    options
  });
}
async function patchApiKeysConfig(tenantId, body, options) {
  return invokeFetch("api-keys", {
    method: "patch",
    pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
    pathVariables: { tenantId },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteApiKey(id, options) {
  return invokeFetch("api-keys", {
    method: "delete",
    pathTemplate: "/api/v1/api-keys/{id}",
    pathVariables: { id },
    options
  });
}
async function getApiKey(id, options) {
  return invokeFetch("api-keys", {
    method: "get",
    pathTemplate: "/api/v1/api-keys/{id}",
    pathVariables: { id },
    options
  });
}
async function patchApiKey(id, body, options) {
  return invokeFetch("api-keys", {
    method: "patch",
    pathTemplate: "/api/v1/api-keys/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
function clearCache() {
  return clearApiCache("api-keys");
}
var apiKeysExport = {
  getApiKeys,
  createApiKey,
  getApiKeysConfig,
  patchApiKeysConfig,
  deleteApiKey,
  getApiKey,
  patchApiKey,
  clearCache
};
var api_keys_default = apiKeysExport;
export {
  clearCache,
  createApiKey,
  api_keys_default as default,
  deleteApiKey,
  getApiKey,
  getApiKeys,
  getApiKeysConfig,
  patchApiKey,
  patchApiKeysConfig
};
