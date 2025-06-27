import { getQixRuntimeModule } from "./public-runtime-modules-n9GdugeL.js";

//#region src/public/qix.ts
function openAppSession(appSessionProps) {
	const appSessionPromise = getQixRuntimeModule(appSessionProps.hostConfig).then((impl) => impl.openAppSession(appSessionProps));
	const appSessionProxy = {
		async getDoc() {
			return (await appSessionPromise).getDoc();
		},
		onWebSocketEvent(listener) {
			const returnedFnPromise = appSessionPromise.then((appSession) => appSession.onWebSocketEvent(listener));
			return () => {
				returnedFnPromise.then((fn) => fn());
			};
		},
		async resume() {
			return (await appSessionPromise).resume();
		},
		async close(props) {
			return (await appSessionPromise).close(props);
		}
	};
	return appSessionProxy;
}
function withHostConfig(hostConfig) {
	return { openAppSession: (openAppSessionProps) => openAppSession(typeof openAppSessionProps === "string" ? {
		hostConfig,
		appId: openAppSessionProps
	} : {
		hostConfig,
		...openAppSessionProps
	}) };
}
const qix = {
	openAppSession,
	withHostConfig
};
var qix_default = qix;

//#endregion
export { openAppSession, qix_default, withHostConfig };