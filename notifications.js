import "./chunks/public-runtime-modules-BAapp6Tu.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DGnqhw9s.js";

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

//#endregion
export { clearCache, notificationsExport as default, getNotifications };