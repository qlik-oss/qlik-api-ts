import { x as ApiCallOptions } from "../chunks/auth-types-yKuw6LLB.js";
import "../chunks/invoke-fetch-DdmiOIkr.js";
declare namespace semantic_types_d_exports {
  export { ConflictResolution, DiffEntry, Error, ErrorResponse, ExportCompoundChild, ExportRequest, ExportSemanticType, ExportSemanticTypeCompound, ExportSemanticTypesHttpError, ExportSemanticTypesHttpResponse, ImportConfigDiff, ImportConflictResponse, ImportItemError, ImportReport, ImportRequest, ImportSemanticTypes200HttpResponse, ImportSemanticTypes201HttpResponse, ImportSemanticTypesHttpError, ImportSemanticTypesHttpResponse, ImportStatusDetail, ImportStatusItem, ImportSummary, ImportTypeDiff, ImportTypeStatus, SemanticTypeDictionary, SemanticTypeRegex, SemanticTypesAPI, SemanticTypesExportEnvelope, clearCache, semanticTypesExport as default, exportSemanticTypes, importSemanticTypes };
}
/**
 * Resolution decision for a single conflicting semantic type.
 */
export type ConflictResolution = {
  /** Label of the conflicting semantic type. */
  label: string;
  /** `OVERWRITE`: replace the existing type with the version from the file. `SKIP`: keep the existing type unchanged, do not import. `KEEP_BOTH`: keep the existing type and create the version from the file with a deduplicated label. */
  strategy: "OVERWRITE" | "SKIP" | "KEEP_BOTH";
};
/**
 * A single field difference between the file value and the existing type.
 */
export type DiffEntry = {
  /** Value currently in the tenant. */
  existing: unknown;
  /** Value from the import file. */
  fromFile: unknown;
};
export type Error = {
  code?: string;
  detail?: string;
  status?: string;
  title?: string;
};
export type ErrorResponse = {
  errors?: Error[];
  traceId?: string;
};
/**
 * Reference to a child type in a COMPOUND export. Contains resolution info (label + parentId) instead of a tenant-specific ID.
 */
export type ExportCompoundChild = {
  /** Label of the child type. Primary resolution key at import time. The importer resolves children using a three-step cascade: first against types created earlier in the same import batch (by label), then against existing types in the target tenant (by label), and finally by `parentId` fallback. */
  label: string;
  /** Identifier of the child's parent default semantic type (Qlik-provisioned). Null for user-created children. Used as a fallback resolution key at import time: when the child's label does not match any type in the target tenant (e.g. because it was renamed after export), the importer looks up a type whose own `parentId` matches this value. If a child cannot be resolved by either label or `parentId`, the entire COMPOUND type is rejected with `IMPORT_COMPOUND_CHILDREN_NOT_FOUND`. Only that COMPOUND type is affected; the rest of the import proceeds normally (best-effort). */
  parentId?: string;
};
/**
 * Request body for exporting semantic types with optional filters.
 */
export type ExportRequest = {
  /** Filter by creator user ID. When provided, only types created by this user are included. */
  createdBy?: string;
  /** List of semantic type IDs to export. When provided, only these types are included. */
  ids?: string[];
  /** Case-insensitive substring search on label and description fields. Returns only semantic types where the label or description contains the search term. Special regex characters are automatically escaped for literal matching. Maximum length: 500 characters. Empty string returns no results. */
  search?: string;
  /** Filter by semantic type categories. Supports multiple values for OR logic. When provided, only types matching the specified categories are included. */
  types?: ("REGEX" | "DICTIONARY" | "COMPOUND")[];
};
/**
 * A semantic type in the export file, stripped of internal fields.
 */
export type ExportSemanticType = {
  activated: boolean;
  config: SemanticTypeRegex | SemanticTypeDictionary | ExportSemanticTypeCompound;
  /** Identifier of the parent default semantic type (Qlik-provisioned). Null for user-created types. Used for identity preservation during cross-tenant import and as fallback for COMPOUND children resolution when labels differ across tenants. */
  defaultId?: string;
  description?: string;
  label: string;
  type: "REGEX" | "DICTIONARY" | "COMPOUND";
  useForValidation: boolean;
};
/**
 * COMPOUND config in the export file. Children are represented as enriched references with label and parentId for cross-tenant resolution, instead of raw IDs which are tenant-specific.
 */
