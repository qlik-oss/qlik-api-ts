import { A as ApiCallOptions } from './global.types-qsBNouXJ.js';
import './auth-types-PkN9CAF_.js';

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
 * Contains pagination links
 */
type Links = {
    /** Link to the next page of items */
    next?: {
        href: string;
    };
    /** Link to the previous page of items */
    prev?: {
        href: string;
    };
    /** Link to the current page of items */
    self: {
        href: string;
    };
};
type ListRolesResult = {
    /** An array of roles. */
    data: Role[];
    /** Contains pagination links */
    links: Links;
    /** Indicates the total number of matching documents. Will only be returned if the query parameter "totalResults" is true. */
    totalResults?: number;
};
type Role = {
    /** Selection of scopes added to this Role */
    assignedScopes?: string[];
    /** Indicate if role can be deleted */
    readonly canDelete?: boolean;
    /** Indicate if role can be edited by tenant (Shown as Profile in MC) */
    readonly canEdit?: boolean;
    /** The timestamp for when the role was created. */
    createdAt: string;
    /** Id of user that created role */
    readonly createdBy?: string;
    /** Descriptive text for the role. */
    description: string;
    /** @deprecated
     * DEPRECATED. Use userEntitlementType instead for impact of roles on user entitlements with a capacity-based subscription. */
    readonly fullUser?: boolean;
    /** The unique identifier for the role. */
    readonly id: string;
    /** The timestamp for when the role was last updated. */
    lastUpdatedAt: string;
    /** The level of access associated to the role. */
    level?: "admin" | "user";
    /** Contains links for the role. */
    links: {
        self: {
            /** Link to the role. */
            href: string;
        };
    };
    /** The name of the role. */
    name: string;
    /** An array of permissions associated with the role. */
    permissions?: string[];
    /** The tenant unique identifier associated with the given Role. */
    tenantId: string;
    /** The type of role. */
    type: "default" | "custom";
    /** Id of user that last updated this role */
    readonly updatedBy?: string;
    /** Indicate whether this role will trigger promotion of a user from a basic to a full user on tenants with a capacity-based subscription. Does not apply to tenants with a user-based subscription. Returns fullUser if it will trigger promotion. */
    readonly userEntitlementType?: string;
};
/**
 * Returns a list of roles using cursor-based pagination.
 *
 * @param query an object with query parameters
 * @throws GetRolesHttpError
 */
declare const getRoles: (query: {
    /** The advanced filtering to use for the query. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for the syntax. All conditional statements within this query parameter are case insensitive. */
    filter?: string;
    /** The number of roles to retrieve. */
    limit?: number;
    /** The next page cursor. */
    next?: string;
    /** The previous page cursor. */
    prev?: string;
    /** Optional resource field name to sort on, eg. name. Can be prefixed with +/- to determine order, defaults to (+) ascending. */
    sort?: string;
    /** Determines wether to return a count of the total records matched in the query. Defaults to false. */
    totalResults?: boolean;
}, options?: ApiCallOptions) => Promise<GetRolesHttpResponse>;
type GetRolesHttpResponse = {
    data: ListRolesResult;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetRolesHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetRolesHttpResponse>;
};
type GetRolesHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Returns the requested role.
 *
 * @param id The role's unique identifier
 * @throws GetRoleHttpError
 */
declare const getRole: (id: string, options?: ApiCallOptions) => Promise<GetRoleHttpResponse>;
type GetRoleHttpResponse = {
    data: Role;
    headers: Headers;
    status: number;
};
type GetRoleHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for roles api requests.
 */
declare function clearCache(): void;
interface RolesAPI {
    /**
     * Returns a list of roles using cursor-based pagination.
     *
     * @param query an object with query parameters
     * @throws GetRolesHttpError
     */
    getRoles: typeof getRoles;
    /**
     * Returns the requested role.
     *
     * @param id The role's unique identifier
     * @throws GetRoleHttpError
     */
    getRole: typeof getRole;
    /**
     * Clears the cache for roles api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the roles api
 */
declare const rolesExport: RolesAPI;

export { type Error, type Errors, type GetRoleHttpError, type GetRoleHttpResponse, type GetRolesHttpError, type GetRolesHttpResponse, type Links, type ListRolesResult, type Role, type RolesAPI, clearCache, rolesExport as default, getRole, getRoles };
