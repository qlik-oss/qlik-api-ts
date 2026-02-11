import { ApiCallOptions, DownloadableBlob } from "./invoke-fetch-types.js";
import "./chunks/invoke-fetch-DFc3yzaj.js";

//#region src/public/rest/report-templates.d.ts
type CreateTemplateRequest = {
  /** Template description */description?: string; /** Template name */
  name: string; /** Specifies the action to perform with the given source app id. Use "validate" to verify that the template source app matches the provided value. Use "replace" to migrate the template to a different app by replacing the source app id. */
  sourceAppAction?: "validate" | "replace"; /** The ID of the app that this template is using as data source. The id stored in the template file metadata is used if no value is specified. */
  sourceAppId?: string; /** The ID of a previously uploaded temporary content file */
  temporaryContentId: string;
};
type ErrorResponseItem = {
  /** The error code. */code?: string; /** A human-readable explanation specific to this occurrence of the problem. */
  detail?: string; /** Additional error metadata. */
  meta?: unknown; /** Summary of the problem. */
  title?: string;
};
type ErrorResult = {
  /** List of errors and their properties. */errors?: ErrorResponseItem[];
  readonly statusCode?: number;
};
type GetTemplatesResponse = {
  /** The current page data. */data?: ReportTemplateResponse[];
  links?: PaginationLinks;
};
type Operation = {
  from?: string;
  op?: string;
  path?: string;
  value?: unknown;
};
type PaginationLink = {
  /** The URL for the pagination link. */href?: string;
};
type PaginationLinks = {
  next?: PaginationLink;
  prev?: PaginationLink;
  self?: PaginationLink;
};
type ReportTemplateResponse = {
  /** The date and time when the template was created. */createdAt?: string; /** The id of the user who created the template. */
  createdBy?: string; /** Template description */
  description?: string; /** The template ID */
  id?: string; /** The template metadata version */
  metadataVersion?: number; /** Template name */
  name?: string; /** The user that this template is scoped to. */
  ownerId?: string; /** The id of the app that this template is using as data source. */
  sourceAppId?: string; /** The name of the app that this template is using as data source. */
  sourceAppName?: string; /** The date and time when the template was last updated. */
  updatedAt?: string; /** The id of the user who last updated the template. */
  updatedBy?: string;
};
type UpdateTemplateRequest = {
  /** Template description */description?: string; /** Template name */
  name: string; /** Specifies the action to perform with the new source app. Use "validate" to verify that the source app of the uploaded template matches the target app. Use "replace" to migrate the uploaded template to the target app by replacing the source app id. */
  sourceAppAction?: "validate" | "replace"; /** The ID of a previously uploaded temporary content file */
  temporaryContentId: string;
};
/**
 * Get descriptive info for the specified templates.
 *
 * @param query an object with query parameters
 * @throws GetReportTemplatesHttpError
 */
declare function getReportTemplates(query: {
  /** If present, restrict the number of returned items to this value. */limit?: number; /** Template name to search and filter for. Case-insensitive open search with wildcards both as prefix and suffix. */
  name?: string; /** Return the templates for the specified owner. */
  ownerId?: string; /** If present, skip this number of the returned values in the result set (facilitates paging). */
  skip?: number; /** Field to sort by. Prefix with +/- to indicate ascending/descending. By default, the sort order is ascending. */
  sort?: ("name" | "+name" | "-name" | "createdAt" | "+createdAt" | "-createdAt" | "updatedAt" | "+updatedAt" | "-updatedAt" | "type" | "+type" | "-type")[]; /** Return the templates that are using the specified app as data source. */
  sourceAppId?: string;
}, options?: ApiCallOptions): Promise<GetReportTemplatesHttpResponse>;
type GetReportTemplatesHttpResponse = {
  data: GetTemplatesResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetReportTemplatesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetReportTemplatesHttpResponse>;
};
type GetReportTemplatesHttpError = {
  data: ErrorResult;
  headers: Headers;
  status: 400;
};
/**
 * Create a new report template.
 *
 * @param body an object with the body content
 * @throws CreateReportTemplateHttpError
 */
declare function createReportTemplate(body: CreateTemplateRequest, options?: ApiCallOptions): Promise<CreateReportTemplateHttpResponse>;
type CreateReportTemplateHttpResponse = {
  data: ReportTemplateResponse;
  headers: Headers;
  status: 201;
};
type CreateReportTemplateHttpError = {
  data: ErrorResult;
  headers: Headers;
  status: 400 | 403 | 404 | 413;
};
/**
 * Delete the specified report template.
 *
 * @param id The ID of the report template to delete.
 * @throws DeleteReportTemplateHttpError
 */
