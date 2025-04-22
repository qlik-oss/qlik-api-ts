// src/public/public-runtime-modules.ts
function getAuthRuntimeModule(hostConfig) {
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./LY7RP2HA.js") : import("./PLVPW5IR.js").then(
    (mod) => mod.importRuntimeModule("auth@v1", hostConfig)
  );
}
async function getQixRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./UZTIZ4H5.js") : import("./PLVPW5IR.js").then(
    (mod) => mod.importRuntimeModule("qix@v1", hostConfig)
  );
}
async function getInvokeFetchRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./6ZONDHRN.js") : import("./PLVPW5IR.js").then(
    (mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig)
  );
}

export {
  getAuthRuntimeModule,
  getQixRuntimeModule,
  getInvokeFetchRuntimeModule
};
