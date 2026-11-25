import { beforeEach, describe, expect, it, vi } from "vitest";
import type { HostConfig } from "#internal/auth/auth-types";
import type { NativeReactHooks } from "../qix-types";

const openAppSession = vi.hoisted(() =>
  vi.fn(() => ({ getDoc: () => Promise.resolve({}), close: () => Promise.resolve() })),
);

vi.mock("../shared-sessions-manager", () => ({ getOrCreateSharedSession: vi.fn() }));
vi.mock("../app-session", () => ({ createAppSession: openAppSession }));

const scopedHost = { host: "scoped.example.com" } as HostConfig;
const callHostConfig = { host: "call.example.com" } as HostConfig;

// Minimal react stand-in: runs the effect immediately
const react: NativeReactHooks = {
  useState: <T>(initial: T | undefined): [T, (value: T) => void] => [initial as T, () => {}],
  useEffect: (effect: () => void) => effect(),
};

const sharedSessionProps = async () => {
  const manager = await import("../shared-sessions-manager");
  return vi.mocked(manager.getOrCreateSharedSession).mock.calls.at(-1)?.[0];
};

describe("app hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it.each(["createAppHook", "useAppHook"] as const)("%s opens sessions without a host when unscoped", async (name) => {
    const { default: qix } = await import("../qix");
    qix[name](react)("app-1");
    expect(await sharedSessionProps()).toEqual({ appId: "app-1" });
  });

  it.each(["createAppHook", "useAppHook"] as const)("%s injects the scoped host for a string app id", async (name) => {
    const { default: qix } = await import("../qix");
    qix.withHostConfig(scopedHost)[name](react)("app-1");
    expect(await sharedSessionProps()).toEqual({ appId: "app-1", hostConfig: scopedHost });
  });

  it("lets a host config passed to the hook take precedence over the scoped one", async () => {
    const { default: qix } = await import("../qix");
    qix.withHostConfig(scopedHost).createAppHook(react)({ appId: "app-1", hostConfig: callHostConfig });
    expect(await sharedSessionProps()).toMatchObject({ appId: "app-1", hostConfig: callHostConfig });
  });
});
