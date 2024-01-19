import { A as ApiCallOptions } from './global.types-5iFvFJvX.mjs';
import './auth-types-nnUcWhuU.mjs';

type JSONPatch = {
    /** The operation to be performed. */
    op: "replace";
    /** A JSON Pointer. */
    path: string;
    /** The value to be used for this operation. */
    value: string | number;
};
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
    examples?: string[];
    guid?: string;
    name?: string;
    parentCategory?: string;
    relationGuid?: string;
    relations?: AtlanResourceLink;
    usage?: string;
    userDescription?: string;
};
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
    links?: PageLinks;
    meta?: ResultMeta;
};
type Category = {
    readonly createdAt: string;
    readonly createdBy: string;
    description: string;
    glossaryId: string;
    id: string;
    name: string;
    parentId?: string;
    /** This list contains the uuids of the stewards of the category. */
    stewards?: string[];
    readonly updatedAt: string;
    /** The uuid of the user who last updated the category */
    readonly updatedBy: string;
};
type CreateCategory = {
    description?: string;
    /** The id for resolving updates in future imports/updates.
     * Opposed to the id of terms, id on category are not resolved by backend. Any category referred in the category array in terms will have to be identical to the id property of the category. If not, the category reference will be discarded. */
    id?: string;
    /** The name of the category. May not be identical to another category belonging to the same parent. */
    name?: string;
    parentId?: string;
    /** This list contains the uuids of the stewards of the category. */
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
    /** This list contain the uuids for the terms stewards */
    stewards?: string[];
    tags?: string[];
};
type ErrorResponse = {
    errors?: ErrorResponseCode[];
    traceId?: string;
};
type ErrorResponseBadRequest = {
    errors?: ErrorResponseCode[];
    traceId?: string;
};
type ErrorResponseCode = {
    code?: string;
    detail?: string;
    title?: string;
};
type ErrorResponseForbidden = {
    errors?: ErrorResponseCode[];
    traceId?: string;
};
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
    /** The uuid of the user who last updated the glossary */
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
    /** The unique identifier of the space containg the glossary */
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
    links?: PageLinks;
    meta?: ResultMeta;
};
type PageLink = {
    href?: string;
};
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
    abbreviation?: string;
    categories?: string[];
    readonly createdAt: string;
    readonly createdBy: string;
    description: string;
    glossaryId: string;
    id: string;
    linksTo?: TermLinksTo[];
    name: string;
    relatedInformation: string;
    relatesTo?: TermRelatesTo[];
    revision: number;
    /** Terms status is used determine the status of a term */
    status: TermStatus;
    /** This list contains the uuids of the terms data stewards. */
    stewards: string[];
    tags: string[];
    readonly updatedAt: string;
    /** The uuid of the user who last updated the term */
    readonly updatedBy: string;
};
type TermCreateLinksTo = {
    resourceId: string;
    resourceType: "app" | "dataset";
    subResourceId?: string;
    subResourceName?: string;
    subResourceType?: "master_dimension" | "master_measure";
    type?: "definition" | "related";
};
type TermLinksTo = {
    readonly createdAt?: string;
    createdBy?: string;
    id?: string;
    name?: string;
    openUrl?: string;
    resourceId?: string;
    resourceSpaceId?: string;
    resourceType?: "app" | "dataset";
    /** Http status code for item during batch operation. */
    status?: number;
    subResourceId?: string;
    subResourceName?: string;
    subResourceType?: "master_dimension" | "master_measure";
    /** Describes reason for item status during batch operation. E.g. why an error occurs during creation. */
    title?: string;
    type?: "definition" | "related";
};
type TermRelatesTo = {
    /** The unique identifier of the related term. NOTE! In case of import the string refers to the index of the term in the import document. */
    termId: string;
    /** How the term related to the other object */
    type: "isA" | "hasA" | "seeAlso" | "synonym" | "antonym" | "classifies" | "other";
};
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
    links?: PageLinks;
    meta?: ResultMeta;
};
/**
 * Returns all glossaries.
 *
 * @param query an object with query parameters
 * @throws GetGlossariesHttpError
 */
