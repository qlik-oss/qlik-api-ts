import { A as ApiCallOptions } from './invoke-fetch-types-D62-HKKp.js';

/**
 * A specific error.
 */
type Error = {
    /** The error code. */
    code: string;
    /** Summary of the problem. */
    title: string;
};
type ErrorResponse = {
    errors?: Error[];
};
type GetQuotaByIdResult = {
    /** Quota item. */
    data: Quota[];
};
type GetQuotasResult = {
    /** Array of quota items. */
    data: Quota[];
};
type Quota = {
    /** The attributes of the quota. */
    attributes: {
        /** The quota limit. If there is no quota limit, -1 is returned. */
        quota: number;
        /** The unit of the quota limit. For memory quotas, the unit is always "bytes". For other discrete units, the item counted is used as unit, for example "spaces". */
        unit: string;
        /** The current quota usage, if applicable. This attribute is only present if it is requested using the reportUsage query parameter. */
        usage?: number;
        /** The warning thresholds at which "close to quota" warnings can be issued when exceeded. If omitted, no warning threshold shall be used. Currently, the array will contain only one threshold value. In the future, this may be extended. The threshold is a number between 0 and 1, relating to the quota limit. For example, a value of 0.9 means that a warning should be issued when exceeding 90% of the quota limit. */
        warningThresholds?: number[];
    };
    /** The unique identifier of the quota item. For example, "app_mem_size", "app_upload_disk_size", or "shared_spaces". */
    id: string;
    /** The resource type of the quota item. Always equal to "quotas". */
    type: string;
};
/**
 * Returns all quota items for the tenant (provided in JWT).
 *
 * @param query an object with query parameters
 * @throws GetQuotasHttpError
 */
declare function getQuotas(query: {
    /** The Boolean flag indicating whether quota usage shall be part of the response. The default value is false (only limits returned). */
    reportUsage?: boolean;
}, options?: ApiCallOptions): Promise<GetQuotasHttpResponse>;
type GetQuotasHttpResponse = {
    data: GetQuotasResult;
    headers: Headers;
    status: 200;
};
type GetQuotasHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 401 | 500;
};
/**
 * Returns a specific quota item for the tenant (provided in JWT).
 *
 * @param id The unique identifier of the quota item. For example, "app_mem_size", "app_upload_disk_size", or "shared_spaces".
 * @param query an object with query parameters
 * @throws GetQuotaHttpError
 */
declare function getQuota(id: string, query: {
    /** The Boolean flag indicating whether quota usage shall be part of the response. The default value is false (usage not included). */
    reportUsage?: boolean;
}, options?: ApiCallOptions): Promise<GetQuotaHttpResponse>;
type GetQuotaHttpResponse = {
    data: GetQuotaByIdResult;
    headers: Headers;
    status: 200;
};
type GetQuotaHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: 401 | 404 | 500;
};
/**
 * Clears the cache for quotas api requests.
 */
declare function clearCache(): void;
interface QuotasAPI {
    /**
     * Returns all quota items for the tenant (provided in JWT).
     *
     * @param query an object with query parameters
     * @throws GetQuotasHttpError
     */
    getQuotas: typeof getQuotas;
    /**
     * Returns a specific quota item for the tenant (provided in JWT).
     *
     * @param id The unique identifier of the quota item. For example, "app_mem_size", "app_upload_disk_size", or "shared_spaces".
     * @param query an object with query parameters
     * @throws GetQuotaHttpError
     */
    getQuota: typeof getQuota;
    /**
     * Clears the cache for quotas api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the quotas api
 */
declare const quotasExport: QuotasAPI;

export { type Error, type ErrorResponse, type GetQuotaByIdResult, type GetQuotaHttpError, type GetQuotaHttpResponse, type GetQuotasHttpError, type GetQuotasHttpResponse, type GetQuotasResult, type Quota, type QuotasAPI, clearCache, quotasExport as default, getQuota, getQuotas };
