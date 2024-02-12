import "./VSY5YIQY.mjs";

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
    const url = hc?.embedRuntimeUrl || hc?.url || hc?.host;
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
  if (hostConfig?.runtimeModuleMocks?.[name]) {
    return hostConfig?.runtimeModuleMocks?.[name];
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
export {
  importRuntimeModule,
  importUnsupportedAndUnstableRuntimeModule
};
