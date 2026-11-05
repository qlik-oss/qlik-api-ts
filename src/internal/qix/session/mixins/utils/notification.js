/*
 This module defines the Notification class which is an implementation of the
 [Observer pattern](http://en.wikipedia.org/wiki/Observer_pattern).

 Please use {@link module:assets/core/utils/notification~Notification.create} the create a new instance.

 NO CODE IN THIS MODULE SHOULD BE MODIFIED BEFORE A FAILING TEST HAS BEEN WRITTEN!

 @example
 <caption>Simplest case to define a new observable notification and observe it.</caption>

 define( [ "core.utils/notification" ], function( Notification ) {

 var myObject = {};
 Notification.create( myObject, "Changed" );

 myObject.Changed.observe( function() {
 alert( "I've been notified!" );
 } );

 myObject.Changed.notify();

 } );

 @exports assets/core/utils/notification
 @expose module:assets/core/utils/notification~Notification
 @borrows module:assets/core/utils/notification~Notification.create as create
 */
let trackNotifications = false;
const notifications = [];

let /**
   * Indicator to allow or disallow instantiating normally with new.
   * @private
   */
  INSTANTIATING = false;

let NotificationMixin;

/**
 * @class
 * @classdesc
 *
 * This is a class to expose an observable notification. It's an implementation
 * of the [Observer pattern](http://en.wikipedia.org/wiki/Observer_pattern).
 *
 * @throws {Error} Always.
 * @abstract
 * @alias Notification
 * @param {Object|Function} receiver The object to define the notification on.
 * @param {String} name PascalCased name of the notification.
 * @type class
 */
const Notification = function Notification(receiver, name) {
  if (INSTANTIATING !== true) {
    throw new Error("This class can't be instantiated directly.");
  }
  this.observers = [];
  this.receiver = receiver;

  // Don't allow changing the name
  Object.defineProperty(this, "name", {
    get() {
      return name;
    },
  });

  if (trackNotifications) {
    notifications.push(this);
  }
};

/**
 * Observe a Notification by sending in an observer function.
 * Whenever {@link module:assets/core/utils/notification~Notification#emit}
 * is invoked on this instance, the observer will be notified or invoked about it.
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
 * @throws {Error} When the observer is the {@link module:assets/core/utils/notification~Notification#emit} function.
 */
Notification.prototype.bind = function observe(observer) {
  if (typeof observer !== "function") {
    throw new Error("Observer must be a function.");
  }
  if (observer === Notification.prototype.emit) {
    throw new Error("Observer cannot be proxied this way. Use a wrapper function.");
  }
  this.observers.push(observer);
};

/**
 * Observe a Notification only once and then unbind automatically from any future notifications.
 *
 * @param {Function} observer The observer function to handle to notification.
 */
Notification.prototype.once = function observeOnce(observer) {
  const self = this;

  function f() {
    self.unbind(f);
    observer.apply(self.receiver, arguments);
  }
  f.onceObserver = observer;
  self.bind(f);
};

/**
 * Stop observing a notification.
 *
 * @param {Function} observer The observer function that now should ignore any future notifications.
 */
Notification.prototype.unbind = function observeOnce(observer) {
  // Find the index of the observer we want to remove
  const index = this.observers.reduce((foundIndex, o, currIndex) => {
    // If already found, just return it.
    if (foundIndex !== -1) {
      return foundIndex;
    }
    // If it's the handler or the wrapped once handler we found. return it's index
    if (o === observer || o.onceObserver === observer) {
      return currIndex;
    }
    // Otherwise just return -1
    return -1;
  }, -1);
  // Remove it from the observer list.
  if (index !== -1) {
    this.observers.splice(index, 1);
  }
};

/**
 * Notify all observers of this notification.
 *
 * Please note that this method should ONLY be invoked from the class or
 * module defining this notification. Otherwise we get a spaghetti monster
 * on our hands.
 */
Notification.prototype.emit = function emit() {
  const { receiver } = this; // make local copy to preserve indexes in case a callee unbinds itself
  const args = Array.prototype.slice.call(arguments);
  const observers = this.observers.slice();
  observers.forEach((observer) => {
    observer.apply(receiver, args);
  });
};

/**
 * Release all stored data of a notification to free up memory.
 */
Notification.prototype.release = function () {
  const { receiver } = this;
  delete receiver[this.name];
  Object.keys(NotificationMixin.prototype).forEach((key) => {
    delete receiver[key];
  });
  this.receiver = null;
  this.observers = null;
};

/**
 * Create a new observable {@link module:assets/core/utils/notification~Notification} on an object.
 *
 * @param {Object|Function} receiver The object that should now be able to notify observers.
 * @param {String} name The name of the event. This name must be PascalCased to be valid.
 * @throws {Error} When the receiver is not a valid object or function.
 * @throws {Error} When the name is not a PascalCased String.
 * @throws {Error} When there is already a property with the specified name on the receiver.
 */
Notification.create = function create(receiver, name) {
  if (!receiver) {
    throw new Error("Not a valid receiver.");
  }
  if (typeof name !== "string") {
    throw new Error("Nofification name not optional.");
  }
  if (!/^([A-Z][a-z]+)+$/.test(name)) {
    throw new Error("The notification name must be PascalCased.");
  }
  if (name in receiver) {
    throw new Error(`A property named '${name}' is already present on the receiver.`);
  }

  INSTANTIATING = true;
  receiver[name] = new Notification(receiver, name);
  INSTANTIATING = false;

  return receiver[name];
};

/**
 * This mixes in {@link module:assets/core/utils/notification~NotificationMixin} into the receiver, and add functionality
 * to more easy add a new {@link module:assets/core/utils/notification~Notification} to the receiver.
 */
Notification.mixin = function (receiver) {
  if (!receiver) {
    throw new Error("Not a valid receiver.");
  }

  Object.keys(NotificationMixin.prototype).forEach((property) => {
    if (property in receiver) {
      throw new Error(`A property named '${property}' is already present on the receiver.`);
    }

    receiver[property] = NotificationMixin.prototype[property];
  });
};

/**
 * Release all notification instances on a specified object.
 *
 * @param {Object} mixinedObject The object to release notifications on
 */
Notification.release = function (mixinedObject) {
  Object.keys(mixinedObject).forEach((key) => {
    const prop = mixinedObject[key];
    if (prop instanceof Notification) {
      prop.release();
    }
  });
};

/**
 * This object is mixed in to the receiver when using {@link module:assets/core/utils/notification~Notification.mixin}.
 * It adds functionality to define {@link module:assets/core/utils/notification~Notification}s.
 *
 * @mixin
 */
NotificationMixin = {
  prototype: {
    /**
     * Define a new {@link module:assets/core/utils/notification~Notification} on this object.
     * @param {String} name The name of the notification. Must be PascalCased.
     */
    notification(name) {
      return Notification.create(this, name);
    },
  },
};

if (process.env.NODE_ENV === "development") {
  globalThis.getNotifications = function () {
    return notifications.filter((notification) => notification.observers && notification.observers.length);
  };

  globalThis.trackNotifications = function () {
    trackNotifications = true;
  };
}

export default Notification;
