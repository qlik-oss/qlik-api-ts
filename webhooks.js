import "./chunks/utils-UaAiVTcc.js";
import "./chunks/public-runtime-modules-DiFgGaqr.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CoW3QRhJ.js";

//#region src/public/rest/webhooks.ts
/**
* Retrieves all webhooks entries for a tenant that the user has access to. Users assigned the `TenantAdmin` role can retrieve all webhooks. A user can have up to 150 webhooks at one time.
*
* @param query an object with query parameters
* @throws GetWebhooksHttpError
*/
async function getWebhooks(query, options) {
	return invokeFetch("webhooks", {
		method: "get",
		pathTemplate: "/api/v1/webhooks",
		query,
		options
	});
}
/**
* Creates a new webhook. User must be assigned the `TenantAdmin` role to create `tenant` level webhooks.
*
* @param body an object with the body content
* @throws CreateWebhookHttpError
*/
async function createWebhook(body, options) {
	return invokeFetch("webhooks", {
		method: "post",
		pathTemplate: "/api/v1/webhooks",
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
	return invokeFetch("webhooks", {
		method: "get",
		pathTemplate: "/api/v1/webhooks/event-types",
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
	return invokeFetch("webhooks", {
		method: "delete",
		pathTemplate: "/api/v1/webhooks/{id}",
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
	return invokeFetch("webhooks", {
		method: "get",
		pathTemplate: "/api/v1/webhooks/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Patches a webhook to update one or more properties.
*
* @param id The webhook's unique identifier.
* @param body an object with the body content
* @throws PatchWebhookHttpError
*/
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
/**
* Updates a webhook, any omitted fields will be cleared, returns updated webhook.
*
* @param id The webhook's unique identifier.
* @param body an object with the body content
* @throws UpdateWebhookHttpError
*/
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
/**
* Returns deliveries for a specific webhook. Delivery history is stored for 1 week.
*
* @param id The webhook's unique identifier.
* @param query an object with query parameters
* @throws GetWebhookDeliveriesHttpError
*/
async function getWebhookDeliveries(id, query, options) {
	return invokeFetch("webhooks", {
		method: "get",
		pathTemplate: "/api/v1/webhooks/{id}/deliveries",
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
	return invokeFetch("webhooks", {
		method: "get",
		pathTemplate: "/api/v1/webhooks/{id}/deliveries/{deliveryId}",
		pathVariables: {
			id,
			deliveryId
		},
		options
	});
}
/**
* Resends the delivery with the same payload.
*
* @param id The webhook's unique identifier.
* @param deliveryId The delivery's unique identifier.
* @throws ResendWebhookDeliveryHttpError
*/
async function resendWebhookDelivery(id, deliveryId, options) {
	return invokeFetch("webhooks", {
		method: "post",
		pathTemplate: "/api/v1/webhooks/{id}/deliveries/{deliveryId}/actions/resend",
		pathVariables: {
			id,
			deliveryId
		},
		options
	});
}
/**
* Clears the cache for webhooks api requests.
*/
function clearCache() {
	return clearApiCache("webhooks");
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
var webhooks_default = webhooksExport;

//#endregion
export { clearCache, createWebhook, webhooks_default as default, deleteWebhook, getWebhook, getWebhookDeliveries, getWebhookDelivery, getWebhookEventTypes, getWebhooks, patchWebhook, resendWebhookDelivery, updateWebhook };