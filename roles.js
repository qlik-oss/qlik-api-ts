import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/roles.ts
async function getRoles(query, options) {
  return invokeFetch("roles", {
    method: "get",
    pathTemplate: "/api/v1/roles",
    query,
    options
  });
}
async function createRole(body, options) {
  return invokeFetch("roles", {
    method: "post",
    pathTemplate: "/api/v1/roles",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteRole(id, options) {
  return invokeFetch("roles", {
    method: "delete",
    pathTemplate: "/api/v1/roles/{id}",
    pathVariables: { id },
    options
  });
}
async function getRole(id, options) {
  return invokeFetch("roles", {
    method: "get",
    pathTemplate: "/api/v1/roles/{id}",
    pathVariables: { id },
    options
  });
}
async function patchRole(id, body, options) {
  return invokeFetch("roles", {
    method: "patch",
    pathTemplate: "/api/v1/roles/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
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
