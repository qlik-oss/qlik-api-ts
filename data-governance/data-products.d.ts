import { ApiCallOptions } from "../invoke-fetch-types.js";
import "../chunks/invoke-fetch-DFc3yzaj.js";

//#region src/public/rest/data-governance/data-products.d.ts
declare namespace data_products_d_exports {
  export { ActivateDataProductHttpError, ActivateDataProductHttpResponse, ActivateDataProductRequest, ArrayOfUniqueStrings, ChangelogOperation, CreateDataProductHttpError, CreateDataProductHttpResponse, CreateDataProductRequest, DataProductChangelog, DataProductChangelogResponse, DataProductResponse, DataProductsAPI, DeactivateDataProductHttpError, DeactivateDataProductHttpResponse, DeleteDataProductHttpError, DeleteDataProductHttpResponse, Error, ErrorResponse, ExportDocumentationDataProductHttpError, ExportDocumentationDataProductHttpResponse, GenerateProviderUrlDataProductsHttpError, GenerateProviderUrlDataProductsHttpResponse, GenerateProviderUrlResponse, GetDataProductChangelogsHttpError, GetDataProductChangelogsHttpResponse, GetDataProductHttpError, GetDataProductHttpResponse, KeyContact, Link, Links, MoveDataProductHttpError, MoveDataProductHttpResponse, MoveDataProductRequest, PatchDataProductHttpError, PatchDataProductHttpResponse, PatchDataProductRequest, Quality, TrustScore, TrustScoreDimension, activateDataProduct, clearCache, createDataProduct, deactivateDataProduct, dataProductsExport as default, deleteDataProduct, exportDocumentationDataProduct, generateProviderUrlDataProducts, getDataProduct, getDataProductChangelogs, moveDataProduct, patchDataProduct };
}
type ActivateDataProductRequest = {
  /** A description of the data product. */description?: string; /** Name of the data product to activate. */
  name: string; /** Unique identifier of the space. */
  spaceId?: string;
  tags?: string[];
};
type ArrayOfUniqueStrings = string[];
type ChangelogOperation = {
  operator?: "replace" | "add" | "remove";
  path?: "/name" | "/description" | "/spaceId" | "/datasetIds" | "/glossaryIds" | "/readMe" | "/keyContacts" | "/tags" | "/activatedOn" | "/apiConsumableDatasetIds";
  value?: string | ArrayOfUniqueStrings | unknown[];
};
/**
 * Request payload for creating a data product.
 */
