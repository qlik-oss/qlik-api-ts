import {
  getPlatform,
  handleAuthenticationError,
  invokeFetch,
  isWindows,
  toValidWebsocketLocationUrl
} from "./I5UOE4ZZ.js";
import "./7BDAXGID.js";
import {
  isBrowser
} from "./2ZQ3ZX7F.js";

// src/qix/session/websocket-errors.ts
var closeCodeEngineTerminating = 4003;
var closeCodeEngineAbnormalClosure = 1006;
var closeCodeEngineProxyGeneric = 4200;
var closeCodeClientTimeout = 4201;
var closeCodeBadRequest = 4202;
var closeCodePermissions = 4203;
var closeCodeNotFound = 4204;
var closeCodeTooManyRequests = 4205;
var closeCodeNetwork = 4206;
var closeCodeDependencyGeneric = 4210;
var closeCodeDependencyUnavailable = 4211;
var closeCodeEngineGeneric = 4220;
var closeCodeEntitlement = 4230;
var closeCodeNoEnginesAvailable = 4240;
var CloseCodeSessionReservationMissing = 4222;
var closeCodeMessages = {
  [closeCodeEngineTerminating]: "The engine is in terminating state",
  [closeCodeEngineAbnormalClosure]: "The engine is abnormally closed",
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
var uknownCloseErrorMessage = "websocket closed for unknown reason";
function getHumanReadableSocketClosedErrorMessage(err, { appId, hostConfig }) {
  const closeCode = err?.original?.code;
  const closeMessage = closeCode ? closeCodeMessages[closeCode] || uknownCloseErrorMessage : err.message;
  if (hostConfig?.host) {
    return `Failed to open app ${appId} on ${hostConfig?.host}: ${closeMessage}`;
  } else {
    return `Failed to open app ${appId}: ${closeMessage}`;
  }
}

// src/qix/session/shared-sessions.ts
var globalEventListeners = /* @__PURE__ */ new Set();
function globalOnWebSocketEvent(listener) {
  globalEventListeners.add(listener);
  return () => {
    globalEventListeners.delete(listener);
  };
}
var globalStateListeners = /* @__PURE__ */ new Set();
function globalOnStateChange(listener) {
  globalStateListeners.add(listener);
  return () => {
    globalStateListeners.delete(listener);
  };
}
async function resumeAll() {
  const promises = [];
  Object.keys(globalState.sessionStates).forEach((key) => {
    const state = globalState.sessionStates[key];
    if (state === "suspended") {
      promises.push(sharedSessions[key].resume());
    }
  });
  await Promise.all(promises);
  return Promise.resolve();
}
var initialActions = {};
var sharedSessions = {};
function toGlobalAppSessionId({
  appId,
  identity,
  hostConfig,
  withoutData,
  useReloadEngine,
  ttlSeconds,
  workloadType
}) {
  const locationUrl = toValidWebsocketLocationUrl(hostConfig);
  let url = `${locationUrl}/${appId}`;
  if (identity) {
    url += `/${identity}`;
  }
  if (ttlSeconds !== void 0 && ttlSeconds >= 0) {
    url += `/ttl/${ttlSeconds}`;
  }
  if (useReloadEngine) {
    url += "/useReloadEngine";
  }
  if (withoutData) {
    url += "/withoutData";
  }
  if (workloadType) {
    url += `?workloadType=${workloadType}`;
  }
  return url;
}
async function runPendingInitialActions(initialActionsForApp, sharedSession, doc) {
  for (const initialAction of initialActionsForApp) {
    if (sharedSession.alreadyExecutedInitialActions.indexOf(initialAction) === -1) {
      sharedSession.alreadyExecutedInitialActions.push(initialAction);
      await initialAction(doc);
    }
  }
}
function addInitialSharedSessionCreationAction(openAppSessionProps, action) {
  const key = toGlobalAppSessionId(openAppSessionProps);
  let initialActionArray = initialActions[key];
  if (!initialActionArray) {
    initialActionArray = initialActions[key] = [];
  }
  initialActionArray.push(action);
  const existingSharedSession = sharedSessions[key];
  if (existingSharedSession) {
    existingSharedSession.docPromise.then((doc) => {
      if (doc) {
        runPendingInitialActions(initialActionArray, existingSharedSession, doc);
      }
    });
  }
  return () => {
    const index = initialActionArray.indexOf(action);
    if (index > -1) {
      initialActionArray.splice(index, 1);
    }
  };
}
function listenForWindowsAuthenticationInformation(session) {
  let resolveAuthSuggestedInWebsocket;
  const authSuggestedInWebsocket = new Promise((resolve, reject) => {
    resolveAuthSuggestedInWebsocket = resolve;
    setTimeout(() => {
      resolve(void 0);
    }, 2e3);
  });
  session.on(
    "notification:OnAuthenticationInformation",
    ({ loginUri, mustAuthenticate }) => {
      if (mustAuthenticate && loginUri) {
        if (resolveAuthSuggestedInWebsocket) {
          resolveAuthSuggestedInWebsocket({ loginUri, mustAuthenticate });
        }
      }
    }
  );
  return authSuggestedInWebsocket;
}
async function createAndSetupEnigmaSession(props, canRetry) {
  const { createEnigmaSession } = await import("./6QRR5VUM.js");
  const session = await createEnigmaSession(props);
  setupSessionListeners(session, props);
  let global;
  if (await isWindows(props.hostConfig)) {
    const loginInfoPromise = listenForWindowsAuthenticationInformation(session);
    global = await session.open();
    const loginInfo = await loginInfoPromise;
    if (loginInfo?.mustAuthenticate) {
      const action = await handleAuthenticationError({
        headers: new Headers(),
        status: 101,
        canRetry,
        hostConfig: props.hostConfig
      });
      if (canRetry && action.retry) {
        return createAndSetupEnigmaSession(props, false);
      }
      if (action.preventDefault) {
        return new Promise(() => {
        });
      }
    }
  } else {
    global = await session.open();
  }
  return {
    session,
    global
  };
}
var globalState = {
  sessionStates: {},
  state: "closed"
};
function stateListener(key, event) {
  if (event.eventType === "closed") {
    delete globalState.sessionStates[key];
  } else {
    globalState.sessionStates[key] = event.eventType;
  }
  const states = Object.values(globalState.sessionStates);
  let anySuspended = false;
  let anyResuming = false;
  for (const state of states) {
    if (state === "suspended") {
      anySuspended = true;
    } else if (state === "resuming") {
      anyResuming = true;
    }
  }
  let newState;
  if (states.length === 0) {
    newState = "closed";
  } else if (anySuspended) {
    newState = "suspended";
  } else if (anyResuming) {
    newState = "resuming";
  } else {
    newState = "open";
  }
  if (globalState.state !== newState) {
    globalState.state = newState;
    for (const fn of globalStateListeners) {
      fn({ state: newState });
    }
  }
}
function setupSessionListeners(session, props) {
  const key = toGlobalAppSessionId(props);
  const eventListener = (event) => {
    let sharedSession = void 0;
    let shouldHandleEvent = false;
    if (key in sharedSessions) {
      sharedSession = sharedSessions[key];
      shouldHandleEvent = sharedSession.connected;
    } else if (key in globalState.sessionStates) {
      shouldHandleEvent = true;
    }
    if (!shouldHandleEvent) {
      return;
    }
    stateListener(key, event);
    for (const fn of globalEventListeners) {
      fn(event);
    }
    if (sharedSession) {
      sharedSession.clients.forEach((client) => {
        for (const fn of client._listeners) {
          fn(event);
        }
      });
      if (event.eventType === "suspended" && shouldAutoResume(event.code)) {
        sharedSession.resume().catch((err) => {
        });
      }
    }
  };
  const suspendListener = (event) => {
    if (!(key in sharedSessions)) {
      return;
    }
    const sharedSession = sharedSessions[key];
    let resumed = false;
    let resumePromise = Promise.resolve();
    sharedSession.resume = async () => {
      if (!resumed) {
        session.emit("resuming", {});
        resumePromise = sessionResumeWithRetry(session, props.hostConfig).catch((err) => {
          session.suspend();
          return Promise.reject(err);
        });
        resumed = true;
      }
      return resumePromise;
    };
  };
  session.on("suspended", (event) => {
    const wsEvent = {
      eventType: "suspended",
      ...props,
      ...event
    };
    suspendListener(wsEvent);
  });
  session.on("opened", (event) => {
    const wsEvent = {
      eventType: "opened",
      ...props,
      ...event
    };
    eventListener(wsEvent);
  });
  session.on("closed", (event) => {
    const wsEvent = {
      eventType: "closed",
      ...props,
      ...event
    };
    eventListener(wsEvent);
  });
  session.on("suspended", (event) => {
    const wsEvent = {
      eventType: "suspended",
      ...props,
      ...event
    };
    eventListener(wsEvent);
  });
  session.on("resuming", (event) => {
    const wsEvent = {
      eventType: "resuming",
      ...props,
      ...event
    };
    eventListener(wsEvent);
  });
  session.on("resumed", (event) => {
    const wsEvent = {
      eventType: "resumed",
      ...props,
      ...event
    };
    eventListener(wsEvent);
  });
}
function separatePromises(input) {
  return {
    sessionPromise: input.then((res) => res.session),
    globalPromise: input.then((res) => res.global)
  };
}
var WEBSOCKET_CUSTOM_CLOSE_CODES = {
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
    case WEBSOCKET_CUSTOM_CLOSE_CODES.AUTHENTICATION_FAILED:
      return false;
    case WEBSOCKET_CUSTOM_CLOSE_CODES.ENGINE_TERMINATING:
    case WEBSOCKET_CUSTOM_CLOSE_CODES.APP_DELETED:
    case WEBSOCKET_CUSTOM_CLOSE_CODES.APP_MODE_CHANGED:
      return true;
  }
  return false;
}
function createSharedSession(props) {
  const { sessionPromise, globalPromise } = separatePromises(createAndSetupEnigmaSession(props, true));
  const docPromise = globalPromise.then(async (global) => {
    if (props.useSessionApp) {
      const global2 = await sharedSession.globalPromise;
      return global2.createSessionApp();
    } else {
      return global.openDoc(props.appId, "", "", "", !!props.withoutData).then((doc) => {
        if (!doc) {
          return Promise.reject(new Error("Doc could not be opened"));
        }
        doc.global = global;
        return doc;
      });
    }
  });
  const key = toGlobalAppSessionId(props);
  const clients = [];
  function closeEnigmaSession() {
    delete sharedSessions[key];
    return sharedSession.sessionPromise.then((session) => session.close()).catch(() => {
    });
  }
  const sharedSession = {
    sessionPromise,
    globalPromise,
    docPromise,
    clients,
    addClient(client) {
      const index = sharedSession.clients.indexOf(client, 0);
      if (index === -1) {
        sharedSession.clients.push(client);
      }
    },
    removeClient(client, closeDelay) {
      const actuallyRemove = () => {
        const index = sharedSession.clients.indexOf(client, 0);
        if (index > -1) {
          sharedSession.clients.splice(index, 1);
        }
        if (sharedSession.clients.length === 0) {
          closeEnigmaSession();
        }
      };
      if (closeDelay > 0) {
        return new Promise((resolve) => {
          setTimeout(() => {
            actuallyRemove();
            resolve();
          }, closeDelay);
        });
      } else {
        actuallyRemove();
      }
      return Promise.resolve();
    },
    alreadyExecutedInitialActions: [],
    resume: () => {
      return Promise.resolve();
    },
    connected: false
  };
  sharedSession.docPromise = sharedSession.docPromise.then(async (doc) => {
    sharedSession.connected = true;
    const session = await sharedSession.sessionPromise;
    session.emit("opened", {});
    const initialActionsForApp = initialActions[key];
    if (initialActionsForApp && doc) {
      await runPendingInitialActions(initialActionsForApp, sharedSession, doc);
    }
    return doc;
  });
  sharedSession.docPromise = sharedSession.docPromise.catch((err) => {
    closeEnigmaSession();
    const errorWithReadableMessage = new Error(getHumanReadableSocketClosedErrorMessage(err, props));
    Object.entries(err).forEach(([key2, value]) => {
      errorWithReadableMessage[key2] = value;
    });
    return Promise.reject(errorWithReadableMessage);
  });
  return sharedSession;
}
var onlyOnReattach = false;
function resumeShouldRejectPromiseIfNotReattached(bool) {
  onlyOnReattach = bool;
}
async function checkConnectivity(hostConfig) {
  let status = "online";
  const method = "get";
  const options = {
    hostConfig,
    timeoutMs: 4e3,
    noCache: true
  };
  try {
    const result = await invokeFetch("", { method, pathTemplate: "/api/v1/user-locale", options });
    if (!result.headers.get("content-type")?.includes("application/json")) {
      status = "unauthorized";
    }
  } catch (err) {
    const fetchErr = err;
    switch (fetchErr.status) {
      case 0:
        status = "offline";
        break;
      case 401:
        status = "unauthorized";
        break;
    }
  }
  return Promise.resolve(status);
}
async function sessionResumeWithRetry(session, hostConfig) {
  const status = await checkConnectivity(hostConfig);
  if (status !== "online") {
    const error2 = new Error(`failed to resume: ${status}`);
    return Promise.reject(error2);
  }
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
      let resolve = () => {
      };
      const promise = new Promise((res) => {
        resolve = res;
      });
      setTimeout(resolve, retryTimeoutMs);
      await promise;
    }
    i++;
  }
  if (!resumed) {
    return Promise.reject(error);
  }
  return Promise.resolve();
}
function getOrCreateSharedSession(props) {
  const key = toGlobalAppSessionId(props);
  sharedSessions[key] = sharedSessions[key] || createSharedSession(props);
  return sharedSessions[key];
}
function getExternalSession(externalApp, appSessionProps) {
  const listeners = /* @__PURE__ */ new Set();
  const appSession = {
    _listeners: listeners,
    getDoc: () => externalApp,
    onWebSocketEvent: (fn) => () => {
      appSession._listeners.add(fn);
      return () => {
        appSession._listeners.delete(fn);
      };
    },
    resume: () => Promise.resolve(),
    close: () => Promise.resolve()
  };
  const triggerEventListeners = (event) => {
    for (const fn of globalEventListeners) {
      fn(event);
    }
    for (const fn of appSession._listeners) {
      fn(event);
    }
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
  return appSession;
}

// src/qix/qix-functions.ts
async function createSessionApp(ttlSeconds, workloadType) {
  let sharedSession;
  if ((await getPlatform()).isCloud) {
    sharedSession = await getOrCreateSharedSession({ appId: `SessionApp_${Date.now()}`, ttlSeconds, workloadType });
  } else {
    sharedSession = await getOrCreateSharedSession({
      appId: `%3Ftransient%3D/identity/${Date.now()}`,
      useSessionApp: true,
      ttlSeconds,
      workloadType
    });
  }
  let alreadyClosed = false;
  const listeners = /* @__PURE__ */ new Set();
  const qixSessionAppSession = {
    getDoc: () => sharedSession.docPromise,
    onWebSocketEvent(fn) {
      qixSessionAppSession._listeners.add(fn);
      return () => {
        qixSessionAppSession._listeners.delete(fn);
      };
    },
    _listeners: listeners,
    resume: async () => {
      return await sharedSession.resume();
    },
    close(props) {
      if (!alreadyClosed) {
        alreadyClosed = true;
        const defaultDelay = isBrowserEnvironment ? 5e3 : -1;
        return sharedSession.removeClient(qixSessionAppSession, props?.websocketCloseDelay ?? defaultDelay);
      }
      return Promise.resolve();
    }
  };
  return qixSessionAppSession;
}
function openAppSession(appIdOrProps) {
  const appSessionProps = typeof appIdOrProps === "string" ? { appId: appIdOrProps, identity: void 0, hostConfig: void 0 } : appIdOrProps;
  const appSessionId = toGlobalAppSessionId(appSessionProps);
  const externalApp = externalApps[appSessionId];
  if (externalApp) {
    return getExternalSession(externalApp, appSessionProps);
  }
  const sharedSession = getOrCreateSharedSession(appSessionProps);
  const listeners = /* @__PURE__ */ new Set();
  let alreadyClosed = false;
  const qixAppSession = {
    getDoc: () => sharedSession.docPromise,
    onWebSocketEvent(fn) {
      qixAppSession._listeners.add(fn);
      return () => {
        qixAppSession._listeners.delete(fn);
      };
    },
    _listeners: listeners,
    resume: async () => {
      return await sharedSession.resume();
    },
    close(props) {
      if (!alreadyClosed) {
        alreadyClosed = true;
        const defaultDelay = isBrowserEnvironment ? 5e3 : -1;
        return sharedSession.removeClient(qixAppSession, props?.websocketCloseDelay ?? defaultDelay);
      }
      return Promise.resolve();
    }
  };
  sharedSession.addClient(qixAppSession);
  return qixAppSession;
}
function registerExternalAppSession(appId, enigmaDocObject) {
  const appSessionId = toGlobalAppSessionId({ appId });
  externalApps[appSessionId] = Promise.resolve(enigmaDocObject);
}
function useAppHook(react) {
  return (appId) => {
    const [app, setApp] = react.useState(void 0);
    react.useEffect(() => {
      const appSession = openAppSession(appId);
      appSession.getDoc().then((x) => {
        setApp(x);
      });
      return () => {
        if (appSession) {
          appSession.close();
        }
      };
    }, [appId]);
    return app;
  };
}
function addInitialAppAction(openAppSessionProps, action) {
  return addInitialSharedSessionCreationAction(openAppSessionProps, action);
}
function onWebSocketEvent(fn) {
  return globalOnWebSocketEvent(fn);
}
function onCombinedWebSocketStateChange(fn) {
  return globalOnStateChange(fn);
}
async function resumeSuspendedSessions() {
  return resumeAll();
}
function resumeOnlyOnReattach(bool) {
  resumeShouldRejectPromiseIfNotReattached(bool);
}
var externalApps = {};
var isBrowserEnvironment = isBrowser();

// src/qix/qix.ts
var qix = {
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
    addInitialAppAction: (openAppSessionProps, action) => addInitialAppAction(
      typeof openAppSessionProps === "string" ? { hostConfig, appId: openAppSessionProps } : { hostConfig, ...openAppSessionProps },
      action
    ),
    createSessionApp,
    openAppSession: (openAppSessionProps) => openAppSession(
      typeof openAppSessionProps === "string" ? { hostConfig, appId: openAppSessionProps } : { hostConfig, ...openAppSessionProps }
    ),
    registerExternalAppSession,
    useAppHook,
    onWebSocketEvent,
    onCombinedWebSocketStateChange,
    resumeSuspendedSessions,
    resumeOnlyOnReattach
  })
};
var qix_default = qix;
export {
  addInitialAppAction,
  createSessionApp,
  qix_default as default,
  onCombinedWebSocketStateChange,
  onWebSocketEvent,
  openAppSession,
  registerExternalAppSession,
  resumeOnlyOnReattach,
  resumeSuspendedSessions,
  useAppHook
};
