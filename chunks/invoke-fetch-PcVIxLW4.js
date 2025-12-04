import { r as isBrowser } from "./utils-BnC4lrlq.js";
import { n as getInvokeFetchRuntimeModule } from "./public-runtime-modules-Dwjzb3l8.js";

//#region src/public/invoke-fetch.ts
const defaultUserAgent = "qlik-api/latest";
async function invokeFetch(api, props) {
	const hostConfig = props.options?.hostConfig;
	let userAgent;
	if (props?.userAgent) userAgent = props.userAgent;
	else if (isBrowser()) userAgent = `${window.navigator.userAgent} ${defaultUserAgent}`;
	else userAgent = defaultUserAgent;
	return (await getInvokeFetchRuntimeModule(hostConfig)).invokeFetch(api, {
		...props,
		userAgent
	});
}
function clearApiCache(api) {
	getInvokeFetchRuntimeModule().then((runtimeModule) => runtimeModule.clearApiCache(api));
}

//#endregion
export { invokeFetch as n, clearApiCache as t };