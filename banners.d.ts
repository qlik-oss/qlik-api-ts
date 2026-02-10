import { ApiCallOptions } from "./invoke-fetch-types.js";
import "./chunks/invoke-fetch-DFc3yzaj.js";

//#region src/public/rest/banners.d.ts
type BannerResponse = {
  readonly createdAt: string; /** userId of the user who created the banner */
  createdBy: string;
  enabled: boolean; /** date-time in UTC. */
  endTime: string;
  readonly id: string;
  linkEnabled: boolean;
  linkLabel?: string;
  linkUrl?: string;
  message: string; /** date-time in UTC. */
  startTime: string;
  readonly tenantId: string;
  type: "info" | "warning" | "error" | "resolved";
  readonly updatedAt: string; /** userId of the user who last modified the banner */
  updatedBy: string;
};
type BannerUpsertDefinition = {
  enabled: boolean; /** date-time in UTC. */
  endTime: string;
  linkEnabled: boolean;
  linkLabel?: string;
  linkUrl?: string;
  message: string; /** date-time in UTC. */
  startTime: string;
  type: "info" | "warning" | "error" | "resolved";
};
type ErrorResponse400 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
type ErrorResponse401 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
type ErrorResponse403 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
type ErrorResponse404 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
type ErrorResponse500 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
/**
 * Retrieves announcement banner configuration for the tenant, including content, scheduling, and link information for display at the top of the client interface.
 *
 * @throws GetBannersHttpError
 */
declare function getBanners(options?: ApiCallOptions): Promise<GetBannersHttpResponse>;
type GetBannersHttpResponse = {
  data: BannerResponse;
  headers: Headers;
  status: 200;
};
type GetBannersHttpError = GetBanners400HttpError | GetBanners401HttpError | GetBanners403HttpError | GetBanners404HttpError | GetBanners500HttpError;
type GetBanners400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type GetBanners401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type GetBanners403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type GetBanners404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
type GetBanners500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Sets content, scheduling, and optional action links for the tenant-wide announcement banner. Requires `TenantAdmin` role.
 *
 * @param body an object with the body content
 * @throws UpsertBannersHttpError
 */
declare function upsertBanners(body: BannerUpsertDefinition, options?: ApiCallOptions): Promise<UpsertBannersHttpResponse>;
type UpsertBannersHttpResponse = {
  data: BannerResponse;
  headers: Headers;
  status: 201;
};
type UpsertBannersHttpError = UpsertBanners400HttpError | UpsertBanners401HttpError | UpsertBanners403HttpError | UpsertBanners404HttpError | UpsertBanners500HttpError;
type UpsertBanners400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type UpsertBanners401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type UpsertBanners403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type UpsertBanners404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
type UpsertBanners500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Clears the cache for banners api requests.
 */
declare function clearCache(): void;
type BannersAPI = {
  /**
   * Retrieves announcement banner configuration for the tenant, including content, scheduling, and link information for display at the top of the client interface.
   *
   * @throws GetBannersHttpError
   */
  getBanners: typeof getBanners;
  /**
   * Sets content, scheduling, and optional action links for the tenant-wide announcement banner. Requires `TenantAdmin` role.
   *
   * @param body an object with the body content
   * @throws UpsertBannersHttpError
   */
  upsertBanners: typeof upsertBanners;
  /**
   * Clears the cache for banners api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the banners api
 */
declare const bannersExport: BannersAPI;
//#endregion
export { BannerResponse, BannerUpsertDefinition, BannersAPI, ErrorResponse400, ErrorResponse401, ErrorResponse403, ErrorResponse404, ErrorResponse500, GetBanners400HttpError, GetBanners401HttpError, GetBanners403HttpError, GetBanners404HttpError, GetBanners500HttpError, GetBannersHttpError, GetBannersHttpResponse, UpsertBanners400HttpError, UpsertBanners401HttpError, UpsertBanners403HttpError, UpsertBanners404HttpError, UpsertBanners500HttpError, UpsertBannersHttpError, UpsertBannersHttpResponse, clearCache, bannersExport as default, getBanners, upsertBanners };