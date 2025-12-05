import { y as ApiCallOptions } from "./auth-types-E99tzdN0.js";

//#region src/public/rest/encryption.d.ts

/**
 * @example
 * {
 *   arn: "arn:aws:kms:eu-west-1:111222334455:key/mrk-1237c011a37erft67ei987c7612q456",
 *   current: false,
 *   description: "test description",
 *   keyprovider: "AWS-KMS",
 *   multiRegion: true,
 *   name: "test name",
 *   replicaKeys: [
 *     {
 *       arn: "arn:aws:kms:eu-west-3:111222334455:key/mrk-1237c011a37erft67ei987c7612q456",
 *       region: "eu-west-3"
 *     }
 *   ]
 * }
 */
type KeyProvider = {
  /** The provider resource notation for the key. */
  arn: string;
  /** The ARN fingerprint. */
  readonly arnFingerPrint?: string;
  /** When key entry was created. */
  readonly createdAt?: string;
  /** Indicates whether the key is being used to encrypt/decrypt secrets. */
  readonly current?: boolean;
  /** When the key was demoted from being current to non active. */
  readonly demotedFromCurrentAt?: string;
  /** Description of key provider entry. */
  description?: string;
  /** Key Provider type. */
  keyprovider: "AWS-KMS";
  /** Indicates whether the key has multi-region configurations and has replica key in qcs secondary region. */
  readonly multiRegion?: boolean;
  /** Name of key provider entry. */
  name: string;
  /** When the key was promoted to being the current active one. */
  readonly promotedToCurrentAt?: string;
  readonly replicaKeys?: {
    /** Replica key keeps list of backup keys from the supported qcs secondary region. */
    arn?: string;
    /** Region indicates the backup qcs-region link to the primary region. */
    region?: string;
  }[];
  /** Tenant ID. */
  readonly tenantId?: string;
};
/**
 * A JSON Patch document as defined in https://datatracker.ietf.org/doc/html/rfc6902.
 * @example
 * {
 *   op: "replace",
 *   path: "/name",
 *   value: "New Encryption Key"
 * }
 */
type KeyProviderPatchBase = {
  /** The operation to be performed. */
  op: "replace";
  /** The property path. */
  path: string;
  /** The value to be used for this operation. */
  value: string;
};
type KeyProviderPatchSchema = KeyProviderPatchBase[];
type KeyProviders = {
  errors?: KeyProvider[];
};
type KeyProvidersDeleteResponseBody = {
  /** Successful response message. */
  response?: string;
};
type ListKeyProviders = {
  errors?: KeyProvider[];
};
type MigrationInformation = {
  completedAt?: string;
  /** Migration operation ID. */
  id?: string;
  initiatedAt?: string;
  /** The key ARN being migrated from (in case of QlikVault, could be a short name only). */
  migratingFrom?: string;
  /** The new key ARN that keys should be migrated to. */
  migratingTo?: string;
  /** The new key ARN fingerprint. */
  migratingToFingerprint?: string;
  /** The new key prefix (to help services know which prefix should NOT be migrated). */
  migratingToPrefix?: string;
  /** Progress in percentage. */
  progress?: number;
  /** Migration operation state. */
  state?: "New" | "InProgress" | "Completed";
  /** Tenant ID. */
  tenantId?: string;
};
type ResetMigrationNotNeeded = {
  /** Tenant is already using Qlik KMS, no migration is required. */
  message?: string;
};
type StandardError = {
  errors: StandardErrorItem[];
};
type StandardErrorItem = {
  /** The error code. */
  code: string;
  /** Extra information about the error. */
  detail?: string;
  /** Additional error object metadata. */
  meta?: unknown;
  /** Description of the error. */
  title: string;
};
/**
 * Returns a list of AWS key providers in the tenant. Use /actions/list to return all key providers.
 *
 * @throws GetEncryptionKeyprovidersHttpError
 */
