"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkOULT3V2Ujs = require('./chunk-OULT3V2U.js');
require('./chunk-ZT4C7KCQ.js');

// src/public/rest/spaces.ts
var getSpaces = async (query, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "get",
  pathTemplate: "/api/v1/spaces",
  query,
  options
});
var createSpace = async (body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "post",
  pathTemplate: "/api/v1/spaces",
  body,
  options
});
var getSpaceTypes = async (options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "get",
  pathTemplate: "/api/v1/spaces/types",
  options
});
var deleteSpace = async (spaceId, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "delete",
  pathTemplate: "/api/v1/spaces/{spaceId}",
  pathVariables: { spaceId },
  options
});
var getSpace = async (spaceId, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "get",
  pathTemplate: "/api/v1/spaces/{spaceId}",
  pathVariables: { spaceId },
  options
});
var patchSpace = async (spaceId, body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "patch",
  pathTemplate: "/api/v1/spaces/{spaceId}",
  pathVariables: { spaceId },
  body,
  options
});
var updateSpace = async (spaceId, body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "put",
  pathTemplate: "/api/v1/spaces/{spaceId}",
  pathVariables: { spaceId },
  body,
  options
});
var getSpaceAssignments = async (spaceId, query, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "get",
  pathTemplate: "/api/v1/spaces/{spaceId}/assignments",
  pathVariables: { spaceId },
  query,
  options
});
var createSpaceAssignment = async (spaceId, body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "post",
  pathTemplate: "/api/v1/spaces/{spaceId}/assignments",
  pathVariables: { spaceId },
  body,
  options
});
var deleteSpaceAssignment = async (spaceId, assignmentId, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "delete",
  pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
  pathVariables: { spaceId, assignmentId },
  options
});
var getSpaceAssignment = async (spaceId, assignmentId, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "get",
  pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
  pathVariables: { spaceId, assignmentId },
  options
});
var updateSpaceAssignment = async (spaceId, assignmentId, body, options) => _chunkOULT3V2Ujs.invokeFetch.call(void 0, "spaces", {
  method: "put",
  pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
  pathVariables: { spaceId, assignmentId },
  body,
  options
});
function clearCache() {
  return _chunkOULT3V2Ujs.clearApiCache.call(void 0, "spaces");
}
var spacesExport = {
  getSpaces,
  createSpace,
  getSpaceTypes,
  deleteSpace,
  getSpace,
  patchSpace,
  updateSpace,
  getSpaceAssignments,
  createSpaceAssignment,
  deleteSpaceAssignment,
  getSpaceAssignment,
  updateSpaceAssignment,
  clearCache
};
var spaces_default = spacesExport;















exports.clearCache = clearCache; exports.createSpace = createSpace; exports.createSpaceAssignment = createSpaceAssignment; exports.default = spaces_default; exports.deleteSpace = deleteSpace; exports.deleteSpaceAssignment = deleteSpaceAssignment; exports.getSpace = getSpace; exports.getSpaceAssignment = getSpaceAssignment; exports.getSpaceAssignments = getSpaceAssignments; exports.getSpaceTypes = getSpaceTypes; exports.getSpaces = getSpaces; exports.patchSpace = patchSpace; exports.updateSpace = updateSpace; exports.updateSpaceAssignment = updateSpaceAssignment;
