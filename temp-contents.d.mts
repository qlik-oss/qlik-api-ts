import { A as ApiCallOptions } from './global.types-Eto4uYwy.mjs';
import './auth-types-nnUcWhuU.mjs';

type Error = {
    /** The API error code. */
    code: string;
    /** A human-readable problem description of the issue. */
    detail?: string;
    /** Additional properties and information regarding the issue. */
    meta?: {
        /** The error type. */
        errorType?: string;
        /** Locale */
        locale?: string;
        /** The source errors (stack trace). */
        sourceErrors?: string;
    };
    /** Title of the type of API Error. */
    title: string;
};
type Errors = {
    errors?: Error[];
    /** A way to trace the source of the error. */
    traceId?: string;
};
type DetailResponse = {
    /** Datetime-stamp when the resource was created (in UTC). */
    CreatedAt?: string;
    /** Identifier for the subject / resource creator. */
    CreatorID?: string;
    /** Datetime-stamp when the resource expired (in UTC). */
    Expires?: string;
    /** Identifier */
    ID?: string;
    /** File name of the file uploaded by the user. */
    Name?: string;
    /** Size of resource (in bytes). */
    Size?: string;
    /** Time-to-live in seconds. */
    TTLSeconds?: number;
    /** Datetime-stamp when the resource was updated (in UTC). */
    UpdatedAt?: string;
};
/**
 * This endpoint is used to upload a file as a temporary content resource. It returns a `201 Created` with a location header that contains the location of the created resource. If filename or TTL is not properly set, a `400 Bad request` is returned. For internal issues, a `500 Internal Server Error` is returned.
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws UploadTempFileHttpError
 */
