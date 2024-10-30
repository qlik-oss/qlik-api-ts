import { A as ApiCallOptions, D as DownloadableBlob } from './invoke-fetch-types-BLrpeZOL.js';
import './auth-types-PkN9CAF_.js';

type Analysis = "breakdown" | "changePoint" | "comparison" | "contribution" | "correlation" | "fact" | "mutualInfo" | "rank" | "spike" | "trend" | "values";
type AnalysisComposition = {
    description?: {
        long?: string;
        short?: string;
    };
    /** Upper and lower bounds for items of specific classification types */
    dims?: CompositionMinMax;
    /** Upper and lower bounds for items of specific classification types */
    geos?: CompositionMinMax;
    /** Upper and lower bounds for items of specific classification types */
    items?: CompositionMinMax;
    /** Upper and lower bounds for items of specific classification types */
    msrs?: CompositionMinMax;
    /** Upper and lower bounds for items of specific classification types */
    temporals?: CompositionMinMax;
};
type AnalysisDescriptor = {
    compositions?: AnalysisComposition[];
    id?: string;
    /** Used for period-specific analyses to indicate the defined or available calendar period must be of type autoCalendar */
    requiresAutoCalendarPeriod?: boolean;
    /** Used for period-specific analyses to indicate the temporal dimension must be associated with one or more analysis periods */
    requiresAvailableAnalysisPeriod?: boolean;
    /** Used for period-specific analyses to indicate the measure must be associated with one or more analysis periods */
    requiresDefinedAnalysisPeriod?: boolean;
    /** If analysis can work with master items (default is true) */
    supportsMasterItems?: boolean;
};
type AnalysisDescriptorResponse = {
    data?: AnalysisDescriptor[];
    links?: Links;
};
type AnalysisDetails = {
    analysis?: Analysis;
    analysisGroup?: AnalysisGroup;
    title?: string;
};
type AnalysisGroup = "anomaly" | "brekadown" | "comparison" | "correl" | "fact" | "list" | "mutualInfo" | "rank";
type AnalysisModelItemField = {
    /** classification defines the default role that attribute can play in an analysis */
    classifications?: Classifications;
    /** whether the field is hidden in business logic */
    isHidden?: boolean;
    /** populated only for fields */
    name?: string;
    simplifiedClassifications?: SimplifiedClassifications;
};
type AnalysisModelItemMasterItem = {
    caption?: string;
    /** classification defines the default role that attribute can play in an analysis */
    classifications?: Classifications;
    /** whether the master item is hidden in business logic */
    isHidden?: boolean;
    /** only available for master items */
    libId?: string;
    simplifiedClassifications?: SimplifiedClassifications;
};
type AnalysisModelResponse = {
    data?: AnalysisModelResponseDetail[];
    links?: Links;
};
type AnalysisModelResponseDetail = {
    fields?: AnalysisModelItemField[];
    /** set only if previous property is true, to indicate if the business logic passes validation */
    isDefinedLogicalModelValid?: boolean;
    /** if the analysis model is constructed based on a user-defined business-logic (as opposed to a default one) */
    isLogicalModelEnabled?: boolean;
    masterItems?: AnalysisModelItemMasterItem[];
};
/**
 * Request payload can be of two types, using natural language query or consist of fields or master items and optional target analysis.
 * In below examples, consider sales as a master item and product as field, so to get recommendations using sales and product,
 * you can utilize below three approaches, also you can set language parameter in headers as part of accept-language.
 * Examples:
 * ```
 * {
 *   'text': 'show me sales by product'
 * }
 * ```
 * ```
 * {
 *   'fields': [
 *     {
 *       'name': 'product'
 *     }
 *   ],
 *   'libItems': [
 *     {
 *       libId: 'NwQfJ'
 *     }
 *   ]
 * }
 * ```
 * ```
 * {
 *   'fields': [
 *     {
 *       'name': 'product'
 *     }
 *   ],
 *   'libItems': [
 *     {
 *       'libId': 'NwQfJ'
 *     }
 *   ],
 *   'targetAnalysis': {
 *     'id': 'rank-rank'
 *   }
 * }
 * ```
 */
type AnalysisRecommendRequest = RecommendNaturalLangQuery | RecommendItems;
type AnalysisRecommendationResponse = {
    data?: AnalysisRecommendationResponseDetail[];
};
type AnalysisRecommendationResponseDetail = {
    nluInfo?: PartialNluInfo[];
    recAnalyses: RecommendedAnalysis[];
};
type AppAttributes = {
    /** The description of the application */
    description?: string;
    /** Set custom locale instead of the system default */
    locale?: string;
    /** The name (title) of the application */
    name?: string;
    /** The space ID of the application */
    spaceId?: string;
    usage?: UsageEnum;
};
type AppContentList = {
    /** Content list items. */
    data?: AppContentListItem[];
    /** Content library name. */
    library?: string;
    /** Content library relative listing path. Empty in case of root listed or representing actual subpath listed. */
    subpath?: string;
};
type AppContentListItem = {
    /** Unique content identifier. */
    id?: string;
    /** Unique content link. */
    link?: string;
    /** Content name. */
    name?: string;
    /** Content type. */
    type?: string;
};
type AppObjectGenericType = "genericObject" | "genericBookmark" | "genericMeasure" | "genericDimension" | "genericVariable";
type AppUpdateAttributes = {
    /** The description of the application. */
    description?: string;
    /** The name (title) of the application. */
    name?: string;
};
/**
 * Chart type given to current recommendation
 */
type ChartType = "barchart" | "combochart" | "distributionplot" | "kpi" | "linechart" | "map" | "scatterplot" | "table";
/**
 * classification defines the default role that attribute can play in an analysis
 */
type Classifications = ("dimension" | "measure" | "temporal" | "city" | "address" | "boolean" | "country" | "date" | "email" | "geographical" | "geoPoint" | "geoPolygon" | "hour" | "latitude" | "monetary" | "ordinal" | "percentage" | "postalCode" | "quarter" | "stateProvince" | "timestamp" | "week" | "weekDay" | "year" | "yearDay")[];
/**
 * Upper and lower bounds for items of specific classification types
 */
type CompositionMinMax = {
    max?: number;
    min?: number;
};
type CreateApp = {
    attributes?: AppAttributes;
};
type DataModelMetadata = {
    /** List of field descriptions. */
    fields?: FieldMetadata[];
    /** If set to true, the app has section access configured. */
    has_section_access?: boolean;
    is_direct_query_mode?: boolean;
    reload_meta?: LastReloadMetadata;
    /** Static memory usage for the app. */
    static_byte_size?: number;
    /** List of table descriptions. */
    tables?: TableMetadata[];
    /** Profiling data of the tables in the app. */
    tables_profiling_data?: TableProfilingData[];
    usage?: UsageEnum;
};
/**
 * An error object.
 */
type Error = {
    /** The error code. */
    code: string;
    /** A human-readable explanation specific to this occurrence of the problem. */
    detail?: string;
    /** Additional properties relating to the error. */
    meta?: unknown;
    /** References to the source of the error. */
    source?: {
        /** The URI query parameter that caused the error. */
        parameter?: string;
        /** A JSON Pointer to the property that caused the error. */
        pointer?: string;
    };
    /** Summary of the problem. */
    title: string;
};
type Errors = {
    errors?: Error[];
};
type EvaluatorError = {
    errors?: {
        code?: string;
        status?: number;
        title?: string;
    }[];
};
type FieldAttrType = "U" | "A" | "I" | "R" | "F" | "M" | "D" | "T" | "TS" | "IV";
/**
 * Sets the formatting of a field.
 * The properties of _qFieldAttributes_ and the formatting mechanism are described below.
 *
 * ### Formatting mechanism
 * The formatting mechanism depends on the type set in _qType,_ as shown below:
 * <div class=note>In case of inconsistencies between the type and the format pattern, the format pattern takes precedence over the type.</div>
 *
 * ### Type is DATE, TIME, TIMESTAMP or INTERVAL
 * The following applies:
 * * If a format pattern is defined in _qFmt_ , the formatting is as defined in _qFmt_ .
 * * If _qFmt_ is empty, the formatting is defined by the number interpretation variables included at the top of the script ( _TimeFormat_ , _DateFormat_ , _TimeStampFormat_ ).
 * * The properties _qDec_ , _qThou_ , _qnDec_ , _qUseThou_ are not used.
 *
 * ### Type is INTEGER
 * The following applies:
 * * If a format pattern is defined in _qFmt_ , the engine looks at the values set in _qDec_ and _qThou_ . If these properties are not defined, the formatting mechanism uses the number interpretation variables included at the top of the script ( _DecimalSep_ and _ThousandSep_ ).
 * * If no format pattern is defined in _qFmt_ , no formatting is applied. The properties _qDec_ , _qThou_ , _qnDec_ , _qUseThou_ and the number interpretation variables defined in the script are not used .
 *
 * ### Type is REAL
 * The following applies:
 * * If a format pattern is defined in _qFmt_ , the engine looks at the values set in _qDec_ and _qThou_ . If these properties are not defined, the engine uses the number interpretation variables included at the top of the script ( _DecimalSep_ and _ThousandSep_ ).
 * * If no format pattern is defined in _qFmt_ , and if the value is almost an integer value (for example, 14,000012), the value is formatted as an integer. The properties _qDec_ , _qThou_ , _qnDec_ , _qUseThou_ are not used.
 * * If no format pattern is defined in _qFmt_ , and if _qnDec_ is defined and not 0, the property _qDec_ is used. If _qDec_ is not defined, the variable _DecimalSep_ defined at the top of the script is used.
 * * If no format pattern is defined in _qFmt_ , and if _qnDec_ is 0, the number of decimals is 14 and the property _qDec_ is used. If _qDec_ is not defined, the variable _DecimalSep_ defined at the top of the script is used.
 *
 * ### Type is FIX
 * The following applies:
 * * If a format pattern is defined in _qFmt_ , the engine looks at the values set in _qDec_ and _qThou_ . If these properties are not defined, the engine uses the number interpretation variables included at the top of the script ( _DecimalSep_ and _ThousandSep_ ).
 * * If no format pattern is defined in _qFmt_ , the properties _qDec_ and _qnDec_ are used. If _qDec_ is not defined, the variable _DecimalSep_ defined at the top of the script is used.
 *
 * ### Type is MONEY
 * The following applies:
 * * If a format pattern is defined in _qFmt_ , the engine looks at the values set in _qDec_ and _qThou_ . If these properties are not defined, the engine uses the number interpretation variables included at the top of any script ( _MoneyDecimalSep_ and _MoneyThousandSep_ ).
 * * If no format pattern is defined in _qFmt_ , the engine uses the number interpretation variables included at the top of the script ( _MoneyDecimalSep_ and _MoneyThousandSep_ ).
 *
 * ### Type is ASCII
 * No formatting, _qFmt_ is ignored.
 */