declare function deleteReportTemplate(id: string, options?: ApiCallOptions): Promise<DeleteReportTemplateHttpResponse>;
type DeleteReportTemplateHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteReportTemplateHttpError = {
  data: ErrorResult;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Get descriptive info for the specified report template.
 *
 * @param id The ID of the report template.
 * @throws GetReportTemplateHttpError
 */
declare function getReportTemplate(id: string, options?: ApiCallOptions): Promise<GetReportTemplateHttpResponse>;
type GetReportTemplateHttpResponse = {
  data: ReportTemplateResponse;
  headers: Headers;
  status: 200;
};
type GetReportTemplateHttpError = {
  data: ErrorResult;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Patch an existing report template.
 *
 * @param id The ID of the report template to patch.
 * @param body an object with the body content
 * @throws PatchReportTemplateHttpError
 */
declare function patchReportTemplate(id: string, body: Operation[], options?: ApiCallOptions): Promise<PatchReportTemplateHttpResponse>;
type PatchReportTemplateHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchReportTemplateHttpError = {
  data: ErrorResult;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 413;
};
/**
 * Update an existing report template.
 *
 * @param id The ID of the report template to update.
 * @param body an object with the body content
 * @throws UpdateReportTemplateHttpError
 */
declare function updateReportTemplate(id: string, body: UpdateTemplateRequest, options?: ApiCallOptions): Promise<UpdateReportTemplateHttpResponse>;
type UpdateReportTemplateHttpResponse = {
  data: ReportTemplateResponse;
  headers: Headers;
  status: 201;
};
type UpdateReportTemplateHttpError = {
  data: ErrorResult;
  headers: Headers;
  status: 400 | 403 | 404 | 409 | 413;
};
/**
 * Download the template file of the specified report template
 *
 * @param id The ID of the report template.
 * @throws DownloadReportTemplateHttpError
 */
declare function downloadReportTemplate(id: string, options?: ApiCallOptions): Promise<DownloadReportTemplateHttpResponse>;
type DownloadReportTemplateHttpResponse = {
  data: DownloadableBlob;
  headers: Headers;
  status: 200;
};
type DownloadReportTemplateHttpError = {
  data: ErrorResult;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Clears the cache for report-templates api requests.
 */
declare function clearCache(): void;
type ReportTemplatesAPI = {
  /**
   * Get descriptive info for the specified templates.
   *
   * @param query an object with query parameters
   * @throws GetReportTemplatesHttpError
   */
  getReportTemplates: typeof getReportTemplates;
  /**
   * Create a new report template.
   *
   * @param body an object with the body content
   * @throws CreateReportTemplateHttpError
   */
  createReportTemplate: typeof createReportTemplate;
  /**
   * Delete the specified report template.
   *
   * @param id The ID of the report template to delete.
   * @throws DeleteReportTemplateHttpError
   */
  deleteReportTemplate: typeof deleteReportTemplate;
  /**
   * Get descriptive info for the specified report template.
   *
   * @param id The ID of the report template.
   * @throws GetReportTemplateHttpError
   */
  getReportTemplate: typeof getReportTemplate;
  /**
   * Patch an existing report template.
   *
   * @param id The ID of the report template to patch.
   * @param body an object with the body content
   * @throws PatchReportTemplateHttpError
   */
  patchReportTemplate: typeof patchReportTemplate;
  /**
   * Update an existing report template.
   *
   * @param id The ID of the report template to update.
   * @param body an object with the body content
   * @throws UpdateReportTemplateHttpError
   */
  updateReportTemplate: typeof updateReportTemplate;
  /**
   * Download the template file of the specified report template
   *
   * @param id The ID of the report template.
   * @throws DownloadReportTemplateHttpError
   */
  downloadReportTemplate: typeof downloadReportTemplate;
  /**
   * Clears the cache for report-templates api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the report-templates api
 */
declare const reportTemplatesExport: ReportTemplatesAPI;
//#endregion
export { CreateReportTemplateHttpError, CreateReportTemplateHttpResponse, CreateTemplateRequest, DeleteReportTemplateHttpError, DeleteReportTemplateHttpResponse, DownloadReportTemplateHttpError, DownloadReportTemplateHttpResponse, ErrorResponseItem, ErrorResult, GetReportTemplateHttpError, GetReportTemplateHttpResponse, GetReportTemplatesHttpError, GetReportTemplatesHttpResponse, GetTemplatesResponse, Operation, PaginationLink, PaginationLinks, PatchReportTemplateHttpError, PatchReportTemplateHttpResponse, ReportTemplateResponse, ReportTemplatesAPI, UpdateReportTemplateHttpError, UpdateReportTemplateHttpResponse, UpdateTemplateRequest, clearCache, createReportTemplate, reportTemplatesExport as default, deleteReportTemplate, downloadReportTemplate, getReportTemplate, getReportTemplates, patchReportTemplate, updateReportTemplate };