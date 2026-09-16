import { x as ApiCallOptions } from "./chunks/auth-types-yKuw6LLB.js";
import "./chunks/invoke-fetch-DdmiOIkr.js";
//#region src/public/rest/webhooks.d.ts
export type Delivery = {
  /** The name of the triggering event-type. */
  eventType: string;
  /** The delivery's unique identifier. */
  id: string;
  /** Request details for the delivery. */
  request?: {
    /** The sent body/payload of the delivery. */
    body?: unknown;
    /** Headers sent for this delivery, values of encryptedHeaders are omitted as such "**OMITTED**". Maximum size: 2048 bytes for non-encrypted headers + 2048 bytes for encrypted headers. */
    headers?: Record<string, string>;
    /** URL used for this delivery. */
    url?: string;
  };
  /** Response details for the delivery. */
  response?: {
    /** The received body of the delivery. */
    body?: string;
    /** Headers received for this delivery, values of encryptedHeaders are omitted as such "**OMITTED**". Maximum size: 2048 bytes for non-encrypted headers + 2048 bytes for encrypted headers. */
    headers?: Record<string, string>;
    /** The HTTP status code of the response. */
    statusCode?: number;
  };
  /** The status of delivery. */
  status: "success" | "fail";
  /** The status message of the delivery. */
  statusMessage?: string;
  /** The UTC timestamp when the delivery was triggered. */
  triggeredAt: string;
  /** The unique webhook identifier that the delivery is for. */
  webhookId: string;
};
export type DeliveryList = {
  data?: Delivery[];
  links?: {
    next?: Link;
    prev?: Link;
    self?: Link;
  };
};
export type Error = {
  /** The unique code for the error. */
  code: string;
  /** May be used to provide additional details. */
  detail?: string;
  /** A summary of what went wrong. */
  title: string;
};
export type ErrorResponse = {
  errors?: Error[];
  /** A way to trace the source of the error. */
  traceId?: string;
};
export type EventType = {
  /** Category of the event type. */
  category?: string;
  /** Description of the event type. */
  description?: string;
  /** Specifies which levels that are supported for this event type. */
  levels?: string[];
  /** Name of the event type. */
  name?: string;
  /** Title of the event type. */
  title?: string;
};
export type EventTypes = {
  data?: EventType[];
};
export type Link = {
  /** URL to a resource request. */
  href: string;
};
export type WebhookBase = {
  /** If enabled the certificate chain of the configured URL will be checked for revocation before sending the webhook. */
  checkCertificateRevocation?: boolean;
  /** The UTC timestamp when the webhook was created. */
  readonly createdAt?: string;
  /** The id of the user that created the webhook. */
  readonly createdByUserId?: string;
  /** The reason for creating the webhook. */
  description?: string;
  /** The reason for the webhook to be disabled. */
  readonly disabledReason?: string;
  /** The unique code for the reason. */
  readonly disabledReasonCode?: string;
  /** If enabled the webhook will be sent as a CloudEvent, once enabled for a webhook it cannot be disabled. */
  enableCloudEventDelivery?: boolean;
  /** Whether the webhook is active and sending requests. */
  enabled?: boolean;
  /** These headers are persisted encrypted and decrypted to be sent as normal headers in post request (webhook delivery), in case of URL change these headers will need to be re-entered. Note: duplicate headers are not allowed and are case-insensitive. Maximum size: 2048 bytes for encrypted headers. */
  encryptedHeaders?: Record<string, string>;
  /** Types of events for which the webhook should trigger. Retrieve available types from `/v1/webhooks/event-types`. */
  eventTypes?: string[];
  /** Filter that should match for a webhook to be triggered.
   * Supported common attribute names are 'id', 'spaceId' and 'topLevelResourceId', beside the common attributes the "com.qlik.v1.app.reload.finished" event also supports "data.status" that could be either "ok" or "error" but can't be used together with other event types.
   * Supported attribute operators are 'eq' and 'ne'.
   * Supported logical operators are 'and' and 'or'.
   * Note that attribute values must be valid JSON strings, hence they're enclosed with double quotes.
   * For more detailed information regarding the SCIM filter syntax (RFC7644) used please follow the link to external documentation. */
  filter?: string;
  /** Additional headers in the post request (webhook delivery). Note: duplicate headers are not allowed and are case-insensitive. Maximum size: 2048 bytes for non-encrypted headers. */
  headers?: Record<string, string>;
  /** The webhook's unique identifier. */
  readonly id?: string;
  /** Defines at what level the webhook should operate: for all resources belonging to a tenant or restricted to only those accessible by the webhook-creator. */
  level?: "tenant" | "user";
  /** The name for the webhook. */
  name: string;
  /** The id of the user that owns the webhook, only applicable for user level webhooks. */
  ownerId?: string;
  /** String used as secret for calculating HMAC hash sent as header. */
  secret?: string;
  /** The UTC timestamp when the webhook was last updated. */
  readonly updatedAt?: string;
  /** The id of the user that last updated the webhook. */
  readonly updatedByUserId?: string;
  /** Target URL for webhook HTTPS requests. */
  url: string;
};
export type WebhookList = {
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
export type WebhookPatch = {
  /** The operation to be performed. */
  op: "add" | "remove" | "replace";
  /** The path for the given resource field to patch. */
  path: "/name" | "/description" | "/url" | "/eventTypes" | "/headers" | "/enabled" | "/secret" | "/encryptedHeaders" | "/enableCloudEventDelivery";
  /** The value to be used for this operation. */
  value?: boolean | number | unknown | string;
};
export type WebhookPost = WebhookBase & {
  /** Indicates from where the webhook was created and its purpose. */
  origin?: "api" | "automations" | "management-console";
};
export type WebhookResponse = WebhookResponseBase & {
  /** Indicates from where the webhook was created and its purpose. */
  readonly origin?: "api" | "automations" | "management-console";
};
export type WebhookResponseBase = {
  /** If enabled the certificate chain of the configured URL will be checked for revocation before sending the webhook. */
  checkCertificateRevocation?: boolean;
  /** The UTC timestamp when the webhook was created. */
  readonly createdAt?: string;
  /** The id of the user that created the webhook. */
  readonly createdByUserId?: string;
  /** The reason for creating the webhook. */
  description?: string;
  /** The reason for the webhook to be disabled. */
  readonly disabledReason?: string;
  /** The unique code for the reason. */
  readonly disabledReasonCode?: string;
  /** If enabled the webhook will be sent as a CloudEvent, once enabled for a webhook it cannot be disabled. */
  enableCloudEventDelivery?: boolean;
  /** Whether the webhook is active and sending requests. */
  enabled?: boolean;
  /** Additional encrypted headers in the post request. Maximum size: 2048 bytes for encrypted headers. */
  encryptedHeaders?: string[];
  /** Types of events for which the webhook should trigger. Retrieve available types from `/v1/webhooks/event-types`. */
  eventTypes?: string[];
  /** Filter that should match for a webhook to be triggered.
   * Supported common attribute names are 'id', 'spaceId' and 'topLevelResourceId', beside the common attributes the "com.qlik.v1.app.reload.finished" event also supports "data.status" that could be either "ok" or "error" but can't be used together with other event types.
   * Supported attribute operators are 'eq' and 'ne'.
   * Supported logical operators are 'and' and 'or'.
   * Note that attribute values must be valid JSON strings, hence they're enclosed with double quotes.
   * For more detailed information regarding the SCIM filter syntax (RFC7644) used please follow the link to external documentation. */
  filter?: string;
  /** Additional headers in the post request. Maximum size: 2048 bytes for non-encrypted headers. */
  headers?: Record<string, string>;
  /** The webhook's unique identifier. */
  readonly id?: string;
  /** Defines at what level the webhook should operate: for all resources belonging to a tenant or restricted to only those accessible by the webhook-creator. */
  level?: "tenant" | "user";
  /** The name for the webhook. */
  name: string;
  /** The id of the user that owns the webhook, only applicable for user level webhooks. */
  ownerId?: string;
  /** Provides status of the string used as secret for calculating HMAC hash sent as header is already added or not. */
  secretKeyAdded?: boolean;
  /** The UTC timestamp when the webhook was last updated. */
  readonly updatedAt?: string;
  /** The id of the user that last updated the webhook. */
  readonly updatedByUserId?: string;
  /** Target URL for webhook HTTPS requests. */
  url: string;
};
/**
 * Retrieves all webhooks entries for a tenant that the user has access to. Users assigned the `TenantAdmin` role can retrieve all webhooks. A user can have up to 150 webhooks at one time.
 *
 * @param query an object with query parameters
 * @throws GetWebhooksHttpError
 */
export declare function getWebhooks(query: {
  /** Filter resources by user that created it. */
  createdByUserId?: string;
  /** Filter resources by enabled true/false. */
  enabled?: boolean;
  /** Filter resources by event-type/types, a single webhook item can have multiple event-types. */
  eventTypes?: string;
  /** Filter resources by level that user has access to (either user or level). */
  level?: string;
  /** Maximum number of webhooks to retrieve. */
  limit?: number;
  /** Filter resources by name (wildcard and case insensitive). */
  name?: string;
  /** Cursor to the next page. */
  next?: string;
  /** Filter resources by origins, supports multiorigin. */
  origins?: "api" | "automations" | "management-console";
  /** Filter resources by user that owns it, only applicable for user level webhooks. */
  ownerId?: string;
  /** Cursor to the previous page. */
  prev?: string;
  /** Field to sort by, prefix with -/+ to indicate order. */
  sort?: "name" | "+name" | "-name" | "url" | "+url" | "-url" | "createdAt" | "+createdAt" | "-createdAt" | "updatedAt" | "+updatedAt" | "-updatedAt";
  /** Filter resources by user that last updated the webhook. */
  updatedByUserId?: string;
  /** Filter resources by URL (wildcard and case insensitive). */
  url?: string;
}, options?: ApiCallOptions): Promise<GetWebhooksHttpResponse>;
export type GetWebhooksHttpResponse = {
  data: WebhookList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetWebhooksHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetWebhooksHttpResponse>;
};
export type GetWebhooksHttpError = {
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
export declare function createWebhook(body: WebhookPost, options?: ApiCallOptions): Promise<CreateWebhookHttpResponse>;
export type CreateWebhookHttpResponse = {
  data: WebhookResponse;
  headers: Headers;
  status: 201;
};
export type CreateWebhookHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Lists event-types that are possible to subscribe to.
 *
 * @throws GetWebhookEventTypesHttpError
 */
export declare function getWebhookEventTypes(options?: ApiCallOptions): Promise<GetWebhookEventTypesHttpResponse>;
export type GetWebhookEventTypesHttpResponse = {
  data: EventTypes;
  headers: Headers;
  status: 200;
};
export type GetWebhookEventTypesHttpError = {
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
export declare function deleteWebhook(id: string, options?: ApiCallOptions): Promise<DeleteWebhookHttpResponse>;
export type DeleteWebhookHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteWebhookHttpError = {
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
export declare function getWebhook(id: string, options?: ApiCallOptions): Promise<GetWebhookHttpResponse>;
export type GetWebhookHttpResponse = {
  data: WebhookResponse;
  headers: Headers;
  status: 200;
};
export type GetWebhookHttpError = {
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
export declare function patchWebhook(id: string, body: WebhookPatch[], options?: ApiCallOptions): Promise<PatchWebhookHttpResponse>;
export type PatchWebhookHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type PatchWebhookHttpError = {
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
export declare function updateWebhook(id: string, body: WebhookBase, options?: ApiCallOptions): Promise<UpdateWebhookHttpResponse>;
export type UpdateWebhookHttpResponse = {
  data: WebhookResponse;
  headers: Headers;
  status: 200;
};
export type UpdateWebhookHttpError = {
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
export declare function getWebhookDeliveries(id: string, query: {
  /** Filter resources by event-type. */
  eventType?: string;
  /** Maximum number of deliveries to retrieve. */
  limit?: number;
  /** Cursor to the next page. */
  next?: string;
  /** Cursor to the previous page. */
  prev?: string;
  /** Field to sort by, prefix with -/+ to indicate order. */
  sort?: "status" | "+status" | "-status" | "triggeredAt" | "+triggeredAt" | "-triggeredAt";
  /** Filter resources by status (success or fail). */
  status?: "success" | "fail";
}, options?: ApiCallOptions): Promise<GetWebhookDeliveriesHttpResponse>;
export type GetWebhookDeliveriesHttpResponse = {
  data: DeliveryList;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetWebhookDeliveriesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetWebhookDeliveriesHttpResponse>;
};
export type GetWebhookDeliveriesHttpError = {
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
export declare function getWebhookDelivery(id: string, deliveryId: string, options?: ApiCallOptions): Promise<GetWebhookDeliveryHttpResponse>;
export type GetWebhookDeliveryHttpResponse = {
  data: Delivery;
  headers: Headers;
  status: 200;
};
export type GetWebhookDeliveryHttpError = {
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
export declare function resendWebhookDelivery(id: string, deliveryId: string, options?: ApiCallOptions): Promise<ResendWebhookDeliveryHttpResponse>;
export type ResendWebhookDeliveryHttpResponse = {
  data: Delivery;
  headers: Headers;
  status: 201;
};
export type ResendWebhookDeliveryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 401 | 404 | 500 | 503;
};
/**
 * Clears the cache for webhooks api requests.
 */
export declare function clearCache(): void;
export type WebhooksAPI = {
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
export { webhooksExport as default };