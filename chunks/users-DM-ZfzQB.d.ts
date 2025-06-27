import { ApiCallOptions } from "./auth-types-BlCWK0FP.js";

//#region src/public/rest/users.d.ts

/**
 * An array of group references.
 */
type AssignedGroups = {
  /** An array of role references. Visibility dependant on access level. Must have access to roles to view other users' assigned roles. */
  assignedRoles?: AssignedRoles;
  /** The unique group identitier */
  id: string;
  /** The group name */
  readonly name: string;
  /** The provider type of the group */
  providerType?: "idp" | "custom";
}[];
/**
 * An array of group reference names and provider type.
 * @example
 * [
 *   {
 *     name: "Developers",
 *     providerType: "custom"
 *   }
 * ]
 */
type AssignedGroupsRefNames = {
  /** The name of the group */
  name: string;
  /** The type of provider for the group. */
  providerType: "idp" | "custom";
}[];
/**
 * An array of role references. Visibility dependant on access level. Must have access to roles to view other users' assigned roles.
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
 * An array of scopes assigned to a user
 */
type AssignedScopes = string[];
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
 * Error object.
 */
type ErrorItem = {
  /** Error code */
  code: number;
  /** A human-readable explanation specific to this occurrence of the problem (if applicable) */
  detail?: string;
  /** Summary of the problem */
  title: string;
};
/**
 * The error response object describing the error from the handling of an HTTP request.
 * @example
 * {
 *   errors: [
 *     {
 *       code: "USERS-7",
 *       status: 404,
 *       title: "Not found"
 *     }
 *   ],
 *   traceId: "000000000000000079cf1ebeae103de1"
 * }
 */
type Errors = {
  /** An array of errors related to the operation. */
  errors?: Error[];
  /** A unique identifier for tracing the error. */
  traceId?: string;
};
type ErrorsResponse = {
  errors?: ErrorItem[];
};
/**
 * An advanced query filter to be used for complex user querying in the tenant.
 */
type Filter = {
  /** The advanced filtering to be applied the query. All conditional statements within this query parameter are case insensitive. */
  filter?: string;
};
/**
 * Data list - ResultItem or ErrorItem for each InviteeItem.
 */
type InviteDataResponse = {
  data?: (ResultItem | InviteErrorItem)[];
};
/**
 * Error object.
 */
type InviteErrorItem = ErrorItem & {
  /** Error code - | HTTP Status code | 1001 - Active User | 1002 - Disabled User | 1003 - Default External Dependency Error | */
  code?: string;
  /** Invitee email */
  email: string;
  /** Result status = "error" */
  status: "error";
};
type InviteItem = {
  /** Email address for this invitee. Example - "foo@qlik.com". */
  email: string;
  /** Optional ISO 639-1 2 letter code for invite language. Defaults to 'en' when missing or not found. */
  language?: string;
  /** Optional display name for this invitee. Example - "Elvis Presley". */
  name?: string;
  /** Flag - when true invite message is sent to inactive or invited users. Typically used to force email resend to users who are not yet active. */
  resend?: boolean;
};
type InviteRequestData = {
  /** List of invitees who should receive an invite email. */
  invitees?: InviteItem[];
};
/**
 * A JSON Patch document as defined in http://tools.ietf.org/html/rfc6902.
 */
type JSONPatch = {
  /** The operation to be performed. The fields `set` and `unset` are deprecated. */
  op: "replace" | "set" | "unset" | "add" | "renew" | "remove-value";
  /** A JSON Pointer. The field `roles` is deprecated. */
  path: "/name" | "/roles" | "/assignedRoles" | "/inviteExpiry" | "/preferredZoneinfo" | "/preferredLocale" | "/status" | "/assignedGroups";
  /** The value to be used for this operation. */
  value: string | boolean | unknown[] | RefIDs | RefNames | AssignedGroupsRefNames;
};
/**
 * An array of JSON Patch documents
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/name",
 *     value: "John"
 *   },
 *   {
 *     op: "replace",
 *     path: "/assignedRoles",
 *     value: [
 *       {
 *         "name": "Developer"
 *       }
 *     ]
 *   },
 *   {
 *     op: "replace",
 *     value: "unicorn@corp.example"
 *   },
 *   {
 *     op: "replace",
 *     value: "America/Halifax"
 *   },
 *   {
 *     op: "replace",
 *     path: "/preferredLocale",
 *     value: "en_US_POSIX"
 *   },
 *   {
 *     op: "replace",
 *     path: "/status",
 *     value: "active"
 *   },
 *   {
 *     op: "add"
 *   },
 *   {
 *     op: "remove-value",
 *     path: "/assignedRoles"
 *   }
 * ]
 */
