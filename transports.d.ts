import { x as ApiCallOptions } from "./chunks/auth-types-yKuw6LLB.js";
import "./chunks/invoke-fetch-DdmiOIkr.js";
//#region src/public/rest/transports.d.ts
export type DeleteConfigNotFoundError = {
  errors?: {
    /** The error code. */
    code: string;
    /** Summary of the problem */
    title: string;
  }[];
};
/**
 * An error object.
 */
export type ErrorPublic = {
  /** The error code. */
  code: string;
  /** Summary of the problem. */
  title: string;
};
export type ErrorsPublic = {
  errors?: ErrorPublic[];
};
export type SendTestMailConfigNotFoundError = {
  errors?: {
    /** The error code. */
    code: string;
    /** Summary of the problem */
    title: string;
  }[];
};
export type TenantAdminError = {
  errors?: {
    /** The error code. */
    code: string;
    /** Summary of the problem */
    title: string;
  }[];
};
export type UpdateEmailConfigError = {
  errors?: {
    /** The error code. */
    code: string;
    /** Summary of the problem */
    title: string;
  }[];
};
export type VerifyConnectionConfigNotFoundError = {
  errors?: {
    /** The error code. */
    code: string;
    /** Summary of the problem */
    title: string;
  }[];
};
export type Email = {
  /** email body */
  body?: string;
  /** email recipient (email address) */
  recipient?: string;
  /** email subject */
  subject?: string;
};
/**
 * A JSON Patch document as defined in https://datatracker.ietf.org/doc/html/rfc6902.
 */
export type EmailConfigFieldPatch = {
  /** The operation to be performed. */
  op: "replace, remove, add";
  /** The path for the given resource field to patch. */
  path: "/username" | "/serverAddress" | "/serverPort" | "/securityType" | "/emailAddress" | "/emailPassword";
  /** The value to be used for this operation. */
  value: string;
};
/**
 * @example
 * [
 *   {
 *     path: "/username",
 *     value: "New name"
 *   }
 * ]
 */
export type EmailConfigPatch = EmailConfigFieldPatch[];
export type GetBasicAuthConfig = {
  /** The email address that should appear in From field when sending emails with this account */
  emailAddress?: string;
  /** The selected SMTP security mechanism. Could be either 'none', 'StartTLS' or 'SSL/TLS' */
  securityType?: string;
  /** The name that should appear in From field when sending emails with this account */
  senderName?: string;
  /** domain name or IP address of SMTP server */
  serverAddress?: string;
  /** smtp server port */
  serverPort?: number;
  /** user name used for SMTP login */
  username?: string;
};
export type GetEmailConfig = {
  /** Number of authentication failures */
  authFailures?: number;
  /** used for SMTP authentication */
  emailAddress?: string;
  /** Indicates error with this email configuration. OK means that no error is indicated. Possible values are OK, CONFIG_NOT_SET, INCOMPLETE_CONFIG, INVALID_CREDENTIALS, PROVIDER_ERROR */
  errorCode?: string;
  /** Is the configuration valid */
  isValid?: boolean;
  lastUpdated?: string;
  /** Last modification time. Formatted as a ISO 8601 string. */
  modificationTime?: string;
  /** Indicates if password is defined for this smtp config. The password itself is not returned! */
  passwordExists?: boolean;
  providerConfig?: GetMicrosoft365Config | GetBasicAuthConfig;
  /** one of none, StartTLS or SSL/TLS */
  securityType?: string;
  /** domain name or IP address of SMTP server */
  serverAddress?: string;
  /** smtp server listening port */
  serverPort?: number;
  /** Name of the service provider for authentication */
  serviceProvider?: "Microsoft365" | "BasicAuth";
  /** Contains statusCode and statusReason */
  status?: SmtpConfigStatus;
  /** The tenant Id */
  tenantId?: string;
  /** user name */
  username?: string;
};
export type GetMicrosoft365Config = {
  /** Microsoft365 client identifier */
  clientId?: string;
  /** The email address that should appear in From field when sending emails with this account */
  emailAddress?: string;
  /** Microsoft365 tenant identifier */
  providerTenantId?: string;
};
/**
 * SMTP basic authentication configuration. Provides server address, credentials, and sender information for standard SMTP email delivery.
 */
export type PutBasicAuthConfig = {
  /** The email address that should appear in From field when sending emails with this account */
  emailAddress?: string;
  /** password for SMTP basic authentication */
  emailPassword?: string;
  /** SMTP security mechanism to use. Could be either 'none', 'StartTLS' or 'SSL/TLS' */
  securityType?: string;
  /** The name that should appear in From field when sending emails with this account */
  senderName?: string;
  /** domain name or IP address of SMTP server */
  serverAddress?: string;
  /** smtp server port */
  serverPort?: number;
  /** user name used for SMTP login */
  username?: string;
};
export type PutEmailConfig = {
  providerConfig?: PutMicrosoft365Config | PutBasicAuthConfig;
  /** Name of the service provider for authentication */
  serviceProvider?: "Microsoft365" | "BasicAuth";
};
/**
 * Microsoft 365 authentication configuration. Provides OAuth credentials and tenant information for Microsoft 365 email delivery.
 */
