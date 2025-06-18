import { A as ApiCallOptions } from './invoke-fetch-types-D62-HKKp.js';

type BatchChangeSpaceItem = {
    /** The ID of the data file whose space will be changed. */
    id: string;
    /** The ID of the new space.  Passing in a null will result in the data file being moved to the user's
     * personal space. */
    spaceId?: string;
};
type BatchDeleteAllBySpaceItem = {
    /** The ID of the space whose data files will be deleted. */
    id: string;
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
    spaceStats?: SpaceStatsResponse;
    /** The type of the connection. */
    type: string;
};
/**
 * Specifies the list of data file change space operations in a single batch.
 */
type DataFileBatchChangeSpaceRequest = {
    /** The list of data files to delete. */
    "change-space": BatchChangeSpaceItem[];
};
type DataFileBatchDeleteRequest = {
    /** If specified, the explicit list of data files to delete. */
    delete: BatchDeleteItem[];
    /** If specified, attempt to delete all of the data files from the specified shared spaces. */
    deleteAllBySpace?: BatchDeleteAllBySpaceItem[];
    /** If specified, attempt to delete all of the datafiles from ther user's personal space. */
    deleteAllFromPersonalSpace?: boolean;
};
/**
 * <p>Members:</p><ul></ul>
 */
type DataFilePermission = "read" | "update" | "delete" | "list" | "change_owner" | "change_space";
type DataFileUploadResponse = {
    /** The CRUD actions that are allowed on the given data file. */
    actions: DataFilePermission[];
    /** If this file or folder is bound to the lifecycle of a specific app, this is the ID of this app. */
    appId?: string;
    /** The name of the file or folder, not including any folder path prefix. */
    baseName?: string;
    /** The date that the file or folder was created. */
    createdDate: string;
    /** Whether or not this given item represents a folder or a file. */
    folder?: boolean;
    /** If the file or folder resides in a parent folder, this is the parent folder ID.  If the file or folder
     * does not reside in a parent folder, this value is null. */
    folderId?: string;
    /** If the file or folder resides in a parent folder, this is the parent folder path.  If the file or folder
     * does not reside in a parent folder, this value is null. */
    folderPath?: string;
    folderStats: FolderStatsResponse;
    /** The ID for the file or folder. */
    id: string;
    /** The date that the updated file or folder was last modified. */
    modifiedDate?: string;
    /** The full name of the file or folder, including any folder path prefix. */
    name: string;
    /** The 'owner' of a file or folder is the user who last uploaded the item's content. */
    ownerId: string;
    /** The QRI generated from the datafile or folder's metadata. */
    qri?: string;
    /** The size of the uploaded file, in bytes.  0 if this item represents a folder */
    size: number;
    /** If the file or folder was created in a team space, this is the ID of that space. */
    spaceId?: string;
};
/**
 * Fine-grained error codes for data-files REST operations.  For operations which do not have a more fine-grained
 * error code, the error code is set to the HTTP status code.<p>Members:</p><ul><li><i>DF-001</i> - The page cursor passed as a parameter to the GET operation is invalid.</li><li><i>DF-002</i> - The sort specification passed as a parameter to the GET operation is invalid.</li><li><i>DF-003</i> - FolderPath and FolderId are mutually exclusive, they cannot both be passed as parameters.</li><li><i>DF-004</i> - The provided FolderPath must be in canonical form.</li><li><i>DF-005</i> - The specified parent folder cannot be found.</li><li><i>DF-006</i> - The specified owner cannot be found.</li><li><i>DF-007</i> - A connection corresponding to the specified space cannot be found.</li><li><i>DF-008</i> - THe specified ID must correspond to a folder, not a file.</li><li><i>DF-009</i> - The specified space cannot be found.</li><li><i>DF-010</i> - The specified file name contains an invalid file extension.</li><li><i>DF-011</i> - The specified file name is missing a file extension.</li><li><i>DF-012</i> - The specified temporary content file could not be found.</li><li><i>DF-013</i> - Access to the specified space is forbidden.</li><li><i>DF-014</i> - The specified connection cannot be found.</li><li><i>DF-015</i> - The provided filename must be in canonical form.</li><li><i>DF-016</i> - The datafile size quota for the given personal space has been exceeded.</li><li><i>DF-017</i> - The specified source file or folder could not be found.</li><li><i>DF-018</i> - The source and target of a datafile operation must either both be folders or both be files, but they are
 *             not.</li><li><i>DF-019</i> - The specified target folder is a child of the specified source folder, which is not allowed.</li><li><i>DF-020</i> - The specified folder does not exist in the specified space.</li><li><i>DF-021</i> - The specified source file or folder is already locked.</li><li><i>DF-022</i> - The automatic creation of a missing parent folder failed.</li><li><i>DF-023</i> - An attempt to lock a parent folder of a given data file item failed.</li><li><i>DF-024</i> - The attempt to copy a source file or folder to a target failed.</li><li><i>DF-025</i> - The specified target file or folder is already locked.</li><li><i>DF-026</i> - The request results in the creation of a folder hierarchy which is beyond the max allowed folder
 *             hierarchy depth.</li></ul>
 */
