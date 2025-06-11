import {
  clearApiCache,
  invokeFetch
} from "./chunks/LIEZG7IM.js";
import "./chunks/GPRUNZV4.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/spaces.ts
async function getSpaces(query, options) {
  return invokeFetch("spaces", {
    method: "get",
    pathTemplate: "/api/v1/spaces",
    query,
    options
  });
}
async function createSpace(body, options) {
  return invokeFetch("spaces", {
    method: "post",
    pathTemplate: "/api/v1/spaces",
    body,
    contentType: "application/json",
    options
  });
}
async function getSpaceTypes(options) {
  return invokeFetch("spaces", {
    method: "get",
    pathTemplate: "/api/v1/spaces/types",
    options
  });
}
async function deleteSpace(spaceId, options) {
  return invokeFetch("spaces", {
    method: "delete",
    pathTemplate: "/api/v1/spaces/{spaceId}",
    pathVariables: { spaceId },
    options
  });
}
async function getSpace(spaceId, options) {
  return invokeFetch("spaces", {
    method: "get",
    pathTemplate: "/api/v1/spaces/{spaceId}",
    pathVariables: { spaceId },
    options
  });
}
async function patchSpace(spaceId, body, options) {
  return invokeFetch("spaces", {
    method: "patch",
    pathTemplate: "/api/v1/spaces/{spaceId}",
    pathVariables: { spaceId },
    body,
    contentType: "application/json",
    options
  });
}
async function updateSpace(spaceId, body, options) {
  return invokeFetch("spaces", {
    method: "put",
    pathTemplate: "/api/v1/spaces/{spaceId}",
    pathVariables: { spaceId },
    body,
    contentType: "application/json",
    options
  });
}
async function getSpaceAssignments(spaceId, query, options) {
  return invokeFetch("spaces", {
    method: "get",
    pathTemplate: "/api/v1/spaces/{spaceId}/assignments",
    pathVariables: { spaceId },
    query,
    options
  });
}
async function createSpaceAssignment(spaceId, body, options) {
  return invokeFetch("spaces", {
    method: "post",
    pathTemplate: "/api/v1/spaces/{spaceId}/assignments",
    pathVariables: { spaceId },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteSpaceAssignment(spaceId, assignmentId, options) {
  return invokeFetch("spaces", {
    method: "delete",
    pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
    pathVariables: { spaceId, assignmentId },
    options
  });
}
async function getSpaceAssignment(spaceId, assignmentId, options) {
  return invokeFetch("spaces", {
    method: "get",
    pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
    pathVariables: { spaceId, assignmentId },
    options
  });
}
async function updateSpaceAssignment(spaceId, assignmentId, body, options) {
  return invokeFetch("spaces", {
    method: "put",
    pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
    pathVariables: { spaceId, assignmentId },
    body,
    contentType: "application/json",
    options
  });
}
async function getSpaceShares(spaceId, query, options) {
  return invokeFetch("spaces", {
    method: "get",
    pathTemplate: "/api/v1/spaces/{spaceId}/shares",
    pathVariables: { spaceId },
    query,
    options
  });
}
async function createSpaceShare(spaceId, body, options) {
  return invokeFetch("spaces", {
    method: "post",
    pathTemplate: "/api/v1/spaces/{spaceId}/shares",
    pathVariables: { spaceId },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteSpaceShare(spaceId, shareId, options) {
  return invokeFetch("spaces", {
    method: "delete",
    pathTemplate: "/api/v1/spaces/{spaceId}/shares/{shareId}",
    pathVariables: { spaceId, shareId },
    options
  });
}
async function getSpaceShare(spaceId, shareId, options) {
  return invokeFetch("spaces", {
    method: "get",
    pathTemplate: "/api/v1/spaces/{spaceId}/shares/{shareId}",
    pathVariables: { spaceId, shareId },
    options
  });
}
async function patchShare(spaceId, shareId, body, options) {
  return invokeFetch("spaces", {
    method: "patch",
    pathTemplate: "/api/v1/spaces/{spaceId}/shares/{shareId}",
    pathVariables: { spaceId, shareId },
    body,
    contentType: "application/json",
    options
  });
}
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
  getSpaceShares,
  createSpaceShare,
  deleteSpaceShare,
  getSpaceShare,
  patchShare,
  clearCache
};
var spaces_default = spacesExport;
export {
  clearCache,
  createSpace,
  createSpaceAssignment,
  createSpaceShare,
  spaces_default as default,
  deleteSpace,
  deleteSpaceAssignment,
  deleteSpaceShare,
  getSpace,
  getSpaceAssignment,
  getSpaceAssignments,
  getSpaceShare,
  getSpaceShares,
  getSpaceTypes,
  getSpaces,
  patchShare,
  patchSpace,
  updateSpace,
  updateSpaceAssignment
};
