/* eslint-disable @typescript-eslint/class-methods-use-this */
/* eslint-disable max-classes-per-file */
import { EventEmitter } from "./event-emitter";
import type { PhoenixConnection } from "./phoenix-connection";
import type { Json } from "./protocol-types";
import type { QixRequest } from "./qix-connection";
import type { PhoenixRpcObject } from "./rpc-object";

export type SuspendResume = Omit<Pick<SuspendResumeImpl, keyof SuspendResumeImpl>, "#connection">;

export class SuspendResumeImpl {
  Promise: PromiseConstructor;
  #connection: PhoenixConnection;

  constructor(connection: PhoenixConnection, CustomPromise: PromiseConstructor) {
    this.Promise = CustomPromise;
    this.#connection = connection;
  }

  resume(): Promise<void> {
    return this.#connection.resume();
  }
  suspend(): Promise<void> {
    return this.#connection.suspend();
  }

  get isSuspended() {
    return this.#connection.isSuspended;
  }
}

export type Config = ConfigImpl;

export class ConfigImpl {
  Promise: PromiseConstructor;

  constructor(CustomPromise: PromiseConstructor) {
    this.Promise = CustomPromise;
  }
}

export type Rpc = Omit<RpcImpl, "#connection">;

export class RpcImpl extends EventEmitter<"closed" | "socket-error" | "traffic" | "notification" | "message"> {
  Promise: PromiseConstructor;
  #connection: PhoenixConnection;
  constructor(connection: PhoenixConnection, CustomPromise: PromiseConstructor) {
    super();
    this.#connection = connection;
    this.Promise = CustomPromise;
  }

  /**
   * @deprecated
   * For backwards compatibility, this function is deprecated.
   */
  send(requestWithHandle: QixRequest & { handle: number }): Promise<Json | PhoenixRpcObject> {
    const object = { getHandle: () => requestWithHandle.handle };
    // Remove the handle part of the request using destructuring
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { handle, ...request } = requestWithHandle;
    return this.#connection.invoke(object, request, () => {});
  }

  // Backwards compatibility placeholder functions that does nothing
  close(): void {}
}
