import { r as isBrowser } from "./utils-BnC4lrlq.js";
import { I as getPlatform, S as toValidWebsocketLocationUrl, h as isWindows, k as invokeFetch, p as handleAuthenticationError } from "./interceptors-CPiYMwHB.js";
import { t as getHumanReadableSocketClosedErrorMessage } from "./websocket-errors-CqHoMh0a.js";

//#region src/qix/app-session.ts
const isBrowserEnvironment = isBrowser();
function createAppSession(sharedSession) {
	const listeners = /* @__PURE__ */ new Set();
	let alreadyClosed = false;
	const sharedSessionClient = { onWebSocketEvent(event) {
		listeners.forEach((listener) => {
			listener(event);
		});
	} };
	const appSession = {
		getDoc: () => sharedSession.getDoc(),
		onWebSocketEvent(fn) {
			listeners.add(fn);
			return () => {
				listeners.delete(fn);
			};
		},
		resume: async () => {
			return sharedSession.resume();
		},
		close(props) {
			if (!alreadyClosed) {
				alreadyClosed = true;
				const defaultDelay = isBrowserEnvironment ? 5e3 : -1;
				return sharedSession.removeClient(sharedSessionClient, props?.websocketCloseDelay ?? defaultDelay);
			}
			return Promise.resolve();
		},
		_listeners: listeners
	};
	sharedSession.addClient(sharedSessionClient);
	return appSession;
}

//#endregion
//#region src/qix/external-app-session.ts
function createExternalSharedSession(externalApp, onWebSocketEvent$1, appSessionProps) {
	const clients = [];
	const sharedSession = {
		getDoc: () => externalApp,
		addClient(client) {
			if (clients.indexOf(client, 0) === -1) clients.push(client);
		},
		removeClient(client) {
			const index = clients.indexOf(client, 0);
			if (index > -1) clients.splice(index, 1);
			return Promise.resolve();
		},
		initialActionsUpdated: () => {},
		clientsCount: () => clients.length,
		resume: async () => {
			try {
				await externalApp.then((doc) => doc.session?.resume());
			} catch (err) {
				console.warn(err);
			}
		}
	};
	const triggerEventListeners = (event) => {
		onWebSocketEvent$1(event);
		for (const client of clients) client.onWebSocketEvent(event);
	};
	externalApp.then((app) => {
		app.session.on("opened", (event) => {
			triggerEventListeners({
				eventType: "opened",
				...appSessionProps,
				...event
			});
		});
		app.session.on("closed", (event) => {
			triggerEventListeners({
				eventType: "closed",
				...appSessionProps,
				...event
			});
		});
		app.session.on("suspended", (event) => {
			triggerEventListeners({
				eventType: "suspended",
				...appSessionProps,
				...event
			});
		});
		app.session.on("resuming", (event) => {
			triggerEventListeners({
				eventType: "resuming",
				...appSessionProps,
				...event
			});
		});
		app.session.on("resumed", (event) => {
			triggerEventListeners({
				eventType: "resumed",
				...appSessionProps,
				...event
			});
		});
	});
	return sharedSession;
}

//#endregion
//#region src/qix/internal/global-app-session.id.ts
function toGlobalAppSessionId({ appId, identity, hostConfig, withoutData, useReloadEngine, ttlSeconds, workloadType }) {
	let url = `${toValidWebsocketLocationUrl(hostConfig)}/${appId}`;
	if (identity) url += `/${identity}`;
	if (ttlSeconds !== void 0 && ttlSeconds >= 0) url += `/ttl/${ttlSeconds}`;
	if (useReloadEngine) url += "/useReloadEngine";
	if (withoutData) url += "/withoutData";
	if (workloadType) url += `?workloadType=${workloadType}`;
	return url;
}

