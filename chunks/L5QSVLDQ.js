// src/public/public-runtime-modules.ts
function getAuthRuntimeModule(hostConfig) {
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./42FGFHJE.js") : import("./GKEDD5LZ.js").then(
    (mod) => mod.importRuntimeModule("auth@v1", hostConfig)
  );
}
async function getQixRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./DXVNOFWU.js") : import("./GKEDD5LZ.js").then(
    (mod) => mod.importRuntimeModule("qix@v1", hostConfig)
  );
}
async function getInvokeFetchRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./43V24OWH.js") : import("./GKEDD5LZ.js").then(
    (mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig)
  );
}

export {
  getAuthRuntimeModule,
  getQixRuntimeModule,
  getInvokeFetchRuntimeModule
};
