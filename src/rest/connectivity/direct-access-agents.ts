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

export type ConfigurationLineBase = Record<string, unknown> & (ConfigurationLineNumeric | ConfigurationLineString);

/**
 * A configuration setting with a numeric value.
 */
export type ConfigurationLineNumeric = {
  /** `true` when the value is a list of values. */
  allowMultipleValues?: boolean;
  /** The operations allowed on the setting through this API: `Read`, `Write`. */
  apiActions?: ("Read" | "Write")[] | null;
  /** `true` when a change takes effect without restarting the agent. */
  applyWithoutRestart?: boolean;
  /** The connector or component the setting belongs to. */
  connector?: string | null;
  /** The default value, as a string. */
  defaultValue?: string | null;
  /** What the setting controls. */
  description?: string | null;
  /** The human-readable name of the setting. */
  displayName?: string | null;
  /** The configuration key. */
  name?: string | null;
  /** `true` when a new value was written but only applies after the agent restarts. */
  pendingApplication?: boolean;
  /** The value that applies after the restart, when `pendingApplication` is `true`. */
  pendingValue?: string | null;
  /** The highest permitted value. */
  permittedRangeEnd?: number;
  /** The lowest permitted value. */
  permittedRangeStart?: number;
  /** `true` when values are written without being validated against the permitted values. */
  skipValidation?: boolean;
  /** The operations allowed on the setting in the gateway UI: `Read`, `Write`. */
  uiActions?: ("Read" | "Write")[] | null;
  /** The current value, as a string. */
  value?: string | null;
};

/**
 * A configuration setting with a string value.
 */
export type ConfigurationLineString = {
  /** `true` when the value is a list of values. */
  allowMultipleValues?: boolean;
  /** The operations allowed on the setting through this API: `Read`, `Write`. */
  apiActions?: ("Read" | "Write")[] | null;
  /** `true` when a change takes effect without restarting the agent. */
  applyWithoutRestart?: boolean;
  /** The connector or component the setting belongs to. */
  connector?: string | null;
  /** The default value, as a string. */
  defaultValue?: string | null;
  /** What the setting controls. */
  description?: string | null;
  /** The human-readable name of the setting. */
  displayName?: string | null;
  /** The configuration key. */
  name?: string | null;
  /** `true` when a new value was written but only applies after the agent restarts. */
  pendingApplication?: boolean;
  /** The value that applies after the restart, when `pendingApplication` is `true`. */
  pendingValue?: string | null;
  /** The permitted values; empty when any value is accepted. */
  permittedValues?: string[] | null;
  /** `true` when values are written without being validated against the permitted values. */
  skipValidation?: boolean;
  /** The operations allowed on the setting in the gateway UI: `Read`, `Write`. */
  uiActions?: ("Read" | "Write")[] | null;
  /** The current value, as a string. */
  value?: string | null;
};

export type ConfigurationResponseWithGatewayMetadata = {
  connectorAgentSettings?: ConfigurationLineBase[] | null;
  connectors?: ConnectorSettings[] | null;
  dcaasSettings?: ConfigurationLineBase[] | null;
  /** The environment the gateway reports it runs in. */
  environment?: string | null;
  /** The Direct Access gateway product version. */
  productVersion?: string | null;
};

/**
 * The configuration settings of one connector.
 */
export type ConnectorSettings = {
  /** The connector name. */
  connectorName?: string | null;
  /** The connector's configuration settings. */
  settings?: ConfigurationLineBase[] | null;
};

/**
 * One error.
 */
export type ErrorMessage = {
  /** The error code, for example `HTTP-400` for a plain HTTP error or a `DirectAccess-<number>` code. */
  code?: string | null;
  /** Additional detail, when available. */
  detail?: string | null;
  /** A short description of the error. */
  title?: string | null;
};

/**
 * The error structure of this API.
 */
