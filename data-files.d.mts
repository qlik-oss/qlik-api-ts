import { A as ApiCallOptions } from './global.types-Eto4uYwy.mjs';
import './auth-types-nnUcWhuU.mjs';

type BatchChangeSpaceItem = {
    /** The ID of the data file whose space will be changed. */
    id: string;
    /** The ID of the new space.  Passing in a null will result in the data file being moved to the user's
     * personal space. */
    spaceId?: string;
};
type BatchDeleteItem = {
    /** The ID of the data file to delete. */
    id: string;
};
type ChangeDataFileOwnerRequest = {
    /** The ID of the new owner. */
    ownerId: string;
};
type ChangeDataFileSpaceRequest = {
    /** The ID of the space.  If null, this data file will be moved to the user's personal space. */
    spaceId?: string;
};
type ConnectionsResponse = {
    /** The connect statement that will be passed to the connector when invoked. */
    connectStatement: string;
    /** The unique identifier of the connection. */
    id: string;
    /** The name of the connection. */
    name: string;
    /** The team space that the given connection is associated with.  If null, the connection is not associated
     * with any specific team space. */
    spaceId?: string;
    /** The type of the connection. */
    type: string;
};
type DataFileBatchChangeSpaceRequest = {
    /** The list of data files to delete. */
    "change-space": BatchChangeSpaceItem[];
};
type DataFileBatchDeleteRequest = {
    /** The list of data files to delete. */
    delete: BatchDeleteItem[];
};
type DataFileUploadResponse = {
    /** If this file is bound to the lifecycle of a specific app, this is the ID of this app. */
    appId?: string;
    /** The date that the uploaded file was created. */
    createdDate: string;
    /** The ID for the uploaded file. */
    id: string;
    /** The date that the updated file was last modified. */
    modifiedDate?: string;
    /** The name of the uploaded file. */
    name: string;
    /** The 'owner' of a file is the user who last uploaded the file's content. */
    ownerId: string;
    /** The size of the uploaded file, in bytes. */
    size: number;
    /** If the file was uploaded to a team space, this is the ID of that space. */
    spaceId?: string;
};
type ErrorResponse = {
    /** List of errors and their properties. */
    errors: ErrorResponseItem[];
};
type ErrorResponseItem = {
    /** The error code. */
    code: string;
    /** A human-readable explanation specific to this occurrence of the problem. */
    detail?: string;
    /** Summary of the problem. */
    title?: string;
};
type GetConnectionsResponse = {
    /** Properties of the connections to the tenant spaces. */
    data: ConnectionsResponse[];
    links: LinksResponse;
};
type GetConnectionsSortField = "spaceId" | "+spaceId" | "-spaceId";
type GetDataFileInfosResponse = {
    /** Properties of the uploaded data files. */
    data: DataFileUploadResponse[];
    links: LinksResponse;
};
type GetDataFileInfosSortField = "name" | "+name" | "-name" | "size" | "+size" | "-size" | "modifiedDate" | "+modifiedDate" | "-modifiedDate";
type LinkResponse = {
    /** The URL for the link. */
    href?: string;
};
type LinksResponse = {
    next: LinkResponse;
    prev: LinkResponse;
    self: LinkResponse;
};
type MultiStatusResponse = {
    /** List of individual results for the items in the specified batch. */
    data: MultiStatusResponseItem[];
};
type MultiStatusResponseItem = {
    /** The error code. */
    code: string;
    /** A human-readable explanation specific to this occurrence of the problem. */
    detail?: string;
    /** The unique identifier of the file. */
    id: string;
    /** The HTTP status code. */
    status: number;
    /** Summary of the problem. */
    title?: string;
};
type QuotaResponse = {
    /** The allowed file extensions on files that are uploaded. */
    allowedExtensions: string[];
    /** The allowed file extensions for files that are only used internally by the system (and thus not typically
     * shown to end users). */
    allowedInternalExtensions: string[];
    /** Maximum allowable size of an uploaded file. */
    maxFileSize: number;
    /** Maximum allowable size for a single uploaded large data file (in bytes).  This is a file that was indirectly
     * uploaded using the temp content service chunked upload capability. */
    maxLargeFileSize: number;
    /** The maximum aggregate size of all files uploaded by a given user. */
    maxSize: number;
    /** The current aggregate size of all files uploaded by a given user.  If the current aggregate size is greater
     * than the maximum aggregate size, this is a quota violation. */
    size: number;
};
/**
 * Get descriptive info for the specified data files.
 *
 * @param query an object with query parameters
 * @throws GetDataFilesHttpError
 */