//#endregion
//#region src/qix/global-events.ts
const globalEventListeners = /* @__PURE__ */ new Set();
const globalStateListeners = /* @__PURE__ */ new Set();
/**
* @experimental
* Adds an event-listener to the list of global event-listeners which
* will get called on every event from every session.
*/
function onWebSocketEvent(listener) {
	globalEventListeners.add(listener);
	return () => {
		globalEventListeners.delete(listener);
	};
}
/**
* @experimental
* Adds a state-listener to the list of global state-listeners which.
*/
function onCombinedWebSocketStateChange(listener) {
	globalStateListeners.add(listener);
	return () => {
		globalStateListeners.delete(listener);
	};
}
/**
* @private
*/
const globalState = {
	sessionStates: {},
	state: "closed"
};
function stateListener(key, event) {
	if (event.eventType === "closed") delete globalState.sessionStates[key];
	else globalState.sessionStates[key] = event.eventType;
	const states = Object.values(globalState.sessionStates);
	let anySuspended = false;
	let anyResuming = false;
	for (const state of states) if (state === "suspended") anySuspended = true;
	else if (state === "resuming") anyResuming = true;
	let newState;
	if (states.length === 0) newState = "closed";
	else if (anySuspended) newState = "suspended";
	else if (anyResuming) newState = "resuming";
	else newState = "open";
	if (globalState.state !== newState) {
		globalState.state = newState;
		for (const fn of globalStateListeners) fn({ state: newState });
	}
}
function triggerGlobalWebSocketEventListeners(event) {
	for (const fn of globalEventListeners) fn(event);
	stateListener(toGlobalAppSessionId(event), event);
}