type FieldAttributes = {
    /** Defines the decimal separator.
     * Example: **.** */
    Dec?: string;
    /** Defines the format pattern that applies to _qText_ .
     * Is used in connection to the type of the field (parameter **qType** ).
     * For more information, see _Formatting mechanism_.
     * Example: _YYYY-MM-DD_ for a date. */
    Fmt?: string;
    /** Defines the thousand separator (if any).
     * Is used if **qUseThou** is set to 1.
     * Example: **,** */
    Thou?: string;
    Type?: FieldAttrType;
    /** Defines whether or not a thousands separator must be used.
     * Default is 0. */
    UseThou?: number;
    /** Number of decimals.
     * Default is 10. */
    nDec?: number;
};
type FieldInTableProfilingData = {
    /** Average of all numerical values. NaN otherwise. */
    Average?: number;
    /** Average string length of textual values. 0 otherwise. */
    AvgStringLen?: number;
    /** Number of distinct numeric values */
    DistinctNumericValues?: number;
    /** Number of distinct text values */
    DistinctTextValues?: number;
    /** Number of distinct values */
    DistinctValues?: number;
    /** Number of empty strings */
    EmptyStrings?: number;
    /** List of tags related to the field. */
    FieldTags?: string[];
    /** For textual values the first sorted string. */
    FirstSorted?: string;
    /** The .01, .05, .1, .25, .5, .75, .9, .95, .99 fractiles. Array of NaN otherwise. */
    Fractiles?: number[];
    FrequencyDistribution?: FrequencyDistributionData;
    /** Kurtosis of the numerical values. NaN otherwise. */
    Kurtosis?: number;
    /** For textual values the last sorted string. */
    LastSorted?: string;
    /** Maximum value of numerical values. NaN otherwise. */
    Max?: number;
    /** Maximum string length of textual values. 0 otherwise. */
    MaxStringLen?: number;
    /** Median of all numerical values. NaN otherwise. */
    Median?: number;
    /** Minimum value of numerical values. NaN otherwise. */
    Min?: number;
    /** Minimum string length of textual values. 0 otherwise. */
    MinStringLen?: number;
    /** Three most frequent values and their frequencies */
    MostFrequent?: SymbolFrequency[];
    /** Name of the field. */
    Name?: string;
    /** Number of negative values */
    NegValues?: number;
    /** Number of null values */
    NullValues?: number;
    /** Sets the formatting of a field.
     * The properties of _qFieldAttributes_ and the formatting mechanism are described below.
     *
     * ### Formatting mechanism
     * The formatting mechanism depends on the type set in _qType,_ as shown below:
     * <div class=note>In case of inconsistencies between the type and the format pattern, the format pattern takes precedence over the type.</div>
     *
     * ### Type is DATE, TIME, TIMESTAMP or INTERVAL
     * The following applies:
     * * If a format pattern is defined in _qFmt_ , the formatting is as defined in _qFmt_ .
     * * If _qFmt_ is empty, the formatting is defined by the number interpretation variables included at the top of the script ( _TimeFormat_ , _DateFormat_ , _TimeStampFormat_ ).
     * * The properties _qDec_ , _qThou_ , _qnDec_ , _qUseThou_ are not used.
     *
     * ### Type is INTEGER
     * The following applies:
     * * If a format pattern is defined in _qFmt_ , the engine looks at the values set in _qDec_ and _qThou_ . If these properties are not defined, the formatting mechanism uses the number interpretation variables included at the top of the script ( _DecimalSep_ and _ThousandSep_ ).
     * * If no format pattern is defined in _qFmt_ , no formatting is applied. The properties _qDec_ , _qThou_ , _qnDec_ , _qUseThou_ and the number interpretation variables defined in the script are not used .
     *
     * ### Type is REAL
     * The following applies:
     * * If a format pattern is defined in _qFmt_ , the engine looks at the values set in _qDec_ and _qThou_ . If these properties are not defined, the engine uses the number interpretation variables included at the top of the script ( _DecimalSep_ and _ThousandSep_ ).
     * * If no format pattern is defined in _qFmt_ , and if the value is almost an integer value (for example, 14,000012), the value is formatted as an integer. The properties _qDec_ , _qThou_ , _qnDec_ , _qUseThou_ are not used.
     * * If no format pattern is defined in _qFmt_ , and if _qnDec_ is defined and not 0, the property _qDec_ is used. If _qDec_ is not defined, the variable _DecimalSep_ defined at the top of the script is used.
     * * If no format pattern is defined in _qFmt_ , and if _qnDec_ is 0, the number of decimals is 14 and the property _qDec_ is used. If _qDec_ is not defined, the variable _DecimalSep_ defined at the top of the script is used.
     *
     * ### Type is FIX
     * The following applies:
     * * If a format pattern is defined in _qFmt_ , the engine looks at the values set in _qDec_ and _qThou_ . If these properties are not defined, the engine uses the number interpretation variables included at the top of the script ( _DecimalSep_ and _ThousandSep_ ).
     * * If no format pattern is defined in _qFmt_ , the properties _qDec_ and _qnDec_ are used. If _qDec_ is not defined, the variable _DecimalSep_ defined at the top of the script is used.
     *
     * ### Type is MONEY
     * The following applies:
     * * If a format pattern is defined in _qFmt_ , the engine looks at the values set in _qDec_ and _qThou_ . If these properties are not defined, the engine uses the number interpretation variables included at the top of any script ( _MoneyDecimalSep_ and _MoneyThousandSep_ ).
     * * If no format pattern is defined in _qFmt_ , the engine uses the number interpretation variables included at the top of the script ( _MoneyDecimalSep_ and _MoneyThousandSep_ ).
     *
     * ### Type is ASCII
     * No formatting, _qFmt_ is ignored. */
    NumberFormat?: FieldAttributes;
    /** Number of numeric values */
    NumericValues?: number;
    /** Number of positive values */
    PosValues?: number;
    /** Skewness of the numerical values. NaN otherwise. */
    Skewness?: number;
    /** Standard deviation of numerical values. NaN otherwise. */
    Std?: number;
    /** Sum of all numerical values. NaN otherwise. */
    Sum?: number;
    /** Squared sum of all numerical values. NaN otherwise. */
    Sum2?: number;
    /** Sum of all characters in strings in the field */
    SumStringLen?: number;
    /** Number of textual values */
    TextValues?: number;
    /** Number of zero values for numerical values */
    ZeroValues?: number;
};
type FieldMetadata = {
    /** If set to true, the field has one and only one selection (not 0 and not more than 1).
     * If this property is set to true, the field cannot be cleared anymore and no more selections can be performed in that field.
     * The default value is false. */
    always_one_selected?: boolean;
    /** Static RAM memory used in bytes. */
    byte_size?: number;
    /** Number of distinct field values. */
    cardinal?: number;
    /** Field comment. */
    comment?: string;
    /** If set to true, only distinct field values are shown.
     * The default value is false. */
    distinct_only?: boolean;
    /** Hash of the data in the field. If the data in a reload is the same, the hash will be consistent. */
    hash?: string;
    /** If set to true, the field is hidden.
     * The default value is false. */
    is_hidden?: boolean;
    /** If set to true, the field is locked.
     * The default value is false. */
    is_locked?: boolean;
    /** Is set to true if the value is a numeric.
     * The default value is false. */
    is_numeric?: boolean;
    /** If set to true, the field is semantic.
     * The default value is false. */
    is_semantic?: boolean;
    /** If set to true, the field is a system field.
     * The default value is false. */
    is_system?: boolean;
    /** Name of the field. */
    name?: string;
    /** List of table names. */
    src_tables?: string[];
    /** Gives information on a field. For example, it can return the type of the field.
     * Examples: key, text, ASCII. */
    tags?: string[];
    /** Total number of field values. */
    total_count?: number;
};
type FieldOverride = {
    classifications?: string[];
    defaultAggregation?: string;
};
type FileData = BodyInit;
type Filter = {
    readonly createdAt?: string;
    /** The filter description. */
    description?: string;
    filterType?: FilterType;
    filterV1_0?: FilterV10;
    filterVersion?: "filter-1.0" | "filter-2.0";
    /** The filter ID (bookmarkId). */
    readonly id?: string;
    /** The filter name. */
    name?: string;
    /** The user that owns the filter, if missing the same as the request user. */
    ownerId?: string;
    readonly updatedAt?: string;
};
/**
 * Error occured during the Filter creation.
 */
type FilterError = {
    /** The unique code for the error
     *
     * - "REP-400000" Bad request. The server could not understand the request due to invalid syntax.
     * - "REP-400008" Selections error.
     * - "REP-400015" Bad request in enigma request. The patch value has invalid JSON format.
     * - "REP-401000" Unauthorized. The client must authenticate itself to get the requested response.
     * - "REP-401001" Unauthorized, bad JWT.
     * - "REP-403000" Forbidden. The client does not have access rights to the content.
     * - "REP-403001" App forbidden, the user does not have read permission on the app.
     * - "REP-403002" Chart type not supported.
     * - "REP-404000" Not found. The server can not find the requested resource.
     * - "REP-409043" Filter name conflict. The filter name must be unique.
     * - "REP-429000" Too many request. The user has sent too many requests in a given amount of time ("rate limiting").
     * - "REP-429012" Exceeded max session tenant quota. A tenant has opened too many different sessions at the same time.
     * - "REP-429016" Exceeded max session tenant quota per day.
     * - "REP-500000" Fail to resolve resource.
     * - "REP-503005" Engine unavailable, qix-sessions error no engines available.
     * - "REP-503013" Session unavailable. The engine session used to create the report is unavailable.
     * - "REP-504042" Context deadline exceeded applying selections of the Filter.
     * - "REP-500031" Error creating bookmark.
     * - "REP-404032" Bookmark not found after creating the bookmark.
     * - "REP-500033" Error destroying bookmark.
     * - "REP-404033" Bookmark not found destroying the bookmark.
     * - "REP-409043" Dupliacate bookmark name.
     * - "REP-429034" Filters quota exceeded.
     * - "REP-400044" Missing or renamed field.
     * - "REP-403049" Report filter access not allowed. */
    code: string;
    /** A summary in english explaining what went wrong. */
    title: string;
};
/**
 * Errors occured during the Filter creation.
 */
type FilterErrors = {
    errors: FilterError[];
};
type FilterField = {
    /** Gets the resource description. */
    description?: string;
    name: string;
    overrideValues?: boolean;
    selectExcluded?: boolean;
    /** The filter values. */
    values?: FilterFieldValue[];
};
type FilterFieldValue = {
    valueAsNumber?: Float64;
    valueAsText?: string;
    valueType?: "string" | "number" | "evaluate" | "search";
};
type FilterItemPatch = {
    /** The filter description. */
    description?: string;
    filterV1_0?: FilterV10;
    filterVersion?: "filter-1.0" | "filter-2.0";
    /** The filter name. */
    name?: string;
    /** The user that owns the filter, if missing the same as the request user. */
    ownerId?: string;
};
type FilterList = {
    /** a list of filters containing all the filters properties (like name,description...) except the filter definition (like FilterV1_0) */
    data: FilterListItem[];
    links: LinksResponse;
};
type FilterListItem = {
    readonly createdAt?: string;
    /** The filter description. */
    readonly description?: string;
    filterType?: FilterType;
    filterV1_0?: FilterV10;
    readonly filterVersion?: "filter-1.0" | "filter-2.0";
    /** The filter ID (bookmarkId) */
    readonly id?: string;
    /** The filter name. */
    readonly name?: string;
    /** The user that owns the filter, if missing the same as the request user. */
    readonly ownerId?: string;
    readonly updatedAt?: string;
};
type FilterRequest = {
    /** The App ID. */
    appId?: string;
    /** The filter description. */
    description?: string;
    filterType: FilterType;
    filterV1_0?: FilterV10;
    filterVersion: "filter-1.0" | "filter-2.0";
    /** The filter name. */
    name: string;
    /** The user that owns the filter, if missing the same as the request user. */
    ownerId?: string;
};
type FilterType = "REP" | "SUB";
type FilterV10 = {
    /** Map of fields to apply by state. Maximum number of states allowed is 125. Maximum number of fields allowed is 125 and maximum number of overall field values allowed is 150000. */
    fieldsByState?: unknown;
    /** The filter variables. */
    variables?: FilterVariable[];
};
type FilterVariable = {
    evaluate?: boolean;
    name: string;
    value?: string;
};
type FiltersCount = {
    /** The total number of filters. */
    readonly total?: number;
};
type Float64 = number;
type FrequencyDistributionData = {
    /** Bins edges. */
    BinsEdges?: number[];
    /** Bins frequencies. */
    Frequencies?: number[];
    /** Number of bins. */
    NumberOfBins?: number;
};
type HardwareMeta = {
    /** Number of logical cores available. */
    logical_cores?: number;
    /** RAM available. */
    total_memory?: number;
};
type Href = {
    href?: string;
};
/**
 * Contains dynamic JSON data specified by the client.
 */