type JSONPatchArray = JSONPatch[];
/**
 * An array of entity reference identifiers (e.g. roles, groups).
 * @example
 * [
 *   {
 *     id: "507f191e810c19729de860ea"
 *   }
 * ]
 */
type RefIDs = {
  /** The unique identitier */
  id: string;
}[];
/**
 * An array of reference names (e.g. roles).
 * @example
 * [
 *   {
 *     name: "TenantAdmin"
 *   }
 * ]
 */
type RefNames = {
  /** The name of the entity */
  name: string;
}[];
/**
 * Invitee result item
 */
type ResultItem = {
  /** Email specified for this invitee */
  email: string;
  /** Result status = {"ok" (new user; email sent) | "exists" (existing user; no email sent)} */
  status: "ok" | "exists";
  /** IdP generated UUID for this invitee */
  subject: string;
  /** UserId for this invitee */
  userId: string;
};
/**
 * A user object.
 */
type User = {
  /** An array of group references. */
  assignedGroups?: AssignedGroups;
  /** An array of role references. Visibility dependant on access level. Must have access to roles to view other users' assigned roles. */
  assignedRoles?: AssignedRoles;
  /** An array of scopes assigned to a user */
  readonly assignedScopes?: AssignedScopes;
  /** @deprecated
   * Deprecated. Use `createdAt` instead. */
  readonly created?: string;
  /** The timestamp for when the user record was created. */
  readonly createdAt?: string;
  /** The email address for the user. */
  email?: string;
  /** The unique user identifier. */
  readonly id: string;
  /** The Unix timestamp indicating when the invite will expire. */
  readonly inviteExpiry?: number;
  /** @deprecated
   * Deprecated. Use `lastUpdatedAt` instead. */
  readonly lastUpdated?: string;
  /** The timestamp for when the user record was last updated. */
  readonly lastUpdatedAt?: string;
  /** Pagination links to the user. */
  readonly links?: {
    /** A link to this user. */
    self: {
      /** URL that defines the resource. */
      href: string;
    };
  };
  /** Represents the end-user's language tag. */
  locale?: string;
  /** The name of the user. */
  name: string;
  /** A static url linking to the avatar of the user. */
  picture?: string;
  /** Represents the end-user's preferred language tag. */
  preferredLocale?: string;
  /** Represents the end-user's preferred time zone. */
  preferredZoneinfo?: string;
  /** @deprecated
   * List of system roles to which the user has been assigned. Only returned when permitted by access control. Deprecated. Use `assignedRoles` instead. */
  roles?: ("TenantAdmin" | "Developer" | "AnalyticsAdmin" | "DataAdmin" | "DataSpaceCreator" | "ManagedSpaceCreator" | "SharedSpaceCreator")[];
  /** The status of the user within the tenant. */
  status?: "active" | "invited" | "disabled" | "deleted" | "provisioned";
  /** The unique user identitier from an identity provider. */
  subject: string;
  /** The tenant that the user belongs too. */
  tenantId: string;
  /** Represents the end-user's time zone. */
  zoneinfo?: string;
};
/**
 * The result object for the user count.
 */
type UserCount = {
  /** The total number of users in the tenant. */
  total: number;
};
/**
 * @example
 * {
 *   assignedRoles: [
 *     {
 *       name: "Developer"
 *     }
 *   ],
 *   email: "john.smith@corp.example",
 *   name: "John Smith",
 *   picture: "https://corp.example/docs/jsmith.png",
 *   status: "invited",
 *   subject: "1234asdasa6789",
 *   tenantId: "q3VRZ4YMixRaLKEPhkZWM-XMIDN7cO8f"
 * }
 */
