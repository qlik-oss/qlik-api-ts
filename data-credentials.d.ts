import { A as ApiCallOptions } from './global.types-qsBNouXJ.js';
import './auth-types-PkN9CAF_.js';

type ActionFilterOrphanRequest = {
    /** Filtering on datasource ID of credentials */
    datasourceID?: string;
    /** Filtering on separate status of credentials: * 0 - embedded credential * 1 - separated credential */
    qSeparated?: 0 | 1;
    /** Filtering on type of credentials */
    qType?: string;
};
type ActionFilterOrphanResponse = {
    /** Number of orphan credentials found */
    count: number;
    data: OrphanCredentialResItem[];
};
type Credential = {
    /** Datetime when the credential was created */
    created?: string;
    /** ID datasource that the credential is created for */
    datasourceID?: string;
    links?: Link;
    /** Number of linked connections */
    qConnCount: number;
    /** UUID of the credential */
    qID: string;
    /** Name of the credential */
    qName: string;
    /** Reference key of credential in redis */
    qReferenceKey?: string;
    /** Type of credential */
    qType: string;
    /** Datetime when the credential was last updated */
    updated?: string;
};
/**
 * Credential
 */
type CredentialCreate = {
    /** ID of connection that will be associated with the credential */
    connectionId?: string;
    /** ID datasource that the credential is created for */
    datasourceID?: string;
    /** UUID of the credential */
    qID?: string;
    /** Name of the credential */
    qName: string;
    /** Password */
    qPassword: string;
    /** Type of credential (i.e. connector provider of the corresponding connection) */
    qType: string;
    /** User name */
    qUsername: string;
};
type Error = {
    /** Unique internal error code */
    code?: string;
    /** More concrete details */
    detail?: string;
    /** HTTP status code */
    status?: number;
    /** A summary in english explaining what went wrong */
    title?: string;
};
type Errors = Error[];
type Link = {
    /** Link to current query */
    self: {
        /** URL pointing to the resource */
        href: string;
    };
};
/**
 * Orphan credential
 */
type OrphanCredentialResItem = {
    /** Datetime when the credential was created */
    created: string;
    /** ID datasource that the credential is created for */
    datasourceID?: string;
    /** UUID of the credential */
    qID: string;
    /** Name of the credential */
    qName: string;
    /** Type of credential (i.e. connector provider of the corresponding connection) */
    qType: string;
    /** Tenant ID of the credential's owner */
    tenant?: string;
    /** Datetime when the credential was last updated */
    updated: string;
    /** User ID of the credential's owner */
    user?: string;
};
type PatchRequest = {
    patchData: {
        /** Operation type */
        op?: "add" | "replace" | "remove";
        /** Path to the target field to be patched */
        path?: string;
        /** The value used for the patch, only needed for 'add' or 'replace'. Value type could be either string or integer, should match with the type of the target field */
        value?: string;
    }[];
};
type ResponseErrors = {
    errors?: Errors;
};
/**
 * Gets list of orphan data credentials (i.e. credentials that are not associated to any data connection) filtering on properties defined in request body
 *
 * @param body an object with the body content
 * @throws FilterOrphanedDataCredentialsHttpError
 */
declare const filterOrphanedDataCredentials: (body: ActionFilterOrphanRequest, options?: ApiCallOptions) => Promise<FilterOrphanedDataCredentialsHttpResponse>;
type FilterOrphanedDataCredentialsHttpResponse = {
    data: ActionFilterOrphanResponse;
    headers: Headers;
    status: number;
};
type FilterOrphanedDataCredentialsHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Deletes the specified credential by ID (or by name when type=credentialname is set in query)
 *
 * @param qID Credential ID
 * @param query an object with query parameters
 * @throws DeleteDataCredentialHttpError
 */
declare const deleteDataCredential: (qID: string, query: {
    /** If set to true, credentialId in the query will be interpreted as credential's name */
    byCredentialName?: boolean;
}, options?: ApiCallOptions) => Promise<DeleteDataCredentialHttpResponse>;
type DeleteDataCredentialHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteDataCredentialHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Gets a credential by ID (or by name when bycredentialname=true is set in query)
 *
 * @param qID Credential ID
 * @param query an object with query parameters
 * @throws GetDataCredentialHttpError
 */
