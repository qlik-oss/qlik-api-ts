import { x as ApiCallOptions } from "../chunks/auth-types-DjJJgiRF.js";
declare namespace data_files_d_exports {
  export { BatchChangeSpaceItem, BatchPostItem, ChangeDataFileOwnerRequest, ChangeDataFileSpaceRequest, ChangeOwnerDataFileHttpError, ChangeOwnerDataFileHttpResponse, ChangeSpaceDataFileHttpError, ChangeSpaceDataFileHttpResponse, ChangeSpaceDataFilesHttpError, ChangeSpaceDataFilesHttpResponse, ConnectionsResponse, DataFileBatchChangeSpaceRequestV2, DataFileBatchPostRequest, DataFileDeleteRecordResponseV2, DataFilePermission, DataFileUploadResponseV2, DataFilesAPI, DeleteDataFileHttpError, DeleteDataFileHttpResponse, ErrorCode, ErrorResponse, ErrorResponseItem, FilterConnectionsRequest, FilterDataFilesConnectionsHttpError, FilterDataFilesConnectionsHttpResponse, FolderStatsResponse, GetConnectionsResponse, GetConnectionsSortField, GetDataFileDeleteRecordsResponseV2, GetDataFileDeleteRecordsSortField, GetDataFileFolderStatsHttpError, GetDataFileFolderStatsHttpResponse, GetDataFileHttpError, GetDataFileHttpResponse, GetDataFilesConnectionsHttpError, GetDataFilesConnectionsHttpResponse, GetDataFilesDeletesHttpError, GetDataFilesDeletesHttpResponse, LinkResponse, LinksResponse, MultiStatusResponse, MultiStatusResponseItem, PostDataFileRequest, PostDataFilesHttpError, PostDataFilesHttpResponse, SpaceStatsResponse, changeOwnerDataFile, changeSpaceDataFile, changeSpaceDataFiles, clearCache, dataFilesExport as default, deleteDataFile, filterDataFilesConnections, getDataFile, getDataFileFolderStats, getDataFilesConnections, getDataFilesDeletes, postDataFiles };
}
type BatchChangeSpaceItem = {
  /** The ID of the data file whose space will be changed. */id: string;
  /** The ID of the new space.  Passing in a null will result in the data file being moved to the user's
   * personal space. */
  spaceId?: string;
};
type BatchPostItem = {
  /** See PostDataFileRequest schema which defines request structure.
   *  See  model. */
  request: PostDataFileRequest;
};
type ChangeDataFileOwnerRequest = {
  /** The ID of the new owner. */ownerId: string;
};
type ChangeDataFileSpaceRequest = {
  /** The ID of the space.  If null, this data file will be moved to the user's personal space. */spaceId?: string;
};
type ConnectionsResponse = {
  /** The connect statement that will be passed to the connector when invoked. */connectStatement: string; /** The unique identifier of the connection. */
  id: string; /** The name of the connection. */
  name: string;
  /** The team space that the given connection is associated with.  If null, the connection is not associated
   * with any specific team space. */
  spaceId?: string;
  spaceStats?: SpaceStatsResponse; /** The type of the connection. */
  type: string;
};
/**
 * Specifies the list of data file change space operations in a single batch.
 */
type DataFileBatchChangeSpaceRequestV2 = {
  /** The list of data files to delete. */changeSpace: BatchChangeSpaceItem[];
};
/**
 * Specifies a list of data file/folder POST operations in a single batch.
 */