export type ExportSemanticTypeCompound = {
  children: ExportCompoundChild[];
};
/**
 * Type-specific config differences. Only the fields relevant to the type's category are present (REGEX → validationContent/validationPattern, DICTIONARY → validationCriteria/values, COMPOUND → children), and only when they differ.
 */
export type ImportConfigDiff = {
  /** A single field difference between the file value and the existing type. */
  children?: DiffEntry;
  /** A single field difference between the file value and the existing type. */
  validationContent?: DiffEntry;
  /** A single field difference between the file value and the existing type. */
  validationCriteria?: DiffEntry;
  /** A single field difference between the file value and the existing type. */
  validationPattern?: DiffEntry;
  /** A single field difference between the file value and the existing type. */
  values?: DiffEntry;
};
/**
 * Returned when conflicts are detected and no resolutions were provided. Contains ALL types from the import file, each with a status indicating whether it is new or conflicts with an existing type.
 */
export type ImportConflictResponse = {
  code: string;
  message: string;
  /** Every type from the import file with its status. `CONFLICT` types include a `diff` showing field-level differences. `ERROR` types include an `error` message describing the validation failure. `DUPLICATE` types are either repeated labels within the same file, or types whose definition is identical to one already in the tenant (auto-skipped, no conflict resolution needed). */
  types: ImportTypeStatus[];
};
/**
 * Error detail for a single semantic type that could not be imported.
 */
export type ImportItemError = {
  /** Application error code identifying the failure reason. */
  code: string;
  /** Label of the semantic type that failed. */
  label: string;
  /** Human-readable error description in English. */
  message: string;
};
/**
 * Result of a best-effort import operation.
 */
export type ImportReport = {
  errors: ImportItemError[];
  /** Aggregate counts and per-status label details for the import result. Each status group includes a count and the list of affected type labels. */
  summary: ImportSummary;
};
/**
 * Import request wrapping the export file and optional conflict resolutions.
 */
export type ImportRequest = {
  /** Per-type conflict resolution. Each entry maps a conflicting label to its strategy. Labels not listed fall back to `defaultConflictStrategy`. Omit entirely (or send `null`) on the first call to trigger conflict detection. Sending an array — even an empty one — applies the import, using `defaultConflictStrategy` for every conflict not listed. */
  conflictResolutions?: ConflictResolution[] | null;
  /** Fallback strategy applied to conflicting types not listed in `conflictResolutions`. Defaults to `SKIP`. */
  defaultConflictStrategy?: "OVERWRITE" | "SKIP" | "KEEP_BOTH";
  /** The export file payload as-is. Format is detected from the `exportFormat` field. Accepts `QlikSemanticTypesExport` (Qlik native) or `DQDictionaryImportExport` (Talend legacy). */
  file: unknown;
  /** Controls preview vs. one-shot import when no `conflictResolutions` are supplied. When `false` (default) the call is a **preview**: the file is analysed and a per-type conflict/summary body is returned (HTTP 200) without importing anything. When `true` the import is attempted **one-shot**: if real conflicts or in-file duplicates exist the conflict body is returned (HTTP 200) and nothing is imported; otherwise all types are imported (HTTP 201). Ignored when `conflictResolutions` are provided (those always apply the import). */
  skipConfirmation?: boolean;
};
/**
 * Count and affected types for one import outcome.
 */
export type ImportStatusDetail = {
  /** Number of types in this category. */
  count: number;
  /** Affected semantic types paired with their persisted resource id. Ids are present for created, updated, skipped and duplicate outcomes, and null for errored types that were never persisted. */
  items: ImportStatusItem[];
  /** Labels of the affected semantic types. */
  labels: string[];
};
/**
 * A single affected semantic type with its persisted resource id when available.
 */
export type ImportStatusItem = {
  /** Persisted resource id of the semantic type, or null when no resource exists for this outcome (for example, an errored type that was never created). */
  id?: string | null;
  /** Label of the affected semantic type. */
  label: string;
};
/**
 * Aggregate counts and per-status label details for the import result. Each status group includes a count and the list of affected type labels.
 */
export type ImportSummary = {
  /** Count and affected types for one import outcome. */
  duplicates: ImportStatusDetail;
  /** Count and affected types for one import outcome. */
  errored: ImportStatusDetail;
  /** Count and affected types for one import outcome. */
  skipped: ImportStatusDetail;
  /** Count and affected types for one import outcome. */
  totalCreated: ImportStatusDetail;
  /** Count and affected types for one import outcome. */
  updated: ImportStatusDetail;
};
/**
 * Field-by-field comparison between the type from the import file and the existing type in the tenant. Only present when status is `CONFLICT`. Each field shows the value from the file and the existing value so the user can make an informed OVERWRITE / SKIP / KEEP_BOTH decision.
 */
