import { A as ApiCallOptions } from './global.types-hIvp-WdX.js';
import './auth-types-nnUcWhuU.js';

type ActionName = "create" | "read" | "update" | "delete" | "publish";
type Assignment = {
    /** The userId or groupId based on the type. */
    assigneeId: string;
    /** The date and time when the space was created. */
    readonly createdAt?: string;
    /** The ID of the user who created the assignment. */
    readonly createdBy?: string;
    readonly id: string;
    readonly links: {
        self: Link;
        space?: Link;
    };
    /** The roles assigned to a user or group. Must not be empty. */
    roles: RoleType[];
    /** The unique identifier for the space. */
    readonly spaceId: string;
    /** The unique identifier for the tenant. */
    readonly tenantId: string;
    type: "user" | "group";
    /** The date and time when the space was updated. */
    readonly updatedAt?: string;
    /** The ID of the user who updated the assignment. */
    readonly updatedBy?: string;
};
type AssignmentCreate = {
    /** The userId or groupId based on the type. */
    assigneeId: string;
    /** The roles assigned to the assigneeId. */
    roles: RoleType[];
    /** The type of assignment such as user or group */
    type: "user" | "group";
};
type AssignmentUpdate = {
    /** The roles assigned to the assigneeId. */
    roles?: RoleType[];
};
type Assignments = {
    data?: Assignment[];
    readonly links?: {
        next?: Link;
        prev?: Link;
        self: Link;
    };
    readonly meta?: {
        /** The total number of assignments matching the current filter. */
        count: number;
    };
};
type Error = {
    /** The error code. */
    code: string;
    /** A human-readable explanation specific to the occurrence of this problem. */
    detail?: string;
    /** Additional properties relating to the error. */
    meta?: {
        /** References to the source of the error. */
        source?: {
            /** The URI query parameter that caused the error. */
            parameter?: string;
            /** A JSON pointer to the property that caused the error. */
            pointer?: string;
        };
    };
    /** Summary of the problem. */
    title: string;
};
type Errors = {
    /** The error code. */
    code?: string;
    /** A human-readable explanation specific to the occurrence of this problem. */
    detail?: string;
    errors?: Error[];
    /** Additional properties relating to the error. */
    meta?: unknown;
    /** References to the source of the error. */
    source?: {
        /** The URI query parameter that caused the error. */
        parameter?: string;
        /** A JSON pointer to the property that caused the error. */
        pointer?: string;
    };
    /** Summary of the problem. */
    title?: string;
    traceId?: string;
};
type Link = {
    /** URL that defines the resource. */
    href: string;
};
type RoleType = "consumer" | "contributor" | "dataconsumer" | "facilitator" | "operator" | "producer" | "publisher" | "basicconsumer" | "codeveloper";
type SharedSpaceRoleType = "facilitator" | "consumer" | "producer" | "dataconsumer" | "codeveloper";
type Space = {
    /** The date and time when the space was created. */
    readonly createdAt?: string;
    /** The ID of the user who created the space. */
    readonly createdBy?: string;
    /** The description of the space. Personal spaces do not have a description. */
    description?: string;
    /** A unique identifier for the space, for example, 62716f4b39b865ece543cd45. */
    readonly id: string;
    readonly links: {
        assignments: Link;
        self: Link;
    };
    /** Information about the space settings. */
    readonly meta?: {
        /** The list of actions allowed by the current user in this space. */
        actions: ActionName[];
        /** The list of roles that could be assigned in this space. */
        assignableRoles: RoleType[];
        /** The list of roles assigned to the current user in this space. */
        roles: RoleType[];
    };
    /** The name of the space. Personal spaces do not have a name. */
    name: string;
    /** The ID for the space owner. */
    readonly ownerId?: string;
    /** The ID for the tenant, for example, xqGQ0k66vSR8f9G7J-vYtHZQkiYrCpct. */
    readonly tenantId: string;
    /** The type of space such as shared, managed, and so on. */
    readonly type?: "shared" | "managed" | "data";
    /** The date and time when the space was updated. */
    readonly updatedAt?: string;
};
type SpaceCreate = {
    /** The description of the space. Personal spaces do not have a description. */
    description?: string;
    /** The name of the space. Personal spaces do not have a name. */
    name: string;
    /** The type of space such as shared, managed, and so on. */
    type: "shared" | "managed" | "data";
};
type SpacePatch = {
    /** The operation to be performed. */
    op: "replace";
    /** Field of space to be patched (updated). */
    path: "/name" | "/ownerId" | "/description";
    /** The value to be used within the operations.
    // - name: The name (string) of space of maxLength 256 of pattern: ^[^\"\*\?\<\>\/\|\\\:]+$
    // - description: The description (string) of the space. Personal spaces do not have a description.
    // - ownerId: The user ID in uid format (string) of the space owner.
    //  */
    value: string;
}[];
type SpaceType = "shared" | "managed" | "data";
type SpaceTypes = {
    readonly data?: SpaceType[];
};
type SpaceUpdate = {
    /** The description of the space. Personal spaces do not have a description. */
    description?: string;
    /** The name of the space. */
    name?: string;
    /** The user ID of the space owner. */
    ownerId?: string;
};
type Spaces = {
    data?: Space[];
    readonly links?: {
        next?: Link;
        prev?: Link;
        self: Link;
    };
    readonly meta?: {
        /** The total number of spaces matching the current filter. */
        count: number;
        /** The meta related to personal space when applicable. */
        readonly personalSpace?: {
            /** The list of actions allowed by the current user in this space. */
            actions: ActionName[];
            /** resource type */
            resourceType: string;
        };
    };
};
/**
 * Retrieves spaces that the current user has access to and match the query.
 * @param query an object with query parameters
 * @throws GetSpacesHttpError
 */
