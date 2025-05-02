import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/oauth-clients.ts
var getOAuthClients = async (query, options) => invokeFetch("oauth-clients", {
  method: "get",
  pathTemplate: "/api/v1/oauth-clients",
  query,
  options
});
var createOAuthClient = async (body, options) => invokeFetch("oauth-clients", {
  method: "post",
  pathTemplate: "/api/v1/oauth-clients",
  body,
  contentType: "application/json",
  options
});
var deleteOAuthClient = async (id, options) => invokeFetch("oauth-clients", {
  method: "delete",
  pathTemplate: "/api/v1/oauth-clients/{id}",
  pathVariables: { id },
  options
});
var getOAuthClient = async (id, options) => invokeFetch("oauth-clients", {
  method: "get",
  pathTemplate: "/api/v1/oauth-clients/{id}",
  pathVariables: { id },
  options
});
var patchOAuthClient = async (id, body, options) => invokeFetch("oauth-clients", {
  method: "patch",
  pathTemplate: "/api/v1/oauth-clients/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var publishOAuthClient = async (id, options) => invokeFetch("oauth-clients", {
  method: "post",
  pathTemplate: "/api/v1/oauth-clients/{id}/actions/publish",
  pathVariables: { id },
  options
});
var createOAuthClientSecret = async (id, options) => invokeFetch("oauth-clients", {
  method: "post",
  pathTemplate: "/api/v1/oauth-clients/{id}/client-secrets",
  pathVariables: { id },
  options
});
var deleteOAuthClientSecret = async (id, hint, options) => invokeFetch("oauth-clients", {
  method: "delete",
  pathTemplate: "/api/v1/oauth-clients/{id}/client-secrets/{hint}",
  pathVariables: { id, hint },
  options
});
var deleteOAuthClientConnectionConfig = async (id, options) => invokeFetch("oauth-clients", {
  method: "delete",
  pathTemplate: "/api/v1/oauth-clients/{id}/connection-configs/me",
  pathVariables: { id },
  options
});
var getOAuthClientConnectionConfig = async (id, options) => invokeFetch("oauth-clients", {
  method: "get",
  pathTemplate: "/api/v1/oauth-clients/{id}/connection-configs/me",
  pathVariables: { id },
  options
});
var patchOAuthClientConnectionConfig = async (id, body, options) => invokeFetch("oauth-clients", {
  method: "patch",
  pathTemplate: "/api/v1/oauth-clients/{id}/connection-configs/me",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return clearApiCache("oauth-clients");
}
var oauthClientsExport = {
  getOAuthClients,
  createOAuthClient,
  deleteOAuthClient,
  getOAuthClient,
  patchOAuthClient,
  publishOAuthClient,
  createOAuthClientSecret,
  deleteOAuthClientSecret,
  deleteOAuthClientConnectionConfig,
  getOAuthClientConnectionConfig,
  patchOAuthClientConnectionConfig,
  clearCache
};
var oauth_clients_default = oauthClientsExport;
export {
  clearCache,
  createOAuthClient,
  createOAuthClientSecret,
  oauth_clients_default as default,
  deleteOAuthClient,
  deleteOAuthClientConnectionConfig,
  deleteOAuthClientSecret,
  getOAuthClient,
  getOAuthClientConnectionConfig,
  getOAuthClients,
  patchOAuthClient,
  patchOAuthClientConnectionConfig,
  publishOAuthClient
};
