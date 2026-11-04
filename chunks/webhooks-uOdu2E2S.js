import { t as __exportAll } from "./rolldown-runtime-CNh9ExCG.js";
import { n as invokeFetch, t as clearApiCache } from "./invoke-fetch-D5WdETph.js";

// src/public/rest/core/webhooks.ts
var webhooks_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createWebhook: () => createWebhook,
	default: () => webhooksExport,
	deleteWebhook: () => deleteWebhook,
	getWebhook: () => getWebhook,
	getWebhookDeliveries: () => getWebhookDeliveries,
	getWebhookDelivery: () => getWebhookDelivery,
	getWebhookEventTypes: () => getWebhookEventTypes,
	getWebhooks: () => getWebhooks,
	patchWebhook: () => patchWebhook,
	resendWebhookDelivery: () => resendWebhookDelivery,
	updateWebhook: () => updateWebhook
});
/**
* Retrieves all webhook entries for a tenant that the user has access to. Users assigned the `TenantAdmin` role can retrieve all webhooks of the tenant; other users only retrieve the webhooks they own. Values of `encryptedHeaders` are never returned, only their header names.
*
* @param query an object with query parameters
* @throws GetWebhooksHttpError
*/
async function getWebhooks(query, options) {
	return invokeFetch("core/webhooks", {
		method: "get",
		pathTemplate: "/api/core/webhooks",
		query,
		options
	});
}
/**
* Creates a new webhook. User must be assigned the `TenantAdmin` role to create `tenant` level webhooks. Each user can own up to 150 webhooks per tenant; creating a webhook beyond that quota is rejected with `403`.
*
* @param body an object with the body content
* @throws CreateWebhookHttpError
*/
async function createWebhook(body, options) {
	return invokeFetch("core/webhooks", {
		method: "post",
		pathTemplate: "/api/core/webhooks",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Lists event-types that are possible to subscribe to.
*
* @throws GetWebhookEventTypesHttpError
*/
async function getWebhookEventTypes(options) {
	return invokeFetch("core/webhooks", {
		method: "get",
		pathTemplate: "/api/core/webhooks/event-types",
		options
	});
}
/**
* Deletes a specific webhook.
*
* @param id The webhook's unique identifier.
* @throws DeleteWebhookHttpError
*/
async function deleteWebhook(id, options) {
	return invokeFetch("core/webhooks", {
		method: "delete",
		pathTemplate: "/api/core/webhooks/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Returns details for a specific webhook.
*
* @param id The webhook's unique identifier.
* @throws GetWebhookHttpError
*/
async function getWebhook(id, options) {
	return invokeFetch("core/webhooks", {
		method: "get",
		pathTemplate: "/api/core/webhooks/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates one or more individual properties of a webhook using a JSON Patch document, leaving all other properties unchanged. The patch is applied to the stored webhook and the result is validated as a whole, so a patch that produces an invalid webhook is rejected. When `/url` is changed on a webhook that has encrypted headers, every existing encrypted header must also be replaced or removed in the same patch, otherwise the request is rejected with `400`. Changing read-only properties is rejected with `409`, and changing `/ownerId` requires permission to transfer ownership.
*
* @param id The webhook's unique identifier.
* @param body an object with the body content
* @throws PatchWebhookHttpError
*/
async function patchWebhook(id, body, options) {
	return invokeFetch("core/webhooks", {
		method: "patch",
		pathTemplate: "/api/core/webhooks/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Replaces all writable properties of a webhook and returns the updated webhook. This is a full replacement: every writable property that is omitted from the request body is reset to its default, so omitting `secret`, `encryptedHeaders`, `headers` or `filter` clears them, and omitting `enabled` disables the webhook. Because `secret` is never returned and `encryptedHeaders` is returned as a list of header names, a `GET` response cannot be sent back unchanged as a `PUT` request body; re-send those values explicitly, and use `PATCH` to change individual properties. Read-only properties such as `id`, `createdAt`, `createdByUserId` and `origin` cannot be changed and are rejected with `409`.
*
* @param id The webhook's unique identifier.
* @param body an object with the body content
* @throws UpdateWebhookHttpError
*/
async function updateWebhook(id, body, options) {
	return invokeFetch("core/webhooks", {
		method: "put",
		pathTemplate: "/api/core/webhooks/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns deliveries for a specific webhook. Delivery history is stored for 1 week.
*
* @param id The webhook's unique identifier.
* @param query an object with query parameters
* @throws GetWebhookDeliveriesHttpError
*/
async function getWebhookDeliveries(id, query, options) {
	return invokeFetch("core/webhooks", {
		method: "get",
		pathTemplate: "/api/core/webhooks/{id}/deliveries",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Returns details for a specific delivery.
*
* @param id The webhook's unique identifier.
* @param deliveryId The delivery's unique identifier.
* @throws GetWebhookDeliveryHttpError
*/
async function getWebhookDelivery(id, deliveryId, options) {
	return invokeFetch("core/webhooks", {
		method: "get",
		pathTemplate: "/api/core/webhooks/{id}/deliveries/{deliveryId}",
		pathVariables: {
			id,
			deliveryId
		},
		options
	});
}
/**
* Resends the event payload of an existing delivery and returns the new delivery. The event payload is taken from the original delivery, but the webhook's current configuration (URL, headers, secret and certificate settings) is used to send it. The resend is attempted synchronously and a new delivery record is always created, so a `201` response can contain a delivery with status `fail`. A resend is subject to the same validation and failure handling as an automatic delivery, so a webhook that is no longer valid or that exceeds the delivery failure threshold can be disabled as a result.
*
* @param id The webhook's unique identifier.
* @param deliveryId The delivery's unique identifier.
* @throws ResendWebhookDeliveryHttpError
*/
async function resendWebhookDelivery(id, deliveryId, options) {
	return invokeFetch("core/webhooks", {
		method: "post",
		pathTemplate: "/api/core/webhooks/{id}/deliveries/{deliveryId}/actions/resend",
		pathVariables: {
			id,
			deliveryId
		},
		options
	});
}
/**
* Clears the cache for core/webhooks api requests.
*/
function clearCache() {
	return clearApiCache("core/webhooks");
}
/**
* Functions for the webhooks api
*/
const webhooksExport = {
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

export { getWebhookDeliveries as a, getWebhooks as c, updateWebhook as d, webhooksExport as f, getWebhook as i, patchWebhook as l, createWebhook as n, getWebhookDelivery as o, webhooks_exports as p, deleteWebhook as r, getWebhookEventTypes as s, clearCache as t, resendWebhookDelivery as u };