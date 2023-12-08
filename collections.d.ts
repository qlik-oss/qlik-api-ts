import { A as ApiCallOptions } from './global.types-hIvp-WdX.js';
import './auth-types-nnUcWhuU.js';

type CollectionTypes = "private" | "public" | "publicgoverned";
type CollectionsAddCollectionItemRequestBody = {
    /** The item's unique identifier. */
    id: string;
};
type CollectionsCreateCollectionRequestBody = {
    description?: string;
    name: string;
    type: CollectionTypes;
};
type CollectionsListCollectionItemsResponseBody = {
    data: ItemResultResponseBody[];
};
type CollectionsListCollectionsResponseBody = {
    data: CollectionResultResponseBody[];
    links: CollectionsLinksResponseBody;
};
type CollectionsUpdateCollectionRequestBody = {
    description?: string;
    name?: string;
};
type ErrorResponseBody = {
    errors?: ServiceError[];
};
type Link = {
    href?: string;
};
type ServiceError = {
    /** Code is a unique identifier for this error class. */
    code?: string;
    /** Detail is a human-readable explanation specific to this occurrence of the problem. */
    detail?: string;
    meta?: Meta;
    /** Title is the name of this class of errors. */
    title?: string;
};
type CollectionLinksResponseBody = {
    items?: Link;
    self?: Link;
};
type CollectionMetaResponseBody = {
    /** Multiple items. */
    items?: ItemsResultResponseBody;
};
type CollectionResultResponseBody = {
    /** The RFC3339 datetime when the collection was created. */
    createdAt: string;
    /** The ID of the user who created the collection. This property is only populated if the JWT contains a userId. */
    creatorId?: string;
    description?: string;
    /** States if a collection has reached its items limit or not */
    full?: boolean;
    /** The collection's unique identifier. */
    id: string;
    /** The number of items that have been added to the collection that the user has access to. */
    itemCount: number;
    links: CollectionLinksResponseBody;
    /** Collection metadata and computed fields. */
    meta?: CollectionMetaResponseBody;
    name: string;
    /** The ID of the tenant that owns the collection. This property is populated by using JWT. */
    tenantId: string;
    type: "private" | "public" | "favorite" | "publicgoverned";
    /** The RFC3339 datetime when the collection was last updated. */
    updatedAt: string;
    /** The ID of the user who last updated the collection. This property is only populated if the JWT contains a userId. */
    updaterId?: string;
};
type CollectionsLinksResponseBody = {
    item?: Link;
    next?: Link;
    prev?: Link;
    self?: Link;
};
type ItemLinksResponseBody = {
    collections?: Link;
    open?: Link;
    self?: Link;
    thumbnail?: Link;
};
type ItemMetaResponseBody = {
    /** The actions that the user can perform on the item. */
    actions: string[];
    /** An array of collections that the item is part of. */
    collections: ItemTagResponseBody[];
    /** The flag that indicates if item is in the user's favorites collection. */
    isFavorited: boolean;
    /** An array of tags that the item is part of. */
    tags: ItemTagResponseBody[];
};
type ItemResourceTypeEnum = "app" | "collection" | "qlikview" | "insight" | "qvapp" | "genericlink" | "sharingservicetask" | "note" | "dataasset" | "dataset" | "automation" | "automl-experiment" | "automl-deployment";
type ItemResultResponseBody = {
    /** The actions that the user can perform on the item. */
    actions: string[];
    /** The ID of the collections that the item has been added to. */
    collectionIds: string[];
    /** The RFC3339 datetime when the item was created. */
    createdAt: string;
    /** The ID of the user who created the item. This is only populated if the JWT contains a userId. */
    creatorId?: string;
    description?: string;
    /** The item's unique identifier. */
    id: string;
    /** The flag that indicates if item is in the user's favorites collection. */
    isFavorited: boolean;
    itemViews?: ItemViewsResponseBody;
    links: ItemLinksResponseBody;
    /** Item metadata and computed fields. */
    meta: ItemMetaResponseBody;
    name: string;
    /** The ID of the user who owns the item. */
    ownerId?: string;
    resourceAttributes: unknown;
    /** The RFC3339 datetime when the resource that the item references was created. */
    resourceCreatedAt: string;
    resourceCustomAttributes: unknown;
    /** The case-sensitive string used to search for an item by resourceId. If resourceId is provided, then resourceType must be provided. Provide either the resourceId or resourceLink, but not both. */
    resourceId?: string;
    /** The case-sensitive string used to search for an item by resourceLink. If resourceLink is provided, then resourceType must be provided. Provide either the resourceId or resourceLink, but not both. */
    resourceLink?: string;
    /** The RFC3339 datetime when the resource last reload ended. */
    resourceReloadEndTime?: string;
    /** If the resource last reload was successful or not. */
    resourceReloadStatus?: string;
    resourceSize?: ItemsResourceSizeResponseBody;
    /** Optional field defining the item's subtype, if any. */
    resourceSubType?: string;
    /** The case-sensitive string defining the item's type. */
    resourceType: ItemResourceTypeEnum;
    /** The RFC3339 datetime when the resource that the item references was last updated. */
    resourceUpdatedAt: string;
    /** The space's unique identifier. */
    spaceId?: string;
    /** The ID of the tenant that owns the item. This is populated using the JWT. */
    tenantId: string;
    /** The item thumbnail's unique identifier. This is optional for internal resources. */
    thumbnailId?: string;
    /** The RFC3339 datetime when the item was last updated. */
    updatedAt: string;
    /** ID of the user who last updated the item. This is only populated if the JWT contains a userId. */
    updaterId?: string;
};
type ItemTagResponseBody = {
    /** The ID of the tag/collection. */
    id: string;
    /** The name of the tag/collection. */
    name: string;
};
type ItemViewsResponseBody = {
    /** Total number of views the resource got during the last 28 days. */
    total?: number;
    /** Trend in views over the last 4 weeks. The trend value is a float number representing a linear regression slope (the x-coefficient) calculated from the weekly unique users views in the preceding 4 weeks. */
    trend?: number;
    /** Number of unique users who viewed the resource during the last 28 days. */
    unique?: number;
    /** Number of apps this dataset is used in (datasets only). */
    usedBy?: number;
    week?: ItemViewsWeeksResponseBody[];
};
type ItemViewsWeeksResponseBody = {
    /** The RFC3339 datetime representing the start of the referenced week. */
    start?: string;
    /** Total number of views the resource got during the referenced week. */
    total?: number;
    /** Number of unique users who viewed the resource during the referenced week. */
    unique?: number;
};
type ItemsLinksResponseBody = {
    collection?: Link;
    next?: Link;
    prev?: Link;
    self?: Link;
};
type ItemsResourceSizeResponseBody = {
    /** Size of the app on disk in bytes. */
    appFile?: number;
    /** Size of the app in memory in bytes. */
    appMemory?: number;
};
type ItemsResultResponseBody = {
    data: ItemResultResponseBody[];
    links: ItemsLinksResponseBody;
};
type Meta = {
    /** Further explanation of the error */
    explain?: unknown;
    /** Is the error a server-side fault? */
    fault?: boolean;
    /** Is the error temporary? */
    temporary?: boolean;
    /** Is the error a timeout? */
    timeout?: boolean;
};
/**
 * Finds and returns the collections that the user can access. This endpoint does not return the user's favorites collection.
 *
 * @param query an object with query parameters
 * @throws GetCollectionsHttpError
 */
