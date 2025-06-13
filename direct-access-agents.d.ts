import { A as ApiCallOptions } from './invoke-fetch-types-BYCD4pc9.js';
import './auth-types-Cj5bM3Yk.js';

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
    /** The list of configuration items from the connector's configuration file. */
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
type Operation = {
    op: "add" | "replace" | "remove";
    path: "AGENT_LOG_LEVEL" | "AGENT_HEALTH_FAIL_MINUTES_LIMIT" | "AGENT_LOG_OPTIONS" | "EXTEND_FIRST_REQUEST_TIMEOUT" | "RELOAD_CACHE_MEMORY_MB" | "DCAAS_LOG_LEVEL" | "ODBC_LOG_LEVEL" | "ODBC_MAX_PROCESS_COUNT" | "ODBC_PROCESS_ISOLATION_MODE" | "ODBC_RELOAD_SESSION_LIFE" | "SAPBW_LOG_LEVEL" | "SAPBW_MAX_PROCESS_COUNT" | "SAPBW_PROCESS_ISOLATION_MODE" | "SAPSQL_LOG_LEVEL" | "SAPSQL_MAX_PROCESS_COUNT" | "SAPSQL_PROCESS_ISOLATION_MODE" | "SAPPACKAGE_LOG_LEVEL" | "SAPPACKAGE_MAX_PROCESS_COUNT" | "SAPPACKAGE_PROCESS_ISOLATION_MODE" | "FILE_LOG_LEVEL" | "FILE_MAX_PROCESS_COUNT" | "FILE_PROCESS_ISOLATION_MODE" | "REST_LOG_LEVEL" | "REST_MAX_PROCESS_COUNT" | "REST_PROCESS_ISOLATION_MODE" | "ODBC_TABLES_LIMIT_FOR_GENERICODBC" | "OVERRIDE_CHUNKS_CACHE_DIR" | "CHUNK_RECOVERY_RESUME_THRESHOLD_MINUTES";
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
/**
 * The request to update a connector flat file
 */
type UpdateConfigurationFlatFileRequest = {
    contentsToSave?: string[];
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
interface DirectAccessAgentsAPI {
    /**
     * Restarts the specified agent. If a reload is in `RELOADING` status the `restart` action will be ignored. Use `force-restart` to restart the agent even if a reload is in `RELOADING` status. Requestor must be assigned the `TenantAdmin` role and needs to be either a Gateway's space owner or a member in the Gateway's space with `Can Consume Data` role. Available in Direct Access Gateway V1.7.2+.
     *
     * @param agentId The agent ID
     * @param agentAction The type of action to perform. Permitted values are `restart` (will not restart the agent if a reload is in `RELOADING` status) and `force-restart` (will restart the agent even if a reload is in `RELOADING` status).
     * @throws RestartDirectAccessAgentHttpError
     */
    restartDirectAccessAgent: typeof restartDirectAccessAgent;
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
}
/**
 * Functions for the direct-access-agents api
 */
declare const directAccessAgentsExport: DirectAccessAgentsAPI;

export { type ConfigurationLineBase, type ConfigurationLineNumeric, type ConfigurationLineString, type ConfigurationResponse, type ConnectorFlatFileConfigurationResponse, type ConnectorSettings, type DirectAccessAgentsAPI, type ErrorMessage, type ErrorResponse, type GetDirectAccessAgentConfigurationHttpError, type GetDirectAccessAgentConfigurationHttpResponse, type GetDirectAccessAgentConnectorFileHttpError, type GetDirectAccessAgentConnectorFileHttpResponse, type GetDirectAccessAgentConnectorFilesHttpError, type GetDirectAccessAgentConnectorFilesHttpResponse, type GetDirectAccessAgentConnectorFilesWithoutQueryHttpError, type GetDirectAccessAgentConnectorFilesWithoutQueryHttpResponse, type Operation, type PatchDirectAccessAgentConfiguration204HttpResponse, type PatchDirectAccessAgentConfiguration207HttpResponse, type PatchDirectAccessAgentConfigurationHttpError, type PatchDirectAccessAgentConfigurationHttpResponse, type PatchOperationResponse, type PatchOperationValidationResult, type RestartDirectAccessAgentHttpError, type RestartDirectAccessAgentHttpResponse, type UpdateConfigurationFlatFileRequest, type UpdateDirectAccessAgentConnectorFileHttpError, type UpdateDirectAccessAgentConnectorFileHttpResponse, type UpdateDirectAccessAgentConnectorFileWithoutQueryHttpError, type UpdateDirectAccessAgentConnectorFileWithoutQueryHttpResponse, clearCache, directAccessAgentsExport as default, getDirectAccessAgentConfiguration, getDirectAccessAgentConnectorFile, getDirectAccessAgentConnectorFiles, getDirectAccessAgentConnectorFilesWithoutQuery, patchDirectAccessAgentConfiguration, restartDirectAccessAgent, updateDirectAccessAgentConnectorFile, updateDirectAccessAgentConnectorFileWithoutQuery };
