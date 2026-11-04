import { x as ApiCallOptions } from "./chunks/auth-types-YxQFXW5F.js";
import "./chunks/invoke-fetch-BGcRWadc.js";
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
export type LinkResponseObject = {
  /** The URL to the related resource */
  href?: string | null;
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
 * A JSON Patch operation on one configuration property.
 */
export type Operation = {
  /** The operation. `remove` resets the property to its default value, or removes it when it has none. */
  op: "add" | "replace" | "remove";
  /** The configuration property to change. */
  path: "AGENT_LOG_LEVEL" | "AGENT_HEALTH_FAIL_MINUTES_LIMIT" | "AGENT_LOG_OPTIONS" | "EXTEND_FIRST_REQUEST_TIMEOUT" | "RELOAD_CACHE_MEMORY_MB" | "DCAAS_LOG_LEVEL" | "ODBC_LOG_LEVEL" | "ODBC_MAX_PROCESS_COUNT" | "ODBC_PROCESS_ISOLATION_MODE" | "ODBC_RELOAD_SESSION_LIFE" | "SAPBW_LOG_LEVEL" | "SAPBW_MAX_PROCESS_COUNT" | "SAPBW_PROCESS_ISOLATION_MODE" | "SAPSQL_LOG_LEVEL" | "SAPSQL_MAX_PROCESS_COUNT" | "SAPSQL_PROCESS_ISOLATION_MODE" | "SAPPACKAGE_LOG_LEVEL" | "SAPPACKAGE_MAX_PROCESS_COUNT" | "SAPPACKAGE_PROCESS_ISOLATION_MODE" | "FILE_LOG_LEVEL" | "FILE_MAX_PROCESS_COUNT" | "FILE_PROCESS_ISOLATION_MODE" | "REST_LOG_LEVEL" | "REST_MAX_PROCESS_COUNT" | "REST_PROCESS_ISOLATION_MODE" | "ODBC_TABLES_LIMIT_FOR_GENERICODBC" | "OVERRIDE_CHUNKS_CACHE_DIR" | "CHUNK_RECOVERY_RESUME_THRESHOLD_MINUTES" | "REST_ALLOW_LOCALHOST_CONNECTION" | "OPTIONAL_CAPABILITIES" | "AGENT_LOG_MAX_FILE_SIZE_MB" | "AGENT_LOG_RETENTION_DAYS" | "METRICS_LOG_MAX_FILE_SIZE_MB" | "METRICS_LOG_RETENTION_DAYS" | "DCAAS_LOG_RETENTION_DAYS" | "ODBC_LOG_RETENTION_DAYS" | "SAPBW_LOG_RETENTION_DAYS" | "SAPSQL_LOG_RETENTION_DAYS" | "SAPPACKAGE_LOG_RETENTION_DAYS" | "REST_LOG_RETENTION_DAYS" | "FILE_LOG_RETENTION_DAYS" | "BENCHMARK_LOAD_PERFORMANCE_METRICS_RECORDING_ENABLED" | "BENCHMARK_RETENTION_CLEANUP_ENABLED" | "BENCHMARK_RETENTION_DAYS" | "BENCHMARK_RETENTION_CHECK_INTERVAL_MINUTES" | "BENCHMARK_RETENTION_DB_SIZE_MB" | "BENCHMARK_RETENTION_CLEANUP_BATCH_SIZE";
  /** The new value. Required for `add` and `replace`; ignored for `remove`. */
  value?: string;
};
/**
 * The result of a PATCH on the agent configuration.
 */
export type PatchOperationResponse = {
  /** One entry per operation of the request, in request order. */
  data?: PatchOperationValidationResult[] | null;
  /** The error text from the agent when the patch could not be processed; `null` otherwise. */
  errorMessage?: string | null;
  /** The error structure of this API. */
  failedPatchError?: ErrorResponse;
  /** The status the agent reported for the patch: `204` all operations applied, `207` some applied, `400` none applied. */
  httpStatusCode?: number;
};
/**
 * The validation result of one patch operation.
 */
export type PatchOperationValidationResult = {
  /** A JSON Patch operation on one configuration property. */
  operation?: Operation;
  /** `true` when the operation passed validation and was applied. */
  valid?: boolean;
  /** Why the operation was rejected; `null` when it is valid. */
  validationResult?: string | null;
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
/**
 * @deprecated
 *
 * Restarts the specified agent. The `restart` action is rejected with `409` while a reload is in `RELOADING` status. The `force-restart` action cancels the active reloads and restarts the agent. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param agentAction The type of action to perform. Permitted values are `restart` (rejected with `409` while a reload is in `RELOADING` status) and `force-restart` (cancels the active reloads and restarts the agent).
 * @throws RestartDirectAccessAgentHttpError
 */
export declare function restartDirectAccessAgent(agentId: string, agentAction: string, options?: ApiCallOptions): Promise<RestartDirectAccessAgentHttpResponse>;
export type RestartDirectAccessAgentHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type RestartDirectAccessAgentHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 405 | 409 | 500;
};
/**
 * @deprecated
 *
 * Starts a background benchmark task that measures the throughput and latency of a Direct Access agent. Use the returned `benchmarkId` to monitor progress and retrieve performance metrics for capacity planning or performance optimization. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param query an object with query parameters
 * @throws CreateDirectAccessAgentBenchmarkHttpError
 */
export declare function createDirectAccessAgentBenchmark(agentId: string, query: {
  /** The description for the benchmark task. */
  description?: string;
  /** Forces the benchmark to start regardless of the state of the agent. Does not override QCS resource limits. Use with caution. */
  force?: boolean;
  /** The volume of data in GB to transfer during the throughput measurement part of the benchmark. Must be between 1 and 20. */
  gigaBytesToTransfer?: number;
  /** The name to assign to the benchmark task. */
  name?: string;
}, options?: ApiCallOptions): Promise<CreateDirectAccessAgentBenchmarkHttpResponse>;
export type CreateDirectAccessAgentBenchmarkHttpResponse = {
  data: RunBenchmarkResponse;
  headers: Headers;
  status: 201;
};
export type CreateDirectAccessAgentBenchmarkHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500 | 501 | 503;
};
/**
 * @deprecated
 *
 * Retrieves the current status, progress, and performance metrics for a benchmark task. Use this operation to monitor a running benchmark or inspect its completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param benchmarkId The benchmark ID
 * @throws GetDirectAccessAgentBenchmarkHttpError
 */
