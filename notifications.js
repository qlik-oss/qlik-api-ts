import {
  clearApiCache,
  invokeFetch
} from "./chunks/P6F6QA4Y.js";
import "./chunks/DN5SVV4X.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/notifications.ts
async function getNotifications(query, options) {
  return invokeFetch("notifications", {
    method: "get",
    pathTemplate: "/api/v1/notifications",
    query,
    options
  });
}
function clearCache() {
  return clearApiCache("notifications");
}
var notificationsExport = { getNotifications, clearCache };
var notifications_default = notificationsExport;
export {
  clearCache,
  notifications_default as default,
  getNotifications
};
