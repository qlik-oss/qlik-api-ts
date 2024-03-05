import { A as ApiCallOptions } from './global.types-B14bb3X9.js';
import './auth-types-1P4wuncR.js';

type CollectionTypes = "private" | "public" | "publicgoverned";
type ErrorResponseBody = {
    errors?: ServiceError[];
};
/**
 * ListItemCollectionsResponseBody result type
 */
type ItemsListItemCollectionsResponseBody = {
    data: CollectionResultResponseBody[];
    links: CollectionsLinksResponseBody;
};
/**
 * ListItemsResponseBody result type
 */
type ItemsListItemsResponseBody = {
    data: ItemResultResponseBody[];
    links: ItemsLinksResponseBody;
};
type ItemsSettingsPatch = {
    /** The operation to be performed. Only "replace" is supported. */
    op: "replace";
    /** Field of Settings to be patched (updated). */
    path: "/usageMetricsEnabled";
    /** The value to be used within the operations. */
    value: boolean;
}[];
type ItemsSettingsResponseBody = {
    /** Decides if the usage metrics will be shown in the hub UI. */
    usageMetricsEnabled: boolean;
};
type ItemsUpdateItemRequestBody = {
    description?: string;
    name?: string;
    resourceAttributes?: unknown;
    resourceCustomAttributes?: unknown;
    /** The case-sensitive string used to search for an item by resourceId. If resourceId is provided, then resourceType must be provided. Provide either the resourceId or resourceLink, but not both. */
    resourceId?: string;
    /** The case-sensitive string used to search for an item by resourceLink. If resourceLink is provided, then resourceType must be provided. Provide either the resourceId or resourceLink, but not both. */
    resourceLink?: string;
    /** Optional field defining the item's subtype, if any. */
    resourceSubType?: string;
    /** The case-sensitive string defining the item's type. */
    resourceType: ItemResourceTypeEnum;
    /** The RFC3339 datetime when the resource that the item references was last updated. */
    resourceUpdatedAt?: string;
    /** The space's unique identifier. */
    spaceId?: string;
    /** The item thumbnail's unique identifier. This is optional for internal resources. */
    thumbnailId?: string;
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
/**
 * Collection metadata and computed fields.
 */
type CollectionMetaResponseBody = {
    /** Multiple items. */
    items?: ItemsResultResponseBody;
};
/**
 * A collection.
 */
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
/**
 * Item metadata and computed fields.
 */
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
/**
 * The case-sensitive string defining the item's type.
 */
type ItemResourceTypeEnum = "app" | "collection" | "qlikview" | "insight" | "qvapp" | "genericlink" | "sharingservicetask" | "note" | "dataasset" | "dataset" | "automation" | "automl-experiment" | "automl-deployment";
/**
 * An item.
 */
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
/**
 * Holds basic information about a tag or collection.
 */
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
/**
 * Multiple items.
 */
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
 * The case-sensitive string defining the space type.
 */
type SpaceTypeEnum = "shared" | "managed" | "personal" | "data";
/**
 * Finds and returns items that the user has access to.
 *
 * @param query an object with query parameters
 * @throws GetItemsHttpError
 */
declare const getItems: (query: {
    /** The collection's unique identifier. */
    collectionId?: string | undefined;
    /** User's unique identifier. */
    createdByUserId?: string | undefined;
    /** The item's unique identifier. */
    id?: string | undefined;
    /** The maximum number of resources to return for a request. The limit must be an integer between 1 and 100 (inclusive). */
    limit?: number | undefined;
    /** The case-insensitive string used to search for a resource by name. */
    name?: string | undefined;
    /** The cursor to the next page of resources. Provide either the next or prev cursor, but not both. */
    next?: string | undefined;
    /** If set to true, the user's available actions for each item will not be evaluated meaning the actions-array will be omitted from the response (reduces response time). */
    noActions?: boolean | undefined;
    /** User's unique identifier. */
    notCreatedByUserId?: string | undefined;
    /** Owner identifier. */
    notOwnerId?: string | undefined;
    /** Owner identifier. */
    ownerId?: string | undefined;
    /** The cursor to the previous page of resources. Provide either the next or prev cursor, but not both. */
    prev?: string | undefined;
    /** The case-insensitive string used to search for a resource by name or description. */
    query?: string | undefined;
    /** The case-sensitive string used to search for an item by resourceId. If resourceId is provided, then resourceType must be provided. Provide either the resourceId or resourceLink, but not both. */
    resourceId?: string | undefined;
    /** The case-sensitive strings used to search for an item by resourceIds. The maximum number of resourceIds it supports is 100. If resourceIds is provided, then resourceType must be provided. For example '?resourceIds=appId1,appId2' */
    resourceIds?: string | undefined;
    /** The case-sensitive string used to search for an item by resourceLink. If resourceLink is provided, then resourceType must be provided. Provide either the resourceId or resourceLink, but not both. */
    resourceLink?: string | undefined;
    /** the case-sensitive string used to filter items by resourceSubType(s). For example '?resourceSubType=chart-monitoring,qix-df,qvd'. Will return a 400 error if used in conjuction with the square bracket syntax for resourceSubType filtering in the 'resourceType' query parameter. */
    resourceSubType?: string | undefined;
    /** The case-sensitive string used to filter items by resourceType(s). For example '?resourceType=app,qvapp'. Additionally, a optional resourceSubType filter can be added to each resourceType. For example '?resourceType=app[qvd,chart-monitoring],qvapp'. An trailing comma can be used to include the empty resourceSubType, e.g. '?resourceType=app[qvd,chart-monitoring,]', or, to include only empty resourceSubTypes, '?resourceType=app[]' This syntax replaces the 'resourceSubType' query param, and using both in the same query will result in a 400 error. */
    resourceType?: ItemResourceTypeEnum | undefined;
    /** @deprecated
     * Whether or not to return items in a shared space. */
    shared?: boolean | undefined;
    /** The property of a resource to sort on (default sort is +createdAt). The supported properties are createdAt, updatedAt, and name. A property must be prefixed by + or   - to indicate ascending or descending sort order respectively. */
    sort?: "-name" | "+name" | "+createdAt" | "-createdAt" | "+updatedAt" | "-updatedAt" | undefined;
    /** The space's unique identifier (supports \'personal\' as spaceId). */
    spaceId?: string | undefined;
    /** The case-sensitive string used to filter items on space type(s). For example '?spaceType=shared,personal'. */
    spaceType?: SpaceTypeEnum | undefined;
}, options?: ApiCallOptions) => Promise<GetItemsHttpResponse>;
type GetItemsHttpResponse = {
    data: ItemsListItemsResponseBody;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetItemsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetItemsHttpResponse>;
};
type GetItemsHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns the settings for the current tenant.
 *
 * @throws GetItemsSettingsHttpError
 */
declare const getItemsSettings: (options?: ApiCallOptions) => Promise<GetItemsSettingsHttpResponse>;
type GetItemsSettingsHttpResponse = {
    data: ItemsSettingsResponseBody;
    headers: Headers;
    status: number;
};
type GetItemsSettingsHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Updates the settings provided in the patch body.
 *
 * @param body an object with the body content
 * @throws PatchItemsSettingsHttpError
 */
declare const patchItemsSettings: (body: ItemsSettingsPatch, options?: ApiCallOptions) => Promise<PatchItemsSettingsHttpResponse>;
type PatchItemsSettingsHttpResponse = {
    data: ItemsSettingsResponseBody;
    headers: Headers;
    status: number;
};
type PatchItemsSettingsHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Deletes an item and removes the item from all collections.
 *
 * @param itemId The item's unique identifier.
 * @throws DeleteItemHttpError
 */
declare const deleteItem: (itemId: string, options?: ApiCallOptions) => Promise<DeleteItemHttpResponse>;
type DeleteItemHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteItemHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns an item.
 *
 * @param itemId The item's unique identifier
 * @throws GetItemHttpError
 */
declare const getItem: (itemId: string, options?: ApiCallOptions) => Promise<GetItemHttpResponse>;
type GetItemHttpResponse = {
    data: ItemResultResponseBody;
    headers: Headers;
    status: number;
};
type GetItemHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Updates an item. Omitted and unsupported fields are ignored. To unset a field, provide the field's zero value.
 *
 * @param itemId The item's unique identifier.
 * @param body an object with the body content
 * @throws UpdateItemHttpError
 */
declare const updateItem: (itemId: string, body: ItemsUpdateItemRequestBody, options?: ApiCallOptions) => Promise<UpdateItemHttpResponse>;
type UpdateItemHttpResponse = {
    data: ItemResultResponseBody;
    headers: Headers;
    status: number;
};
type UpdateItemHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns the collections of an item. This endpoint does not return the user's favorites collection.
 *
 * @param itemId The item's unique identifier.
 * @param query an object with query parameters
 * @throws GetItemCollectionsHttpError
 */
declare const getItemCollections: (itemId: string, query: {
    /** The maximum number of resources to return for a request. The limit must be an integer between 1 and 100 (inclusive). */
    limit?: number | undefined;
    /** The case-sensitive string used to search for a collection by name. */
    name?: string | undefined;
    /** The cursor to the next page of resources. Provide either the next or prev cursor, but not both. */
    next?: string | undefined;
    /** The cursor to the previous page of resources. Provide either the next or prev cursor, but not both. */
    prev?: string | undefined;
    /** The case-insensitive string used to search for a resource by name or description. */
    query?: string | undefined;
    /** The property of a resource to sort on (default sort is +createdAt). The supported properties are createdAt, updatedAt, and name. A property must be prefixed by + or   - to indicate ascending or descending sort order respectively. */
    sort?: "-name" | "+name" | "+createdAt" | "-createdAt" | "+updatedAt" | "-updatedAt" | undefined;
    /** The case-sensitive string used to search for a collection by type. */
    type?: CollectionTypes | undefined;
}, options?: ApiCallOptions) => Promise<GetItemCollectionsHttpResponse>;
type GetItemCollectionsHttpResponse = {
    data: ItemsListItemCollectionsResponseBody;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetItemCollectionsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetItemCollectionsHttpResponse>;
};
type GetItemCollectionsHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Finds and returns the published items for a given item. This endpoint is particularly useful for finding the published copies of an app or a qvapp when you want to replace the content of a published copy with new information from the source item.
 *
 * @param itemId The item's unique identifier
 * @param query an object with query parameters
 * @throws GetPublishedItemsHttpError
 */
declare const getPublishedItems: (itemId: string, query: {
    /** The maximum number of resources to return for a request. The limit must be an integer between 1 and 100 (inclusive). */
    limit?: number;
    /** The cursor to the next page of resources. Provide either the next or prev cursor, but not both. */
    next?: string;
    /** The cursor to the previous page of resources. Provide either the next or prev cursor, but not both. */
    prev?: string;
    /** The case-sensitive string used to search for an item by resourceType. */
    resourceType?: ItemResourceTypeEnum;
    /** The property of a resource to sort on (default sort is +createdAt). The supported properties are createdAt, updatedAt, and name. A property must be prefixed by + or   - to indicate ascending or descending sort order respectively. */
    sort?: "+createdAt" | "-createdAt" | "+name" | "-name" | "+updatedAt" | "-updatedAt";
}, options?: ApiCallOptions) => Promise<GetPublishedItemsHttpResponse>;
type GetPublishedItemsHttpResponse = {
    data: ItemsListItemCollectionsResponseBody;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetPublishedItemsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetPublishedItemsHttpResponse>;
};
type GetPublishedItemsHttpError = {
    data: ErrorResponseBody;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for items api requests.
 */
declare function clearCache(): void;
interface ItemsAPI {
    /**
     * Finds and returns items that the user has access to.
     *
     * @param query an object with query parameters
     * @throws GetItemsHttpError
     */
    getItems: typeof getItems;
    /**
     * Finds and returns the settings for the current tenant.
     *
     * @throws GetItemsSettingsHttpError
     */
    getItemsSettings: typeof getItemsSettings;
    /**
     * Updates the settings provided in the patch body.
     *
     * @param body an object with the body content
     * @throws PatchItemsSettingsHttpError
     */
    patchItemsSettings: typeof patchItemsSettings;
    /**
     * Deletes an item and removes the item from all collections.
     *
     * @param itemId The item's unique identifier.
     * @throws DeleteItemHttpError
     */
    deleteItem: typeof deleteItem;
    /**
     * Finds and returns an item.
     *
     * @param itemId The item's unique identifier
     * @throws GetItemHttpError
     */
    getItem: typeof getItem;
    /**
     * Updates an item. Omitted and unsupported fields are ignored. To unset a field, provide the field's zero value.
     *
     * @param itemId The item's unique identifier.
     * @param body an object with the body content
     * @throws UpdateItemHttpError
     */
    updateItem: typeof updateItem;
    /**
     * Finds and returns the collections of an item. This endpoint does not return the user's favorites collection.
     *
     * @param itemId The item's unique identifier.
     * @param query an object with query parameters
     * @throws GetItemCollectionsHttpError
     */
    getItemCollections: typeof getItemCollections;
    /**
     * Finds and returns the published items for a given item. This endpoint is particularly useful for finding the published copies of an app or a qvapp when you want to replace the content of a published copy with new information from the source item.
     *
     * @param itemId The item's unique identifier
     * @param query an object with query parameters
     * @throws GetPublishedItemsHttpError
     */
    getPublishedItems: typeof getPublishedItems;
    /**
     * Clears the cache for items api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the items api
 */
declare const itemsExport: ItemsAPI;

export { type CollectionLinksResponseBody, type CollectionMetaResponseBody, type CollectionResultResponseBody, type CollectionTypes, type CollectionsLinksResponseBody, type DeleteItemHttpError, type DeleteItemHttpResponse, type ErrorResponseBody, type GetItemCollectionsHttpError, type GetItemCollectionsHttpResponse, type GetItemHttpError, type GetItemHttpResponse, type GetItemsHttpError, type GetItemsHttpResponse, type GetItemsSettingsHttpError, type GetItemsSettingsHttpResponse, type GetPublishedItemsHttpError, type GetPublishedItemsHttpResponse, type ItemLinksResponseBody, type ItemMetaResponseBody, type ItemResourceTypeEnum, type ItemResultResponseBody, type ItemTagResponseBody, type ItemViewsResponseBody, type ItemViewsWeeksResponseBody, type ItemsAPI, type ItemsLinksResponseBody, type ItemsListItemCollectionsResponseBody, type ItemsListItemsResponseBody, type ItemsResourceSizeResponseBody, type ItemsResultResponseBody, type ItemsSettingsPatch, type ItemsSettingsResponseBody, type ItemsUpdateItemRequestBody, type Link, type Meta, type PatchItemsSettingsHttpError, type PatchItemsSettingsHttpResponse, type ServiceError, type SpaceTypeEnum, type UpdateItemHttpError, type UpdateItemHttpResponse, clearCache, itemsExport as default, deleteItem, getItem, getItemCollections, getItems, getItemsSettings, getPublishedItems, patchItemsSettings, updateItem };