declare const uploadTempFile: (query: {
    /** The name of the file to upload. */
    filename?: string;
    /** The TTL parameter is used to define the time-to-live for the content resource in seconds.
    // It defaults to one hour (3600) if no input is provided. Max TTL is 259200 (3 days).'
    //  */
    ttl?: number;
}, body: unknown, options?: ApiCallOptions) => Promise<UploadTempFileHttpResponse>;
type UploadTempFileHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type UploadTempFileHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Request used to create a new upload resource.
 * See [tus.io](http://tus.io) for details.
 *
 * @throws CreateTusHttpError
 */
declare const createTus: (options?: ApiCallOptions) => Promise<CreateTusHttpResponse>;
type CreateTusHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type CreateTusHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Request used to apply the bytes contained in the message at a given offset. Note that the tus server only
 * accepts that the Content-Type response header is set to "application/offset+octet-stream".
 * See [tus.io](http://tus.io) for details.
 *
 * Note that the server may return `423 Locked` on this request. This happens if the client attempts to perform
 * concurrent access to the resource, for example, if attempting to do a `HEAD` request during an ongoing `PATCH` request.
 * It can also occur in situations where the connection is unexpectedly dropped between the client and the server
 * and the client attempts to make a new request when the server is still busy processing the upload. When this
 * happens, the client shall, after some period of time, try to resume the upload again.
 *
 * @param id The ID used to uniquely identify the upload.
 * @param body an object with the body content
 * @throws PatchTusHttpError
 */
declare const patchTus: (id: string, body: unknown, options?: ApiCallOptions) => Promise<PatchTusHttpResponse>;
type PatchTusHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchTusHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * This endpoint is used to retrieve a temporary content file. It returns a valid (`200 OK`) in case the file exists and the user is authorized to view the contents. It returns a `410 Gone` if the file has expired and `404 Not Found` if the criteria is not met.
 * @param id The temporary contents ID.
 * @param query an object with query parameters
 * @throws DownloadTempFileHttpError
 */
declare const downloadTempFile: (id: string, query: {
    /** Set to "1" to download the file in inline mode. Useful for displaying a preview of the file in a browser. */
    inline?: string;
}, options?: ApiCallOptions) => Promise<DownloadTempFileHttpResponse>;
type DownloadTempFile200HttpResponse = {
    data: unknown;
    headers: Headers;
    status: 200;
};
type DownloadTempFile204HttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type DownloadTempFile206HttpResponse = {
    data: unknown;
    headers: Headers;
    status: 206;
};
type DownloadTempFileHttpResponse = DownloadTempFile200HttpResponse | DownloadTempFile204HttpResponse | DownloadTempFile206HttpResponse;
type DownloadTempFileHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * This endpoint is used to retrieve a summary of the metadata associated with a temporary content resource. It returns a `200 OK` with a model if the temporary resource is valid. It returns a `410 Gone` if the file has expired and `404 Not Found` if the criteria is not met.
 * @param id The temporary contents ID.
 * @throws GetTempFileDetailsHttpError
 */
declare const getTempFileDetails: (id: string, options?: ApiCallOptions) => Promise<GetTempFileDetailsHttpResponse>;
type GetTempFileDetails200HttpResponse = {
    data: DetailResponse;
    headers: Headers;
    status: 200;
};
type GetTempFileDetails204HttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type GetTempFileDetailsHttpResponse = GetTempFileDetails200HttpResponse | GetTempFileDetails204HttpResponse;
type GetTempFileDetailsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for temp-contents api requests.
 */
declare function clearCache(): void;
interface TempContentsAPI {
    /**
     * This endpoint is used to upload a file as a temporary content resource. It returns a `201 Created` with a location header that contains the location of the created resource. If filename or TTL is not properly set, a `400 Bad request` is returned. For internal issues, a `500 Internal Server Error` is returned.
     * @param query an object with query parameters
     * @param body an object with the body content
     * @throws UploadTempFileHttpError
     */
    uploadTempFile: typeof uploadTempFile;
    /**
     * Request used to create a new upload resource.
     * See [tus.io](http://tus.io) for details.
     *
     * @throws CreateTusHttpError
     */
    createTus: typeof createTus;
    /**
     * Request used to apply the bytes contained in the message at a given offset. Note that the tus server only
     * accepts that the Content-Type response header is set to "application/offset+octet-stream".
     * See [tus.io](http://tus.io) for details.
     *
     * Note that the server may return `423 Locked` on this request. This happens if the client attempts to perform
     * concurrent access to the resource, for example, if attempting to do a `HEAD` request during an ongoing `PATCH` request.
     * It can also occur in situations where the connection is unexpectedly dropped between the client and the server
     * and the client attempts to make a new request when the server is still busy processing the upload. When this
     * happens, the client shall, after some period of time, try to resume the upload again.
     *
     * @param id The ID used to uniquely identify the upload.
     * @param body an object with the body content
     * @throws PatchTusHttpError
     */
    patchTus: typeof patchTus;
    /**
     * This endpoint is used to retrieve a temporary content file. It returns a valid (`200 OK`) in case the file exists and the user is authorized to view the contents. It returns a `410 Gone` if the file has expired and `404 Not Found` if the criteria is not met.
     * @param id The temporary contents ID.
     * @param query an object with query parameters
     * @throws DownloadTempFileHttpError
     */
    downloadTempFile: typeof downloadTempFile;
    /**
     * This endpoint is used to retrieve a summary of the metadata associated with a temporary content resource. It returns a `200 OK` with a model if the temporary resource is valid. It returns a `410 Gone` if the file has expired and `404 Not Found` if the criteria is not met.
     * @param id The temporary contents ID.
     * @throws GetTempFileDetailsHttpError
     */
    getTempFileDetails: typeof getTempFileDetails;
    /**
     * Clears the cache for temp-contents api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the temp-contents api
 */
declare const tempContentsExport: TempContentsAPI;

export { type CreateTusHttpError, type CreateTusHttpResponse, type DetailResponse, type DownloadTempFile200HttpResponse, type DownloadTempFile204HttpResponse, type DownloadTempFile206HttpResponse, type DownloadTempFileHttpError, type DownloadTempFileHttpResponse, type Error, type Errors, type GetTempFileDetails200HttpResponse, type GetTempFileDetails204HttpResponse, type GetTempFileDetailsHttpError, type GetTempFileDetailsHttpResponse, type PatchTusHttpError, type PatchTusHttpResponse, type TempContentsAPI, type UploadTempFileHttpError, type UploadTempFileHttpResponse, clearCache, createTus, tempContentsExport as default, downloadTempFile, getTempFileDetails, patchTus, uploadTempFile };
