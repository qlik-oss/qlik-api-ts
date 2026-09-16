import { x as ApiCallOptions } from "./chunks/auth-types-yKuw6LLB.js";
import "./chunks/invoke-fetch-DdmiOIkr.js";
//#region src/public/rest/knowledgebases.d.ts
/**
 * A JSON Patch document as defined in http://tools.ietf.org/html/rfc6902.
 */
export type JSONPatch = {
  /** The operation to be performed. */
  op: "REPLACE";
  /** A JSON Pointer. */
  path: string;
  /** The value to be used for this operation. */
  value: string | number | boolean;
};
/**
 * An array of JSON Patch documents
 * @example
 * [
 *   {
 *     path: "/name",
 *     value: "new name"
 *   },
 *   {
 *     path: "/description",
 *     value: "new description"
 *   }
 * ]
 */
export type JSONPatchArray = JSONPatch[];
export type Chunk = {
  /** Metadata about the chunk */
  chunkMeta: KbChunkMeta;
  /** search method for the chunk, e.g. `semantic search`, `keyword search` or `semantic and keyword search` */
  searchSource?: string;
  /** Similarity score from embedding match */
  semanticScore?: number;
  /** Text content of the chunk */
  text: string;
  /** Score from keyword search */
  tfidfScore?: number;
};
export type Chunking = {
  /** Allows to keep or remove separators used */
  keepSeparator: boolean;
  /** Chunk overlap, should be less than size */
  overlap: number;
  /** List of separators to chunk by */
  separators: string[];
  /** Size of chunks */
  size: number;
  /** Chunking strategy */
  type: string;
};
export type ContentSummary = {
  effectivePages: number;
  fileCount: number;
  fileSize: number;
  textSize: number;
};
/**
 * Specification on where to fetch the files for. This is required when the type == 'file'. Only one of path and files can be set. Path takes precedence if both are provided.
 */
export type CreateDataSource = {
  /** Specification on where to fetch the files for. This is required when the type == 'file'. Only one of path and files can be set. Path takes precedence if both are provided. */
  fileConfig?: DataSourceFileConfig;
  /** Name of the datasource */
  name: string;
  type: "file" | "web" | "database";
};
export type CreateKnowledgeBase = {
  /** User opt in to advanced parsing and chunking pipeline. Default is false, which will run legacy parsing and chunking. */
  advancedIndexing?: boolean;
  /** Description of the knowledgebase */
  description?: string;
  /** Name of the knowledgebase */
  name: string;
  /** Number of selected errors to store in the case of any failed datasources. Optional value with a default of 10. */
  selectedErrorsCount?: number;
  /** Unique identifier of the space to contain the knowledgebase */
  spaceId: string;
  /** List of tags for knowledgebase */
  tags?: string[];
};
/**
 * Specification on where to fetch the files for. This is required when the type == 'file'. Only one of path and files can be set. Path takes precedence if both are provided.
 */
export type DataSource = {
  chunking?: Chunking;
  contentSummary: ContentSummary;
  /** Specification on where to fetch the files for. This is required when the type == 'file'. Only one of path and files can be set. Path takes precedence if both are provided. */
  fileConfig?: DataSourceFileConfig;
  /** Unique identifier of the datasource */
  id: string;
  /** Name of the datasource */
  name?: string;
  /** The number of times that a datasource was referenced as a source in an answer */
  sourceCount?: number;
  /** The unique identifier of the space containing the datasource */
  spaceId?: string;
  syncInfo?: DataSourceSyncStatus;
  type: "file" | "web" | "database";
};
/**
 * Include or exclude pattern
 */
export type DataSourceCrawlPattern = {
  /** Regex patterna to filter links on */
  pattern: string;
  /** include or exclude */
  type: "include" | "exclude";
};
/**
 * Specification on where to fetch the files for. This is required when the type == 'file'. Only one of path and files can be set. Path takes precedence if both are provided.
 */
export type DataSourceFileConfig = {
  /** connection id to be used to retrieve the raw data */
  connectionId: string;
  /** Pattern matching links to crawl */
  crawlPatterns?: DataSourceCrawlPattern[];
  files?: string[];
  /** Root folder for traversing. */
  folder?: string;
  /** Scope for the file crawler. */
  scope?: DataSourceFileCrawlScope;
  /** userId of the owner of the datasource fileConfig */
  userId: string;
};
/**
 * Scope for the file crawler.
 */
