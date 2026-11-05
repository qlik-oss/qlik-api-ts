export declare class EventEmitter<E> {
  on(event: E, func: (...args: unknown[]) => void): void;
  addListener(event: E, func: (...args: unknown[]) => void): void;
  once(event: E, func: (...args: unknown[]) => void): void;
  removeListener(event: E, func: () => void): void;
  emit(event: E, ...args: unknown[]): void;
  removeAllListeners(event?: E): void;
  listeners(event?: E): Array<Function>;
  setMaxListeners(count: number): void;

  static listenerCount<EE>(emitter: EventEmitter<EE>, event?: EE): number;
}
