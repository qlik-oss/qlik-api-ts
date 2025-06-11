import {
  clearApiCache,
  invokeFetch
} from "./chunks/LIEZG7IM.js";
import "./chunks/GPRUNZV4.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/oauth-clients.ts
async function getOAuthClients(query, options) {
  return invokeFetch("oauth-clients", {
    method: "get",
    pathTemplate: "/api/v1/oauth-clients",
    query,
    options
  });
}
async function createOAuthClient(body, options) {
  return invokeFetch("oauth-clients", {
    method: "post",
    pathTemplate: "/api/v1/oauth-clients",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteOAuthClient(id, options) {
  return invokeFetch("oauth-clients", {
    method: "delete",
    pathTemplate: "/api/v1/oauth-clients/{id}",
    pathVariables: { id },
    options
  });
}
async function getOAuthClient(id, options) {
  return invokeFetch("oauth-clients", {
    method: "get",
    pathTemplate: "/api/v1/oauth-clients/{id}",
    pathVariables: { id },
    options
  });
}
async function patchOAuthClient(id, body, options) {
  return invokeFetch("oauth-clients", {
    method: "patch",
    pathTemplate: "/api/v1/oauth-clients/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function publishOAuthClient(id, options) {
  return invokeFetch("oauth-clients", {
    method: "post",
    pathTemplate: "/api/v1/oauth-clients/{id}/actions/publish",
    pathVariables: { id },
    options
  });
}
async function createOAuthClientSecret(id, options) {
  return invokeFetch("oauth-clients", {
    method: "post",
    pathTemplate: "/api/v1/oauth-clients/{id}/client-secrets",
    pathVariables: { id },
    options
  });
}
async function deleteOAuthClientSecret(id, hint, options) {
  return invokeFetch("oauth-clients", {
    method: "delete",
    pathTemplate: "/api/v1/oauth-clients/{id}/client-secrets/{hint}",
    pathVariables: { id, hint },
    options
  });
}
async function deleteOAuthClientConnectionConfig(id, options) {
  return invokeFetch("oauth-clients", {
    method: "delete",
    pathTemplate: "/api/v1/oauth-clients/{id}/connection-configs/me",
    pathVariables: { id },
    options
  });
}
async function getOAuthClientConnectionConfig(id, options) {
  return invokeFetch("oauth-clients", {
    method: "get",
    pathTemplate: "/api/v1/oauth-clients/{id}/connection-configs/me",
    pathVariables: { id },
    options
  });
}
async function patchOAuthClientConnectionConfig(id, body, options) {
  return invokeFetch("oauth-clients", {
    method: "patch",
    pathTemplate: "/api/v1/oauth-clients/{id}/connection-configs/me",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
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
