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

export type AutomationConnectionChangeOwnerObject = {
  /** The unique identifier of the new owner. */
  userId?: string;
};

export type AutomationConnectionChangeSpaceObject = {
  /** The unique identifier of the new space. */
  spaceId?: string;
};

export type AutomationConnectionCheckObject = {
  /** The connection status of the automation connection. When true, the automation connection is connected. */
  connected?: boolean;
  /** The connection status of the automation connection. When true, the automation connection is connected. */
  is_connected?: boolean;
};

export type AutomationConnectionCreationObject = {
  /** The unique identifier of the connector from which the automation connection is created. */
  connectorId: string;
  /** The name of the created automation connection. */
  name?: string;
  params?: AutomationConnectionParamCreateObject[];
  /** The unique identifier of the space in which the automation connection is created. */
  spaceId?: string;
};

export type AutomationConnectionDetailObject = {
  /** The unique identifier of the automation connector. */
  connectorId?: string;
  /** The timestamp when the automation connection was created. */
  createdAt?: string;
  /** This contains the error message if a connection is being created with an issue. */
  error?: unknown;
  /** The unique identifier of the automation connection. */
  id?: string;
  /** The connection status of the automation connection. When true, the automation connection is connected. */
  isConnected?: boolean;
  /** The name of the automation connection. */
  name?: string;
  /** The name of the OAuth account associated with the automation connection. */
  oauthAccountName?: string;
  /** The unique identifier of the owner of the automation connection. */
  ownerId?: string;
  params?: AutomationConnectionParamObject[];
  /** The redirect of the OAuth account. */
  redirect?: string;
  /** The space ID of the automation connection. */
  spaceId?: string;
  /** The timestamp when the automation connection was updated. */
  updatedAt?: string;
};

export type AutomationConnectionParamCreateObject = {
  /** The name of the automation connection parameter. */
  name?: string;
  /** The value of the automation connection parameter option. */
  value?: string;
};

export type AutomationConnectionParamObject = {
  /** The documentation of the automation connection parameter. */
  documentation?: string;
  /** The example value of the automation connection parameter. */
  exampleValue?: string;
  /** The field type of the automation connection parameter. */
  fieldType?: string;
  /** The unique identifier of the automation connection parameter. */
  id?: string;
  /** When true, the parameter is optional. */
  isOptional?: boolean;
  /** The metadata of the automation connection parameter. */
  meta?: unknown[];
  /** The name of the automation connection parameter. */
  name?: string;
  /** The order that the automation connection configuration fields should be displayed in. */
  order?: number;
  paramOptions?: AutomationConnectionParamOptionObject[];
  /** The value of the automation connection parameter. */
  value?: string;
};

export type AutomationConnectionParamOptionObject = {
  /** The unique identifier of the automation connection parameter option. */
  id?: string;
  /** The value of the automation connection parameter option. */
  value?: string;
};

export type AutomationConnectionParamPutObject = {
  /** The unique identifier of the automation connection parameter option. */
  id?: string;
  /** The value of the automation connection parameter option. */
  value?: string;
};

export type AutomationConnectionPutRequestObject = {
  /** The new name of the automation connection to be renamed to. */
  name?: string;
  params?: AutomationConnectionParamPutObject[];
};

export type AutomationConnectionsList = {
  data?: AutomationConnectionsListObject[];
  links?: Links;
};

export type AutomationConnectionsListObject = {
  /** The unique identifier of the connector the automation connection is created from. */
  connectorId?: string;
  /** The timestamp when the automation connection is created. */
  createdAt?: string;
  /** The unique identifier of an automation connection. */
  id?: string;
  /** Returns true if the automtion connection is connected. */
  isConnected?: boolean;
  /** The name of an automation connection. */
  name?: string;
  /** The unique identifier of the owner of the automation connection. */
  ownerId?: string;
  /** The space ID of the automation connection. */
  spaceId?: string;
  /** The timestamp when the automation connection is updated. */
  updatedAt?: string;
};

export type Error = {
  /** The unique code for the error */
  code: string;
  /** May be used to provide additional details */
  detail?: string;
  /** A summary of what went wrong */
  title: string;
};

export type ErrorResponse = {
  errors?: Error[];
  /** A way to trace the source of the error. */
  traceId?: string;
};

export type Links = {
  next?: PaginationLink;
  prev?: PaginationLink;
};

export type PaginationLink = {
  /** The URL to a resource request */
  href?: string | null;
};

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * @deprecated
 *
 * Retrieves a list of automation connections the requesting user has access to.
 *
 * @param query an object with query parameters
 * @throws GetAutomationConnectionsHttpError
 */
