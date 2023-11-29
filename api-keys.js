"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkOULT3V2Ujs = require('./chunk-OULT3V2U.js');
require('./chunk-ZT4C7KCQ.js');

// src/public/rest/api-keys.ts
var getApiKeys = async (query, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "api-keys", {
  method: "get",
  pathTemplate: "/api/v1/api-keys",
  query,
  options
});
var createApiKey = async (body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "api-keys", {
  method: "post",
  pathTemplate: "/api/v1/api-keys",
  body,
  options
});
var getApiKeyConfig = async (tenantId, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "api-keys", {
  method: "get",
  pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
  pathVariables: { tenantId },
  options
});
var patchApiKeyConfig = async (tenantId, body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "api-keys", {
  method: "patch",
  pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
  pathVariables: { tenantId },
  body,
  options
});
var deleteApiKey = async (id, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "api-keys", {
  method: "delete",
  pathTemplate: "/api/v1/api-keys/{id}",
  pathVariables: { id },
  options
});
var getApiKey = async (id, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "api-keys", {
  method: "get",
  pathTemplate: "/api/v1/api-keys/{id}",
  pathVariables: { id },
  options
});
var patchApiKey = async (id, body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "api-keys", {
  method: "patch",
  pathTemplate: "/api/v1/api-keys/{id}",
  pathVariables: { id },
  body,
  options
});
function clearCache() {
  return _chunkOULT3V2Ujs.clearApiCache.call(void 0, "api-keys");
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










exports.clearCache = clearCache; exports.createApiKey = createApiKey; exports.default = api_keys_default; exports.deleteApiKey = deleteApiKey; exports.getApiKey = getApiKey; exports.getApiKeyConfig = getApiKeyConfig; exports.getApiKeys = getApiKeys; exports.patchApiKey = patchApiKey; exports.patchApiKeyConfig = patchApiKeyConfig;
