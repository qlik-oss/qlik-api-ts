import {
  clearApiCache,
  invokeFetch
} from "./chunk-W4J34XGA.mjs";
import "./chunk-7REWEWCX.mjs";

// src/public/rest/web-notifications.ts
var getNotifications = async (query, options) => invokeFetch("web-notifications", {
  method: "get",
  pathTemplate: "/api/v1/web-notifications",
  query,
  options
});
var deleteNotifications = async (options) => invokeFetch("web-notifications", {
  method: "delete",
  pathTemplate: "/api/v1/web-notifications/all",
  options
});
var patchNotifications = async (body, options) => invokeFetch("web-notifications", {
  method: "patch",
  pathTemplate: "/api/v1/web-notifications/all",
  body,
  options
});
var deleteNotification = async (notificationId, options) => invokeFetch("web-notifications", {
  method: "delete",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  options
});
var getNotification = async (notificationId, options) => invokeFetch("web-notifications", {
  method: "get",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  options
});
var patchNotification = async (notificationId, body, options) => invokeFetch("web-notifications", {
  method: "patch",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  body,
  options
});
function clearCache() {
  return clearApiCache("web-notifications");
}
var webNotificationsExport = {
  getNotifications,
  deleteNotifications,
  patchNotifications,
  deleteNotification,
  getNotification,
  patchNotification,
  clearCache
};
var web_notifications_default = webNotificationsExport;
export {
  clearCache,
  web_notifications_default as default,
  deleteNotification,
  deleteNotifications,
  getNotification,
  getNotifications,
  patchNotification,
  patchNotifications
};
