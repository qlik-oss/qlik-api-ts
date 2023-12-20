import { A as ApiCallOptions } from './global.types-hIvp-WdX.js';
import './auth-types-nnUcWhuU.js';

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
type BrandFile = {
    contentType?: string;
    eTag?: string;
    id?: "logo" | "favIcon" | "styles";
    path?: string;
};
type BrandPatch = {
    /** The operation to be performed. */
    op: "add" | "remove" | "replace";
    /** The path for the given resource field to patch. */
    path: "/name" | "/description";
    /** The value to be used for this operation. */
    value?: string;
};
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
type NoActiveBrand = unknown;
/**
 * Lists all brand entries for a tenant
 *
 * @param query an object with query parameters
 * @throws GetBrandsHttpError
 */
declare const getBrands: (query: {
    /** Cursor to previous. */
    endingBefore?: string;
    /** Maximum number of brands to retrieve. */
    limit?: number;
    /** Field to sort by, prefixed with -/+ to indicate the order. */
    sort?: "id" | "+id" | "-id" | "createdAt" | "+createdAt" | "-createdAt" | "updatedAt" | "+updatedAt" | "-updatedAt";
    /** Cursor to the next page. */
    startingAfter?: string;
}, options?: ApiCallOptions) => Promise<GetBrandsHttpResponse>;
type GetBrandsHttpResponse = {
    data: BrandsList;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetBrandsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetBrandsHttpResponse>;
};
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
type GetBrandsHttpError = GetBrands400HttpError | GetBrands401HttpError | GetBrands403HttpError | GetBrands500HttpError;
/**
 * Creates a new brand
 *
 * @param body an object with the body content
 * @throws CreateBrandHttpError
 */
declare const createBrand: (body: {
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
}, options?: ApiCallOptions) => Promise<CreateBrandHttpResponse>;
type CreateBrandHttpResponse = {
    data: Brand;
    headers: Headers;
    status: number;
};
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
type CreateBrandHttpError = CreateBrand400HttpError | CreateBrand401HttpError | CreateBrand403HttpError | CreateBrand500HttpError;
/**
 * Retrieves the current active brand
 *
 * @throws GetActiveBrandHttpError
 */
declare const getActiveBrand: (options?: ApiCallOptions) => Promise<GetActiveBrandHttpResponse>;
type GetActiveBrandHttpResponse = {
    data: NoActiveBrand;
    headers: Headers;
    status: number;
};
type GetActiveBrandHttpError = {
    data: void;
    headers: Headers;
    status: number;
};
/**
 * Deletes a specific brand
 *
 * @param brandId The brand's unique identifier.
 * @throws DeleteBrandHttpError
 */
declare const deleteBrand: (brandId: string, options?: ApiCallOptions) => Promise<DeleteBrandHttpResponse>;
type DeleteBrandHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
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
type DeleteBrandHttpError = DeleteBrand400HttpError | DeleteBrand401HttpError | DeleteBrand403HttpError | DeleteBrand404HttpError | DeleteBrand500HttpError;
/**
 * Retrieves a specific brand
 *
 * @param brandId The brand's unique identifier.
 * @throws GetBrandHttpError
 */
declare const getBrand: (brandId: string, options?: ApiCallOptions) => Promise<GetBrandHttpResponse>;
type GetBrandHttpResponse = {
    data: Brand;
    headers: Headers;
    status: number;
};
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
type GetBrandHttpError = GetBrand400HttpError | GetBrand401HttpError | GetBrand403HttpError | GetBrand404HttpError | GetBrand500HttpError;
/**
 * Patches a brand
 *
 * @param brandId The brand's unique identifier.
 * @param body an object with the body content
 * @throws PatchBrandHttpError
 */
declare const patchBrand: (brandId: string, body: BrandPatch[], options?: ApiCallOptions) => Promise<PatchBrandHttpResponse>;
type PatchBrandHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
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
type PatchBrandHttpError = PatchBrand400HttpError | PatchBrand401HttpError | PatchBrand403HttpError | PatchBrand404HttpError | PatchBrand500HttpError;
/**
 * Sets the brand active and de-activates any other active brand. If the brand is already active, no action is taken.
 *
 * @param brandId The brand's unique identifier.
 * @param body an object with the body content
 * @throws ActivateBrandHttpError
 */
