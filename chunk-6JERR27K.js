"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkH7SAZYEEjs = require('./chunk-H7SAZYEE.js');

// src/public/invoke-fetch.ts
async function invokeFetch(api, props) {
  const hostConfig = _optionalChain([props, 'access', _ => _.options, 'optionalAccess', _2 => _2.hostConfig]);
  return (await _chunkH7SAZYEEjs.getInvokeFetchRuntimeModule.call(void 0, hostConfig)).invokeFetch(api, props);
}
function clearApiCache(api) {
  void _chunkH7SAZYEEjs.getInvokeFetchRuntimeModule.call(void 0, ).then((runtimeModule) => runtimeModule.clearApiCache(api));
}




exports.invokeFetch = invokeFetch; exports.clearApiCache = clearApiCache;
