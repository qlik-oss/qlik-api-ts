import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/data-credentials.ts
var filterOrphanedDataCredentials = async (body, options) => invokeFetch("data-credentials", {
  method: "post",
  pathTemplate: "/api/v1/data-credentials/actions/filter-orphan",
  body,
  contentType: "application/json",
  options
});
var deleteDataCredential = async (qID, query, options) => invokeFetch("data-credentials", {
  method: "delete",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  options
});
var getDataCredential = async (qID, query, options) => invokeFetch("data-credentials", {
  method: "get",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  options
});
var patchDataCredential = async (qID, query, body, options) => invokeFetch("data-credentials", {
  method: "patch",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  body,
  contentType: "application/json",
  options
});
var updateDataCredential = async (qID, query, body, options) => invokeFetch("data-credentials", {
  method: "put",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  body,
  contentType: "application/json",
  options
});
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
