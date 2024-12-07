// src/public/public-runtime-modules.ts
function getAuthRuntimeModule(hostConfig) {
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./6YSLQLX7.js") : import("./VX3MQBE7.js").then(
    (mod) => mod.importRuntimeModule("auth@v1", hostConfig)
  );
}
async function getQixRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./CS3CXY5V.js") : import("./VX3MQBE7.js").then(
    (mod) => mod.importRuntimeModule("qix@v1", hostConfig)
  );
}
async function getInvokeFetchRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./C4NMXBIA.js") : import("./VX3MQBE7.js").then(
    (mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig)
  );
}

export {
  getAuthRuntimeModule,
  getQixRuntimeModule,
  getInvokeFetchRuntimeModule
};
