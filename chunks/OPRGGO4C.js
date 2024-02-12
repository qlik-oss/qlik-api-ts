"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }require('./4HB3TAEO.js');

// node_modules/.pnpm/@qlik+runtime-module-loader@0.2.5/node_modules/@qlik/runtime-module-loader/dist/esm/index.js
window.__qlikMainPrivateResolvers = window.__qlikMainPrivateResolvers || {};
window.__qlikMainPrivateResolvers.mainUrlPromise = window.__qlikMainPrivateResolvers.mainUrlPromise || new Promise((resolve) => {
  window.__qlikMainPrivateResolvers.resolveMainJsUrl = (value) => resolve(value);
});
window.__qlikMainPrivateResolvers.qlikMainPromise = window.__qlikMainPrivateResolvers.qlikMainPromise || (async () => {
  if (window.QlikMain) {
    return window.QlikMain;
  }
  const url = await window.__qlikMainPrivateResolvers.mainUrlPromise;
  return new Promise((resolve, reject) => {
    if (window.QlikMain) {
      resolve(window.QlikMain);
    }
    const script = window.document.createElement("script");
    script.src = url;
    script.addEventListener("error", (err) => {
      reject(err);
    });
    script.addEventListener("load", () => {
      if (window.QlikMain) {
        resolve(window.QlikMain);
      }
    });
    window.document.head.appendChild(script);
  });
})();
function provideHostConfigForMainJsUrl(hostConfig) {
  const trailingSlashes = /\/+$/;
  function toMainJsUrl(hc) {
    const url = _optionalChain([hc, 'optionalAccess', _ => _.embedRuntimeUrl]) || _optionalChain([hc, 'optionalAccess', _2 => _2.url]) || _optionalChain([hc, 'optionalAccess', _3 => _3.host]);
    if (!url) {
      return void 0;
    }
    let locationUrl;
    if (url.toLowerCase().startsWith("https://") || url.toLowerCase().startsWith("http://")) {
      locationUrl = url;
    } else {
      locationUrl = `https://${url}`;
    }
    locationUrl = locationUrl.replace(trailingSlashes, "");
    return `${locationUrl}/main.js`;
  }
  const potentialMainJsUrl = toMainJsUrl(hostConfig);
  if (potentialMainJsUrl) {
    window.__qlikMainPrivateResolvers.resolveMainJsUrl(potentialMainJsUrl);
  }
}
async function importRuntimeModule(name, hostConfig) {
  if (_optionalChain([hostConfig, 'optionalAccess', _4 => _4.runtimeModuleMocks, 'optionalAccess', _5 => _5[name]])) {
    return _optionalChain([hostConfig, 'optionalAccess', _6 => _6.runtimeModuleMocks, 'optionalAccess', _7 => _7[name]]);
  }
  provideHostConfigForMainJsUrl(hostConfig);
  return importFromCdn(name);
}
async function importUnsupportedAndUnstableRuntimeModule(name) {
  return importFromCdn(name);
}
async function importFromCdn(name) {
  return (await window.__qlikMainPrivateResolvers.qlikMainPromise).import(name);
}



exports.importRuntimeModule = importRuntimeModule; exports.importUnsupportedAndUnstableRuntimeModule = importUnsupportedAndUnstableRuntimeModule;
