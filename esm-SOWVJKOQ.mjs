// node_modules/.pnpm/@qlik+runtime-module-loader@0.1.15/node_modules/@qlik/runtime-module-loader/dist/esm/index.js
var resolveMainJsUrl;
var mainUrlPromise = new Promise((resolve) => {
  resolveMainJsUrl = (value) => resolve(value);
});
window.qlikMainPromise = window.qlikMainPromise || (async () => {
  if (window.QlikMain) {
    return window.QlikMain;
  }
  const url = await mainUrlPromise;
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
      resolve(window.QlikMain);
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
    resolveMainJsUrl(potentialMainJsUrl);
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
  return (await window.qlikMainPromise).import(name);
}
export {
  importRuntimeModule,
  importUnsupportedAndUnstableRuntimeModule
};