declare const getGlossaries: (query: {
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
}, options?: ApiCallOptions) => Promise<GetGlossariesHttpResponse>;
type GetGlossariesHttpResponse = {
    data: GlossariesResult;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetGlossariesHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetGlossariesHttpResponse>;
};
type GetGlossariesHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Creates a new glossary. Only a steward can create a glossary.
 *
 * @param body an object with the body content
 * @throws CreateGlossaryHttpError
 */
declare const createGlossary: (body: CreateGlossary, options?: ApiCallOptions) => Promise<CreateGlossaryHttpResponse>;
type CreateGlossaryHttpResponse = {
    data: Glossary;
    headers: Headers;
    status: number;
};
type CreateGlossaryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Creates a new glossary, including categories and terms, based on a glossary definition file.
 * Supported formats are currently, qlik, atlan and atlas
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws ImportGlossaryHttpError
 */
declare const importGlossary: (query: {
    /** Appending the current importer user as steward to categories/terms where no steward is defined/not match the identity service. */
    importerAsFallbackSteward?: boolean;
    /** Using email in the steward fields to lookup userIds in the identity service */
    lookupUserOnEmail?: boolean;
    /** The spaceId (leave blank or omit for personal) */
    spaceId?: string;
}, body: QlikGlossary, options?: ApiCallOptions) => Promise<ImportGlossaryHttpResponse>;
type ImportGlossaryHttpResponse = {
    data: Glossary;
    headers: Headers;
    status: number;
};
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
type ImportGlossaryHttpError = ImportGlossary400HttpError | ImportGlossary403HttpError | ImportGlossary404HttpError;
/**
 * Deletes a glossary and all of its terms.
 *
 * @param id The id of the glossary to delete.
 * @throws DeleteGlossaryHttpError
 */
declare const deleteGlossary: (id: string, options?: ApiCallOptions) => Promise<DeleteGlossaryHttpResponse>;
type DeleteGlossaryHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteGlossaryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves a glossary.
 *
 * @param id The id of the glossary to retrieve.
 * @throws GetGlossaryHttpError
 */
declare const getGlossary: (id: string, options?: ApiCallOptions) => Promise<GetGlossaryHttpResponse>;
type GetGlossaryHttpResponse = {
    data: Glossary;
    headers: Headers;
    status: number;
};
type GetGlossaryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Updates glossary properties with json-patch formated data
 *
 * @param id The glossary id.
 * @param body an object with the body content
 * @throws PatchGlossaryHttpError
 */
declare const patchGlossary: (id: string, body: JSONPatchArray, options?: ApiCallOptions) => Promise<PatchGlossaryHttpResponse>;
type PatchGlossaryHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchGlossaryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Updates a glossary.
 *
 * @param id The id of the glossary to update.
 * @param body an object with the body content
 * @throws UpdateGlossaryHttpError
 */
declare const updateGlossary: (id: string, body: CreateGlossary, options?: ApiCallOptions) => Promise<UpdateGlossaryHttpResponse>;
type UpdateGlossaryHttpResponse = {
    data: Glossary;
    headers: Headers;
    status: number;
};
type UpdateGlossaryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Exports a glossary.
 *
 * @param id The glossary id.
 * @throws ExportGlossaryHttpError
 */
declare const exportGlossary: (id: string, options?: ApiCallOptions) => Promise<ExportGlossaryHttpResponse>;
type ExportGlossaryHttpResponse = {
    data: ExportGlossary;
    headers: Headers;
    status: number;
};
type ExportGlossaryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Returns a list of categories for a glossary.
 *
 * @param id The glossary id.
 * @param query an object with query parameters
 * @throws GetGlossaryCategoriesHttpError
 */
