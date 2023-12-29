import { A as ApiCallOptions } from './global.types-1rNhDH7j.js';
import './auth-types-nnUcWhuU.js';

type BaseIDP = {
    /** Indicates whether the IdP is available for use. */
    active?: boolean;
    clockToleranceSec?: number;
    /** When the flag is true, new users should be created when logging in for the first time. */
    createNewUsersOnLogin?: boolean;
    /** The timestamp for when the IdP was created. */
    created?: string;
    description?: string;
    /** The unique identifier for the IdP. */
    id?: string;
    /** Indicates the type of connection with the IdP, either interactive login or a machine to machine connection. */
    interactive?: boolean;
    /** The timestamp for when the IdP was last updated. */
    lastUpdated?: string;
    meta?: unknown;
    /** Direct the user on logout to a specific URI. */
    postLogoutRedirectUri?: string;
    /** The protocol to be used for communicating with the identity provider. Valid values are `OIDC`, `jwtAuth`, and `qsefw-local-bearer-token`. */
    protocol?: IDPProtocol;
    /** The identity provider to be used. If protocol is `OIDC`, the valid values are `auth0`, `okta`, `generic`, `salesforce`, `keycloak`, `adfs`, and `azureAD`. If protocol is `jwtAuth`, the valid value is `external`. */
    provider?: IDPProvider;
    /** The tenant identifiers associated with the given IdP. */
    tenantIds?: string[];
};
type CreateJWTAuthPayload = {
    /** There can be clock skew between the IdP and Qlik's login server, in these cases a tolerance can be set, decimals will be rounded off. */
    clockToleranceSec?: number;
    description?: string;
    /** Required IdP configurations. */
    options: {
        /** The JWT issuer. */
        issuer: string;
        /** Keys for verifying JWTs. Limited to 1 key per identity provider. */
        staticKeys: {
            /** Key ID used to sign the JWTs. */
            kid: string;
            /** Pem-encoded public key for verifying the JWTs. */
            pem: string;
        }[];
    };
    /** The protocol to be used for communicating with the identity provider. */
    protocol: "jwtAuth";
    /** The identity provider to be used. */
    provider: "external";
    /** The tenant identifiers that map to the given IdP. */
    tenantIds?: string[];
};
type CreateOIDCPayload = {
    /** There can be clock skew between the IdP and Qlik's login server. In these cases, a tolerance can be set, decimals will be rounded off. */
    clockToleranceSec?: number;
    /** Tells the consumer of the IdP that new users should be created on login if they don't exist. */
    createNewUsersOnLogin?: boolean;
    description?: string;
    /** Indicates whether the IdP is meant for interactive login. */
    interactive: boolean;
    /** Required OIDC configurations for non-interactive IdPs and interactive IdPs with `skipVerify` flag enabled. */
    options?: {
        /** Only clients with IDs in this list will be allowed API access. A blank list or empty value means any client IDs authenticated against the IdP will be allowed access. */
        allowedClientIds?: string[];
        /** Allows for setting audience in access tokens. */
        audience?: string;
        /** Mappings from claim name to an array of JSON pointers that point to locations in the claims from the IdP to retrieve the value from. */
        claimsMapping: ClaimsMappingNonInteractive;
        /** The OpenID configuration endpoint. (Ex: https://<domain>/.well-known/openid-configuration). Required if openid_configuration is not given. */
        discoveryUrl?: string;
        /** OpenID configuration */
        openid_configuration?: OpenIDConfiguration;
        /** The realm identifier for the IdP. */
        realm?: string;
    };
    /** Required OIDC configurations for interactive IdPs that require verification. */
    pendingOptions?: {
        /** When true, the `offline_access` scope will not be requested from the IdP where applicable. */
        blockOfflineAccessScope?: boolean;
        /** Mappings from claim name to an array of JSON pointers that point to locations in the claims from the IdP to retrieve the value from. */
        claimsMapping: ClaimsMappingInteractive;
        /** The client identifier used as part of authenticating an interactive identity provider. */
        clientId: string;
        /** The client secret used as part of authenticating an interactive identity provider. */
        clientSecret: string;
        /** The OpenID configuration endpoint. (Ex: https://<domain>/.well-known/openid-configuration). Required if openid_configuration is not given. */
        discoveryUrl?: string;
        /** Only ADFS and AzureAD IdPs can set this property. For ADFS and AzureAD, it defaults to false. For other IdPs, it defaults to undefined. */
        emailVerifiedAlwaysTrue?: boolean;
        /** OpenID configuration */
        openid_configuration?: OpenIDConfiguration;
        /** The realm identifier for the IdP. */
        realm?: string;
        /** Scope which will be sent along with token requests to the IdP. Scopes should be space delimited. Will default to certain values depending on the IdP provider. */
        scope?: string;
        /** If true, will use the claims from the ID token. By default it is set to true for ADFS and AzureAD. */
        useClaimsFromIdToken?: boolean;
    };
    /** Direct the user on logout to a specific URI. */
    postLogoutRedirectUri?: string;
    /** The protocol to be used for communicating with the identity provider. */
    protocol: "OIDC";
    /** The identity provider to be used. */
    provider: "auth0" | "okta" | "generic" | "salesforce" | "keycloak" | "adfs" | "azureAD";
    /** If set to `true`, skips IdP verification process and assumes the IdP is verified. */
    skipVerify?: boolean;
    /** The tenant identifiers that map to the given IdP. */
    tenantIds?: string[];
};
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
        /** A JSON pointer to the property that caused the error. */
        pointer?: string;
    };
    /** The HTTP status code. */
    status?: number;
    /** Summary of the problem. */
    title: string;
};
type Errors = {
    errors?: Error[];
};
type IDP = IDPOIDC | IDPJWTAuth;
type IDPArray = {
    /** An array of IdPs. */
    data?: IDP[];
    /** Contains pagination links. */
    links?: Links;
};
type IDPJWTAuth = BaseIDP & {
    options?: {
        /** The expected JWT issuer */
        issuer?: string;
        staticKeys?: {
            /** Key ID used to sign the JWTs. */
            kid?: string;
            /** Pem-encoded public key for verifying the JWTs. */
            pem?: string;
        }[];
    };
};
type IDPMeta = {
    /** A link to direct you to where you can upgrade your trial or manage your subscriptions. Only available if the default identity provider is used (no custom interactive identity providers are active). */
    upgradeSubscriptionLink?: string;
    /** A link to direct you to where you can manage your Qlik account. Only available if the default identity provider is used (no custom interactive identity providers are active). */
    userPortalLink?: string;
};
type IDPOIDC = BaseIDP & {
    options?: IDPOptions;
    pendingOptions?: IDPOptions;
    pendingResult?: PendingResult;
    /** The state of pendingOptions. This represents the latest IdP test result. */
    pendingState?: "verified" | "pending" | "error";
};
type IDPOptions = {
    /** If true, the `offline_access` scope will not be requested from the IdP, where applicable. */
    blockOfflineAccessScope?: boolean;
    /** Mappings from claim name to an array of JSON pointers that point to locations in the claims from the IdP to retrieve the value from. */
    claimsMapping?: ClaimsMappingInteractive;
    /** The client identifier used as part of authenticating an interactive identity provider. */
    clientId?: string;
    /** The client secret used as part of authenticating an interactive identity provider. */
    clientSecret?: string;
    /** The OpenID configuration endpoint. (Ex: https://<domain>/.well-known/openid-configuration). */
    discoveryUrl?: string;
    /** Determines if email_verified should be always true. This field is only used in ADFS and AzureAD IdPs. */
    emailVerifiedAlwaysTrue?: boolean;
    /** This field is only used in Qlik Sense Enterprise Client-Managed IdPs. */
    issuer?: string;
    /** OpenID configuration */
    openid_configuration?: OpenIDConfiguration;
    /** The realm identifier for the IdP. */
    realm?: string;
    /** Scope that will be sent along with token requests to the IdP. */
    scope?: string;
};
type IDPPatchSchema = PatchOIDCPayload[] | PatchJWTAuthPayload[];
type IDPPostSchema = CreateOIDCPayload | CreateJWTAuthPayload;
type IDPProtocol = "OIDC" | "jwtAuth" | "qsefw-local-bearer-token";
type IDPProvider = "auth0" | "okta" | "qlik" | "generic" | "salesforce" | "keycloak" | "adfs" | "external" | "azureAD";
type IDPsStatus = {
    /** The number of active interactive IdPs. */
    active_interactive_idps_count?: number;
    /** A list of IdP metadata. */
    idps_metadata?: {
        /** Indicates whether the IdP is available for use. */
        active?: boolean;
        /** Indicates whether the IdP is meant for interactive login. */
        interactive?: boolean;
        /** The identity provider to be used. If protocol is `OIDC`, the valid values are `auth0`, `okta`, `generic`, `salesforce`, `keycloak`, `adfs`, and `azureAD`. If protocol is `jwtAuth`, the valid value is `external`. */
        provider?: IDPProvider;
    }[];
};
type Links = {
    next?: {
        /** Link to the next page of items. */
        href?: string;
    };
    prev?: {
        /** Link to the previous page of items. */
        href?: string;
    };
    self?: {
        /** Link to the current page of items. */
        href?: string;
    };
};
type OpenIDConfiguration = {
    /** OAuth 2.0 Authorization Endpoint */
    authorization_endpoint: string;
    /** URL at the OP to which an RP can perform a redirect to request that the End-User be logged out at the OP. */
    end_session_endpoint?: string;
    /** The introspection endpoint is an OAuth 2.0 endpoint that takes a parameter representing an OAuth 2.0 token and returns a JSON [RFC7159] document representing the meta information. */
    introspection_endpoint?: string;
    /** OpenID Provider issuer */
    issuer: string;
    /** URL of the OP's JSON Web Key Set [JWK] document */
    jwks_uri: string;
    /** OAuth 2.0 Token Endpoint */
    token_endpoint: string;
    /** URL of the OP's UserInfo Endpoint */
    userinfo_endpoint?: string;
};
type PatchJWTAuthPayload = {
    /** The "operation" to be performed on a given IdP. */
    op: "replace";
    /** The "path" to the part of the IdP document. */
    path?: "/description";
    /** The "value" data type is dependent on the path value being used. */
    value?: unknown;
};
type PatchOIDCPayload = {
    /** The "operation" to be performed on a given IdP. Currently supports a custom operation value called "promote-options" that allows the test configuration to be promoted to the current configuration used for login. */
    op: "replace" | "promote-options";
    /** The "path" to the part of the IdP document. */
    path?: "/active" | "/description" | "/meta" | "/options" | "/options/realm" | "/options/discoveryUrl" | "/options/claimsMapping" | "/pendingOptions" | "/pendingOptions/realm" | "/pendingOptions/discoveryUrl" | "/pendingOptions/clientId" | "/pendingOptions/clientSecret" | "/pendingOptions/emailVerifiedAlwaysTrue" | "/pendingOptions/claimsMapping" | "/postLogoutRedirectUri" | "/clockToleranceSec";
    /** The "value" data type is dependent on the path value being used. */
    value?: unknown;
};
type PendingResult = {
    /** A unique readable error message based on the error that has occurred. */
    error?: string;
    /** The claims retrieved from the external IdP. */
    idpClaims?: unknown;
    oauth2Error?: {
        /** An error code to identity the authentication error. */
        error: string;
        /** An optional human-readable description for the given error code. */
        errorDescription?: string;
        /** An optional URI that includes additional information about the given error. */
        errorURI?: string;
    };
    /** The resultant claims based on the claims received from the external IdP. */
    resultantClaims?: unknown;
    /** The timestamp for when the test was started for an IdP configuration. This field is only available during lifespan of the test. */
    started?: string;
    /** The status of the IdP configuration being tested. */
    status: "success" | "pending" | "error" | "claimsError" | "callbackError" | "tokenError" | "protocolError" | "networkError" | "configChangedDuringTestError";
};
type ClaimsMappingInteractive = {
    /** A list of JSON pointers used to map the user's client ID. */
    client_id?: string[];
    /** A list of JSON pointers used to map the user's email. */
    email?: string[];
    /** A list of JSON pointers used to map the user's email_verified claim. */
    email_verified?: string[];
    /** A list of JSON pointers used to map the user's groups. */
    groups?: string[];
    /** A list of JSON pointers used to map the user's locale. */
    locale?: string[];
    /** A list of JSON pointers used to map the user's name. */
    name?: string[];
    /** A list of JSON pointers used to map the user's picture. */
    picture?: string[];
    /** A list of JSON pointers used to map the user's subject. */
    sub?: string[];
    /** A list of JSON pointers used to map the user's zoneinfo. */
    zoneinfo?: string[];
};
type ClaimsMappingNonInteractive = {
    /** A list of JSON pointers used to map the user's client ID. */
    client_id?: string[];
    /** A list of JSON pointers used to map the user's subject. */
    sub?: string[];
};
/**
 * This endpoint retrieves one or more identity providers from the service. The tenantID in the JWT will be used to fetch the identity provider.
 *
 * @param query an object with query parameters
 * @throws GetIdpsHttpError
 */
