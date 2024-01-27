// src/public/public-runtime-modules.ts
function getAuthRuntimeModule(hostConfig) {
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./K2WB4AWW.mjs") : import("./H32EGPZN.mjs").then((mod) => mod.importRuntimeModule("auth@v1", hostConfig));
}
async function getQixRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./TPTPAX2U.mjs") : import("./H32EGPZN.mjs").then((mod) => mod.importRuntimeModule("qix@v1", hostConfig));
}
async function getInvokeFetchRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./6QHMH76M.mjs") : import("./H32EGPZN.mjs").then((mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig));
}

export {
  getAuthRuntimeModule,
  getQixRuntimeModule,
  getInvokeFetchRuntimeModule
};
