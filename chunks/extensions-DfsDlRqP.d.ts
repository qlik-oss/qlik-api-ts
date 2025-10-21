import { y as ApiCallOptions } from "./auth-types-CMYVHKHt.js";

//#region src/public/rest/extensions.d.ts

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
 * Lists all imported extensions in the tenant.
 *
 * @throws GetExtensionsHttpError
 */
declare function getExtensions(options?: ApiCallOptions): Promise<GetExtensionsHttpResponse>;
type GetExtensionsHttpResponse = {
  data: Extensions;
  headers: Headers;
  status: 200;
};
type GetExtensionsHttpError = {
  data: unknown;
  headers: Headers;
  status: number;
};
/**
 * Creates a new extension. Accepts either provided file or data object. The name of the new extension must be different to any existing extensions.
 *
 * @param body an object with the body content
 * @throws UploadExtensionHttpError
 */
declare function uploadExtension(body: {
  /** The extension model. */
  data?: Extension;
  /** Extension archive. */
  file?: BodyInit;
}, options?: ApiCallOptions): Promise<UploadExtensionHttpResponse>;
type UploadExtensionHttpResponse = {
  data: Extension;
  headers: Headers;
  status: 201;
};
type UploadExtensionHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};
/**
 * Deletes a specific extension matching either extension ID or extension name.
 *
 * @param id Extension identifier or its qextFilename.
 * @throws DeleteExtensionHttpError
 */
declare function deleteExtension(id: string, options?: ApiCallOptions): Promise<DeleteExtensionHttpResponse>;
type DeleteExtensionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteExtensionHttpError = {
  data: Error;
  headers: Headers;
  status: 403 | 404 | 410;
};
/**
 * Returns a specific extension matching either extension ID or extension name.
 *
 * @param id Extension identifier or its qextFilename.
 * @throws GetExtensionHttpError
 */
declare function getExtension(id: string, options?: ApiCallOptions): Promise<GetExtensionHttpResponse>;
type GetExtensionHttpResponse = {
  data: Extension;
  headers: Headers;
  status: 200;
};
type GetExtensionHttpError = {
  data: Error;
  headers: Headers;
  status: 403 | 404 | 410;
};
/**
 * Updates a specific extension matching either extension ID or extension name. Accepts either provided file or data object.
 *
 * @param id Extension identifier or its qextFilename.
 * @param body an object with the body content
 * @throws PatchExtensionHttpError
 */
declare function patchExtension(id: string, body: {
  /** The extension model. */
  data?: Extension;
  /** Extension archive. */
  file?: BodyInit;
}, options?: ApiCallOptions): Promise<PatchExtensionHttpResponse>;
type PatchExtensionHttpResponse = {
  data: Extension;
  headers: Headers;
  status: 200;
};
type PatchExtensionHttpError = {
  data: Error;
  headers: Headers;
  status: number;
};
/**
 * Downloads all files in the extension matching either extension ID or extension name as a `.zip` archive.
 *
 * @param id Extension identifier or its qextFilename.
 * @throws DownloadExtensionHttpError
 */
declare function downloadExtension(id: string, options?: ApiCallOptions): Promise<DownloadExtensionHttpResponse>;
type DownloadExtensionHttpResponse = {
  data: void;
  headers: Headers;
  status: 200;
};
type DownloadExtensionHttpError = {
  data: Error;
  headers: Headers;
  status: 403 | 404 | 410;
};
/**
 * Downloads a specific file from the extension matching either extension ID or extension name, identified by the file path within the imported extension.
 *
 * @param id Extension identifier or its qextFilename.
 * @param filepath Path to the file location within the specified extension archive. Folders separated with forward slashes.
 * @throws DownloadFileFromExtensionHttpError
 */
declare function downloadFileFromExtension(id: string, filepath: string, options?: ApiCallOptions): Promise<DownloadFileFromExtensionHttpResponse>;
type DownloadFileFromExtensionHttpResponse = {
  data: void;
  headers: Headers;
  status: 200;
};
type DownloadFileFromExtensionHttpError = {
  data: Error;
  headers: Headers;
  status: 403 | 404 | 410;
};
/**
 * Clears the cache for extensions api requests.
 */
declare function clearCache(): void;
type ExtensionsAPI = {
  /**
   * Lists all imported extensions in the tenant.
   *
   * @throws GetExtensionsHttpError
   */
  getExtensions: typeof getExtensions;
  /**
   * Creates a new extension. Accepts either provided file or data object. The name of the new extension must be different to any existing extensions.
   *
   * @param body an object with the body content
   * @throws UploadExtensionHttpError
   */
  uploadExtension: typeof uploadExtension;
  /**
   * Deletes a specific extension matching either extension ID or extension name.
   *
   * @param id Extension identifier or its qextFilename.
   * @throws DeleteExtensionHttpError
   */
  deleteExtension: typeof deleteExtension;
  /**
   * Returns a specific extension matching either extension ID or extension name.
   *
   * @param id Extension identifier or its qextFilename.
   * @throws GetExtensionHttpError
   */
  getExtension: typeof getExtension;
  /**
   * Updates a specific extension matching either extension ID or extension name. Accepts either provided file or data object.
   *
   * @param id Extension identifier or its qextFilename.
   * @param body an object with the body content
   * @throws PatchExtensionHttpError
   */
  patchExtension: typeof patchExtension;
  /**
   * Downloads all files in the extension matching either extension ID or extension name as a `.zip` archive.
   *
   * @param id Extension identifier or its qextFilename.
   * @throws DownloadExtensionHttpError
   */
  downloadExtension: typeof downloadExtension;
  /**
   * Downloads a specific file from the extension matching either extension ID or extension name, identified by the file path within the imported extension.
   *
   * @param id Extension identifier or its qextFilename.
   * @param filepath Path to the file location within the specified extension archive. Folders separated with forward slashes.
   * @throws DownloadFileFromExtensionHttpError
   */
  downloadFileFromExtension: typeof downloadFileFromExtension;
  /**
   * Clears the cache for extensions api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the extensions api
 */
declare const extensionsExport: ExtensionsAPI;
//#endregion
export { downloadExtension as C, getExtensions as D, getExtension as E, patchExtension as O, deleteExtension as S, extensionsExport as T, PatchExtensionHttpError as _, DownloadExtensionHttpResponse as a, UploadExtensionHttpResponse as b, Error as c, ExtensionsAPI as d, GetExtensionHttpError as f, Meta as g, GetExtensionsHttpResponse as h, DownloadExtensionHttpError as i, uploadExtension as k, Extension as l, GetExtensionsHttpError as m, DeleteExtensionHttpError as n, DownloadFileFromExtensionHttpError as o, GetExtensionHttpResponse as p, DeleteExtensionHttpResponse as r, DownloadFileFromExtensionHttpResponse as s, BundleMeta as t, Extensions as u, PatchExtensionHttpResponse as v, downloadFileFromExtension as w, clearCache as x, UploadExtensionHttpError as y };