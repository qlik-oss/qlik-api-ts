"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/web-notifications.ts
var getNotifications = async (query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "web-notifications", {
  method: "get",
  pathTemplate: "/api/v1/web-notifications",
  query,
  options
});
var deleteNotifications = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "web-notifications", {
  method: "delete",
  pathTemplate: "/api/v1/web-notifications/all",
  options
});
var patchNotifications = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "web-notifications", {
  method: "patch",
  pathTemplate: "/api/v1/web-notifications/all",
  body,
  options
});
var deleteNotification = async (notificationId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "web-notifications", {
  method: "delete",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  options
});
var getNotification = async (notificationId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "web-notifications", {
  method: "get",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  options
});
var patchNotification = async (notificationId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "web-notifications", {
  method: "patch",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  body,
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "web-notifications");
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









exports.clearCache = clearCache; exports.default = web_notifications_default; exports.deleteNotification = deleteNotification; exports.deleteNotifications = deleteNotifications; exports.getNotification = getNotification; exports.getNotifications = getNotifications; exports.patchNotification = patchNotification; exports.patchNotifications = patchNotifications;