type ErrorCode = "HTTP-200" | "HTTP-201" | "HTTP-204" | "HTTP-400" | "HTTP-403" | "HTTP-404" | "HTTP-409" | "HTTP-413" | "HTTP-423" | "HTTP-500" | "HTTP-501" | "HTTP-503" | "DF-001" | "DF-002" | "DF-003" | "DF-004" | "DF-005" | "DF-006" | "DF-007" | "DF-008" | "DF-009" | "DF-010" | "DF-011" | "DF-012" | "DF-013" | "DF-014" | "DF-015" | "DF-016" | "DF-017" | "DF-018" | "DF-019" | "DF-020" | "DF-021" | "DF-022" | "DF-023" | "DF-024" | "DF-025" | "DF-026";
type ErrorResponse = {
    /** List of errors and their properties. */
    errors: ErrorResponseItem[];
};
type ErrorResponseItem = {
    /** Fine-grained error codes for data-files REST operations.  For operations which do not have a more fine-grained
     * error code, the error code is set to the HTTP status code.<p>Members:</p><ul><li><i>DF-001</i> - The page cursor passed as a parameter to the GET operation is invalid.</li><li><i>DF-002</i> - The sort specification passed as a parameter to the GET operation is invalid.</li><li><i>DF-003</i> - FolderPath and FolderId are mutually exclusive, they cannot both be passed as parameters.</li><li><i>DF-004</i> - The provided FolderPath must be in canonical form.</li><li><i>DF-005</i> - The specified parent folder cannot be found.</li><li><i>DF-006</i> - The specified owner cannot be found.</li><li><i>DF-007</i> - A connection corresponding to the specified space cannot be found.</li><li><i>DF-008</i> - THe specified ID must correspond to a folder, not a file.</li><li><i>DF-009</i> - The specified space cannot be found.</li><li><i>DF-010</i> - The specified file name contains an invalid file extension.</li><li><i>DF-011</i> - The specified file name is missing a file extension.</li><li><i>DF-012</i> - The specified temporary content file could not be found.</li><li><i>DF-013</i> - Access to the specified space is forbidden.</li><li><i>DF-014</i> - The specified connection cannot be found.</li><li><i>DF-015</i> - The provided filename must be in canonical form.</li><li><i>DF-016</i> - The datafile size quota for the given personal space has been exceeded.</li><li><i>DF-017</i> - The specified source file or folder could not be found.</li><li><i>DF-018</i> - The source and target of a datafile operation must either both be folders or both be files, but they are
     *             not.</li><li><i>DF-019</i> - The specified target folder is a child of the specified source folder, which is not allowed.</li><li><i>DF-020</i> - The specified folder does not exist in the specified space.</li><li><i>DF-021</i> - The specified source file or folder is already locked.</li><li><i>DF-022</i> - The automatic creation of a missing parent folder failed.</li><li><i>DF-023</i> - An attempt to lock a parent folder of a given data file item failed.</li><li><i>DF-024</i> - The attempt to copy a source file or folder to a target failed.</li><li><i>DF-025</i> - The specified target file or folder is already locked.</li><li><i>DF-026</i> - The request results in the creation of a folder hierarchy which is beyond the max allowed folder
     *             hierarchy depth.</li></ul> */
    code: ErrorCode;
    /** A human-readable explanation specific to this occurrence of the problem. */
    detail?: string;
    /** Summary of the problem. */
    title?: string;
};
type FolderStatsResponse = {
    /** The sum of the file sizes, in bytes, of all app-scoped data files that reside as direct and indirect children of
     * the given folder and it's sub-folder hierarchy. */
    aggregateAppScopedFileSize: number;
    /** The sum of the file sizes, in bytes, of all data files that reside as direct and indirect children of the given
     * folder and it's sub-folder hierarchy. */
    aggregateFileSize: number;
    /** The sum of the file sizes, in bytes, of all internal data files that reside as direct and indirect children of
     * the given folder and it's sub-folder hierarchy. */
    aggregateInternalFileSize: number;
    /** The number of app-scoped data files that reside as direct children of the given folder. */
    directAppScopedFileCount: number;
    /** The number of data files that reside as direct children of the given folder. */
    directFileCount: number;
    /** The number of sub-folders that reside as direct children of the given folder. */
    directFolderCount: number;
    /** The number of 'internal' data files (IE, those that are not visible to end users by default) that reside as
     * direct children of the given folder. */
    directInternalFileCount: number;
    /** The number of app-scoped data files that reside as direct and indirect children of the given folder and it's
     * sub-folder hierarchy. */
    totalAppScopedFileCount: number;
    /** The number of data files that reside as direct and indirect children of the given folder and it's sub-folder
     * hierarchy. */
    totalFileCount: number;
    /** The number of folders that reside as direct and indirect children of the given folder and it's sub-folder
     * hierarchy. */
    totalFolderCount: number;
    /** The number of 'internal' data files (IE, those that are not visible to end users by default) that reside as
     * direct and indirect children of the given folder and it's sub-folder hierarchy. */
    totalInternalFileCount: number;
};
type GetConnectionsResponse = {
    /** Properties of the connections to the tenant spaces. */
    data: ConnectionsResponse[];
    links: LinksResponse;
};
/**
 * <p>Members:</p><ul></ul>
 */
