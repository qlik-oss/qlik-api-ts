import { A as ApiCallOptions } from './global.types-4jzAvW7R.mjs';
import './auth-types-nnUcWhuU.mjs';

type ApiKey = {
    /** When the API key was created. */
    readonly created?: string;
    /** The ID of the user who created the key. */
    createdByUser: string;
    /** A description for the API key. */
    description: string;
    /** When the API key will expire and no longer be a valid authentication token. */
    expiry: string;
    /** The unique ID for the resource. */
    id: string;
    /** When the API key was last updated. */
    readonly lastUpdated?: string;
    /** The status of the API key. */
    status: "active" | "expired" | "revoked";
    /** The ID of the subject for the API key. */
    sub: string;
    /** Type of the subject. */
    subType: "user";
    /** The tenant ID. */
    tenantId: string;
};
type ApiKeyBody = {
    /** Text that describes the API key. */
    description: string;
    /** The expiry of the API key, in ISO8601 duration format. */
    expiry?: string;
    /** The ID of the subject for the API key. */
    sub?: string;
    /** Type of the subject. */
    subType?: string;
};
type ApiKeyConfigPatch = {
    /** The operation to be performed. */
    op: "replace";
    /** The path for the given resource field to patch. */
    path: "/api_keys_enabled" | "/max_api_key_expiry" | "/max_keys_per_user";
    /** The value to be used for this operation. */
    value: unknown;
};
type ApiKeyPatch = {
    /** The operation to be performed. */
    op: "replace";
    /** The path for the given resource field to patch. */
    path: "/description";
    /** The value to be used for this operation. */
    value: string;
};
type ApiKeyWithToken = {
    /** When the API key was created. */
    readonly created?: string;
    /** The id of the user who created the key. */
    createdByUser: string;
    /** A description for the API key. */
    description: string;
    /** When the API key will expire and no longer be a valid authentication token. */
    expiry: string;
    /** The unique ID for the resource. */
    id: string;
    /** When the API key was last updated. */
    readonly lastUpdated?: string;
    /** The status of the API key. */
    status: "active" | "expired" | "revoked";
    /** The ID of the subject for the API key. */
    sub: string;
    /** Type of the subject. */
    subType: "user";
    /** The tenant ID. */
    tenantId: string;
    /** The generated signed JWT. */
    token: string;
};
type ApiKeysConfig = {
    /** Enables or disables API key functionality for the specified tenant. */
    api_keys_enabled?: boolean;
    /** The maximum lifetime, in ISO8601 duration format, for which an API key can be issued for the specified tenant. */
    max_api_key_expiry?: string;
    /** The maximum number of active API keys that any user can create for the specified tenant. */
    max_keys_per_user?: number;
};
type ApiKeysConfigPatchSchema = ApiKeyConfigPatch[];
type ApiKeysPatchSchema = ApiKeyPatch[];
type Error = {
    /** The error code. */
    code: string;
    /** A human-readable explanation specific to this occurrence of the problem. */
    detail?: string;
    /** Additional properties relating to the error. */
    meta?: unknown;
    /** References to the source of the error. */
    source?: {
        /** The URI query parameter that caused the error. */
        parameter?: string;
        /** A JSON Pointer to the property that caused the error. */
        pointer?: string;
    };
    /** The HTTP status code. */
    status?: number;
    /** Summary of the problem. */
    title: string;
};
type Errors = {
    /** List of errors and their properties. */
    errors?: Error[];
};
type Link = {
    /** The URL for the link. */
    href: string;
};
type ApiKeyPage = {
    /** Properties of API keys in a given tenant. */
    data: ApiKey[];
    /** Navigation links to page results. */
    links: {
        next?: Link;
        prev?: Link;
        self: Link;
    };
};
/**
 * Lists API keys for a given tenant ID.
 *
 * @param query an object with query parameters
 * @throws GetApiKeysHttpError
 */
declare const getApiKeys: (query: {
    /** The user ID that created the API key. */
    createdByUser?: string;
    /** Get resources with IDs that are lower than the target resource ID. Cannot be used in conjunction with startingAfter. */
    endingBefore?: string;
    /** Maximum number of API keys to retrieve. */
    limit?: number;
    /** The field to sort by, with +/- prefix indicating sort order */
    sort?: "createdByUser" | "+createdByUser" | "-createdByUser" | "sub" | "+sub" | "-sub" | "status" | "+status" | "-status" | "description" | "+description" | "-description" | "created" | "+created" | "-created";
    /** Get resources with IDs that are higher than the target resource ID. Cannot be used in conjunction with endingBefore. */
    startingAfter?: string;
    /** The status of the API key. */
    status?: "active" | "expired" | "revoked";
    /** The ID of the subject. */
    sub?: string;
}, options?: ApiCallOptions) => Promise<GetApiKeysHttpResponse>;
type GetApiKeysHttpResponse = {
    data: ApiKeyPage;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetApiKeysHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetApiKeysHttpResponse>;
};
type GetApiKeysHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Creates an API key resource.
 *
 * @param body an object with the body content
 * @throws CreateApiKeyHttpError
 */