declare const getIdps: (query: {
    /** If provided, filters the results by the active field. */
    active?: boolean;
    /** The number of IdP entries to retrieve. */
    limit?: number;
    /** The next page cursor. */
    next?: string;
    /** The previous page cursor. */
    prev?: string;
}, options?: ApiCallOptions) => Promise<GetIdpsHttpResponse>;
type GetIdpsHttpResponse = {
    data: IDPArray;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetIdpsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetIdpsHttpResponse>;
};
type GetIdpsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * This endpoint creates an identity provider resource. It returns a 201 Created when creation is successful with a header "QLIK-IDP-POPTS" (A unique string representing a hash of the current configuration being tested), returns a 403 Forbidden for a non TenantAdmin user JWT or if the tenantID in the JWT does not match with any of the tenantIDs in the payload. An IdP can be created with Pending Options or options depending whether the IdP is interactive or not.
 *
 * @param body an object with the body content
 * @throws CreateIdpHttpError
 */
declare const createIdp: (body: IDPPostSchema, options?: ApiCallOptions) => Promise<CreateIdpHttpResponse>;
type CreateIdpHttpResponse = {
    data: IDP;
    headers: Headers;
    status: number;
};
type CreateIdpHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * This endpoint retrieves identity providers' metadata.
 *
 * @throws GetIdpWellKnownMetaDataHttpError
 */
