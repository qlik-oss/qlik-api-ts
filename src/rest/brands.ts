/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import {
  clearApiCache,
  invokeFetch,
  type ApiCallOptions,
  type DownloadableBlob,
  type PageCallOptions,
} from "#public/invoke-fetch";

/* -------------------------------------------------------------------------- */
/*                                Public types                                */
/* -------------------------------------------------------------------------- */

/**
 * A brand is a collection of assets for applying custom branding. Only a single brand can be active in a tenant.
 */
export type Brand = {
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
export type BrandFile = {
  contentType?: string;
  eTag?: string;
  id?: "logo" | "favIcon" | "styles";
  path?: string;
};

/**
 * A JSON Patch document as defined in https://datatracker.ietf.org/doc/html/rfc6902.
 */
export type BrandPatch = {
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
export type BrandsList = {
  data?: Brand[];
  links?: {
    next?: Link;
    prev?: Link;
    self?: Link;
  };
};

export type ErrorResponse400 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};

export type ErrorResponse401 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};

export type ErrorResponse403 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};

export type ErrorResponse404 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};

export type ErrorResponse424 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};

export type ErrorResponse500 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};

export type Link = {
  /** URL of a resource request. */
  href: string;
};

/**
 * Empty object inferring lack of active branding.
 */
export type NoActiveBrand = unknown;

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Lists all brand entries for a tenant.
 *
 * @param query an object with query parameters
 * @throws GetBrandsHttpError
 */
export async function getBrands(
  query: {
    /** Cursor to previous. */
    endingBefore?: string;
    /** Maximum number of brands to retrieve. */
    limit?: number;
    /** Field to sort by, prefixed with -/+ to indicate the order. */
    sort?: "id" | "+id" | "-id" | "createdAt" | "+createdAt" | "-createdAt" | "updatedAt" | "+updatedAt" | "-updatedAt";
    /** Cursor to the next page. */
    startingAfter?: string;
  },
  options?: ApiCallOptions,
): Promise<GetBrandsHttpResponse> {
  return invokeFetch("brands", {
    method: "get",
    pathTemplate: "/api/v1/brands",
    query,
    options,
  });
}

export type GetBrandsHttpResponse = {
  data: BrandsList;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetBrandsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetBrandsHttpResponse>;
};

export type GetBrandsHttpError =
  | GetBrands400HttpError
  | GetBrands401HttpError
  | GetBrands403HttpError
  | GetBrands500HttpError;

export type GetBrands400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};

export type GetBrands401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};

export type GetBrands403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type GetBrands500HttpError = {
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
export async function createBrand(
  body: {
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
  },
  options?: ApiCallOptions,
): Promise<CreateBrandHttpResponse> {
  return invokeFetch("brands", {
    method: "post",
    pathTemplate: "/api/v1/brands",
    body,
    contentType: "multipart/form-data",
    options,
  });
}

export type CreateBrandHttpResponse = {
  data: Brand;
  headers: Headers;
  status: 201;
};

export type CreateBrandHttpError =
  | CreateBrand400HttpError
  | CreateBrand401HttpError
  | CreateBrand403HttpError
  | CreateBrand424HttpError
  | CreateBrand500HttpError;

export type CreateBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};

export type CreateBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};

export type CreateBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type CreateBrand424HttpError = {
  data: ErrorResponse424;
  headers: Headers;
  status: 424;
};

export type CreateBrand500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};

/**
 * Returns the current active brand. If using the Qlik default brand, no value is returned.
 *
 * @throws GetActiveBrandHttpError
 */
export async function getActiveBrand(options?: ApiCallOptions): Promise<GetActiveBrandHttpResponse> {
  return invokeFetch("brands", {
    method: "get",
    pathTemplate: "/api/v1/brands/active",
    options,
  });
}

export type GetActiveBrandHttpResponse = {
  data: Brand | NoActiveBrand;
  headers: Headers;
  status: 200;
};

export type GetActiveBrandHttpError = {
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
export async function deleteBrand(brandId: string, options?: ApiCallOptions): Promise<DeleteBrandHttpResponse> {
  return invokeFetch("brands", {
    method: "delete",
    pathTemplate: "/api/v1/brands/{brand-id}",
    pathVariables: { "brand-id": brandId },
    options,
  });
}

export type DeleteBrandHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type DeleteBrandHttpError =
  | DeleteBrand400HttpError
  | DeleteBrand401HttpError
  | DeleteBrand403HttpError
  | DeleteBrand404HttpError
  | DeleteBrand424HttpError
  | DeleteBrand500HttpError;

export type DeleteBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};