export type DataSourceFileCrawlScope = {
  /** The number of levels of sub folders that should be considered */
  depth: number;
  /** list of file extensions to be considered */
  extensions?: string[];
  /** Maximum number of files per folder that should be considered */
  maxFilesPerFolder?: number;
  /** Total number of files that should be considered */
  maxFilesTotal?: number;
  /** Optional parameter. Max size of downloaded files in bytes */
  maxSize?: number;
  /** only files modified after this time should be indexed. If set older files will be removed from index. */
  modifiedAfter?: string;
};
/**
 * Response when a datasource sync is started, contains the sync Id
 */
export type DataSourceSync = {
  /** Unique identifier of the sync */
  id: string;
};
export type DataSourceSyncStatus = {
  /** Datetime when the sync task was completed */
  readonly completedAt: string;
  /** sync Id */
  lastSyncId?: string;
  /** Datetime when the sync task was started */
  readonly startedAt: string;
  /** Sync status */
  readonly status: "neverIndexed" | "progress" | "completed" | "completedWithError" | "toAdd" | "toDelete";
};
/**
 * Summary of documents processed
 */
export type DocStats = {
  readonly added: number;
  readonly deleted: number;
  readonly deltaBytes: number;
  readonly deltaEffectivePages: number;
  readonly deltaTextSize: number;
  readonly errors: number;
  readonly largestFileSize: number;
  readonly totalBytesProcessed: number;
  readonly updated: number;
};
export type DownloadFile = {
  /** file path to the file to downlaod. */
  path: string;
};
/**
 * Download information for the file.
 */
export type DownloadFileResponse = {
  /** Size of downloaded file. */
  fileSize: number;
  /** Date for last time the file was modified. */
  lastUpdatedAt: string;
  /** The mimetype of the file. */
  mimeType: string;
  /** The requested file name. */
  name: string;
  /** Space id the file belongs in. */
  spaceId: string;
  /** URL to download the file. */
  url: string;
};
export type Duration = {
  readonly chunk: number;
  readonly download: number;
  readonly embed: number;
  readonly parse: number;
  readonly store: number;
};
export type ErrorResponse = {
  errors?: ErrorResponseCode[];
  traceId?: string;
};
export type ErrorResponseCode = {
  /** Custom error codes
   * * AE-1 - Internal processing error
   * * AE-2 - Incorrect request
   * * AE-3 - Authentication issue
   * * AE-4 - Prompt is rejected
   * * AE-5 - Resource is not found
   * * AE-6 - API usage rate limit is exceeded
   * * AE-7 - Method is not allowed */
  code?: string;
  detail?: string;
  title?: string;
};
export type ErrorResponseCodeCopy = {
  code?: string;
  detail?: string;
  title?: string;
};
export type ErrorResponseCopy = {
  errors?: ErrorResponseCodeCopy[];
  traceId?: string;
};
/**
 * Stable, machine-readable error category for an indexing failure, shared across services (worker, indexer, assistants) and the UI so failures can be mapped to friendly messages without brittle string matching.
 * @example
 * "parse_failed"
 */
export type IndexingErrorCode = "unknown" | "file_size_exceeded" | "download_failed" | "parse_failed" | "parse_timeout" | "chunk_failed" | "chunk_timeout" | "guardrail_blocked" | "unsupported_file" | "index_verification_failed" | "file_not_found" | "document_has_macros" | "scan_failed" | "pages_limit_exceeded" | "pages_enforcement_failed" | "governance_budget_exceeded";
/**
 * Metadata about the chunk
 */
