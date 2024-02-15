"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/public/public-runtime-modules.ts
function getAuthRuntimeModule(hostConfig) {
  const isNode = !!_optionalChain([globalThis, 'access', _ => _.process, 'optionalAccess', _2 => _2.argv]);
  return isNode ? Promise.resolve().then(() => _interopRequireWildcard(require("./L2BJNKLV.js"))) : Promise.resolve().then(() => _interopRequireWildcard(require("./OPRGGO4C.js"))).then((mod) => mod.importRuntimeModule("auth@v1", hostConfig));
}
async function getQixRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!_optionalChain([globalThis, 'access', _3 => _3.process, 'optionalAccess', _4 => _4.argv]);
  return isNode ? Promise.resolve().then(() => _interopRequireWildcard(require("./RNLZBOJU.js"))) : Promise.resolve().then(() => _interopRequireWildcard(require("./OPRGGO4C.js"))).then((mod) => mod.importRuntimeModule("qix@v1", hostConfig));
}
async function getInvokeFetchRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!_optionalChain([globalThis, 'access', _5 => _5.process, 'optionalAccess', _6 => _6.argv]);
  return isNode ? Promise.resolve().then(() => _interopRequireWildcard(require("./XOVMZWDC.js"))) : Promise.resolve().then(() => _interopRequireWildcard(require("./OPRGGO4C.js"))).then((mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig));
}





exports.getAuthRuntimeModule = getAuthRuntimeModule; exports.getQixRuntimeModule = getQixRuntimeModule; exports.getInvokeFetchRuntimeModule = getInvokeFetchRuntimeModule;
