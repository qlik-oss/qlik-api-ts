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
 * The accepted cancellation.
 */
export type CancelBenchmarkResponse = {
  /** Confirmation text for the cancellation request. */
  message?: string | null;
  statusUrl?: LinkResponseObject;
};

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

export type ConnectorFlatFileConfigurationResponse = {
  /** The error structure of this API. */
  errorMessage?: ErrorResponse;
  /** The file contents. */
  result?: string[] | null;
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

export type FileConnectorAllowedPath = {
  /** The Path property in the File connector allowed paths file. */
  path: string;
  /** The Spaces property in the File connector allowed paths file. */
  spaces?: string[] | null;
};

export type FileConnectorAllowedPathsResponse = {
  /** The error structure of this API. */
  errorMessage?: ErrorResponse;
  /** The file contents. */
  result?: FileConnectorAllowedPath[] | null;
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

export type MetricsCollectorConnectorConfigurationApiResponse = {
  /** Indicates whether metrics collection is enabled for this connector. */
  metricsCollectionEnabled: boolean;
  /** Frequency in seconds at which metrics are collected from this connector. */
  scrapeIntervalSeconds: number;
};

/**
 * The scrape configuration per connector.
 */
export type MetricsCollectorConnectorConfigurationsApiResponse = {
  connectorAgent?: MetricsCollectorConnectorConfigurationApiResponse;
  fileConnector?: MetricsCollectorConnectorConfigurationApiResponse;
  odbcConnector?: MetricsCollectorConnectorConfigurationApiResponse;
  restConnector?: MetricsCollectorConnectorConfigurationApiResponse;
  sapBwConnector?: MetricsCollectorConnectorConfigurationApiResponse;
  sapPackageConnector?: MetricsCollectorConnectorConfigurationApiResponse;
  sapSqlConnector?: MetricsCollectorConnectorConfigurationApiResponse;
  systemMetrics?: MetricsCollectorConnectorConfigurationApiResponse;
};

export type MetricsCollectorIndividualConnectorConfigurationRequest = {
  /** Indicates whether metrics collection is enabled for this connector. */
  metricsCollectionEnabled: boolean;
  /** Frequency in seconds at which metrics are collected from this connector. */
  scrapeIntervalSeconds: number;
};

export type MetricsCollectorSettings = {
  /** The base interval in seconds for the metrics collection loop.
   * This defines how frequently the collector checks whether to scrape each connector, not the interval at which each connector is scraped. Must be equal to or less than the lowest individual connector scrape interval. */
  baseScrapeIntervalSeconds: number;
  /** The interval in minutes the metrics collector checks for and deletes old data. */
  dataRetentionCheckIntervalMinutes: number;
  /** Indicates whether the metrics collector is enabled. */
  enabled: boolean;
  /** The maximum size of the local database in megabytes. */
  localDataRetentionDatabaseSizeInMb?: number;
  /** The number of days to retain local data. */
  localDataRetentionDays: number;
  /** The file location for the local metrics database. When empty, the default applies: `%ProgramData%\Qlik\Gateway\tmp` on Windows, `/usr/share/Qlik/Gateway/tmp` in the containerized gateway. */
  localDatabaseFileLocation?: string | null;
  /** The port number that the metrics collector API will run on.
   * This must match the port that the SYSTEM connector runs on to enable network metrics collection. */
  port: number;
};

/**
 * The metrics collector configuration of the gateway.
 */
export type MetricsCollectorSettingsApiResponse = {
  /** The scrape configuration per connector. */
  connectorConfigurations?: MetricsCollectorConnectorConfigurationsApiResponse;
  metricsCollectorSettings?: MetricsCollectorSettings;
};

export type MetricsCollectorSettingsApiResponseConnectorConfigurationResponse = {
  /** The error structure of this API. */
  errorMessage?: ErrorResponse;
  /** The metrics collector configuration of the gateway. */
  result?: MetricsCollectorSettingsApiResponse;
};

export type OdbcCustomDataType = {
  /** The IsBit property in the ODBC custom data type mapping file. */
  bit?: boolean;
  /** The Identifier property in the ODBC custom data type mapping file. */
  id: string;
  /** The NativeDataType property in the ODBC custom data type mapping file. */
  nativeDataType: string;
  /** The QlikDataType property in the ODBC custom data type mapping file. */
  qlikDataType: string;
  /** The Size property in the ODBC custom data type mapping file. */
  size?: number;
};

export type OdbcCustomDataTypeResponse = {
  /** The error structure of this API. */
  errorMessage?: ErrorResponse;
  /** The file contents. */
  result?: OdbcCustomDataType[] | null;
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

/**
 * The request to update a connector flat file
 */
export type UpdateConfigurationFlatFileRequest = {
  /** The lines to write, in order; they replace the whole file. */
  contentsToSave?: string[] | null;
};

/**
 * The request to update file connector allowed paths configuration
 */
export type UpdateFileConnectorAllowedPathsRequest = {
  /** The allowed paths; they replace the whole file. */
  fileConnectorAllowedPaths?: FileConnectorAllowedPath[] | null;
};

export type UpdateMetricsCollectorConnectorConfigurationsRequest = {
  connectorAgent: MetricsCollectorIndividualConnectorConfigurationRequest;
  fileConnector: MetricsCollectorIndividualConnectorConfigurationRequest;
  odbcConnector: MetricsCollectorIndividualConnectorConfigurationRequest;
  restConnector: MetricsCollectorIndividualConnectorConfigurationRequest;
  sapBwConnector: MetricsCollectorIndividualConnectorConfigurationRequest;
  sapPackageConnector: MetricsCollectorIndividualConnectorConfigurationRequest;
  sapSqlConnector: MetricsCollectorIndividualConnectorConfigurationRequest;
  systemMetrics: MetricsCollectorIndividualConnectorConfigurationRequest;
};

export type UpdateMetricsCollectorSettings = {
  /** The base interval in seconds for the metrics collection loop.
   * This defines how frequently the collector checks whether to scrape each connector, not the interval at which each connector is scraped. Must be equal to or less than the lowest individual connector scrape interval. */
  baseScrapeIntervalSeconds: number;
  /** The interval in minutes the metrics collector checks for and deletes old data. */
  dataRetentionCheckIntervalMinutes: number;
  /** Indicates whether the metrics collector is enabled. Required; a request without it is rejected with `400`. */
  enabled: boolean;
  /** The maximum size of the local database in megabytes. Optional; 500 MB when omitted. */
  localDataRetentionDatabaseSizeInMb?: number;
  /** The number of days to retain local data. */
  localDataRetentionDays: number;
  /** The file location for the local metrics database. Required; an empty string keeps the default location: `%ProgramData%\Qlik\Gateway\tmp` on Windows, `/usr/share/Qlik/Gateway/tmp` in the containerized gateway. */
  localDatabaseFileLocation: string;
  /** The port number that the metrics collector API will run on.
   * This must match the port that the SYSTEM connector runs on to enable network metrics collection. */
  port: number;
};

export type UpdateMetricsCollectorSettingsRequest = {
  connectorConfigurations: UpdateMetricsCollectorConnectorConfigurationsRequest;
  metricsCollectorSettings: UpdateMetricsCollectorSettings;
};

export type UpdateOdbcCustomTypeMappingsRequest = {
  /** The custom data type mappings; they replace the whole file. */
  odbcCustomDataTypes?: OdbcCustomDataType[] | null;
};

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Restarts the specified agent. The `restart` action is rejected with `409` while a reload is in `RELOADING` status. The `force-restart` action cancels the active reloads and restarts the agent. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param agentAction The type of action to perform. Permitted values are `restart` (rejected with `409` while a reload is in `RELOADING` status) and `force-restart` (cancels the active reloads and restarts the agent).
 * @throws PostDirectAccessAgent_FIX_THIS_QUIRKY_NAMEHttpError
 */
export async function postDirectAccessAgent_FIX_THIS_QUIRKY_NAME(
  agentId: string,
  agentAction: string,
  options?: ApiCallOptions,
): Promise<PostDirectAccessAgent_FIX_THIS_QUIRKY_NAMEHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "post",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/actions/{agentAction}",
    pathVariables: { agentId, agentAction },
    options,
  });
}