type JsonObject = unknown;
type LastReloadMetadata = {
    /** Number of CPU milliseconds it took to reload the app. */
    cpu_time_spent_ms?: number;
    /** Maximum number of bytes used during full reload of the app. */
    fullReloadPeakMemoryBytes?: number;
    hardware?: HardwareMeta;
    /** Maximum number of bytes used during partial reload of the app. */
    partialReloadPeakMemoryBytes?: number;
    /** Maximum number of bytes used during reload of the app. */
    peak_memory_bytes?: number;
};
type LineageInfoRest = {
    /** A string indicating the origin of the data:
     * * [filename]: the data comes from a local file.
     * * INLINE: the data is entered inline in the load script.
     * * RESIDENT: the data comes from a resident table. The table name is listed.
     * * AUTOGENERATE: the data is generated from the load script (no external table of data source).
     * * Provider: the data comes from a data connection. The connector source name is listed.
     * * [webfile]: the data comes from a web-based file.
     * * STORE: path to QVD or TXT file where data is stored.
     * * EXTENSION: the data comes from a Server Side Extension (SSE). */
    discriminator?: string;
    /** The LOAD and SELECT script statements from the data load script. */
    statement?: string;
};
type LinkResponse = {
    href?: string;
};
type Links = {
    next?: Href;
    prev?: Href;
    self?: Href;
};
type LinksResponse = {
    next: LinkResponse;
    prev: LinkResponse;
    self: LinkResponse;
};
type Log = {
    /** Provides a link to download the log file. */
    log?: string;
};
type NavigationLink = {
    href?: string;
};
type NavigationLinks = {
    next?: NavigationLink;
    prev?: NavigationLink;
};
/**
 * Application attributes and user privileges.
 */
type NxApp = {
    /** App attributes. This structure can also contain extra user-defined attributes. */
    attributes?: NxAttributes;
    /** Object create privileges. Hints to the client what type of objects the user is allowed to create. */
    create?: NxAppCreatePrivileges[];
    /** Application privileges.
     * Hints to the client what actions the user is allowed to perform.
     * Could be any of:
     * * read
     * * create
     * * update
     * * delete
     * * reload
     * * import
     * * publish
     * * duplicate
     * * export
     * * exportdata
     * * change_owner
     * * change_space */
    privileges?: string[];
};
type NxAppCreatePrivileges = {
    /** Is set to true if the user has privileges to create the resource. */
    canCreate?: boolean;
    /** Type of resource. For example, sheet, story, bookmark, etc. */
    resource?: string;
};
/**
 * Application object attributes and user privileges.
 */
type NxAppObject = {
    /** App object attributes. This structure can also contain extra user-defined attributes. */
    attributes?: NxObjectAttributes;
    /** Application object privileges.
     * Hints to the client what actions the user is allowed to perform.
     * Could be any of:
     * * read
     * * create
     * * update
     * * delete
     * * publish
     * * exportdata
     * * change_owner */
    privileges?: string[];
};
/**
 * App attributes. This structure can also contain extra user-defined attributes.
 */
type NxAttributes = {
    /** The date and time when the app was created. */
    createdDate?: string;
    /** Contains dynamic JSON data specified by the client. */
    custom?: JsonObject;
    /** App description. */
    description?: string;
    /** The dynamic color of the app. */
    dynamicColor?: string;
    /** If set to true, the app is encrypted. */
    encrypted?: boolean;
    /** If set to true, the app has section access configured, */
    hasSectionAccess?: boolean;
    /** The App ID. */
    id?: string;
    /** True if the app is a Direct Query app, false if not */
    isDirectQueryMode?: boolean;
    /** Date and time of the last reload of the app. */
    lastReloadTime?: string;
    /** The date and time when the app was modified. */
    modifiedDate?: string;
    /** App name. */
    name?: string;
    /** The Origin App ID for published apps. */
    originAppId?: string;
    /** @deprecated
     * Deprecated. Use the Users API to fetch user metadata. */
    owner?: string;
    /** Identifier of the app owner. */
    ownerId?: string;
    /** The date and time when the app was published, empty if unpublished. */
    publishTime?: string;
    /** True if the app is published on-prem, distributed in QCS, false if not. */
    published?: boolean;
    /** App thumbnail. */
    thumbnail?: string;
    usage?: UsageEnum;
};
/**
 * App object attributes. This structure can also contain extra user-defined attributes.
 */
type NxObjectAttributes = {
    /** True if the object is approved. */
    approved?: boolean;
    /** The date and time when the object was created. */
    createdAt?: string;
    /** Object description. */
    description?: string;
    genericType?: AppObjectGenericType;
    /** The object Id. */
    id?: string;
    /** Object name. */
    name?: string;
    /** The type of the object. */
    objectType?: string;
    /** The object owner's Id. */
    ownerId?: string;
    /** The date and time when the object was published, empty if unpublished. */
    publishedAt?: string;
    /** The date and time when the object was modified. */
    updatedAt?: string;
};
type NxPatch = {
    Op?: NxPatchOperationType;
    /** Path to the property to add, remove or replace. */
    Path?: string;
    /** This parameter is not used in a remove operation.
     * Corresponds to the value of the property to add or to the new value of the property to update.
     * Examples:
     * "false", "2", "\"New title\"" */
    Value?: string;
};
type NxPatchOperationType = "add" | "remove" | "replace";
/**
 * Contains break down of the asked question in the form of tokens with their classification.
 */
type PartialNluInfo = {
    /** Qlik sense application field selected for given token or phrase */
    fieldName?: string;
    /** Filter value found from query */
    fieldValue?: string;
    /** Role of the token or phrase from query */
    role?: "dimension" | "measure" | "date";
    /** Matching token or phrase from query */
    text?: string;
    /** Type of token from query */
    type?: "field" | "filter" | "master_dimension" | "master_measure" | "custom_analysis";
};
type PatchFilter = PatchFilterItem[];
type PatchFilterItem = {
    /** operation (replace). */
    op: "replace";
    /** A JSON Pointer path (/). */
    path: "/filter";
    /** The value to be used for this operation. The properties that cannot be patched include id, filterType, appId */
    value: {
        Filter?: FilterItemPatch;
    };
};
type PublishApp = {
    attributes?: AppUpdateAttributes;
    data?: PublishData;
    /** The original is moved instead of copied. The current published state of all objects is kept. */
    moveApp?: boolean;
    /** If app is moved, originAppId needs to be provided. */
    originAppId?: string;
    /** The managed space ID where the app will be published. */
    spaceId?: string;
};
type PublishData = "source" | "target";
/**
 * structure for providing fields in recommendation request, user can retrieve the fields using insight-analyses/model endpoint
 */
type RecommendFieldItem = {
    name?: string;
    overrides?: FieldOverride;
};
type RecommendItems = {
    fields?: RecommendFieldItem[];
    libItems?: RecommendMasterItem[];
    targetAnalysis?: {
        /** id of the target analysis, returned by the GET insight-analyses endpoint */
        id?: string;
    };
};
/**
 * structure for providing master items in recommendation request, user can retrieve the libId of master item using insight-analyses/model endpoint
 */
