import { y as ApiCallOptions } from "./auth-types-BK8AvfyD.js";

//#region src/public/rest/webhooks.d.ts
type Delivery = {
  /** The name of the triggering event-type */
  eventType: string;
  /** The delivery's unique identifier */
  id: string;
  request?: {
    /** The sent body/payload of the delivery */
    body?: unknown;
    /** Headers sent for this delivery, values of encryptedHeaders are omitted as such "**OMITTED**" */
    headers?: Record<string, string>;
    /** URL used for this delivery */
    url?: string;
  };
  response?: {
    /** The received body of the delivery */
    body?: string;
    /** Headers received for this delivery, values of encryptedHeaders are omitted as such "**OMITTED**" */
    headers?: Record<string, string>;
    /** The HTTP status code of the response */
    statusCode?: number;
  };
  /** The status of delivery */
  status: "success" | "fail";
  /** The status message of the delivery */
  statusMessage?: string;
  /** The UTC timestamp when the delivery was triggered */
  triggeredAt: string;
  /** The unique webhook identifier that the delivery is for */
  webhookId: string;
};
type DeliveryList = {
  data?: Delivery[];
  links?: {
    next?: Link;
    prev?: Link;
    self?: Link;
  };
};
type Error = {
  /** The unique code for the error */
  code: string;
  /** May be used to provide additional details */
  detail?: string;
  /** A summary of what went wrong */
  title: string;
};
type ErrorResponse = {
  errors?: Error[];
  /** A way to trace the source of the error. */
  traceId?: string;
};
type EventType = {
  /** Description of the event type */
  description?: string;
  /** Specifies which levels that are supported for this event type */
  levels?: string[];
  /** Name of the event type */
  name?: string;
  /** Title of the event type */
  title?: string;
};
type EventTypes = {
  data?: EventType[];
};
type Link = {
  /** URL to a resource request */
  href: string;
};
type WebhookBase = {
  /** If enabled the certificate chain of the configured URL will be checked for revocation before sending the webhook. */
  checkCertificateRevocation?: boolean;
  /** The UTC timestamp when the webhook was created */
  readonly createdAt?: string;
  /** The id of the user that created the webhook */
  readonly createdByUserId?: string;
  /** The reason for creating the webhook */
  description?: string;
  /** The reason for the webhook to be disabled */
  readonly disabledReason?: string;
  /** The unique code for the reason */
  readonly disabledReasonCode?: string;
  /** Whether the webhook is active and sending requests */
  enabled?: boolean;
  /** These headers are persisted encrypted and decrypted to be sent as normal headers in post request (webhook delivery), in case of URL change these headers will need to be re-entered. Note: duplicate headers are not allowed and are case-insensitive. */
  encryptedHeaders?: Record<string, string>;
  /** Types of events for which the webhook should trigger. Retrieve available types from `/v1/webhooks/event-types`. */
  eventTypes?: string[];
  /** Filter that should match for a webhook to be triggered.
   * Supported common attribute names are 'id', 'spaceId' and 'topLevelResourceId', beside the common attributes the "com.qlik.v1.app.reload.finished" event also supports "data.status" that could be either "ok" or "error" but can't be used together with other event types.
   * Supported attribute operators are 'eq' and 'ne'.
   * Supported logical operators are 'and' and 'or'.
   * Note that attribute values must be valid JSON strings, hence they're enclosed with double quotes
   * For more detailed information regarding the SCIM filter syntax (RFC7644) used please follow the link to external documentation. */
  filter?: string;
  /** Additional headers in the post request (webhook delivery). Note: duplicate headers are not allowed and are case-insensitive. */
  headers?: Record<string, string>;
  /** The webhook's unique identifier */
  readonly id?: string;
  /** Defines at what level the webhook should operate: for all resources belonging to a tenant or restricted to only those accessible by the webhook-creator. */
  level?: "tenant" | "user";
  /** The name for the webhook */
  name: string;
  /** The id of the user that owns the webhook, only applicable for user level webhooks */
  ownerId?: string;
  /** String used as secret for calculating HMAC hash sent as header */
  secret?: string;
  /** The UTC timestamp when the webhook was last updated */
  readonly updatedAt?: string;
  /** The id of the user that last updated the webhook */
  readonly updatedByUserId?: string;
  /** Target URL for webhook HTTPS requests */
  url: string;
};
type WebhookList = {
  data?: WebhookResponse[];
  links?: {
    next?: Link;
    prev?: Link;
    self?: Link;
  };
};
/**
 * A JSON Patch document as defined in https://datatracker.ietf.org/doc/html/rfc6902
 */
