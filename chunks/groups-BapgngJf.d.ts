import { ApiCallOptions } from "./auth-types-B1c_1Nca.js";

//#region src/public/rest/groups.d.ts

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
 * An array of role reference identifiers.
 * @example
 * [
 *   {
 *     id: "507f191e810c19729de860ea"
 *   }
 * ]
 */
type AssignedRolesRefIDs = {
  /** The unique role identitier */
  id: string;
}[];
/**
 * An array of role reference names.
 * @example
 * [
 *   {
 *     name: "TenantAdmin"
 *   }
 * ]
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
 * @example
 * {
 *   errors: [
 *     {
 *       code: "GROUPS-7",
 *       status: 404,
 *       title: "Not found"
 *     }
 *   ],
 *   traceId: "00000000000000000137b213cf12a77b"
 * }
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
  /** An array of role references. Visibility dependant on access level. Must have access to roles to view other users' assigned roles. */
  assignedRoles?: AssignedRoles;
  /** The timestamp for when the group record was created. */
  createdAt: string;
  /** Id of user that created role. */
  readonly createdBy?: string;
  /** A description of a custom group. */
  description?: string;
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
  /** The type of provider for the group. */
  providerType?: "idp" | "custom";
  /** The state of the group. */
  status: "active" | "disabled";
  /** The tenant identifier associated with the given group */
  tenantId: string;
  /** Id of user that last updated this role. */
  readonly updatedBy?: string;
};
/**
 * A JSON Patch document.
 */
type GroupPatch = {
  /** The operation to be performed. Currently "replace" is the only supported operation. */
  op: "replace";
  /** Attribute name of a field of the Groups entity. "Name" and "description" is only available for custom groups. */
  path: "assignedRoles" | "name" | "description";
  /** The roles to assign to the group (limit of 100 roles per group) or the new custom group name or description. */
  value: AssignedRolesRefIDs | AssignedRolesRefNames | string;
};
/**
 * An array of JSON Patches for a group.
 * @example
 * [
 *   {
 *     op: "replace",
 *     value: [
 *       {
 *         name: "TenantAdmin"
 *       },
 *       {
 *         name: "AnalyticsAdmin"
 *       }
 *     ]
 *   }
 * ]
 */
type GroupPatchSchema = GroupPatch[];
/**
 * @example
 * {
 *   assignedRoles: [
 *     {
 *       name: "Developer"
 *     }
 *   ],
 *   name: "Development",
 *   status: "active"
 * }
 */
type GroupPostSchema = {
  /** The roles to assign to the group (limit of 100 roles per group). */
  assignedRoles?: AssignedRolesRefIDs | AssignedRolesRefNames;
  /** The description of the group. */
  description?: string;
  /** The name of the group (maximum length of 256 characters). */
  name: string;
  /** The type of group provider. Must be "idp" or "custom". Defaults to "idp" if not provided. */
  providerType?: "idp" | "custom";
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
  /** @deprecated
   * Determines if groups should be created on login. */
  syncIdpGroups?: boolean;
  systemGroups?: {
    "000000000000000000000001"?: {
      /** An array of role references. Visibility dependant on access level. Must have access to roles to view other users' assigned roles. */
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
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/syncIdpGroups",
 *     value: true
 *   },
 *   {
 *     op: "replace",
 *     path: "/autoCreateGroups",
 *     value: true
 *   },
 *   {
 *     op: "replace",
 *     value: [
 *       {
 *         name: "Steward"
 *       }
 *     ]
 *   }
 * ]
 */
type SettingsPatchSchema = SettingsPatch[];
/**
 * Returns a list of groups with cursor-based pagination.
 *
 * @param query an object with query parameters
 * @throws GetGroupsHttpError
 */
declare function getGroups(query: {
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
}, options?: ApiCallOptions): Promise<GetGroupsHttpResponse>;
type GetGroupsHttpResponse = {
  data: Groups;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetGroupsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetGroupsHttpResponse>;
};
type GetGroupsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 429 | 500;
};
/**
 * Creates a new group. The maximum number of groups a tenant can have is 10,000. Group names are case-sensitive, and must be unique.
 *
 * @param body an object with the body content
 * @throws CreateGroupHttpError
 */
declare function createGroup(body: GroupPostSchema, options?: ApiCallOptions): Promise<CreateGroupHttpResponse>;
type CreateGroupHttpResponse = {
  data: Group;
  headers: Headers;
  status: 201;
};
type CreateGroupHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 409 | 413 | 429 | 500;
};
/**
 * Retrieves a list of groups matching the filter using advanced query string.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws FilterGroupsHttpError
 */
