import { A as ApiCallOptions } from './invoke-fetch-types-BLrpeZOL.js';
import './auth-types-PkN9CAF_.js';

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
    /** The ID of the subject for the API key. For SCIM the format is `SCIM\\{{IDP-ID}}`, where `{{IDP-ID}}` is the ID of the IDP in Qlik. For users, use their user ID, e.g. `64ef645a3b7009d55dee5a2b`. */
    sub: string;
    /** Type of the subject. For SCIM, it should be `externalClient`. */
    subType: "user" | "externalClient";
    /** The tenant ID. */
    tenantId: string;
};
type ApiKeyBody = {
    /** Text that describes the API key. */
    description: string;
    /** The expiry of the API key, in ISO8601 duration format. For example, `P7D` sets expiry after 7 days. If not provided, defaults to the maximum API key or SCIM key expiry configured in the tenant. */
    expiry?: string;
    /** The ID of the subject for the API key. For SCIM the format is `SCIM\\{{IDP-ID}}`, where `{{IDP-ID}}` is the ID of the IDP in Qlik. When creating an API key for a user, this is their user ID, e.g. `64ef645a3b7009d55dee5a2b`, and will default to the requesting user if not provided. User must be assigned the `Developer` role. */
    sub?: string;
    /** Type of the subject. For SCIM, it should be `externalClient`. If not specified, defaults to `user`. */
    subType?: "user" | "externalClient";
};
/**
 * A JSON Patch document as defined in https://datatracker.ietf.org/doc/html/rfc6902.
 */
type ApiKeyConfigPatch = {
    /** The operation to be performed. */
    op: "replace";
    /** The path for the given resource field to patch. */
    path: "/api_keys_enabled" | "/max_api_key_expiry" | "/max_keys_per_user" | "/scim_externalClient_expiry";
    /** The value to be used for this operation. */
    value: unknown;
};
/**
 * A JSON Patch document as defined in https://datatracker.ietf.org/doc/html/rfc6902.
 */
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
    /** Enables or disables user API key functionality for the specified tenant. */
    api_keys_enabled?: boolean;
    /** The maximum lifetime, in ISO8601 duration format, for which an API key can be issued for the specified tenant, e.g. `P7D` for 7 days. */
    max_api_key_expiry?: string;
    /** The maximum number of active API keys that any user can create for the specified tenant. */
    max_keys_per_user?: number;
    /** The expiry of the scim `externalClient` token in ISO8601 duration format, e.g. `P365D` for 365 days. Used during the creation of an `externalClient` API key for configuring a SCIM compatible Identity Provider. */
    scim_externalClient_expiry?: string;
};
type ApiKeysConfigPatchSchema = ApiKeyConfigPatch[];
type ApiKeysPatchSchema = ApiKeyPatch[];
/**
 * An error object.
 */
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
type RetryAfterHeader = {
    /** The amount of seconds to wait before retrying the request. */
    "retry-after"?: number;
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
 * Lists API keys for the tenant. To list API keys owned by other users, requesting user must be assigned the `TenantAdmin` role.
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
    /** The ID of the subject. For SCIM the format is `SCIM\\{{IDP-ID}}`, where `{{IDP-ID}}` is the ID of the IDP in Qlik. For users, use their user ID, e.g. `64ef645a3b7009d55dee5a2b`. */
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
 * Creates an API key, either for a user, or for configuring SCIM for a compatible Identity Provider.
 * Sending `sub` and `subType` is required only for creating SCIM keys.
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
 * Retrieves the API key configuration for a tenant.
 *
 * @param tenantId The tenant ID from which you wish to retrieve the API key configuration.
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
 * Deletes or revokes an API key for a given API key ID. When the owner of the API key sends the request, the key will be deleted and removed from the tenant. When a user assigned the `TenantAdmin` role sends the request, the key will be disabled and marked as revoked.
 *
 * @param id The ID of the API key to be retrieved.
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
 * Returns the API key for a given API key ID.
 *
 * @param id The ID of the API key to be retrieved.
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
 * Updates an API key description for a given API key ID.
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
     * Lists API keys for the tenant. To list API keys owned by other users, requesting user must be assigned the `TenantAdmin` role.
     *
     * @param query an object with query parameters
     * @throws GetApiKeysHttpError
     */
    getApiKeys: typeof getApiKeys;
    /**
     * Creates an API key, either for a user, or for configuring SCIM for a compatible Identity Provider.
     * Sending `sub` and `subType` is required only for creating SCIM keys.
     *
     * @param body an object with the body content
     * @throws CreateApiKeyHttpError
     */
    createApiKey: typeof createApiKey;
    /**
     * Retrieves the API key configuration for a tenant.
     *
     * @param tenantId The tenant ID from which you wish to retrieve the API key configuration.
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
     * Deletes or revokes an API key for a given API key ID. When the owner of the API key sends the request, the key will be deleted and removed from the tenant. When a user assigned the `TenantAdmin` role sends the request, the key will be disabled and marked as revoked.
     *
     * @param id The ID of the API key to be retrieved.
     * @throws DeleteApiKeyHttpError
     */
    deleteApiKey: typeof deleteApiKey;
    /**
     * Returns the API key for a given API key ID.
     *
     * @param id The ID of the API key to be retrieved.
     * @throws GetApiKeyHttpError
     */
    getApiKey: typeof getApiKey;
    /**
     * Updates an API key description for a given API key ID.
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

export { type ApiKey, type ApiKeyBody, type ApiKeyConfigPatch, type ApiKeyPage, type ApiKeyPatch, type ApiKeyWithToken, type ApiKeysAPI, type ApiKeysConfig, type ApiKeysConfigPatchSchema, type ApiKeysPatchSchema, type CreateApiKeyHttpError, type CreateApiKeyHttpResponse, type DeleteApiKeyHttpError, type DeleteApiKeyHttpResponse, type Error, type Errors, type GetApiKeyHttpError, type GetApiKeyHttpResponse, type GetApiKeysConfigHttpError, type GetApiKeysConfigHttpResponse, type GetApiKeysHttpError, type GetApiKeysHttpResponse, type Link, type PatchApiKeyHttpError, type PatchApiKeyHttpResponse, type PatchApiKeysConfigHttpError, type PatchApiKeysConfigHttpResponse, type RetryAfterHeader, clearCache, createApiKey, apiKeysExport as default, deleteApiKey, getApiKey, getApiKeys, getApiKeysConfig, patchApiKey, patchApiKeysConfig };
