import { y as ApiCallOptions } from "./auth-types-BK8AvfyD.js";

//#region src/public/rest/glossaries.d.ts

/**
 * A JSON Patch document as defined in https://tools.ietf.org/html/rfc6902.
 */
type JSONPatch = {
  /** The operation to be performed. */
  op: "replace";
  /** A JSON Pointer. */
  path: string;
  /** The value to be used for this operation. */
  value: string | number;
};
/**
 * An array of JSON Patch documents
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/name",
 *     value: "new name"
 *   },
 *   {
 *     op: "replace",
 *     path: "/description",
 *     value: "new description"
 *   }
 * ]
 */
type JSONPatchArray = JSONPatch[];
type AtlanEntity = {
  attributes?: AtlanEntityAttributes;
  guid?: string;
  labels?: string[];
  relationshipAttributes?: AtlanRelationshipAttributes;
  status?: string;
  typeName?: string;
};
type AtlanEntityAttributes = {
  abbreviation?: string;
  displayText?: string;
  examples?: unknown;
  guid?: string;
  name?: string;
  parentCategory?: string;
  relationGuid?: string;
  relations?: AtlanResourceLink;
  usage?: string;
  userDescription?: string;
};
/**
 * Atlan glossary format. See https://apidocs.atlan.com/
 */
type AtlanGlossary = {
  entity?: AtlanEntity;
  referredEntities?: AtlanEntity[];
};
type AtlanRelationEntity = {
  displayText?: string;
  entityStatus?: string;
  guid?: string;
  typeName?: string;
};
type AtlanRelationshipAttributes = {
  antonyms?: AtlanTermHeader;
  categories?: AtlanRelationEntity;
  classifies?: AtlanTermHeader;
  isA?: AtlanTermHeader;
  replacedBy?: AtlanTermHeader;
  seeAlso?: AtlanTermHeader;
  synonyms?: AtlanTermHeader;
  terms?: AtlanRelationEntity;
};
type AtlanResourceLink = {
  displayName?: string;
  url?: string;
};
type AtlanTermHeader = {
  description?: string;
  displayText?: string;
  entityStatus?: string;
  expression?: string;
  guid?: string;
  relationGuid?: string;
  steward?: string;
};
type AtlasCategory = {
  categoryGuid?: string;
  description?: string;
  displayText?: string;
  parentCategoryGuid?: string;
  relationGuid?: string;
};
type AtlasGlossary = {
  categories?: AtlasCategory[];
  guid?: string;
  language?: string;
  longDescription?: string;
  name?: string;
  qualifiedName?: string;
  shortDescription?: string;
  terms?: AtlasTerm[];
  usage?: string;
};
type AtlasTerm = {
  description?: string;
  displayText?: string;
  expression?: string;
  relationGuid?: string;
  source?: string;
  status?: string;
  steward?: string;
  termGuid?: string;
};
type CategoriesResult = {
  data: Category[];
  /** URLs to a resource request */
  links?: PageLinks;
  meta?: ResultMeta;
};
type Category = {
  readonly createdAt: string;
  readonly createdBy: string;
  description: string;
  glossaryId: string;
  /** The id for resolving updates in future imports/updates.
   * Opposed to the id of terms, id on category are not resolved by backend. Any category referred in the category array in terms will have to be identical to the id property of the category. If not, the category reference will be discarded. */
  id: string;
  name: string;
  parentId?: string;
  /** This list contains the UIDs of the stewards of the category. */
  stewards?: string[];
  readonly updatedAt: string;
  /** The uid of the user who last updated the category */
  readonly updatedBy: string;
};
type CreateCategory = {
  description?: string;
  /** The name of the category. May not be identical to another category belonging to the same parent. */
  name?: string;
  parentId?: string;
  /** This list contains the UIDs of the stewards of the category. */
  stewards?: string[];
};
type CreateGlossary = {
  /** Description of the glossary */
  description?: string;
  /** Name of the glossary */
  name: string;
  /** Overview of the glossary content */
  overview?: string;
  /** Unique unique identifier of the space to contain the glossary */
  spaceId?: string;
  /** List of tags for glossary */
  tags?: string[];
  termTemplate?: TermTemplate;
};
type CreateTerm = {
  abbreviation?: string;
  /** Category Ids that the term belongs to. NOTE! In case of import the string refers to the index of the category in the import document. */
  categories?: string[];
  description?: string;
  linksTo?: TermCreateLinksTo[];
  name: string;
  relatedInformation?: string;
  relatesTo?: TermRelatesTo[];
  /** This list contain the UIDs for the term's stewards */
  stewards?: string[];
  tags?: string[];
};
type ErrorResponse = {
  errors?: ErrorResponseCode[];
  traceId?: string;
};
/**
 * ### Custom error codes
 * * BG-1 - Context JWT is missing tenantId.
 * * BG-2 - Context JWT is missing userId.
 * * BG-4 - Invalid or unsupported Content Type. Valid types are: application/json, application/json+qlik, application/json+atlan, application/json+atlas
 * * BG-5 - Failed to decode JSON payload.
 * * BG-6 - A glossary name is required.
 * * BG-7 - Two categories with the same name cannot have the same parent.
 * * BG-11 - Glossary validation failed - A value or parameter is invalid or not set
 * * BG-12 - Category validation failed - A value or parameter is invalid or not set
 * * BG-13 - Term validation failed - A value or parameter is invalid or not set
 * * BG-14 - Two or more categories share Id
 * * BG-15 - Two or more terms share Id
 * * BG-16 - Not detecting proper Atlas format
 * * BG-17 - Not detecting proper Atlan format
 * * BG-18 - Not detecting proper Qlik format
 * * BG-19 - Invalid format in term
 * * BG-20 - Duplicate link definition
 * * BG-21 - Rich text validation failed
 * * BG-22 - Import cancelled
 * * BG-23 - Duplicate link related
 */
