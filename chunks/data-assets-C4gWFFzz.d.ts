import { y as ApiCallOptions } from "./auth-types-BK8AvfyD.js";

//#region src/public/rest/data-assets.d.ts
type BatchIdDto = {
  ids?: string[];
};
type DataAsset = {
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
type DataStoreInfo = {
  id: string;
  readonly name?: string;
  readonly type?: string;
};
type Error = {
  code?: string;
  detail?: string;
  status?: string;
  title?: string;
};
type ErrorResponse = {
  errors?: Error[];
  traceId?: string;
};
type JsonPatch = {
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
declare function deleteDataAssets(body: BatchIdDto, options?: ApiCallOptions): Promise<DeleteDataAssetsHttpResponse>;
type DeleteDataAssetsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteDataAssetsHttpError = {
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
declare function createDataAsset(body: DataAsset, options?: ApiCallOptions): Promise<CreateDataAssetHttpResponse>;
type CreateDataAssetHttpResponse = {
  data: DataAsset;
  headers: Headers;
  status: 201;
};
type CreateDataAssetHttpError = {
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
declare function getDataAsset(dataAssetId: string, query: {
  /** Comma-separated fields to return in the response. */
  projections?: string[];
}, options?: ApiCallOptions): Promise<GetDataAssetHttpResponse>;
type GetDataAssetHttpResponse = {
  data: DataAsset;
  headers: Headers;
  status: 200;
};
type GetDataAssetHttpError = {
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
declare function patchDataAsset(dataAssetId: string, body: JsonPatch[], options?: ApiCallOptions): Promise<PatchDataAssetHttpResponse>;
type PatchDataAssetHttpResponse = {
  data: DataAsset;
  headers: Headers;
  status: 200 | 204;
};
type PatchDataAssetHttpError = {
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
declare function updateDataAsset(dataAssetId: string, body: DataAsset, options?: ApiCallOptions): Promise<UpdateDataAssetHttpResponse>;
type UpdateDataAssetHttpResponse = {
  data: DataAsset;
  headers: Headers;
  status: 200;
};
type UpdateDataAssetHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Clears the cache for data-assets api requests.
 */
declare function clearCache(): void;
type DataAssetsAPI = {
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
export { patchDataAsset as C, getDataAsset as S, UpdateDataAssetHttpResponse as _, DataAssetsAPI as a, dataAssetsExport as b, DeleteDataAssetsHttpResponse as c, GetDataAssetHttpError as d, GetDataAssetHttpResponse as f, UpdateDataAssetHttpError as g, PatchDataAssetHttpResponse as h, DataAsset as i, Error as l, PatchDataAssetHttpError as m, CreateDataAssetHttpError as n, DataStoreInfo as o, JsonPatch as p, CreateDataAssetHttpResponse as r, DeleteDataAssetsHttpError as s, BatchIdDto as t, ErrorResponse as u, clearCache as v, updateDataAsset as w, deleteDataAssets as x, createDataAsset as y };