export type PostDirectAccessAgent_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type PostDirectAccessAgent_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 405 | 409 | 500;
};

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
 * Retrieves the current status, progress, and performance metrics for a benchmark task. Use this operation to monitor a running benchmark or inspect its completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param benchmarkId The benchmark ID
 * @throws GetDirectAccessAgentBenchmarkHttpError
 */
export async function getDirectAccessAgentBenchmark(
  agentId: string,
  benchmarkId: string,
  options?: ApiCallOptions,
): Promise<GetDirectAccessAgentBenchmarkHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "get",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/benchmarks/{benchmarkId}",
    pathVariables: { agentId, benchmarkId },
    options,
  });
}

export type GetDirectAccessAgentBenchmarkHttpResponse = {
  data: GetBenchmarkStatusResponse;
  headers: Headers;
  status: 200;
};

export type GetDirectAccessAgentBenchmarkHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 429 | 500 | 503;
};

/**
 * Requests cancellation of a running benchmark for the specified agent. The request is asynchronous. Use the returned status URL to monitor when cancellation completes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param benchmarkId The benchmark ID
 * @throws CreateDirectAccessAgentBenchmarkCancelHttpError
 */
export async function createDirectAccessAgentBenchmarkCancel(
  agentId: string,
  benchmarkId: string,
  options?: ApiCallOptions,
): Promise<CreateDirectAccessAgentBenchmarkCancelHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "post",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/benchmarks/{benchmarkId}/cancel",
    pathVariables: { agentId, benchmarkId },
    options,
  });
}

