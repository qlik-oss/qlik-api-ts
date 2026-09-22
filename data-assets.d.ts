import { x as ApiCallOptions } from "./chunks/auth-types-DCwmQ7fk.js";
import "./chunks/invoke-fetch-eUbA2JSu.js";
//#region src/public/rest/data-assets.d.ts
export type BatchIdDto = {
  ids?: string[];
};
export type DataAsset = {
  appId?: string;
  appType: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly createdBy?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly createdTime?: string;
  /** The date-time when the source data was last changed */
  dataFreshness?: string;
  dataStoreInfo?: DataStoreInfo;
  description?: string;
  /** Only required when updating the resource. Must be null for new resources. */
  id?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly lastModifiedBy?: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly lastModifiedTime?: string;
  name?: string;
  /** The value is automatically set by the application. */
  ownerId?: string;
  /** A Map of name-value pairs. */
  properties?: Record<string, unknown>;
  spaceId?: string;
  tags?: string[];
  technicalDescription?: string;
  technicalName: string;
  /** The value is automatically set by the application. User defined value is ignored. */
  readonly tenantId?: string;
  /** Only required when updating the resource. Must be null for new resources. */
  version?: number;
};
export type DataStoreInfo = {
  id: string;
  readonly name?: string;
  readonly type?: string;
};
export type Error = {
  code?: string;
  detail?: string;
  /** Optional free-form metadata associated with the error. */
  meta?: unknown;
  status?: string;
  title?: string;
};
export type ErrorResponse = {
  errors?: Error[];
  traceId?: string;
};
export type JsonPatch = {
  /** A JSON Pointer path pointing to the location to move/copy from. */
  from?: string;
  /** The operation to be performed. */
  op: "add" | "remove" | "replace" | "move" | "copy" | "test";
  /** A JSON pointer to the property being affected. */
  path: string;
  /** The value to add, replace or test. */
  value?: unknown;
};
/**
 * Batch delete data assets by IDs.
 *
 * @param body an object with the body content
 * @throws DeleteDataAssetsHttpError
 */
export declare function deleteDataAssets(body: BatchIdDto, options?: ApiCallOptions): Promise<DeleteDataAssetsHttpResponse>;
export type DeleteDataAssetsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteDataAssetsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Save new data asset.
 *
 * @param body an object with the body content
 * @throws CreateDataAssetHttpError
 */
export declare function createDataAsset(body: DataAsset, options?: ApiCallOptions): Promise<CreateDataAssetHttpResponse>;
export type CreateDataAssetHttpResponse = {
  data: DataAsset;
  headers: Headers;
  status: 201;
};
export type CreateDataAssetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Get data asset by ID.
 *
 * @param dataAssetId
 * @param query an object with query parameters
 * @throws GetDataAssetHttpError
 */
export declare function getDataAsset(dataAssetId: string, query: {
  /** Comma-separated fields to return in the response. */
  projections?: string[];
}, options?: ApiCallOptions): Promise<GetDataAssetHttpResponse>;
export type GetDataAssetHttpResponse = {
  data: DataAsset;
  headers: Headers;
  status: 200;
};
export type GetDataAssetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Patch data asset.
 *
 * @param dataAssetId
 * @param body an object with the body content
 * @throws PatchDataAssetHttpError
 */
export declare function patchDataAsset(dataAssetId: string, body: JsonPatch[], options?: ApiCallOptions): Promise<PatchDataAssetHttpResponse>;
export type PatchDataAssetHttpResponse = {
  data: DataAsset;
  headers: Headers;
  status: 200 | 204;
};
export type PatchDataAssetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Update data asset.
 *
 * @param dataAssetId
 * @param body an object with the body content
 * @throws UpdateDataAssetHttpError
 */
export declare function updateDataAsset(dataAssetId: string, body: DataAsset, options?: ApiCallOptions): Promise<UpdateDataAssetHttpResponse>;
export type UpdateDataAssetHttpResponse = {
  data: DataAsset;
  headers: Headers;
  status: 200;
};
export type UpdateDataAssetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Clears the cache for data-assets api requests.
 */
export declare function clearCache(): void;
export type DataAssetsAPI = {
  /**
   * Batch delete data assets by IDs.
   *
   * @param body an object with the body content
   * @throws DeleteDataAssetsHttpError
   */
  deleteDataAssets: typeof deleteDataAssets;
  /**
   * Save new data asset.
   *
   * @param body an object with the body content
   * @throws CreateDataAssetHttpError
   */
  createDataAsset: typeof createDataAsset;
  /**
   * Get data asset by ID.
   *
   * @param dataAssetId
   * @param query an object with query parameters
   * @throws GetDataAssetHttpError
   */
  getDataAsset: typeof getDataAsset;
  /**
   * Patch data asset.
   *
   * @param dataAssetId
   * @param body an object with the body content
   * @throws PatchDataAssetHttpError
   */
  patchDataAsset: typeof patchDataAsset;
  /**
   * Update data asset.
   *
   * @param dataAssetId
   * @param body an object with the body content
   * @throws UpdateDataAssetHttpError
   */
  updateDataAsset: typeof updateDataAsset;
  /**
   * Clears the cache for data-assets api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the data-assets api
 */
declare const dataAssetsExport: DataAssetsAPI;
//#endregion
export { dataAssetsExport as default };