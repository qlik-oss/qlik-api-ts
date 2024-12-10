import { A as ApiCallOptions } from './invoke-fetch-types-BXn-uSF5.js';
import './auth-types-PkN9CAF_.js';

type DeleteConfigNotFoundError = {
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
type ErrorPublic = {
    /** The error code. */
    code: string;
    /** Summary of the problem. */
    title: string;
};
type ErrorsPublic = {
    errors?: ErrorPublic[];
};
type SendTestMailConfigNotFoundError = {
    errors?: {
        /** The error code. */
        code: string;
        /** Summary of the problem */
        title: string;
    }[];
};
type TenantAdminError = {
    errors?: {
        /** The error code. */
        code: string;
        /** Summary of the problem */
        title: string;
    }[];
};
type UpdateEmailConfigError = {
    errors?: {
        /** The error code. */
        code: string;
        /** Summary of the problem */
        title: string;
    }[];
};
type VerifyConnectionConfigNotFoundError = {
    errors?: {
        /** The error code. */
        code: string;
        /** Summary of the problem */
        title: string;
    }[];
};
type Email = {
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
type EmailConfigFieldPatch = {
    /** The operation to be performed. */
    op: "replace, remove, add";
    /** The path for the given resource field to patch. */
    path: "/username" | "/serverAddress" | "/serverPort" | "/securityType" | "/emailAddress" | "/emailPassword";
    /** The value to be used for this operation. */
    value: string;
};
type EmailConfigPatch = EmailConfigFieldPatch[];
type GetBasicAuthConfig = {
    /** The email address that should appear in From field when sending emails with this account */
    emailAddress?: string;
    /** The selected SMTP security mechanism. Could be either 'none', 'StartTLS' or 'SSL/TLS' */
    securityType?: string;
    /** domain name or IP address of SMTP server */
    serverAddress?: string;
    /** smtp server port */
    serverPort?: number;
    /** user name used for SMTP login */
    username?: string;
};
type GetEmailConfig = {
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
type GetMicrosoft365Config = {
    /** Microsoft365 client identifier */
    clientId?: string;
    /** The email address that should appear in From field when sending emails with this account */
    emailAddress?: string;
    /** Microsoft365 tenant identifier */
    providerTenantId?: string;
};
type SmtpCheck = {
    /** Indicates error with this email configuration. OK means that no error is indicated. Possible values are OK, CONFIG_NOT_SET, INCOMPLETE_CONFIG, INVALID_CREDENTIALS, PROVIDER_ERROR */
    errorCode?: string;
    /** true if smtp config is correct and complete. Will return false if smtp-config does not exist at all */
    isValid?: boolean;
};
/**
 * Contains statusCode and statusReason
 */
type SmtpConfigStatus = {
    /** Status code */
    statusCode?: number;
    /** Status reason */
    statusReason?: string;
};
type SmtpResult = {
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
 * Deletes email configuration for a given tenant id (retrieved from JWT).
 *
 * @throws DeleteEmailConfigHttpError
 */
declare const deleteEmailConfig: (options?: ApiCallOptions) => Promise<DeleteEmailConfigHttpResponse>;
type DeleteEmailConfigHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteEmailConfig403HttpError = {
    data: TenantAdminError;
    headers: Headers;
    status: 403;
};
type DeleteEmailConfig404HttpError = {
    data: DeleteConfigNotFoundError;
    headers: Headers;
    status: 404;
};
type DeleteEmailConfigDefaultHttpError = {
    data: ErrorsPublic;
    headers: Headers;
    status: "default";
};
type DeleteEmailConfigHttpError = DeleteEmailConfig403HttpError | DeleteEmailConfig404HttpError | DeleteEmailConfigDefaultHttpError;
/**
 * Returns the email configuration for a given tenant id (retrieved from JWT).
 *
 * @throws GetEmailConfigHttpError
 */
declare const getEmailConfig: (options?: ApiCallOptions) => Promise<GetEmailConfigHttpResponse>;
type GetEmailConfigHttpResponse = {
    data: GetEmailConfig;
    headers: Headers;
    status: number;
};
type GetEmailConfig403HttpError = {
    data: TenantAdminError;
    headers: Headers;
    status: 403;
};
type GetEmailConfigDefaultHttpError = {
    data: ErrorsPublic;
    headers: Headers;
    status: "default";
};
type GetEmailConfigHttpError = GetEmailConfig403HttpError | GetEmailConfigDefaultHttpError;
/**
 * Patch the email configuration for a given tenant id (retrieved from JWT).
 *
 * @param body an object with the body content
 * @throws PatchEmailConfigHttpError
 */
declare const patchEmailConfig: (body: EmailConfigPatch, options?: ApiCallOptions) => Promise<PatchEmailConfigHttpResponse>;
type PatchEmailConfigHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchEmailConfig400HttpError = {
    data: UpdateEmailConfigError;
    headers: Headers;
    status: 400;
};
type PatchEmailConfig403HttpError = {
    data: TenantAdminError;
    headers: Headers;
    status: 403;
};
type PatchEmailConfigDefaultHttpError = {
    data: ErrorsPublic;
    headers: Headers;
    status: "default";
};
type PatchEmailConfigHttpError = PatchEmailConfig400HttpError | PatchEmailConfig403HttpError | PatchEmailConfigDefaultHttpError;
/**
 * Send a test mail with the supplied email info (subject, body, recipient). Email config from database is used for the connection.
 *
 * @param body an object with the body content
 * @throws SendTestEmailHttpError
 */
declare const sendTestEmail: (body: Email, options?: ApiCallOptions) => Promise<SendTestEmailHttpResponse>;
type SendTestEmailHttpResponse = {
    data: SmtpResult;
    headers: Headers;
    status: number;
};
type SendTestEmail403HttpError = {
    data: TenantAdminError;
    headers: Headers;
    status: 403;
};
type SendTestEmail404HttpError = {
    data: SendTestMailConfigNotFoundError;
    headers: Headers;
    status: 404;
};
type SendTestEmailDefaultHttpError = {
    data: ErrorsPublic;
    headers: Headers;
    status: "default";
};
type SendTestEmailHttpError = SendTestEmail403HttpError | SendTestEmail404HttpError | SendTestEmailDefaultHttpError;
/**
 * Returns the isValid value for the email configuration for the tenant. Will return false if no email configuration exists.
 *
 * @throws ValidateEmailConfigHttpError
 */
declare const validateEmailConfig: (options?: ApiCallOptions) => Promise<ValidateEmailConfigHttpResponse>;
type ValidateEmailConfigHttpResponse = {
    data: SmtpCheck;
    headers: Headers;
    status: number;
};
type ValidateEmailConfigHttpError = {
    data: ErrorsPublic;
    headers: Headers;
    status: number;
};
/**
 * Verifies connection to email server for tenant provided via JWT
 *
 * @throws VerifyEmailConfigConnectionHttpError
 */
declare const verifyEmailConfigConnection: (options?: ApiCallOptions) => Promise<VerifyEmailConfigConnectionHttpResponse>;
type VerifyEmailConfigConnectionHttpResponse = {
    data: SmtpResult;
    headers: Headers;
    status: number;
};
type VerifyEmailConfigConnection404HttpError = {
    data: VerifyConnectionConfigNotFoundError;
    headers: Headers;
    status: 404;
};
type VerifyEmailConfigConnectionDefaultHttpError = {
    data: ErrorsPublic;
    headers: Headers;
    status: "default";
};
type VerifyEmailConfigConnectionHttpError = VerifyEmailConfigConnection404HttpError | VerifyEmailConfigConnectionDefaultHttpError;
/**
 * Clears the cache for transports api requests.
 */
declare function clearCache(): void;
interface TransportsAPI {
    /**
     * Deletes email configuration for a given tenant id (retrieved from JWT).
     *
     * @throws DeleteEmailConfigHttpError
     */
    deleteEmailConfig: typeof deleteEmailConfig;
    /**
     * Returns the email configuration for a given tenant id (retrieved from JWT).
     *
     * @throws GetEmailConfigHttpError
     */
    getEmailConfig: typeof getEmailConfig;
    /**
     * Patch the email configuration for a given tenant id (retrieved from JWT).
     *
     * @param body an object with the body content
     * @throws PatchEmailConfigHttpError
     */
    patchEmailConfig: typeof patchEmailConfig;
    /**
     * Send a test mail with the supplied email info (subject, body, recipient). Email config from database is used for the connection.
     *
     * @param body an object with the body content
     * @throws SendTestEmailHttpError
     */
    sendTestEmail: typeof sendTestEmail;
    /**
     * Returns the isValid value for the email configuration for the tenant. Will return false if no email configuration exists.
     *
     * @throws ValidateEmailConfigHttpError
     */
    validateEmailConfig: typeof validateEmailConfig;
    /**
     * Verifies connection to email server for tenant provided via JWT
     *
     * @throws VerifyEmailConfigConnectionHttpError
     */
    verifyEmailConfigConnection: typeof verifyEmailConfigConnection;
    /**
     * Clears the cache for transports api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the transports api
 */
declare const transportsExport: TransportsAPI;

export { type DeleteConfigNotFoundError, type DeleteEmailConfig403HttpError, type DeleteEmailConfig404HttpError, type DeleteEmailConfigDefaultHttpError, type DeleteEmailConfigHttpError, type DeleteEmailConfigHttpResponse, type Email, type EmailConfigFieldPatch, type EmailConfigPatch, type ErrorPublic, type ErrorsPublic, type GetBasicAuthConfig, type GetEmailConfig, type GetEmailConfig403HttpError, type GetEmailConfigDefaultHttpError, type GetEmailConfigHttpError, type GetEmailConfigHttpResponse, type GetMicrosoft365Config, type PatchEmailConfig400HttpError, type PatchEmailConfig403HttpError, type PatchEmailConfigDefaultHttpError, type PatchEmailConfigHttpError, type PatchEmailConfigHttpResponse, type SendTestEmail403HttpError, type SendTestEmail404HttpError, type SendTestEmailDefaultHttpError, type SendTestEmailHttpError, type SendTestEmailHttpResponse, type SendTestMailConfigNotFoundError, type SmtpCheck, type SmtpConfigStatus, type SmtpResult, type TenantAdminError, type TransportsAPI, type UpdateEmailConfigError, type ValidateEmailConfigHttpError, type ValidateEmailConfigHttpResponse, type VerifyConnectionConfigNotFoundError, type VerifyEmailConfigConnection404HttpError, type VerifyEmailConfigConnectionDefaultHttpError, type VerifyEmailConfigConnectionHttpError, type VerifyEmailConfigConnectionHttpResponse, clearCache, transportsExport as default, deleteEmailConfig, getEmailConfig, patchEmailConfig, sendTestEmail, validateEmailConfig, verifyEmailConfigConnection };
