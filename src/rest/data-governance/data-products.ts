/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import { clearApiCache, invokeFetch, type ApiCallOptions, type PageCallOptions } from "#public/invoke-fetch";

/* -------------------------------------------------------------------------- */
/*                                Public types                                */
/* -------------------------------------------------------------------------- */

export type ActivateDataProductRequest = {
  /** A description of the data product. */
  description?: string;
  /** Name of the data product to activate. */
  name: string;
  /** Unique identifier of the space. */
  spaceId?: string;
  tags?: string[];
};

export type ArrayOfUniqueStrings = string[] | null;

export type ChangelogOperation = {
  /** `removedFromCatalog` is a removal applied by the system after a catalog event (dataset updated or
   * deleted), as opposed to `remove`, which is a removal deliberately performed by a user.
   * `update` is a partial modification of an existing entity applied by the system after a catalog event
   * (dataset schema updated). It is currently only used with the `/semanticModel/tables` path, where the
   * value describes the fields added to and removed from a table. */
  operator?: "replace" | "add" | "remove" | "removedFromCatalog" | "update";
  path?:
    | "/name"
    | "/description"
    | "/spaceId"
    | "/datasetIds"
    | "/glossaryIds"
    | "/readMe"
    | "/keyContacts"
    | "/tags"
    | "/activatedOn"
    | "/apiConsumableDatasetIds"
    | "/semanticModel"
    | "/semanticModel/relationships"
    | "/semanticModel/measures"
    | "/semanticModel/dimensions"
    | "/semanticModel/tables";
  value?: string | null | ArrayOfUniqueStrings | ChangelogTableUpdate | unknown[] | null | unknown | null;
};

/**
 * Fields added to and removed from a semantic model table by a dataset schema change.
 */
export type ChangelogTableUpdate = {
  /** Identifiers of the fields added to the table. Empty when no field was added. */
  addedFieldIds?: string[];
  /** Identifiers of the fields removed from the table. Empty when no field was removed. */
  removedFieldIds?: string[];
  /** Identifier of the updated table. */
  tableId: string;
};

/**
 * Result of a data quality computation for a single dataset.
 */
export type ComputationResponse = {
  /** Unique identifier for this individual data quality computation job. */
  computationId: string;
  /** The ID of the dataset */
  datasetId: DatasetIdType;
  /** Error message if the computation failed; absent on success. */
  error?: string;
  /** Current execution status of the computation (REQUESTED or FAILED). */
  status: ExecutionStatus;
};

/**
 * Request payload for creating a data product.
 */
export type CreateDataProductRequest = {
  /** List of dataset IDs for which API consumption is enabled. Must be a subset of datasetIds. */
  apiConsumableDatasetIds?: string[];
  /** List of dataset IDs associated with the Data Product. Maximum of 100 items. */
  datasetIds?: string[];
  /** A description of the Data Product. */
  description?: string;
  /** List of glossary IDs linked to the Data Product. Each entry must be a valid UUIDv4 (maximum 36 characters). Maximum of 100 items. */
  glossaryIds?: string[];
  /** List of key contacts for the data product. */
  keyContacts?: KeyContact[];
  /** Display name of the data product. */
  name: string;
  /** A readme of the Data Product. */
  readMe?: string;
  /** Unique identifier of the space. */
  spaceId?: string;
  /** List of tags for the data product. */
  tags?: string[];
};

export type DataProductChangelog = {
  changes?: ChangelogOperation[];
  /** Timestamp when this changelog entry was created in ISO 8601 format. */
  createdAt?: string;
  /** Identifier of the user who made these changes. */
  createdBy?: string;
  id?: string;
  /** Timestamp of the last event included in this aggregated changelog entry.
   * Only set for aggregated events that span multiple source events. */
  updatedAt?: string | null;
};

export type DataProductChangelogResponse = {
  data?: DataProductChangelog[];
  limit?: number;
  links?: Links;
  page?: number;
  pages?: number;
  total?: number;
};