type GetConnectionsSortField = "spaceId" | "+spaceId" | "-spaceId";
type GetDataFileInfosResponse = {
    /** Properties of the uploaded data files. */
    data: DataFileUploadResponse[];
    links: LinksResponse;
};
/**
 * <p>Members:</p><ul></ul>
 */
type GetDataFileInfosSortField = "name" | "+name" | "-name" | "size" | "+size" | "-size" | "modifiedDate" | "+modifiedDate" | "-modifiedDate" | "folder" | "+folder" | "-folder" | "baseName" | "+baseName" | "-baseName";
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
    /** Fine-grained error codes for data-files REST operations.  For operations which do not have a more fine-grained
     * error code, the error code is set to the HTTP status code.<p>Members:</p><ul><li><i>DF-001</i> - The page cursor passed as a parameter to the GET operation is invalid.</li><li><i>DF-002</i> - The sort specification passed as a parameter to the GET operation is invalid.</li><li><i>DF-003</i> - FolderPath and FolderId are mutually exclusive, they cannot both be passed as parameters.</li><li><i>DF-004</i> - The provided FolderPath must be in canonical form.</li><li><i>DF-005</i> - The specified parent folder cannot be found.</li><li><i>DF-006</i> - The specified owner cannot be found.</li><li><i>DF-007</i> - A connection corresponding to the specified space cannot be found.</li><li><i>DF-008</i> - THe specified ID must correspond to a folder, not a file.</li><li><i>DF-009</i> - The specified space cannot be found.</li><li><i>DF-010</i> - The specified file name contains an invalid file extension.</li><li><i>DF-011</i> - The specified file name is missing a file extension.</li><li><i>DF-012</i> - The specified temporary content file could not be found.</li><li><i>DF-013</i> - Access to the specified space is forbidden.</li><li><i>DF-014</i> - The specified connection cannot be found.</li><li><i>DF-015</i> - The provided filename must be in canonical form.</li><li><i>DF-016</i> - The datafile size quota for the given personal space has been exceeded.</li><li><i>DF-017</i> - The specified source file or folder could not be found.</li><li><i>DF-018</i> - The source and target of a datafile operation must either both be folders or both be files, but they are
     *             not.</li><li><i>DF-019</i> - The specified target folder is a child of the specified source folder, which is not allowed.</li><li><i>DF-020</i> - The specified folder does not exist in the specified space.</li><li><i>DF-021</i> - The specified source file or folder is already locked.</li><li><i>DF-022</i> - The automatic creation of a missing parent folder failed.</li><li><i>DF-023</i> - An attempt to lock a parent folder of a given data file item failed.</li><li><i>DF-024</i> - The attempt to copy a source file or folder to a target failed.</li><li><i>DF-025</i> - The specified target file or folder is already locked.</li><li><i>DF-026</i> - The request results in the creation of a folder hierarchy which is beyond the max allowed folder
     *             hierarchy depth.</li></ul> */
    code: ErrorCode;
    /** A human-readable explanation specific to this occurrence of the problem. */
    detail?: string;
    /** The unique identifier of the file. */
    id: string;
    /** The HTTP status code. */
    status: number;
    /** Summary of the problem. */
    title?: string;
};
/**
 * If a SourceId is specified, and a folder is being updated by this PUT operation, this specifies how the
 * source folder contents should be applied to the target folder, if the target folder is not empty.  'merge'
 * implies the contents of the source folder should be merged with the existing target contents.  That is, all
 * existing direct or indirect child items in the target folder are replaced by the same items in the source folder.
 * All existing items in the target folder that are not present in the source folder are left, as is, in the target.
 * 'replace' implies the contents of the source folder should replace the contents of the target folder.  That is,
 * all direct or indirect items in the target folder are removed before the items from the source folder are copied
 * over.  The resulting target folder only contains the items from the source folder.  If not specified, the default
 * behavior is 'merge'.<p>Members:</p><ul></ul>
 */
