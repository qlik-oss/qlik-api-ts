// src/public/public-runtime-modules.ts
function getAuthRuntimeModule(hostConfig) {
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./H46323PG.js") : import("./KXPK2IU2.js").then((mod) => mod.importRuntimeModule("auth@v1", hostConfig));
}
async function getQixRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./VVREBIN2.js") : import("./KXPK2IU2.js").then((mod) => mod.importRuntimeModule("qix@v1", hostConfig));
}
async function getInvokeFetchRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./ZVNQOWQU.js") : import("./KXPK2IU2.js").then((mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig));
}

export {
  getAuthRuntimeModule,
  getQixRuntimeModule,
  getInvokeFetchRuntimeModule
};
