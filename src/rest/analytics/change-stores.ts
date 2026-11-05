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

export type CellKey = {
  /** The id of the column. */
  columnId: string;
  /** A map of row keys. */
  rowKey: RowKey;
};

/**
 * @example
 * {
 *   committed: true
 * }
 */
export type Change = {
  /** The value of the cell. */
  cellValue?: string;
  /** Whether the change has been committed. */
  committed?: boolean;
  /** The time when a user starts typing in a cell and the row becomes locked. */
  createdAt?: string;
  /** The id of the user who created the change. */
  createdBy?: string;
  /** The tenant id. */
  tenantId?: string;
  /** The time when an update to the change has been done.
   * Examples of when this value is updated:
   * - User starts typing in a cell, locking the row.
   * - User edits an unsaved change.
   * - User saves the change. */
  updatedAt?: string;
};

export type ChangeStore = {
  /** The time when the change store was created. */
  createdAt?: string;
  /** The id of the user who created the change store. */
  createdBy?: string;
  /** The list of primary key columns for the change store. */
  primaryKey?: PrimaryKey;
  /** The publish reference id used to map stores across published apps/spaces. */
  publishRefId?: string;
  /** The reference id used to identify related editable-columns or change stores. */
  referenceId?: ReferenceId;
  /** The space id where the change store is located. */
  spaceId?: string;
  /** The id of the change store. */
  storeId?: string;
  /** The name of the change store. */
  storeName?: string;
  /** The tenant id the change store belongs to. */
  tenantId?: string;
  /** The time when the change store was last updated. */
  updatedAt?: string;
  /** List of chart/app references. */
  usedBy?: UsedByArray;
};

export type EditableColumn = {
  /** Name of the editable column. */
  columnName?: string;
  /** Configuration values required for the editable-column type. */
  config?: {
    /** Maximum selectable date for editable-date columns (ISO 8601 date). */
    maxDate?: string;
    /** Minimum selectable date for editable-date columns (ISO 8601 date). */
    minDate?: string;
    /** Expression used to create dynamic selector values. */
    selectorExpression?: string;
    /** Type of selector. fixed, dynamic or empty if editable-column type is not editable-selector. */
    selectorType?: "fixed" | "dynamic" | "";
    /** List of value/label key/value pairs. */
    selectorValues?: {
      /** The Label of the selector. */
      label?: string;
      /** The Value of the selector. */
      value?: string;
    }[];
  };
  /** Timestamp of creation. */
  createdAt?: string;
  /** The user who created the column. */
  createdBy?: string;
  /** The unique id of the editable column. */
  id?: string;
  /** The publish reference id used to relate editable columns between published apps/spaces. */
  publishRefId?: string;
  /** The unique id used to keep a reference of editable columns in multiple spaces. */
  referenceId?: string;
  /** List of value/label key/value pairs. */
  selectorValues?: {
    /** The Label of the selector. */
    label?: string;
    /** The Value of the selector. */
    value?: string;
  }[];
  /** The space id that the editable columns are associated with. */
  spaceId?: string;
  /** Store id. */
  storeId?: string;
  /** Tenant id. */
  tenantId?: string;
  /** Type of the editable column. */
  type?: "editable-text" | "editable-selector" | "editable-date";
  /** Timestamp of last update. */
  updatedAt?: string;
  /** List of chart/app references. */
  usedBy?: UsedByArray;
};

/**
 * An error object.
 */
export type Error = {
  /** The error code. */
  code: string;
  /** Extra information about the error. */
  detail?: string;
  /** Description of the error. */
  title: string;
};

export type ErrorResponse = {
  /** list of errors */
  errors?: Error[];
  traceId?: string;
};

export type GetChangesData = {
  cellKey?: CellKey;
  changes?: Change[];
  /** The name of the column. */
  columnName?: string;
};

export type ListDefaultData = {
  currentPageCount?: number;
  totalCount?: number;
};

