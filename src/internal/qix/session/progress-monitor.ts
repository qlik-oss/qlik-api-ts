import type { ErrorData, ProgressData, ProgressMessage } from "../qix-types";
import type { Client } from "../shared-sessions-manager";
import type { ProgressType, QixProgressError, QixProgressEvent, QixProgressMessage } from "../types/progress";

/** Why monitoring of a request stopped, which controls the terminal event delivered to listeners. */
export type StopMonitoringReason = "done" | "error" | "aborted";

export type ProgressMonitor = {
  startMonitoringProgress: (method: string, requestId: number) => void;
  /**
   * Ends monitoring of a request, or of every in-flight request when `requestId` is omitted.
   * `done` (the default) fetches the final `finished` event, while `error` (the request failed)
   * and `aborted` (the connection was lost) deliver an `aborted` event without another poll.
   */
  stopMonitoringProgress: (requestId?: number, reason?: StopMonitoringReason) => void;
  setGetProgressFn: (fn: GetProgressFn) => void;
};

export type GetProgressFn = (requestId: number) => Promise<ProgressData>;

/**
 * @private
 * Exported for testing.
 */
export const pollingInterval = 300;

function methodToProgressType(method: string): ProgressType | undefined {
  switch (method) {
    case "OpenDoc":
      return "open";
    case "DoReload":
    case "DoReloadEx":
      return "reload";
    case "DoSave":
      return "save";
    default:
      return undefined;
  }
}

function toSeverity(code: ErrorData["qErrorDataCode"]): QixProgressError["severity"] {
  if (code === "EDC_WARNING") {
    return "warning";
  }
  if (code === "EDC_CIRCULAR_REFERENCE") {
    return "circular";
  }
  return "error";
}

function mapErrors(errorData: ErrorData[] | undefined): QixProgressError[] {
  return (errorData ?? []).map((error) => ({
    message: error.qErrorString ?? "",
    severity: toSeverity(error.qErrorDataCode),
    ...(error.qLine ? { line: error.qLine } : {}),
  }));
}

function sameError(a: QixProgressError, b: QixProgressError): boolean {
  return a.message === b.message && a.severity === b.severity && a.line === b.line;
}

// The engine leaves the code and parameters optional; the exposed message always has both.
function toProgressMessage(message: ProgressMessage | undefined): QixProgressMessage {
  return {
    code: message?.qMessageCode ?? 0,
    parameters: message?.qMessageParameters ?? [""],
  };
}

/**
 * Checks if the ProgressData matches the response you get from getProgress on an unknown request ID.
 * The "default" (or "bogus") data (at the time of writing) is:
 * ```json
 * {
      "qStarted": true,
      "qFinished": true,
      "qCompleted": 0,
      "qTotal": 0,
      "qKB": 0,
      "qMillisecs": 0,
      "qErrorData": [],
      "qPersistentProgressMessages": [],
      "qTransientProgressMessage": {
        "qMessageCode": 0,
        "qMessageParameters": [
          ""
        ]
      }
    } 
 * ```
 */
function isBogusProgressData(data: ProgressData): boolean {
  return (
    data.qCompleted === 0 &&
    data.qTotal === 0 &&
    data.qFinished === true &&
    (data.qPersistentProgressMessages?.length ?? 0) === 0 &&
    (data.qErrorData?.length ?? 0) === 0 &&
    data?.qTransientProgressMessage?.qMessageParameters?.join("") === ""
  );
}

type RequestState = {
  progressType: ProgressType;
  /** Set once `stopMonitoringProgress` has been called. */
  done: boolean;
  /** Set once the engine has reported `qFinished`. */
  finished: boolean;
  /** Set once the synthetic `started` event has been emitted. */
  started: boolean;
  /** Accumulated log of completed steps across the whole request. */
  persistent: QixProgressMessage[];
  /** Errors and warnings discovered so far, deduped. */
  errors: QixProgressError[];
  nextPoll?: NodeJS.Timeout;
};

/**
 * RequestID - check if we should poll with getProgress = active
 *
 * If active, poll one last time on stop, i.e. do one getProgress call.
 * If inactive, don't poll.
 *
 * If request is not done - poll again.
 *
 */