type RecommendMasterItem = {
    libId?: string;
    overrides?: {
        format?: NumberFormat;
    };
};
type RecommendNaturalLangQuery = {
    /** The NL query. */
    text: string;
};
type RecommendedAnalysis = RecommendedAnalysisCore & {
    /** part analyses (only for macro analyses) */
    parts?: RecommendedAnalysisCore[];
};
type RecommendedAnalysisCore = {
    analysis?: AnalysisDetails;
    /** Chart type given to current recommendation */
    chartType?: ChartType;
    /** (chart options + hypercube definition) */
    options?: unknown;
    /** percentage of selected items in the analysis to the overall items passed to the endpoint */
    relevance?: number;
};
type ReloadIncludeFile = {
    /** The connection name. */
    connection?: string;
    /** File location within the connection. */
    path?: string;
    /** File QRI resource identifier. */
    qri?: string;
};
type ReloadListMetadata = {
    /** Array of ReloadMeta. */
    data?: ReloadMeta[];
};
type ReloadMeta = {
    /** A Base64-encoded hash value of the new section access database. */
    accessDbHash?: string;
    /** A Base64-encoded hash value of the new app database. */
    appDbHash?: string;
    /** Duration of reload (ms). */
    duration?: number;
    /** Time when reload ended. */
    endTime?: string;
    /** Files brought into the script via include/mustInclude macros. */
    includeFiles?: ReloadIncludeFile[];
    /** True if the reload is a partial reload. */
    isPartialReload?: boolean;
    loadDataFilesBytes?: number;
    loadExternalBytes?: number;
    loadFilesBytes?: number;
    /** Reload identifier. */
    reloadId?: string;
    /** If greater than or equal 0, defines max number of rows loaded from a data source. */
    rowLimit?: number;
    /** Set to true to skip Store statements.
     * The default value is false. */
    skipStore?: boolean;
    /** List of external loaded or stored statements. */
    statements?: ReloadStatements[];
    storeDataFilesBytes?: number;
    storeFilesBytes?: number;
    /** A Base64-encoded hash value of all fields stored via the store statements. */
    storeHash?: string;
    /** true if the reload was successful. */
    success?: boolean;
};
type ReloadStatements = {
    /** The connecton name. */
    connection?: string;
    /** Connection ID. */
    connectionId?: string;
    /** Data loaded from the network (bytes). */
    dataSize?: number;
    /** Duration of data generation (ms). */
    duration?: number;
    /** Label of the resource level node in lineage. */
    label?: string;
    /** Number of fields loaded. */
    nbrOfFields?: number;
    /** Number of rows loaded. */
    nbrOfRows?: number;
    /** Partial load operation. e.g. add/replace/update/merge. n/a when not in partial load mode. */
    partialReloadOperation?: string;
    /** Resource Identifier. */
    qri?: string;
    /** Name of the source table in lineage. */
    tableName?: string;
    /** Type of statement, e.g. Store/Load. */
    type?: string;
};
type RepublishApp = {
    attributes?: AppUpdateAttributes;
    /** Validate that source app is same as originally published. */
    checkOriginAppId?: boolean;
    data?: PublishData;
    /** The target ID to be republished. */
    targetId?: string;
};
type ScriptLogList = {
    /** Array of scriptLogMeta. */
    data?: ScriptLogMeta[];
};
type ScriptLogMeta = {
    /** Duration of reload (ms). */
    duration?: number;
    /** Time when reload ended. */
    endTime?: string;
    links?: Log;
    /** Reload identifier. */
    reloadId?: string;
    /** True if the reload was successful. */
    success?: boolean;
};
type ScriptMeta = {
    /** Script version last modification time. */
    modifiedTime?: string;
    /** User last modifying script version. */
    modifierId?: string;
    /** Script id. */
    scriptId?: string;
    /** Script size. */
    size?: number;
    /** Description of this script version */
    versionMessage?: string;
};
type ScriptMetaList = {
    links?: NavigationLinks;
    /** Script versions metadata. */
    scripts?: ScriptMeta[];
};
type ScriptVersion = {
    /** Script text. */
    script?: string;
    /** Description of this script version */
    versionMessage?: string;
};
type SimplifiedClassifications = ("dimension" | "measure" | "temporal" | "geographical")[];
type SymbolFrequency = {
    /** Frequency of the above symbol in the field */
    Frequency?: number;
    Symbol?: SymbolValue;
};
type SymbolValue = {
    /** Numeric value of the symbol. NaN otherwise. */
    Number?: number;
    /** String value of the symbol. This parameter is optional and present only if Symbol is a string. */
    Text?: string;
};
type TableMetadata = {
    /** Static RAM memory used in bytes. */
    byte_size?: number;
    /** Table comment. */
    comment?: string;
    /** If set to true, the table is loose due to circular connection.
     * The default value is false. */
    is_loose?: boolean;
    /** If set to true, the table is semantic.
     * The default value is false. */
    is_semantic?: boolean;
    /** If set to true, the table is a system table.
     * The default value is false. */
    is_system?: boolean;
    /** Name of the table. */
    name?: string;
    /** Number of fields. */
    no_of_fields?: number;
    /** Number of key fields. */
    no_of_key_fields?: number;
    /** Number of rows. */
    no_of_rows?: number;
};
type TableProfilingData = {
    /** Field values profiling info */
    FieldProfiling?: FieldInTableProfilingData[];
    /** Number of rows in the table. */
    NoOfRows?: number;
};
type UpdateApp = {
    attributes?: AppUpdateAttributes;
};
type UpdateOwner = {
    ownerId?: string;
};
type UpdateSpace = {
    spaceId?: string;
};
type UsageEnum = "ANALYTICS" | "DATA_PREPARATION" | "DATAFLOW_PREP" | "SINGLE_TABLE_PREP";
type UserPrivileges = "can_create_app" | "can_import_app" | "can_create_session_app";
type Classification = {
    absoluteDiff?: number;
    diff?: number;
    trend?: string;
};
type Cmpbool = Classification & {
    baseline?: boolean;
    comparison?: boolean;
};
type Cmpfloat = Classification & {
    baseline?: number;
    comparison?: number;
};
type CmpfloatWithTimeout = Cmpfloat & {
    baselineTimeoutStatusCode?: string;
    comparisonTimeoutStatusCode?: string;
};
type Cmpint = Classification & {
    baseline?: number;
    comparison?: number;
};
type Comparison = {
    appOpenTimeSeconds?: Cmpfloat;
    dataModelSizeMib?: Cmpfloat;
    documentSizeMib?: Cmpfloat;
    fileSizeMib?: Cmpfloat;
    hasSectionAccess?: Cmpbool;
    maxMemoryMib?: Cmpfloat;
    objHeavy?: Sortedcomparisonoobjheavy;
    objMemoryLimit?: ComparisonobjMemoryLimit;
    objNoCache?: Sortedcomparisonobjresponsetime;
    objSingleThreaded?: Sortedcomparisonobjresponsetime;
    objSlowCached?: Sortedcomparisonobjresponsetime;
    objSlowUncached?: Sortedcomparisonobjresponsetime;
    objectCount?: Cmpint;
    rowCount?: Cmpint;
    sheetCount?: Cmpint;
    sheetsCached?: Sortedcomparisonobjresponsetime;
    sheetsUncached?: Sortedcomparisonobjresponsetime;
    topFieldsByBytes?: Sortedcomparisonfields;
    topTablesByBytes?: Sortedcomparisontables;
};
type Comparisonfields = (Objecttopspec & {
    byte_size?: Cmpint;
    cardinal?: Cmpint;
    dataSourceStatus?: "full" | "none" | "baselinemissing" | "comparisonmissing";
    is_system?: Cmpbool;
    name?: string;
    total_count?: Cmpint;
})[];
type ComparisonobjMemoryLimit = (Objectspec & {
    baselineMemoryLimitStatusCode?: string;
    comparisonMemoryLimitStatusCode?: string;
    dataSourceStatus?: "full" | "none" | "baselinemissing" | "comparisonmissing";
})[];
type Comparisonobjresponsetime = (Objectspec & {
    dataSourceStatus?: "full" | "none" | "baselinemissing" | "comparisonmissing";
    responseTimeSeconds1?: CmpfloatWithTimeout;
    responseTimeSeconds2?: CmpfloatWithTimeout;
})[];
type Comparisonoobjheavy = (Objectspec & {
    cpuQuotient1?: Cmpfloat;
    cpuQuotient2?: Cmpfloat;
    cpuSeconds1?: Cmpfloat;
    cpuSeconds2?: Cmpfloat;
    dataSourceStatus?: "full" | "none" | "baselinemissing" | "comparisonmissing";
})[];
type Comparisontables = (Objecttopspec & {
    byte_size?: Cmpint;
    dataSourceStatus?: "full" | "none" | "baselinemissing" | "comparisonmissing";
    is_system?: Cmpbool;
    name?: string;
    no_of_rows?: Cmpint;
})[];
type Evaluation = {
    appId?: string;
    appItemId?: string;
    appName?: string;
    details?: {
        concurrentReload?: boolean;
        dedicated?: boolean;
        engineHasCache?: boolean;
        errors?: string[];
        objectMetrics?: unknown;
        warnings?: string[];
    };
    ended?: string;
    events?: Event[];
    id?: string;
    metadata?: Metadata;
    result?: Result;
    sheetId?: string;
    sheetTitle?: string;
    started?: string;
    status?: string;
    tenantId?: string;
    timestamp?: string;
    version?: number;
};
type Evaluations = {
    data?: Evaluation[];
    links?: {
        next?: {
            href?: Href;
        };
        prev?: {
            href?: Href;
        };
    };
};
type Event = {
    details?: string;
    errorCode?: string;
    objectId?: string;
    objectTitle?: string;
    objectType?: string;
    objectVisualization?: string;
    severity?: string;
    sheetId?: string;
    sheetTitle?: string;
};
type Metadata = {
    amountofcardinalfieldvalues?: number;
    amountoffields?: number;
    amountoffieldvalues?: number;
    amountofrows?: number;
    amountoftables?: number;
    hassectionaccess?: boolean;
    reloadmeta?: {
        cpuspent?: number;
        peakmemorybytes?: number;
    };
    staticbytesize?: number;
};
type NumberFormat = {
    qDec?: string;
    qFmt?: string;
    qThou?: string;
    qType?: string;
    qUseThou?: number;
    qnDec?: number;
};
type Objectmetrics = {
    cpuQuotients?: number[];
    cpuSeconds?: number[];
    responseTimeSeconds?: number;
};
type Objectspec = {
    id?: string;
    objectType?: string;
    sheetId?: string;
    title?: string;
};
type Objecttopspec = {
    byte_size?: number;
    is_system?: boolean;
    name?: string;
};
type Result = {
    documentSizeMiB?: number;
    hasSectionAccess?: boolean;
    objMemoryLimit?: ResultobjMemoryLimit[];
    objNoCache?: Resultobjresponsetime[];
    objSingleThreaded?: Resultsingle[];
    objSlowCached?: Resultobjresponsetime[];
    objSlowUncached?: Resultobjresponsetime[];
    objectCount?: number;
    rowCount?: number;
    sheetCount?: number;
    sheets?: Resultobjsheet[];
    topFieldsByBytes?: Resultmetadatatopfields[];
    topTablesByBytes?: Resultmetadatatoptables[];
};
type Resultentry = Objectspec & {
    passes?: Objectmetrics[];
};
type Resultmetadatatopfields = Objecttopspec & {
    byte_size?: number;
    name?: string;
};
type Resultmetadatatoptables = Objecttopspec & {
    byte_size?: number;
    name?: string;
};
type ResultobjMemoryLimit = Objectspec & {
    memoryLimitStatusCode?: string;
};
type Resultobjresponsetime = Objectspec & {
    responseTimeSeconds?: number;
    timeoutStatusCode?: string;
};
type Resultobjsheet = {
    objectCount?: number;
    sheet?: Resultobjresponsetime;
    sheetObjects?: Resultobjresponsetime[];
};
type Resultsingle = Objectspec & {
    cpuQuotient1?: number;
};
type Sortedcomparisonfields = {
    absoluteDiffAsc?: Comparisonfields;
    absoluteDiffDesc?: Comparisonfields;
    dataSourceStatus?: "full" | "none" | "baselinemissing" | "comparisonmissing";
    list?: Comparisonfields;
    relativeDiffAsc?: Comparisonfields;
    relativeDiffDesc?: Comparisonfields;
};
type Sortedcomparisonobjresponsetime = {
    absoluteDiffAsc?: Comparisonobjresponsetime;
    absoluteDiffDesc?: Comparisonobjresponsetime;
    dataSourceStatus?: "full" | "none" | "baselinemissing" | "comparisonmissing";
    list?: Comparisonobjresponsetime;
    relativeDiffAsc?: Comparisonobjresponsetime;
    relativeDiffDesc?: Comparisonobjresponsetime;
};
type Sortedcomparisonoobjheavy = {
    absoluteDiffAsc?: Comparisonoobjheavy;
    absoluteDiffDesc?: Comparisonoobjheavy;
    dataSourceStatus?: "full" | "none" | "baselinemissing" | "comparisonmissing";
    list?: Comparisonoobjheavy;
    relativeDiffAsc?: Comparisonoobjheavy;
    relativeDiffDesc?: Comparisonoobjheavy;
};
type Sortedcomparisontables = {
    absoluteDiffAsc?: Comparisontables;
    absoluteDiffDesc?: Comparisontables;
    dataSourceStatus?: "full" | "none" | "baselinemissing" | "comparisonmissing";
    list?: Comparisontables;
    relativeDiffAsc?: Comparisontables;
    relativeDiffDesc?: Comparisontables;
};
/**
 * Creates a new app.
 *
 * @param body an object with the body content
 * @throws CreateAppHttpError
 */
declare const createApp: (body: CreateApp, options?: ApiCallOptions) => Promise<CreateAppHttpResponse>;
type CreateAppHttpResponse = {
    data: NxApp;
    headers: Headers;
    status: number;
};
type CreateAppHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Accepts two evaluation ids and returns a comparison denoting the differences between the two.
 *
 * @param baseid Id of the baseline evaluation
 * @param comparisonid Id of the comparison evaluation
 * @param query an object with query parameters
 * @throws GetAppEvaluationComparisonHttpError
 */
declare const getAppEvaluationComparison: (baseid: string, comparisonid: string, query: {
    /** Get the full list of comparisons including non-significant diffs */
    all?: boolean;
    /** Specify output format, currently supported are 'json' and 'xml' */
    format?: string;
}, options?: ApiCallOptions) => Promise<GetAppEvaluationComparisonHttpResponse>;
type GetAppEvaluationComparisonHttpResponse = {
    data: Comparison;
    headers: Headers;
    status: number;
};
type GetAppEvaluationComparisonHttpError = {
    data: EvaluatorError;
    headers: Headers;
    status: number;
};
/**
 * Accepts two evaluation ids and downloads a log, in XML format, denoting the differences between the two.
 *
 * @param baseid Id of the baseline evaluation
 * @param comparisonid Id of the comparison evaluation
 * @throws GetAppEvaluationComparisonXmlHttpError
 */
