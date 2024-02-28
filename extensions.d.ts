import { A as ApiCallOptions } from './global.types-oglBSD7D.js';
import './auth-types-nnUcWhuU.js';

/**
 * Object containing meta data regarding the bundle the extension belongs to. If it does not belong to a bundle, this object is not defined.
 */
type BundleMeta = {
    /** Description of the bundle. */
    description?: string;
    /** Unique identifier of the bundle. */
    id?: string;
    /** Name of the bundle. */
    name?: string;
};
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
 * The extension model.
 */
type Extension = {
    /** Author of the extension. */
    author?: string;
    /** Object containing meta data regarding the bundle the extension belongs to. If it does not belong to a bundle, this object is not defined. */
    bundle?: BundleMeta;
    /** If the extension is part of an extension bundle. */
    bundled?: boolean;
    /** Checksum of the extension contents. */
    checksum?: string;
    readonly createdAt?: string;
    /** Map of dependencies describing version of the component it requires. */
    dependencies?: unknown;
    /** A date noting when the extension was deprecated. */
    deprecated?: string;
    /** Description of the extension. */
    description?: string;
    /** The file that was uploaded with the extension. */
    file?: unknown;
    /** Home page of the extension. */
    homepage?: string;
    /** Icon to show in the client. */
    icon?: string;
    readonly id?: string;
    /** Keywords for the extension. */
    keywords?: string;
    /** Under which license this extension is published. */
    license?: string;
    /** Relative path to the extension's entry file, defaults to `filename` from the qext file. */
    loadpath?: string;
    /** The display name of this extension. */
    name?: string;
    /** Path to an image that enables users to preview the extension. */
    preview?: string;
    /** The name of the qext file that was uploaded with this extension. */
    qextFilename?: string;
    /** The version from the qext file that was uploaded with this extension. */
    qextVersion?: string;
    /** Link to the extension source code. */
    repository?: string;
    /** If the extension is a supernova extension or not. */
    supernova?: boolean;
    /** Supplier of the extension. */
    supplier?: string;
    /** List of tags. */
    tags?: string[];
    readonly tenantId?: string;
    /** The type of this extension (visualization, etc.). */
    type?: string;
    readonly updateAt?: string;
    readonly userId?: string;
    /** Version of the extension. */
    version?: string;
};
type Extensions = {
    data: Extension[];
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
 * Lists all extensions.
 *
 * @throws GetExtensionsHttpError
 */
declare const getExtensions: (options?: ApiCallOptions) => Promise<GetExtensionsHttpResponse>;
type GetExtensionsHttpResponse = {
    data: Extensions;
    headers: Headers;
    status: number;
};
type GetExtensionsHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Creates a new extension. If a file is provided, the data field is not required.
 *
 * @param body an object with the body content
 * @throws UploadExtensionHttpError
 */
declare const uploadExtension: (body: {
    /** The extension model. */
    data?: Extension;
    /** Extension archive. */
    file?: BodyInit;
}, options?: ApiCallOptions) => Promise<UploadExtensionHttpResponse>;
type UploadExtensionHttpResponse = {
    data: Extension;
    headers: Headers;
    status: number;
};
type UploadExtensionHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Deletes a specific extension.
 *
 * @param id Extension identifier or its qextFilename.
 * @throws DeleteExtensionHttpError
 */
declare const deleteExtension: (id: string, options?: ApiCallOptions) => Promise<DeleteExtensionHttpResponse>;
type DeleteExtensionHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteExtensionHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Returns a specific extension.
 *
 * @param id Extension identifier or its qextFilename.
 * @throws GetExtensionHttpError
 */
declare const getExtension: (id: string, options?: ApiCallOptions) => Promise<GetExtensionHttpResponse>;
type GetExtensionHttpResponse = {
    data: Extension;
    headers: Headers;
    status: number;
};
type GetExtensionHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Updates a specific extension with provided data. If a file is provided, the data field is not required.
 *
 * @param id Extension identifier or its qextFilename.
 * @param body an object with the body content
 * @throws PatchExtensionHttpError
 */
declare const patchExtension: (id: string, body: {
    /** The extension model. */
    data?: Extension;
    /** Extension archive. */
    file?: BodyInit;
}, options?: ApiCallOptions) => Promise<PatchExtensionHttpResponse>;
type PatchExtensionHttpResponse = {
    data: Extension;
    headers: Headers;
    status: number;
};
type PatchExtensionHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Downloads the extension as an archive.
 *
 * @param id Extension identifier or its qextFilename.
 * @throws DownloadExtensionHttpError
 */
declare const downloadExtension: (id: string, options?: ApiCallOptions) => Promise<DownloadExtensionHttpResponse>;
type DownloadExtensionHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DownloadExtensionHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Downloads a file from the extension archive.
 *
 * @param id Extension identifier or its qextFilename.
 * @param filepath Path to the file archive for the specified extension archive. Folders separated with forward slashes.
 * @throws DownloadFileFromExtensionHttpError
 */
declare const downloadFileFromExtension: (id: string, filepath: string, options?: ApiCallOptions) => Promise<DownloadFileFromExtensionHttpResponse>;
type DownloadFileFromExtensionHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DownloadFileFromExtensionHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for extensions api requests.
 */
declare function clearCache(): void;
interface ExtensionsAPI {
    /**
     * Lists all extensions.
     *
     * @throws GetExtensionsHttpError
     */
    getExtensions: typeof getExtensions;
    /**
     * Creates a new extension. If a file is provided, the data field is not required.
     *
     * @param body an object with the body content
     * @throws UploadExtensionHttpError
     */
    uploadExtension: typeof uploadExtension;
    /**
     * Deletes a specific extension.
     *
     * @param id Extension identifier or its qextFilename.
     * @throws DeleteExtensionHttpError
     */
    deleteExtension: typeof deleteExtension;
    /**
     * Returns a specific extension.
     *
     * @param id Extension identifier or its qextFilename.
     * @throws GetExtensionHttpError
     */
    getExtension: typeof getExtension;
    /**
     * Updates a specific extension with provided data. If a file is provided, the data field is not required.
     *
     * @param id Extension identifier or its qextFilename.
     * @param body an object with the body content
     * @throws PatchExtensionHttpError
     */
    patchExtension: typeof patchExtension;
    /**
     * Downloads the extension as an archive.
     *
     * @param id Extension identifier or its qextFilename.
     * @throws DownloadExtensionHttpError
     */
    downloadExtension: typeof downloadExtension;
    /**
     * Downloads a file from the extension archive.
     *
     * @param id Extension identifier or its qextFilename.
     * @param filepath Path to the file archive for the specified extension archive. Folders separated with forward slashes.
     * @throws DownloadFileFromExtensionHttpError
     */
    downloadFileFromExtension: typeof downloadFileFromExtension;
    /**
     * Clears the cache for extensions api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the extensions api
 */
declare const extensionsExport: ExtensionsAPI;

export { type BundleMeta, type DeleteExtensionHttpError, type DeleteExtensionHttpResponse, type DownloadExtensionHttpError, type DownloadExtensionHttpResponse, type DownloadFileFromExtensionHttpError, type DownloadFileFromExtensionHttpResponse, type Error, type Extension, type Extensions, type ExtensionsAPI, type GetExtensionHttpError, type GetExtensionHttpResponse, type GetExtensionsHttpError, type GetExtensionsHttpResponse, type Meta, type PatchExtensionHttpError, type PatchExtensionHttpResponse, type UploadExtensionHttpError, type UploadExtensionHttpResponse, clearCache, extensionsExport as default, deleteExtension, downloadExtension, downloadFileFromExtension, getExtension, getExtensions, patchExtension, uploadExtension };
