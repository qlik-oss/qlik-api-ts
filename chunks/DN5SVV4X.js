// src/public/public-runtime-modules.ts
function getAuthRuntimeModule(hostConfig) {
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./BZ64ULUN.js") : import("./GKEDD5LZ.js").then(
    (mod) => mod.importRuntimeModule("auth@v1", hostConfig)
  );
}
async function getQixRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./EX6VKESY.js") : import("./GKEDD5LZ.js").then(
    (mod) => mod.importRuntimeModule("qix@v1", hostConfig)
  );
}
async function getInvokeFetchRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./5TNMR3QX.js") : import("./GKEDD5LZ.js").then(
    (mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig)
  );
}

export {
  getAuthRuntimeModule,
  getQixRuntimeModule,
  getInvokeFetchRuntimeModule
};