export type KbChunkMeta = {
  /** chunkId */
  chunkId: string;
  /** datasourceId of chunk */
  datasourceId: string;
  /** documentId of chunk */
  documentId: string;
  /** knowledgeBaseId of chunk */
  knowledgeBaseId: string;
  /** source of chunk */
  source: string;
};
export type KnowledgeBase = KnowledgeBaseLight & {
  datasources?: DataSource[];
};
export type KnowledgeBaseLight = {
  /** User opt in to advanced parsing and chunking pipeline. Default is false, which will run legacy parsing and chunking. */
  advancedIndexing?: boolean;
  contentSummary: ContentSummary;
  /** Datetime when the knowledgebase was created */
  readonly createdAt: string;
  /** Unique identifier of the user who created the knowledgebase */
  readonly createdBy: string;
  /** Description of the knowledgebase */
  description: string;
  /** Unique identifier of the knowledgebase */
  id: string;
  /** Datetime when the knowledgebase was last indexed */
  readonly lastIndexedAt?: string;
  /** Name of the knowledgebase */
  name: string;
  /** The unique identifier of the knowledgebase owner */
  ownerId: string;
  /** Number of selected errors to store in the case of any failed datasources. */
  selectedErrorsCount?: number;
  /** The unique identifier of the space containing the knowledgebase */
  spaceId: string;
  /** List of tags associated with the knowledgebase. */
  tags: string[];
  /** Unique identifier of the tenant */
  tenantId?: string;
  /** Datetime when the knowledgebase was updated */
  readonly updatedAt: string;
  /** The unique identifier of the user who last updated the knowledgebase */
  readonly updatedBy: string;
};
export type KnowledgeBasesResult = {
  data: KnowledgeBaseLight[];
  links?: PageLinks;
};
export type PageLink = {
  href?: string;
};
export type PageLinks = {
  next?: PageLink;
  prev?: PageLink;
  self?: PageLink;
};
export type ResultMeta = {
  countTotal?: number;
};
export type Schedule = {
  calendars?: ScheduleCalendar[];
  intervals?: ScheduleInterval[];
};
/**
 * An event specification relative to the calendar, similar to a traditional cron specification.
 */
export type ScheduleCalendar = {
  /** Description of the intention of this schedule */
  comment: string;
  /** DayOfMonth range to match (1-31). Default matches all days */
  dayOfMonth: ScheduleRange[];
  /** DayOfWeek range to match (0-6; 0 is Sunday). Default matches all days of the week */
  dayOfWeek: ScheduleRange[];
  /** Hour range to match (0-23). Default matches 0 */
  hour: ScheduleRange[];
  /** Minute range to match (0-59). Default matches 0 */
  minute: ScheduleRange[];
  /** Month range to match (1-12). Default matches all months */
  month: ScheduleRange[];
  /** Second range to match (0-59). Default matches 0 */
  second: ScheduleRange[];
  /** Year range to match. Default matches all years */
  year: ScheduleRange[];
};
/**
 * For example, an `every` of 1 hour with `offset` of zero would match every hour, on the hour. The same `every` but an `offset` of 19 minutes would match every `xx:19:00`.
 */
export type ScheduleInterval = {
  /** The period to repeat the interval */
  every: string;
  /** A fixed offset added to the intervals period. Optional, defaults to 0 */
  offset?: string;
};
/**
 * ScheduleRange represents a set of integer values, used to match fields of a calendar time in scheduleCalendar. If end < start, then end is interpreted as equal to start
 */
export type ScheduleRange = {
  /** End of the range (inclusive). If end < start, then end is interpreted as equal to start. Optional, defaulted to Start */
  end?: number;
  /** Start of the range (inclusive) */
  start: number;
  /** Step to be take between each value. Optional, defaulted to 1 */
  step?: number;
};
export type ScheduleWithManifest = {
  calendars: ScheduleCalendar[];
  datasourceId?: string;
  intervals?: ScheduleInterval[];
  knowledgebaseId: string;
  ownerId: string;
  spaceId?: string;
  tenantId: string;
};
export type SearchRequest = {
  /** Query text or question to search. */
  prompt: string;
  /** Search mode to use.   Allowed values: `SIMPLE` and `FULL`.   Default: `SIMPLE`. */
  searchMode?: "SIMPLE" | "FULL";
  /** Number of chunks to return in results. */
  topN?: number;
};
export type SearchResponse = {
  /** Retrieved document chunks */
  chunks: Chunk[];
};
/**
 * Aggregated view of all failures of a single category within one sync.
 */
