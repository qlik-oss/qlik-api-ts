import {
  clearApiCache,
  invokeFetch
} from "./chunk-3YE7EI7I.mjs";
import "./chunk-WM7FQU2U.mjs";

// src/public/rest/identity-providers.ts
var getIdps = async (query, options) => invokeFetch("identity-providers", {
  method: "get",
  pathTemplate: "/api/v1/identity-providers",
  query,
  options
});
var createIdp = async (body, options) => invokeFetch("identity-providers", {
  method: "post",
  pathTemplate: "/api/v1/identity-providers",
  body,
  options
});
var getIdpWellKnownMetaData = async (options) => invokeFetch("identity-providers", {
  method: "get",
  pathTemplate: "/api/v1/identity-providers/.well-known/metadata.json",
  options
});
var getMyIdpMeta = async (options) => invokeFetch("identity-providers", {
  method: "get",
  pathTemplate: "/api/v1/identity-providers/me/meta",
  options
});
var getIdpStatus = async (options) => invokeFetch("identity-providers", {
  method: "get",
  pathTemplate: "/api/v1/identity-providers/status",
  options
});
var deleteIdp = async (id, options) => invokeFetch("identity-providers", {
  method: "delete",
  pathTemplate: "/api/v1/identity-providers/{id}",
  pathVariables: { id },
  options
});
var getIdp = async (id, options) => invokeFetch("identity-providers", {
  method: "get",
  pathTemplate: "/api/v1/identity-providers/{id}",
  pathVariables: { id },
  options
});
var patchIdp = async (id, body, options) => invokeFetch("identity-providers", {
  method: "patch",
  pathTemplate: "/api/v1/identity-providers/{id}",
  pathVariables: { id },
  body,
  options
});
function clearCache() {
  return clearApiCache("identity-providers");
}
var identityProvidersExport = {
  getIdps,
  createIdp,
  getIdpWellKnownMetaData,
  getMyIdpMeta,
  getIdpStatus,
  deleteIdp,
  getIdp,
  patchIdp,
  clearCache
};
var identity_providers_default = identityProvidersExport;
export {
  clearCache,
  createIdp,
  identity_providers_default as default,
  deleteIdp,
  getIdp,
  getIdpStatus,
  getIdpWellKnownMetaData,
  getIdps,
  getMyIdpMeta,
  patchIdp
};