declare const getCollections: (query: {
    /** The case-sensitive string used to search for a resource by creatorId. */
    creatorId?: string | undefined;
    /** The collection's unique identifier. */
    id?: string | undefined;
    /** Includes the list of items belonging to the collections. Supported parameters are 'limit', 'sort' and 'resourceType'. Supported formats are json formatted string or deep object style using square brackets. */
    includeItems?: string | undefined;
    /** The maximum number of resources to return for a request. The limit must be an integer between 1 and 100 (inclusive). */
    limit?: number | undefined;
    /** The case-sensitive string used to search for a collection by name. */
    name?: string | undefined;
    /** The cursor to the next page of resources. Provide either the
    // next or prev cursor, but not both.
    //  */
    next?: string | undefined;
    /** The cursor to the previous page of resources. Provide either the next or prev cursor, but not both. */
    prev?: string | undefined;
    /** The case-insensitive string used to search for a resource by name or description. */
    query?: string | undefined;
    /** The property of a resource to sort on (default sort is +createdAt).
    // The supported properties are createdAt, updatedAt, and name. A property
    // must be prefixed by + or - to indicate ascending or descending sort order
    // respectively.
    //  */
    sort?: "+name" | "+createdAt" | "+updatedAt" | "-name" | "-createdAt" | "-updatedAt" | undefined;
    /** The case-sensitive string used to filter for a collection by type. */
    type?: CollectionTypes | undefined;
    /** A commaseparated case-sensitive string used to filter by multiple types. */
    types?: CollectionTypes[] | undefined;
}, options?: ApiCallOptions) => Promise<GetCollectionsHttpResponse>;
type GetCollectionsHttpResponse = {
    data: CollectionsListCollectionsResponseBody;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetCollectionsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetCollectionsHttpResponse>;
};
type GetCollectionsHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Creates and returns a new collection. Collections can have the same name.
 *
 * @param body an object with the body content
 * @throws CreateCollectionHttpError
 */