declare const getGlossaryCategories: (id: string, query: {
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
}, options?: ApiCallOptions) => Promise<GetGlossaryCategoriesHttpResponse>;
type GetGlossaryCategoriesHttpResponse = {
    data: CategoriesResult;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetGlossaryCategoriesHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetGlossaryCategoriesHttpResponse>;
};
type GetGlossaryCategoriesHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Creates a new category.
 *
 * @param id The glossary id.
 * @param body an object with the body content
 * @throws CreateGlossaryCategoryHttpError
 */
declare const createGlossaryCategory: (id: string, body: CreateCategory, options?: ApiCallOptions) => Promise<CreateGlossaryCategoryHttpResponse>;
type CreateGlossaryCategoryHttpResponse = {
    data: Category;
    headers: Headers;
    status: number;
};
type CreateGlossaryCategoryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Deletes a category.
 *
 * @param id The id of the glossary.
 * @param categoryId The id for the category to delete. All subcategories are also deleted
 * @throws DeleteGlossaryCategoryHttpError
 */
declare const deleteGlossaryCategory: (id: string, categoryId: string, options?: ApiCallOptions) => Promise<DeleteGlossaryCategoryHttpResponse>;
type DeleteGlossaryCategoryHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteGlossaryCategoryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves a category.
 *
 * @param id The glossary id.
 * @param categoryId The category id.
 * @throws GetGlossaryCategoryHttpError
 */
declare const getGlossaryCategory: (id: string, categoryId: string, options?: ApiCallOptions) => Promise<GetGlossaryCategoryHttpResponse>;
type GetGlossaryCategoryHttpResponse = {
    data: Category;
    headers: Headers;
    status: number;
};
type GetGlossaryCategoryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Updates category properties with json-patch formated data
 *
 * @param id The glossary id.
 * @param categoryId The category id.
 * @param body an object with the body content
 * @throws PatchGlossaryCategoryHttpError
 */
declare const patchGlossaryCategory: (id: string, categoryId: string, body: JSONPatchArray, options?: ApiCallOptions) => Promise<PatchGlossaryCategoryHttpResponse>;
type PatchGlossaryCategoryHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchGlossaryCategoryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Updates a category.
 *
 * @param id The glossary id.
 * @param categoryId The category id.
 * @param body an object with the body content
 * @throws UpdateGlossaryCategoryHttpError
 */
declare const updateGlossaryCategory: (id: string, categoryId: string, body: CreateCategory, options?: ApiCallOptions) => Promise<UpdateGlossaryCategoryHttpResponse>;
type UpdateGlossaryCategoryHttpResponse = {
    data: Category;
    headers: Headers;
    status: number;
};
type UpdateGlossaryCategoryHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Returns a list of terms for a glossary.
 *
 * @param id The glossary id.
 * @param query an object with query parameters
 * @throws GetGlossaryTermsHttpError
 */
declare const getGlossaryTerms: (id: string, query: {
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
}, options?: ApiCallOptions) => Promise<GetGlossaryTermsHttpResponse>;
type GetGlossaryTermsHttpResponse = {
    data: TermsResult;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetGlossaryTermsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetGlossaryTermsHttpResponse>;
};
type GetGlossaryTermsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Creates a new term.
 *
 * @param id The glossary id.
 * @param body an object with the body content
 * @throws CreateGlossaryTermHttpError
 */
declare const createGlossaryTerm: (id: string, body: CreateTerm, options?: ApiCallOptions) => Promise<CreateGlossaryTermHttpResponse>;
type CreateGlossaryTermHttpResponse = {
    data: Term;
    headers: Headers;
    status: number;
};
type CreateGlossaryTermHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Deletes a term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @throws DeleteGlossaryTermHttpError
 */
declare const deleteGlossaryTerm: (id: string, termId: string, options?: ApiCallOptions) => Promise<DeleteGlossaryTermHttpResponse>;
type DeleteGlossaryTermHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteGlossaryTermHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves a term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @throws GetGlossaryTermHttpError
 */
