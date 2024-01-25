"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _QMWU5E4Djs = require('./chunks/QMWU5E4D.js');
require('./chunks/FG5GDUSZ.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/api-keys.ts
var getApiKeys = async (query, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "api-keys", {
  method: "get",
  pathTemplate: "/api/v1/api-keys",
  query,
  options
});
var createApiKey = async (body, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "api-keys", {
  method: "post",
  pathTemplate: "/api/v1/api-keys",
  body,
  contentType: "application/json",
  options
});
var getApiKeysConfig = async (tenantId, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "api-keys", {
  method: "get",
  pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
  pathVariables: { tenantId },
  options
});
var patchApiKeysConfig = async (tenantId, body, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "api-keys", {
  method: "patch",
  pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
  pathVariables: { tenantId },
  body,
  contentType: "application/json",
  options
});
var deleteApiKey = async (id, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "api-keys", {
  method: "delete",
  pathTemplate: "/api/v1/api-keys/{id}",
  pathVariables: { id },
  options
});
var getApiKey = async (id, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "api-keys", {
  method: "get",
  pathTemplate: "/api/v1/api-keys/{id}",
  pathVariables: { id },
  options
});
var patchApiKey = async (id, body, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "api-keys", {
  method: "patch",
  pathTemplate: "/api/v1/api-keys/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _QMWU5E4Djs.clearApiCache.call(void 0, "api-keys");
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










exports.clearCache = clearCache; exports.createApiKey = createApiKey; exports.default = api_keys_default; exports.deleteApiKey = deleteApiKey; exports.getApiKey = getApiKey; exports.getApiKeys = getApiKeys; exports.getApiKeysConfig = getApiKeysConfig; exports.patchApiKey = patchApiKey; exports.patchApiKeysConfig = patchApiKeysConfig;
