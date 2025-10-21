import { y as ApiCallOptions } from "./auth-types-CMYVHKHt.js";

//#region src/public/rest/spaces.d.ts

/**
 * The supported actions for user-created spaces.
 */
type ActionName = "change_owner" | "create" | "read" | "update" | "delete" | "publish" | "link_environment" | "restrict";
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
  /** The type of assignment such as user or group */
  type: AssignmentType;
  /** The date and time when the space was updated. */
  readonly updatedAt?: string;
  /** The ID of the user who updated the assignment. */
  readonly updatedBy?: string;
};
type AssignmentCreate = {
  /** The userId or groupId based on the type. */
  assigneeId: string;
  /** The roles assigned to the assigneeId. For the full list of roles assignable in this space type, call `GET /spaces/{spaceId}` and inspect the `meta.assignableRoles` object. */
  roles: RoleType[];
  /** The type of assignment such as user or group */
  type: AssignmentType;
};
/**
 * The type of assignment such as user or group
 */
type AssignmentType = "user" | "group" | "bot";
type AssignmentUpdate = {
  /** The roles assigned to the assigneeId. For the full list of roles assignable in this space type, call `GET /spaces/{spaceId}` and inspect the `meta.assignableRoles` object. */
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
/**
 * An error object.
 */
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
  /** @deprecated
   * The error code. */
  code?: string;
  /** @deprecated
   * A human-readable explanation specific to the occurrence of this problem. */
  detail?: string;
  errors?: Error[];
  /** @deprecated
   * Additional properties relating to the error. */
  meta?: unknown;
  /** @deprecated
   * References to the source of the error. */
  source?: {
    /** The URI query parameter that caused the error. */
    parameter?: string;
    /** A JSON pointer to the property that caused the error. */
    pointer?: string;
  };
  /** @deprecated
   * Summary of the problem. */
  title?: string;
  traceId?: string;
};
type Link = {
  /** URL that defines the resource. */
  href: string;
};
/**
 * Supported roles by space type:
 * - Shared: codeveloper, consumer, dataconsumer, facilitator, producer
 * - Managed: consumer, contributor, dataconsumer, facilitator, publisher, basicconsumer
 * - Data: consumer, dataconsumer, datapreview, facilitator, operator, producer, publisher
 */
type RoleType = "consumer" | "contributor" | "dataconsumer" | "datapreview" | "facilitator" | "operator" | "producer" | "publisher" | "basicconsumer" | "codeveloper";
type Share = {
  /** The userId or groupId based on the type. */
  assigneeId: string;
  readonly createdAt?: string;
  /** The ID of the user who created the share. */
  readonly createdBy?: string;
  /** If the share is disabled (effective ONLY for link shares). */
  disabled?: boolean;
  readonly id: string;
  readonly links?: {
    self: Link;
    space?: Link;
  };
  /** The ID of the shared resource. */
  resourceId: string;
  /** The name of the shared resource. */
  resourceName?: string;
  /** The type of the shared resource. */
  resourceType: "app";
  /** The roles assigned to the assigneeId. */
  roles?: ShareRoleType[];
  readonly spaceId: string;
  readonly tenantId: string;
  type: ShareType;
  readonly updatedAt?: string;
  /** The ID of the user who updated the share. */
  readonly updatedBy?: string;
};
type ShareCreate = {
  /** The userId or groupId based on the type. */
  assigneeId: string;
  /** The resource id for the shared item. */
  resourceId: string;
  /** The resource type for the shared item. */
  resourceType: string;
  /** The roles assigned to the assigneeId. */
  roles: ShareRoleType[];
  type: ShareType;
};
type SharePatch = {
  /** The operation to be performed. */
  op: "replace";
  /** Field of Share to be patched (updated). */
  path: "/roles" | "/disabled";
  /** The value to be used within the operations.
   * - roles: The roles assigned to the assigneeId.
   * - disabled: To disable the share (effective ONLY for link shares). */
  value: string;
}[];
/**
 * The roles for the space share. Supported roles by space type:
 * - Shared: consumer
 * - Managed: basicconsumer, consumer, contributor
 */
type ShareRoleType = "consumer" | "contributor" | "basicconsumer";
type ShareType = "user" | "group" | "link";
type Shares = {
  data?: Share[];
  readonly links?: {
    next?: Link;
    prev?: Link;
    self: Link;
  };
  readonly meta?: {
    /** The total number of Shares matching the current filter. */
    count: number;
  };
};
/**
 * A space is a security context simplifying the management of access control by allowing users to control it on the containers instead of on the resources themselves.
 */
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
   * - name: The name (string) of space of maxLength 256 of pattern: ^[^\"\*\?\<\>\/\|\\\:]+$
   * - description: The description (string) of the space. Personal spaces do not have a description.
   * - ownerId: The user ID in uid format (string) of the space owner. */
  value: string;
}[];
/**
 * The name of the type.
 */