declare const getGlossaryTerm: (id: string, termId: string, options?: ApiCallOptions) => Promise<GetGlossaryTermHttpResponse>;
type GetGlossaryTermHttpResponse = {
    data: Term;
    headers: Headers;
    status: number;
};
type GetGlossaryTermHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Updates term properties with json-patch formated data
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param body an object with the body content
 * @throws PatchGlossaryTermHttpError
 */
declare const patchGlossaryTerm: (id: string, termId: string, body: JSONPatchArray, options?: ApiCallOptions) => Promise<PatchGlossaryTermHttpResponse>;
type PatchGlossaryTermHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchGlossaryTermHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Updates a term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param body an object with the body content
 * @throws UpdateGlossaryTermHttpError
 */
declare const updateGlossaryTerm: (id: string, termId: string, body: CreateTerm, options?: ApiCallOptions) => Promise<UpdateGlossaryTermHttpResponse>;
type UpdateGlossaryTermHttpResponse = {
    data: Term;
    headers: Headers;
    status: number;
};
type UpdateGlossaryTermHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Changes the status of the term. Only a steward can verify a term. Once the term is verified only a steward can modify the term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param query an object with query parameters
 * @throws ChangeGlossaryTermStatusHttpError
 */
declare const changeGlossaryTermStatus: (id: string, termId: string, query: {
    /** The status to update to. */
    status?: "draft" | "verified" | "deprecated";
}, options?: ApiCallOptions) => Promise<ChangeGlossaryTermStatusHttpResponse>;
type ChangeGlossaryTermStatusHttpResponse = {
    data: Term;
    headers: Headers;
    status: number;
};
type ChangeGlossaryTermStatusHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Returns a list of links assigned to a term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param query an object with query parameters
 * @throws GetGlossaryTermLinksHttpError
 */
declare const getGlossaryTermLinks: (id: string, termId: string, query: {
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
}, options?: ApiCallOptions) => Promise<GetGlossaryTermLinksHttpResponse>;
type GetGlossaryTermLinksHttpResponse = {
    data: LinksResult;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetGlossaryTermLinksHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetGlossaryTermLinksHttpResponse>;
};
type GetGlossaryTermLinksHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Creates a new link to a term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param body an object with the body content
 * @throws CreateGlossaryTermLinkHttpError
 */
declare const createGlossaryTermLink: (id: string, termId: string, body: TermCreateLinksTo, options?: ApiCallOptions) => Promise<CreateGlossaryTermLinkHttpResponse>;
type CreateGlossaryTermLinkHttpResponse = {
    data: TermLinksTo;
    headers: Headers;
    status: number;
};
type CreateGlossaryTermLinkHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Retrieves previous revisions of a term.
 *
 * @param id The glossary id.
 * @param termId The term id.
 * @param query an object with query parameters
 * @throws GetGlossaryTermRevisionsHttpError
 */