type UserPostSchema = {
  /** The roles to assign to the user. */
  assignedRoles?: RefIDs | RefNames;
  /** The email address for the user. This is a required field when inviting a user. */
  email?: string;
  /** The name of the user. */
  name?: string;
  /** A static url linking to the avatar of the user. */
  picture?: string;
  /** @deprecated
   * List of system roles to which the user has been assigned. Only returned when permitted by access control. */
  roles?: ("TenantAdmin" | "Developer" | "AnalyticsAdmin" | "DataAdmin" | "DataSpaceCreator" | "ManagedSpaceCreator" | "SharedSpaceCreator")[];
  /** The status of the created user within the tenant. */
  status?: "invited";
  /** The unique user identitier from an identity provider. */
  subject: string;
  /** The tenant that the user will belong too. */
  tenantId?: string;
};
type Users = {
  /** List of users. */
  data?: User[];
  /** Pagination links */
  links?: {
    /** Link information for next page */
    next?: {
      /** URL to the next page of records */
      href: string;
    };
    /** Link information for previous page */
    prev?: {
      /** URL to the previous page of records */
      href: string;
    };
    /** Link information for current page */
    self: {
      /** URL to the current page of records */
      href: string;
    };
  };
  /** Indicates the total number of matching documents. Will only be returned if the query parameter "totalResults" is true. */
  totalResults?: number;
};
/**
 * Returns a list of users using cursor-based pagination.
 *
 * @param query an object with query parameters
 * @throws GetUsersHttpError
 */
declare function getUsers(query: {
  /** @deprecated
   * The email to filter by. Deprecated. Use the new `filter` parameter to provide an advanced query filter. */
  email?: string;
  /** @deprecated
   * Get users with IDs that are lower than the target user ID. Cannot be used in conjunction with startingAfter. Deprecated. Use `prev` instead. */
  endingBefore?: string;
  /** A comma-delimited string of the requested fields per entity. If the 'links' value is omitted, then the entity HATEOAS link will also be omitted. */
  fields?: string;
  /** The advanced filtering to use for the query. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for the syntax. Cannot be combined with any of the fields marked as deprecated. All conditional statements within this query parameter are case insensitive.
   *
   * The following fields support the `eq` operator: `id`, `subject`, `name`, `email`, `status`, `clientId`, `assignedRoles.id` `assignedRoles.name`, `assignedGroups.id`, `assignedGroupsAssignedRoles.name`
   *
   * Additionally, the following fields support the `co` operator: `name`, `email`, `subject`
   *
   * Queries may be rate limited if they differ greatly from these examples:
   *
   * ```
   * (id eq "62716ab404a7bd8626af9bd6" or id eq "62716ac4c7e500e13ff5fa22") and (status eq "active" or status eq "disabled")
   * ```
   *
   * ```
   * name co "query" or email co "query" or subject co "query" or id eq "query" or assignedRoles.name eq "query"
   * ```
   *
   * Any filters for status must be grouped together and applied to the whole query.
   *
   * Valid:
   *
   * ```
   * (name eq "Bob" or name eq "Alice") and (status eq "active" or status eq "disabled")
   * ```
   *
   * Invalid:
   *
   * ```
   * name eq "Bob" or name eq "Alice" and (status eq "active" or status eq "disabled")
   * ``` */
  filter?: string;
  /** The number of user entries to retrieve. */
  limit?: number;
  /** Get users that come after this cursor value when sorted. Cannot be used in conjunction with `prev`. */
  next?: string;
  /** Get users that come before this cursor value when sorted. Cannot be used in conjunction with `next`. */
  prev?: string;
  /** @deprecated
   * The role to filter by. Deprecated. */
  role?: string;
  /** The field to sort by, with +/- prefix indicating sort order */
  sort?: "name" | "+name" | "-name" | "_id" | "+_id" | "-_id" | "id" | "+id" | "-id" | "tenantId" | "+tenantId" | "-tenantId" | "clientId" | "+clientId" | "-clientId" | "status" | "+status" | "-status" | "subject" | "+subject" | "-subject" | "email" | "+email" | "-email" | "inviteExpiry" | "+inviteExpiry" | "-inviteExpiry" | "createdAt" | "+createdAt" | "-createdAt";
  /** @deprecated
   * The user parameter to sort by. Deprecated. Use `sort` instead. */
  sortBy?: "name";
  /** @deprecated
   * The sort order, either ascending or descending. Deprecated. Use `sort` instead. */
  sortOrder?: "asc" | "desc";
  /** @deprecated
   * Get users with IDs that are higher than the target user ID. Cannot be used in conjunction with endingBefore. Deprecated. Use `next` instead. */
  startingAfter?: string;
  /** @deprecated
   * The status to filter by. Supports multiple values delimited by commas. Deprecated. Use the new `filter` parameter to provide an advanced query filter. */
  status?: "active" | "invited" | "disabled" | "deleted" | "provisioned";
  /** @deprecated
   * The subject to filter by. Deprecated. Use the new `filter` parameter to provide an advanced query filter. */
  subject?: string;
  /** @deprecated
   * The tenant ID to filter by. Deprecated. */
  tenantId?: string;
  /** Whether to return a total match count in the result. Defaults to false. It will trigger an extra DB query to count, reducing the efficiency of the endpoint. */
  totalResults?: boolean;
}, options?: ApiCallOptions): Promise<GetUsersHttpResponse>;
type GetUsersHttpResponse = {
  data: Users;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetUsersHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetUsersHttpResponse>;
};
type GetUsersHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 429 | 500;
};
/**
 * Creates an invited user.
 *
 * @param body an object with the body content
 * @throws CreateUserHttpError
 */