declare const getAppEvaluationComparisonXml: (baseid: string, comparisonid: string, options?: ApiCallOptions) => Promise<GetAppEvaluationComparisonXmlHttpResponse>;
type GetAppEvaluationComparisonXmlHttpResponse = {
    data: Comparison;
    headers: Headers;
    status: number;
};
type GetAppEvaluationComparisonXmlHttpError = {
    data: EvaluatorError;
    headers: Headers;
    status: number;
};
/**
 * Find an evaluation by a specific id.
 *
 * @param id Id of the desired evaluation.
 * @param query an object with query parameters
 * @throws GetAppEvaluationHttpError
 */
declare const getAppEvaluation: (id: string, query: {
    /** Get the full data of the evaluation */
    all?: boolean;
    /** Specify output format, currently supported are 'json' and 'xml' */
    format?: string;
}, options?: ApiCallOptions) => Promise<GetAppEvaluationHttpResponse>;
type GetAppEvaluationHttpResponse = {
    data: Evaluation;
    headers: Headers;
    status: number;
};
type GetAppEvaluationHttpError = {
    data: EvaluatorError;
    headers: Headers;
    status: number;
};
/**
 * Find and download an evaluation log by a specific evaluation id.
 *
 * @param id Id of the desired evaluation.
 * @throws GetAppEvaluationXmlHttpError
 */
declare const getAppEvaluationXml: (id: string, options?: ApiCallOptions) => Promise<GetAppEvaluationXmlHttpResponse>;
type GetAppEvaluationXmlHttpResponse = {
    data: Evaluation;
    headers: Headers;
    status: number;
};
type GetAppEvaluationXmlHttpError = {
    data: EvaluatorError;
    headers: Headers;
    status: number;
};
/**
 * Imports an app into the system.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws ImportAppHttpError
 */
declare const importApp: (query: {
    /** If NoData is true, the data of the existing app will be kept as is, otherwise it will be replaced by the new incoming data. */
    NoData?: boolean;
    /** The app ID of the target app when source is qvw file. */
    appId?: string;
    /** The name of the target app when source does not have a specified name, applicable if source is qvw file. */
    fallbackName?: string;
    /** The file ID to be downloaded from Temporary Content Service (TCS) and used during import. */
    fileId?: string;
    /** The import mode. In `new` mode (default), the source app will be imported as a new app.<div class=note>The `autoreplace` mode is an internal mode only and is not permitted for external use.</div>
     *
     * One of:
     * * NEW
     * * AUTOREPLACE */
    mode?: string;
    /** The name of the target app. */
    name?: string;
    /** The space ID of the target app. */
    spaceId?: string;
}, body: BodyInit, options?: ApiCallOptions) => Promise<ImportAppHttpResponse>;
type ImportAppHttpResponse = {
    data: NxApp;
    headers: Headers;
    status: number;
};
type ImportAppHttpError = {
    data: void;
    headers: Headers;
    status: number;
};
/**
 * Gets the app privileges for the current user, such as create app and import app. Empty means that the current user has no app privileges.
 *
 * @throws GetAppsPrivilegesHttpError
 */
declare const getAppsPrivileges: (options?: ApiCallOptions) => Promise<GetAppsPrivilegesHttpResponse>;
type GetAppsPrivilegesHttpResponse = {
    data: UserPrivileges[];
    headers: Headers;
    status: number;
};
type GetAppsPrivilegesHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Deletes a specific app.
 *
 * @param appId Identifier of the app.
 * @throws DeleteAppHttpError
 */
declare const deleteApp: (appId: string, options?: ApiCallOptions) => Promise<DeleteAppHttpResponse>;
type DeleteAppHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteAppHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Retrieves information for a specific app.
 *
 * @param appId Identifier of the app.
 * @throws GetAppInfoHttpError
 */
declare const getAppInfo: (appId: string, options?: ApiCallOptions) => Promise<GetAppInfoHttpResponse>;
type GetAppInfoHttpResponse = {
    data: NxApp;
    headers: Headers;
    status: number;
};
type GetAppInfoHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Updates the information for a specific app.
 *
 * @param appId Identifier of the app.
 * @param body an object with the body content
 * @throws UpdateAppInfoHttpError
 */
declare const updateAppInfo: (appId: string, body: UpdateApp, options?: ApiCallOptions) => Promise<UpdateAppInfoHttpResponse>;
type UpdateAppInfoHttpResponse = {
    data: NxApp;
    headers: Headers;
    status: number;
};
type UpdateAppInfoHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Copies a specific app.
 *
 * @param appId Identifier of the app.
 * @param body an object with the body content
 * @throws CopyAppHttpError
 */
declare const copyApp: (appId: string, body: CreateApp, options?: ApiCallOptions) => Promise<CopyAppHttpResponse>;
type CopyAppHttpResponse = {
    data: NxApp;
    headers: Headers;
    status: number;
};
type CopyAppHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Retrieves the lineage for an app.
 * Returns a JSON-formatted array of strings describing the lineage of the app.
 *
 * @param appId Identifier of the app.
 * @throws GetAppDataLineageHttpError
 */
declare const getAppDataLineage: (appId: string, options?: ApiCallOptions) => Promise<GetAppDataLineageHttpResponse>;
type GetAppDataLineageHttpResponse = {
    data: LineageInfoRest[];
    headers: Headers;
    status: number;
};
type GetAppDataLineageHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Retrieves the data model and reload statistics metadata of an app.
 * An empty metadata structure is returned if the metadata is not available in the app.
 *
 * @param appId Identifier of the app.
 * @throws GetAppDataMetadataHttpError
 */
declare const getAppDataMetadata: (appId: string, options?: ApiCallOptions) => Promise<GetAppDataMetadataHttpResponse>;
type GetAppDataMetadataHttpResponse = {
    data: DataModelMetadata;
    headers: Headers;
    status: number;
};
type GetAppDataMetadataHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Exports a specific app.
 *
 * @param appId Identifier of the app.
 * @param query an object with query parameters
 * @throws ExportAppHttpError
 */
declare const exportApp: (appId: string, query: {
    /** The flag indicating if only object contents should be exported. */
    NoData?: boolean;
}, options?: ApiCallOptions) => Promise<ExportAppHttpResponse>;
type ExportAppHttpResponse = {
    data: DownloadableBlob;
    headers: Headers;
    status: number;
};
type ExportAppHttpError = {
    data: void;
    headers: Headers;
    status: number;
};
/**
 * Returns information about supported analyses for the app's data model. Lists available analysis types, along with minimum and maximum number of dimensions, measures, and fields.
 *
 * @param appId Qlik Sense app identifier
 * @throws GetAppInsightAnalysesHttpError
 */
declare const getAppInsightAnalyses: (appId: string, options?: ApiCallOptions) => Promise<GetAppInsightAnalysesHttpResponse>;
type GetAppInsightAnalysesHttpResponse = {
    data: AnalysisDescriptorResponse;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetAppInsightAnalysesHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetAppInsightAnalysesHttpResponse>;
};
type GetAppInsightAnalysesHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Returns analysis recommendations in response to a natural language question, a set of fields and master items, or a set of fields and master items with an optional target analysis.
 *
 * @param appId Qlik Sense app identifier
 * @param body an object with the body content
 * @throws GetAppInsightAnalysisRecommendationsHttpError
 */
declare const getAppInsightAnalysisRecommendations: (appId: string, body: AnalysisRecommendRequest, options?: ApiCallOptions) => Promise<GetAppInsightAnalysisRecommendationsHttpResponse>;
type GetAppInsightAnalysisRecommendationsHttpResponse = {
    data: AnalysisRecommendationResponse;
    headers: Headers;
    status: number;
};
type GetAppInsightAnalysisRecommendationsHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Returns information about model used to make analysis recommendations. Lists all fields and master items in the logical model, along with an indication of the validity of the logical model if the default is not used.
 *
 * @param appId Qlik Sense app identifier
 * @throws GetAppInsightAnalysisModelHttpError
 */
declare const getAppInsightAnalysisModel: (appId: string, options?: ApiCallOptions) => Promise<GetAppInsightAnalysisModelHttpResponse>;
type GetAppInsightAnalysisModelHttpResponse = {
    data: AnalysisModelResponse;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetAppInsightAnalysisModelHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetAppInsightAnalysisModelHttpResponse>;
};
type GetAppInsightAnalysisModelHttpError = {
    data: Errors;
    headers: Headers;
    status: number;
};
/**
 * Deletes a media content file or complete directory.
 * Returns OK if the bytes containing the media file (or the complete content of a directory) were successfully deleted, or error in case of failure or lack of permission.
 *
 * @param appId Unique application identifier.
 * @param path Path to file content.
 * @throws DeleteAppMediaHttpError
 */
declare const deleteAppMedia: (appId: string, path: string, options?: ApiCallOptions) => Promise<DeleteAppMediaHttpResponse>;
type DeleteAppMediaHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteAppMediaHttpError = {
    data: void;
    headers: Headers;
    status: number;
};
/**
 * Gets media content from file.
 * Returns a stream of bytes containing the media file content on success, or error if file is not found.
 *
 * @param appId Unique application identifier.
 * @param path Path to file content.
 * @throws GetAppMediaHttpError
 */
declare const getAppMedia: (appId: string, path: string, options?: ApiCallOptions) => Promise<GetAppMediaHttpResponse>;
type GetAppMediaHttpResponse = {
    data: DownloadableBlob;
    headers: Headers;
    status: number;
};
type GetAppMediaHttpError = {
    data: void;
    headers: Headers;
    status: number;
};
/**
 * Stores the media content file.
 * Returns OK if the bytes containing the media file content were successfully stored, or error in case of failure, lack of permission or file already exists on the supplied path.
 *
 * @param appId Unique application identifier.
 * @param path Path to file content.
 * @param body an object with the body content
 * @throws UploadAppMediaHttpError
 */
declare const uploadAppMedia: (appId: string, path: string, body: BodyInit, options?: ApiCallOptions) => Promise<UploadAppMediaHttpResponse>;
type UploadAppMediaHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type UploadAppMediaHttpError = {
    data: void;
    headers: Headers;
    status: number;
};
/**
 * Lists media content.
 * Returns a JSON formatted array of strings describing the available media content or error if the optional path supplied is not found.
 *
 * @param appId Unique application identifier.
 * @param path The path to sub folder with static content relative to the root folder. Use empty path to access the root folder.
 * @param query an object with query parameters
 * @throws GetAppMediaListHttpError
 */
declare const getAppMediaList: (appId: string, path: string, query: {
    /** Optional. List output can include files and folders in different ways:
     * * Not recursive, default if show option is not supplied or incorrectly specified, results in output with files and empty directories for the path specified only.
     * * Recursive(r), use ?show=r or ?show=recursive, results in a recursive output with files, all empty folders are excluded.
     * * All(a), use ?show=a or ?show=all, results in a recursive output with files and empty directories. */
    show?: string;
}, options?: ApiCallOptions) => Promise<GetAppMediaListHttpResponse>;
type GetAppMediaListHttpResponse = {
    data: AppContentList;
    headers: Headers;
    status: number;
};
type GetAppMediaListHttpError = {
    data: void;
    headers: Headers;
    status: number;
};
/**
 * Gets media content from file currently used as application thumbnail.
 * Returns a stream of bytes containing the media file content on success, or error if file is not found.
 * The image selected as thumbnail is only updated when application is saved.
 *
 * @param appId Unique application identifier.
 * @throws GetAppThumbnailHttpError
 */
