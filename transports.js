import "./chunks/utils-1j8VpsDa.js";
import "./chunks/public-runtime-modules-BDZc6BaU.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-CAbtWWeJ.js";

//#region src/public/rest/transports.ts
/**
* Deletes email configuration for a given tenant id (retrieved from JWT).
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
* Returns the email configuration for a given tenant id (retrieved from JWT).
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
* Patch the email configuration for a given tenant id (retrieved from JWT).
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
* Send a test mail with the supplied email info (subject, body, recipient). Email config from database is used for the connection.
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
* Returns the isValid value for the email configuration for the tenant. Will return false if no email configuration exists.
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
* Verifies connection to email server for tenant provided via JWT
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