type ErrorResponseBadRequest = {
  errors?: ErrorResponseCode[];
  traceId?: string;
};
type ErrorResponseCode = {
  code?: string;
  detail?: string;
  title?: string;
};
/**
 * ### Custom error codes
 * * BG-3 - Access denied, no read access
 * * BG-30 - Feature not enabled on tenant.
 */
type ErrorResponseForbidden = {
  errors?: ErrorResponseCode[];
  traceId?: string;
};
/**
 * ### Custom error codes
 * * BG-8 - Glossary not found
 * * BG-9 - Category not found
 * * BG-10 - Term not found
 */
type ErrorResponseNotFound = {
  errors?: ErrorResponseCode[];
  traceId?: string;
};
type ExportCategory = {
  description?: string;
  /** The id for resolving updates in future imports/updates.
   * Opposed to the id of terms, id on category are not resolved by backend. Any category referred in the category array in terms will have to be identical to the id property of the category. If not, the category reference will be discarded. */
  id?: string;
  /** The name of the category. May not be identical to another category belonging to the same parent. */
  name?: string;
  parentId?: string;
  stewardDetails?: StewardDetail[];
};
type ExportGlossary = {
  categories?: ExportCategory[];
  readonly createdAt?: string;
  readonly createdBy?: string;
  description?: string;
  id?: string;
  name?: string;
  overview?: string;
  ownerId?: string;
  spaceId?: string;
  tags?: string[];
  termTemplate?: TermTemplate;
  terms?: ExportTerm[];
  readonly updatedAt?: string;
  /** The uid of the user who last updated the glossary */
  readonly updatedBy?: string;
};
type ExportTerm = {
  abbreviation?: string;
  /** Categories that the term belongs to. Refers to the `id` property of the category object */
  categories?: string[];
  description?: string;
  /** The id of the term. Used to identify the term in future updates. If not provided, will use the leading 30 chars of the term name and an incremental index */
  id?: string;
  linksTo?: TermCreateLinksTo[];
  name?: string;
  owner?: ImportOwner[];
  relatesTo?: TermRelatesTo[];
  stewardDetails?: StewardDetail[];
  stewards?: StewardDetail[];
  tags?: string[];
};
type GlossariesResult = {
  data?: Glossary[];
  /** URLs to a resource request */
  links?: PageLinks;
  meta?: ResultMeta;
};
type Glossary = {
  /** Datetime when the glossary was created */
  readonly createdAt: string;
  /** Unique identifier of the user who created the glossary */
  readonly createdBy: string;
  /** Description of the glossary */
  description: string;
  /** Unique identifier of the glossary */
  id: string;
  /** Name of the glossary */
  name: string;
  /** Overview of the glossary contents */
  overview: string;
  /** The unique identifier of the glossary owner */
  ownerId: string;
  /** The unique identifier of the space containing the glossary */
  spaceId: string;
  /** List of tags associated with the glossary. */
  tags: string[];
  termTemplate: TermTemplate;
  /** Datetime when the glossary was updated */
  readonly updatedAt: string;
  /** The unique identifier of the user who last updated the glossary */
  readonly updatedBy: string;
};
type ImportCategory = {
  description?: string;
  /** The id for resolving updates in future imports/updates.
   * Opposed to the id of terms, id on category are not resolved by backend. Any category referred in the category array in terms will have to be identical to the id property of the category. If not, the category reference will be discarded. */
  id?: string;
  /** The name of the category. May not be identical to another category belonging to the same parent. */
  name?: string;
  parentId?: string;
  stewardDetails?: StewardDetail[];
  stewards?: string[];
};
type ImportOwner = {
  email?: string;
  name?: string;
  userId?: string;
};
type ImportTerm = {
  abbreviation?: string;
  /** Categories that the term belongs to. Refers to the `id` property of the category object */
  categories?: string[];
  description?: string;
  /** The id of the term. Used to identify the term in future updates. If not provided, will use the leading 30 chars of the term name and an incremental index */
  id?: string;
  linksTo?: TermCreateLinksTo[];
  name?: string;
  owner?: ImportOwner[];
  relatesTo?: TermRelatesTo[];
  stewardDetails?: StewardDetail[];
  stewards?: StewardDetail[];
  tags?: string[];
};
type LinksResult = {
  data?: TermLinksTo[];
  /** URLs to a resource request */
  links?: PageLinks;
  meta?: ResultMeta;
};
type PageLink = {
  href?: string;
};
/**
 * URLs to a resource request
 */
