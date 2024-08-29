import {
  getAuthRuntimeModule
} from "./NJRTJEAQ.js";

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
async function getAccessToken({ hostConfig }) {
  return getAuthRuntimeModule(hostConfig).then((impl) => impl.getAccessToken({ hostConfig }));
}
var auth_default = {
  registerAuthModule,
  setDefaultHostConfig,
  getAccessToken
};

export {
  registerAuthModule,
  logout,
  setDefaultHostConfig,
  getAccessToken,
  auth_default
};
