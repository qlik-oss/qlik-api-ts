import { getPlatform } from "../platform/platform-functions";
import { createAppSession } from "./app-session";
import type { AppSession, Doc, NativeReactHooks, OpenAppSessionProps, UseAppHook, WorkloadType } from "./qix-types";
import { getOrCreateSharedSession, type SharedSession } from "./shared-sessions-manager";

export { onCombinedWebSocketStateChange, onWebSocketEvent } from "./global-events";
export {
  addInitialAppAction,
  registerExternalAppSession,
  resumeOnlyOnReattach,
  resumeSuspendedSessions,
} from "./shared-sessions-manager";
/* -------------------------------------------------------------------------- */
/*                            qix module functions                            */
/* -------------------------------------------------------------------------- */

/** Opens a session application in the qlik engine. Encapsulates api differences for creating a session app in Qlik Sense Cloud
 * and Qsefw. The doc returned on the AppSession is a document for a session application. Callers must call close on the
 * session when usage of the session app is complete. The session app is not tied to any particular application
 */
export async function createSessionApp(ttlSeconds?: number, workloadType?: WorkloadType): Promise<AppSession> {
  let sharedSession: SharedSession;

  if ((await getPlatform()).isCloud) {
    sharedSession = getOrCreateSharedSession({ appId: `SessionApp_${Date.now()}`, ttlSeconds, workloadType });
  } else {
    sharedSession = getOrCreateSharedSession({
      appId: `%3Ftransient%3D/identity/${Date.now()}`,
      useSessionApp: true,
      ttlSeconds,
      workloadType,
    });
  }
  return createAppSession(sharedSession);
}

/**
 * Open a qix session in engine on the current domain for the supplied appId. If the same app is opened multiple times
 * only a single enigma websocket session is opened and shared.
 * When all open sessions are closed again the shared enigma websocket session is also closed.
 * @param appId The resource id of the app to open
 * @param host Configuration of what host to connect to
 */
export function openAppSession(appIdOrProps: string | OpenAppSessionProps): AppSession {
  const appSessionProps = typeof appIdOrProps === "string" ? { appId: appIdOrProps } : appIdOrProps;
  // TODO: This would be a good place to normalize the host config
  // to make all websocket event listeners to always get the resolved host config
  const sharedSession = getOrCreateSharedSession(appSessionProps);
  return createAppSession(sharedSession);
}

/**
 * Factory for getting a react hook that returns the `Doc` of an app based on the supplied app id
 * @param react A react like object containing the native react hooks needed by the hook implementation
 */
export function useAppHook(react: NativeReactHooks): UseAppHook {
  return (appIdOrProps) => {
    const [app, setApp] = react.useState<Doc | undefined>(undefined);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    react.useEffect(() => {
      const appSession = openAppSession(appIdOrProps);
      void appSession.getDoc().then((x) => {
        setApp(x);
      });
      return () => {
        if (appSession) {
          void appSession.close();
        }
      };
    }, [appIdOrProps]);
    return app;
  };
}