type WebhookPatch = {
  /** The operation to be performed */
  op: "add" | "remove" | "replace";
  /** The path for the given resource field to patch */
  path: "/name" | "/description" | "/url" | "/eventTypes" | "/headers" | "/enabled" | "/secret" | "/encryptedHeaders";
  /** The value to be used for this operation. */
  value?: boolean | number | unknown | string;
};
type WebhookPost = WebhookBase & {
  /** Indicates from where the webhook was created and its purpose */
  origin?: "api" | "automations" | "management-console";
};
type WebhookResponse = WebhookResponseBase & {
  /** Indicates from where the webhook was created and its purpose */
  readonly origin?: "api" | "automations" | "management-console";
};
type WebhookResponseBase = {
  /** If enabled the certificate chain of the configured URL will be checked for revocation before sending the webhook. */
  checkCertificateRevocation?: boolean;
  /** The UTC timestamp when the webhook was created */
  readonly createdAt?: string;
  /** The id of the user that created the webhook */
  readonly createdByUserId?: string;
  /** The reason for creating the webhook */
  description?: string;
  /** The reason for the webhook to be disabled */
  readonly disabledReason?: string;
  /** The unique code for the reason */
  readonly disabledReasonCode?: string;
  /** Whether the webhook is active and sending requests */
  enabled?: boolean;
  /** Additional encrypted headers in the post request */
  encryptedHeaders?: string[];
  /** Types of events for which the webhook should trigger. Retrieve available types from `/v1/webhooks/event-types`. */
  eventTypes?: string[];
  /** Filter that should match for a webhook to be triggered.
   * Supported common attribute names are 'id', 'spaceId' and 'topLevelResourceId', beside the common attributes the "com.qlik.v1.app.reload.finished" event also supports "data.status" that could be either "ok" or "error" but can't be used together with other event types.
   * Supported attribute operators are 'eq' and 'ne'.
   * Supported logical operators are 'and' and 'or'.
   * Note that attribute values must be valid JSON strings, hence they're enclosed with double quotes
   * For more detailed information regarding the SCIM filter syntax (RFC7644) used please follow the link to external documentation. */
  filter?: string;
  /** Additional headers in the post request */
  headers?: Record<string, string>;
  /** The webhook's unique identifier */
  readonly id?: string;
  /** Defines at what level the webhook should operate: for all resources belonging to a tenant or restricted to only those accessible by the webhook-creator. */
  level?: "tenant" | "user";
  /** The name for the webhook */
  name: string;
  /** The id of the user that owns the webhook, only applicable for user level webhooks */
  ownerId?: string;
  /** @deprecated
   * String used as secret for calculating HMAC hash sent as header */
  secret?: string;
  /** Provides status of the string used as secret for calculating HMAC hash sent as header is already added or not */
  secretKeyAdded?: boolean;
  /** The UTC timestamp when the webhook was last updated */
  readonly updatedAt?: string;
  /** The id of the user that last updated the webhook */
  readonly updatedByUserId?: string;
  /** Target URL for webhook HTTPS requests */
  url: string;
};
/**
 * Retrieves all webhooks entries for a tenant that the user has access to. Users assigned the `TenantAdmin` role can retrieve all webhooks. A user can have up to 150 webhooks at one time.
 *
 * @param query an object with query parameters
 * @throws GetWebhooksHttpError
 */
declare function getWebhooks(query: {
  /** Filter resources by user that created it */
  createdByUserId?: string;
  /** Filter resources by enabled true/false */
  enabled?: boolean;
  /** Filter resources by event-type/types, a single webhook item can have multiple event-types */
  eventTypes?: string;
  /** Filter resources by level that user has access to (either user or level) */
  level?: string;
  /** Maximum number of webhooks to retrieve */
  limit?: number;
  /** Filter resources by name (wildcard and case insensitive) */
  name?: string;
  /** Cursor to the next page */
  next?: string;
  /** Filter resources by origins, supports multiorigin */
  origins?: "api" | "automations" | "management-console";
  /** Filter resources by user that owns it, only applicable for user level webhooks */
  ownerId?: string;
  /** Cursor to previous next page */
  prev?: string;
  /** Field to sort by, prefix with -/+ to indicate order */
  sort?: "name" | "+name" | "-name" | "url" | "+url" | "-url" | "createdAt" | "+createdAt" | "-createdAt" | "updatedAt" | "+updatedAt" | "-updatedAt";
  /** Filter resources by user that last updated the webhook */
  updatedByUserId?: string;
  /** Filter resources by url (wildcard and case insensitive) */
  url?: string;
}, options?: ApiCallOptions): Promise<GetWebhooksHttpResponse>;
type GetWebhooksHttpResponse = {
  data: WebhookList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetWebhooksHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetWebhooksHttpResponse>;
};
type GetWebhooksHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Creates a new webhook. User must be assigned the `TenantAdmin` role to create `tenant` level webhooks.
 *
 * @param body an object with the body content
 * @throws CreateWebhookHttpError
 */
