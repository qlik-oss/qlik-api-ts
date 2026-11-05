import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import Notification from "../notification";

describe("Notification", () => {
  let receiver;

  beforeEach(() => {
    receiver = {};
  });

  test("should not allow normal instantiation", () => {
    expect(() => {
      const foo = new Notification();
      foo.emit();
    }).toThrow();
  });

  test("should expose the name of the notification", () => {
    Notification.create(receiver, "EventName");

    expect(receiver.EventName.name).toEqual("EventName");
  });

  test("should not allow changes of the name of the notification", () => {
    Notification.create(receiver, "EventName");
    receiver.name = "NewName";

    expect(receiver.EventName.name).toEqual("EventName");
  });

  test("should release all notifications", () => {
    const notification = Notification.create(receiver, "EventName");
    expect(Object.keys(receiver).length).toEqual(1);
    notification.release();
    expect(Object.keys(receiver).length).toEqual(0);
  });

  describe("mixin", () => {
    beforeEach(() => {
      receiver = {};
    });

    test("should have mixin method", () => {
      expect(Notification.mixin).toBeInstanceOf(Function);
    });

    test("should throw when no object is sent as first parameter", () => {
      expect(Notification.mixin.bind(null, undefined)).toThrow();
    });

    test("should mixin a notification method", () => {
      Notification.mixin(receiver);

      expect(receiver.notification).toBeInstanceOf(Function);
    });

    test("should throw when a property 'notification' is already present on receiver", () => {
      receiver.notification = null;

      expect(Notification.mixin.bind(null, receiver)).toThrow();
    });

    test("should allow easy creation of notifications on the receiver", () => {
      Notification.mixin(receiver);

      receiver.notification("NotificationName");

      expect(receiver.NotificationName).toBeInstanceOf(Notification);
    });
  });

  describe("create", () => {
    beforeEach(() => {
      receiver = {};
    });

    test("should exist and be a function", () => {
      expect(Notification).not.toBeUndefined();
    });

    test("should have a create method", () => {
      expect(Notification.create).toBeInstanceOf(Function);
    });

    test("should throw when no object is sent as first parameter", () => {
      expect(Notification.create.bind(null, undefined, "Name")).toThrow();
    });

    test("should throw when no name is sent as second parameter", () => {
      expect(Notification.create.bind(null, receiver)).toThrow();
    });

    test("should throw when name is not a string but an object", () => {
      expect(Notification.create.bind(null, receiver, {})).toThrow();
    });

    test("should throw when name is not a string but a number", () => {
      expect(Notification.create.bind(null, receiver, 1112)).toThrow();
    });
    ["badName", "bad", "even worse", "bad_name", "Badder_Name", "Evil:Name"].forEach((name) => {
      test(`should require the name to be PascalCased, hence not allow '${name}'`, () => {
        expect(Notification.create.bind(null, receiver, name)).toThrow();
      });
    });

    test("should create a Notification object with the specified name", () => {
      Notification.create(receiver, "EventName");

      expect(receiver.EventName).not.toBeUndefined();
      expect(receiver.EventName).toBeInstanceOf(Notification);
    });

    test("should throw when property already exists", () => {
      receiver.Name = null;

      expect(Notification.create.bind(null, receiver, "Name")).toThrow();
    });

    test("should return the notification instance", () => {
      const notification = Notification.create(receiver, "EventName");

      expect(notification).not.toBeUndefined();
      expect(notification).toBeInstanceOf(Notification);
    });
  });

  describe("bind", () => {
    beforeEach(() => {
      receiver = {};
      Notification.create(receiver, "EventName");
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    test("should have a method #bind", () => {
      expect(receiver.EventName.bind).toBeInstanceOf(Function);
    });
    [212, "232", true, new Date(), new Error(), undefined, null, {}].forEach((param) => {
      test(`should throw if only param is a ${typeof param} and not a function`, () => {
        const f = receiver.EventName.bind.bind(null, param);
        expect(f).toThrow();
      });
    });

    test("should be invoked repeatedly", () => {
      const spy = vi.fn();

      receiver.EventName.bind(spy);
      receiver.EventName.emit();
      receiver.EventName.emit();
      receiver.EventName.emit();

      expect(spy).toHaveBeenCalledTimes(3);
    });

    test("should throw when proxying events badly to prevent circular triggering", () => {
      // This makes sure ppl don't proxy events by using Notification#emit as an observer:
      // obj1.EventName.bind(obj2.OtherEvent.emit);

      expect(() => {
        receiver.EventName.bind(Notification.prototype.emit);
      }).toThrow();
    });
  });

  describe("once", () => {
    beforeEach(() => {
      receiver = {};
      Notification.create(receiver, "EventName");
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    test("should have a method #once", () => {
      expect(receiver.EventName.once).toBeInstanceOf(Function);
    });

    test("should invoke #observe", () => {
      const spy = vi.spyOn(receiver.EventName, "bind");

      receiver.EventName.once(() => {});

      expect(spy).toHaveBeenCalledTimes(1);
    });

    test("should only notify once", () => {
      const spy = vi.fn();

      receiver.EventName.once(spy);
      receiver.EventName.emit();
      receiver.EventName.emit();

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe("unbind", () => {
    beforeEach(() => {
      receiver = {};
      Notification.create(receiver, "EventName");
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    test("should have a method #unbind", () => {
      expect(receiver.EventName.unbind).toBeInstanceOf(Function);
    });

    test("should not notify ignored observer", () => {
      const observer1 = vi.fn();
      receiver.EventName.bind(observer1);

      receiver.EventName.unbind(observer1);
      receiver.EventName.emit();

      expect(observer1).not.toHaveBeenCalled();
    });

    test("should not notify unbound once observer", () => {
      const observer1 = vi.fn();
      const observer2 = vi.fn();
      const observer3 = vi.fn();
      receiver.EventName.bind(observer1);
      receiver.EventName.once(observer2);
      receiver.EventName.bind(observer3);

      receiver.EventName.unbind(observer2);
      receiver.EventName.emit();

      expect(observer2).not.toHaveBeenCalled();
    });

    test("should not remove any observer when no match was found", () => {
      const observer1 = vi.fn();
      const observer2 = vi.fn();
      const observer3 = vi.fn();
      receiver.EventName.bind(observer1);
      receiver.EventName.bind(observer2);
      receiver.EventName.bind(observer3);

      receiver.EventName.unbind(observer2);
      receiver.EventName.emit();

      expect(observer1).toHaveBeenCalledTimes(1);
      expect(observer3).toHaveBeenCalledTimes(1);
    });
  });

  describe("emit", () => {
    beforeEach(() => {
      receiver = {};
      Notification.create(receiver, "EventName");
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    test("should have a method #emit", () => {
      expect(receiver.EventName.emit).toBeInstanceOf(Function);
    });

    test("should notify all observers", () => {
      const observer1 = vi.fn();
      const observer2 = vi.fn();
      receiver.EventName.bind(observer1);
      receiver.EventName.bind(observer2);

      receiver.EventName.emit();

      expect(observer1).toHaveBeenCalledTimes(1);
      expect(observer2).toHaveBeenCalledTimes(1);
    });

    test("should send notification information to observers", () => {
      const data = { prop: true };
      const spy1 = vi.fn();
      const spy2 = vi.fn();
      receiver.EventName.bind(spy1);
      receiver.EventName.once(spy2);

      receiver.EventName.emit(data);

      expect(spy1).toHaveBeenCalledWith(data);
      expect(spy2).toHaveBeenCalledWith(data);
    });

    test("should have this be the receiver", () => {
      const spy1 = vi.fn();
      const spy2 = vi.fn();
      receiver.EventName.bind(spy1);
      receiver.EventName.bind(spy2);

      receiver.EventName.emit();

      expect(spy1.mock.instances[0]).toEqual(receiver);
      expect(spy2.mock.instances[0]).toEqual(receiver);
    });
  });
});