declare function createUser(body: UserPostSchema, options?: ApiCallOptions): Promise<CreateUserHttpResponse>;
type CreateUserHttpResponse = {
  data: User;
  headers: Headers;
  status: 201;
};
type CreateUserHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 409 | 413 | 429 | 500;
};
/**
 * Returns the number of users in a given tenant
 *
 * @param query an object with query parameters
 * @throws CountUsersHttpError
 */
declare function countUsers(query: {
  /** @deprecated
   * The tenant ID to filter by. */
  tenantId?: string;
}, options?: ApiCallOptions): Promise<CountUsersHttpResponse>;
type CountUsersHttpResponse = {
  data: UserCount;
  headers: Headers;
  status: 200;
};
type CountUsersHttpError = {
  data: Errors;
  headers: Headers;
  status: 403 | 404 | 429;
};
/**
 * Retrieves a list of users matching the filter using an advanced query string.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws FilterUsersHttpError
 */
declare function filterUsers(query: {
  /** A comma-delimited string of the requested fields per entity. If the 'links' value is omitted, then the entity HATEOAS link will also be omitted. */
  fields?: string;
  /** The number of user entries to retrieve. */
  limit?: number;
  /** Get users with IDs that are higher than the target user ID. Cannot be used in conjunction with prev. */
  next?: string;
  /** Get users with IDs that are lower than the target user ID. Cannot be used in conjunction with next. */
  prev?: string;
  /** The field to sort by, with +/- prefix indicating sort order */
  sort?: "name" | "+name" | "-name";
}, body: Filter, options?: ApiCallOptions): Promise<FilterUsersHttpResponse>;
type FilterUsersHttpResponse = {
  data: Users;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<FilterUsersHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<FilterUsersHttpResponse>;
};
type FilterUsersHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 429 | 500;
};
/**
 * Invite one or more users by email address.
 *
 * @param body an object with the body content
 * @throws InviteUsersHttpError
 */
declare function inviteUsers(body: InviteRequestData, options?: ApiCallOptions): Promise<InviteUsersHttpResponse>;
type InviteUsersHttpResponse = {
  data: InviteDataResponse;
  headers: Headers;
  status: 207;
};
type InviteUsersHttpError = {
  data: ErrorsResponse;
  headers: Headers;
  status: number;
};
/**
 * Redirects to retrieve the user resource associated with the JWT claims.
 *
 * @throws GetMyUserHttpError
 */
declare function getMyUser(options?: ApiCallOptions): Promise<GetMyUserHttpResponse>;
type GetMyUserHttpResponse = {
  data: User;
  headers: Headers;
  status: 200;
};
type GetMyUserHttpError = {
  data: Errors;
  headers: Headers;
  status: 429;
};
/**
 * Deletes the requested user.
 *
 * @param userId The ID of the user to delete.
 * @throws DeleteUserHttpError
 */
declare function deleteUser(userId: string, options?: ApiCallOptions): Promise<DeleteUserHttpResponse>;
type DeleteUserHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteUserHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 403 | 404 | 429;
};
/**
 * Returns the requested user.
 *
 * @param userId The user's unique identifier
 * @param query an object with query parameters
 * @throws GetUserHttpError
 */