declare function createWebhook(body: WebhookPost, options?: ApiCallOptions): Promise<CreateWebhookHttpResponse>;
type CreateWebhookHttpResponse = {
  data: WebhookResponse;
  headers: Headers;
  status: 201;
};
type CreateWebhookHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Lists event-types that are possible to subscribe to.
 *
 * @throws GetWebhookEventTypesHttpError
 */
declare function getWebhookEventTypes(options?: ApiCallOptions): Promise<GetWebhookEventTypesHttpResponse>;
type GetWebhookEventTypesHttpResponse = {
  data: EventTypes;
  headers: Headers;
  status: 200;
};
type GetWebhookEventTypesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 401 | 500 | 503;
};
/**
 * Deletes a specific webhook.
 *
 * @param id The webhook's unique identifier.
 * @throws DeleteWebhookHttpError
 */
declare function deleteWebhook(id: string, options?: ApiCallOptions): Promise<DeleteWebhookHttpResponse>;
type DeleteWebhookHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteWebhookHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Returns details for a specific webhook.
 *
 * @param id The webhook's unique identifier.
 * @throws GetWebhookHttpError
 */
declare function getWebhook(id: string, options?: ApiCallOptions): Promise<GetWebhookHttpResponse>;
type GetWebhookHttpResponse = {
  data: WebhookResponse;
  headers: Headers;
  status: 200;
};
type GetWebhookHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Patches a webhook to update one or more properties.
 *
 * @param id The webhook's unique identifier.
 * @param body an object with the body content
 * @throws PatchWebhookHttpError
 */
declare function patchWebhook(id: string, body: WebhookPatch[], options?: ApiCallOptions): Promise<PatchWebhookHttpResponse>;
type PatchWebhookHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchWebhookHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Updates a webhook, any omitted fields will be cleared, returns updated webhook.
 *
 * @param id The webhook's unique identifier.
 * @param body an object with the body content
 * @throws UpdateWebhookHttpError
 */
declare function updateWebhook(id: string, body: WebhookBase, options?: ApiCallOptions): Promise<UpdateWebhookHttpResponse>;
type UpdateWebhookHttpResponse = {
  data: WebhookResponse;
  headers: Headers;
  status: 200;
};
type UpdateWebhookHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Returns deliveries for a specific webhook. Delivery history is stored for 1 week.
 *
 * @param id The webhook's unique identifier.
 * @param query an object with query parameters
 * @throws GetWebhookDeliveriesHttpError
 */
declare function getWebhookDeliveries(id: string, query: {
  /** Filter resources by event-type */
  eventType?: string;
  /** Maximum number of deliveries to retrieve */
  limit?: number;
  /** Cursor to the next page */
  next?: string;
  /** Cursor to previous next page */
  prev?: string;
  /** Field to sort by, prefix with -/+ to indicate order */
  sort?: "status" | "+status" | "-status" | "triggeredAt" | "+triggeredAt" | "-triggeredAt";
  /** Filter resources by status (success or fail) */
  status?: "success" | "fail";
}, options?: ApiCallOptions): Promise<GetWebhookDeliveriesHttpResponse>;
type GetWebhookDeliveriesHttpResponse = {
  data: DeliveryList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetWebhookDeliveriesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetWebhookDeliveriesHttpResponse>;
};
type GetWebhookDeliveriesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Returns details for a specific delivery.
 *
 * @param id The webhook's unique identifier.
 * @param deliveryId The delivery's unique identifier.
 * @throws GetWebhookDeliveryHttpError
 */
declare function getWebhookDelivery(id: string, deliveryId: string, options?: ApiCallOptions): Promise<GetWebhookDeliveryHttpResponse>;
type GetWebhookDeliveryHttpResponse = {
  data: Delivery;
  headers: Headers;
  status: 200;
};
type GetWebhookDeliveryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Resends the delivery with the same payload.
 *
 * @param id The webhook's unique identifier.
 * @param deliveryId The delivery's unique identifier.
 * @throws ResendWebhookDeliveryHttpError
 */
