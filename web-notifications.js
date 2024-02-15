"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _LHCJKIEOjs = require('./chunks/LHCJKIEO.js');
require('./chunks/4V5AAWUI.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/web-notifications.ts
var getNotifications = async (query, options) => _LHCJKIEOjs.invokeFetch.call(void 0, "web-notifications", {
  method: "get",
  pathTemplate: "/api/v1/web-notifications",
  query,
  options
});
var deleteNotifications = async (options) => _LHCJKIEOjs.invokeFetch.call(void 0, "web-notifications", {
  method: "delete",
  pathTemplate: "/api/v1/web-notifications/all",
  options
});
var patchNotifications = async (body, options) => _LHCJKIEOjs.invokeFetch.call(void 0, "web-notifications", {
  method: "patch",
  pathTemplate: "/api/v1/web-notifications/all",
  body,
  contentType: "application/json",
  options
});
var deleteNotification = async (notificationId, options) => _LHCJKIEOjs.invokeFetch.call(void 0, "web-notifications", {
  method: "delete",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  options
});
var getNotification = async (notificationId, options) => _LHCJKIEOjs.invokeFetch.call(void 0, "web-notifications", {
  method: "get",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  options
});
var patchNotification = async (notificationId, body, options) => _LHCJKIEOjs.invokeFetch.call(void 0, "web-notifications", {
  method: "patch",
  pathTemplate: "/api/v1/web-notifications/{notificationId}",
  pathVariables: { notificationId },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _LHCJKIEOjs.clearApiCache.call(void 0, "web-notifications");
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
