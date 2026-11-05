/**
 * Provides functionality to connect to a QIX Engine
 * @module qix
 */

import type { HostConfig } from "#internal/auth/auth-types";
import {
  addInitialAppAction,
  createSessionApp,
  onCombinedWebSocketStateChange,
  onWebSocketEvent,
  openAppSession,
  registerExternalAppSession,
  resumeOnlyOnReattach,
  resumeSuspendedSessions,
  useAppHook,
} from "./qix-functions";

/* -------------------------------------------------------------------------- */
/*                                 qix module                                 */
/* -------------------------------------------------------------------------- */

// Export all types inside qix-types.ts
export type * from "./qix-types";

// Export these methods on QixAPI as named exports from qix-functions.ts
export {
  addInitialAppAction,
  createSessionApp,
  onCombinedWebSocketStateChange,
  onWebSocketEvent,
  openAppSession,
  registerExternalAppSession,
  resumeOnlyOnReattach,
  resumeSuspendedSessions,
  useAppHook,
};

/**
 * The QixAPI interface provides the public interface for the qix module.
 */
export interface QixAPI {
  /** Opens a session application in the qlik engine. Encapsulates api differences for creating a session app in Qlik Sense Cloud
   * and Qsefw. The doc returned on the AppSession is a document for a session application. Callers must call close on the
   * session when usage of the session app is complete. The session app is not tied to any particular application
   */
  createSessionApp: typeof createSessionApp;
  /**
   * Open a qix session in engine on the current domain for the supplied appId. If the same app is opened multiple times
   * only a single enigma websocket session is opened and shared.
   * When all open sessions are closed again the shared enigma websocket session is also closed.
   * @param appId The resource id of the app to open
   * @param host Configuration of what host to connect to
   */
  openAppSession: typeof openAppSession;
  /**
   * Registers an externally opened enigma doc object so that it can be used by `openAppSession` without opening a secondary websocket
   * @param appId The resource of an app that is already opened using other means
   * @param enigmaDocObject The actual enigma doc object
   */
  registerExternalAppSession: typeof registerExternalAppSession;
  /**
   * Factory for getting a react hook that returns the `Doc` of an app based on the supplied app id
   * @param react A react like object containing the native react hooks needed by the hook implementation
   */
  useAppHook: typeof useAppHook;
  /**
   * @experimental
   * Adds an event-listener that will be used on all sessions.
   */
  onWebSocketEvent: typeof onWebSocketEvent;
  /**
   * @experimental
   * Adds a state-listener that will be called anytime the global-session-state is changed.
   * This is basically a convenient aggregate of the onWebSocketEvent, which will only send
   * the event that caused the state-change.
   * The state definitions:
   *   suspended - if any session is currently suspended.
   *   resuming - if any session is currently resuming but none are suspended.
   *   opened - no sessions are suspended or resuming.
   *   closed - all sessions are closed.
   * Note that the state will never be "resumed", if you need something that reacts to that
   * state you should use onWebSocketEvent instead, it gives you all the events.
   */
  onCombinedWebSocketStateChange: typeof onCombinedWebSocketStateChange;
  /**
   * @experimental
   * Experimental api for initial actions that run before an app is opened
   */
  addInitialAppAction: typeof addInitialAppAction;
  /**
   * @experimental
   * Resumes all suspended sessions.
   */
  resumeSuspendedSessions: typeof resumeSuspendedSessions;
  /**
   * @experimental
   * Forever experimental
   */
  resumeOnlyOnReattach: typeof resumeOnlyOnReattach;
}

/**
 * Provides functionality to connect to a QIX Engine
 */
const qix: QixAPI & { withHostConfig: (hostConfig: HostConfig | undefined) => QixAPI } = {
  addInitialAppAction,
  createSessionApp,
  openAppSession,
  registerExternalAppSession,
  useAppHook,
  onWebSocketEvent,
  onCombinedWebSocketStateChange,
  resumeSuspendedSessions,
  resumeOnlyOnReattach,
  withHostConfig: (hostConfig: HostConfig | undefined) => ({
    addInitialAppAction: (openAppSessionProps, action) =>
      addInitialAppAction(
        typeof openAppSessionProps === "string"
          ? { hostConfig, appId: openAppSessionProps }
          : { hostConfig, ...openAppSessionProps },
        action,
      ),
    createSessionApp,
    openAppSession: (openAppSessionProps) =>
      openAppSession(
        typeof openAppSessionProps === "string"
          ? { hostConfig, appId: openAppSessionProps }
          : { hostConfig, ...openAppSessionProps },
      ),

    registerExternalAppSession,
    useAppHook,
    onWebSocketEvent,
    onCombinedWebSocketStateChange,
    resumeSuspendedSessions,
    resumeOnlyOnReattach,
  }),
};

// Disabled for anonymous release which includes a non-javascript-breaking type change:
// qix satisfies QixRuntimeApiV1;

export default qix;