export type DataProductResponse = {
  /** Indicates whether the data product is currently activated for consumption. */
  activated?: boolean;
  /** Timestamp when the data product was most recently activated in ISO 8601 format. */
  activatedAt?: string;
  /** List of target environments or platforms where the data product is activated. */
  activatedOn: string[];
  apiConsumableDatasetIds: string[];
  /** Timestamp when the data product was created in ISO 8601 format. */
  createdAt: string;
  /** Identifier of the user who created the data product. */
  createdBy: string;
  datasetIds: string[];
  description?: string;
  glossaryIds: string[];
  id: string;
  keyContacts: KeyContact[];
  /** Primary identifier used for main data product reference. */
  mainId?: string;
  name: string;
  /** Identifier of the user who owns the data product and is responsible for governance. */
  ownerId: string;
  /** Number of pending changes that are not yet activated. */
  pendingChangesCount?: number;
  /** Qlik Resource Identifier (QRI) uniquely identifying the data product across the platform. */
  qri: string;
  quality?: Quality;
  /** Documentation in Markdown format providing detailed information about the data product. */
  readMe?: string;
  spaceId?: string;
  tags: string[];
  tenantId: string;
  trustScore?: TrustScore;
  /** Timestamp of the most recent update in ISO 8601 format. */
  updatedAt: string;
  /** Identifier of the user who last updated the data product. */
  updatedBy: string;
};

/**
 * The ID of the dataset
 * @example
 * "669144f5aa2d642638ef1dd0"
 */
export type DatasetIdType = string;

/**
 * Response containing the batch computation identifier and per-dataset quality computation results.
 */
export type DatasetsComputationResponse = {
  /** Unique identifier for the data quality batch computation job. */
  batchComputationId: string;
  /** List of computation results, one entry per dataset in the data product. */
  datasetResponses: ComputationResponse[];
};

export type Error = {
  code?: string;
  detail?: string;
  /** Optional structured context. `cycle` is present for `CIRCULAR_REFERENCE` errors. `dimensions` and `measures` contain semantic-model element IDs: for DP-101 the elements referencing inaccessible glossary entries, for DP-103 the elements whose term-link snapshot could not be replayed, for DP-104 the elements whose submitted term-link snapshot was invalid. */
  meta?: {
    /** Present only for `CIRCULAR_REFERENCE` errors. The tables forming the detected cycle, in order (first and last entries repeated to close the loop). */
    cycle?: TableRef[];
    /** Semantic-model dimension IDs. For DP-101, dimensions linked to inaccessible glossary entries. For DP-103, dimensions whose captured Business Glossary term-link snapshot could no longer be replayed. For DP-104, dimensions whose submitted term-link snapshot was invalid. */
    dimensions?: string[];
    /** Semantic-model measure IDs. For DP-101, measures linked to inaccessible glossary entries. For DP-103, measures whose captured Business Glossary term-link snapshot could no longer be replayed. For DP-104, measures whose submitted term-link snapshot was invalid. */
    measures?: string[];
  };
  status?: string;
  title?: string;
};

export type ErrorResponse = {
  errors?: Error[];
  traceId?: string;
};

/**
 * Current execution status of the computation (REQUESTED or FAILED).
 * @example
 * "REQUESTED"
 */
export type ExecutionStatus = "REQUESTED" | "FAILED";

export type GenerateProviderUrlResponse = {
  url: string;
};

/**
 * Represents a designated contact person for a data product, optionally with their role.
 */
export type KeyContact = {
  /** Role of the key contact in the Data Product. */
  role?: string;
  /** Unique identifier of the user. */
  userId: string;
};

export type Link = {
  href?: string;
};

export type Links = {
  first?: Link;
  last?: Link;
  next?: Link;
  prev?: Link;
  self?: Link;
};

export type MoveDataProductRequest = {
  /** Unique identifier of the space. */
  spaceId: string;
};

export type PatchDataProductRequest = {
  op: "replace";
  path:
    | "/name"
    | "/description"
    | "/datasetIds"
    | "/glossaryIds"
    | "/readMe"
    | "/keyContacts"
    | "/tags"
    | "/apiConsumableDatasetIds";
  value?: string | null | ArrayOfUniqueStrings | unknown[] | null;
}[];

export type Quality = {
  completeness: number;
  validity: number;
};

export type TableRef = {
  tableId: string;
  tableName: string;
};

export type TrustScore = {
  applicableDatasets: number;
  dimensions?: TrustScoreDimension[];
  previousScore?: number;
  score: number;
};