export type CreateDirectAccessAgentBenchmarkCancelHttpResponse = {
  data: CancelBenchmarkResponse;
  headers: Headers;
  status: 202;
};

export type CreateDirectAccessAgentBenchmarkCancelHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 429 | 500 | 503;
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
 * Retrieves the allowed paths settings for the File Connector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.6+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @throws GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAMEHttpError
 */
export async function getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAME(
  agentId: string,
  options?: ApiCallOptions,
): Promise<GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAMEHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "get",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/connectors/file-connector/files/allowed-paths",
    pathVariables: { agentId },
    options,
  });
}

export type GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: FileConnectorAllowedPathsResponse;
  headers: Headers;
  status: 200;
};

export type GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};

/**
 * Completely replaces the contents of the allowed paths configuration file for the File Connector. Partial updates are not supported. Omitting `fileConnectorAllowedPaths` or sending `null` is treated as an empty list and clears the file. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.6+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param body an object with the body content
 * @throws PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAMEHttpError
 */
export async function putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAME(
  agentId: string,
  body: UpdateFileConnectorAllowedPathsRequest,
  options?: ApiCallOptions,
): Promise<PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAMEHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "put",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/connectors/file-connector/files/allowed-paths",
    pathVariables: { agentId },
    body,
    contentType: "application/json",
    options,
  });
}

export type PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 500;
};

/**
 * Retrieves the custom data type mapping settings for the Generic ODBC Connector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.5+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @throws GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAMEHttpError
 */
export async function getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAME(
  agentId: string,
  options?: ApiCallOptions,
): Promise<GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAMEHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "get",
    pathTemplate:
      "/api/connectivity/direct-access-agents/{agentId}/connectors/odbc-connector/files/custom-data-type-mappings",
    pathVariables: { agentId },
    options,
  });
}

export type GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: OdbcCustomDataTypeResponse;
  headers: Headers;
  status: 200;
};

export type GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};

/**
 * Completely replaces the contents of the custom data type mapping configuration file for the Generic ODBC connector. Partial updates are not supported. Omitting `odbcCustomDataTypes` or sending `null` is treated as an empty list and clears the file. There are property naming differences between the API and the file contents. Use the API property format when making changes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.5+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param body an object with the body content
 * @throws PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAMEHttpError
 */
export async function putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAME(
  agentId: string,
  body: UpdateOdbcCustomTypeMappingsRequest,
  options?: ApiCallOptions,
): Promise<PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAMEHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "put",
    pathTemplate:
      "/api/connectivity/direct-access-agents/{agentId}/connectors/odbc-connector/files/custom-data-type-mappings",
    pathVariables: { agentId },
    body,
    contentType: "application/json",
    options,
  });
}

export type PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 500;
};

/**
 * Lists the configuration files of the connector: `file-connector`: `plain-text-configuration`, `allowed-paths`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`; `odbc-connector`: `allowed-drivers`, `allowed-dsns`, `custom-data-type-mappings`. `plain-text-configuration` and `custom-allowed-extensions` are read and written as raw lines through `connectors/{connectorType}/files/{fileType}`; the other files have dedicated typed operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param connectorType The connector to retrieve the list of files for
 * @throws GetDirectAccessAgentConnectorFilesHttpError
 */
export async function getDirectAccessAgentConnectorFiles(
  agentId: string,
  connectorType: string,
  options?: ApiCallOptions,
): Promise<GetDirectAccessAgentConnectorFilesHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "get",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/connectors/{connectorType}/files",
    pathVariables: { agentId, connectorType },
    options,
  });
}

export type GetDirectAccessAgentConnectorFilesHttpResponse = {
  data: ConnectorFlatFileConfigurationResponse;
  headers: Headers;
  status: 200;
};

export type GetDirectAccessAgentConnectorFilesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};

/**
 * Retrieves the configuration items in the flat file for the specified connector, as raw lines. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param connectorType The connector type to retrieve
 * @param fileType The type of file to retrieve. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
 * @throws GetDirectAccessAgentConnectorFileHttpError
 */
export async function getDirectAccessAgentConnectorFile(
  agentId: string,
  connectorType: string,
  fileType: string,
  options?: ApiCallOptions,
): Promise<GetDirectAccessAgentConnectorFileHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "get",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/connectors/{connectorType}/files/{fileType}",
    pathVariables: { agentId, connectorType, fileType },
    options,
  });
}

export type GetDirectAccessAgentConnectorFileHttpResponse = {
  data: ConnectorFlatFileConfigurationResponse;
  headers: Headers;
  status: 200;
};

export type GetDirectAccessAgentConnectorFileHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};

/**
 * Completely replaces the contents of the connector's configuration file with the given raw lines. Partial updates are not supported. Omitting `contentsToSave` or sending `null` is treated as an empty list and clears the file. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param connectorType The connector type to update
 * @param fileType The file type to update. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
 * @param body an object with the body content
 * @throws UpdateDirectAccessAgentConnectorFileHttpError
 */
export async function updateDirectAccessAgentConnectorFile(
  agentId: string,
  connectorType: string,
  fileType: string,
  body: UpdateConfigurationFlatFileRequest,
  options?: ApiCallOptions,
): Promise<UpdateDirectAccessAgentConnectorFileHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "put",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/connectors/{connectorType}/files/{fileType}",
    pathVariables: { agentId, connectorType, fileType },
    body,
    contentType: "application/json",
    options,
  });
}

export type UpdateDirectAccessAgentConnectorFileHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type UpdateDirectAccessAgentConnectorFileHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 500;
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
 * Retrieves the settings for the metrics collector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.9+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @throws GetDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAMEHttpError
 */
export async function getDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAME(
  agentId: string,
  options?: ApiCallOptions,
): Promise<GetDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAMEHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "get",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/tools/metrics-collector/configuration",
    pathVariables: { agentId },
    options,
  });
}

export type GetDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: MetricsCollectorSettingsApiResponseConnectorConfigurationResponse;
  headers: Headers;
  status: 200;
};

export type GetDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};

/**
 * Completely replaces the contents of the metrics collector settings configuration file. Partial updates are not supported. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.9+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param body an object with the body content
 * @throws PutDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAMEHttpError
 */
export async function putDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAME(
  agentId: string,
  body: UpdateMetricsCollectorSettingsRequest,
  options?: ApiCallOptions,
): Promise<PutDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAMEHttpResponse> {
  return invokeFetch("connectivity/direct-access-agents", {
    method: "put",
    pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/tools/metrics-collector/configuration",
    pathVariables: { agentId },
    body,
    contentType: "application/json",
    options,
  });
}