export type PutMicrosoft365Config = {
  /** Microsoft365 client identifier */
  clientId?: string;
  /** secret to authenticate the Microsoft365 account */
  clientSecret?: string;
  /** The email address that should appear in From field when sending emails with this account */
  emailAddress?: string;
  /** Microsoft365 tenant identifier */
  providerTenantId?: string;
};
export type SmtpCheck = {
  /** Indicates error with this email configuration. OK means that no error is indicated. Possible values are OK, CONFIG_NOT_SET, INCOMPLETE_CONFIG, INVALID_CREDENTIALS, PROVIDER_ERROR */
  errorCode?: string;
  /** true if smtp config is correct and complete. Will return false if smtp-config does not exist at all */
  isValid?: boolean;
};
/**
 * Contains statusCode and statusReason
 */
export type SmtpConfigStatus = {
  /** Status code */
  statusCode?: number;
  /** Status reason */
  statusReason?: string;
};
export type SmtpResult = {
  /** could not resolve domain name, connection refused, connection timed out, SSL mismatch */
  connectionFailed?: boolean;
  /** error message from SMTP middleware .. a bit technical but could be useful to administrator */
  message?: string;
  /** smtp result code string from the SMTP server. eg. "250 2.6.0" */
  smtpResponseCode?: number;
  /** was SMTP operation successful or not. Other fields herein provide more detail */
  success?: boolean;
};
/**
 * Deletes the email configuration for the tenant.
 *
 * @throws DeleteEmailConfigHttpError
 */
export declare function deleteEmailConfig(options?: ApiCallOptions): Promise<DeleteEmailConfigHttpResponse>;
export type DeleteEmailConfigHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteEmailConfigHttpError = DeleteEmailConfig403HttpError | DeleteEmailConfig404HttpError | DeleteEmailConfigdefaultHttpError;
export type DeleteEmailConfig403HttpError = {
  data: TenantAdminError;
  headers: Headers;
  status: 403;
};
export type DeleteEmailConfig404HttpError = {
  data: DeleteConfigNotFoundError;
  headers: Headers;
  status: 404;
};
export type DeleteEmailConfigdefaultHttpError = {
  data: ErrorsPublic;
  headers: Headers;
  status: "default";
};
/**
 * Returns the current email configuration and configuration status for the tenant.
 *
 * @throws GetEmailConfigHttpError
 */
export declare function getEmailConfig(options?: ApiCallOptions): Promise<GetEmailConfigHttpResponse>;
export type GetEmailConfigHttpResponse = {
  data: GetEmailConfig;
  headers: Headers;
  status: 200;
};
export type GetEmailConfigHttpError = GetEmailConfig403HttpError | GetEmailConfigdefaultHttpError;
export type GetEmailConfig403HttpError = {
  data: TenantAdminError;
  headers: Headers;
  status: 403;
};
export type GetEmailConfigdefaultHttpError = {
  data: ErrorsPublic;
  headers: Headers;
  status: "default";
};
/**
 * @deprecated
 *
 * Patches the email configuration for the tenant. This endpoint is deprecated, use `PUT /transports/email-config` to replace the entire configuration instead.
 *
 * @param body an object with the body content
 * @throws PatchEmailConfigHttpError
 */
export declare function patchEmailConfig(body: EmailConfigPatch, options?: ApiCallOptions): Promise<PatchEmailConfigHttpResponse>;
export type PatchEmailConfigHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type PatchEmailConfigHttpError = PatchEmailConfig400HttpError | PatchEmailConfig403HttpError | PatchEmailConfigdefaultHttpError;
export type PatchEmailConfig400HttpError = {
  data: UpdateEmailConfigError;
  headers: Headers;
  status: 400;
};
export type PatchEmailConfig403HttpError = {
  data: TenantAdminError;
  headers: Headers;
  status: 403;
};
export type PatchEmailConfigdefaultHttpError = {
  data: ErrorsPublic;
  headers: Headers;
  status: "default";
};
/**
 * Creates or replaces the email configuration for the tenant. Validation of the configuration is done as part of the request.
 *
 * @param body an object with the body content
 * @throws UpdateEmailConfigHttpError
 */