export type TrustScoreDimension = {
  applicableDatasets: number;
  id: string;
  previousScore?: number;
  score?: number;
};

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Creates a new data product with specified metadata, datasets, and governance information.
 * Use this endpoint to package related datasets into a governed, discoverable asset.
 * Requires create permissions in the target space.
 *
 * @param body an object with the body content
 * @throws CreateDataProductHttpError
 */
export async function createDataProduct(
  body: CreateDataProductRequest,
  options?: ApiCallOptions,
): Promise<CreateDataProductHttpResponse> {
  return invokeFetch("data-governance/data-products", {
    method: "post",
    pathTemplate: "/api/data-governance/data-products",
    body,
    contentType: "application/json",
    options,
  });
}

export type CreateDataProductHttpResponse = {
  data: DataProductResponse;
  headers: Headers;
  status: 201;
};

export type CreateDataProductHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 422 | 500 | 503;
};

/**
 * Generates a URL to access a third-party provider's user interface.
 * Use this endpoint to integrate external services with your data product.
 *
 * @param query an object with query parameters
 * @throws GenerateProviderUrlDataProductsHttpError
 */
export async function generateProviderUrlDataProducts(
  query: {
    /** Unique identifier of the dataset. */
    dataSetId: string;
  },
  options?: ApiCallOptions,
): Promise<GenerateProviderUrlDataProductsHttpResponse> {
  return invokeFetch("data-governance/data-products", {
    method: "post",
    pathTemplate: "/api/data-governance/data-products/actions/generate-provider-url",
    query,
    options,
  });
}

export type GenerateProviderUrlDataProductsHttpResponse = {
  data: GenerateProviderUrlResponse;
  headers: Headers;
  status: 200;
};