//#endregion
//#region src/qix/session/shared-sessions.ts
/**
* Resolves with the OnAuthenticationInformation event coming from windows web socket on connect. If no such event has been received within 2 seconds undefined is returned
*/
function listenForWindowsAuthenticationInformation(session) {
	let resolveAuthSuggestedInWebsocket;
	const authSuggestedInWebsocket = new Promise((resolve, reject) => {
		resolveAuthSuggestedInWebsocket = resolve;
		setTimeout(() => {
			resolve(void 0);
		}, 2e3);
	});
	session.on("notification:OnAuthenticationInformation", ({ loginUri, mustAuthenticate }) => {
		if (mustAuthenticate && loginUri) {
			if (resolveAuthSuggestedInWebsocket) resolveAuthSuggestedInWebsocket({
				loginUri,
				mustAuthenticate
			});
		}
	});
	return authSuggestedInWebsocket;
}
/**
* Opens the websocket and handles a few windows authentication details
*/
async function createAndSetupEnigmaSession(props, canRetry, onWebSocketEvent$1) {
	const { createEnigmaSessionEntrypoint } = await import("./qix-chunk-entrypoint-CDX-JQoa.js");
	const session = await createEnigmaSessionEntrypoint(props);
	setupSessionListeners(session, props, onWebSocketEvent$1);
	let global;
	if (await isWindows(props.hostConfig)) {
		const loginInfoPromise = listenForWindowsAuthenticationInformation(session);
		global = await session.open();
		if ((await loginInfoPromise)?.mustAuthenticate) {
			const action = await handleAuthenticationError({
				headers: new Headers(),
				status: 101,
				canRetry,
				hostConfig: props.hostConfig
			});
			if (canRetry && action.retry) return createAndSetupEnigmaSession(props, false, onWebSocketEvent$1);
			if (action.preventDefault) return new Promise(() => {});
		}
	} else global = await session.open();
	return {
		session,
		global
	};
}
function setupSessionListeners(session, props, eventListener) {
	session.on("opened", (event) => {
		eventListener({
			eventType: "opened",
			...props,
			...event
		});
	});
	session.on("closed", (event) => {
		eventListener({
			eventType: "closed",
			...props,
			...event
		});
	});
	session.on("suspended", (event) => {
		eventListener({
			eventType: "suspended",
			...props,
			...event
		});
	});
	session.on("resuming", (event) => {
		eventListener({
			eventType: "resuming",
			...props,
			...event
		});
	});
	session.on("resumed", (event) => {
		eventListener({
			eventType: "resumed",
			...props,
			...event
		});
	});
}
function separatePromises(input) {
	return {
		sessionPromise: input.then((res) => res.session),
		globalPromise: input.then((res) => res.global)
	};
}
const WEBSOCKET_CUSTOM_CLOSE_CODES = {
	MANUAL_SUSPEND: 4e3,
	IDLE_TIMEOUT: 4001,
	LICENSE_RENEWAL: 4002,
	ENGINE_TERMINATING: 4003,
	APP_DELETED: 4004,
	SESSION_LIMIT_REACHED: 4005,
	AUTHENTICATION_FAILED: 4006,
	APP_MODE_CHANGED: 4007
};
function shouldAutoResume(code) {
	switch (code) {
		case WEBSOCKET_CUSTOM_CLOSE_CODES.MANUAL_SUSPEND:
		case WEBSOCKET_CUSTOM_CLOSE_CODES.IDLE_TIMEOUT:
		case WEBSOCKET_CUSTOM_CLOSE_CODES.LICENSE_RENEWAL:
		case WEBSOCKET_CUSTOM_CLOSE_CODES.SESSION_LIMIT_REACHED:
		case WEBSOCKET_CUSTOM_CLOSE_CODES.AUTHENTICATION_FAILED: return false;
		case WEBSOCKET_CUSTOM_CLOSE_CODES.ENGINE_TERMINATING:
		case WEBSOCKET_CUSTOM_CLOSE_CODES.APP_DELETED:
		case WEBSOCKET_CUSTOM_CLOSE_CODES.APP_MODE_CHANGED: return true;
	}
	return false;
}
function createSharedEnigmaSession(props, { getInitialAppActions, onClose, onWebSocketEvent: onGlobalWebsocketEvent }) {
	const clients = [];
	const alreadyExecutedInitialActions = [];
	/**
	* Runs any initial app actions that have not yet been run
	*/
	async function runPendingInitialActions(initialActionsForApp, doc) {
		for (const initialAction of initialActionsForApp) if (alreadyExecutedInitialActions.indexOf(initialAction) === -1) {
			alreadyExecutedInitialActions.push(initialAction);
			await initialAction(doc);
		}
	}
	let resumePromise;
	function onWebSocketEvent$1(event) {
		if (event.eventType === "suspended") {
			resumePromise = void 0;
			if (shouldAutoResume(event.code)) resume().catch((err) => {
				console.error("Failed to auto-resume:", err.message);
			});
		}
		for (const client of clients) client.onWebSocketEvent(event);
		onGlobalWebsocketEvent(event);
	}
	const { sessionPromise, globalPromise } = separatePromises(createAndSetupEnigmaSession(props, true, onWebSocketEvent$1));
	async function resume() {
		if (!resumePromise) resumePromise = (async () => {
			let session = await sessionPromise;
			await sessionResumeWithRetry(session, props.hostConfig).catch((err) => {
				const { cause } = err;
				if (cause && (cause === "offline" || cause === "unauthorized")) resumePromise = void 0;
				else session.suspend();
				return Promise.reject(err);
			});
		})();
		return resumePromise;
	}
	const docPromise = globalPromise.then(async (global) => {
		if (props.useSessionApp) return global.createSessionApp();
		else return global.openDoc(props.appId, "", "", "", !!props.withoutData).then((doc) => {
			if (!doc) return Promise.reject(/* @__PURE__ */ new Error("Doc could not be opened"));
			doc.global = global;
			return doc;
		});
	}).then(async (doc) => {
		const initialActionsForApp = getInitialAppActions();
		if (initialActionsForApp && doc) await runPendingInitialActions(initialActionsForApp, doc);
		return doc;
	}).catch((err) => {
		closeEnigmaSession();
		const errorWithReadableMessage = new Error(getHumanReadableSocketClosedErrorMessage(err.original || err, props));
		Object.entries(err).forEach(([key, value]) => {
			errorWithReadableMessage[key] = value;
		});
		return Promise.reject(errorWithReadableMessage);
	});
	function closeEnigmaSession() {
		onClose();
		return sessionPromise.then((session) => session.close()).catch(() => {});
	}
	return {
		getDoc: () => docPromise,
		addClient(client) {
			if (clients.indexOf(client, 0) === -1) clients.push(client);
		},
		removeClient(client, closeDelay) {
			const actuallyRemove = () => {
				const index = clients.indexOf(client, 0);
				if (index > -1) clients.splice(index, 1);
				if (clients.length === 0) closeEnigmaSession();
			};
			if (closeDelay > 0) return new Promise((resolve) => {
				setTimeout(async () => {
					actuallyRemove();
					resolve();
				}, closeDelay);
			});
			actuallyRemove();
			return Promise.resolve();
		},
		resume,
		initialActionsUpdated() {
			getInitialAppActions();
		},
		clientsCount: () => clients.length
	};
}
let onlyOnReattach = false;
async function checkConnectivity(hostConfig) {
	let status = "online";
	const method = "get";
	const options = {
		hostConfig,
		timeoutMs: 4e3,
		noCache: true
	};
	try {
		if (!(await invokeFetch("", {
			method,
			pathTemplate: "/api/v1/user-locale",
			options
		})).headers.get("content-type")?.includes("application/json")) status = "unauthorized";
	} catch (err) {
		switch (err.status) {
			case 0:
				status = "offline";
				break;
			case 401:
				status = "unauthorized";
				break;
		}
	}
	return status;
}
/**
* Takes the enigma-session and attempts to resume it.
* @private
*/
async function sessionResumeWithRetry(session, hostConfig) {
	const status = await checkConnectivity(hostConfig);
	if (status !== "online") {
		const error$1 = new Error(`failed to resume: ${status}`, { cause: status });
		return Promise.reject(error$1);
	}
	session.emit("resuming", {});
	const maxRetries = 10;
	const retryTimeoutMs = 2e3;
	let resumed = false;
	let i = 0;
	let error;
	while (!resumed && i <= maxRetries) {
		try {
			await session.resume(onlyOnReattach);
			resumed = true;
		} catch (err) {
			error = err;
			let resolve = () => {};
			const promise = new Promise((res) => {
				resolve = res;
			});
			setTimeout(resolve, retryTimeoutMs);
			await promise;
		}
		i++;
	}
	if (!resumed) return Promise.reject(error);
	return Promise.resolve();
}

