import { D as PageCallOptions, x as ApiCallOptions } from "./auth-types-YxQFXW5F.js";
import "./invoke-fetch-BGcRWadc.js";
declare namespace direct_access_agents_d_exports {
  export { ConfigurationLineBase, ConfigurationLineNumeric, ConfigurationLineString, ConfigurationResponseWithGatewayMetadata, ConnectorSettings, CreateDirectAccessAgentBenchmarkHttpError, CreateDirectAccessAgentBenchmarkHttpResponse, DirectAccessAgentsAPI, ErrorMessage, ErrorResponse, GetAllBenchmarkStatusResponse, GetBenchmarkStatusResponse, GetBenchmarkStatusResults, GetDirectAccessAgentBenchmarksHttpError, GetDirectAccessAgentBenchmarksHttpResponse, GetDirectAccessAgentConfigurationsHttpError, GetDirectAccessAgentConfigurationsHttpResponse, GetDirectAccessAgentLoadPerformanceMetricsHttpError, GetDirectAccessAgentLoadPerformanceMetricsHttpResponse, GetLoadPerformanceMetricsResponse, LinkResponseObject, LoadPerformanceMetric, PaginationLinks, RunBenchmarkResponse, clearCache, createDirectAccessAgentBenchmark, directAccessAgentsExport as default, getDirectAccessAgentBenchmarks, getDirectAccessAgentConfigurations, getDirectAccessAgentLoadPerformanceMetrics };
}
type ConfigurationLineBase = ConfigurationLineNumeric | ConfigurationLineString;
type ConfigurationLineNumeric = {
  allowMultipleValues?: boolean;
  apiActions?: ("Read" | "Write")[] | null;
  applyWithoutRestart?: boolean;
  connector?: string | null;
  defaultValue?: string | null;
  description?: string | null;
  displayName?: string | null;
  name?: string | null;
  pendingApplication?: boolean;
  pendingValue?: string | null;
  permittedRangeEnd?: number;
  permittedRangeStart?: number;
  skipValidation?: boolean;
  uiActions?: ("Read" | "Write")[] | null;
  value?: string | null;
};
type ConfigurationLineString = {
  allowMultipleValues?: boolean;
  apiActions?: ("Read" | "Write")[] | null;
  applyWithoutRestart?: boolean;
  connector?: string | null;
  defaultValue?: string | null;
  description?: string | null;
  displayName?: string | null;
  name?: string | null;
  pendingApplication?: boolean;
  pendingValue?: string | null;
  permittedValues?: string[] | null;
  skipValidation?: boolean;
  uiActions?: ("Read" | "Write")[] | null;
  value?: string | null;
};
type ConfigurationResponseWithGatewayMetadata = {
  connectorAgentSettings?: ConfigurationLineBase[] | null;
  connectors?: ConnectorSettings[] | null;
  dcaasSettings?: ConfigurationLineBase[] | null;
  environment?: string | null;
  productVersion?: string | null;
};
type ConnectorSettings = {
  connectorName?: string | null;
  settings?: ConfigurationLineBase[] | null;
};
type ErrorMessage = {
  code?: string | null;
  detail?: string | null;
  title?: string | null;
};
type ErrorResponse = {
  errors?: ErrorMessage[] | null;
  readonly hasErrors?: boolean;
  traceId?: string | null;
};
/**
 * Contains a paginated collection of benchmark statuses for an agent.
 */
type GetAllBenchmarkStatusResponse = {
  data?: GetBenchmarkStatusResponse[] | null;
  limit?: number;
  links?: PaginationLinks;
  page?: number;
  totalCount?: number;
  totalPages?: number;
};
/**
 * Represents the status and performance data for a benchmark task.
 */
