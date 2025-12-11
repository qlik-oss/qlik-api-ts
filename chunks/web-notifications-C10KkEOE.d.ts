import { y as ApiCallOptions } from "./auth-types-CJNqN_zp.js";

//#region src/public/rest/web-notifications.d.ts

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
  meta: unknown;
  read: boolean;
  readonly resourceId?: string;
  resourceType?: string;
  readonly spaceId?: string;
  spaceType?: string;
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
  path: "/read";
  /** The value to be used for this operation. */
  value: string;
};
/**
 * An array of JSON Patch documents
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/read"
 *   }
 * ]
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
 * @example
 * getNotifications(
 *   {
 *     resourceType: "app,space"
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetNotificationsHttpError
 */
declare function getNotifications(query: {
  /** The number of notification entries to retrieved. */
  limit?: number;
  /** Page number */
  page?: number;
  /** Read status of the notification */
  read?: boolean;
  /** Filter by resource types. If passing more than 1 resource type, use comma seperated string. */
  resourceType?: string;
  /** The field to sort by, with +/- prefix indicating sort order */
  sort?: "+createdAt" | "-createdAt" | "+updatedAt" | "-updatedAt";
}, options?: ApiCallOptions): Promise<GetNotificationsHttpResponse>;
type GetNotificationsHttpResponse = {
  data: Notifications;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetNotificationsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetNotificationsHttpResponse>;
};
type GetNotificationsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 500;
};
/**
 * Delete all notifications.
 *
 * @throws DeleteNotificationsHttpError
 */
declare function deleteNotifications(options?: ApiCallOptions): Promise<DeleteNotificationsHttpResponse>;
type DeleteNotificationsHttpResponse = {
  data: Meta;
  headers: Headers;
  status: 204;
};
type DeleteNotificationsHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 500;
};
/**
 * Patch all notifications.
 *
 * @param body an object with the body content
 * @throws PatchNotificationsHttpError
 */
declare function patchNotifications(body: NotificationPatchSchema, options?: ApiCallOptions): Promise<PatchNotificationsHttpResponse>;
type PatchNotificationsHttpResponse = {
  data: Meta;
  headers: Headers;
  status: 204;
};
type PatchNotificationsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 500;
};
/**
 * Delete a notification.
 *
 * @param notificationId The id of the notification to delete.
 * @throws DeleteNotificationHttpError
 */
declare function deleteNotification(notificationId: string, options?: ApiCallOptions): Promise<DeleteNotificationHttpResponse>;
type DeleteNotificationHttpResponse = {
  data: Meta;
  headers: Headers;
  status: 204;
};
type DeleteNotificationHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 404 | 500;
};
/**
 * Retrieve a single notification by Id.
 *
 * @param notificationId The id of the notification to retrieve.
 * @throws GetNotificationHttpError
 */
declare function getNotification(notificationId: string, options?: ApiCallOptions): Promise<GetNotificationHttpResponse>;
type GetNotificationHttpResponse = {
  data: Notification;
  headers: Headers;
  status: 200;
};
type GetNotificationHttpError = {
  data: Errors;
  headers: Headers;
  status: 401 | 404 | 500;
};
/**
 * Patch a notification.
 *
 * @param notificationId The id of the notification to update.
 * @param body an object with the body content
 * @throws PatchNotificationHttpError
 */
declare function patchNotification(notificationId: string, body: NotificationPatchSchema, options?: ApiCallOptions): Promise<PatchNotificationHttpResponse>;
type PatchNotificationHttpResponse = {
  data: Meta;
  headers: Headers;
  status: 204;
};
type PatchNotificationHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 404 | 500;
};
/**
 * Clears the cache for web-notifications api requests.
 */
declare function clearCache(): void;
type WebNotificationsAPI = {
  /**
   * Retrieve notifications matching the query.
   * @example
   * getNotifications(
   *   {
   *     resourceType: "app,space"
   *   }
   * )
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
};
/**
 * Functions for the web-notifications api
 */
declare const webNotificationsExport: WebNotificationsAPI;
//#endregion
export { deleteNotification as C, patchNotification as D, getNotifications as E, patchNotifications as O, clearCache as S, getNotification as T, PatchNotificationHttpError as _, Error as a, PatchNotificationsHttpResponse as b, GetNotificationHttpResponse as c, Links as d, Meta as f, Notifications as g, NotificationPatchSchema as h, DeleteNotificationsHttpResponse as i, webNotificationsExport as k, GetNotificationsHttpError as l, NotificationPatch as m, DeleteNotificationHttpResponse as n, Errors as o, Notification as p, DeleteNotificationsHttpError as r, GetNotificationHttpError as s, DeleteNotificationHttpError as t, GetNotificationsHttpResponse as u, PatchNotificationHttpResponse as v, deleteNotifications as w, WebNotificationsAPI as x, PatchNotificationsHttpError as y };