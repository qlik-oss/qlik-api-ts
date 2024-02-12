import {
  clearApiCache,
  invokeFetch
} from "./chunks/3YV6X7S6.mjs";
import "./chunks/EHAANYDL.mjs";
import "./chunks/VSY5YIQY.mjs";

// src/public/rest/data-credentials.ts
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
  getDataCredential,
  patchDataCredential,
  updateDataCredential
};