export type ErrorResponse = {
  /** The errors. */
  errors?: ErrorMessage[] | null;
  /** `true` when `errors` is not empty. */
  readonly hasErrors?: boolean;
  /** The trace ID of the request, when available. */
  traceId?: string | null;
};

/**
 * Contains a paginated collection of benchmark statuses for an agent.
 */
export type GetAllBenchmarkStatusResponse = {
  /** The items of this page. */
  data?: GetBenchmarkStatusResponse[] | null;
  /** The page size. */
  limit?: number;
  /** Pagination links. */
  links?: PaginationLinks;
  /** The page number, starting at 1. */
  page?: number;
  /** The total number of items over all pages. */
  totalCount?: number;
  /** The total number of pages. */
  totalPages?: number;
};

/**
 * Represents the status and performance data for a benchmark task.
 */
export type GetBenchmarkStatusResponse = {
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
  /** Contains throughput, latency, transfer volume, and transmission timing for a benchmark. Present only when the benchmark status is `Completed`; `null` before that. */
  results?: GetBenchmarkStatusResults;
  /** The originating schedule ID when the benchmark was triggered by a schedule */
  scheduleId?: string | null;
  /** The benchmark status */
  status?: string | null;
  /** Additional details about the benchmark status */
  statusMessage?: string | null;
  /** The total bytes requested to be transferred during the benchmark */
  totalBytesRequested?: number;
};

/**
 * Contains throughput, latency, transfer volume, and transmission timing for a benchmark. Present only when the benchmark status is `Completed`; `null` before that.
 */
export type GetBenchmarkStatusResults = {
  /** The average latency in ms measured on the connector side during data transmission. Null if no connector benchmark data is available. */
  connectorLatency?: number | null;
  /** The ISO 8601 formatted timestamp when data transmission completed */
  dataTransmissionEndTime?: string | null;
  /** The ISO 8601 formatted timestamp when data transmission started */
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
export type GetLoadPerformanceMetricsResponse = {
  /** The items of this page. */
  data?: LoadPerformanceMetric[] | null;
  /** The page size. */
  limit?: number;
  /** Pagination links. */
  links?: PaginationLinks;
  /** The page number, starting at 1. */
  page?: number;
  /** The total number of items over all pages. */
  totalCount?: number;
  /** The total number of pages. */
  totalPages?: number;
};

export type LinkResponseObject = {
  /** The URL to the related resource */
  href?: string | null;
};

/**
 * Represents performance data captured for a load processed by the gateway.
 */
export type LoadPerformanceMetric = {
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

/**
 * Pagination links.
 */
export type PaginationLinks = {
  next?: LinkResponseObject;
  prev?: LinkResponseObject;
  self?: LinkResponseObject;
};

/**
 * The accepted benchmark run.
 */
export type RunBenchmarkResponse = {
  /** The ID of the benchmark run, for the status and cancel operations. */
  benchmarkId?: string | null;
};

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Retrieves paginated statuses for benchmarks run by the specified Direct Access agent. Use the filters and sort order to find benchmark runs and review their progress or completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.17+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param query an object with query parameters
 * @throws GetDirectAccessAgentBenchmarksHttpError
 */
export async function getDirectAccessAgentBenchmarks(
  agentId: string,
  query: {
    /** SCIM filter (RFC 7644 section 3.4.2.2). Filterable attributes: `name`, `status`, `concurrentReloads`, `throughput`, `totalBytesTransferred`, `dataTransmissionStartTime`, `dataTransmissionEndTime`, `connectorLatency`, `benchmarkId`, `latency`, `totalBytesRequested`, `benchmarkStartTime`, `benchmarkEndTime`. Any other attribute is rejected with `400`. */
    filter?: string;
    /** The page size */
    limit?: number;
    /** The page number */
    page?: number;
    /** Sort field, with `-` for descending and `+` or no prefix for ascending. Fields: `benchmarkStartTime`, `benchmarkEndTime`, `dataTransmissionStartTime`, `dataTransmissionEndTime`. Default `-benchmarkStartTime`. */
    sort?:
      | "-benchmarkStartTime"
      | "+benchmarkStartTime"
      | "benchmarkStartTime"
      | "-benchmarkEndTime"
      | "+benchmarkEndTime"
      | "benchmarkEndTime"
      | "-dataTransmissionStartTime"
      | "+dataTransmissionStartTime"
      | "dataTransmissionStartTime"
      | "-dataTransmissionEndTime"
      | "+dataTransmissionEndTime"
      | "dataTransmissionEndTime";
  },
  options?: ApiCallOptions,
): Promise<GetDirectAccessAgentBenchmarksHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "get",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/benchmarks",
    pathVariables: { agentId },
    query,
    options,
  });
}

