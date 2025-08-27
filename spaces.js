import "./chunks/utils-CAGXTaqJ.js";
import "./chunks/public-runtime-modules-P9LEbn8i.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-09EW5w1d.js";

//#region src/public/rest/spaces.ts
/**
* Retrieves spaces that the current user has access to and match the query.
*
* @param query an object with query parameters
* @throws GetSpacesHttpError
*/
async function getSpaces(query, options) {
	return invokeFetch("spaces", {
		method: "get",
		pathTemplate: "/api/v1/spaces",
		query,
		options
	});
}
/**
* Creates a space. Spaces names must be unique. Spaces of type `data` should only be used for Qlik Talend Data Integration projects.
*
* @param body an object with the body content
* @throws CreateSpaceHttpError
*/
async function createSpace(body, options) {
	return invokeFetch("spaces", {
		method: "post",
		pathTemplate: "/api/v1/spaces",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Gets a list of distinct space types available for use in the tenant.
*
* @throws GetSpaceTypesHttpError
*/
async function getSpaceTypes(options) {
	return invokeFetch("spaces", {
		method: "get",
		pathTemplate: "/api/v1/spaces/types",
		options
	});
}
/**
* Deletes a space. Ensure that you first delete all resources from the space to avoid orphaning content.
*
* @param spaceId The ID of the space to delete.
* @throws DeleteSpaceHttpError
*/
async function deleteSpace(spaceId, options) {
	return invokeFetch("spaces", {
		method: "delete",
		pathTemplate: "/api/v1/spaces/{spaceId}",
		pathVariables: { spaceId },
		options
	});
}
/**
* Retrieves a single space by ID.
*
* @param spaceId The ID of the space to retrieve.
* @throws GetSpaceHttpError
*/
async function getSpace(spaceId, options) {
	return invokeFetch("spaces", {
		method: "get",
		pathTemplate: "/api/v1/spaces/{spaceId}",
		pathVariables: { spaceId },
		options
	});
}
/**
* Updates one or more properties of a space. To update all properties at once, use `PUT /spaces/{spaceId}`.
*
* @param spaceId The ID of the space to update.
* @param body an object with the body content
* @throws PatchSpaceHttpError
*/
async function patchSpace(spaceId, body, options) {
	return invokeFetch("spaces", {
		method: "patch",
		pathTemplate: "/api/v1/spaces/{spaceId}",
		pathVariables: { spaceId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Updates a space. To update specific properties, use `PATCH /spaces/{spaceId}`.
*
* @param spaceId The ID of the space to update.
* @param body an object with the body content
* @throws UpdateSpaceHttpError
*/
async function updateSpace(spaceId, body, options) {
	return invokeFetch("spaces", {
		method: "put",
		pathTemplate: "/api/v1/spaces/{spaceId}",
		pathVariables: { spaceId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the assignments of the space matching the query. Each assignment represents one user or group and their corresponding roles in the space. Assignments are not shown for the owner of a space, who receive all `assignableRoles` by default.
*
* @param spaceId The ID of the space of the assignment.
* @param query an object with query parameters
* @throws GetSpaceAssignmentsHttpError
*/
async function getSpaceAssignments(spaceId, query, options) {
	return invokeFetch("spaces", {
		method: "get",
		pathTemplate: "/api/v1/spaces/{spaceId}/assignments",
		pathVariables: { spaceId },
		query,
		options
	});
}
/**
* Creates an assignment for a user or group (assignee) to a space with the specified roles. Assignments are not required for space owners, who receive all `assignableRoles` by default. Only one assignment can exist per space, per user or group.
*
* @param spaceId The ID of the space of the assignment.
* @param body an object with the body content
* @throws CreateSpaceAssignmentHttpError
*/
async function createSpaceAssignment(spaceId, body, options) {
	return invokeFetch("spaces", {
		method: "post",
		pathTemplate: "/api/v1/spaces/{spaceId}/assignments",
		pathVariables: { spaceId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes an assignment.
*
* @param spaceId The ID of the space of the assignment.
* @param assignmentId The ID of the assignment to delete.
* @throws DeleteSpaceAssignmentHttpError
*/
async function deleteSpaceAssignment(spaceId, assignmentId, options) {
	return invokeFetch("spaces", {
		method: "delete",
		pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
		pathVariables: {
			spaceId,
			assignmentId
		},
		options
	});
}
/**
* Retrieves a single assignment by assignment ID. Use `GET /spaces/{spaceId}/assignments` to list all users and groups assigned to the space and their assignment ID.
*
* @param spaceId The ID of the space of the assignment.
* @param assignmentId The ID of the assignment to retrieve.
* @throws GetSpaceAssignmentHttpError
*/
async function getSpaceAssignment(spaceId, assignmentId, options) {
	return invokeFetch("spaces", {
		method: "get",
		pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
		pathVariables: {
			spaceId,
			assignmentId
		},
		options
	});
}
/**
* Updates a single assignment by assignment ID. Use `GET /spaces/{spaceId}/assignments` to list all users and groups assigned to the space and their assignment ID. The complete list of roles must be provided.
*
* @param spaceId The ID of the space of the assignment.
* @param assignmentId The ID of the assignment to update.
* @param body an object with the body content
* @throws UpdateSpaceAssignmentHttpError
*/
async function updateSpaceAssignment(spaceId, assignmentId, body, options) {
	return invokeFetch("spaces", {
		method: "put",
		pathTemplate: "/api/v1/spaces/{spaceId}/assignments/{assignmentId}",
		pathVariables: {
			spaceId,
			assignmentId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the shares of the space matching the query.
*
* @param spaceId The ID of the space containing the shares.
* @param query an object with query parameters
* @throws GetSpaceSharesHttpError
*/
async function getSpaceShares(spaceId, query, options) {
	return invokeFetch("spaces", {
		method: "get",
		pathTemplate: "/api/v1/spaces/{spaceId}/shares",
		pathVariables: { spaceId },
		query,
		options
	});
}
/**
* Create a space share
*
* @param spaceId The ID of the space of the share.
* @param body an object with the body content
* @throws CreateSpaceShareHttpError
*/
async function createSpaceShare(spaceId, body, options) {
	return invokeFetch("spaces", {
		method: "post",
		pathTemplate: "/api/v1/spaces/{spaceId}/shares",
		pathVariables: { spaceId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes a space share.
*
* @param spaceId The ID of the space to which the share belongs.
* @param shareId The ID of the share to delete.
* @throws DeleteSpaceShareHttpError
*/
async function deleteSpaceShare(spaceId, shareId, options) {
	return invokeFetch("spaces", {
		method: "delete",
		pathTemplate: "/api/v1/spaces/{spaceId}/shares/{shareId}",
		pathVariables: {
			spaceId,
			shareId
		},
		options
	});
}
/**
* Retrieves a single space share by ID.
*
* @param spaceId The ID of the space to which the share belongs.
* @param shareId The ID of the share to retrieve.
* @throws GetSpaceShareHttpError
*/
async function getSpaceShare(spaceId, shareId, options) {
	return invokeFetch("spaces", {
		method: "get",
		pathTemplate: "/api/v1/spaces/{spaceId}/shares/{shareId}",
		pathVariables: {
			spaceId,
			shareId
		},
		options
	});
}
/**
* Updates properties of a space share (roles, and disabled state for link shares).
*
* @param spaceId The ID of the space to which the share belongs.
* @param shareId The ID of the share to update.
* @param body an object with the body content
* @throws PatchShareHttpError
*/
async function patchShare(spaceId, shareId, body, options) {
	return invokeFetch("spaces", {
		method: "patch",
		pathTemplate: "/api/v1/spaces/{spaceId}/shares/{shareId}",
		pathVariables: {
			spaceId,
			shareId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for spaces api requests.
*/
function clearCache() {
	return clearApiCache("spaces");
}
/**
* Functions for the spaces api
*/
const spacesExport = {
	getSpaces,
	createSpace,
	getSpaceTypes,
	deleteSpace,
	getSpace,
	patchSpace,
	updateSpace,
	getSpaceAssignments,
	createSpaceAssignment,
	deleteSpaceAssignment,
	getSpaceAssignment,
	updateSpaceAssignment,
	getSpaceShares,
	createSpaceShare,
	deleteSpaceShare,
	getSpaceShare,
	patchShare,
	clearCache
};
var spaces_default = spacesExport;

//#endregion
export { clearCache, createSpace, createSpaceAssignment, createSpaceShare, spaces_default as default, deleteSpace, deleteSpaceAssignment, deleteSpaceShare, getSpace, getSpaceAssignment, getSpaceAssignments, getSpaceShare, getSpaceShares, getSpaceTypes, getSpaces, patchShare, patchSpace, updateSpace, updateSpaceAssignment };