type DataFileBatchPostRequest = {
  /** The list of POST operations. */post: BatchPostItem[];
};
type DataFileDeleteRecordResponseV2 = {
  /** The name of the file or folder, not including any folder path prefix. */baseName?: string; /** The user that deleted this data file or folder. */
  createdBy: string; /** The date that the file was deleted. */
  deletedDate: string; /** The unique ID of the file or folder that was deleted. */
  fileMetadataId: string; /** True if this is a folder, false if it is a file. */
  folder?: boolean;
  /** If the file or folder reside in a parent folder, this is the parent folder ID.  If the file or folder
   * did not reside in a parent folder, this value is null. */
  folderId?: string;
  /** If the file or folder resided in a parent folder, this is the parent folder path.  If the file or folder
   * did not reside in a parent folder, this value is null. */
  folderPath?: string; /** The full name of the file or folder, including any folder path prefix. */
  name: string;
  /** If not null, the ID of the space that the uploaded file or resideed in.  If null, this implies that the
   * item was stored in the user-private area (DataFiles) */
  spaceId?: string; /** The tenant that this file or folder is scoped to. */
  tenantId: string; /** If the file or folder resided in a user's personal space, the user that this item is scoped to. */
  userId?: string;
};
/**
 * <p>Members:</p><ul></ul>
 */
type DataFilePermission = "read" | "update" | "delete" | "list" | "change_owner" | "change_space";
type DataFileUploadResponseV2 = {
  /** The CRUD actions that are allowed on the given data file. */actions: DataFilePermission[]; /** If this file or folder is bound to the lifecycle of a specific app, this is the ID of this app. */
  appId?: string; /** The name of the file or folder, not including any folder path prefix. */
  baseName?: string; /** If the data file's content was updated, this is the DateTime of the last content update. */
  contentUpdatedDate?: string; /** The date that the file or folder was created. */
  createdAt: string; /** Whether or not this given item represents a folder or a file. */
  folder?: boolean;
  /** If the file or folder resides in a parent folder, this is the parent folder ID.  If the file or folder
   * does not reside in a parent folder, this value is null. */
  folderId?: string;
  /** If the file or folder resides in a parent folder, this is the parent folder path.  If the file or folder
   * does not reside in a parent folder, this value is null. */
  folderPath?: string;
  folderStats: FolderStatsResponse; /** The ID for the file or folder. */
  id: string; /** The full name of the file or folder, including any folder path prefix. */
  name: string; /** The 'owner' of a file or folder is the user who last uploaded the item's content. */
  ownerId: string; /** The QRI generated from the datafile or folder's metadata. */
  qri?: string; /** The size of the uploaded file, in bytes.  0 if this item represents a folder */
  size: number; /** If the file or folder was created in a team space, this is the ID of that space. */
  spaceId?: string; /** The date that the updated file or folder was last modified. */
  updatedAt?: string;
};
/**
 * Fine-grained error codes for data-files REST operations.  For operations which do not have a more fine-grained
 * error code, the error code is set to the HTTP status code.<p>Members:</p><ul><li><i>DF-001</i> - The page cursor passed as a parameter to the GET operation is invalid.</li><li><i>DF-002</i> - The sort specification passed as a parameter to the GET operation is invalid.</li><li><i>DF-003</i> - FolderPath and FolderId are mutually exclusive, they cannot both be passed as parameters.</li><li><i>DF-004</i> - The provided FolderPath must be in canonical form.</li><li><i>DF-005</i> - The specified parent folder cannot be found.</li><li><i>DF-006</i> - The specified owner cannot be found.</li><li><i>DF-007</i> - A connection corresponding to the specified space cannot be found.</li><li><i>DF-008</i> - THe specified ID must correspond to a folder, not a file.</li><li><i>DF-009</i> - The specified space cannot be found.</li><li><i>DF-010</i> - The specified file name contains an invalid file extension.</li><li><i>DF-011</i> - The specified file name is missing a file extension.</li><li><i>DF-012</i> - The specified temporary content file could not be found.</li><li><i>DF-013</i> - Access to the specified space is forbidden.</li><li><i>DF-014</i> - The specified connection cannot be found.</li><li><i>DF-015</i> - The provided filename must be in canonical form.</li><li><i>DF-016</i> - The datafile size quota for the given personal space has been exceeded.</li><li><i>DF-017</i> - The specified source file or folder could not be found.</li><li><i>DF-018</i> - The source and target of a datafile operation must either both be folders or both be files, but they are
 *             not.</li><li><i>DF-019</i> - The specified target folder is a child of the specified source folder, which is not allowed.</li><li><i>DF-020</i> - The specified folder does not exist in the specified space.</li><li><i>DF-021</i> - The specified source file or folder is already locked.</li><li><i>DF-022</i> - The automatic creation of a missing parent folder failed.</li><li><i>DF-023</i> - An attempt to lock a parent folder of a given data file item failed.</li><li><i>DF-024</i> - The attempt to copy a source file or folder to a target failed.</li><li><i>DF-025</i> - The specified target file or folder is already locked.</li><li><i>DF-026</i> - The request results in the creation of a folder hierarchy which is beyond the max allowed folder
 *             hierarchy depth.</li></ul>
 * @example
 * "HTTP-200"
 */
