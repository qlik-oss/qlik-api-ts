import {
  clearApiCache,
  invokeFetch
} from "./chunks/P6F6QA4Y.js";
import "./chunks/DN5SVV4X.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/encryption.ts
async function getEncryptionKeyproviders(options) {
  return invokeFetch("encryption", {
    method: "get",
    pathTemplate: "/api/v1/encryption/keyproviders",
    options
  });
}
async function createEncryptionKeyprovider(body, options) {
  return invokeFetch("encryption", {
    method: "post",
    pathTemplate: "/api/v1/encryption/keyproviders",
    body,
    contentType: "application/json",
    options
  });
}
async function listEncryptionKeyproviders(options) {
  return invokeFetch("encryption", {
    method: "get",
    pathTemplate: "/api/v1/encryption/keyproviders/actions/list",
    options
  });
}
async function resetEncryptionKeyproviders(options) {
  return invokeFetch("encryption", {
    method: "post",
    pathTemplate: "/api/v1/encryption/keyproviders/actions/reset-to-default-provider",
    options
  });
}
async function getEncryptionKeyprovidersMigrationDetails(options) {
  return invokeFetch("encryption", {
    method: "get",
    pathTemplate: "/api/v1/encryption/keyproviders/migration/actions/details",
    options
  });
}
async function deleteEncryptionKeyprovider(arnFingerPrint, options) {
  return invokeFetch("encryption", {
    method: "delete",
    pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}",
    pathVariables: { arnFingerPrint },
    options
  });
}
async function getEncryptionKeyprovider(arnFingerPrint, options) {
  return invokeFetch("encryption", {
    method: "get",
    pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}",
    pathVariables: { arnFingerPrint },
    options
  });
}
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
async function migrateEncryptionKeyprovider(arnFingerPrint, options) {
  return invokeFetch("encryption", {
    method: "post",
    pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}/actions/migrate",
    pathVariables: { arnFingerPrint },
    options
  });
}
async function testEncryptionKeyprovider(arnFingerPrint, options) {
  return invokeFetch("encryption", {
    method: "post",
    pathTemplate: "/api/v1/encryption/keyproviders/{arnFingerPrint}/actions/test",
    pathVariables: { arnFingerPrint },
    options
  });
}
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