type PutDataFileFolderMergeBehavior = "merge" | "replace";
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
type SpaceStatsResponse = {
    /** The sum of the file sizes, in bytes, of all app-scoped data files that reside as direct and indirect children of
     * the given folder and it's sub-folder hierarchy. */
    aggregateAppScopedFileSize: number;
    /** The sum of the file sizes, in bytes, of all data files that reside as direct and indirect children of the given
     * folder and it's sub-folder hierarchy. */
    aggregateFileSize: number;
    /** The sum of the file sizes, in bytes, of all internal data files that reside as direct and indirect children of
     * the given folder and it's sub-folder hierarchy. */
    aggregateInternalFileSize: number;
    /** The number of app-scoped data files that reside as direct children of the given folder. */
    directAppScopedFileCount: number;
    /** The number of data files that reside as direct children of the given folder. */
    directFileCount: number;
    /** The number of sub-folders that reside as direct children of the given folder. */
    directFolderCount: number;
    /** The number of 'internal' data files (IE, those that are not visible to end users by default) that reside as
     * direct children of the given folder. */
    directInternalFileCount: number;
    /** The number of app-scoped data files that reside as direct and indirect children of the given folder and it's
     * sub-folder hierarchy. */
    totalAppScopedFileCount: number;
    /** The number of data files that reside as direct and indirect children of the given folder and it's sub-folder
     * hierarchy. */
    totalFileCount: number;
    /** The number of folders that reside as direct and indirect children of the given folder and it's sub-folder
     * hierarchy. */
    totalFolderCount: number;
    /** The number of 'internal' data files (IE, those that are not visible to end users by default) that reside as
     * direct and indirect children of the given folder and it's sub-folder hierarchy. */
    totalInternalFileCount: number;
};
/**
 * Get descriptive info for the specified data files.
 * @example
 * getDataFiles(
 *   {
 *     allowInternalFiles: false,
 *     appId: "f34b91a1-0dc3-44ac-a847-51cb84122c84",
 *     baseNameWildcard: "*SomeFileName*",
 *     connectionId: "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc",
 *     excludeFiles: false,
 *     excludeSubFolders: false,
 *     folderId: "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc",
 *     folderPath: "some/folder",
 *     includeAllSpaces: false,
 *     includeFolders: false,
 *     includeFolderStats: false,
 *     limit: 5,
 *     name: "MyFile.csv",
 *     notOwnerId: "lDL4DIINndhL_iJkcbqWyJenuwizP-2D",
 *     ownerId: "lDL4DIINndhL_iJkcbqWyJenuwizP-2D",
 *     page: "NzlmNzI5NWMtZGJlZC00Y2Y4LThkNDAtMzQ5ZDU3YzNjMzQ1"
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetDataFilesHttpError
 */
declare function getDataFiles(query: {
    /** If set to false, do not return data files with internal extensions else return all the data files. */
    allowInternalFiles?: boolean;
    /** Only return files scoped to the specified app.  If this parameter is not specified, only files that are not
     * scoped to any app are returned.  "*" implies all app-scoped files are returned. */
    appId?: string;
    /** If present, return only items whose base name matches the given wildcard.  Wildcards include '*' and '?'
     * characters to allow for multiple matches.  The base name is the actual file or folder name without any
     * folder pathing included. */
    baseNameWildcard?: string;
    /** Return files and folders that reside in the space referenced by the specified DataFiles connection.  If this
     * parameter is not specified, the user's personal space is implied. */
    connectionId?: string;
    /** If set to true, exclude files in the returned list (IE, only return folders).  If false, include files. */
    excludeFiles?: boolean;
    /** If set to true, exclude folders and files that reside in sub-folders of the root being searched.  If false,
     * include all items in full folder hierarchy that recursively reside under the root.  That is, setting to
     * true results in only the direct children of the root being returned. */
    excludeSubFolders?: boolean;
    /** If present, return only items which reside under the folder specified by the given ID.  If not present,
     * items that live at the root of the space are returned.  This property is mutually exclusive with 'folderPath'. */
    folderId?: string;
    /** If present, return only items which reside under the specified folder path.  If not present, items that
     * live at the root of the space are returned.  This property is mutually exclusive with 'folderId'. */
    folderPath?: string;
    /** If set to true, and connectionId is not specified, return files and folders from all spaces the given user
     * has access to (including the personal space).  If connectionId is specified, this parameter is ignored. */
    includeAllSpaces?: boolean;
    /** If set to true, include computed folder statistics for folders in the returned list.  If false, this information
     * is not returned. */
    includeFolderStats?: boolean;
    /** If set to true, include folders in the returned list.  If false, only return data files. */
    includeFolders?: boolean;
    /** If present, the maximum number of data files to return. */
    limit?: number;
    /** Filter the list of files returned to the given file name. */
    name?: string;
    /** If present, fetch the data files whose owner is not the specified owner.  If a connectionId is specified in
     * this case, the returned list is constrained to the specified space.  If connectionId is not specified, then
     * the returned list is constrained to the calling user's personal space.  If includeAllSpaces is set to true,
     * and connectionId is not specified, the returned list is from all spaces the given user
     * has access to (including the personal space). */
    notOwnerId?: string;
    /** If present, fetch the data files for the specified owner.  If a connectionId is specified in this case, the
     * returned list is constrained to the specified space.  If connectionId is not specified, then all files owned
     * by the specified user are returned regardless of the personal space that a given file resides in. */
    ownerId?: string;
    /** If present, the cursor that starts the page of data that is returned. */
    page?: string;
    /** The name of the field used to sort the result.  By default, the sort order is ascending.  Putting a '+' prefix on
     * the sort field name explicitly indicates ascending sort order.  A '-' prefix indicates a descending sort order. */
    sort?: GetDataFileInfosSortField;
}, options?: ApiCallOptions): Promise<GetDataFilesHttpResponse>;
type GetDataFilesHttpResponse = {
    data: GetDataFileInfosResponse;
    headers: Headers;
    status: 200;
    prev?: (options?: ApiCallOptions) => Promise<GetDataFilesHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetDataFilesHttpResponse>;
};
type GetDataFilesHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 403;
};
/**
 * Upload a new data file or create a new folder.
 *
 * @param body an object with the body content
 * @throws UploadDataFileHttpError
 */
