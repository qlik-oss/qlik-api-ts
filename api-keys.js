import {
  clearApiCache,
  invokeFetch
} from "./chunks/YORZLVSA.js";
import "./chunks/EFU3HQQZ.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/api-keys.ts
var getApiKeys = async (query, options) => invokeFetch("api-keys", {
  method: "get",
  pathTemplate: "/api/v1/api-keys",
  query,
  options
});
var createApiKey = async (body, options) => invokeFetch("api-keys", {
  method: "post",
  pathTemplate: "/api/v1/api-keys",
  body,
  contentType: "application/json",
  options
});
var getApiKeysConfig = async (tenantId, options) => invokeFetch("api-keys", {
  method: "get",
  pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
  pathVariables: { tenantId },
  options
});
var patchApiKeysConfig = async (tenantId, body, options) => invokeFetch("api-keys", {
  method: "patch",
  pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
  pathVariables: { tenantId },
  body,
  contentType: "application/json",
  options
});
var deleteApiKey = async (id, options) => invokeFetch("api-keys", {
  method: "delete",
  pathTemplate: "/api/v1/api-keys/{id}",
  pathVariables: { id },
  options
});
var getApiKey = async (id, options) => invokeFetch("api-keys", {
  method: "get",
  pathTemplate: "/api/v1/api-keys/{id}",
  pathVariables: { id },
  options
});
var patchApiKey = async (id, body, options) => invokeFetch("api-keys", {
  method: "patch",
  pathTemplate: "/api/v1/api-keys/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
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