export type SyncErrorSummary = {
  /** Stable, machine-readable error category shared across services and the UI. */
  code: IndexingErrorCode;
  /** Number of files that failed with this error code. */
  count: number;
  /** A representative (sanitized) error message for this category. */
  sample?: string;
  /** Up to selectedErrorsCount example sources that failed with this code. */
  sources?: string[];
};
export type SyncHistory = {
  /** Datetime when the sync task was completed */
  readonly completedAt?: string;
  /** Connection id that the datasource used */
  connectionId: string;
  /** datasource id */
  datasourceId: string;
  /** Summary of documents processed */
  docStats: DocStats;
  /** Aggregated, deduplicated view of failures grouped by error code. Lets the UI surface a smart summary (e.g. "1000 files failed to parse") instead of a flat list of raw error strings. */
  errorSummary?: SyncErrorSummary[];
  /** sync id */
  id: string;
  /** populated with up to the first selectedErrorsCount errors if there were any during sync */
  selectedErrors?: string[];
  /** Datetime when the sync task was started */
  readonly startedAt: string;
  /** Sync status */
  readonly status: "neverIndexed" | "progress" | "completed" | "completedWithError";
  /** Datasource trigger type, was it manually or automatically synced */
  triggerType: string;
};
export type SyncHistoryDetails = {
  /** acion performed */
  readonly action: "add" | "delete" | "update";
  /** chunk size */
  readonly chunkSize?: number;
  /** number of chunks */
  readonly chunks?: number;
  duration?: Duration;
  /** error if one happened during sync */
  error?: string;
  /** Stable, machine-readable error category for the failure, allowing the UI to map it to a friendly message without brittle string matching. Only populated when the file failed to index. */
  errorCode?: IndexingErrorCode;
  /** page count */
  readonly explicitPages: number;
  /** Datetime when the file processing finished */
  readonly fileCompletedAt?: string;
  /** Datetime when the file was last modified */
  readonly fileLastModified?: string;
  /** file size */
  readonly fileSize?: number;
  /** Datetime when the file processing started */
  readonly fileStartedAt?: string;
  /** document Id */
  id: string;
  /** Source of the document */
  readonly source: string;
  /** sync Id */
  syncId: string;
  /** Datetime when the sync task was executed */
  readonly syncedAt: string;
};
export type SyncHistoryResult = {
  data: SyncHistory[];
  links?: PageLinks;
  meta?: ResultMeta;
};
/**
 * Returns a list of all knowledgebases the user has access to.
 *
 * @param query an object with query parameters
 * @throws GetKnowledgebasesHttpError
 */
export declare function getKnowledgebases(query: {
  /** @deprecated
   * Optional parameter to request total count for query */
  countTotal?: boolean;
  /** The number of knowledgebases to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, case insensitive, eg. name. Can be prefixed with - to set descending order, defaults to ascending. */
  sort?: "NAME" | "-NAME" | "DESCRIPTION" | "-DESCRIPTION" | "CREATED" | "-CREATED" | "UPDATED" | "-UPDATED";
}, options?: ApiCallOptions): Promise<GetKnowledgebasesHttpResponse>;
export type GetKnowledgebasesHttpResponse = {
  data: KnowledgeBasesResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetKnowledgebasesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetKnowledgebasesHttpResponse>;
};
export type GetKnowledgebasesHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Creates a new knowledgebase.
 *
 * @param body an object with the body content
 * @throws CreateKnowledgebaseHttpError
 */
export declare function createKnowledgebase(body: CreateKnowledgeBase, options?: ApiCallOptions): Promise<CreateKnowledgebaseHttpResponse>;
export type CreateKnowledgebaseHttpResponse = {
  data: KnowledgeBaseLight;
  headers: Headers;
  status: 201;
};
export type CreateKnowledgebaseHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Deletes a knowledgebase and all of its resources.
 *
 * @param id The id of the knowledgebase to delete.
 * @throws DeleteKnowledgebaseHttpError
 */
export declare function deleteKnowledgebase(id: string, options?: ApiCallOptions): Promise<DeleteKnowledgebaseHttpResponse>;
export type DeleteKnowledgebaseHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteKnowledgebaseHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves a specific knowledgebase.
 *
 * @param id The id of the knowledgebase to retrieve.
 * @throws GetKnowledgebaseHttpError
 */
