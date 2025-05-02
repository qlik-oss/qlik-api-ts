import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/notifications.ts
var getNotifications = async (query, options) => invokeFetch("notifications", {
  method: "get",
  pathTemplate: "/api/v1/notifications",
  query,
  options
});
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
