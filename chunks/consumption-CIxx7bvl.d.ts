import { y as ApiCallOptions } from "./auth-types-CJNqN_zp.js";

//#region src/public/rest/consumption.d.ts
type Enforcement = {
  /** Resource action type to be blocked */
  actionToBlock?: string;
  /** Resource type to be blocked */
  resourceType?: string;
};
/**
 * @example
 * {
 *   errors: [
 *     {
 *       code: "HTTP-123",
 *       title: "short error message"
 *     }
 *   ],
 *   traceId: "7975401f3954aa47"
 * }
 */
type ErrorResponse = {
  errors?: SingleErrorResponse[];
  traceId?: string;
};
type ExecutionResponse = {
  blocked?: boolean;
  /** RFC3339 timestamp when a block event was last emitted for this execution. */
  blockedEventTime?: string;
  /** The capacity limit. */
  capacityLimit?: number;
  closeToOverage?: boolean;
  /** The id of the consumption report */
  consumptionReportId?: string;
  /** The field to determine if a resource should be visible on the client. */
  customerFacing?: boolean;
  /** Contains a list of resources that are blocked when quota for this is reached. */
  enforcement?: Enforcement[];
  /** The global usage. */
  globalUsage?: number;
  /** The guardrail limit. */
  guardrailLimit?: number;
  /** The local usage. */
  localUsage?: number;
  overage?: boolean;
  /** RFC3339 timestamp when a overage event was last emitted for this execution. */
  overageEventTime?: string;
  /** The end of the associated period. */
  periodEnd?: string;
  /** The start of the associated period. */
  periodStart?: string;
  periodType?: "day" | "month" | "year" | "" | "fixed" | "minute";
  /** The resource action. */
  resourceAction?: "report.generated" | "reload" | "scheduledReload" | "executed" | "aggregation" | "import" | "updated" | "deployed" | "3rd_party_executed" | "standard_executed";
  /** The resource id. */
  resourceId?: string;
  /** The resource type. */
  resourceType?: "app" | "automations" | "space" | "data.volume.consumption";
  scope?: ("user" | "tenant" | "resourceId" | "resourceType" | "resourceAction")[];
  /** The map to the resource scope. */
  scopeMapping?: string;
  segments?: Record<string, unknown>[];
  /** The resource task description. */
  taskDescription?: string;
  /** The resource task name. */
  taskName?: string;
  /** The tenant id. */
  tenantId?: string;
  /** Unit of measurement for the resource consumption */
  unit?: string;
  /** The RFC3339 timestamp when the resource was updated. */
  updateTime?: string;
  /** The user id. */
  userId?: string;
};
type ExecutionsByTenantList = StandardListResponseProps & {
  closeToOverage?: boolean;
  data?: ExecutionResponse[];
  globalUsageAvailable?: boolean;
  links?: ListLinks;
  overage?: boolean;
};
type ListLinks = {
  next?: Page;
  prev?: Page;
  /** Object with Href to a particular element or set of elements */
  self?: Self;
};
type Page = {
  /** URL to particular set of elements */
  href?: string;
  /** Page unique token */
  token?: string;
  /** Page type, can be next or prev */
  type?: "prev" | "next";
};
/**
 * Object with Href to a particular element or set of elements
 */
type Self = {
  href?: string;
};
type SingleErrorResponse = {
  /** Error code specific to usage-tracker. */
  readonly code?: string;
  /** Error cause. */
  readonly detail?: string;
  /** meta properties for an error. */
  meta?: unknown;
  /** Error title. */
  readonly title?: string;
};
/**
 * properties that should be added to every list response
 */
type StandardListResponseProps = {
  /** count of entries on the currently shown page */
  currentPageCount: number;
  /** total count of entries in the collection as a whole */
  totalCount: number;
};
/**
 * Retrieves the list of executions on an specific tenant
 *
 * @param query an object with query parameters
 * @throws GetConsumptionExecutionsHttpError
 */
declare function getConsumptionExecutions(query: {
  actionToBlock?: string;
  /** The advanced filtering to use for the query. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for the syntax.
   *
   * example `taskName eq "automation_run_ended" or taskName eq "report_triggered" or or taskName eq "dataVolumeAggregated"`
   *
   * The following fields are supported: `scope`, `resourcetype`, `resourceaction`, `resourceid`, `capacitylimit`,
   * `localusage`, `globalusage`, `overage`, `blocked`, `periodstart`, `periodend`, `consumptionreportid`, `blockedeventtime`,
   * `overageeventtime`, `taskname`, `taskdescription`, `userid`, `tenantid`, `customerfacing`, `actiontoblock` */
  filter?: string;
  /** Limit the returned result set */
  limit?: number;
  /** Offset for pagination - how many elements to skip */
  offset?: number;
  /** The cursor to the page of data. */
  page?: string;
  /** Specifies which periods to include regardless of the period type, start and end specified */
  periodsToInclude?: ("current" | "previous")[];
  sort?: ("periodstart" | "-periodstart" | "+periodstart" | "periodend" | "-periodend" | "+periodend")[];
}, options?: ApiCallOptions): Promise<GetConsumptionExecutionsHttpResponse>;
type GetConsumptionExecutionsHttpResponse = {
  data: ExecutionsByTenantList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetConsumptionExecutionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetConsumptionExecutionsHttpResponse>;
};
type GetConsumptionExecutionsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: number;
};
/**
 * Clears the cache for consumption api requests.
 */
declare function clearCache(): void;
type ConsumptionAPI = {
  /**
   * Retrieves the list of executions on an specific tenant
   *
   * @param query an object with query parameters
   * @throws GetConsumptionExecutionsHttpError
   */
  getConsumptionExecutions: typeof getConsumptionExecutions;
  /**
   * Clears the cache for consumption api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the consumption api
 */
declare const consumptionExport: ConsumptionAPI;
//#endregion
export { ExecutionsByTenantList as a, ListLinks as c, SingleErrorResponse as d, StandardListResponseProps as f, getConsumptionExecutions as h, ExecutionResponse as i, Page as l, consumptionExport as m, Enforcement as n, GetConsumptionExecutionsHttpError as o, clearCache as p, ErrorResponse as r, GetConsumptionExecutionsHttpResponse as s, ConsumptionAPI as t, Self as u };