//#endregion
//#region src/qix/session/shared-sessions-phoenix.ts
function createSharedPhoenixSession(props, { onClose, onWebSocketEvent: onWebSocketEventGlobal, getInitialAppActions }) {
	try {
		const clients = [];
		const onWebSocketEvent$1 = (event) => {
			onWebSocketEventGlobal(event);
			for (const client of clients) client.onWebSocketEvent(event);
		};
		const phoenixConnectionPromise = import("./qix-chunk-entrypoint-CDX-JQoa.js").then((module) => {
			return module.createPhoenixConnectionEntrypoint(props, {
				onWebSocketEvent: onWebSocketEvent$1,
				getInitialAppActions
			});
		});
		const docPromise = phoenixConnectionPromise.then((phoenixConnection) => phoenixConnection.doc);
		return {
			getDoc: () => docPromise,
			addClient(client) {
				if (clients.indexOf(client, 0) === -1) clients.push(client);
			},
			removeClient(client, closeDelay) {
				if (clients.length === 1) phoenixConnectionPromise.then((phoenixConnection) => {
					phoenixConnection.stopActivityMonitoring();
				});
				const actuallyReomve = () => {
					const index = clients.indexOf(client, 0);
					if (index > -1) clients.splice(index, 1);
					if (clients.length === 0) {
						onClose();
						phoenixConnectionPromise.then((phoenixConnection) => {
							phoenixConnection.close();
						});
					}
				};
				if (closeDelay > 0) return new Promise((resolve) => {
					setTimeout(() => {
						actuallyReomve();
						resolve();
					}, closeDelay);
				});
				actuallyReomve();
				return Promise.resolve();
			},
			resume: async () => {
				phoenixConnectionPromise.then((session) => session.resume());
			},
			initialActionsUpdated() {
				phoenixConnectionPromise.then((session) => session.initialAppActionsUpdated());
			},
			clientsCount: () => clients.length
		};
	} catch (err) {
		console.error(err);
		throw err;
	}
}

//#endregion
//#region src/qix/shared-sessions-manager.ts
const initialActions = {};
const sharedSessions = {};
const externalApps = {};
/**
* Creates or returns a shared session for the given props combination.
* If a session already exists for the given props combination, it will be reused.
*/
function getOrCreateSharedSession(props) {
	const externalAppSession = externalApps[toGlobalAppSessionId(props)];
	if (externalAppSession) return externalAppSession;
	const key = toGlobalAppSessionId(props);
	if (sharedSessions[key]) return sharedSessions[key];
	const extraProps = {
		onClose: () => {
			delete sharedSessions[key];
		},
		onWebSocketEvent: triggerGlobalWebSocketEventListeners,
		getInitialAppActions: () => {
			return initialActions[key] || [];
		}
	};
	let session;
	if (props.autoResume) session = createSharedPhoenixSession(props, extraProps);
	else session = createSharedEnigmaSession(props, extraProps);
	sharedSessions[key] = session;
	return sharedSessions[key];
}
async function resumeSuspendedSessions() {
	await Promise.all(Object.values(sharedSessions).map((sharedSession) => {
		return sharedSession.resume();
	}));
}
async function resumeOnlyOnReattach() {
	await Promise.all(Object.values(sharedSessions).map((sharedSession) => {
		return sharedSession.resume();
	}));
}
/**
* Adds an initial action to the list of actions that should be run when the app session is opened.
* This is used to run actions that are needed before the app is used in any way, like setting up initial selections.
*/
function addInitialAppAction(openAppSessionProps, action) {
	const key = toGlobalAppSessionId(openAppSessionProps);
	let initialActionArray = initialActions[key];
	if (!initialActionArray) {
		initialActionArray = [];
		initialActions[key] = initialActionArray;
	}
	initialActionArray.push(action);
	const existingSharedSession = sharedSessions[key];
	if (existingSharedSession) existingSharedSession.initialActionsUpdated();
	return () => {
		const index = initialActionArray.indexOf(action);
		if (index > -1) initialActionArray.splice(index, 1);
	};
}
/**
* Registers an externally opened enigma doc object so that it can be used by `openAppSession` without opening a secondary websocket
* @param appId The resource of an app that is already opened using other means
* @param enigmaDocObject The actual enigma doc object
*/
function registerExternalAppSession(appId, enigmaDocObject) {
	const appSessionId = toGlobalAppSessionId({ appId });
	function onWebSocketEvent$1(event) {
		triggerGlobalWebSocketEventListeners(event);
	}
	externalApps[appSessionId] = createExternalSharedSession(Promise.resolve(enigmaDocObject), onWebSocketEvent$1, { appId });
}

