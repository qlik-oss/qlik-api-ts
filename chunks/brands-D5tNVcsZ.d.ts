import { S as DownloadableBlob, y as ApiCallOptions } from "./auth-types-BK8AvfyD.js";

//#region src/public/rest/brands.d.ts

/**
 * A brand is a collection of assets for applying custom branding. Only a single brand can be active in a tenant.
 */
type Brand = {
  readonly active?: boolean;
  /** The UTC timestamp when the brand was created. */
  readonly createdAt?: string;
  /** ID of a user that created the brand. */
  readonly createdBy?: string;
  description: string;
  /** Collection of resources that make up the brand. */
  files: BrandFile[];
  readonly id: string;
  name: string;
  /** The UTC timestamp when the brand was last updated. */
  readonly updatedAt?: string;
  /** ID of a user that last updated the brand. */
  readonly updatedBy?: string;
};
/**
 * Represents one of the assets used as part of the brand. These include logos, favicons, and some styles.
 */
type BrandFile = {
  contentType?: string;
  eTag?: string;
  id?: "logo" | "favIcon" | "styles";
  path?: string;
};
/**
 * A JSON Patch document as defined in https://datatracker.ietf.org/doc/html/rfc6902.
 */
type BrandPatch = {
  /** The operation to be performed. */
  op: "add" | "remove" | "replace";
  /** The path for the given resource field to patch. */
  path: "/name" | "/description";
  /** The value to be used for this operation. */
  value?: string;
};
/**
 * A collection of brands.
 */
type BrandsList = {
  data?: Brand[];
  links?: {
    next?: Link;
    prev?: Link;
    self?: Link;
  };
};
type ErrorResponse400 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};
type ErrorResponse401 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};
type ErrorResponse403 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};
type ErrorResponse404 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};
type ErrorResponse500 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};
type Link = {
  /** URL of a resource request. */
  href: string;
};
/**
 * Empty object inferring lack of active branding.
 */
type NoActiveBrand = unknown;
/**
 * Lists all brand entries for a tenant.
 *
 * @param query an object with query parameters
 * @throws GetBrandsHttpError
 */
declare function getBrands(query: {
  /** Cursor to previous. */
  endingBefore?: string;
  /** Maximum number of brands to retrieve. */
  limit?: number;
  /** Field to sort by, prefixed with -/+ to indicate the order. */
  sort?: "id" | "+id" | "-id" | "createdAt" | "+createdAt" | "-createdAt" | "updatedAt" | "+updatedAt" | "-updatedAt";
  /** Cursor to the next page. */
  startingAfter?: string;
}, options?: ApiCallOptions): Promise<GetBrandsHttpResponse>;
type GetBrandsHttpResponse = {
  data: BrandsList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetBrandsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetBrandsHttpResponse>;
};
type GetBrandsHttpError = GetBrands400HttpError | GetBrands401HttpError | GetBrands403HttpError | GetBrands500HttpError;
type GetBrands400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type GetBrands401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type GetBrands403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type GetBrands500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Creates a new brand.
 *
 * @param body an object with the body content
 * @throws CreateBrandHttpError
 */
declare function createBrand(body: {
  /** Description of the brand. */
  description?: string;
  /** The path and name of a properly formatted ICO file. Maximum size is 100 KB. */
  favIcon?: BodyInit;
  /** The path and name of a JPG or PNG file that will be adjusted to fit in a 'box' measuring 109px in width and 62 px in height while maintaining aspect ratio. Maximum size of 300 KB, but smaller is recommended. */
  logo?: BodyInit;
  /** Name of the brand. */
  name: string;
  /** The path and name of a JSON file to define brand style settings. Maximum size is 100 KB. This property is not currently operational. */
  styles?: BodyInit;
}, options?: ApiCallOptions): Promise<CreateBrandHttpResponse>;
type CreateBrandHttpResponse = {
  data: Brand;
  headers: Headers;
  status: 201;
};
type CreateBrandHttpError = CreateBrand400HttpError | CreateBrand401HttpError | CreateBrand403HttpError | CreateBrand500HttpError;
type CreateBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type CreateBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type CreateBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type CreateBrand500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Returns the current active brand. If using the Qlik default brand, no value is returned.
 *
 * @throws GetActiveBrandHttpError
 */
declare function getActiveBrand(options?: ApiCallOptions): Promise<GetActiveBrandHttpResponse>;
type GetActiveBrandHttpResponse = {
  data: Brand | NoActiveBrand;
  headers: Headers;
  status: 200;
};
type GetActiveBrandHttpError = {
  data: unknown;
  headers: Headers;
  status: number;
};
/**
 * Deletes a specific brand. If the active brand is deleted, the tenant will return to the Qlik default.
 *
 * @param brandId The brand's unique identifier.
 * @throws DeleteBrandHttpError
 */