type SpaceType = "shared" | "managed" | "data";
/**
 * The distinct types of spaces (shared, managed, and so on).
 */
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
 *
 * @param query an object with query parameters
 * @throws GetSpacesHttpError
 */
declare function getSpaces(query: {
  /** Action on space. Supports only "?action=publish". */
  action?: string;
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
}, options?: ApiCallOptions): Promise<GetSpacesHttpResponse>;
type GetSpacesHttpResponse = {
  data: Spaces;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetSpacesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetSpacesHttpResponse>;
};
type GetSpacesHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 500;
};
/**
 * Creates a space. Spaces names must be unique. Spaces of type `data` should only be used for Qlik Talend Data Integration projects.
 *
 * @param body an object with the body content
 * @throws CreateSpaceHttpError
 */
declare function createSpace(body: SpaceCreate, options?: ApiCallOptions): Promise<CreateSpaceHttpResponse>;
type CreateSpaceHttpResponse = {
  data: Space;
  headers: Headers;
  status: 201;
};
type CreateSpaceHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 409 | 500;
};
/**
 * Gets a list of distinct space types available for use in the tenant.
 *
 * @throws GetSpaceTypesHttpError
 */
declare function getSpaceTypes(options?: ApiCallOptions): Promise<GetSpaceTypesHttpResponse>;
type GetSpaceTypesHttpResponse = {
  data: SpaceTypes;
  headers: Headers;
  status: 200;
};
type GetSpaceTypesHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 500;
};
/**
 * Deletes a space. Ensure that you first delete all resources from the space to avoid orphaning content.
 *
 * @param spaceId The ID of the space to delete.
 * @throws DeleteSpaceHttpError
 */
declare function deleteSpace(spaceId: string, options?: ApiCallOptions): Promise<DeleteSpaceHttpResponse>;
type DeleteSpaceHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteSpaceHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 412 | 500;
};
/**
 * Retrieves a single space by ID.
 *
 * @param spaceId The ID of the space to retrieve.
 * @throws GetSpaceHttpError
 */
declare function getSpace(spaceId: string, options?: ApiCallOptions): Promise<GetSpaceHttpResponse>;
type GetSpaceHttpResponse = {
  data: Space;
  headers: Headers;
  status: 200;
};
type GetSpaceHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 404 | 429 | 500;
};
/**
 * Updates one or more properties of a space. To update all properties at once, use `PUT /spaces/{spaceId}`.
 *
 * @param spaceId The ID of the space to update.
 * @param body an object with the body content
 * @throws PatchSpaceHttpError
 */
declare function patchSpace(spaceId: string, body: SpacePatch, options?: ApiCallOptions): Promise<PatchSpaceHttpResponse>;
type PatchSpaceHttpResponse = {
  data: Space;
  headers: Headers;
  status: 200;
};
type PatchSpaceHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 500;
};
/**
 * Updates a space. To update specific properties, use `PATCH /spaces/{spaceId}`.
 *
 * @param spaceId The ID of the space to update.
 * @param body an object with the body content
 * @throws UpdateSpaceHttpError
 */
declare function updateSpace(spaceId: string, body: SpaceUpdate, options?: ApiCallOptions): Promise<UpdateSpaceHttpResponse>;
type UpdateSpaceHttpResponse = {
  data: Space;
  headers: Headers;
  status: 200;
};
type UpdateSpaceHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 500;
};
/**
 * Retrieves the assignments of the space matching the query. Each assignment represents one user or group and their corresponding roles in the space. Assignments are not shown for the owner of a space, who receive all `assignableRoles` by default.
 *
 * @param spaceId The ID of the space of the assignment.
 * @param query an object with query parameters
 * @throws GetSpaceAssignmentsHttpError
 */