declare const getAppThumbnail: (appId: string, options?: ApiCallOptions) => Promise<GetAppThumbnailHttpResponse>;
type GetAppThumbnailHttpResponse = {
    data: DownloadableBlob;
    headers: Headers;
    status: number;
};
type GetAppThumbnailHttpError = {
    data: void;
    headers: Headers;
    status: number;
};
/**
 * Sets owner on an app object.
 * The user must be the owner of the object.
 *
 * @param appId Identifier of the app.
 * @param objectId Identifier of the object.
 * @param body an object with the body content
 * @throws UpdateAppObjectOwnerHttpError
 */
declare const updateAppObjectOwner: (appId: string, objectId: string, body: UpdateOwner, options?: ApiCallOptions) => Promise<UpdateAppObjectOwnerHttpResponse>;
type UpdateAppObjectOwnerHttpResponse = {
    data: NxAppObject;
    headers: Headers;
    status: number;
};
type UpdateAppObjectOwnerHttpError = {
    data: void;
    headers: Headers;
    status: number;
};
/**
 * Changes owner of the app.
 *
 * @param appId Identifier of the app.
 * @param body an object with the body content
 * @throws UpdateAppOwnerHttpError
 */
declare const updateAppOwner: (appId: string, body: UpdateOwner, options?: ApiCallOptions) => Promise<UpdateAppOwnerHttpResponse>;
type UpdateAppOwnerHttpResponse = {
    data: NxApp;
    headers: Headers;
    status: number;
};
type UpdateAppOwnerHttpError = {
    data: void;
    headers: Headers;
    status: number;
};
/**
 * Publishes a specific app to a managed space.
 *
 * @param appId Identifier of the app.
 * @param body an object with the body content
 * @throws PublishAppHttpError
 */
declare const publishApp: (appId: string, body: PublishApp, options?: ApiCallOptions) => Promise<PublishAppHttpResponse>;
type PublishAppHttpResponse = {
    data: NxApp;
    headers: Headers;
    status: number;
};
type PublishAppHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Republishes a published app to a managed space.
 *
 * @param appId Identifier of the app.
 * @param body an object with the body content
 * @throws RepublishAppHttpError
 */
declare const republishApp: (appId: string, body: RepublishApp, options?: ApiCallOptions) => Promise<RepublishAppHttpResponse>;
type RepublishAppHttpResponse = {
    data: NxApp;
    headers: Headers;
    status: number;
};
type RepublishAppHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Retrieves the metadata about all script logs stored for an app.
 * Returns an array of ScriptLogMeta objects.
 *
 * @param appId Identifier of the app.
 * @throws GetAppReloadLogsHttpError
 */
declare const getAppReloadLogs: (appId: string, options?: ApiCallOptions) => Promise<GetAppReloadLogsHttpResponse>;
type GetAppReloadLogsHttpResponse = {
    data: ScriptLogList;
    headers: Headers;
    status: number;
};
type GetAppReloadLogsHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Retrieves the log of a specific reload.
 * Returns the log as "text/plain; charset=UTF-8".
 *
 * @param appId Identifier of the app.
 * @param reloadId Identifier of the reload.
 * @throws GetAppReloadLogHttpError
 */
declare const getAppReloadLog: (appId: string, reloadId: string, options?: ApiCallOptions) => Promise<GetAppReloadLogHttpResponse>;
type GetAppReloadLogHttpResponse = {
    data: DownloadableBlob;
    headers: Headers;
    status: number;
};
type GetAppReloadLogHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Retrieves the app reload metadata list.
 * Reload metadata contains reload information, including reload id, duration, endtime and lineage load info.
 *
 * @param appId Identifier of the app
 * @param reloadId Identifier of the reload. Use empty reloadId to get all reloads.
 * @param query an object with query parameters
 * @throws GetAppReloadMetadataHttpError
 */
declare const getAppReloadMetadata: (appId: string, reloadId: string, query: {
    /** Include metadata for reloads ran with SkipStore flag set to true. Default: false */
    includeSkipStoreReloads?: boolean;
    /** Maximum number of records to return from this request. Default: 100 */
    limit?: string;
}, options?: ApiCallOptions) => Promise<GetAppReloadMetadataHttpResponse>;
type GetAppReloadMetadataHttpResponse = {
    data: ReloadListMetadata;
    headers: Headers;
    status: number;
};
type GetAppReloadMetadataHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * List all filters that are present in the given app. Filters allow to reduce the app data visible in a report output. Each filter can contain definitions on one or multiple fields.
 *
 * @param appId Qlik Sense app identifier
 * @param query an object with query parameters
 * @throws GetAppReportFiltersHttpError
 */
declare const getAppReportFilters: (appId: string, query: {
    /** The advanced filtering to use for the query. Refer to [RFC 7644](https://datatracker.ietf.org/doc/rfc7644/) for the syntax. Cannot be combined with any of the fields marked as deprecated. All conditional statements within this query parameter are case insensitive.
     * The following fields support the `co` (contains) operator: `name`, `description`
     * The following fields support the `eq` (equals) operator: `ownerId`
     * Example:
     * (name co "query1" or description co "query2") and ownerId eq "123" */
    filter?: string;
    /** The filter type (REP, SUB). REP stands for report bookmark, SUB for subscription bookmark. */
    filterTypes?: ("REP" | "SUB")[];
    /** Limit the returned result set */
    limit?: number;
    /** If present, the cursor that starts the page of data that is returned. */
    page?: string;
    /** Sorting parameters. */
    sort?: ("+ownerId" | "-ownerId" | "-name" | "+name" | "+description" | "-description" | "+createdAt" | "-createdAt" | "+updatedAt" | "-updatedAt")[];
}, options?: ApiCallOptions) => Promise<GetAppReportFiltersHttpResponse>;
type GetAppReportFiltersHttpResponse = {
    data: FilterList;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetAppReportFiltersHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetAppReportFiltersHttpResponse>;
};
type GetAppReportFiltersHttpError = {
    data: FilterErrors;
    headers: Headers;
    status: number;
};
/**
 * Creates a new report filter which is used to re-apply selections, variables, patches to an engine session.
 *
 * @param appId Qlik Sense app identifier
 * @param body an object with the body content
 * @throws CreateAppReportFilterHttpError
 */
declare const createAppReportFilter: (appId: string, body: FilterRequest, options?: ApiCallOptions) => Promise<CreateAppReportFilterHttpResponse>;
type CreateAppReportFilterHttpResponse = {
    data: Filter;
    headers: Headers;
    status: number;
};
type CreateAppReportFilterHttpError = {
    data: FilterErrors;
    headers: Headers;
    status: number;
};
/**
 * Get the number of filters for the given app and filter types
 *
 * @param appId Qlik Sense app identifier
 * @param query an object with query parameters
 * @throws CountAppReportFiltersHttpError
 */
declare const countAppReportFilters: (appId: string, query: {
    /** The filter type (REP, SUB). REP stands for report bookmark, SUB for subscription bookmark. */
    filterTypes?: ("REP" | "SUB")[];
}, options?: ApiCallOptions) => Promise<CountAppReportFiltersHttpResponse>;
type CountAppReportFiltersHttpResponse = {
    data: FiltersCount;
    headers: Headers;
    status: number;
};
type CountAppReportFiltersHttpError = {
    data: FilterErrors;
    headers: Headers;
    status: number;
};
/**
 * Delete a filter
 *
 * @param appId Qlik Sense app identifier
 * @param id The filter id identifier (bookmarkId).
 * @throws DeleteAppReportFilterHttpError
 */
declare const deleteAppReportFilter: (appId: string, id: string, options?: ApiCallOptions) => Promise<DeleteAppReportFilterHttpResponse>;
type DeleteAppReportFilterHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteAppReportFilterHttpError = {
    data: FilterErrors;
    headers: Headers;
    status: number;
};
/**
 * Get a filter
 *
 * @param appId Qlik Sense app identifier
 * @param id The filter id identifier (bookmarkId).
 * @throws GetAppReportFilterHttpError
 */
declare const getAppReportFilter: (appId: string, id: string, options?: ApiCallOptions) => Promise<GetAppReportFilterHttpResponse>;
type GetAppReportFilterHttpResponse = {
    data: Filter;
    headers: Headers;
    status: number;
};
type GetAppReportFilterHttpError = {
    data: FilterErrors;
    headers: Headers;
    status: number;
};
/**
 * Update a filter
 *
 * @param appId Qlik Sense app identifier
 * @param id The filter id identifier (bookmarkId).
 * @param body an object with the body content
 * @throws PatchAppReportFilterHttpError
 */
declare const patchAppReportFilter: (appId: string, id: string, body: PatchFilter, options?: ApiCallOptions) => Promise<PatchAppReportFilterHttpResponse>;
type PatchAppReportFilterHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchAppReportFilterHttpError = {
    data: FilterErrors;
    headers: Headers;
    status: number;
};
/**
 * Retrieves the script history for an app.
 * Returns information about the saved versions of the script in a list sorted with latest first.
 *
 * @param appId Identifier of the app.
 * @param query an object with query parameters
 * @throws GetAppScriptHistoryHttpError
 */
declare const getAppScriptHistory: (appId: string, query: {
    /** A scim filter expression defining which script versions should be retrieved. Filterable fields are:
     * * ScriptId
     * * ModifiedTime
     * * ModifierId */
    filter?: string;
    /** Maximum number of records to return from this request. */
    limit?: string;
    /** Opaque definition of which page of the result set to return. Returned from a previous call using the same filter. Not yet supported. */
    page?: string;
}, options?: ApiCallOptions) => Promise<GetAppScriptHistoryHttpResponse>;
type GetAppScriptHistoryHttpResponse = {
    data: ScriptMetaList;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetAppScriptHistoryHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetAppScriptHistoryHttpResponse>;
};
type GetAppScriptHistoryHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Sets script for an app.
 *
 * @param appId Identifier of the app.
 * @param body an object with the body content
 * @throws UpdateAppScriptHttpError
 */
declare const updateAppScript: (appId: string, body: ScriptVersion, options?: ApiCallOptions) => Promise<UpdateAppScriptHttpResponse>;
type UpdateAppScriptHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type UpdateAppScriptHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Deletes a specific version of the script for an app.
 * Fails if the supplied id is the current version.
 *
 * @param appId Identifier of the app.
 * @param id Identifier of the script version
 * @throws DeleteAppScriptHttpError
 */
declare const deleteAppScript: (appId: string, id: string, options?: ApiCallOptions) => Promise<DeleteAppScriptHttpResponse>;
type DeleteAppScriptHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type DeleteAppScriptHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Retrieves a version of the script for an app.
 * Returns the script text.
 *
 * @param appId Identifier of the app.
 * @param id Identifier of the script version, or 'current' for retrieving the current version.
 * @throws GetAppScriptHttpError
 */
declare const getAppScript: (appId: string, id: string, options?: ApiCallOptions) => Promise<GetAppScriptHttpResponse>;
type GetAppScriptHttpResponse = {
    data: ScriptVersion;
    headers: Headers;
    status: number;
};
type GetAppScriptHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Updates a specific version of the script for an app.
 *
 * @param appId Identifier of the app.
 * @param id Identifier of the script version.
 * @param body an object with the body content
 * @throws PatchAppScriptHttpError
 */
