/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import { clearApiCache, invokeFetch, type ApiCallOptions, type PageCallOptions } from "#public/invoke-fetch";

/* -------------------------------------------------------------------------- */
/*                                Public types                                */
/* -------------------------------------------------------------------------- */

/**
 * An error object.
 */
export type Error = {
  /** The error code. */
  code: string;
  /** The detailed error message. */
  detail?: string;
  /** Non-standard information about the error. */
  meta?: unknown;
  /** The http status code. */
  status?: string;
  /** The error title. */
  title: string;
};

/**
 * A representation of the errors encountered from the HTTP request.
 */
export type Errors = {
  /** List of errors and their properties. */
  errors?: Error[];
};

export type Link = {
  /** The URL for the link. */
  href: string;
};

export type OauthToken = {
  /** The description of the token. */
  description?: string;
  /** The type of the user device the authorization token is generated for (Tablet, Phone etc.). */
  deviceType?: string;
  /** The token ID. */
  id: string;
  /** The last time the token was used. */
  lastUsed?: string;
  /** The ID of the owning tenant. */
  tenantId: string;
  /** The ID of the owning user. */
  userId: string;
};

export type OauthTokenPage = {
  data: OauthToken[];
  links: {
    next?: Link;
    prev?: Link;
    self: Link;
  };
};

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Retrieve list of OAuth tokens that the user has access to. Users assigned with a `TenantAdmin` role can list OAuth tokens generated for all users in the tenant.
 *
 * @param query an object with query parameters
 * @throws GetOauthTokensHttpError
 */
export async function getOauthTokens(
  query: {
    /** The maximum number of tokens to return. */
    limit?: number;
    /** The target page. */
    page?: string;
    /** The field to sort by. */
    sort?: "userId";
    /** The ID of the user to limit results to. */
    userId?: string;
  },
  options?: ApiCallOptions,
): Promise<GetOauthTokensHttpResponse> {
  return invokeFetch("oauth-tokens", {
    method: "get",
    pathTemplate: "/api/v1/oauth-tokens",
    query,
    options,
  });
}

export type GetOauthTokensHttpResponse = {
  data: OauthTokenPage;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetOauthTokensHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetOauthTokensHttpResponse>;
};

export type GetOauthTokensHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401;
};

/**
 * Revokes a specific OAuth token by ID. Requesting user must have `TenantAdmin` role assigned to delete tokens owned by other users.
 *
 * @param tokenId The ID of the token to revoke.
 * @throws DeleteOauthTokenHttpError
 */
export async function deleteOauthToken(
  tokenId: string,
  options?: ApiCallOptions,
): Promise<DeleteOauthTokenHttpResponse> {
  return invokeFetch("oauth-tokens", {
    method: "delete",
    pathTemplate: "/api/v1/oauth-tokens/{tokenId}",
    pathVariables: { tokenId },
    options,
  });
}

export type DeleteOauthTokenHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type DeleteOauthTokenHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};

/**
 * Clears the cache for oauth-tokens api requests.
 */
export function clearCache() {
  return clearApiCache("oauth-tokens");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type OauthTokensAPI = {
  /**
   * Retrieve list of OAuth tokens that the user has access to. Users assigned with a `TenantAdmin` role can list OAuth tokens generated for all users in the tenant.
   *
   * @param query an object with query parameters
   * @throws GetOauthTokensHttpError
   */
  getOauthTokens: typeof getOauthTokens;
  /**
   * Revokes a specific OAuth token by ID. Requesting user must have `TenantAdmin` role assigned to delete tokens owned by other users.
   *
   * @param tokenId The ID of the token to revoke.
   * @throws DeleteOauthTokenHttpError
   */
  deleteOauthToken: typeof deleteOauthToken;
  /**
   * Clears the cache for oauth-tokens api requests.
   */
  clearCache: typeof clearCache;
};

/**
 * Functions for the oauth-tokens api
 */
const oauthTokensExport: OauthTokensAPI = { getOauthTokens, deleteOauthToken, clearCache };
export default oauthTokensExport;