type ErrorCode = "HTTP-200" | "HTTP-201" | "HTTP-204" | "HTTP-400" | "HTTP-403" | "HTTP-404" | "HTTP-409" | "HTTP-413" | "HTTP-423" | "HTTP-500" | "HTTP-501" | "HTTP-503" | "DF-001" | "DF-002" | "DF-003" | "DF-004" | "DF-005" | "DF-006" | "DF-007" | "DF-008" | "DF-009" | "DF-010" | "DF-011" | "DF-012" | "DF-013" | "DF-014" | "DF-015" | "DF-016" | "DF-017" | "DF-018" | "DF-019" | "DF-020" | "DF-021" | "DF-022" | "DF-023" | "DF-024" | "DF-025" | "DF-026";
type ErrorResponse = {
  /** List of errors and their properties. */errors: ErrorResponseItem[];
};
type ErrorResponseItem = {
  /** Fine-grained error codes for data-files REST operations.  For operations which do not have a more fine-grained
   * error code, the error code is set to the HTTP status code.<p>Members:</p><ul><li><i>DF-001</i> - The page cursor passed as a parameter to the GET operation is invalid.</li><li><i>DF-002</i> - The sort specification passed as a parameter to the GET operation is invalid.</li><li><i>DF-003</i> - FolderPath and FolderId are mutually exclusive, they cannot both be passed as parameters.</li><li><i>DF-004</i> - The provided FolderPath must be in canonical form.</li><li><i>DF-005</i> - The specified parent folder cannot be found.</li><li><i>DF-006</i> - The specified owner cannot be found.</li><li><i>DF-007</i> - A connection corresponding to the specified space cannot be found.</li><li><i>DF-008</i> - THe specified ID must correspond to a folder, not a file.</li><li><i>DF-009</i> - The specified space cannot be found.</li><li><i>DF-010</i> - The specified file name contains an invalid file extension.</li><li><i>DF-011</i> - The specified file name is missing a file extension.</li><li><i>DF-012</i> - The specified temporary content file could not be found.</li><li><i>DF-013</i> - Access to the specified space is forbidden.</li><li><i>DF-014</i> - The specified connection cannot be found.</li><li><i>DF-015</i> - The provided filename must be in canonical form.</li><li><i>DF-016</i> - The datafile size quota for the given personal space has been exceeded.</li><li><i>DF-017</i> - The specified source file or folder could not be found.</li><li><i>DF-018</i> - The source and target of a datafile operation must either both be folders or both be files, but they are
   *             not.</li><li><i>DF-019</i> - The specified target folder is a child of the specified source folder, which is not allowed.</li><li><i>DF-020</i> - The specified folder does not exist in the specified space.</li><li><i>DF-021</i> - The specified source file or folder is already locked.</li><li><i>DF-022</i> - The automatic creation of a missing parent folder failed.</li><li><i>DF-023</i> - An attempt to lock a parent folder of a given data file item failed.</li><li><i>DF-024</i> - The attempt to copy a source file or folder to a target failed.</li><li><i>DF-025</i> - The specified target file or folder is already locked.</li><li><i>DF-026</i> - The request results in the creation of a folder hierarchy which is beyond the max allowed folder
   *             hierarchy depth.</li></ul> */
  code: ErrorCode; /** A human-readable explanation specific to this occurrence of the problem. */
  detail?: string; /** Summary of the problem. */
  title?: string;
};
type FilterConnectionsRequest = {
  /** If set to true, include computed space-level statistics for the spaces represented by the connections in the
   * returned list.  If false, this information is not returned. */
  includeSpaceStats?: boolean; /** If present, only return connections with the given name. */
  name?: string; /** The list of space IDs that is used to filter the connection result set. */
  spaceIds: string[];
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
  aggregateInternalFileSize: number; /** The number of app-scoped data files that reside as direct children of the given folder. */
  directAppScopedFileCount: number; /** The number of data files that reside as direct children of the given folder. */
  directFileCount: number; /** The number of sub-folders that reside as direct children of the given folder. */
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
  /** Properties of the connections to the tenant spaces. */data: ConnectionsResponse[];
  links: LinksResponse;
};
/**
 * <p>Members:</p><ul></ul>
 * @example
 * "spaceId"
 */