declare const createCollection: (body: CollectionsCreateCollectionRequestBody, options?: ApiCallOptions) => Promise<CreateCollectionHttpResponse>;
type CreateCollectionHttpResponse = {
    data: CollectionResultResponseBody;
    headers: Headers;
    status: number;
};
type CreateCollectionHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns the user's favorites collection.
 *
 * @throws GetFavoritesCollectionHttpError
 */
declare const getFavoritesCollection: (options?: ApiCallOptions) => Promise<GetFavoritesCollectionHttpResponse>;
type GetFavoritesCollectionHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type GetFavoritesCollection302HttpError = {
    data: unknown;
    headers: Headers;
    status: 302;
};
type GetFavoritesCollection401HttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: 401;
};
type GetFavoritesCollection404HttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: 404;
};
type GetFavoritesCollection500HttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: 500;
};
type GetFavoritesCollectionHttpError = GetFavoritesCollection302HttpError | GetFavoritesCollection401HttpError | GetFavoritesCollection404HttpError | GetFavoritesCollection500HttpError;
/**
 * Deletes a collection and removes all items from the collection.
 *
 * @param collectionId The collection's unique identifier.
 * @throws DeleteCollectionHttpError
 */
declare const deleteCollection: (collectionId: string, options?: ApiCallOptions) => Promise<DeleteCollectionHttpResponse>;
type DeleteCollectionHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteCollectionHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns a collection.
 *
 * @param collectionId The collection's unique identifier.
 * @throws GetCollectionHttpError
 */
declare const getCollection: (collectionId: string, options?: ApiCallOptions) => Promise<GetCollectionHttpResponse>;
type GetCollectionHttpResponse = {
    data: CollectionResultResponseBody;
    headers: Headers;
    status: number;
};
type GetCollectionHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Updates a collection and returns the new collection. Omitted and unsupported fields are ignored. To unset a field, provide the field's zero value.
 *
 * @param collectionId The collection's unique identifier.
 * @param body an object with the body content
 * @throws UpdateCollectionHttpError
 */
declare const updateCollection: (collectionId: string, body: CollectionsUpdateCollectionRequestBody, options?: ApiCallOptions) => Promise<UpdateCollectionHttpResponse>;
type UpdateCollectionHttpResponse = {
    data: CollectionResultResponseBody;
    headers: Headers;
    status: number;
};
type UpdateCollectionHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns items from a collection that the user has access to.
 *
 * @param collectionId The collection's unique identifier. (This query also supports 'favorites' as the collectionID).

 * @param query an object with query parameters
 * @throws GetCollectionItemsHttpError
 */
