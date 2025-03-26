import { A as ApiCallOptions } from './invoke-fetch-types-BXn-uSF5.js';
import './auth-types-PkN9CAF_.js';

/**
 * Hints of any client application secrets
 */
type ClientSecrets = {
    /** The timestamp for when the client-secret record was created. */
    createdAt?: string;
    /** The identifier for the user that created the client-secret record. */
    createdBy?: string;
    /** Hint of a client application secret */
    hint: string;
}[];
/**
 * Response schema for reading a connection config
 */
type ConnectionConfigReadResponse = {
    /** Consent method */
    readonly consentMethod: string;
    /** OAuth client has been deleted by owning tenant, only applies for published clients. */
    readonly deletedByOwner?: boolean;
    /** Status */
    readonly status?: string;
};
type Error = {
    /** The unique code for the error */
    code: string;
    /** Additional details about the error */
    detail?: string;
    /** A summary of the error */
    title: string;
};
type ErrorResponse = {
    errors?: Error[];
};
type Link = {
    /** URL that defines the resource */
    href: string;
};
type Links = {
    next?: Link;
    prev?: Link;
    self?: Link;
};
/**
 * Schema for a OAuth client when listing as an admin user
 */
type OAuthClientAdminListItem = {
    /** List of allowed origins for client */
    allowedOrigins?: string[];
    /** Client application id */
    readonly clientId: string;
    /** Response schema for reading a connection config */
    connectionConfig?: ConnectionConfigReadResponse;
    /** List of allowed redirect URIs for login */
    redirectUris?: string[];
} & OAuthClientBase;
/**
 * Response schema for listing OAuth clients as an admin user
 */
type OAuthClientAdminListResponse = {
    data: OAuthClientAdminListItem[];
    links: Links;
    /** Total number of oauth clients, included only if `totalResults` query parameter is set to true. */
    totalResults?: number;
};
/**
 * Response schema for reading an OAuth client as an admin user
 */
type OAuthClientAdminReadResponse = {
    /** List of allowed origins for client */
    allowedOrigins?: string[];
    /** Client application id */
    readonly clientId: string;
    /** Hints of any client application secrets */
    readonly clientSecrets?: ClientSecrets;
    /** List of allowed redirect URIs for login */
    redirectUris?: string[];
} & OAuthClientBase;
/**
 * Base schema for OAuth client requests and responses
 */
type OAuthClientBase = {
    /** Allowed grant types, only for use with appType: 'web' */
    allowedGrantTypes?: ("client_credentials" | "urn:qlik:oauth:user-impersonation")[];
    /** List of allowed scopes for this client. For a full list of scopes see [qlik.dev/authenticate/oauth/scopes/](https://qlik.dev/authenticate/oauth/scopes/). */
    allowedScopes?: string[];
    /** Application type */
    appType: "web" | "native" | "spa" | "anonymous-embed";
    /** Client application name */
    clientName: string;
    /** URI for homepage of client */
    clientUri?: string;
    /** The timestamp for when the oauth-clients record was created. */
    createdAt: string;
    /** The timestamp for when the oauth-clients record was deleted. */
    deletedAt?: string;
    /** Client description */
    description?: string;
    /** Is set if client disabled */
    readonly disableTag?: string;
    /** URI for logo of client */
    logoUri?: string;
    /** The timestamp which is set, if the client is published. */
    publishedAt?: string;
    /** The timestamp for when the oauth-clients record was updated. */
    updatedAt?: string;
};
/**
 * Request schema for OAuth client creation
 */
type OAuthClientCreateRequest = {
    /** Allowed grant types, only for use with appType: 'web' */
    allowedGrantTypes?: ("client_credentials" | "urn:qlik:oauth:user-impersonation")[];
    /** List of allowed origins for this client, only available with SPA application type */
    allowedOrigins?: string[];
    /** List of allowed scopes for this client. For a full list of scopes see [qlik.dev/authenticate/oauth/scopes/](https://qlik.dev/authenticate/oauth/scopes/). */
    allowedScopes?: string[];
    /** Application type */
    appType: "web" | "native" | "spa" | "anonymous-embed";
    /** Client application name */
    clientName: string;
    /** URI for homepage of client */
    clientUri?: string;
    /** Client description */
    description?: string;
    /** URI for logo of client */
    logoUri?: string;
    /** List of allowed redirect URIs for login */
    redirectUris?: string[];
};
/**
 * Response schema for OAuth client creation
 */
type OAuthClientCreateResponse = {
    /** List of allowed redirect URIs for login */
    allowedOrigins?: string[];
    /** Client application id */
    readonly clientId: string;
    /** Client application secret */
    readonly clientSecret: string;
    /** List of allowed redirect URIs for login */
    redirectUris?: string[];
} & OAuthClientBase;
/**
 * Response schema for listing OAuth clients
 */