declare function getEncryptionKeyproviders(options?: ApiCallOptions): Promise<GetEncryptionKeyprovidersHttpResponse>;
type GetEncryptionKeyprovidersHttpResponse = {
  data: KeyProviders;
  headers: Headers;
  status: 200;
};
type GetEncryptionKeyprovidersHttpError = {
  data: StandardError;
  headers: Headers;
  status: 400 | 417;
};
/**
 * The AWS-KMS key configuration must match the Qlik Cloud region configuration requirements. Most regions should have a key deployed to the same AWS region as the Qlik Cloud tenant, with a replica key in the relevant Qlik Cloud DR region. Consult the documentation for DR region mappings.
 *
 * @param body an object with the body content
 * @throws CreateEncryptionKeyproviderHttpError
 */
declare function createEncryptionKeyprovider(body: KeyProvider, options?: ApiCallOptions): Promise<CreateEncryptionKeyproviderHttpResponse>;
type CreateEncryptionKeyproviderHttpResponse = {
  data: KeyProvider;
  headers: Headers;
  status: 201;
};
type CreateEncryptionKeyproviderHttpError = {
  data: StandardError;
  headers: Headers;
  status: 400 | 401 | 403 | 406 | 408 | 409 | 417;
};
/**
 * Returns a list of all key providers in the tenant, including the default Qlik key provider.
 *
 * @throws ListEncryptionKeyprovidersHttpError
 */
declare function listEncryptionKeyproviders(options?: ApiCallOptions): Promise<ListEncryptionKeyprovidersHttpResponse>;
type ListEncryptionKeyprovidersHttpResponse = {
  data: ListKeyProviders;
  headers: Headers;
  status: 200;
};
type ListEncryptionKeyprovidersHttpError = {
  data: StandardError;
  headers: Headers;
  status: 400 | 417;
};
/**
 * Reset the encryption key back to the default Qlik managed provider. No action will be taken if tenant is already using the Qlik provider.
 *
 * @throws ResetEncryptionKeyprovidersHttpError
 */
declare function resetEncryptionKeyproviders(options?: ApiCallOptions): Promise<ResetEncryptionKeyprovidersHttpResponse>;
type ResetEncryptionKeyprovidersHttpResponse = ResetEncryptionKeyproviders200HttpResponse | ResetEncryptionKeyproviders205HttpResponse;
type ResetEncryptionKeyproviders200HttpResponse = {
  data: ResetMigrationNotNeeded;
  headers: Headers;
  status: 200;
};
type ResetEncryptionKeyproviders205HttpResponse = {
  data: MigrationInformation;
  headers: Headers;
  status: 205;
};
type ResetEncryptionKeyprovidersHttpError = {
  data: StandardError;
  headers: Headers;
  status: 401 | 406 | 412 | 424;
};
/**
 * Retrieve details for the ongoing or last completed migration for the tenant.
 *
 * @throws GetEncryptionKeyprovidersMigrationDetailsHttpError
 */
declare function getEncryptionKeyprovidersMigrationDetails(options?: ApiCallOptions): Promise<GetEncryptionKeyprovidersMigrationDetailsHttpResponse>;
type GetEncryptionKeyprovidersMigrationDetailsHttpResponse = {
  data: MigrationInformation;
  headers: Headers;
  status: 200;
};
type GetEncryptionKeyprovidersMigrationDetailsHttpError = {
  data: StandardError;
  headers: Headers;
  status: 400 | 401 | 404 | 417;
};
/**
 * Delete a key configuration from the tenant. Not supported for the default Qlik managed key provider. Key must not be in use.
 *
 * @param arnFingerPrint The fingerprint of the key provider you wish to delete.
 * @throws DeleteEncryptionKeyproviderHttpError
 */
declare function deleteEncryptionKeyprovider(arnFingerPrint: string, options?: ApiCallOptions): Promise<DeleteEncryptionKeyproviderHttpResponse>;
type DeleteEncryptionKeyproviderHttpResponse = {
  data: KeyProvidersDeleteResponseBody;
  headers: Headers;
  status: 204;
};
type DeleteEncryptionKeyproviderHttpError = {
  data: StandardError;
  headers: Headers;
  status: 400 | 404 | 417 | 424;
};
/**
 * Retrieve key provider detail by passing the ARN fingerprint as parameter.
 *
 * @param arnFingerPrint The fingerprint of the requested provider key.
 * @throws GetEncryptionKeyproviderHttpError
 */