declare const activateBrand: (brandId: string, body: unknown, options?: ApiCallOptions) => Promise<ActivateBrandHttpResponse>;
type ActivateBrandHttpResponse = {
    data: Brand;
    headers: Headers;
    status: number;
};
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
type ActivateBrandHttpError = ActivateBrand400HttpError | ActivateBrand401HttpError | ActivateBrand403HttpError | ActivateBrand404HttpError | ActivateBrand500HttpError;
/**
 * Sets the brand so it is no longer active. If the brand is already inactive, no action is taken.
 *
 * @param brandId The brand's unique identifier.
 * @param body an object with the body content
 * @throws DeactivateBrandHttpError
 */
declare const deactivateBrand: (brandId: string, body: unknown, options?: ApiCallOptions) => Promise<DeactivateBrandHttpResponse>;
type DeactivateBrandHttpResponse = {
    data: Brand;
    headers: Headers;
    status: number;
};
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
type DeactivateBrandHttpError = DeactivateBrand400HttpError | DeactivateBrand401HttpError | DeactivateBrand403HttpError | DeactivateBrand404HttpError | DeactivateBrand500HttpError;
/**
 * Deletes a specific brand file
 *
 * @param brandId The brand's unique identifier.
 * @param brandFileId The unique identifier of a file within a brand.
 * @throws DeleteBrandFileHttpError
 */
declare const deleteBrandFile: (brandId: string, brandFileId: string, options?: ApiCallOptions) => Promise<DeleteBrandFileHttpResponse>;
type DeleteBrandFileHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
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
type DeleteBrandFileHttpError = DeleteBrandFile400HttpError | DeleteBrandFile401HttpError | DeleteBrandFile403HttpError | DeleteBrandFile404HttpError | DeleteBrandFile500HttpError;
/**
 * Downloads the brand file
 *
 * @param brandId The brand's unique identifier.
 * @param brandFileId The unique identifier of a file within a brand.
 * @throws GetBrandFileHttpError
 */
declare const getBrandFile: (brandId: string, brandFileId: string, options?: ApiCallOptions) => Promise<GetBrandFileHttpResponse>;
type GetBrandFileHttpResponse = {
    data: BodyInit;
    headers: Headers;
    status: number;
};
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
type GetBrandFileHttpError = GetBrandFile400HttpError | GetBrandFile401HttpError | GetBrandFile403HttpError | GetBrandFile404HttpError | GetBrandFile500HttpError;
/**
 * Creates a brand file
 *
 * @param brandId The brand's unique identifier.
 * @param brandFileId The unique identifier of a file within a brand.
 * @param body an object with the body content
 * @throws CreateBrandFileHttpError
 */
declare const createBrandFile: (brandId: string, brandFileId: string, body: {
    /** The path and name of a file to upload. */
    file?: BodyInit;
}, options?: ApiCallOptions) => Promise<CreateBrandFileHttpResponse>;
type CreateBrandFileHttpResponse = {
    data: BrandFile;
    headers: Headers;
    status: number;
};
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
type CreateBrandFileHttpError = CreateBrandFile400HttpError | CreateBrandFile401HttpError | CreateBrandFile403HttpError | CreateBrandFile404HttpError | CreateBrandFile500HttpError;
/**
 * Updates existing file
 *
 * @param brandId The brand's unique identifier.
 * @param brandFileId The unique identifier of a file within a brand.
 * @param body an object with the body content
 * @throws UpdateBrandFileHttpError
 */
declare const updateBrandFile: (brandId: string, brandFileId: string, body: {
    /** A file to upload. */
    file?: BodyInit;
}, options?: ApiCallOptions) => Promise<UpdateBrandFileHttpResponse>;
type UpdateBrandFileHttpResponse = {
    data: BrandFile;
    headers: Headers;
    status: number;
};
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
type UpdateBrandFileHttpError = UpdateBrandFile400HttpError | UpdateBrandFile401HttpError | UpdateBrandFile403HttpError | UpdateBrandFile404HttpError | UpdateBrandFile500HttpError;
/**
 * Clears the cache for brands api requests.
 */