export type GetDirectAccessAgentBenchmarksHttpResponse = {
  data: GetAllBenchmarkStatusResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetDirectAccessAgentBenchmarksHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetDirectAccessAgentBenchmarksHttpResponse>;
};

export type GetDirectAccessAgentBenchmarksHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 429 | 500 | 501 | 503;
};

/**
 * Starts a background benchmark task that measures the throughput and latency of a Direct Access agent. Use the returned `benchmarkId` to monitor progress and retrieve performance metrics for capacity planning or performance optimization. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param query an object with query parameters
 * @throws CreateDirectAccessAgentBenchmarkHttpError
 */
export async function createDirectAccessAgentBenchmark(
  agentId: string,
  query: {
    /** The description for the benchmark task. */
    description?: string;
    /** Forces the benchmark to start regardless of the state of the agent. Does not override QCS resource limits. Use with caution. */
    force?: boolean;
    /** The volume of data in GB to transfer during the throughput measurement part of the benchmark. Must be between 1 and 20. */
    gigaBytesToTransfer?: number;
    /** The name to assign to the benchmark task. */
    name?: string;
  },
  options?: ApiCallOptions,
): Promise<CreateDirectAccessAgentBenchmarkHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "post",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/benchmarks",
    pathVariables: { agentId },
    query,
    options,
  });
}

export type CreateDirectAccessAgentBenchmarkHttpResponse = {
  data: RunBenchmarkResponse;
  headers: Headers;
  status: 201;
};

export type CreateDirectAccessAgentBenchmarkHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 429 | 500 | 501 | 503;
};

/**
 * Retrieves the connector agent configuration from the specified agent. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param query an object with query parameters
 * @throws GetDirectAccessAgentConfigurationsHttpError
 */
export async function getDirectAccessAgentConfigurations(
  agentId: string,
  query: {
    /** Individual properties within the agent configuration */
    queryProperties?: string[];
  },
  options?: ApiCallOptions,
): Promise<GetDirectAccessAgentConfigurationsHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "get",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/configurations",
    pathVariables: { agentId },
    query,
    options,
  });
}

export type GetDirectAccessAgentConfigurationsHttpResponse = {
  data: ConfigurationResponseWithGatewayMetadata;
  headers: Headers;
  status: 200;
};

export type GetDirectAccessAgentConfigurationsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};

/**
 * Retrieves performance metrics for loads processed by the gateway, either for all loads or a filtered subset. Use these metrics to evaluate reload throughput, connector latency, and concurrent reload activity. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Load performance recording is disabled by default and is controlled by the `BENCHMARK_LOAD_PERFORMANCE_METRICS_RECORDING_ENABLED` configuration property. Available in Direct Access Gateway V1.7.17+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param query an object with query parameters
 * @throws GetDirectAccessAgentLoadPerformanceMetricsHttpError
 */
