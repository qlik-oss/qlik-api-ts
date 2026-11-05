/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import { clearApiCache, invokeFetch, type ApiCallOptions } from "#public/invoke-fetch";

/* -------------------------------------------------------------------------- */
/*                                Public types                                */
/* -------------------------------------------------------------------------- */

/**
 * The possible states for the status of notes configuration GET or POST operation
 */
export type ConfigReasonCode = "deployment" | "toggle" | "license";

export type Error = {
  /** Error code specific to notes broker service. */
  readonly code?: string;
  /** Error cause. */
  readonly detail?: string;
  /** Error title. */
  readonly title?: string;
};

/**
 * @example
 * {
 *   errors: [
 *     {
 *       code: "HTTP-123",
 *       title: "short error message"
 *     }
 *   ],
 *   traceId: "7326ce0d-1946-41d0-b890-609865cc42ea"
 * }
 */
export type Errors = {
  errors?: Error[];
  /** An optional traceId */
  traceId?: string;
};

export type NoteSettingsPutPayload = {
  /** pass 'true' to enable the note toggle for the tenant, 'false' to disable the toggle (other values are ignore). */
  toggledOn?: boolean;
};

export type NoteSettingsPutResponse = {
  /** 'true' if the note feature is enabled for this tenant and user otherwise 'false'. */
  toggleOn?: boolean;
};

export type NotesUserSettings = {
  /** 'true' if the note feature is enabled for this tenant and user otherwise 'false'. */
  available: boolean;
  /** The timestamp for the last time this users notes settings were fetched from downstream services. */
  lastFetch?: string;
  /** The possible states for the status of notes configuration GET or POST operation */
  reason?: ConfigReasonCode;
};

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * @deprecated
 *
 * Get the enablement status of the notes feature set for this tenant and user.
 *
 * @throws GetNotesSettingsHttpError
 */
export async function getNotesSettings(options?: ApiCallOptions): Promise<GetNotesSettingsHttpResponse> {
  return invokeFetch("notes", {
    method: "get",
    pathTemplate: "/api/v1/notes/settings",
    options,
  });
}

export type GetNotesSettingsHttpResponse = {
  data: NotesUserSettings;
  headers: Headers;
  status: 200;
};

export type GetNotesSettingsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};

/**
 * @deprecated
 *
 * update the settings
 *
 * @param body an object with the body content
 * @throws SetNotesSettingsHttpError
 */
export async function setNotesSettings(
  body: NoteSettingsPutPayload,
  options?: ApiCallOptions,
): Promise<SetNotesSettingsHttpResponse> {
  return invokeFetch("notes", {
    method: "put",
    pathTemplate: "/api/v1/notes/settings",
    body,
    contentType: "application/json",
    options,
  });
}

export type SetNotesSettingsHttpResponse = {
  data: NoteSettingsPutResponse;
  headers: Headers;
  status: 200;
};

export type SetNotesSettingsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};

/**
 * Clears the cache for notes api requests.
 */
export function clearCache() {
  return clearApiCache("notes");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type NotesAPI = {
  /**
   * @deprecated
   *
   * Get the enablement status of the notes feature set for this tenant and user.
   *
   * @throws GetNotesSettingsHttpError
   */
  getNotesSettings: typeof getNotesSettings;
  /**
   * @deprecated
   *
   * update the settings
   *
   * @param body an object with the body content
   * @throws SetNotesSettingsHttpError
   */
  setNotesSettings: typeof setNotesSettings;
  /**
   * Clears the cache for notes api requests.
   */
  clearCache: typeof clearCache;
};

/**
 * Functions for the notes api
 */
const notesExport: NotesAPI = { getNotesSettings, setNotesSettings, clearCache };
export default notesExport;