type OAuthClientListResponse = {
    data: OAuthClientReadResponse[];
    links: Links;
};
/**
 * Response schema for successfully publishing an OAuth client
 */
type OAuthClientPublishResponse = {
    /** The timestamp which is set, if the client is published. */
    publishedAt: string;
};
/**
 * Response schema for reading an OAuth client
 */
type OAuthClientReadResponse = {
    /** Client application id */
    readonly clientId: string;
} & OAuthClientBase;
/**
 * Response schema for creating an OAuth client application secret
 */
type OAuthClientSecretResponse = {
    /** Client application id */
    readonly clientId: string;
    /** Client application secret */
    readonly clientSecret: string;
    /** The timestamp for when the client-secret record was created. */
    createdAt?: string;
    /** The identifier for the user that created the client-secret record. */
    createdBy?: string;
    /** Client application hint */
    readonly hint: string;
};
/**
 * A JSON Patch document as defined in http://tools.ietf.org/html/rfc6902
 */
type OAuthClientUpdate = {
    /** The operation to be performed */
    op: "add" | "remove" | "replace";
    /** The path for the given resource field to patch */
    path: "/allowedOrigins" | "/clientName" | "/clientUri" | "/description" | "/logoUri" | "/redirectUris" | "/allowedScopes" | "/allowedGrantTypes";
    /** The value to be used for this operation. */
    value?: string | string[];
};
/**
 * A JSON Patch document as defined in http://tools.ietf.org/html/rfc6902
 */
type OAuthConnectionConfigUpdate = {
    /** The operation to be performed */
    op: "replace";
    /** The path for the given resource field to patch */
    path: "/consentMethod";
    /** The value to be used for this operation. */
    value: "required" | "trusted";
};
/**
 * Retrieve all OAuth clients.
 * @example
 * getOAuthClients(
 *   {
 *     filter: "appType eq \"spa\" and clientId eq \"b3ee66d6f21d1611efa89a425f656f6f\"",
 *     totalResults: true
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetOAuthClientsHttpError
 */
declare const getOAuthClients: (query: {
    /** The filter query that should be used to filter the list of oauth clients.  The filter syntax is defined in RFC 7644. Valid attributes for filtering are `clientId`, `clientName`, `appType`, and `tenantId`. */
    filter?: string;
    /** The number of OAuth client entries to retrieve. */
    limit?: number;
    /** The next page cursor */
    next?: string;
    /** The previous page cursor */
    prev?: string;
    /** The attribute to sort by, beginning with + for ascending and - for descending. Valid attributes for sorting are clientId, clientName, appType, tenantId, createdAt, updatedAt. */
    sort?: string;
    /** Boolean query parameter that determines if the total count of results should be included in the response. If true, the response includes the total number of results in the `totalResults` field. If false or not included in the query, `totalResults` will be excluded from the response. */
    totalResults?: boolean;
}, options?: ApiCallOptions) => Promise<GetOAuthClientsHttpResponse>;
type GetOAuthClientsHttpResponse = {
    data: OAuthClientAdminListResponse | OAuthClientListResponse;
    headers: Headers;
    status: 200;
};
type GetOAuthClientsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 401 | 403 | 500 | 503;
};
/**
 * Create a new OAuth client. Requires `TenantAdmin` role when created in-tenant. `appType` cannot be changed after creation. Consent method and published state can be changed after creation. For supported `appType`, use `PATCH /oauth-clients/{id}/connection-configs/me` to change consent method, and `POST /oauth-clients/{id}/actions/publish` to change the client to published after creation.
 *
 * @param body an object with the body content
 * @throws CreateOAuthClientHttpError
 */
declare const createOAuthClient: (body: OAuthClientCreateRequest, options?: ApiCallOptions) => Promise<CreateOAuthClientHttpResponse>;
type CreateOAuthClientHttpResponse = {
    data: OAuthClientCreateResponse;
    headers: Headers;
    status: 201;
};
type CreateOAuthClientHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Delete the specified OAuth client.
 *
 * @param id The unique identifier for the OAuth client
 * @throws DeleteOAuthClientHttpError
 */
declare const deleteOAuthClient: (id: string, options?: ApiCallOptions) => Promise<DeleteOAuthClientHttpResponse>;
type DeleteOAuthClientHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type DeleteOAuthClientHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Retrieves the specified OAuth client.
 *
 * @param id The unique identifier for the OAuth client
 * @throws GetOAuthClientHttpError
 */
