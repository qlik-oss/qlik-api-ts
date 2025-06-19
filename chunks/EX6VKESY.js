import {
  getHumanReadableSocketClosedErrorMessage
} from "./ETNHFALU.js";
import {
  getPlatform,
  handleAuthenticationError,
  invokeFetch,
  isWindows,
  toValidWebsocketLocationUrl
} from "./CTHDUJ56.js";
import "./3Z3VFAGW.js";
import "./ZCTVPXGO.js";
import {
  isBrowser
} from "./7MMXU6EL.js";

// src/qix/app-session.ts
var isBrowserEnvironment = isBrowser();
function createAppSession(sharedSession) {
  const listeners = /* @__PURE__ */ new Set();
  let alreadyClosed = false;
  const sharedSessionClient = {
    onWebSocketEvent(event) {
      listeners.forEach((listener) => {
        listener(event);
      });
    }
  };
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
    /* Only for test cases */
    // @ts-expect-error ts(2353)
    _listeners: listeners
  };
  sharedSession.addClient(sharedSessionClient);
  return appSession;
}

// src/qix/external-app-session.ts
function createExternalSharedSession(externalApp, onWebSocketEvent2, appSessionProps) {
  const clients = [];
  const sharedSession = {
    getDoc: () => externalApp,
    addClient(client) {
      const index = clients.indexOf(client, 0);
      if (index === -1) {
        clients.push(client);
      }
    },
    removeClient(client) {
      const index = clients.indexOf(client, 0);
      if (index > -1) {
        clients.splice(index, 1);
      }
      return Promise.resolve();
    },
    initialActionsUpdated: () => {
    },
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
    onWebSocketEvent2(event);
    for (const client of clients) {
      client.onWebSocketEvent(event);
    }
  };
  void externalApp.then((app) => {
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

// src/qix/internal/global-app-session.id.ts
function toGlobalAppSessionId({
  appId,
  identity,
  hostConfig,
  withoutData,
  useReloadEngine,
  ttlSeconds,
  workloadType,
  autoResume
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
  if (autoResume) {
    url += "/auto-resume";
  }
  return url;
}

// src/qix/global-events.ts
var globalEventListeners = /* @__PURE__ */ new Set();
var globalStateListeners = /* @__PURE__ */ new Set();
function onWebSocketEvent(listener) {
  globalEventListeners.add(listener);
  return () => {
    globalEventListeners.delete(listener);
  };
}
function onCombinedWebSocketStateChange(listener) {
  globalStateListeners.add(listener);
  return () => {
    globalStateListeners.delete(listener);
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
function triggerGlobalWebSocketEventListeners(event) {
  for (const fn of globalEventListeners) {
    fn(event);
  }
  stateListener(toGlobalAppSessionId(event), event);
}

// src/qix/session/shared-sessions.ts
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
async function createAndSetupEnigmaSession(props, canRetry, onWebSocketEvent2) {
  const { createEnigmaSessionEntrypoint } = await import("./OZASZCCS.js");
  const session = await createEnigmaSessionEntrypoint(props);
  setupSessionListeners(session, props, onWebSocketEvent2);
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
        return createAndSetupEnigmaSession(props, false, onWebSocketEvent2);
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
function setupSessionListeners(session, props, eventListener) {
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
function createSharedEnigmaSession(props, { getInitialAppActions, onClose, onWebSocketEvent: onGlobalWebsocketEvent }) {
  const clients = [];
  const alreadyExecutedInitialActions = [];
  async function runPendingInitialActions(initialActionsForApp, doc) {
    for (const initialAction of initialActionsForApp) {
      if (alreadyExecutedInitialActions.indexOf(initialAction) === -1) {
        alreadyExecutedInitialActions.push(initialAction);
        await initialAction(doc);
      }
    }
  }
  let resumePromise;
  function onWebSocketEvent2(event) {
    if (event.eventType === "suspended") {
      resumePromise = void 0;
      if (shouldAutoResume(event.code)) {
        resume().catch((err) => {
          console.error("Failed to auto-resume");
        });
      }
    }
    for (const client of clients) {
      client.onWebSocketEvent(event);
    }
    onGlobalWebsocketEvent(event);
  }
  const { sessionPromise, globalPromise } = separatePromises(
    createAndSetupEnigmaSession(props, true, onWebSocketEvent2)
  );
  async function resume() {
    if (!resumePromise) {
      resumePromise = (async () => {
        let session = await sessionPromise;
        session.emit("resuming", {});
        await sessionResumeWithRetry(session, props.hostConfig).catch((err) => {
          session.suspend();
          return Promise.reject(err);
        });
      })();
    }
    return resumePromise;
  }
  const docPromise = globalPromise.then(async (global) => {
    if (props.useSessionApp) {
      return global.createSessionApp();
    } else {
      return global.openDoc(props.appId, "", "", "", !!props.withoutData).then((doc) => {
        if (!doc) {
          return Promise.reject(new Error("Doc could not be opened"));
        }
        doc.global = global;
        return doc;
      });
    }
  }).then(async (doc) => {
    const initialActionsForApp = getInitialAppActions();
    if (initialActionsForApp && doc) {
      await runPendingInitialActions(initialActionsForApp, doc);
    }
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
    return sessionPromise.then((session) => session.close()).catch(() => {
    });
  }
  const sharedSession = {
    getDoc: () => docPromise,
    addClient(client) {
      const index = clients.indexOf(client, 0);
      if (index === -1) {
        clients.push(client);
      }
    },
    removeClient(client, closeDelay) {
      const actuallyRemove = () => {
        const index = clients.indexOf(client, 0);
        if (index > -1) {
          clients.splice(index, 1);
        }
        if (clients.length === 0) {
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
    resume,
    initialActionsUpdated() {
      getInitialAppActions();
    },
    clientsCount: () => clients.length
  };
  return sharedSession;
}
var onlyOnReattach = false;
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

// src/qix/session/shared-sessions-phoenix.ts
function createSharedPhoenixSession(props, { onClose, onWebSocketEvent: onWebSocketEventGlobal, getInitialAppActions }) {
  try {
    const clients = [];
    const onWebSocketEvent2 = (event) => {
      onWebSocketEventGlobal(event);
      for (const client of clients) {
        client.onWebSocketEvent(event);
      }
    };
    const phoenixConnectionPromise = import("./OZASZCCS.js").then((module) => {
      return module.createPhoenixConnectionEntrypoint(props, {
        onWebSocketEvent: onWebSocketEvent2,
        getInitialAppActions
      });
    });
    const docPromise = phoenixConnectionPromise.then((phoenixConnection) => phoenixConnection.doc);
    const sharedSession = {
      getDoc: () => docPromise,
      addClient(client) {
        const index = clients.indexOf(client, 0);
        if (index === -1) {
          clients.push(client);
        }
      },
      removeClient(client, closeDelay) {
        if (clients.length === 1) {
          void phoenixConnectionPromise.then((phoenixConnection) => {
            phoenixConnection.stopActivityMonitoring();
          });
        }
        const actuallyRemove = () => {
          const index = clients.indexOf(client, 0);
          if (index > -1) {
            clients.splice(index, 1);
          }
          if (clients.length === 0) {
            onClose();
            void phoenixConnectionPromise.then((phoenixConnection) => {
              phoenixConnection.close();
            });
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
          return Promise.resolve();
        }
      },
      resume: async () => {
        void phoenixConnectionPromise.then((session) => session.resume());
      },
      initialActionsUpdated() {
        void phoenixConnectionPromise.then((session) => session.initialAppActionsUpdated());
      },
      clientsCount: () => clients.length
    };
    return sharedSession;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// src/qix/shared-sessions-manager.ts
var initialActions = {};
var sharedSessions = {};
var externalApps = {};
function getOrCreateSharedSession(props) {
  const appSessionId = toGlobalAppSessionId(props);
  const externalAppSession = externalApps[appSessionId];
  if (externalAppSession) {
    return externalAppSession;
  }
  const key = toGlobalAppSessionId(props);
  if (sharedSessions[key]) {
    return sharedSessions[key];
  }
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
  if (props.autoResume) {
    session = createSharedPhoenixSession(props, extraProps);
  } else {
    session = createSharedEnigmaSession(props, extraProps);
  }
  sharedSessions[key] = session;
  return sharedSessions[key];
}
async function resumeSuspendedSessions() {
  await Promise.all(
    Object.values(sharedSessions).map((sharedSession) => {
      return sharedSession.resume();
    })
  );
}
async function resumeOnlyOnReattach() {
  await Promise.all(
    Object.values(sharedSessions).map((sharedSession) => {
      return sharedSession.resume();
    })
  );
}
function addInitialAppAction(openAppSessionProps, action) {
  const key = toGlobalAppSessionId(openAppSessionProps);
  let initialActionArray = initialActions[key];
  if (!initialActionArray) {
    initialActionArray = [];
    initialActions[key] = initialActionArray;
  }
  initialActionArray.push(action);
  const existingSharedSession = sharedSessions[key];
  if (existingSharedSession) {
    existingSharedSession.initialActionsUpdated();
  }
  return () => {
    const index = initialActionArray.indexOf(action);
    if (index > -1) {
      initialActionArray.splice(index, 1);
    }
  };
}
function registerExternalAppSession(appId, enigmaDocObject) {
  const appSessionId = toGlobalAppSessionId({ appId });
  function onWebSocketEvent2(event) {
    triggerGlobalWebSocketEventListeners(event);
  }
  externalApps[appSessionId] = createExternalSharedSession(Promise.resolve(enigmaDocObject), onWebSocketEvent2, {
    appId
  });
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
  return createAppSession(sharedSession);
}
function openAppSession(appIdOrProps) {
  const appSessionProps = typeof appIdOrProps === "string" ? { appId: appIdOrProps } : appIdOrProps;
  const sharedSession = getOrCreateSharedSession(appSessionProps);
  return createAppSession(sharedSession);
}
function useAppHook(react) {
  return (appId) => {
    const [app, setApp] = react.useState(void 0);
    react.useEffect(() => {
      const appSession = openAppSession(appId);
      void appSession.getDoc().then((x) => {
        setApp(x);
      });
      return () => {
        if (appSession) {
          void appSession.close();
        }
      };
    }, [appId]);
    return app;
  };
}

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
