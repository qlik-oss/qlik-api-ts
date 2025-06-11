import {
  clearApiCache,
  invokeFetch
} from "./chunks/LIEZG7IM.js";
import "./chunks/GPRUNZV4.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/data-credentials.ts
async function filterOrphanedDataCredentials(body, options) {
  return invokeFetch("data-credentials", {
    method: "post",
    pathTemplate: "/api/v1/data-credentials/actions/filter-orphan",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteDataCredential(qID, query, options) {
  return invokeFetch("data-credentials", {
    method: "delete",
    pathTemplate: "/api/v1/data-credentials/{qID}",
    pathVariables: { qID },
    query,
    options
  });
}
async function getDataCredential(qID, query, options) {
  return invokeFetch("data-credentials", {
    method: "get",
    pathTemplate: "/api/v1/data-credentials/{qID}",
    pathVariables: { qID },
    query,
    options
  });
}
async function patchDataCredential(qID, query, body, options) {
  return invokeFetch("data-credentials", {
    method: "patch",
    pathTemplate: "/api/v1/data-credentials/{qID}",
    pathVariables: { qID },
    query,
    body,
    contentType: "application/json",
    options
  });
}
async function updateDataCredential(qID, query, body, options) {
  return invokeFetch("data-credentials", {
    method: "put",
    pathTemplate: "/api/v1/data-credentials/{qID}",
    pathVariables: { qID },
    query,
    body,
    contentType: "application/json",
    options
  });
}
function clearCache() {
  return clearApiCache("data-credentials");
}
var dataCredentialsExport = {
  filterOrphanedDataCredentials,
  deleteDataCredential,
  getDataCredential,
  patchDataCredential,
  updateDataCredential,
  clearCache
};
var data_credentials_default = dataCredentialsExport;
export {
  clearCache,
  data_credentials_default as default,
  deleteDataCredential,
  filterOrphanedDataCredentials,
  getDataCredential,
  patchDataCredential,
  updateDataCredential
};
