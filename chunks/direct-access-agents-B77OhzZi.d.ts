import { y as ApiCallOptions } from "./auth-types-E99tzdN0.js";

//#region src/public/rest/direct-access-agents.d.ts
type CancelBenchmarkResponse = {
  message?: string;
  statusUrl?: LinkResponseObject;
};
type ConfigurationLineBase = ConfigurationLineNumeric | ConfigurationLineString;
type ConfigurationLineNumeric = {
  allowMultipleValues?: boolean;
  apiActions?: ("Read" | "Write")[];
  applyWithoutRestart?: boolean;
  connector?: string;
  defaultValue?: string;
  description?: string;
  displayName?: string;
  name?: string;
  pendingApplication?: boolean;
  pendingValue?: string;
  permittedRangeEnd?: number;
  permittedRangeStart?: number;
  uiActions?: ("Read" | "Write")[];
  value?: string;
};
type ConfigurationLineString = {
  allowMultipleValues?: boolean;
  apiActions?: ("Read" | "Write")[];
  applyWithoutRestart?: boolean;
  connector?: string;
  defaultValue?: string;
  description?: string;
  displayName?: string;
  name?: string;
  pendingApplication?: boolean;
  pendingValue?: string;
  permittedValues?: string[];
  uiActions?: ("Read" | "Write")[];
  value?: string;
};
type ConfigurationResponse = {
  connectorAgentSettings?: ConfigurationLineBase[];
  connectors?: ConnectorSettings[];
  dcaasSettings?: ConfigurationLineBase[];
};
type ConnectorFlatFileConfigurationResponse = {
  errorMessage?: ErrorResponse;
  result?: string[];
};
type ConnectorSettings = {
  connectorName?: string;
  settings?: ConfigurationLineBase[];
};
type ErrorMessage = {
  code?: string;
  detail?: string;
  title?: string;
};
type ErrorResponse = {
  errors?: ErrorMessage[];
  readonly hasErrors?: boolean;
  traceId?: string;
};
type FileConnectorAllowedPath = {
  /** The Path property in the File connector allowed paths file. */
  path: string;
  /** The Spaces property in the Odbc custom type mappings file. */
  spaces?: string[];
};
type FileConnectorAllowedPathsResponse = {
  errorMessage?: ErrorResponse;
  result?: FileConnectorAllowedPath[];
};
type GetBenchmarkStatusResponse = {
  /** The ISO 8601 formatted timestamp when the benchmark task completed or was cancelled */
  benchmarkEndTime?: string;
  /** The benchmark ID */
  benchmarkId?: string;
  /** The ISO 8601 formatted timestamp when the benchmark task started execution */
  benchmarkStartTime?: string;
  results?: GetBenchmarkStatusResults;
  /** The benchmark status */
  status?: string;
  /** Additional details about the benchmark status */
  statusMessage?: string;
  /** The total bytes requested to be transferred during the benchmark */
  totalBytesRequested?: number;
};
type GetBenchmarkStatusResults = {
  /** The ISO 8601 formatted timestamp when data transmission completed */
  dataTransmissionEndTime?: string;
  /** The ISO 8601 formatted timestamp when data transmission start */
  dataTransmissionStartTime?: string;
  /** The latency in ms measured during data transmission */
  latency?: number;
  /** The data throughput in KB/s measured during data transmission */
  throughput?: number;
  /** The total number of bytes successfully transferred during data transmission */
  totalBytesTransferred?: number;
};
type LinkResponseObject = {
  /** The URL to the related resource */
  href?: string;
};
type OdbcCustomDataType = {
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
type OdbcCustomDataTypeResponse = {
  errorMessage?: ErrorResponse;
  result?: OdbcCustomDataType[];
};
type Operation = {
  op: "add" | "replace" | "remove";
  path: "AGENT_LOG_LEVEL" | "AGENT_HEALTH_FAIL_MINUTES_LIMIT" | "AGENT_LOG_OPTIONS" | "EXTEND_FIRST_REQUEST_TIMEOUT" | "RELOAD_CACHE_MEMORY_MB" | "DCAAS_LOG_LEVEL" | "ODBC_LOG_LEVEL" | "ODBC_MAX_PROCESS_COUNT" | "ODBC_PROCESS_ISOLATION_MODE" | "ODBC_RELOAD_SESSION_LIFE" | "SAPBW_LOG_LEVEL" | "SAPBW_MAX_PROCESS_COUNT" | "SAPBW_PROCESS_ISOLATION_MODE" | "SAPSQL_LOG_LEVEL" | "SAPSQL_MAX_PROCESS_COUNT" | "SAPSQL_PROCESS_ISOLATION_MODE" | "SAPPACKAGE_LOG_LEVEL" | "SAPPACKAGE_MAX_PROCESS_COUNT" | "SAPPACKAGE_PROCESS_ISOLATION_MODE" | "FILE_LOG_LEVEL" | "FILE_MAX_PROCESS_COUNT" | "FILE_PROCESS_ISOLATION_MODE" | "REST_LOG_LEVEL" | "REST_MAX_PROCESS_COUNT" | "REST_PROCESS_ISOLATION_MODE" | "ODBC_TABLES_LIMIT_FOR_GENERICODBC" | "OVERRIDE_CHUNKS_CACHE_DIR" | "CHUNK_RECOVERY_RESUME_THRESHOLD_MINUTES" | "REST_ALLOW_LOCALHOST_CONNECTION" | "OPTIONAL_CAPABILITIES";
  value: string;
};
type PatchOperationResponse = {
  data?: PatchOperationValidationResult[];
  errorMessage?: string;
  failedPatchError?: ErrorResponse;
  httpStatusCode?: number;
};
type PatchOperationValidationResult = {
  operation?: Operation;
  valid?: boolean;
  validationResult?: string;
};
type RunBenchmarkResponse = {
  benchmarkId?: string;
};
/**
 * The request to update a connector flat file
 */
type UpdateConfigurationFlatFileRequest = {
  contentsToSave?: string[];
};
type UpdateFileConnectorAllowedPathsRequest = {
  fileConnectorAllowedPaths?: FileConnectorAllowedPath[];
};
type UpdateOdbcCustomTypeMappingsRequest = {
  odbcCustomDataTypes?: OdbcCustomDataType[];
};
/**
 * Restarts the specified agent. If a reload is in `RELOADING` status the `restart` action will be ignored. Use `force-restart` to restart the agent even if a reload is in `RELOADING` status. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
 *
 * @param agentId The agent ID
 * @param agentAction The type of action to perform. Permitted values are `restart` (will not restart the agent if a reload is in `RELOADING` status) and `force-restart` (will restart the agent even if a reload is in `RELOADING` status).
 * @throws RestartDirectAccessAgentHttpError
 */
declare function restartDirectAccessAgent(agentId: string, agentAction: string, options?: ApiCallOptions): Promise<RestartDirectAccessAgentHttpResponse>;
type RestartDirectAccessAgentHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type RestartDirectAccessAgentHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 500;
};
/**
 * Starts a background benchmark task to measure the performance of a Direct Access agent. Use this endpoint to evaluate agent throughput and latency for capacity planning and performance optiization. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The agent ID
 * @param query an object with query parameters
 * @throws CreateDirectAccessAgentBenchmarkHttpError
 */