export type DeleteBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};

export type DeleteBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type DeleteBrand404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};

export type DeleteBrand424HttpError = {
  data: ErrorResponse424;
  headers: Headers;
  status: 424;
};

export type DeleteBrand500HttpError = {
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
export async function getBrand(brandId: string, options?: ApiCallOptions): Promise<GetBrandHttpResponse> {
  return invokeFetch("brands", {
    method: "get",
    pathTemplate: "/api/v1/brands/{brand-id}",
    pathVariables: { "brand-id": brandId },
    options,
  });
}

export type GetBrandHttpResponse = {
  data: Brand;
  headers: Headers;
  status: 200;
};

export type GetBrandHttpError =
  | GetBrand400HttpError
  | GetBrand401HttpError
  | GetBrand403HttpError
  | GetBrand404HttpError
  | GetBrand500HttpError;

export type GetBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};

export type GetBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};

export type GetBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type GetBrand404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};

export type GetBrand500HttpError = {
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
export async function patchBrand(
  brandId: string,
  body: BrandPatch[],
  options?: ApiCallOptions,
): Promise<PatchBrandHttpResponse> {
  return invokeFetch("brands", {
    method: "patch",
    pathTemplate: "/api/v1/brands/{brand-id}",
    pathVariables: { "brand-id": brandId },
    body,
    contentType: "application/json",
    options,
  });
}

export type PatchBrandHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type PatchBrandHttpError =
  | PatchBrand400HttpError
  | PatchBrand401HttpError
  | PatchBrand403HttpError
  | PatchBrand404HttpError
  | PatchBrand500HttpError;

export type PatchBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};

export type PatchBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};

export type PatchBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type PatchBrand404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};

export type PatchBrand500HttpError = {
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
export async function activateBrand(
  brandId: string,
  body: unknown,
  options?: ApiCallOptions,
): Promise<ActivateBrandHttpResponse> {
  return invokeFetch("brands", {
    method: "post",
    pathTemplate: "/api/v1/brands/{brand-id}/actions/activate",
    pathVariables: { "brand-id": brandId },
    body,
    options,
  });
}

export type ActivateBrandHttpResponse = {
  data: Brand;
  headers: Headers;
  status: 200;
};

export type ActivateBrandHttpError =
  | ActivateBrand400HttpError
  | ActivateBrand401HttpError
  | ActivateBrand403HttpError
  | ActivateBrand404HttpError
  | ActivateBrand500HttpError;

export type ActivateBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};

export type ActivateBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};

export type ActivateBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type ActivateBrand404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};

export type ActivateBrand500HttpError = {
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
export async function deactivateBrand(
  brandId: string,
  body: unknown,
  options?: ApiCallOptions,
): Promise<DeactivateBrandHttpResponse> {
  return invokeFetch("brands", {
    method: "post",
    pathTemplate: "/api/v1/brands/{brand-id}/actions/deactivate",
    pathVariables: { "brand-id": brandId },
    body,
    options,
  });
}

export type DeactivateBrandHttpResponse = {
  data: Brand;
  headers: Headers;
  status: 200;
};

export type DeactivateBrandHttpError =
  | DeactivateBrand400HttpError
  | DeactivateBrand401HttpError
  | DeactivateBrand403HttpError
  | DeactivateBrand404HttpError
  | DeactivateBrand500HttpError;

export type DeactivateBrand400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};

export type DeactivateBrand401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};

export type DeactivateBrand403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type DeactivateBrand404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};

export type DeactivateBrand500HttpError = {
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
export async function deleteBrandFile(
  brandId: string,
  brandFileId: string,
  options?: ApiCallOptions,
): Promise<DeleteBrandFileHttpResponse> {
  return invokeFetch("brands", {
    method: "delete",
    pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
    pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
    options,
  });
}

export type DeleteBrandFileHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type DeleteBrandFileHttpError =
  | DeleteBrandFile400HttpError
  | DeleteBrandFile401HttpError
  | DeleteBrandFile403HttpError
  | DeleteBrandFile404HttpError
  | DeleteBrandFile424HttpError
  | DeleteBrandFile500HttpError;

export type DeleteBrandFile400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};

