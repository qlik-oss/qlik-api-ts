import {
  isBrowser
} from "./BGRBTH7Y.js";
import {
  getInvokeFetchRuntimeModule
} from "./S2BIIZLQ.js";

// src/public/invoke-fetch.ts
var defaultUserAgent = "qlik-api/latest";
async function invokeFetch(api, props) {
  const hostConfig = props.options?.hostConfig;
  let userAgent;
  if (props?.userAgent) {
    userAgent = props.userAgent;
  } else if (isBrowser()) {
    userAgent = `${window.navigator.userAgent} ${defaultUserAgent}`;
  } else {
    userAgent = defaultUserAgent;
  }
  return (await getInvokeFetchRuntimeModule(hostConfig)).invokeFetch(api, { ...props, userAgent });
}
function clearApiCache(api) {
  void getInvokeFetchRuntimeModule().then((runtimeModule) => runtimeModule.clearApiCache(api));
}

export {
  invokeFetch,
  clearApiCache
};
