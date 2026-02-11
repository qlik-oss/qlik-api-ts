import { ApiCallOptions } from "../invoke-fetch-types.js";
import "../chunks/invoke-fetch-DFc3yzaj.js";

//#region src/public/rest/analytics/change-stores.d.ts
declare namespace change_stores_d_exports {
  export { CellKey, Change, ChangeStore, ChangeStoresAPI, Error, ErrorResponse, GetChangeStoreChangesHttpError, GetChangeStoreChangesHttpResponse, GetChangeStoreChangesTabularViewsHttpError, GetChangeStoreChangesTabularViewsHttpResponse, GetChangeStoreHttpError, GetChangeStoreHttpResponse, GetChangeStoresHttpError, GetChangeStoresHttpResponse, GetChangesData, ListDefaultData, Pagination, PrimaryKey, ReferenceId, RowKey, TabularView, UsedBy, UsedByArray, clearCache, changeStoresExport as default, getChangeStore, getChangeStoreChanges, getChangeStoreChangesTabularViews, getChangeStores };
}
type CellKey = {
  /** The id of the column. */columnId: string; /** A map of row keys. */
  rowKey: RowKey;
};
/**
 * @example
 * {
 *   committed: true
 * }
 */
type Change = {
  /** The value of the cell. */cellValue?: string; /** Whether the change has been committed. */
  committed?: boolean; /** The time when a user starts typing in a cell and the row becomes locked. */
  createdAt?: string; /** The id of the user who created the change. */
  createdBy?: string; /** The tenant id. */
  tenantId?: string;
  /** The time when an update to the change has been done.
   * Examples of when this value is updated:
   * - User starts typing in a cell, locking the row.
   * - User edits an unsaved change.
   * - User saves the change. */
  updatedAt?: string;
};
type ChangeStore = {
  /** The time when the change store was created. */createdAt?: string; /** The id of the user who created the change store. */
  createdBy?: string; /** The list of primary key columns for the change store. */
  primaryKey?: PrimaryKey; /** The publish reference id used to map stores across published apps/spaces. */
  publishRefId?: string; /** The reference id used to identify related editable-columns or change stores. */
  referenceId?: ReferenceId; /** The space id where the change store is located. */
  spaceId?: string; /** The id of the change store. */
  storeId?: string; /** The name of the change store. */
  storeName?: string; /** The tenant id the change store belongs to. */
  tenantId?: string; /** The time when the change store was last updated. */
  updatedAt?: string; /** List of chart/app references. */
  usedBy?: UsedByArray;
};
/**
 * An error object.
 */
