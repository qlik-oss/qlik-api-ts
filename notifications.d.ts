import { A as ApiCallOptions } from './invoke-fetch-types-D62-HKKp.js';

/**
 * An error object.
 */
type Error = {
    /** The error code. */
    code: string;
    /** A human-readable explanation specific to this occurrence of the problem. */
    detail?: string;
    /** Summary of the problem. */
    title: string;
};
/**
 * Notification result item
 */
type NotificationItem = {
    /** Indicates if the notification can be managed in the hub. If true, the object will also contain 'subscriptionInfo' object and a 'presentationInfo' object with a non-empty scopes array. */
    isManageableInHub?: boolean;
    /** Indicates if the notification can be subscribed to by users.  If true, the object will also contain 'subscriptionInfo' object */
    isSubscribable: boolean;
    /** Notification name pattern that will trigger this notification e.g resource.action */
    notificationNamePattern: string;
    /** Object containing information pertaining to the presentaion of a notification in the UI */
    presentationInfo?: {
        /** Localized, human-readable string representing the name of the notification suitable to use in a UI */
        friendlyName?: string;
        /** Friendly name to be displayed for each scope. */
        scopeFriendlyNames?: Record<string, string>;
        /** Information about the scopes to which this notification applies.  Helps determine the placement of the notification in the UI */
        scopes?: string[];
    };
    /** Object indicating what properties to use to subscribe to this notification via the 'Subscriptions' service.  For info about its properties, refer to the Subscription sevice's API doc. */
    subscriptionInfo?: {
        action: string;
        resourceId?: string;
        resourceSubType?: string;
        resourceType: string;
        target?: string;
    };
    /** Type of Transport e.g. Email, Notification, Slack message etc... */
    transports: string[];
};
/**
 * Object containing array representing list of supported notifications
 */
type NotificationsObject = {
    /** list of notifications */
    notifications: NotificationItem[];
};
/**
 * List all supported notifications
 *
 * @param query an object with query parameters
 * @throws GetNotificationsHttpError
 */
declare function getNotifications(query: {
    /** If present, idenfies the language of the returned 'friendlyName' property. */
    locale?: string;
    /** If present, represents the 'manageableInHub' value to filter by. */
    manageableInHub?: true | false;
    /** If present, represents the 'subscribable' value to filter by. */
    subscribable?: true | false;
}, options?: ApiCallOptions): Promise<GetNotificationsHttpResponse>;
type GetNotificationsHttpResponse = {
    data: NotificationsObject;
    headers: Headers;
    status: 200;
};
type GetNotificationsHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for notifications api requests.
 */
declare function clearCache(): void;
interface NotificationsAPI {
    /**
     * List all supported notifications
     *
     * @param query an object with query parameters
     * @throws GetNotificationsHttpError
     */
    getNotifications: typeof getNotifications;
    /**
     * Clears the cache for notifications api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the notifications api
 */
declare const notificationsExport: NotificationsAPI;

export { type Error, type GetNotificationsHttpError, type GetNotificationsHttpResponse, type NotificationItem, type NotificationsAPI, type NotificationsObject, clearCache, notificationsExport as default, getNotifications };
