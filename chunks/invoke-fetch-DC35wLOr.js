import { r as isBrowser } from "./utils-BJedNJEh.js";
import { n as getInvokeFetchRuntimeModule } from "./public-runtime-modules-DoyZUsje.js";

// src/public/api-version.ts
/**
* The default `qlik-api-version` header value sent with every request made through
* the public `@qlik/api` package. Pinned to the latest stable quarterly release at
* the time the specs were generated. Regenerated automatically by `pnpm generate-specs`.
*/
const API_VERSION = "2026-08";

// src/public/invoke-fetch.ts
const defaultUserAgent = "qlik-api/latest";
async function invokeFetch(api, props) {
	const hostConfig = props.options?.hostConfig;
	let userAgent;
	if (props?.userAgent) userAgent = props.userAgent;
	else if (isBrowser()) userAgent = `${window.navigator.userAgent} ${defaultUserAgent}`;
	else userAgent = defaultUserAgent;
	return (await getInvokeFetchRuntimeModule(hostConfig)).invokeFetch(api, {
		...props,
		userAgent,
		apiVersion: API_VERSION,
		isPublic: true
	});
}
function clearApiCache(api) {
	getInvokeFetchRuntimeModule().then((runtimeModule) => runtimeModule.clearApiCache(api));
}

export { invokeFetch as n, clearApiCache as t };