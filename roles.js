import "./chunks/public-runtime-modules-QhLPeQr5.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-B7lGscuQ.js";

//#region src/public/rest/roles.ts
/**
* Returns a list of roles using cursor-based pagination.
*
* @param query an object with query parameters
* @throws GetRolesHttpError
*/
async function getRoles(query, options) {
	return invokeFetch("roles", {
		method: "get",
		pathTemplate: "/api/v1/roles",
		query,
		options
	});
}
/**
* Creates a custom role. Role names must be unique, and there is a maximum of 500 custom roles per tenant. Requestor must be assigned the `TenantAdmin` role.
*
* @param body an object with the body content
* @throws CreateRoleHttpError
*/
async function createRole(body, options) {
	return invokeFetch("roles", {
		method: "post",
		pathTemplate: "/api/v1/roles",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes the requested role. Role can only be deleted if it has been unassigned from all users and groups. Only applicable to roles of type `custom`. Requestor must be assigned the `TenantAdmin` role.
*
* @param id The unique identifier for the role.
* @throws DeleteRoleHttpError
*/
async function deleteRole(id, options) {
	return invokeFetch("roles", {
		method: "delete",
		pathTemplate: "/api/v1/roles/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Returns the requested role.
*
* @param id The unique identifier for the role.
* @throws GetRoleHttpError
*/
async function getRole(id, options) {
	return invokeFetch("roles", {
		method: "get",
		pathTemplate: "/api/v1/roles/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates the requested role. Only applicable to roles of type `custom`. Requestor must be assigned the `TenantAdmin` role.
*
* @param id The unique identifier for the role.
* @param body an object with the body content
* @throws PatchRoleHttpError
*/
async function patchRole(id, body, options) {
	return invokeFetch("roles", {
		method: "patch",
		pathTemplate: "/api/v1/roles/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for roles api requests.
*/
function clearCache() {
	return clearApiCache("roles");
}
/**
* Functions for the roles api
*/
const rolesExport = {
	getRoles,
	createRole,
	deleteRole,
	getRole,
	patchRole,
	clearCache
};
var roles_default = rolesExport;

//#endregion
export { clearCache, createRole, roles_default as default, deleteRole, getRole, getRoles, patchRole };