declare function getEncryptionKeyprovider(arnFingerPrint: string, options?: ApiCallOptions): Promise<GetEncryptionKeyproviderHttpResponse>;
type GetEncryptionKeyproviderHttpResponse = {
  data: KeyProvider;
  headers: Headers;
  status: 200;
};
type GetEncryptionKeyproviderHttpError = {
  data: StandardError;
  headers: Headers;
  status: 400 | 404 | 414;
};
/**
 * Update the name and/or description of a key provider.
 *
 * @param arnFingerPrint The ARN fingerprint of an existing key provider key.
 * @param body an object with the body content
 * @throws PatchEncryptionKeyproviderHttpError
 */
declare function patchEncryptionKeyprovider(arnFingerPrint: string, body: KeyProviderPatchSchema, options?: ApiCallOptions): Promise<PatchEncryptionKeyproviderHttpResponse>;
type PatchEncryptionKeyproviderHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchEncryptionKeyproviderHttpError = {
  data: StandardError;
  headers: Headers;
  status: 400 | 401 | 404 | 417;
};
/**
 * Migrate the active key from one provider to another. The migration process may take some time to complete, however this process will not impact users, and the tenant will continue to function normally during the migration. Use the migration details endpoint to monitor migration progress.
 *
 * @param arnFingerPrint The fingerprint of an existing key provider key.
 * @throws MigrateEncryptionKeyproviderHttpError
 */
declare function migrateEncryptionKeyprovider(arnFingerPrint: string, options?: ApiCallOptions): Promise<MigrateEncryptionKeyproviderHttpResponse>;
type MigrateEncryptionKeyproviderHttpResponse = {
  data: MigrationInformation;
  headers: Headers;
  status: 200;
};
type MigrateEncryptionKeyproviderHttpError = {
  data: StandardError;
  headers: Headers;
  status: 400 | 401 | 404 | 412 | 424 | 428;
};
/**
 * Validate a key to check if Qlik Cloud has required access to your AWS account and key policy, and the key configuration. If the key policy or configuration are changed from the required configuration, this may impact your ability to access your tenant.
 *
 * @param arnFingerPrint The fingerprint of an existing key provider key.
 * @throws TestEncryptionKeyproviderHttpError
 */
declare function testEncryptionKeyprovider(arnFingerPrint: string, options?: ApiCallOptions): Promise<TestEncryptionKeyproviderHttpResponse>;
type TestEncryptionKeyproviderHttpResponse = {
  data: KeyProvider;
  headers: Headers;
  status: 201;
};
type TestEncryptionKeyproviderHttpError = {
  data: StandardError;
  headers: Headers;
  status: 400 | 401 | 404 | 408;
};
/**
 * Clears the cache for encryption api requests.
 */
