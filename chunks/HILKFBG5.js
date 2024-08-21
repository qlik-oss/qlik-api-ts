// src/public/public-runtime-modules.ts
function getAuthRuntimeModule(hostConfig) {
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./6F5MEDU7.js") : import("./PAGTF5II.js").then(
    (mod) => mod.importRuntimeModule("auth@v1", hostConfig)
  );
}
async function getQixRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./Y7V6Y33G.js") : import("./PAGTF5II.js").then(
    (mod) => mod.importRuntimeModule("qix@v1", hostConfig)
  );
}
async function getInvokeFetchRuntimeModule(hostConfig) {
  await getAuthRuntimeModule(hostConfig);
  const isNode = !!globalThis.process?.argv;
  return isNode ? import("./KYUCJ7N4.js") : import("./PAGTF5II.js").then(
    (mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig)
  );
}

export {
  getAuthRuntimeModule,
  getQixRuntimeModule,
  getInvokeFetchRuntimeModule
};