declare const getOAuthClient: (id: string, options?: ApiCallOptions) => Promise<GetOAuthClientHttpResponse>;
type GetOAuthClientHttpResponse = {
    data: OAuthClientAdminReadResponse | OAuthClientReadResponse;
    headers: Headers;
    status: 200;
};
type GetOAuthClientHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Updates the specified OAuth client.
 *
 * @param id The unique identifier for the OAuth client
 * @param body an object with the body content
 * @throws PatchOAuthClientHttpError
 */
declare const patchOAuthClient: (id: string, body: OAuthClientUpdate[], options?: ApiCallOptions) => Promise<PatchOAuthClientHttpResponse>;
type PatchOAuthClientHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type PatchOAuthClientHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Publishes the specified OAuth client. By default, OAuth clients are bound to the tenant that created it. Publishing shares the client and makes it available to all other tenants within a region. Third-party applications connecting to Qlik Cloud can then have the same client ID for all Qlik Cloud tenants.
 *
 * @param id The unique identifier for the OAuth client
 * @throws PublishOAuthClientHttpError
 */
declare const publishOAuthClient: (id: string, options?: ApiCallOptions) => Promise<PublishOAuthClientHttpResponse>;
type PublishOAuthClientHttpResponse = {
    data: OAuthClientPublishResponse;
    headers: Headers;
    status: 201;
};
type PublishOAuthClientHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Create a new client secret for the specified OAuth client. An OAuth client can have a maximum of 5 client secrets at one time.
 *
 * @param id The unique identifier for the OAuth client
 * @throws CreateOAuthClientSecretHttpError
 */
declare const createOAuthClientSecret: (id: string, options?: ApiCallOptions) => Promise<CreateOAuthClientSecretHttpResponse>;
type CreateOAuthClientSecretHttpResponse = {
    data: OAuthClientSecretResponse;
    headers: Headers;
    status: 201;
};
type CreateOAuthClientSecretHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Deletes a specific client secret for an OAuth client.
 *
 * @param id The unique identifier for the OAuth client
 * @param hint The unique identifier for the OAuth secret
 * @throws DeleteOAuthClientSecretHttpError
 */
declare const deleteOAuthClientSecret: (id: string, hint: string, options?: ApiCallOptions) => Promise<DeleteOAuthClientSecretHttpResponse>;
type DeleteOAuthClientSecretHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type DeleteOAuthClientSecretHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Deletes the connection config for the calling tenant, related to the supplied client id.
 *
 * @param id The unique identifier for the OAuth client
 * @throws DeleteOAuthClientConnectionConfigHttpError
 */
declare const deleteOAuthClientConnectionConfig: (id: string, options?: ApiCallOptions) => Promise<DeleteOAuthClientConnectionConfigHttpResponse>;
type DeleteOAuthClientConnectionConfigHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type DeleteOAuthClientConnectionConfigHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Get configuration for consent method and status.
 *
 * @param id The unique identifier for an OAuth client
 * @throws GetOAuthClientConnectionConfigHttpError
 */
declare const getOAuthClientConnectionConfig: (id: string, options?: ApiCallOptions) => Promise<GetOAuthClientConnectionConfigHttpResponse>;
type GetOAuthClientConnectionConfigHttpResponse = {
    data: ConnectionConfigReadResponse;
    headers: Headers;
    status: 200;
};
type GetOAuthClientConnectionConfigHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Updates the consent method for the specified OAuth client.
 *
 * @param id The unique identifier for the OAuth client
 * @param body an object with the body content
 * @throws PatchOAuthClientConnectionConfigHttpError
 */
declare const patchOAuthClientConnectionConfig: (id: string, body: OAuthConnectionConfigUpdate[], options?: ApiCallOptions) => Promise<PatchOAuthClientConnectionConfigHttpResponse>;
type PatchOAuthClientConnectionConfigHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type PatchOAuthClientConnectionConfigHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Clears the cache for oauth-clients api requests.
 */
