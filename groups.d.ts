import { A as ApiCallOptions } from './global.types-Xt6XzwlN.js';
import './auth-types-Bqw3vbLs.js';

/**
 * An array of role references.
 */
type AssignedRoles = {
    /** The unique role identitier */
    id: string;
    /** The role level */
    readonly level: "admin" | "user";
    /** The role name */
    readonly name: string;
    /** The type of role */
    readonly type: "default" | "custom";
}[];
/**
 * An array of role reference identifiers.
 */
type AssignedRolesRefIDs = {
    /** The unique role identitier */
    id: string;
}[];
/**
 * An array of role reference names.
 */
type AssignedRolesRefNames = {
    /** The name of the role */
    name: string;
}[];
/**
 * An error object describing the error.
 */
type Error = {
    /** The error code. */
    code: string;
    /** A human-readable explanation specific to this occurrence of the problem. */
    detail?: string;
    /** Additional properties relating to the error. */
    meta?: unknown;
    /** References to the source of the error. */
    source?: {
        /** The URI query parameter that caused the error. */
        parameter?: string;
        /** A JSON Pointer to the property that caused the error. */
        pointer?: string;
    };
    /** The HTTP status code. */
    status?: number;
    /** Summary of the problem. */
    title: string;
};
/**
 * The error response object describing the error from the handling of an HTTP request.
 */
type Errors = {
    /** An array of errors related to the operation. */
    errors?: Error[];
    /** A unique identifier for tracing the error. */
    traceId?: string;
};
/**
 * An advanced query filter to be used for complex user querying in the tenant.
 */
type Filter = {
    /** The advanced filtering to be applied the query. All conditional statements within this query parameter are case insensitive. */
    filter?: string;
};
/**
 * represents a Group document
 */
type Group = {
    assignedRoles?: {
        id: string;
        readonly level: "admin" | "user";
        readonly name: string;
        readonly type: "default";
    }[];
    /** The timestamp for when the group record was created. */
    createdAt: string;
    /** The unique identifier for the group */
    readonly id: string;
    /** The timestamp for when the group record was last updated. */
    lastUpdatedAt: string;
    /** Contains Links for current document */
    links: {
        self: {
            /** Link to the current group document */
            href: string;
        };
    };
    /** The name of the group. */
    name: string;
    /** The state of the group. */
    status: "active" | "disabled";
    /** The tenant identifier associated with the given group */
    tenantId: string;
};
/**
 * A JSON Patch document.
 */
type GroupPatch = {
    /** The operation to be performed. Currently "replace" is the only supported operation. */
    op: "replace";
    /** Attribute name of a field of the Groups entity. */
    path: "assignedRoles";
    /** The roles to assign to the group (limit of 100 roles per group). */
    value: AssignedRolesRefIDs | AssignedRolesRefNames;
};
/**
 * An array of JSON Patches for a group.
 */
type GroupPatchSchema = GroupPatch[];
type GroupPostSchema = {
    /** The roles to assign to the group (limit of 100 roles per group). */
    assignedRoles?: AssignedRolesRefIDs | AssignedRolesRefNames;
    /** The name of the group (maximum length of 256 characters). */
    name: string;
    /** The status of the created group within the tenant. Defaults to active if empty. */
    status?: "active";
};
/**
 * represents a GroupSetting document
 */
type GroupSettings = {
    /** Determines if groups should be created on login. */
    autoCreateGroups: boolean;
    /** Contains Links for current document */
    links: {
        self: {
            /** Link to the current group settings document */
            href: string;
        };
    };
    /** Determines if groups should be created on login. */
    syncIdpGroups: boolean;
    systemGroups?: {
        "000000000000000000000001"?: {
            /** An array of role references. */
            assignedRoles?: AssignedRoles;
            /** The timestamp for when the Everyone group was created. */
            createdAt?: string;
            /** For Everyone, this is always `true` and can't be patched. */
            enabled?: boolean;
            /** The ID of the Everyone group. This value will not change and is immutable. */
            id?: "000000000000000000000001";
            /** The timestamp for when the Everyone group was last updated. */
            lastUpdatedAt?: string;
            /** The name of the Everyone group. This value will not change and is immutable. */
            name?: "com.qlik.Everyone";
        };
    };
    /** The unique tenant identifier. */
    tenantId: string;
};
/**
 * A result object when listing groups.
 */
