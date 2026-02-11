import "./chunks/public-runtime-modules-2KfyI2qM.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DMAi6Fg3.js";

//#region src/public/rest/oauth-tokens.ts
/**
* Retrieve list of OAuth tokens that the user has access to. Users assigned with a `TenantAdmin` role can list OAuth tokens generated for all users in the tenant.
*
* @param query an object with query parameters
* @throws GetOauthTokensHttpError
*/
async function getOauthTokens(query, options) {
	return invokeFetch("oauth-tokens", {
		method: "get",
		pathTemplate: "/api/v1/oauth-tokens",
		query,
		options
	});
}
/**
* Revokes a specific OAuth token by ID. Requesting user must have `TenantAdmin` role assigned to delete tokens owned by other users.
*
* @param tokenId The ID of the token to revoke.
* @throws DeleteOauthTokenHttpError
*/
async function deleteOauthToken(tokenId, options) {
	return invokeFetch("oauth-tokens", {
		method: "delete",
		pathTemplate: "/api/v1/oauth-tokens/{tokenId}",
		pathVariables: { tokenId },
		options
	});
}
/**
* Clears the cache for oauth-tokens api requests.
*/
function clearCache() {
	return clearApiCache("oauth-tokens");
}
/**
* Functions for the oauth-tokens api
*/
const oauthTokensExport = {
	getOauthTokens,
	deleteOauthToken,
	clearCache
};

//#endregion
export { clearCache, oauthTokensExport as default, deleteOauthToken, getOauthTokens };