export function createProgressMonitor(clients: Array<Client>): ProgressMonitor {
  let getProgressFn: GetProgressFn | undefined;
  const monitoredRequests: Record<number, RequestState> = {};

  // Fetches progress once and delivers synthetic events to the currently active clients.
  // Awaiting here (rather than the previous fire-and-forget `.then`) means a request
  // is only ever polled one at a time, so `finished` can never be reported twice.
  const poll = async (requestId: number, state: RequestState): Promise<void> => {
    if (!getProgressFn || state.finished) {
      return;
    }
    const activeClients = clients.filter((client) => client.hasProgressListener(state.progressType));
    if (activeClients.length === 0) {
      return;
    }
    const data = await getProgressFn(requestId);
    // The request may have been stopped, replaced, or finished while we awaited.
    if (monitoredRequests[requestId] !== state || state.finished) {
      return;
    }
    // For some reason, if we try to get progress of an unknown request ID (before the request
    // was made) we get a bogus response. This is unfortunately quite similar to regular
    // responses, hence the helper function below.
    if (isBogusProgressData(data)) {
      return;
    }
    // Persistent messages are a delta of newly-completed steps, so accumulate them into the log.
    for (const message of data.qPersistentProgressMessages ?? []) {
      state.persistent.push(toProgressMessage(message));
    }
    // Errors may be reported cumulatively or as a delta, so dedupe as they arrive.
    for (const error of mapErrors(data.qErrorData)) {
      if (!state.errors.some((existing) => sameError(existing, error))) {
        state.errors.push(error);
      }
    }

    const events: QixProgressEvent[] = [];
    if (!state.started) {
      state.started = true;
      events.push({ type: state.progressType, status: "started" });
    }
    if (data.qFinished) {
      state.finished = true;
      // A completed request that recorded a fatal (non-warning) error is surfaced as `error` so
      // monitoring can tell "finished OK" apart from "ran but failed".
      if (state.errors.some((error) => error.severity === "error")) {
        events.push({
          type: state.progressType,
          status: "error",
          persistent: [...state.persistent],
          errors: [...state.errors],
        });
      } else {
        events.push({
          type: state.progressType,
          status: "finished",
          durationMs: data.qMillisecs ?? 0,
          persistent: [...state.persistent],
          errors: [...state.errors],
        });
      }
    } else {
      events.push({
        type: state.progressType,
        status: "progress",
        persistent: [...state.persistent],
        transient: toProgressMessage(data.qTransientProgressMessage),
        errors: [...state.errors],
        awaitingUserInteraction: data.qUserInteractionWanted ?? false,
      });
    }

    for (const client of activeClients) {
      for (const event of events) {
        client.onProgress(event);
      }
    }
  };

  // Polls once and reschedules itself until the request is finished or stopped.
  const pollUntilDone = async (requestId: number, state: RequestState): Promise<void> => {
    try {
      await poll(requestId, state);
    } catch {
      // A rejected progress poll (e.g. the engine rejected GetProgress) ends monitoring for this
      // request instead of leaving an unhandled rejection or looping on the same error.
      if (monitoredRequests[requestId] === state) {
        delete monitoredRequests[requestId];
      }
      return;
    }
    if (monitoredRequests[requestId] !== state) {
      return;
    }
    if (state.finished || state.done) {
      delete monitoredRequests[requestId];
      return;
    }
    state.nextPoll = setTimeout(() => {
      state.nextPoll = undefined;
      void pollUntilDone(requestId, state);
    }, pollingInterval);
  };

  return {
    startMonitoringProgress(method, requestId) {
      const progressType = methodToProgressType(method);
      if (!progressType || requestId in monitoredRequests) {
        return;
      }
      const state: RequestState = {
        progressType,
        done: false,
        finished: false,
        started: false,
        persistent: [],
        errors: [],
      };
      monitoredRequests[requestId] = state;
      void pollUntilDone(requestId, state);
    },
    stopMonitoringProgress(requestId, reason = "done") {
      const requestIds = requestId === undefined ? Object.keys(monitoredRequests).map(Number) : [requestId];
      for (const id of requestIds) {
        const state = monitoredRequests[id];
        if (!state) {
          continue;
        }
        if (reason === "done") {
          state.done = true;
          // A pending `nextPoll` means no poll is in flight, so cancel it and run the final poll now.
          // Otherwise a poll is already in flight and will finalize the request when it resolves.
          if (state.nextPoll) {
            clearTimeout(state.nextPoll);
            state.nextPoll = undefined;
            void pollUntilDone(id, state);
          }
          continue;
        }
        // `error` (the request itself failed) and `aborted` (the connection was lost) are final
        // states that can never reach a clean `finished`, so terminate without another poll.
        if (state.nextPoll) {
          clearTimeout(state.nextPoll);
          state.nextPoll = undefined;
        }
        // Mark finished so any in-flight poll that resolves later is ignored.
        state.finished = true;
        delete monitoredRequests[id];
        // Only started requests have a lifecycle to terminate for the listener.
        if (!state.started) {
          continue;
        }
        // `error` = the request itself failed (examine it); `aborted` = a transient interrupt.
        const terminalEvent: QixProgressEvent =
          reason === "error"
            ? {
                type: state.progressType,
                status: "error",
                persistent: [...state.persistent],
                errors: [...state.errors],
              }
            : {
                type: state.progressType,
                status: "aborted",
                persistent: [...state.persistent],
                errors: [...state.errors],
              };
        const activeClients = clients.filter((client) => client.hasProgressListener(state.progressType));
        for (const client of activeClients) {
          client.onProgress(terminalEvent);
        }
      }
    },
    setGetProgressFn(fn) {
      getProgressFn = fn;
    },
  };
}
