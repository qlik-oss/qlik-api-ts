import { t as __exportAll } from "./rolldown-runtime-w6R9maHv.js";
import { r as isBrowser } from "./utils-m8Ydgbd8.js";
import { C as isWindows, H as getPlatform, P as toValidWebsocketLocationUrl, n as invokeFetch, x as handleAuthenticationError } from "./invoke-fetch-functions-CnlEGMVN.js";

//#region src/qix/app-session.ts
const isBrowserEnvironment = isBrowser();
/**
* Trims a progress event's persistent log to only the messages not yet delivered to a listener, so
* the full accumulated history is not re-sent on every event. `started` resets the cursor for the
* new request; other fields (`errors`, `transient`) are left as the complete current values.
* Returns the (possibly trimmed) event and the new cursor for that listener.
*/
function toListenerEvent(event, persistentDelivered) {
	if (event.status === "started") return {
		event,
		persistentDelivered: 0
	};
	const from = event.persistent.length < persistentDelivered ? 0 : persistentDelivered;
	return {
		event: {
			...event,
			persistent: event.persistent.slice(from)
		},
		persistentDelivered: event.persistent.length
	};
}
function createAppSession(sharedSession) {
	const listeners = /* @__PURE__ */ new Set();
	const progressListeners = {
		open: /* @__PURE__ */ new Map(),
		reload: /* @__PURE__ */ new Map(),
		save: /* @__PURE__ */ new Map()
	};
	let alreadyClosed = false;
	const sharedSessionClient = {
		onWebSocketEvent(event) {
			listeners.forEach((listener) => {
				listener(event);
			});
		},
		hasProgressListener(progressType) {
			return progressListeners[progressType].size > 0;
		},
		onProgress(event) {
			const listenersForType = progressListeners[event.type];
			listenersForType.forEach((persistentDelivered, fn) => {
				const result = toListenerEvent(event, persistentDelivered);
				listenersForType.set(fn, result.persistentDelivered);
				fn(result.event);
			});
		}
	};
	const addProgressListener = (progressType, fn) => {
		if (sharedSession.supportsProgressReporting === false) throw new Error("Progress reporting is not supported for externally registered app sessions.");
		progressListeners[progressType].set(fn, 0);
		return () => {
			progressListeners[progressType].delete(fn);
		};
	};
	const appSession = {
		getDoc: () => sharedSession.getDoc(),
		onWebSocketEvent(fn) {
			listeners.add(fn);
			return () => {
				listeners.delete(fn);
			};
		},
		onOpenProgress(fn) {
			return addProgressListener("open", fn);
		},
		onReloadProgress(fn) {
			return addProgressListener("reload", fn);
		},
		onSaveProgress(fn) {
			return addProgressListener("save", fn);
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
function createExternalSharedSession(externalApp, onWebSocketEvent, appSessionProps) {
	const clients = [];
	const sharedSession = {
		supportsProgressReporting: false,
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
		onWebSocketEvent(event);
		for (const client of clients) client.onWebSocketEvent(event);
	};
	externalApp.then((app) => {
		app.session.on("opened", (event) => {
			const wsEvent = {
				eventType: "opened",
				...appSessionProps,
				...event
			};
			triggerEventListeners(wsEvent);
		});
		app.session.on("closed", (event) => {
			const wsEvent = {
				eventType: "closed",
				...appSessionProps,
				...event
			};
			triggerEventListeners(wsEvent);
		});
		app.session.on("suspended", (event) => {
			const wsEvent = {
				eventType: "suspended",
				...appSessionProps,
				...event
			};
			triggerEventListeners(wsEvent);
		});
		app.session.on("resuming", (event) => {
			const wsEvent = {
				eventType: "resuming",
				...appSessionProps,
				...event
			};
			triggerEventListeners(wsEvent);
		});
		app.session.on("resumed", (event) => {
			const wsEvent = {
				eventType: "resumed",
				...appSessionProps,
				...event
			};
			triggerEventListeners(wsEvent);
		});
	});
	return sharedSession;
}

//#endregion
//#region src/qix/internal/global-app-session.id.ts
function toGlobalAppSessionId({ appId, identity, hostConfig, withoutData, useReloadEngine, ttlSeconds, workloadType }) {
	let url = `${toValidWebsocketLocationUrl(hostConfig)}/${appId}`;
	if (identity) url += `/${identity}`;
	if (hostConfig?.authType === "oauth2") {
		if (hostConfig.userId) url += `/userId/${hostConfig.userId}`;
		if (hostConfig.subject) url += `/subject/${hostConfig.subject}`;
	}
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
//#region src/qix/session/websocket-errors.ts
const closeCodeEngineTerminating = 4003;
const closeCodeEngineProxyGeneric = 4200;
const closeCodeClientTimeout = 4201;
const closeCodeBadRequest = 4202;
const closeCodePermissions = 4203;
const closeCodeNotFound = 4204;
const closeCodeTooManyRequests = 4205;
const closeCodeNetwork = 4206;
const closeCodeDependencyGeneric = 4210;
const closeCodeDependencyUnavailable = 4211;
const closeCodeEngineGeneric = 4220;
const closeCodeEntitlement = 4230;
const closeCodeNoEnginesAvailable = 4240;
const CloseCodeSessionReservationMissing = 4222;
const closeCodeMessages = {
	1e3: "Connection closed normally.",
	1001: "Going away.",
	1002: "Protocol error.",
	1003: "Unsupported data.",
	1005: "No status received.",
	1006: "Abnormal closure.",
	1007: "Invalid frame payload data.",
	1008: "Policy violation.",
	1009: "Message too big.",
	1010: "Mandatory extension missing.",
	1011: "Server internal error.",
	1012: "Service restart.",
	1013: "Try again later.",
	1014: "Bad gateway.",
	1015: "TLS handshake failure.",
	[closeCodeEngineTerminating]: "The engine is in terminating state",
	[closeCodeEngineProxyGeneric]: "A problem occurred in engine-proxy",
	[closeCodeClientTimeout]: "The client has closed the connection",
	[closeCodeBadRequest]: "The provided request is invalid and/or malformed",
	[closeCodePermissions]: "No permission to open the app",
	[closeCodeNotFound]: "App not found",
	[closeCodeTooManyRequests]: "Too many requests have been sent in a given amount of time",
	[closeCodeNetwork]: "Networking issues",
	[closeCodeDependencyGeneric]: "A problem occurred in a dependency of engine-proxy",
	[closeCodeDependencyUnavailable]: "A dependency is unavailable and not serving any requests",
	[closeCodeEngineGeneric]: "A problem occurred in an engine",
	[closeCodeEntitlement]: "You are not entitled to perform that operation",
	[closeCodeNoEnginesAvailable]: "There are currently no engines available",
	[CloseCodeSessionReservationMissing]: "The reserved session is missing"
};
const uknownCloseErrorMessage = "websocket closed for unknown reason";
/** Returns a human readable error message for the supplied close code */
function getHumanReadableSocketClosedErrorMessage(err, { appId, hostConfig }) {
	const closeCode = err?.original?.code || err?.code;
	const reason = err?.original?.reason || err?.reason;
	const closeMessage = closeCode && closeCodeMessages[closeCode] || reason || err.message || uknownCloseErrorMessage;
	if (hostConfig?.host) return `Failed to open app ${appId} on ${hostConfig?.host}: ${closeMessage}`;
	else return `Failed to open app ${appId}: ${closeMessage}`;
}

//#endregion
//#region src/qix/session/progress-monitor.ts
/**
* @private
* Exported for testing.
*/
const pollingInterval = 300;
function methodToProgressType(method) {
	switch (method) {
		case "OpenDoc": return "open";
		case "DoReload":
		case "DoReloadEx": return "reload";
		case "DoSave": return "save";
		default: return;
	}
}
function toSeverity(code) {
	if (code === "EDC_WARNING") return "warning";
	if (code === "EDC_CIRCULAR_REFERENCE") return "circular";
	return "error";
}
function mapErrors(errorData) {
	return (errorData ?? []).map((error) => ({
		message: error.qErrorString ?? "",
		severity: toSeverity(error.qErrorDataCode),
		...error.qLine ? { line: error.qLine } : {}
	}));
}
function sameError(a, b) {
	return a.message === b.message && a.severity === b.severity && a.line === b.line;
}
function toProgressMessage(message) {
	return {
		code: message?.qMessageCode ?? 0,
		parameters: message?.qMessageParameters ?? [""]
	};
}
/**
* Checks if the ProgressData matches the response you get from getProgress on an unknown request ID.
* The "default" (or "bogus") data (at the time of writing) is:
* ```json
* {
"qStarted": true,
"qFinished": true,
"qCompleted": 0,
"qTotal": 0,
"qKB": 0,
"qMillisecs": 0,
"qErrorData": [],
"qPersistentProgressMessages": [],
"qTransientProgressMessage": {
"qMessageCode": 0,
"qMessageParameters": [
""
]
}
} 
* ```
*/
function isBogusProgressData(data) {
	return data.qCompleted === 0 && data.qTotal === 0 && data.qFinished === true && (data.qPersistentProgressMessages?.length ?? 0) === 0 && (data.qErrorData?.length ?? 0) === 0 && data?.qTransientProgressMessage?.qMessageParameters?.join("") === "";
}
/**
* RequestID - check if we should poll with getProgress = active
*
* If active, poll one last time on stop, i.e. do one getProgress call.
* If inactive, don't poll.
*
* If request is not done - poll again.
*
*/
function createProgressMonitor(clients) {
	let getProgressFn;
	const monitoredRequests = {};
	const poll = async (requestId, state) => {
		if (!getProgressFn || state.finished) return;
		const activeClients = clients.filter((client) => client.hasProgressListener(state.progressType));
		if (activeClients.length === 0) return;
		const data = await getProgressFn(requestId);
		if (monitoredRequests[requestId] !== state || state.finished) return;
		if (isBogusProgressData(data)) return;
		for (const message of data.qPersistentProgressMessages ?? []) state.persistent.push(toProgressMessage(message));
		for (const error of mapErrors(data.qErrorData)) if (!state.errors.some((existing) => sameError(existing, error))) state.errors.push(error);
		const events = [];
		if (!state.started) {
			state.started = true;
			events.push({
				type: state.progressType,
				status: "started"
			});
		}
		if (data.qFinished) {
			state.finished = true;
			if (state.errors.some((error) => error.severity === "error")) events.push({
				type: state.progressType,
				status: "error",
				persistent: [...state.persistent],
				errors: [...state.errors]
			});
			else events.push({
				type: state.progressType,
				status: "finished",
				durationMs: data.qMillisecs ?? 0,
				persistent: [...state.persistent],
				errors: [...state.errors]
			});
		} else events.push({
			type: state.progressType,
			status: "progress",
			persistent: [...state.persistent],
			transient: toProgressMessage(data.qTransientProgressMessage),
			errors: [...state.errors],
			awaitingUserInteraction: data.qUserInteractionWanted ?? false
		});
		for (const client of activeClients) for (const event of events) client.onProgress(event);
	};
	const pollUntilDone = async (requestId, state) => {
		try {
			await poll(requestId, state);
		} catch {
			if (monitoredRequests[requestId] === state) delete monitoredRequests[requestId];
			return;
		}
		if (monitoredRequests[requestId] !== state) return;
		if (state.finished || state.done) {
			delete monitoredRequests[requestId];
			return;
		}
		state.nextPoll = setTimeout(() => {
			state.nextPoll = void 0;
			pollUntilDone(requestId, state);
		}, 300);
	};
	return {
		startMonitoringProgress(method, requestId) {
			const progressType = methodToProgressType(method);
			if (!progressType || requestId in monitoredRequests) return;
			const state = {
				progressType,
				done: false,
				finished: false,
				started: false,
				persistent: [],
				errors: []
			};
			monitoredRequests[requestId] = state;
			pollUntilDone(requestId, state);
		},
		stopMonitoringProgress(requestId, reason = "done") {
			const requestIds = requestId === void 0 ? Object.keys(monitoredRequests).map(Number) : [requestId];
			for (const id of requestIds) {
				const state = monitoredRequests[id];
				if (!state) continue;
				if (reason === "done") {
					state.done = true;
					if (state.nextPoll) {
						clearTimeout(state.nextPoll);
						state.nextPoll = void 0;
						pollUntilDone(id, state);
					}
					continue;
				}
				if (state.nextPoll) {
					clearTimeout(state.nextPoll);
					state.nextPoll = void 0;
				}
				state.finished = true;
				delete monitoredRequests[id];
				if (!state.started) continue;
				const terminalEvent = reason === "error" ? {
					type: state.progressType,
					status: "error",
					persistent: [...state.persistent],
					errors: [...state.errors]
				} : {
					type: state.progressType,
					status: "aborted",
					persistent: [...state.persistent],
					errors: [...state.errors]
				};
				const activeClients = clients.filter((client) => client.hasProgressListener(state.progressType));
				for (const client of activeClients) client.onProgress(terminalEvent);
			}
		},
		setGetProgressFn(fn) {
			getProgressFn = fn;
		}
	};
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
async function createAndSetupEnigmaSession(props, canRetry, onWebSocketEvent, progressMonitor) {
	const { createEnigmaSessionEntrypoint } = await import("./qix-chunk-entrypoint-B9OqDtBk.js");
	const isWin = await isWindows(props.hostConfig);
	const session = await createEnigmaSessionEntrypoint(props, progressMonitor);
	setupSessionListeners(session, props, onWebSocketEvent, isWin);
	let global;
	if (isWin) {
		const loginInfoPromise = listenForWindowsAuthenticationInformation(session);
		global = await session.open();
		if ((await loginInfoPromise)?.mustAuthenticate) {
			const action = await handleAuthenticationError({
				headers: new Headers(),
				status: 101,
				canRetry,
				hostConfig: props.hostConfig
			});
			if (canRetry && action.retry) return createAndSetupEnigmaSession(props, false, onWebSocketEvent, progressMonitor);
			if (action.preventDefault) return new Promise(() => {});
		}
	} else global = await session.open();
	return {
		session,
		global
	};
}
function setupSessionListeners(session, props, eventListener, isWin) {
	let syntheticSuspendEventOnWindowsAlreadySent = false;
	if (isWin) session.on("notification:OnSessionTimedOut", () => {
		syntheticSuspendEventOnWindowsAlreadySent = true;
		eventListener({
			eventType: "suspended",
			code: 4001,
			reason: "Session timed out",
			initiator: "network",
			...props
		});
	});
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
		if (!syntheticSuspendEventOnWindowsAlreadySent) eventListener({
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
	/** The client itself "suspended" the session, don't auto-resume. */
	MANUAL_SUSPEND: 4e3,
	/** Engine closed the session due to idleness, don't auto-resume */
	IDLE_TIMEOUT: 4001,
	/** Some license issue, doesn't sound like auto-resume would do much good. */
	LICENSE_RENEWAL: 4002,
	/** The engine hosting the session is shutting down,
	*  auto-resume to get another session from another engine. */
	ENGINE_TERMINATING: 4003,
	/** App deleted from an engine, auto-resume to open it on another engine. */
	APP_DELETED: 4004,
	/** Session closed due to session-limit, seems unwise to auto-resume here. */
	SESSION_LIMIT_REACHED: 4005,
	/** Authentication issue, auto-resume doesn't seem like a good idea. */
	AUTHENTICATION_FAILED: 4006,
	/** App-mode changed to Direct Query mode, let's auto-resume */
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
	const progressMonitor = createProgressMonitor(clients);
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
	function onWebSocketEvent(event) {
		if (event.eventType === "suspended" || event.eventType === "closed") progressMonitor.stopMonitoringProgress(void 0, "aborted");
		if (event.eventType === "suspended") {
			resumePromise = void 0;
			if (shouldAutoResume(event.code)) resume().catch((err) => {
				console.error("Failed to auto-resume:", err.message);
			});
		}
		for (const client of clients) client.onWebSocketEvent(event);
		onGlobalWebsocketEvent(event);
	}
	const { sessionPromise, globalPromise } = separatePromises(createAndSetupEnigmaSession(props, true, onWebSocketEvent, progressMonitor));
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
		progressMonitor.setGetProgressFn(global.getProgress.bind(global));
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
			case 401: status = "unauthorized";
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
		const error = new Error(`failed to resume: ${status}`, { cause: status });
		return Promise.reject(error);
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
		const progressMonitor = createProgressMonitor(clients);
		const onWebSocketEvent = (event) => {
			onWebSocketEventGlobal(event);
			for (const client of clients) client.onWebSocketEvent(event);
		};
		const phoenixConnectionPromise = import("./qix-chunk-entrypoint-B9OqDtBk.js").then((module) => {
			return module.createPhoenixConnectionEntrypoint(props, {
				onWebSocketEvent,
				getInitialAppActions,
				progressMonitor
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
	const appSessionId = toGlobalAppSessionId(props);
	const externalAppSession = externalApps[appSessionId];
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
* @param props Additional properties for the open app session, if needed, to differentiate it from other sessions of the same app
*/
function registerExternalAppSession(appId, enigmaDocObject, props) {
	const appSessionId = toGlobalAppSessionId({
		...props,
		appId
	});
	function onWebSocketEvent(event) {
		triggerGlobalWebSocketEventListeners(event);
	}
	externalApps[appSessionId] = createExternalSharedSession(Promise.resolve(enigmaDocObject), onWebSocketEvent, { appId });
}

//#endregion
//#region src/qix/qix-functions.ts
/** Opens a session application in the qlik engine. Encapsulates api differences for creating a session app in Qlik Sense Cloud
* and Qsefw. The doc returned on the AppSession is a document for a session application. Callers must call close on the
* session when usage of the session app is complete. The session app is not tied to any particular application
*/
async function createSessionApp(ttlSeconds, workloadType) {
	let sharedSession;
	if ((await getPlatform()).isCloud) sharedSession = getOrCreateSharedSession({
		appId: `SessionApp_${Date.now()}`,
		ttlSeconds,
		workloadType
	});
	else sharedSession = getOrCreateSharedSession({
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
	const sharedSession = getOrCreateSharedSession(typeof appIdOrProps === "string" ? { appId: appIdOrProps } : appIdOrProps);
	return createAppSession(sharedSession);
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
var qix_exports = /* @__PURE__ */ __exportAll({
	addInitialAppAction: () => addInitialAppAction,
	createSessionApp: () => createSessionApp,
	default: () => qix,
	onCombinedWebSocketStateChange: () => onCombinedWebSocketStateChange,
	onWebSocketEvent: () => onWebSocketEvent,
	openAppSession: () => openAppSession,
	registerExternalAppSession: () => registerExternalAppSession,
	resumeOnlyOnReattach: () => resumeOnlyOnReattach,
	resumeSuspendedSessions: () => resumeSuspendedSessions,
	useAppHook: () => useAppHook
});
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

//#endregion
export { addInitialAppAction, createSessionApp, qix as default, getHumanReadableSocketClosedErrorMessage as n, onCombinedWebSocketStateChange, onWebSocketEvent, openAppSession, registerExternalAppSession, resumeOnlyOnReattach, resumeSuspendedSessions, qix_exports as t, useAppHook };