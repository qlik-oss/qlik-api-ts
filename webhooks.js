import {
  clearApiCache,
  invokeFetch
} from "./chunks/664FMSNJ.js";
import "./chunks/2ZXOEI4D.js";

// src/public/rest/webhooks.ts
var getWebhooks = async (query, options) => invokeFetch("webhooks", {
  method: "get",
  pathTemplate: "/api/v1/webhooks",
  query,
  options
});
var createWebhook = async (body, options) => invokeFetch("webhooks", {
  method: "post",
  pathTemplate: "/api/v1/webhooks",
  body,
  contentType: "application/json",
  options
});
var getWebhookEventTypes = async (options) => invokeFetch("webhooks", {
  method: "get",
  pathTemplate: "/api/v1/webhooks/event-types",
  options
});
var deleteWebhook = async (id, options) => invokeFetch("webhooks", {
  method: "delete",
  pathTemplate: "/api/v1/webhooks/{id}",
  pathVariables: { id },
  options
});
var getWebhook = async (id, options) => invokeFetch("webhooks", {
  method: "get",
  pathTemplate: "/api/v1/webhooks/{id}",
  pathVariables: { id },
  options
});
var patchWebhook = async (id, body, options) => invokeFetch("webhooks", {
  method: "patch",
  pathTemplate: "/api/v1/webhooks/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var updateWebhook = async (id, body, options) => invokeFetch("webhooks", {
  method: "put",
  pathTemplate: "/api/v1/webhooks/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var getWebhookDeliveries = async (id, query, options) => invokeFetch("webhooks", {
  method: "get",
  pathTemplate: "/api/v1/webhooks/{id}/deliveries",
  pathVariables: { id },
  query,
  options
});
var getWebhookDelivery = async (id, deliveryId, options) => invokeFetch("webhooks", {
  method: "get",
  pathTemplate: "/api/v1/webhooks/{id}/deliveries/{deliveryId}",
  pathVariables: { id, deliveryId },
  options
});
var resendWebhookDelivery = async (id, deliveryId, options) => invokeFetch("webhooks", {
  method: "post",
  pathTemplate: "/api/v1/webhooks/{id}/deliveries/{deliveryId}/actions/resend",
  pathVariables: { id, deliveryId },
  options
});
function clearCache() {
  return clearApiCache("webhooks");
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
export {
  clearCache,
  createWebhook,
  webhooks_default as default,
  deleteWebhook,
  getWebhook,
  getWebhookDeliveries,
  getWebhookDelivery,
  getWebhookEventTypes,
  getWebhooks,
  patchWebhook,
  resendWebhookDelivery,
  updateWebhook
};