export declare function getKnowledgebase(id: string, options?: ApiCallOptions): Promise<GetKnowledgebaseHttpResponse>;
export type GetKnowledgebaseHttpResponse = {
  data: KnowledgeBase;
  headers: Headers;
  status: 200;
};
export type GetKnowledgebaseHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Updates properties of a specific knowledgebase.
 *
 * @param id The knowledgebase id.
 * @param body an object with the body content
 * @throws PatchKnowledgebaseHttpError
 */
export declare function patchKnowledgebase(id: string, body: JSONPatchArray, options?: ApiCallOptions): Promise<PatchKnowledgebaseHttpResponse>;
export type PatchKnowledgebaseHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type PatchKnowledgebaseHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429;
};
/**
 * Execute search with either `SIMPLE` or `FULL` mode. SIMPLE does semantic search while FULL will also do reranking and include keyword based chunks. Use topN to control number of chunks in response, max limit is 50. Default to 5.
 *
 * @param id The ID of the knowledgebase
 * @param body an object with the body content
 * @throws SearchKnowledgebaseHttpError
 */
export declare function searchKnowledgebase(id: string, body: SearchRequest, options?: ApiCallOptions): Promise<SearchKnowledgebaseHttpResponse>;
export type SearchKnowledgebaseHttpResponse = {
  data: SearchResponse;
  headers: Headers;
  status: 200;
};
export type SearchKnowledgebaseHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 405 | 500;
};
/**
 * Adds a datasource to a knowledgebase.
 *
 * @param id The id of the knowledgebase.
 * @param body an object with the body content
 * @throws CreateKnowledgebaseDatasourceHttpError
 */
export declare function createKnowledgebaseDatasource(id: string, body: CreateDataSource, options?: ApiCallOptions): Promise<CreateKnowledgebaseDatasourceHttpResponse>;
export type CreateKnowledgebaseDatasourceHttpResponse = {
  data: DataSource;
  headers: Headers;
  status: 201;
};
export type CreateKnowledgebaseDatasourceHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Deletes a specified datasource and all its resources.
 *
 * @param id The id of the knowledgebase the datasource belongs to.
 * @param datasourceId The id of the datasource to delete.
 * @throws DeleteKnowledgebaseDatasourceHttpError
 */
export declare function deleteKnowledgebaseDatasource(id: string, datasourceId: string, options?: ApiCallOptions): Promise<DeleteKnowledgebaseDatasourceHttpResponse>;
export type DeleteKnowledgebaseDatasourceHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteKnowledgebaseDatasourceHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Update a knowledgebase datasource
 *
 * @param id The id of a knowledgebase.
 * @param datasourceId The id of the datasource to update.
 * @param body an object with the body content
 * @throws UpdateKnowledgebaseDatasourceHttpError
 */
export declare function updateKnowledgebaseDatasource(id: string, datasourceId: string, body: DataSource, options?: ApiCallOptions): Promise<UpdateKnowledgebaseDatasourceHttpResponse>;
export type UpdateKnowledgebaseDatasourceHttpResponse = {
  data: DataSource;
  headers: Headers;
  status: 200;
};
export type UpdateKnowledgebaseDatasourceHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Cancels ongoing sync for a specified datasource.
 *
 * @param id The id of the knowledgebase the datasource belongs to.
 * @param datasourceId The id of the datasource to cancel sync for.
 * @throws CancelKnowledgebaseDatasourceHttpError
 */
export declare function cancelKnowledgebaseDatasource(id: string, datasourceId: string, options?: ApiCallOptions): Promise<CancelKnowledgebaseDatasourceHttpResponse>;
export type CancelKnowledgebaseDatasourceHttpResponse = {
  data: DataSourceSync;
  headers: Headers;
  status: 200;
};
export type CancelKnowledgebaseDatasourceHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Download knowledgebase datasource reference
 *
 * @param id The id of the knowledgebase the datasource belongs to.
 * @param datasourceId The id of the datasource to download from.
 * @param body an object with the body content
 * @throws DownloadKnowledgebaseDatasourceHttpError
 */