declare const getIdpWellKnownMetaData: (options?: ApiCallOptions) => Promise<GetIdpWellKnownMetaDataHttpResponse>;
type GetIdpWellKnownMetaDataHttpResponse = {
    data: unknown;
    headers: Headers;
    status: number;
};
type GetIdpWellKnownMetaDataHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Returns the active interactive IdP metadata
 *
 * @throws GetMyIdpMetaHttpError
 */
declare const getMyIdpMeta: (options?: ApiCallOptions) => Promise<GetMyIdpMetaHttpResponse>;
type GetMyIdpMetaHttpResponse = {
    data: IDPMeta;
    headers: Headers;
    status: number;
};
type GetMyIdpMetaHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * This endpoint retrieves the status of IdP configurations. Requires TenantAdmin role.
 *
 * @throws GetIdpStatusesHttpError
 */
declare const getIdpStatuses: (options?: ApiCallOptions) => Promise<GetIdpStatusesHttpResponse>;
type GetIdpStatusesHttpResponse = {
    data: IDPsStatus;
    headers: Headers;
    status: number;
};
type GetIdpStatusesHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * This endpoint deletes an identity provider from the service. It returns a valid 204 when the IdP is deleted. Only a user with the role of TenantAdmin and tenant access can delete an associated IdP. Edge-auth service can also delete.
 *
 * @param id The identity provider ID.
 * @throws DeleteIdpHttpError
 */
