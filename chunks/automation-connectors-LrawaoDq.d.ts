import { y as ApiCallOptions } from "./auth-types-CHOUViJI.js";

//#region src/public/rest/automation-connectors.d.ts
type AutomationConnectorsList = {
  data?: AutomationConnectorsListObject[];
  links?: Links;
};
type AutomationConnectorsListObject = {
  /** Indicates if the connector is billable. */
  billable?: boolean;
  readonly id?: string;
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
  href?: string;
};
/**
 * Retrieves a list of automation connectors.
 *
 * @param query an object with query parameters
 * @throws GetAutomationConnectorsHttpError
 */
declare function getAutomationConnectors(query: {
  /** Filters the result based on the specified criteria: name. */
  filter?: string;
  /** The number of automation connectors to retrieve. */
  limit?: number;
  /** The field to sort by, with +- prefix indicating sort order. (?sort=-name => sort on the name field using descending order) */
  sort?: "name" | "+name" | "-name";
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
 * Clears the cache for automation-connectors api requests.
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
   * Clears the cache for automation-connectors api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the automation-connectors api
 */
declare const automationConnectorsExport: AutomationConnectorsAPI;
//#endregion
export { ErrorResponse as a, Links as c, clearCache as d, getAutomationConnectors as f, Error as i, PaginationLink as l, AutomationConnectorsList as n, GetAutomationConnectorsHttpError as o, AutomationConnectorsListObject as r, GetAutomationConnectorsHttpResponse as s, AutomationConnectorsAPI as t, automationConnectorsExport as u };