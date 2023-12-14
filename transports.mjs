import {
  clearApiCache,
  invokeFetch
} from "./chunk-MP2QZCTY.mjs";
import "./chunk-2OXQN2IV.mjs";

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
  options
});
var sendTestEmail = async (body, options) => invokeFetch("transports", {
  method: "post",
  pathTemplate: "/api/v1/transports/email-config/actions/send-test-email",
  body,
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
