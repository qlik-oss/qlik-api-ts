import { EventEmitter } from "./event-emitter";

export class EventEmitterForwarder<E> implements EventEmitter<E> {
  #original: EventEmitter<E>;
  constructor(original: EventEmitter<E>) {
    this.#original = original;
  }

  on(event: E, func: (...args: unknown[]) => void): void {
    return this.#original.on(event, func);
  }
  addListener(event: E, func: (...args: unknown[]) => void): void {
    return this.#original.addListener(event, func);
  }
  once(event: E, func: (...args: unknown[]) => void): void {
    return this.#original.once(event, func);
  }
  removeListener(event: E, func: () => void): void {
    return this.#original.removeListener(event, func);
  }
  emit(event: E, ...args: unknown[]): void {
    return this.#original.emit(event, ...args);
  }
  removeAllListeners(event?: E): void {
    return this.#original.removeAllListeners(event);
  }
  listeners(event?: E): Array<Function> {
    return this.#original.listeners(event);
  }
  setMaxListeners(count: number): void {
    return this.#original.setMaxListeners(count);
  }

  static listenerCount<EE>(emitter: EventEmitter<EE>, event?: EE): number {
    return EventEmitter.listenerCount(emitter, event);
  }
}