export async function getAutomationConnections(
  query: {
    /** Pagination cursor returned from a previous request. */
    cursor?: string;
    /** Filters the result based on the specified criteria: name, connectorId, ownerId, or spaceId. */
    filter?: string;
    /** The number of automation connections to retrieve. */
    limit?: number;
    /** When true, list all connections. Restricted to tenant admins and analytics admins. */
    listAll?: boolean;
    /** The field to sort by, with +- prefix indicating sort order. (`?sort=-name` => sort on the `name` field using descending order). */
    sort?:
      | "id"
      | "name"
      | "createdAt"
      | "updatedAt"
      | "+id"
      | "+name"
      | "+createdAt"
      | "+updatedAt"
      | "-id"
      | "-name"
      | "-createdAt"
      | "-updatedAt";
  },
  options?: ApiCallOptions,
): Promise<GetAutomationConnectionsHttpResponse> {
  return invokeFetch("automation-connections", {
    method: "get",
    pathTemplate: "/api/v1/automation-connections",
    query,
    options,
  });
}

export type GetAutomationConnectionsHttpResponse = {
  data: AutomationConnectionsList;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetAutomationConnectionsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetAutomationConnectionsHttpResponse>;
};

export type GetAutomationConnectionsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};

/**
 * @deprecated
 *
 * Creates a new connection object from an automation connector.
 *
 * @param body an object with the body content
 * @throws CreateAutomationConnectionHttpError
 */
export async function createAutomationConnection(
  body: AutomationConnectionCreationObject,
  options?: ApiCallOptions,
): Promise<CreateAutomationConnectionHttpResponse> {
  return invokeFetch("automation-connections", {
    method: "post",
    pathTemplate: "/api/v1/automation-connections",
    body,
    contentType: "application/json",
    options,
  });
}

export type CreateAutomationConnectionHttpResponse = {
  data: AutomationConnectionDetailObject;
  headers: Headers;
  status: 201;
};

export type CreateAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};

/**
 * @deprecated
 *
 * Deletes the specified automation connection.
 *
 * @param id The unique identifier for the automation connection.
 * @param query an object with query parameters
 * @throws DeleteAutomationConnectionHttpError
 */
export async function deleteAutomationConnection(
  id: string,
  query: {
    /** When true, the automation connection will be deleted regardless of its usage by any automations. */
    forced?: boolean;
  },
  options?: ApiCallOptions,
): Promise<DeleteAutomationConnectionHttpResponse> {
  return invokeFetch("automation-connections", {
    method: "delete",
    pathTemplate: "/api/v1/automation-connections/{id}",
    pathVariables: { id },
    query,
    options,
  });
}

export type DeleteAutomationConnectionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type DeleteAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * @deprecated
 *
 * Returns details about the specified automation connection.
 *
 * @param id The unique identifier for the automation connection.
 * @throws GetAutomationConnectionHttpError
 */
export async function getAutomationConnection(
  id: string,
  options?: ApiCallOptions,
): Promise<GetAutomationConnectionHttpResponse> {
  return invokeFetch("automation-connections", {
    method: "get",
    pathTemplate: "/api/v1/automation-connections/{id}",
    pathVariables: { id },
    options,
  });
}

export type GetAutomationConnectionHttpResponse = {
  data: AutomationConnectionDetailObject;
  headers: Headers;
  status: 200;
};

export type GetAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * @deprecated
 *
 * Updates the specified properties of an automation connection.
 *
 * @param id The unique identifier for the automation connection.
 * @param body an object with the body content
 * @throws UpdateAutomationConnectionHttpError
 */
export async function updateAutomationConnection(
  id: string,
  body: AutomationConnectionPutRequestObject,
  options?: ApiCallOptions,
): Promise<UpdateAutomationConnectionHttpResponse> {
  return invokeFetch("automation-connections", {
    method: "put",
    pathTemplate: "/api/v1/automation-connections/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options,
  });
}

export type UpdateAutomationConnectionHttpResponse = {
  data: AutomationConnectionDetailObject;
  headers: Headers;
  status: 200;
};

export type UpdateAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * @deprecated
 *
 * Changes the owner of an automation connection by specifying a new owner.
 *
 * @param id The unique identifier for the automation connection.
 * @param body an object with the body content
 * @throws ChangeOwnerAutomationConnectionHttpError
 */
export async function changeOwnerAutomationConnection(
  id: string,
  body: AutomationConnectionChangeOwnerObject,
  options?: ApiCallOptions,
): Promise<ChangeOwnerAutomationConnectionHttpResponse> {
  return invokeFetch("automation-connections", {
    method: "post",
    pathTemplate: "/api/v1/automation-connections/{id}/actions/change-owner",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options,
  });
}

export type ChangeOwnerAutomationConnectionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type ChangeOwnerAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * @deprecated
 *
 * Changes the space of an automation connection by specifying a new space.
 *
 * @param id The unique identifier for the automation connection.
 * @param body an object with the body content
 * @throws ChangeSpaceAutomationConnectionHttpError
 */
export async function changeSpaceAutomationConnection(
  id: string,
  body: AutomationConnectionChangeSpaceObject,
  options?: ApiCallOptions,
): Promise<ChangeSpaceAutomationConnectionHttpResponse> {
  return invokeFetch("automation-connections", {
    method: "post",
    pathTemplate: "/api/v1/automation-connections/{id}/actions/change-space",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options,
  });
}

export type ChangeSpaceAutomationConnectionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type ChangeSpaceAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * @deprecated
 *
 * Tries to validate and checks the connection status of an automation connection.
 *
 * @param id The unique identifier for the automation connection.
 * @throws CheckAutomationConnectionHttpError
 */
export async function checkAutomationConnection(
  id: string,
  options?: ApiCallOptions,
): Promise<CheckAutomationConnectionHttpResponse> {
  return invokeFetch("automation-connections", {
    method: "post",
    pathTemplate: "/api/v1/automation-connections/{id}/actions/check",
    pathVariables: { id },
    options,
  });
}

export type CheckAutomationConnectionHttpResponse = {
  data: AutomationConnectionCheckObject;
  headers: Headers;
  status: 200;
};

export type CheckAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Clears the cache for automation-connections api requests.
 */
export function clearCache() {
  return clearApiCache("automation-connections");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type AutomationConnectionsAPI = {
  /**
   * @deprecated
   *
   * Retrieves a list of automation connections the requesting user has access to.
   *
   * @param query an object with query parameters
   * @throws GetAutomationConnectionsHttpError
   */
  getAutomationConnections: typeof getAutomationConnections;
  /**
   * @deprecated
   *
   * Creates a new connection object from an automation connector.
   *
   * @param body an object with the body content
   * @throws CreateAutomationConnectionHttpError
   */
  createAutomationConnection: typeof createAutomationConnection;
  /**
   * @deprecated
   *
   * Deletes the specified automation connection.
   *
   * @param id The unique identifier for the automation connection.
   * @param query an object with query parameters
   * @throws DeleteAutomationConnectionHttpError
   */
  deleteAutomationConnection: typeof deleteAutomationConnection;
  /**
   * @deprecated
   *
   * Returns details about the specified automation connection.
   *
   * @param id The unique identifier for the automation connection.
   * @throws GetAutomationConnectionHttpError
   */
  getAutomationConnection: typeof getAutomationConnection;
  /**
   * @deprecated
   *
   * Updates the specified properties of an automation connection.
   *
   * @param id The unique identifier for the automation connection.
   * @param body an object with the body content
   * @throws UpdateAutomationConnectionHttpError
   */
  updateAutomationConnection: typeof updateAutomationConnection;
  /**
   * @deprecated
   *
   * Changes the owner of an automation connection by specifying a new owner.
   *
   * @param id The unique identifier for the automation connection.
   * @param body an object with the body content
   * @throws ChangeOwnerAutomationConnectionHttpError
   */
  changeOwnerAutomationConnection: typeof changeOwnerAutomationConnection;
  /**
   * @deprecated
   *
   * Changes the space of an automation connection by specifying a new space.
   *
   * @param id The unique identifier for the automation connection.
   * @param body an object with the body content
   * @throws ChangeSpaceAutomationConnectionHttpError
   */
  changeSpaceAutomationConnection: typeof changeSpaceAutomationConnection;
  /**
   * @deprecated
   *
   * Tries to validate and checks the connection status of an automation connection.
   *
   * @param id The unique identifier for the automation connection.
   * @throws CheckAutomationConnectionHttpError
   */
  checkAutomationConnection: typeof checkAutomationConnection;
  /**
   * Clears the cache for automation-connections api requests.
   */
  clearCache: typeof clearCache;
};

/**
 * Functions for the automation-connections api
 */
const automationConnectionsExport: AutomationConnectionsAPI = {
  getAutomationConnections,
  createAutomationConnection,
  deleteAutomationConnection,
  getAutomationConnection,
  updateAutomationConnection,
  changeOwnerAutomationConnection,
  changeSpaceAutomationConnection,
  checkAutomationConnection,
  clearCache,
};
export default automationConnectionsExport;
