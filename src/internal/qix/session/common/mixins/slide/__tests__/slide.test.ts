import { describe, expect, it, vi } from "vitest";
import { mixin } from "../slide";

describe("slide duplication", () => {
  it.each([
    ["first", "a", 5],
    ["middle", "b", 15],
    ["last", "c", 21],
    ["missing", "missing", undefined],
  ])("preserves the rank calculation for the %s slide", async (_position, id, rank) => {
    const newSlide = {
      copyFrom: vi.fn().mockResolvedValue(undefined),
      getProperties: vi.fn().mockResolvedValue({ title: "Copied slide" }),
      setProperties: vi.fn().mockResolvedValue("updated"),
    };
    const story = {
      getLayout: vi.fn().mockResolvedValue({
        qChildList: {
          qItems: [
            { qInfo: { qId: "c" }, qData: { rank: 20 } },
            { qInfo: { qId: "a" }, qData: { rank: 0 } },
            { qInfo: { qId: "b" }, qData: { rank: 10 } },
          ],
        },
      }),
      createSlide: vi.fn().mockResolvedValue(newSlide),
    };

    await expect(mixin.extend.duplicate.call({ id }, story)).resolves.toBe("updated");

    expect(story.createSlide).toHaveBeenCalledWith({ rank });
    expect(newSlide.copyFrom).toHaveBeenCalledWith(id);
    expect(newSlide.setProperties).toHaveBeenCalledWith({ title: "Copied slide", rank });
  });
});
