import {
  getAuthRuntimeModule
} from "./DN5SVV4X.js";

// src/public/auth.ts
function registerAuthModule(name, authModule) {
  void getAuthRuntimeModule().then((impl) => impl.registerAuthModule(name, authModule));
}
function logout() {
  void getAuthRuntimeModule().then((impl) => impl.logout());
}
function setDefaultHostConfig(hostConfig) {
  void getAuthRuntimeModule(hostConfig).then((impl) => impl.setDefaultHostConfig(hostConfig));
}
function registerHostConfig(name, hostConfig) {
  void getAuthRuntimeModule(hostConfig).then((impl) => impl.registerHostConfig(name, hostConfig));
}
function unregisterHostConfig(name) {
  void getAuthRuntimeModule().then((impl) => impl.unregisterHostConfig(name));
}
async function getAccessToken({ hostConfig }) {
  return getAuthRuntimeModule(hostConfig).then((impl) => impl.getAccessToken({ hostConfig }));
}
async function getWebResourceAuthParams({
  hostConfig
}) {
  return getAuthRuntimeModule(hostConfig).then((impl) => impl.getWebResourceAuthParams({ hostConfig }));
}
var auth_default = {
  registerAuthModule,
  setDefaultHostConfig,
  registerHostConfig,
  unregisterHostConfig,
  getAccessToken,
  getWebResourceAuthParams
};

export {
  registerAuthModule,
  logout,
  setDefaultHostConfig,
  registerHostConfig,
  unregisterHostConfig,
  getAccessToken,
  getWebResourceAuthParams,
  auth_default
};
