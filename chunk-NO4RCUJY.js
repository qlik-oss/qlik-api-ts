"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkL4SFSITJjs = require('./chunk-L4SFSITJ.js');

// src/public/auth.ts
function registerAuthModule(name, authModule) {
  void _chunkL4SFSITJjs.getAuthRuntimeModule.call(void 0, ).then((impl) => impl.registerAuthModule(name, authModule));
}
function logout() {
  void _chunkL4SFSITJjs.getAuthRuntimeModule.call(void 0, ).then((impl) => impl.logout());
}
function setDefaultHostConfig(hostConfig) {
  void _chunkL4SFSITJjs.getAuthRuntimeModule.call(void 0, hostConfig).then((impl) => impl.setDefaultHostConfig(hostConfig));
}
var auth_default = {
  registerAuthModule,
  setDefaultHostConfig
};






exports.registerAuthModule = registerAuthModule; exports.logout = logout; exports.setDefaultHostConfig = setDefaultHostConfig; exports.auth_default = auth_default;