export type PutDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAMEHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type PutDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAMEHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 500;
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
   * Restarts the specified agent. The `restart` action is rejected with `409` while a reload is in `RELOADING` status. The `force-restart` action cancels the active reloads and restarts the agent. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param agentAction The type of action to perform. Permitted values are `restart` (rejected with `409` while a reload is in `RELOADING` status) and `force-restart` (cancels the active reloads and restarts the agent).
   * @throws PostDirectAccessAgent_FIX_THIS_QUIRKY_NAMEHttpError
   */
  postDirectAccessAgent_FIX_THIS_QUIRKY_NAME: typeof postDirectAccessAgent_FIX_THIS_QUIRKY_NAME;
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
   * Retrieves the current status, progress, and performance metrics for a benchmark task. Use this operation to monitor a running benchmark or inspect its completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param benchmarkId The benchmark ID
   * @throws GetDirectAccessAgentBenchmarkHttpError
   */
  getDirectAccessAgentBenchmark: typeof getDirectAccessAgentBenchmark;
  /**
   * Requests cancellation of a running benchmark for the specified agent. The request is asynchronous. Use the returned status URL to monitor when cancellation completes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param benchmarkId The benchmark ID
   * @throws CreateDirectAccessAgentBenchmarkCancelHttpError
   */
  createDirectAccessAgentBenchmarkCancel: typeof createDirectAccessAgentBenchmarkCancel;
  /**
   * Retrieves the connector agent configuration from the specified agent. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param query an object with query parameters
   * @throws GetDirectAccessAgentConfigurationsHttpError
   */
  getDirectAccessAgentConfigurations: typeof getDirectAccessAgentConfigurations;
  /**
   * Retrieves the allowed paths settings for the File Connector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.6+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @throws GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAME: typeof getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAME;
  /**
   * Completely replaces the contents of the allowed paths configuration file for the File Connector. Partial updates are not supported. Omitting `fileConnectorAllowedPaths` or sending `null` is treated as an empty list and clears the file. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.6+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param body an object with the body content
   * @throws PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAMEHttpError
   */
  putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAME: typeof putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAME;
  /**
   * Retrieves the custom data type mapping settings for the Generic ODBC Connector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.5+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @throws GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAME: typeof getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAME;
  /**
   * Completely replaces the contents of the custom data type mapping configuration file for the Generic ODBC connector. Partial updates are not supported. Omitting `odbcCustomDataTypes` or sending `null` is treated as an empty list and clears the file. There are property naming differences between the API and the file contents. Use the API property format when making changes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.5+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param body an object with the body content
   * @throws PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAMEHttpError
   */
  putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAME: typeof putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAME;
  /**
   * Lists the configuration files of the connector: `file-connector`: `plain-text-configuration`, `allowed-paths`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`; `odbc-connector`: `allowed-drivers`, `allowed-dsns`, `custom-data-type-mappings`. `plain-text-configuration` and `custom-allowed-extensions` are read and written as raw lines through `connectors/{connectorType}/files/{fileType}`; the other files have dedicated typed operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param connectorType The connector to retrieve the list of files for
   * @throws GetDirectAccessAgentConnectorFilesHttpError
   */
  getDirectAccessAgentConnectorFiles: typeof getDirectAccessAgentConnectorFiles;
  /**
   * Retrieves the configuration items in the flat file for the specified connector, as raw lines. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param connectorType The connector type to retrieve
   * @param fileType The type of file to retrieve. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
   * @throws GetDirectAccessAgentConnectorFileHttpError
   */
  getDirectAccessAgentConnectorFile: typeof getDirectAccessAgentConnectorFile;
  /**
   * Completely replaces the contents of the connector's configuration file with the given raw lines. Partial updates are not supported. Omitting `contentsToSave` or sending `null` is treated as an empty list and clears the file. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param connectorType The connector type to update
   * @param fileType The file type to update. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
   * @param body an object with the body content
   * @throws UpdateDirectAccessAgentConnectorFileHttpError
   */
  updateDirectAccessAgentConnectorFile: typeof updateDirectAccessAgentConnectorFile;
  /**
   * Retrieves performance metrics for loads processed by the gateway, either for all loads or a filtered subset. Use these metrics to evaluate reload throughput, connector latency, and concurrent reload activity. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Load performance recording is disabled by default and is controlled by the `BENCHMARK_LOAD_PERFORMANCE_METRICS_RECORDING_ENABLED` configuration property. Available in Direct Access Gateway V1.7.17+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param query an object with query parameters
   * @throws GetDirectAccessAgentLoadPerformanceMetricsHttpError
   */
  getDirectAccessAgentLoadPerformanceMetrics: typeof getDirectAccessAgentLoadPerformanceMetrics;
  /**
   * Retrieves the settings for the metrics collector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.9+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @throws GetDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAMEHttpError
   */
  getDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAME: typeof getDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAME;
  /**
   * Completely replaces the contents of the metrics collector settings configuration file. Partial updates are not supported. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.9+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param body an object with the body content
   * @throws PutDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAMEHttpError
   */
  putDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAME: typeof putDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAME;
  /**
   * Clears the cache for direct-access-agents api requests.
   */
  clearCache: typeof clearCache;
};

/**
 * Functions for the direct-access-agents api
 */
const directAccessAgentsExport: DirectAccessAgentsAPI = {
  postDirectAccessAgent_FIX_THIS_QUIRKY_NAME,
  getDirectAccessAgentBenchmarks,
  createDirectAccessAgentBenchmark,
  getDirectAccessAgentBenchmark,
  createDirectAccessAgentBenchmarkCancel,
  getDirectAccessAgentConfigurations,
  getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAME,
  putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAME,
  getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAME,
  putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAME,
  getDirectAccessAgentConnectorFiles,
  getDirectAccessAgentConnectorFile,
  updateDirectAccessAgentConnectorFile,
  getDirectAccessAgentLoadPerformanceMetrics,
  getDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAME,
  putDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAME,
  clearCache,
};
export default directAccessAgentsExport;
