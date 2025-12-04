import "./chunks/utils-BnC4lrlq.js";
import "./chunks/public-runtime-modules-Dwjzb3l8.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-PcVIxLW4.js";

//#region src/public/rest/web-notifications.ts
/**
* Retrieve notifications matching the query.
* @example
* getNotifications(
*   {
*     resourceType: "app,space"
*   }
* )
*
* @param query an object with query parameters
* @throws GetNotificationsHttpError
*/
async function getNotifications(query, options) {
	return invokeFetch("web-notifications", {
		method: "get",
		pathTemplate: "/api/v1/web-notifications",
		query,
		options
	});
}
/**
* Delete all notifications.
*
* @throws DeleteNotificationsHttpError
*/
async function deleteNotifications(options) {
	return invokeFetch("web-notifications", {
		method: "delete",
		pathTemplate: "/api/v1/web-notifications/all",
		options
	});
}
/**
* Patch all notifications.
*
* @param body an object with the body content
* @throws PatchNotificationsHttpError
*/
async function patchNotifications(body, options) {
	return invokeFetch("web-notifications", {
		method: "patch",
		pathTemplate: "/api/v1/web-notifications/all",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Delete a notification.
*
* @param notificationId The id of the notification to delete.
* @throws DeleteNotificationHttpError
*/
async function deleteNotification(notificationId, options) {
	return invokeFetch("web-notifications", {
		method: "delete",
		pathTemplate: "/api/v1/web-notifications/{notificationId}",
		pathVariables: { notificationId },
		options
	});
}
/**
* Retrieve a single notification by Id.
*
* @param notificationId The id of the notification to retrieve.
* @throws GetNotificationHttpError
*/
async function getNotification(notificationId, options) {
	return invokeFetch("web-notifications", {
		method: "get",
		pathTemplate: "/api/v1/web-notifications/{notificationId}",
		pathVariables: { notificationId },
		options
	});
}
/**
* Patch a notification.
*
* @param notificationId The id of the notification to update.
* @param body an object with the body content
* @throws PatchNotificationHttpError
*/
async function patchNotification(notificationId, body, options) {
	return invokeFetch("web-notifications", {
		method: "patch",
		pathTemplate: "/api/v1/web-notifications/{notificationId}",
		pathVariables: { notificationId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for web-notifications api requests.
*/
function clearCache() {
	return clearApiCache("web-notifications");
}
/**
* Functions for the web-notifications api
*/
const webNotificationsExport = {
	getNotifications,
	deleteNotifications,
	patchNotifications,
	deleteNotification,
	getNotification,
	patchNotification,
	clearCache
};
var web_notifications_default = webNotificationsExport;

//#endregion
export { clearCache, web_notifications_default as default, deleteNotification, deleteNotifications, getNotification, getNotifications, patchNotification, patchNotifications };