declare const deleteIdp: (id: string, options?: ApiCallOptions) => Promise<DeleteIdpHttpResponse>;
type DeleteIdpHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteIdpHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * This endpoint is used to retrieve an identity provider from the service. It returns a valid 200 OK response when the IdP exists and the user (TenantAdmin) or service (edge-auth) is authorized to view the contents. Additionally, returns a header "QLIK-IDP-POPTS" (A unique string representing a hash of the current configuration being tested). It returns a 404 Not Found if the criteria is not met.
 *
 * @param id The identity provider ID.
 * @throws GetIdpHttpError
 */
declare const getIdp: (id: string, options?: ApiCallOptions) => Promise<GetIdpHttpResponse>;
type GetIdpHttpResponse = {
    data: IDP;
    headers: Headers;
    status: number;
};
type GetIdpHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * This endpoint patches an identity provider from the service. It returns a valid 204 when the IdP is patched. Only an edge-auth service request or a user with the role of TenantAdmin can patch an associated IdP. Partial failure is treated as complete failure and returns an error.
 *
 * @param id The identity provider ID.
 * @param body an object with the body content
 * @throws PatchIdpHttpError
 */
declare const patchIdp: (id: string, body: IDPPatchSchema, options?: ApiCallOptions) => Promise<PatchIdpHttpResponse>;
type PatchIdpHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchIdpHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for identity-providers api requests.
 */