declare const getDataFiles: (query: {
    /** If set to false, do not return data files with internal extensions else return all the data files. */
    allowInternalFiles?: boolean;
    /** Only return files scoped to the specified app.  If this parameter is not specified, only files that are not
     * scoped to any app are returned.  "*" implies all app-scoped files are returned. */
    appId?: string;
    /** Return files that reside in the space referenced by the specified DataFiles connection.  If this parameter
     * is not specified, the user's personal space is implied. */
    connectionId?: string;
    /** If present, the maximum number of data files to return. */
    limit?: number;
    /** Filter the list of files returned to the given file name. */
    name?: string;
    /** If present, fetch the data files for the specified owner.  If a connectionId is specified in this case, the
     * returned list is constrained to the specified space.  If connectionId is not specified, then all files owned
     * by the specified user are returned regardless of the personal space that a given file resides in. */
    ownerId?: string;
    /** If present, the cursor that starts the page of data that is returned. */
    page?: string;
    /** The name of the field used to sort the result.  By default, the sort order is ascending.  Putting a '+' prefix on
     * the sort field name explicitly indicates ascending sort order.  A '-' prefix indicates a descending sort order. */
    sort?: GetDataFileInfosSortField;
}, options?: ApiCallOptions) => Promise<GetDataFilesHttpResponse>;
type GetDataFilesHttpResponse = {
    data: GetDataFileInfosResponse;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetDataFilesHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetDataFilesHttpResponse>;
};
type GetDataFilesHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Upload a new data file.
 *
 * @param body an object with the body content
 * @throws UploadDataFileHttpError
 */
declare const uploadDataFile: (body: {
    /** IFormFile form multipart/form-data */
    File?: BodyInit;
    /** See PostDataFileRequest schema which defines request structure.
     *  See  model. */
    Json?: {
        /** If this file should be bound to the lifecycle of a specific app, this is the ID of this app. */
        appId?: string;
        /** If present, this is the DataFiles connection that the upload should occur in the context of.  If absent,
         * the default is that the upload will occur in the context of the MyDataFiles connection.  If the DataFiles
         * connection is different from the one specified when the file was last POSTed or PUT, this will result in
         * a logical move of this file into the new space. */
        connectionId?: string;
        /** Name that will be given to the uploaded file.  It should be noted that the '/' character
         * in a data file name indicates a 'path' separator in a logical folder hierarchy for the name.  Names that
         * contain '/'s should be used with the assumption that a logical 'folder hierarchy' is being defined for the
         * full pathname of that file.  '/' is a significant character in the data file name, and may impact the
         * behavior of future APIs which take this folder hierarchy into account. */
        name: string;
        /** If a SourceId is specified, this is the ID of the existing data file whose content should be copied into
         * the specified data file.  That is, instead of the file content being specified in the Data element,
         * it is effectively copied from an existing, previously uploaded file. */
        sourceId?: string;
        /** If a TempContentFileId is specified, this is the ID of a previously uploaded temporary content file whose
         * content should be copied into the specified data file.  That is, instead of the file content being specified
         * in the Data element, it is effectively copied from an existing, previously uploaded file.  The expectation
         * is that this file was previously uploaded to the temporary content service, and the ID specified here is
         * the one returned from the temp content upload request. */
        tempContentFileId?: string;
    };
}, options?: ApiCallOptions) => Promise<UploadDataFileHttpResponse>;
type UploadDataFileHttpResponse = {
    data: DataFileUploadResponse;
    headers: Headers;
    status: number;
};
type UploadDataFileHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * This is to allow for a separate admin type of operation that is more global in terms of access in cases
 * where admin users may not explicitly have been granted full access to a given space within the declared
 * space-level permissions.  If the space ID is set to null, then the data file will end up residing in the
 * personal space of the user who is the owner of the file.
 *
 * @param body an object with the body content
 * @throws MoveDataFilesHttpError
 */
