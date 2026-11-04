import { D as PageCallOptions, x as ApiCallOptions } from "./auth-types-YxQFXW5F.js";
import "./invoke-fetch-BGcRWadc.js";
declare namespace webhooks_d_exports {
  export { CreateWebhookHttpError, CreateWebhookHttpResponse, DeleteWebhookHttpError, DeleteWebhookHttpResponse, Delivery, DeliveryList, Error, ErrorResponse, EventType, EventTypes, FilterInfo, GetWebhookDeliveriesHttpError, GetWebhookDeliveriesHttpResponse, GetWebhookDeliveryHttpError, GetWebhookDeliveryHttpResponse, GetWebhookEventTypesHttpError, GetWebhookEventTypesHttpResponse, GetWebhookHttpError, GetWebhookHttpResponse, GetWebhooksHttpError, GetWebhooksHttpResponse, Link, PatchWebhookHttpError, PatchWebhookHttpResponse, ResendWebhookDeliveryHttpError, ResendWebhookDeliveryHttpResponse, UpdateWebhookHttpError, UpdateWebhookHttpResponse, WebhookBase, WebhookList, WebhookPatch, WebhookPost, WebhookResponse, WebhookResponseBase, WebhooksAPI, clearCache, createWebhook, webhooksExport as default, deleteWebhook, getWebhook, getWebhookDeliveries, getWebhookDelivery, getWebhookEventTypes, getWebhooks, patchWebhook, resendWebhookDelivery, updateWebhook };
}
type Delivery = {
  /** The name of the triggering event-type */
  eventType: string;
  /** The delivery's unique identifier */
  id: string;
  /** The request that was sent to the webhook URL for this delivery. */
  request?: {
    /** The sent body/payload of the delivery */
    body?: unknown;
    /** Headers sent for this delivery, values of encryptedHeaders are omitted as such "**OMITTED**". Maximum combined size: 2048 bytes for non-encrypted headers + 2048 bytes for encrypted headers. */
    headers?: Record<string, string>;
    /** URL used for this delivery */
    url?: string;
  };
  /** The response that was received from the webhook URL for this delivery. Absent if no response was received. */
  response?: {
    /** The received body of the delivery */
    body?: string;
    /** Headers received for this delivery, values of encryptedHeaders are omitted as such "**OMITTED**". Maximum combined size: 2048 bytes for non-encrypted headers + 2048 bytes for encrypted headers. */
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
  /** The set of fields that can be used to filter this specific event type for webhook delivery. Different event types may support different filter paths. */
  allowedFilters?: FilterInfo[];
  /** Category of the event type */
  category?: string;
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
/**
 * Describes a single field that can be used as a filter.
 */
type FilterInfo = {
  /** Optional allowed values for this filter path. If omitted, the path is treated as free-form and clients are responsible for valid usage. */
  allowedValues?: string[];
  /** The field name or path that can be used as a filter */
  path: string;
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
  /** Whether this webhook delivers events as CloudEvents. On creation, the service determines the effective value from tenant feature flags and webhook origin; the supplied value is not authoritative. On PUT, omission is treated as false. When feature flags are enabled, the service may automatically enable this for exclusive Data Integration webhooks. Once enabled, it cannot be disabled; omitting it when replacing an enabled webhook therefore returns `403`. */
  enableCloudEventDelivery?: boolean;
  /** Whether the webhook is active and sending requests */
  enabled?: boolean;
  /** Headers that are persisted encrypted and decrypted again to be sent as normal headers in the post request (webhook delivery). In requests they are supplied as name/value pairs, but responses return only the header names as a list of strings, because the values are never disclosed. If the URL changes, these headers must be re-entered. Note: duplicate headers are not allowed and are case-insensitive. Maximum combined size: 2048 bytes (total of all encrypted header names and values). */
  encryptedHeaders?: Record<string, string>;
  /** Types of events for which the webhook should trigger. Retrieve available types from `/core/webhooks/event-types`. */
  eventTypes?: string[];
  /** Filter that should match for a webhook to be triggered.
   * Supported common attribute names are 'id', 'spaceId' and 'topLevelResourceId'. Individual event-types can support additional event-specific attributes, which cannot be combined with other event-types in the same webhook. For example "com.qlik.v1.app.reload.finished" supports "data.status" with the allowed values "SUCCEEDED", "FAILED", "CANCELED" and "EXCEEDED_LIMIT".
   * The authoritative set of filterable attributes and their allowed values for each event-type is returned in the `allowedFilters` property of `GET /core/webhooks/event-types`.
   * Supported attribute operators are 'eq' and 'ne'.
   * Supported logical operators are 'and' and 'or'.
   * Note that attribute values must be valid JSON strings, hence they're enclosed with double quotes.
   * For more detailed information regarding the SCIM filter syntax (RFC7644) used please follow the link to external documentation. */
  filter?: string;
  /** Additional headers in the post request (webhook delivery). Note: duplicate headers are not allowed and are case-insensitive. Maximum combined size: 2048 bytes (total of all header names and values). */
  headers?: Record<string, string>;
  /** The webhook's unique identifier */
  readonly id?: string;
  /** Defines at what level the webhook should operate: for all resources belonging to a tenant or restricted to only those accessible by the webhook-creator. */
  level?: "tenant" | "user";
  /** The name for the webhook */
  name: string;
  /** The id of the user that owns the webhook, only applicable for user level webhooks */
  ownerId?: string;
  /** Shared secret used to sign the webhook delivery. Each delivery is sent with a `Qlik-Signature` header containing the hex-encoded HMAC-SHA256 of the raw request body, computed with this secret, so the receiver can verify that the payload is genuine and unmodified. The secret is stored encrypted and is never returned by the API; responses report only `secretKeyAdded`. */
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
  /** The path of the webhook property to patch. Only writable properties can be patched; read-only properties such as `/id`, `/createdAt`, `/createdByUserId` and `/origin` are rejected. Individual members of `/headers` and `/encryptedHeaders` can also be addressed directly, for example `/encryptedHeaders/myHeader`. */
  path: "/name" | "/description" | "/url" | "/eventTypes" | "/headers" | "/enabled" | "/secret" | "/encryptedHeaders" | "/enableCloudEventDelivery" | "/filter" | "/level" | "/ownerId" | "/checkCertificateRevocation";
  /** The value to be used for this operation. The type must match the patched property, for example an array of event-type names for `/eventTypes` or an object of header name/value pairs for `/headers`. Not used by the `remove` operation. */
  value?: boolean | number | unknown | string | unknown[];
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
  /** Whether this webhook delivers events as CloudEvents. Once enabled, it cannot be disabled. */
  enableCloudEventDelivery?: boolean;
  /** Whether the webhook is active and sending requests */
  enabled?: boolean;
  /** Names of the encrypted headers that are sent with the post request. Only the header names are returned; the values are never disclosed. Maximum combined size: 2048 bytes (total of all encrypted header names and values). */
  encryptedHeaders?: string[];
  /** Types of events for which the webhook should trigger. Retrieve available types from `/core/webhooks/event-types`. */
  eventTypes?: string[];
  /** Filter that should match for a webhook to be triggered.
   * Supported common attribute names are 'id', 'spaceId' and 'topLevelResourceId'. Individual event-types can support additional event-specific attributes, which cannot be combined with other event-types in the same webhook. For example "com.qlik.v1.app.reload.finished" supports "data.status" with the allowed values "SUCCEEDED", "FAILED", "CANCELED" and "EXCEEDED_LIMIT".
   * The authoritative set of filterable attributes and their allowed values for each event-type is returned in the `allowedFilters` property of `GET /core/webhooks/event-types`.
   * Supported attribute operators are 'eq' and 'ne'.
   * Supported logical operators are 'and' and 'or'.
   * Note that attribute values must be valid JSON strings, hence they're enclosed with double quotes.
   * For more detailed information regarding the SCIM filter syntax (RFC7644) used please follow the link to external documentation. */
  filter?: string;
  /** Additional headers in the post request. Maximum combined size: 2048 bytes (total of all header names and values). */
  headers?: Record<string, string>;
  /** The webhook's unique identifier */
  readonly id?: string;
  /** Defines at what level the webhook should operate: for all resources belonging to a tenant or restricted to only those accessible by the webhook-creator. */
  level?: "tenant" | "user";
  /** The name for the webhook */
  name: string;
  /** The id of the user that owns the webhook, only applicable for user level webhooks */
  ownerId?: string;
  /** Whether a signing secret is currently stored for this webhook. The secret itself is never returned. */
  secretKeyAdded?: boolean;
  /** The UTC timestamp when the webhook was last updated */
  readonly updatedAt?: string;
  /** The id of the user that last updated the webhook */
  readonly updatedByUserId?: string;
  /** Target URL for webhook HTTPS requests */
  url: string;
};
/**
 * Retrieves all webhook entries for a tenant that the user has access to. Users assigned the `TenantAdmin` role can retrieve all webhooks of the tenant; other users only retrieve the webhooks they own. Values of `encryptedHeaders` are never returned, only their header names.
 *
 * @param query an object with query parameters
 * @throws GetWebhooksHttpError
 */
declare function getWebhooks(query: {
  /** Filter resources by user that created it */
  createdByUserId?: string;
  /** Filter resources by enabled true/false */
  enabled?: boolean;
  /** Filter resources by event-type. Accepts a comma-separated list, and a webhook must subscribe to every listed event-type to match (AND semantics). A single webhook can subscribe to multiple event-types. Values must be event-types returned by `GET /core/webhooks/event-types`. */
  eventTypes?: string;
  /** Filter resources by the level the webhook operates at: `tenant` for all resources of the tenant, or `user` for only the resources accessible to the webhook owner. */
  level?: string;
  /** Maximum number of webhooks to retrieve */
  limit?: number;
  /** Filter resources by name. The value is matched as a case-insensitive substring, not as a glob pattern, so `prod` matches `Production webhook`. */
  name?: string;
  /** Cursor to the next page */
  next?: string;
  /** Filter resources by origin. The implementation also accepts a comma-separated list, in which case a webhook matches if its origin is any of the listed values (OR semantics). */
  origins?: "api" | "automations" | "management-console";
  /** Filter resources by user that owns it, only applicable for user level webhooks */
  ownerId?: string;
  /** Cursor to the previous page. */
  prev?: string;
  /** Field to sort by, prefix with -/+ to indicate order */
  sort?: "name" | "+name" | "-name" | "url" | "+url" | "-url" | "createdAt" | "+createdAt" | "-createdAt" | "updatedAt" | "+updatedAt" | "-updatedAt";
  /** Filter resources by user that last updated the webhook */
  updatedByUserId?: string;
  /** Filter resources by URL. The value is matched as a case-insensitive substring, not as a glob pattern, so `example.com` matches `https://example.com/hook`. */
  url?: string;
}, options?: ApiCallOptions): Promise<GetWebhooksHttpResponse>;
type GetWebhooksHttpResponse = {
  data: WebhookList;
  headers: Headers;
  status: 200;
  prev?: (options?: PageCallOptions) => Promise<GetWebhooksHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetWebhooksHttpResponse>;
};
type GetWebhooksHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Creates a new webhook. User must be assigned the `TenantAdmin` role to create `tenant` level webhooks. Each user can own up to 150 webhooks per tenant; creating a webhook beyond that quota is rejected with `403`.
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
 * Updates one or more individual properties of a webhook using a JSON Patch document, leaving all other properties unchanged. The patch is applied to the stored webhook and the result is validated as a whole, so a patch that produces an invalid webhook is rejected. When `/url` is changed on a webhook that has encrypted headers, every existing encrypted header must also be replaced or removed in the same patch, otherwise the request is rejected with `400`. Changing read-only properties is rejected with `409`, and changing `/ownerId` requires permission to transfer ownership.
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
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
};
/**
 * Replaces all writable properties of a webhook and returns the updated webhook. This is a full replacement: every writable property that is omitted from the request body is reset to its default, so omitting `secret`, `encryptedHeaders`, `headers` or `filter` clears them, and omitting `enabled` disables the webhook. Because `secret` is never returned and `encryptedHeaders` is returned as a list of header names, a `GET` response cannot be sent back unchanged as a `PUT` request body; re-send those values explicitly, and use `PATCH` to change individual properties. Read-only properties such as `id`, `createdAt`, `createdByUserId` and `origin` cannot be changed and are rejected with `409`.
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
  status: 400 | 401 | 403 | 404 | 409 | 500 | 503;
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
  /** Cursor to the previous page. */
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
  prev?: (options?: PageCallOptions) => Promise<GetWebhookDeliveriesHttpResponse>;
  next?: (options?: PageCallOptions) => Promise<GetWebhookDeliveriesHttpResponse>;
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
 * Resends the event payload of an existing delivery and returns the new delivery. The event payload is taken from the original delivery, but the webhook's current configuration (URL, headers, secret and certificate settings) is used to send it. The resend is attempted synchronously and a new delivery record is always created, so a `201` response can contain a delivery with status `fail`. A resend is subject to the same validation and failure handling as an automatic delivery, so a webhook that is no longer valid or that exceeds the delivery failure threshold can be disabled as a result.
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
  status: 400 | 401 | 403 | 404 | 500 | 503;
};
/**
 * Clears the cache for core/webhooks api requests.
 */