export type Pagination = {
  links?: {
    next?: {
      href?: string;
    };
    prev?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
};

/**
 * The list of primary key columns for the change store.
 * @example
 * [
 *   "product",
 *   "region"
 * ]
 */
export type PrimaryKey = string[];

/**
 * The reference id used to identify related editable-columns or change stores.
 * @example
 * "6835b0135cf7147c01979e5d"
 */
export type ReferenceId = string;

/**
 * A map of row keys.
 * @example
 * {
 *   "product": "table"
 * }
 */
export type RowKey = Record<string, string>;

/**
 * @example
 * {
 *   data: [
 *     {
 *       updatedAt: "2023-10-01T12:00:00Z",
 *       updatedBy: "abc123"
 *     },
 *     {
 *       updatedAt: "2023-10-01T13:00:00Z"
 *     }
 *   ]
 * }
 */
export type TabularView = {
  data?: {
    /** The timestamp when the row was last updated. */
    updatedAt?: string;
    /** The user id that performed the latest update in the row (corresponds to updatedAt). */
    updatedBy?: string;
  }[];
};

export type UsedBy = {
  /** The id of the app. */
  appId: string;
  /** The id of the chart. */
  chartId: string;
};

/**
 * List of chart/app references.
 */
export type UsedByArray = UsedBy[];

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Returns a list of change-stores, accessible to the user.
 * @example
 * getChangeStores(
 *   {
 *     page: "1a2b3c",
 *     limit: 100,
 *     sort: "+storeName",
 *     spaceId: "personal"
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetChangeStoresHttpError
 */
export async function getChangeStores(
  query: {
    /** A SCIM filter expression used to filter the result.
     * The filter parameter allows complex logical expressions using comparison operators and grouping.
     * - **Supported attributes:** `storeName`, `storeId`, `referenceId`, `usedBy.appId`, `primaryKey`, `isUsedByEmpty`
     * - **Supported operators:** `eq`, `ne`, `co`, `sw`, `ew`, `pr`, `gt`, `ge`, `lt`, `le`  
     * - **Logical operators:** `and`, `or`, `not` */
    filter?: string;
    /** Defines the size of each paged result (maximum 100). */
    limit?: number;
    /** Used for cursor-based pagination. */
    page?: string;
    /** Sort results by a field, with optional + (asc) or - (desc) prefix */
    sort?: string;
    /** The space ID to filter change stores by. This parameter is required.
     * For personal spaces, use "personal".
     * For shared spaces, use the actual space ID, e.g. "690b584c5a8011de9079828e". */
    spaceId: string;
  },
  options?: ApiCallOptions,
): Promise<GetChangeStoresHttpResponse> {
  return invokeFetch("analytics/change-stores", {
    method: "get",
    pathTemplate: "/api/analytics/change-stores",
    query,
    options,
  });
}

export type GetChangeStoresHttpResponse = {
  data: ListDefaultData &
    Pagination & {
      data?: ChangeStore[];
    };
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetChangeStoresHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetChangeStoresHttpResponse>;
};

export type GetChangeStoresHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500;
};

/**
 * Returns detailed information about a specific change store, such as its configuration and associated charts.
 * @example
 * getChangeStore(
 *   "507f1f77bcf86cd799439011"
 * )
 *
 * @param storeId The id of the change store.
 * @throws GetChangeStoreHttpError
 */
export async function getChangeStore(storeId: string, options?: ApiCallOptions): Promise<GetChangeStoreHttpResponse> {
  return invokeFetch("analytics/change-stores", {
    method: "get",
    pathTemplate: "/api/analytics/change-stores/{storeId}",
    pathVariables: { storeId },
    options,
  });
}

export type GetChangeStoreHttpResponse = {
  data: {
    data?: ChangeStore;
  };
  headers: Headers;
  status: 200;
};

export type GetChangeStoreHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500;
};

/**
 * Returns a list of changes within the specified change-store.
 * @example
 * getChangeStoreChanges(
 *   "507f1f77bcf86cd799439011",
 *   {
 *     page: "1a2b3c",
 *     limit: 100,
 *     sort: "+createdAt"
 *   }
 * )
 *
 * @param storeId The id of the change store.
 * @param query an object with query parameters
 * @throws GetChangeStoreChangesHttpError
 */
export async function getChangeStoreChanges(
  storeId: string,
  query: {
    /** A SCIM filter expression used to filter the result.
     * The filter parameter allows complex logical expressions using comparison operators and grouping.
     * - **Supported attributes:** `committed`, `cellKey.columnId`, `columnId`, `createdBy`, `createdAt`, `updatedAt`
     * - **Supported operators:** `eq`, `ne`, `co`, `sw`, `ew`, `pr`, `gt`, `ge`, `lt`, `le`  
     * - **Logical operators:** `and`, `or`, `not` */
    filter?: string;
    /** Defines the size of each paged result (maximum 100). */
    limit?: number;
    /** Used for cursor-based pagination. */
    page?: string;
    /** Sort results by a field, with optional + (asc) or - (desc) prefix */
    sort?: string;
  },
  options?: ApiCallOptions,
): Promise<GetChangeStoreChangesHttpResponse> {
  return invokeFetch("analytics/change-stores", {
    method: "get",
    pathTemplate: "/api/analytics/change-stores/{storeId}/changes",
    pathVariables: { storeId },
    query,
    options,
  });
}

export type GetChangeStoreChangesHttpResponse = {
  data: ListDefaultData &
    Pagination & {
      data?: GetChangesData[];
    };
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetChangeStoreChangesHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetChangeStoreChangesHttpResponse>;
};

export type GetChangeStoreChangesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500;
};

