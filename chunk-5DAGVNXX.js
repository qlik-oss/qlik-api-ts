"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkERGV34M7js = require('./chunk-ERGV34M7.js');

// src/public/auth.ts
function registerAuthModule(name, authModule) {
  void _chunkERGV34M7js.getAuthRuntimeModule.call(void 0, ).then((impl) => impl.registerAuthModule(name, authModule));
}
function logout() {
  void _chunkERGV34M7js.getAuthRuntimeModule.call(void 0, ).then((impl) => impl.logout());
}
function setDefaultHostConfig(hostConfig) {
  void _chunkERGV34M7js.getAuthRuntimeModule.call(void 0, hostConfig).then((impl) => impl.setDefaultHostConfig(hostConfig));
}
var auth_default = {
  registerAuthModule,
  setDefaultHostConfig
};






exports.registerAuthModule = registerAuthModule; exports.logout = logout; exports.setDefaultHostConfig = setDefaultHostConfig; exports.auth_default = auth_default;