export declare function getDirectAccessAgentBenchmark(agentId: string, benchmarkId: string, options?: ApiCallOptions): Promise<GetDirectAccessAgentBenchmarkHttpResponse>;
export type GetDirectAccessAgentBenchmarkHttpResponse = {
  data: GetBenchmarkStatusResponse;
  headers: Headers;
  status: 200;
};
export type GetDirectAccessAgentBenchmarkHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500 | 503;
};
/**
 * @deprecated
 *
 * Requests cancellation of a running benchmark for the specified agent. The request is asynchronous. Use the returned status URL to monitor when cancellation completes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param benchmarkId The benchmark ID
 * @throws CreateDirectAccessAgentBenchmarkCancelHttpError
 */
export declare function createDirectAccessAgentBenchmarkCancel(agentId: string, benchmarkId: string, options?: ApiCallOptions): Promise<CreateDirectAccessAgentBenchmarkCancelHttpResponse>;
export type CreateDirectAccessAgentBenchmarkCancelHttpResponse = {
  data: CancelBenchmarkResponse;
  headers: Headers;
  status: 202;
};
export type CreateDirectAccessAgentBenchmarkCancelHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500 | 503;
};
/**
 * @deprecated
 *
 * Retrieves the connector agent configuration from the specified agent. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param query an object with query parameters
 * @throws GetDirectAccessAgentConfigurationHttpError
 */
