import {
  clearApiCache,
  invokeFetch
} from "./chunks/T6AQ34ZJ.js";
import "./chunks/IMLCMV4X.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/transports.ts
var deleteEmailConfig = async (options) => invokeFetch("transports", {
  method: "delete",
  pathTemplate: "/api/v1/transports/email-config",
  options
});
var getEmailConfig = async (options) => invokeFetch("transports", {
  method: "get",
  pathTemplate: "/api/v1/transports/email-config",
  options
});
var patchEmailConfig = async (body, options) => invokeFetch("transports", {
  method: "patch",
  pathTemplate: "/api/v1/transports/email-config",
  body,
  contentType: "application/json",
  options
});
var sendTestEmail = async (body, options) => invokeFetch("transports", {
  method: "post",
  pathTemplate: "/api/v1/transports/email-config/actions/send-test-email",
  body,
  contentType: "application/json",
  options
});
var validateEmailConfig = async (options) => invokeFetch("transports", {
  method: "post",
  pathTemplate: "/api/v1/transports/email-config/actions/validate",
  options
});
var verifyEmailConfigConnection = async (options) => invokeFetch("transports", {
  method: "post",
  pathTemplate: "/api/v1/transports/email-config/actions/verify-connection",
  options
});
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