declare function clearCache(): void;
interface OauthClientsAPI {
    /**
     * Retrieve all OAuth clients.
     * @example
     * getOAuthClients(
     *   {
     *     filter: "appType eq \"spa\" and clientId eq \"b3ee66d6f21d1611efa89a425f656f6f\"",
     *     totalResults: true
     *   }
     * )
     *
     * @param query an object with query parameters
     * @throws GetOAuthClientsHttpError
     */
    getOAuthClients: typeof getOAuthClients;
    /**
     * Create a new OAuth client. Requires `TenantAdmin` role when created in-tenant. `appType` cannot be changed after creation. Consent method and published state can be changed after creation. For supported `appType`, use `PATCH /oauth-clients/{id}/connection-configs/me` to change consent method, and `POST /oauth-clients/{id}/actions/publish` to change the client to published after creation.
     *
     * @param body an object with the body content
     * @throws CreateOAuthClientHttpError
     */
    createOAuthClient: typeof createOAuthClient;
    /**
     * Delete the specified OAuth client.
     *
     * @param id The unique identifier for the OAuth client
     * @throws DeleteOAuthClientHttpError
     */
    deleteOAuthClient: typeof deleteOAuthClient;
    /**
     * Retrieves the specified OAuth client.
     *
     * @param id The unique identifier for the OAuth client
     * @throws GetOAuthClientHttpError
     */
    getOAuthClient: typeof getOAuthClient;
    /**
     * Updates the specified OAuth client.
     *
     * @param id The unique identifier for the OAuth client
     * @param body an object with the body content
     * @throws PatchOAuthClientHttpError
     */
    patchOAuthClient: typeof patchOAuthClient;
    /**
     * Publishes the specified OAuth client. By default, OAuth clients are bound to the tenant that created it. Publishing shares the client and makes it available to all other tenants within a region. Third-party applications connecting to Qlik Cloud can then have the same client ID for all Qlik Cloud tenants.
     *
     * @param id The unique identifier for the OAuth client
     * @throws PublishOAuthClientHttpError
     */
    publishOAuthClient: typeof publishOAuthClient;
    /**
     * Create a new client secret for the specified OAuth client. An OAuth client can have a maximum of 5 client secrets at one time.
     *
     * @param id The unique identifier for the OAuth client
     * @throws CreateOAuthClientSecretHttpError
     */
    createOAuthClientSecret: typeof createOAuthClientSecret;
    /**
     * Deletes a specific client secret for an OAuth client.
     *
     * @param id The unique identifier for the OAuth client
     * @param hint The unique identifier for the OAuth secret
     * @throws DeleteOAuthClientSecretHttpError
     */
    deleteOAuthClientSecret: typeof deleteOAuthClientSecret;
    /**
     * Deletes the connection config for the calling tenant, related to the supplied client id.
     *
     * @param id The unique identifier for the OAuth client
     * @throws DeleteOAuthClientConnectionConfigHttpError
     */
    deleteOAuthClientConnectionConfig: typeof deleteOAuthClientConnectionConfig;
    /**
     * Get configuration for consent method and status.
     *
     * @param id The unique identifier for an OAuth client
     * @throws GetOAuthClientConnectionConfigHttpError
     */
    getOAuthClientConnectionConfig: typeof getOAuthClientConnectionConfig;
    /**
     * Updates the consent method for the specified OAuth client.
     *
     * @param id The unique identifier for the OAuth client
     * @param body an object with the body content
     * @throws PatchOAuthClientConnectionConfigHttpError
     */
    patchOAuthClientConnectionConfig: typeof patchOAuthClientConnectionConfig;
    /**
     * Clears the cache for oauth-clients api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the oauth-clients api
 */
declare const oauthClientsExport: OauthClientsAPI;

export { type ClientSecrets, type ConnectionConfigReadResponse, type CreateOAuthClientHttpError, type CreateOAuthClientHttpResponse, type CreateOAuthClientSecretHttpError, type CreateOAuthClientSecretHttpResponse, type DeleteOAuthClientConnectionConfigHttpError, type DeleteOAuthClientConnectionConfigHttpResponse, type DeleteOAuthClientHttpError, type DeleteOAuthClientHttpResponse, type DeleteOAuthClientSecretHttpError, type DeleteOAuthClientSecretHttpResponse, type Error, type ErrorResponse, type GetOAuthClientConnectionConfigHttpError, type GetOAuthClientConnectionConfigHttpResponse, type GetOAuthClientHttpError, type GetOAuthClientHttpResponse, type GetOAuthClientsHttpError, type GetOAuthClientsHttpResponse, type Link, type Links, type OAuthClientAdminListItem, type OAuthClientAdminListResponse, type OAuthClientAdminReadResponse, type OAuthClientBase, type OAuthClientCreateRequest, type OAuthClientCreateResponse, type OAuthClientListResponse, type OAuthClientPublishResponse, type OAuthClientReadResponse, type OAuthClientSecretResponse, type OAuthClientUpdate, type OAuthConnectionConfigUpdate, type OauthClientsAPI, type PatchOAuthClientConnectionConfigHttpError, type PatchOAuthClientConnectionConfigHttpResponse, type PatchOAuthClientHttpError, type PatchOAuthClientHttpResponse, type PublishOAuthClientHttpError, type PublishOAuthClientHttpResponse, clearCache, createOAuthClient, createOAuthClientSecret, oauthClientsExport as default, deleteOAuthClient, deleteOAuthClientConnectionConfig, deleteOAuthClientSecret, getOAuthClient, getOAuthClientConnectionConfig, getOAuthClients, patchOAuthClient, patchOAuthClientConnectionConfig, publishOAuthClient };
