"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkXJKF347Cjs = require('./chunk-XJKF347C.js');
require('./chunk-JZAPZIPR.js');
require('./chunk-P57PW2II.js');

// src/public/rest/groups.ts
var getGroups = async (query, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "groups", {
  method: "get",
  pathTemplate: "/api/v1/groups",
  query,
  options
});
var createGroup = async (body, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "groups", {
  method: "post",
  pathTemplate: "/api/v1/groups",
  body,
  contentType: "application/json",
  options
});
var filterGroups = async (query, body, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "groups", {
  method: "post",
  pathTemplate: "/api/v1/groups/actions/filter",
  query,
  body,
  contentType: "application/json",
  options
});
var getGroupsSettings = async (options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "groups", {
  method: "get",
  pathTemplate: "/api/v1/groups/settings",
  options
});
var patchGroupsSettings = async (body, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "groups", {
  method: "patch",
  pathTemplate: "/api/v1/groups/settings",
  body,
  contentType: "application/json",
  options
});
var deleteGroup = async (groupId, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "groups", {
  method: "delete",
  pathTemplate: "/api/v1/groups/{groupId}",
  pathVariables: { groupId },
  options
});
var getGroup = async (groupId, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "groups", {
  method: "get",
  pathTemplate: "/api/v1/groups/{groupId}",
  pathVariables: { groupId },
  options
});
var patchGroup = async (groupId, body, options) => _chunkXJKF347Cjs.invokeFetch.call(void 0, "groups", {
  method: "patch",
  pathTemplate: "/api/v1/groups/{groupId}",
  pathVariables: { groupId },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _chunkXJKF347Cjs.clearApiCache.call(void 0, "groups");
}
var groupsExport = {
  getGroups,
  createGroup,
  filterGroups,
  getGroupsSettings,
  patchGroupsSettings,
  deleteGroup,
  getGroup,
  patchGroup,
  clearCache
};
var groups_default = groupsExport;











exports.clearCache = clearCache; exports.createGroup = createGroup; exports.default = groups_default; exports.deleteGroup = deleteGroup; exports.filterGroups = filterGroups; exports.getGroup = getGroup; exports.getGroups = getGroups; exports.getGroupsSettings = getGroupsSettings; exports.patchGroup = patchGroup; exports.patchGroupsSettings = patchGroupsSettings;
