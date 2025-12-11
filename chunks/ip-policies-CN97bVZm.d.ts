import { y as ApiCallOptions } from "./auth-types-CJNqN_zp.js";

//#region src/public/rest/core/ip-policies.d.ts
declare namespace ip_policies_d_exports {
  export { CreateIPPolicy, CreateIpPolicyHttpError, CreateIpPolicyHttpResponse, DeleteIpPolicyHttpError, DeleteIpPolicyHttpResponse, Error, Errors, GetIpPoliciesHttpError, GetIpPoliciesHttpResponse, GetIpPolicyHttpError, GetIpPolicyHttpResponse, IPPolicyListItem, IPPolicyResource, IpPoliciesAPI, JSONPatch, JSONPatchArray, Link, Links, ListIPPoliciesResult, PatchIpPolicyHttpError, PatchIpPolicyHttpResponse, clearCache, createIpPolicy, ipPoliciesExport as default, deleteIpPolicy, getIpPolicies, getIpPolicy, patchIpPolicy };
}
type CreateIPPolicy = {
  /** An array of allowed IP IPv4 addresses, either as plain IP addresses, or as CIDR ranges. */
  allowedIps: string[];
  /** Indicates whether the IP policy is enabled. */
  enabled?: boolean;
  /** The descriptive name for the IP policy. */
  name?: string;
};
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
 * @example
 * {
 *   errors: [
 *     {
 *       code: "CODE-10402",
 *       title: "Not Found"
 *     }
 *   ],
 *   traceId: "0000000000000000200ba0714061b982"
 * }
 */
type Errors = {
  /** An array of errors related to the operation. */
  errors?: Error[];
  /** A unique identifier for tracing the error. */
  traceId?: string;
};
type IPPolicyListItem = {
  /** An array of allowed IP addresses. */
  allowedIps?: string[];
  /** The timestamp for when the resource was created. */
  createdAt?: string;
  /** The user ID of the user who created the IP policy. */
  createdBy?: string;
  /** Indicates whether the IP policy can be deleted. */
  deletable?: boolean;
  /** Indicates whether the IP policy can be updated. */
  editable?: boolean;
  /** Indicates whether the IP policy is enabled. */
  enabled?: boolean;
  /** The unique identifier for the IP policy. */
  readonly id: string;
  /** The descriptive name for the IP policy. */
  name?: string;
  /** The tenant unique identifier associated with the given IP policy. */
  tenantId?: string;
  /** Indicates whether the IP policy can be enabled/disabled. */
  toggleable?: boolean;
  /** The timestamp for when the resource was last updated. */
  updatedAt?: string;
  /** The user ID of the user who last updated the IP policy. */
  updatedBy?: string;
};
type IPPolicyResource = {
  /** An array of allowed public IPv4 addresses. */
  allowedIps: string[];
  /** The timestamp for when the IP policy was created. */
  createdAt: string;
  /** The user ID of the user who created the IP policy. */
  createdBy: string;
  /** Indicates whether the IP policy can be deleted. */
  deletable: boolean;
  /** Indicates whether the IP policy can be updated. */
  editable: boolean;
  /** Indicates whether the IP policy is enabled. */
  enabled: boolean;
  /** The unique identifier for the IP policy. */
  readonly id: string;
  /** The descriptive name for the IP policy. */
  name: string;
  /** The tenant unique identifier associated with the given IP policy. */
  tenantId: string;
  /** Indicates whether the IP policy can be enabled/disabled.. */
  toggleable: boolean;
  /** The timestamp for when the IP policy was last updated. */
  updatedAt: string;
  /** The user ID of the user who last updated the IP policy. */
  updatedBy: string;
};
/**
 * A JSON Patch document as defined in http://tools.ietf.org/html/rfc6902.
 */
