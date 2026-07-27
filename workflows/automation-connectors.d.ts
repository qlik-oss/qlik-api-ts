import { x as ApiCallOptions } from "../chunks/auth-types-o-bqAUAV.js";
import "../chunks/invoke-fetch-DcXyLc5n.js";
declare namespace automation_connectors_d_exports {
  export { AutomationConnectorBlock, AutomationConnectorDetail, AutomationConnectorParam, AutomationConnectorSnippet, AutomationConnectorSnippetInput, AutomationConnectorWebhookConfiguration, AutomationConnectorWebhookEvent, AutomationConnectorWebhookEventParam, AutomationConnectorsAPI, AutomationConnectorsList, AutomationConnectorsListObject, Error, ErrorResponse, GetAutomationConnectorHttpError, GetAutomationConnectorHttpResponse, GetAutomationConnectorWebhooksConfigurationHttpError, GetAutomationConnectorWebhooksConfigurationHttpResponse, GetAutomationConnectorsHttpError, GetAutomationConnectorsHttpResponse, Links, PaginationLink, clearCache, automationConnectorsExport as default, getAutomationConnector, getAutomationConnectorWebhooksConfiguration, getAutomationConnectors };
}
type AutomationConnectorBlock = {
  /** The description of the block. */
  description?: string | null;
  /** An example of the output this block produces. */
  exampleOutput?: unknown | (unknown | string | number | boolean)[] | string | null;
  /** The unique identifier of the block. */
  id?: string;
  /** The input parameters for this block. */
  inputs?: AutomationConnectorParam[];
  /** The name of the block. */
  name?: string;
  /** The object type this block operates on. */
  objectType?: string | null;
  /** The role of the block. */
  role?: string;
};
type AutomationConnectorDetail = {
  /** Indicates if the connector is billable. */
  billable?: boolean;
  /** The available blocks (endpoints) for this connector. */
  blocks?: AutomationConnectorBlock[];
  /** Documentation for setting up a connection with this connector. */
  connectDocumentation?: string | null;
  /** The description of the automation connector. */
  description?: string | null;
  /** Indicates if the connector supports webhooks. */
  hasWebhooks?: boolean;
  readonly id?: string;
  /** The name of the automation connector. */
  name?: string;
  /** The connection parameters required to authenticate with this connector. */
  params?: AutomationConnectorParam[];
  /** The available snippet templates for this connector. */
  snippets?: AutomationConnectorSnippet[];
};
type AutomationConnectorParam = {
  /** The description of the parameter. */
  description?: string | null;
  /** An example value for the parameter. */
  exampleValue?: string | null;
  /** The field type of the parameter. */
  fieldType?: string;
  /** The unique identifier of the parameter. */
  id?: string;
  /** The name of the parameter. */
  name?: string;
  /** Indicates whether the parameter is optional. */
  optional?: boolean;
  /** The available options for the parameter. */
  options?: string[];
  /** Indicates whether the parameter is a setting. */
  setting?: boolean;
};
type AutomationConnectorSnippet = {
  /** The description of the snippet. */
  description?: string | null;
  /** An example of the output this snippet produces. */
  exampleOutput?: unknown | (unknown | string | number | boolean)[] | string | null;
  /** The unique identifier of the snippet. */
  id?: string;
  /** The input fields for this snippet. */
  inputs?: AutomationConnectorSnippetInput[];
  /** The name of the snippet. */
  name?: string;
  /** The object type this snippet operates on. */
  objectType?: string | null;
  /** The role of the snippet. */
  role?: string | null;
};
type AutomationConnectorSnippetInput = {
  /** The help text for this input. */
  description?: string | null;
  /** The field type of the input. */
  fieldType?: string;
  /** The unique identifier of the snippet input. */
  id?: string;
  /** The display name (prompt) of the input. */
  name?: string;
  /** Indicates whether the input is optional. */
  optional?: boolean;
  /** The available options for this input. */
  options?: unknown | unknown[] | null;
};
type AutomationConnectorWebhookConfiguration = {
  /** Indicates whether the webhook is set up automatically. */
  automatic?: boolean;
  /** The available webhook events for this connector. */
  events?: AutomationConnectorWebhookEvent[];
  /** The unique identifier of the webhook configuration. */
  id?: string;
};
type AutomationConnectorWebhookEvent = {
  /** The description of the webhook event. */
  description?: string | null;
  /** An example of the payload this event produces. */
  exampleOutput?: unknown | (unknown | string | number | boolean)[] | string | null;
  /** The unique identifier of the webhook event. */
  id?: string;
  /** The name of the webhook event. */
  name?: string;
  /** The parameters available for this webhook event. */
  params?: AutomationConnectorWebhookEventParam[];
  /** The role of the webhook event. */
  role?: string;
};
type AutomationConnectorWebhookEventParam = {
  /** The unique identifier of the webhook event parameter. */
  id?: string;
  /** The name of the parameter. */
  name?: string;
  /** The available options for this parameter. */
  options?: string[];
  /** Indicates whether the parameter is required. */
  required?: boolean;
  /** The type of the parameter. */
  type?: string;
};
type AutomationConnectorsList = {
  data?: AutomationConnectorsListObject[];
  links?: Links;
};
type AutomationConnectorsListObject = {
  /** Indicates if the connector is billable. */
  billable?: boolean;
  /** The description of the automation connector. */
  description?: string | null;
  /** Indicates if the connector supports webhooks. */
  hasWebhooks?: boolean;
  readonly id?: string;
  /** The URL to the large logo of the connector. */
  logoLarge?: string | null;
  /** The URL to the medium logo of the connector. */
  logoMedium?: string | null;
  /** The URL to the small logo of the connector. */
  logoSmall?: string | null;
  /** The name of an automation connector. */
  name?: string;
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
  href?: string | null;
};
/**
 * Retrieves a list of automation connectors.
 *
 * @param query an object with query parameters
 * @throws GetAutomationConnectorsHttpError
 */
