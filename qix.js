import { r as getQixRuntimeModule } from "./chunks/public-runtime-modules-DDFe6TLg.js";

//#region src/public/qix.ts
function openAppSession(appSessionProps) {
	const appSessionPromise = getQixRuntimeModule(appSessionProps.hostConfig).then((impl) => impl.openAppSession(appSessionProps));
	return {
		/**
		* Returns a promise of the Qix Doc object with a set of client-side Api extensions.
		* Note that while the AppSession object is returned immediately this promise might take a while
		* to resolve for bigger apps.
		*/
		async getDoc() {
			return (await appSessionPromise).getDoc();
		},
		/**
		* @experimental
		* Add an event-listener for this app-session.
		*/
		onWebSocketEvent(listener) {
			const returnedFnPromise = appSessionPromise.then((appSession) => appSession.onWebSocketEvent(listener));
			return () => {
				returnedFnPromise.then((fn) => fn());
			};
		},
		/**
		* @experimental
		* Add a progress-listener for an app open process. This is the process behind the `getDoc` promise.
		*/
		onOpenProgress(listener) {
			const returnedFnPromise = appSessionPromise.then((appSession) => appSession.onOpenProgress(listener));
			return () => {
				returnedFnPromise.then((fn) => fn());
			};
		},
		/**
		* @experimental
		* Add a progress-listener for an app reload process.
		* A reload is triggered by calling `Doc.DoReload` or `Doc.DoReloadEx`.
		*/
		onReloadProgress(listener) {
			const returnedFnPromise = appSessionPromise.then((appSession) => appSession.onReloadProgress(listener));
			return () => {
				returnedFnPromise.then((fn) => fn());
			};
		},
		/**
		* @experimental
		* Add a progress-listener for an app save process (triggered by `DoSave` on a `Doc`).
		*/
		onSaveProgress(listener) {
			const returnedFnPromise = appSessionPromise.then((appSession) => appSession.onSaveProgress(listener));
			return () => {
				returnedFnPromise.then((fn) => fn());
			};
		},
		/**
		* @experimental
		* Resume a suspended session. This will resume exactly
		* once if the session is currently suspended, otherwise
		* nothing will be done.
		*/
		async resume() {
			return (await appSessionPromise).resume();
		},
		/**
		* When the app session is no longer in use it must be closed using this function.
		* If the same underlying enigma websocket is used somewhere else in the browser
		* this is basically a no op, but if this is the last/only usage
		* of the underlying enigma websocket that websocket will be closed.
		*/
		async close(props) {
			return (await appSessionPromise).close(props);
		}
	};
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

//#endregion
export { qix as default, openAppSession, withHostConfig };