type Groups = {
    /** An array of groups. */
    data?: Group[];
    links?: {
        next?: {
            /** Link to the next page of items */
            href: string;
        };
        prev?: {
            /** Link to the previous page of items */
            href: string;
        };
        self: {
            /** Link to the current page of items */
            href: string;
        };
    };
    /** Indicates the total number of matching documents. Will only be returned if the query parameter "totalResults" is true. */
    totalResults?: number;
};
/**
 * A JSON Patch document as defined in http://tools.ietf.org/html/rfc6902.
 */
type SettingsPatch = {
    /** The operation to be performed. */
    op: "replace";
    /** A JSON Pointer. */
    path: "/autoCreateGroups" | "/syncIdpGroups" | "/systemGroups/{id}/assignedRoles";
    /** The value to be used for this operation. */
    value: boolean | AssignedRolesRefIDs | AssignedRolesRefNames;
};
/**
 * An array of JSON Patches for the groups settings.
 */
type SettingsPatchSchema = SettingsPatch[];
/**
 * Returns a list of groups with cursor-based pagination.
 *
 * @param query an object with query parameters
 * @throws GetGroupsHttpError
 */
declare const getGroups: (query: {
    /** The advanced filtering to use for the query. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for the syntax. Cannot be combined with any of the fields marked as deprecated. All conditional statements within this query parameter are case insensitive. */
    filter?: string;
    /** The number of groups to retrieve. */
    limit?: number;
    /** The next page cursor. */
    next?: string;
    /** The previous page cursor. */
    prev?: string;
    /** Optional resource field name to sort on, eg. name. Can be prefixed with +/- to determine order, defaults to (+) ascending. */
    sort?: string;
    /** Return system groups (e.g. Everyone) instead of regular groups. Cannot be combined with any other query parameters. */
    systemGroups?: boolean;
    /** Whether to return a total match count in the result. Defaults to false. */
    totalResults?: boolean;
}, options?: ApiCallOptions) => Promise<GetGroupsHttpResponse>;
type GetGroupsHttpResponse = {
    data: Groups;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetGroupsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetGroupsHttpResponse>;
};
type GetGroupsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Creates a group. The maximum number of groups a tenant can have is 10,000.
 *
 * @param body an object with the body content
 * @throws CreateGroupHttpError
 */
declare const createGroup: (body: GroupPostSchema, options?: ApiCallOptions) => Promise<CreateGroupHttpResponse>;
type CreateGroupHttpResponse = {
    data: Group;
    headers: Headers;
    status: number;
};
type CreateGroupHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Retrieves a list of groups matching the filter using advanced query string.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws FilterGroupsHttpError
 */
declare const filterGroups: (query: {
    /** The number of user entries to retrieve. */
    limit?: number;
    /** Get users with IDs that are higher than the target user ID. Cannot be used in conjunction with prev. */
    next?: string;
    /** Get users with IDs that are lower than the target user ID. Cannot be used in conjunction with next. */
    prev?: string;
    /** The field to sort by, with +/- prefix indicating sort order */
    sort?: "name" | "+name" | "-name";
}, body: Filter, options?: ApiCallOptions) => Promise<FilterGroupsHttpResponse>;
type FilterGroupsHttpResponse = {
    data: Groups;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<FilterGroupsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<FilterGroupsHttpResponse>;
};
type FilterGroupsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Returns the active tenant's group settings.
 *
 * @throws GetGroupsSettingsHttpError
 */
declare const getGroupsSettings: (options?: ApiCallOptions) => Promise<GetGroupsSettingsHttpResponse>;
type GetGroupsSettingsHttpResponse = {
    data: GroupSettings;
    headers: Headers;
    status: number;
};
type GetGroupsSettingsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Update group settings
 *
 * @param body an object with the body content
 * @throws PatchGroupsSettingsHttpError
 */
