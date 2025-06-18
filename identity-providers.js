import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/identity-providers.ts
async function getIdps(query, options) {
  return invokeFetch("identity-providers", {
    method: "get",
    pathTemplate: "/api/v1/identity-providers",
    query,
    options
  });
}
async function createIdp(body, options) {
  return invokeFetch("identity-providers", {
    method: "post",
    pathTemplate: "/api/v1/identity-providers",
    body,
    contentType: "application/json",
    options
  });
}
async function getIdpWellKnownMetaData(options) {
  return invokeFetch("identity-providers", {
    method: "get",
    pathTemplate: "/api/v1/identity-providers/.well-known/metadata.json",
    options
  });
}
async function getMyIdpMeta(options) {
  return invokeFetch("identity-providers", {
    method: "get",
    pathTemplate: "/api/v1/identity-providers/me/meta",
    options
  });
}
async function getIdpStatuses(options) {
  return invokeFetch("identity-providers", {
    method: "get",
    pathTemplate: "/api/v1/identity-providers/status",
    options
  });
}
async function deleteIdp(id, options) {
  return invokeFetch("identity-providers", {
    method: "delete",
    pathTemplate: "/api/v1/identity-providers/{id}",
    pathVariables: { id },
    options
  });
}
async function getIdp(id, options) {
  return invokeFetch("identity-providers", {
    method: "get",
    pathTemplate: "/api/v1/identity-providers/{id}",
    pathVariables: { id },
    options
  });
}
async function patchIdp(id, body, options) {
  return invokeFetch("identity-providers", {
    method: "patch",
    pathTemplate: "/api/v1/identity-providers/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
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