type GetBenchmarkStatusResponse = {
  /** The ISO 8601 formatted timestamp when the benchmark task completed or was cancelled */
  benchmarkEndTime?: string | null;
  /** The benchmark ID */
  benchmarkId?: string | null;
  /** The ISO 8601 formatted timestamp when the benchmark task started execution */
  benchmarkStartTime?: string | null;
  /** Number of concurrent benchmarks/reloads observed when this benchmark was started */
  concurrentReloads?: number;
  /** The ISO 8601 formatted timestamp when data generation completed */
  dataGenerationEndTime?: string | null;
  /** The ISO 8601 formatted timestamp when data generation started */
  dataGenerationStartTime?: string | null;
  /** The benchmark description */
  description?: string | null;
  /** The ISO 8601 formatted timestamp when get reload slot completed */
  getReloadSlotEndTime?: string | null;
  /** The ISO 8601 formatted timestamp when get reload slot started */
  getReloadSlotStartTime?: string | null;
  /** The benchmark name */
  name?: string | null;
  /** Contains throughput, latency, transfer volume, and transmission timing for a benchmark. */
  results?: GetBenchmarkStatusResults;
  /** The benchmark status */
  status?: string | null;
  /** Additional details about the benchmark status */
  statusMessage?: string | null;
  /** The total bytes requested to be transferred during the benchmark */
  totalBytesRequested?: number;
};
/**
 * Contains throughput, latency, transfer volume, and transmission timing for a benchmark.
 */
type GetBenchmarkStatusResults = {
  /** The average latency in ms measured on the connector side during data transmission. Null if no connector benchmark data is available. */
  connectorLatency?: number | null;
  /** The ISO 8601 formatted timestamp when data transmission completed */
  dataTransmissionEndTime?: string | null;
  /** The ISO 8601 formatted timestamp when data transmission start */
  dataTransmissionStartTime?: string | null;
  /** The latency in ms measured during data transmission */
  latency?: number;
  /** The data throughput in KB/s measured during data transmission */
  throughput?: number;
  /** The total number of bytes successfully transferred during data transmission */
  totalBytesTransferred?: number;
};
/**
 * Contains a paginated collection of load performance metrics for an agent.
 */
type GetLoadPerformanceMetricsResponse = {
  data?: LoadPerformanceMetric[] | null;
  limit?: number;
  links?: PaginationLinks;
  page?: number;
  totalCount?: number;
  totalPages?: number;
};
type LinkResponseObject = {
  /** The URL to the related resource */
  href?: string | null;
};
/**
 * Represents performance data captured for a load processed by the gateway.
 */
type LoadPerformanceMetric = {
  /** The app id associated with the reload */
  appId?: string | null;
  /** Approximation of the maximum connector throughput in KB/s, excluding downstream write time */
  approximateMaxConnectorThroughput?: number;
  /** A flag indicating whether this load is part of a benchmarking reload or not. */
  benchmarkingReload?: boolean;
  /** Number of concurrent benchmarks/reloads observed when this load was started */
  concurrentReloads?: number;
  /** The connector latency in ms measured during data transmission */
  connectorLatency?: number;
  /** The url of the connector */
  connectorUrl?: string | null;
  /** The data source id */
  dataSourceId?: string | null;
  /** The data source name */
  dataSourceName?: string | null;
  /** The ISO 8601 formatted timestamp when data transmission completed */
  dataTransmissionEndTime?: string | null;
  /** The ISO 8601 formatted timestamp when data transmission started */
  dataTransmissionStartTime?: string | null;
  /** A unique identifier generated for this metric */
  metricId?: string | null;
  /** The name of the load performance metric, typically in the format "reload-YYYY-MM-DDTHH:mm:ssK" */
  name?: string | null;
  /** The reload id that this load is a part of */
  reloadId?: string | null;
  /** A flag indicating whether this load is part of a session app load or not. */
  sessionAppLoad?: boolean;
  /** The load script statement for the load */
  statement?: string | null;
  /** The status of the load, e.g. "Completed", "Failed", "Cancelled" */
  status?: string | null;
  /** The data throughput in KB/s measured during data transmission */
  throughput?: number;
  /** The total bytes transferred during the load */
  totalBytesTransferred?: number;
};
type PaginationLinks = {
  next?: LinkResponseObject;
  prev?: LinkResponseObject;
  self?: LinkResponseObject;
};
type RunBenchmarkResponse = {
  benchmarkId?: string | null;
};
/**
 * Retrieves paginated statuses for benchmarks run by the specified Direct Access agent. Use the filters and sort order to find benchmark runs and review their progress or completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.17+.
 *
 * @param agentId The agent ID
 * @param query an object with query parameters
 * @throws GetDirectAccessAgentBenchmarksHttpError
 */