type CreateDataProductRequest = {
  /** A description of the Data Product. */description?: string; /** List of key contacts for the data product. */
  keyContacts?: KeyContact[]; /** Display name of the data product. */
  name: string; /** A readme of the Data Product. */
  readMe?: string; /** Unique identifier of the space. */
  spaceId?: string; /** List of tags for the data product. */
  tags?: string[];
};
type DataProductChangelog = {
  changes?: ChangelogOperation[]; /** Timestamp when this changelog entry was created in ISO 8601 format. */
  createdAt?: string; /** Identifier of the user who made these changes. */
  createdBy?: string;
  id?: string;
};
type DataProductChangelogResponse = {
  data?: DataProductChangelog[];
  limit?: number;
  links?: Links;
  page?: number;
  pages?: number;
  total?: number;
};
type DataProductResponse = {
  /** Indicates whether the data product is currently activated for consumption. */activated?: boolean; /** Timestamp when the data product was most recently activated in ISO 8601 format. */
  activatedAt?: string; /** List of target environments or platforms where the data product is activated. */
  activatedOn?: string[];
  apiConsumableDatasetIds?: string[]; /** Timestamp when the data product was created in ISO 8601 format. */
  createdAt?: string; /** Identifier of the user who created the data product. */
  createdBy?: string;
  datasetIds?: string[];
  description?: string;
  glossaryIds?: string[];
  id: string;
  keyContacts?: KeyContact[]; /** Primary identifier used for main data product reference. */
  mainId?: string;
  name: string; /** Identifier of the user who owns the data product and is responsible for governance. */
  ownerId?: string; /** Qlik Resource Identifier (QRI) uniquely identifying the data product across the platform. */
  qri?: string;
  quality?: Quality; /** Documentation in Markdown format providing detailed information about the data product. */
  readMe?: string;
  spaceId?: string;
  tags?: string[];
  tenantId: string;
  trustScore?: TrustScore; /** Timestamp of the most recent update in ISO 8601 format. */
  updatedAt?: string; /** Identifier of the user who last updated the data product. */
  updatedBy?: string;
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
type GenerateProviderUrlResponse = {
  url: string;
};
/**
 * Represents a designated contact person for a data product, optionally with their role.
 */
type KeyContact = {
  /** Role of the key contact in the Data Product. */role?: string; /** Unique identifier of the user. */
  userId: string;
};
type Link = {
  href?: string;
};
type Links = {
  first?: Link;
  last?: Link;
  next?: Link;
  prev?: Link;
  self?: Link;
};
type MoveDataProductRequest = {
  /** Unique identifier of the space. */spaceId: string;
};
type PatchDataProductRequest = {
  op: "replace";
  path: "/name" | "/description" | "/datasetIds" | "/glossaryIds" | "/readMe" | "/keyContacts" | "/tags" | "/apiConsumableDatasetIds";
  value?: string | ArrayOfUniqueStrings | unknown[];
}[];
type Quality = {
  completeness: number;
  validity: number;
};
type TrustScore = {
  applicableDatasets: number;
  dimensions?: TrustScoreDimension[];
  previousScore?: number;
  score: number;
};
type TrustScoreDimension = {
  applicableDatasets: number;
  id: string;
  previousScore?: number;
  score?: number;
};
/**
 * Creates a new data product with specified metadata, datasets, and governance information.
 * Use this endpoint to package related datasets into a governed, discoverable asset.
 * Requires create permissions in the target space.
 *
 * @param body an object with the body content
 * @throws CreateDataProductHttpError
 */
declare function createDataProduct(body: CreateDataProductRequest, options?: ApiCallOptions): Promise<CreateDataProductHttpResponse>;
type CreateDataProductHttpResponse = {
  data: DataProductResponse;
  headers: Headers;
  status: 201;
};
type CreateDataProductHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Generates a URL to access a third-party provider's user interface.
 * Use this endpoint to integrate external services with your data product.
 *
 * @param query an object with query parameters
 * @throws GenerateProviderUrlDataProductsHttpError
 */
declare function generateProviderUrlDataProducts(query: {
  /** Unique identifier of the dataset. */dataSetId: string;
}, options?: ApiCallOptions): Promise<GenerateProviderUrlDataProductsHttpResponse>;
type GenerateProviderUrlDataProductsHttpResponse = {
  data: GenerateProviderUrlResponse;
  headers: Headers;
  status: 200;
};
type GenerateProviderUrlDataProductsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Permanently removes a data product from the tenant.
 * This action cannot be undone and does not affect the underlying datasets.
 * Requires delete permissions for the data product.
 *
 * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
 * @throws DeleteDataProductHttpError
 */
declare function deleteDataProduct(dataProductId: string, options?: ApiCallOptions): Promise<DeleteDataProductHttpResponse>;
type DeleteDataProductHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteDataProductHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Retrieves the details of the specified data product, including name, description, associated datasets, key contacts, and activation status.
 * Requires read access to the Data Product.
 *
 * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
 * @throws GetDataProductHttpError
 */
declare function getDataProduct(dataProductId: string, options?: ApiCallOptions): Promise<GetDataProductHttpResponse>;
type GetDataProductHttpResponse = {
  data: DataProductResponse;
  headers: Headers;
  status: 200;
};
type GetDataProductHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Partially updates an existing data product using JSON Patch operations.
 * Use this endpoint to modify properties such as name, description, datasets, tags, or key contacts.
 * Changes are tracked in the data product changelog.
 *
 * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
 * @param body an object with the body content
 * @throws PatchDataProductHttpError
 */
declare function patchDataProduct(dataProductId: string, body: PatchDataProductRequest, options?: ApiCallOptions): Promise<PatchDataProductHttpResponse>;
type PatchDataProductHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchDataProductHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Activates a data product for publishing and consumption.
 * Once activated, the data product becomes discoverable and accessible to authorized users.
 * Requires publish permissions and valid data product configuration.
 *
 * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
 * @param body an object with the body content
 * @throws ActivateDataProductHttpError
 */
declare function activateDataProduct(dataProductId: string, body: ActivateDataProductRequest, options?: ApiCallOptions): Promise<ActivateDataProductHttpResponse>;
type ActivateDataProductHttpResponse = {
  data: DataProductResponse;
  headers: Headers;
  status: 201;
};
type ActivateDataProductHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Deactivates a data product, preventing it from being consumed by other services or users.
 *
 * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
 * @throws DeactivateDataProductHttpError
 */
declare function deactivateDataProduct(dataProductId: string, options?: ApiCallOptions): Promise<DeactivateDataProductHttpResponse>;
type DeactivateDataProductHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeactivateDataProductHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Exports data product documentation in Markdown format.
 * Use this endpoint to generate documentation for sharing or archiving.
 * Requires read access to the data product.
 *
 * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
 * @throws ExportDocumentationDataProductHttpError
 */
declare function exportDocumentationDataProduct(dataProductId: string, options?: ApiCallOptions): Promise<ExportDocumentationDataProductHttpResponse>;
type ExportDocumentationDataProductHttpResponse = {
  data: void;
  headers: Headers;
  status: 200;
};
type ExportDocumentationDataProductHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 406 | 415 | 500 | 503;
};
/**
 * Moves a data product from its current space to a different space.
 * Use this endpoint to reorganize data products across workspaces or governance domains.
 * Requires delete permissions in the source space and create permissions in the target space.
 *
 * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
 * @param body an object with the body content
 * @throws MoveDataProductHttpError
 */