declare const patchGroupsSettings: (body: SettingsPatchSchema, options?: ApiCallOptions) => Promise<PatchGroupsSettingsHttpResponse>;
type PatchGroupsSettingsHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchGroupsSettingsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Delete group by id
 *
 * @param groupId The ID of the group to delete.
 * @throws DeleteGroupHttpError
 */
declare const deleteGroup: (groupId: string, options?: ApiCallOptions) => Promise<DeleteGroupHttpResponse>;
type DeleteGroupHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteGroupHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Returns the requested group.
 *
 * @param groupId The group's unique identifier
 * @throws GetGroupHttpError
 */
declare const getGroup: (groupId: string, options?: ApiCallOptions) => Promise<GetGroupHttpResponse>;
type GetGroupHttpResponse = {
    data: Group;
    headers: Headers;
    status: number;
};
type GetGroupHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Update group by id
 *
 * @param groupId The ID of the group to update.
 * @param body an object with the body content
 * @throws PatchGroupHttpError
 */
declare const patchGroup: (groupId: string, body: GroupPatchSchema, options?: ApiCallOptions) => Promise<PatchGroupHttpResponse>;
type PatchGroupHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchGroupHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for groups api requests.
 */
declare function clearCache(): void;
interface GroupsAPI {
    /**
     * Returns a list of groups with cursor-based pagination.
     *
     * @param query an object with query parameters
     * @throws GetGroupsHttpError
     */
    getGroups: typeof getGroups;
    /**
     * Creates a group. The maximum number of groups a tenant can have is 10,000.
     *
     * @param body an object with the body content
     * @throws CreateGroupHttpError
     */
    createGroup: typeof createGroup;
    /**
     * Retrieves a list of groups matching the filter using advanced query string.
     *
     * @param query an object with query parameters
     * @param body an object with the body content
     * @throws FilterGroupsHttpError
     */
    filterGroups: typeof filterGroups;
    /**
     * Returns the active tenant's group settings.
     *
     * @throws GetGroupsSettingsHttpError
     */
    getGroupsSettings: typeof getGroupsSettings;
    /**
     * Update group settings
     *
     * @param body an object with the body content
     * @throws PatchGroupsSettingsHttpError
     */
    patchGroupsSettings: typeof patchGroupsSettings;
    /**
     * Delete group by id
     *
     * @param groupId The ID of the group to delete.
     * @throws DeleteGroupHttpError
     */
    deleteGroup: typeof deleteGroup;
    /**
     * Returns the requested group.
     *
     * @param groupId The group's unique identifier
     * @throws GetGroupHttpError
     */
    getGroup: typeof getGroup;
    /**
     * Update group by id
     *
     * @param groupId The ID of the group to update.
     * @param body an object with the body content
     * @throws PatchGroupHttpError
     */
    patchGroup: typeof patchGroup;
    /**
     * Clears the cache for groups api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the groups api
 */
declare const groupsExport: GroupsAPI;

export { type AssignedRoles, type AssignedRolesRefIDs, type AssignedRolesRefNames, type CreateGroupHttpError, type CreateGroupHttpResponse, type DeleteGroupHttpError, type DeleteGroupHttpResponse, type Error, type Errors, type Filter, type FilterGroupsHttpError, type FilterGroupsHttpResponse, type GetGroupHttpError, type GetGroupHttpResponse, type GetGroupsHttpError, type GetGroupsHttpResponse, type GetGroupsSettingsHttpError, type GetGroupsSettingsHttpResponse, type Group, type GroupPatch, type GroupPatchSchema, type GroupPostSchema, type GroupSettings, type Groups, type GroupsAPI, type PatchGroupHttpError, type PatchGroupHttpResponse, type PatchGroupsSettingsHttpError, type PatchGroupsSettingsHttpResponse, type SettingsPatch, type SettingsPatchSchema, clearCache, createGroup, groupsExport as default, deleteGroup, filterGroups, getGroup, getGroups, getGroupsSettings, patchGroup, patchGroupsSettings };