declare function clearCache(): void;
interface BrandsAPI {
    /**
     * Lists all brand entries for a tenant
     *
     * @param query an object with query parameters
     * @throws GetBrandsHttpError
     */
    getBrands: typeof getBrands;
    /**
     * Creates a new brand
     *
     * @param body an object with the body content
     * @throws CreateBrandHttpError
     */
    createBrand: typeof createBrand;
    /**
     * Retrieves the current active brand
     *
     * @throws GetActiveBrandHttpError
     */
    getActiveBrand: typeof getActiveBrand;
    /**
     * Deletes a specific brand
     *
     * @param brandId The brand's unique identifier.
     * @throws DeleteBrandHttpError
     */
    deleteBrand: typeof deleteBrand;
    /**
     * Retrieves a specific brand
     *
     * @param brandId The brand's unique identifier.
     * @throws GetBrandHttpError
     */
    getBrand: typeof getBrand;
    /**
     * Patches a brand
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
     * Sets the brand so it is no longer active. If the brand is already inactive, no action is taken.
     *
     * @param brandId The brand's unique identifier.
     * @param body an object with the body content
     * @throws DeactivateBrandHttpError
     */
    deactivateBrand: typeof deactivateBrand;
    /**
     * Deletes a specific brand file
     *
     * @param brandId The brand's unique identifier.
     * @param brandFileId The unique identifier of a file within a brand.
     * @throws DeleteBrandFileHttpError
     */
    deleteBrandFile: typeof deleteBrandFile;
    /**
     * Downloads the brand file
     *
     * @param brandId The brand's unique identifier.
     * @param brandFileId The unique identifier of a file within a brand.
     * @throws GetBrandFileHttpError
     */
    getBrandFile: typeof getBrandFile;
    /**
     * Creates a brand file
     *
     * @param brandId The brand's unique identifier.
     * @param brandFileId The unique identifier of a file within a brand.
     * @param body an object with the body content
     * @throws CreateBrandFileHttpError
     */
    createBrandFile: typeof createBrandFile;
    /**
     * Updates existing file
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
}
/**
 * Functions for the brands api
 */
declare const brandsExport: BrandsAPI;

export { type ActivateBrand400HttpError, type ActivateBrand401HttpError, type ActivateBrand403HttpError, type ActivateBrand404HttpError, type ActivateBrand500HttpError, type ActivateBrandHttpError, type ActivateBrandHttpResponse, type Brand, type BrandFile, type BrandPatch, type BrandsAPI, type BrandsList, type CreateBrand400HttpError, type CreateBrand401HttpError, type CreateBrand403HttpError, type CreateBrand500HttpError, type CreateBrandFile400HttpError, type CreateBrandFile401HttpError, type CreateBrandFile403HttpError, type CreateBrandFile404HttpError, type CreateBrandFile500HttpError, type CreateBrandFileHttpError, type CreateBrandFileHttpResponse, type CreateBrandHttpError, type CreateBrandHttpResponse, type DeactivateBrand400HttpError, type DeactivateBrand401HttpError, type DeactivateBrand403HttpError, type DeactivateBrand404HttpError, type DeactivateBrand500HttpError, type DeactivateBrandHttpError, type DeactivateBrandHttpResponse, type DeleteBrand400HttpError, type DeleteBrand401HttpError, type DeleteBrand403HttpError, type DeleteBrand404HttpError, type DeleteBrand500HttpError, type DeleteBrandFile400HttpError, type DeleteBrandFile401HttpError, type DeleteBrandFile403HttpError, type DeleteBrandFile404HttpError, type DeleteBrandFile500HttpError, type DeleteBrandFileHttpError, type DeleteBrandFileHttpResponse, type DeleteBrandHttpError, type DeleteBrandHttpResponse, type ErrorResponse400, type ErrorResponse401, type ErrorResponse403, type ErrorResponse404, type ErrorResponse500, type GetActiveBrandHttpError, type GetActiveBrandHttpResponse, type GetBrand400HttpError, type GetBrand401HttpError, type GetBrand403HttpError, type GetBrand404HttpError, type GetBrand500HttpError, type GetBrandFile400HttpError, type GetBrandFile401HttpError, type GetBrandFile403HttpError, type GetBrandFile404HttpError, type GetBrandFile500HttpError, type GetBrandFileHttpError, type GetBrandFileHttpResponse, type GetBrandHttpError, type GetBrandHttpResponse, type GetBrands400HttpError, type GetBrands401HttpError, type GetBrands403HttpError, type GetBrands500HttpError, type GetBrandsHttpError, type GetBrandsHttpResponse, type Link, type NoActiveBrand, type PatchBrand400HttpError, type PatchBrand401HttpError, type PatchBrand403HttpError, type PatchBrand404HttpError, type PatchBrand500HttpError, type PatchBrandHttpError, type PatchBrandHttpResponse, type UpdateBrandFile400HttpError, type UpdateBrandFile401HttpError, type UpdateBrandFile403HttpError, type UpdateBrandFile404HttpError, type UpdateBrandFile500HttpError, type UpdateBrandFileHttpError, type UpdateBrandFileHttpResponse, activateBrand, clearCache, createBrand, createBrandFile, deactivateBrand, brandsExport as default, deleteBrand, deleteBrandFile, getActiveBrand, getBrand, getBrandFile, getBrands, patchBrand, updateBrandFile };