export type ImportTypeDiff = {
  /** A single field difference between the file value and the existing type. */
  activated?: DiffEntry;
  /** A single field difference between the file value and the existing type. */
  category?: DiffEntry;
  /** Type-specific config differences. Only the fields relevant to the type's category are present (REGEX → validationContent/validationPattern, DICTIONARY → validationCriteria/values, COMPOUND → children), and only when they differ. */
  config?: ImportConfigDiff;
  /** A single field difference between the file value and the existing type. */
  description?: DiffEntry;
  /** A single field difference between the file value and the existing type. */
  useForValidation?: DiffEntry;
};
/**
 * Status of a single type from the import file.
 */
export type ImportTypeStatus = {
  /** Field-by-field comparison between the type from the import file and the existing type in the tenant. Only present when status is `CONFLICT`. Each field shows the value from the file and the existing value so the user can make an informed OVERWRITE / SKIP / KEEP_BOTH decision. */
  diff?: ImportTypeDiff;
  /** Human-readable error message. Only present when status is `ERROR`. */
  error?: string;
  /** Machine-readable error code. Only present when status is `ERROR`. */
  errorCode?: "IMPORT_REGEX_PATTERN_MISSING" | "IMPORT_REGEX_PATTERN_TOO_LONG" | "IMPORT_REGEX_PATTERN_INVALID" | "IMPORT_DICTIONARY_VALUES_MISSING" | "IMPORT_DICTIONARY_VALUE_BLANK" | "IMPORT_COMPOUND_CHILDREN_MISSING" | "IMPORT_COMPOUND_CHILDREN_NOT_FOUND" | "IMPORT_DICTIONARY_VALIDATION_CRITERIA_INVALID";
  /** Label of the semantic type. */
  label: string;
  /** `NEW`: no type with this label exists in the tenant. `CONFLICT`: a type with this label already exists but differs from the imported version. `ERROR`: the type has a validation error (missing field, invalid regex, etc.). `DUPLICATE`: the type is a duplicate — either another type with the same label appears earlier in the import file, or the imported type is identical to an existing type in the tenant (all user-visible fields match; auto-skipped with no conflict resolution needed). */
  status: "NEW" | "CONFLICT" | "ERROR" | "DUPLICATE";
  /** Category of the semantic type. */
  type: "REGEX" | "DICTIONARY" | "COMPOUND";
};
/**
 * A semantic type for words matching a value in the list of values
 */
export type SemanticTypeDictionary = {
  /** one of EXACT_VALUE / IGNORE_CASE_AND_ACCENTS,
   * EXACT_VALUE: matches only the exact values in dictionary,
   * IGNORE_CASE_AND_ACCENTS: case and accents are ignored */
  validationCriteria?: "EXACT_VALUE" | "IGNORE_CASE_AND_ACCENTS";
  values: string[];
};
/**
 * A semantic type for words matching a regex pattern
 */
export type SemanticTypeRegex = {
  /** one of ANY_CHARACTER / ALPHABETIC / NUMERIC,
   * ANY_CHARACTER: validates all characters,
   * ALPHABETIC: validates only alphabetic content,
   * NUMERIC: validate only number */
  validationContent?: "ANY_CHARACTER" | "ALPHABETIC" | "NUMERIC";
  /** Regular expression */
  validationPattern: string;
};
/**
 * Self-describing export envelope for Qlik Cloud semantic types.
 */
export type SemanticTypesExportEnvelope = {
  /** Format identifier for auto-detection on import. */
  exportFormat: "QlikSemanticTypesExport";
  /** Total number of semantic types included in this export. Helps API consumers quickly determine export size without parsing the entire array. */
  exportedCount?: number;
  semanticTypes: ExportSemanticType[];
  /** Schema version for forward compatibility. */
  version: string;
};
/**
 * Exports semantic types from the current tenant as a downloadable JSON file. Supports optional filtering by type IDs, category, creator, or search term.  Without filters, all types (user-created and Qlik defaults) are exported.
 *
 * @param body an object with the body content
 * @throws ExportSemanticTypesHttpError
 */