declare function createDirectAccessAgentBenchmark(agentId: string, query: {
  /** Forces the benchmark to start regardless of the state of the agent. Does not override QCS resource limits. Use with caution. */
  force?: boolean;
  /** The volume of data in GB to transfer during the throughput measurement part of the benchmark. */
  gigaBytesToTransfer?: number;
}, options?: ApiCallOptions): Promise<CreateDirectAccessAgentBenchmarkHttpResponse>;
type CreateDirectAccessAgentBenchmarkHttpResponse = {
  data: RunBenchmarkResponse;
  headers: Headers;
  status: 201;
};
type CreateDirectAccessAgentBenchmarkHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 403 | 404 | 500 | 501 | 503;
};
/**
 * Retrieves the current status and progress of a running or completed benchmark task. Use this endpoint to monitor benchmark execution and retrieve performance metrics once the task is completed. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The agent ID
 * @param benchmarkId The benchmark ID
 * @throws GetDirectAccessAgentBenchmarkHttpError
 */
declare function getDirectAccessAgentBenchmark(agentId: string, benchmarkId: string, options?: ApiCallOptions): Promise<GetDirectAccessAgentBenchmarkHttpResponse>;
type GetDirectAccessAgentBenchmarkHttpResponse = {
  data: GetBenchmarkStatusResponse;
  headers: Headers;
  status: 200;
};
type GetDirectAccessAgentBenchmarkHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 403 | 404 | 500 | 503;
};
/**
 * Requests a cancellation on a running benchmark by id for the specified agent. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
 *
 * @param agentId The agent ID
 * @param benchmarkId The benchmark ID
 * @throws CreateDirectAccessAgentBenchmarkCancelHttpError
 */
