"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkXJKF347Cjs = require('./chunk-XJKF347C.js');
require('./chunk-JZAPZIPR.js');
require('./chunk-P57PW2II.js');

// src/public/rest/webhooks.ts
var getWebhooks = async (query, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "webhooks", {
  method: "get",
  pathTemplate: "/api/v1/webhooks",
  query,
  options
});
var createWebhook = async (body, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "webhooks", {
  method: "post",
  pathTemplate: "/api/v1/webhooks",
  body,
  contentType: "application/json",
  options
});
var getWebhookEventTypes = async (options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "webhooks", {
  method: "get",
  pathTemplate: "/api/v1/webhooks/event-types",
  options
});
var deleteWebhook = async (id, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "webhooks", {
  method: "delete",
  pathTemplate: "/api/v1/webhooks/{id}",
  pathVariables: { id },
  options
});
var getWebhook = async (id, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "webhooks", {
  method: "get",
  pathTemplate: "/api/v1/webhooks/{id}",
  pathVariables: { id },
  options
});
var patchWebhook = async (id, body, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "webhooks", {
  method: "patch",
  pathTemplate: "/api/v1/webhooks/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var updateWebhook = async (id, body, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "webhooks", {
  method: "put",
  pathTemplate: "/api/v1/webhooks/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var getWebhookDeliveries = async (id, query, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "webhooks", {
  method: "get",
  pathTemplate: "/api/v1/webhooks/{id}/deliveries",
  pathVariables: { id },
  query,
  options
});
var getWebhookDelivery = async (id, deliveryId, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "webhooks", {
  method: "get",
  pathTemplate: "/api/v1/webhooks/{id}/deliveries/{deliveryId}",
  pathVariables: { id, deliveryId },
  options
});
var resendWebhookDelivery = async (id, deliveryId, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "webhooks", {
  method: "post",
  pathTemplate: "/api/v1/webhooks/{id}/deliveries/{deliveryId}/actions/resend",
  pathVariables: { id, deliveryId },
  options
});
function clearCache() {
  return _chunkXJKF347Cjs.clearApiCache.call(void 0, "webhooks");
}
var webhooksExport = {
  getWebhooks,
  createWebhook,
  getWebhookEventTypes,
  deleteWebhook,
  getWebhook,
  patchWebhook,
  updateWebhook,
  getWebhookDeliveries,
  getWebhookDelivery,
  resendWebhookDelivery,
  clearCache
};
var webhooks_default = webhooksExport;













exports.clearCache = clearCache; exports.createWebhook = createWebhook; exports.default = webhooks_default; exports.deleteWebhook = deleteWebhook; exports.getWebhook = getWebhook; exports.getWebhookDeliveries = getWebhookDeliveries; exports.getWebhookDelivery = getWebhookDelivery; exports.getWebhookEventTypes = getWebhookEventTypes; exports.getWebhooks = getWebhooks; exports.patchWebhook = patchWebhook; exports.resendWebhookDelivery = resendWebhookDelivery; exports.updateWebhook = updateWebhook;