declare function getUser(userId: string, query: {
  /** A comma-delimited string of the requested fields per entity. If the 'links' value is omitted, then the entity HATEOAS link will also be omitted. */
  fields?: string;
}, options?: ApiCallOptions): Promise<GetUserHttpResponse>;
type GetUserHttpResponse = {
  data: User & unknown;
  headers: Headers;
  status: 200;
};
type GetUserHttpError = {
  data: Errors;
  headers: Headers;
  status: 403 | 404 | 429 | 500;
};
/**
 * Updates fields for a user resource
 *
 * @param userId The ID of the user to update.
 * @param body an object with the body content
 * @throws PatchUserHttpError
 */
declare function patchUser(userId: string, body: JSONPatchArray, options?: ApiCallOptions): Promise<PatchUserHttpResponse>;
type PatchUserHttpResponse = PatchUser204HttpResponse | PatchUser207HttpResponse;
type PatchUser204HttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchUser207HttpResponse = {
  data: Errors;
  headers: Headers;
  status: 207;
};
type PatchUserHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 403 | 404 | 429;
};
/**
 * Clears the cache for users api requests.
 */
declare function clearCache(): void;
interface UsersAPI {
  /**
   * Returns a list of users using cursor-based pagination.
   *
   * @param query an object with query parameters
   * @throws GetUsersHttpError
   */
  getUsers: typeof getUsers;
  /**
   * Creates an invited user.
   *
   * @param body an object with the body content
   * @throws CreateUserHttpError
   */
  createUser: typeof createUser;
  /**
   * Returns the number of users in a given tenant
   *
   * @param query an object with query parameters
   * @throws CountUsersHttpError
   */
  countUsers: typeof countUsers;
  /**
   * Retrieves a list of users matching the filter using an advanced query string.
   *
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws FilterUsersHttpError
   */
  filterUsers: typeof filterUsers;
  /**
   * Invite one or more users by email address.
   *
   * @param body an object with the body content
   * @throws InviteUsersHttpError
   */
  inviteUsers: typeof inviteUsers;
  /**
   * Redirects to retrieve the user resource associated with the JWT claims.
   *
   * @throws GetMyUserHttpError
   */
  getMyUser: typeof getMyUser;
  /**
   * Deletes the requested user.
   *
   * @param userId The ID of the user to delete.
   * @throws DeleteUserHttpError
   */
  deleteUser: typeof deleteUser;
  /**
   * Returns the requested user.
   *
   * @param userId The user's unique identifier
   * @param query an object with query parameters
   * @throws GetUserHttpError
   */
  getUser: typeof getUser;
  /**
   * Updates fields for a user resource
   *
   * @param userId The ID of the user to update.
   * @param body an object with the body content
   * @throws PatchUserHttpError
   */
  patchUser: typeof patchUser;
  /**
   * Clears the cache for users api requests.
   */
  clearCache: typeof clearCache;
}
/**
 * Functions for the users api
 */
declare const usersExport: UsersAPI;
//#endregion
export { AssignedGroups, AssignedGroupsRefNames, AssignedRoles, AssignedScopes, CountUsersHttpError, CountUsersHttpResponse, CreateUserHttpError, CreateUserHttpResponse, DeleteUserHttpError, DeleteUserHttpResponse, Error, ErrorItem, Errors, ErrorsResponse, Filter, FilterUsersHttpError, FilterUsersHttpResponse, GetMyUserHttpError, GetMyUserHttpResponse, GetUserHttpError, GetUserHttpResponse, GetUsersHttpError, GetUsersHttpResponse, InviteDataResponse, InviteErrorItem, InviteItem, InviteRequestData, InviteUsersHttpError, InviteUsersHttpResponse, JSONPatch, JSONPatchArray, PatchUser204HttpResponse, PatchUser207HttpResponse, PatchUserHttpError, PatchUserHttpResponse, RefIDs, RefNames, ResultItem, User, UserCount, UserPostSchema, Users, UsersAPI, clearCache, countUsers, createUser, deleteUser, filterUsers, getMyUser, getUser, getUsers, inviteUsers, patchUser, usersExport };