export declare function exportSemanticTypes(body: ExportRequest, options?: ApiCallOptions): Promise<ExportSemanticTypesHttpResponse>;
export type ExportSemanticTypesHttpResponse = {
  data: SemanticTypesExportEnvelope;
  headers: Headers;
  status: 200;
};
export type ExportSemanticTypesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Imports semantic types from a JSON file. Supports Qlik Cloud format (`QlikSemanticTypesExport`) and Talend legacy format (`DQDictionaryImportExport`). Format is auto-detected from the `exportFormat` field in the payload.
 *
 * **Conflict handling** is controlled by the `skipConfirmation` flag and the optional `conflictResolutions` array:
 *
 * - **Preview** (`skipConfirmation` false/absent, no `conflictResolutions`):
 *   the file is analysed but nothing is imported. Returns `200` with a
 *   per-type conflict/summary body. Re-submit with `skipConfirmation=true`
 *   or `conflictResolutions` to actually apply the import.
 *
 *
 * - **One-shot** (`skipConfirmation=true`, no `conflictResolutions`):
 *   if real conflicts or in-file duplicates exist, returns `200` with the
 *   conflict body and imports nothing; otherwise the import is applied and
 *   `201` is returned with the import report.
 *
 *
 * - **Resolved** (`conflictResolutions` provided): the import is applied using
 *   the per-label strategies, falling back to `defaultConflictStrategy`
 *   (defaults to `SKIP`) for unlisted labels. Returns `201` in both cases
 *   (conflicts present or not), with the import report.
 *
 *
 * Import is best-effort: each type is processed independently. Failures are logged in the response report without blocking other types.
 *
 * @param body an object with the body content
 * @throws ImportSemanticTypesHttpError
 */
export declare function importSemanticTypes(body: ImportRequest, options?: ApiCallOptions): Promise<ImportSemanticTypesHttpResponse>;
export type ImportSemanticTypesHttpResponse = ImportSemanticTypes200HttpResponse | ImportSemanticTypes201HttpResponse;
export type ImportSemanticTypes200HttpResponse = {
  data: ImportConflictResponse;
  headers: Headers;
  status: 200;
};
export type ImportSemanticTypes201HttpResponse = {
  data: ImportReport;
  headers: Headers;
  status: 201;
};
export type ImportSemanticTypesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 500 | 503;
};
/**
 * Clears the cache for data-governance/semantic-types api requests.
 */
export declare function clearCache(): void;
export type SemanticTypesAPI = {
  /**
   * Exports semantic types from the current tenant as a downloadable JSON file. Supports optional filtering by type IDs, category, creator, or search term.  Without filters, all types (user-created and Qlik defaults) are exported.
   *
   * @param body an object with the body content
   * @throws ExportSemanticTypesHttpError
   */
  exportSemanticTypes: typeof exportSemanticTypes;
  /**
   * Imports semantic types from a JSON file. Supports Qlik Cloud format (`QlikSemanticTypesExport`) and Talend legacy format (`DQDictionaryImportExport`). Format is auto-detected from the `exportFormat` field in the payload.
   *
   * **Conflict handling** is controlled by the `skipConfirmation` flag and the optional `conflictResolutions` array:
   *
   * - **Preview** (`skipConfirmation` false/absent, no `conflictResolutions`):
   *   the file is analysed but nothing is imported. Returns `200` with a
   *   per-type conflict/summary body. Re-submit with `skipConfirmation=true`
   *   or `conflictResolutions` to actually apply the import.
   *
   *
   * - **One-shot** (`skipConfirmation=true`, no `conflictResolutions`):
   *   if real conflicts or in-file duplicates exist, returns `200` with the
   *   conflict body and imports nothing; otherwise the import is applied and
   *   `201` is returned with the import report.
   *
   *
   * - **Resolved** (`conflictResolutions` provided): the import is applied using
   *   the per-label strategies, falling back to `defaultConflictStrategy`
   *   (defaults to `SKIP`) for unlisted labels. Returns `201` in both cases
   *   (conflicts present or not), with the import report.
   *
   *
   * Import is best-effort: each type is processed independently. Failures are logged in the response report without blocking other types.
   *
   * @param body an object with the body content
   * @throws ImportSemanticTypesHttpError
   */
  importSemanticTypes: typeof importSemanticTypes;
  /**
   * Clears the cache for semantic-types api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the semantic-types api
 */
declare const semanticTypesExport: SemanticTypesAPI;
//#endregion
export { semanticTypesExport as default, semantic_types_d_exports as t };