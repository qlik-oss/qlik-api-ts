import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ProgressData } from "../../qix-types";
import type { Client } from "../../shared-sessions-manager";
import type { ProgressType, QixProgressEvent } from "../../types/progress";
import { createProgressMonitor, pollingInterval, type GetProgressFn } from "../progress-monitor";

const inProgressData: ProgressData = {
  qStarted: true,
  qFinished: false,
  qTransientProgressMessage: { qMessageCode: 21, qMessageParameters: ["12345"] },
  qPersistentProgressMessages: [{ qMessageCode: 20, qMessageParameters: ["MyApp"] }],
};

const finishedData: ProgressData = {
  qStarted: true,
  qFinished: true,
  qMillisecs: 4321,
  qPersistentProgressMessages: [{ qMessageCode: 11, qMessageParameters: [] }],
};

/**
 * The response the engine returns for `getProgress` on a request ID it doesn't know about.
 * The monitor is expected to ignore these.
 */
const bogusData: ProgressData = {
  qStarted: true,
  qFinished: true,
  qCompleted: 0,
  qTotal: 0,
  qKB: 0,
  qMillisecs: 0,
  qErrorData: [],
  qPersistentProgressMessages: [],
  qTransientProgressMessage: {
    qMessageCode: 0,
    qMessageParameters: [""],
  },
};

function createMockClient(listeningFor: Array<ProgressType> = []): Client {
  const listening = new Set(listeningFor);
  return {
    onWebSocketEvent: vi.fn(),
    hasProgressListener: vi.fn((progressType: ProgressType) => listening.has(progressType)),
    onProgress: vi.fn(),
  };
}

function eventsDeliveredTo(client: Client): QixProgressEvent[] {
  return vi.mocked(client.onProgress).mock.calls.map(([event]) => event);
}

function eventsOfStatus(client: Client, status: QixProgressEvent["status"]): QixProgressEvent[] {
  return eventsDeliveredTo(client).filter((event) => event.status === status);
}

