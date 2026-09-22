import { x as ApiCallOptions } from "./chunks/auth-types-DCwmQ7fk.js";
import "./chunks/invoke-fetch-eUbA2JSu.js";
//#region src/public/rest/direct-access-agents.d.ts
export type CancelBenchmarkResponse = {
  message?: string | null;
  statusUrl?: LinkResponseObject;
};
export type ConfigurationLineBase = ConfigurationLineNumeric | ConfigurationLineString;
export type ConfigurationLineNumeric = {
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
export type ConfigurationLineString = {
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
export type ConfigurationResponseWithGatewayMetadata = {
  connectorAgentSettings?: ConfigurationLineBase[] | null;
  connectors?: ConnectorSettings[] | null;
  dcaasSettings?: ConfigurationLineBase[] | null;
  environment?: string | null;
  productVersion?: string | null;
};
export type ConnectorFlatFileConfigurationResponse = {
  errorMessage?: ErrorResponse;
  result?: string[] | null;
};
export type ConnectorSettings = {
  connectorName?: string | null;
  settings?: ConfigurationLineBase[] | null;
};
export type ErrorMessage = {
  code?: string | null;
  detail?: string | null;
  title?: string | null;
};
export type ErrorResponse = {
  errors?: ErrorMessage[] | null;
  readonly hasErrors?: boolean;
  traceId?: string | null;
};
export type FileConnectorAllowedPath = {
  /** The Path property in the File connector allowed paths file. */
  path: string;
  /** The Spaces property in the File connector allowed paths file. */
  spaces?: string[] | null;
};
export type FileConnectorAllowedPathsResponse = {
  errorMessage?: ErrorResponse;
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
export type GetBenchmarkStatusResults = {
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
  /** The file location for the local metrics database. If not specified, defaults to `%ProgramData%\Qlik\Gateway\tmp`. */
  localDatabaseFileLocation?: string | null;
  /** The port number that the metrics collector API will run on.
   * This must match the port that the SYSTEM connector runs on to enable network metrics collection. */
  port: number;
};
export type MetricsCollectorSettingsApiResponse = {
  connectorConfigurations?: MetricsCollectorConnectorConfigurationsApiResponse;
  metricsCollectorSettings?: MetricsCollectorSettings;
};
export type MetricsCollectorSettingsApiResponseConnectorConfigurationResponse = {
  errorMessage?: ErrorResponse;
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
  errorMessage?: ErrorResponse;
  result?: OdbcCustomDataType[] | null;
};
export type Operation = {
  op: "add" | "replace" | "remove";
  path: "AGENT_LOG_LEVEL" | "AGENT_HEALTH_FAIL_MINUTES_LIMIT" | "AGENT_LOG_OPTIONS" | "EXTEND_FIRST_REQUEST_TIMEOUT" | "RELOAD_CACHE_MEMORY_MB" | "DCAAS_LOG_LEVEL" | "ODBC_LOG_LEVEL" | "ODBC_MAX_PROCESS_COUNT" | "ODBC_PROCESS_ISOLATION_MODE" | "ODBC_RELOAD_SESSION_LIFE" | "SAPBW_LOG_LEVEL" | "SAPBW_MAX_PROCESS_COUNT" | "SAPBW_PROCESS_ISOLATION_MODE" | "SAPSQL_LOG_LEVEL" | "SAPSQL_MAX_PROCESS_COUNT" | "SAPSQL_PROCESS_ISOLATION_MODE" | "SAPPACKAGE_LOG_LEVEL" | "SAPPACKAGE_MAX_PROCESS_COUNT" | "SAPPACKAGE_PROCESS_ISOLATION_MODE" | "FILE_LOG_LEVEL" | "FILE_MAX_PROCESS_COUNT" | "FILE_PROCESS_ISOLATION_MODE" | "REST_LOG_LEVEL" | "REST_MAX_PROCESS_COUNT" | "REST_PROCESS_ISOLATION_MODE" | "ODBC_TABLES_LIMIT_FOR_GENERICODBC" | "OVERRIDE_CHUNKS_CACHE_DIR" | "CHUNK_RECOVERY_RESUME_THRESHOLD_MINUTES" | "REST_ALLOW_LOCALHOST_CONNECTION" | "OPTIONAL_CAPABILITIES" | "AGENT_LOG_MAX_FILE_SIZE_MB" | "AGENT_LOG_RETENTION_DAYS" | "METRICS_LOG_MAX_FILE_SIZE_MB" | "METRICS_LOG_RETENTION_DAYS" | "DCAAS_LOG_RETENTION_DAYS" | "ODBC_LOG_RETENTION_DAYS" | "SAPBW_LOG_RETENTION_DAYS" | "SAPSQL_LOG_RETENTION_DAYS" | "SAPPACKAGE_LOG_RETENTION_DAYS" | "REST_LOG_RETENTION_DAYS" | "FILE_LOG_RETENTION_DAYS" | "BENCHMARK_LOAD_PERFORMANCE_METRICS_RECORDING_ENABLED" | "BENCHMARK_RETENTION_CLEANUP_ENABLED" | "BENCHMARK_RETENTION_DAYS" | "BENCHMARK_RETENTION_CHECK_INTERVAL_MINUTES" | "BENCHMARK_RETENTION_DB_SIZE_MB" | "BENCHMARK_RETENTION_CLEANUP_BATCH_SIZE";
  value: string;
};
export type PatchOperationResponse = {
  data?: PatchOperationValidationResult[] | null;
  errorMessage?: string | null;
  failedPatchError?: ErrorResponse;
  httpStatusCode?: number;
};
export type PatchOperationValidationResult = {
  operation?: Operation;
  valid?: boolean;
  validationResult?: string | null;
};
export type RunBenchmarkResponse = {
  benchmarkId?: string | null;
};
/**
 * The request to update a connector flat file
 */
export type UpdateConfigurationFlatFileRequest = {
  contentsToSave?: string[] | null;
};
/**
 * The request to update file connector allowed paths configuration
 */
export type UpdateFileConnectorAllowedPathsRequest = {
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
  /** Indicates whether the metrics collector is enabled. */
  enabled: boolean;
  /** The maximum size of the local database in megabytes. Default is 500 MB. */
  localDataRetentionDatabaseSizeInMb?: number;
  /** The number of days to retain local data. */
  localDataRetentionDays: number;
  /** The file location for the local metrics database. If not specified, defaults to `C:\ProgramData\Qlik\Gateway\tmp`. */
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
  odbcCustomDataTypes?: OdbcCustomDataType[] | null;
};
/**
 * Restarts the specified agent. If a reload is in `RELOADING` status the `restart` action will be ignored. Use `force-restart` to restart the agent even if a reload is in `RELOADING` status. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
 *
 * @param agentId The agent ID
 * @param agentAction The type of action to perform. Permitted values are `restart` (will not restart the agent if a reload is in `RELOADING` status) and `force-restart` (will restart the agent even if a reload is in `RELOADING` status).
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
  status: 400 | 403 | 404 | 409 | 500;
};
/**
 * Starts a background benchmark task that measures the throughput and latency of a Direct Access agent. Use the returned `benchmarkId` to monitor progress and retrieve performance metrics for capacity planning or performance optimization. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The agent ID
 * @param query an object with query parameters
 * @throws CreateDirectAccessAgentBenchmarkHttpError
 */
export declare function createDirectAccessAgentBenchmark(agentId: string, query: {
  /** The description for the benchmark task. */
  description?: string;
  /** Forces the benchmark to start regardless of the state of the agent. Does not override QCS resource limits. Use with caution. */
  force?: boolean;
  /** The volume of data in GB to transfer during the throughput measurement part of the benchmark. */
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
 * Retrieves the current status, progress, and performance metrics for a benchmark task. Use this operation to monitor a running benchmark or inspect its completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The agent ID
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
  status: 403 | 404 | 500 | 503;
};
/**
 * Requests cancellation of a running benchmark for the specified agent. The request is asynchronous. Use the returned status URL to monitor when cancellation completes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The agent ID
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
  status: 403 | 404 | 500 | 503;
};
/**
 * Retrieves the connector agent configuration from the specified agent. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
 *
 * @param agentId The agent ID
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
  status: 403 | 404;
};
/**
 * Makes changes to the local agent configuration using JSON Patch. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
 *
 * @param agentId The agent ID
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
  status: 400 | 403 | 404 | 415;
};
/**
 * Retrieves the allowed paths settings for the File Connector. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.6+.
 *
 * @param agentId The agent ID
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
  status: 404;
};
/**
 * Completely replaces the contents of the allowed paths configuration file for the File Connector. Partial updates are not supported. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.6+.
 *
 * @param agentId The agent id
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
  status: 400 | 404 | 409;
};
/**
 * Retrieves the custom data type mapping settings for the Generic ODBC Connector. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.5+.
 *
 * @param agentId The agent ID.
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
  status: 404;
};
/**
 * Completely replaces the contents of the custom data type mapping configuration file for the Generic ODBC connector. Partial updates are not supported. There are property naming differences between the API and the file contents. Use the API property format when making changes. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.5+.
 *
 * @param agentId The agent ID.
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
  status: 400 | 404 | 409;
};
/**
 * Retrieves the configuration files associated with the connector. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The agent ID
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
  status: 403 | 404;
};
/**
 * Retrieves the configuration files associated with the connector. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The agent ID
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
  status: 403 | 404;
};
/**
 * Retrieves the configuration items in the flat file for the specified connector. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The agent ID
 * @param connectorType The connector type to retrieve
 * @param fileType The type of file to retrieve
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
  status: 403 | 404;
};
/**
 * Completely replaces the contents of the connector's configuration file. Partial updates are not supported. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The agent ID
 * @param connectorType The connector type to update
 * @param fileType The file type to update
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
  status: 400 | 404 | 409;
};
/**
 * Completely replaces the contents of the connector's configuration file. Partial updates are not supported. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
 *
 * @param agentId The agent ID
 * @param connectorType The connector type to update
 * @param fileType The file type to update
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
  status: 400 | 404 | 409;
};
/**
 * Retrieves the settings for the metrics collector. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.9+.
 *
 * @param agentId The agent ID.
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
  status: 400 | 404;
};
/**
 * Completely replaces the contents of the metrics collector settings configuration file. Partial updates are not supported.  Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.9+.
 *
 * @param agentId The agent ID.
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
  status: 400 | 404 | 409;
};
/**
 * Clears the cache for direct-access-agents api requests.
 */
export declare function clearCache(): void;
export type DirectAccessAgentsAPI = {
  /**
   * Restarts the specified agent. If a reload is in `RELOADING` status the `restart` action will be ignored. Use `force-restart` to restart the agent even if a reload is in `RELOADING` status. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
   *
   * @param agentId The agent ID
   * @param agentAction The type of action to perform. Permitted values are `restart` (will not restart the agent if a reload is in `RELOADING` status) and `force-restart` (will restart the agent even if a reload is in `RELOADING` status).
   * @throws RestartDirectAccessAgentHttpError
   */
  restartDirectAccessAgent: typeof restartDirectAccessAgent;
  /**
   * Starts a background benchmark task that measures the throughput and latency of a Direct Access agent. Use the returned `benchmarkId` to monitor progress and retrieve performance metrics for capacity planning or performance optimization. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The agent ID
   * @param query an object with query parameters
   * @throws CreateDirectAccessAgentBenchmarkHttpError
   */
  createDirectAccessAgentBenchmark: typeof createDirectAccessAgentBenchmark;
  /**
   * Retrieves the current status, progress, and performance metrics for a benchmark task. Use this operation to monitor a running benchmark or inspect its completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The agent ID
   * @param benchmarkId The benchmark ID
   * @throws GetDirectAccessAgentBenchmarkHttpError
   */
  getDirectAccessAgentBenchmark: typeof getDirectAccessAgentBenchmark;
  /**
   * Requests cancellation of a running benchmark for the specified agent. The request is asynchronous. Use the returned status URL to monitor when cancellation completes. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The agent ID
   * @param benchmarkId The benchmark ID
   * @throws CreateDirectAccessAgentBenchmarkCancelHttpError
   */
  createDirectAccessAgentBenchmarkCancel: typeof createDirectAccessAgentBenchmarkCancel;
  /**
   * Retrieves the connector agent configuration from the specified agent. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
   *
   * @param agentId The agent ID
   * @param query an object with query parameters
   * @throws GetDirectAccessAgentConfigurationHttpError
   */
  getDirectAccessAgentConfiguration: typeof getDirectAccessAgentConfiguration;
  /**
   * Makes changes to the local agent configuration using JSON Patch. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
   *
   * @param agentId The agent ID
   * @param body an object with the body content
   * @throws PatchDirectAccessAgentConfigurationHttpError
   */
  patchDirectAccessAgentConfiguration: typeof patchDirectAccessAgentConfiguration;
  /**
   * Retrieves the allowed paths settings for the File Connector. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.6+.
   *
   * @param agentId The agent ID
   * @throws GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError
   */
  getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths: typeof getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths;
  /**
   * Completely replaces the contents of the allowed paths configuration file for the File Connector. Partial updates are not supported. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.6+.
   *
   * @param agentId The agent id
   * @param body an object with the body content
   * @throws PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError
   */
  putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths: typeof putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths;
  /**
   * Retrieves the custom data type mapping settings for the Generic ODBC Connector. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.5+.
   *
   * @param agentId The agent ID.
   * @throws GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError
   */
  getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings: typeof getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings;
  /**
   * Completely replaces the contents of the custom data type mapping configuration file for the Generic ODBC connector. Partial updates are not supported. There are property naming differences between the API and the file contents. Use the API property format when making changes. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.5+.
   *
   * @param agentId The agent ID.
   * @param body an object with the body content
   * @throws PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError
   */
  putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings: typeof putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings;
  /**
   * Retrieves the configuration files associated with the connector. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The agent ID
   * @param connectorType The connector to retrieve the list of files for
   * @param query an object with query parameters
   * @throws GetDirectAccessAgentConnectorFilesHttpError
   */
  getDirectAccessAgentConnectorFiles: typeof getDirectAccessAgentConnectorFiles;
  /**
   * Retrieves the configuration files associated with the connector. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The agent ID
   * @param connectorType The connector to retrieve the list of files for
   * @throws GetDirectAccessAgentConnectorFilesWithoutQueryHttpError
   */
  getDirectAccessAgentConnectorFilesWithoutQuery: typeof getDirectAccessAgentConnectorFilesWithoutQuery;
  /**
   * Retrieves the configuration items in the flat file for the specified connector. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The agent ID
   * @param connectorType The connector type to retrieve
   * @param fileType The type of file to retrieve
   * @throws GetDirectAccessAgentConnectorFileHttpError
   */
  getDirectAccessAgentConnectorFile: typeof getDirectAccessAgentConnectorFile;
  /**
   * Completely replaces the contents of the connector's configuration file. Partial updates are not supported. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The agent ID
   * @param connectorType The connector type to update
   * @param fileType The file type to update
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws UpdateDirectAccessAgentConnectorFileHttpError
   */
  updateDirectAccessAgentConnectorFile: typeof updateDirectAccessAgentConnectorFile;
  /**
   * Completely replaces the contents of the connector's configuration file. Partial updates are not supported. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.4+.
   *
   * @param agentId The agent ID
   * @param connectorType The connector type to update
   * @param fileType The file type to update
   * @param body an object with the body content
   * @throws UpdateDirectAccessAgentConnectorFileWithoutQueryHttpError
   */
  updateDirectAccessAgentConnectorFileWithoutQuery: typeof updateDirectAccessAgentConnectorFileWithoutQuery;
  /**
   * Retrieves the settings for the metrics collector. Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.9+.
   *
   * @param agentId The agent ID.
   * @throws GetDirectAccessAgentToolsMetricsCollectorConfigurationHttpError
   */
  getDirectAccessAgentToolsMetricsCollectorConfiguration: typeof getDirectAccessAgentToolsMetricsCollectorConfiguration;
  /**
   * Completely replaces the contents of the metrics collector settings configuration file. Partial updates are not supported.  Requestor must be assigned the `TenantAdmin` role. Available in Direct Access Gateway V1.7.9+.
   *
   * @param agentId The agent ID.
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
//#endregion
export { directAccessAgentsExport as default };