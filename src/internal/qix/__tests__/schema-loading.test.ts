import { beforeEach, describe, expect, it, vi } from "vitest";

// The engine schema is several hundred kB, so it must only be loaded with the lazy qix chunk, when a session is opened
const schemaModule = "../session/common/schema/engine-api.js";

describe("engine schema loading", () => {
  let schemaLoaded: boolean;

  beforeEach(() => {
    vi.resetModules();
    schemaLoaded = false;
    vi.doMock(schemaModule, async (importOriginal) => {
      schemaLoaded = true;
      return importOriginal();
    });
    return () => {
      vi.doUnmock(schemaModule);
    };
  });

  it.each([
    { name: "@qlik/api", load: () => import("#public/index") },
    { name: "@qlik/api/qix", load: () => import("#public/qix") },
    // qmfe-api imports the qix runtime directly, through these two modules
    { name: "the qix runtime", load: () => import("../qix") },
    { name: "the qix runtime functions", load: () => import("../qix-functions") },
  ])("is not loaded by importing $name", async ({ load }) => {
    await load();
    expect(schemaLoaded).toBe(false);
  });

  it("is loaded by the lazy qix chunk", async () => {
    await import("../session/qix-chunk-entrypoint");
    expect(schemaLoaded).toBe(true);
  });
});