type GetConnectionsSortField = "spaceId" | "+spaceId" | "-spaceId";
type GetDataFileDeleteRecordsResponseV2 = {
  data: DataFileDeleteRecordResponseV2[];
  links: LinksResponse;
};
/**
 * <p>Members:</p><ul></ul>
 * @example
 * "deletedDate"
 */
type GetDataFileDeleteRecordsSortField = "deletedDate" | "+deletedDate" | "-deletedDate";
type LinkResponse = {
  /** The URL for the link. */href?: string;
};
type LinksResponse = {
  next: LinkResponse;
  prev: LinkResponse;
  self: LinkResponse;
};
type MultiStatusResponse = {
  /** List of individual results for the items in the specified batch. */data: MultiStatusResponseItem[];
};
type MultiStatusResponseItem = {
  /** Fine-grained error codes for data-files REST operations.  For operations which do not have a more fine-grained
   * error code, the error code is set to the HTTP status code.<p>Members:</p><ul><li><i>DF-001</i> - The page cursor passed as a parameter to the GET operation is invalid.</li><li><i>DF-002</i> - The sort specification passed as a parameter to the GET operation is invalid.</li><li><i>DF-003</i> - FolderPath and FolderId are mutually exclusive, they cannot both be passed as parameters.</li><li><i>DF-004</i> - The provided FolderPath must be in canonical form.</li><li><i>DF-005</i> - The specified parent folder cannot be found.</li><li><i>DF-006</i> - The specified owner cannot be found.</li><li><i>DF-007</i> - A connection corresponding to the specified space cannot be found.</li><li><i>DF-008</i> - THe specified ID must correspond to a folder, not a file.</li><li><i>DF-009</i> - The specified space cannot be found.</li><li><i>DF-010</i> - The specified file name contains an invalid file extension.</li><li><i>DF-011</i> - The specified file name is missing a file extension.</li><li><i>DF-012</i> - The specified temporary content file could not be found.</li><li><i>DF-013</i> - Access to the specified space is forbidden.</li><li><i>DF-014</i> - The specified connection cannot be found.</li><li><i>DF-015</i> - The provided filename must be in canonical form.</li><li><i>DF-016</i> - The datafile size quota for the given personal space has been exceeded.</li><li><i>DF-017</i> - The specified source file or folder could not be found.</li><li><i>DF-018</i> - The source and target of a datafile operation must either both be folders or both be files, but they are
   *             not.</li><li><i>DF-019</i> - The specified target folder is a child of the specified source folder, which is not allowed.</li><li><i>DF-020</i> - The specified folder does not exist in the specified space.</li><li><i>DF-021</i> - The specified source file or folder is already locked.</li><li><i>DF-022</i> - The automatic creation of a missing parent folder failed.</li><li><i>DF-023</i> - An attempt to lock a parent folder of a given data file item failed.</li><li><i>DF-024</i> - The attempt to copy a source file or folder to a target failed.</li><li><i>DF-025</i> - The specified target file or folder is already locked.</li><li><i>DF-026</i> - The request results in the creation of a folder hierarchy which is beyond the max allowed folder
   *             hierarchy depth.</li></ul> */
  code: ErrorCode; /** A human-readable explanation specific to this occurrence of the problem. */
  detail?: string; /** The unique identifier of the file. */
  id: string; /** The HTTP status code. */
  status: number; /** Summary of the problem. */
  title?: string;
};
/**
 * See PostDataFileRequest schema which defines request structure.
 *  See  model.
 */
