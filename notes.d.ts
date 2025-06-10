import { A as ApiCallOptions } from './invoke-fetch-types-X7m1IIvI.js';
import './auth-types-Btwi7CsB.js';

/**
 * The possible states for the status of notes configuration GET or POST operation
 */
type ConfigReasonCode = "deployment" | "toggle" | "license";
type Error = {
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
type Errors = {
    errors?: Error[];
    /** An optional traceId */
    traceId?: string;
};
type NoteSettingsPutPayload = {
    /** pass 'true' to enable the note toggle for the tenant, 'false' to disable the toggle (other values are ignore). */
    toggledOn?: boolean;
};
type NoteSettingsPutResponse = {
    /** 'true' if the note feature is enabled for this tenant and user otherwise 'false'. */
    toggleOn?: boolean;
};
type NotesUserSettings = {
    /** 'true' if the note feature is enabled for this tenant and user otherwise 'false'. */
    available: boolean;
    /** The timestamp for the last time this users notes settings were fetched from downstream services. */
    lastFetch?: string;
    /** The possible states for the status of notes configuration GET or POST operation */
    reason?: ConfigReasonCode;
};
/**
 * Get the enablement status of the notes feature set for this tenant and user.
 *
 * @throws GetNotesSettingsHttpError
 */
declare const getNotesSettings: (options?: ApiCallOptions) => Promise<GetNotesSettingsHttpResponse>;
type GetNotesSettingsHttpResponse = {
    data: NotesUserSettings;
    headers: Headers;
    status: 200;
};
type GetNotesSettingsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * update the settings
 *
 * @param body an object with the body content
 * @throws SetNotesSettingsHttpError
 */
declare const setNotesSettings: (body: NoteSettingsPutPayload, options?: ApiCallOptions) => Promise<SetNotesSettingsHttpResponse>;
type SetNotesSettingsHttpResponse = {
    data: NoteSettingsPutResponse;
    headers: Headers;
    status: 200;
};
type SetNotesSettingsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for notes api requests.
 */
declare function clearCache(): void;
interface NotesAPI {
    /**
     * Get the enablement status of the notes feature set for this tenant and user.
     *
     * @throws GetNotesSettingsHttpError
     */
    getNotesSettings: typeof getNotesSettings;
    /**
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
}
/**
 * Functions for the notes api
 */
declare const notesExport: NotesAPI;

export { type ConfigReasonCode, type Error, type Errors, type GetNotesSettingsHttpError, type GetNotesSettingsHttpResponse, type NoteSettingsPutPayload, type NoteSettingsPutResponse, type NotesAPI, type NotesUserSettings, type SetNotesSettingsHttpError, type SetNotesSettingsHttpResponse, clearCache, notesExport as default, getNotesSettings, setNotesSettings };
