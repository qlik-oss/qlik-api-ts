/* eslint-disable @typescript-eslint/class-methods-use-this */
import type { Doc, Global } from "../../qix-types";
import { EventEmitter } from "./event-emitter";
import type { PhoenixConnection } from "./phoenix-connection";
import type { Json } from "./protocol-types";
import type { QixRequest } from "./qix-connection";
import type { PhoenixRpcObject } from "./rpc-object";
import { toMixinsCacheKey } from "./rpc-object-dynamic-mixins";
import type { Mixin } from "./rpc-object-mixins";
import type { ObjectRef } from "./rpc-object-ref";
import {
  type Config,
  type Rpc,
  type SuspendResume,
  ConfigImpl,
  RpcImpl,
  SuspendResumeImpl,
} from "./rpc-object-session-inner-parts";
import { RpcObjectSessionWithMixinsImpl } from "./rpc-object-session-with-mixins";

/**
 * Represents the classic enigma session interface.
 */
export type RpcObjectSession = Omit<RpcObjectSessionImpl, "#connection" | "#alterEgosWithMixins">;
/**
 * Implements the classic enigma.js session interface plus some new functions like invoke.
 */

let counter = 0;

export class RpcObjectSessionImpl extends EventEmitter<
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
> {
  rpc: Rpc;
  suspendResume: SuspendResume;
  config: Config;
  id = counter++;
  #connection: PhoenixConnection;
  #alterEgosWithMixins: Map<string, RpcObjectSession> = new Map();

  /**
   *
   * @internal
   */
  constructor(connection: PhoenixConnection) {
    super();
    this.#connection = connection;
    this.rpc = new RpcImpl(connection, Promise);
    this.suspendResume = new SuspendResumeImpl(connection, Promise);
    this.config = new ConfigImpl(Promise);
  }

  /**
   * @deprecated
   * For backwards compatibility, this function is deprecated.
   */
  send(requestWithHandle: QixRequest & { handle: number }): Promise<Json | PhoenixRpcObject> {
    return this.rpc.send(requestWithHandle);
  }

  getObjectApi(ref: ObjectRef): PhoenixRpcObject {
    return this.#connection.getObjectApi(ref);
  }

  /**
   * Returns the app object for the session.
   */
  get global(): Global {
    return this.#connection.global;
  }

  /**
   * Returns the app object for the session.
   */
  get app(): Doc {
    return this.#connection.doc;
  }

  get sessionState(): string {
    return this.#connection.sessionState;
  }

  get Promise(): PromiseConstructor {
    return Promise;
  }

  resume(): Promise<void> {
    return this.#connection.resume();
  }
  suspend(): Promise<void> {
    return this.#connection.suspend();
  }

  get createdAt() {
    return this.#connection.createdAt;
  }

  get lastTrafficAt() {
    return this.#connection.lastTrafficAt;
  }

  get globalPromise() {
    return Promise.resolve(this.#connection.global);
  }

  get openDocPromise() {
    return Promise.resolve(this.#connection.doc);
  }

  // TODO IMPLEMENT FOR BACKWARDS COMPATIBLIITY

  open(): Promise<Global> {
    return this.globalPromise;
  }
  close(): Promise<void> {
    // DO NOTHING, we can not close the session here since others may be using it!
    return Promise.resolve();
  }

  withMixins(mixins: Mixin[], promise: PromiseConstructor): RpcObjectSession {
    const mixinsCacheKey = toMixinsCacheKey(mixins);
    let alterEgoWithMixins = this.#alterEgosWithMixins.get(mixinsCacheKey);
    if (!alterEgoWithMixins) {
      alterEgoWithMixins = new RpcObjectSessionWithMixinsImpl(
        this.#connection,
        this,
        promise,
        this.#connection.global.withMixins?.(...mixins) || this.#connection.global,
        this.#connection.doc.withMixins?.(...mixins) || this.#connection.doc,
      );
      this.#alterEgosWithMixins.set(mixinsCacheKey, alterEgoWithMixins);
    }
    return alterEgoWithMixins;
  }
}