declare const patchAppScript: (appId: string, id: string, body: NxPatch[], options?: ApiCallOptions) => Promise<PatchAppScriptHttpResponse>;
type PatchAppScriptHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type PatchAppScriptHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Removes space from a specific app.
 *
 * @param appId Identifier of the app.
 * @throws RemoveAppFromSpaceHttpError
 */
declare const removeAppFromSpace: (appId: string, options?: ApiCallOptions) => Promise<RemoveAppFromSpaceHttpResponse>;
type RemoveAppFromSpaceHttpResponse = {
    data: NxApp;
    headers: Headers;
    status: number;
};
type RemoveAppFromSpaceHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Sets space on a specific app.
 *
 * @param appId Identifier of the app.
 * @param body an object with the body content
 * @throws MoveAppToSpaceHttpError
 */
declare const moveAppToSpace: (appId: string, body: UpdateSpace, options?: ApiCallOptions) => Promise<MoveAppToSpaceHttpResponse>;
type MoveAppToSpaceHttpResponse = {
    data: NxApp;
    headers: Headers;
    status: number;
};
type MoveAppToSpaceHttpError = {
    data: unknown;
    headers: Headers;
    status: number;
};
/**
 * Find all evaluations for an app GUID.
 * Supports paging via next, prev which are sent in the response body
 *
 * @param guid The app guid.
 * @param query an object with query parameters
 * @throws GetAppEvaluationsHttpError
 */
declare const getAppEvaluations: (guid: string, query: {
    /** Get the full data of the evaluation */
    all?: boolean;
    /** Add file transfer headers to response */
    fileMode?: boolean;
    /** Specify output format, currently supported are 'json' and 'xml' */
    format?: string;
    /** Number of results to return per page. */
    limit?: number;
    /** The app evaluation id to get next page from */
    next?: string;
    /** The app evaluation id to get previous page from */
    prev?: string;
    /** Property to sort list on */
    sort?: string;
}, options?: ApiCallOptions) => Promise<GetAppEvaluationsHttpResponse>;
type GetAppEvaluationsHttpResponse = {
    data: Evaluations;
    headers: Headers;
    status: number;
    prev?: (options?: ApiCallOptions) => Promise<GetAppEvaluationsHttpResponse>;
    next?: (options?: ApiCallOptions) => Promise<GetAppEvaluationsHttpResponse>;
};
type GetAppEvaluationsHttpError = {
    data: EvaluatorError;
    headers: Headers;
    status: number;
};
/**
 * Queue an app evaluation by its app guid.
 *
 * @param guid Guid of the app.
 * @throws QueueAppEvaluationHttpError
 */
