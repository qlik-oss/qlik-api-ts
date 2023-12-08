import {
  clearApiCache,
  invokeFetch
} from "./chunk-W4J34XGA.mjs";
import "./chunk-7REWEWCX.mjs";

// src/public/rest/roles.ts
var getRoles = async (query, options) => invokeFetch("roles", {
  method: "get",
  pathTemplate: "/api/v1/roles",
  query,
  options
});
var getRole = async (id, options) => invokeFetch("roles", {
  method: "get",
  pathTemplate: "/api/v1/roles/{id}",
  pathVariables: { id },
  options
});
function clearCache() {
  return clearApiCache("roles");
}
var rolesExport = { getRoles, getRole, clearCache };
var roles_default = rolesExport;
export {
  clearCache,
  roles_default as default,
  getRole,
  getRoles
};