declare const createApiKey: (body: ApiKeyBody, options?: ApiCallOptions) => Promise<CreateApiKeyHttpResponse>;
type CreateApiKeyHttpResponse = {
    data: ApiKeyWithToken;
    headers: Headers;
    status: number;
};
type CreateApiKeyHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Gets the API keys configuration for a given tenant ID.
 *
 * @param tenantId The tenant ID of the API keys configuration to be retrieved.
 * @throws GetApiKeysConfigHttpError
 */
declare const getApiKeysConfig: (tenantId: string, options?: ApiCallOptions) => Promise<GetApiKeysConfigHttpResponse>;
type GetApiKeysConfigHttpResponse = {
    data: ApiKeysConfig;
    headers: Headers;
    status: number;
};
type GetApiKeysConfigHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Updates the API keys configuration for a given tenant ID.
 *
 * @param tenantId The tenant ID of the API keys configuration to be retrieved.
 * @param body an object with the body content
 * @throws PatchApiKeysConfigHttpError
 */
declare const patchApiKeysConfig: (tenantId: string, body: ApiKeysConfigPatchSchema, options?: ApiCallOptions) => Promise<PatchApiKeysConfigHttpResponse>;
type PatchApiKeysConfigHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchApiKeysConfigHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * When the owner of the API key sends the request, the key will be removed. When a TenantAdmin sends the request, the key will be revoked.
 *
 * @param id The ID of the API key resource to be retrieved.
 * @throws DeleteApiKeyHttpError
 */
declare const deleteApiKey: (id: string, options?: ApiCallOptions) => Promise<DeleteApiKeyHttpResponse>;
type DeleteApiKeyHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteApiKeyHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Gets the API key for a given ID.
 *
 * @param id The ID of the API key resource to be retrieved.
 * @throws GetApiKeyHttpError
 */
declare const getApiKey: (id: string, options?: ApiCallOptions) => Promise<GetApiKeyHttpResponse>;
type GetApiKeyHttpResponse = {
    data: ApiKey;
    headers: Headers;
    status: number;
};
type GetApiKeyHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Updates an API key for a given ID.
 *
 * @param id The ID of the API key resource to be updated.
 * @param body an object with the body content
 * @throws PatchApiKeyHttpError
 */
declare const patchApiKey: (id: string, body: ApiKeysPatchSchema, options?: ApiCallOptions) => Promise<PatchApiKeyHttpResponse>;
type PatchApiKeyHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchApiKeyHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for api-keys api requests.
 */
declare function clearCache(): void;
interface ApiKeysAPI {
    /**
     * Lists API keys for a given tenant ID.
     *
     * @param query an object with query parameters
     * @throws GetApiKeysHttpError
     */
    getApiKeys: typeof getApiKeys;
    /**
     * Creates an API key resource.
     *
     * @param body an object with the body content
     * @throws CreateApiKeyHttpError
     */
    createApiKey: typeof createApiKey;
    /**
     * Gets the API keys configuration for a given tenant ID.
     *
     * @param tenantId The tenant ID of the API keys configuration to be retrieved.
     * @throws GetApiKeysConfigHttpError
     */
    getApiKeysConfig: typeof getApiKeysConfig;
    /**
     * Updates the API keys configuration for a given tenant ID.
     *
     * @param tenantId The tenant ID of the API keys configuration to be retrieved.
     * @param body an object with the body content
     * @throws PatchApiKeysConfigHttpError
     */
    patchApiKeysConfig: typeof patchApiKeysConfig;
    /**
     * When the owner of the API key sends the request, the key will be removed. When a TenantAdmin sends the request, the key will be revoked.
     *
     * @param id The ID of the API key resource to be retrieved.
     * @throws DeleteApiKeyHttpError
     */
    deleteApiKey: typeof deleteApiKey;
    /**
     * Gets the API key for a given ID.
     *
     * @param id The ID of the API key resource to be retrieved.
     * @throws GetApiKeyHttpError
     */
    getApiKey: typeof getApiKey;
    /**
     * Updates an API key for a given ID.
     *
     * @param id The ID of the API key resource to be updated.
     * @param body an object with the body content
     * @throws PatchApiKeyHttpError
     */
    patchApiKey: typeof patchApiKey;
    /**
     * Clears the cache for api-keys api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the api-keys api
 */
declare const apiKeysExport: ApiKeysAPI;

export { type ApiKey, type ApiKeyBody, type ApiKeyConfigPatch, type ApiKeyPage, type ApiKeyPatch, type ApiKeyWithToken, type ApiKeysAPI, type ApiKeysConfig, type ApiKeysConfigPatchSchema, type ApiKeysPatchSchema, type CreateApiKeyHttpError, type CreateApiKeyHttpResponse, type DeleteApiKeyHttpError, type DeleteApiKeyHttpResponse, type Error, type Errors, type GetApiKeyHttpError, type GetApiKeyHttpResponse, type GetApiKeysConfigHttpError, type GetApiKeysConfigHttpResponse, type GetApiKeysHttpError, type GetApiKeysHttpResponse, type Link, type PatchApiKeyHttpError, type PatchApiKeyHttpResponse, type PatchApiKeysConfigHttpError, type PatchApiKeysConfigHttpResponse, clearCache, createApiKey, apiKeysExport as default, deleteApiKey, getApiKey, getApiKeys, getApiKeysConfig, patchApiKey, patchApiKeysConfig };