declare const getSpaces: (query: {
    /** Action on space. Supports only "?action=publish". */
    action?: string;
    /** Exact match filtering on space name using SCIM. Case insensitive on attribute name. For example ?filter=name eq "MySpace" and ?filter=NAME eq "MySpace" is both valid. */
    filter?: string;
    /** Maximum number of spaces to return. */
    limit?: number;
    /** Space name to search and filter for. Case-insensitive open search with wildcards both as prefix and suffix. For example, "?name=fin" will get "finance", "Final" and "Griffin". */
    name?: string;
    /** The next page cursor. Next links make use of this. */
    next?: string;
    /** Space ownerId to filter by. For example, "?ownerId=123". */
    ownerId?: string;
    /** The previous page cursor. Previous links make use of this. */
    prev?: string;
    /** Field to sort by. Prefix with +/- to indicate asc/desc. For example, "?sort=+name" to sort ascending on Name. Supported fields are "type", "name" and "createdAt". */
    sort?: string;
    /** Type(s) of space to filter. For example, "?type=managed,shared". */
    type?: string;
}, options?: ApiCallOptions) => Promise<GetSpacesHttpResponse>;
type GetSpacesHttpResponse = {
    data: Spaces;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetSpacesHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetSpacesHttpResponse>;
};
type GetSpacesHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Creates a space.
 * @param body an object with the body content
 * @throws CreateSpaceHttpError
 */
declare const createSpace: (body: SpaceCreate, options?: ApiCallOptions) => Promise<CreateSpaceHttpResponse>;
type CreateSpaceHttpResponse = {
    data: Space;
    headers: Headers;
    status: number;
};
type CreateSpaceHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Gets a list of distinct space types.
 * @throws GetSpaceTypesHttpError
 */
declare const getSpaceTypes: (options?: ApiCallOptions) => Promise<GetSpaceTypesHttpResponse>;
type GetSpaceTypesHttpResponse = {
    data: SpaceTypes;
    headers: Headers;
    status: number;
};
type GetSpaceTypesHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Deletes a space.
 * @param spaceId The ID of the space to delete.
 * @throws DeleteSpaceHttpError
 */
declare const deleteSpace: (spaceId: string, options?: ApiCallOptions) => Promise<DeleteSpaceHttpResponse>;
type DeleteSpaceHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteSpaceHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Retrieves a single space by ID.
 * @param spaceId The ID of the space to retrieve.
 * @throws GetSpaceHttpError
 */
declare const getSpace: (spaceId: string, options?: ApiCallOptions) => Promise<GetSpaceHttpResponse>;
type GetSpaceHttpResponse = {
    data: Space;
    headers: Headers;
    status: number;
};
type GetSpaceHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Patches (updates) a space (partially).
 * @param spaceId The ID of the space to update.
 * @param body an object with the body content
 * @throws PatchSpaceHttpError
 */
declare const patchSpace: (spaceId: string, body: SpacePatch, options?: ApiCallOptions) => Promise<PatchSpaceHttpResponse>;
type PatchSpaceHttpResponse = {
    data: Space;
    headers: Headers;
    status: number;
};
type PatchSpaceHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Updates a space.
 * @param spaceId The ID of the space to update.
 * @param body an object with the body content
 * @throws UpdateSpaceHttpError
 */