declare function getAutomationConnectors(query: {
  /** Pagination cursor returned from a previous request. */
  cursor?: string;
  /** Filters the result based on the specified criteria: name. */
  filter?: string;
  /** The number of automation connectors to retrieve. */
  limit?: number;
  /** The field to sort by, with +- prefix indicating sort order. (`?sort=-name` => sort on the `name` field using descending order). */
  sort?: "id" | "-id" | "+id" | "name" | "+name" | "-name";
}, options?: ApiCallOptions): Promise<GetAutomationConnectorsHttpResponse>;
type GetAutomationConnectorsHttpResponse = {
  data: AutomationConnectorsList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetAutomationConnectorsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetAutomationConnectorsHttpResponse>;
};
type GetAutomationConnectorsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Retrieves the full details of an automation connector, including its connection parameters, blocks, and snippets.
 *
 * @param connectorId The unique identifier of the automation connector.
 * @throws GetAutomationConnectorHttpError
 */
declare function getAutomationConnector(connectorId: string, options?: ApiCallOptions): Promise<GetAutomationConnectorHttpResponse>;
type GetAutomationConnectorHttpResponse = {
  data: AutomationConnectorDetail;
  headers: Headers;
  status: 200;
};
type GetAutomationConnectorHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Retrieves the webhook configuration for an automation connector, including its events and event parameters.
 *
 * @param connectorId The unique identifier of the automation connector.
 * @throws GetAutomationConnectorWebhooksConfigurationHttpError
 */
declare function getAutomationConnectorWebhooksConfiguration(connectorId: string, options?: ApiCallOptions): Promise<GetAutomationConnectorWebhooksConfigurationHttpResponse>;
type GetAutomationConnectorWebhooksConfigurationHttpResponse = {
  data: AutomationConnectorWebhookConfiguration;
  headers: Headers;
  status: 200;
};
type GetAutomationConnectorWebhooksConfigurationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Clears the cache for workflows/automation-connectors api requests.
 */
declare function clearCache(): void;
type AutomationConnectorsAPI = {
  /**
   * Retrieves a list of automation connectors.
   *
   * @param query an object with query parameters
   * @throws GetAutomationConnectorsHttpError
   */
  getAutomationConnectors: typeof getAutomationConnectors;
  /**
   * Retrieves the full details of an automation connector, including its connection parameters, blocks, and snippets.
   *
   * @param connectorId The unique identifier of the automation connector.
   * @throws GetAutomationConnectorHttpError
   */
  getAutomationConnector: typeof getAutomationConnector;
  /**
   * Retrieves the webhook configuration for an automation connector, including its events and event parameters.
   *
   * @param connectorId The unique identifier of the automation connector.
   * @throws GetAutomationConnectorWebhooksConfigurationHttpError
   */
  getAutomationConnectorWebhooksConfiguration: typeof getAutomationConnectorWebhooksConfiguration;
  /**
   * Clears the cache for automation-connectors api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the automation-connectors api
 */
declare const automationConnectorsExport: AutomationConnectorsAPI;
//#endregion
export { AutomationConnectorBlock, AutomationConnectorDetail, AutomationConnectorParam, AutomationConnectorSnippet, AutomationConnectorSnippetInput, AutomationConnectorWebhookConfiguration, AutomationConnectorWebhookEvent, AutomationConnectorWebhookEventParam, AutomationConnectorsAPI, AutomationConnectorsList, AutomationConnectorsListObject, Error, ErrorResponse, GetAutomationConnectorHttpError, GetAutomationConnectorHttpResponse, GetAutomationConnectorWebhooksConfigurationHttpError, GetAutomationConnectorWebhooksConfigurationHttpResponse, GetAutomationConnectorsHttpError, GetAutomationConnectorsHttpResponse, Links, PaginationLink, clearCache, automationConnectorsExport as default, getAutomationConnector, getAutomationConnectorWebhooksConfiguration, getAutomationConnectors, automation_connectors_d_exports as t };