import { w as DownloadableBlob, x as ApiCallOptions } from "./chunks/auth-types-yKuw6LLB.js";
import "./chunks/invoke-fetch-DdmiOIkr.js";
//#region src/public/rest/report-templates.d.ts
export type CreateTemplateRequest = {
  /** Template description */
  description?: string | null;
  /** Template name */
  name: string;
  /** Specifies the action to perform with the given source app id. Use "validate" to verify that the template source app matches the provided value. Use "replace" to migrate the template to a different app by replacing the source app id. */
  sourceAppAction?: "validate" | "replace";
  /** The ID of the app that this template is using as data source. The id stored in the template file metadata is used if no value is specified. */
  sourceAppId?: string | null;
  /** The ID of a previously uploaded temporary content file */
  temporaryContentId: string;
};
export type ErrorResponseItem = {
  /** The error code. */
  code?: string | null;
  /** A human-readable explanation specific to this occurrence of the problem. */
  detail?: string | null;
  /** Additional error metadata. */
  meta?: unknown | null;
  /** Summary of the problem. */
  title?: string | null;
};
export type ErrorResult = {
  /** List of errors and their properties. */
  errors?: ErrorResponseItem[] | null;
  readonly statusCode?: number | null;
};
export type GetTemplatesResponse = {
  /** The current page data. */
  data?: ReportTemplateResponse[] | null;
  links?: PaginationLinks;
};
export type Operation = {
  from?: string | null;
  op?: string | null;
  path?: string | null;
  value?: unknown | null;
};
export type PaginationLink = {
  /** The URL for the pagination link. */
  href?: string | null;
};
export type PaginationLinks = {
  next?: PaginationLink;
  prev?: PaginationLink;
  self?: PaginationLink;
};
export type ReportTemplateResponse = {
  /** The date and time when the template was created. */
  createdAt?: string | null;
  /** The id of the user who created the template. */
  createdBy?: string | null;
  /** Template description */
  description?: string | null;
  /** The template ID */
  id?: string | null;
  /** The template metadata version */
  metadataVersion?: number;
  /** Template name */
  name?: string | null;
  /** The user that this template is scoped to. */
  ownerId?: string | null;
  /** The id of the app that this template is using as data source. */
  sourceAppId?: string | null;
  /** The name of the app that this template is using as data source. */
  sourceAppName?: string | null;
  /** Template type */
  type?: "excel" | "pixelPerfect" | "html" | "powerPoint" | "word";
  /** The date and time when the template was last updated. */
  updatedAt?: string | null;
  /** The id of the user who last updated the template. */
  updatedBy?: string | null;
};
export type UpdateTemplateRequest = {
  /** Template description */
  description?: string | null;
  /** Template name */
  name: string;
  /** Specifies the action to perform with the new source app. Use "validate" to verify that the source app of the uploaded template matches the target app. Use "replace" to migrate the uploaded template to the target app by replacing the source app id. */
  sourceAppAction?: "validate" | "replace";
  /** The ID of a previously uploaded temporary content file */
  temporaryContentId: string;
};
/**
 * Get descriptive info for the specified templates.
 * @example
 * getReportTemplates(
 *   {
 *     name: "Sales",
 *     ownerId: "0rTsxGg_rtsZAs19Zib_421n6haydjIh",
 *     sourceAppId: "78fb8e8d-bc83-4da1-b0d1-b0dc0a5c3e5b"
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetReportTemplatesHttpError
 */
export declare function getReportTemplates(query: {
  /** If present, restrict the number of returned items to this value. */
  limit?: number;
  /** Template name to search and filter for. Case-insensitive open search with wildcards both as prefix and suffix. */
  name?: string;
  /** Return the templates for the specified owner. */
  ownerId?: string;
  /** If present, skip this number of the returned values in the result set (facilitates paging). */
  skip?: number;
  /** Field to sort by. Prefix with +/- to indicate ascending/descending. By default, the sort order is ascending. */
  sort?: ("name" | "+name" | "-name" | "createdAt" | "+createdAt" | "-createdAt" | "updatedAt" | "+updatedAt" | "-updatedAt" | "type" | "+type" | "-type")[];
  /** Return the templates that are using the specified app as data source. */
  sourceAppId?: string;
}, options?: ApiCallOptions): Promise<GetReportTemplatesHttpResponse>;
export type GetReportTemplatesHttpResponse = {
  data: GetTemplatesResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetReportTemplatesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetReportTemplatesHttpResponse>;
};
export type GetReportTemplatesHttpError = {
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
export declare function createReportTemplate(body: CreateTemplateRequest, options?: ApiCallOptions): Promise<CreateReportTemplateHttpResponse>;
export type CreateReportTemplateHttpResponse = {
  data: ReportTemplateResponse;
  headers: Headers;
  status: 201;
};
export type CreateReportTemplateHttpError = {
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
export declare function deleteReportTemplate(id: string, options?: ApiCallOptions): Promise<DeleteReportTemplateHttpResponse>;
export type DeleteReportTemplateHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteReportTemplateHttpError = {
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
export declare function getReportTemplate(id: string, options?: ApiCallOptions): Promise<GetReportTemplateHttpResponse>;
export type GetReportTemplateHttpResponse = {
  data: ReportTemplateResponse;
  headers: Headers;
  status: 200;
};
export type GetReportTemplateHttpError = {
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
export declare function patchReportTemplate(id: string, body: Operation[], options?: ApiCallOptions): Promise<PatchReportTemplateHttpResponse>;
export type PatchReportTemplateHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type PatchReportTemplateHttpError = {
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
export declare function updateReportTemplate(id: string, body: UpdateTemplateRequest, options?: ApiCallOptions): Promise<UpdateReportTemplateHttpResponse>;
export type UpdateReportTemplateHttpResponse = {
  data: ReportTemplateResponse;
  headers: Headers;
  status: 201;
};
export type UpdateReportTemplateHttpError = {
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
export declare function downloadReportTemplate(id: string, options?: ApiCallOptions): Promise<DownloadReportTemplateHttpResponse>;
export type DownloadReportTemplateHttpResponse = {
  data: DownloadableBlob;
  headers: Headers;
  status: 200;
};
export type DownloadReportTemplateHttpError = {
  data: ErrorResult;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Clears the cache for report-templates api requests.
 */
export declare function clearCache(): void;
export type ReportTemplatesAPI = {
  /**
   * Get descriptive info for the specified templates.
   * @example
   * getReportTemplates(
   *   {
   *     name: "Sales",
   *     ownerId: "0rTsxGg_rtsZAs19Zib_421n6haydjIh",
   *     sourceAppId: "78fb8e8d-bc83-4da1-b0d1-b0dc0a5c3e5b"
   *   }
   * )
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
export { reportTemplatesExport as default };