declare function getSpaceAssignments(spaceId: string, query: {
  /** Filters assignment for a specific assigneeid. */
  assigneeId?: string;
  /** Maximum number of assignments to return. */
  limit?: number;
  /** The next page cursor. Next links make use of this. */
  next?: string;
  /** The previous page cursor. Previous links make use of this. */
  prev?: string;
  /** The type of assignment. Supported values are user or group. */
  type?: AssignmentType;
}, options?: ApiCallOptions): Promise<GetSpaceAssignmentsHttpResponse>;
type GetSpaceAssignmentsHttpResponse = {
  data: Assignments;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetSpaceAssignmentsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetSpaceAssignmentsHttpResponse>;
};
type GetSpaceAssignmentsHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 500;
};
/**
 * Creates an assignment for a user or group (assignee) to a space with the specified roles. Assignments are not required for space owners, who receive all `assignableRoles` by default. Only one assignment can exist per space, per user or group.
 *
 * @param spaceId The ID of the space of the assignment.
 * @param body an object with the body content
 * @throws CreateSpaceAssignmentHttpError
 */
declare function createSpaceAssignment(spaceId: string, body: AssignmentCreate, options?: ApiCallOptions): Promise<CreateSpaceAssignmentHttpResponse>;
type CreateSpaceAssignmentHttpResponse = {
  data: Assignment;
  headers: Headers;
  status: 201;
};
type CreateSpaceAssignmentHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 409 | 500;
};
/**
 * Deletes an assignment.
 *
 * @param spaceId The ID of the space of the assignment.
 * @param assignmentId The ID of the assignment to delete.
 * @throws DeleteSpaceAssignmentHttpError
 */
declare function deleteSpaceAssignment(spaceId: string, assignmentId: string, options?: ApiCallOptions): Promise<DeleteSpaceAssignmentHttpResponse>;
type DeleteSpaceAssignmentHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteSpaceAssignmentHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 500;
};
/**
 * Retrieves a single assignment by assignment ID. Use `GET /spaces/{spaceId}/assignments` to list all users and groups assigned to the space and their assignment ID.
 *
 * @param spaceId The ID of the space of the assignment.
 * @param assignmentId The ID of the assignment to retrieve.
 * @throws GetSpaceAssignmentHttpError
 */
declare function getSpaceAssignment(spaceId: string, assignmentId: string, options?: ApiCallOptions): Promise<GetSpaceAssignmentHttpResponse>;
type GetSpaceAssignmentHttpResponse = {
  data: Assignment;
  headers: Headers;
  status: 200;
};
type GetSpaceAssignmentHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 500;
};
/**
 * Updates a single assignment by assignment ID. Use `GET /spaces/{spaceId}/assignments` to list all users and groups assigned to the space and their assignment ID. The complete list of roles must be provided.
 *
 * @param spaceId The ID of the space of the assignment.
 * @param assignmentId The ID of the assignment to update.
 * @param body an object with the body content
 * @throws UpdateSpaceAssignmentHttpError
 */
declare function updateSpaceAssignment(spaceId: string, assignmentId: string, body: AssignmentUpdate, options?: ApiCallOptions): Promise<UpdateSpaceAssignmentHttpResponse>;
type UpdateSpaceAssignmentHttpResponse = {
  data: Assignment;
  headers: Headers;
  status: 200;
};
type UpdateSpaceAssignmentHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 500;
};
/**
 * Retrieves the shares of the space matching the query.
 *
 * @param spaceId The ID of the space containing the shares.
 * @param query an object with query parameters
 * @throws GetSpaceSharesHttpError
 */
declare function getSpaceShares(spaceId: string, query: {
  /** The ID of the group to which the resource is shared. */
  groupId?: string;
  /** Maximum number of shares to return. */
  limit?: number;
  /** The name of the shared resource. */
  name?: string;
  /** The next page cursor. Next links make use of this. */
  next?: string;
  /** The previous page cursor. Previous links make use of this. */
  prev?: string;
  /** The ID of the shared resource. */
  resourceId?: string;
  /** The type of the shared resource. */
  resourceType?: string;
  /** The type of share. `user` shares assign to a specific user, `group` shares assign to a specific group, and `link` shares provide anonymous access to a resource. */
  type?: ShareType;
  /** The ID of the user to which the resource is shared. */
  userId?: string;
}, options?: ApiCallOptions): Promise<GetSpaceSharesHttpResponse>;
type GetSpaceSharesHttpResponse = {
  data: Shares;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetSpaceSharesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetSpaceSharesHttpResponse>;
};
type GetSpaceSharesHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 500;
};
/**
 * Create a space share
 *
 * @param spaceId The ID of the space of the share.
 * @param body an object with the body content
 * @throws CreateSpaceShareHttpError
 */
declare function createSpaceShare(spaceId: string, body: ShareCreate, options?: ApiCallOptions): Promise<CreateSpaceShareHttpResponse>;
type CreateSpaceShareHttpResponse = {
  data: Share;
  headers: Headers;
  status: 201;
};
type CreateSpaceShareHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 409 | 500;
};
/**
 * Deletes a space share.
 *
 * @param spaceId The ID of the space to which the share belongs.
 * @param shareId The ID of the share to delete.
 * @throws DeleteSpaceShareHttpError
 */