export declare function downloadKnowledgebaseDatasource(id: string, datasourceId: string, body: DownloadFile, options?: ApiCallOptions): Promise<DownloadKnowledgebaseDatasourceHttpResponse>;
export type DownloadKnowledgebaseDatasourceHttpResponse = {
  data: DownloadFileResponse;
  headers: Headers;
  status: 200;
};
export type DownloadKnowledgebaseDatasourceHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Starts syncing a specified datasource to a specified knowledgebase index.
 *
 * @param id The id of the knowledgebase the datasource belongs to.
 * @param datasourceId The id of the datasource to sync.
 * @param query an object with query parameters
 * @throws SyncKnowledgebaseDatasourceHttpError
 */
export declare function syncKnowledgebaseDatasource(id: string, datasourceId: string, query: {
  /** Optional parameter to migrate indexed files to docdetails collection */
  migrate?: boolean;
}, options?: ApiCallOptions): Promise<SyncKnowledgebaseDatasourceHttpResponse>;
export type SyncKnowledgebaseDatasourceHttpResponse = {
  data: DataSourceSync;
  headers: Headers;
  status: 202;
};
export type SyncKnowledgebaseDatasourceHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves sync history for a specified datasource in a knowledgebase. Returns a `404` if there is no sync history, or if the calling user doesn't have access to the datasource.
 *
 * @param id The id of the knowledgebase the datasource belongs to.
 * @param datasourceId The id of the datasource.
 * @param query an object with query parameters
 * @throws GetKnowledgebaseDatasourceHistoriesHttpError
 */
export declare function getKnowledgebaseDatasourceHistories(id: string, datasourceId: string, query: {
  /** The number of knowledgebases to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, case insensitive, eg. name. Can be prefixed with - to set descending order, defaults to ascending. */
  sort?: "COMPLETED" | "-COMPLETED";
}, options?: ApiCallOptions): Promise<GetKnowledgebaseDatasourceHistoriesHttpResponse>;
export type GetKnowledgebaseDatasourceHistoriesHttpResponse = {
  data: SyncHistoryResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetKnowledgebaseDatasourceHistoriesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetKnowledgebaseDatasourceHistoriesHttpResponse>;
};
export type GetKnowledgebaseDatasourceHistoriesHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * @deprecated
 *
 * Retrieves detailed sync history for a specified datasource.
 *
 * @param id The id of the knowledgebase the datasource belongs to.
 * @param datasourceId The id of the datasource.
 * @param syncId The sync identifier.
 * @throws GetKnowledgebaseDatasourceHistoryHttpError
 */
export declare function getKnowledgebaseDatasourceHistory(id: string, datasourceId: string, syncId: string, options?: ApiCallOptions): Promise<GetKnowledgebaseDatasourceHistoryHttpResponse>;
export type GetKnowledgebaseDatasourceHistoryHttpResponse = {
  data: SyncHistoryDetails;
  headers: Headers;
  status: 200;
};
export type GetKnowledgebaseDatasourceHistoryHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Delete knowledgebase datasource schedule
 *
 * @param id The id of the knowledgebase the schedule belongs to.
 * @param datasourceId The id of the datasource the schedule belongs to.
 * @throws DeleteKnowledgebaseDatasourceScheduleHttpError
 */
export declare function deleteKnowledgebaseDatasourceSchedule(id: string, datasourceId: string, options?: ApiCallOptions): Promise<DeleteKnowledgebaseDatasourceScheduleHttpResponse>;
export type DeleteKnowledgebaseDatasourceScheduleHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteKnowledgebaseDatasourceScheduleHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Get a knowledgebase datasource schedule
 *
 * @param id The id of the knowledgebase the schedule belongs to.
 * @param datasourceId The id of the datasource the schedule belongs to.
 * @throws GetKnowledgebaseDatasourceScheduleHttpError
 */
