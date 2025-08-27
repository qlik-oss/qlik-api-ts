import "./chunks/utils-CAGXTaqJ.js";
import "./chunks/public-runtime-modules-P9LEbn8i.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-09EW5w1d.js";

//#region src/public/rest/users.ts
/**
* Returns a list of users using cursor-based pagination.
*
* @param query an object with query parameters
* @throws GetUsersHttpError
*/
async function getUsers(query, options) {
	return invokeFetch("users", {
		method: "get",
		pathTemplate: "/api/v1/users",
		query,
		options
	});
}
/**
* Creates an invited user.
*
* @param body an object with the body content
* @throws CreateUserHttpError
*/
async function createUser(body, options) {
	return invokeFetch("users", {
		method: "post",
		pathTemplate: "/api/v1/users",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns the number of users in a given tenant
*
* @param query an object with query parameters
* @throws CountUsersHttpError
*/
async function countUsers(query, options) {
	return invokeFetch("users", {
		method: "get",
		pathTemplate: "/api/v1/users/actions/count",
		query,
		options
	});
}
/**
* Retrieves a list of users matching the filter using an advanced query string.
*
* @param query an object with query parameters
* @param body an object with the body content
* @throws FilterUsersHttpError
*/
async function filterUsers(query, body, options) {
	return invokeFetch("users", {
		method: "post",
		pathTemplate: "/api/v1/users/actions/filter",
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Invite one or more users by email address.
*
* @param body an object with the body content
* @throws InviteUsersHttpError
*/
async function inviteUsers(body, options) {
	return invokeFetch("users", {
		method: "post",
		pathTemplate: "/api/v1/users/actions/invite",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Redirects to retrieve the user resource associated with the JWT claims.
*
* @throws GetMyUserHttpError
*/
async function getMyUser(options) {
	return invokeFetch("users", {
		method: "get",
		pathTemplate: "/api/v1/users/me",
		options
	});
}
/**
* Deletes the requested user.
*
* @param userId The ID of the user to delete.
* @throws DeleteUserHttpError
*/
async function deleteUser(userId, options) {
	return invokeFetch("users", {
		method: "delete",
		pathTemplate: "/api/v1/users/{userId}",
		pathVariables: { userId },
		options
	});
}
/**
* Returns the requested user.
*
* @param userId The user's unique identifier
* @param query an object with query parameters
* @throws GetUserHttpError
*/
async function getUser(userId, query, options) {
	return invokeFetch("users", {
		method: "get",
		pathTemplate: "/api/v1/users/{userId}",
		pathVariables: { userId },
		query,
		options
	});
}
/**
* Updates fields for a user resource
*
* @param userId The ID of the user to update.
* @param body an object with the body content
* @throws PatchUserHttpError
*/
async function patchUser(userId, body, options) {
	return invokeFetch("users", {
		method: "patch",
		pathTemplate: "/api/v1/users/{userId}",
		pathVariables: { userId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for users api requests.
*/
function clearCache() {
	return clearApiCache("users");
}
/**
* Functions for the users api
*/
const usersExport = {
	getUsers,
	createUser,
	countUsers,
	filterUsers,
	inviteUsers,
	getMyUser,
	deleteUser,
	getUser,
	patchUser,
	clearCache
};
var users_default = usersExport;

//#endregion
export { clearCache, countUsers, createUser, users_default as default, deleteUser, filterUsers, getMyUser, getUser, getUsers, inviteUsers, patchUser };