declare const getCollectionItems: (collectionId: string, query: {
    /** The maximum number of resources to return for a request. The limit must be an integer between 1 and 100 (inclusive). */
    limit?: number | undefined;
    /** The case-insensitive string used to search for a resource by name. */
    name?: string | undefined;
    /** The cursor to the next page of resources. Provide either the next or prev cursor, but not both. */
    next?: string | undefined;
    /** If set to true, the user's available actions for each item will not be evaluated meaning the actions-array will be omitted from the response (reduces response time).
    //  */
    noActions?: boolean | undefined;
    /** The cursor to the previous page of resources. Provide either the next or prev cursor, but not both. */
    prev?: string | undefined;
    /** The case-insensitive string used to search for a resource by name or description. */
    query?: string | undefined;
    /** The case-sensitive string used to search for an item by resourceId. If resourceId is provided, then resourceType must be provided. Provide either the resourceId or resourceLink, but not both. */
    resourceId?: string | undefined;
    /** The case-sensitive string used to search for an item by resourceLink. If resourceLink is provided, then resourceType must be provided. Provide either the resourceId or resourceLink, but not both. */
    resourceLink?: string | undefined;
    /** The case-sensitive string used to search for an item by resourceType. */
    resourceType?: ItemResourceTypeEnum | undefined;
    /** Whether or not to return items in a shared space. */
    shared?: boolean | undefined;
    /** The property of a resource to sort on (default sort is +createdAt). The supported properties are createdAt, updatedAt, and name. A property must be prefixed by + or   - to indicate ascending or descending sort order respectively. */
    sort?: "+name" | "+createdAt" | "+updatedAt" | "-name" | "-createdAt" | "-updatedAt" | undefined;
    /** The space's unique identifier (supports \'personal\' as spaceId). */
    spaceId?: string | undefined;
}, options?: ApiCallOptions) => Promise<GetCollectionItemsHttpResponse>;
type GetCollectionItemsHttpResponse = {
    data: CollectionsListCollectionItemsResponseBody;
    headers: Headers;
    status: number;
};
type GetCollectionItemsHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Adds an item to a collection and returns the item.
 *
 * @param collectionId The collection's unique identifier.
 * @param body an object with the body content
 * @throws AddCollectionItemHttpError
 */
declare const addCollectionItem: (collectionId: string, body: CollectionsAddCollectionItemRequestBody, options?: ApiCallOptions) => Promise<AddCollectionItemHttpResponse>;
type AddCollectionItemHttpResponse = {
    data: ItemResultResponseBody;
    headers: Headers;
    status: number;
};
type AddCollectionItemHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Removes an item from a collection.
 *
 * @param collectionId The collection's unique identifier.
 * @param itemId The item's unique identifier.
 * @throws DeleteCollectionItemHttpError
 */
declare const deleteCollectionItem: (collectionId: string, itemId: string, options?: ApiCallOptions) => Promise<DeleteCollectionItemHttpResponse>;
type DeleteCollectionItemHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteCollectionItemHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns an item. See GET /items/{id}
 *
 * @param collectionId The collection's unique identifier.
 * @param itemId The item's unique identifier.
 * @throws GetCollectionItemHttpError
 */
declare const getCollectionItem: (collectionId: string, itemId: string, options?: ApiCallOptions) => Promise<GetCollectionItemHttpResponse>;
type GetCollectionItemHttpResponse = {
    data: ItemResultResponseBody;
    headers: Headers;
    status: number;
};
type GetCollectionItemHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for collections api requests.
 */
