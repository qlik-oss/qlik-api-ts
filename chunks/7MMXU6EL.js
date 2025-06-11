// src/utils/utils.ts
function isBrowser() {
  if (typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.self !== "undefined") {
    return true;
  }
  return false;
}
function isNode() {
  if (typeof process !== "undefined" && process.version && process.versions.node) {
    return true;
  }
  return false;
}
function isPlainObject(value) {
  return typeof value === "object" && value !== null && value.constructor === Object;
}
function sortKeys(obj) {
  if (Array.isArray(obj)) {
    return obj.map(sortKeys);
  } else if (isPlainObject(obj)) {
    const sortedObj = {};
    for (const key of Object.keys(obj).sort()) {
      sortedObj[key] = sortKeys(obj[key]);
    }
    return sortedObj;
  }
  return obj;
}
function cleanFalsyValues(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => typeof item === "object" && item !== null ? cleanFalsyValues(item) : item).filter((item) => {
      if (typeof item === "object" && item !== null) {
        return Object.keys(item).length > 0;
      }
      return item !== null && item !== void 0 && item !== "";
    });
  } else if (typeof obj === "object" && obj !== null) {
    const cleaned = {};
    for (const key of Object.keys(obj)) {
      const value = obj[key];
      switch (typeof value) {
        case "undefined":
          break;
        case "boolean":
          if (value) cleaned[key] = value;
          break;
        case "string": {
          const trimmed = value.trim();
          if (trimmed !== "") cleaned[key] = trimmed;
          break;
        }
        case "object": {
          if (value === null) break;
          const cleanedValue = cleanFalsyValues(value);
          if (cleanedValue) {
            if (Array.isArray(cleanedValue) && cleanedValue.length > 0 || typeof cleanedValue === "object" && Object.keys(cleanedValue).length > 0) {
              cleaned[key] = cleanedValue;
            } else if (!Array.isArray(cleanedValue) && typeof cleanedValue === "object") {
            }
          }
          break;
        }
        case "function":
        case "number":
          cleaned[key] = value;
          break;
        default:
          console.warn(`Unexpected type for key "${key}": ${typeof value}`);
          cleaned[key] = value;
          break;
      }
    }
    if (Object.keys(cleaned).length === 0) {
      return void 0;
    }
    return cleaned;
  }
  return obj;
}

export {
  isBrowser,
  isNode,
  sortKeys,
  cleanFalsyValues
};