declare function getDirectAccessAgentBenchmarks(agentId: string, query: {
  /** SCIM style filter string as defined in RFC 7644 section 3.4.2.2 */
  filter?: string;
  /** The page size */
  limit?: number;
  /** The page number */
  page?: number;
  /** The field to sort by with +/- prefix indicating sort order */
  sort?: "-benchmarkStartTime" | "+benchmarkStartTime" | "benchmarkStartTime" | "-benchmarkEndTime" | "+benchmarkEndTime" | "benchmarkEndTime" | "-dataTransmissionStartTime" | "+dataTransmissionStartTime" | "dataTransmissionStartTime" | "-dataTransmissionEndTime" | "+dataTransmissionEndTime" | "dataTransmissionEndTime";
}, options?: ApiCallOptions): Promise<GetDirectAccessAgentBenchmarksHttpResponse>;
type GetDirectAccessAgentBenchmarksHttpResponse = {
  data: GetAllBenchmarkStatusResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetDirectAccessAgentBenchmarksHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetDirectAccessAgentBenchmarksHttpResponse>;
};
type GetDirectAccessAgentBenchmarksHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 429 | 500 | 501 | 503;
};
/**
 * Starts a background benchmark task that measures the throughput and latency of a Direct Access agent. Use the returned `benchmarkId` to monitor progress and retrieve performance metrics for capacity planning or performance optimization. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The agent ID
 * @param query an object with query parameters
 * @throws CreateDirectAccessAgentBenchmarkHttpError
 */
declare function createDirectAccessAgentBenchmark(agentId: string, query: {
  /** The description for the benchmark task. */
  description?: string;
  /** Forces the benchmark to start regardless of the state of the agent. Does not override QCS resource limits. Use with caution. */
  force?: boolean;
  /** The volume of data in GB to transfer during the throughput measurement part of the benchmark. */
  gigaBytesToTransfer?: number;
  /** The name to assign to the benchmark task. */
  name?: string;
}, options?: ApiCallOptions): Promise<CreateDirectAccessAgentBenchmarkHttpResponse>;
type CreateDirectAccessAgentBenchmarkHttpResponse = {
  data: RunBenchmarkResponse;
  headers: Headers;
  status: 201;
};
type CreateDirectAccessAgentBenchmarkHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 429 | 500 | 501 | 503;
};
/**
 * Retrieves the connector agent configuration from the specified agent. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
 *
 * @param agentId The agent ID
 * @param query an object with query parameters
 * @throws GetDirectAccessAgentConfigurationsHttpError
 */
declare function getDirectAccessAgentConfigurations(agentId: string, query: {
  /** Individual properties within the agent configuration */
  queryProperties?: string[];
}, options?: ApiCallOptions): Promise<GetDirectAccessAgentConfigurationsHttpResponse>;
type GetDirectAccessAgentConfigurationsHttpResponse = {
  data: ConfigurationResponseWithGatewayMetadata;
  headers: Headers;
  status: 200;
};
type GetDirectAccessAgentConfigurationsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 403 | 404;
};
/**
 * Retrieves performance metrics for loads processed by the gateway, either for all loads or a filtered subset. Use these metrics to evaluate reload throughput, connector latency, and concurrent reload activity. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Load performance recording is disabled by default and is controlled by the `BENCHMARK_LOAD_PERFORMANCE_METRICS_RECORDING_ENABLED` configuration property. Available in Direct Access Gateway V1.7.17+.
 *
 * @param agentId The agent ID
 * @param query an object with query parameters
 * @throws GetDirectAccessAgentLoadPerformanceMetricsHttpError
 */
