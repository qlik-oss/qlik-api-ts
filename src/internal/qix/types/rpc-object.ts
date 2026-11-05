import type { Mixin } from "../session/phoenix/rpc-object-mixins";
import type { GenericObjectLayout } from "./engine-schema";
import type { AnyGenericObjectLayout } from "./generic-object";

export type RpcObject = {
  id: string;
  type: string;
  genericType?: string;
  handle: number;
  on(event: "changed" | "closed", func: () => void): void;
  emit(event: "changed" | "closed"): void;
  addListener(event: "changed" | "closed", func: () => void): void;
  once(event: "changed" | "closed", func: () => void): void;
  removeListener(event: "changed" | "closed", func: () => void): void;

  migrate: {
    properties(properties: any): any;
    snapshot(layout: any): any;
  };

  isValid: boolean;
  isValidating: boolean;
  isInvalid: boolean;
  isClosed: boolean;
  isClosing: boolean;
  isCancelled: boolean;

  Validated: StateNotification;
  Invalidated: StateNotification;
  Validating: StateNotification;
  Closed: StateNotification;
  Closing: StateNotification;
  Cancelled: StateNotification;

  /** @deprecated */
  state: number;

  layoutSubscribe<L extends GenericObjectLayout = AnyGenericObjectLayout>(
    callback: LayoutSubscriptionCallback,
  ): LayoutSubscription<L>;

  /**
   * @internal
   */
  withMixins?: <T extends RpcObject = RpcObject>(this: T, ...mixins: Mixin[]) => T;
};

type LayoutSubscriptionCallback<L extends GenericObjectLayout = AnyGenericObjectLayout> = (layout: L) => void;

type LayoutSubscription<L extends GenericObjectLayout = AnyGenericObjectLayout> = {
  subscribe(callback: LayoutSubscriptionCallback<L>): void;
  dispose(): void;
  cancel(): void;
  retry(): void;
};

type StateNotification = {
  /**
   * Observe a Notification by sending in an observer function.
   *
   * Please note that if you want to proxy an notification to another object, for now
   * it's not possible to do:
   *
   * ```obj1.EventName.bind( obj2.OtherEvent.emit );```
   *
   * You have to do:
   *
   * ```obj1.EventName.bind( function() { obj2.OtherEvent.emit } );```
   *
   * @param {Function} observer The observer function to handle to notification.
   * @throws {Error} When the observer is not a {@link Function}.
   */
  bind(observer: Function): void;

  /**
   * Observe a Notification only once and then unbind automatically from any future notifications.
   *
   * @param {Function} observer The observer function to handle to notification.
   */
  once(observer: Function): void;

  /**
   * Stop observing a notification.
   *
   * @param {Function} observer The observer function that now should ignore any future notifications.
   */
  unbind(observer: Function): void;
};
