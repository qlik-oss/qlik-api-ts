import { x as ApiCallOptions } from "./chunks/auth-types-yKuw6LLB.js";
import "./chunks/invoke-fetch-DdmiOIkr.js";
//#region src/public/rest/banners.d.ts
export type BannerResponse = {
  readonly createdAt: string;
  /** userId of the user who created the banner */
  createdBy: string;
  enabled: boolean;
  /** date-time in UTC. */
  endTime: string;
  readonly id: string;
  linkEnabled: boolean;
  linkLabel?: string;
  linkUrl?: string;
  message: string;
  /** date-time in UTC. */
  startTime: string;
  readonly tenantId: string;
  type: "info" | "warning" | "error" | "resolved";
  readonly updatedAt: string;
  /** userId of the user who last modified the banner */
  updatedBy: string;
};
export type BannerUpsertDefinition = {
  enabled: boolean;
  /** date-time in UTC. */
  endTime: string;
  linkEnabled: boolean;
  linkLabel?: string;
  linkUrl?: string;
  message: string;
  /** date-time in UTC. */
  startTime: string;
  type: "info" | "warning" | "error" | "resolved";
};
export type ErrorResponse400 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
export type ErrorResponse401 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
export type ErrorResponse403 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
export type ErrorResponse404 = {
  errors?: {
    code?: string;
    detail?: string;
    status?: number;
    title?: string;
  }[];
  traceId?: string;
};
export type ErrorResponse500 = {
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
export declare function getBanners(options?: ApiCallOptions): Promise<GetBannersHttpResponse>;
export type GetBannersHttpResponse = {
  data: BannerResponse;
  headers: Headers;
  status: 200;
};
export type GetBannersHttpError = GetBanners400HttpError | GetBanners401HttpError | GetBanners403HttpError | GetBanners404HttpError | GetBanners500HttpError;
export type GetBanners400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
export type GetBanners401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
export type GetBanners403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
export type GetBanners404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
export type GetBanners500HttpError = {
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
export declare function upsertBanners(body: BannerUpsertDefinition, options?: ApiCallOptions): Promise<UpsertBannersHttpResponse>;
export type UpsertBannersHttpResponse = {
  data: BannerResponse;
  headers: Headers;
  status: 201;
};
export type UpsertBannersHttpError = UpsertBanners400HttpError | UpsertBanners401HttpError | UpsertBanners403HttpError | UpsertBanners404HttpError | UpsertBanners500HttpError;
export type UpsertBanners400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
export type UpsertBanners401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
export type UpsertBanners403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
export type UpsertBanners404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
export type UpsertBanners500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Clears the cache for banners api requests.
 */
export declare function clearCache(): void;
export type BannersAPI = {
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
export { bannersExport as default };