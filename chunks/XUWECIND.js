// src/public/public-runtime-modules.ts
function getAuthRuntimeModule(hostConfig) {
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./5WSW4QG3.js") : import("./ADP23C4M.js").then((mod) => mod.importRuntimeModule("auth@v1", hostConfig));
}
async function getQixRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./B2KHDUE3.js") : import("./ADP23C4M.js").then((mod) => mod.importRuntimeModule("qix@v1", hostConfig));
}
async function getInvokeFetchRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./SW3DXPAP.js") : import("./ADP23C4M.js").then((mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig));
}

export {
  getAuthRuntimeModule,
  getQixRuntimeModule,
  getInvokeFetchRuntimeModule
};
