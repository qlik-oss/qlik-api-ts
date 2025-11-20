import "./chunks/utils-UaAiVTcc.js";
import "./chunks/public-runtime-modules-DiFgGaqr.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CoW3QRhJ.js";

//#region src/public/rest/oauth-clients.ts
/**
* Retrieve all OAuth clients.
* @example
* getOAuthClients(
*   {
*     filter: "appType eq \"spa\" and clientId eq \"b3ee66d6f21d1611efa89a425f656f6f\"",
*     totalResults: true
*   }
* )
*
* @param query an object with query parameters
* @throws GetOAuthClientsHttpError
*/
async function getOAuthClients(query, options) {
	return invokeFetch("oauth-clients", {
		method: "get",
		pathTemplate: "/api/v1/oauth-clients",
		query,
		options
	});
}
/**
* Create a new OAuth client. Requires `TenantAdmin` role when created in-tenant. `appType` cannot be changed after creation. Consent method and published state can be changed after creation. For supported `appType`, use `PATCH /oauth-clients/{id}/connection-configs/me` to change consent method, and `POST /oauth-clients/{id}/actions/publish` to change the client to published after creation.
*
* @param body an object with the body content
* @throws CreateOAuthClientHttpError
*/
async function createOAuthClient(body, options) {
	return invokeFetch("oauth-clients", {
		method: "post",
		pathTemplate: "/api/v1/oauth-clients",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Delete the specified OAuth client.
*
* @param id The unique identifier for the OAuth client
* @throws DeleteOAuthClientHttpError
*/
async function deleteOAuthClient(id, options) {
	return invokeFetch("oauth-clients", {
		method: "delete",
		pathTemplate: "/api/v1/oauth-clients/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves the specified OAuth client.
*
* @param id The unique identifier for the OAuth client
* @throws GetOAuthClientHttpError
*/
async function getOAuthClient(id, options) {
	return invokeFetch("oauth-clients", {
		method: "get",
		pathTemplate: "/api/v1/oauth-clients/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates the specified OAuth client.
*
* @param id The unique identifier for the OAuth client
* @param body an object with the body content
* @throws PatchOAuthClientHttpError
*/
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
/**
* Publishes the specified OAuth client. By default, OAuth clients are bound to the tenant that created it. Publishing shares the client and makes it available to all other tenants within a region. Third-party applications connecting to Qlik Cloud can then have the same client ID for all Qlik Cloud tenants.
*
* @param id The unique identifier for the OAuth client
* @throws PublishOAuthClientHttpError
*/
async function publishOAuthClient(id, options) {
	return invokeFetch("oauth-clients", {
		method: "post",
		pathTemplate: "/api/v1/oauth-clients/{id}/actions/publish",
		pathVariables: { id },
		options
	});
}
/**
* Create a new client secret for the specified OAuth client. An OAuth client can have a maximum of 5 client secrets at one time.
*
* @param id The unique identifier for the OAuth client
* @throws CreateOAuthClientSecretHttpError
*/
async function createOAuthClientSecret(id, options) {
	return invokeFetch("oauth-clients", {
		method: "post",
		pathTemplate: "/api/v1/oauth-clients/{id}/client-secrets",
		pathVariables: { id },
		options
	});
}
/**
* Deletes a specific client secret for an OAuth client.
*
* @param id The unique identifier for the OAuth client
* @param hint The unique identifier for the OAuth secret
* @throws DeleteOAuthClientSecretHttpError
*/
async function deleteOAuthClientSecret(id, hint, options) {
	return invokeFetch("oauth-clients", {
		method: "delete",
		pathTemplate: "/api/v1/oauth-clients/{id}/client-secrets/{hint}",
		pathVariables: {
			id,
			hint
		},
		options
	});
}
/**
* Deletes the connection config for the calling tenant, related to the supplied client id.
*
* @param id The unique identifier for the OAuth client
* @throws DeleteOAuthClientConnectionConfigHttpError
*/
async function deleteOAuthClientConnectionConfig(id, options) {
	return invokeFetch("oauth-clients", {
		method: "delete",
		pathTemplate: "/api/v1/oauth-clients/{id}/connection-configs/me",
		pathVariables: { id },
		options
	});
}
/**
* Get configuration for consent method and status.
*
* @param id The unique identifier for an OAuth client
* @throws GetOAuthClientConnectionConfigHttpError
*/
async function getOAuthClientConnectionConfig(id, options) {
	return invokeFetch("oauth-clients", {
		method: "get",
		pathTemplate: "/api/v1/oauth-clients/{id}/connection-configs/me",
		pathVariables: { id },
		options
	});
}
/**
* Updates the consent method for the specified OAuth client.
*
* @param id The unique identifier for the OAuth client
* @param body an object with the body content
* @throws PatchOAuthClientConnectionConfigHttpError
*/
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
/**
* Clears the cache for oauth-clients api requests.
*/
function clearCache() {
	return clearApiCache("oauth-clients");
}
/**
* Functions for the oauth-clients api
*/
const oauthClientsExport = {
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

//#endregion
export { clearCache, createOAuthClient, createOAuthClientSecret, oauth_clients_default as default, deleteOAuthClient, deleteOAuthClientConnectionConfig, deleteOAuthClientSecret, getOAuthClient, getOAuthClientConnectionConfig, getOAuthClients, patchOAuthClient, patchOAuthClientConnectionConfig, publishOAuthClient };