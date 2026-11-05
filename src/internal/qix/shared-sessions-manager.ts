import { createExternalSharedSession } from "./external-app-session";
import { triggerGlobalWebSocketEventListeners } from "./global-events";
import { toGlobalAppSessionId } from "./internal/global-app-session.id";
import type { OpenSessionProps } from "./internal/session-types";
import { type Doc, type DocAction, type OpenAppSessionProps, type WebSocketEvent } from "./qix-types";
import { createSharedEnigmaSession } from "./session/shared-sessions";
import { createSharedPhoenixSession } from "./session/shared-sessions-phoenix";
import type { ProgressType, QixProgressEvent } from "./types/progress";

const initialActions: Record<string, DocAction[]> = {};
const sharedSessions: Record<string, SharedSession> = {};

/**
 * The callback api of the owner/user of of the shared session session
 */
export type Client = {
  onWebSocketEvent: (event: WebSocketEvent) => void;
  hasProgressListener: (progressType: ProgressType) => boolean;
  onProgress: (event: QixProgressEvent) => void;
};

/**
 * The api of the session that is shared between multiple openAppSession calls
 * The session is shared between multiple clients and the session is closed when all clients are closed
 */
export type SharedSession = {
  /**
   * Returns the doc object of the session. The doc object is shared between all clients.
   */
  getDoc: () => Promise<Doc>;
  /**
   * Adds a client to the session. This is used to track when the session should be closed again
   * and to send websocket events
   */
  addClient: (client: Client) => void;
  /**
   * Removes a client from the session. This is used to track when the session should be closed again.
   */
  removeClient: (client: Client, closeDelay: number) => Promise<void>;
  /**
   * Indicates that the initial actions have been updated. This gives the session a chance to run the initial actions
   * that have not been run yet. The list of will be fetched again and any new actions will be run.
   */
  initialActionsUpdated: () => void;
  /**
   * Returns the number of clients that are currently connected to the session. For testing purposes only.
   */
  clientsCount: () => number;

  /**
   * Explicitly resumes the session. This is used to resume the session when it is suspended.
   * If resuming is already in progress or the session is already resumed, this will do nothing.
   */
  resume: () => Promise<void>;

  /**
   * Whether this session can report progress. Externally registered sessions cannot, since they
   * have no progress monitor wired up. Defaults to supported when omitted.
   */
  supportsProgressReporting?: boolean;
};

const externalApps: Record<string, SharedSession> = {};

/**
 * Creates or returns a shared session for the given props combination.
 * If a session already exists for the given props combination, it will be reused.
 */
export function getOrCreateSharedSession(props: OpenSessionProps): SharedSession {
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
    },
  };
  let session: SharedSession;
  if (props.autoResume) {
    session = createSharedPhoenixSession(props, extraProps);
  } else {
    session = createSharedEnigmaSession(props, extraProps);
  }
  sharedSessions[key] = session;
  return sharedSessions[key];
}

export async function resumeSuspendedSessions(): Promise<void> {
  await Promise.all(
    Object.values(sharedSessions).map((sharedSession) => {
      return sharedSession.resume();
    }),
  );
}

export async function resumeOnlyOnReattach(): Promise<void> {
  await Promise.all(
    Object.values(sharedSessions).map((sharedSession) => {
      return sharedSession.resume(); //TODO
    }),
  );
}

/**
 * Adds an initial action to the list of actions that should be run when the app session is opened.
 * This is used to run actions that are needed before the app is used in any way, like setting up initial selections.
 */
export function addInitialAppAction(openAppSessionProps: OpenAppSessionProps, action: DocAction): () => void {
  const key = toGlobalAppSessionId(openAppSessionProps);
  let initialActionArray = initialActions[key];
  if (!initialActionArray) {
    initialActionArray = [];
    initialActions[key] = initialActionArray;
  }
  initialActionArray.push(action);

  // If a session is already opened, run the initial action immediately. `runPendingInitialActions` only runs
  // actions once so app opening race conditions are covered
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

/**
 * Returns a string summarising the number of ongoing enigma sessions for different app ids. Only used for testing
 * @private
 */
export function sharedSessionStats(): string {
  return Object.keys(sharedSessions)
    .map((key) => `${key}:${sharedSessions[key].clientsCount()}`)
    .join(",");
}

/**
 * Registers an externally opened enigma doc object so that it can be used by `openAppSession` without opening a secondary websocket
 * @param appId The resource of an app that is already opened using other means
 * @param enigmaDocObject The actual enigma doc object
 * @param props Additional properties for the open app session, if needed, to differentiate it from other sessions of the same app
 */
export function registerExternalAppSession(appId: string, enigmaDocObject: unknown, props?: OpenAppSessionProps): void {
  const appSessionId = toGlobalAppSessionId({ ...props, appId });

  function onWebSocketEvent(event: WebSocketEvent) {
    triggerGlobalWebSocketEventListeners(event);
  }
  externalApps[appSessionId] = createExternalSharedSession(Promise.resolve(enigmaDocObject), onWebSocketEvent, {
    appId,
  });
}
