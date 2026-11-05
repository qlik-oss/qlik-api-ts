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

/**
 * An error object.
 */
export type Error = {
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
export type Errors = {
  errors?: Error[];
};

/**
 * Notifications links
 */
export type Links = {
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
export type Meta = {
  /** The total number of unread notification. */
  unreadCount?: number;
};

export type Notification = {
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
export type NotificationPatch = {
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
export type NotificationPatchSchema = NotificationPatch[];

export type Notifications = {
  data?: Notification[];
  /** Notifications links */
  links?: Links;
  /** Notifications meta data */
  meta?: Meta;
};

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

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
export async function getNotifications(
  query: {
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
  },
  options?: ApiCallOptions,
): Promise<GetNotificationsHttpResponse> {
  return invokeFetch("web-notifications", {
    method: "get",
    pathTemplate: "/api/v1/web-notifications",
    query,
    options,
  });
}

export type GetNotificationsHttpResponse = {
  data: Notifications;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetNotificationsHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetNotificationsHttpResponse>;
};

export type GetNotificationsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 500;
};

/**
 * Delete all notifications.
 *
 * @throws DeleteNotificationsHttpError
 */
export async function deleteNotifications(options?: ApiCallOptions): Promise<DeleteNotificationsHttpResponse> {
  return invokeFetch("web-notifications", {
    method: "delete",
    pathTemplate: "/api/v1/web-notifications/all",
    options,
  });
}

export type DeleteNotificationsHttpResponse = {
  data: Meta;
  headers: Headers;
  status: 204;
};

export type DeleteNotificationsHttpError = {
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
export async function patchNotifications(
  body: NotificationPatchSchema,
  options?: ApiCallOptions,
): Promise<PatchNotificationsHttpResponse> {
  return invokeFetch("web-notifications", {
    method: "patch",
    pathTemplate: "/api/v1/web-notifications/all",
    body,
    contentType: "application/json",
    options,
  });
}

export type PatchNotificationsHttpResponse = {
  data: Meta;
  headers: Headers;
  status: 204;
};

export type PatchNotificationsHttpError = {
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
export async function deleteNotification(
  notificationId: string,
  options?: ApiCallOptions,
): Promise<DeleteNotificationHttpResponse> {
  return invokeFetch("web-notifications", {
    method: "delete",
    pathTemplate: "/api/v1/web-notifications/{notificationId}",
    pathVariables: { notificationId },
    options,
  });
}

export type DeleteNotificationHttpResponse = {
  data: Meta;
  headers: Headers;
  status: 204;
};

export type DeleteNotificationHttpError = {
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
export async function getNotification(
  notificationId: string,
  options?: ApiCallOptions,
): Promise<GetNotificationHttpResponse> {
  return invokeFetch("web-notifications", {
    method: "get",
    pathTemplate: "/api/v1/web-notifications/{notificationId}",
    pathVariables: { notificationId },
    options,
  });
}

export type GetNotificationHttpResponse = {
  data: Notification;
  headers: Headers;
  status: 200;
};

export type GetNotificationHttpError = {
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
export async function patchNotification(
  notificationId: string,
  body: NotificationPatchSchema,
  options?: ApiCallOptions,
): Promise<PatchNotificationHttpResponse> {
  return invokeFetch("web-notifications", {
    method: "patch",
    pathTemplate: "/api/v1/web-notifications/{notificationId}",
    pathVariables: { notificationId },
    body,
    contentType: "application/json",
    options,
  });
}

export type PatchNotificationHttpResponse = {
  data: Meta;
  headers: Headers;
  status: 204;
};

export type PatchNotificationHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 404 | 500;
};

/**
 * Clears the cache for web-notifications api requests.
 */
export function clearCache() {
  return clearApiCache("web-notifications");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type WebNotificationsAPI = {
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
const webNotificationsExport: WebNotificationsAPI = {
  getNotifications,
  deleteNotifications,
  patchNotifications,
  deleteNotification,
  getNotification,
  patchNotification,
  clearCache,
};
export default webNotificationsExport;
