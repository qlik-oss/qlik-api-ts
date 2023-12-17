import {
  clearApiCache,
  invokeFetch
} from "./chunk-MP2QZCTY.mjs";
import "./chunk-2OXQN2IV.mjs";

// src/public/rest/spaces.ts
var getSpaces = async (query, options) => invokeFetch("spaces", {
  method: "get",
  pathTemplate: "/api/v1/spaces",
  query,
  options
});
var createSpace = async (body, options) => invokeFetch("spaces", {
  method: "post",
  pathTemplate: "/api/v1/spaces",
  body,
  options
});
var getSpaceTypes = async (options) => invokeFetch("spaces", {
  method: "get",
  pathTemplate: "/api/v1/spaces/types",
  options
});
var deleteSpace = async (spaceId, options) => invokeFetch("spaces", {
  method: "delete",
  pathTemplate: "/api/v1/spaces/{spaceId}",
  pathVariables: { spaceId },
  options
});
var getSpace = async (spaceId, options) => invokeFetch("spaces", {
  method: "get",
  pathTemplate: "/api/v1/spaces/{spaceId}",
  pathVariables: { spaceId },
  options
});
var patchSpace = async (spaceId, body, options) => invokeFetch("spaces", {
  method: "patch",
  pathTemplate: "/api/v1/spaces/{spaceId}",
  pathVariables: { spaceId },
  body,
  options
});
var updateSpace = async (spaceId, body, options) => invokeFetch("spaces", {
  method: "put",
  pathTemplate: "/api/v1/spaces/{spaceId}",
  pathVariables: { spaceId },
  body,
  options
});
var getSpaceAssignments = async (spaceId, query, options) => invokeFetch("spaces", {
  method: "get",
  pathTemplate: "/api/v1/spaces/{spaceId}/assignments",
  pathVariables: { spaceId },
  query,
  options
});
var createSpaceAssignment = async (spaceId, body, options) => invokeFetch("spaces", {
  method: "post",
  pathTemplate: "/api/v1/spaces/{spaceId}/assignments",
  pathVariables: { spaceId },
  body,
  options
});
var deleteSpaceAssignment = async (spaceId, assignmentId, options) => invokeFetch("spaces", {
  method: "delete",
  pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
  pathVariables: { spaceId, assignmentId },
  options
});
var getSpaceAssignment = async (spaceId, assignmentId, options) => invokeFetch("spaces", {
  method: "get",
  pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
  pathVariables: { spaceId, assignmentId },
  options
});
var updateSpaceAssignment = async (spaceId, assignmentId, body, options) => invokeFetch("spaces", {
  method: "put",
  pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
  pathVariables: { spaceId, assignmentId },
  body,
  options
});
function clearCache() {
  return clearApiCache("spaces");
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
export {
  clearCache,
  createSpace,
  createSpaceAssignment,
  spaces_default as default,
  deleteSpace,
  deleteSpaceAssignment,
  getSpace,
  getSpaceAssignment,
  getSpaceAssignments,
  getSpaceTypes,
  getSpaces,
  patchSpace,
  updateSpace,
  updateSpaceAssignment
};