export declare function getDirectAccessAgentConfiguration(agentId: string, query: {
  /** Individual properties within the agent configuration */
  queryProperties?: string[];
}, options?: ApiCallOptions): Promise<GetDirectAccessAgentConfigurationHttpResponse>;
export type GetDirectAccessAgentConfigurationHttpResponse = {
  data: ConfigurationResponseWithGatewayMetadata;
  headers: Headers;
  status: 200;
};
export type GetDirectAccessAgentConfigurationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};
/**
 * @deprecated
 *
 * Makes changes to the local agent configuration using JSON Patch. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param body an object with the body content
 * @throws PatchDirectAccessAgentConfigurationHttpError
 */
export declare function patchDirectAccessAgentConfiguration(agentId: string, body: Operation[], options?: ApiCallOptions): Promise<PatchDirectAccessAgentConfigurationHttpResponse>;
export type PatchDirectAccessAgentConfigurationHttpResponse = PatchDirectAccessAgentConfiguration204HttpResponse | PatchDirectAccessAgentConfiguration207HttpResponse;
export type PatchDirectAccessAgentConfiguration204HttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type PatchDirectAccessAgentConfiguration207HttpResponse = {
  data: PatchOperationResponse;
  headers: Headers;
  status: 207;
};
export type PatchDirectAccessAgentConfigurationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 415 | 500;
};
/**
 * @deprecated
 *
 * Retrieves the allowed paths settings for the File Connector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.6+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @throws GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError
 */
export declare function getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths(agentId: string, options?: ApiCallOptions): Promise<GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpResponse>;
export type GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpResponse = {
  data: FileConnectorAllowedPathsResponse;
  headers: Headers;
  status: 200;
};
export type GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};
/**
 * @deprecated
 *
 * Completely replaces the contents of the allowed paths configuration file for the File Connector. Partial updates are not supported. Omitting `fileConnectorAllowedPaths` or sending `null` is treated as an empty list and clears the file. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.6+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param body an object with the body content
 * @throws PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError
 */
export declare function putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths(agentId: string, body: UpdateFileConnectorAllowedPathsRequest, options?: ApiCallOptions): Promise<PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpResponse>;
export type PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 500;
};
/**
 * @deprecated
 *
 * Retrieves the custom data type mapping settings for the Generic ODBC Connector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.5+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @throws GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError
 */
export declare function getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings(agentId: string, options?: ApiCallOptions): Promise<GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpResponse>;
export type GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpResponse = {
  data: OdbcCustomDataTypeResponse;
  headers: Headers;
  status: 200;
};
export type GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};
/**
 * @deprecated
 *
 * Completely replaces the contents of the custom data type mapping configuration file for the Generic ODBC connector. Partial updates are not supported. Omitting `odbcCustomDataTypes` or sending `null` is treated as an empty list and clears the file. There are property naming differences between the API and the file contents. Use the API property format when making changes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.5+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param body an object with the body content
 * @throws PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError
 */
export declare function putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings(agentId: string, body: UpdateOdbcCustomTypeMappingsRequest, options?: ApiCallOptions): Promise<PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpResponse>;
export type PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 500;
};
/**
 * @deprecated
 *
 * Lists the configuration files of the connector: `file-connector`: `plain-text-configuration`, `allowed-paths`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`; `odbc-connector`: `allowed-drivers`, `allowed-dsns`, `custom-data-type-mappings`. `plain-text-configuration` and `custom-allowed-extensions` are read and written as raw lines through `connectors/{connectorType}/files/{fileType}`; the other files have dedicated typed operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param connectorType The connector to retrieve the list of files for
 * @param query an object with query parameters
 * @throws GetDirectAccessAgentConnectorFilesHttpError
 */
