import { A as ApiCallOptions } from './global.types-oglBSD7D.js';
import './auth-types-nnUcWhuU.js';

/**
 * An error object.
 */
type Error = {
    /** The error code. */
    code: string;
    /** A human-readable explanation specific to this occurrence of the problem. */
    message?: string;
    /** The HTTP status code. */
    status?: number;
    /** Summary of the problem. */
    title: string;
};
/**
 * A representation of the errors encountered from the HTTP request.
 */
type Errors = {
    errors?: Error[];
};
/**
 * Notifications links
 */
type Links = {
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
/**
 * Notifications meta data
 */
type Meta = {
    /** The total number of unread notification. */
    unreadCount?: number;
};
type Notification = {
    readonly action?: string;
    readonly body: string;
    readonly createdAt: string;
    readonly id: string;
    read: boolean;
    readonly resourceId?: string;
    resourceType?: string;
    readonly spaceId?: string;
    subResourceType?: string;
    readonly tenantId?: string;
    readonly updatedAt: string;
    readonly userId: string;
};
/**
 * A JSON Patch document as defined in http://tools.ietf.org/html/rfc6902.
 */
type NotificationPatch = {
    /** The operation to be performed. */
    op: "replace";
    /** The path for the given resource field to patch. */
    path: "/description";
    /** The value to be used for this operation. */
    value: string;
};
/**
 * An array of JSON Patch documents
 */
type NotificationPatchSchema = NotificationPatch[];
type Notifications = {
    data?: Notification[];
    /** Notifications links */
    links?: Links;
    /** Notifications meta data */
    meta?: Meta;
};
/**
 * Retrieve notifications matching the query.
 *
 * @param query an object with query parameters
 * @throws GetNotificationsHttpError
 */
declare const getNotifications: (query: {
    /** The number of notification entries to retrieved. */
    limit?: number;
    /** Page number */
    page?: number;
    /** Read status of the notification */
    read?: boolean;
    /** The field to sort by, with +/- prefix indicating sort order */
    sort?: "+createdAt" | "-createdAt" | "+updatedAt" | "-updatedAt";
}, options?: ApiCallOptions) => Promise<GetNotificationsHttpResponse>;
type GetNotificationsHttpResponse = {
    data: Notifications;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetNotificationsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetNotificationsHttpResponse>;
};
type GetNotificationsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Delete all notifications.
 *
 * @throws DeleteNotificationsHttpError
 */
declare const deleteNotifications: (options?: ApiCallOptions) => Promise<DeleteNotificationsHttpResponse>;
type DeleteNotificationsHttpResponse = {
    data: Meta;
    headers: Headers;
    status: number;
};
type DeleteNotificationsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Patch all notifications.
 *
 * @param body an object with the body content
 * @throws PatchNotificationsHttpError
 */
declare const patchNotifications: (body: NotificationPatchSchema, options?: ApiCallOptions) => Promise<PatchNotificationsHttpResponse>;
type PatchNotificationsHttpResponse = {
    data: Meta;
    headers: Headers;
    status: number;
};
type PatchNotificationsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Delete a notification.
 *
 * @param notificationId The id of the notification to delete.
 * @throws DeleteNotificationHttpError
 */
declare const deleteNotification: (notificationId: string, options?: ApiCallOptions) => Promise<DeleteNotificationHttpResponse>;
type DeleteNotificationHttpResponse = {
    data: Meta;
    headers: Headers;
    status: number;
};
type DeleteNotificationHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Retrieve a single notification by Id.
 *
 * @param notificationId The id of the notification to retrieve.
 * @throws GetNotificationHttpError
 */
declare const getNotification: (notificationId: string, options?: ApiCallOptions) => Promise<GetNotificationHttpResponse>;
type GetNotificationHttpResponse = {
    data: Notification;
    headers: Headers;
    status: number;
};
type GetNotificationHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Patch a notification.
 *
 * @param notificationId The id of the notification to update.
 * @param body an object with the body content
 * @throws PatchNotificationHttpError
 */
declare const patchNotification: (notificationId: string, body: NotificationPatchSchema, options?: ApiCallOptions) => Promise<PatchNotificationHttpResponse>;
type PatchNotificationHttpResponse = {
    data: Meta;
    headers: Headers;
    status: number;
};
type PatchNotificationHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for web-notifications api requests.
 */
declare function clearCache(): void;
interface WebNotificationsAPI {
    /**
     * Retrieve notifications matching the query.
     *
     * @param query an object with query parameters
     * @throws GetNotificationsHttpError
     */
    getNotifications: typeof getNotifications;
    /**
     * Delete all notifications.
     *
     * @throws DeleteNotificationsHttpError
     */
    deleteNotifications: typeof deleteNotifications;
    /**
     * Patch all notifications.
     *
     * @param body an object with the body content
     * @throws PatchNotificationsHttpError
     */
    patchNotifications: typeof patchNotifications;
    /**
     * Delete a notification.
     *
     * @param notificationId The id of the notification to delete.
     * @throws DeleteNotificationHttpError
     */
    deleteNotification: typeof deleteNotification;
    /**
     * Retrieve a single notification by Id.
     *
     * @param notificationId The id of the notification to retrieve.
     * @throws GetNotificationHttpError
     */
    getNotification: typeof getNotification;
    /**
     * Patch a notification.
     *
     * @param notificationId The id of the notification to update.
     * @param body an object with the body content
     * @throws PatchNotificationHttpError
     */
    patchNotification: typeof patchNotification;
    /**
     * Clears the cache for web-notifications api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the web-notifications api
 */
declare const webNotificationsExport: WebNotificationsAPI;

export { type DeleteNotificationHttpError, type DeleteNotificationHttpResponse, type DeleteNotificationsHttpError, type DeleteNotificationsHttpResponse, type Error, type Errors, type GetNotificationHttpError, type GetNotificationHttpResponse, type GetNotificationsHttpError, type GetNotificationsHttpResponse, type Links, type Meta, type Notification, type NotificationPatch, type NotificationPatchSchema, type Notifications, type PatchNotificationHttpError, type PatchNotificationHttpResponse, type PatchNotificationsHttpError, type PatchNotificationsHttpResponse, type WebNotificationsAPI, clearCache, webNotificationsExport as default, deleteNotification, deleteNotifications, getNotification, getNotifications, patchNotification, patchNotifications };
