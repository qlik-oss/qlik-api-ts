export type ProgressType = "open" | "reload" | "save";

export type QixProgressErrorSeverity = "error" | "warning" | "circular";

export type QixProgressError = {
  /** Human-readable description of the problem (`qErrorString`). */
  message: string;
  severity: QixProgressErrorSeverity;
  /** The script statement the error refers to (`qLine`), when available. */
  line?: string;
};

/**
 * A single progress message from the engine with a message code and parameters.
 * The message code stands for what type of message it is and the parameters carry any
 * textual information. Usually, only the first parameter carries the message text.
 */
export type QixProgressMessage = {
  /**
   * What type of progress message it is.
   *
   * - `0` - EMPTY_MESSAGE: Plain message with no specific type; the text is carried in the parameters.
   * - `1` - PROGRESS_SAVING_STARTED: The app is being saved.
   * - `2` - PROGRESS_BYTES_LEFT: Bytes left to store for a column.
   * - `3` - PROGRESS_STORING_TABLES: A table is being stored.
   * - `4` - PROGRESS_QVD_ROWS_SO_FAR: Rows fetched so far from a QVD.
   * - `5` - PROGRESS_CONNECTED: A data source connection was established.
   * - `6` - PROGRESS_CONNECTING_TO: Connecting to a data source.
   * - `7` - PROGRESS_CONNECT_FAILED: A data source connection failed.
   * - `8` - PROGRESS_QVD_ROWISH: A row-based QVD load was optimized.
   * - `9` - PROGRESS_QVD_COLUMNAR: A columnar QVD load was optimized.
   * - `10` - ERROR: A script error occurred.
   * - `11` - DONE: The current step finished.
   * - `12` - LOAD_EXTERNAL_DATA: Loading external data.
   * - `13` - PROGRESS_OLD_QVD_ISLOADING: Loading an older QVD format.
   * - `14` - PROGRESS_QVC_LOADING: Loading a QVC file.
   * - `15` - PROGRESS_QVD_BUFFERED: A QVD was loaded from buffer.
   * - `16` - PROGRESS_QVC_PREPARING: Preparing a QVC load.
   * - `17` - PROGRESS_QVC_APPENDING: Appending a QVC load.
   * - `18` - REMOVE_SYNTHETIC: Removing a synthetic key.
   * - `19` - PENDING_LINKEDTABLE_FETCHING: Fetching linked tables.
   * - `20` - RELOAD: The reload is running.
   * - `21` - LINES_FETCHED: Number of lines fetched.
   * - `22` - SEARCHINDEX_START: Search index creation started.
   * - `23` - SEARCHINDEX_FIELD: A field is being indexed.
   * - `24` - SEARCHINDEX_SUCCESS: Search index created successfully.
   * - `25` - SEARCHINDEX_FAILURE: Search index creation failed.
   * - `26` - SEARCHINDEX_STARTABORT: Search index creation is being canceled.
   * - `27` - SEARCHINDEX_ENDABORT: Search index creation was canceled.
   * - `28` - SEARCHINDEX_TIMEOUT: Search index creation timed out.
   * - `29` - SEARCHINDEX_OUTOFMEMORY: Search index creation ran out of memory.
   * - `30` - ACCESS_DENIED_AFTER_RELOAD: Access was denied after the reload.
   * - `31` - MERGED_UPDATES: Rows updated by a Merge load.
   * - `32` - MERGED_INSERTS: Rows inserted by a Merge load.
   * - `33` - MERGED_DELETES : Rows deleted by a Merge load.
   */
  code: number;
  /**
   * Values to substitute into the localized message. The first parameter holds the message's dynamic
   * text (a table name, row count, connection, error string, etc.); any further parameters are
   * additional substitutions. Always present; defaults to `[""]`.
   */
  parameters: string[];
};

type QixProgressEventBase = {
  /** Which long-running operation this event describes. */
  type: ProgressType;
};

/**
 * A cleaned-up, synthetic progress event derived from the engine's raw `GetProgress` responses.
 *
 * The lifecycle is `started` -> `progress` (zero or more) -> a terminal event, one of:
 * - `finished`: the operation completed successfully.
 * - `error`: the operation ran but ended in an error the user should examine (a failed reload).
 * - `aborted`: the operation was interrupted, e.g. the websocket connection was lost.
 *
 * `persistent` is the accumulated log of completed steps (oldest first) and `transient` is the
 * message that is currently changing. A typical display shows every `persistent` message followed
 * by the `transient` one when it differs from the last persistent message.
 */
export type QixProgressEvent =
  | (QixProgressEventBase & { status: "started" })
  | (QixProgressEventBase & {
      status: "progress";
      /** Log of completed steps accumulated across the whole request, oldest first (`qPersistentProgressMessages`). */
      persistent: QixProgressMessage[];
      /** What is happening right now; replaced on every event (`qTransientProgressMessage`). */
      transient: QixProgressMessage;
      /** Errors and warnings discovered so far. */
      errors: QixProgressError[];
      /** True while the engine is paused waiting for a debug-mode user interaction (`qUserInteractionWanted`). */
      awaitingUserInteraction: boolean;
    })
  | (QixProgressEventBase & {
      status: "finished";
      /** Total time the request took, in milliseconds (`qMillisecs`). */
      durationMs: number;
      /** Full log of completed steps, oldest first. */
      persistent: QixProgressMessage[];
      /** Any warnings reported during the request. */
      errors: QixProgressError[];
    })
  | (QixProgressEventBase & {
      status: "error";
      /** Log of completed steps recorded before the request failed, oldest first. */
      persistent: QixProgressMessage[];
      /** Errors and warnings reported for the failed request. */
      errors: QixProgressError[];
    })
  | (QixProgressEventBase & {
      status: "aborted";
      /** Log of completed steps recorded before the request was interrupted, oldest first. */
      persistent: QixProgressMessage[];
      /** Errors and warnings reported before the request was interrupted. */
      errors: QixProgressError[];
    });

export type ProgressListener = (event: QixProgressEvent) => void;