type JSONPatch = {
  /** The operation to be performed. */
  op: "replace";
  /** A JSON Pointer. */
  path: "/enabled" | "/name" | "/allowedIps";
  /** The value to be used for this operation. */
  value: string | boolean | string[];
};
/**
 * An array of JSON Patch documents
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/name",
 *     value: "New name"
 *   },
 *   {
 *     op: "replace",
 *     path: "/allowedIps",
 *     value: [
 *       "61.254.213.0/24",
 *       "22.46.216.142"
 *     ]
 *   },
 *   {
 *     op: "replace",
 *     path: "/enabled",
 *     value: true
 *   }
 * ]
 */
type JSONPatchArray = JSONPatch[];
/**
 * A link
 */
type Link = {
  href: string;
};
/**
 * Contains pagination links. self is a link to the current results page, next is a link to the next results page and prev is a link to the previous results page
 */
type Links = {
  /** A link */
  next?: Link;
  /** A link */
  prev?: Link;
  /** A link */
  self: Link;
};
type ListIPPoliciesResult = {
  /** An array of IP policies. */
  data: IPPolicyListItem[];
  /** Contains pagination links. self is a link to the current results page, next is a link to the next results page and prev is a link to the previous results page */
  links: Links;
  /** Indicates the total number of matching documents. Will only be returned if the query parameter "totalResults" is true. */
  totalResults?: number;
};
/**
 * Returns a list of IP policies present in the tenant. The user must be assigned the `TenantAdmin` role.
 *
 * @param query an object with query parameters
 * @throws GetIpPoliciesHttpError
 */
declare function getIpPolicies(query: {
  /** A comma-separated list of fields to limit in the response. */
  fields?: string;
  /** The advanced filtering to use for the query. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for the syntax. All conditional statements within this query parameter are case insensitive.
   *
   * field "enabled" supports following operators: eq
   *
   * field "id" supports following operators: eq, ne
   *
   * field "name" supports following operators: eq, co
   *
   * field "tenantId" supports following operators: eq */
  filter?: string;
  /** The number of IP policies to retrieve. */
  limit?: number;
  /** The page cursor. Takes precedence over other parameters. */
  page?: string;
  /** Optional resource field name to sort on, eg. name. Can be prefixed with +/- to determine order, defaults to (+) ascending. */
  sort?: "enabled" | "+enabled" | "-enabled" | "createdAt" | "+createdAt" | "-createdAt" | "updatedAt" | "+updatedAt" | "-updatedAt" | "name" | "+name" | "-name";
  /** Determines whether to return a count of the total records matched in the query. Defaults to false. */
  totalResults?: boolean;
}, options?: ApiCallOptions): Promise<GetIpPoliciesHttpResponse>;
type GetIpPoliciesHttpResponse = {
  data: ListIPPoliciesResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetIpPoliciesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetIpPoliciesHttpResponse>;
};
type GetIpPoliciesHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 429 | 500;
};
/**
 * Creates a new IPv4 IP policy in the tenant. If this is the first enabled policy, IP allowlisting will be enabled and access via other IP addresses will be blocked. The user's IP address must be present in at least one policy if allowlisting is enabled. The user must be assigned the `TenantAdmin` role. IPv6 IP addresses are not currently supported.
 *
 * @param body an object with the body content
 * @throws CreateIpPolicyHttpError
 */
declare function createIpPolicy(body: CreateIPPolicy, options?: ApiCallOptions): Promise<CreateIpPolicyHttpResponse>;
type CreateIpPolicyHttpResponse = {
  data: IPPolicyResource;
  headers: Headers;
  status: 201;
};
type CreateIpPolicyHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 404 | 429 | 500;
};
/**
 * Deletes an IP policy by ID. If this is the last enabled policy in the tenant, IP allowlisting will be disabled and access will be permitted via all IP addresses. The user's IP address must be present in at least one other policy if allowlisting is enabled. The user must be assigned the `TenantAdmin` role.
 *
 * @param id The unique identifier for the IP policy.
 * @throws DeleteIpPolicyHttpError
 */
declare function deleteIpPolicy(id: string, options?: ApiCallOptions): Promise<DeleteIpPolicyHttpResponse>;
type DeleteIpPolicyHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteIpPolicyHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 403 | 404 | 429 | 500;
};
/**
 * Retrieves details for a specific IP policy by policy ID.
 *
 * @param id The IP policy unique identifier
 * @throws GetIpPolicyHttpError
 */