declare function filterGroups(query: {
  /** The number of user entries to retrieve. */
  limit?: number;
  /** Get users with IDs that are higher than the target user ID. Cannot be used in conjunction with prev. */
  next?: string;
  /** Get users with IDs that are lower than the target user ID. Cannot be used in conjunction with next. */
  prev?: string;
  /** The field to sort by, with +/- prefix indicating sort order */
  sort?: "name" | "+name" | "-name";
}, body: Filter, options?: ApiCallOptions): Promise<FilterGroupsHttpResponse>;
type FilterGroupsHttpResponse = {
  data: Groups;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<FilterGroupsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<FilterGroupsHttpResponse>;
};
type FilterGroupsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 429 | 500;
};
/**
 * Returns the tenant's group settings, such as whether automatic group creation and IdP group synchronization are enabled or disabled, and roles assigned to system groups.
 *
 * @throws GetGroupsSettingsHttpError
 */
declare function getGroupsSettings(options?: ApiCallOptions): Promise<GetGroupsSettingsHttpResponse>;
type GetGroupsSettingsHttpResponse = {
  data: GroupSettings;
  headers: Headers;
  status: 200;
};
type GetGroupsSettingsHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 429 | 500;
};
/**
 * Updates the tenant's group settings, such as whether automatic group creation and IdP group synchronization are enabled or disabled, and roles assigned to system groups.
 *
 * @param body an object with the body content
 * @throws PatchGroupsSettingsHttpError
 */
declare function patchGroupsSettings(body: SettingsPatchSchema, options?: ApiCallOptions): Promise<PatchGroupsSettingsHttpResponse>;
type PatchGroupsSettingsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchGroupsSettingsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 429 | 500;
};
/**
 * Deletes the requested group.
 *
 * @param groupId The ID of the group to delete.
 * @throws DeleteGroupHttpError
 */
declare function deleteGroup(groupId: string, options?: ApiCallOptions): Promise<DeleteGroupHttpResponse>;
type DeleteGroupHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteGroupHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 404 | 429;
};
/**
 * Returns the requested group.
 *
 * @param groupId The group's unique identifier
 * @throws GetGroupHttpError
 */
declare function getGroup(groupId: string, options?: ApiCallOptions): Promise<GetGroupHttpResponse>;
type GetGroupHttpResponse = {
  data: Group;
  headers: Headers;
  status: 200;
};
type GetGroupHttpError = {
  data: Errors;
  headers: Headers;
  status: 403 | 404 | 429 | 500;
};
/**
 * Updates the requested group.
 *
 * @param groupId The ID of the group to update.
 * @param body an object with the body content
 * @throws PatchGroupHttpError
 */
declare function patchGroup(groupId: string, body: GroupPatchSchema, options?: ApiCallOptions): Promise<PatchGroupHttpResponse>;
type PatchGroupHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchGroupHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429 | 500;
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
   * Creates a new group. The maximum number of groups a tenant can have is 10,000. Group names are case-sensitive, and must be unique.
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
   * Returns the tenant's group settings, such as whether automatic group creation and IdP group synchronization are enabled or disabled, and roles assigned to system groups.
   *
   * @throws GetGroupsSettingsHttpError
   */
  getGroupsSettings: typeof getGroupsSettings;
  /**
   * Updates the tenant's group settings, such as whether automatic group creation and IdP group synchronization are enabled or disabled, and roles assigned to system groups.
   *
   * @param body an object with the body content
   * @throws PatchGroupsSettingsHttpError
   */
  patchGroupsSettings: typeof patchGroupsSettings;
  /**
   * Deletes the requested group.
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
   * Updates the requested group.
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
//#endregion
export { AssignedRoles, AssignedRolesRefIDs, AssignedRolesRefNames, CreateGroupHttpError, CreateGroupHttpResponse, DeleteGroupHttpError, DeleteGroupHttpResponse, Error, Errors, Filter, FilterGroupsHttpError, FilterGroupsHttpResponse, GetGroupHttpError, GetGroupHttpResponse, GetGroupsHttpError, GetGroupsHttpResponse, GetGroupsSettingsHttpError, GetGroupsSettingsHttpResponse, Group, GroupPatch, GroupPatchSchema, GroupPostSchema, GroupSettings, Groups, GroupsAPI, PatchGroupHttpError, PatchGroupHttpResponse, PatchGroupsSettingsHttpError, PatchGroupsSettingsHttpResponse, SettingsPatch, SettingsPatchSchema, clearCache, createGroup, deleteGroup, filterGroups, getGroup, getGroups, getGroupsSettings, groupsExport, patchGroup, patchGroupsSettings };