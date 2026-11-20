import { beforeEach, describe, expect, it, vi } from "vitest";
import { logout } from "../auth";

const mocks = vi.hoisted(() => ({
  getAuthRuntimeModule: vi.fn(),
  logout: vi.fn(),
}));

vi.mock("../public-runtime-modules", () => ({
  getAuthRuntimeModule: mocks.getAuthRuntimeModule,
}));

describe("public logout", () => {
  beforeEach(() => {
    mocks.getAuthRuntimeModule.mockReset().mockResolvedValue({ logout: mocks.logout });
    mocks.logout.mockReset().mockResolvedValue(undefined);
  });

  it("passes logout options to the runtime and returns its completion", async () => {
    const hostConfig = { host: "tenant.example", clientId: "client" };
    const options = { hostConfig, endTenantSession: true };

    await logout(options);

    expect(mocks.getAuthRuntimeModule).toHaveBeenCalledWith(hostConfig);
    expect(mocks.logout).toHaveBeenCalledWith(options);
  });
});
