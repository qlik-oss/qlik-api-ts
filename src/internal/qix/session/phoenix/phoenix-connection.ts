/* eslint-disable no-await-in-loop */
import type { Doc, DocAction, Global, OpenAppSessionProps, ProgressData, WebSocketEvent } from "../../qix-types";
import type { ProgressMonitor } from "../progress-monitor";
import { createInterestMonitor } from "./interest-monitor";
import type { JsonRpcCloseEvent } from "./json-rpc-channel";
import { logEvent } from "./logger";
import { createPhoenixSessionState, type PhoenixSessionState } from "./phoenix-session-state";
import type { Json, JsonObject, ObjectWithHandle } from "./protocol-types";
import { createQixConnection, type QixConnection, type QixRequest } from "./qix-connection";
import { shouldRetryRequest } from "./retry-logic";
import type { PhoenixRpcObject } from "./rpc-object";
import type { RpcObjectFactory } from "./rpc-object-factory";
import { isQixObjectRef, type ObjectRef, type QObjectRef } from "./rpc-object-ref";
import { RpcObjectSessionImpl, type RpcObjectSession } from "./rpc-object-session";

export type PhoenixConnectionOwner = {
  onWebSocketEvent: (event: WebSocketEvent) => void;
  getInitialAppActions: () => DocAction[];
  progressMonitor: ProgressMonitor;
};

type PhoenixConnectionState = "opening" | "open" | "suspended" | "resuming" | "closed";

export type PhoenixConnection = PhoenixConnectionImpl;

type Reincarnation = {
  connection: QixConnection;
  state: PhoenixSessionState;
  next?: Promise<Reincarnation> | undefined;
};

/**
 * Creates a QIX session that adds the concept of Rpc objects on top of the QixConnection which is only Json.
 * Reopens a new QixConnection if the existing one goes down and recreates the serverside state of objects using the new connection.
 */
export async function createPhoenixConnection(
  openProps: OpenAppSessionProps,
  objectFactory: RpcObjectFactory,
  { onWebSocketEvent, getInitialAppActions, progressMonitor }: PhoenixConnectionOwner,
): Promise<PhoenixConnection> {
  const phoenixConnection = new PhoenixConnectionImpl(openProps, objectFactory, {
    onWebSocketEvent,
    getInitialAppActions,
    progressMonitor,
  });

  // Always acquire a connection immediately before returning
  await phoenixConnection.waitForConnection();
  return phoenixConnection;
}

