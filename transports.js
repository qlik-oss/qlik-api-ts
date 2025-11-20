import "./chunks/utils-UaAiVTcc.js";
import "./chunks/public-runtime-modules-DiFgGaqr.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CoW3QRhJ.js";

//#region src/public/rest/transports.ts
/**
* Deletes the email configuration for the tenant.
*
* @throws DeleteEmailConfigHttpError
*/
async function deleteEmailConfig(options) {
	return invokeFetch("transports", {
		method: "delete",
		pathTemplate: "/api/v1/transports/email-config",
		options
	});
}
/**
* Returns the current email configuration and configuration status for the tenant.
*
* @throws GetEmailConfigHttpError
*/
async function getEmailConfig(options) {
	return invokeFetch("transports", {
		method: "get",
		pathTemplate: "/api/v1/transports/email-config",
		options
	});
}
/**
* @deprecated
*
* Patch the email configuration for the tenant.
*
* @param body an object with the body content
* @throws PatchEmailConfigHttpError
*/
async function patchEmailConfig(body, options) {
	return invokeFetch("transports", {
		method: "patch",
		pathTemplate: "/api/v1/transports/email-config",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Attempts to sends a test email using the active configuration, with the supplied email info (subject, body, recipient).
*
* @param body an object with the body content
* @throws SendTestEmailHttpError
*/
async function sendTestEmail(body, options) {
	return invokeFetch("transports", {
		method: "post",
		pathTemplate: "/api/v1/transports/email-config/actions/send-test-email",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns the current isValid value for the email configuration for the tenant. Does not attempt to connect to a server to verify the connection or send a test email. Will return false if no email configuration exists.
*
* @throws ValidateEmailConfigHttpError
*/
async function validateEmailConfig(options) {
	return invokeFetch("transports", {
		method: "post",
		pathTemplate: "/api/v1/transports/email-config/actions/validate",
		options
	});
}
/**
* Attempts to verify connection to email server using a low-level protocol handshake to confirm the server is reachable and the credentials are valid, without sending a test email.
*
* @throws VerifyEmailConfigConnectionHttpError
*/
async function verifyEmailConfigConnection(options) {
	return invokeFetch("transports", {
		method: "post",
		pathTemplate: "/api/v1/transports/email-config/actions/verify-connection",
		options
	});
}
/**
* Clears the cache for transports api requests.
*/
function clearCache() {
	return clearApiCache("transports");
}
/**
* Functions for the transports api
*/
const transportsExport = {
	deleteEmailConfig,
	getEmailConfig,
	patchEmailConfig,
	sendTestEmail,
	validateEmailConfig,
	verifyEmailConfigConnection,
	clearCache
};
var transports_default = transportsExport;

//#endregion
export { clearCache, transports_default as default, deleteEmailConfig, getEmailConfig, patchEmailConfig, sendTestEmail, validateEmailConfig, verifyEmailConfigConnection };