/**
 * Returns changes in tabular format, showing modified rows with optional expansion to include all columns.
 * @example
 * getChangeStoreChangesTabularViews(
 *   "507f1f77bcf86cd799439011",
 *   {
 *     page: "1a2b3c",
 *     limit: 100
 *   }
 * )
 *
 * @param storeId The id of the change store.
 * @param query an object with query parameters
 * @throws GetChangeStoreChangesTabularViewsHttpError
 */
export async function getChangeStoreChangesTabularViews(
  storeId: string,
  query: {
    /** When set to true, the records returned by this endpoint will include the latest change (if available) for each editable column in the record. This parameter should be used in combination with a filter on updatedAt for use cases that require all editable columns to be included in each response. */
    expandRow?: boolean;
    /** A SCIM filter expression used to filter the result.
     * The filter parameter allows complex logical expressions using comparison operators and grouping.
     * - **Supported attributes:** `committed`, `cellKey.columnId`, `columnId`, `createdBy`, `createdAt`, `updatedAt`
     * - **Supported operators:** `eq`, `ne`, `co`, `sw`, `ew`, `pr`, `gt`, `ge`, `lt`, `le`  
     * - **Logical operators:** `and`, `or`, `not` */
    filter?: string;
    /** Defines the size of each paged result (maximum 100). */
    limit?: number;
    /** Used for cursor-based pagination. */
    page?: string;
  },
  options?: ApiCallOptions,
): Promise<GetChangeStoreChangesTabularViewsHttpResponse> {
  return invokeFetch("analytics/change-stores", {
    method: "get",
    pathTemplate: "/api/analytics/change-stores/{storeId}/changes/tabular-views",
    pathVariables: { storeId },
    query,
    options,
  });
}

export type GetChangeStoreChangesTabularViewsHttpResponse = {
  data: ListDefaultData & Pagination & TabularView;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetChangeStoreChangesTabularViewsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetChangeStoreChangesTabularViewsHttpResponse>;
};

export type GetChangeStoreChangesTabularViewsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500;
};

/**
 * Returns a paginated list of editable-columns that belong to the specified change store, supporting optional filtering and sorting.
 * @example
 * getChangeStoreEditableColumns(
 *   "507f1f77bcf86cd799439011",
 *   {
 *     page: "1a2b3c",
 *     limit: 100,
 *     sort: "+createdAt"
 *   }
 * )
 *
 * @param storeId The id of the change store.
 * @param query an object with query parameters
 * @throws GetChangeStoreEditableColumnsHttpError
 */