export declare function updateEmailConfig(body: PutEmailConfig, options?: ApiCallOptions): Promise<UpdateEmailConfigHttpResponse>;
export type UpdateEmailConfigHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type UpdateEmailConfigHttpError = UpdateEmailConfig400HttpError | UpdateEmailConfig403HttpError | UpdateEmailConfigdefaultHttpError;
export type UpdateEmailConfig400HttpError = {
  data: UpdateEmailConfigError;
  headers: Headers;
  status: 400;
};
export type UpdateEmailConfig403HttpError = {
  data: TenantAdminError;
  headers: Headers;
  status: 403;
};
export type UpdateEmailConfigdefaultHttpError = {
  data: ErrorsPublic;
  headers: Headers;
  status: "default";
};
/**
 * Attempts to sends a test email using the active configuration, with the supplied email info (subject, body, recipient).
 *
 * @param body an object with the body content
 * @throws SendTestEmailHttpError
 */
export declare function sendTestEmail(body: Email, options?: ApiCallOptions): Promise<SendTestEmailHttpResponse>;
export type SendTestEmailHttpResponse = {
  data: SmtpResult;
  headers: Headers;
  status: 200;
};
export type SendTestEmailHttpError = SendTestEmail403HttpError | SendTestEmail404HttpError | SendTestEmaildefaultHttpError;
export type SendTestEmail403HttpError = {
  data: TenantAdminError;
  headers: Headers;
  status: 403;
};
export type SendTestEmail404HttpError = {
  data: SendTestMailConfigNotFoundError;
  headers: Headers;
  status: 404;
};
export type SendTestEmaildefaultHttpError = {
  data: ErrorsPublic;
  headers: Headers;
  status: "default";
};
/**
 * Returns the current isValid value for the email configuration for the tenant. Does not attempt to connect to a server to verify the connection or send a test email. Will return false if no email configuration exists.
 *
 * @throws ValidateEmailConfigHttpError
 */
export declare function validateEmailConfig(options?: ApiCallOptions): Promise<ValidateEmailConfigHttpResponse>;
export type ValidateEmailConfigHttpResponse = {
  data: SmtpCheck;
  headers: Headers;
  status: 200;
};
export type ValidateEmailConfigHttpError = {
  data: ErrorsPublic;
  headers: Headers;
  status: number;
};
/**
 * Attempts to verify connection to email server using a low-level protocol handshake to confirm the server is reachable and the credentials are valid, without sending a test email.
 *
 * @throws VerifyEmailConfigConnectionHttpError
 */
export declare function verifyEmailConfigConnection(options?: ApiCallOptions): Promise<VerifyEmailConfigConnectionHttpResponse>;
export type VerifyEmailConfigConnectionHttpResponse = {
  data: SmtpResult;
  headers: Headers;
  status: 200;
};
export type VerifyEmailConfigConnectionHttpError = VerifyEmailConfigConnection404HttpError | VerifyEmailConfigConnectiondefaultHttpError;
export type VerifyEmailConfigConnection404HttpError = {
  data: VerifyConnectionConfigNotFoundError;
  headers: Headers;
  status: 404;
};
export type VerifyEmailConfigConnectiondefaultHttpError = {
  data: ErrorsPublic;
  headers: Headers;
  status: "default";
};
/**
 * Clears the cache for transports api requests.
 */
export declare function clearCache(): void;
export type TransportsAPI = {
  /**
   * Deletes the email configuration for the tenant.
   *
   * @throws DeleteEmailConfigHttpError
   */
  deleteEmailConfig: typeof deleteEmailConfig;
  /**
   * Returns the current email configuration and configuration status for the tenant.
   *
   * @throws GetEmailConfigHttpError
   */
  getEmailConfig: typeof getEmailConfig;
  /**
   * @deprecated
   *
   * Patches the email configuration for the tenant. This endpoint is deprecated, use `PUT /transports/email-config` to replace the entire configuration instead.
   *
   * @param body an object with the body content
   * @throws PatchEmailConfigHttpError
   */
  patchEmailConfig: typeof patchEmailConfig;
  /**
   * Creates or replaces the email configuration for the tenant. Validation of the configuration is done as part of the request.
   *
   * @param body an object with the body content
   * @throws UpdateEmailConfigHttpError
   */
  updateEmailConfig: typeof updateEmailConfig;
  /**
   * Attempts to sends a test email using the active configuration, with the supplied email info (subject, body, recipient).
   *
   * @param body an object with the body content
   * @throws SendTestEmailHttpError
   */
  sendTestEmail: typeof sendTestEmail;
  /**
   * Returns the current isValid value for the email configuration for the tenant. Does not attempt to connect to a server to verify the connection or send a test email. Will return false if no email configuration exists.
   *
   * @throws ValidateEmailConfigHttpError
   */
  validateEmailConfig: typeof validateEmailConfig;
  /**
   * Attempts to verify connection to email server using a low-level protocol handshake to confirm the server is reachable and the credentials are valid, without sending a test email.
   *
   * @throws VerifyEmailConfigConnectionHttpError
   */
  verifyEmailConfigConnection: typeof verifyEmailConfigConnection;
  /**
   * Clears the cache for transports api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the transports api
 */
declare const transportsExport: TransportsAPI;
//#endregion
export { transportsExport as default };