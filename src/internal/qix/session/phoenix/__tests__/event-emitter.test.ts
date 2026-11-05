// Copied from this npm package: https://www.npmjs.com/package/node-event-emitter
/*
(The MIT License)

Copyright (c) 2014 Ben Reinhart

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

import { describe, expect, it, vi } from "vitest";
import { EventEmitter as TypedEventEmitter } from "../event-emitter";

class EventEmitter extends TypedEventEmitter<string> {}

describe("EventEmitter", function () {
  describe("#on", function () {
    it("is aliased as addListener", function () {
      expect(EventEmitter.prototype.on).to.equal(EventEmitter.prototype.addListener);
    });

    it("adds a handler for a specified event", function () {
      var emitter = new EventEmitter(),
        fn = function () {};

      emitter.on("some:event", fn);

      expect(!!~emitter.listeners("some:event").indexOf(fn)).toBeTruthy();
      expect(!!~emitter.listeners("another:event").indexOf(fn)).toBeFalsy();
      expect(EventEmitter.listenerCount(emitter, "some:event")).toEqual(1);
    });
  });

  describe("#emit", () => {
    it("invokes all handlers for a given event", () => {
      var emitter = new EventEmitter(),
        spy1 = vi.fn(),
        spy2 = vi.fn(),
        spy3 = vi.fn();

      emitter.on("some:event", spy1);
      emitter.on("some:event", spy2);
      emitter.on("another:event", spy3);

      emitter.emit("some:event");

      expect(spy1).toHaveBeenCalledOnce();
      expect(spy2).toHaveBeenCalledOnce();
      expect(spy3).not.toHaveBeenCalled();
    });
  });

  describe("#removeListener", function () {
    it("removes a given handler for a given event", function () {
      var emitter = new EventEmitter(),
        spy1 = vi.fn(),
        spy2 = vi.fn();

      emitter.on("some:event", spy1);
      emitter.on("some:event", spy2);

      emitter.removeListener("some:event", spy1);
      emitter.emit("some:event");

      expect(spy1).not.toHaveBeenCalled();
      expect(spy2).toHaveBeenCalledOnce();
    });
  });

  describe("#removeAllListeners", function () {
    it("removes all listeners for a given event", function () {
      var emitter = new EventEmitter(),
        spy1 = vi.fn(),
        spy2 = vi.fn(),
        spy3 = vi.fn();

      emitter.on("some:event", spy1);
      emitter.on("some:event", spy2);
      emitter.on("another:event", spy3);

      emitter.removeAllListeners("some:event");
      emitter.emit("some:event");
      emitter.emit("another:event");

      expect(spy1).not.toHaveBeenCalled();
      expect(spy2).not.toHaveBeenCalled();
      expect(spy3).toHaveBeenCalledOnce();
    });

    it("removes all listeners bound to the emitter", function () {
      var emitter = new EventEmitter(),
        spy1 = vi.fn(),
        spy2 = vi.fn(),
        spy3 = vi.fn();

      emitter.on("some:event", spy1);
      emitter.on("some:event", spy2);
      emitter.on("another:event", spy3);

      emitter.removeAllListeners();
      emitter.emit("some:event");
      emitter.emit("another:event");

      expect(spy1).not.toHaveBeenCalled();
      expect(spy2).not.toHaveBeenCalled();
      expect(spy3).not.toHaveBeenCalled();
    });
  });
});
