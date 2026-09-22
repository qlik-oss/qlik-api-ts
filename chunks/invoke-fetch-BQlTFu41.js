import { r as isBrowser } from "./utils-m8Ydgbd8.js";
import { r as isValidApiVersion } from "./invoke-fetch-functions-CnlEGMVN.js";
import { n as getInvokeFetchRuntimeModule } from "./public-runtime-modules-Ba2YHVh1.js";

//#region src/public/api-version.ts
/**
* The default `qlik-api-version` header value sent with every request made through
* the public `@qlik/api` package. Pinned to the latest stable quarterly release at
* the time the specs were generated. Regenerated automatically by `pnpm generate-specs`.
*/
const API_VERSION = "2026-08";

//#endregion
//#region src/public/invoke-fetch.ts
const defaultUserAgent = "qlik-api/latest";
async function invokeFetch(api, props) {
	const hostConfig = props.options?.hostConfig;
	let userAgent;
	if (props?.options?.userAgent) userAgent = props.options.userAgent;
	else if (isBrowser()) userAgent = `${window.navigator.userAgent} ${defaultUserAgent}`;
	else userAgent = defaultUserAgent;
	let apiVersion;
	if (props?.apiVersion) {
		if (!isValidApiVersion(props.apiVersion)) {
			console.warn(`[qlik-api] Invalid apiVersion "${props.apiVersion}". Must be "latest" or a quarterly release in YYYY-MM format (MM ∈ {02, 05, 08, 11}). Falling back to "${API_VERSION}".`);
			apiVersion = API_VERSION;
		} else apiVersion = props.apiVersion;
	} else apiVersion = API_VERSION;
	const options = {
		...props?.options,
		userAgent
	};
	return (await getInvokeFetchRuntimeModule(hostConfig)).invokeFetch(api, {
		...props,
		options,
		apiVersion,
		isPublic: true
	});
}
function clearApiCache(api) {
	getInvokeFetchRuntimeModule().then((runtimeModule) => runtimeModule.clearApiCache(api));
}

//#endregion
export { invokeFetch as n, clearApiCache as t };