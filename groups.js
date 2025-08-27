import "./chunks/utils-CAGXTaqJ.js";
import "./chunks/public-runtime-modules-P9LEbn8i.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-09EW5w1d.js";

//#region src/public/rest/groups.ts
/**
* Returns a list of groups with cursor-based pagination.
*
* @param query an object with query parameters
* @throws GetGroupsHttpError
*/
async function getGroups(query, options) {
	return invokeFetch("groups", {
		method: "get",
		pathTemplate: "/api/v1/groups",
		query,
		options
	});
}
/**
* Creates a new group. The maximum number of groups a tenant can have is 10,000. Group names are case-sensitive, and must be unique.
*
* @param body an object with the body content
* @throws CreateGroupHttpError
*/
async function createGroup(body, options) {
	return invokeFetch("groups", {
		method: "post",
		pathTemplate: "/api/v1/groups",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves a list of groups matching the filter using advanced query string.
*
* @param query an object with query parameters
* @param body an object with the body content
* @throws FilterGroupsHttpError
*/
async function filterGroups(query, body, options) {
	return invokeFetch("groups", {
		method: "post",
		pathTemplate: "/api/v1/groups/actions/filter",
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns the tenant's group settings, such as whether automatic group creation and IdP group synchronization are enabled or disabled, and roles assigned to system groups.
*
* @throws GetGroupsSettingsHttpError
*/
async function getGroupsSettings(options) {
	return invokeFetch("groups", {
		method: "get",
		pathTemplate: "/api/v1/groups/settings",
		options
	});
}
/**
* Updates the tenant's group settings, such as whether automatic group creation and IdP group synchronization are enabled or disabled, and roles assigned to system groups.
*
* @param body an object with the body content
* @throws PatchGroupsSettingsHttpError
*/
async function patchGroupsSettings(body, options) {
	return invokeFetch("groups", {
		method: "patch",
		pathTemplate: "/api/v1/groups/settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes the requested group.
*
* @param groupId The ID of the group to delete.
* @throws DeleteGroupHttpError
*/
async function deleteGroup(groupId, options) {
	return invokeFetch("groups", {
		method: "delete",
		pathTemplate: "/api/v1/groups/{groupId}",
		pathVariables: { groupId },
		options
	});
}
/**
* Returns the requested group.
*
* @param groupId The group's unique identifier
* @throws GetGroupHttpError
*/
async function getGroup(groupId, options) {
	return invokeFetch("groups", {
		method: "get",
		pathTemplate: "/api/v1/groups/{groupId}",
		pathVariables: { groupId },
		options
	});
}
/**
* Updates the requested group.
*
* @param groupId The ID of the group to update.
* @param body an object with the body content
* @throws PatchGroupHttpError
*/
async function patchGroup(groupId, body, options) {
	return invokeFetch("groups", {
		method: "patch",
		pathTemplate: "/api/v1/groups/{groupId}",
		pathVariables: { groupId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for groups api requests.
*/
function clearCache() {
	return clearApiCache("groups");
}
/**
* Functions for the groups api
*/
const groupsExport = {
	getGroups,
	createGroup,
	filterGroups,
	getGroupsSettings,
	patchGroupsSettings,
	deleteGroup,
	getGroup,
	patchGroup,
	clearCache
};
var groups_default = groupsExport;

//#endregion
export { clearCache, createGroup, groups_default as default, deleteGroup, filterGroups, getGroup, getGroups, getGroupsSettings, patchGroup, patchGroupsSettings };