type PageLinks = {
  next?: PageLink;
  prev?: PageLink;
  self?: PageLink;
};
type QlikGlossary = {
  categories?: ImportCategory[];
  description?: string;
  name?: string;
  overview?: string;
  spaceId?: string;
  tags?: string[];
  termTemplate?: TermTemplate;
  terms?: ImportTerm[];
};
type ResultMeta = {
  countTotal?: number;
};
type StewardDetail = {
  email?: string;
  name?: string;
  userId?: string;
};
type Term = {
  abbreviation: string;
  categories?: string[];
  readonly createdAt: string;
  readonly createdBy: string;
  description: string;
  glossaryId: string;
  id: string;
  linksTo?: TermLinksTo[];
  name: string;
  /** Term relations where this term is the target of the relation. */
  referredRelations?: TermRelatesTo[];
  relatedInformation: string;
  /** Term relations assigned to this term. */
  relatesTo?: TermRelatesTo[];
  revision: number;
  /** Terms status is used determine the status of a term */
  status: TermStatus;
  /** This list contains the UIDs of the terms data stewards. */
  stewards: string[];
  tags: string[];
  readonly updatedAt: string;
  /** The uid of the user who last updated the term */
  readonly updatedBy: string;
};
/**
 * Describes links to other data assets such as analytics applications or dataset.
 *
 * **Note**: When linking to a subresource (e.g., a master dimension, master measure, or dataset field within an app or dataset),
 * all three subresource fields (`subResourceType`, `subResourceId`, and `subResourceName`) must be provided together.
 * If any one subresource field is specified, all three are required.
 */
type TermCreateLinksTo = {
  /** The unique identifier of the resource (app or dataset) to link to the term. */
  resourceId: string;
  /** The type of resource being linked to the term. */
  resourceType: "app" | "dataset";
  /** Required when subResourceType or subResourceName is provided. The unique identifier of the subresource. */
  subResourceId?: string;
  /** Required when subResourceType or subResourceId is provided. The display name of the subresource. */
  subResourceName?: string;
  /** Required when subResourceId or subResourceName is provided. The type of the subresource. */
  subResourceType?: "master_dimension" | "master_measure" | "field";
  /** The type of relationship between the term and the linked resource:
   * - `definition`: Use when the term provides the formal definition for the linked resource (e.g., a term defines what a master measure or dimension means)
   * - `related`: Use when the term is generally related to the resource but doesn't formally define it */
  type?: "definition" | "related";
};
/**
 * Describes links to other entities such as qlik charts, dataset columns etc.
 */
type TermLinksTo = {
  readonly createdAt?: string;
  createdBy?: string;
  id?: string;
  name?: string;
  openUrl?: string;
  /** Different formats based on resource type. Could be e.g. OID or UUID. */
  resourceId?: string;
  resourceSpaceId?: string;
  resourceType?: "app" | "dataset";
  /** Http status code for item during batch operation. */
  status?: number;
  /** Different formats based on subresource type. Could be e.g. OID or UUID. */
  subResourceId?: string;
  /** Populated and true if no matching subresource is found on parent resource. E.g. if a dataset field no longer exist but a link to that field exists. */
  subResourceInvalid?: boolean;
  subResourceName?: string;
  subResourceType?: "master_dimension" | "master_measure" | "field";
  /** Describes reason for item status during batch operation. E.g. why an error occurs during creation. */
  title?: string;
  type?: "definition" | "related";
};
type TermRelatesTo = {
  /** The unique identifier of the related term. NOTE! In case of import the string refers to the index of the term in the import document. */
  termId: string;
  /** How the term related to the other object */
  type: "isA" | "hasA" | "seeAlso" | "synonym" | "antonym" | "classifies" | "other" | "replaces" | "replacedBy" | "hasSubtype" | "preferredTerm" | "seeInstead" | "defines" | "definedBy";
};
/**
 * Terms status is used determine the status of a term
 */