export type GenerateProviderUrlDataProductsHttpError = {
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
export async function deleteDataProduct(
  dataProductId: string,
  options?: ApiCallOptions,
): Promise<DeleteDataProductHttpResponse> {
  return invokeFetch("data-governance/data-products", {
    method: "delete",
    pathTemplate: "/api/data-governance/data-products/{dataProductId}",
    pathVariables: { dataProductId },
    options,
  });
}

export type DeleteDataProductHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type DeleteDataProductHttpError = {
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
export async function getDataProduct(
  dataProductId: string,
  options?: ApiCallOptions,
): Promise<GetDataProductHttpResponse> {
  return invokeFetch("data-governance/data-products", {
    method: "get",
    pathTemplate: "/api/data-governance/data-products/{dataProductId}",
    pathVariables: { dataProductId },
    options,
  });
}

export type GetDataProductHttpResponse = {
  data: DataProductResponse;
  headers: Headers;
  status: 200;
};

export type GetDataProductHttpError = {
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
export async function patchDataProduct(
  dataProductId: string,
  body: PatchDataProductRequest,
  options?: ApiCallOptions,
): Promise<PatchDataProductHttpResponse> {
  return invokeFetch("data-governance/data-products", {
    method: "patch",
    pathTemplate: "/api/data-governance/data-products/{dataProductId}",
    pathVariables: { dataProductId },
    body,
    contentType: "application/json",
    options,
  });
}

export type PatchDataProductHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type PatchDataProductHttpError = {
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
export async function activateDataProduct(
  dataProductId: string,
  body: ActivateDataProductRequest,
  options?: ApiCallOptions,
): Promise<ActivateDataProductHttpResponse> {
  return invokeFetch("data-governance/data-products", {
    method: "post",
    pathTemplate: "/api/data-governance/data-products/{dataProductId}/actions/activate",
    pathVariables: { dataProductId },
    body,
    contentType: "application/json",
    options,
  });
}

export type ActivateDataProductHttpResponse = {
  data: DataProductResponse;
  headers: Headers;
  status: 201;
};

export type ActivateDataProductHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 502 | 503;
};

/**
 * Triggers a full data quality computation for all datasets in the data product, running profile calculation followed by data quality
 * assessment. Returns a `batchComputationId` that can be used to track overall progress via the batch computation status endpoint
 * (`GET /api/data-governance/data-qualities/batch-computations/{batchComputationId}`). The computation runs asynchronously.
 * Poll the status endpoint until `status` is `FINISHED`.
 *
 * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
 * @throws ComputeDatasetsDataQualityDataProductHttpError
 */
export async function computeDatasetsDataQualityDataProduct(
  dataProductId: string,
  options?: ApiCallOptions,
): Promise<ComputeDatasetsDataQualityDataProductHttpResponse> {
  return invokeFetch("data-governance/data-products", {
    method: "post",
    pathTemplate: "/api/data-governance/data-products/{dataProductId}/actions/compute-datasets-data-quality",
    pathVariables: { dataProductId },
    options,
  });
}

export type ComputeDatasetsDataQualityDataProductHttpResponse = {
  data: DatasetsComputationResponse;
  headers: Headers;
  status: 202;
};

export type ComputeDatasetsDataQualityDataProductHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};

/**
 * Deactivates a data product, preventing it from being consumed by other services or users.
 *
 * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
 * @throws DeactivateDataProductHttpError
 */
export async function deactivateDataProduct(
  dataProductId: string,
  options?: ApiCallOptions,
): Promise<DeactivateDataProductHttpResponse> {
  return invokeFetch("data-governance/data-products", {
    method: "post",
    pathTemplate: "/api/data-governance/data-products/{dataProductId}/actions/deactivate",
    pathVariables: { dataProductId },
    options,
  });
}

export type DeactivateDataProductHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type DeactivateDataProductHttpError = {
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
export async function exportDocumentationDataProduct(
  dataProductId: string,
  options?: ApiCallOptions,
): Promise<ExportDocumentationDataProductHttpResponse> {
  return invokeFetch("data-governance/data-products", {
    method: "get",
    pathTemplate: "/api/data-governance/data-products/{dataProductId}/actions/export-documentation",
    pathVariables: { dataProductId },
    options,
  });
}

export type ExportDocumentationDataProductHttpResponse = {
  data: void;
  headers: Headers;
  status: 200;
};

export type ExportDocumentationDataProductHttpError = {
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
export async function moveDataProduct(
  dataProductId: string,
  body: MoveDataProductRequest,
  options?: ApiCallOptions,
): Promise<MoveDataProductHttpResponse> {
  return invokeFetch("data-governance/data-products", {
    method: "post",
    pathTemplate: "/api/data-governance/data-products/{dataProductId}/actions/move",
    pathVariables: { dataProductId },
    body,
    contentType: "application/json",
    options,
  });
}

export type MoveDataProductHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};

export type MoveDataProductHttpError = {
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
export async function getDataProductChangelogs(
  dataProductId: string,
  query: {
    /** Maximum number of items to return per page. */
    limit?: number;
    /** Page number. */
    page?: number;
    /** Sort order for changelog entries. Use `+createdAt` for oldest first or `-createdAt` for newest first.
     * Prefix with `+` for ascending or `-` for descending order. Default: -createdAt. */
    sort?: "+createdAt" | "-createdAt";
  },
  options?: ApiCallOptions,
): Promise<GetDataProductChangelogsHttpResponse> {
  return invokeFetch("data-governance/data-products", {
    method: "get",
    pathTemplate: "/api/data-governance/data-products/{dataProductId}/changelogs",
    pathVariables: { dataProductId },
    query,
    options,
  });
}

export type GetDataProductChangelogsHttpResponse = {
  data: DataProductChangelogResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetDataProductChangelogsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetDataProductChangelogsHttpResponse>;
};

export type GetDataProductChangelogsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};

/**
 * Clears the cache for data-governance/data-products api requests.
 */
export function clearCache() {
  return clearApiCache("data-governance/data-products");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type DataProductsAPI = {
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
   * Triggers a full data quality computation for all datasets in the data product, running profile calculation followed by data quality
   * assessment. Returns a `batchComputationId` that can be used to track overall progress via the batch computation status endpoint
   * (`GET /api/data-governance/data-qualities/batch-computations/{batchComputationId}`). The computation runs asynchronously.
   * Poll the status endpoint until `status` is `FINISHED`.
   *
   * @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
   * @throws ComputeDatasetsDataQualityDataProductHttpError
   */
  computeDatasetsDataQualityDataProduct: typeof computeDatasetsDataQualityDataProduct;
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
const dataProductsExport: DataProductsAPI = {
  createDataProduct,
  generateProviderUrlDataProducts,
  deleteDataProduct,
  getDataProduct,
  patchDataProduct,
  activateDataProduct,
  computeDatasetsDataQualityDataProduct,
  deactivateDataProduct,
  exportDocumentationDataProduct,
  moveDataProduct,
  getDataProductChangelogs,
  clearCache,
};
export default dataProductsExport;
