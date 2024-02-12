import {
  getAuthRuntimeModule
} from "./EHAANYDL.mjs";

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
var auth_default = {
  registerAuthModule,
  setDefaultHostConfig
};

export {
  registerAuthModule,
  logout,
  setDefaultHostConfig,
  auth_default
};
