import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { HostConfig } from "#internal/auth/auth-types";
import {
  emitFatalAuthError,
  onFatalAuthError,
  removeAllFatalAuthErrorListeners,
  type AuthErrorCallback,
  type FatalAuthError,
} from "../fatal-auth-error-listeners";

describe("fatal-auth-error-listeners", () => {
  let consoleErrorMock: ReturnType<typeof vi.spyOn>;
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleErrorMock = vi.spyOn(console, "error").mockImplementation(() => {});
    consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    removeAllFatalAuthErrorListeners();
    vi.restoreAllMocks();
  });

  describe("onFatalAuthError", () => {
    it("should register a listener and call it when error is emitted", () => {
      const listener = vi.fn<AuthErrorCallback>();
      const hostConfig: HostConfig = { host: "https://example.com" };
      const error: FatalAuthError = { message: "Authentication failed" };

      onFatalAuthError(hostConfig, listener);
      emitFatalAuthError(hostConfig, error);

      expect(listener).toHaveBeenCalledWith(error);
      expect(listener).toHaveBeenCalledTimes(1);
    });

    it("should allow multiple listeners to be registered", () => {
      const listener1 = vi.fn<AuthErrorCallback>();
      const listener2 = vi.fn<AuthErrorCallback>();
      const hostConfig: HostConfig = { host: "https://example.com" };
      const error: FatalAuthError = { message: "Authentication failed" };

      onFatalAuthError(hostConfig, listener1);
      onFatalAuthError(hostConfig, listener2);
      emitFatalAuthError(hostConfig, error);

      expect(listener1).toHaveBeenCalledWith(error);
      expect(listener2).toHaveBeenCalledWith(error);
    });

    it("should return an unregister function that removes the listener", () => {
      const listener = vi.fn<AuthErrorCallback>();
      const hostConfig: HostConfig = { host: "https://example.com" };
      const error: FatalAuthError = { message: "Authentication failed" };

      const unregister = onFatalAuthError(hostConfig, listener);
      unregister();
      emitFatalAuthError(hostConfig, error);

      expect(listener).not.toHaveBeenCalled();
    });

    it("should only remove the specific listener when unregistering", () => {
      const listener1 = vi.fn<AuthErrorCallback>();
      const listener2 = vi.fn<AuthErrorCallback>();
      const hostConfig: HostConfig = { host: "https://example.com" };
      const error: FatalAuthError = { message: "Authentication failed" };

      const unregister1 = onFatalAuthError(hostConfig, listener1);
      onFatalAuthError(hostConfig, listener2);

      unregister1();
      emitFatalAuthError(hostConfig, error);

      expect(listener1).not.toHaveBeenCalled();
      expect(listener2).toHaveBeenCalledWith(error);
    });
  });

  describe("emitFatalAuthError", () => {
    it("should call all registered listeners", () => {
      const listener1 = vi.fn<AuthErrorCallback>();
      const listener2 = vi.fn<AuthErrorCallback>();
      const listener3 = vi.fn<AuthErrorCallback>();
      const hostConfig: HostConfig = { host: "https://example.com" };
      const error: FatalAuthError = { message: "Authentication failed" };

      onFatalAuthError(hostConfig, listener1);
      onFatalAuthError(hostConfig, listener2);
      onFatalAuthError(hostConfig, listener3);

      emitFatalAuthError(hostConfig, error);

      expect(listener1).toHaveBeenCalledWith(error);
      expect(listener2).toHaveBeenCalledWith(error);
      expect(listener3).toHaveBeenCalledWith(error);
    });

    it("should call the onAuthFailed callback if provided in hostConfig", () => {
      const onAuthFailed = vi.fn();
      const hostConfig: HostConfig = {
        host: "https://example.com",
        onAuthFailed,
      };
      const error: FatalAuthError = { message: "Authentication failed" };

      emitFatalAuthError(hostConfig, error);

      expect(onAuthFailed).toHaveBeenCalledWith(error);
    });

    it("should call both listeners and onAuthFailed callback", () => {
      const listener = vi.fn<AuthErrorCallback>();
      const onAuthFailed = vi.fn();
      const hostConfig: HostConfig = {
        host: "https://example.com",
        onAuthFailed,
      };
      const error: FatalAuthError = { message: "Authentication failed" };

      onFatalAuthError(hostConfig, listener);
      emitFatalAuthError(hostConfig, error);

      expect(listener).toHaveBeenCalledWith(error);
      expect(onAuthFailed).toHaveBeenCalledWith(error);
    });

    it("should log to console.error if no listeners or callback are registered", () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const error: FatalAuthError = { message: "Authentication failed" };

      emitFatalAuthError(hostConfig, error);

      expect(consoleErrorMock).toHaveBeenCalledWith("Authentication failed");
    });

    it("should not log to console.error if at least one listener is registered", () => {
      const listener = vi.fn<AuthErrorCallback>();
      const hostConfig: HostConfig = { host: "https://example.com" };
      const error: FatalAuthError = { message: "Authentication failed" };

      onFatalAuthError(hostConfig, listener);
      emitFatalAuthError(hostConfig, error);

      expect(consoleErrorMock).not.toHaveBeenCalled();
    });

    it("should not log to console.error if onAuthFailed callback is provided", () => {
      const onAuthFailed = vi.fn();
      const hostConfig: HostConfig = {
        host: "https://example.com",
        onAuthFailed,
      };
      const error: FatalAuthError = { message: "Authentication failed" };

      emitFatalAuthError(hostConfig, error);

      expect(consoleErrorMock).not.toHaveBeenCalled();
    });

    it("should block repeated identical errors for the same hostConfig", () => {
      const listener = vi.fn<AuthErrorCallback>();
      const hostConfig: HostConfig = { host: "https://example.com" };
      const error: FatalAuthError = { message: "Authentication failed" };

      onFatalAuthError(hostConfig, listener);

      emitFatalAuthError(hostConfig, error);
      emitFatalAuthError(hostConfig, error);
      emitFatalAuthError(hostConfig, error);

      expect(listener).toHaveBeenCalledTimes(1);
    });

    it("should trigger callback for one host config", () => {
      const listener1 = vi.fn<AuthErrorCallback>();
      const listener2 = vi.fn<AuthErrorCallback>();
      const hostConfig1: HostConfig = { host: "https://example1.com" };
      const hostConfig2: HostConfig = { host: "https://example2.com" };
      const error: FatalAuthError = { message: "Authentication failed" };

      onFatalAuthError(hostConfig1, listener1);
      onFatalAuthError(hostConfig2, listener2);
      emitFatalAuthError(hostConfig1, error);

      expect(listener1).toHaveBeenCalledTimes(1);
      expect(listener2).toHaveBeenCalledTimes(0);
    });

    it("should allow different error messages for the same hostConfig", () => {
      const listener = vi.fn<AuthErrorCallback>();
      const hostConfig: HostConfig = { host: "https://example.com" };
      const error1: FatalAuthError = { message: "Authentication failed" };
      const error2: FatalAuthError = { message: "Session expired" };

      onFatalAuthError(hostConfig, listener);

      emitFatalAuthError(hostConfig, error1);
      emitFatalAuthError(hostConfig, error2);

      expect(listener).toHaveBeenCalledTimes(2);
      expect(listener).toHaveBeenCalledWith(error1);
      expect(listener).toHaveBeenCalledWith(error2);
    });

    it("should catch and warn about errors thrown by listeners", () => {
      const throwingListener = vi.fn<AuthErrorCallback>().mockImplementation(() => {
        throw new Error("Listener error");
      });
      const normalListener = vi.fn<AuthErrorCallback>();
      const hostConfig: HostConfig = { host: "https://example.com" };
      const error: FatalAuthError = { message: "Authentication failed" };

      onFatalAuthError(hostConfig, throwingListener);
      onFatalAuthError(hostConfig, normalListener);

      emitFatalAuthError(hostConfig, error);

      expect(throwingListener).toHaveBeenCalled();
      expect(normalListener).toHaveBeenCalled();
      expect(consoleWarnMock).toHaveBeenCalledWith("Error in auth error listener", expect.any(Error));
    });

    it("should catch and warn about errors thrown by onAuthFailed callback", () => {
      const onAuthFailed = vi.fn().mockImplementation(() => {
        throw new Error("Callback error");
      });
      const hostConfig: HostConfig = {
        host: "https://example.com",
        onAuthFailed,
      };
      const error: FatalAuthError = { message: "Authentication failed" };

      emitFatalAuthError(hostConfig, error);

      expect(onAuthFailed).toHaveBeenCalled();
      expect(consoleWarnMock).toHaveBeenCalledWith("Error in onAuthFailed callback", expect.any(Error));
    });

    it("should not prevent other listeners from being called if one throws", () => {
      const listener1 = vi.fn<AuthErrorCallback>().mockImplementation(() => {
        throw new Error("Listener 1 error");
      });
      const listener2 = vi.fn<AuthErrorCallback>();
      const listener3 = vi.fn<AuthErrorCallback>();
      const hostConfig: HostConfig = { host: "https://example.com" };
      const error: FatalAuthError = { message: "Authentication failed" };

      onFatalAuthError(hostConfig, listener1);
      onFatalAuthError(hostConfig, listener2);
      onFatalAuthError(hostConfig, listener3);

      emitFatalAuthError(hostConfig, error);

      expect(listener1).toHaveBeenCalled();
      expect(listener2).toHaveBeenCalled();
      expect(listener3).toHaveBeenCalled();
    });

    it("should still call onAuthFailed even if all listeners throw", () => {
      const throwingListener = vi.fn<AuthErrorCallback>().mockImplementation(() => {
        throw new Error("Listener error");
      });
      const onAuthFailed = vi.fn();
      const hostConfig: HostConfig = {
        host: "https://example.com",
        onAuthFailed,
      };
      const error: FatalAuthError = { message: "Authentication failed" };

      onFatalAuthError(hostConfig, throwingListener);
      emitFatalAuthError(hostConfig, error);

      expect(throwingListener).toHaveBeenCalled();
      expect(onAuthFailed).toHaveBeenCalled();
    });
  });
});
