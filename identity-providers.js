import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

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
  contentType: "application/json",
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
var getIdpStatuses = async (options) => invokeFetch("identity-providers", {
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
  contentType: "application/json",
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
  getIdpStatuses,
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
  getIdpStatuses,
  getIdpWellKnownMetaData,
  getIdps,
  getMyIdpMeta,
  patchIdp
};
