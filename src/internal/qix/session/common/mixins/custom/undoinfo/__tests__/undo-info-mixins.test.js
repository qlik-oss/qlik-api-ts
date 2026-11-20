import { describe, expect, test, vi } from "vitest";

import undoInfoMixins from "../undo-info-mixins";

const undoInfo = undoInfoMixins.extend;

function createModel({ layouts, app, initialMarkers = [] }) {
  let markers = [...initialMarkers];

  return {
    app,
    getLayout: vi.fn(async () => {
      const layout = layouts.shift();
      return {
        qUndoInfo: { qUndoCount: 1, qRedoCount: 1 },
        markers: [...markers],
        ...layout,
      };
    }),
    getProperties: vi.fn(async () => ({ markers: [...markers] })),
    setProperties: vi.fn(async (properties) => {
      markers = [...properties.markers];
    }),
    getMarkers: () => markers,
  };
}

describe("UndoInfo mixins", () => {
  test("redo continues until the updated markers are even", async () => {
    const model = createModel({
      layouts: [
        { markers: [], qUndoInfo: { qRedoCount: 1 } },
        { markers: [1], qUndoInfo: { qRedoCount: 1 } },
        { markers: [1], qUndoInfo: { qRedoCount: 1 } },
        { markers: [], qUndoInfo: { qRedoCount: 0 } },
      ],
      app: { redo: vi.fn(async () => {}) },
    });

    await undoInfo.redo.call(model);

    expect(model.app.redo).toHaveBeenCalledTimes(2);
  });

  test("group state is isolated between UndoInfo objects", async () => {
    const createGroupModel = () =>
      createModel({
        layouts: [{ qUndoInfo: { qUndoCount: 0 } }, { qUndoInfo: { qUndoCount: 0 } }],
        app: {},
      });
    const modelA = createGroupModel();
    const modelB = createGroupModel();

    const groupA = await undoInfo.startGroup.call(modelA);
    const groupB = await undoInfo.startGroup.call(modelB);
    await undoInfo.endGroup.call(modelB, groupB);
    await undoInfo.endGroup.call(modelA, groupA);

    expect(modelA.getMarkers()).toHaveLength(2);
    expect(modelB.getMarkers()).toHaveLength(2);
    expect(modelA.setProperties).toHaveBeenCalledTimes(2);
    expect(modelB.setProperties).toHaveBeenCalledTimes(2);
  });

  test("undo-limit state is isolated between UndoInfo objects", async () => {
    const modelA = createModel({
      layouts: [{ markers: [1], qUndoInfo: { qUndoCount: 0 } }],
      app: {},
    });
    const modelB = createModel({
      layouts: [{ markers: [2], qUndoInfo: { qUndoCount: 4 } }],
      app: {},
      initialMarkers: [2],
    });

    await undoInfo.undo.call(modelA);
    const groupB = await undoInfo.startGroup.call(modelB);

    expect(groupB).toBeNull();
    expect(modelB.getMarkers()).toEqual([2]);
    expect(modelB.setProperties).not.toHaveBeenCalled();
  });

  test("a failed undo does not prevent later undo calls", async () => {
    const model = createModel({
      layouts: [
        { qUndoInfo: { qUndoCount: 1 } },
        { qUndoInfo: { qUndoCount: 1 } },
        { markers: [], qUndoInfo: { qUndoCount: 1 } },
      ],
      app: {
        undo: vi.fn().mockRejectedValueOnce(new Error("simulated failure")).mockResolvedValueOnce(undefined),
      },
    });
    const otherModel = createModel({
      layouts: [{ qUndoInfo: { qUndoCount: 1 } }, { markers: [], qUndoInfo: { qUndoCount: 1 } }],
      app: { undo: vi.fn(async () => {}) },
    });

    await expect(undoInfo.undo.call(model)).rejects.toThrow("simulated failure");
    await expect(undoInfo.undo.call(otherModel)).resolves.toBeUndefined();
    await expect(undoInfo.undo.call(model)).resolves.toBeUndefined();
    expect(model.app.undo).toHaveBeenCalledTimes(2);
    expect(otherModel.app.undo).toHaveBeenCalledTimes(1);
  });

  test("a failed redo does not prevent a later redo", async () => {
    const model = createModel({
      layouts: [
        { qUndoInfo: { qRedoCount: 1 } },
        { qUndoInfo: { qRedoCount: 1 } },
        { markers: [], qUndoInfo: { qRedoCount: 0 } },
      ],
      app: {
        redo: vi.fn().mockRejectedValueOnce(new Error("simulated failure")).mockResolvedValueOnce(undefined),
      },
    });

    await expect(undoInfo.redo.call(model)).rejects.toThrow("simulated failure");
    await expect(undoInfo.redo.call(model)).resolves.toBeUndefined();
    expect(model.app.redo).toHaveBeenCalledTimes(2);
  });
});