export declare function getKnowledgebaseDatasourceSchedule(id: string, datasourceId: string, options?: ApiCallOptions): Promise<GetKnowledgebaseDatasourceScheduleHttpResponse>;
export type GetKnowledgebaseDatasourceScheduleHttpResponse = {
  data: ScheduleWithManifest;
  headers: Headers;
  status: 200;
};
export type GetKnowledgebaseDatasourceScheduleHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Creates or updates a specified datasource schedule.
 *
 * @param id The id of the knowledgebase the schedule belongs to.
 * @param datasourceId The id of the datasource the schedule belongs to.
 * @param body an object with the body content
 * @throws CreateKnowledgebaseDatasourceScheduleHttpError
 */
export declare function createKnowledgebaseDatasourceSchedule(id: string, datasourceId: string, body: Schedule, options?: ApiCallOptions): Promise<CreateKnowledgebaseDatasourceScheduleHttpResponse>;
export type CreateKnowledgebaseDatasourceScheduleHttpResponse = {
  data: ScheduleWithManifest;
  headers: Headers;
  status: 200 | 201;
};
export type CreateKnowledgebaseDatasourceScheduleHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves sync history for the specified knowledgebase. Will return a `404` if no sync history exists, or if the calling user does not have access to synced datasources.
 *
 * @param id The id of the knowledgebase.
 * @param query an object with query parameters
 * @throws GetKnowledgebaseHistoriesHttpError
 */
export declare function getKnowledgebaseHistories(id: string, query: {
  /** The number of sync histories to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, case insensitive, eg. name. Can be prefixed with - to set descending order, defaults to ascending. */
  sort?: "COMPLETED" | "-COMPLETED";
}, options?: ApiCallOptions): Promise<GetKnowledgebaseHistoriesHttpResponse>;
export type GetKnowledgebaseHistoriesHttpResponse = {
  data: SyncHistoryResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetKnowledgebaseHistoriesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetKnowledgebaseHistoriesHttpResponse>;
};
export type GetKnowledgebaseHistoriesHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Clears the cache for knowledgebases api requests.
 */
