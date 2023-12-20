"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkJNGURO23js = require('./chunk-JNGURO23.js');
require('./chunk-2STFUQKQ.js');
require('./chunk-P57PW2II.js');

// src/public/rest/web-notifications.ts
var getNotifications = async (query, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "web-notifications", {
  method: "get",
  pathTemplate: "/api/v1/web-notifications",
  query,
  options
});
var deleteNotifications = async (options) => _chunkJNGURO23js.invokeFetch.call(void 0, "web-notifications", {
  method: "delete",
  pathTemplate: "/api/v1/web-notifications/all",
  options
});
var patchNotifications = async (body, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "web-notifications", {
  method: "patch",
  pathTemplate: "/api/v1/web-notifications/all",
  body,
  contentType: "application/json",
  options
});
var deleteNotification = async (notificationId, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "web-notifications", {
  method: "delete",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  options
});
var getNotification = async (notificationId, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "web-notifications", {
  method: "get",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  options
});
var patchNotification = async (notificationId, body, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "web-notifications", {
  method: "patch",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _chunkJNGURO23js.clearApiCache.call(void 0, "web-notifications");
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