type PostDataFileRequest = {
  /** If this file should be bound to the lifecycle of a specific app, this is the ID of this app.  If this
   * request is creating a folder, the specification of an app ID is not allowed. */
  appId?: string;
  /** If present, this is the DataFiles connection that the upload should occur in the context of.  If absent,
   * the default is that the upload will occur in the context of the Personal Space DataFiles connection.  If the
   * DataFiles connection is different from the one specified when the file or folder was last POSTed or PUT, this
   * will result in a logical move of this file or folder into the new space. */
  connectionId?: string; /** If true, a folder will be created.  If false, a file is created. */
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
type SpaceStatsResponse = {
  /** The sum of the file sizes, in bytes, of all app-scoped data files that reside as direct and indirect children of
   * the given folder and it's sub-folder hierarchy. */
  aggregateAppScopedFileSize: number;
  /** The sum of the file sizes, in bytes, of all data files that reside as direct and indirect children of the given
   * folder and it's sub-folder hierarchy. */
  aggregateFileSize: number;
  /** The sum of the file sizes, in bytes, of all internal data files that reside as direct and indirect children of
   * the given folder and it's sub-folder hierarchy. */
  aggregateInternalFileSize: number; /** The number of app-scoped data files that reside as direct children of the given folder. */
  directAppScopedFileCount: number; /** The number of data files that reside as direct children of the given folder. */
  directFileCount: number; /** The number of sub-folders that reside as direct children of the given folder. */
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
 * Use this operation to move multiple data files and folders to new spaces in a single
 * request. Set `spaceId` to `null` for any item to move it to the personal space of its
 * owner. The response includes the individual result status for each specified item.
 * This is an administrative operation that bypasses explicit space-level permission requirements.
 *
 * @param body an object with the body content
 * @throws ChangeSpaceDataFilesHttpError
 */
declare function changeSpaceDataFiles(body: DataFileBatchChangeSpaceRequestV2, options?: ApiCallOptions): Promise<ChangeSpaceDataFilesHttpResponse>;
type ChangeSpaceDataFilesHttpResponse = {
  data: MultiStatusResponse;
  headers: Headers;
  status: 207;
};
type ChangeSpaceDataFilesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400;
};
/**
 * Use this operation to perform multiple upload (`POST`) operations on data files and folders
 * in a single request. The response includes the individual result status for each
 * specified item.
 *
 * @param body an object with the body content
 * @throws PostDataFilesHttpError
 */
declare function postDataFiles(body: DataFileBatchPostRequest, options?: ApiCallOptions): Promise<PostDataFilesHttpResponse>;
type PostDataFilesHttpResponse = {
  data: MultiStatusResponse;
  headers: Headers;
  status: 207;
};
type PostDataFilesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400;
};
/**
 * Use this operation to retrieve the list of built-in data file connections available to the calling user.
 * Use the `spaceId`, `appId`, or `name` parameters to filter results to a specific space or app scope.
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
  /** If present, get connections with connection strings that are scoped to the given app ID. */appId?: string;
  /** If set to true, include computed space-level statistics for the spaces represented by the connections in the
   * returned list.  If false, this information is not returned. */
  includeSpaceStats?: boolean; /** If present, the maximum number of data file connection records to return. */
  limit?: number; /** If present, only return connections with the given name. */
  name?: string; /** If present, the cursor that starts the page of data that is returned. */
  page?: string; /** If true, only return the connections that access data in a personal space.  Default is false. */
  personal?: boolean;
  /** The name of the field used to sort the result.  By default, the sort is ascending.  Putting a '+' prefix on
   * the sort field name explicitly indicates ascending sort order.  A '-' prefix indicates a descending sort order. */
  sort?: GetConnectionsSortField; /** If present, only return the connection that accesses data files in the specified space. */
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
 * Use this operation to retrieve data file connections for a specified set of space IDs.
 * This is useful when the list of space IDs is too large to pass as query parameters.
 *
 * @param body an object with the body content
 * @throws FilterDataFilesConnectionsHttpError
 */
