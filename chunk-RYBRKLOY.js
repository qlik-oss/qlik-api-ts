"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBRDPNGQ7js = require('./chunk-BRDPNGQ7.js');

// src/public/auth.ts
function registerAuthModule(name, authModule) {
  void _chunkBRDPNGQ7js.getAuthRuntimeModule.call(void 0, ).then((impl) => impl.registerAuthModule(name, authModule));
}
function logout() {
  void _chunkBRDPNGQ7js.getAuthRuntimeModule.call(void 0, ).then((impl) => impl.logout());
}
function setDefaultHostConfig(hostConfig) {
  void _chunkBRDPNGQ7js.getAuthRuntimeModule.call(void 0, hostConfig).then((impl) => impl.setDefaultHostConfig(hostConfig));
}
var auth_default = {
  registerAuthModule,
  setDefaultHostConfig
};






exports.registerAuthModule = registerAuthModule; exports.logout = logout; exports.setDefaultHostConfig = setDefaultHostConfig; exports.auth_default = auth_default;