export declare function clearCache(): void;
export type KnowledgebasesAPI = {
  /**
   * Returns a list of all knowledgebases the user has access to.
   *
   * @param query an object with query parameters
   * @throws GetKnowledgebasesHttpError
   */
  getKnowledgebases: typeof getKnowledgebases;
  /**
   * Creates a new knowledgebase.
   *
   * @param body an object with the body content
   * @throws CreateKnowledgebaseHttpError
   */
  createKnowledgebase: typeof createKnowledgebase;
  /**
   * Deletes a knowledgebase and all of its resources.
   *
   * @param id The id of the knowledgebase to delete.
   * @throws DeleteKnowledgebaseHttpError
   */
  deleteKnowledgebase: typeof deleteKnowledgebase;
  /**
   * Retrieves a specific knowledgebase.
   *
   * @param id The id of the knowledgebase to retrieve.
   * @throws GetKnowledgebaseHttpError
   */
  getKnowledgebase: typeof getKnowledgebase;
  /**
   * Updates properties of a specific knowledgebase.
   *
   * @param id The knowledgebase id.
   * @param body an object with the body content
   * @throws PatchKnowledgebaseHttpError
   */
  patchKnowledgebase: typeof patchKnowledgebase;
  /**
   * Execute search with either `SIMPLE` or `FULL` mode. SIMPLE does semantic search while FULL will also do reranking and include keyword based chunks. Use topN to control number of chunks in response, max limit is 50. Default to 5.
   *
   * @param id The ID of the knowledgebase
   * @param body an object with the body content
   * @throws SearchKnowledgebaseHttpError
   */
  searchKnowledgebase: typeof searchKnowledgebase;
  /**
   * Adds a datasource to a knowledgebase.
   *
   * @param id The id of the knowledgebase.
   * @param body an object with the body content
   * @throws CreateKnowledgebaseDatasourceHttpError
   */
  createKnowledgebaseDatasource: typeof createKnowledgebaseDatasource;
  /**
   * Deletes a specified datasource and all its resources.
   *
   * @param id The id of the knowledgebase the datasource belongs to.
   * @param datasourceId The id of the datasource to delete.
   * @throws DeleteKnowledgebaseDatasourceHttpError
   */
  deleteKnowledgebaseDatasource: typeof deleteKnowledgebaseDatasource;
  /**
   * Update a knowledgebase datasource
   *
   * @param id The id of a knowledgebase.
   * @param datasourceId The id of the datasource to update.
   * @param body an object with the body content
   * @throws UpdateKnowledgebaseDatasourceHttpError
   */
  updateKnowledgebaseDatasource: typeof updateKnowledgebaseDatasource;
  /**
   * Cancels ongoing sync for a specified datasource.
   *
   * @param id The id of the knowledgebase the datasource belongs to.
   * @param datasourceId The id of the datasource to cancel sync for.
   * @throws CancelKnowledgebaseDatasourceHttpError
   */
  cancelKnowledgebaseDatasource: typeof cancelKnowledgebaseDatasource;
  /**
   * Download knowledgebase datasource reference
   *
   * @param id The id of the knowledgebase the datasource belongs to.
   * @param datasourceId The id of the datasource to download from.
   * @param body an object with the body content
   * @throws DownloadKnowledgebaseDatasourceHttpError
   */
  downloadKnowledgebaseDatasource: typeof downloadKnowledgebaseDatasource;
  /**
   * Starts syncing a specified datasource to a specified knowledgebase index.
   *
   * @param id The id of the knowledgebase the datasource belongs to.
   * @param datasourceId The id of the datasource to sync.
   * @param query an object with query parameters
   * @throws SyncKnowledgebaseDatasourceHttpError
   */
  syncKnowledgebaseDatasource: typeof syncKnowledgebaseDatasource;
  /**
   * Retrieves sync history for a specified datasource in a knowledgebase. Returns a `404` if there is no sync history, or if the calling user doesn't have access to the datasource.
   *
   * @param id The id of the knowledgebase the datasource belongs to.
   * @param datasourceId The id of the datasource.
   * @param query an object with query parameters
   * @throws GetKnowledgebaseDatasourceHistoriesHttpError
   */
  getKnowledgebaseDatasourceHistories: typeof getKnowledgebaseDatasourceHistories;
  /**
   * @deprecated
   *
   * Retrieves detailed sync history for a specified datasource.
   *
   * @param id The id of the knowledgebase the datasource belongs to.
   * @param datasourceId The id of the datasource.
   * @param syncId The sync identifier.
   * @throws GetKnowledgebaseDatasourceHistoryHttpError
   */
  getKnowledgebaseDatasourceHistory: typeof getKnowledgebaseDatasourceHistory;
  /**
   * Delete knowledgebase datasource schedule
   *
   * @param id The id of the knowledgebase the schedule belongs to.
   * @param datasourceId The id of the datasource the schedule belongs to.
   * @throws DeleteKnowledgebaseDatasourceScheduleHttpError
   */
  deleteKnowledgebaseDatasourceSchedule: typeof deleteKnowledgebaseDatasourceSchedule;
  /**
   * Get a knowledgebase datasource schedule
   *
   * @param id The id of the knowledgebase the schedule belongs to.
   * @param datasourceId The id of the datasource the schedule belongs to.
   * @throws GetKnowledgebaseDatasourceScheduleHttpError
   */
  getKnowledgebaseDatasourceSchedule: typeof getKnowledgebaseDatasourceSchedule;
  /**
   * Creates or updates a specified datasource schedule.
   *
   * @param id The id of the knowledgebase the schedule belongs to.
   * @param datasourceId The id of the datasource the schedule belongs to.
   * @param body an object with the body content
   * @throws CreateKnowledgebaseDatasourceScheduleHttpError
   */
  createKnowledgebaseDatasourceSchedule: typeof createKnowledgebaseDatasourceSchedule;
  /**
   * Retrieves sync history for the specified knowledgebase. Will return a `404` if no sync history exists, or if the calling user does not have access to synced datasources.
   *
   * @param id The id of the knowledgebase.
   * @param query an object with query parameters
   * @throws GetKnowledgebaseHistoriesHttpError
   */
  getKnowledgebaseHistories: typeof getKnowledgebaseHistories;
  /**
   * Clears the cache for knowledgebases api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the knowledgebases api
 */
declare const knowledgebasesExport: KnowledgebasesAPI;
//#endregion
export { knowledgebasesExport as default };