declare function clearCache(): void;
interface IdentityProvidersAPI {
    /**
     * This endpoint retrieves one or more identity providers from the service. The tenantID in the JWT will be used to fetch the identity provider.
     *
     * @param query an object with query parameters
     * @throws GetIdpsHttpError
     */
    getIdps: typeof getIdps;
    /**
     * This endpoint creates an identity provider resource. It returns a 201 Created when creation is successful with a header "QLIK-IDP-POPTS" (A unique string representing a hash of the current configuration being tested), returns a 403 Forbidden for a non TenantAdmin user JWT or if the tenantID in the JWT does not match with any of the tenantIDs in the payload. An IdP can be created with Pending Options or options depending whether the IdP is interactive or not.
     *
     * @param body an object with the body content
     * @throws CreateIdpHttpError
     */
    createIdp: typeof createIdp;
    /**
     * This endpoint retrieves identity providers' metadata.
     *
     * @throws GetIdpWellKnownMetaDataHttpError
     */
    getIdpWellKnownMetaData: typeof getIdpWellKnownMetaData;
    /**
     * Returns the active interactive IdP metadata
     *
     * @throws GetMyIdpMetaHttpError
     */
    getMyIdpMeta: typeof getMyIdpMeta;
    /**
     * This endpoint retrieves the status of IdP configurations. Requires TenantAdmin role.
     *
     * @throws GetIdpStatusesHttpError
     */
    getIdpStatuses: typeof getIdpStatuses;
    /**
     * This endpoint deletes an identity provider from the service. It returns a valid 204 when the IdP is deleted. Only a user with the role of TenantAdmin and tenant access can delete an associated IdP. Edge-auth service can also delete.
     *
     * @param id The identity provider ID.
     * @throws DeleteIdpHttpError
     */
    deleteIdp: typeof deleteIdp;
    /**
     * This endpoint is used to retrieve an identity provider from the service. It returns a valid 200 OK response when the IdP exists and the user (TenantAdmin) or service (edge-auth) is authorized to view the contents. Additionally, returns a header "QLIK-IDP-POPTS" (A unique string representing a hash of the current configuration being tested). It returns a 404 Not Found if the criteria is not met.
     *
     * @param id The identity provider ID.
     * @throws GetIdpHttpError
     */
    getIdp: typeof getIdp;
    /**
     * This endpoint patches an identity provider from the service. It returns a valid 204 when the IdP is patched. Only an edge-auth service request or a user with the role of TenantAdmin can patch an associated IdP. Partial failure is treated as complete failure and returns an error.
     *
     * @param id The identity provider ID.
     * @param body an object with the body content
     * @throws PatchIdpHttpError
     */
    patchIdp: typeof patchIdp;
    /**
     * Clears the cache for identity-providers api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the identity-providers api
 */
declare const identityProvidersExport: IdentityProvidersAPI;

export { type BaseIDP, type ClaimsMappingInteractive, type ClaimsMappingNonInteractive, type CreateIdpHttpError, type CreateIdpHttpResponse, type CreateJWTAuthPayload, type CreateOIDCPayload, type DeleteIdpHttpError, type DeleteIdpHttpResponse, type Error, type Errors, type GetIdpHttpError, type GetIdpHttpResponse, type GetIdpStatusesHttpError, type GetIdpStatusesHttpResponse, type GetIdpWellKnownMetaDataHttpError, type GetIdpWellKnownMetaDataHttpResponse, type GetIdpsHttpError, type GetIdpsHttpResponse, type GetMyIdpMetaHttpError, type GetMyIdpMetaHttpResponse, type IDP, type IDPArray, type IDPJWTAuth, type IDPMeta, type IDPOIDC, type IDPOptions, type IDPPatchSchema, type IDPPostSchema, type IDPProtocol, type IDPProvider, type IDPsStatus, type IdentityProvidersAPI, type Links, type OpenIDConfiguration, type PatchIdpHttpError, type PatchIdpHttpResponse, type PatchJWTAuthPayload, type PatchOIDCPayload, type PendingResult, clearCache, createIdp, identityProvidersExport as default, deleteIdp, getIdp, getIdpStatuses, getIdpWellKnownMetaData, getIdps, getMyIdpMeta, patchIdp };
