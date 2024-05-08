import { A as ApiCallOptions } from './global.types-Xt6XzwlN.js';
import './auth-types-Bqw3vbLs.js';

/**
 * An error object.
 */
type Error = {
    /** Object containing meta data regarding an error. It does not necessarily contain all the properties. */
    meta?: Meta;
    /** Optional JSON patch object pointing to an invalid property. */
    source?: unknown;
    /** The HTTP status code. */
    status?: number;
    /** Title of the HTTP status code. */
    title: string;
};
/**
 * Object containing meta data regarding an error. It does not necessarily contain all the properties.
 */
type Meta = {
    /** A more detailed message explaining the error. */
    message?: string;
    /** Name of the resource related to the error. If there is a conflict, it is the name of the model attempting to be created. */
    resourceName?: string;
    /** Full stack trace of the error that was raised. */
    stack?: string;
};
/**
 * The theme model.
 */
type Theme = {
    /** Author of the theme. */
    author?: string;
    readonly createdAt?: string;
    /** Map of dependencies describing version of the component it requires. */
    dependencies?: unknown;
    /** Description of the theme. */
    description?: string;
    /** The file that was uploaded with the theme. */
    file?: unknown;
    /** Home page of the theme. */
    homepage?: string;
    /** Icon to show in the client. */
    icon?: string;
    readonly id?: string;
    /** Keywords for the theme. */
    keywords?: string;
    /** Under which license this theme is published. */
    license?: string;
    /** The display name of this theme. */
    name?: string;
    /** The name of the qext file that was uploaded with this theme. */
    qextFilename?: string;
    /** The version from the qext file that was uploaded with this extension. */
    qextVersion?: string;
    /** Link to the theme source code. */
    repository?: string;
    /** Supplier of the theme. */
    supplier?: string;
    /** List of tags. */
    tags?: string[];
    readonly tenantId?: string;
    /** The type of this theme (visualization, etc.). */
    type?: string;
    readonly updateAt?: string;
    readonly userId?: string;
    /** Version of the theme. */
    version?: string;
};
type Themes = {
    data: Theme[];
};
/**
 * Lists all themes.
 *
 * @throws GetThemesHttpError
 */
declare const getThemes: (options?: ApiCallOptions) => Promise<GetThemesHttpResponse>;
type GetThemesHttpResponse = {
    data: Themes;
    headers: Headers;
    status: number;
};
type GetThemesHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Creates a new theme. If a file is provided, the data field is not required.
 *
 * @param body an object with the body content
 * @throws UploadThemeHttpError
 */
declare const uploadTheme: (body: {
    /** The theme model. */
    data?: Theme;
    /** Theme archive. */
    file?: BodyInit;
}, options?: ApiCallOptions) => Promise<UploadThemeHttpResponse>;
type UploadThemeHttpResponse = {
    data: Theme;
    headers: Headers;
    status: number;
};
type UploadThemeHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Deletes a specific theme.
 *
 * @param id Theme identifier or its qextFilename.
 * @throws DeleteThemeHttpError
 */
declare const deleteTheme: (id: string, options?: ApiCallOptions) => Promise<DeleteThemeHttpResponse>;
type DeleteThemeHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteThemeHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Returns a specific theme.
 *
 * @param id Theme identifier or its qextFilename
 * @throws GetThemeHttpError
 */
declare const getTheme: (id: string, options?: ApiCallOptions) => Promise<GetThemeHttpResponse>;
type GetThemeHttpResponse = {
    data: Theme;
    headers: Headers;
    status: number;
};
type GetThemeHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Updates a specific theme with provided data. If a file is provided, the data field is not required.
 *
 * @param id Theme identifier or its qextFilename.
 * @param body an object with the body content
 * @throws PatchThemeHttpError
 */
declare const patchTheme: (id: string, body: {
    /** The theme model. */
    data?: Theme;
    /** Theme archive. */
    file?: BodyInit;
}, options?: ApiCallOptions) => Promise<PatchThemeHttpResponse>;
type PatchThemeHttpResponse = {
    data: Themes;
    headers: Headers;
    status: number;
};
type PatchThemeHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Downloads the theme as an archive.
 *
 * @param id Theme identifier or its qextFilename
 * @throws DownloadThemeHttpError
 */
declare const downloadTheme: (id: string, options?: ApiCallOptions) => Promise<DownloadThemeHttpResponse>;
type DownloadThemeHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DownloadThemeHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Downloads a file from the theme archive.
 *
 * @param id Theme identifier or its qextFilename.
 * @param filepath Path to the file archive for the specified theme archive. Folders separated with forward slashes.
 * @throws DownloadFileFromThemeHttpError
 */
declare const downloadFileFromTheme: (id: string, filepath: string, options?: ApiCallOptions) => Promise<DownloadFileFromThemeHttpResponse>;
type DownloadFileFromThemeHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DownloadFileFromThemeHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for themes api requests.
 */
declare function clearCache(): void;
interface ThemesAPI {
    /**
     * Lists all themes.
     *
     * @throws GetThemesHttpError
     */
    getThemes: typeof getThemes;
    /**
     * Creates a new theme. If a file is provided, the data field is not required.
     *
     * @param body an object with the body content
     * @throws UploadThemeHttpError
     */
    uploadTheme: typeof uploadTheme;
    /**
     * Deletes a specific theme.
     *
     * @param id Theme identifier or its qextFilename.
     * @throws DeleteThemeHttpError
     */
    deleteTheme: typeof deleteTheme;
    /**
     * Returns a specific theme.
     *
     * @param id Theme identifier or its qextFilename
     * @throws GetThemeHttpError
     */
    getTheme: typeof getTheme;
    /**
     * Updates a specific theme with provided data. If a file is provided, the data field is not required.
     *
     * @param id Theme identifier or its qextFilename.
     * @param body an object with the body content
     * @throws PatchThemeHttpError
     */
    patchTheme: typeof patchTheme;
    /**
     * Downloads the theme as an archive.
     *
     * @param id Theme identifier or its qextFilename
     * @throws DownloadThemeHttpError
     */
    downloadTheme: typeof downloadTheme;
    /**
     * Downloads a file from the theme archive.
     *
     * @param id Theme identifier or its qextFilename.
     * @param filepath Path to the file archive for the specified theme archive. Folders separated with forward slashes.
     * @throws DownloadFileFromThemeHttpError
     */
    downloadFileFromTheme: typeof downloadFileFromTheme;
    /**
     * Clears the cache for themes api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the themes api
 */
declare const themesExport: ThemesAPI;

export { type DeleteThemeHttpError, type DeleteThemeHttpResponse, type DownloadFileFromThemeHttpError, type DownloadFileFromThemeHttpResponse, type DownloadThemeHttpError, type DownloadThemeHttpResponse, type Error, type GetThemeHttpError, type GetThemeHttpResponse, type GetThemesHttpError, type GetThemesHttpResponse, type Meta, type PatchThemeHttpError, type PatchThemeHttpResponse, type Theme, type Themes, type ThemesAPI, type UploadThemeHttpError, type UploadThemeHttpResponse, clearCache, themesExport as default, deleteTheme, downloadFileFromTheme, downloadTheme, getTheme, getThemes, patchTheme, uploadTheme };
