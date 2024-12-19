import { A as ApiCallOptions } from './invoke-fetch-types-BXn-uSF5.js';
import './auth-types-PkN9CAF_.js';

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
    /** The protocol to be used for communicating with the identity provider. Valid values are `OIDC`, `SAML`, `jwtAuth`, and `qsefw-local-bearer-token`. */
    protocol?: IDPProtocol;
    /** The identity provider to be used. If protocol is `OIDC`, the valid values are `auth0`, `okta`, `generic`, `salesforce`, `keycloak`, `adfs`, and `azureAD`. If protocol is `jwtAuth`, the valid value is `external`. */
    provider?: IDPProvider;
    /** The tenant identifiers associated with the given IdP. */
    tenantIds?: string[];
};
type CertificateInfo = {
    /** The X.509 certificate for validating signed SAML responses. */
    certificate: string;
    /** Indicates whether the certificate is used for encryption. */
    encryption?: boolean;
    /** Given name for this certificate. */
    name?: string;
    /** Indicates whether the certificate is used for the signature. */
    signature?: boolean;
};
/**
 * Payload for creating an identity provider using JWT authentication.
 */
type CreateJWTAuthPayload = {
    /** There can be clock skew between the IdP and Qlik's login server. In these cases, a tolerance can be set. */
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
/**
 * Payload for creating an OIDC-compatible identity provider.
 */
type CreateOIDCPayload = {
    /** There can be clock skew between the IdP and Qlik's login server. In these cases, a tolerance can be set. */
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
        /** A decrypting key used to decrypt OIDC encrypted assertions */
        decryptingKey?: DecryptingKey;
        /** The OpenID configuration endpoint. (Ex: https://<domain>/.well-known/openid-configuration). Required if openid_configuration is not given. */
        discoveryUrl?: string;
        /** Only ADFS and AzureAD IdPs can set this property. For ADFS and AzureAD, it defaults to false. For other IdPs, it defaults to undefined. */
        emailVerifiedAlwaysTrue?: boolean;
        /** The algorithm used to sign the ID token. The default algorithm is RS256. */
        idTokenSignatureAlg?: "RS256" | "RS512";
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
/**
 * Payload for creating a SAML compatible identity provider.
 */
type CreateSAMLPayload = {
    /** There can be clock skew between the IdP and Qlik's login server. In these cases, a tolerance can be set. */
    clockToleranceSec?: number;
    /** Tells the consumer of the IdP that new users should be created on login if they don't exist. */
    createNewUsersOnLogin?: boolean;
    description?: string;
    /** Indicates whether the IdP is meant for interactive login. Must be true for SAML IdPs. */
    interactive: boolean;
    /** Required SAML configurations for IdPs with `skipVerify` flag enabled. */
    options?: {
        /** Toggle to allow IdP initated login by the SAML IdP. */
        allowIdpInitiatedLogin?: boolean;
        /** The certificates used for validating signed responses. Required if metadata is not provided. */
        certificates?: CertificateInfo[];
        /** Mappings from claim name to an array of SAML attribute names that point to locations in the claims from the IdP to retrieve the value from. */
        claimsMapping: ClaimsMappingSAML;
        /** The entity ID for the SAML IdP. Required if metadata is not provided. */
        entityId?: string;
        /** Metadata for the SAML IdP. Required if individual SAML parameters are not provided. */
        metadata?: {
            /** The IDP metadata XML in base64-encoded format. */
            raw: string;
        };
        /** The name identifier format that will be requested from the identity provider. */
        nameIdFormat?: "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress" | "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent" | "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified";
        /** The sign on URL for the SAML IdP. Required if metadata is not provided. */
        signOnUrl?: string;
    };
    /** Required configurations for SAML IdPs that require verification. */
    pendingOptions?: {
        /** Toggle to allow IdP initated login by the SAML IdP. */
        allowIdpInitiatedLogin?: boolean;
        /** The certificates used for validating signed responses. Required if metadata is not provided. */
        certificates?: CertificateInfo[];
        /** Mappings from claim name to an array of SAML attribute names that point to locations in the claims from the IdP to retrieve the value from. */
        claimsMapping: ClaimsMappingSAML;
        /** The entity ID for the SAML IdP. Required if metadata is not provided. */
        entityId?: string;
        /** Metadata for the SAML IdP. Required if individual SAML parameters are not provided. */
        metadata?: {
            /** The IDP metadata XML in base64-encoded format. */
            raw: string;
        };
        /** The name identifier format that will be requested from the identity provider. */
        nameIdFormat?: "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress" | "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent" | "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified";
        /** The sign on URL for the SAML IdP. Required if metadata is not provided. */
        signOnUrl?: string;
    };
    /** Direct the user on logout to a specific URI. */
    postLogoutRedirectUri?: string;
    /** The protocol to be used for communicating with the identity provider. */
    protocol: "SAML";
    /** The identity provider to be used. */
    provider: "okta" | "generic" | "adfs" | "azureAD";
    /** If set to `true`, skips IdP verification process and assumes the IdP is verified. */
    skipVerify?: boolean;
    /** The tenant identifiers that map to the given IdP. */
    tenantIds?: string[];
};
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
        /** A JSON pointer to the property that caused the error. */
        pointer?: string;
    };
    /** The HTTP status code. */
    status?: number;
    /** Summary of the problem. */
    title: string;
};
/**
 * A representation of the errors encountered from the HTTP request.
 */
