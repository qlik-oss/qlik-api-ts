import {
  clearApiCache,
  invokeFetch
} from "./chunk-3YE7EI7I.mjs";
import "./chunk-WM7FQU2U.mjs";

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
  options
});
var getApiKeyConfig = async (tenantId, options) => invokeFetch("api-keys", {
  method: "get",
  pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
  pathVariables: { tenantId },
  options
});
var patchApiKeyConfig = async (tenantId, body, options) => invokeFetch("api-keys", {
  method: "patch",
  pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
  pathVariables: { tenantId },
  body,
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
  options
});
function clearCache() {
  return clearApiCache("api-keys");
}
var apiKeysExport = {
  getApiKeys,
  createApiKey,
  getApiKeyConfig,
  patchApiKeyConfig,
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
  getApiKeyConfig,
  getApiKeys,
  patchApiKey,
  patchApiKeyConfig
};
