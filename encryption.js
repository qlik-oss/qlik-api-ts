import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/encryption.ts
var getEncryptionKeyproviders = async (options) => invokeFetch("encryption", {
  method: "get",
  pathTemplate: "/api/v1/encryption/keyproviders",
  options
});
var createEncryptionKeyprovider = async (body, options) => invokeFetch("encryption", {
  method: "post",
  pathTemplate: "/api/v1/encryption/keyproviders",
  body,
  contentType: "application/json",
  options
});
var listEncryptionKeyproviders = async (options) => invokeFetch("encryption", {
  method: "get",
  pathTemplate: "/api/v1/encryption/keyproviders/actions/list",
  options
});
var resetEncryptionKeyproviders = async (options) => invokeFetch("encryption", {
  method: "post",
  pathTemplate: "/api/v1/encryption/keyproviders/actions/reset-to-default-provider",
  options
});
var getEncryptionKeyprovidersMigrationDetails = async (options) => invokeFetch("encryption", {
  method: "get",
  pathTemplate: "/api/v1/encryption/keyproviders/migration/actions/details",
  options
});
var deleteEncryptionKeyprovider = async (arnFingerPrint, options) => invokeFetch("encryption", {
  method: "delete",
  pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}",
  pathVariables: { arnFingerPrint },
  options
});
var getEncryptionKeyprovider = async (arnFingerPrint, options) => invokeFetch("encryption", {
  method: "get",
  pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}",
  pathVariables: { arnFingerPrint },
  options
});
var patchEncryptionKeyprovider = async (arnFingerPrint, body, options) => invokeFetch("encryption", {
  method: "patch",
  pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}",
  pathVariables: { arnFingerPrint },
  body,
  contentType: "application/json",
  options
});
var migrateEncryptionKeyprovider = async (arnFingerPrint, options) => invokeFetch("encryption", {
  method: "post",
  pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}/actions/migrate",
  pathVariables: { arnFingerPrint },
  options
});
var testEncryptionKeyprovider = async (arnFingerPrint, options) => invokeFetch("encryption", {
  method: "post",
  pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}/actions/test",
  pathVariables: { arnFingerPrint },
  options
});
function clearCache() {
  return clearApiCache("encryption");
}
var encryptionExport = {
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
var encryption_default = encryptionExport;
export {
  clearCache,
  createEncryptionKeyprovider,
  encryption_default as default,
  deleteEncryptionKeyprovider,
  getEncryptionKeyprovider,
  getEncryptionKeyproviders,
  getEncryptionKeyprovidersMigrationDetails,
  listEncryptionKeyproviders,
  migrateEncryptionKeyprovider,
  patchEncryptionKeyprovider,
  resetEncryptionKeyproviders,
  testEncryptionKeyprovider
};