declare function uploadDataFile(body: {
    /** IFormFile form multipart/form-data */
    File?: BodyInit;
    /** See PostDataFileRequest schema which defines request structure.
     *  See  model. */
    Json?: {
        /** If this file should be bound to the lifecycle of a specific app, this is the ID of this app.  If this
         * request is creating a folder, the specification of an app ID is not allowed. */
        appId?: string;
        /** If present, this is the DataFiles connection that the upload should occur in the context of.  If absent,
         * the default is that the upload will occur in the context of the Personal Space DataFiles connection.  If the
         * DataFiles connection is different from the one specified when the file or folder was last POSTed or PUT, this
         * will result in a logical move of this file or folder into the new space. */
        connectionId?: string;
        /** If true, a folder will be created.  If false, a file is created. */
        folder?: boolean;
        /** If the specified file or folder should be moved to become a a sub-item of an existing folder, this is the ID
         * of this parent folder.  Any additional folder path that is present on the Name property will be created
         * as a subfolder hierarchy of this folder.  If the FolderID is null, the file or folder specified in the
         * Name property (including any folder prefix on that name), will be created in the root of the space. */
        folderId?: string;
        /** Name that will be given to the file or folder.  It should be noted that the '/' character
         * in the name indicates a 'path' separator in a logical folder hierarchy for the name.  Names that
         * contain '/'s should be used with the assumption that a logical 'folder hierarchy' is being defined for the
         * full pathname of that file or folder.  IE, a '/' is a significant character in the name. */
        name: string;
        /** If a SourceId is specified, this is the ID of the existing data file or folder whose content should be copied
         * into the specified data file or folder.  That is, for a file instead of the file content being specified in
         * the Data element, it is effectively copied from an existing, previously uploaded file.  For a folder, rather
         * than the new folder being empty, it's contents are copied from an existing, previously created folder. */
        sourceId?: string;
        /** If a TempContentFileId is specified, this is the ID of a previously uploaded temporary content file whose
         * content should be copied into the specified data file.  That is, instead of the file content being specified
         * in the Data element, it is effectively copied from an existing, previously uploaded file.  The expectation
         * is that this file was previously uploaded to the temporary content service, and the ID specified here is
         * the one returned from the temp content upload request.  This option does not apply when POSTing a folder. */
        tempContentFileId?: string;
    };
}, options?: ApiCallOptions): Promise<UploadDataFileHttpResponse>;
type UploadDataFileHttpResponse = {
    data: DataFileUploadResponse;
    headers: Headers;
    status: 201;
};
type UploadDataFileHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 403 | 409 | 413 | 423 | 501;
};
/**
 * This is to allow for a separate admin type of operation that is more global in terms of access in cases
 * where admin users may not explicitly have been granted full access to a given space within the declared
 * space-level permissions.  If the space ID is set to null, then the data file or folder will end up residing
 * in the personal space of the user who is the owner of the item.
 *
 * @param body an object with the body content
 * @throws MoveDataFilesHttpError
 */
declare function moveDataFiles(body: DataFileBatchChangeSpaceRequest, options?: ApiCallOptions): Promise<MoveDataFilesHttpResponse>;
type MoveDataFilesHttpResponse = {
    data: MultiStatusResponse;
    headers: Headers;
    status: 207;
};
type MoveDataFilesHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400;
};
/**
 * Delete the specified set of data files and/or folders as a single batch.
 *
 * @param body an object with the body content
 * @throws DeleteDataFilesHttpError
 */
declare function deleteDataFiles(body: DataFileBatchDeleteRequest, options?: ApiCallOptions): Promise<DeleteDataFilesHttpResponse>;
type DeleteDataFilesHttpResponse = {
    data: MultiStatusResponse;
    headers: Headers;
    status: 207;
};
type DeleteDataFilesHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400;
};
/**
 * The non-filtered list contains a set of hardcoded connections, along with one connection per team space that
 * the given user has access to.
 * @example
 * getDataFilesConnections(
 *   {
 *     appId: "f34b91a1-0dc3-44ac-a847-51cb84122c84",
 *     includeSpaceStats: false,
 *     limit: 5,
 *     name: "MySenseApp",
 *     page: "NzlmNzI5NWMtZGJlZC00Y2Y4LThkNDAtMzQ5ZDU3YzNjMzQ1",
 *     personal: true,
 *     spaceId: "617979737a9f56e49dea2e6e"
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetDataFilesConnectionsHttpError
 */
