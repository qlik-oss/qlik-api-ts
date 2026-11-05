import type { Doc, Global } from "../../qix-types";
import { wrapInPromise } from "./custom-promise";
import { EventEmitterForwarder } from "./event-emitter-forwarder";
import type { PhoenixConnection } from "./phoenix-connection";

import type { Json } from "./protocol-types";
import type { QixRequest } from "./qix-connection";
import type { PhoenixRpcObject } from "./rpc-object";
import type { Mixin } from "./rpc-object-mixins";
import type { ObjectRef } from "./rpc-object-ref";
import type { RpcObjectSession } from "./rpc-object-session";
import {
  RpcImpl,
  ConfigImpl,
  SuspendResumeImpl,
  type SuspendResume,
  type Rpc,
  type Config,
} from "./rpc-object-session-inner-parts";

/**
 * Implements the classic enigma.js session interface plus some new functions like invoke.
 */

export class RpcObjectSessionWithMixinsImpl
  extends EventEmitterForwarder<
    | "opened"
    | "closed"
    | "traffic:*"
    | "traffic:sent"
    | "traffic:received"
    | "notification:*"
    | `notification:${string}`
    | "suspended"
    | "resuming"
    | "resumed"
  >
  implements RpcObjectSession
{
  #original: RpcObjectSession;
  #promise: PromiseConstructor;
  #global: Global;
  #app: Doc;

  rpc: Rpc;
  suspendResume: SuspendResume;
  config: Config;

  constructor(
    connection: PhoenixConnection,
    original: RpcObjectSession,
    CustomPromise: PromiseConstructor,
    global: Global,
    app: Doc,
  ) {
    super(original);
    this.#original = original;
    this.#promise = CustomPromise;
    this.#global = global;
    this.#app = app;

    this.rpc = new RpcImpl(connection, CustomPromise);
    this.suspendResume = new SuspendResumeImpl(connection, CustomPromise);
    this.config = new ConfigImpl(CustomPromise);
  }

  #wrapInPromise<T>(promise: Promise<T>): Promise<T> {
    return wrapInPromise(promise, this.#promise);
  }

  /**
   * @deprecated
   * For backwards compatibility, this function is deprecated.
   */
  send(requestWithHandle: QixRequest & { handle: number }): Promise<Json | PhoenixRpcObject> {
    return this.#wrapInPromise(this.#original.send(requestWithHandle));
  }

  get id() {
    return this.#original.id;
  }

  getObjectApi(ref: ObjectRef): PhoenixRpcObject {
    return this.#original.getObjectApi(ref);
  }

  /**
   * Returns the app object for the session.
   */
  get global(): Global {
    return this.#global;
  }

  /**
   * Returns the app object for the session.
   */
  get app(): Doc {
    return this.#app;
  }

  get sessionState(): string {
    return this.#original.sessionState;
  }

  get Promise(): PromiseConstructor {
    return this.#promise;
  }

  resume(): Promise<void> {
    return this.#original.resume();
  }
  suspend(): Promise<void> {
    return this.#original.suspend();
  }

  get createdAt() {
    return this.#original.createdAt;
  }

  get lastTrafficAt() {
    return this.#original.lastTrafficAt;
  }

  get globalPromise() {
    return this.#wrapInPromise(Promise.resolve(this.#global));
  }

  get openDocPromise() {
    return this.#wrapInPromise(Promise.resolve(this.#app));
  }

  open(): Promise<Global> {
    return this.#wrapInPromise(this.globalPromise); // TODO Wrap in promise
  }
  close(): Promise<void> {
    // DO NOTHING, we can not close the session here since others may be using it!
    return this.#wrapInPromise(Promise.resolve());
  }

  withMixins(extraMixins: Mixin[]) {
    return this.#original.withMixins(extraMixins, this.#promise);
  }
}