declare const moveDataFiles: (body: DataFileBatchChangeSpaceRequest, options?: ApiCallOptions) => Promise<MoveDataFilesHttpResponse>;
type MoveDataFilesHttpResponse = {
    data: MultiStatusResponse;
    headers: Headers;
    status: number;
};
type MoveDataFilesHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Delete the specified set of data files as a single batch.
 *
 * @param body an object with the body content
 * @throws DeleteDataFilesHttpError
 */
declare const deleteDataFiles: (body: DataFileBatchDeleteRequest, options?: ApiCallOptions) => Promise<DeleteDataFilesHttpResponse>;
type DeleteDataFilesHttpResponse = {
    data: MultiStatusResponse;
    headers: Headers;
    status: number;
};
type DeleteDataFilesHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * The non-filtered list contains a set of hardcoded connections, along with one connection per team space that
 * the given user has access to.
 *
 * @param query an object with query parameters
 * @throws GetDataFilesConnectionsHttpError
 */
declare const getDataFilesConnections: (query: {
    /** If present, get connections with connection strings that are scoped to the given app ID. */
    appId?: string;
    /** If present, the maximum number of data file connection records to return. */
    limit?: number;
    /** If present, only return connections with the given name. */
    name?: string;
    /** If present, the cursor that starts the page of data that is returned. */
    page?: string;
    /** If true, only return the connections that access data in a personal space.  Default is false. */
    personal?: boolean;
    /** The name of the field used to sort the result.  By default, the sort is ascending.  Putting a '+' prefix on
     * the sort field name explicitly indicates ascending sort order.  A '-' prefix indicates a descending sort order. */
    sort?: GetConnectionsSortField;
    /** If present, only return the connection that accesses data files in the specified space. */
    spaceId?: string;
}, options?: ApiCallOptions) => Promise<GetDataFilesConnectionsHttpResponse>;
type GetDataFilesConnectionsHttpResponse = {
    data: GetConnectionsResponse;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetDataFilesConnectionsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetDataFilesConnectionsHttpResponse>;
};
type GetDataFilesConnectionsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Get the built-in connection used by the engine to load/write data files given a connection ID.
 *
 * @param id The ID of the connection.
 * @throws GetDataFileConnectionHttpError
 */
declare const getDataFileConnection: (id: string, options?: ApiCallOptions) => Promise<GetDataFileConnectionHttpResponse>;
type GetDataFileConnectionHttpResponse = {
    data: ConnectionsResponse;
    headers: Headers;
    status: number;
};
type GetDataFileConnectionHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Get quota information for the calling user.
 *
 * @throws GetDataFilesQuotasHttpError
 */
declare const getDataFilesQuotas: (options?: ApiCallOptions) => Promise<GetDataFilesQuotasHttpResponse>;
type GetDataFilesQuotasHttpResponse = {
    data: QuotaResponse;
    headers: Headers;
    status: number;
};
type GetDataFilesQuotasHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Delete the specified data file.
 *
 * @param id The ID of the data file to delete.
 * @throws DeleteDataFileHttpError
 */
declare const deleteDataFile: (id: string, options?: ApiCallOptions) => Promise<DeleteDataFileHttpResponse>;
type DeleteDataFileHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteDataFileHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Get descriptive info for the specified data file.
 *
 * @param id The ID of the data file.
 * @throws GetDataFileHttpError
 */
declare const getDataFile: (id: string, options?: ApiCallOptions) => Promise<GetDataFileHttpResponse>;
type GetDataFileHttpResponse = {
    data: DataFileUploadResponse;
    headers: Headers;
    status: number;
};
type GetDataFileHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Re-upload an existing data file.
 *
 * @param id The ID of the data file to update.
 * @param body an object with the body content
 * @throws ReuploadDataFileHttpError
 */