declare function getDirectAccessAgentLoadPerformanceMetrics(agentId: string, query: {
  /** SCIM style filter string as defined in RFC 7644 section 3.4.2.2 */
  filter?: string;
  /** The page size */
  limit?: number;
  /** The page number */
  page?: number;
  /** The field to sort by with +/- prefix indicating sort order */
  sort?: "-benchmarkStartTime" | "+benchmarkStartTime" | "benchmarkStartTime" | "-benchmarkEndTime" | "+benchmarkEndTime" | "benchmarkEndTime" | "-dataTransmissionStartTime" | "+dataTransmissionStartTime" | "dataTransmissionStartTime" | "-dataTransmissionEndTime" | "+dataTransmissionEndTime" | "dataTransmissionEndTime";
}, options?: ApiCallOptions): Promise<GetDirectAccessAgentLoadPerformanceMetricsHttpResponse>;
type GetDirectAccessAgentLoadPerformanceMetricsHttpResponse = {
  data: GetLoadPerformanceMetricsResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetDirectAccessAgentLoadPerformanceMetricsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetDirectAccessAgentLoadPerformanceMetricsHttpResponse>;
};
type GetDirectAccessAgentLoadPerformanceMetricsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 429 | 500 | 503;
};
/**
 * Clears the cache for connectivity/direct-access-agents api requests.
 */
declare function clearCache(): void;
type DirectAccessAgentsAPI = {
  /**
   * Retrieves paginated statuses for benchmarks run by the specified Direct Access agent. Use the filters and sort order to find benchmark runs and review their progress or completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.17+.
   *
   * @param agentId The agent ID
   * @param query an object with query parameters
   * @throws GetDirectAccessAgentBenchmarksHttpError
   */
  getDirectAccessAgentBenchmarks: typeof getDirectAccessAgentBenchmarks;
  /**
   * Starts a background benchmark task that measures the throughput and latency of a Direct Access agent. Use the returned `benchmarkId` to monitor progress and retrieve performance metrics for capacity planning or performance optimization. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The agent ID
   * @param query an object with query parameters
   * @throws CreateDirectAccessAgentBenchmarkHttpError
   */
  createDirectAccessAgentBenchmark: typeof createDirectAccessAgentBenchmark;
  /**
   * Retrieves the connector agent configuration from the specified agent. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
   *
   * @param agentId The agent ID
   * @param query an object with query parameters
   * @throws GetDirectAccessAgentConfigurationsHttpError
   */
  getDirectAccessAgentConfigurations: typeof getDirectAccessAgentConfigurations;
  /**
   * Retrieves performance metrics for loads processed by the gateway, either for all loads or a filtered subset. Use these metrics to evaluate reload throughput, connector latency, and concurrent reload activity. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Load performance recording is disabled by default and is controlled by the `BENCHMARK_LOAD_PERFORMANCE_METRICS_RECORDING_ENABLED` configuration property. Available in Direct Access Gateway V1.7.17+.
   *
   * @param agentId The agent ID
   * @param query an object with query parameters
   * @throws GetDirectAccessAgentLoadPerformanceMetricsHttpError
   */
  getDirectAccessAgentLoadPerformanceMetrics: typeof getDirectAccessAgentLoadPerformanceMetrics;
  /**
   * Clears the cache for direct-access-agents api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the direct-access-agents api
 */
declare const directAccessAgentsExport: DirectAccessAgentsAPI;
export { getDirectAccessAgentConfigurations as A, PaginationLinks as C, directAccessAgentsExport as D, createDirectAccessAgentBenchmark as E, direct_access_agents_d_exports as O, LoadPerformanceMetric as S, clearCache as T, GetDirectAccessAgentConfigurationsHttpResponse as _, ConnectorSettings as a, GetLoadPerformanceMetricsResponse as b, DirectAccessAgentsAPI as c, GetAllBenchmarkStatusResponse as d, GetBenchmarkStatusResponse as f, GetDirectAccessAgentConfigurationsHttpError as g, GetDirectAccessAgentBenchmarksHttpResponse as h, ConfigurationResponseWithGatewayMetadata as i, getDirectAccessAgentLoadPerformanceMetrics as j, getDirectAccessAgentBenchmarks as k, ErrorMessage as l, GetDirectAccessAgentBenchmarksHttpError as m, ConfigurationLineNumeric as n, CreateDirectAccessAgentBenchmarkHttpError as o, GetBenchmarkStatusResults as p, ConfigurationLineString as r, CreateDirectAccessAgentBenchmarkHttpResponse as s, ConfigurationLineBase as t, ErrorResponse as u, GetDirectAccessAgentLoadPerformanceMetricsHttpError as v, RunBenchmarkResponse as w, LinkResponseObject as x, GetDirectAccessAgentLoadPerformanceMetricsHttpResponse as y };