declare function clearCache(): void;
type WebhooksAPI = {
  /**
   * Retrieves all webhook entries for a tenant that the user has access to. Users assigned the `TenantAdmin` role can retrieve all webhooks of the tenant; other users only retrieve the webhooks they own. Values of `encryptedHeaders` are never returned, only their header names.
   *
   * @param query an object with query parameters
   * @throws GetWebhooksHttpError
   */
  getWebhooks: typeof getWebhooks;
  /**
   * Creates a new webhook. User must be assigned the `TenantAdmin` role to create `tenant` level webhooks. Each user can own up to 150 webhooks per tenant; creating a webhook beyond that quota is rejected with `403`.
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
   * Updates one or more individual properties of a webhook using a JSON Patch document, leaving all other properties unchanged. The patch is applied to the stored webhook and the result is validated as a whole, so a patch that produces an invalid webhook is rejected. When `/url` is changed on a webhook that has encrypted headers, every existing encrypted header must also be replaced or removed in the same patch, otherwise the request is rejected with `400`. Changing read-only properties is rejected with `409`, and changing `/ownerId` requires permission to transfer ownership.
   *
   * @param id The webhook's unique identifier.
   * @param body an object with the body content
   * @throws PatchWebhookHttpError
   */
  patchWebhook: typeof patchWebhook;
  /**
   * Replaces all writable properties of a webhook and returns the updated webhook. This is a full replacement: every writable property that is omitted from the request body is reset to its default, so omitting `secret`, `encryptedHeaders`, `headers` or `filter` clears them, and omitting `enabled` disables the webhook. Because `secret` is never returned and `encryptedHeaders` is returned as a list of header names, a `GET` response cannot be sent back unchanged as a `PUT` request body; re-send those values explicitly, and use `PATCH` to change individual properties. Read-only properties such as `id`, `createdAt`, `createdByUserId` and `origin` cannot be changed and are rejected with `409`.
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
   * Resends the event payload of an existing delivery and returns the new delivery. The event payload is taken from the original delivery, but the webhook's current configuration (URL, headers, secret and certificate settings) is used to send it. The resend is attempted synchronously and a new delivery record is always created, so a `201` response can contain a delivery with status `fail`. A resend is subject to the same validation and failure handling as an automatic delivery, so a webhook that is no longer valid or that exceeds the delivery failure threshold can be disabled as a result.
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
export { WebhookList as A, getWebhookDeliveries as B, PatchWebhookHttpError as C, UpdateWebhookHttpError as D, ResendWebhookDeliveryHttpResponse as E, WebhooksAPI as F, resendWebhookDelivery as G, getWebhookEventTypes as H, clearCache as I, webhooks_d_exports as J, updateWebhook as K, createWebhook as L, WebhookPost as M, WebhookResponse as N, UpdateWebhookHttpResponse as O, WebhookResponseBase as P, deleteWebhook as R, Link as S, ResendWebhookDeliveryHttpError as T, getWebhooks as U, getWebhookDelivery as V, patchWebhook as W, GetWebhookEventTypesHttpResponse as _, Delivery as a, GetWebhooksHttpError as b, ErrorResponse as c, FilterInfo as d, GetWebhookDeliveriesHttpError as f, GetWebhookEventTypesHttpError as g, GetWebhookDeliveryHttpResponse as h, DeleteWebhookHttpResponse as i, WebhookPatch as j, WebhookBase as k, EventType as l, GetWebhookDeliveryHttpError as m, CreateWebhookHttpResponse as n, DeliveryList as o, GetWebhookDeliveriesHttpResponse as p, webhooksExport as q, DeleteWebhookHttpError as r, Error as s, CreateWebhookHttpError as t, EventTypes as u, GetWebhookHttpError as v, PatchWebhookHttpResponse as w, GetWebhooksHttpResponse as x, GetWebhookHttpResponse as y, getWebhook as z };