type TermStatus = {
  type: "draft" | "verified" | "deprecated";
  /** Time when the state was changed */
  updatedAt: string;
  /** The unique identifier of the user who last changed the status of the term */
  updatedBy: string;
};
type TermTemplate = {
  /** Template text for new terms */
  relatedInformation?: string;
};
type TermsResult = {
  data: Term[];
  /** URLs to a resource request */
  links?: PageLinks;
  meta?: ResultMeta;
};
/**
 * Returns all glossaries.
 *
 * @param query an object with query parameters
 * @throws GetGlossariesHttpError
 */
declare function getGlossaries(query: {
  /** Optional parameter to request total count for query */
  countTotal?: boolean;
  /** The number of glossaries to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, eg. name. Can be prefixed with +/- to determine order, defaults to (+) ascending. */
  sort?: "name" | "+name" | "-name" | "description" | "+description" | "-description";
}, options?: ApiCallOptions): Promise<GetGlossariesHttpResponse>;
type GetGlossariesHttpResponse = {
  data: GlossariesResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetGlossariesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetGlossariesHttpResponse>;
};
type GetGlossariesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Only a steward can create a glossary.
 *
 * @param body an object with the body content
 * @throws CreateGlossaryHttpError
 */
declare function createGlossary(body: CreateGlossary, options?: ApiCallOptions): Promise<CreateGlossaryHttpResponse>;
type CreateGlossaryHttpResponse = {
  data: Glossary;
  headers: Headers;
  status: 201;
};
type CreateGlossaryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Creates a new or updates an existing glossary, including categories and terms, based on a glossary definition file.
 * Supported formats are currently, qlik, atlan and atlas.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws ImportGlossaryHttpError
 */
declare function importGlossary(query: {
  /** Appending the current importer user as steward to categories/terms where no steward is defined/not match the identity service. */
  importerAsFallbackSteward?: boolean;
  /** Using email in the steward fields to lookup userIds in the identity service */
  lookupUserOnEmail?: boolean;
  /** The spaceId (leave blank or omit for personal) */
  spaceId?: string;
}, body: QlikGlossary, options?: ApiCallOptions): Promise<ImportGlossaryHttpResponse>;
type ImportGlossaryHttpResponse = {
  data: Glossary;
  headers: Headers;
  status: 201;
};
type ImportGlossaryHttpError = ImportGlossary400HttpError | ImportGlossary403HttpError | ImportGlossary404HttpError;
type ImportGlossary400HttpError = {
  data: ErrorResponseBadRequest;
  headers: Headers;
  status: 400;
};
type ImportGlossary403HttpError = {
  data: ErrorResponseForbidden;
  headers: Headers;
  status: 403;
};
type ImportGlossary404HttpError = {
  data: ErrorResponseNotFound;
  headers: Headers;
  status: 404;
};
/**
 * Deletes a glossary and all of its terms.
 *
 * @param id The id of the glossary to delete.
 * @throws DeleteGlossaryHttpError
 */
declare function deleteGlossary(id: string, options?: ApiCallOptions): Promise<DeleteGlossaryHttpResponse>;
type DeleteGlossaryHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteGlossaryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves a glossary.
 *
 * @param id The id of the glossary to retrieve.
 * @throws GetGlossaryHttpError
 */
declare function getGlossary(id: string, options?: ApiCallOptions): Promise<GetGlossaryHttpResponse>;
type GetGlossaryHttpResponse = {
  data: Glossary;
  headers: Headers;
  status: 200;
};
type GetGlossaryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Updates glossary properties with json-patch formatted data.
 *
 * @param id The glossary id.
 * @param body an object with the body content
 * @throws PatchGlossaryHttpError
 */
declare function patchGlossary(id: string, body: JSONPatchArray, options?: ApiCallOptions): Promise<PatchGlossaryHttpResponse>;
type PatchGlossaryHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchGlossaryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429;
};
/**
 * Updates a glossary.
 *
 * @param id The id of the glossary to update.
 * @param body an object with the body content
 * @throws UpdateGlossaryHttpError
 */
declare function updateGlossary(id: string, body: CreateGlossary, options?: ApiCallOptions): Promise<UpdateGlossaryHttpResponse>;
type UpdateGlossaryHttpResponse = {
  data: Glossary;
  headers: Headers;
  status: 200;
};
type UpdateGlossaryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Exports a glossary.
 *
 * @param id The glossary id.
 * @throws ExportGlossaryHttpError
 */
declare function exportGlossary(id: string, options?: ApiCallOptions): Promise<ExportGlossaryHttpResponse>;
type ExportGlossaryHttpResponse = {
  data: ExportGlossary;
  headers: Headers;
  status: 200;
};
type ExportGlossaryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Returns a list of categories for a glossary.
 *
 * @param id The glossary id.
 * @param query an object with query parameters
 * @throws GetGlossaryCategoriesHttpError
 */