declare function getDataFilesConnections(query: {
    /** If present, get connections with connection strings that are scoped to the given app ID. */
    appId?: string;
    /** If set to true, include computed space-level statistics for the spaces represented by the connections in the
     * returned list.  If false, this information is not returned. */
    includeSpaceStats?: boolean;
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
}, options?: ApiCallOptions): Promise<GetDataFilesConnectionsHttpResponse>;
type GetDataFilesConnectionsHttpResponse = {
    data: GetConnectionsResponse;
    headers: Headers;
    status: 200;
    prev?: (options?: ApiCallOptions) => Promise<GetDataFilesConnectionsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetDataFilesConnectionsHttpResponse>;
};
type GetDataFilesConnectionsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 403;
};
/**
 * Get the built-in connection used by the engine to load/write data files given a connection ID.
 * @example
 * getDataFileConnection(
 *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
 * )
 *
 * @param id The ID of the connection.
 * @throws GetDataFileConnectionHttpError
 */
declare function getDataFileConnection(id: string, options?: ApiCallOptions): Promise<GetDataFileConnectionHttpResponse>;
type GetDataFileConnectionHttpResponse = {
    data: ConnectionsResponse;
    headers: Headers;
    status: 200;
};
type GetDataFileConnectionHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 403 | 404;
};
/**
 * Get quota information for the calling user.
 *
 * @throws GetDataFilesQuotasHttpError
 */
declare function getDataFilesQuotas(options?: ApiCallOptions): Promise<GetDataFilesQuotasHttpResponse>;
type GetDataFilesQuotasHttpResponse = {
    data: QuotaResponse;
    headers: Headers;
    status: 200;
};
type GetDataFilesQuotasHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 403;
};
/**
 * Delete the specified data file or folder.  Deleting a folder will also recursively delete all files and
 * subfolders that reside within the specified folder.
 * @example
 * deleteDataFile(
 *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
 * )
 *
 * @param id The ID of the data file or folder to delete.
 * @throws DeleteDataFileHttpError
 */
declare function deleteDataFile(id: string, options?: ApiCallOptions): Promise<DeleteDataFileHttpResponse>;
type DeleteDataFileHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type DeleteDataFileHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 403 | 404;
};
/**
 * Get descriptive info for the specified data file.
 * @example
 * getDataFile(
 *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
 * )
 *
 * @param id The ID of the data file.
 * @throws GetDataFileHttpError
 */
declare function getDataFile(id: string, options?: ApiCallOptions): Promise<GetDataFileHttpResponse>;
type GetDataFileHttpResponse = {
    data: DataFileUploadResponse;
    headers: Headers;
    status: 200;
};
type GetDataFileHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 403 | 404;
};
/**
 * Re-upload an existing data file or update an existing folder.
 *
 * @param id The ID of the data file to update.
 * @param body an object with the body content
 * @throws ReuploadDataFileHttpError
 */
declare function reuploadDataFile(id: string, body: {
    /** IFormFile form multipart/form-data */
    File?: BodyInit;
    /** See PutDataFileRequest schema which defines request structure.
     *  See  model. */
    Json?: {
        /** If this file should be bound to the lifecycle of a specific app, this is the ID of this app.  If this
         * request is creating a folder, the specification of an app ID is not allowed. */
        appId?: string;
        /** If present, this is the DataFiles connection points to the space that the file or folder should reside in.
         * If absent, the default is that the file or folder will reside in the Personal SPce.  If the DataFiles
         * connection is different from the one specified when the file or folder was last POSTed or PUT, this will
         * result in a logical move of this file or folder into the new space. */
        connectionId?: string;
        /** If the specified file or folder should be created as a sub-item of an existing folder, this is the ID
         * of this parent folder.  Any additional folder path that is present on the Name property will be created
         * as a subfolder hierarchy of this folder.  If the FolderID is null, the file or folder specified in the
         * Name property (including any folder prefix on that name), will be created in the root of the space. */
        folderId?: string;
        /** If a SourceId is specified, and a folder is being updated by this PUT operation, this specifies how the
         * source folder contents should be applied to the target folder, if the target folder is not empty.  'merge'
         * implies the contents of the source folder should be merged with the existing target contents.  That is, all
         * existing direct or indirect child items in the target folder are replaced by the same items in the source folder.
         * All existing items in the target folder that are not present in the source folder are left, as is, in the target.
         * 'replace' implies the contents of the source folder should replace the contents of the target folder.  That is,
         * all direct or indirect items in the target folder are removed before the items from the source folder are copied
         * over.  The resulting target folder only contains the items from the source folder.  If not specified, the default
         * behavior is 'merge'.<p>Members:</p><ul></ul> */
        folderMergeBehavior?: PutDataFileFolderMergeBehavior;
        /** Name that will be given to the file or folder.  If this name is different than the name used when the file
         * or folder was last POSTed or PUT, this will result in a rename of the file or folder.  It should be noted
         * that the '/' character in a data file name indicates a 'path' separator in a logical folder hierarchy for
         * the name.  Names that contain '/'s should be used with the assumption that a logical 'folder hierarchy' is
         * being defined for the full pathname of that file or folder..  '/' is a significant character in the data file
         * or folder name. */
        name?: string;
        /** If a SourceId is specified, this is the ID of the existing data file or folder whose content should be copied
         * into the specified data file or folder.  That is, for a file instead of the file content being specified in
         * the Data element, it is effectively copied from an existing, previously uploaded file.  For a folder, it's
         * contents are copied from an existing, previously created folder.  If there it existing content in the target
         * folder, then how the source and target folder contents are merged together is specified in the
         * FolderMergeBehavior option. */
        sourceId?: string;
        /** If a TempContentFileId is specified, this is the ID of a previously uploaded temporary content file whose
         * content should be copied into the specified data file.  That is, instead of the file content being specified
         * in the Data element, it is effectively copied from an existing, previously uploaded file.  The expectation
         * is that this file was previously uploaded to the temporary content service, and the ID specified here is
         * the one returned from the temp content upload request. */
        tempContentFileId?: string;
    };
}, options?: ApiCallOptions): Promise<ReuploadDataFileHttpResponse>;
type ReuploadDataFileHttpResponse = {
    data: DataFileUploadResponse;
    headers: Headers;
    status: 201;
};
type ReuploadDataFileHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 403 | 404 | 409 | 413 | 423;
};
/**
 * This is primarily an admin type of operation.  In general, the owner of a data file or folder is implicitly
 * set as part of a create or update operation.  For data files or folders that reside in a personal space,
 * changing the owner has the effect of moving the data file to the new owner's personal space.  Note that,
 * If a given file or folder is not in the root of a personal space, this operation will not succeed, since
 * the parent folder does not reside in the target owner's personal space.  If the owner of a folder in the
 * root of a personal space is changed, the owner of all subfolders and files within those subfolders will
 * also recursively change.
 *
 * @param id The ID of the data file or folder whose owner will be updated.
 * @param body an object with the body content
 * @throws ChangeDataFileOwnerHttpError
 */