export type DeleteBrandFile401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};

export type DeleteBrandFile403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type DeleteBrandFile404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};

export type DeleteBrandFile424HttpError = {
  data: ErrorResponse424;
  headers: Headers;
  status: 424;
};

export type DeleteBrandFile500HttpError = {
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
export async function getBrandFile(
  brandId: string,
  brandFileId: string,
  options?: ApiCallOptions,
): Promise<GetBrandFileHttpResponse> {
  return invokeFetch("brands", {
    method: "get",
    pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
    pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
    options,
  });
}

export type GetBrandFileHttpResponse = {
  data: DownloadableBlob;
  headers: Headers;
  status: 200;
};

export type GetBrandFileHttpError =
  | GetBrandFile400HttpError
  | GetBrandFile401HttpError
  | GetBrandFile403HttpError
  | GetBrandFile404HttpError
  | GetBrandFile424HttpError
  | GetBrandFile500HttpError;

export type GetBrandFile400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};

export type GetBrandFile401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};

export type GetBrandFile403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type GetBrandFile404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};

export type GetBrandFile424HttpError = {
  data: ErrorResponse424;
  headers: Headers;
  status: 424;
};

export type GetBrandFile500HttpError = {
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
export async function createBrandFile(
  brandId: string,
  brandFileId: string,
  body: {
    /** The path and name of a file to upload. */
    file?: BodyInit;
  },
  options?: ApiCallOptions,
): Promise<CreateBrandFileHttpResponse> {
  return invokeFetch("brands", {
    method: "post",
    pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
    pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
    body,
    contentType: "multipart/form-data",
    options,
  });
}

export type CreateBrandFileHttpResponse = {
  data: BrandFile;
  headers: Headers;
  status: 201;
};

export type CreateBrandFileHttpError =
  | CreateBrandFile400HttpError
  | CreateBrandFile401HttpError
  | CreateBrandFile403HttpError
  | CreateBrandFile404HttpError
  | CreateBrandFile424HttpError
  | CreateBrandFile500HttpError;

export type CreateBrandFile400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};

export type CreateBrandFile401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};

export type CreateBrandFile403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type CreateBrandFile404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};

export type CreateBrandFile424HttpError = {
  data: ErrorResponse424;
  headers: Headers;
  status: 424;
};

export type CreateBrandFile500HttpError = {
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
export async function updateBrandFile(
  brandId: string,
  brandFileId: string,
  body: {
    /** A file to upload. */
    file?: BodyInit;
  },
  options?: ApiCallOptions,
): Promise<UpdateBrandFileHttpResponse> {
  return invokeFetch("brands", {
    method: "put",
    pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
    pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
    body,
    contentType: "multipart/form-data",
    options,
  });
}

export type UpdateBrandFileHttpResponse = {
  data: BrandFile;
  headers: Headers;
  status: 200;
};

export type UpdateBrandFileHttpError =
  | UpdateBrandFile400HttpError
  | UpdateBrandFile401HttpError
  | UpdateBrandFile403HttpError
  | UpdateBrandFile404HttpError
  | UpdateBrandFile424HttpError
  | UpdateBrandFile500HttpError;

export type UpdateBrandFile400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};

export type UpdateBrandFile401HttpError = {
  data: ErrorResponse401;
  headers: Headers;
  status: 401;
};

export type UpdateBrandFile403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};

export type UpdateBrandFile404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};

export type UpdateBrandFile424HttpError = {
  data: ErrorResponse424;
  headers: Headers;
  status: 424;
};

export type UpdateBrandFile500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};

/**
 * Clears the cache for brands api requests.
 */
export function clearCache() {
  return clearApiCache("brands");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type BrandsAPI = {
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
const brandsExport: BrandsAPI = {
  getBrands,
  createBrand,
  getActiveBrand,
  deleteBrand,
  getBrand,
  patchBrand,
  activateBrand,
  deactivateBrand,
  deleteBrandFile,
  getBrandFile,
  createBrandFile,
  updateBrandFile,
  clearCache,
};
export default brandsExport;