declare function getIpPolicy(id: string, options?: ApiCallOptions): Promise<GetIpPolicyHttpResponse>;
type GetIpPolicyHttpResponse = {
  data: IPPolicyResource;
  headers: Headers;
  status: 200;
};
type GetIpPolicyHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 404 | 429 | 500;
};
/**
 * Updates the IP policy. If this is the first enabled policy in the tenant, IP allowlisting will be enabled and access via other IP addresses will be blocked. The user's IP address must be present in at least one policy if allowlisting is enabled. The user must be assigned the `TenantAdmin` role.
 *
 * @param id The unique identifier for the IP policy.
 * @param body an object with the body content
 * @throws PatchIpPolicyHttpError
 */
declare function patchIpPolicy(id: string, body: JSONPatchArray, options?: ApiCallOptions): Promise<PatchIpPolicyHttpResponse>;
type PatchIpPolicyHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchIpPolicyHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429 | 500;
};
/**
 * Clears the cache for core/ip-policies api requests.
 */
declare function clearCache(): void;
type IpPoliciesAPI = {
  /**
   * Returns a list of IP policies present in the tenant. The user must be assigned the `TenantAdmin` role.
   *
   * @param query an object with query parameters
   * @throws GetIpPoliciesHttpError
   */
  getIpPolicies: typeof getIpPolicies;
  /**
   * Creates a new IPv4 IP policy in the tenant. If this is the first enabled policy, IP allowlisting will be enabled and access via other IP addresses will be blocked. The user's IP address must be present in at least one policy if allowlisting is enabled. The user must be assigned the `TenantAdmin` role. IPv6 IP addresses are not currently supported.
   *
   * @param body an object with the body content
   * @throws CreateIpPolicyHttpError
   */
  createIpPolicy: typeof createIpPolicy;
  /**
   * Deletes an IP policy by ID. If this is the last enabled policy in the tenant, IP allowlisting will be disabled and access will be permitted via all IP addresses. The user's IP address must be present in at least one other policy if allowlisting is enabled. The user must be assigned the `TenantAdmin` role.
   *
   * @param id The unique identifier for the IP policy.
   * @throws DeleteIpPolicyHttpError
   */
  deleteIpPolicy: typeof deleteIpPolicy;
  /**
   * Retrieves details for a specific IP policy by policy ID.
   *
   * @param id The IP policy unique identifier
   * @throws GetIpPolicyHttpError
   */
  getIpPolicy: typeof getIpPolicy;
  /**
   * Updates the IP policy. If this is the first enabled policy in the tenant, IP allowlisting will be enabled and access via other IP addresses will be blocked. The user's IP address must be present in at least one policy if allowlisting is enabled. The user must be assigned the `TenantAdmin` role.
   *
   * @param id The unique identifier for the IP policy.
   * @param body an object with the body content
   * @throws PatchIpPolicyHttpError
   */
  patchIpPolicy: typeof patchIpPolicy;
  /**
   * Clears the cache for ip-policies api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the ip-policies api
 */
declare const ipPoliciesExport: IpPoliciesAPI;
//#endregion
export { createIpPolicy as C, ipPoliciesExport as D, getIpPolicy as E, ip_policies_d_exports as O, clearCache as S, getIpPolicies as T, Link as _, DeleteIpPolicyHttpResponse as a, PatchIpPolicyHttpError as b, GetIpPoliciesHttpError as c, GetIpPolicyHttpResponse as d, IPPolicyListItem as f, JSONPatchArray as g, JSONPatch as h, DeleteIpPolicyHttpError as i, patchIpPolicy as k, GetIpPoliciesHttpResponse as l, IpPoliciesAPI as m, CreateIpPolicyHttpError as n, Error as o, IPPolicyResource as p, CreateIpPolicyHttpResponse as r, Errors as s, CreateIPPolicy as t, GetIpPolicyHttpError as u, Links as v, deleteIpPolicy as w, PatchIpPolicyHttpResponse as x, ListIPPoliciesResult as y };