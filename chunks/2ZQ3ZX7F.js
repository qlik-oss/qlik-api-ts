// src/utils/utils.ts
function isBrowserInternal() {
  if (typeof window !== "undefined" && typeof window.document !== "undefined" && typeof self !== "undefined") {
    return true;
  }
  return false;
}
function isNodeInternal() {
  if (typeof process !== "undefined" && process.version && process.versions.node) {
    return true;
  }
  return false;
}
function getEnvironment() {
  if (isNodeInternal()) {
    return "node";
  }
  if (isBrowserInternal()) {
    return "browser";
  }
  throw new Error("Environment detection failed. Supported environments are either a browser or in a node environment");
}
function isBrowser() {
  return getEnvironment() === "browser";
}
function isNode() {
  return getEnvironment() === "node";
}

export {
  isBrowser,
  isNode
};
