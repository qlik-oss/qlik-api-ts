import { A as ApiCallOptions } from './global.types-CMQsAHYd.js';
import './auth-types-Bqw3vbLs.js';

type BatchIdDto = {
    ids?: string[];
};
type DataAsset = {
    appId: string;
    appType: string;
    /** The value is automatically set by the application. User defined value is ignored. */
    readonly createdBy?: string;
    /** The value is automatically set by the application. User defined value is ignored. */
    readonly createdTime?: string;
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
    properties?: unknown;
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
declare const deleteDataAssets: (body: BatchIdDto, options?: ApiCallOptions) => Promise<DeleteDataAssetsHttpResponse>;
type DeleteDataAssetsHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteDataAssetsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Save new data asset.
 *
 * @param body an object with the body content
 * @throws CreateDataAssetHttpError
 */
declare const createDataAsset: (body: DataAsset, options?: ApiCallOptions) => Promise<CreateDataAssetHttpResponse>;
type CreateDataAssetHttpResponse = {
    data: DataAsset;
    headers: Headers;
    status: number;
};
type CreateDataAssetHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Get data asset by ID.
 *
 * @param dataAssetId
 * @param query an object with query parameters
 * @throws GetDataAssetHttpError
 */
declare const getDataAsset: (dataAssetId: string, query: {
    /** Comma-separated fields to return in the response. */
    projections?: string[];
}, options?: ApiCallOptions) => Promise<GetDataAssetHttpResponse>;
type GetDataAssetHttpResponse = {
    data: DataAsset;
    headers: Headers;
    status: number;
};
type GetDataAssetHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Patch data asset.
 *
 * @param dataAssetId
 * @param body an object with the body content
 * @throws PatchDataAssetHttpError
 */
declare const patchDataAsset: (dataAssetId: string, body: JsonPatch[], options?: ApiCallOptions) => Promise<PatchDataAssetHttpResponse>;
type PatchDataAssetHttpResponse = {
    data: DataAsset;
    headers: Headers;
    status: number;
};
type PatchDataAssetHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Update data asset.
 *
 * @param dataAssetId
 * @param body an object with the body content
 * @throws UpdateDataAssetHttpError
 */
declare const updateDataAsset: (dataAssetId: string, body: DataAsset, options?: ApiCallOptions) => Promise<UpdateDataAssetHttpResponse>;
type UpdateDataAssetHttpResponse = {
    data: DataAsset;
    headers: Headers;
    status: number;
};
type UpdateDataAssetHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for data-assets api requests.
 */
declare function clearCache(): void;
interface DataAssetsAPI {
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
}
/**
 * Functions for the data-assets api
 */
declare const dataAssetsExport: DataAssetsAPI;

export { type BatchIdDto, type CreateDataAssetHttpError, type CreateDataAssetHttpResponse, type DataAsset, type DataAssetsAPI, type DataStoreInfo, type DeleteDataAssetsHttpError, type DeleteDataAssetsHttpResponse, type Error, type ErrorResponse, type GetDataAssetHttpError, type GetDataAssetHttpResponse, type JsonPatch, type PatchDataAssetHttpError, type PatchDataAssetHttpResponse, type UpdateDataAssetHttpError, type UpdateDataAssetHttpResponse, clearCache, createDataAsset, dataAssetsExport as default, deleteDataAssets, getDataAsset, patchDataAsset, updateDataAsset };
