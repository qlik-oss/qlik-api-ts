import { A as ApiCallOptions } from './invoke-fetch-types-BXn-uSF5.js';
import './auth-types-PkN9CAF_.js';

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
 * Lists all imported themes in the tenant.
 *
 * @throws GetThemesHttpError
 */
declare const getThemes: (options?: ApiCallOptions) => Promise<GetThemesHttpResponse>;
type GetThemesHttpResponse = {
    data: Themes;
    headers: Headers;
    status: 200;
};
type GetThemesHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Creates a new theme. Accepts either provided file or data object. The name of the new theme must be different to any existing themes.
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
    status: 201;
};
type UploadThemeHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Deletes a specific theme matching either theme ID or theme name.
 *
 * @param id Theme identifier or its qextFilename.
 * @throws DeleteThemeHttpError
 */
declare const deleteTheme: (id: string, options?: ApiCallOptions) => Promise<DeleteThemeHttpResponse>;
type DeleteThemeHttpResponse = {
    data: void;
    headers: Headers;
    status: 204;
};
type DeleteThemeHttpError = {
    data: Error;
    headers: Headers;
    status: 403 | 404 | 410;
};
/**
 * Returns a specific theme matching either theme ID or theme name.
 *
 * @param id Theme identifier or its qextFilename
 * @throws GetThemeHttpError
 */
declare const getTheme: (id: string, options?: ApiCallOptions) => Promise<GetThemeHttpResponse>;
type GetThemeHttpResponse = {
    data: Theme;
    headers: Headers;
    status: 200;
};
type GetThemeHttpError = {
    data: Error;
    headers: Headers;
    status: 403 | 404 | 410;
};
/**
 * Updates a specific theme matching either theme ID or theme name. Accepts either provided file or data object.
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
    status: 200;
};
type PatchThemeHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Downloads all files in the theme matching either theme ID or theme name as a `.zip` archive.
 *
 * @param id Theme identifier or its qextFilename
 * @throws DownloadThemeHttpError
 */
declare const downloadTheme: (id: string, options?: ApiCallOptions) => Promise<DownloadThemeHttpResponse>;
type DownloadThemeHttpResponse = {
    data: void;
    headers: Headers;
    status: 200;
};
type DownloadThemeHttpError = {
    data: Error;
    headers: Headers;
    status: 403 | 404 | 410;
};
/**
 * Downloads a file from the theme matching either theme ID or theme name, identified by the file path within the imported extension.
 *
 * @param id Theme identifier or its qextFilename.
 * @param filepath Path to the file location within the specified theme archive. Folders separated with forward slashes.
 * @throws DownloadFileFromThemeHttpError
 */
declare const downloadFileFromTheme: (id: string, filepath: string, options?: ApiCallOptions) => Promise<DownloadFileFromThemeHttpResponse>;
type DownloadFileFromThemeHttpResponse = {
    data: void;
    headers: Headers;
    status: 200;
};
type DownloadFileFromThemeHttpError = {
    data: Error;
    headers: Headers;
    status: 403 | 404 | 410;
};
/**
 * Clears the cache for themes api requests.
 */
declare function clearCache(): void;
interface ThemesAPI {
    /**
     * Lists all imported themes in the tenant.
     *
     * @throws GetThemesHttpError
     */
    getThemes: typeof getThemes;
    /**
     * Creates a new theme. Accepts either provided file or data object. The name of the new theme must be different to any existing themes.
     *
     * @param body an object with the body content
     * @throws UploadThemeHttpError
     */
    uploadTheme: typeof uploadTheme;
    /**
     * Deletes a specific theme matching either theme ID or theme name.
     *
     * @param id Theme identifier or its qextFilename.
     * @throws DeleteThemeHttpError
     */
    deleteTheme: typeof deleteTheme;
    /**
     * Returns a specific theme matching either theme ID or theme name.
     *
     * @param id Theme identifier or its qextFilename
     * @throws GetThemeHttpError
     */
    getTheme: typeof getTheme;
    /**
     * Updates a specific theme matching either theme ID or theme name. Accepts either provided file or data object.
     *
     * @param id Theme identifier or its qextFilename.
     * @param body an object with the body content
     * @throws PatchThemeHttpError
     */
    patchTheme: typeof patchTheme;
    /**
     * Downloads all files in the theme matching either theme ID or theme name as a `.zip` archive.
     *
     * @param id Theme identifier or its qextFilename
     * @throws DownloadThemeHttpError
     */
    downloadTheme: typeof downloadTheme;
    /**
     * Downloads a file from the theme matching either theme ID or theme name, identified by the file path within the imported extension.
     *
     * @param id Theme identifier or its qextFilename.
     * @param filepath Path to the file location within the specified theme archive. Folders separated with forward slashes.
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