declare function filterDataFilesConnections(body: FilterConnectionsRequest, options?: ApiCallOptions): Promise<FilterDataFilesConnectionsHttpResponse>;
type FilterDataFilesConnectionsHttpResponse = {
  data: GetConnectionsResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<FilterDataFilesConnectionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<FilterDataFilesConnectionsHttpResponse>;
};
type FilterDataFilesConnectionsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Use this operation to retrieve records of data files and folders deleted within a given
 * time range, across all spaces in the tenant. Use `deleteStartDate` and `deleteEndDate`
 * to constrain the results to a specific window. This operation requires elevated
 * service-to-service privileges.
 * @example
 * getDataFilesDeletes(
 *   {
 *     allowInternalFiles: false,
 *     deleteEndDate: "2020-07-07T20:52:40.8534780Z",
 *     deleteStartDate: "2020-07-07T20:52:40.8534780Z",
 *     includeFolders: false,
 *     limit: 5,
 *     page: "NzlmNzI5NWMtZGJlZC00Y2Y4LThkNDAtMzQ5ZDU3YzNjMzQ1"
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetDataFilesDeletesHttpError
 */
declare function getDataFilesDeletes(query: {
  /** If set to false, do not return data files with internal extensions else return all the data files. */allowInternalFiles?: boolean;
  /** If specified, the returned list will only include data files and folders that have been deleted prior to the
   * specified date (inclusive). */
  deleteEndDate?: string;
  /** If specified, the returned list will only include data files and folders that have been deleted since the
   * specified date (inclusive). */
  deleteStartDate?: string; /** If set to true, include deleted folders in the result.  If false, only return data files. */
  includeFolders?: boolean; /** If present, the maximum number of records of deleted data files and folders to return. */
  limit?: number; /** If present, the cursor that starts the page of data that is returned. */
  page?: string;
  /** The name of the field used to sort the result.  By default, the sort order is ascending.  Putting a '+' prefix on
   * the sort field name explicitly indicates ascending sort order.  A '-' prefix indicates a descending sort order. */
  sort?: GetDataFileDeleteRecordsSortField;
}, options?: ApiCallOptions): Promise<GetDataFilesDeletesHttpResponse>;
type GetDataFilesDeletesHttpResponse = {
  data: GetDataFileDeleteRecordsResponseV2;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataFilesDeletesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataFilesDeletesHttpResponse>;
};
type GetDataFilesDeletesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Use this operation to permanently delete a data file or folder.
 * Deleting a folder also recursively deletes all files and subfolders it contains.
 * @example
 * deleteDataFile(
 *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
 * )
 *
 * @param id The unique identifier of the data file or folder to delete.
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
 * Use this operation to retrieve details for a specific data file or folder.
 * The response includes the file name, size, creation date, owner, space, and permitted
 * actions.
 * @example
 * getDataFile(
 *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
 * )
 *
 * @param id The unique identifier of the data file or folder to retrieve.
 * @throws GetDataFileHttpError
 */
declare function getDataFile(id: string, options?: ApiCallOptions): Promise<GetDataFileHttpResponse>;
type GetDataFileHttpResponse = {
  data: DataFileUploadResponseV2;
  headers: Headers;
  status: 200;
};
type GetDataFileHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Use this operation to transfer ownership of a data file or folder to a different user.
 * When the item is in a personal space, changing the owner moves it to the new owner's
 * personal space. The item must be in the root of its current space for this operation to
 * succeed. Items nested inside subfolders cannot be moved this way. Changing the owner
 * of a root-level folder also recursively updates the owner for all files and subfolders
 * within it.
 *
 * @param id The unique identifier of the data file or folder whose owner will be updated.
 * @param body an object with the body content
 * @throws ChangeOwnerDataFileHttpError
 */
declare function changeOwnerDataFile(id: string, body: ChangeDataFileOwnerRequest, options?: ApiCallOptions): Promise<ChangeOwnerDataFileHttpResponse>;
type ChangeOwnerDataFileHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type ChangeOwnerDataFileHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 423;
};
/**
 * Use this operation to move a data file or folder to a different space. Set `spaceId` to
 * `null` to move the item to the personal space of its owner. The item must be in the root
 * of its current space for this operation to succeed. Moving a root-level folder also
 * recursively moves all files and subfolders within it to the new space. This is an
 * administrative operation that bypasses explicit space-level permission requirements.
 *
 * @param id The unique identifier of the data file or folder whose space will be updated.
 * @param body an object with the body content
 * @throws ChangeSpaceDataFileHttpError
 */
declare function changeSpaceDataFile(id: string, body: ChangeDataFileSpaceRequest, options?: ApiCallOptions): Promise<ChangeSpaceDataFileHttpResponse>;
type ChangeSpaceDataFileHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type ChangeSpaceDataFileHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 423;
};
/**
 * Use this operation to retrieve aggregate statistics for a specific folder.
 * The response includes file and subfolder counts, as well as the total size of all files
 * within the folder hierarchy.
 * @example
 * getDataFileFolderStats(
 *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
 * )
 *
 * @param id The unique identifier of the folder.
 * @throws GetDataFileFolderStatsHttpError
 */
