import "./chunks/utils-DI6bFnHB.js";
import "./chunks/public-runtime-modules-Ba7JShug.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CFT8jqUv.js";

//#region src/public/rest/notifications.ts
/**
* List all supported notifications
*
* @param query an object with query parameters
* @throws GetNotificationsHttpError
*/
async function getNotifications(query, options) {
	return invokeFetch("notifications", {
		method: "get",
		pathTemplate: "/api/v1/notifications",
		query,
		options
	});
}
/**
* Clears the cache for notifications api requests.
*/
function clearCache() {
	return clearApiCache("notifications");
}
/**
* Functions for the notifications api
*/
const notificationsExport = {
	getNotifications,
	clearCache
};
var notifications_default = notificationsExport;

//#endregion
export { clearCache, notifications_default as default, getNotifications };