declare function changeDataFileOwner(id: string, body: ChangeDataFileOwnerRequest, options?: ApiCallOptions): Promise<ChangeDataFileOwnerHttpResponse>;
type ChangeDataFileOwnerHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type ChangeDataFileOwnerHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 403 | 404 | 409 | 423;
};
/**
 * This is to allow for a separate admin type of operation that is more global in terms of access in cases
 * where admin users may not explicitly have been granted full access to a given space within the declared
 * space-level permissions.  If the space ID is set to null, then the datafile or folder will end up residing
 * in the personal space of the user who is the owner of the item.  Note that, if a given file or folder is not
 * in the root of a given space, this operation will not succeed, since the parent folder does not reside in
 * the target space.  If the space of a folder in the root of the source space is changed, all subfolders and
 * files within those subfolders will also recursively be moved to the new space.
 *
 * @param id The ID of the data file or folder whose
            space will be updated.
 * @param body an object with the body content
 * @throws MoveDataFileHttpError
 */
declare function moveDataFile(id: string, body: ChangeDataFileSpaceRequest, options?: ApiCallOptions): Promise<MoveDataFileHttpResponse>;
type MoveDataFileHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type MoveDataFileHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 400 | 403 | 404 | 409 | 423;
};
/**
 * Clears the cache for data-files api requests.
 */
