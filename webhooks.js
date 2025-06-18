import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/webhooks.ts
async function getWebhooks(query, options) {
  return invokeFetch("webhooks", {
    method: "get",
    pathTemplate: "/api/v1/webhooks",
    query,
    options
  });
}
async function createWebhook(body, options) {
  return invokeFetch("webhooks", {
    method: "post",
    pathTemplate: "/api/v1/webhooks",
    body,
    contentType: "application/json",
    options
  });
}
async function getWebhookEventTypes(options) {
  return invokeFetch("webhooks", {
    method: "get",
    pathTemplate: "/api/v1/webhooks/event-types",
    options
  });
}
async function deleteWebhook(id, options) {
  return invokeFetch("webhooks", {
    method: "delete",
    pathTemplate: "/api/v1/webhooks/{id}",
    pathVariables: { id },
    options
  });
}
async function getWebhook(id, options) {
  return invokeFetch("webhooks", {
    method: "get",
    pathTemplate: "/api/v1/webhooks/{id}",
    pathVariables: { id },
    options
  });
}
async function patchWebhook(id, body, options) {
  return invokeFetch("webhooks", {
    method: "patch",
    pathTemplate: "/api/v1/webhooks/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function updateWebhook(id, body, options) {
  return invokeFetch("webhooks", {
    method: "put",
    pathTemplate: "/api/v1/webhooks/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function getWebhookDeliveries(id, query, options) {
  return invokeFetch("webhooks", {
    method: "get",
    pathTemplate: "/api/v1/webhooks/{id}/deliveries",
    pathVariables: { id },
    query,
    options
  });
}
async function getWebhookDelivery(id, deliveryId, options) {
  return invokeFetch("webhooks", {
    method: "get",
    pathTemplate: "/api/v1/webhooks/{id}/deliveries/{deliveryId}",
    pathVariables: { id, deliveryId },
    options
  });
}
async function resendWebhookDelivery(id, deliveryId, options) {
  return invokeFetch("webhooks", {
    method: "post",
    pathTemplate: "/api/v1/webhooks/{id}/deliveries/{deliveryId}/actions/resend",
    pathVariables: { id, deliveryId },
    options
  });
}
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