export async function getDirectAccessAgentLoadPerformanceMetrics(
  agentId: string,
  query: {
    /** SCIM filter (RFC 7644 section 3.4.2.2). Filterable attributes: `name`, `status`, `concurrentReloads`, `throughput`, `totalBytesTransferred`, `dataTransmissionStartTime`, `dataTransmissionEndTime`, `connectorLatency`, `metricId`, `dataSourceId`, `dataSourceName`, `connectorUrl`, `reloadId`, `appId`, `benchmarkingReload`, `sessionAppLoad`, `approximateMaxConnectorThroughput`. Any other attribute is rejected with `400`. */
    filter?: string;
    /** The page size */
    limit?: number;
    /** The page number */
    page?: number;
    /** Sort field, with `-` for descending and `+` or no prefix for ascending. Fields: `dataTransmissionStartTime`, `dataTransmissionEndTime`; `benchmarkStartTime` and `benchmarkEndTime` are accepted as aliases of them. Default `-benchmarkStartTime`, that is `-dataTransmissionStartTime`. */
    sort?:
      | "-benchmarkStartTime"
      | "+benchmarkStartTime"
      | "benchmarkStartTime"
      | "-benchmarkEndTime"
      | "+benchmarkEndTime"
      | "benchmarkEndTime"
      | "-dataTransmissionStartTime"
      | "+dataTransmissionStartTime"
      | "dataTransmissionStartTime"
      | "-dataTransmissionEndTime"
      | "+dataTransmissionEndTime"
      | "dataTransmissionEndTime";
  },
  options?: ApiCallOptions,
): Promise<GetDirectAccessAgentLoadPerformanceMetricsHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "get",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/load-performance-metrics",
    pathVariables: { agentId },
    query,
    options,
  });
}

export type GetDirectAccessAgentLoadPerformanceMetricsHttpResponse = {
  data: GetLoadPerformanceMetricsResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetDirectAccessAgentLoadPerformanceMetricsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetDirectAccessAgentLoadPerformanceMetricsHttpResponse>;
};

export type GetDirectAccessAgentLoadPerformanceMetricsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 429 | 500 | 503;
};

/**
 * Clears the cache for connectivity/direct-access-agents api requests.
 */
export function clearCache() {
  return clearApiCache("connectivity/direct-access-agents");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type DirectAccessAgentsAPI = {
  /**
   * Retrieves paginated statuses for benchmarks run by the specified Direct Access agent. Use the filters and sort order to find benchmark runs and review their progress or completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.17+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param query an object with query parameters
   * @throws GetDirectAccessAgentBenchmarksHttpError
   */
  getDirectAccessAgentBenchmarks: typeof getDirectAccessAgentBenchmarks;
  /**
   * Starts a background benchmark task that measures the throughput and latency of a Direct Access agent. Use the returned `benchmarkId` to monitor progress and retrieve performance metrics for capacity planning or performance optimization. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param query an object with query parameters
   * @throws CreateDirectAccessAgentBenchmarkHttpError
   */
  createDirectAccessAgentBenchmark: typeof createDirectAccessAgentBenchmark;
  /**
   * Retrieves the connector agent configuration from the specified agent. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param query an object with query parameters
   * @throws GetDirectAccessAgentConfigurationsHttpError
   */
  getDirectAccessAgentConfigurations: typeof getDirectAccessAgentConfigurations;
  /**
   * Retrieves performance metrics for loads processed by the gateway, either for all loads or a filtered subset. Use these metrics to evaluate reload throughput, connector latency, and concurrent reload activity. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Load performance recording is disabled by default and is controlled by the `BENCHMARK_LOAD_PERFORMANCE_METRICS_RECORDING_ENABLED` configuration property. Available in Direct Access Gateway V1.7.17+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
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
const directAccessAgentsExport: DirectAccessAgentsAPI = {
  getDirectAccessAgentBenchmarks,
  createDirectAccessAgentBenchmark,
  getDirectAccessAgentConfigurations,
  getDirectAccessAgentLoadPerformanceMetrics,
  clearCache,
};
export default directAccessAgentsExport;
