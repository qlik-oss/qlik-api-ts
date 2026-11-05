import type { Doc, Global } from "../../qix-types";
import { EventEmitterForwarder } from "./event-emitter-forwarder";
import type { QixConnection } from "./qix-connection";
import type { RemoteObjectImpl } from "./remote-object";
import type { PhoenixRpcObject } from "./rpc-object";
import { mergeMixins } from "./rpc-object-dynamic-mixins";
import { type Mixin } from "./rpc-object-mixins";
import type { RpcObjectSession } from "./rpc-object-session";

export type PhoenixRpcObjectWithMixins = PhoenixRpcObjectWithMixinsImpl;

export class PhoenixRpcObjectWithMixinsImpl
  extends EventEmitterForwarder<"changed" | "closed" | "traffic:sent" | "traffic:received" | "traffic:*">
  implements PhoenixRpcObject
{
  __original_rpc_object: PhoenixRpcObject;
  #classicSessionWithMixins: RpcObjectSession | undefined;
  #mixins: Mixin[];
  Promise: typeof Promise;

  /**
   * @internal
   */
  constructor(original: PhoenixRpcObject, mixins: Mixin[]) {
    super(original);
    this.__original_rpc_object = original;
    this.#mixins = mixins || [];
    this.Promise = this.#mixins.toReversed().find((mixin) => mixin.Promise)?.Promise || Promise;
  }

  setSessionWithMixins(newSession: RpcObjectSession) {
    this.#classicSessionWithMixins = newSession;
  }

  get app(): Doc {
    if (!this.#classicSessionWithMixins) {
      throw new Error("Session with mixins has not been set on this object");
    }
    return this.#classicSessionWithMixins.app;
  }
  get global(): Global {
    if (!this.#classicSessionWithMixins) {
      throw new Error("Session with mixins has not been set on this object");
    }
    return this.#classicSessionWithMixins.global;
  }
  get session(): RpcObjectSession {
    if (!this.#classicSessionWithMixins) {
      throw new Error("Session with mixins has not been set on this object");
    }
    return this.#classicSessionWithMixins;
  }

  withMixins(...extraMixins: Mixin[]): PhoenixRpcObject {
    if (extraMixins.length === 0 || extraMixins === this.#mixins) {
      return this;
    }
    const effectiveMixins = mergeMixins(this.#mixins, extraMixins);
    return this.__original_rpc_object.withMixins(...effectiveMixins);
  }

  /** SIMPLE FORWARDING TO ORIGINAL */

  get __remote__(): RemoteObjectImpl {
    return this.__original_rpc_object.__remote__;
  }
  get handle(): number {
    return this.__original_rpc_object.handle;
  }
  set handle(handle: number) {
    this.__original_rpc_object.handle = handle;
  }
  get id(): string {
    return this.__original_rpc_object.id;
  }
  get type(): string {
    return this.__original_rpc_object.type;
  }
  get genericType(): string | undefined {
    return this.__original_rpc_object.genericType;
  }
  getHandle(): number {
    return this.__original_rpc_object.getHandle();
  }
  setHandle(handle: number): void {
    this.__original_rpc_object.setHandle(handle);
  }
  get enigmaModel(): this {
    return this;
  }
  respawn(newConnection: QixConnection): Promise<void> {
    return this.__original_rpc_object.respawn(newConnection);
  }
}