declare function clearCache(): void;
interface DataFilesAPI {
    /**
     * Get descriptive info for the specified data files.
     * @example
     * getDataFiles(
     *   {
     *     allowInternalFiles: false,
     *     appId: "f34b91a1-0dc3-44ac-a847-51cb84122c84",
     *     baseNameWildcard: "*SomeFileName*",
     *     connectionId: "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc",
     *     excludeFiles: false,
     *     excludeSubFolders: false,
     *     folderId: "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc",
     *     folderPath: "some/folder",
     *     includeAllSpaces: false,
     *     includeFolders: false,
     *     includeFolderStats: false,
     *     limit: 5,
     *     name: "MyFile.csv",
     *     notOwnerId: "lDL4DIINndhL_iJkcbqWyJenuwizP-2D",
     *     ownerId: "lDL4DIINndhL_iJkcbqWyJenuwizP-2D",
     *     page: "NzlmNzI5NWMtZGJlZC00Y2Y4LThkNDAtMzQ5ZDU3YzNjMzQ1"
     *   }
     * )
     *
     * @param query an object with query parameters
     * @throws GetDataFilesHttpError
     */
    getDataFiles: typeof getDataFiles;
    /**
     * Upload a new data file or create a new folder.
     *
     * @param body an object with the body content
     * @throws UploadDataFileHttpError
     */
    uploadDataFile: typeof uploadDataFile;
    /**
     * This is to allow for a separate admin type of operation that is more global in terms of access in cases
     * where admin users may not explicitly have been granted full access to a given space within the declared
     * space-level permissions.  If the space ID is set to null, then the data file or folder will end up residing
     * in the personal space of the user who is the owner of the item.
     *
     * @param body an object with the body content
     * @throws MoveDataFilesHttpError
     */
    moveDataFiles: typeof moveDataFiles;
    /**
     * Delete the specified set of data files and/or folders as a single batch.
     *
     * @param body an object with the body content
     * @throws DeleteDataFilesHttpError
     */
    deleteDataFiles: typeof deleteDataFiles;
    /**
     * The non-filtered list contains a set of hardcoded connections, along with one connection per team space that
     * the given user has access to.
     * @example
     * getDataFilesConnections(
     *   {
     *     appId: "f34b91a1-0dc3-44ac-a847-51cb84122c84",
     *     includeSpaceStats: false,
     *     limit: 5,
     *     name: "MySenseApp",
     *     page: "NzlmNzI5NWMtZGJlZC00Y2Y4LThkNDAtMzQ5ZDU3YzNjMzQ1",
     *     personal: true,
     *     spaceId: "617979737a9f56e49dea2e6e"
     *   }
     * )
     *
     * @param query an object with query parameters
     * @throws GetDataFilesConnectionsHttpError
     */
    getDataFilesConnections: typeof getDataFilesConnections;
    /**
     * Get the built-in connection used by the engine to load/write data files given a connection ID.
     * @example
     * getDataFileConnection(
     *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
     * )
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
     * Delete the specified data file or folder.  Deleting a folder will also recursively delete all files and
     * subfolders that reside within the specified folder.
     * @example
     * deleteDataFile(
     *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
     * )
     *
     * @param id The ID of the data file or folder to delete.
     * @throws DeleteDataFileHttpError
     */
    deleteDataFile: typeof deleteDataFile;
    /**
     * Get descriptive info for the specified data file.
     * @example
     * getDataFile(
     *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
     * )
     *
     * @param id The ID of the data file.
     * @throws GetDataFileHttpError
     */
    getDataFile: typeof getDataFile;
    /**
     * Re-upload an existing data file or update an existing folder.
     *
     * @param id The ID of the data file to update.
     * @param body an object with the body content
     * @throws ReuploadDataFileHttpError
     */
    reuploadDataFile: typeof reuploadDataFile;
    /**
     * This is primarily an admin type of operation.  In general, the owner of a data file or folder is implicitly
     * set as part of a create or update operation.  For data files or folders that reside in a personal space,
     * changing the owner has the effect of moving the data file to the new owner's personal space.  Note that,
     * If a given file or folder is not in the root of a personal space, this operation will not succeed, since
     * the parent folder does not reside in the target owner's personal space.  If the owner of a folder in the
     * root of a personal space is changed, the owner of all subfolders and files within those subfolders will
     * also recursively change.
     *
     * @param id The ID of the data file or folder whose owner will be updated.
     * @param body an object with the body content
     * @throws ChangeDataFileOwnerHttpError
     */
    changeDataFileOwner: typeof changeDataFileOwner;
    /**
     * This is to allow for a separate admin type of operation that is more global in terms of access in cases
     * where admin users may not explicitly have been granted full access to a given space within the declared
     * space-level permissions.  If the space ID is set to null, then the datafile or folder will end up residing
     * in the personal space of the user who is the owner of the item.  Note that, if a given file or folder is not
     * in the root of a given space, this operation will not succeed, since the parent folder does not reside in
     * the target space.  If the space of a folder in the root of the source space is changed, all subfolders and
     * files within those subfolders will also recursively be moved to the new space.
     *
     * @param id The ID of the data file or folder whose
              space will be updated.
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

export { type BatchChangeSpaceItem, type BatchDeleteAllBySpaceItem, type BatchDeleteItem, type ChangeDataFileOwnerHttpError, type ChangeDataFileOwnerHttpResponse, type ChangeDataFileOwnerRequest, type ChangeDataFileSpaceRequest, type ConnectionsResponse, type DataFileBatchChangeSpaceRequest, type DataFileBatchDeleteRequest, type DataFilePermission, type DataFileUploadResponse, type DataFilesAPI, type DeleteDataFileHttpError, type DeleteDataFileHttpResponse, type DeleteDataFilesHttpError, type DeleteDataFilesHttpResponse, type ErrorCode, type ErrorResponse, type ErrorResponseItem, type FolderStatsResponse, type GetConnectionsResponse, type GetConnectionsSortField, type GetDataFileConnectionHttpError, type GetDataFileConnectionHttpResponse, type GetDataFileHttpError, type GetDataFileHttpResponse, type GetDataFileInfosResponse, type GetDataFileInfosSortField, type GetDataFilesConnectionsHttpError, type GetDataFilesConnectionsHttpResponse, type GetDataFilesHttpError, type GetDataFilesHttpResponse, type GetDataFilesQuotasHttpError, type GetDataFilesQuotasHttpResponse, type LinkResponse, type LinksResponse, type MoveDataFileHttpError, type MoveDataFileHttpResponse, type MoveDataFilesHttpError, type MoveDataFilesHttpResponse, type MultiStatusResponse, type MultiStatusResponseItem, type PutDataFileFolderMergeBehavior, type QuotaResponse, type ReuploadDataFileHttpError, type ReuploadDataFileHttpResponse, type SpaceStatsResponse, type UploadDataFileHttpError, type UploadDataFileHttpResponse, changeDataFileOwner, clearCache, dataFilesExport as default, deleteDataFile, deleteDataFiles, getDataFile, getDataFileConnection, getDataFiles, getDataFilesConnections, getDataFilesQuotas, moveDataFile, moveDataFiles, reuploadDataFile, uploadDataFile };