declare const updateSpace: (spaceId: string, body: SpaceUpdate, options?: ApiCallOptions) => Promise<UpdateSpaceHttpResponse>;
type UpdateSpaceHttpResponse = {
    data: Space;
    headers: Headers;
    status: number;
};
type UpdateSpaceHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Retrieves the assignments of the space matching the query.
 * @param spaceId The ID of the space of the assignment.
 * @param query an object with query parameters
 * @throws GetSpaceAssignmentsHttpError
 */
declare const getSpaceAssignments: (spaceId: string, query: {
    /** Maximum number of assignments to return. */
    limit?: number;
    /** The next page cursor. Next links make use of this. */
    next?: string;
    /** The previous page cursor. Previous links make use of this. */
    prev?: string;
}, options?: ApiCallOptions) => Promise<GetSpaceAssignmentsHttpResponse>;
type GetSpaceAssignmentsHttpResponse = {
    data: Assignments;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetSpaceAssignmentsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetSpaceAssignmentsHttpResponse>;
};
type GetSpaceAssignmentsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Creates an assignment.
 * @param spaceId The ID of the space of the assignment.
 * @param body an object with the body content
 * @throws CreateSpaceAssignmentHttpError
 */
declare const createSpaceAssignment: (spaceId: string, body: AssignmentCreate, options?: ApiCallOptions) => Promise<CreateSpaceAssignmentHttpResponse>;
type CreateSpaceAssignmentHttpResponse = {
    data: Assignment;
    headers: Headers;
    status: number;
};
type CreateSpaceAssignment401HttpError = {
    data: Errors;
    headers: Headers;
    status: 401;
};
type CreateSpaceAssignment403HttpError = {
    data: Errors;
    headers: Headers;
    status: 403;
};
type CreateSpaceAssignment404HttpError = {
    data: Errors;
    headers: Headers;
    status: 404;
};
type CreateSpaceAssignment409HttpError = {
    data: Space;
    headers: Headers;
    status: 409;
};
type CreateSpaceAssignment500HttpError = {
    data: Errors;
    headers: Headers;
    status: 500;
};
type CreateSpaceAssignmentHttpError = CreateSpaceAssignment401HttpError | CreateSpaceAssignment403HttpError | CreateSpaceAssignment404HttpError | CreateSpaceAssignment409HttpError | CreateSpaceAssignment500HttpError;
/**
 * Deletes an assignment.
 * @param spaceId The ID of the space of the assignment.
 * @param assignmentId The ID of the assignment to delete.
 * @throws DeleteSpaceAssignmentHttpError
 */
declare const deleteSpaceAssignment: (spaceId: string, assignmentId: string, options?: ApiCallOptions) => Promise<DeleteSpaceAssignmentHttpResponse>;
type DeleteSpaceAssignmentHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteSpaceAssignmentHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Retrieves a single assignment by ID.
 * @param spaceId The ID of the space of the assignment.
 * @param assignmentId The ID of the assignment to retrieve.
 * @throws GetSpaceAssignmentHttpError
 */
declare const getSpaceAssignment: (spaceId: string, assignmentId: string, options?: ApiCallOptions) => Promise<GetSpaceAssignmentHttpResponse>;
type GetSpaceAssignmentHttpResponse = {
    data: Assignment;
    headers: Headers;
    status: number;
};
type GetSpaceAssignmentHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Updates a single assignment by ID. The complete list of roles must be provided.
 * @param spaceId The ID of the space of the assignment.
 * @param assignmentId The ID of the assignment to update.
 * @param body an object with the body content
 * @throws UpdateSpaceAssignmentHttpError
 */
declare const updateSpaceAssignment: (spaceId: string, assignmentId: string, body: AssignmentUpdate, options?: ApiCallOptions) => Promise<UpdateSpaceAssignmentHttpResponse>;
type UpdateSpaceAssignmentHttpResponse = {
    data: Assignment;
    headers: Headers;
    status: number;
};
type UpdateSpaceAssignmentHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for spaces api requests.
 */