//#endregion
//#region src/qix/qix-functions.ts
/** Opens a session application in the qlik engine. Encapsulates api differences for creating a session app in Qlik Sense Cloud
* and Qsefw. The doc returned on the AppSession is a document for a session application. Callers must call close on the
* session when usage of the session app is complete. The session app is not tied to any particular application
*/
async function createSessionApp(ttlSeconds, workloadType) {
	let sharedSession;
	if ((await getPlatform()).isCloud) sharedSession = await getOrCreateSharedSession({
		appId: `SessionApp_${Date.now()}`,
		ttlSeconds,
		workloadType
	});
	else sharedSession = await getOrCreateSharedSession({
		appId: `%3Ftransient%3D/identity/${Date.now()}`,
		useSessionApp: true,
		ttlSeconds,
		workloadType
	});
	return createAppSession(sharedSession);
}
/**
* Open a qix session in engine on the current domain for the supplied appId. If the same app is opened multiple times
* only a single enigma websocket session is opened and shared.
* When all open sessions are closed again the shared enigma websocket session is also closed.
* @param appId The resource id of the app to open
* @param host Configuration of what host to connect to
*/
function openAppSession(appIdOrProps) {
	return createAppSession(getOrCreateSharedSession(typeof appIdOrProps === "string" ? { appId: appIdOrProps } : appIdOrProps));
}
/**
* Factory for getting a react hook that returns the `Doc` of an app based on the supplied app id
* @param react A react like object containing the native react hooks needed by the hook implementation
*/
function useAppHook(react) {
	return (appIdOrProps) => {
		const [app, setApp] = react.useState(void 0);
		react.useEffect(() => {
			const appSession = openAppSession(appIdOrProps);
			appSession.getDoc().then((x) => {
				setApp(x);
			});
			return () => {
				if (appSession) appSession.close();
			};
		}, [appIdOrProps]);
		return app;
	};
}

//#endregion
//#region src/qix/qix.ts
/**
* Provides functionality to connect to a QIX Engine
*/
const qix = {
	addInitialAppAction,
	createSessionApp,
	openAppSession,
	registerExternalAppSession,
	useAppHook,
	onWebSocketEvent,
	onCombinedWebSocketStateChange,
	resumeSuspendedSessions,
	resumeOnlyOnReattach,
	withHostConfig: (hostConfig) => ({
		addInitialAppAction: (openAppSessionProps, action) => addInitialAppAction(typeof openAppSessionProps === "string" ? {
			hostConfig,
			appId: openAppSessionProps
		} : {
			hostConfig,
			...openAppSessionProps
		}, action),
		createSessionApp,
		openAppSession: (openAppSessionProps) => openAppSession(typeof openAppSessionProps === "string" ? {
			hostConfig,
			appId: openAppSessionProps
		} : {
			hostConfig,
			...openAppSessionProps
		}),
		registerExternalAppSession,
		useAppHook,
		onWebSocketEvent,
		onCombinedWebSocketStateChange,
		resumeSuspendedSessions,
		resumeOnlyOnReattach
	})
};
var qix_default = qix;

//#endregion
export { addInitialAppAction, createSessionApp, qix_default as default, onCombinedWebSocketStateChange, onWebSocketEvent, openAppSession, registerExternalAppSession, resumeOnlyOnReattach, resumeSuspendedSessions, useAppHook };