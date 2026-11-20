import { beforeEach, describe, expect, it, vi } from "vitest";
import { mixin } from "../create-client-objects";

describe("client object creation", () => {
  let doc;
  let createdObject;

  beforeEach(() => {
    createdObject = { id: "created-object" };
    doc = {
      ...mixin.extend,
      createObject: vi.fn().mockResolvedValue(createdObject),
    };
  });

  it.each([
    ["createSheet", "sheet"],
    ["createStory", "story"],
  ])("%s accepts omitted and undefined properties", async (method, type) => {
    await expect(doc[method]()).resolves.toBe(createdObject);
    await expect(doc[method](undefined)).resolves.toBe(createdObject);

    expect(doc.createObject).toHaveBeenCalledTimes(2);
    for (const [properties] of doc.createObject.mock.calls) {
      expect(properties).toMatchObject({
        qInfo: { qType: type },
        qMetaDef: { title: "", description: "" },
        rank: -1,
        thumbnail: { qStaticContentUrlDef: null },
      });
      expect(properties.qInfo.qId).toHaveLength(43);
    }
  });

  it("uses custom sheet properties without coupling rows and customRowBase", async () => {
    const layoutOptions = { mobile: true };
    await doc.createSheet({
      title: "Sheet",
      description: "About",
      thumbnail: "thumbnail.png",
      rank: 0,
      rows: 12,
      columns: 20,
      customRowBase: 8,
      gridResolution: "small",
      layoutOptions,
    });

    expect(doc.createObject).toHaveBeenCalledWith(
      expect.objectContaining({
        qMetaDef: { title: "Sheet", description: "About" },
        rank: 0,
        thumbnail: { qStaticContentUrlDef: "thumbnail.png" },
        rows: 12,
        columns: 20,
        cells: [],
        customRowBase: 8,
        gridResolution: "small",
        layoutOptions,
        qChildListDef: { qData: { title: "/title" } },
      }),
    );
  });

  it("does not derive customRowBase from rows", async () => {
    await doc.createSheet({ rows: 18 });

    expect(doc.createObject.mock.calls[0][0]).toMatchObject({ rows: 18, columns: 24 });
    expect(doc.createObject.mock.calls[0][0].customRowBase).toBeUndefined();
  });

  it("accepts customRowBase without changing the default row count", async () => {
    await doc.createSheet({ customRowBase: 8 });

    expect(doc.createObject.mock.calls[0][0]).toMatchObject({ rows: 12, customRowBase: 8 });
  });

  it("passes an explicitly supplied customRowBase through without treating zero as absent", async () => {
    await doc.createSheet({ customRowBase: 0 });

    expect(doc.createObject.mock.calls[0][0].customRowBase).toBe(0);
  });

  it("preserves story properties", async () => {
    await doc.createStory({ title: "Story", description: "About", thumbnail: "story.png", rank: 0 });

    expect(doc.createObject).toHaveBeenCalledWith(
      expect.objectContaining({
        qMetaDef: { title: "Story", description: "About" },
        rank: 0,
        thumbnail: { qStaticContentUrlDef: "story.png" },
        qChildListDef: { qData: { title: "/title", rank: "/rank" } },
      }),
    );
  });

  it("defaults master object tags to an array", async () => {
    await doc.createMasterObject();
    await doc.createMasterObject({ title: "Master" });
    await doc.createMasterObject(null);

    expect(doc.createObject.mock.calls.map(([properties]) => properties.qMetaDef.tags)).toEqual([[], [], []]);
  });

  it.each([[["one", "two"]], ["legacy-tag"]])("preserves explicitly supplied master object tags %s", async (tags) => {
    await doc.createMasterObject({ title: "Master", description: "About", tags });

    expect(doc.createObject).toHaveBeenCalledWith(
      expect.objectContaining({
        qInfo: { qType: "masterobject" },
        qMetaDef: { title: "Master", description: "About", tags },
      }),
    );
  });

  it.each(["createSheet", "createStory", "createMasterObject"])("%s propagates engine errors", async (method) => {
    doc.createObject.mockRejectedValue(new Error("create failed"));

    await expect(doc[method]()).rejects.toThrow("create failed");
  });
});
