import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { HostConfig } from "#internal/auth/auth-types";
import { createResolvablePromise } from "#internal/utils/utils";
import {
  onPageRedirectRequested,
  onPageRedirectStarted,
  type PageRedirectRequestedListener,
  type PageRedirectStartedListener,
  removeAllPageRedirectListeners,
  requestRedirect,
} from "../page-redirect-request-listeners";

describe("page-redirect-request-listeners", () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    removeAllPageRedirectListeners();
    vi.restoreAllMocks();
  });

  describe("onPageRedirectRequested", () => {
    it("should register a listener for redirect requests", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const listener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      onPageRedirectRequested(hostConfig, listener);
      await requestRedirect(hostConfig);

      expect(listener).toHaveBeenCalledWith(
        expect.objectContaining({
          proceed: expect.any(Function),
        }),
      );
    });

    it("should return an unregister function", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const listener = vi.fn<PageRedirectRequestedListener>();
      const autoResolveListener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      const unregister = onPageRedirectRequested(hostConfig, listener);
      onPageRedirectRequested(hostConfig, autoResolveListener);
      unregister();
      await requestRedirect(hostConfig);

      expect(listener).not.toHaveBeenCalled();
    });

    it("should allow multiple listeners for the same hostConfig", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const listener1 = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });
      const listener2 = vi.fn<PageRedirectRequestedListener>();

      onPageRedirectRequested(hostConfig, listener1);
      onPageRedirectRequested(hostConfig, listener2);
      await requestRedirect(hostConfig);

      expect(listener1).toHaveBeenCalled();
      expect(listener2).toHaveBeenCalled();
    });

    it("should isolate listeners between different hostConfigs", async () => {
      const hostConfig1: HostConfig = { host: "https://example1.com" };
      const hostConfig2: HostConfig = { host: "https://example2.com" };
      const listener1 = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });
      const listener2 = vi.fn<PageRedirectRequestedListener>();

      onPageRedirectRequested(hostConfig1, listener1);
      onPageRedirectRequested(hostConfig2, listener2);

      await requestRedirect(hostConfig1);

      expect(listener1).toHaveBeenCalled();
      expect(listener2).not.toHaveBeenCalled();
    });

    it("should only remove the specific listener when unregistering", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const listener1 = vi.fn<PageRedirectRequestedListener>();
      const listener2 = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      const unregister1 = onPageRedirectRequested(hostConfig, listener1);
      onPageRedirectRequested(hostConfig, listener2);

      unregister1();
      await requestRedirect(hostConfig);

      expect(listener1).not.toHaveBeenCalled();
      expect(listener2).toHaveBeenCalled();
    });
  });

  describe("onPageRedirectStarted", () => {
    it("should register a listener for redirect started events", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const startedListener = vi.fn<PageRedirectStartedListener>();
      const requestListener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      onPageRedirectRequested(hostConfig, requestListener);
      onPageRedirectStarted(hostConfig, startedListener);

      await requestRedirect(hostConfig);

      expect(startedListener).toHaveBeenCalled();
    });

    it("should return an unregister function", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const startedListener = vi.fn<PageRedirectStartedListener>();
      const requestListener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      onPageRedirectRequested(hostConfig, requestListener);
      const unregister = onPageRedirectStarted(hostConfig, startedListener);
      unregister();

      await requestRedirect(hostConfig);

      expect(startedListener).not.toHaveBeenCalled();
    });

    it("should allow multiple started listeners", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const startedListener1 = vi.fn<PageRedirectStartedListener>();
      const startedListener2 = vi.fn<PageRedirectStartedListener>();
      const requestListener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      onPageRedirectRequested(hostConfig, requestListener);
      onPageRedirectStarted(hostConfig, startedListener1);
      onPageRedirectStarted(hostConfig, startedListener2);

      await requestRedirect(hostConfig);

      expect(startedListener1).toHaveBeenCalled();
      expect(startedListener2).toHaveBeenCalled();
    });

    it("should isolate started listeners between different hostConfigs", async () => {
      const hostConfig1: HostConfig = { host: "https://example1.com" };
      const hostConfig2: HostConfig = { host: "https://example2.com" };
      const startedListener1 = vi.fn<PageRedirectStartedListener>();
      const startedListener2 = vi.fn<PageRedirectStartedListener>();
      const requestListener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      onPageRedirectRequested(hostConfig1, requestListener);
      onPageRedirectStarted(hostConfig1, startedListener1);
      onPageRedirectStarted(hostConfig2, startedListener2);

      await requestRedirect(hostConfig1);

      expect(startedListener1).toHaveBeenCalled();
      expect(startedListener2).not.toHaveBeenCalled();
    });
  });

  describe("requestRedirect", () => {
    it("should return a promise that resolves when proceed is called", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const listener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      onPageRedirectRequested(hostConfig, listener);
      const promise = requestRedirect(hostConfig);

      expect(promise).toBeInstanceOf(Promise);
      await expect(promise).resolves.toBeUndefined();
    });

    it("should call redirect requested listeners with a proceed function", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const listener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      onPageRedirectRequested(hostConfig, listener);
      await requestRedirect(hostConfig);

      expect(listener).toHaveBeenCalledWith({
        proceed: expect.any(Function),
      });
    });

    it("should call redirect started listeners when proceed is called", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const startedListener = vi.fn<PageRedirectStartedListener>();
      const requestListener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      onPageRedirectRequested(hostConfig, requestListener);
      onPageRedirectStarted(hostConfig, startedListener);

      await requestRedirect(hostConfig);

      expect(requestListener).toHaveBeenCalled();
      expect(startedListener).toHaveBeenCalled();
    });

    it("should not call started listeners if proceed is not called", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const startedListener = vi.fn<PageRedirectStartedListener>();
      const requestListener = vi.fn<PageRedirectRequestedListener>();

      onPageRedirectRequested(hostConfig, requestListener);
      onPageRedirectStarted(hostConfig, startedListener);

      const promise = requestRedirect(hostConfig);

      // Wait a bit to ensure started listeners are not called
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 10);
      });

      expect(requestListener).toHaveBeenCalled();
      expect(startedListener).not.toHaveBeenCalled();

      // Clean up the hanging promise
      const redirectRequest = requestListener.mock.calls[0]?.[0];
      redirectRequest?.proceed();
      await promise;
    });

    it("should resolve the promise when proceed is called", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      let proceedFn: (() => void) | undefined;

      const requestListener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceedFn = proceed;
      });

      onPageRedirectRequested(hostConfig, requestListener);
      const promise = requestRedirect(hostConfig);

      expect(proceedFn).toBeDefined();
      proceedFn!();

      await expect(promise).resolves.toBeUndefined();
    });

    it("should call all redirect requested listeners", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const listener1 = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });
      const listener2 = vi.fn<PageRedirectRequestedListener>();
      const listener3 = vi.fn<PageRedirectRequestedListener>();

      onPageRedirectRequested(hostConfig, listener1);
      onPageRedirectRequested(hostConfig, listener2);
      onPageRedirectRequested(hostConfig, listener3);

      await requestRedirect(hostConfig);

      expect(listener1).toHaveBeenCalled();
      expect(listener2).toHaveBeenCalled();
      expect(listener3).toHaveBeenCalled();
    });

    it("should call all redirect started listeners when proceed is called", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const startedListener1 = vi.fn<PageRedirectStartedListener>();
      const startedListener2 = vi.fn<PageRedirectStartedListener>();
      const requestListener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      onPageRedirectRequested(hostConfig, requestListener);
      onPageRedirectStarted(hostConfig, startedListener1);
      onPageRedirectStarted(hostConfig, startedListener2);

      await requestRedirect(hostConfig);

      expect(startedListener1).toHaveBeenCalled();
      expect(startedListener2).toHaveBeenCalled();
    });

    it("should catch and warn about errors in redirect requested listeners", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const throwingListener = vi.fn<PageRedirectRequestedListener>(() => {
        throw new Error("Request listener error");
      });
      const normalListener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      onPageRedirectRequested(hostConfig, throwingListener);
      onPageRedirectRequested(hostConfig, normalListener);

      await requestRedirect(hostConfig);

      expect(throwingListener).toHaveBeenCalled();
      expect(normalListener).toHaveBeenCalled();
      expect(consoleWarnMock).toHaveBeenCalledWith(expect.any(Error));
    });

    it("should catch and warn about errors in redirect started listeners", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const throwingStartedListener = vi.fn<PageRedirectStartedListener>(() => {
        throw new Error("Started listener error");
      });
      const normalStartedListener = vi.fn<PageRedirectStartedListener>();
      const requestListener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });

      onPageRedirectRequested(hostConfig, requestListener);
      onPageRedirectStarted(hostConfig, throwingStartedListener);
      onPageRedirectStarted(hostConfig, normalStartedListener);

      await requestRedirect(hostConfig);

      expect(throwingStartedListener).toHaveBeenCalled();
      expect(normalStartedListener).toHaveBeenCalled();
      expect(consoleWarnMock).toHaveBeenCalledWith(expect.any(Error));
    });

    it("should not prevent other listeners from being called if one throws", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const listener1 = vi.fn<PageRedirectRequestedListener>(() => {
        throw new Error("Listener 1 error");
      });
      const listener2 = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
      });
      const listener3 = vi.fn<PageRedirectRequestedListener>();

      onPageRedirectRequested(hostConfig, listener1);
      onPageRedirectRequested(hostConfig, listener2);
      onPageRedirectRequested(hostConfig, listener3);

      await requestRedirect(hostConfig);

      expect(listener1).toHaveBeenCalled();
      expect(listener2).toHaveBeenCalled();
      expect(listener3).toHaveBeenCalled();
    });

    it("should work with no listeners registered", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      // When there are no listeners, the promise will resolve immediately
      await requestRedirect(hostConfig);
      expect(true).toBe(true);
    });

    it("should use authRedirectUserConfirmation function if provided", async () => {
      const [authRedirectUserConfirmationPromise, resolveAuthRedirectUserConfirmation] =
        createResolvablePromise<void>();
      const hostConfig: HostConfig = {
        host: "https://example.com",
        authRedirectUserConfirmation: () => authRedirectUserConfirmationPromise,
      };

      let requestResolved = false;
      void requestRedirect(hostConfig).then(() => {
        requestResolved = true;
      });

      // Wait a bit to ensure the promise is still pending
      await new Promise((r) => {
        setTimeout(r, 0);
      });
      expect(requestResolved).toBe(false);

      resolveAuthRedirectUserConfirmation();
      // Wait a bit to ensure the promise has been resolved
      await new Promise((r) => {
        setTimeout(r, 0);
      });
      expect(requestResolved).toBe(true);
    });

    it("should allow proceed to be called multiple times without issues", async () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      const startedListener = vi.fn<PageRedirectStartedListener>();
      const requestListener = vi.fn<PageRedirectRequestedListener>(({ proceed }) => {
        proceed();
        proceed();
        proceed();
      });

      onPageRedirectRequested(hostConfig, requestListener);
      onPageRedirectStarted(hostConfig, startedListener);

      await requestRedirect(hostConfig);

      expect(startedListener).toHaveBeenCalledTimes(3);
    });
  });
});