declare function moveDataProduct(dataProductId: string, body: MoveDataProductRequest, options?: ApiCallOptions): Promise<MoveDataProductHttpResponse>;
type MoveDataProductHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type MoveDataProductHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Retrieves a paginated history of all notable changes made to a data product.
 * Each changelog entry captures the operation type, affected property, and timestamp.
 * Use this endpoint to track the history of changes or data product evolution over time.
 *
 * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
 * @param query an object with query parameters
 * @throws GetDataProductChangelogsHttpError
 */
declare function getDataProductChangelogs(dataProductId: string, query: {
  /** Maximum number of items to return per page. */limit?: number; /** Page number. */
  page?: number;
  /** Sort order for changelog entries. Use `+createdAt` for oldest first or `-createdAt` for newest first.
   * Prefix with `+` for ascending or `-` for descending order. Default: -createdAt. */
  sort?: "+createdAt" | "-createdAt";
}, options?: ApiCallOptions): Promise<GetDataProductChangelogsHttpResponse>;
type GetDataProductChangelogsHttpResponse = {
  data: DataProductChangelogResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetDataProductChangelogsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetDataProductChangelogsHttpResponse>;
};
type GetDataProductChangelogsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Clears the cache for data-governance/data-products api requests.
 */
declare function clearCache(): void;
type DataProductsAPI = {
  /**
   * Creates a new data product with specified metadata, datasets, and governance information.
   * Use this endpoint to package related datasets into a governed, discoverable asset.
   * Requires create permissions in the target space.
   *
   * @param body an object with the body content
   * @throws CreateDataProductHttpError
   */
  createDataProduct: typeof createDataProduct;
  /**
   * Generates a URL to access a third-party provider's user interface.
   * Use this endpoint to integrate external services with your data product.
   *
   * @param query an object with query parameters
   * @throws GenerateProviderUrlDataProductsHttpError
   */
  generateProviderUrlDataProducts: typeof generateProviderUrlDataProducts;
  /**
   * Permanently removes a data product from the tenant.
   * This action cannot be undone and does not affect the underlying datasets.
   * Requires delete permissions for the data product.
   *
   * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
   * @throws DeleteDataProductHttpError
   */
  deleteDataProduct: typeof deleteDataProduct;
  /**
   * Retrieves the details of the specified data product, including name, description, associated datasets, key contacts, and activation status.
   * Requires read access to the Data Product.
   *
   * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
   * @throws GetDataProductHttpError
   */
  getDataProduct: typeof getDataProduct;
  /**
   * Partially updates an existing data product using JSON Patch operations.
   * Use this endpoint to modify properties such as name, description, datasets, tags, or key contacts.
   * Changes are tracked in the data product changelog.
   *
   * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
   * @param body an object with the body content
   * @throws PatchDataProductHttpError
   */
  patchDataProduct: typeof patchDataProduct;
  /**
   * Activates a data product for publishing and consumption.
   * Once activated, the data product becomes discoverable and accessible to authorized users.
   * Requires publish permissions and valid data product configuration.
   *
   * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
   * @param body an object with the body content
   * @throws ActivateDataProductHttpError
   */
  activateDataProduct: typeof activateDataProduct;
  /**
   * Deactivates a data product, preventing it from being consumed by other services or users.
   *
   * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
   * @throws DeactivateDataProductHttpError
   */
  deactivateDataProduct: typeof deactivateDataProduct;
  /**
   * Exports data product documentation in Markdown format.
   * Use this endpoint to generate documentation for sharing or archiving.
   * Requires read access to the data product.
   *
   * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
   * @throws ExportDocumentationDataProductHttpError
   */
  exportDocumentationDataProduct: typeof exportDocumentationDataProduct;
  /**
   * Moves a data product from its current space to a different space.
   * Use this endpoint to reorganize data products across workspaces or governance domains.
   * Requires delete permissions in the source space and create permissions in the target space.
   *
   * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
   * @param body an object with the body content
   * @throws MoveDataProductHttpError
   */
  moveDataProduct: typeof moveDataProduct;
  /**
   * Retrieves a paginated history of all notable changes made to a data product.
   * Each changelog entry captures the operation type, affected property, and timestamp.
   * Use this endpoint to track the history of changes or data product evolution over time.
   *
   * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
   * @param query an object with query parameters
   * @throws GetDataProductChangelogsHttpError
   */
  getDataProductChangelogs: typeof getDataProductChangelogs;
  /**
   * Clears the cache for data-products api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the data-products api
 */
declare const dataProductsExport: DataProductsAPI;
//#endregion
export { ActivateDataProductHttpError, ActivateDataProductHttpResponse, ActivateDataProductRequest, ArrayOfUniqueStrings, ChangelogOperation, CreateDataProductHttpError, CreateDataProductHttpResponse, CreateDataProductRequest, DataProductChangelog, DataProductChangelogResponse, DataProductResponse, DataProductsAPI, DeactivateDataProductHttpError, DeactivateDataProductHttpResponse, DeleteDataProductHttpError, DeleteDataProductHttpResponse, Error, ErrorResponse, ExportDocumentationDataProductHttpError, ExportDocumentationDataProductHttpResponse, GenerateProviderUrlDataProductsHttpError, GenerateProviderUrlDataProductsHttpResponse, GenerateProviderUrlResponse, GetDataProductChangelogsHttpError, GetDataProductChangelogsHttpResponse, GetDataProductHttpError, GetDataProductHttpResponse, KeyContact, Link, Links, MoveDataProductHttpError, MoveDataProductHttpResponse, MoveDataProductRequest, PatchDataProductHttpError, PatchDataProductHttpResponse, PatchDataProductRequest, Quality, TrustScore, TrustScoreDimension, activateDataProduct, clearCache, createDataProduct, deactivateDataProduct, dataProductsExport as default, deleteDataProduct, exportDocumentationDataProduct, generateProviderUrlDataProducts, getDataProduct, getDataProductChangelogs, moveDataProduct, patchDataProduct, data_products_d_exports as t };