class PhoenixConnectionImpl {
  #interestMonitor = createInterestMonitor();
  #sessionIsNotInUseAnymore = false;
  #openProps: OpenAppSessionProps;
  #objectFactory: RpcObjectFactory;
  #rpcObjectSession: RpcObjectSession;
  #owner: PhoenixConnectionOwner;
  #globalRpcObject: PhoenixRpcObject;
  #docRpcObject: PhoenixRpcObject;
  #state: PhoenixConnectionState = "opening";
  #currentReincarnationPromise: Promise<Reincarnation | undefined> = Promise.resolve(undefined);
  #currentReincarnation: Reincarnation | undefined;
  #lastTrafficAt = Date.now();
  #createdAt = Date.now();
  /** @internal */
  constructor(openProps: OpenAppSessionProps, objectFactory: RpcObjectFactory, owner: PhoenixConnectionOwner) {
    this.#openProps = openProps;
    this.#objectFactory = objectFactory;
    this.#owner = owner;
    this.#rpcObjectSession = new RpcObjectSessionImpl(this);
    logEvent("Creating phoenix session", openProps);

    /**
     * The root objects
     */
    this.#globalRpcObject = objectFactory.createObject(
      { qHandle: -1, qType: "Global", qGenericId: "Global" },
      this,
      undefined,
    );
    this.#docRpcObject = objectFactory.createObject(
      { qHandle: 1, qGenericId: openProps.appId, qType: "Doc" },
      this,
      undefined,
    );
    this.#interestMonitor.onUserActivityDetected(() => {
      void this.#getCurrentOrAcquireNewReincarnation();
    });
  }

  get classicEnigmaSessionApi() {
    return this.#rpcObjectSession;
  }

  get createdAt(): number {
    return this.#createdAt;
  }

  get lastTrafficAt(): number {
    return this.#lastTrafficAt;
  }

  async waitForConnection(): Promise<void> {
    await this.#getCurrentOrAcquireNewReincarnation();
  }

  /**
   * Invokes a method on the engine and returns the result.
   * If the result is an object reference, it will be resolved to a PhoenixRpcObject.
   * If the request fails, it will be retried if the error is retryable.
   * If the websocket is down or goes down during the request a new connection will be opened and reestablished and the request retried.
   *
   *
   * @param object An rpc object (or at least something that can provide a handle)
   * @param request a high level qix request (method, params and outKey)
   * @param reportRequestId
   * @returns Either the Json response or a PhoenixRpcObject
   * @throws QixError if the request fails and is not retryable
   */
  async invoke<R = Json | PhoenixRpcObject>(
    object: ObjectWithHandle,
    request: QixRequest,
    reportRequestId: (requestId: number) => void,
  ): Promise<R> {
    try {
      const result = await (this.#sendAndResolveRpcObjects(object, request, reportRequestId) as Promise<R>);
      return result;
    } catch (err) {
      const { retry, retryPrepAction } = shouldRetryRequest(request, err);
      if (retry) {
        // Perform any retry action on existing connection
        if (retryPrepAction) {
          const currentReincarnation = this.#currentReincarnation;
          if (!currentReincarnation) {
            throw new Error("No active reincarnation available for retry preparation", { cause: err });
          }
          await retryPrepAction({
            connection: currentReincarnation.connection,
            appHandle: currentReincarnation.state.getDoc().getHandle(),
          });
        }
        return this.#sendAndResolveRpcObjects(object, request, reportRequestId) as Promise<R>;
      }
      throw err;
    }
  }

  /**
   * Returns an RPC object for the given reference. If the object already exists, it will be returned.
   */
  getObjectApi(ref: ObjectRef | QObjectRef): PhoenixRpcObject {
    if (!this.#currentReincarnation) {
      // Since this is a synchronous function we can't wait for the connection to be established
      throw new Error("Not yet connected!");
    }
    const existingObject = this.#currentReincarnation.state.getObject(ref);
    if (existingObject) {
      return existingObject;
    }
    const newObject = this.#objectFactory.createObject(ref, this, undefined);
    this.#currentReincarnation.state.setObject(newObject.getHandle(), newObject);
    return newObject;
  }

  /**
   * The main Doc/App rpc object
   */
  get doc(): Doc {
    return this.#docRpcObject as unknown as Doc;
  }
  /**
   * The Global rpc object
   */
  get global(): Global {
    return this.#globalRpcObject as unknown as Global;
  }

  /**
   * A string representing if the session was newly established or reonnected
   */
  get sessionState(): string {
    return this.#currentReincarnation?.connection.getSessionState() ?? "";
  }

  /**
   * Signals from outside that the session is not in use (maybe will be in a few seconds!)
   */
  stopActivityMonitoring() {
    this.#interestMonitor.stopListeningForActivity();
  }
  close(): void {
    this.#interestMonitor.stopListeningForActivity();
    this.#sessionIsNotInUseAnymore = true;
    if (this.#currentReincarnation && !this.#currentReincarnation.connection.isClosed()) {
      this.#currentReincarnation.connection.closeNormal();
    }
  }

  async resume(): Promise<void> {
    this.#interestMonitor.signalInterest();
    await this.#getCurrentOrAcquireNewReincarnation();
  }

  async suspend(): Promise<void> {
    if (this.#currentReincarnation && !this.#currentReincarnation.connection.isClosed()) {
      this.#currentReincarnation.connection.closeSuspend();
    }
  }

  get isSuspended(): boolean {
    return (this.#currentReincarnation && this.#currentReincarnation.connection.isClosed()) || false;
  }

  initialAppActionsUpdated(): void {
    void (async () => {
      await this.#runPendingInitialAppActions(await this.#getCurrentOrAcquireNewReincarnation());
    })();
  }

  /**
   * Makes a single attempt at calling the backend
   * * Acquires a working connection
   * * Invokes the backend using thta connection
   * * If the result is an object reference, it will be resolved to a PhoenixRpcObject
   */
  async #sendAndResolveRpcObjects(
    object: ObjectWithHandle,
    request: QixRequest,
    reportRequestId: (requestId: number) => void,
  ): Promise<Json | PhoenixRpcObject> {
    const { connection, state } = await this.#getCurrentOrAcquireNewReincarnation();
    const result = await connection.invoke(object, request, reportRequestId);

    // Turn object references into RPC objects
    if (isQixObjectRef(result)) {
      const objectRef = result;
      let objectResult = state.getObject(objectRef.qHandle);
      if (!objectResult) {
        objectResult = this.#objectFactory.createObject(objectRef, this, request);
        state.setObject(objectRef.qHandle, objectResult);
      }
      return objectResult;
    }
    return result;
  }

  /**
   * This function will acquire a new reincarnation (connection + session state) if the current one is closed
   * It will also update the traffic timestamp
   */
  async #getCurrentOrAcquireNewReincarnation(): Promise<Reincarnation> {
    // Update the traffic timestamp
    this.#lastTrafficAt = Date.now();
    const result = this.#currentReincarnationPromise.then(async (lastReincarnation): Promise<Reincarnation> => {
      // This little looping bit is all about making sure that pararell calls to this function does not create multiple reincarnations.
      while (lastReincarnation?.next !== undefined) {
        // eslint-disable-next-line no-param-reassign
        lastReincarnation = await lastReincarnation.next;
      }
      if (lastReincarnation && !lastReincarnation.connection.isClosed()) {
        //All is good and the connection is still open
        return lastReincarnation;
      }

      // If we get here we need to acquire a new reincarnation (connection plus serverside state of objects)
      const isResume = !!lastReincarnation;
      if (isResume) {
        this.#state = "resuming";
        this.#onResuming();
      }

      const newReincarnation = await this.#openNewQixConnectionAndPrepareSessionStateWithRetry(
        lastReincarnation,
        isResume,
      );

      this.#state = "open";
      if (isResume) {
        // Update the timestamp that is used in sense-client metrics
        this.#onResume();
      } else {
        this.#onOpen();
      }
      this.#currentReincarnation = newReincarnation;
      await this.#runPendingInitialAppActions(newReincarnation);
      return newReincarnation;
    });
    this.#currentReincarnationPromise = result;
    return result;
  }

  /**
   * Really tries and retries to successfully open a new Qix connection and prepares the session state for the new connection.
   * If a few attempts of reopening fails, it will wait for activity on the session before trying again.
   * This means that this function will not return until a new reincarnation is acquired.
   *
   */
  async #openNewQixConnectionAndPrepareSessionStateWithRetry(
    lastReincarnation: Reincarnation | undefined,
    isResume: boolean,
  ) {
    return new Promise<Reincarnation>((resolve, reject) => {
      let retryCount = 0;
      const INITIAL_RETRY_TIME = 2000;
      let retryWaitTime = INITIAL_RETRY_TIME;
      const oneTry = async () => {
        logEvent("Trying to acquire new reincarnation", this.#openProps);
        try {
          resolve(await this.#openNewQixConnectionAndPrepareSessionState(lastReincarnation?.state));
        } catch (err) {
          if (isResume) {
            this.#interestMonitor.resetAnyInterestSignalledBeforeNow();
            if (retryCount < 5) {
              retryCount++;
              retryWaitTime *= 1.5;
              logEvent("Failed to acquire new reincarnation, retrying in ", retryWaitTime, err);
              setTimeout(() => {
                void oneTry();
              }, retryWaitTime);
            } else {
              await this.#interestMonitor.waitUntilSomeoneIsInterestedInThis();
              logEvent("Activity detected, retrying to acquire new reincarnation", this.#openProps);
              retryCount = 0;
              retryWaitTime = INITIAL_RETRY_TIME;
              setTimeout(() => {
                void oneTry();
              }, retryWaitTime);
            }
          } else {
            logEvent("Failed to open app", err);
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors -- re-throwing caught unknown error
            reject(err);
          }
        }
      };
      void oneTry();
    });
  }

  async #openNewQixConnectionAndPrepareSessionState(lastState: PhoenixSessionState | undefined) {
    let stateForNewConnection: PhoenixSessionState | undefined;
    stateForNewConnection = undefined; // It is REALLY undefined to begin with, that is why change events are not sent during the opening phase

    logEvent("-------- Opening new Qix Connection ---------");

    // Create the new QIX Connection
    const newConnection = await createQixConnection(this.#openProps, {
      onMessageSent: (message, handle) => {
        this.#owner.progressMonitor.startMonitoringProgress(message.method, message.id);
        this.#onMessageSent(message, stateForNewConnection?.getObject(handle));
      },
      onMessageReceived: (message, handle) => {
        const object = handle ? stateForNewConnection?.getObject(handle) : undefined;
        if (message?.id && typeof message.id === "number") {
          this.#owner.progressMonitor.stopMonitoringProgress(message.id, message.error ? "error" : "done");
        }
        this.#onMessageReceived(message, object);
      },
      onNotification: (message) => {
        this.#onNotification(message);
      },
      onObjectChanged: (handle) => {
        // This will only actually do something if the object is in the state for this connection
        // So nothing will be sent during the opening/resuming phase
        stateForNewConnection?.getObject(handle)?.emit("changed");
      },
      onObjectClosed: (handle) => {
        stateForNewConnection?.getObject(handle)?.emit("closed");
        stateForNewConnection?.removeObject(handle);
      },
      onConnectionClosed: (error) => {
        this.#onConnectionClosed(error);
      },
    });

    // Poll GetProgress directly on this connection rather than through `global.getProgress`, which
    // would queue behind the connection-acquisition promise and could not run until OpenDoc resolves.
    this.#owner.progressMonitor.setGetProgressFn((requestId) =>
      newConnection.invoke<ProgressData>(-1, {
        method: "GetProgress",
        params: [requestId],
        outKey: "qProgressData",
      }),
    );

    const appRef = await newConnection.invoke<QObjectRef>(-1, {
      method: "OpenDoc",
      params: [this.#openProps.appId, "", "", "", !!this.#openProps.withoutData],
      outKey: -1,
    });

    // we need to move over all objects to the session state and update the handles
    this.#docRpcObject.setHandle(appRef.qHandle); // If the doc suddenly would get another handle than 1.

    // Create the new state for the new connection
    const newState = createPhoenixSessionState({
      global: this.#globalRpcObject,
      doc: this.#docRpcObject,
      executedAppActions: lastState?.getExecutedAppActions() ?? [],
    });

    // If there was a state before this, we need to move over all objects to the new state
    if (lastState) {
      await Promise.all(
        Object.values(lastState.getObjects()).map(async (object) => {
          // Call the respawn function which will update the handle of the object and potentially recreate it on the server side
          await object.respawn(newConnection);
          // Add the object to the new state under its new handle
          newState.setObject(object.getHandle(), object);
        }),
      );
      logEvent("-------- Respawned objects ---------");
      logEvent(
        Object.entries(lastState.getObjects()).map(([key, value]) => `${value.id}: ${key} => ${value.getHandle()}`),
      );
    }

    stateForNewConnection = newState;

    if (lastState) {
      // If there was a state before this, we need to emit changed events for all objects
      // since the underlying data might have changed in the app while we were gone
      // The handles inside the objects themselves have already been updated by the respawning process
      Object.values(lastState.getObjects()).forEach((object) => {
        object.emit("changed");
      });
    }
    logEvent("-------- Opening done ---------");

    return { connection: newConnection, state: newState };
  }

  /* -------------------------------------------------------------------------- */
  /*              Event handlers for various Qix Connection events              */
  /* -------------------------------------------------------------------------- */

  #onOpen() {
    this.#owner.onWebSocketEvent({ eventType: "opened", ...this.#openProps });
    this.#rpcObjectSession.emit("opened");
  }

  #onResuming() {
    this.#owner.onWebSocketEvent({ eventType: "resuming", ...this.#openProps });
    this.#rpcObjectSession.emit("resuming");
  }
  #onResume() {
    this.#createdAt = Date.now();
    this.#owner.onWebSocketEvent({ eventType: "resumed", ...this.#openProps });
    this.#rpcObjectSession.emit("resumed");
  }

  #onMessageSent(message: JsonObject, object: PhoenixRpcObject | undefined) {
    this.#rpcObjectSession.rpc.emit("traffic", "sent", message, object?.handle);
    this.#rpcObjectSession.emit("traffic:*", "sent", message);
    this.#rpcObjectSession.emit(`traffic:sent`, message);
    object?.emit("traffic:*", "sent", message);
    object?.emit("traffic:sent", message);
  }

  #onMessageReceived(message: JsonObject, object: PhoenixRpcObject | undefined) {
    this.#rpcObjectSession.rpc.emit("traffic", "received", message, object?.handle);
    this.#rpcObjectSession.emit("traffic:*", message);
    this.#rpcObjectSession.emit(`traffic:received`, message);
    object?.emit("traffic:*", "received", message);
    object?.emit("traffic:received", message);
  }

  #onNotification(message: JsonObject & { method: string; params: Json }) {
    this.#rpcObjectSession.emit("notification:*", message.method, message.params);
    this.#rpcObjectSession.emit(`notification:${message.method}`, message.params);
    this.#rpcObjectSession.rpc.emit("notification", message);
  }

  #onConnectionClosed(closeEvent: JsonRpcCloseEvent | undefined) {
    const { code, reason, initiator } = closeEvent || { code: 0, reason: "unknown", initiator: "network" };
    // A lost connection ends any in-flight progress monitoring; request ids do not survive a reconnect.
    this.#owner.progressMonitor.stopMonitoringProgress(undefined, "aborted");
    if (this.#sessionIsNotInUseAnymore) {
      logEvent("Connection closed, session is not in use anymore", this.#openProps);
      this.#owner.onWebSocketEvent({ eventType: "closed", code, reason, ...this.#openProps });
      // Backwards compatibility with enigma.js
      this.#rpcObjectSession.emit("closed", { code, reason, initiator });
      // Backwards compatibility with enigma.js
      this.#rpcObjectSession.rpc.emit("closed", { code, reason, initiator });
    } else if (this.#state === "open") {
      logEvent("Connection closed, session is still in use", this.#openProps, code, reason);
      this.#owner.onWebSocketEvent({ eventType: "suspended", code, reason, initiator, ...this.#openProps });
      // Backwards compatibility with enigma.js
      this.#rpcObjectSession.emit("suspended", { code, reason, initiator });
      // Backwards compatibility with enigma.js
      // And YES this should be "closed" since that is how it works in enigma!
      this.#rpcObjectSession.rpc.emit("closed", { code, reason, initiator });
      if (shouldResumeImmediately(code)) {
        void this.#getCurrentOrAcquireNewReincarnation();
      } else {
        this.#interestMonitor.startListeningForActivity();
      }
    }
  }

  async #runPendingInitialAppActions(newReincarnation: Reincarnation) {
    for (const action of this.#owner.getInitialAppActions()) {
      if (!newReincarnation.state.isAppActionExecuted(action)) {
        await action(newReincarnation.state.getDoc() as unknown as Doc);
        newReincarnation.state.addExecutedInitialAppAction(action);
      }
    }
  }
}

function shouldResumeImmediately(code: number) {
  const IMMEDIATE_RESUME_CDDES = {
    /** The engine hosting the session is shutting down,
     *  auto-resume to get another session from another engine. */
    ENGINE_TERMINATING: 4003,
    /** App deleted from an engine, auto-resume to open it on another engine. */
    APP_DELETED: 4004,
    /** App-mode changed to Direct Query mode, let's auto-resume */
    APP_MODE_CHANGED: 4007,
  };
  switch (code) {
    case IMMEDIATE_RESUME_CDDES.ENGINE_TERMINATING:
    case IMMEDIATE_RESUME_CDDES.APP_DELETED:
    case IMMEDIATE_RESUME_CDDES.APP_MODE_CHANGED:
      return true;
    default:
      return false;
  }
}