declare function getDataFileFolderStats(id: string, options?: ApiCallOptions): Promise<GetDataFileFolderStatsHttpResponse>;
type GetDataFileFolderStatsHttpResponse = {
  data: FolderStatsResponse;
  headers: Headers;
  status: 200;
};
type GetDataFileFolderStatsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Clears the cache for core/data-files api requests.
 */
declare function clearCache(): void;
type DataFilesAPI = {
  /**
   * Use this operation to move multiple data files and folders to new spaces in a single
   * request. Set `spaceId` to `null` for any item to move it to the personal space of its
   * owner. The response includes the individual result status for each specified item.
   * This is an administrative operation that bypasses explicit space-level permission requirements.
   *
   * @param body an object with the body content
   * @throws ChangeSpaceDataFilesHttpError
   */
  changeSpaceDataFiles: typeof changeSpaceDataFiles;
  /**
   * Use this operation to perform multiple upload (`POST`) operations on data files and folders
   * in a single request. The response includes the individual result status for each
   * specified item.
   *
   * @param body an object with the body content
   * @throws PostDataFilesHttpError
   */
  postDataFiles: typeof postDataFiles;
  /**
   * Use this operation to retrieve the list of built-in data file connections available to the calling user.
   * Use the `spaceId`, `appId`, or `name` parameters to filter results to a specific space or app scope.
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
   * Use this operation to retrieve data file connections for a specified set of space IDs.
   * This is useful when the list of space IDs is too large to pass as query parameters.
   *
   * @param body an object with the body content
   * @throws FilterDataFilesConnectionsHttpError
   */
  filterDataFilesConnections: typeof filterDataFilesConnections;
  /**
   * Use this operation to retrieve records of data files and folders deleted within a given
   * time range, across all spaces in the tenant. Use `deleteStartDate` and `deleteEndDate`
   * to constrain the results to a specific window. This operation requires elevated
   * service-to-service privileges.
   * @example
   * getDataFilesDeletes(
   *   {
   *     allowInternalFiles: false,
   *     deleteEndDate: "2020-07-07T20:52:40.8534780Z",
   *     deleteStartDate: "2020-07-07T20:52:40.8534780Z",
   *     includeFolders: false,
   *     limit: 5,
   *     page: "NzlmNzI5NWMtZGJlZC00Y2Y4LThkNDAtMzQ5ZDU3YzNjMzQ1"
   *   }
   * )
   *
   * @param query an object with query parameters
   * @throws GetDataFilesDeletesHttpError
   */
  getDataFilesDeletes: typeof getDataFilesDeletes;
  /**
   * Use this operation to permanently delete a data file or folder.
   * Deleting a folder also recursively deletes all files and subfolders it contains.
   * @example
   * deleteDataFile(
   *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
   * )
   *
   * @param id The unique identifier of the data file or folder to delete.
   * @throws DeleteDataFileHttpError
   */
  deleteDataFile: typeof deleteDataFile;
  /**
   * Use this operation to retrieve details for a specific data file or folder.
   * The response includes the file name, size, creation date, owner, space, and permitted
   * actions.
   * @example
   * getDataFile(
   *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
   * )
   *
   * @param id The unique identifier of the data file or folder to retrieve.
   * @throws GetDataFileHttpError
   */
  getDataFile: typeof getDataFile;
  /**
   * Use this operation to transfer ownership of a data file or folder to a different user.
   * When the item is in a personal space, changing the owner moves it to the new owner's
   * personal space. The item must be in the root of its current space for this operation to
   * succeed. Items nested inside subfolders cannot be moved this way. Changing the owner
   * of a root-level folder also recursively updates the owner for all files and subfolders
   * within it.
   *
   * @param id The unique identifier of the data file or folder whose owner will be updated.
   * @param body an object with the body content
   * @throws ChangeOwnerDataFileHttpError
   */
  changeOwnerDataFile: typeof changeOwnerDataFile;
  /**
   * Use this operation to move a data file or folder to a different space. Set `spaceId` to
   * `null` to move the item to the personal space of its owner. The item must be in the root
   * of its current space for this operation to succeed. Moving a root-level folder also
   * recursively moves all files and subfolders within it to the new space. This is an
   * administrative operation that bypasses explicit space-level permission requirements.
   *
   * @param id The unique identifier of the data file or folder whose space will be updated.
   * @param body an object with the body content
   * @throws ChangeSpaceDataFileHttpError
   */
  changeSpaceDataFile: typeof changeSpaceDataFile;
  /**
   * Use this operation to retrieve aggregate statistics for a specific folder.
   * The response includes file and subfolder counts, as well as the total size of all files
   * within the folder hierarchy.
   * @example
   * getDataFileFolderStats(
   *   "ee6a390c-5d33-11e8-9c2d-fa7ae01bbebc"
   * )
   *
   * @param id The unique identifier of the folder.
   * @throws GetDataFileFolderStatsHttpError
   */
  getDataFileFolderStats: typeof getDataFileFolderStats;
  /**
   * Clears the cache for data-files api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the data-files api
 */
declare const dataFilesExport: DataFilesAPI;
//#endregion
export { BatchChangeSpaceItem, BatchPostItem, ChangeDataFileOwnerRequest, ChangeDataFileSpaceRequest, ChangeOwnerDataFileHttpError, ChangeOwnerDataFileHttpResponse, ChangeSpaceDataFileHttpError, ChangeSpaceDataFileHttpResponse, ChangeSpaceDataFilesHttpError, ChangeSpaceDataFilesHttpResponse, ConnectionsResponse, DataFileBatchChangeSpaceRequestV2, DataFileBatchPostRequest, DataFileDeleteRecordResponseV2, DataFilePermission, DataFileUploadResponseV2, DataFilesAPI, DeleteDataFileHttpError, DeleteDataFileHttpResponse, ErrorCode, ErrorResponse, ErrorResponseItem, FilterConnectionsRequest, FilterDataFilesConnectionsHttpError, FilterDataFilesConnectionsHttpResponse, FolderStatsResponse, GetConnectionsResponse, GetConnectionsSortField, GetDataFileDeleteRecordsResponseV2, GetDataFileDeleteRecordsSortField, GetDataFileFolderStatsHttpError, GetDataFileFolderStatsHttpResponse, GetDataFileHttpError, GetDataFileHttpResponse, GetDataFilesConnectionsHttpError, GetDataFilesConnectionsHttpResponse, GetDataFilesDeletesHttpError, GetDataFilesDeletesHttpResponse, LinkResponse, LinksResponse, MultiStatusResponse, MultiStatusResponseItem, PostDataFileRequest, PostDataFilesHttpError, PostDataFilesHttpResponse, SpaceStatsResponse, changeOwnerDataFile, changeSpaceDataFile, changeSpaceDataFiles, clearCache, dataFilesExport as default, deleteDataFile, filterDataFilesConnections, getDataFile, getDataFileFolderStats, getDataFilesConnections, getDataFilesDeletes, postDataFiles, data_files_d_exports as t };