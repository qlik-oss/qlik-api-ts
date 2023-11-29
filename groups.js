"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkOULT3V2Ujs = require('./chunk-OULT3V2U.js');
require('./chunk-ZT4C7KCQ.js');

// src/public/rest/groups.ts
var getGroups = async (query, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "groups", {
  method: "get",
  pathTemplate: "/api/v1/groups",
  query,
  options
});
var createGroup = async (body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "groups", {
  method: "post",
  pathTemplate: "/api/v1/groups",
  body,
  options
});
var filterGroups = async (query, body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "groups", {
  method: "post",
  pathTemplate: "/api/v1/groups/actions/filter",
  query,
  body,
  options
});
var getGroupSettings = async (options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "groups", {
  method: "get",
  pathTemplate: "/api/v1/groups/settings",
  options
});
var patchGroupSettings = async (body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "groups", {
  method: "patch",
  pathTemplate: "/api/v1/groups/settings",
  body,
  options
});
var deleteGroup = async (groupId, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "groups", {
  method: "delete",
  pathTemplate: "/api/v1/groups/{groupId}",
  pathVariables: { groupId },
  options
});
var getGroup = async (groupId, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "groups", {
  method: "get",
  pathTemplate: "/api/v1/groups/{groupId}",
  pathVariables: { groupId },
  options
});
var patchGroup = async (groupId, body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "groups", {
  method: "patch",
  pathTemplate: "/api/v1/groups/{groupId}",
  pathVariables: { groupId },
  body,
  options
});
function clearCache() {
  return _chunkOULT3V2Ujs.clearApiCache.call(void 0, "groups");
}
var groupsExport = {
  getGroups,
  createGroup,
  filterGroups,
  getGroupSettings,
  patchGroupSettings,
  deleteGroup,
  getGroup,
  patchGroup,
  clearCache
};
var groups_default = groupsExport;











exports.clearCache = clearCache; exports.createGroup = createGroup; exports.default = groups_default; exports.deleteGroup = deleteGroup; exports.filterGroups = filterGroups; exports.getGroup = getGroup; exports.getGroupSettings = getGroupSettings; exports.getGroups = getGroups; exports.patchGroup = patchGroup; exports.patchGroupSettings = patchGroupSettings;