declare function deleteSpaceShare(spaceId: string, shareId: string, options?: ApiCallOptions): Promise<DeleteSpaceShareHttpResponse>;
type DeleteSpaceShareHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteSpaceShareHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 500;
};
/**
 * Retrieves a single space share by ID.
 *
 * @param spaceId The ID of the space to which the share belongs.
 * @param shareId The ID of the share to retrieve.
 * @throws GetSpaceShareHttpError
 */
declare function getSpaceShare(spaceId: string, shareId: string, options?: ApiCallOptions): Promise<GetSpaceShareHttpResponse>;
type GetSpaceShareHttpResponse = {
  data: Share;
  headers: Headers;
  status: 200;
};
type GetSpaceShareHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 500;
};
/**
 * Updates properties of a space share (roles, and disabled state for link shares).
 *
 * @param spaceId The ID of the space to which the share belongs.
 * @param shareId The ID of the share to update.
 * @param body an object with the body content
 * @throws PatchShareHttpError
 */
declare function patchShare(spaceId: string, shareId: string, body: SharePatch, options?: ApiCallOptions): Promise<PatchShareHttpResponse>;
type PatchShareHttpResponse = {
  data: Share;
  headers: Headers;
  status: 200;
};
type PatchShareHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 500;
};
/**
 * Clears the cache for spaces api requests.
 */