declare function clearCache(): void;
interface SpacesAPI {
    /**
     * Retrieves spaces that the current user has access to and match the query.
     * @param query an object with query parameters
     * @throws GetSpacesHttpError
     */
    getSpaces: typeof getSpaces;
    /**
     * Creates a space.
     * @param body an object with the body content
     * @throws CreateSpaceHttpError
     */
    createSpace: typeof createSpace;
    /**
     * Gets a list of distinct space types.
     * @throws GetSpaceTypesHttpError
     */
    getSpaceTypes: typeof getSpaceTypes;
    /**
     * Deletes a space.
     * @param spaceId The ID of the space to delete.
     * @throws DeleteSpaceHttpError
     */
    deleteSpace: typeof deleteSpace;
    /**
     * Retrieves a single space by ID.
     * @param spaceId The ID of the space to retrieve.
     * @throws GetSpaceHttpError
     */
    getSpace: typeof getSpace;
    /**
     * Patches (updates) a space (partially).
     * @param spaceId The ID of the space to update.
     * @param body an object with the body content
     * @throws PatchSpaceHttpError
     */
    patchSpace: typeof patchSpace;
    /**
     * Updates a space.
     * @param spaceId The ID of the space to update.
     * @param body an object with the body content
     * @throws UpdateSpaceHttpError
     */
    updateSpace: typeof updateSpace;
    /**
     * Retrieves the assignments of the space matching the query.
     * @param spaceId The ID of the space of the assignment.
     * @param query an object with query parameters
     * @throws GetSpaceAssignmentsHttpError
     */
    getSpaceAssignments: typeof getSpaceAssignments;
    /**
     * Creates an assignment.
     * @param spaceId The ID of the space of the assignment.
     * @param body an object with the body content
     * @throws CreateSpaceAssignmentHttpError
     */
    createSpaceAssignment: typeof createSpaceAssignment;
    /**
     * Deletes an assignment.
     * @param spaceId The ID of the space of the assignment.
     * @param assignmentId The ID of the assignment to delete.
     * @throws DeleteSpaceAssignmentHttpError
     */
    deleteSpaceAssignment: typeof deleteSpaceAssignment;
    /**
     * Retrieves a single assignment by ID.
     * @param spaceId The ID of the space of the assignment.
     * @param assignmentId The ID of the assignment to retrieve.
     * @throws GetSpaceAssignmentHttpError
     */
    getSpaceAssignment: typeof getSpaceAssignment;
    /**
     * Updates a single assignment by ID. The complete list of roles must be provided.
     * @param spaceId The ID of the space of the assignment.
     * @param assignmentId The ID of the assignment to update.
     * @param body an object with the body content
     * @throws UpdateSpaceAssignmentHttpError
     */
    updateSpaceAssignment: typeof updateSpaceAssignment;
    /**
     * Clears the cache for spaces api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the spaces api
 */
declare const spacesExport: SpacesAPI;

export { type ActionName, type Assignment, type AssignmentCreate, type AssignmentUpdate, type Assignments, type CreateSpaceAssignment401HttpError, type CreateSpaceAssignment403HttpError, type CreateSpaceAssignment404HttpError, type CreateSpaceAssignment409HttpError, type CreateSpaceAssignment500HttpError, type CreateSpaceAssignmentHttpError, type CreateSpaceAssignmentHttpResponse, type CreateSpaceHttpError, type CreateSpaceHttpResponse, type DeleteSpaceAssignmentHttpError, type DeleteSpaceAssignmentHttpResponse, type DeleteSpaceHttpError, type DeleteSpaceHttpResponse, type Error, type Errors, type GetSpaceAssignmentHttpError, type GetSpaceAssignmentHttpResponse, type GetSpaceAssignmentsHttpError, type GetSpaceAssignmentsHttpResponse, type GetSpaceHttpError, type GetSpaceHttpResponse, type GetSpaceTypesHttpError, type GetSpaceTypesHttpResponse, type GetSpacesHttpError, type GetSpacesHttpResponse, type Link, type PatchSpaceHttpError, type PatchSpaceHttpResponse, type RoleType, type SharedSpaceRoleType, type Space, type SpaceCreate, type SpacePatch, type SpaceType, type SpaceTypes, type SpaceUpdate, type Spaces, type SpacesAPI, type UpdateSpaceAssignmentHttpError, type UpdateSpaceAssignmentHttpResponse, type UpdateSpaceHttpError, type UpdateSpaceHttpResponse, clearCache, createSpace, createSpaceAssignment, spacesExport as default, deleteSpace, deleteSpaceAssignment, getSpace, getSpaceAssignment, getSpaceAssignments, getSpaceTypes, getSpaces, patchSpace, updateSpace, updateSpaceAssignment };