declare function clearCache(): void;
type EncryptionAPI = {
  /**
   * Returns a list of AWS key providers in the tenant. Use /actions/list to return all key providers.
   *
   * @throws GetEncryptionKeyprovidersHttpError
   */
  getEncryptionKeyproviders: typeof getEncryptionKeyproviders;
  /**
   * The AWS-KMS key configuration must match the Qlik Cloud region configuration requirements. Most regions should have a key deployed to the same AWS region as the Qlik Cloud tenant, with a replica key in the relevant Qlik Cloud DR region. Consult the documentation for DR region mappings.
   *
   * @param body an object with the body content
   * @throws CreateEncryptionKeyproviderHttpError
   */
  createEncryptionKeyprovider: typeof createEncryptionKeyprovider;
  /**
   * Returns a list of all key providers in the tenant, including the default Qlik key provider.
   *
   * @throws ListEncryptionKeyprovidersHttpError
   */
  listEncryptionKeyproviders: typeof listEncryptionKeyproviders;
  /**
   * Reset the encryption key back to the default Qlik managed provider. No action will be taken if tenant is already using the Qlik provider.
   *
   * @throws ResetEncryptionKeyprovidersHttpError
   */
  resetEncryptionKeyproviders: typeof resetEncryptionKeyproviders;
  /**
   * Retrieve details for the ongoing or last completed migration for the tenant.
   *
   * @throws GetEncryptionKeyprovidersMigrationDetailsHttpError
   */
  getEncryptionKeyprovidersMigrationDetails: typeof getEncryptionKeyprovidersMigrationDetails;
  /**
   * Delete a key configuration from the tenant. Not supported for the default Qlik managed key provider. Key must not be in use.
   *
   * @param arnFingerPrint The fingerprint of the key provider you wish to delete.
   * @throws DeleteEncryptionKeyproviderHttpError
   */
  deleteEncryptionKeyprovider: typeof deleteEncryptionKeyprovider;
  /**
   * Retrieve key provider detail by passing the ARN fingerprint as parameter.
   *
   * @param arnFingerPrint The fingerprint of the requested provider key.
   * @throws GetEncryptionKeyproviderHttpError
   */
  getEncryptionKeyprovider: typeof getEncryptionKeyprovider;
  /**
   * Update the name and/or description of a key provider.
   *
   * @param arnFingerPrint The ARN fingerprint of an existing key provider key.
   * @param body an object with the body content
   * @throws PatchEncryptionKeyproviderHttpError
   */
  patchEncryptionKeyprovider: typeof patchEncryptionKeyprovider;
  /**
   * Migrate the active key from one provider to another. The migration process may take some time to complete, however this process will not impact users, and the tenant will continue to function normally during the migration. Use the migration details endpoint to monitor migration progress.
   *
   * @param arnFingerPrint The fingerprint of an existing key provider key.
   * @throws MigrateEncryptionKeyproviderHttpError
   */
  migrateEncryptionKeyprovider: typeof migrateEncryptionKeyprovider;
  /**
   * Validate a key to check if Qlik Cloud has required access to your AWS account and key policy, and the key configuration. If the key policy or configuration are changed from the required configuration, this may impact your ability to access your tenant.
   *
   * @param arnFingerPrint The fingerprint of an existing key provider key.
   * @throws TestEncryptionKeyproviderHttpError
   */
  testEncryptionKeyprovider: typeof testEncryptionKeyprovider;
  /**
   * Clears the cache for encryption api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the encryption api
 */
declare const encryptionExport: EncryptionAPI;
//#endregion
export { StandardError as A, getEncryptionKeyprovidersMigrationDetails as B, PatchEncryptionKeyproviderHttpError as C, ResetEncryptionKeyprovidersHttpError as D, ResetEncryptionKeyproviders205HttpResponse as E, createEncryptionKeyprovider as F, testEncryptionKeyprovider as G, migrateEncryptionKeyprovider as H, deleteEncryptionKeyprovider as I, encryptionExport as L, TestEncryptionKeyproviderHttpError as M, TestEncryptionKeyproviderHttpResponse as N, ResetEncryptionKeyprovidersHttpResponse as O, clearCache as P, getEncryptionKeyprovider as R, MigrationInformation as S, ResetEncryptionKeyproviders200HttpResponse as T, patchEncryptionKeyprovider as U, listEncryptionKeyproviders as V, resetEncryptionKeyproviders as W, ListEncryptionKeyprovidersHttpError as _, EncryptionAPI as a, MigrateEncryptionKeyproviderHttpError as b, GetEncryptionKeyprovidersHttpError as c, GetEncryptionKeyprovidersMigrationDetailsHttpResponse as d, KeyProvider as f, KeyProvidersDeleteResponseBody as g, KeyProviders as h, DeleteEncryptionKeyproviderHttpResponse as i, StandardErrorItem as j, ResetMigrationNotNeeded as k, GetEncryptionKeyprovidersHttpResponse as l, KeyProviderPatchSchema as m, CreateEncryptionKeyproviderHttpResponse as n, GetEncryptionKeyproviderHttpError as o, KeyProviderPatchBase as p, DeleteEncryptionKeyproviderHttpError as r, GetEncryptionKeyproviderHttpResponse as s, CreateEncryptionKeyproviderHttpError as t, GetEncryptionKeyprovidersMigrationDetailsHttpError as u, ListEncryptionKeyprovidersHttpResponse as v, PatchEncryptionKeyproviderHttpResponse as w, MigrateEncryptionKeyproviderHttpResponse as x, ListKeyProviders as y, getEncryptionKeyproviders as z };