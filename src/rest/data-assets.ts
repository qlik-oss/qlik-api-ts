/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import { clearApiCache, invokeFetch, type ApiCallOptions } from "#public/invoke-fetch";

/* -------------------------------------------------------------------------- */
/*                                Public types                                */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Batch delete data assets by IDs.
 *
 * @param body an object with the body content
 * @throws DeleteDataAssetsHttpError
 */
export async function deleteDataAssets(
  body: BatchIdDto,
  options?: ApiCallOptions,
): Promise<DeleteDataAssetsHttpResponse> {
  return invokeFetch("data-assets", {
    method: "delete",
    pathTemplate: "/api/v1/data-assets",
    body,
    contentType: "application/json",
    options,
  });
}

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
export async function createDataAsset(body: DataAsset, options?: ApiCallOptions): Promise<CreateDataAssetHttpResponse> {
  return invokeFetch("data-assets", {
    method: "post",
    pathTemplate: "/api/v1/data-assets",
    body,
    contentType: "application/json",
    options,
  });
}

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
export async function getDataAsset(
  dataAssetId: string,
  query: {
    /** Comma-separated fields to return in the response. */
    projections?: string[];
  },
  options?: ApiCallOptions,
): Promise<GetDataAssetHttpResponse> {
  return invokeFetch("data-assets", {
    method: "get",
    pathTemplate: "/api/v1/data-assets/{data-asset-id}",
    pathVariables: { "data-asset-id": dataAssetId },
    query,
    options,
  });
}

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
export async function patchDataAsset(
  dataAssetId: string,
  body: JsonPatch[],
  options?: ApiCallOptions,
): Promise<PatchDataAssetHttpResponse> {
  return invokeFetch("data-assets", {
    method: "patch",
    pathTemplate: "/api/v1/data-assets/{data-asset-id}",
    pathVariables: { "data-asset-id": dataAssetId },
    body,
    contentType: "application/json",
    options,
  });
}

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
export async function updateDataAsset(
  dataAssetId: string,
  body: DataAsset,
  options?: ApiCallOptions,
): Promise<UpdateDataAssetHttpResponse> {
  return invokeFetch("data-assets", {
    method: "put",
    pathTemplate: "/api/v1/data-assets/{data-asset-id}",
    pathVariables: { "data-asset-id": dataAssetId },
    body,
    contentType: "application/json",
    options,
  });
}

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
export function clearCache() {
  return clearApiCache("data-assets");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

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
const dataAssetsExport: DataAssetsAPI = {
  deleteDataAssets,
  createDataAsset,
  getDataAsset,
  patchDataAsset,
  updateDataAsset,
  clearCache,
};
export default dataAssetsExport;