declare function clearCache(): void;
interface CollectionsAPI {
    /**
     * Finds and returns the collections that the user can access. This endpoint does not return the user's favorites collection.
     *
     * @param query an object with query parameters
     * @throws GetCollectionsHttpError
     */
    getCollections: typeof getCollections;
    /**
     * Creates and returns a new collection. Collections can have the same name.
     *
     * @param body an object with the body content
     * @throws CreateCollectionHttpError
     */
    createCollection: typeof createCollection;
    /**
     * Finds and returns the user's favorites collection.
     *
     * @throws GetFavoritesCollectionHttpError
     */
    getFavoritesCollection: typeof getFavoritesCollection;
    /**
     * Deletes a collection and removes all items from the collection.
     *
     * @param collectionId The collection's unique identifier.
     * @throws DeleteCollectionHttpError
     */
    deleteCollection: typeof deleteCollection;
    /**
     * Finds and returns a collection.
     *
     * @param collectionId The collection's unique identifier.
     * @throws GetCollectionHttpError
     */
    getCollection: typeof getCollection;
    /**
     * Updates a collection and returns the new collection. Omitted and unsupported fields are ignored. To unset a field, provide the field's zero value.
     *
     * @param collectionId The collection's unique identifier.
     * @param body an object with the body content
     * @throws UpdateCollectionHttpError
     */
    updateCollection: typeof updateCollection;
    /**
   * Finds and returns items from a collection that the user has access to.
   *
   * @param collectionId The collection's unique identifier. (This query also supports 'favorites' as the collectionID).
  
   * @param query an object with query parameters
   * @throws GetCollectionItemsHttpError
   */
    getCollectionItems: typeof getCollectionItems;
    /**
     * Adds an item to a collection and returns the item.
     *
     * @param collectionId The collection's unique identifier.
     * @param body an object with the body content
     * @throws AddCollectionItemHttpError
     */
    addCollectionItem: typeof addCollectionItem;
    /**
     * Removes an item from a collection.
     *
     * @param collectionId The collection's unique identifier.
     * @param itemId The item's unique identifier.
     * @throws DeleteCollectionItemHttpError
     */
    deleteCollectionItem: typeof deleteCollectionItem;
    /**
     * Finds and returns an item. See GET /items/{id}
     *
     * @param collectionId The collection's unique identifier.
     * @param itemId The item's unique identifier.
     * @throws GetCollectionItemHttpError
     */
    getCollectionItem: typeof getCollectionItem;
    /**
     * Clears the cache for collections api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the collections api
 */
declare const collectionsExport: CollectionsAPI;

export { type AddCollectionItemHttpError, type AddCollectionItemHttpResponse, type CollectionLinksResponseBody, type CollectionMetaResponseBody, type CollectionResultResponseBody, type CollectionTypes, type CollectionsAPI, type CollectionsAddCollectionItemRequestBody, type CollectionsCreateCollectionRequestBody, type CollectionsLinksResponseBody, type CollectionsListCollectionItemsResponseBody, type CollectionsListCollectionsResponseBody, type CollectionsUpdateCollectionRequestBody, type CreateCollectionHttpError, type CreateCollectionHttpResponse, type DeleteCollectionHttpError, type DeleteCollectionHttpResponse, type DeleteCollectionItemHttpError, type DeleteCollectionItemHttpResponse, type ErrorResponseBody, type GetCollectionHttpError, type GetCollectionHttpResponse, type GetCollectionItemHttpError, type GetCollectionItemHttpResponse, type GetCollectionItemsHttpError, type GetCollectionItemsHttpResponse, type GetCollectionsHttpError, type GetCollectionsHttpResponse, type GetFavoritesCollection302HttpError, type GetFavoritesCollection401HttpError, type GetFavoritesCollection404HttpError, type GetFavoritesCollection500HttpError, type GetFavoritesCollectionHttpError, type GetFavoritesCollectionHttpResponse, type ItemLinksResponseBody, type ItemMetaResponseBody, type ItemResourceTypeEnum, type ItemResultResponseBody, type ItemTagResponseBody, type ItemViewsResponseBody, type ItemViewsWeeksResponseBody, type ItemsLinksResponseBody, type ItemsResourceSizeResponseBody, type ItemsResultResponseBody, type Link, type Meta, type ServiceError, type UpdateCollectionHttpError, type UpdateCollectionHttpResponse, addCollectionItem, clearCache, createCollection, collectionsExport as default, deleteCollection, deleteCollectionItem, getCollection, getCollectionItem, getCollectionItems, getCollections, getFavoritesCollection, updateCollection };