declare function deleteBrand(brandId: string, options?: ApiCallOptions): Promise<DeleteBrandHttpResponse>;
type DeleteBrandHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteBrandHttpError = DeleteBrand400HttpError | DeleteBrand401HttpError | DeleteBrand403HttpError | DeleteBrand404HttpError | DeleteBrand500HttpError;
type DeleteBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type DeleteBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type DeleteBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type DeleteBrand404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
type DeleteBrand500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Returns a specific brand.
 *
 * @param brandId The brand's unique identifier.
 * @throws GetBrandHttpError
 */
declare function getBrand(brandId: string, options?: ApiCallOptions): Promise<GetBrandHttpResponse>;
type GetBrandHttpResponse = {
  data: Brand;
  headers: Headers;
  status: 200;
};
type GetBrandHttpError = GetBrand400HttpError | GetBrand401HttpError | GetBrand403HttpError | GetBrand404HttpError | GetBrand500HttpError;
type GetBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type GetBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type GetBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type GetBrand404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
type GetBrand500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Patches a brand.
 *
 * @param brandId The brand's unique identifier.
 * @param body an object with the body content
 * @throws PatchBrandHttpError
 */
declare function patchBrand(brandId: string, body: BrandPatch[], options?: ApiCallOptions): Promise<PatchBrandHttpResponse>;
type PatchBrandHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchBrandHttpError = PatchBrand400HttpError | PatchBrand401HttpError | PatchBrand403HttpError | PatchBrand404HttpError | PatchBrand500HttpError;
type PatchBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type PatchBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type PatchBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type PatchBrand404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
type PatchBrand500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Sets the brand active and de-activates any other active brand. If the brand is already active, no action is taken.
 *
 * @param brandId The brand's unique identifier.
 * @param body an object with the body content
 * @throws ActivateBrandHttpError
 */
declare function activateBrand(brandId: string, body: unknown, options?: ApiCallOptions): Promise<ActivateBrandHttpResponse>;
type ActivateBrandHttpResponse = {
  data: Brand;
  headers: Headers;
  status: 200;
};
type ActivateBrandHttpError = ActivateBrand400HttpError | ActivateBrand401HttpError | ActivateBrand403HttpError | ActivateBrand404HttpError | ActivateBrand500HttpError;
type ActivateBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type ActivateBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type ActivateBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type ActivateBrand404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
type ActivateBrand500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Sets the brand so it is no longer active, returning the tenant the Qlik default brand. If the brand is already inactive, no action is taken.
 *
 * @param brandId The brand's unique identifier.
 * @param body an object with the body content
 * @throws DeactivateBrandHttpError
 */
declare function deactivateBrand(brandId: string, body: unknown, options?: ApiCallOptions): Promise<DeactivateBrandHttpResponse>;
type DeactivateBrandHttpResponse = {
  data: Brand;
  headers: Headers;
  status: 200;
};
type DeactivateBrandHttpError = DeactivateBrand400HttpError | DeactivateBrand401HttpError | DeactivateBrand403HttpError | DeactivateBrand404HttpError | DeactivateBrand500HttpError;
type DeactivateBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type DeactivateBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type DeactivateBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type DeactivateBrand404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
type DeactivateBrand500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Deletes the specified brand file.
 *
 * @param brandId The brand's unique identifier.
 * @param brandFileId The unique identifier of a file within a brand.
 * @throws DeleteBrandFileHttpError
 */
declare function deleteBrandFile(brandId: string, brandFileId: string, options?: ApiCallOptions): Promise<DeleteBrandFileHttpResponse>;
type DeleteBrandFileHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteBrandFileHttpError = DeleteBrandFile400HttpError | DeleteBrandFile401HttpError | DeleteBrandFile403HttpError | DeleteBrandFile404HttpError | DeleteBrandFile500HttpError;
type DeleteBrandFile400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type DeleteBrandFile401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type DeleteBrandFile403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type DeleteBrandFile404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
type DeleteBrandFile500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Downloads the specified brand file.
 *
 * @param brandId The brand's unique identifier.
 * @param brandFileId The unique identifier of a file within a brand.
 * @throws GetBrandFileHttpError
 */