export async function getChangeStoreEditableColumns(
  storeId: string,
  query: {
    /** A SCIM filter expression used to filter the result.
     * The filter parameter allows complex logical expressions using comparison operators and grouping.
     * - **Supported attributes:** `referenceId`, `spaceId`, `createdBy`, `type`, `columnName`, `usedBy.appId`, `usedBy.chartId`
     * - **Supported operators:** `eq`, `ne`, `co`, `sw`, `ew`, `pr`, `gt`, `ge`, `lt`, `le`  
     * - **Logical operators:** `and`, `or`, `not` */
    filter?: string;
    /** Defines the size of each paged result (maximum 100). */
    limit?: number;
    /** Used for cursor-based pagination. */
    page?: string;
    /** Sort results by a field, with optional + (asc) or - (desc) prefix */
    sort?: string;
  },
  options?: ApiCallOptions,
): Promise<GetChangeStoreEditableColumnsHttpResponse> {
  return invokeFetch("analytics/change-stores", {
    method: "get",
    pathTemplate: "/api/analytics/change-stores/{storeId}/editable-columns",
    pathVariables: { storeId },
    query,
    options,
  });
}

export type GetChangeStoreEditableColumnsHttpResponse = {
  data: ListDefaultData &
    Pagination & {
      data?: EditableColumn[];
    };
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetChangeStoreEditableColumnsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetChangeStoreEditableColumnsHttpResponse>;
};

export type GetChangeStoreEditableColumnsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500;
};

/**
 * Clears the cache for analytics/change-stores api requests.
 */
export function clearCache() {
  return clearApiCache("analytics/change-stores");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type ChangeStoresAPI = {
  /**
   * Returns a list of change-stores, accessible to the user.
   * @example
   * getChangeStores(
   *   {
   *     page: "1a2b3c",
   *     limit: 100,
   *     sort: "+storeName",
   *     spaceId: "personal"
   *   }
   * )
   *
   * @param query an object with query parameters
   * @throws GetChangeStoresHttpError
   */
  getChangeStores: typeof getChangeStores;
  /**
   * Returns detailed information about a specific change store, such as its configuration and associated charts.
   * @example
   * getChangeStore(
   *   "507f1f77bcf86cd799439011"
   * )
   *
   * @param storeId The id of the change store.
   * @throws GetChangeStoreHttpError
   */
  getChangeStore: typeof getChangeStore;
  /**
   * Returns a list of changes within the specified change-store.
   * @example
   * getChangeStoreChanges(
   *   "507f1f77bcf86cd799439011",
   *   {
   *     page: "1a2b3c",
   *     limit: 100,
   *     sort: "+createdAt"
   *   }
   * )
   *
   * @param storeId The id of the change store.
   * @param query an object with query parameters
   * @throws GetChangeStoreChangesHttpError
   */
  getChangeStoreChanges: typeof getChangeStoreChanges;
  /**
   * Returns changes in tabular format, showing modified rows with optional expansion to include all columns.
   * @example
   * getChangeStoreChangesTabularViews(
   *   "507f1f77bcf86cd799439011",
   *   {
   *     page: "1a2b3c",
   *     limit: 100
   *   }
   * )
   *
   * @param storeId The id of the change store.
   * @param query an object with query parameters
   * @throws GetChangeStoreChangesTabularViewsHttpError
   */
  getChangeStoreChangesTabularViews: typeof getChangeStoreChangesTabularViews;
  /**
   * Returns a paginated list of editable-columns that belong to the specified change store, supporting optional filtering and sorting.
   * @example
   * getChangeStoreEditableColumns(
   *   "507f1f77bcf86cd799439011",
   *   {
   *     page: "1a2b3c",
   *     limit: 100,
   *     sort: "+createdAt"
   *   }
   * )
   *
   * @param storeId The id of the change store.
   * @param query an object with query parameters
   * @throws GetChangeStoreEditableColumnsHttpError
   */
  getChangeStoreEditableColumns: typeof getChangeStoreEditableColumns;
  /**
   * Clears the cache for change-stores api requests.
   */
  clearCache: typeof clearCache;
};

/**
 * Functions for the change-stores api
 */
const changeStoresExport: ChangeStoresAPI = {
  getChangeStores,
  getChangeStore,
  getChangeStoreChanges,
  getChangeStoreChangesTabularViews,
  getChangeStoreEditableColumns,
  clearCache,
};
export default changeStoresExport;