declare const getDataCredential: (qID: string, query: {
    /** If set to true, credentialId in the query will be interpreted as credential's name */
    byCredentialName?: boolean;
}, options?: ApiCallOptions) => Promise<GetDataCredentialHttpResponse>;
type GetDataCredentialHttpResponse = {
    data: Credential;
    headers: Headers;
    status: number;
};
type GetDataCredentialHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Patches a credential specified by ID (or by name when bycredentialname=true is set in query)
 *
 * @param qID Credential ID
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws PatchDataCredentialHttpError
 */
declare const patchDataCredential: (qID: string, query: {
    /** If set to true, credentialId in the query will be interpreted as credential's name */
    byCredentialName?: boolean;
}, body: PatchRequest, options?: ApiCallOptions) => Promise<PatchDataCredentialHttpResponse>;
type PatchDataCredentialHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchDataCredentialHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Updates a credential specified by ID (or by name when bycredentialname=true is set in query)
 *
 * @param qID Credential ID
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws UpdateDataCredentialHttpError
 */
declare const updateDataCredential: (qID: string, query: {
    /** If set to true, credentialId in the query will be interpreted as credential's name */
    byCredentialName?: boolean;
}, body: CredentialCreate, options?: ApiCallOptions) => Promise<UpdateDataCredentialHttpResponse>;
type UpdateDataCredentialHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type UpdateDataCredentialHttpError = {
    data: ResponseErrors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for data-credentials api requests.
 */
declare function clearCache(): void;
interface DataCredentialsAPI {
    /**
     * Gets list of orphan data credentials (i.e. credentials that are not associated to any data connection) filtering on properties defined in request body
     *
     * @param body an object with the body content
     * @throws FilterOrphanedDataCredentialsHttpError
     */
    filterOrphanedDataCredentials: typeof filterOrphanedDataCredentials;
    /**
     * Deletes the specified credential by ID (or by name when type=credentialname is set in query)
     *
     * @param qID Credential ID
     * @param query an object with query parameters
     * @throws DeleteDataCredentialHttpError
     */
    deleteDataCredential: typeof deleteDataCredential;
    /**
     * Gets a credential by ID (or by name when bycredentialname=true is set in query)
     *
     * @param qID Credential ID
     * @param query an object with query parameters
     * @throws GetDataCredentialHttpError
     */
    getDataCredential: typeof getDataCredential;
    /**
     * Patches a credential specified by ID (or by name when bycredentialname=true is set in query)
     *
     * @param qID Credential ID
     * @param query an object with query parameters
     * @param body an object with the body content
     * @throws PatchDataCredentialHttpError
     */
    patchDataCredential: typeof patchDataCredential;
    /**
     * Updates a credential specified by ID (or by name when bycredentialname=true is set in query)
     *
     * @param qID Credential ID
     * @param query an object with query parameters
     * @param body an object with the body content
     * @throws UpdateDataCredentialHttpError
     */
    updateDataCredential: typeof updateDataCredential;
    /**
     * Clears the cache for data-credentials api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the data-credentials api
 */
declare const dataCredentialsExport: DataCredentialsAPI;

export { type ActionFilterOrphanRequest, type ActionFilterOrphanResponse, type Credential, type CredentialCreate, type DataCredentialsAPI, type DeleteDataCredentialHttpError, type DeleteDataCredentialHttpResponse, type Error, type Errors, type FilterOrphanedDataCredentialsHttpError, type FilterOrphanedDataCredentialsHttpResponse, type GetDataCredentialHttpError, type GetDataCredentialHttpResponse, type Link, type OrphanCredentialResItem, type PatchDataCredentialHttpError, type PatchDataCredentialHttpResponse, type PatchRequest, type ResponseErrors, type UpdateDataCredentialHttpError, type UpdateDataCredentialHttpResponse, clearCache, dataCredentialsExport as default, deleteDataCredential, filterOrphanedDataCredentials, getDataCredential, patchDataCredential, updateDataCredential };
