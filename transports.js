import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/transports.ts
async function deleteEmailConfig(options) {
  return invokeFetch("transports", {
    method: "delete",
    pathTemplate: "/api/v1/transports/email-config",
    options
  });
}
async function getEmailConfig(options) {
  return invokeFetch("transports", {
    method: "get",
    pathTemplate: "/api/v1/transports/email-config",
    options
  });
}
async function patchEmailConfig(body, options) {
  return invokeFetch("transports", {
    method: "patch",
    pathTemplate: "/api/v1/transports/email-config",
    body,
    contentType: "application/json",
    options
  });
}
async function sendTestEmail(body, options) {
  return invokeFetch("transports", {
    method: "post",
    pathTemplate: "/api/v1/transports/email-config/actions/send-test-email",
    body,
    contentType: "application/json",
    options
  });
}
async function validateEmailConfig(options) {
  return invokeFetch("transports", {
    method: "post",
    pathTemplate: "/api/v1/transports/email-config/actions/validate",
    options
  });
}
async function verifyEmailConfigConnection(options) {
  return invokeFetch("transports", {
    method: "post",
    pathTemplate: "/api/v1/transports/email-config/actions/verify-connection",
    options
  });
}
function clearCache() {
  return clearApiCache("transports");
}
var transportsExport = {
  deleteEmailConfig,
  getEmailConfig,
  patchEmailConfig,
  sendTestEmail,
  validateEmailConfig,
  verifyEmailConfigConnection,
  clearCache
};
var transports_default = transportsExport;
export {
  clearCache,
  transports_default as default,
  deleteEmailConfig,
  getEmailConfig,
  patchEmailConfig,
  sendTestEmail,
  validateEmailConfig,
  verifyEmailConfigConnection
};