declare const queueAppEvaluation: (guid: string, options?: ApiCallOptions) => Promise<QueueAppEvaluationHttpResponse>;
type QueueAppEvaluationHttpResponse = {
    data: Evaluation;
    headers: Headers;
    status: number;
};
type QueueAppEvaluationHttpError = {
    data: EvaluatorError;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for apps api requests.
 */
declare function clearCache(): void;
interface AppsAPI {
    /**
     * Creates a new app.
     *
     * @param body an object with the body content
     * @throws CreateAppHttpError
     */
    createApp: typeof createApp;
    /**
     * Accepts two evaluation ids and returns a comparison denoting the differences between the two.
     *
     * @param baseid Id of the baseline evaluation
     * @param comparisonid Id of the comparison evaluation
     * @param query an object with query parameters
     * @throws GetAppEvaluationComparisonHttpError
     */
    getAppEvaluationComparison: typeof getAppEvaluationComparison;
    /**
     * Accepts two evaluation ids and downloads a log, in XML format, denoting the differences between the two.
     *
     * @param baseid Id of the baseline evaluation
     * @param comparisonid Id of the comparison evaluation
     * @throws GetAppEvaluationComparisonXmlHttpError
     */
    getAppEvaluationComparisonXml: typeof getAppEvaluationComparisonXml;
    /**
     * Find an evaluation by a specific id.
     *
     * @param id Id of the desired evaluation.
     * @param query an object with query parameters
     * @throws GetAppEvaluationHttpError
     */
    getAppEvaluation: typeof getAppEvaluation;
    /**
     * Find and download an evaluation log by a specific evaluation id.
     *
     * @param id Id of the desired evaluation.
     * @throws GetAppEvaluationXmlHttpError
     */
    getAppEvaluationXml: typeof getAppEvaluationXml;
    /**
     * Imports an app into the system.
     *
     * @param query an object with query parameters
     * @param body an object with the body content
     * @throws ImportAppHttpError
     */
    importApp: typeof importApp;
    /**
     * Gets the app privileges for the current user, such as create app and import app. Empty means that the current user has no app privileges.
     *
     * @throws GetAppsPrivilegesHttpError
     */
    getAppsPrivileges: typeof getAppsPrivileges;
    /**
     * Deletes a specific app.
     *
     * @param appId Identifier of the app.
     * @throws DeleteAppHttpError
     */
    deleteApp: typeof deleteApp;
    /**
     * Retrieves information for a specific app.
     *
     * @param appId Identifier of the app.
     * @throws GetAppInfoHttpError
     */
    getAppInfo: typeof getAppInfo;
    /**
     * Updates the information for a specific app.
     *
     * @param appId Identifier of the app.
     * @param body an object with the body content
     * @throws UpdateAppInfoHttpError
     */
    updateAppInfo: typeof updateAppInfo;
    /**
     * Copies a specific app.
     *
     * @param appId Identifier of the app.
     * @param body an object with the body content
     * @throws CopyAppHttpError
     */
    copyApp: typeof copyApp;
    /**
     * Retrieves the lineage for an app.
     * Returns a JSON-formatted array of strings describing the lineage of the app.
     *
     * @param appId Identifier of the app.
     * @throws GetAppDataLineageHttpError
     */
    getAppDataLineage: typeof getAppDataLineage;
    /**
     * Retrieves the data model and reload statistics metadata of an app.
     * An empty metadata structure is returned if the metadata is not available in the app.
     *
     * @param appId Identifier of the app.
     * @throws GetAppDataMetadataHttpError
     */
    getAppDataMetadata: typeof getAppDataMetadata;
    /**
     * Exports a specific app.
     *
     * @param appId Identifier of the app.
     * @param query an object with query parameters
     * @throws ExportAppHttpError
     */
    exportApp: typeof exportApp;
    /**
     * Returns information about supported analyses for the app's data model. Lists available analysis types, along with minimum and maximum number of dimensions, measures, and fields.
     *
     * @param appId Qlik Sense app identifier
     * @throws GetAppInsightAnalysesHttpError
     */
    getAppInsightAnalyses: typeof getAppInsightAnalyses;
    /**
     * Returns analysis recommendations in response to a natural language question, a set of fields and master items, or a set of fields and master items with an optional target analysis.
     *
     * @param appId Qlik Sense app identifier
     * @param body an object with the body content
     * @throws GetAppInsightAnalysisRecommendationsHttpError
     */
    getAppInsightAnalysisRecommendations: typeof getAppInsightAnalysisRecommendations;
    /**
     * Returns information about model used to make analysis recommendations. Lists all fields and master items in the logical model, along with an indication of the validity of the logical model if the default is not used.
     *
     * @param appId Qlik Sense app identifier
     * @throws GetAppInsightAnalysisModelHttpError
     */
    getAppInsightAnalysisModel: typeof getAppInsightAnalysisModel;
    /**
     * Deletes a media content file or complete directory.
     * Returns OK if the bytes containing the media file (or the complete content of a directory) were successfully deleted, or error in case of failure or lack of permission.
     *
     * @param appId Unique application identifier.
     * @param path Path to file content.
     * @throws DeleteAppMediaHttpError
     */
    deleteAppMedia: typeof deleteAppMedia;
    /**
     * Gets media content from file.
     * Returns a stream of bytes containing the media file content on success, or error if file is not found.
     *
     * @param appId Unique application identifier.
     * @param path Path to file content.
     * @throws GetAppMediaHttpError
     */
    getAppMedia: typeof getAppMedia;
    /**
     * Stores the media content file.
     * Returns OK if the bytes containing the media file content were successfully stored, or error in case of failure, lack of permission or file already exists on the supplied path.
     *
     * @param appId Unique application identifier.
     * @param path Path to file content.
     * @param body an object with the body content
     * @throws UploadAppMediaHttpError
     */
    uploadAppMedia: typeof uploadAppMedia;
    /**
     * Lists media content.
     * Returns a JSON formatted array of strings describing the available media content or error if the optional path supplied is not found.
     *
     * @param appId Unique application identifier.
     * @param path The path to sub folder with static content relative to the root folder. Use empty path to access the root folder.
     * @param query an object with query parameters
     * @throws GetAppMediaListHttpError
     */
    getAppMediaList: typeof getAppMediaList;
    /**
     * Gets media content from file currently used as application thumbnail.
     * Returns a stream of bytes containing the media file content on success, or error if file is not found.
     * The image selected as thumbnail is only updated when application is saved.
     *
     * @param appId Unique application identifier.
     * @throws GetAppThumbnailHttpError
     */
    getAppThumbnail: typeof getAppThumbnail;
    /**
     * Sets owner on an app object.
     * The user must be the owner of the object.
     *
     * @param appId Identifier of the app.
     * @param objectId Identifier of the object.
     * @param body an object with the body content
     * @throws UpdateAppObjectOwnerHttpError
     */
    updateAppObjectOwner: typeof updateAppObjectOwner;
    /**
     * Changes owner of the app.
     *
     * @param appId Identifier of the app.
     * @param body an object with the body content
     * @throws UpdateAppOwnerHttpError
     */
    updateAppOwner: typeof updateAppOwner;
    /**
     * Publishes a specific app to a managed space.
     *
     * @param appId Identifier of the app.
     * @param body an object with the body content
     * @throws PublishAppHttpError
     */
    publishApp: typeof publishApp;
    /**
     * Republishes a published app to a managed space.
     *
     * @param appId Identifier of the app.
     * @param body an object with the body content
     * @throws RepublishAppHttpError
     */
    republishApp: typeof republishApp;
    /**
     * Retrieves the metadata about all script logs stored for an app.
     * Returns an array of ScriptLogMeta objects.
     *
     * @param appId Identifier of the app.
     * @throws GetAppReloadLogsHttpError
     */
    getAppReloadLogs: typeof getAppReloadLogs;
    /**
     * Retrieves the log of a specific reload.
     * Returns the log as "text/plain; charset=UTF-8".
     *
     * @param appId Identifier of the app.
     * @param reloadId Identifier of the reload.
     * @throws GetAppReloadLogHttpError
     */
    getAppReloadLog: typeof getAppReloadLog;
    /**
     * Retrieves the app reload metadata list.
     * Reload metadata contains reload information, including reload id, duration, endtime and lineage load info.
     *
     * @param appId Identifier of the app
     * @param reloadId Identifier of the reload. Use empty reloadId to get all reloads.
     * @param query an object with query parameters
     * @throws GetAppReloadMetadataHttpError
     */
    getAppReloadMetadata: typeof getAppReloadMetadata;
    /**
     * List all filters that are present in the given app. Filters allow to reduce the app data visible in a report output. Each filter can contain definitions on one or multiple fields.
     *
     * @param appId Qlik Sense app identifier
     * @param query an object with query parameters
     * @throws GetAppReportFiltersHttpError
     */
    getAppReportFilters: typeof getAppReportFilters;
    /**
     * Creates a new report filter which is used to re-apply selections, variables, patches to an engine session.
     *
     * @param appId Qlik Sense app identifier
     * @param body an object with the body content
     * @throws CreateAppReportFilterHttpError
     */
    createAppReportFilter: typeof createAppReportFilter;
    /**
     * Get the number of filters for the given app and filter types
     *
     * @param appId Qlik Sense app identifier
     * @param query an object with query parameters
     * @throws CountAppReportFiltersHttpError
     */
    countAppReportFilters: typeof countAppReportFilters;
    /**
     * Delete a filter
     *
     * @param appId Qlik Sense app identifier
     * @param id The filter id identifier (bookmarkId).
     * @throws DeleteAppReportFilterHttpError
     */
    deleteAppReportFilter: typeof deleteAppReportFilter;
    /**
     * Get a filter
     *
     * @param appId Qlik Sense app identifier
     * @param id The filter id identifier (bookmarkId).
     * @throws GetAppReportFilterHttpError
     */
    getAppReportFilter: typeof getAppReportFilter;
    /**
     * Update a filter
     *
     * @param appId Qlik Sense app identifier
     * @param id The filter id identifier (bookmarkId).
     * @param body an object with the body content
     * @throws PatchAppReportFilterHttpError
     */
    patchAppReportFilter: typeof patchAppReportFilter;
    /**
     * Retrieves the script history for an app.
     * Returns information about the saved versions of the script in a list sorted with latest first.
     *
     * @param appId Identifier of the app.
     * @param query an object with query parameters
     * @throws GetAppScriptHistoryHttpError
     */
    getAppScriptHistory: typeof getAppScriptHistory;
    /**
     * Sets script for an app.
     *
     * @param appId Identifier of the app.
     * @param body an object with the body content
     * @throws UpdateAppScriptHttpError
     */
    updateAppScript: typeof updateAppScript;
    /**
     * Deletes a specific version of the script for an app.
     * Fails if the supplied id is the current version.
     *
     * @param appId Identifier of the app.
     * @param id Identifier of the script version
     * @throws DeleteAppScriptHttpError
     */
    deleteAppScript: typeof deleteAppScript;
    /**
     * Retrieves a version of the script for an app.
     * Returns the script text.
     *
     * @param appId Identifier of the app.
     * @param id Identifier of the script version, or 'current' for retrieving the current version.
     * @throws GetAppScriptHttpError
     */
    getAppScript: typeof getAppScript;
    /**
     * Updates a specific version of the script for an app.
     *
     * @param appId Identifier of the app.
     * @param id Identifier of the script version.
     * @param body an object with the body content
     * @throws PatchAppScriptHttpError
     */
    patchAppScript: typeof patchAppScript;
    /**
     * Removes space from a specific app.
     *
     * @param appId Identifier of the app.
     * @throws RemoveAppFromSpaceHttpError
     */
    removeAppFromSpace: typeof removeAppFromSpace;
    /**
     * Sets space on a specific app.
     *
     * @param appId Identifier of the app.
     * @param body an object with the body content
     * @throws MoveAppToSpaceHttpError
     */
    moveAppToSpace: typeof moveAppToSpace;
    /**
     * Find all evaluations for an app GUID.
     * Supports paging via next, prev which are sent in the response body
     *
     * @param guid The app guid.
     * @param query an object with query parameters
     * @throws GetAppEvaluationsHttpError
     */
    getAppEvaluations: typeof getAppEvaluations;
    /**
     * Queue an app evaluation by its app guid.
     *
     * @param guid Guid of the app.
     * @throws QueueAppEvaluationHttpError
     */
    queueAppEvaluation: typeof queueAppEvaluation;
    /**
     * Clears the cache for apps api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the apps api
 */
declare const appsExport: AppsAPI;

export { type Analysis, type AnalysisComposition, type AnalysisDescriptor, type AnalysisDescriptorResponse, type AnalysisDetails, type AnalysisGroup, type AnalysisModelItemField, type AnalysisModelItemMasterItem, type AnalysisModelResponse, type AnalysisModelResponseDetail, type AnalysisRecommendRequest, type AnalysisRecommendationResponse, type AnalysisRecommendationResponseDetail, type AppAttributes, type AppContentList, type AppContentListItem, type AppObjectGenericType, type AppUpdateAttributes, type AppsAPI, type ChartType, type Classification, type Classifications, type Cmpbool, type Cmpfloat, type CmpfloatWithTimeout, type Cmpint, type Comparison, type Comparisonfields, type ComparisonobjMemoryLimit, type Comparisonobjresponsetime, type Comparisonoobjheavy, type Comparisontables, type CompositionMinMax, type CopyAppHttpError, type CopyAppHttpResponse, type CountAppReportFiltersHttpError, type CountAppReportFiltersHttpResponse, type CreateApp, type CreateAppHttpError, type CreateAppHttpResponse, type CreateAppReportFilterHttpError, type CreateAppReportFilterHttpResponse, type DataModelMetadata, type DeleteAppHttpError, type DeleteAppHttpResponse, type DeleteAppMediaHttpError, type DeleteAppMediaHttpResponse, type DeleteAppReportFilterHttpError, type DeleteAppReportFilterHttpResponse, type DeleteAppScriptHttpError, type DeleteAppScriptHttpResponse, type Error, type Errors, type Evaluation, type Evaluations, type EvaluatorError, type Event, type ExportAppHttpError, type ExportAppHttpResponse, type FieldAttrType, type FieldAttributes, type FieldInTableProfilingData, type FieldMetadata, type FieldOverride, type FileData, type Filter, type FilterError, type FilterErrors, type FilterField, type FilterFieldValue, type FilterItemPatch, type FilterList, type FilterListItem, type FilterRequest, type FilterType, type FilterV10, type FilterVariable, type FiltersCount, type Float64, type FrequencyDistributionData, type GetAppDataLineageHttpError, type GetAppDataLineageHttpResponse, type GetAppDataMetadataHttpError, type GetAppDataMetadataHttpResponse, type GetAppEvaluationComparisonHttpError, type GetAppEvaluationComparisonHttpResponse, type GetAppEvaluationComparisonXmlHttpError, type GetAppEvaluationComparisonXmlHttpResponse, type GetAppEvaluationHttpError, type GetAppEvaluationHttpResponse, type GetAppEvaluationXmlHttpError, type GetAppEvaluationXmlHttpResponse, type GetAppEvaluationsHttpError, type GetAppEvaluationsHttpResponse, type GetAppInfoHttpError, type GetAppInfoHttpResponse, type GetAppInsightAnalysesHttpError, type GetAppInsightAnalysesHttpResponse, type GetAppInsightAnalysisModelHttpError, type GetAppInsightAnalysisModelHttpResponse, type GetAppInsightAnalysisRecommendationsHttpError, type GetAppInsightAnalysisRecommendationsHttpResponse, type GetAppMediaHttpError, type GetAppMediaHttpResponse, type GetAppMediaListHttpError, type GetAppMediaListHttpResponse, type GetAppReloadLogHttpError, type GetAppReloadLogHttpResponse, type GetAppReloadLogsHttpError, type GetAppReloadLogsHttpResponse, type GetAppReloadMetadataHttpError, type GetAppReloadMetadataHttpResponse, type GetAppReportFilterHttpError, type GetAppReportFilterHttpResponse, type GetAppReportFiltersHttpError, type GetAppReportFiltersHttpResponse, type GetAppScriptHistoryHttpError, type GetAppScriptHistoryHttpResponse, type GetAppScriptHttpError, type GetAppScriptHttpResponse, type GetAppThumbnailHttpError, type GetAppThumbnailHttpResponse, type GetAppsPrivilegesHttpError, type GetAppsPrivilegesHttpResponse, type HardwareMeta, type Href, type ImportAppHttpError, type ImportAppHttpResponse, type JsonObject, type LastReloadMetadata, type LineageInfoRest, type LinkResponse, type Links, type LinksResponse, type Log, type Metadata, type MoveAppToSpaceHttpError, type MoveAppToSpaceHttpResponse, type NavigationLink, type NavigationLinks, type NumberFormat, type NxApp, type NxAppCreatePrivileges, type NxAppObject, type NxAttributes, type NxObjectAttributes, type NxPatch, type NxPatchOperationType, type Objectmetrics, type Objectspec, type Objecttopspec, type PartialNluInfo, type PatchAppReportFilterHttpError, type PatchAppReportFilterHttpResponse, type PatchAppScriptHttpError, type PatchAppScriptHttpResponse, type PatchFilter, type PatchFilterItem, type PublishApp, type PublishAppHttpError, type PublishAppHttpResponse, type PublishData, type QueueAppEvaluationHttpError, type QueueAppEvaluationHttpResponse, type RecommendFieldItem, type RecommendItems, type RecommendMasterItem, type RecommendNaturalLangQuery, type RecommendedAnalysis, type RecommendedAnalysisCore, type ReloadIncludeFile, type ReloadListMetadata, type ReloadMeta, type ReloadStatements, type RemoveAppFromSpaceHttpError, type RemoveAppFromSpaceHttpResponse, type RepublishApp, type RepublishAppHttpError, type RepublishAppHttpResponse, type Result, type Resultentry, type Resultmetadatatopfields, type Resultmetadatatoptables, type ResultobjMemoryLimit, type Resultobjresponsetime, type Resultobjsheet, type Resultsingle, type ScriptLogList, type ScriptLogMeta, type ScriptMeta, type ScriptMetaList, type ScriptVersion, type SimplifiedClassifications, type Sortedcomparisonfields, type Sortedcomparisonobjresponsetime, type Sortedcomparisonoobjheavy, type Sortedcomparisontables, type SymbolFrequency, type SymbolValue, type TableMetadata, type TableProfilingData, type UpdateApp, type UpdateAppInfoHttpError, type UpdateAppInfoHttpResponse, type UpdateAppObjectOwnerHttpError, type UpdateAppObjectOwnerHttpResponse, type UpdateAppOwnerHttpError, type UpdateAppOwnerHttpResponse, type UpdateAppScriptHttpError, type UpdateAppScriptHttpResponse, type UpdateOwner, type UpdateSpace, type UploadAppMediaHttpError, type UploadAppMediaHttpResponse, type UsageEnum, type UserPrivileges, clearCache, copyApp, countAppReportFilters, createApp, createAppReportFilter, appsExport as default, deleteApp, deleteAppMedia, deleteAppReportFilter, deleteAppScript, exportApp, getAppDataLineage, getAppDataMetadata, getAppEvaluation, getAppEvaluationComparison, getAppEvaluationComparisonXml, getAppEvaluationXml, getAppEvaluations, getAppInfo, getAppInsightAnalyses, getAppInsightAnalysisModel, getAppInsightAnalysisRecommendations, getAppMedia, getAppMediaList, getAppReloadLog, getAppReloadLogs, getAppReloadMetadata, getAppReportFilter, getAppReportFilters, getAppScript, getAppScriptHistory, getAppThumbnail, getAppsPrivileges, importApp, moveAppToSpace, patchAppReportFilter, patchAppScript, publishApp, queueAppEvaluation, removeAppFromSpace, republishApp, updateAppInfo, updateAppObjectOwner, updateAppOwner, updateAppScript, uploadAppMedia };
