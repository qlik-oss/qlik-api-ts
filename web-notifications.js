import {
  clearApiCache,
  invokeFetch
} from "./chunks/LIEZG7IM.js";
import "./chunks/GPRUNZV4.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/web-notifications.ts
async function getNotifications(query, options) {
  return invokeFetch("web-notifications", {
    method: "get",
    pathTemplate: "/api/v1/web-notifications",
    query,
    options
  });
}
async function deleteNotifications(options) {
  return invokeFetch("web-notifications", {
    method: "delete",
    pathTemplate: "/api/v1/web-notifications/all",
    options
  });
}
async function patchNotifications(body, options) {
  return invokeFetch("web-notifications", {
    method: "patch",
    pathTemplate: "/api/v1/web-notifications/all",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteNotification(notificationId, options) {
  return invokeFetch("web-notifications", {
    method: "delete",
    pathTemplate: "/api/v1/web-notifications/{notificationId}",
    pathVariables: { notificationId },
    options
  });
}
async function getNotification(notificationId, options) {
  return invokeFetch("web-notifications", {
    method: "get",
    pathTemplate: "/api/v1/web-notifications/{notificationId}",
    pathVariables: { notificationId },
    options
  });
}
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
