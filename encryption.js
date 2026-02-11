import "./chunks/public-runtime-modules-2KfyI2qM.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DMAi6Fg3.js";

//#region src/public/rest/encryption.ts
/**
* Returns a list of AWS key providers in the tenant. Use /actions/list to return all key providers.
*
* @throws GetEncryptionKeyprovidersHttpError
*/
async function getEncryptionKeyproviders(options) {
	return invokeFetch("encryption", {
		method: "get",
		pathTemplate: "/api/v1/encryption/keyproviders",
		options
	});
}
/**
* The AWS-KMS key configuration must match the Qlik Cloud region configuration requirements. Most regions should have a key deployed to the same AWS region as the Qlik Cloud tenant, with a replica key in the relevant Qlik Cloud DR region. Consult the documentation for DR region mappings.
*
* @param body an object with the body content
* @throws CreateEncryptionKeyproviderHttpError
*/
async function createEncryptionKeyprovider(body, options) {
	return invokeFetch("encryption", {
		method: "post",
		pathTemplate: "/api/v1/encryption/keyproviders",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns a list of all key providers in the tenant, including the default Qlik key provider.
*
* @throws ListEncryptionKeyprovidersHttpError
*/
async function listEncryptionKeyproviders(options) {
	return invokeFetch("encryption", {
		method: "get",
		pathTemplate: "/api/v1/encryption/keyproviders/actions/list",
		options
	});
}
/**
* Reset the encryption key back to the default Qlik managed provider. No action will be taken if tenant is already using the Qlik provider.
*
* @throws ResetEncryptionKeyprovidersHttpError
*/
async function resetEncryptionKeyproviders(options) {
	return invokeFetch("encryption", {
		method: "post",
		pathTemplate: "/api/v1/encryption/keyproviders/actions/reset-to-default-provider",
		options
	});
}
/**
* Retrieve details for the ongoing or last completed migration for the tenant.
*
* @throws GetEncryptionKeyprovidersMigrationDetailsHttpError
*/
async function getEncryptionKeyprovidersMigrationDetails(options) {
	return invokeFetch("encryption", {
		method: "get",
		pathTemplate: "/api/v1/encryption/keyproviders/migration/actions/details",
		options
	});
}
/**
* Delete a key configuration from the tenant. Not supported for the default Qlik managed key provider. Key must not be in use.
*
* @param arnFingerPrint The fingerprint of the key provider you wish to delete.
* @throws DeleteEncryptionKeyproviderHttpError
*/
async function deleteEncryptionKeyprovider(arnFingerPrint, options) {
	return invokeFetch("encryption", {
		method: "delete",
		pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}",
		pathVariables: { arnFingerPrint },
		options
	});
}
/**
* Retrieve key provider detail by passing the ARN fingerprint as parameter.
*
* @param arnFingerPrint The fingerprint of the requested provider key.
* @throws GetEncryptionKeyproviderHttpError
*/
async function getEncryptionKeyprovider(arnFingerPrint, options) {
	return invokeFetch("encryption", {
		method: "get",
		pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}",
		pathVariables: { arnFingerPrint },
		options
	});
}
/**
* Update the name and/or description of a key provider.
*
* @param arnFingerPrint The ARN fingerprint of an existing key provider key.
* @param body an object with the body content
* @throws PatchEncryptionKeyproviderHttpError
*/
async function patchEncryptionKeyprovider(arnFingerPrint, body, options) {
	return invokeFetch("encryption", {
		method: "patch",
		pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}",
		pathVariables: { arnFingerPrint },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Migrate the active key from one provider to another. The migration process may take some time to complete, however this process will not impact users, and the tenant will continue to function normally during the migration. Use the migration details endpoint to monitor migration progress.
*
* @param arnFingerPrint The fingerprint of an existing key provider key.
* @throws MigrateEncryptionKeyproviderHttpError
*/
async function migrateEncryptionKeyprovider(arnFingerPrint, options) {
	return invokeFetch("encryption", {
		method: "post",
		pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}/actions/migrate",
		pathVariables: { arnFingerPrint },
		options
	});
}
/**
* Validate a key to check if Qlik Cloud has required access to your AWS account and key policy, and the key configuration. If the key policy or configuration are changed from the required configuration, this may impact your ability to access your tenant.
*
* @param arnFingerPrint The fingerprint of an existing key provider key.
* @throws TestEncryptionKeyproviderHttpError
*/
async function testEncryptionKeyprovider(arnFingerPrint, options) {
	return invokeFetch("encryption", {
		method: "post",
		pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}/actions/test",
		pathVariables: { arnFingerPrint },
		options
	});
}
/**
* Clears the cache for encryption api requests.
*/
function clearCache() {
	return clearApiCache("encryption");
}
/**
* Functions for the encryption api
*/
const encryptionExport = {
	getEncryptionKeyproviders,
	createEncryptionKeyprovider,
	listEncryptionKeyproviders,
	resetEncryptionKeyproviders,
	getEncryptionKeyprovidersMigrationDetails,
	deleteEncryptionKeyprovider,
	getEncryptionKeyprovider,
	patchEncryptionKeyprovider,
	migrateEncryptionKeyprovider,
	testEncryptionKeyprovider,
	clearCache
};

//#endregion
export { clearCache, createEncryptionKeyprovider, encryptionExport as default, deleteEncryptionKeyprovider, getEncryptionKeyprovider, getEncryptionKeyproviders, getEncryptionKeyprovidersMigrationDetails, listEncryptionKeyproviders, migrateEncryptionKeyprovider, patchEncryptionKeyprovider, resetEncryptionKeyproviders, testEncryptionKeyprovider };