declare function getGlossaryCategories(id: string, query: {
  /** Optional parameter to request total count for query */
  countTotal?: boolean;
  /** The number of terms to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, eg. name. Can be prefixed with +/- to determine order, defaults to (+) ascending. */
  sort?: "description" | "+description" | "-description" | "name" | "+name" | "-name" | "update" | "+update" | "-update";
}, options?: ApiCallOptions): Promise<GetGlossaryCategoriesHttpResponse>;
type GetGlossaryCategoriesHttpResponse = {
  data: CategoriesResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetGlossaryCategoriesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetGlossaryCategoriesHttpResponse>;
};
type GetGlossaryCategoriesHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Creates a new category.
 *
 * @param id The glossary id.
 * @param body an object with the body content
 * @throws CreateGlossaryCategoryHttpError
 */
declare function createGlossaryCategory(id: string, body: CreateCategory, options?: ApiCallOptions): Promise<CreateGlossaryCategoryHttpResponse>;
type CreateGlossaryCategoryHttpResponse = {
  data: Category;
  headers: Headers;
  status: 201;
};
type CreateGlossaryCategoryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Deletes a category.
 *
 * @param id The id of the glossary.
 * @param categoryId The id for the category to delete. All subcategories are also deleted
 * @throws DeleteGlossaryCategoryHttpError
 */
declare function deleteGlossaryCategory(id: string, categoryId: string, options?: ApiCallOptions): Promise<DeleteGlossaryCategoryHttpResponse>;
type DeleteGlossaryCategoryHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteGlossaryCategoryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves a category.
 *
 * @param id The glossary id.
 * @param categoryId The category id.
 * @throws GetGlossaryCategoryHttpError
 */
declare function getGlossaryCategory(id: string, categoryId: string, options?: ApiCallOptions): Promise<GetGlossaryCategoryHttpResponse>;
type GetGlossaryCategoryHttpResponse = {
  data: Category;
  headers: Headers;
  status: 200;
};
type GetGlossaryCategoryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Updates category properties with json-patch formatted data.
 *
 * @param id The glossary id.
 * @param categoryId The category id.
 * @param body an object with the body content
 * @throws PatchGlossaryCategoryHttpError
 */
declare function patchGlossaryCategory(id: string, categoryId: string, body: JSONPatchArray, options?: ApiCallOptions): Promise<PatchGlossaryCategoryHttpResponse>;
type PatchGlossaryCategoryHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchGlossaryCategoryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429;
};
/**
 * Updates a category.
 *
 * @param id The glossary id.
 * @param categoryId The category id.
 * @param body an object with the body content
 * @throws UpdateGlossaryCategoryHttpError
 */
declare function updateGlossaryCategory(id: string, categoryId: string, body: CreateCategory, options?: ApiCallOptions): Promise<UpdateGlossaryCategoryHttpResponse>;
type UpdateGlossaryCategoryHttpResponse = {
  data: Category;
  headers: Headers;
  status: 200;
};
type UpdateGlossaryCategoryHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Returns a list of terms for a glossary.
 *
 * @param id The glossary id.
 * @param query an object with query parameters
 * @throws GetGlossaryTermsHttpError
 */
declare function getGlossaryTerms(id: string, query: {
  /** Optional parameter to request total count for query */
  countTotal?: boolean;
  /** Optional SCIM filter to be used to filter terms
   * Usable fields are
   *
   * - id
   * - name
   * - relatedInformation
   * - description
   * - abbreviation
   * - tags
   * - stewards
   * - status
   * - categories */
  filter?: string;
  /** The number of terms to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, eg. name. Can be prefixed with +/- to determine order, defaults to (+) ascending. */
  sort?: "abbreviation" | "+abbreviation" | "-abbreviation" | "description" | "+description" | "-description" | "name" | "+name" | "-name" | "status" | "+status" | "-status" | "updated" | "+updated" | "-updated";
}, options?: ApiCallOptions): Promise<GetGlossaryTermsHttpResponse>;
type GetGlossaryTermsHttpResponse = {
  data: TermsResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetGlossaryTermsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetGlossaryTermsHttpResponse>;
};
type GetGlossaryTermsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Creates a new term.
 *
 * @param id The glossary id.
 * @param body an object with the body content
 * @throws CreateGlossaryTermHttpError
 */
declare function createGlossaryTerm(id: string, body: CreateTerm, options?: ApiCallOptions): Promise<CreateGlossaryTermHttpResponse>;
type CreateGlossaryTermHttpResponse = {
  data: Term;
  headers: Headers;
  status: 201;
};
type CreateGlossaryTermHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Deletes a term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @throws DeleteGlossaryTermHttpError
 */
declare function deleteGlossaryTerm(id: string, termId: string, options?: ApiCallOptions): Promise<DeleteGlossaryTermHttpResponse>;
type DeleteGlossaryTermHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteGlossaryTermHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves a term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @throws GetGlossaryTermHttpError
 */