export declare function getDirectAccessAgentConnectorFiles(agentId: string, connectorType: string, query: Record<string, unknown>, options?: ApiCallOptions): Promise<GetDirectAccessAgentConnectorFilesHttpResponse>;
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
 * @deprecated
 *
 * Lists the configuration files of the connector: `file-connector`: `plain-text-configuration`, `allowed-paths`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`; `odbc-connector`: `allowed-drivers`, `allowed-dsns`, `custom-data-type-mappings`. `plain-text-configuration` and `custom-allowed-extensions` are read and written as raw lines through `connectors/{connectorType}/files/{fileType}`; the other files have dedicated typed operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param connectorType The connector to retrieve the list of files for
 * @throws GetDirectAccessAgentConnectorFilesWithoutQueryHttpError
 */
export declare function getDirectAccessAgentConnectorFilesWithoutQuery(agentId: string, connectorType: string, options?: ApiCallOptions): Promise<GetDirectAccessAgentConnectorFilesWithoutQueryHttpResponse>;
export type GetDirectAccessAgentConnectorFilesWithoutQueryHttpResponse = {
  data: ConnectorFlatFileConfigurationResponse;
  headers: Headers;
  status: 200;
};
export type GetDirectAccessAgentConnectorFilesWithoutQueryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};
/**
 * @deprecated
 *
 * Retrieves the configuration items in the flat file for the specified connector, as raw lines. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param connectorType The connector type to retrieve
 * @param fileType The type of file to retrieve. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
 * @throws GetDirectAccessAgentConnectorFileHttpError
 */
export declare function getDirectAccessAgentConnectorFile(agentId: string, connectorType: string, fileType: string, options?: ApiCallOptions): Promise<GetDirectAccessAgentConnectorFileHttpResponse>;
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
 * @deprecated
 *
 * Completely replaces the contents of the connector's configuration file with the given raw lines. Partial updates are not supported. Omitting `contentsToSave` or sending `null` is treated as an empty list and clears the file. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param connectorType The connector type to update
 * @param fileType The file type to update. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws UpdateDirectAccessAgentConnectorFileHttpError
 */
export declare function updateDirectAccessAgentConnectorFile(agentId: string, connectorType: string, fileType: string, query: Record<string, unknown>, body: UpdateConfigurationFlatFileRequest, options?: ApiCallOptions): Promise<UpdateDirectAccessAgentConnectorFileHttpResponse>;
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
 * @deprecated
 *
 * Completely replaces the contents of the connector's configuration file with the given raw lines. Partial updates are not supported. Omitting `contentsToSave` or sending `null` is treated as an empty list and clears the file. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param connectorType The connector type to update
 * @param fileType The file type to update. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
 * @param body an object with the body content
 * @throws UpdateDirectAccessAgentConnectorFileWithoutQueryHttpError
 */
export declare function updateDirectAccessAgentConnectorFileWithoutQuery(agentId: string, connectorType: string, fileType: string, body: UpdateConfigurationFlatFileRequest, options?: ApiCallOptions): Promise<UpdateDirectAccessAgentConnectorFileWithoutQueryHttpResponse>;
export type UpdateDirectAccessAgentConnectorFileWithoutQueryHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type UpdateDirectAccessAgentConnectorFileWithoutQueryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 500;
};
/**
 * @deprecated
 *
 * Retrieves the settings for the metrics collector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.9+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @throws GetDirectAccessAgentToolsMetricsCollectorConfigurationHttpError
 */
export declare function getDirectAccessAgentToolsMetricsCollectorConfiguration(agentId: string, options?: ApiCallOptions): Promise<GetDirectAccessAgentToolsMetricsCollectorConfigurationHttpResponse>;
export type GetDirectAccessAgentToolsMetricsCollectorConfigurationHttpResponse = {
  data: MetricsCollectorSettingsApiResponseConnectorConfigurationResponse;
  headers: Headers;
  status: 200;
};
export type GetDirectAccessAgentToolsMetricsCollectorConfigurationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};
/**
 * @deprecated
 *
 * Completely replaces the contents of the metrics collector settings configuration file. Partial updates are not supported. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.9+.
 *
 * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
 * @param body an object with the body content
 * @throws SetDirectAccessAgentToolsMetricsCollectorConfigurationHttpError
 */
export declare function setDirectAccessAgentToolsMetricsCollectorConfiguration(agentId: string, body: UpdateMetricsCollectorSettingsRequest, options?: ApiCallOptions): Promise<SetDirectAccessAgentToolsMetricsCollectorConfigurationHttpResponse>;
export type SetDirectAccessAgentToolsMetricsCollectorConfigurationHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type SetDirectAccessAgentToolsMetricsCollectorConfigurationHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 500;
};
/**
 * Clears the cache for direct-access-agents api requests.
 */
export declare function clearCache(): void;
export type DirectAccessAgentsAPI = {
  /**
   * @deprecated
   *
   * Restarts the specified agent. The `restart` action is rejected with `409` while a reload is in `RELOADING` status. The `force-restart` action cancels the active reloads and restarts the agent. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param agentAction The type of action to perform. Permitted values are `restart` (rejected with `409` while a reload is in `RELOADING` status) and `force-restart` (cancels the active reloads and restarts the agent).
   * @throws RestartDirectAccessAgentHttpError
   */
  restartDirectAccessAgent: typeof restartDirectAccessAgent;
  /**
   * @deprecated
   *
   * Starts a background benchmark task that measures the throughput and latency of a Direct Access agent. Use the returned `benchmarkId` to monitor progress and retrieve performance metrics for capacity planning or performance optimization. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param query an object with query parameters
   * @throws CreateDirectAccessAgentBenchmarkHttpError
   */
  createDirectAccessAgentBenchmark: typeof createDirectAccessAgentBenchmark;
  /**
   * @deprecated
   *
   * Retrieves the current status, progress, and performance metrics for a benchmark task. Use this operation to monitor a running benchmark or inspect its completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param benchmarkId The benchmark ID
   * @throws GetDirectAccessAgentBenchmarkHttpError
   */
  getDirectAccessAgentBenchmark: typeof getDirectAccessAgentBenchmark;
  /**
   * @deprecated
   *
   * Requests cancellation of a running benchmark for the specified agent. The request is asynchronous. Use the returned status URL to monitor when cancellation completes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param benchmarkId The benchmark ID
   * @throws CreateDirectAccessAgentBenchmarkCancelHttpError
   */
  createDirectAccessAgentBenchmarkCancel: typeof createDirectAccessAgentBenchmarkCancel;
  /**
   * @deprecated
   *
   * Retrieves the connector agent configuration from the specified agent. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param query an object with query parameters
   * @throws GetDirectAccessAgentConfigurationHttpError
   */
  getDirectAccessAgentConfiguration: typeof getDirectAccessAgentConfiguration;
  /**
   * @deprecated
   *
   * Makes changes to the local agent configuration using JSON Patch. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param body an object with the body content
   * @throws PatchDirectAccessAgentConfigurationHttpError
   */
  patchDirectAccessAgentConfiguration: typeof patchDirectAccessAgentConfiguration;
  /**
   * @deprecated
   *
   * Retrieves the allowed paths settings for the File Connector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.6+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @throws GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError
   */
  getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths: typeof getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths;
  /**
   * @deprecated
   *
   * Completely replaces the contents of the allowed paths configuration file for the File Connector. Partial updates are not supported. Omitting `fileConnectorAllowedPaths` or sending `null` is treated as an empty list and clears the file. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.6+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param body an object with the body content
   * @throws PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError
   */
  putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths: typeof putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths;
  /**
   * @deprecated
   *
   * Retrieves the custom data type mapping settings for the Generic ODBC Connector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.5+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @throws GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError
   */
  getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings: typeof getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings;
  /**
   * @deprecated
   *
   * Completely replaces the contents of the custom data type mapping configuration file for the Generic ODBC connector. Partial updates are not supported. Omitting `odbcCustomDataTypes` or sending `null` is treated as an empty list and clears the file. There are property naming differences between the API and the file contents. Use the API property format when making changes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.5+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param body an object with the body content
   * @throws PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError
   */
  putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings: typeof putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings;
  /**
   * @deprecated
   *
   * Lists the configuration files of the connector: `file-connector`: `plain-text-configuration`, `allowed-paths`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`; `odbc-connector`: `allowed-drivers`, `allowed-dsns`, `custom-data-type-mappings`. `plain-text-configuration` and `custom-allowed-extensions` are read and written as raw lines through `connectors/{connectorType}/files/{fileType}`; the other files have dedicated typed operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param connectorType The connector to retrieve the list of files for
   * @param query an object with query parameters
   * @throws GetDirectAccessAgentConnectorFilesHttpError
   */
  getDirectAccessAgentConnectorFiles: typeof getDirectAccessAgentConnectorFiles;
  /**
   * @deprecated
   *
   * Lists the configuration files of the connector: `file-connector`: `plain-text-configuration`, `allowed-paths`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`; `odbc-connector`: `allowed-drivers`, `allowed-dsns`, `custom-data-type-mappings`. `plain-text-configuration` and `custom-allowed-extensions` are read and written as raw lines through `connectors/{connectorType}/files/{fileType}`; the other files have dedicated typed operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param connectorType The connector to retrieve the list of files for
   * @throws GetDirectAccessAgentConnectorFilesWithoutQueryHttpError
   */
  getDirectAccessAgentConnectorFilesWithoutQuery: typeof getDirectAccessAgentConnectorFilesWithoutQuery;
  /**
   * @deprecated
   *
   * Retrieves the configuration items in the flat file for the specified connector, as raw lines. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param connectorType The connector type to retrieve
   * @param fileType The type of file to retrieve. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
   * @throws GetDirectAccessAgentConnectorFileHttpError
   */
  getDirectAccessAgentConnectorFile: typeof getDirectAccessAgentConnectorFile;
  /**
   * @deprecated
   *
   * Completely replaces the contents of the connector's configuration file with the given raw lines. Partial updates are not supported. Omitting `contentsToSave` or sending `null` is treated as an empty list and clears the file. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param connectorType The connector type to update
   * @param fileType The file type to update. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws UpdateDirectAccessAgentConnectorFileHttpError
   */
  updateDirectAccessAgentConnectorFile: typeof updateDirectAccessAgentConnectorFile;
  /**
   * @deprecated
   *
   * Completely replaces the contents of the connector's configuration file with the given raw lines. Partial updates are not supported. Omitting `contentsToSave` or sending `null` is treated as an empty list and clears the file. Raw-lines files per connector: `file-connector`: `plain-text-configuration`, `custom-allowed-extensions`; `rest-connector`: `plain-text-configuration`. The other files listed by `connectors/{connectorType}/files` (`custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers`) are typed and have dedicated operations. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param connectorType The connector type to update
   * @param fileType The file type to update. Case-insensitive; the file names returned by `connectors/{connectorType}/files` (for example `plain-text-configuration`) are accepted as well. `custom-data-type-mappings`, `allowed-paths`, `allowed-dsns` and `allowed-drivers` are managed through their dedicated operations and are rejected here with `400`.
   * @param body an object with the body content
   * @throws UpdateDirectAccessAgentConnectorFileWithoutQueryHttpError
   */
  updateDirectAccessAgentConnectorFileWithoutQuery: typeof updateDirectAccessAgentConnectorFileWithoutQuery;
  /**
   * @deprecated
   *
   * Retrieves the settings for the metrics collector. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.9+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @throws GetDirectAccessAgentToolsMetricsCollectorConfigurationHttpError
   */
  getDirectAccessAgentToolsMetricsCollectorConfiguration: typeof getDirectAccessAgentToolsMetricsCollectorConfiguration;
  /**
   * @deprecated
   *
   * Completely replaces the contents of the metrics collector settings configuration file. Partial updates are not supported. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.9+.
   *
   * @param agentId The ID of the Direct Access gateway, as shown in the gateway's settings dialog in the Management Console.
   * @param body an object with the body content
   * @throws SetDirectAccessAgentToolsMetricsCollectorConfigurationHttpError
   */
  setDirectAccessAgentToolsMetricsCollectorConfiguration: typeof setDirectAccessAgentToolsMetricsCollectorConfiguration;
  /**
   * Clears the cache for direct-access-agents api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the direct-access-agents api
 */
declare const directAccessAgentsExport: DirectAccessAgentsAPI;
export { directAccessAgentsExport as default };