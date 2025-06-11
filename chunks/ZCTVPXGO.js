import {
  isBrowser
} from "./7MMXU6EL.js";

// src/interceptors/interceptors.ts
var GLOBAL_INTERCEPTORS;
function createInterceptors() {
  const startingInterceptors = GLOBAL_INTERCEPTORS?.getInterceptors() || [];
  const interceptors2 = [...startingInterceptors];
  return {
    /**
     * Adds an interceptor to the global interceptor stack
     * Returns the newly added interceptor
     * @param interceptor the interceptor to add
     * @returns the newly added interceptor
     */
    addInterceptor: (interceptor) => {
      interceptors2.push(interceptor);
      return interceptor;
    },
    /**
     * Removes an interceptor from the global interceptor stack
     * Returns null if the interceptor was not found
     * @param interceptor the interceptor remove
     * @returns the removed interceptor or null if not found
     */
    removeInterceptor: (interceptor) => {
      const index = interceptors2.indexOf(interceptor);
      let removed;
      if (index !== -1) {
        removed = interceptors2.splice(index, 1)[0];
      }
      return removed || null;
    },
    /**
     * Gets all registered interceptors
     */
    getInterceptors: () => interceptors2
  };
}
var addDefaultInterceptorsRun = false;
function addDefaultInterceptors() {
  if (addDefaultInterceptorsRun) {
    return;
  }
  if (isBrowser()) {
    const readFlagsFromUrlQuery = () => {
      const params = new URLSearchParams(window.location.search);
      const featuresParam = params.get("features");
      if (!featuresParam) {
        return {};
      }
      const features = featuresParam.split(",").map((item) => item.trim());
      const urlFeatures = features.reduce((map, obj) => {
        const value = !obj.startsWith("!");
        const key = value ? obj : obj.substring(1);
        map[key] = value;
        return map;
      }, {});
      return urlFeatures;
    };
    const readFlagsFromLocalStorage = () => {
      try {
        const featuresParam = localStorage.getItem("qcs-features");
        if (featuresParam) {
          return JSON.parse(featuresParam);
        }
        return {};
      } catch {
        return {};
      }
    };
    const flagsFromUrl = readFlagsFromUrlQuery();
    const flagsFromLocalStorage = readFlagsFromLocalStorage();
    const interceptor = async (request, proceed) => {
      let resultPromise;
      if (request.pathTemplate === "/api/v1/features") {
        resultPromise = proceed(request);
        const result = await resultPromise;
        return { ...result, data: { ...result.data || {}, ...flagsFromLocalStorage, ...flagsFromUrl } };
      }
      return proceed(request);
    };
    GLOBAL_INTERCEPTORS.addInterceptor(interceptor);
  }
  addDefaultInterceptorsRun = true;
}
GLOBAL_INTERCEPTORS = createInterceptors();
function addInterceptor(interceptor) {
  return GLOBAL_INTERCEPTORS.addInterceptor(interceptor);
}
function removeInterceptor(interceptor) {
  return GLOBAL_INTERCEPTORS.removeInterceptor(interceptor);
}
function getInterceptors() {
  return GLOBAL_INTERCEPTORS.getInterceptors();
}
var interceptors = {
  addInterceptor,
  removeInterceptor,
  getInterceptors,
  createInterceptors
};
var interceptors_default = interceptors;

export {
  createInterceptors,
  addDefaultInterceptors,
  addInterceptor,
  removeInterceptor,
  getInterceptors,
  interceptors_default
};