declare function getGlossaryTerm(id: string, termId: string, options?: ApiCallOptions): Promise<GetGlossaryTermHttpResponse>;
type GetGlossaryTermHttpResponse = {
  data: Term;
  headers: Headers;
  status: 200;
};
type GetGlossaryTermHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Updates term properties with json-patch formatted data
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param body an object with the body content
 * @throws PatchGlossaryTermHttpError
 */
declare function patchGlossaryTerm(id: string, termId: string, body: JSONPatchArray, options?: ApiCallOptions): Promise<PatchGlossaryTermHttpResponse>;
type PatchGlossaryTermHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchGlossaryTermHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 412 | 429;
};
/**
 * Updates a term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param body an object with the body content
 * @throws UpdateGlossaryTermHttpError
 */
declare function updateGlossaryTerm(id: string, termId: string, body: CreateTerm, options?: ApiCallOptions): Promise<UpdateGlossaryTermHttpResponse>;
type UpdateGlossaryTermHttpResponse = {
  data: Term;
  headers: Headers;
  status: 200;
};
type UpdateGlossaryTermHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 412;
};
/**
 * Only a steward can verify a term. Once the term is verified only a steward can modify the term. Note that links to resources are considered external relations that can be managed independently of the status of the term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param query an object with query parameters
 * @throws ChangeGlossaryTermStatusHttpError
 */
declare function changeGlossaryTermStatus(id: string, termId: string, query: {
  /** The status to update to. */
  status: "draft" | "verified" | "deprecated";
}, options?: ApiCallOptions): Promise<ChangeGlossaryTermStatusHttpResponse>;
type ChangeGlossaryTermStatusHttpResponse = {
  data: Term;
  headers: Headers;
  status: 200;
};
type ChangeGlossaryTermStatusHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 412;
};
/**
 * Returns a list of links assigned to a term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param query an object with query parameters
 * @throws GetGlossaryTermLinksHttpError
 */
declare function getGlossaryTermLinks(id: string, termId: string, query: {
  /** Optional parameter to request total count for query */
  countTotal?: boolean;
  /** Optional SCIM filter to be used to filter terms */
  filter?: string;
  /** The number of terms to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, eg. name. Can be prefixed with +/- to determine order, defaults to (+) ascending. */
  sort?: "type" | "+type" | "-type" | "subtype" | "+subtype" | "-subtype" | "created" | "+created" | "-created";
}, options?: ApiCallOptions): Promise<GetGlossaryTermLinksHttpResponse>;
type GetGlossaryTermLinksHttpResponse = {
  data: LinksResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetGlossaryTermLinksHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetGlossaryTermLinksHttpResponse>;
};
type GetGlossaryTermLinksHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Links to resources are not considered term properties but external relations. Links can be created for terms in any status. Permissions on term and resource determine if the link can be created.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param body an object with the body content
 * @throws CreateGlossaryTermLinkHttpError
 */
declare function createGlossaryTermLink(id: string, termId: string, body: TermCreateLinksTo, options?: ApiCallOptions): Promise<CreateGlossaryTermLinkHttpResponse>;
type CreateGlossaryTermLinkHttpResponse = {
  data: TermLinksTo;
  headers: Headers;
  status: 201;
};
type CreateGlossaryTermLinkHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 412;
};
/**
 * Retrieves previous revisions of a term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param query an object with query parameters
 * @throws GetGlossaryTermRevisionsHttpError
 */
declare function getGlossaryTermRevisions(id: string, termId: string, query: {
  /** Optional parameter to request total count for query */
  countTotal?: boolean;
  /** The number of terms to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, eg. name. Can be prefixed with +/- to determine order, defaults to (+) ascending. */
  sort?: "update" | "+update" | "-update";
}, options?: ApiCallOptions): Promise<GetGlossaryTermRevisionsHttpResponse>;
type GetGlossaryTermRevisionsHttpResponse = {
  data: TermsResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetGlossaryTermRevisionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetGlossaryTermRevisionsHttpResponse>;
};
type GetGlossaryTermRevisionsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Clears the cache for glossaries api requests.
 */