type Errors = {
    errors?: Error[];
};
type IDP = IDPOIDC | IDPSAML | IDPJWTAuth;
type IDPArray = {
    /** An array of IdPs. */
    data?: IDP[];
    /** Contains pagination links. */
    links?: Links;
};
/**
 * An identity provider for JWT authentication.
 */
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
/**
 * An OIDC-compliant identity provider.
 */
type IDPOIDC = BaseIDP & {
    options?: IDPOIDCOptions;
    pendingOptions?: IDPOIDCOptions;
    pendingResult?: PendingResult;
    /** The state of pendingOptions. This represents the latest IdP test result. */
    pendingState?: "verified" | "pending" | "error";
};
type IDPOIDCOptions = {
    /** If true, the `offline_access` scope will not be requested from the IdP, where applicable. */
    blockOfflineAccessScope?: boolean;
    /** Mappings from claim name to an array of JSON pointers that point to locations in the claims from the IdP to retrieve the value from. */
    claimsMapping?: ClaimsMappingInteractive;
    /** The client identifier used as part of authenticating an interactive identity provider. */
    clientId?: string;
    /** The client secret used as part of authenticating an interactive identity provider. */
    clientSecret?: string;
    /** A decrypting key used to decrypt OIDC encrypted assertions */
    decryptingKey?: DecryptingKey;
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
type IDPPatchSchema = PatchOIDCPayload[] | PatchSAMLPayload[] | PatchJWTAuthPayload[];
type IDPPostSchema = CreateOIDCPayload | CreateJWTAuthPayload | CreateSAMLPayload;
/**
 * The protocol to be used for communicating with the identity provider. Valid values are `OIDC`, `SAML`, `jwtAuth`, and `qsefw-local-bearer-token`.
 */
type IDPProtocol = "OIDC" | "SAML" | "jwtAuth" | "qsefw-local-bearer-token";
/**
 * The identity provider to be used. If protocol is `OIDC`, the valid values are `auth0`, `okta`, `generic`, `salesforce`, `keycloak`, `adfs`, and `azureAD`. If protocol is `jwtAuth`, the valid value is `external`.
 */
type IDPProvider = "auth0" | "okta" | "qlik" | "generic" | "salesforce" | "keycloak" | "adfs" | "external" | "azureAD";
/**
 * A SAML-compliant identity provider.
 */
type IDPSAML = BaseIDP & {
    options?: IDPSAMLOptions;
    pendingOptions?: IDPSAMLOptions;
    pendingResult?: PendingResult;
    /** The state of pendingOptions. This represents the latest IdP test result. */
    pendingState?: "verified" | "pending" | "error";
};
type IDPSAMLOptions = {
    /** Toggle to allow IdP initated login by the SAML IdP. */
    allowIdpInitiatedLogin?: boolean;
    /** The certificates used for validating signed responses. */
    certificates?: CertificateInfo[];
    /** Mappings from claim name to an array of SAML attribute names that point to locations in the claims from the IdP to retrieve the value from. */
    claimsMapping?: ClaimsMappingSAML;
    /** The entity URL for the SAML IdP. */
    entityId?: string;
    /** The name identifier format that will be requested from the identity provider. */
    nameIdFormat?: "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress" | "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent" | "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified";
    /** The sign on URL for the SAML IdP. */
    signOnUrl?: string;
    /** The reference ID of the chosen signing key pair. */
    signingKeySelectedRefId?: string;
    /** Set of certificates used to sign SAMLRequest payloads. Not present in `pendingOptions`. */
    signingKeys?: SigningKey[];
};
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
/**
 * Contains pagination links.
 */
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
/**
 * OpenID configuration
 */
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
/**
 * A patch request for an identity provider using the `jwtAuth` protocol.
 */
type PatchJWTAuthPayload = {
    /** The "operation" to be performed on a given IdP. */
    op: "replace";
    /** The "path" to the part of the IdP document. */
    path?: "/description";
    /** The "value" data type is dependent on the path value being used. */
    value?: unknown;
};
/**
 * A patch request for an identity provider using the `OIDC` protocol.
 */
type PatchOIDCPayload = {
    /** The "operation" to be performed on a given IdP. Currently supports a custom operation value called "promote-options" that allows the test configuration to be promoted to the current configuration used for login. */
    op: "replace" | "promote-options";
    /** The "path" to the part of the IdP document. */
    path?: "/active" | "/description" | "/meta" | "/options" | "/options/realm" | "/options/discoveryUrl" | "/options/claimsMapping" | "/pendingOptions" | "/pendingOptions/realm" | "/pendingOptions/discoveryUrl" | "/pendingOptions/clientId" | "/pendingOptions/clientSecret" | "/pendingOptions/emailVerifiedAlwaysTrue" | "/pendingOptions/claimsMapping" | "/postLogoutRedirectUri" | "/clockToleranceSec" | "/pendingOptions/idTokenSignatureAlg" | "/pendingOptions/decryptingKey";
    /** The "value" data type is dependent on the path value being used. */
    value?: unknown;
};
/**
 * A patch request for an identity provider using the `SAML` protocol. Supports a custom operation value called `promote-options` that allows the test configuration (`pendingOptions`) to be promoted to the live configuration (`options`) used for login.'
 */
type PatchSAMLPayload = {
    /** The "operation" to be performed on a given IdP. */
    op: "replace" | "promote-options";
    /** The "path" to the part of the IdP document. */
    path?: "/active" | "/description" | "/pendingOptions" | "/pendingOptions/nameIdFormat" | "/pendingOptions/allowIdpInitiatedLogin" | "/pendingOptions/entityId" | "/pendingOptions/signOnUrl" | "/pendingOptions/metadata" | "/pendingOptions/certificates" | "/pendingOptions/claimsMapping" | "/postLogoutRedirectUri" | "/clockToleranceSec";
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
    /** The protocol used to communicate with the IdP during the test flow. */
    protocol?: "OIDC" | "SAML";
    /** The resultant claims based on the claims received from the external IdP. */
    resultantClaims?: unknown;
    /** The timestamp for when the test was started for an IdP configuration. This field is only available during lifespan of the test. */
    started?: string;
    /** The status of the IdP configuration being tested. */
    status: "success" | "pending" | "error" | "claimsError" | "callbackError" | "tokenError" | "protocolError" | "networkError" | "configChangedDuringTestError";
};
type SigningKey = {
    /** The certificate to be uploaded to the identity provider for verifying SAML requests. */
    certificate?: string;
    /** The reference ID for choosing this key pair. */
    refId?: string;
};
/**
 * Mappings from claim name to an array of JSON pointers that point to locations in the claims from the IdP to retrieve the value from.
 */
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
/**
 * Mappings from claim name to an array of JSON pointers that point to locations in the claims from the IdP to retrieve the value from.
 */
type ClaimsMappingNonInteractive = {
    /** A list of JSON pointers used to map the user's client ID. */
    client_id?: string[];
    /** A list of JSON pointers used to map the user's subject. */
    sub?: string[];
};
/**
 * Mappings from claim name to an array of SAML attribute names that point to locations in the claims from the IdP to retrieve the value from.
 */
type ClaimsMappingSAML = {
    /** A list of SAML attributes used to map the user's email. */
    email: string[];
    /** A list of SAML attributes used to map the user's groups. */
    groups: string[];
    /** A list of SAML attributes used to map the user's name. */
    name: string[];
    /** A list of SAML attributes used to map the user's picture. */
    picture: string[];
    /** A list of SAML attributes used to map the user's subject. */
    sub: string[];
};
/**
 * A decrypting key used to decrypt OIDC encrypted assertions
 */
type DecryptingKey = {
    /** The key's certificate in pem format */
    certificate?: string;
    /** The timestamp for when the decrypting key was created. */
    createdAt?: string;
    /** The user id of the user who created the decrypting key */
    createdBy?: string;
    /** The public key in jwk format */
    jwks?: string;
    /** The id of the decrypting key */
    keyId?: string;
    /** The algorithm size of the decrypting key */
    keySize: number;
    /** The algorithm type of the decrypting key */
    keyType: string;
    /** The public key in pem format */
    publicKey?: string;
};
/**
 * This endpoint retrieves any IdPs registered on the tenant.
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
    status: 200;
    prev?: (options?: ApiCallOptions) => Promise<GetIdpsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetIdpsHttpResponse>;
};
type GetIdpsHttpError = {
    data: Errors;
    headers: Headers;
    status: 404;
};
/**
 * Creates a new IdP on a tenant. Requesting user must be assigned the `TenantAdmin` role. For non-interactive IdPs (e.g. JWT), IdP must be created by sending `options` payload. For interactive IdPs (e.g. SAML or OIDC), send `pendingOptions` payload to require the interactive verification step; or send `options` payload with `skipVerify` set to `true` to skip validation step and make IdP immediately available.
 *
 * @param body an object with the body content
 * @throws CreateIdpHttpError
 */
declare const createIdp: (body: IDPPostSchema, options?: ApiCallOptions) => Promise<CreateIdpHttpResponse>;
type CreateIdpHttpResponse = {
    data: IDP;
    headers: Headers;
    status: 201;
};
type CreateIdpHttpError = {
    data: Errors;
    headers: Headers;
    status: 400 | 403;
};
/**
 * Returns IdP configuration metadata supported on the tenant. Clients can use this information to programmatically configure their interactions with Qlik Cloud.
 *
 * @throws GetIdpWellKnownMetaDataHttpError
 */
declare const getIdpWellKnownMetaData: (options?: ApiCallOptions) => Promise<GetIdpWellKnownMetaDataHttpResponse>;
type GetIdpWellKnownMetaDataHttpResponse = {
    data: unknown;
    headers: Headers;
    status: 200;
};
type GetIdpWellKnownMetaDataHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Retrieves default IdP metadata when no interactive IdP is enabled.
 *
 * @throws GetMyIdpMetaHttpError
 */
declare const getMyIdpMeta: (options?: ApiCallOptions) => Promise<GetMyIdpMetaHttpResponse>;
type GetMyIdpMetaHttpResponse = {
    data: IDPMeta;
    headers: Headers;
    status: 200;
};
type GetMyIdpMetaHttpError = {
    data: Errors;
    headers: Headers;
    status: 403 | 404 | 500;
};
/**
 * Retrieves the status of all IdP configurations. Requires `TenantAdmin` role.
 *
 * @throws GetIdpStatusesHttpError
 */
declare const getIdpStatuses: (options?: ApiCallOptions) => Promise<GetIdpStatusesHttpResponse>;
type GetIdpStatusesHttpResponse = {
    data: IDPsStatus;
    headers: Headers;
    status: 200;
};
type GetIdpStatusesHttpError = {
    data: Errors;
    headers: Headers;
    status: 403 | 404 | 500;
};
/**
 * Deletes an identity provider. Requesting user must be assigned the `TenantAdmin` role.
 *
 * @param id The identity provider ID.
 * @throws DeleteIdpHttpError
 */
declare const deleteIdp: (id: string, options?: ApiCallOptions) => Promise<DeleteIdpHttpResponse>;
type DeleteIdpHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type DeleteIdpHttpError = {
    data: Errors;
    headers: Headers;
    status: 400 | 404;
};
/**
 * Retrieves a specific IdP. Requesting user must be assigned the `TenantAdmin` role.
 *
 * @param id The identity provider ID.
 * @throws GetIdpHttpError
 */
declare const getIdp: (id: string, options?: ApiCallOptions) => Promise<GetIdpHttpResponse>;
type GetIdpHttpResponse = {
    data: IDP;
    headers: Headers;
    status: 200;
};
type GetIdpHttpError = {
    data: Errors;
    headers: Headers;
    status: 401 | 404;
};
/**
 * Updates the configuration of an IdP. Requesting user must be assigned the `TenantAdmin` role. Partial failure is treated as complete failure and returns an error.
 *
 * @param id The identity provider ID.
 * @param body an object with the body content
 * @throws PatchIdpHttpError
 */
declare const patchIdp: (id: string, body: IDPPatchSchema, options?: ApiCallOptions) => Promise<PatchIdpHttpResponse>;
type PatchIdpHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type PatchIdpHttpError = {
    data: Errors;
    headers: Headers;
    status: 400 | 401 | 403 | 404 | 412 | 500;
};
/**
 * Clears the cache for identity-providers api requests.
 */
declare function clearCache(): void;
interface IdentityProvidersAPI {
    /**
     * This endpoint retrieves any IdPs registered on the tenant.
     *
     * @param query an object with query parameters
     * @throws GetIdpsHttpError
     */
    getIdps: typeof getIdps;
    /**
     * Creates a new IdP on a tenant. Requesting user must be assigned the `TenantAdmin` role. For non-interactive IdPs (e.g. JWT), IdP must be created by sending `options` payload. For interactive IdPs (e.g. SAML or OIDC), send `pendingOptions` payload to require the interactive verification step; or send `options` payload with `skipVerify` set to `true` to skip validation step and make IdP immediately available.
     *
     * @param body an object with the body content
     * @throws CreateIdpHttpError
     */
    createIdp: typeof createIdp;
    /**
     * Returns IdP configuration metadata supported on the tenant. Clients can use this information to programmatically configure their interactions with Qlik Cloud.
     *
     * @throws GetIdpWellKnownMetaDataHttpError
     */
    getIdpWellKnownMetaData: typeof getIdpWellKnownMetaData;
    /**
     * Retrieves default IdP metadata when no interactive IdP is enabled.
     *
     * @throws GetMyIdpMetaHttpError
     */
    getMyIdpMeta: typeof getMyIdpMeta;
    /**
     * Retrieves the status of all IdP configurations. Requires `TenantAdmin` role.
     *
     * @throws GetIdpStatusesHttpError
     */
    getIdpStatuses: typeof getIdpStatuses;
    /**
     * Deletes an identity provider. Requesting user must be assigned the `TenantAdmin` role.
     *
     * @param id The identity provider ID.
     * @throws DeleteIdpHttpError
     */
    deleteIdp: typeof deleteIdp;
    /**
     * Retrieves a specific IdP. Requesting user must be assigned the `TenantAdmin` role.
     *
     * @param id The identity provider ID.
     * @throws GetIdpHttpError
     */
    getIdp: typeof getIdp;
    /**
     * Updates the configuration of an IdP. Requesting user must be assigned the `TenantAdmin` role. Partial failure is treated as complete failure and returns an error.
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

export { type BaseIDP, type CertificateInfo, type ClaimsMappingInteractive, type ClaimsMappingNonInteractive, type ClaimsMappingSAML, type CreateIdpHttpError, type CreateIdpHttpResponse, type CreateJWTAuthPayload, type CreateOIDCPayload, type CreateSAMLPayload, type DecryptingKey, type DeleteIdpHttpError, type DeleteIdpHttpResponse, type Error, type Errors, type GetIdpHttpError, type GetIdpHttpResponse, type GetIdpStatusesHttpError, type GetIdpStatusesHttpResponse, type GetIdpWellKnownMetaDataHttpError, type GetIdpWellKnownMetaDataHttpResponse, type GetIdpsHttpError, type GetIdpsHttpResponse, type GetMyIdpMetaHttpError, type GetMyIdpMetaHttpResponse, type IDP, type IDPArray, type IDPJWTAuth, type IDPMeta, type IDPOIDC, type IDPOIDCOptions, type IDPPatchSchema, type IDPPostSchema, type IDPProtocol, type IDPProvider, type IDPSAML, type IDPSAMLOptions, type IDPsStatus, type IdentityProvidersAPI, type Links, type OpenIDConfiguration, type PatchIdpHttpError, type PatchIdpHttpResponse, type PatchJWTAuthPayload, type PatchOIDCPayload, type PatchSAMLPayload, type PendingResult, type SigningKey, clearCache, createIdp, identityProvidersExport as default, deleteIdp, getIdp, getIdpStatuses, getIdpWellKnownMetaData, getIdps, getMyIdpMeta, patchIdp };