declare function getBrandFile(brandId: string, brandFileId: string, options?: ApiCallOptions): Promise<GetBrandFileHttpResponse>;
type GetBrandFileHttpResponse = {
  data: DownloadableBlob;
  headers: Headers;
  status: 200;
};
type GetBrandFileHttpError = GetBrandFile400HttpError | GetBrandFile401HttpError | GetBrandFile403HttpError | GetBrandFile404HttpError | GetBrandFile500HttpError;
type GetBrandFile400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type GetBrandFile401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type GetBrandFile403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type GetBrandFile404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
type GetBrandFile500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Creates a brand file for the specified identifier.
 *
 * @param brandId The brand's unique identifier.
 * @param brandFileId The unique identifier of a file within a brand.
 * @param body an object with the body content
 * @throws CreateBrandFileHttpError
 */
declare function createBrandFile(brandId: string, brandFileId: string, body: {
  /** The path and name of a file to upload. */
  file?: BodyInit;
}, options?: ApiCallOptions): Promise<CreateBrandFileHttpResponse>;
type CreateBrandFileHttpResponse = {
  data: BrandFile;
  headers: Headers;
  status: 201;
};
type CreateBrandFileHttpError = CreateBrandFile400HttpError | CreateBrandFile401HttpError | CreateBrandFile403HttpError | CreateBrandFile404HttpError | CreateBrandFile500HttpError;
type CreateBrandFile400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type CreateBrandFile401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type CreateBrandFile403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type CreateBrandFile404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
type CreateBrandFile500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Updates the specified brand file.
 *
 * @param brandId The brand's unique identifier.
 * @param brandFileId The unique identifier of a file within a brand.
 * @param body an object with the body content
 * @throws UpdateBrandFileHttpError
 */
declare function updateBrandFile(brandId: string, brandFileId: string, body: {
  /** A file to upload. */
  file?: BodyInit;
}, options?: ApiCallOptions): Promise<UpdateBrandFileHttpResponse>;
type UpdateBrandFileHttpResponse = {
  data: BrandFile;
  headers: Headers;
  status: 200;
};
type UpdateBrandFileHttpError = UpdateBrandFile400HttpError | UpdateBrandFile401HttpError | UpdateBrandFile403HttpError | UpdateBrandFile404HttpError | UpdateBrandFile500HttpError;
type UpdateBrandFile400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
type UpdateBrandFile401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};
type UpdateBrandFile403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
type UpdateBrandFile404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
type UpdateBrandFile500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
/**
 * Clears the cache for brands api requests.
 */