declare const reuploadDataFile: (id: string, body: {
    /** IFormFile form multipart/form-data */
    File?: BodyInit;
    /** See PutDataFileRequest schema which defines request structure.
     *  See  model. */
    Json?: {
        /** If this file should be bound to the lifecycle of a specific app, this is the ID of this app. */
        appId?: string;
        /** If present, this is the DataFiles connection that the upload should occur in the context of.  If absent,
         * the default is that the upload will occur in the context of the MyDataFiles connection.  If the DataFiles
         * connection is different from the one specified when the file was last POSTed or PUT, this will result in
         * a logical move of this file into the new space. */
        connectionId?: string;
        /** Name that will be given to the uploaded file.  If this name is different than the name used when the file
         * was last POSTed or PUT, this will result in a rename of the file.  It should be noted that the '/' character
         * in a data file name indicates a 'path' separator in a logical folder hierarchy for the name.  Names that
         * contain '/'s should be used with the assumption that a logical 'folder hierarchy' is being defined for the
         * full pathname of that file.  '/' is a significant character in the data file name, and may impact the
         * behavior of future APIs that take this folder hierarchy into account. */
        name?: string;
        /** If a SourceId is specified, this is the ID of the existing data file whose content should be copied into
         * the specified data file.  That is, instead of the file content being specified in the Data element,
         * it is effectively copied from an existing, previously uploaded file. */
        sourceId?: string;
        /** If a TempContentFileId is specified, this is the ID of a previously uploaded temporary content file whose
         * content should be copied into the specified data file.  That is, instead of the file content being specified
         * in the Data element, it is effectively copied from an existing, previously uploaded file.  The expectation
         * is that this file was previously uploaded to the temporary content service, and the ID specified here is
         * the one returned from the temp content upload request. */
        tempContentFileId?: string;
    };
}, options?: ApiCallOptions) => Promise<ReuploadDataFileHttpResponse>;
type ReuploadDataFileHttpResponse = {
    data: DataFileUploadResponse;
    headers: Headers;
    status: number;
};
type ReuploadDataFileHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * This is primarily an admin type of operation.  In general, the owner of a data file is implicitly set as
 * part of a data file upload.  For data files that reside in a personal space, changing the owner has the
 * effect of moving the data file to the new owner's personal space.
 *
 * @param id The ID of the data file whose owner will be updated.
 * @param body an object with the body content
 * @throws ChangeDataFileOwnerHttpError
 */
declare const changeDataFileOwner: (id: string, body: ChangeDataFileOwnerRequest, options?: ApiCallOptions) => Promise<ChangeDataFileOwnerHttpResponse>;
type ChangeDataFileOwnerHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type ChangeDataFileOwnerHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * This is to allow for a separate admin type of operation that is more global in terms of access in cases
 * where admin users may not explicitly have been granted full access to a given space within the declared
 * space-level permissions.  If the space ID is set to null, then the datafile will end up residing in the
 * personal space of the user who is the owner of the file.
 *
 * @param id The ID of the data file whose space will be updated.
 * @param body an object with the body content
 * @throws MoveDataFileHttpError
 */
declare const moveDataFile: (id: string, body: ChangeDataFileSpaceRequest, options?: ApiCallOptions) => Promise<MoveDataFileHttpResponse>;
type MoveDataFileHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type MoveDataFileHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for data-files api requests.
 */
