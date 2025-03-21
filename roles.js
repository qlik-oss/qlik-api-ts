import {
  clearApiCache,
  invokeFetch
} from "./chunks/U2WIRQWE.js";
import "./chunks/WSUDVT4U.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/roles.ts
var getRoles = async (query, options) => invokeFetch("roles", {
  method: "get",
  pathTemplate: "/api/v1/roles",
  query,
  options
});
var createRole = async (body, options) => invokeFetch("roles", {
  method: "post",
  pathTemplate: "/api/v1/roles",
  body,
  contentType: "application/json",
  options
});
var deleteRole = async (id, options) => invokeFetch("roles", {
  method: "delete",
  pathTemplate: "/api/v1/roles/{id}",
  pathVariables: { id },
  options
});
var getRole = async (id, options) => invokeFetch("roles", {
  method: "get",
  pathTemplate: "/api/v1/roles/{id}",
  pathVariables: { id },
  options
});
var patchRole = async (id, body, options) => invokeFetch("roles", {
  method: "patch",
  pathTemplate: "/api/v1/roles/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return clearApiCache("roles");
}
var rolesExport = { getRoles, createRole, deleteRole, getRole, patchRole, clearCache };
var roles_default = rolesExport;
export {
  clearCache,
  createRole,
  roles_default as default,
  deleteRole,
  getRole,
  getRoles,
  patchRole
};