declare function clearCache(): void;
type BrandsAPI = {
  /**
   * Lists all brand entries for a tenant.
   *
   * @param query an object with query parameters
   * @throws GetBrandsHttpError
   */
  getBrands: typeof getBrands;
  /**
   * Creates a new brand.
   *
   * @param body an object with the body content
   * @throws CreateBrandHttpError
   */
  createBrand: typeof createBrand;
  /**
   * Returns the current active brand. If using the Qlik default brand, no value is returned.
   *
   * @throws GetActiveBrandHttpError
   */
  getActiveBrand: typeof getActiveBrand;
  /**
   * Deletes a specific brand. If the active brand is deleted, the tenant will return to the Qlik default.
   *
   * @param brandId The brand's unique identifier.
   * @throws DeleteBrandHttpError
   */
  deleteBrand: typeof deleteBrand;
  /**
   * Returns a specific brand.
   *
   * @param brandId The brand's unique identifier.
   * @throws GetBrandHttpError
   */
  getBrand: typeof getBrand;
  /**
   * Patches a brand.
   *
   * @param brandId The brand's unique identifier.
   * @param body an object with the body content
   * @throws PatchBrandHttpError
   */
  patchBrand: typeof patchBrand;
  /**
   * Sets the brand active and de-activates any other active brand. If the brand is already active, no action is taken.
   *
   * @param brandId The brand's unique identifier.
   * @param body an object with the body content
   * @throws ActivateBrandHttpError
   */
  activateBrand: typeof activateBrand;
  /**
   * Sets the brand so it is no longer active, returning the tenant the Qlik default brand. If the brand is already inactive, no action is taken.
   *
   * @param brandId The brand's unique identifier.
   * @param body an object with the body content
   * @throws DeactivateBrandHttpError
   */
  deactivateBrand: typeof deactivateBrand;
  /**
   * Deletes the specified brand file.
   *
   * @param brandId The brand's unique identifier.
   * @param brandFileId The unique identifier of a file within a brand.
   * @throws DeleteBrandFileHttpError
   */
  deleteBrandFile: typeof deleteBrandFile;
  /**
   * Downloads the specified brand file.
   *
   * @param brandId The brand's unique identifier.
   * @param brandFileId The unique identifier of a file within a brand.
   * @throws GetBrandFileHttpError
   */
  getBrandFile: typeof getBrandFile;
  /**
   * Creates a brand file for the specified identifier.
   *
   * @param brandId The brand's unique identifier.
   * @param brandFileId The unique identifier of a file within a brand.
   * @param body an object with the body content
   * @throws CreateBrandFileHttpError
   */
  createBrandFile: typeof createBrandFile;
  /**
   * Updates the specified brand file.
   *
   * @param brandId The brand's unique identifier.
   * @param brandFileId The unique identifier of a file within a brand.
   * @param body an object with the body content
   * @throws UpdateBrandFileHttpError
   */
  updateBrandFile: typeof updateBrandFile;
  /**
   * Clears the cache for brands api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the brands api
 */
declare const brandsExport: BrandsAPI;
//#endregion
export { GetActiveBrandHttpResponse as $, DeactivateBrand500HttpError as A, UpdateBrandFile401HttpError as At, DeleteBrandFile403HttpError as B, createBrandFile as Bt, CreateBrandFileHttpResponse as C, PatchBrand401HttpError as Ct, DeactivateBrand401HttpError as D, PatchBrandHttpError as Dt, DeactivateBrand400HttpError as E, PatchBrand500HttpError as Et, DeleteBrand403HttpError as F, UpdateBrandFileHttpResponse as Ft, DeleteBrandHttpError as G, getBrand as Gt, DeleteBrandFile500HttpError as H, deleteBrand as Ht, DeleteBrand404HttpError as I, activateBrand as It, ErrorResponse401 as J, patchBrand as Jt, DeleteBrandHttpResponse as K, getBrandFile as Kt, DeleteBrand500HttpError as L, brandsExport as Lt, DeactivateBrandHttpResponse as M, UpdateBrandFile404HttpError as Mt, DeleteBrand400HttpError as N, UpdateBrandFile500HttpError as Nt, DeactivateBrand403HttpError as O, PatchBrandHttpResponse as Ot, DeleteBrand401HttpError as P, UpdateBrandFileHttpError as Pt, GetActiveBrandHttpError as Q, DeleteBrandFile400HttpError as R, clearCache as Rt, CreateBrandFileHttpError as S, PatchBrand400HttpError as St, CreateBrandHttpResponse as T, PatchBrand404HttpError as Tt, DeleteBrandFileHttpError as U, deleteBrandFile as Ut, DeleteBrandFile404HttpError as V, deactivateBrand as Vt, DeleteBrandFileHttpResponse as W, getActiveBrand as Wt, ErrorResponse404 as X, ErrorResponse403 as Y, updateBrandFile as Yt, ErrorResponse500 as Z, CreateBrandFile400HttpError as _, GetBrands500HttpError as _t, ActivateBrand500HttpError as a, GetBrandFile400HttpError as at, CreateBrandFile404HttpError as b, Link as bt, Brand as c, GetBrandFile404HttpError as ct, BrandsAPI as d, GetBrandFileHttpResponse as dt, GetBrand400HttpError as et, BrandsList as f, GetBrandHttpError as ft, CreateBrand500HttpError as g, GetBrands403HttpError as gt, CreateBrand403HttpError as h, GetBrands401HttpError as ht, ActivateBrand404HttpError as i, GetBrand500HttpError as it, DeactivateBrandHttpError as j, UpdateBrandFile403HttpError as jt, DeactivateBrand404HttpError as k, UpdateBrandFile400HttpError as kt, BrandFile as l, GetBrandFile500HttpError as lt, CreateBrand401HttpError as m, GetBrands400HttpError as mt, ActivateBrand401HttpError as n, GetBrand403HttpError as nt, ActivateBrandHttpError as o, GetBrandFile401HttpError as ot, CreateBrand400HttpError as p, GetBrandHttpResponse as pt, ErrorResponse400 as q, getBrands as qt, ActivateBrand403HttpError as r, GetBrand404HttpError as rt, ActivateBrandHttpResponse as s, GetBrandFile403HttpError as st, ActivateBrand400HttpError as t, GetBrand401HttpError as tt, BrandPatch as u, GetBrandFileHttpError as ut, CreateBrandFile401HttpError as v, GetBrandsHttpError as vt, CreateBrandHttpError as w, PatchBrand403HttpError as wt, CreateBrandFile500HttpError as x, NoActiveBrand as xt, CreateBrandFile403HttpError as y, GetBrandsHttpResponse as yt, DeleteBrandFile401HttpError as z, createBrand as zt };