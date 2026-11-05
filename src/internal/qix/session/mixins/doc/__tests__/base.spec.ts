import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import type { GenericObjectProperties } from "../../../../types/engine-schema";
import base from "../base";

describe("Lists mixin", () => {
  let app: { session: any; getObject: any; createSessionObject: any; _listCache?: {} };
  let props: GenericObjectProperties;

  beforeEach(() => {
    app = {
      session: {
        sessionState: "NONONONO",
      },
      _listCache: {},
      getObject: vi.fn().mockResolvedValue("OBJECT"),
      createSessionObject: vi.fn().mockResolvedValue("SESSION_OBJECT"),
    };
    props = {
      qInfo: {
        qId: "Some ID",
        qType: "",
      },
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("getOrCreateSessionObject", () => {
    test("Should always create on session created", async () => {
      app.session.sessionState = "SESSION_CREATED";
      const result = await base.extend.getOrCreateSessionObject.call(app, props);
      expect(app.getObject).not.toHaveBeenCalled();
      expect(app.createSessionObject).toHaveBeenCalled();
      expect(result).toEqual("SESSION_OBJECT");
    });

    test("Should try to fetch on session attached", async () => {
      app.session.sessionState = "SESSION_ATTACHED";
      const result = await base.extend.getOrCreateSessionObject.call(app, props);
      expect(app.getObject).toHaveBeenCalled();
      expect(app.createSessionObject).not.toHaveBeenCalled();
      expect(result).toEqual("OBJECT");
    });

    test("Should fall back to create if fetch fails on session attached", async () => {
      app.session.sessionState = "SESSION_ATTACHED";
      app.getObject = vi.fn().mockRejectedValue(new Error(""));
      const result = await base.extend.getOrCreateSessionObject.call(app, props);
      expect(app.getObject).toHaveBeenCalled();
      expect(app.createSessionObject).toHaveBeenCalled();
      expect(result).toEqual("SESSION_OBJECT");
    });
  });
});