declare function clearCache(): void;
type GlossariesAPI = {
  /**
   * Returns all glossaries.
   *
   * @param query an object with query parameters
   * @throws GetGlossariesHttpError
   */
  getGlossaries: typeof getGlossaries;
  /**
   * Only a steward can create a glossary.
   *
   * @param body an object with the body content
   * @throws CreateGlossaryHttpError
   */
  createGlossary: typeof createGlossary;
  /**
   * Creates a new or updates an existing glossary, including categories and terms, based on a glossary definition file.
   * Supported formats are currently, qlik, atlan and atlas.
   *
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws ImportGlossaryHttpError
   */
  importGlossary: typeof importGlossary;
  /**
   * Deletes a glossary and all of its terms.
   *
   * @param id The id of the glossary to delete.
   * @throws DeleteGlossaryHttpError
   */
  deleteGlossary: typeof deleteGlossary;
  /**
   * Retrieves a glossary.
   *
   * @param id The id of the glossary to retrieve.
   * @throws GetGlossaryHttpError
   */
  getGlossary: typeof getGlossary;
  /**
   * Updates glossary properties with json-patch formatted data.
   *
   * @param id The glossary id.
   * @param body an object with the body content
   * @throws PatchGlossaryHttpError
   */
  patchGlossary: typeof patchGlossary;
  /**
   * Updates a glossary.
   *
   * @param id The id of the glossary to update.
   * @param body an object with the body content
   * @throws UpdateGlossaryHttpError
   */
  updateGlossary: typeof updateGlossary;
  /**
   * Exports a glossary.
   *
   * @param id The glossary id.
   * @throws ExportGlossaryHttpError
   */
  exportGlossary: typeof exportGlossary;
  /**
   * Returns a list of categories for a glossary.
   *
   * @param id The glossary id.
   * @param query an object with query parameters
   * @throws GetGlossaryCategoriesHttpError
   */
  getGlossaryCategories: typeof getGlossaryCategories;
  /**
   * Creates a new category.
   *
   * @param id The glossary id.
   * @param body an object with the body content
   * @throws CreateGlossaryCategoryHttpError
   */
  createGlossaryCategory: typeof createGlossaryCategory;
  /**
   * Deletes a category.
   *
   * @param id The id of the glossary.
   * @param categoryId The id for the category to delete. All subcategories are also deleted
   * @throws DeleteGlossaryCategoryHttpError
   */
  deleteGlossaryCategory: typeof deleteGlossaryCategory;
  /**
   * Retrieves a category.
   *
   * @param id The glossary id.
   * @param categoryId The category id.
   * @throws GetGlossaryCategoryHttpError
   */
  getGlossaryCategory: typeof getGlossaryCategory;
  /**
   * Updates category properties with json-patch formatted data.
   *
   * @param id The glossary id.
   * @param categoryId The category id.
   * @param body an object with the body content
   * @throws PatchGlossaryCategoryHttpError
   */
  patchGlossaryCategory: typeof patchGlossaryCategory;
  /**
   * Updates a category.
   *
   * @param id The glossary id.
   * @param categoryId The category id.
   * @param body an object with the body content
   * @throws UpdateGlossaryCategoryHttpError
   */
  updateGlossaryCategory: typeof updateGlossaryCategory;
  /**
   * Returns a list of terms for a glossary.
   *
   * @param id The glossary id.
   * @param query an object with query parameters
   * @throws GetGlossaryTermsHttpError
   */
  getGlossaryTerms: typeof getGlossaryTerms;
  /**
   * Creates a new term.
   *
   * @param id The glossary id.
   * @param body an object with the body content
   * @throws CreateGlossaryTermHttpError
   */
  createGlossaryTerm: typeof createGlossaryTerm;
  /**
   * Deletes a term.
   *
   * @param id The glossary id.
   * @param termId The term id.
   * @throws DeleteGlossaryTermHttpError
   */
  deleteGlossaryTerm: typeof deleteGlossaryTerm;
  /**
   * Retrieves a term.
   *
   * @param id The glossary id.
   * @param termId The term id.
   * @throws GetGlossaryTermHttpError
   */
  getGlossaryTerm: typeof getGlossaryTerm;
  /**
   * Updates term properties with json-patch formatted data
   *
   * @param id The glossary id.
   * @param termId The term id.
   * @param body an object with the body content
   * @throws PatchGlossaryTermHttpError
   */
  patchGlossaryTerm: typeof patchGlossaryTerm;
  /**
   * Updates a term.
   *
   * @param id The glossary id.
   * @param termId The term id.
   * @param body an object with the body content
   * @throws UpdateGlossaryTermHttpError
   */
  updateGlossaryTerm: typeof updateGlossaryTerm;
  /**
   * Only a steward can verify a term. Once the term is verified only a steward can modify the term. Note that links to resources are considered external relations that can be managed independently of the status of the term.
   *
   * @param id The glossary id.
   * @param termId The term id.
   * @param query an object with query parameters
   * @throws ChangeGlossaryTermStatusHttpError
   */
  changeGlossaryTermStatus: typeof changeGlossaryTermStatus;
  /**
   * Returns a list of links assigned to a term.
   *
   * @param id The glossary id.
   * @param termId The term id.
   * @param query an object with query parameters
   * @throws GetGlossaryTermLinksHttpError
   */
  getGlossaryTermLinks: typeof getGlossaryTermLinks;
  /**
   * Links to resources are not considered term properties but external relations. Links can be created for terms in any status. Permissions on term and resource determine if the link can be created.
   *
   * @param id The glossary id.
   * @param termId The term id.
   * @param body an object with the body content
   * @throws CreateGlossaryTermLinkHttpError
   */
  createGlossaryTermLink: typeof createGlossaryTermLink;
  /**
   * Retrieves previous revisions of a term.
   *
   * @param id The glossary id.
   * @param termId The term id.
   * @param query an object with query parameters
   * @throws GetGlossaryTermRevisionsHttpError
   */
  getGlossaryTermRevisions: typeof getGlossaryTermRevisions;
  /**
   * Clears the cache for glossaries api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the glossaries api
 */
declare const glossariesExport: GlossariesAPI;
//#endregion
export { GetGlossaryTermLinksHttpResponse as $, getGlossary as $t, DeleteGlossaryTermHttpError as A, TermCreateLinksTo as At, ExportGlossaryHttpResponse as B, UpdateGlossaryTermHttpError as Bt, CreateGlossaryTermLinkHttpError as C, PatchGlossaryHttpResponse as Ct, DeleteGlossaryCategoryHttpResponse as D, ResultMeta as Dt, DeleteGlossaryCategoryHttpError as E, QlikGlossary as Et, ErrorResponseForbidden as F, TermsResult as Ft, GetGlossaryCategoriesHttpResponse as G, createGlossaryCategory as Gt, GetGlossariesHttpError as H, changeGlossaryTermStatus as Ht, ErrorResponseNotFound as I, UpdateGlossaryCategoryHttpError as It, GetGlossaryHttpError as J, deleteGlossary as Jt, GetGlossaryCategoryHttpError as K, createGlossaryTerm as Kt, ExportCategory as L, UpdateGlossaryCategoryHttpResponse as Lt, ErrorResponse as M, TermRelatesTo as Mt, ErrorResponseBadRequest as N, TermStatus as Nt, DeleteGlossaryHttpError as O, StewardDetail as Ot, ErrorResponseCode as P, TermTemplate as Pt, GetGlossaryTermLinksHttpError as Q, getGlossaries as Qt, ExportGlossary as R, UpdateGlossaryHttpError as Rt, CreateGlossaryTermHttpResponse as S, PatchGlossaryHttpError as St, CreateTerm as T, PatchGlossaryTermHttpResponse as Tt, GetGlossariesHttpResponse as U, clearCache as Ut, ExportTerm as V, UpdateGlossaryTermHttpResponse as Vt, GetGlossaryCategoriesHttpError as W, createGlossary as Wt, GetGlossaryTermHttpError as X, deleteGlossaryTerm as Xt, GetGlossaryHttpResponse as Y, deleteGlossaryCategory as Yt, GetGlossaryTermHttpResponse as Z, exportGlossary as Zt, CreateGlossaryCategoryHttpError as _, LinksResult as _t, AtlanRelationshipAttributes as a, getGlossaryTerms as an, GlossariesResult as at, CreateGlossaryHttpResponse as b, PatchGlossaryCategoryHttpError as bt, AtlasCategory as c, patchGlossary as cn, ImportGlossary400HttpError as ct, CategoriesResult as d, updateGlossary as dn, ImportGlossaryHttpError as dt, getGlossaryCategories as en, GetGlossaryTermRevisionsHttpError as et, Category as f, updateGlossaryCategory as fn, ImportGlossaryHttpResponse as ft, CreateGlossary as g, JSONPatchArray as gt, CreateCategory as h, JSONPatch as ht, AtlanRelationEntity as i, getGlossaryTermRevisions as in, GlossariesAPI as it, DeleteGlossaryTermHttpResponse as j, TermLinksTo as jt, DeleteGlossaryHttpResponse as k, Term as kt, AtlasGlossary as l, patchGlossaryCategory as ln, ImportGlossary403HttpError as lt, ChangeGlossaryTermStatusHttpResponse as m, ImportTerm as mt, AtlanEntityAttributes as n, getGlossaryTerm as nn, GetGlossaryTermsHttpError as nt, AtlanResourceLink as o, glossariesExport as on, Glossary as ot, ChangeGlossaryTermStatusHttpError as p, updateGlossaryTerm as pn, ImportOwner as pt, GetGlossaryCategoryHttpResponse as q, createGlossaryTermLink as qt, AtlanGlossary as r, getGlossaryTermLinks as rn, GetGlossaryTermsHttpResponse as rt, AtlanTermHeader as s, importGlossary as sn, ImportCategory as st, AtlanEntity as t, getGlossaryCategory as tn, GetGlossaryTermRevisionsHttpResponse as tt, AtlasTerm as u, patchGlossaryTerm as un, ImportGlossary404HttpError as ut, CreateGlossaryCategoryHttpResponse as v, PageLink as vt, CreateGlossaryTermLinkHttpResponse as w, PatchGlossaryTermHttpError as wt, CreateGlossaryTermHttpError as x, PatchGlossaryCategoryHttpResponse as xt, CreateGlossaryHttpError as y, PageLinks as yt, ExportGlossaryHttpError as z, UpdateGlossaryHttpResponse as zt };