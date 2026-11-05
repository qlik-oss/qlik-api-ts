import type { HostConfig } from "#internal/auth/auth-types";
import type { Doc } from "./types/doc";
import type { WebSocketEvent } from "./types/websocket-events";
import type { QixProgressEvent } from "./types/progress";

export type * from "./types/doc";
export type * from "./types/engine-schema";
export type * from "./types/generic-object";
export type * from "./types/global";
export type * from "./types/list-types";
export type * from "./types/progress";
export type * from "./types/rpc-object";

export type { CombinedWebSocketStateEvent, WebSocketEvent } from "./types/websocket-events";

/* -------------------------------------------------------------------------- */
/*                              qix module types                              */
/* -------------------------------------------------------------------------- */
export type OpenAppSessionProps = {
  /** App ID to open */
  appId: string;
  /** Set a value to open an individual session to the same app that is different from the default */
  identity?: string;
  /** Hostconfig to connect to a URL and authenticate an app session */
  hostConfig?: HostConfig;
  /** Set to true if app should be opened without loading the data blob */
  withoutData?: boolean;
  /** Use a separate reload engine to perform a reload */
  useReloadEngine?: boolean;
  /** Time-to-live in seconds. */
  ttlSeconds?: number;
  /** Workload Type */
  workloadType?: WorkloadType;
  /** Automatically resume a suspended websocket connection when user presence is detected  */
  autoResume?: boolean;
};

export type WorkloadType =
  | "interact"
  | "report"
  | "reload"
  | "prepare"
  | "analyse"
  | "odag"
  | "dataflows"
  | "dynamicviews"
  | "appgeneration"
  | "evaluate"
  | "profile"
  | "di-qvd-gen"
  | "alert-preview"
  | "alert-evaluations"
  | "reporting-analytic"
  | "reporting-batch"
  | "automation"
  | "insight-advisor"
  | "automl-load"
  | "discovery";

export type DocAction = (doc: Doc) => Promise<unknown>;
export type CloseProps = {
  /**
   * Defines after how much time the websocket is actually closed. Typically only used in test cases. By default a suitable small delay is used.
   * The reason for having a delay is to support unmounting a UI (which closes its app session) and mounting a new UI (which opens a new app session) in short succession without having
   * to recreate the underlying websocket.
   */
  websocketCloseDelay?: number;
};
/**
 * An object that represents one usage of an enigma websocket connected to the engine.
 */
export type AppSession = {
  /**
   * Returns a promise of the Qix Doc object with a set of client-side Api extensions.
   * Note that while the AppSession object is returned immediately this promise might take a while
   * to resolve for bigger apps.
   */
  getDoc: () => Promise<Doc>;

  /**
   * @experimental
   * Add an event-listener for this app-session.
   */
  onWebSocketEvent: (listener: (event: WebSocketEvent) => void) => () => void;

  /**
   * @experimental
   * Add a progress-listener for an app open process. This is the process behind the `getDoc` promise.
   * Note: does not work with registerExternalAppSession.
   */
  onOpenProgress: (listener: (event: QixProgressEvent) => void) => () => void;
  /**
   * @experimental
   * Add a progress-listener for an app reload process.
   * A reload is triggered by calling `Doc.DoReload` or `Doc.DoReloadEx`.
   * Note: does not work with registerExternalAppSession.
   */
  onReloadProgress: (listener: (event: QixProgressEvent) => void) => () => void;
  /**
   * @experimental
   * Add a progress-listener for an app save process (triggered by `DoSave` on a `Doc`).
   * Note: does not work with registerExternalAppSession.
   */
  onSaveProgress: (listener: (event: QixProgressEvent) => void) => () => void;

  /**
   * @experimental
   * Resume a suspended session. This will resume exactly
   * once if the session is currently suspended, otherwise
   * nothing will be done.
   */
  resume: () => Promise<void>;

  /**
   * When the app session is no longer in use it must be closed using this function.
   * If the same underlying enigma websocket is used somewhere else in the browser
   * this is basically a no op, but if this is the last/only usage
   * of the underlying enigma websocket that websocket will be closed.
   */
  close: (props?: CloseProps) => Promise<void>;
};

export type NativeReactHooks = {
  useEffect: Function;
  useState: <T>(initialValue: T | undefined) => [T, (value: T) => void];
};

/**
 * React hook that returns the `Doc` of an app based on the supplied app id
 * @param appId The app id of the app (referred to as resourceId in the items api) or full
 * OpenAppSessionProps configuration
 * @returns The Doc object if loaded, or undefined while loading/on error
 */
export type UseAppHook = (appIdOrProps: string | OpenAppSessionProps) => Doc | undefined;

export default {};