declare const getGlossaryTermRevisions: (id: string, termId: string, query: {
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
}, options?: ApiCallOptions) => Promise<GetGlossaryTermRevisionsHttpResponse>;
type GetGlossaryTermRevisionsHttpResponse = {
    data: TermsResult;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetGlossaryTermRevisionsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetGlossaryTermRevisionsHttpResponse>;
};
type GetGlossaryTermRevisionsHttpError = {
    data: ErrorResponse;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for glossaries api requests.
 */
declare function clearCache(): void;
interface GlossariesAPI {
    /**
     * Returns all glossaries.
     *
     * @param query an object with query parameters
     * @throws GetGlossariesHttpError
     */
    getGlossaries: typeof getGlossaries;
    /**
     * Creates a new glossary. Only a steward can create a glossary.
     *
     * @param body an object with the body content
     * @throws CreateGlossaryHttpError
     */
    createGlossary: typeof createGlossary;
    /**
     * Creates a new glossary, including categories and terms, based on a glossary definition file.
     * Supported formats are currently, qlik, atlan and atlas
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
     * Updates glossary properties with json-patch formated data
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
     * Updates category properties with json-patch formated data
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
     * Updates term properties with json-patch formated data
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
     * Changes the status of the term. Only a steward can verify a term. Once the term is verified only a steward can modify the term.
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
     * Creates a new link to a term.
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
}
/**
 * Functions for the glossaries api
 */
declare const glossariesExport: GlossariesAPI;

export { type AtlanEntity, type AtlanEntityAttributes, type AtlanGlossary, type AtlanRelationEntity, type AtlanRelationshipAttributes, type AtlanResourceLink, type AtlanTermHeader, type AtlasCategory, type AtlasGlossary, type AtlasTerm, type CategoriesResult, type Category, type ChangeGlossaryTermStatusHttpError, type ChangeGlossaryTermStatusHttpResponse, type CreateCategory, type CreateGlossary, type CreateGlossaryCategoryHttpError, type CreateGlossaryCategoryHttpResponse, type CreateGlossaryHttpError, type CreateGlossaryHttpResponse, type CreateGlossaryTermHttpError, type CreateGlossaryTermHttpResponse, type CreateGlossaryTermLinkHttpError, type CreateGlossaryTermLinkHttpResponse, type CreateTerm, type DeleteGlossaryCategoryHttpError, type DeleteGlossaryCategoryHttpResponse, type DeleteGlossaryHttpError, type DeleteGlossaryHttpResponse, type DeleteGlossaryTermHttpError, type DeleteGlossaryTermHttpResponse, type ErrorResponse, type ErrorResponseBadRequest, type ErrorResponseCode, type ErrorResponseForbidden, type ErrorResponseNotFound, type ExportCategory, type ExportGlossary, type ExportGlossaryHttpError, type ExportGlossaryHttpResponse, type ExportTerm, type GetGlossariesHttpError, type GetGlossariesHttpResponse, type GetGlossaryCategoriesHttpError, type GetGlossaryCategoriesHttpResponse, type GetGlossaryCategoryHttpError, type GetGlossaryCategoryHttpResponse, type GetGlossaryHttpError, type GetGlossaryHttpResponse, type GetGlossaryTermHttpError, type GetGlossaryTermHttpResponse, type GetGlossaryTermLinksHttpError, type GetGlossaryTermLinksHttpResponse, type GetGlossaryTermRevisionsHttpError, type GetGlossaryTermRevisionsHttpResponse, type GetGlossaryTermsHttpError, type GetGlossaryTermsHttpResponse, type GlossariesAPI, type GlossariesResult, type Glossary, type ImportCategory, type ImportGlossary400HttpError, type ImportGlossary403HttpError, type ImportGlossary404HttpError, type ImportGlossaryHttpError, type ImportGlossaryHttpResponse, type ImportOwner, type ImportTerm, type JSONPatch, type JSONPatchArray, type LinksResult, type PageLink, type PageLinks, type PatchGlossaryCategoryHttpError, type PatchGlossaryCategoryHttpResponse, type PatchGlossaryHttpError, type PatchGlossaryHttpResponse, type PatchGlossaryTermHttpError, type PatchGlossaryTermHttpResponse, type QlikGlossary, type ResultMeta, type StewardDetail, type Term, type TermCreateLinksTo, type TermLinksTo, type TermRelatesTo, type TermStatus, type TermTemplate, type TermsResult, type UpdateGlossaryCategoryHttpError, type UpdateGlossaryCategoryHttpResponse, type UpdateGlossaryHttpError, type UpdateGlossaryHttpResponse, type UpdateGlossaryTermHttpError, type UpdateGlossaryTermHttpResponse, changeGlossaryTermStatus, clearCache, createGlossary, createGlossaryCategory, createGlossaryTerm, createGlossaryTermLink, glossariesExport as default, deleteGlossary, deleteGlossaryCategory, deleteGlossaryTerm, exportGlossary, getGlossaries, getGlossary, getGlossaryCategories, getGlossaryCategory, getGlossaryTerm, getGlossaryTermLinks, getGlossaryTermRevisions, getGlossaryTerms, importGlossary, patchGlossary, patchGlossaryCategory, patchGlossaryTerm, updateGlossary, updateGlossaryCategory, updateGlossaryTerm };