describe("progress-monitor", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("continuously calls getProgressFn while a request is monitored and there are active clients", async () => {
    const clients = [createMockClient(["reload"])];
    const getProgressFn: GetProgressFn = vi.fn().mockResolvedValue(inProgressData);
    const monitor = createProgressMonitor(clients);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);
    expect(getProgressFn).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(pollingInterval);
    expect(getProgressFn).toHaveBeenCalledTimes(2);

    await vi.advanceTimersByTimeAsync(pollingInterval);
    expect(getProgressFn).toHaveBeenCalledTimes(3);

    // The active client receives a single "started" and one "progress" event per poll.
    expect(eventsOfStatus(clients[0], "started")).toHaveLength(1);
    expect(eventsOfStatus(clients[0], "progress")).toHaveLength(3);
    expect(clients[0].onProgress).toHaveBeenCalledWith({ type: "reload", status: "started" });
    expect(clients[0].onProgress).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "reload",
        status: "progress",
        transient: { code: 21, parameters: ["12345"] },
        persistent: [{ code: 20, parameters: ["MyApp"] }],
        awaitingUserInteraction: false,
      }),
    );

    // Stopping the monitoring ends the polling.
    monitor.stopMonitoringProgress(1);
    await vi.advanceTimersByTimeAsync(0);
    const callsAfterStop = vi.mocked(getProgressFn).mock.calls.length;
    await vi.advanceTimersByTimeAsync(pollingInterval * 5);
    expect(getProgressFn).toHaveBeenCalledTimes(callsAfterStop);
  });

  it.each([
    ["OpenDoc", "open"],
    ["DoReload", "reload"],
    ["DoReloadEx", "reload"],
    ["DoSave", "save"],
  ] as const)("polls for the progress-relevant method %s", async (method, progressType) => {
    const client = createMockClient([progressType]);
    const getProgressFn: GetProgressFn = vi.fn().mockResolvedValue(inProgressData);
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress(method, 1);
    await vi.advanceTimersByTimeAsync(0);

    expect(getProgressFn).toHaveBeenCalledTimes(1);
    expect(client.onProgress).toHaveBeenCalledWith({ type: progressType, status: "started" });
    expect(client.onProgress).toHaveBeenCalledWith(expect.objectContaining({ type: progressType, status: "progress" }));
  });

  it.each(["GetLayout", "CreateSessionObject", "EvaluateEx", "SomeOtherMethod"])(
    "does not poll for the non-progress method %s",
    async (method) => {
      const client = createMockClient(["open", "reload", "save"]);
      const getProgressFn: GetProgressFn = vi.fn().mockResolvedValue(inProgressData);
      const monitor = createProgressMonitor([client]);
      monitor.setGetProgressFn(getProgressFn);

      monitor.startMonitoringProgress(method, 1);
      await vi.advanceTimersByTimeAsync(pollingInterval * 3);

      expect(getProgressFn).not.toHaveBeenCalled();
      expect(client.onProgress).not.toHaveBeenCalled();
    },
  );

  it("starts delivering progress events to a client that becomes active mid-request", async () => {
    const clients: Array<Client> = [];
    const getProgressFn: GetProgressFn = vi.fn().mockResolvedValue(inProgressData);
    const monitor = createProgressMonitor(clients);
    monitor.setGetProgressFn(getProgressFn);

    // No active clients yet: monitoring is running but nothing is polled.
    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(pollingInterval * 2);
    expect(getProgressFn).not.toHaveBeenCalled();

    // A client subscribes in the middle of the ongoing request.
    const lateClient = createMockClient(["reload"]);
    clients.push(lateClient);

    await vi.advanceTimersByTimeAsync(pollingInterval);
    expect(getProgressFn).toHaveBeenCalled();
    expect(lateClient.onProgress).toHaveBeenCalledWith(expect.objectContaining({ type: "reload", status: "progress" }));
  });

  it("never calls getProgressFn when there are no active clients", async () => {
    const clients = [createMockClient(["open"]), createMockClient([])];
    const getProgressFn: GetProgressFn = vi.fn().mockResolvedValue(inProgressData);
    const monitor = createProgressMonitor(clients);
    monitor.setGetProgressFn(getProgressFn);

    // Monitoring "reload" while clients only listen for "open" (or nothing).
    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(pollingInterval * 5);

    expect(getProgressFn).not.toHaveBeenCalled();
    expect(clients[0].onProgress).not.toHaveBeenCalled();
    expect(clients[1].onProgress).not.toHaveBeenCalled();
  });

  it("accumulates persistent log across polls while replacing the transient line", async () => {
    const client = createMockClient(["reload"]);
    const getProgressFn = vi
      .fn<GetProgressFn>()
      .mockResolvedValueOnce({
        qStarted: true,
        qFinished: false,
        qPersistentProgressMessages: [{ qMessageCode: 3, qMessageParameters: ["Sales"] }],
        qTransientProgressMessage: { qMessageCode: 21, qMessageParameters: ["1"] },
      })
      .mockResolvedValueOnce({
        qStarted: true,
        qFinished: false,
        qPersistentProgressMessages: [{ qMessageCode: 3, qMessageParameters: ["Orders"] }],
        qTransientProgressMessage: { qMessageCode: 21, qMessageParameters: ["50"] },
      })
      .mockResolvedValue({
        qStarted: true,
        qFinished: false,
        qPersistentProgressMessages: [],
        qTransientProgressMessage: { qMessageCode: 21, qMessageParameters: ["99"] },
      });
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);
    await vi.advanceTimersByTimeAsync(pollingInterval);
    await vi.advanceTimersByTimeAsync(pollingInterval);

    const progressEvents = eventsOfStatus(client, "progress");
    expect(progressEvents.at(0)).toMatchObject({
      persistent: [{ code: 3, parameters: ["Sales"] }],
      transient: { code: 21, parameters: ["1"] },
    });
    expect(progressEvents.at(1)).toMatchObject({
      persistent: [
        { code: 3, parameters: ["Sales"] },
        { code: 3, parameters: ["Orders"] },
      ],
      transient: { code: 21, parameters: ["50"] },
    });
    expect(progressEvents.at(2)).toMatchObject({
      persistent: [
        { code: 3, parameters: ["Sales"] },
        { code: 3, parameters: ["Orders"] },
      ],
      transient: { code: 21, parameters: ["99"] },
    });
  });

  it("surfaces errors as soon as they appear and dedupes them across polls", async () => {
    const client = createMockClient(["reload"]);
    const getProgressFn = vi
      .fn<GetProgressFn>()
      .mockResolvedValueOnce({
        qStarted: true,
        qFinished: false,
        qErrorData: [{ qErrorString: "Bad field", qErrorDataCode: "EDC_WARNING", qLine: "LOAD *;" }],
      })
      .mockResolvedValue({
        qStarted: true,
        qFinished: false,
        // The same error is reported again on a later poll and must not be duplicated.
        qErrorData: [{ qErrorString: "Bad field", qErrorDataCode: "EDC_WARNING", qLine: "LOAD *;" }],
      });
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);
    await vi.advanceTimersByTimeAsync(pollingInterval);

    const progressEvents = eventsOfStatus(client, "progress");
    expect(progressEvents.at(0)).toMatchObject({
      errors: [{ message: "Bad field", severity: "warning", line: "LOAD *;" }],
    });
    const last = progressEvents.at(-1);
    expect(last?.status === "progress" && last.errors).toHaveLength(1);
  });

  it("polls one final time on stop so active clients always receive the finished event", async () => {
    const client = createMockClient(["reload"]);
    const getProgressFn = vi.fn<GetProgressFn>().mockResolvedValue(inProgressData);
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);
    expect(getProgressFn).toHaveBeenCalledTimes(1);
    expect(eventsOfStatus(client, "progress")).toHaveLength(1);

    // The request finishes right after a poll, before the next scheduled poll fires.
    getProgressFn.mockResolvedValue(finishedData);
    monitor.stopMonitoringProgress(1);
    await vi.advanceTimersByTimeAsync(0);

    // Stopping triggers an immediate extra poll, delivering the finished event.
    expect(getProgressFn).toHaveBeenCalledTimes(2);
    expect(client.onProgress).toHaveBeenLastCalledWith(
      expect.objectContaining({ type: "reload", status: "finished", durationMs: 4321 }),
    );
    expect(eventsOfStatus(client, "finished")).toHaveLength(1);

    // No further polling happens after the request is done.
    await vi.advanceTimersByTimeAsync(pollingInterval * 5);
    expect(getProgressFn).toHaveBeenCalledTimes(2);
  });

  it("reports finished only once and never polls concurrently", async () => {
    const client = createMockClient(["reload"]);
    // A slow getProgressFn: several polling intervals elapse before it resolves as finished.
    // The old fire-and-forget scheduling would start overlapping polls and report finished twice.
    const getProgressFn = vi.fn<GetProgressFn>().mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(() => resolve(finishedData), pollingInterval * 3);
        }),
    );
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(pollingInterval * 6);

    // Only one poll ran (single-flight), and the finished event was delivered exactly once.
    expect(getProgressFn).toHaveBeenCalledTimes(1);
    expect(eventsOfStatus(client, "finished")).toHaveLength(1);
  });

  it("does not deliver finished twice when stop is called immediately after a finished poll", async () => {
    const client = createMockClient(["open"]);
    const getProgressFn = vi.fn<GetProgressFn>().mockResolvedValue(finishedData);
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    // Monitor an OpenDoc request. The first poll is now in flight with a finished response.
    monitor.startMonitoringProgress("OpenDoc", 1);
    // Stop immediately, before the in-flight poll resolves. The old fire-and-forget code would
    // fire a second getProgressFn here, so both in-flight calls delivered the finished event.
    monitor.stopMonitoringProgress(1);
    await vi.advanceTimersByTimeAsync(pollingInterval);

    expect(getProgressFn).toHaveBeenCalledTimes(1);
    expect(eventsOfStatus(client, "finished")).toHaveLength(1);
  });

  it("ignores the bogus progress data returned for unknown request IDs", async () => {
    const client = createMockClient(["reload"]);
    const getProgressFn: GetProgressFn = vi.fn().mockResolvedValue(bogusData);
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(pollingInterval * 2);

    expect(getProgressFn).toHaveBeenCalled();
    expect(client.onProgress).not.toHaveBeenCalled();
  });

  it("stops monitoring when a progress poll rejects", async () => {
    const client = createMockClient(["reload"]);
    // A rejecting getProgressFn causes the awaited poll to throw, so the rejection flows through
    // pollUntilDone. It must be handled there rather than surfacing as an unhandled rejection.
    const getProgressFn = vi.fn<GetProgressFn>().mockRejectedValue(new Error("GetProgress failed"));
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);
    expect(getProgressFn).toHaveBeenCalledTimes(1);

    // The failed poll ends monitoring: no events, no reschedule, no unhandled rejection.
    await vi.advanceTimersByTimeAsync(pollingInterval * 5);
    expect(getProgressFn).toHaveBeenCalledTimes(1);
    expect(client.onProgress).not.toHaveBeenCalled();

    // The request has already been cleaned up, so stopping it afterwards is a harmless no-op.
    expect(() => monitor.stopMonitoringProgress(1)).not.toThrow();
  });

  it("finalizes an in-flight poll that resolves as finished after stop is called", async () => {
    const client = createMockClient(["reload"]);
    // Keep the first poll pending so we can stop the request while it is genuinely in flight.
    let resolvePoll: (data: ProgressData) => void = () => {};
    const getProgressFn = vi.fn<GetProgressFn>().mockImplementation(
      () =>
        new Promise<ProgressData>((resolve) => {
          resolvePoll = resolve;
        }),
    );
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);
    expect(getProgressFn).toHaveBeenCalledTimes(1);

    // Stop while the poll is in flight. There is no scheduled nextPoll to cancel, so stop must not
    // start a competing poll; the in-flight poll is expected to finalize the request instead.
    monitor.stopMonitoringProgress(1);
    expect(getProgressFn).toHaveBeenCalledTimes(1);

    // The in-flight poll now resolves as finished and must deliver exactly one finished event.
    resolvePoll(finishedData);
    await vi.advanceTimersByTimeAsync(0);
    expect(getProgressFn).toHaveBeenCalledTimes(1);
    expect(eventsOfStatus(client, "finished")).toHaveLength(1);

    // No further polling after the request has finalized.
    await vi.advanceTimersByTimeAsync(pollingInterval * 3);
    expect(getProgressFn).toHaveBeenCalledTimes(1);
  });

  it("does not start a competing poll when stop happens during an in-flight poll", async () => {
    const client = createMockClient(["reload"]);
    let resolvePoll: (data: ProgressData) => void = () => {};
    const getProgressFn = vi.fn<GetProgressFn>().mockImplementation(
      () =>
        new Promise<ProgressData>((resolve) => {
          resolvePoll = resolve;
        }),
    );
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);
    expect(getProgressFn).toHaveBeenCalledTimes(1);

    // Stopping while a poll is in flight must not fire a second, overlapping poll.
    monitor.stopMonitoringProgress(1);
    expect(getProgressFn).toHaveBeenCalledTimes(1);

    // The in-flight poll resolves with in-progress data and finalizes the request without rescheduling.
    resolvePoll(inProgressData);
    await vi.advanceTimersByTimeAsync(pollingInterval * 3);
    expect(getProgressFn).toHaveBeenCalledTimes(1);
  });

  it("ignores a duplicate startMonitoringProgress for an already-monitored request id", async () => {
    const client = createMockClient(["reload"]);
    const getProgressFn = vi.fn<GetProgressFn>().mockResolvedValue(inProgressData);
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    // The second call races with the first for the same request id and must be ignored, so only a
    // single poll chain runs.
    monitor.startMonitoringProgress("DoReload", 1);
    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);
    expect(getProgressFn).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(pollingInterval);
    expect(getProgressFn).toHaveBeenCalledTimes(2);

    // The synthetic started event is delivered exactly once despite the duplicate start.
    expect(eventsOfStatus(client, "started")).toHaveLength(1);
  });

  it("handles a request that finishes within one poll interval", async () => {
    const client = createMockClient(["reload"]);
    // The first poll races ahead of the engine: it fires before the request id is known and gets the
    // bogus "unknown request" response. By the next poll the request has already finished.
    const getProgressFn = vi.fn<GetProgressFn>().mockResolvedValueOnce(bogusData).mockResolvedValue(finishedData);
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);

    // The bogus first poll delivers nothing, so no started event has been emitted yet.
    expect(getProgressFn).toHaveBeenCalledTimes(1);
    expect(client.onProgress).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(pollingInterval);

    // The second poll sees the finished request and emits started + finished together, in that order.
    expect(getProgressFn).toHaveBeenCalledTimes(2);
    expect(eventsDeliveredTo(client).map((event) => event.status)).toEqual(["started", "finished"]);

    // Monitoring stops after the finished event; no further polling happens.
    await vi.advanceTimersByTimeAsync(pollingInterval * 3);
    expect(getProgressFn).toHaveBeenCalledTimes(2);
  });

  it("emits a terminal error event when a request is stopped with reason 'error'", async () => {
    const client = createMockClient(["reload"]);
    const getProgressFn = vi.fn<GetProgressFn>().mockResolvedValue(inProgressData);
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);
    expect(eventsOfStatus(client, "started")).toHaveLength(1);

    // The request itself failed; the listener must get a terminal `error` event, not another poll.
    const callsBeforeStop = vi.mocked(getProgressFn).mock.calls.length;
    monitor.stopMonitoringProgress(1, "error");
    await vi.advanceTimersByTimeAsync(0);

    expect(getProgressFn).toHaveBeenCalledTimes(callsBeforeStop);
    expect(eventsOfStatus(client, "error")).toHaveLength(1);
    expect(eventsDeliveredTo(client).at(-1)).toEqual({
      type: "reload",
      status: "error",
      persistent: [{ code: 20, parameters: ["MyApp"] }],
      errors: [],
    });

    // No further polling happens once the request has been terminated.
    await vi.advanceTimersByTimeAsync(pollingInterval * 3);
    expect(getProgressFn).toHaveBeenCalledTimes(callsBeforeStop);
  });

  it("surfaces a reload that finishes with a fatal error as an error terminal", async () => {
    const client = createMockClient(["reload"]);
    const getProgressFn = vi
      .fn<GetProgressFn>()
      .mockResolvedValueOnce(inProgressData)
      .mockResolvedValue({
        qStarted: true,
        qFinished: true,
        qMillisecs: 1000,
        qErrorData: [{ qErrorString: "Syntax error", qErrorDataCode: "EDC_ERROR", qLine: "LOAD garbage;" }],
      });
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);
    await vi.advanceTimersByTimeAsync(pollingInterval);

    // The finished-with-error response becomes an `error` terminal, never a `finished`.
    expect(eventsOfStatus(client, "finished")).toHaveLength(0);
    expect(eventsOfStatus(client, "error")).toHaveLength(1);
    expect(eventsDeliveredTo(client).at(-1)).toMatchObject({
      type: "reload",
      status: "error",
      errors: [{ message: "Syntax error", severity: "error", line: "LOAD garbage;" }],
    });
  });

  it("aborts every monitored request when stopped without a request id", async () => {
    const openClient = createMockClient(["open"]);
    const reloadClient = createMockClient(["reload"]);
    const getProgressFn = vi.fn<GetProgressFn>().mockResolvedValue(inProgressData);
    const monitor = createProgressMonitor([openClient, reloadClient]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("OpenDoc", 1);
    monitor.startMonitoringProgress("DoReload", 2);
    await vi.advanceTimersByTimeAsync(0);
    expect(eventsOfStatus(openClient, "started")).toHaveLength(1);
    expect(eventsOfStatus(reloadClient, "started")).toHaveLength(1);

    // A lost connection aborts all in-flight requests at once.
    monitor.stopMonitoringProgress(undefined, "aborted");

    expect(eventsOfStatus(openClient, "aborted")).toHaveLength(1);
    expect(eventsOfStatus(reloadClient, "aborted")).toHaveLength(1);

    // Nothing is polled or delivered after the abort.
    const callsAfterAbort = vi.mocked(getProgressFn).mock.calls.length;
    await vi.advanceTimersByTimeAsync(pollingInterval * 3);
    expect(getProgressFn).toHaveBeenCalledTimes(callsAfterAbort);
  });

  it("does not emit a terminal event for a request that never started", async () => {
    // No active clients, so the request is monitored but never polls or emits a started event.
    const client = createMockClient([]);
    const getProgressFn = vi.fn<GetProgressFn>().mockResolvedValue(inProgressData);
    const monitor = createProgressMonitor([client]);
    monitor.setGetProgressFn(getProgressFn);

    monitor.startMonitoringProgress("DoReload", 1);
    await vi.advanceTimersByTimeAsync(0);

    monitor.stopMonitoringProgress(1, "error");

    expect(client.onProgress).not.toHaveBeenCalled();
  });
});
