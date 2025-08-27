import { ApiCallOptions } from "./auth-types-B1c_1Nca.js";

//#region src/public/rest/automation-connections.d.ts
type AutomationConnectionChangeOwnerObject = {
  /** The unique identifier of the new owner. */
  userId?: string;
};
type AutomationConnectionChangeSpaceObject = {
  /** The unique identifier of the new space. */
  spaceId?: string;
};
type AutomationConnectionCheckObject = {
  /** The connection status of the automation connection. When true, the automation connection is connected. */
  isConnected?: boolean;
};
type AutomationConnectionCreationObject = {
  /** The unique identifier of the connector from which the automation connection is created. */
  connectorId: string;
  /** The name of the created automation connection. */
  name?: string;
  params?: AutomationConnectionParamCreateObject[];
  /** The unique identifier of the space in which the automation connection is created. */
  spaceId?: string;
};
type AutomationConnectionDetailObject = {
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
type AutomationConnectionParamCreateObject = {
  /** The name of the automation connection parameter. */
  name?: string;
  /** The value of the automation connection parameter option. */
  value?: string;
};
type AutomationConnectionParamObject = {
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
type AutomationConnectionParamOptionObject = {
  /** The unique identifier of the automation connection parameter option. */
  id?: string;
  /** The value of the automation connection parameter option. */
  value?: string;
};
type AutomationConnectionParamPutObject = {
  /** The unique identifier of the automation connection parameter option. */
  id?: string;
  /** The value of the automation connection parameter option. */
  value?: string;
};
type AutomationConnectionPutRequestObject = {
  /** The new name of the automation connection to be renamed to. */
  name?: string;
  params?: AutomationConnectionParamPutObject[];
};
type AutomationConnectionsList = {
  data?: AutomationConnectionsListObject[];
  links?: Links;
};
type AutomationConnectionsListObject = {
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
type Error = {
  /** The unique code for the error */
  code: string;
  /** May be used to provide additional details */
  detail?: string;
  /** A summary of what went wrong */
  title: string;
};
type ErrorResponse = {
  errors?: Error[];
  /** A way to trace the source of the error. */
  traceId?: string;
};
type Links = {
  next?: PaginationLink;
  prev?: PaginationLink;
};
type PaginationLink = {
  /** The URL to a resource request */
  href?: string;
};
/**
 * Retrieves a list of automation connections
 *
 * @param query an object with query parameters
 * @throws GetAutomationConnectionsHttpError
 */
declare function getAutomationConnections(query: {
  /** Filters the result based on the specified criteria: name, connectorId, ownerId, or spaceId. */
  filter?: string;
  /** The number of automation connections to retrieve. */
  limit?: number;
  /** When true, list all connections. Restricted to tenant admins and analytics admins. */
  listAll?: boolean;
  /** The field to sort by, with +- prefix indicating sort order. (?sort=-name => sort on the name field using descending order) */
  sort?: "id" | "name" | "createdAt" | "updatedAt" | "+id" | "+name" | "+createdAt" | "+updatedAt" | "-id" | "-name" | "-createdAt" | "-updatedAt";
}, options?: ApiCallOptions): Promise<GetAutomationConnectionsHttpResponse>;
type GetAutomationConnectionsHttpResponse = {
  data: AutomationConnectionsList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetAutomationConnectionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetAutomationConnectionsHttpResponse>;
};
type GetAutomationConnectionsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Creates a new connection object from an automation connector.
 *
 * @param body an object with the body content
 * @throws CreateAutomationConnectionHttpError
 */
declare function createAutomationConnection(body: AutomationConnectionCreationObject, options?: ApiCallOptions): Promise<CreateAutomationConnectionHttpResponse>;
type CreateAutomationConnectionHttpResponse = {
  data: AutomationConnectionDetailObject;
  headers: Headers;
  status: 201;
};
type CreateAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Deletes the specified automation connection.
 *
 * @param id The unique identifier for the automation connection.
 * @param query an object with query parameters
 * @throws DeleteAutomationConnectionHttpError
 */
declare function deleteAutomationConnection(id: string, query: {
  /** When true, the automation connection will be deleted regardless of its usage by any automations. */
  forced?: boolean;
}, options?: ApiCallOptions): Promise<DeleteAutomationConnectionHttpResponse>;
type DeleteAutomationConnectionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Returns details about the specified automation connection.
 *
 * @param id The unique identifier for the automation connection.
 * @throws GetAutomationConnectionHttpError
 */
declare function getAutomationConnection(id: string, options?: ApiCallOptions): Promise<GetAutomationConnectionHttpResponse>;
type GetAutomationConnectionHttpResponse = {
  data: AutomationConnectionDetailObject;
  headers: Headers;
  status: 200;
};
type GetAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Updates the specified properties of an automation connection.
 *
 * @param id The unique identifier for the automation connection.
 * @param body an object with the body content
 * @throws UpdateAutomationConnectionHttpError
 */
declare function updateAutomationConnection(id: string, body: AutomationConnectionPutRequestObject, options?: ApiCallOptions): Promise<UpdateAutomationConnectionHttpResponse>;
type UpdateAutomationConnectionHttpResponse = {
  data: AutomationConnectionDetailObject;
  headers: Headers;
  status: 200;
};
type UpdateAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Changes the owner of an automation connection by specifying a new owner.
 *
 * @param id The unique identifier for the automation connection.
 * @param body an object with the body content
 * @throws ChangeOwnerAutomationConnectionHttpError
 */
declare function changeOwnerAutomationConnection(id: string, body: AutomationConnectionChangeOwnerObject, options?: ApiCallOptions): Promise<ChangeOwnerAutomationConnectionHttpResponse>;
type ChangeOwnerAutomationConnectionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type ChangeOwnerAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Changes the space of an automation connection by specifying a new space.
 *
 * @param id The unique identifier for the automation connection.
 * @param body an object with the body content
 * @throws ChangeSpaceAutomationConnectionHttpError
 */
declare function changeSpaceAutomationConnection(id: string, body: AutomationConnectionChangeSpaceObject, options?: ApiCallOptions): Promise<ChangeSpaceAutomationConnectionHttpResponse>;
type ChangeSpaceAutomationConnectionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type ChangeSpaceAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Tries to validate and checks the connection status of an automation connection.
 *
 * @param id The unique identifier for the automation connection.
 * @throws CheckAutomationConnectionHttpError
 */
declare function checkAutomationConnection(id: string, options?: ApiCallOptions): Promise<CheckAutomationConnectionHttpResponse>;
type CheckAutomationConnectionHttpResponse = {
  data: AutomationConnectionCheckObject;
  headers: Headers;
  status: 200;
};
type CheckAutomationConnectionHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Clears the cache for automation-connections api requests.
 */
declare function clearCache(): void;
interface AutomationConnectionsAPI {
  /**
   * Retrieves a list of automation connections
   *
   * @param query an object with query parameters
   * @throws GetAutomationConnectionsHttpError
   */
  getAutomationConnections: typeof getAutomationConnections;
  /**
   * Creates a new connection object from an automation connector.
   *
   * @param body an object with the body content
   * @throws CreateAutomationConnectionHttpError
   */
  createAutomationConnection: typeof createAutomationConnection;
  /**
   * Deletes the specified automation connection.
   *
   * @param id The unique identifier for the automation connection.
   * @param query an object with query parameters
   * @throws DeleteAutomationConnectionHttpError
   */
  deleteAutomationConnection: typeof deleteAutomationConnection;
  /**
   * Returns details about the specified automation connection.
   *
   * @param id The unique identifier for the automation connection.
   * @throws GetAutomationConnectionHttpError
   */
  getAutomationConnection: typeof getAutomationConnection;
  /**
   * Updates the specified properties of an automation connection.
   *
   * @param id The unique identifier for the automation connection.
   * @param body an object with the body content
   * @throws UpdateAutomationConnectionHttpError
   */
  updateAutomationConnection: typeof updateAutomationConnection;
  /**
   * Changes the owner of an automation connection by specifying a new owner.
   *
   * @param id The unique identifier for the automation connection.
   * @param body an object with the body content
   * @throws ChangeOwnerAutomationConnectionHttpError
   */
  changeOwnerAutomationConnection: typeof changeOwnerAutomationConnection;
  /**
   * Changes the space of an automation connection by specifying a new space.
   *
   * @param id The unique identifier for the automation connection.
   * @param body an object with the body content
   * @throws ChangeSpaceAutomationConnectionHttpError
   */
  changeSpaceAutomationConnection: typeof changeSpaceAutomationConnection;
  /**
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
}
/**
 * Functions for the automation-connections api
 */
declare const automationConnectionsExport: AutomationConnectionsAPI;
//#endregion
export { AutomationConnectionChangeOwnerObject, AutomationConnectionChangeSpaceObject, AutomationConnectionCheckObject, AutomationConnectionCreationObject, AutomationConnectionDetailObject, AutomationConnectionParamCreateObject, AutomationConnectionParamObject, AutomationConnectionParamOptionObject, AutomationConnectionParamPutObject, AutomationConnectionPutRequestObject, AutomationConnectionsAPI, AutomationConnectionsList, AutomationConnectionsListObject, ChangeOwnerAutomationConnectionHttpError, ChangeOwnerAutomationConnectionHttpResponse, ChangeSpaceAutomationConnectionHttpError, ChangeSpaceAutomationConnectionHttpResponse, CheckAutomationConnectionHttpError, CheckAutomationConnectionHttpResponse, CreateAutomationConnectionHttpError, CreateAutomationConnectionHttpResponse, DeleteAutomationConnectionHttpError, DeleteAutomationConnectionHttpResponse, Error, ErrorResponse, GetAutomationConnectionHttpError, GetAutomationConnectionHttpResponse, GetAutomationConnectionsHttpError, GetAutomationConnectionsHttpResponse, Links, PaginationLink, UpdateAutomationConnectionHttpError, UpdateAutomationConnectionHttpResponse, automationConnectionsExport, changeOwnerAutomationConnection, changeSpaceAutomationConnection, checkAutomationConnection, clearCache, createAutomationConnection, deleteAutomationConnection, getAutomationConnection, getAutomationConnections, updateAutomationConnection };