declare function clearCache(): void;
interface DataFilesAPI {
    /**
     * Get descriptive info for the specified data files.
     *
     * @param query an object with query parameters
     * @throws GetDataFilesHttpError
     */
    getDataFiles: typeof getDataFiles;
    /**
     * Upload a new data file.
     *
     * @param body an object with the body content
     * @throws UploadDataFileHttpError
     */
    uploadDataFile: typeof uploadDataFile;
    /**
     * This is to allow for a separate admin type of operation that is more global in terms of access in cases
     * where admin users may not explicitly have been granted full access to a given space within the declared
     * space-level permissions.  If the space ID is set to null, then the data file will end up residing in the
     * personal space of the user who is the owner of the file.
     *
     * @param body an object with the body content
     * @throws MoveDataFilesHttpError
     */
    moveDataFiles: typeof moveDataFiles;
    /**
     * Delete the specified set of data files as a single batch.
     *
     * @param body an object with the body content
     * @throws DeleteDataFilesHttpError
     */
    deleteDataFiles: typeof deleteDataFiles;
    /**
     * The non-filtered list contains a set of hardcoded connections, along with one connection per team space that
     * the given user has access to.
     *
     * @param query an object with query parameters
     * @throws GetDataFilesConnectionsHttpError
     */
    getDataFilesConnections: typeof getDataFilesConnections;
    /**
     * Get the built-in connection used by the engine to load/write data files given a connection ID.
     *
     * @param id The ID of the connection.
     * @throws GetDataFileConnectionHttpError
     */
    getDataFileConnection: typeof getDataFileConnection;
    /**
     * Get quota information for the calling user.
     *
     * @throws GetDataFilesQuotasHttpError
     */
    getDataFilesQuotas: typeof getDataFilesQuotas;
    /**
     * Delete the specified data file.
     *
     * @param id The ID of the data file to delete.
     * @throws DeleteDataFileHttpError
     */
    deleteDataFile: typeof deleteDataFile;
    /**
     * Get descriptive info for the specified data file.
     *
     * @param id The ID of the data file.
     * @throws GetDataFileHttpError
     */
    getDataFile: typeof getDataFile;
    /**
     * Re-upload an existing data file.
     *
     * @param id The ID of the data file to update.
     * @param body an object with the body content
     * @throws ReuploadDataFileHttpError
     */
    reuploadDataFile: typeof reuploadDataFile;
    /**
     * This is primarily an admin type of operation.  In general, the owner of a data file is implicitly set as
     * part of a data file upload.  For data files that reside in a personal space, changing the owner has the
     * effect of moving the data file to the new owner's personal space.
     *
     * @param id The ID of the data file whose owner will be updated.
     * @param body an object with the body content
     * @throws ChangeDataFileOwnerHttpError
     */
    changeDataFileOwner: typeof changeDataFileOwner;
    /**
     * This is to allow for a separate admin type of operation that is more global in terms of access in cases
     * where admin users may not explicitly have been granted full access to a given space within the declared
     * space-level permissions.  If the space ID is set to null, then the datafile will end up residing in the
     * personal space of the user who is the owner of the file.
     *
     * @param id The ID of the data file whose space will be updated.
     * @param body an object with the body content
     * @throws MoveDataFileHttpError
     */
    moveDataFile: typeof moveDataFile;
    /**
     * Clears the cache for data-files api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the data-files api
 */
declare const dataFilesExport: DataFilesAPI;

export { type BatchChangeSpaceItem, type BatchDeleteItem, type ChangeDataFileOwnerHttpError, type ChangeDataFileOwnerHttpResponse, type ChangeDataFileOwnerRequest, type ChangeDataFileSpaceRequest, type ConnectionsResponse, type DataFileBatchChangeSpaceRequest, type DataFileBatchDeleteRequest, type DataFileUploadResponse, type DataFilesAPI, type DeleteDataFileHttpError, type DeleteDataFileHttpResponse, type DeleteDataFilesHttpError, type DeleteDataFilesHttpResponse, type ErrorResponse, type ErrorResponseItem, type GetConnectionsResponse, type GetConnectionsSortField, type GetDataFileConnectionHttpError, type GetDataFileConnectionHttpResponse, type GetDataFileHttpError, type GetDataFileHttpResponse, type GetDataFileInfosResponse, type GetDataFileInfosSortField, type GetDataFilesConnectionsHttpError, type GetDataFilesConnectionsHttpResponse, type GetDataFilesHttpError, type GetDataFilesHttpResponse, type GetDataFilesQuotasHttpError, type GetDataFilesQuotasHttpResponse, type LinkResponse, type LinksResponse, type MoveDataFileHttpError, type MoveDataFileHttpResponse, type MoveDataFilesHttpError, type MoveDataFilesHttpResponse, type MultiStatusResponse, type MultiStatusResponseItem, type QuotaResponse, type ReuploadDataFileHttpError, type ReuploadDataFileHttpResponse, type UploadDataFileHttpError, type UploadDataFileHttpResponse, changeDataFileOwner, clearCache, dataFilesExport as default, deleteDataFile, deleteDataFiles, getDataFile, getDataFileConnection, getDataFiles, getDataFilesConnections, getDataFilesQuotas, moveDataFile, moveDataFiles, reuploadDataFile, uploadDataFile };