declare function clearCache(): void;
type SpacesAPI = {
  /**
   * Retrieves spaces that the current user has access to and match the query.
   *
   * @param query an object with query parameters
   * @throws GetSpacesHttpError
   */
  getSpaces: typeof getSpaces;
  /**
   * Creates a space. Spaces names must be unique. Spaces of type `data` should only be used for Qlik Talend Data Integration projects.
   *
   * @param body an object with the body content
   * @throws CreateSpaceHttpError
   */
  createSpace: typeof createSpace;
  /**
   * Gets a list of distinct space types available for use in the tenant.
   *
   * @throws GetSpaceTypesHttpError
   */
  getSpaceTypes: typeof getSpaceTypes;
  /**
   * Deletes a space. Ensure that you first delete all resources from the space to avoid orphaning content.
   *
   * @param spaceId The ID of the space to delete.
   * @throws DeleteSpaceHttpError
   */
  deleteSpace: typeof deleteSpace;
  /**
   * Retrieves a single space by ID.
   *
   * @param spaceId The ID of the space to retrieve.
   * @throws GetSpaceHttpError
   */
  getSpace: typeof getSpace;
  /**
   * Updates one or more properties of a space. To update all properties at once, use `PUT /spaces/{spaceId}`.
   *
   * @param spaceId The ID of the space to update.
   * @param body an object with the body content
   * @throws PatchSpaceHttpError
   */
  patchSpace: typeof patchSpace;
  /**
   * Updates a space. To update specific properties, use `PATCH /spaces/{spaceId}`.
   *
   * @param spaceId The ID of the space to update.
   * @param body an object with the body content
   * @throws UpdateSpaceHttpError
   */
  updateSpace: typeof updateSpace;
  /**
   * Retrieves the assignments of the space matching the query. Each assignment represents one user or group and their corresponding roles in the space. Assignments are not shown for the owner of a space, who receive all `assignableRoles` by default.
   *
   * @param spaceId The ID of the space of the assignment.
   * @param query an object with query parameters
   * @throws GetSpaceAssignmentsHttpError
   */
  getSpaceAssignments: typeof getSpaceAssignments;
  /**
   * Creates an assignment for a user or group (assignee) to a space with the specified roles. Assignments are not required for space owners, who receive all `assignableRoles` by default. Only one assignment can exist per space, per user or group.
   *
   * @param spaceId The ID of the space of the assignment.
   * @param body an object with the body content
   * @throws CreateSpaceAssignmentHttpError
   */
  createSpaceAssignment: typeof createSpaceAssignment;
  /**
   * Deletes an assignment.
   *
   * @param spaceId The ID of the space of the assignment.
   * @param assignmentId The ID of the assignment to delete.
   * @throws DeleteSpaceAssignmentHttpError
   */
  deleteSpaceAssignment: typeof deleteSpaceAssignment;
  /**
   * Retrieves a single assignment by assignment ID. Use `GET /spaces/{spaceId}/assignments` to list all users and groups assigned to the space and their assignment ID.
   *
   * @param spaceId The ID of the space of the assignment.
   * @param assignmentId The ID of the assignment to retrieve.
   * @throws GetSpaceAssignmentHttpError
   */
  getSpaceAssignment: typeof getSpaceAssignment;
  /**
   * Updates a single assignment by assignment ID. Use `GET /spaces/{spaceId}/assignments` to list all users and groups assigned to the space and their assignment ID. The complete list of roles must be provided.
   *
   * @param spaceId The ID of the space of the assignment.
   * @param assignmentId The ID of the assignment to update.
   * @param body an object with the body content
   * @throws UpdateSpaceAssignmentHttpError
   */
  updateSpaceAssignment: typeof updateSpaceAssignment;
  /**
   * Retrieves the shares of the space matching the query.
   *
   * @param spaceId The ID of the space containing the shares.
   * @param query an object with query parameters
   * @throws GetSpaceSharesHttpError
   */
  getSpaceShares: typeof getSpaceShares;
  /**
   * Create a space share
   *
   * @param spaceId The ID of the space of the share.
   * @param body an object with the body content
   * @throws CreateSpaceShareHttpError
   */
  createSpaceShare: typeof createSpaceShare;
  /**
   * Deletes a space share.
   *
   * @param spaceId The ID of the space to which the share belongs.
   * @param shareId The ID of the share to delete.
   * @throws DeleteSpaceShareHttpError
   */
  deleteSpaceShare: typeof deleteSpaceShare;
  /**
   * Retrieves a single space share by ID.
   *
   * @param spaceId The ID of the space to which the share belongs.
   * @param shareId The ID of the share to retrieve.
   * @throws GetSpaceShareHttpError
   */
  getSpaceShare: typeof getSpaceShare;
  /**
   * Updates properties of a space share (roles, and disabled state for link shares).
   *
   * @param spaceId The ID of the space to which the share belongs.
   * @param shareId The ID of the share to update.
   * @param body an object with the body content
   * @throws PatchShareHttpError
   */
  patchShare: typeof patchShare;
  /**
   * Clears the cache for spaces api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the spaces api
 */
declare const spacesExport: SpacesAPI;
//#endregion
export { Spaces as $, GetSpaceSharesHttpResponse as A, RoleType as B, GetSpaceAssignmentsHttpError as C, updateSpaceAssignment as Ct, GetSpaceShareHttpError as D, GetSpaceHttpResponse as E, Link as F, ShareType as G, ShareCreate as H, PatchShareHttpError as I, SpaceCreate as J, Shares as K, PatchShareHttpResponse as L, GetSpaceTypesHttpResponse as M, GetSpacesHttpError as N, GetSpaceShareHttpResponse as O, GetSpacesHttpResponse as P, SpaceUpdate as Q, PatchSpaceHttpError as R, GetSpaceAssignmentHttpResponse as S, updateSpace as St, GetSpaceHttpError as T, SharePatch as U, Share as V, ShareRoleType as W, SpaceType as X, SpacePatch as Y, SpaceTypes as Z, DeleteSpaceShareHttpError as _, getSpaceTypes as _t, AssignmentUpdate as a, clearCache as at, Errors as b, patchSpace as bt, CreateSpaceAssignmentHttpResponse as c, createSpaceShare as ct, CreateSpaceShareHttpError as d, deleteSpaceShare as dt, SpacesAPI as et, CreateSpaceShareHttpResponse as f, getSpace as ft, DeleteSpaceHttpResponse as g, getSpaceShares as gt, DeleteSpaceHttpError as h, getSpaceShare as ht, AssignmentType as i, UpdateSpaceHttpResponse as it, GetSpaceTypesHttpError as j, GetSpaceSharesHttpError as k, CreateSpaceHttpError as l, deleteSpace as lt, DeleteSpaceAssignmentHttpResponse as m, getSpaceAssignments as mt, Assignment as n, UpdateSpaceAssignmentHttpResponse as nt, Assignments as o, createSpace as ot, DeleteSpaceAssignmentHttpError as p, getSpaceAssignment as pt, Space as q, AssignmentCreate as r, UpdateSpaceHttpError as rt, CreateSpaceAssignmentHttpError as s, createSpaceAssignment as st, ActionName as t, UpdateSpaceAssignmentHttpError as tt, CreateSpaceHttpResponse as u, deleteSpaceAssignment as ut, DeleteSpaceShareHttpResponse as v, getSpaces as vt, GetSpaceAssignmentsHttpResponse as w, GetSpaceAssignmentHttpError as x, spacesExport as xt, Error as y, patchShare as yt, PatchSpaceHttpResponse as z };