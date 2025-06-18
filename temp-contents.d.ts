import { A as ApiCallOptions } from './invoke-fetch-types-D62-HKKp.js';

/**
 * An Error object.
 */
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
/**
 * An array of Error objects.
 */
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
 * Upload a file as a temporary content resource. It returns a `201 Created` with a location header that contains the location of the created resource. If filename or TTL is not properly set, a `400 Bad request` is returned. For internal issues, a `500 Internal Server Error` is returned.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws UploadTempFileHttpError
 */
declare function uploadTempFile(query: {
    /** The name of the file to upload. */
    filename?: string;
    /** The TTL parameter is used to define the time-to-live for the content resource in seconds.
     * It defaults to one hour (3600) if no input is provided. Max TTL is 259200 (3 days).' */
    ttl?: number;
}, body: BodyInit, options?: ApiCallOptions): Promise<UploadTempFileHttpResponse>;
type UploadTempFileHttpResponse = {
    data: void;
    headers: Headers;
    status: 201;
};
type UploadTempFileHttpError = {
    data: Errors;
    headers: Headers;
    status: 400;
};
/**
 * This endpoint is used to retrieve a temporary content file. It returns a valid (`200 OK`) in case the file exists and the user is authorized to view the contents. It returns a `410 Gone` if the file has expired and `404 Not Found` if the criteria is not met.
 *
 * @param id The temporary contents ID.
 * @param query an object with query parameters
 * @throws DownloadTempFileHttpError
 */
declare function downloadTempFile(id: string, query: {
    /** Set to "1" to download the file in inline mode. Useful for displaying a preview of the file in a browser. */
    inline?: string;
}, options?: ApiCallOptions): Promise<DownloadTempFileHttpResponse>;
type DownloadTempFileHttpResponse = DownloadTempFile200HttpResponse | DownloadTempFile204HttpResponse | DownloadTempFile206HttpResponse;
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
type DownloadTempFileHttpError = {
    data: Errors;
    headers: Headers;
    status: 400 | 404 | 410 | 416;
};
/**
 * Retrieve a summary of the metadata associated with a temporary content resource. It returns a `200 OK` with a model if the temporary resource is valid. It returns a `410 Gone` if the file has expired and `404 Not Found` if the criteria is not met.
 *
 * @param id The temporary contents ID.
 * @throws GetTempFileDetailsHttpError
 */
declare function getTempFileDetails(id: string, options?: ApiCallOptions): Promise<GetTempFileDetailsHttpResponse>;
type GetTempFileDetailsHttpResponse = GetTempFileDetails200HttpResponse | GetTempFileDetails204HttpResponse;
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
type GetTempFileDetailsHttpError = {
    data: Errors;
    headers: Headers;
    status: 400 | 404 | 410;
};
/**
 * Clears the cache for temp-contents api requests.
 */
declare function clearCache(): void;
interface TempContentsAPI {
    /**
     * Upload a file as a temporary content resource. It returns a `201 Created` with a location header that contains the location of the created resource. If filename or TTL is not properly set, a `400 Bad request` is returned. For internal issues, a `500 Internal Server Error` is returned.
     *
     * @param query an object with query parameters
     * @param body an object with the body content
     * @throws UploadTempFileHttpError
     */
    uploadTempFile: typeof uploadTempFile;
    /**
     * This endpoint is used to retrieve a temporary content file. It returns a valid (`200 OK`) in case the file exists and the user is authorized to view the contents. It returns a `410 Gone` if the file has expired and `404 Not Found` if the criteria is not met.
     *
     * @param id The temporary contents ID.
     * @param query an object with query parameters
     * @throws DownloadTempFileHttpError
     */
    downloadTempFile: typeof downloadTempFile;
    /**
     * Retrieve a summary of the metadata associated with a temporary content resource. It returns a `200 OK` with a model if the temporary resource is valid. It returns a `410 Gone` if the file has expired and `404 Not Found` if the criteria is not met.
     *
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

export { type DetailResponse, type DownloadTempFile200HttpResponse, type DownloadTempFile204HttpResponse, type DownloadTempFile206HttpResponse, type DownloadTempFileHttpError, type DownloadTempFileHttpResponse, type Error, type Errors, type GetTempFileDetails200HttpResponse, type GetTempFileDetails204HttpResponse, type GetTempFileDetailsHttpError, type GetTempFileDetailsHttpResponse, type TempContentsAPI, type UploadTempFileHttpError, type UploadTempFileHttpResponse, clearCache, tempContentsExport as default, downloadTempFile, getTempFileDetails, uploadTempFile };