declare function createDirectAccessAgentBenchmarkCancel(agentId: string, benchmarkId: string, options?: ApiCallOptions): Promise<CreateDirectAccessAgentBenchmarkCancelHttpResponse>;
type CreateDirectAccessAgentBenchmarkCancelHttpResponse = {
  data: CancelBenchmarkResponse;
  headers: Headers;
  status: 202;
};
type CreateDirectAccessAgentBenchmarkCancelHttpError = {
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
declare function getDirectAccessAgentConfiguration(agentId: string, query: {
  /** Individual properties within the agent configuration */
  queryProperties?: string[];
}, options?: ApiCallOptions): Promise<GetDirectAccessAgentConfigurationHttpResponse>;
type GetDirectAccessAgentConfigurationHttpResponse = {
  data: ConfigurationResponse;
  headers: Headers;
  status: 200;
};
type GetDirectAccessAgentConfigurationHttpError = {
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
declare function patchDirectAccessAgentConfiguration(agentId: string, body: Operation[], options?: ApiCallOptions): Promise<PatchDirectAccessAgentConfigurationHttpResponse>;
type PatchDirectAccessAgentConfigurationHttpResponse = PatchDirectAccessAgentConfiguration204HttpResponse | PatchDirectAccessAgentConfiguration207HttpResponse;
type PatchDirectAccessAgentConfiguration204HttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchDirectAccessAgentConfiguration207HttpResponse = {
  data: PatchOperationResponse;
  headers: Headers;
  status: 207;
};
type PatchDirectAccessAgentConfigurationHttpError = {
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
declare function getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths(agentId: string, options?: ApiCallOptions): Promise<GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpResponse>;
type GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpResponse = {
  data: FileConnectorAllowedPathsResponse;
  headers: Headers;
  status: 200;
};
type GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError = {
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
declare function putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths(agentId: string, body: UpdateFileConnectorAllowedPathsRequest, options?: ApiCallOptions): Promise<PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpResponse>;
type PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError = {
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
declare function getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings(agentId: string, options?: ApiCallOptions): Promise<GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpResponse>;
type GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpResponse = {
  data: OdbcCustomDataTypeResponse;
  headers: Headers;
  status: 200;
};
type GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError = {
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
declare function putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings(agentId: string, body: UpdateOdbcCustomTypeMappingsRequest, options?: ApiCallOptions): Promise<PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpResponse>;
type PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError = {
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
declare function getDirectAccessAgentConnectorFiles(agentId: string, connectorType: string, query: Record<string, unknown>, options?: ApiCallOptions): Promise<GetDirectAccessAgentConnectorFilesHttpResponse>;
type GetDirectAccessAgentConnectorFilesHttpResponse = {
  data: ConnectorFlatFileConfigurationResponse;
  headers: Headers;
  status: 200;
};
type GetDirectAccessAgentConnectorFilesHttpError = {
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
declare function getDirectAccessAgentConnectorFilesWithoutQuery(agentId: string, connectorType: string, options?: ApiCallOptions): Promise<GetDirectAccessAgentConnectorFilesWithoutQueryHttpResponse>;
type GetDirectAccessAgentConnectorFilesWithoutQueryHttpResponse = {
  data: ConnectorFlatFileConfigurationResponse;
  headers: Headers;
  status: 200;
};
type GetDirectAccessAgentConnectorFilesWithoutQueryHttpError = {
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
declare function getDirectAccessAgentConnectorFile(agentId: string, connectorType: string, fileType: string, options?: ApiCallOptions): Promise<GetDirectAccessAgentConnectorFileHttpResponse>;
type GetDirectAccessAgentConnectorFileHttpResponse = {
  data: ConnectorFlatFileConfigurationResponse;
  headers: Headers;
  status: 200;
};
type GetDirectAccessAgentConnectorFileHttpError = {
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
declare function updateDirectAccessAgentConnectorFile(agentId: string, connectorType: string, fileType: string, query: Record<string, unknown>, body: UpdateConfigurationFlatFileRequest, options?: ApiCallOptions): Promise<UpdateDirectAccessAgentConnectorFileHttpResponse>;
type UpdateDirectAccessAgentConnectorFileHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type UpdateDirectAccessAgentConnectorFileHttpError = {
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
declare function updateDirectAccessAgentConnectorFileWithoutQuery(agentId: string, connectorType: string, fileType: string, body: UpdateConfigurationFlatFileRequest, options?: ApiCallOptions): Promise<UpdateDirectAccessAgentConnectorFileWithoutQueryHttpResponse>;
type UpdateDirectAccessAgentConnectorFileWithoutQueryHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type UpdateDirectAccessAgentConnectorFileWithoutQueryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 404 | 409;
};
/**
 * Clears the cache for direct-access-agents api requests.
 */
declare function clearCache(): void;
type DirectAccessAgentsAPI = {
  /**
   * Restarts the specified agent. If a reload is in `RELOADING` status the `restart` action will be ignored. Use `force-restart` to restart the agent even if a reload is in `RELOADING` status. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
   *
   * @param agentId The agent ID
   * @param agentAction The type of action to perform. Permitted values are `restart` (will not restart the agent if a reload is in `RELOADING` status) and `force-restart` (will restart the agent even if a reload is in `RELOADING` status).
   * @throws RestartDirectAccessAgentHttpError
   */
  restartDirectAccessAgent: typeof restartDirectAccessAgent;
  /**
   * Starts a background benchmark task to measure the performance of a Direct Access agent. Use this endpoint to evaluate agent throughput and latency for capacity planning and performance optiization. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The agent ID
   * @param query an object with query parameters
   * @throws CreateDirectAccessAgentBenchmarkHttpError
   */
  createDirectAccessAgentBenchmark: typeof createDirectAccessAgentBenchmark;
  /**
   * Retrieves the current status and progress of a running or completed benchmark task. Use this endpoint to monitor benchmark execution and retrieve performance metrics once the task is completed. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
   *
   * @param agentId The agent ID
   * @param benchmarkId The benchmark ID
   * @throws GetDirectAccessAgentBenchmarkHttpError
   */
  getDirectAccessAgentBenchmark: typeof getDirectAccessAgentBenchmark;
  /**
   * Requests a cancellation on a running benchmark by id for the specified agent. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
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
   * Clears the cache for direct-access-agents api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the direct-access-agents api
 */
declare const directAccessAgentsExport: DirectAccessAgentsAPI;
//#endregion
export { UpdateDirectAccessAgentConnectorFileWithoutQueryHttpError as $, GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpResponse as A, PatchDirectAccessAgentConfigurationHttpResponse as B, GetDirectAccessAgentConnectorFileHttpError as C, GetDirectAccessAgentConnectorFilesWithoutQueryHttpError as D, GetDirectAccessAgentConnectorFilesHttpResponse as E, OdbcCustomDataTypeResponse as F, PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError as G, PatchOperationValidationResult as H, Operation as I, RestartDirectAccessAgentHttpResponse as J, PutDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpResponse as K, PatchDirectAccessAgentConfiguration204HttpResponse as L, GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpResponse as M, LinkResponseObject as N, GetDirectAccessAgentConnectorFilesWithoutQueryHttpResponse as O, OdbcCustomDataType as P, UpdateDirectAccessAgentConnectorFileHttpResponse as Q, PatchDirectAccessAgentConfiguration207HttpResponse as R, GetDirectAccessAgentConfigurationHttpResponse as S, GetDirectAccessAgentConnectorFilesHttpError as T, PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError as U, PatchOperationResponse as V, PutDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpResponse as W, UpdateConfigurationFlatFileRequest as X, RunBenchmarkResponse as Y, UpdateDirectAccessAgentConnectorFileHttpError as Z, GetBenchmarkStatusResponse as _, restartDirectAccessAgent as _t, ConfigurationResponse as a, createDirectAccessAgentBenchmarkCancel as at, GetDirectAccessAgentBenchmarkHttpResponse as b, CreateDirectAccessAgentBenchmarkCancelHttpError as c, getDirectAccessAgentConfiguration as ct, CreateDirectAccessAgentBenchmarkHttpResponse as d, getDirectAccessAgentConnectorFilesWithoutQuery as dt, UpdateDirectAccessAgentConnectorFileWithoutQueryHttpResponse as et, DirectAccessAgentsAPI as f, getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths as ft, FileConnectorAllowedPathsResponse as g, putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings as gt, FileConnectorAllowedPath as h, putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths as ht, ConfigurationLineString as i, createDirectAccessAgentBenchmark as it, GetDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappingsHttpError as j, GetDirectAccessAgentConnectorsFileConnectorFilesAllowedPathsHttpError as k, CreateDirectAccessAgentBenchmarkCancelHttpResponse as l, getDirectAccessAgentConnectorFile as lt, ErrorResponse as m, patchDirectAccessAgentConfiguration as mt, ConfigurationLineBase as n, UpdateOdbcCustomTypeMappingsRequest as nt, ConnectorFlatFileConfigurationResponse as o, directAccessAgentsExport as ot, ErrorMessage as p, getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings as pt, RestartDirectAccessAgentHttpError as q, ConfigurationLineNumeric as r, clearCache as rt, ConnectorSettings as s, getDirectAccessAgentBenchmark as st, CancelBenchmarkResponse as t, UpdateFileConnectorAllowedPathsRequest as tt, CreateDirectAccessAgentBenchmarkHttpError as u, getDirectAccessAgentConnectorFiles as ut, GetBenchmarkStatusResults as v, updateDirectAccessAgentConnectorFile as vt, GetDirectAccessAgentConnectorFileHttpResponse as w, GetDirectAccessAgentConfigurationHttpError as x, GetDirectAccessAgentBenchmarkHttpError as y, updateDirectAccessAgentConnectorFileWithoutQuery as yt, PatchDirectAccessAgentConfigurationHttpError as z };