type Error = {
  /** The error code. */code: string; /** Extra information about the error. */
  detail?: string; /** Description of the error. */
  title: string;
};
type ErrorResponse = {
  /** list of errors */errors?: Error[];
  traceId?: string;
};
type GetChangesData = {
  cellKey?: CellKey;
  changes?: Change[]; /** The name of the column. */
  columnName?: string;
};
type ListDefaultData = {
  currentPageCount?: number;
  totalCount?: number;
};
type Pagination = {
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
type PrimaryKey = string[];
/**
 * The reference id used to identify related editable-columns or change stores.
 * @example
 * "6835b0135cf7147c01979e5d"
 */
type ReferenceId = string;
/**
 * A map of row keys.
 * @example
 * {
 *   "product": "table"
 * }
 */
type RowKey = Record<string, string>;
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
type TabularView = {
  data?: {
    /** The timestamp when the row was last updated. */updatedAt?: string; /** The user id that performed the latest update in the row (corresponds to updatedAt). */
    updatedBy?: string;
  }[];
};
type UsedBy = {
  /** The id of the app. */appId: string; /** The id of the chart. */
  chartId: string;
};
/**
 * List of chart/app references.
 */
type UsedByArray = UsedBy[];
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
declare function getChangeStores(query: {
  /** A SCIM filter expression used to filter the result.
   * The filter parameter allows complex logical expressions using comparison operators and grouping.
   * - **Supported attributes:** `storeName`, `storeId`, `referenceId`, `usedBy.appId`, `primaryKey`
   * - **Supported operators:** `eq`, `ne`, `co`, `sw`, `ew`, `pr`, `gt`, `ge`, `lt`, `le`
   * - **Logical operators:** `and`, `or`, `not` */
  filter?: string; /** Defines the size of each paged result (maximum 100). */
  limit?: number; /** Used for cursor-based pagination. */
  page?: string; /** Sort results by a field, with optional + (asc) or - (desc) prefix */
  sort?: string;
  /** The space ID to filter change stores by. This parameter is required.
   * For personal spaces, use "personal".
   * For shared spaces, use the actual space ID, e.g. "690b584c5a8011de9079828e". */
  spaceId: string;
}, options?: ApiCallOptions): Promise<GetChangeStoresHttpResponse>;
type GetChangeStoresHttpResponse = {
  data: ListDefaultData & Pagination & {
    data?: ChangeStore[];
  };
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetChangeStoresHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetChangeStoresHttpResponse>;
};
type GetChangeStoresHttpError = {
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
declare function getChangeStore(storeId: string, options?: ApiCallOptions): Promise<GetChangeStoreHttpResponse>;
type GetChangeStoreHttpResponse = {
  data: {
    data?: ChangeStore;
  };
  headers: Headers;
  status: 200;
};
type GetChangeStoreHttpError = {
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
declare function getChangeStoreChanges(storeId: string, query: {
  /** A SCIM filter expression used to filter the result.
   * The filter parameter allows complex logical expressions using comparison operators and grouping.
   * - **Supported attributes:** `committed`, `cellKey.columnId`, `columnId`, `createdBy`, `createdAt`, `updatedAt`
   * - **Supported operators:** `eq`, `ne`, `co`, `sw`, `ew`, `pr`, `gt`, `ge`, `lt`, `le`
   * - **Logical operators:** `and`, `or`, `not` */
  filter?: string; /** Defines the size of each paged result (maximum 100). */
  limit?: number; /** Used for cursor-based pagination. */
  page?: string; /** Sort results by a field, with optional + (asc) or - (desc) prefix */
  sort?: string;
}, options?: ApiCallOptions): Promise<GetChangeStoreChangesHttpResponse>;
type GetChangeStoreChangesHttpResponse = {
  data: ListDefaultData & Pagination & {
    data?: GetChangesData[];
  };
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetChangeStoreChangesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetChangeStoreChangesHttpResponse>;
};
type GetChangeStoreChangesHttpError = {
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
declare function getChangeStoreChangesTabularViews(storeId: string, query: {
  /** When set to true, the records returned by this endpoint will include the latest change (if available) for each editable column in the record. This parameter should be used in combination with a filter on updatedAt for use cases that require all editable columns to be included in each response. */expandRow?: boolean;
  /** A SCIM filter expression used to filter the result.
   * The filter parameter allows complex logical expressions using comparison operators and grouping.
   * - **Supported attributes:** `committed`, `cellKey.columnId`, `columnId`, `createdBy`, `createdAt`, `updatedAt`
   * - **Supported operators:** `eq`, `ne`, `co`, `sw`, `ew`, `pr`, `gt`, `ge`, `lt`, `le`
   * - **Logical operators:** `and`, `or`, `not` */
  filter?: string; /** Defines the size of each paged result (maximum 100). */
  limit?: number; /** Used for cursor-based pagination. */
  page?: string;
}, options?: ApiCallOptions): Promise<GetChangeStoreChangesTabularViewsHttpResponse>;
type GetChangeStoreChangesTabularViewsHttpResponse = {
  data: ListDefaultData & Pagination & TabularView;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetChangeStoreChangesTabularViewsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetChangeStoreChangesTabularViewsHttpResponse>;
};
type GetChangeStoreChangesTabularViewsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500;
};
/**
 * Clears the cache for analytics/change-stores api requests.
 */
declare function clearCache(): void;
type ChangeStoresAPI = {
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
   * Clears the cache for change-stores api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the change-stores api
 */
declare const changeStoresExport: ChangeStoresAPI;
//#endregion
export { CellKey, Change, ChangeStore, ChangeStoresAPI, Error, ErrorResponse, GetChangeStoreChangesHttpError, GetChangeStoreChangesHttpResponse, GetChangeStoreChangesTabularViewsHttpError, GetChangeStoreChangesTabularViewsHttpResponse, GetChangeStoreHttpError, GetChangeStoreHttpResponse, GetChangeStoresHttpError, GetChangeStoresHttpResponse, GetChangesData, ListDefaultData, Pagination, PrimaryKey, ReferenceId, RowKey, TabularView, UsedBy, UsedByArray, clearCache, changeStoresExport as default, getChangeStore, getChangeStoreChanges, getChangeStoreChangesTabularViews, getChangeStores, change_stores_d_exports as t };