declare function resendWebhookDelivery(id: string, deliveryId: string, options?: ApiCallOptions): Promise<ResendWebhookDeliveryHttpResponse>;
type ResendWebhookDeliveryHttpResponse = {
  data: Delivery;
  headers: Headers;
  status: 201;
};
type ResendWebhookDeliveryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 401 | 404 | 500 | 503;
};
/**
 * Clears the cache for webhooks api requests.
 */
declare function clearCache(): void;
type WebhooksAPI = {
  /**
   * Retrieves all webhooks entries for a tenant that the user has access to. Users assigned the `TenantAdmin` role can retrieve all webhooks. A user can have up to 150 webhooks at one time.
   *
   * @param query an object with query parameters
   * @throws GetWebhooksHttpError
   */
  getWebhooks: typeof getWebhooks;
  /**
   * Creates a new webhook. User must be assigned the `TenantAdmin` role to create `tenant` level webhooks.
   *
   * @param body an object with the body content
   * @throws CreateWebhookHttpError
   */
  createWebhook: typeof createWebhook;
  /**
   * Lists event-types that are possible to subscribe to.
   *
   * @throws GetWebhookEventTypesHttpError
   */
  getWebhookEventTypes: typeof getWebhookEventTypes;
  /**
   * Deletes a specific webhook.
   *
   * @param id The webhook's unique identifier.
   * @throws DeleteWebhookHttpError
   */
  deleteWebhook: typeof deleteWebhook;
  /**
   * Returns details for a specific webhook.
   *
   * @param id The webhook's unique identifier.
   * @throws GetWebhookHttpError
   */
  getWebhook: typeof getWebhook;
  /**
   * Patches a webhook to update one or more properties.
   *
   * @param id The webhook's unique identifier.
   * @param body an object with the body content
   * @throws PatchWebhookHttpError
   */
  patchWebhook: typeof patchWebhook;
  /**
   * Updates a webhook, any omitted fields will be cleared, returns updated webhook.
   *
   * @param id The webhook's unique identifier.
   * @param body an object with the body content
   * @throws UpdateWebhookHttpError
   */
  updateWebhook: typeof updateWebhook;
  /**
   * Returns deliveries for a specific webhook. Delivery history is stored for 1 week.
   *
   * @param id The webhook's unique identifier.
   * @param query an object with query parameters
   * @throws GetWebhookDeliveriesHttpError
   */
  getWebhookDeliveries: typeof getWebhookDeliveries;
  /**
   * Returns details for a specific delivery.
   *
   * @param id The webhook's unique identifier.
   * @param deliveryId The delivery's unique identifier.
   * @throws GetWebhookDeliveryHttpError
   */
  getWebhookDelivery: typeof getWebhookDelivery;
  /**
   * Resends the delivery with the same payload.
   *
   * @param id The webhook's unique identifier.
   * @param deliveryId The delivery's unique identifier.
   * @throws ResendWebhookDeliveryHttpError
   */
  resendWebhookDelivery: typeof resendWebhookDelivery;
  /**
   * Clears the cache for webhooks api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the webhooks api
 */
declare const webhooksExport: WebhooksAPI;
//#endregion
export { WebhookPatch as A, getWebhookDelivery as B, PatchWebhookHttpResponse as C, UpdateWebhookHttpResponse as D, UpdateWebhookHttpError as E, clearCache as F, updateWebhook as G, getWebhooks as H, createWebhook as I, webhooksExport as K, deleteWebhook as L, WebhookResponse as M, WebhookResponseBase as N, WebhookBase as O, WebhooksAPI as P, getWebhook as R, PatchWebhookHttpError as S, ResendWebhookDeliveryHttpResponse as T, patchWebhook as U, getWebhookEventTypes as V, resendWebhookDelivery as W, GetWebhookHttpError as _, Delivery as a, GetWebhooksHttpResponse as b, ErrorResponse as c, GetWebhookDeliveriesHttpError as d, GetWebhookDeliveriesHttpResponse as f, GetWebhookEventTypesHttpResponse as g, GetWebhookEventTypesHttpError as h, DeleteWebhookHttpResponse as i, WebhookPost as j, WebhookList as k, EventType as l, GetWebhookDeliveryHttpResponse as m, CreateWebhookHttpResponse as n, DeliveryList as o, GetWebhookDeliveryHttpError as p, DeleteWebhookHttpError as r, Error as s, CreateWebhookHttpError as t, EventTypes as u, GetWebhookHttpResponse as v, ResendWebhookDeliveryHttpError as w, Link as x, GetWebhooksHttpError as y, getWebhookDeliveries as z };