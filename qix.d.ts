import './global.types-Xt6XzwlN.js';
import { H as HostConfig } from './auth-types-Bqw3vbLs.js';

declare const QIX_SCHEMA_VERSION = "12.2111.0";
type AlfaNumString = {
    /**
     * Calculated value.
     */
    qString?: string;
    /**
     * Is set to true if the value is a numeric.
     */
    qIsNum?: boolean;
};
type AlternateStateData = {
    /**
     * Name of the alternate state.
     * Default is current selections: $
     */
    qStateName?: string;
    /**
     * List of the selections.
     */
    qFieldItems?: BookmarkFieldItem[];
};
type AppEntry = {
    /**
     * Identifier of the app.
     */
    qID?: string;
    /**
     * Title of the app.
     */
    qTitle?: string;
    /**
     * Path of the app.
     */
    qPath?: string;
    /**
     * Last reload time of the app.
     */
    qLastReloadTime?: string;
    /**
     * Is set to true if the app is read-only.
     */
    qReadOnly?: boolean;
    /**
     * Meta data.
     */
    qMeta?: NxMeta;
    /**
     * App thumbnail.
     */
    qThumbnail?: StaticContentUrl;
    qFileSize?: number;
    /**
     * If true the app has section access configured.
     */
    qHasSectionAccess?: boolean;
};
/**
 * Lists the app objects. Is the layout for _AppObjectListDef_.
 * <div class=note>An app object is a generic object created at app level.</div>
 */
type AppObjectList<QData> = {
    /**
     * Information about the list of dimensions.
     */
    qItems?: NxContainerEntry<QData>[];
};
/**
 * Defines the list of objects in an app.
 * <div class=note>An app object is a generic object created at app level.</div>
 */
type AppObjectListDef = {
    /**
     * Type of the app list.
     */
    qType?: string;
    /**
     * Data that you want to include in the app list definition.
     * You need to enter the paths to the information you want to retrieve.
     */
    qData?: Record<string, string>;
};
type AppScript = {
    /**
     * Script text.
     */
    qScript?: string;
    /**
     * Information about publishing and permissions.
     * This parameter is optional.
     */
    qMeta?: NxMeta;
    /**
     * True if user is temporarily locked from modifying the script. Meta contains the ID of the last modifier. Only applicable to QCS.
     */
    qIsLocked?: boolean;
};
type AppScriptMeta = {
    /**
     * Information about publishing and permissions.
     * This parameter is optional.
     */
    qMeta?: NxMeta;
    /**
     * True if user is temporarily locked from modifying the script. Meta contains the ID of the last modifier. Only applicable to QCS.
     */
    qIsLocked?: boolean;
};
type ApplyGroupStateWarning = {
    /**
     * Group state that could not be applied.
     */
    qState?: GroupState;
    /**
     * Nature of the warning.
     *
     * One of:
     * * group_missing or GROUP_MISSING
     * * group_not_applicable or GROUP_NOT_APPLICABLE
     * * fielddef_missing or FIELDDEF_MISSING
     */
    qType?: ApplyGroupStateWarningType;
};
type ApplyGroupStateWarningType = "group_missing" | "GROUP_MISSING" | "group_not_applicable" | "GROUP_NOT_APPLICABLE" | "fielddef_missing" | "FIELDDEF_MISSING";
/**
 * Result of applying GroupState to multiple cyclic groups.
 *
 * Stability: *experimental*
 */
type ApplyGroupStatesResult = {
    /**
     * When true, the operation was successful.
     */
    qApplySuccess?: boolean;
    /**
     * Lists which states failed to be applied and why.
     */
    qWarnings?: ApplyGroupStateWarning[];
};
type ArrayOfNxValuePoint = NxPivotValuePoint[];
type AssociationScore = {
    /**
     * Pair of fields.
     * _&lt; FieldName1&gt;_ / _&lt; FieldName2&gt;_
     * Where:
     * &lt; _FieldName1_ &gt; is a field in the table 1 (defined in _qTable1_ )
     * &lt; _FieldName2_ &gt; is a field in the table 2 (defined in _qTable2_ )
     * If the field is a synthetic key, the name of the field is preceded by _[Synthetic key]:_ .
     */
    qFieldPairName?: string;
    /**
     * Flag used to interpret calculated scores.
     * One of the following values or sum of values that apply:
     * * 0: The cardinal ratio cannot be zero but the symbol score and the row score can be zero.
     * * -1: The fields do not have the same type.
     * * -2: The number of rows of the field _FieldName1_ is zero.
     * * -4: The number of distinct values of the field _FieldName1_ is zero.
     * * -8: The number of rows of the field _FieldName2_ is zero.
     * * -16: The number of distinct values of the field _FieldName2_ is zero.
     *
     * Example:
     * The number of rows of the field _FieldName1_ is zero, and the number of distinct values of the field _FieldName2_ is zero, then _qScoreSummary_ is -18.
     */
    qScoreSummary?: number;
    /**
     * Association information about the field _FieldName1_ defined in _qFieldPairName_ .
     */
    qField1Scores?: FieldScores;
    /**
     * Association information about the field _FieldName2_ defined in _qFieldPairName_ .
     */
    qField2Scores?: FieldScores;
};
type BNFDef = {
    /**
     * Array of token references that all together build up the definition of the current token.
     * Generally, if the array is not empty, the definition is a BNF rule (_qIsBnfRule_ is set to true). However, some BNF  rules do have an empty array (_qIsBnfRule_ is set to true, but _qBnf_ is empty).
     */
    qBnf?: number[];
    /**
     * Number of the current token definition.
     */
    qNbr?: number;
    /**
     * Number of the parent rule definition.
     */
    qPNbr?: number;
    /**
     * Reference identifier to a function described in the documentation. The identifier is stored in the definition of the token containing the function name.
     * Is not used in Qlik Sense.
     */
    qHelpId?: number;
    /**
     * Token name.
     * One of:
     * * A rule name
     * * An identifier
     * * A literal value
     */
    qName?: string;
    /**
     * Literal string of the token.
     * Examples: 'Round' and '('.
     */
    qStr?: string;
    /**
     * If set to true, a list of related rule tokens is assigned to _qBnf_ .
     * This parameter is optional. The default value is false.
     */
    qIsBnfRule?: boolean;
    /**
     * If set to true, the definition specifies a script statement.
     * This parameter is optional. The default value is false.
     */
    qScriptStatement?: boolean;
    /**
     * If set to true, the definition specifies a control statement.
     * This parameter is optional. The default value is false.
     */
    qControlStatement?: boolean;
    /**
     * If set to true, the definition specifies a literal token.
     * This parameter is optional. The default value is false.
     */
    qBnfLiteral?: boolean;
    /**
     * If set to true, the definition is related to a Qlik Sense function. It cannot be an aggregation function.
     * This parameter is optional. The default value is false.
     */
    qQvFunc?: boolean;
    /**
     * If set to true, the definition is related to an aggregation function.
     * This parameter is optional. The default value is false.
     */
    qAggrFunc?: boolean;
    /**
     * Group of the function.
     *
     * One of:
     * * ALL or FUNC_GROUP_ALL
     * * U or FUNC_GROUP_UNKNOWN
     * * NONE or FUNC_GROUP_NONE
     * * AGGR or FUNC_GROUP_AGGR
     * * NUM or FUNC_GROUP_NUMERIC
     * * RNG or FUNC_GROUP_RANGE
     * * EXP or FUNC_GROUP_EXPONENTIAL_AND_LOGARITHMIC
     * * TRIG or FUNC_GROUP_TRIGONOMETRIC_AND_HYPERBOLIC
     * * FIN or FUNC_GROUP_FINANCIAL
     * * MATH or FUNC_GROUP_MATH_CONSTANT_AND_PARAM_FREE
     * * COUNT or FUNC_GROUP_COUNTER
     * * STR or FUNC_GROUP_STRING
     * * MAPP or FUNC_GROUP_MAPPING
     * * RCRD or FUNC_GROUP_INTER_RECORD
     * * CND or FUNC_GROUP_CONDITIONAL
     * * LOG or FUNC_GROUP_LOGICAL
     * * NULL or FUNC_GROUP_NULL
     * * SYS or FUNC_GROUP_SYSTEM
     * * FILE or FUNC_GROUP_FILE
     * * TBL or FUNC_GROUP_TABLE
     * * DATE or FUNC_GROUP_DATE_AND_TIME
     * * NUMI or FUNC_GROUP_NUMBER_INTERPRET
     * * FRMT or FUNC_GROUP_FORMATTING
     * * CLR or FUNC_GROUP_COLOR
     * * RNK or FUNC_GROUP_RANKING
     * * GEO or FUNC_GROUP_GEO
     * * EXT or FUNC_GROUP_EXTERNAL
     * * PROB or FUNC_GROUP_PROBABILITY
     * * ARRAY or FUNC_GROUP_ARRAY
     * * LEG or FUNC_GROUP_LEGACY
     * * DB or FUNC_GROUP_DB_NATIVE
     * * WINDOW or FUNC_GROUP_WINDOW
     */
    qFG?: FunctionGroup;
    /**
     * If set to true, the definition is related to a field.
     * This parameter is optional. The default value is false.
     */
    qFieldFlag?: boolean;
    /**
     * Type of the data.
     *
     * One of:
     * * N or NOT_META
     * * D or META_DOC_NAME
     * * R or META_RET_TYPE
     * * V or META_DEFAULT_VALUE
     */
    qMT?: BNFDefMetaType;
    /**
     * Indicates whether a script statement, a chart or a script function is deprecated (not recommended for use).
     * If set to true, the script statement or the function is not recommended for use in Qlik Sense.
     * This parameter is optional. The default value is false.
     */
    qDepr?: boolean;
    /**
     * List of groups the function belongs to.
     */
    qFGList?: FunctionGroup[];
};
type BNFDefMetaType = "N" | "NOT_META" | "D" | "META_DOC_NAME" | "R" | "META_RET_TYPE" | "V" | "META_DEFAULT_VALUE";
type BNFType = "S" | "SCRIPT_TEXT_SCRIPT" | "E" | "SCRIPT_TEXT_EXPRESSION";
type Blob = string;
type Bookmark = {
    qId?: string;
    qName?: string;
    qUtcModifyTime?: number;
    qUtcRecallTime?: number;
    qRecallCount?: number;
    qApplyAdditive?: boolean;
    qFieldItems?: BookmarkFieldItem[];
    qVariableItems?: BookmarkVariableItem[];
    qSheetId?: string;
    qObjects?: LayoutBookmarkData[];
    qApplyLayoutState?: boolean;
    qShowPopupInfo?: boolean;
    qInfoText?: string;
    qOwner?: string;
    qGroups?: GroupBookmarkData[];
    qShow?: CondDef;
    qApplyInputFieldValues?: boolean;
    qInputFieldItems?: InputFieldItem[];
    qObjectsLayout?: ExtendedLayoutBookmarkData[];
    qIncludeSelectionState?: boolean;
    qIncludeScrollPosition?: boolean;
    qAlternateStateData?: AlternateStateData[];
    qForAnnotations?: boolean;
    qIncludeAllVariables?: boolean;
};
type BookmarkApplyAndVerifyResult = {
    /**
     * Apply successfully or not *
     */
    qApplySuccess?: boolean;
    /**
     * Field values verfication result *
     */
    qWarnings?: BookmarkFieldVerifyWarning[];
    /**
     * Result of applying group states (if any).
     */
    qGroupStateResult?: ApplyGroupStatesResult;
};
type BookmarkFieldItem = {
    /**
     * Name and type of the field.
     */
    qDef?: FieldDefEx;
    /**
     * Indicates if the field is locked.
     * Default is false.
     */
    qLocked?: boolean;
    /**
     * Information on the selections criteria.
     */
    qSelectInfo?: SelectInfo;
    qValues?: FieldValue[];
    /**
     * List of excluded values.
     * Either the list of selected values or the list of excluded values is displayed.
     */
    qExcludedValues?: FieldValue[];
    /**
     * If set to true, selections within a list object are made in AND mode; If you have a list object that lists all customers, by selecting Customer 1 and Customer 2 while in and-mode, all records that are associated with Customer 1 **and** Customer 2 are selected.
     * The default value is false; selections within a list object are made in OR mode. If you have a list object that lists all customers, by selecting Customer 1 and Customer 2 while in or-mode, all records that are associated with either Customer 1 **or** Customer 2 are selected.
     * This parameter is not returned if set to false.
     */
    qAndMode?: boolean;
    /**
     * If set to true, the field has always one selection (not 0 and not more than 1). If another value is selected, the previous one is unselected.
     * The default value is false. This parameter is not returned if set to false.
     */
    qOneAndOnlyOne?: boolean;
};
/**
 * Defines the range of the bookmark fields that are returned.
 */
type BookmarkFieldPage = {
    /**
     * The start value of the range.
     */
    qStartIndex?: number;
    /**
     * The end value of the range.
     */
    qEndIndex?: number;
};
type BookmarkFieldVerifyResultState = "NOT_VERIFIED" | "FIELD_VALUE_MATCH_ALL" | "FIELD_MISSING" | "FIELD_VALUE_MISSING" | "STATE_MISSING";
type BookmarkFieldVerifyWarning = {
    /**
     * Alternate State *
     */
    qState?: string;
    /**
     * Field Name *
     */
    qField?: string;
    /**
     * Field/values verfication result *
     * Defines result of ApplyAndVerify.
     * One of:
     * * NOT_VERIFIED
     * * FIELD_VALUE_MATCH_ALL
     * * FIELD_MISSING
     * * FIELD_VALUE_MISSING
     * * STATE_MISSING
     */
    qVerifyResult?: BookmarkFieldVerifyResultState;
    qMissingValues?: string[];
};
/**
 * Lists the bookmarks. Is the layout for _BookmarkListDef_.
 */
type BookmarkList<QData> = {
    /**
     * Information about the list of bookmarks.
     */
    qItems?: NxContainerEntry<QData>[];
};
/**
 * Defines the list of bookmarks.
 */
type BookmarkListDef = {
    /**
     * Type of the list.
     */
    qType?: string;
    /**
     * Data
     */
    qData?: Record<string, string>;
    /**
     * Include the bookmark patches. Patches can be very large and may make the list result unmanageable.
     */
    qIncludePatches?: boolean;
};
type BookmarkVariableItem = {
    /**
     * Name of the variable.
     */
    qName?: string;
    /**
     * Value of the variable.
     */
    qValue?: FieldValue;
    /**
     * The Reporting mode definition of the variable.
     */
    qDefinition?: string;
};
type CalendarStrings = {
    /**
     * List of short day names.
     */
    qDayNames?: string[];
    /**
     * List of short month names.
     */
    qMonthNames?: string[];
    /**
     * List of long day names.
     */
    qLongDayNames?: string[];
    /**
     * List of long month names.
     */
    qLongMonthNames?: string[];
};
type CharEncodingType = "Utf8" | "CHAR_ENCODING_UTF8" | "Utf16" | "CHAR_ENCODING_UTF16";
type CharRange = {
    /**
     * Position of the first search occurrence.
     */
    qCharPos?: number;
    /**
     * Number of occurrences found.
     */
    qCharCount?: number;
};
/**
 * Lists the children of a generic object. Is the layout for _ChildListDef_.
 * <div class=note>ChildList is used by the _GetLayout Method_ to list the children of a generic object. </div>
 */
type ChildList<QData> = {
    /**
     * Information about the items in the app object.
     */
    qItems?: NxContainerEntry<QData>[];
};
/**
 * Defines the list of children of a generic object.
 * What is defined in _ChildListDef_ has an impact on what the _GetLayout_ method returns. See _Example_ for more information.
 */
type ChildListDef = {
    /**
     * Data that you want to include in the child list definition.
     * You need to enter the paths to the information you want to retrieve.
     */
    qData?: Record<string, string>;
};
type CodePage = {
    /**
     * Number of the code page.
     */
    qNumber?: number;
    /**
     * Name of the code page.
     */
    qName?: string;
    /**
     * Description of the code page.
     */
    qDescription?: string;
};
type CondDef = {
    qAlways?: boolean;
    qExpression?: ValueExpr;
};
type Connection = {
    /**
     * Identifier of the connection.
     * Is generated by the engine and is unique.
     */
    qId?: string;
    /**
     * Name of the connection.
     * This parameter is mandatory and must be set when creating or modifying a connection.
     */
    qName?: string;
    /**
     * One of:
     * * ODBC CONNECT TO [&lt;provider name&gt;]
     * * OLEDB CONNECT TO [&lt;provider name&gt;]
     * * CUSTOM CONNECT TO [&lt;provider name&gt;]
     * * "&lt;local absolute or relative path, UNC path&gt;"
     * * "&lt;URL&gt;"
     *
     * Connection string.
     * This parameter is mandatory and must be set when creating or modifying a connection.
     */
    qConnectionString?: string;
    /**
     * One of:
     * * ODBC
     * * OLEDB
     * * &lt;Name of the custom connection file&gt;
     * * folder
     * * internet
     *
     * Type of the connection.
     * This parameter is mandatory and must be set when creating or modifying a connection.
     * For ODBC, OLEDB and custom connections, the engine checks that the connection type matches the connection string.
     * The type is not case sensitive.
     */
    qType?: string;
    /**
     * Name of the user who creates the connection.
     * This parameter is optional; it is only used for OLEDB, ODBC and CUSTOM connections.
     * A call to _GetConnection Method_ does not return the user name.
     */
    qUserName?: string;
    /**
     * Password of the user who creates the connection.
     * This parameter is optional; it is only used for OLEDB, ODBC and CUSTOM connections.
     * A call to _GetConnection Method_ does not return the password.
     */
    qPassword?: string;
    /**
     * Is generated by the engine.
     * Creation date of the connection or last modification date of the connection.
     */
    qModifiedDate?: string;
    /**
     * Information about the connection.
     */
    qMeta?: NxMeta;
    /**
     * Select which user credentials to use to connect to the source.
     * * LOG_ON_SERVICE_USER: Disables
     * * LOG_ON_CURRENT_USER: Enables
     *
     * One of:
     * * LOG_ON_SERVICE_USER
     * * LOG_ON_CURRENT_USER
     */
    qLogOn?: LogOnType;
};
type ContentLibraryList = {
    /**
     * Information about the content library.
     */
    qItems?: ContentLibraryListItem[];
};
type ContentLibraryListItem = {
    /**
     * Name of the library.
     */
    qName?: string;
    /**
     * Is set to true if the library is specific to the app (not a global content library).
     */
    qAppSpecific?: boolean;
    /**
     * Information about publishing and permissions.
     */
    qMeta?: NxMeta;
};
type CustomConnector = {
    /**
     * Name of the custom connector file.
     */
    qProvider?: string;
    /**
     * Name of the parent folder that contains the custom connector file.
     */
    qParent?: string;
    /**
     * Name of the custom connector as displayed in the Qlik interface.
     */
    qDisplayName?: string;
    /**
     * Mode of the machine (64 or 32 bits).
     *
     * One of:
     * * CONNECT_DEFAULT
     * * CONNECT_64
     * * CONNECT_32
     */
    qMachineMode?: GenericConnectMachine;
    qSupportFileStreaming?: boolean;
};
type CyclicGroupPosition = {
    /**
     * Target cyclic group.
     */
    qInfo?: NxInfo;
    /**
     * Active field of the cyclic group, identified by a zero-based index.
     */
    qActiveField?: number;
};
type DataField = {
    /**
     * Name of the field.
     */
    qName?: string;
    /**
     * Is set to true if the field is a primary key.
     */
    qIsKey?: boolean;
    /**
     * Is shown for fixed records.
     * _qOriginalFieldName_ and _qName_ are identical if no field names are used in the file.
     * _qOriginalFieldName_ differs from _qName_ if embedded file names are used in the file.
     */
    qOriginalFieldName?: string;
};
type DataRecord = {
    /**
     * List of values inside the table.
     * The first values (in _result/qPreview/0/qValues_ ) correspond to the field names in the table.
     * The following values (from _result/qPreview/1/qValues_ ) are the values of the fields in the table.
     */
    qValues?: string[];
};
type DataTable = {
    /**
     * Name of the table.
     */
    qName?: string;
    /**
     * Type of the table.
     * For example: Table or View.
     */
    qType?: string;
};
type DataTableEx = {
    /**
     * Name of the table.
     */
    qName?: string;
    /**
     * List of the fields in the table.
     */
    qFields?: DataField[];
    /**
     * List of format specification items, within brackets.
     * Examples of specification items:
     * * file type
     * * embedded labels, no labels
     * * table is &lt;table name&gt;
     */
    qFormatSpec?: string;
};
type Database = {
    /**
     * Name of the database.
     */
    qName?: string;
    /**
     * Is set to true if the database is set by default.
     */
    qIsDefault?: boolean;
};
type DatabaseInfo = {
    /**
     * Name of the product accessed by the provider.
     */
    qDBMSName?: string;
    /**
     * If set to true, it means that the data source contains some databases.
     */
    qDBUsage?: boolean;
    /**
     * If set to true, it means that the data source contains some owners.
     */
    qOwnerUsage?: boolean;
    /**
     * Character string used after the database name.
     * Example with separator " **.** ":
     * FROM LinkedTablesData.dbo.Months
     * Where:
     * * **LinkedTablesData** is the database name
     * * **dbo** is the owner name
     * * **Months** is the table name
     */
    qDBSeparator?: string;
    /**
     * Character string used after the owner name.
     * Example with separator " **.** ":
     * FROM LinkedTablesData.dbo.Months
     * Where:
     * * **LinkedTablesData** is the database name
     * * **dbo** is the owner name
     * * **Months** is the table name
     */
    qOwnerSeparator?: string;
    /**
     * If set to true, it means that the database is displayed first, before the owners and tables.
     */
    qDBFirst?: boolean;
    /**
     * Prefix used with field, database or owner names that contain special characters or keywords.
     */
    qQuotePreffix?: string;
    /**
     * Suffix used with field, database or owner names that contain special characters or keywords.
     */
    qQuoteSuffix?: string;
    /**
     * List of the special characters.
     */
    qSpecialChars?: string;
    /**
     * Name of the default database.
     */
    qDefaultDatabase?: string;
    /**
     * List of the script keywords.
     */
    qKeywords?: string[];
};
type DatabaseOwner = {
    /**
     * Name of the owner.
     */
    qName?: string;
};
type DelimiterInfo = {
    /**
     * Name of the delimiter.
     * Example:
     * "Tab_DELIMITER"
     */
    qName?: string;
    /**
     * Representation of the delimiter value that is used in the script.
     * Example:
     * "'\t'"
     */
    qScriptCode?: string;
    /**
     * Delimiter character number used by the engine to determine how to separate the values.
     */
    qNumber?: number;
    /**
     * Is set to true if multiple spaces are used to separate the values.
     */
    qIsMultiple?: boolean;
};
type DerivedFieldsInTableData = {
    /**
     * Name of the derived definition.
     */
    qDefinitionName?: string;
    /**
     * List of tags.
     */
    qTags?: string[];
    /**
     * Is set to true is the derived field is in use.
     */
    qActive?: boolean;
};
/**
 * Lists the dimensions. Is the layout for _DimensionListDef_.
 */
type DimensionList<QData> = {
    /**
     * Information about the list of dimensions.
     */
    qItems?: NxContainerEntry<QData>[];
};
/**
 * Defines the lists of dimensions.
 */
type DimensionListDef = {
    /**
     * Type of the list.
     */
    qType?: string;
    /**
     * Data
     */
    qData?: Record<string, string>;
};
/**
 * Parameters for a reload.
 */
type DoReloadExParams = {
    /**
     * 0: for default mode.
     * 1: for ABEND; the reload of the script ends if an error occurs.
     * 2: for ignore; the reload of the script continues even if an error is detected in the script.
     */
    qMode?: number;
    /**
     * Set to true for partial reload.
     * The default value is false.
     */
    qPartial?: boolean;
    /**
     * Set to true to debug reload.
     * The default value is false.
     */
    qDebug?: boolean;
    /**
     * Optional reload ID.
     * ID will be automatically generated if not set.
     */
    qReloadId?: string;
    /**
     * Set to true to skip Store statements.
     * The default value is false.
     */
    qSkipStore?: boolean;
    /**
     * If greater than or equal 0, defines max number of rows loaded from a data source.
     */
    qRowLimit?: number;
};
/**
 * The result and path to script log for a reload.
 */
type DoReloadExResult = {
    /**
     * The reload is successful if True.
     */
    qSuccess?: boolean;
    /**
     * Path to the script log file.
     */
    qScriptLogFile?: string;
    /**
     * true if memory limits were exhausted during reload.
     */
    qEndedWithMemoryConstraint?: boolean;
};
type DocListEntry = {
    /**
     * Name of the app.
     */
    qDocName?: string;
    /**
     * Not used.
     */
    qConnectedUsers?: number;
    /**
     * Last modified time stamp of the app.
     * This property is used only with Qlik Sense Desktop.
     * It is set to 0 for Qlik Sense Enterprise.
     */
    qFileTime?: number;
    /**
     * Size of remote app.
     * This property is used only with Qlik Sense Desktop.
     * It is set to 0 for Qlik Sense Enterprise.
     */
    qFileSize?: number;
    /**
     * Identifier of the app.
     * * In Qlik Sense Desktop, the identifier is the path and name of the app.
     * * In Qlik Sense Enterprise, the identifier is the app's GUID.
     */
    qDocId?: string;
    /**
     * Meta data related to the app.
     */
    qMeta?: NxMeta;
    /**
     * Last reload time of the app.
     */
    qLastReloadTime?: string;
    /**
     * If set to true, the app is read-only.
     */
    qReadOnly?: boolean;
    /**
     * Title of the app.
     */
    qTitle?: string;
    /**
     * Thumbnail of the app.
     */
    qThumbnail?: StaticContentUrl;
    /**
     * If true the app has section access configured.
     */
    qHasSectionAccess?: boolean;
    /**
     * Is the app a Direct Query app?
     */
    qIsDirectQueryMode?: boolean;
    /**
     *
     * One of:
     * * ANALYTICS
     * * DATA_PREPARATION
     * * DATAFLOW_PREP
     */
    qUsage?: UsageEnum;
};
type DriveInfo = {
    /**
     * Value of the drive.
     * Examples:
     * C:\\\, E:\\\
     */
    qDrive?: string;
    /**
     * Type of the drive.
     * _Fixed_ means physical drive.
     */
    qType?: string;
    /**
     * Name of the drive.
     */
    qName?: string;
    /**
     * Information about the drive type.
     *
     * One of:
     * * REMOVABLE
     * * FIXED
     * * NETWORK
     * * CD_ROM
     * * RAM
     * * UNKNOWN_TYPE
     */
    qTypeIdentifier?: DriveType;
    qUnnamedDrive?: boolean;
};
type DriveType = "REMOVABLE" | "FIXED" | "NETWORK" | "CD_ROM" | "RAM" | "UNKNOWN_TYPE";
type EditorBreakpoint = {
    /**
     * Name of the breakpoint.
     */
    qbufferName?: string;
    /**
     * Line number in the script where the breakpoint is set.
     */
    qlineIx?: number;
    /**
     * If set to true then the breakpoint is enabled (in use).
     */
    qEnabled?: boolean;
};
/**
 * Renders the embedded snapshot in an object.
 * The following is returned:
 * * Any dynamic properties defined in the bookmark
 * * Any properties defined in _qEmbeddedSnapshot_
 *
 * ### Properties
 * "qEmbeddedSnapshot": {}
 */
type EmbeddedSnapshot = object;
/**
 * Defines the embedded snapshot in a generic object.
 *
 * ### Properties
 * "EmbeddedSnapshotDef": {}
 */
type EmbeddedSnapshotDef = object;
type ErrorData = {
    /**
     * Detailed information about the error message.
     */
    qErrorString?: string;
    /**
     * Line termination characters.
     */
    qLineEnd?: string;
    /**
     * Script statement where the error occurs.
     */
    qLine?: string;
    /**
     * Type of the error messages.
     *
     * One of:
     * * EDC_ERROR
     * * EDC_WARNING
     * * EDC_CIRCULAR_REFERENCE
     */
    qErrorDataCode?: ErrorDataCode;
    qMessage?: ProgressMessage;
};
type ErrorDataCode = "EDC_ERROR" | "EDC_WARNING" | "EDC_CIRCULAR_REFERENCE";
type ExpansionData = {
    qExcludeList?: boolean;
    qPos?: PositionMark;
};
type ExtendedLayoutBookmarkData = {
    qId?: string;
    qActive?: boolean;
    qShowMode?: number;
    qScrollPos?: ScrollPosition;
    qExpansionInfo?: ExpansionData[];
    qLeftCollapsed?: boolean;
    qTopCollapsed?: boolean;
    qSortData?: InterFieldSortData[];
    qDimensionGroupPos?: GroupStateInfo[];
    qExpressionGroupPos?: GroupStateInfo[];
    qUseGraphMode?: boolean;
    /**
     *
     * One of:
     * * GRAPH_MODE_BAR
     * * GRAPH_MODE_PIE
     * * GRAPH_MODE_PIVOTTABLE
     * * GRAPH_MODE_SCATTER
     * * GRAPH_MODE_LINE
     * * GRAPH_MODE_STRAIGHTTABLE
     * * GRAPH_MODE_COMBO
     * * GRAPH_MODE_RADAR
     * * GRAPH_MODE_GAUGE
     * * GRAPH_MODE_GRID
     * * GRAPH_MODE_BLOCK
     * * GRAPH_MODE_FUNNEL
     * * GRAPH_MODE_MEKKO
     * * GRAPH_MODE_LAST
     */
    qGraphMode?: GraphMode;
    qActiveContainerChildObjectId?: string;
    qExtendedPivotState?: ExtendedPivotStateData;
};
type ExtendedPivotStateData = {
    qExpressionPosition?: number;
    qNumberOfLeftDimensions?: number;
    qDimensionNames?: string[];
    qEnableConditions?: string[];
};
/**
 * Obsolete, use qrs API's to fetch extensions.
 */
type ExtensionList = {
    qItems?: string[];
};
/**
 * Obsolete, use qrs API's to fetch extensions.
 */
type ExtensionListDef = object;
type FieldAttrType = "U" | "UNKNOWN" | "A" | "ASCII" | "I" | "INTEGER" | "R" | "REAL" | "F" | "FIX" | "M" | "MONEY" | "D" | "DATE" | "T" | "TIME" | "TS" | "TIMESTAMP" | "IV" | "INTERVAL";
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
    /**
     * Type of the field.
     * Default is U.
     *
     * One of:
     * * U or UNKNOWN
     * * A or ASCII
     * * I or INTEGER
     * * R or REAL
     * * F or FIX
     * * M or MONEY
     * * D or DATE
     * * T or TIME
     * * TS or TIMESTAMP
     * * IV or INTERVAL
     */
    qType?: FieldAttrType;
    /**
     * Number of decimals.
     * Default is 10.
     */
    qnDec?: number;
    /**
     * Defines whether or not a thousands separator must be used.
     * Default is 0.
     */
    qUseThou?: number;
    /**
     * Defines the format pattern that applies to _qText_ .
     * Is used in connection to the type of the field (parameter **qType** ).
     * For more information, see _Formatting mechanism_.
     * Example: _YYYY-MM-DD_ for a date.
     */
    qFmt?: string;
    /**
     * Defines the decimal separator.
     * Example: **.**
     */
    qDec?: string;
    /**
     * Defines the thousand separator (if any).
     * Is used if **qUseThou** is set to 1.
     * Example: **,**
     */
    qThou?: string;
};
type FieldDefEx = {
    /**
     * Name of the field.
     */
    qName?: string;
    /**
     * Type of data entity.
     *
     * One of:
     * * NOT_PRESENT
     * * PRESENT
     * * IS_CYCLIC_GROUP
     * * IS_DRILL_GROUP
     * * IS_VAR
     * * IS_EXPR
     * * IS_IMPLICIT
     * * IS_DETAIL
     */
    qType?: FieldType;
};
type FieldDescription = {
    /**
     * Internal number of the field.
     */
    qInternalNumber?: number;
    /**
     * Name of the field.
     */
    qName?: string;
    /**
     * List of table names.
     */
    qSrcTables?: string[];
    /**
     * If set to true, it means that the field is a system field.
     * The default value is false.
     */
    qIsSystem?: boolean;
    /**
     * If set to true, it means that the field is hidden.
     * The default value is false.
     */
    qIsHidden?: boolean;
    /**
     * If set to true, it means that the field is a semantic.
     * The default value is false.
     */
    qIsSemantic?: boolean;
    /**
     * If set to true, only distinct field values are shown.
     * The default value is false.
     */
    qDistinctOnly?: boolean;
    /**
     * Number of distinct field values.
     */
    qCardinal?: number;
    /**
     * Total number of field values.
     */
    qTotalCount?: number;
    qPossibleCount_OBSOLETE?: number;
    qHasInfo_OBSOLETE?: boolean;
    /**
     * If set to true, it means that the field is locked.
     * The default value is false.
     */
    qIsLocked?: boolean;
    /**
     * If set to true, it means that the field has one and only one selection (not 0 and not more than 1).
     * If this property is set to true, the field cannot be cleared anymore and no more selections can be performed in that field.
     * The default value is false.
     */
    qAlwaysOneSelected?: boolean;
    /**
     * If set to true a logical AND (instead of a logical OR) is used when making selections in a field.
     * The default value is false.
     */
    qAndMode?: boolean;
    /**
     * Is set to true if the value is a numeric.
     * The default value is false.
     */
    qIsNumeric?: boolean;
    /**
     * Field comment.
     */
    qComment?: string;
    /**
     * Gives information on a field. For example, it can return the type of the field.
     * Examples: key, text, ASCII.
     */
    qTags?: string[];
    /**
     * If set to true, it means that the field is a field on the fly.
     * The default value is false.
     */
    qIsDefinitionOnly?: boolean;
    /**
     * Static RAM memory used in bytes.
     */
    qByteSize?: number;
};
type FieldInTableData = {
    /**
     * Name of the field.
     */
    qName?: string;
    /**
     * Is shown for fixed records.
     * _qOriginalFieldName_ and _qName_ are identical if no field names are used in the file.
     * _qOriginalFieldName_ differs from _qName_ if embedded file names are used in the file.
     */
    qOriginalFields?: string[];
    qPresent?: boolean;
    /**
     * This property is set to true if the field contains some Null values.
     */
    qHasNull?: boolean;
    qHasWild?: boolean;
    /**
     * This property is set to true if the field contains some duplicate values.
     */
    qHasDuplicates?: boolean;
    /**
     * This property is set to true if the field contains a synthetic key.
     */
    qIsSynthetic?: boolean;
    /**
     * Number of records that have values (for example, not NULL) in the field as compared to the total number of records in the table.
     */
    qInformationDensity?: number;
    /**
     * Number of values that are non Null.
     */
    qnNonNulls?: number;
    /**
     * Number of rows in the field.
     */
    qnRows?: number;
    /**
     * Number of distinct values in the field (in the current table) as compared to the total number of distinct values of this field (in all tables).
     */
    qSubsetRatio?: number;
    /**
     * Number of distinct values in the field.
     */
    qnTotalDistinctValues?: number;
    qnPresentDistinctValues?: number;
    /**
     * Tells if the field is a key field.
     *
     * One of:
     * * NOT_KEY
     * * ANY_KEY
     * * PRIMARY_KEY
     * * PERFECT_KEY
     */
    qKeyType?: KeyType;
    /**
     * Comment related to the field.
     */
    qComment?: string;
    /**
     * List of tags related to the field.
     */
    qTags?: string[];
    /**
     * List of the derived fields.
     */
    qDerivedFields?: DerivedFieldsInTableData[];
    qIsFieldOnTheFly?: boolean;
    qReadableName?: string;
};
type FieldInTableProfilingData = {
    /**
     * Name of the field.
     */
    qName?: string;
    /**
     * List of tags related to the field.
     */
    qFieldTags?: string[];
    qNumberFormat?: FieldAttributes;
    /**
     * Number of distinct values
     */
    qDistinctValues?: number;
    /**
     * Number of distinct numeric values
     */
    qDistinctNumericValues?: number;
    /**
     * Number of distinct text values
     */
    qDistinctTextValues?: number;
    /**
     * Number of numeric values
     */
    qNumericValues?: number;
    /**
     * Number of null values
     */
    qNullValues?: number;
    /**
     * Number of textual values
     */
    qTextValues?: number;
    /**
     * Number of negative values
     */
    qNegValues?: number;
    /**
     * Number of positive values
     */
    qPosValues?: number;
    /**
     * Number of zero values for numerical values
     */
    qZeroValues?: number;
    /**
     * Sum of all numerical values. NaN otherwise.
     */
    qSum?: number;
    /**
     * Squared sum of all numerical values. NaN otherwise.
     */
    qSum2?: number;
    /**
     * Average of all numerical values. NaN otherwise.
     */
    qAverage?: number;
    /**
     * Median of all numerical values. NaN otherwise.
     */
    qMedian?: number;
    /**
     * Standard deviation of numerical values. NaN otherwise.
     */
    qStd?: number;
    /**
     * Minimum value of numerical values. NaN otherwise.
     */
    qMin?: number;
    /**
     * Maximum value of numerical values. NaN otherwise.
     */
    qMax?: number;
    /**
     * Skewness of the numerical values. NaN otherwise.
     */
    qSkewness?: number;
    /**
     * Kurtosis of the numerical values. NaN otherwise.
     */
    qKurtosis?: number;
    /**
     * The .01, .05, .1, .25, .5, .75, .9, .95, .99 fractiles. Array of NaN otherwise.
     */
    qFractiles?: number[];
    /**
     * Number of empty strings
     */
    qEmptyStrings?: number;
    /**
     * Maximum string length of textual values. 0 otherwise.
     */
    qMaxStringLen?: number;
    /**
     * Minimum string length of textual values. 0 otherwise.
     */
    qMinStringLen?: number;
    /**
     * Sum of all characters in strings in the field
     */
    qSumStringLen?: number;
    /**
     * Average string length of textual values. 0 otherwise.
     */
    qAvgStringLen?: number;
    /**
     * For textual values the first sorted string.
     */
    qFirstSorted?: string;
    /**
     * For textual values the last sorted string.
     */
    qLastSorted?: string;
    /**
     * Three most frequent values and their frequencies
     */
    qMostFrequent?: SymbolFrequency[];
    /**
     * Frequency Distribution for numeric fields.
     */
    qFrequencyDistribution?: FrequencyDistributionData;
};
/**
 * Lists the fields present in the data model viewer. Is the layout for _FieldListDef_.
 */
type FieldList = {
    /**
     * Array of items.
     */
    qItems?: NxFieldDescription[];
};
/**
 * Defines the fields to show.
 */
type FieldListDef = {
    /**
     * Shows the system tables if set to true.
     * Default is false.
     */
    qShowSystem?: boolean;
    /**
     * Shows the hidden fields if set to true.
     * Default is false.
     */
    qShowHidden?: boolean;
    /**
     * Show the semantic fields if set to true.
     * Default is false.
     */
    qShowSemantic?: boolean;
    /**
     * Shows the tables and fields present in the data model viewer if set to true.
     * Default is false.
     */
    qShowSrcTables?: boolean;
    /**
     * Shows the fields defined on the fly if set to true.
     * Default is false.
     */
    qShowDefinitionOnly?: boolean;
    /**
     * Shows the fields and derived fields if set to true.
     * Default is false.
     */
    qShowDerivedFields?: boolean;
    /**
     * Shows the Direct Discovery measure fields if set to true.
     * Default is false.
     */
    qShowImplicit?: boolean;
};
type FieldOrColumn = {
    /**
     * Name of the field or column to be matched.
     */
    qFieldName?: string;
    /**
     * Name of the table to be matched on. This parameter is optional. If TableName is set, FieldName represent the Table column with that name. If TableName is not set, FieldName represents the the field with that name.
     */
    qTableName?: string;
};
type FieldScores = {
    /**
     * Field name.
     * One of the field names defined in _qFieldPairName._
     */
    qFieldName?: string;
    qReadableName?: string;
    /**
     * Cardinality of a column/field divided by the number of rows in the table.
     * If the cardinal ratio is 1, it means that the column is a candidate/primary key.
     */
    qCardinalRatio?: number;
    /**
     * Number of distinct matches between the two fields defined in _qFieldPairName_ divided by the number of distinct values in the field _qFieldName_ .
     * If 0, it means that there are no common values between the two fields defined in _qFieldPairName_ .
     */
    qSymbolScore?: number;
    /**
     * Number of matches between the two fields defined in _qFieldPairName_ divided by the number of values in the field _qFieldName_ .
     * If 0, it means that there are no common values between the two fields defined in _qFieldPairName_ .
     */
    qRowScore?: number;
};
type FieldType = "NOT_PRESENT" | "PRESENT" | "IS_CYCLIC_GROUP" | "IS_DRILL_GROUP" | "IS_VAR" | "IS_EXPR" | "IS_IMPLICIT" | "IS_DETAIL";
type FieldValue = {
    /**
     * Text related to the field value.
     * This parameter is optional.
     */
    qText?: string;
    /**
     * Is set to true if the value is a numeric.
     * This parameter is optional. Default is false.
     */
    qIsNumeric?: boolean;
    /**
     * Numeric value of the field.
     * This parameter is displayed if _qIsNumeric_ is set to true.
     * This parameter is optional.
     */
    qNumber?: number;
};
/**
 * ### FileType
 * Recognized file formats are:
 * * _CSV_ for Delimited
 * * _FIX_ for Fixed Record
 * * _DIF_ for Data Interchange Format
 * * _EXCEL_BIFF_ for Microsoft Excel (XLS)
 * * _EXCEL_OOXML_ for Microsoft Excel (XLSX)
 * * _HTML_ for HTML
 * * _QVD_ for QVD file
 * * _XML_ for XML
 * * _QVX_ for QVX file
 * * _JSON_ for JSON format
 * * _KML_ for KML file
 * * _PARQUET_ for PARQUET file
 */
type FileDataFormat = {
    /**
     * Type of the file.
     *
     * One of:
     * * CSV or FILE_TYPE_CSV
     * * FIX or FILE_TYPE_FIX
     * * DIF or FILE_TYPE_DIF
     * * EXCEL_BIFF or FILE_TYPE_EXCEL_BIFF
     * * EXCEL_OOXML or FILE_TYPE_EXCEL_OOXML
     * * HTML or FILE_TYPE_HTML
     * * QVD or FILE_TYPE_QVD
     * * XML or FILE_TYPE_XML
     * * QVX or FILE_TYPE_QVX
     * * JSON or FILE_TYPE_JSON
     * * KML or FILE_TYPE_KML
     * * PARQUET or FILE_TYPE_PARQUET
     */
    qType?: FileType;
    /**
     * One of:
     * * Embedded labels (field names are present in the file)
     * * No labels
     * * Explicit labels (for DIFfiles)
     */
    qLabel?: string;
    /**
     * One of:
     * * None (no quotes)
     * * MSQ (Modern Style Quoting)
     * * Standard (quotes " " or ' ' can be used, but only if they are the first and last non blank characters of a field value)
     *
     * This property is used for delimited files.
     */
    qQuote?: string;
    /**
     * String that marks the beginning of the comment line.
     * Example: “#” or “//”
     * The engine ignores the commented lines during the data load.
     * This property is only used for delimited files.
     */
    qComment?: string;
    /**
     * Information about the delimiter.
     * This property is used for delimited files.
     */
    qDelimiter?: DelimiterInfo;
    /**
     * Character set used in the file.
     */
    qCodePage?: number;
    /**
     * Size of the header.
     * Example: If the header size is 2, the first two rows in the file are considered as header and not as data. The header can contain the field names.
     */
    qHeaderSize?: number;
    /**
     * Record length.
     * Each record (row of data) contains a number of columns with a fixed field size.
     * This property is used for fixed record data files.
     */
    qRecordSize?: number;
    /**
     * Number of spaces that one tab character represents in the table file.
     * This property is used for fixed record data files.
     */
    qTabSize?: number;
    /**
     * Is set to true, the end-of-file character is not taken into account during reload.
     * This property is used for delimited files and fixed record data files.
     */
    qIgnoreEOF?: boolean;
    /**
     * Positions of the field breaks in the table.
     * This property is used for fixed record data files.
     */
    qFixedWidthDelimiters?: string;
};
type FileType = "CSV" | "FILE_TYPE_CSV" | "FIX" | "FILE_TYPE_FIX" | "DIF" | "FILE_TYPE_DIF" | "EXCEL_BIFF" | "FILE_TYPE_EXCEL_BIFF" | "EXCEL_OOXML" | "FILE_TYPE_EXCEL_OOXML" | "HTML" | "FILE_TYPE_HTML" | "QVD" | "FILE_TYPE_QVD" | "XML" | "FILE_TYPE_XML" | "QVX" | "FILE_TYPE_QVX" | "JSON" | "FILE_TYPE_JSON" | "KML" | "FILE_TYPE_KML" | "PARQUET" | "FILE_TYPE_PARQUET";
type FilterInfo = {
    /**
     *
     * One of:
     * * NONE or FILTER_TYPE_NONE
     * * RAW or FILTER_TYPE_RAW
     */
    qType?: FilterType;
    qWherePredicate?: string;
};
type FilterType = "NONE" | "FILTER_TYPE_NONE" | "RAW" | "FILTER_TYPE_RAW";
type FolderItem = {
    /**
     * Name of the folder item.
     */
    qName?: string;
    /**
     * Type of the folder item.
     *
     * One of:
     * * FOLDER or FOLDER_ITEM_FOLDER
     * * FILE or FOLDER_ITEM_FILE
     * * OTHER or FOLDER_ITEM_OTHER
     */
    qType?: FolderItemType;
};
type FolderItemType = "FOLDER" | "FOLDER_ITEM_FOLDER" | "FILE" | "FOLDER_ITEM_FILE" | "OTHER" | "FOLDER_ITEM_OTHER";
type FrequencyDistributionData = {
    /**
     * Number of bins.
     */
    qNumberOfBins?: number;
    /**
     * Bins edges.
     */
    qBinsEdges?: number[];
    /**
     * Bins frequencies.
     */
    qFrequencies?: number[];
};
type QFunction = {
    /**
     * Name of the script function.
     */
    qName?: string;
    /**
     * Group of the script function.
     *
     * One of:
     * * ALL or FUNC_GROUP_ALL
     * * U or FUNC_GROUP_UNKNOWN
     * * NONE or FUNC_GROUP_NONE
     * * AGGR or FUNC_GROUP_AGGR
     * * NUM or FUNC_GROUP_NUMERIC
     * * RNG or FUNC_GROUP_RANGE
     * * EXP or FUNC_GROUP_EXPONENTIAL_AND_LOGARITHMIC
     * * TRIG or FUNC_GROUP_TRIGONOMETRIC_AND_HYPERBOLIC
     * * FIN or FUNC_GROUP_FINANCIAL
     * * MATH or FUNC_GROUP_MATH_CONSTANT_AND_PARAM_FREE
     * * COUNT or FUNC_GROUP_COUNTER
     * * STR or FUNC_GROUP_STRING
     * * MAPP or FUNC_GROUP_MAPPING
     * * RCRD or FUNC_GROUP_INTER_RECORD
     * * CND or FUNC_GROUP_CONDITIONAL
     * * LOG or FUNC_GROUP_LOGICAL
     * * NULL or FUNC_GROUP_NULL
     * * SYS or FUNC_GROUP_SYSTEM
     * * FILE or FUNC_GROUP_FILE
     * * TBL or FUNC_GROUP_TABLE
     * * DATE or FUNC_GROUP_DATE_AND_TIME
     * * NUMI or FUNC_GROUP_NUMBER_INTERPRET
     * * FRMT or FUNC_GROUP_FORMATTING
     * * CLR or FUNC_GROUP_COLOR
     * * RNK or FUNC_GROUP_RANKING
     * * GEO or FUNC_GROUP_GEO
     * * EXT or FUNC_GROUP_EXTERNAL
     * * PROB or FUNC_GROUP_PROBABILITY
     * * ARRAY or FUNC_GROUP_ARRAY
     * * LEG or FUNC_GROUP_LEGACY
     * * DB or FUNC_GROUP_DB_NATIVE
     * * WINDOW or FUNC_GROUP_WINDOW
     */
    qGroup?: FunctionGroup;
    /**
     * Signature of the script function.
     * Gives general information about the function.
     */
    qSignature?: string;
};
type FunctionGroup = "ALL" | "FUNC_GROUP_ALL" | "U" | "FUNC_GROUP_UNKNOWN" | "NONE" | "FUNC_GROUP_NONE" | "AGGR" | "FUNC_GROUP_AGGR" | "NUM" | "FUNC_GROUP_NUMERIC" | "RNG" | "FUNC_GROUP_RANGE" | "EXP" | "FUNC_GROUP_EXPONENTIAL_AND_LOGARITHMIC" | "TRIG" | "FUNC_GROUP_TRIGONOMETRIC_AND_HYPERBOLIC" | "FIN" | "FUNC_GROUP_FINANCIAL" | "MATH" | "FUNC_GROUP_MATH_CONSTANT_AND_PARAM_FREE" | "COUNT" | "FUNC_GROUP_COUNTER" | "STR" | "FUNC_GROUP_STRING" | "MAPP" | "FUNC_GROUP_MAPPING" | "RCRD" | "FUNC_GROUP_INTER_RECORD" | "CND" | "FUNC_GROUP_CONDITIONAL" | "LOG" | "FUNC_GROUP_LOGICAL" | "NULL" | "FUNC_GROUP_NULL" | "SYS" | "FUNC_GROUP_SYSTEM" | "FILE" | "FUNC_GROUP_FILE" | "TBL" | "FUNC_GROUP_TABLE" | "DATE" | "FUNC_GROUP_DATE_AND_TIME" | "NUMI" | "FUNC_GROUP_NUMBER_INTERPRET" | "FRMT" | "FUNC_GROUP_FORMATTING" | "CLR" | "FUNC_GROUP_COLOR" | "RNK" | "FUNC_GROUP_RANKING" | "GEO" | "FUNC_GROUP_GEO" | "EXT" | "FUNC_GROUP_EXTERNAL" | "PROB" | "FUNC_GROUP_PROBABILITY" | "ARRAY" | "FUNC_GROUP_ARRAY" | "LEG" | "FUNC_GROUP_LEGACY" | "DB" | "FUNC_GROUP_DB_NATIVE" | "WINDOW" | "FUNC_GROUP_WINDOW";
type GenericBookmarkEntry = {
    /**
     * Information about the properties of the bookmark.
     */
    qProperties?: GenericBookmarkProperties;
    /**
     * Information about the bookmark.
     */
    qBookmark?: NxBookmark;
    /**
     * Information about the Classic bookmark.
     */
    qClassicBookmark?: Bookmark;
    /**
     * Information about the Classic bookmark metadata.
     */
    qClassicMetadata?: MetaData;
};
/**
 * Is the layout for _GenericBookmarkProperties_.
 */
type GenericBookmarkLayout = {
    /**
     * Information about the object.
     */
    qInfo?: NxInfo;
    /**
     * Information on publishing and permissions.
     */
    qMeta?: NxMeta;
    /**
     * Information about the bookmark.
     */
    qBookmark?: NxBookmark;
    /**
     * Information about the field selections associated with the bookmark.
     */
    qFieldInfos?: LayoutFieldInfo[];
};
type GenericBookmarkProperties = {
    /**
     * Information about the bookmark.
     * This parameter is mandatory.
     */
    qInfo?: NxInfo;
    /**
     * Definition of the dynamic properties.
     */
    qMetaDef?: NxMetaDef;
    /**
     * If true all variables will be stored in the bookmark.
     *
     * Stability: *experimental*
     */
    qIncludeVariables?: boolean;
    /**
     * If true all selected values will be stored distinct, i.e. searchstrings will not be kept.
     *
     * Stability: *experimental*
     */
    qDistinctValues?: boolean;
};
type GenericConnectMachine = "CONNECT_DEFAULT" | "CONNECT_64" | "CONNECT_32";
type GenericDimensionInfo = {
    /**
     * Length of the longest value in the field.
     */
    qApprMaxGlyphCount?: number;
    /**
     * Number of distinct field values
     */
    qCardinal?: number;
    /**
     * Gives information on a field. For example, it can return the type of the field.
     * Examples: key, text, ASCII
     */
    qTags?: string[];
    /**
     * If set to true, it means that the field is a semantic.
     */
    qIsSemantic?: boolean;
    /**
     * If set to true a logical AND (instead of a logical OR) is used when making selections in a field.
     * The default value is false.
     */
    qAndMode?: boolean;
};
/**
 * Is the layout for _GenericDimensionProperties_.
 */
type GenericDimensionLayout = {
    /**
     * Identifier and type of the dimension.
     */
    qInfo?: NxInfo;
    /**
     * Information about publishing and permissions.
     */
    qMeta?: NxMeta;
    /**
     * Name and label of the dimension, information about grouping.
     */
    qDim?: NxLibraryDimension;
    /**
     * Cardinal and tags related to the dimension.
     * Length of the longest value in the field.
     */
    qDimInfos?: GenericDimensionInfo[];
};
type GenericDimensionProperties = {
    /**
     * Identifier and type of the dimension.
     * This parameter is mandatory.
     */
    qInfo?: NxInfo;
    /**
     * Definition of the dimension.
     * This parameter is mandatory.
     */
    qDim?: NxLibraryDimensionDef;
    /**
     * Definition of the dynamic properties.
     */
    qMetaDef?: NxMetaDef;
};
/**
 * Is the layout for _GenericMeasureProperties_.
 */
type GenericMeasureLayout = {
    /**
     * Information about the object.
     */
    qInfo?: NxInfo;
    /**
     * Information about the measure.
     */
    qMeasure?: NxLibraryMeasure;
    /**
     * Information on publishing and permissions.
     */
    qMeta?: NxMeta;
};
type GenericMeasureProperties = {
    /**
     * Information about the measure.
     * This parameter is mandatory.
     */
    qInfo?: NxInfo;
    /**
     * Definition of the measure.
     * This parameter is mandatory.
     */
    qMeasure?: NxLibraryMeasureDef;
    /**
     * Definition of the dynamic properties.
     */
    qMetaDef?: NxMetaDef;
};
type GenericObjectEntry = {
    /**
     * Information about the generic object properties.
     */
    qProperty?: GenericObjectProperties;
    /**
     * Information about the children of the generic object.
     */
    qChildren?: GenericObjectEntry[];
    /**
     * Reference to a bookmark/snapshot that is embedded in the generic object.
     */
    qEmbeddedSnapshotRef?: GenericBookmarkEntry;
};
/**
 * Is the layout for _GenericObjectProperties_.
 */
type GenericObjectLayout = {
    /**
     * Identifier and type of the generic object.
     */
    qInfo?: NxInfo;
    /**
     * Information about publishing and permissions.
     * This parameter is optional.
     */
    qMeta?: NxMeta;
    /**
     * Should be set to create an object that is linked to another object. Enter the identifier of the object you want to link to.
     * If you do not want to link your object, set this parameter to an empty string.
     */
    qExtendsId?: string;
    /**
     * Is set to true if the generic object contains some properties that are not persistent (a soft patch was applied).
     */
    qHasSoftPatches?: boolean;
    /**
     * Gives information on the error.
     * This parameter is optional.
     */
    qError?: NxLayoutErrors;
    /**
     * Information about the selections.
     */
    qSelectionInfo?: NxSelectionInfo;
    /**
     * Name of the alternate state.
     * Default is current selections _$_ .
     */
    qStateName?: string;
};
type GenericObjectLayoutAdditionalProperties<QData> = {
    qAppObjectList?: AppObjectList<QData>;
    qBookmarkList?: BookmarkList<QData>;
    qChildList?: ChildList<QData>;
    qDimensionList?: DimensionList<QData>;
    qEmbeddedSnapshot?: EmbeddedSnapshot;
    qExtensionList?: ExtensionList;
    qFieldList?: FieldList;
    qHyperCube?: HyperCube;
    qListObject?: ListObject;
    qMeasureList?: MeasureList<QData>;
    qMediaList?: QMediaList;
    qNxLibraryDimension?: NxLibraryDimension;
    qNxLibraryMeasure?: NxLibraryMeasure;
    qSelectionObject?: SelectionObject;
    qStaticContentUrl?: StaticContentUrl;
    qTreeData?: TreeData;
    qUndoInfo?: UndoInfo;
    qVariableList?: VariableList<QData>;
};
type GenericObjectProperties = {
    /**
     * Identifier and type of the object.
     * This parameter is mandatory.
     */
    qInfo?: NxInfo;
    /**
     * Should be set to create an object that is linked to another object. Enter the identifier of the linking object (i.e the object you want to link to).
     * If you do not want to link your object, set this parameter to an empty string.
     */
    qExtendsId?: string;
    /**
     * Definition of the dynamic properties.
     */
    qMetaDef?: NxMetaDef;
    /**
     * Name of the alternate state.
     * Default is current selections _$_ .
     */
    qStateName?: string;
};
type GenericObjectPropertiesAdditionalProperties = {
    qAppObjectListDef?: AppObjectListDef;
    qBookmarkListDef?: BookmarkListDef;
    qChildListDef?: ChildListDef;
    qDimensionListDef?: DimensionListDef;
    qEmbeddedSnapshotDef?: EmbeddedSnapshotDef;
    qExtensionListDef?: ExtensionListDef;
    qFieldListDef?: FieldListDef;
    qHyperCubeDef?: HyperCubeDef;
    qLayoutExclude?: LayoutExclude;
    qListObjectDef?: ListObjectDef;
    qMeasureListDef?: MeasureListDef;
    qMediaListDef?: MediaListDef;
    qNxLibraryDimensionDef?: NxLibraryDimensionDef;
    qNxLibraryMeasureDef?: NxLibraryMeasureDef;
    qSelectionObjectDef?: SelectionObjectDef;
    qStaticContentUrlDef?: StaticContentUrlDef;
    qStringExpression?: StringExpression;
    qTreeDataDef?: TreeDataDef;
    qUndoInfoDef?: UndoInfoDef;
    qValueExpression?: ValueExpression;
    qVariableListDef?: VariableListDef;
};
/**
 * Is the layout for _GenericVariableProperties_.
 */
type GenericVariableLayout = {
    /**
     * Identifier and type of the object.
     * This parameter is mandatory.
     */
    qInfo?: NxInfo;
    /**
     * Information about publishing and permissions.
     * This parameter is optional.
     */
    qMeta?: NxMeta;
    /**
     * Some text.
     */
    qText?: string;
    /**
     * A value.
     */
    qNum?: number;
    /**
     * If set to true, it means that the variable was defined via script.
     */
    qIsScriptCreated?: boolean;
};
type GenericVariableProperties = {
    /**
     * Identifier and type of the object.
     * This parameter is mandatory.
     */
    qInfo?: NxInfo;
    /**
     * Meta data.
     */
    qMetaDef?: NxMetaDef;
    /**
     * Name of the variable.
     * The name must be unique.
     * This parameter is mandatory.
     */
    qName?: string;
    /**
     * Comment related to the variable.
     * This parameter is optional.
     */
    qComment?: string;
    /**
     * Defines the format of the value.
     * This parameter is optional.
     */
    qNumberPresentation?: FieldAttributes;
    /**
     * Set this property to true to update the variable when applying a bookmark. The variable value will be persisted in the bookmark.
     * The value of a variable can affect the state of the selections.
     * Script variables cannot be persisted in the bookmark.
     * The default value is false.
     */
    qIncludeInBookmark?: boolean;
    /**
     * Definition of the variable.
     */
    qDefinition?: string;
};
type GraphMode = "GRAPH_MODE_BAR" | "GRAPH_MODE_PIE" | "GRAPH_MODE_PIVOTTABLE" | "GRAPH_MODE_SCATTER" | "GRAPH_MODE_LINE" | "GRAPH_MODE_STRAIGHTTABLE" | "GRAPH_MODE_COMBO" | "GRAPH_MODE_RADAR" | "GRAPH_MODE_GAUGE" | "GRAPH_MODE_GRID" | "GRAPH_MODE_BLOCK" | "GRAPH_MODE_FUNNEL" | "GRAPH_MODE_MEKKO" | "GRAPH_MODE_LAST";
type GroupBookmarkData = {
    qId?: string;
    qCyclePos?: number;
};
type GroupState = {
    /**
     * Target cyclic group.
     */
    qInfo?: NxInfo;
    /**
     * String defining the active field.
     */
    qActiveFieldDef?: string;
};
type GroupStateInfo = {
    qGroupName?: string;
    qCurrentItemName?: string;
};
/**
 * Renders the properties of a hypercube. Is the layout for _HyperCubeDef_.
 * For more information about the definition of a hypercube, see _Generic object_.
 * <div class=note>What is returned in HyperCube depends on the type of the hypercube (straight, pivot or stacked table, or tree) and on the method called (GetLayout, GetHyperCubeData, GetHyperCubePivotData, GetHyperCubeStackData, GetHyperCubeTreeData).</div>
 */
type HyperCube = {
    /**
     * Name of the alternate state.
     * Default is current selections _$_ .
     */
    qStateName?: string;
    /**
     * Defines the size of the hypercube.
     */
    qSize?: Size;
    /**
     * This parameter is optional and is displayed in case of error.
     */
    qError?: NxValidationError;
    /**
     * Information on the dimension.
     */
    qDimensionInfo?: NxDimensionInfo[];
    /**
     * Information on the measure.
     */
    qMeasureInfo?: NxMeasureInfo[];
    /**
     * Sort order of the columns in the hypercube.
     * Column numbers are separated by a comma.
     * Example: [1,0,2] means that the first column to be sorted was the column 1, followed by the column 0 and the column 2.
     */
    qEffectiveInterColumnSortOrder?: number[];
    /**
     * Aggregate for measures of all values in the field.
     * The result value depends on the _qAggrFunc_ defined in _HyperCubeDef_.
     */
    qGrandTotalRow?: NxCell[];
    /**
     * Set of data.
     * Is empty if nothing has been defined in **qInitialDataFetch** in _HyperCubeDef_.
     */
    qDataPages?: NxDataPage[];
    /**
     * Set of data for pivot tables.
     * Is empty if nothing has been defined in **qInitialDataFetch** in _HyperCubeDef_.
     */
    qPivotDataPages?: NxPivotPage[];
    /**
     * Set of data for stacked tables.
     * Is empty if nothing has been defined in **qInitialDataFetch** in _HyperCubeDef_.
     */
    qStackedDataPages?: NxStackPage[];
    /**
     * Information about the mode of the visualization.
     *
     * One of:
     * * S or DATA_MODE_STRAIGHT
     * * P or DATA_MODE_PIVOT
     * * K or DATA_MODE_PIVOT_STACK
     * * T or DATA_MODE_TREE
     * * D or DATA_MODE_DYNAMIC
     */
    qMode?: NxHypercubeMode;
    /**
     * Number of left dimensions.
     * Default value is -1.
     * The index related to each left dimension depends on the position of the pseudo dimension (if any).
     * For example, a pivot table with:
     * * Four dimensions in the following order: Country, City, Product and Category
     * * One pseudo dimension in position 1
     * * Three left dimensions.
     *
     * implies that:
     * * The index 0 corresponds to the left dimension Country.
     * * The index 1 corresponds to the pseudo dimension.
     * * The index 2 corresponds to the left dimension City.
     * * Product and Category are top dimensions.
     *
     * Another example:
     * * Four dimensions in the following order: Country, City, Product and Category.
     * * One pseudo dimension in position -1.
     * * Three left dimensions.
     *
     * implies that:
     * * The index -1 corresponds to the pseudo dimension; the pseudo dimension is the most to the right.
     * * The index 0 corresponds to the left dimension Country.
     * * The index 1 corresponds to the left dimension City.
     * * The index 2 corresponds to the left dimension Product.
     * * Category is a top dimension.
     */
    qNoOfLeftDims?: number;
    /**
     * Is used for pivot tables only.
     * If set to true, the formatting of the results is slightly different.
     * This property is optional.
     */
    qIndentMode?: boolean;
    /**
     * Is used for pivot tables only.
     * Position of the last expended cell.
     * This property is optional.
     */
    qLastExpandedPos?: NxCellPosition;
    /**
     * True if other row exists.
     */
    qHasOtherValues?: boolean;
    /**
     * Title of the hypercube, for example the title of a chart.
     */
    qTitle?: string;
    /**
     * The total number of nodes on each dimension (only applicable when _qMode = T_ ).
     */
    qTreeNodesOnDim?: number[];
    /**
     * The message displayed if calculation condition is not fulfilled.
     */
    qCalcCondMsg?: string;
    /**
     * The order of the columns.
     */
    qColumnOrder?: number[];
};
/**
 * Defines the properties of a hypercube.
 * For more information about the definition of a hypercube, see _Generic object_.
 */
type HyperCubeDef = {
    /**
     * Name of the alternate state.
     * Default is current selections _$_ .
     */
    qStateName?: string;
    /**
     * Array of dimensions.
     */
    qDimensions?: NxDimension[];
    /**
     * Array of measures.
     */
    qMeasures?: NxMeasure[];
    /**
     * Defines the sort order of the columns in the hypercube.
     * Column numbers are separated by a comma.
     * Example: [1,0,2] means that the first column to be sorted should be the column 1, followed by the column 0 and the column 2.
     * The default sort order is the order in which the dimensions and measures have been defined in the hypercube. By default, the pseudo-dimension (if any) is the most to the right in the array.
     * The index of the pseudo-dimension (if any) is -1.
     * Pseudo dimensions only apply for pivot tables with more than one measure.
     * A pseudo dimension groups together the measures defined in a pivot table. You can neither collapse/expand a pseudo dimension nor make any selections in it.
     * Stacked pivot tables can only contain one measure.
     */
    qInterColumnSortOrder?: number[];
    /**
     * Removes zero values.
     */
    qSuppressZero?: boolean;
    /**
     * Removes missing values.
     */
    qSuppressMissing?: boolean;
    /**
     * Initial data set.
     */
    qInitialDataFetch?: NxPage[];
    /**
     *
     * One of:
     * * N or DATA_REDUCTION_NONE
     * * D1 or DATA_REDUCTION_ONEDIM
     * * S or DATA_REDUCTION_SCATTERED
     * * C or DATA_REDUCTION_CLUSTERED
     * * ST or DATA_REDUCTION_STACKED
     */
    qReductionMode?: NxDataReductionMode;
    /**
     * Defines the way the data are handled internally by the engine.
     * Default value is _DATA_MODE_STRAIGHT_ .
     * A pivot table can contain several dimensions and measures whereas a stacked pivot table can contain several dimensions but only one measure.
     *
     * One of:
     * * S or DATA_MODE_STRAIGHT
     * * P or DATA_MODE_PIVOT
     * * K or DATA_MODE_PIVOT_STACK
     * * T or DATA_MODE_TREE
     * * D or DATA_MODE_DYNAMIC
     */
    qMode?: NxHypercubeMode;
    qPseudoDimPos?: number;
    /**
     * Number of left dimensions.
     * Default value is -1. In that case, all dimensions are left dimensions.
     * Hidden dimensions (e.g. due to unfulfilled calc condition on dimension level) is still counted in this context.
     * The index related to each left dimension depends on the position of the pseudo dimension (if any).
     * For example, a pivot table with:
     * * Four dimensions in the following order: Country, City, Product and Category.
     * * One pseudo dimension in position 1 (the position is defined in _qInterColumnSortOrder_ )
     * _qInterColumnSortOrder_ is (0,-1,1,2,3).
     * * Three left dimensions ( _qNoOfLeftDims_ is set to 3).
     *
     * implies that:
     * * The index 0 corresponds to the left dimension Country.
     * * The index 1 corresponds to the pseudo dimension.
     * * The index 2 corresponds to the left dimension City.
     * * Product and Category are top dimensions.
     *
     * Another example:
     * * Four dimensions in the following order: Country, City, Product and Category.
     * * Three left dimensions ( _qNoOfLeftDims_ is set to 3).
     * * One pseudo dimension.
     * * The property _qInterColumnSortOrder_ is left empty.
     *
     * Implies that:
     * * The index 0 corresponds to the left dimension Country.
     * * The index 1 corresponds to the left dimension City.
     * * The index 2 corresponds to the left dimension Product.
     * * Category is a top dimension.
     * * The pseudo dimension is a top dimension.
     */
    qNoOfLeftDims?: number;
    /**
     * If this property is set to true, the cells are always expanded. It implies that it is not possible to collapse any cells.
     * The default value is false.
     */
    qAlwaysFullyExpanded?: boolean;
    /**
     * Maximum number of cells for an initial data fetch (set in _qInitialDataFetch_ ) when in stacked mode ( _qMode_ is K).
     * The default value is 5000.
     */
    qMaxStackedCells?: number;
    /**
     * If this property is set to true, the missing symbols (if any) are replaced by 0 if the value is a numeric and by an empty string if the value is a string.
     * The default value is false.
     */
    qPopulateMissing?: boolean;
    /**
     * If set to true, the total (if any) is shown on the first row.
     * The default value is false.
     */
    qShowTotalsAbove?: boolean;
    /**
     * This property applies for pivot tables and allows to change the layout of the table. An indentation is added to the beginning of each row.
     * The default value is false.
     */
    qIndentMode?: boolean;
    /**
     * Specifies a calculation condition, which must be fulfilled for the hypercube to be (re)calculated.
     * As long as the condition is not met, the engine does not perform a new calculation.
     * This property is optional. By default, there is no calculation condition.
     */
    qCalcCond?: ValueExpr;
    /**
     * To enable the sorting by ascending or descending order in the values of a measure.
     * This property applies to pivot tables and stacked pivot tables.
     * In the case of a pivot table, the measure or pseudo dimension should be defined as a top dimension. The sorting is restricted to the values of the first measure in a pivot table.
     */
    qSortbyYValue?: number;
    /**
     * Title of the hypercube, for example the title of a chart.
     */
    qTitle?: StringExpr;
    /**
     * Specifies a calculation condition object.
     * If CalcCondition.Cond is not fulfilled, the hypercube is not calculated and CalcCondition.Msg is evaluated.
     * By default, there is no calculation condition.
     * This property is optional.
     */
    qCalcCondition?: NxCalcCond;
    /**
     * The order of the columns.
     */
    qColumnOrder?: number[];
    /**
     * Expansion state per dimension for pivot mode ( _qMode_ is P).
     *
     * Stability: *experimental*
     */
    qExpansionState?: ExpansionData[];
    /**
     * Hypercube Modifier Dynamic script string
     *
     * Stability: *experimental*
     */
    qDynamicScript?: string[];
    /**
     * Set Expression valid for the whole cube. Used to limit computations to the set specified.
     */
    qContextSetExpression?: string;
    /**
     * If set to true, suppress any measure grand totals, ignoring any AggrFunc.
     */
    qSuppressMeasureTotals?: boolean;
};
type InputFieldItem = {
    qFieldName?: string;
    qValues?: FieldValue[];
    qPackedHashKeys?: number[];
};
type InterFieldSortData = {
    qName?: string;
    qReversed?: boolean;
};
type InteractDef = {
    /**
     * Interaction type.
     *
     * One of:
     * * IT_MSGBOX
     * * IT_SCRIPTLINE
     * * IT_BREAK
     * * IT_INPUT
     * * IT_END
     * * IT_PASSWD
     * * IT_USERNAME
     */
    qType?: InteractType;
    /**
     * Title used in the message box dialog.
     * This property is relevant if _qType_ is *IT_MSGBOX*.
     */
    qTitle?: string;
    /**
     * Message used in the message box dialog.
     * This property is relevant if _qType_ is *IT_MSGBOX*.
     */
    qMsg?: string;
    /**
     * Buttons displayed in the message box dialog.
     * This property is relevant if _qType_ is *IT_MSGBOX*.
     * One of:
     * * 0 means that the _qButtons_ property is not relevant.
     * * 17 means that the message box contains the **OK** and **Cancel** buttons or the **stop** -sign icon.
     */
    qButtons?: number;
    /**
     * Next script statement to be executed.
     * This property is used if the type of interaction is *IT_SCRIPTLINE*.
     */
    qLine?: string;
    /**
     * First line number of the previously executed statement.
     * This property is used if the type of interaction is *IT_SCRIPTLINE*.
     */
    qOldLineNr?: number;
    /**
     * First line number of the next statement to be executed.
     * This property is used if the type of interaction is *IT_SCRIPTLINE*.
     */
    qNewLineNr?: number;
    /**
     * Path specified by the **Include** script variable.
     * This property is used if the type of interaction is *IT_SCRIPTLINE*.
     * Example of an **Include** variable:
     * _$(Include=lib:\\\MyDataFiles\abc.txt);_
     */
    qPath?: string;
    /**
     * This property is set to true if the returned statement is an hidden script statement.
     */
    qHidden?: boolean;
    /**
     * Not relevant for describing the requested user interaction.
     */
    qResult?: number;
    /**
     * Is not used in Qlik Sense.
     */
    qInput?: string;
};
type InteractType = "IT_MSGBOX" | "IT_SCRIPTLINE" | "IT_BREAK" | "IT_INPUT" | "IT_END" | "IT_PASSWD" | "IT_USERNAME";
type KeyType = "NOT_KEY" | "ANY_KEY" | "PRIMARY_KEY" | "PERFECT_KEY";
type LayoutBookmarkData = {
    qId?: string;
    qActive?: boolean;
    qShowMode?: number;
    qScrollPos?: ScrollPosition;
};
/**
 * Contains JSON to be excluded from validation.
 */
type LayoutExclude = object;
/**
 * Meta data about the selection in a field.
 */
type LayoutFieldInfo = {
    /**
     * The name of the field.
     */
    qFieldName?: string;
    /**
     * Number of selected values in the field.
     */
    qValuesCount?: number;
    /**
     * Number of excluded values in the field.
     */
    qExcludedValuesCount?: number;
};
type LineageInfo = {
    /**
     * A string indicating the origin of the data:
     * * [filename]: the data comes from a local file.
     * * INLINE: the data is entered inline in the load script.
     * * RESIDENT: the data comes from a resident table. The table name is listed.
     * * AUTOGENERATE: the data is generated from the load script (no external table of data source).
     * * Provider: the data comes from a data connection. The connector source name is listed.
     * * [webfile]: the data comes from a web-based file.
     * * STORE: path to QVD or TXT file where data is stored.
     * * EXTENSION: the data comes from a Server Side Extension (SSE).
     */
    qDiscriminator?: string;
    /**
     * The LOAD and SELECT script statements from the data load script.
     */
    qStatement?: string;
};
/**
 * Renders the properties of a list object. Is the layout for _ListObjectDef_.
 * For more information about the definition of a list object, see _Generic object_.
 * <div class=note>ListObject is used by the _GetLayout Method_ to display the properties of a list object. </div>
 */
type ListObject = {
    /**
     * Name of the alternate state.
     * Default is current selections _$_ .
     */
    qStateName?: string;
    /**
     * Defines the size of a list object.
     */
    qSize?: Size;
    /**
     * This parameter is optional and is displayed in case of error.
     */
    qError?: NxValidationError;
    /**
     * Information about the dimension.
     */
    qDimensionInfo?: NxDimensionInfo;
    /**
     * Lists the expressions in the list object.
     */
    qExpressions?: NxListObjectExpression[];
    /**
     * Set of data.
     * Is empty if nothing has been defined in **qInitialDataFetch** in _ListObjectDef_.
     */
    qDataPages?: NxDataPage[];
};
/**
 * Defines the properties of a list object.
 * For more information about the definition of a list object, see _Generic object_.
 */
type ListObjectDef = {
    /**
     * Name of the alternate state.
     * Default is current selections _$_ .
     */
    qStateName?: string;
    /**
     * Refers to a dimension stored in the library.
     */
    qLibraryId?: string;
    /**
     * Refers to a dimension stored in the list object.
     */
    qDef?: NxInlineDimensionDef;
    /**
     * Defines the sorting by state.
     */
    qAutoSortByState?: NxAutoSortByStateDef;
    /**
     * Defines the frequency mode. The frequency mode is used to calculate the frequency of a value in a list object.
     * Default is _NX_FREQUENCY_NONE_ .
     * This parameter is optional.
     *
     * One of:
     * * N or NX_FREQUENCY_NONE
     * * V or NX_FREQUENCY_VALUE
     * * P or NX_FREQUENCY_PERCENT
     * * R or NX_FREQUENCY_RELATIVE
     */
    qFrequencyMode?: NxFrequencyMode;
    /**
     * If set to true, alternative values are allowed in _qData_ .
     * If set to false, no alternative values are displayed in _qData_ . Values are excluded instead.
     * The default value is false.
     * Note that on the contrary, the _qStateCounts_ parameter counts the excluded values as alternative values.
     * This parameter is optional.
     */
    qShowAlternatives?: boolean;
    /**
     * Fetches an initial data set.
     */
    qInitialDataFetch?: NxPage[];
    /**
     * Lists the expressions in the list object.
     * This parameter is optional.
     */
    qExpressions?: NxListObjectExpressionDef[];
    /**
     * If set to true, reduces the set of states returned.
     * Supported for Direct Query mode only.
     * Default is false.
     *
     * Stability: *experimental*
     */
    qDirectQuerySimplifiedView?: boolean;
};
type LocaleInfo = {
    /**
     * Decimal separator.
     */
    qDecimalSep?: string;
    /**
     * Thousand separator.
     */
    qThousandSep?: string;
    /**
     * List separator.
     */
    qListSep?: string;
    /**
     * Money decimal separator.
     */
    qMoneyDecimalSep?: string;
    /**
     * Money thousand separator.
     */
    qMoneyThousandSep?: string;
    /**
     * Current year.
     */
    qCurrentYear?: number;
    /**
     * Money format.
     * Example: _#.##0,00 kr;-#.##0,00 kr_
     */
    qMoneyFmt?: string;
    /**
     * Time format.
     * Example: _hh:mm:ss_
     */
    qTimeFmt?: string;
    /**
     * Date format.
     * Example: _YYYY-MM-DD_
     */
    qDateFmt?: string;
    /**
     * Time stamp format.
     * Example: _YYYY-MM-DD hh:mm:ss[.fff]_
     */
    qTimestampFmt?: string;
    /**
     * Information about the calendar.
     */
    qCalendarStrings?: CalendarStrings;
    /**
     * First day of the week, starting from 0.
     * According to ISO 8601, _Monday_ is the first day of the week.
     * * 0 = Monday
     * * 1 = Tuesday
     * * ...
     * * 6 = Sunday
     *
     * If this property has not been set in a script, the returned value comes from the Windows operating system.
     */
    qFirstWeekDay?: number;
    /**
     * Is set to true if broken weeks are allowed in a year.
     * According to ISO 8601, no broken weeks should be allowed.
     * This property is not shown if set to false.
     * If _qBrokenWeeks_ is set to true, _qReferenceDay_ is irrelevant.
     * If this property has not been set in a script, the returned value comes from the Windows operating system.
     */
    qBrokenWeeks?: boolean;
    /**
     * Day in the year that is always in week 1.
     * According to ISO 8601, January 4th should always be part of the first week of the year ( _qReferenceDay_ =4).
     * Recommended values are in the range 1 and 7.
     * If this property has not been set in a script, the returned value comes from the Windows operating system.
     * This property is not relevant if there are broken weeks in the year.
     */
    qReferenceDay?: number;
    /**
     * First month of the year, starting from 1.
     * According to ISO 8601, _January_ is the first month of the year.
     * * 1 = January
     * * 2 = February
     * * 12 = January
     *
     * If this property has not been set in a script, the returned value comes from the Windows operating system.
     */
    qFirstMonthOfYear?: number;
    /**
     * Locale name (following language tagging convention RFC 4646):
     * _&lt; language&gt;-&lt;REGION&gt;_
     * Where:
     * * _language_ is a lowercase ISO  639 language code
     * * _REGION_ specifies an uppercase ISO 3166 country code.
     *
     * If this property has not been set in a script, the returned value comes from the Windows operating system.
     */
    qCollation?: string;
    /**
     * Number format.
     * Example: 3:k;6:M;9:G;12:T;15:P;18:E;21:Z;24:Y;-3:m;-6:μ;-9:n;-12:p;-15:f;-18:a;-21:z;-24:y
     */
    qNumericalAbbreviation?: string;
};
type LogOnType = "LOG_ON_SERVICE_USER" | "LOG_ON_CURRENT_USER";
/**
 * Lists the measures. Is the layout for _MeasureListDef_.
 */
type MeasureList<QData> = {
    /**
     * Information about the list of measures.
     */
    qItems?: NxContainerEntry<QData>[];
};
/**
 * Defines the list of measures.
 */
type MeasureListDef = {
    /**
     * Type of the list.
     */
    qType?: string;
    /**
     * Data
     */
    qData?: Record<string, string>;
};
/**
 * Lists the media files. Is the layout for _MediaListDef_.
 * <div class=note>This struct is deprecated.</div>
 */
type QMediaList = {
    /**
     * Information about the list of media files.
     * In Qlik Sense Desktop, the media files are retrieved from:
     * _%userprofile%\Documents\Qlik\Sense\Content\Default_
     * In Qlik Sense Enterprise, the media files are retrieved from:
     * &lt;installation_directory&gt;\Qlik\Sense\Repository\Content\Default
     * The default installation directory is _ProgramData_ .
     */
    qItems?: MediaListItem[];
};
/**
 * Defines the list of media files.
 * <div class=note>This struct is deprecated.</div>
 *
 * ### Properties
 * "qMediaListDef": {}
 * _qMediaListDef_ has an empty structure. No properties need to be set.
 */
type MediaListDef = object;
/**
 * <div class=note>In addition, this structure can return dynamic properties.</div>
 */
type MediaListItem = {
    /**
     * Relative path to the media file. The URL is static.
     * Media files located:
     * * in the _/content/default/_ folder are outside the qvf file.
     * * in the _/media/ folder_ are embedded in the qvf file.
     */
    qUrlDef?: string;
    /**
     * Relative path to the media file.
     * Media files located:
     * * in the _/content/default/_ folder are outside the qvf file.
     * * in the _/media/ folder_ are embedded in the qvf file.
     */
    qUrl?: string;
};
type MetaData = {
    qShared?: boolean;
    qUtcModifyTime?: number;
    qSheetId?: string;
    qTemporary?: boolean;
    qRestrictedAccess?: boolean;
    qAccessList?: string[];
    qPersonalEditionHash_OBSOLETE?: string;
    qHidden?: boolean;
    qLinkedTo?: string[];
};
/**
 * ### Qlik Sense Desktop
 * In Qlik Sense Desktop, this structure can contain dynamic properties.
 *
 * ### Qlik Sense Enterprise
 * In Qlik Sense Enterprise, only a few dynamic properties at the app level are persisted.
 * The persisted dynamic properties are the following:
 * * modifiedDate
 * * published
 * * publishTime
 * * privileges
 * * description
 * * dynamicColor
 */
type NxAppLayout = {
    /**
     * Title of the app.
     */
    qTitle?: string;
    /**
     * In Qlik Sense Enterprise, this property corresponds to the app identifier (GUID).
     * In Qlik Sense Desktop, this property corresponds to the full path of the app.
     */
    qFileName?: string;
    /**
     * Date and time of the last reload of the app in ISO format.
     */
    qLastReloadTime?: string;
    /**
     * Is set to true if the app has been updated since the last save.
     */
    qModified?: boolean;
    /**
     * Is set to true if a script is defined in the app.
     */
    qHasScript?: boolean;
    /**
     * Array of alternate states.
     */
    qStateNames?: string[];
    /**
     * Information on publishing and permissions.
     */
    qMeta?: NxMeta;
    /**
     * Information about the locale.
     */
    qLocaleInfo?: LocaleInfo;
    /**
     * Is set to true if the app contains data following a script reload.
     */
    qHasData?: boolean;
    /**
     * If set to true, it means that the app is read-only.
     */
    qReadOnly?: boolean;
    /**
     * If set to true, it means that the app was opened without loading its data.
     */
    qIsOpenedWithoutData?: boolean;
    /**
     * If set to true, the app is a Session App, i.e. not persistent.
     */
    qIsSessionApp?: boolean;
    /**
     * If set to true, the persisted app cannot be used in a Binary load statement in Qlik load script.
     */
    qProhibitBinaryLoad?: boolean;
    /**
     * App thumbnail.
     */
    qThumbnail?: StaticContentUrl;
    /**
     * If set to true, the app is in BDI Direct Query Mode.
     */
    qIsBDILiveMode?: boolean;
    /**
     * If set to true, the app is in Direct Query Mode.
     */
    qIsDirectQueryMode?: boolean;
    /**
     * Array of features not supported by the app.
     */
    qUnsupportedFeatures?: NxFeature[];
    /**
     *
     * One of:
     * * ANALYTICS
     * * DATA_PREPARATION
     * * DATAFLOW_PREP
     */
    qUsage?: UsageEnum;
};
/**
 * ### Qlik Sense Desktop
 * In Qlik Sense Desktop, this structure can contain dynamic properties.
 *
 * ### Qlik Sense Enterprise
 * In Qlik Sense Enterprise, only a few dynamic properties at the app level are persisted.
 * The persisted dynamic properties are the following:
 * * modifiedDate
 * * published
 * * publishTime
 * * privileges
 * * description
 * * dynamicColor
 */
type NxAppProperties = {
    /**
     * App title.
     */
    qTitle?: string;
    /**
     * Last reload time of the app.
     */
    qLastReloadTime?: string;
    /**
     * Internal property reserved for app migration.
     * Patch version of the app.
     * Do not update.
     */
    qMigrationHash?: string;
    /**
     * Internal property reserved for app migration.
     * The app is saved in this version of the product.
     * Do not update.
     */
    qSavedInProductVersion?: string;
    /**
     * App thumbnail.
     */
    qThumbnail?: StaticContentUrlDef;
    /**
     * If true the app has section access configured.
     */
    qHasSectionAccess?: boolean;
    /**
     * Indicates whether the app is used for Analytics or DataPreparation
     *
     * One of:
     * * ANALYTICS
     * * DATA_PREPARATION
     * * DATAFLOW_PREP
     */
    qUsage?: UsageEnum;
};
/**
 * Layout for _NxAttrDimDef_.
 */
type NxAttrDimDef = {
    /**
     * Expression or field name.
     */
    qDef?: string;
    /**
     * LibraryId for dimension.
     */
    qLibraryId?: string;
    /**
     * Sorting.
     */
    qSortBy?: SortCriteria;
    /**
     * If set to true, this attribute will not affect the number of rows in the cube.
     */
    qAttribute?: boolean;
};
/**
 * Layout for _NxAttrDimDef_.
 */
type NxAttrDimInfo = {
    /**
     * Cardinality of the attribute expression.
     */
    qCardinal?: number;
    /**
     * Number of rows.
     */
    qSize?: Size;
    /**
     * The title for the attribute dimension.
     */
    qFallbackTitle?: string;
    /**
     * The Locked value of the dimension.
     */
    qLocked?: boolean;
    /**
     * Validation error.
     */
    qError?: NxValidationError;
    /**
     * True if this is a calculated dimension.
     */
    qIsCalculated?: boolean;
};
type NxAttrExprDef = {
    /**
     * Definition of the attribute expression.
     * Example: _"Max(OrderID)"_
     */
    qExpression?: string;
    /**
     * Definition of the attribute expression stored in the library.
     * Example: _"MyGenericMeasure"_
     */
    qLibraryId?: string;
    /**
     * If set to true, this measure will not affect the number of rows in the cube.
     */
    qAttribute?: boolean;
    /**
     * Format of the field.
     * This parameter is optional.
     */
    qNumFormat?: FieldAttributes;
    /**
     * Label of the attribute expression.
     */
    qLabel?: string;
    /**
     * Optional expression used for dynamic label.
     */
    qLabelExpression?: string;
};
/**
 * Layout for _NxAttrExprDef_.
 */
type NxAttrExprInfo = {
    /**
     * Minimum value.
     */
    qMin?: number;
    /**
     * Maximum value.
     */
    qMax?: number;
    qFallbackTitle?: string;
    /**
     * String version of the minimum Value.
     */
    qMinText?: string;
    /**
     * String version of the maximum Value.
     */
    qMaxText?: string;
    /**
     * Format of the field.
     * This parameter is optional.
     */
    qNumFormat?: FieldAttributes;
    /**
     * This parameter is set to true if _qNumFormat_ is set to _U_ (unknown). The engine guesses the type of the field based on the field's expression.
     */
    qIsAutoFormat?: boolean;
};
type NxAttributeDimValues = {
    /**
     * List of values.
     */
    qValues?: NxSimpleDimValue[];
};
type NxAttributeExpressionValues = {
    /**
     * List of attribute expressions values.
     */
    qValues?: NxSimpleValue[];
};
type NxAutoSortByStateDef = {
    /**
     * This parameter applies to list objects.
     * If the total number of values in the list object is greater than the value set in _qDisplayNumberOfRows_ , the selected lines are promoted at the top of the list object.
     * If _qDisplayNumberOfRows_ is set to a negative value or to 0, the sort by state is disabled.
     */
    qDisplayNumberOfRows?: number;
};
type NxAxisData = {
    /**
     * List of axis data.
     */
    qAxis?: NxAxisTicks[];
};
type NxAxisTicks = {
    /**
     * Name of the derived definition.
     */
    qName?: string;
    /**
     * List of tags.
     */
    qTags?: string[];
    /**
     * List of ticks.
     */
    qTicks?: NxTickCell[];
};
type NxBookmark = {
    /**
     * List of selections for each state.
     */
    qStateData?: AlternateStateData[];
    /**
     * Time when the bookmark was created.
     */
    qUtcModifyTime?: number;
    /**
     * List of the variables in the app at the time the bookmark was created.
     */
    qVariableItems?: BookmarkVariableItem[];
    /**
     * Softpatches to be applied with this bookmark.
     */
    qPatches?: NxPatches[];
    /**
     * Information about cyclic groups by zero-based index. This field is unused.
     */
    qCyclicGroupStates?: CyclicGroupPosition[];
    /**
     * Information about cyclic groups indexed by field definition.
     */
    qGroupStates?: GroupState[];
};
type NxCalcCond = {
    /**
     * Condition for calculating an hypercube, dimension or measure.
     */
    qCond?: ValueExpr;
    /**
     * Evaluated if Cond is not fullfilled.
     */
    qMsg?: StringExpr;
};
type NxCardinalities = {
    /**
     * Number of distinct field values.
     */
    qCardinal?: number;
    /**
     * Number of distinct hypercube values.
     */
    qHypercubeCardinal?: number;
    /**
     * Number of distinct values when paging for AllValues in a Tree Structure.
     * Default is -1 if not part of a Tree structure.
     */
    qAllValuesCardinal?: number;
};
type NxCell = {
    /**
     * Some text.
     * This parameter is optional.
     */
    qText?: string;
    /**
     * A value.
     * This parameter is optional.
     */
    qNum?: number;
    /**
     * Rank number of the value, starting from 0.
     * If the element number is a negative number, it means that the returned value is not an element number.
     * You can get the following negative values:
     * * -1: the cell is a _Total_ cell. It shows a total.
     * * -2: the cell is a _Null_ cell.
     * * -3: the cell belongs to the group _Others_ .
     * * -4: the cell is empty. Applies to pivot tables.
     */
    qElemNumber?: number;
    /**
     * State of the value.
     * The default state for a measure is L.
     *
     * One of:
     * * L or LOCKED
     * * S or SELECTED
     * * O or OPTION
     * * D or DESELECTED
     * * A or ALTERNATIVE
     * * X or EXCLUDED
     * * XS or EXCL_SELECTED
     * * XL or EXCL_LOCKED
     * * NSTATES
     */
    qState?: StateEnumType;
    /**
     * Is set to _true_ , if **qText** and **qNum** are empty.
     * This parameter is optional. The default value is _false_ .
     */
    qIsEmpty?: boolean;
    /**
     * Is set to _true_ if a total is displayed in the cell.
     * This parameter is optional. The default value is _false_ .
     * Not applicable to list objects.
     */
    qIsTotalCell?: boolean;
    /**
     * Is set to _true_ if the cell belongs to the group _Others_ .
     * Dimension values can be set as _Others_ depending on what has been defined in **OtherTotalSpecProp** .
     * This parameter is optional. The default value is _false_ .
     * Not applicable to list objects.
     */
    qIsOtherCell?: boolean;
    /**
     * Frequency of the value.
     * This parameter is optional.
     */
    qFrequency?: string;
    /**
     * Search hits.
     * The search hits are highlighted.
     * This parameter is optional.
     */
    qHighlightRanges?: NxHighlightRanges;
    /**
     * Attribute expression values.
     */
    qAttrExps?: NxAttributeExpressionValues;
    /**
     * Attribute dimensions values.
     */
    qAttrDims?: NxAttributeDimValues;
    /**
     * Is set to _true_ if the value is Null.
     */
    qIsNull?: boolean;
    qMiniChart?: NxMiniChartData;
    qInExtRow?: boolean;
};
type NxCellPosition = {
    /**
     * Position of the cell on the x-axis.
     */
    qx?: number;
    /**
     * Position of the cell on the y-axis.
     */
    qy?: number;
};
type NxCellRows = NxCell[];
type NxContainerEntry<QData> = {
    /**
     * Information about the object.
     */
    qInfo?: NxInfo;
    /**
     * Information on publishing and permissions.
     */
    qMeta?: NxMeta;
    /**
     * Set of data.
     */
    qData?: QData;
};
type NxContinuousDataOptions = {
    /**
     * Start value.
     */
    qStart?: number;
    /**
     * End value.
     */
    qEnd?: number;
    /**
     * Number of bins for binning.
     */
    qNbrPoints?: number;
    /**
     * Maximum number of ticks.
     */
    qMaxNbrTicks?: number;
    /**
     * Maximum number of lines.
     */
    qMaxNumberLines?: number;
};
type NxContinuousMode = "Never" | "CONTINUOUS_NEVER" | "Possible" | "CONTINUOUS_IF_POSSIBLE" | "Time" | "CONTINUOUS_IF_TIME";
type NxContinuousRangeSelectInfo = {
    /**
     * Range information.
     */
    qRange?: QRange;
    /**
     * Dimension index.
     */
    qDimIx?: number;
};
type NxCurrentSelectionItem = {
    /**
     * Number of values in the field.
     */
    qTotal?: number;
    /**
     * This parameter is displayed if its value is true.
     * Is set to true if the field is a numeric.
     * This parameter is optional.
     */
    qIsNum?: boolean;
    /**
     * Name of the field that is selected.
     */
    qField?: string;
    /**
     * This parameter is displayed if its value is true.
     * Is set to true if the field is locked.
     * This parameter is optional.
     */
    qLocked?: boolean;
    /**
     * This parameter is displayed if its value is true.
     * Property that is set to a field. Is set to true if the field cannot be unselected.
     * This parameter is optional.
     */
    qOneAndOnlyOne?: boolean;
    /**
     * Text that was used for the search. This parameter is filled when searching for a value and selecting it.
     * This parameter is optional.
     */
    qTextSearch?: string;
    /**
     * Number of values that are selected.
     */
    qSelectedCount?: number;
    /**
     * Values that are selected.
     */
    qSelected?: string;
    /**
     * Information about the range of selected values.
     * Is empty if there is no range of selected values.
     */
    qRangeInfo?: RangeSelectInfo[];
    /**
     * Sort index of the field. Indexing starts from 0.
     */
    qSortIndex?: number;
    /**
     * Number of values in a particular state.
     */
    qStateCounts?: NxStateCounts;
    /**
     * Information about the fields that are selected.
     */
    qSelectedFieldSelectionInfo?: NxFieldSelectionInfo[];
    /**
     * Information about the fields that are not selected.
     */
    qNotSelectedFieldSelectionInfo?: NxFieldSelectionInfo[];
    /**
     * Maximum values to show in the current selections.
     * The default value is 6.
     */
    qSelectionThreshold?: number;
    /**
     * Label that, if defined, is displayed in current selections instead of the actual expression. ReadableName is only used with field-on-the-fly.
     */
    qReadableName?: string;
    /**
     * Optional parameter. Indicates if the selection is to be hidden in the Selections bar.
     * Is set to true if the current selection is hidden.
     */
    qIsHidden?: boolean;
    /**
     * Information about objects in the app that refer to the data model field of an NxCurrentSelectionItem, including labels.
     *
     * Stability: *experimental*
     */
    qFieldReferenceInfo?: SelectionItemFieldReferenceInfo[];
};
type NxDataAreaPage = {
    /**
     * Position from the left.
     * Corresponds to the lowest possible value of the first measure (the measure on the x-axis).
     */
    qLeft?: number;
    /**
     * Position from the top.
     * Corresponds to the highest possible value of the second measure (the measure on the y-axis).
     */
    qTop?: number;
    /**
     * Width of the page.
     * Corresponds to the highest possible value of the first measure (the measure on the x-axis).
     */
    qWidth?: number;
    /**
     * Height of the page.
     * The difference between _qTop_ and _qHeight_ gives the lowest possible value of the second measure (the measure on the y-axis).
     */
    qHeight?: number;
};
type NxDataPage = {
    /**
     * Array of data.
     */
    qMatrix?: NxCellRows[];
    /**
     * Array of tails.
     * Is used for hypercube objects with multiple dimensions. It might happen that due to the window size some elements in a group cannot be displayed in the same page as the other elements of the group. Elements of a group of dimensions can be part of the previous or the next tail.
     * If there is no tail, the array is empty _[ ]_ .
     */
    qTails?: NxGroupTail[];
    /**
     * Size and offset of the data in the matrix.
     */
    qArea?: Rect;
    /**
     * Is set to true, if the data have been reduced.
     * The default value is false.
     */
    qIsReduced?: boolean;
};
type NxDataReductionMode = "N" | "DATA_REDUCTION_NONE" | "D1" | "DATA_REDUCTION_ONEDIM" | "S" | "DATA_REDUCTION_SCATTERED" | "C" | "DATA_REDUCTION_CLUSTERED" | "ST" | "DATA_REDUCTION_STACKED";
type NxDerivedField = {
    /**
     * Identifier of the derived field.
     * The identifier is unique.
     */
    qId?: string;
    /**
     * Combination of field name, definition and method.
     * Example:
     * _OrderDate.MyDefinition.Year_
     */
    qName?: string;
    /**
     * Method name associated to the derived field.
     */
    qMethod?: string;
    /**
     * Expression of the derived field.
     * Example:
     * If _qName_ is _OrderDate.MyDefinition.Year_ , the expression is as follows:
     * _=${Mydefinition(OrderDate).Year}_
     */
    qExpr?: string;
    /**
     * List of tags.
     */
    qTags?: string[];
};
type NxDerivedFieldDescriptionList = {
    /**
     * Information about the derived fields.
     */
    qDerivedFieldLists?: NxDerivedFieldsData[];
};
type NxDerivedFieldsData = {
    /**
     * Name of the derived definition.
     */
    qDerivedDefinitionName?: string;
    /**
     * List of the derived fields.
     */
    qFieldDefs?: NxDerivedField[];
    /**
     * List of the derived groups.
     */
    qGroupDefs?: NxDerivedGroup[];
    /**
     * List of tags on the derived fields.
     */
    qTags?: string[];
};
type NxDerivedGroup = {
    /**
     * Identifier of the group.
     */
    qId?: string;
    /**
     * Name of the derived group.
     */
    qName?: string;
    /**
     * Grouping type.
     * The grouping should be either H or C (Grouping is mandatory for derived definitions).
     * The parameter is mandatory.
     *
     * One of:
     * * N or GRP_NX_NONE
     * * H or GRP_NX_HIEARCHY
     * * C or GRP_NX_COLLECTION
     */
    qGrouping?: NxGrpType;
    /**
     * List of the derived fields in the group.
     */
    qFieldDefs?: string[];
};
type NxDimCellType = "V" | "NX_DIM_CELL_VALUE" | "E" | "NX_DIM_CELL_EMPTY" | "N" | "NX_DIM_CELL_NORMAL" | "T" | "NX_DIM_CELL_TOTAL" | "O" | "NX_DIM_CELL_OTHER" | "A" | "NX_DIM_CELL_AGGR" | "P" | "NX_DIM_CELL_PSEUDO" | "R" | "NX_DIM_CELL_ROOT" | "U" | "NX_DIM_CELL_NULL" | "G" | "NX_DIM_CELL_GENERATED";
/**
 * <div class=note>The fields or expressions in the dimension are either defined in **qDef** or in the master dimension referred to by **qLibraryId**. If **qLibraryId** is set then the qFieldDefs, qFieldLabels, qGrouping, qLabelExpression and qAlias of the master dimension will be used. </div> <div class=note>If the dimension is set in the hypercube and not in the library, this dimension cannot be shared with other objects.</div> <div class=note>A dimension that is set in the library can be used by many objects.</div>
 */
type NxDimension = {
    /**
     * Refers to a dimension stored in the library.
     */
    qLibraryId?: string;
    /**
     * Refers to a dimension stored in the hypercube.
     */
    qDef?: NxInlineDimensionDef;
    /**
     * If set to true, no null values are returned.
     */
    qNullSuppression?: boolean;
    qIncludeElemValue?: boolean;
    /**
     * Sets the dimension limits. Each dimension of a hypercube is configured separately.
     * Defines if some values (grouped as _Others_ ) should be grouped together in the visualization.
     * For example in a pie chart all values lower than 200 could be grouped together.
     */
    qOtherTotalSpec?: OtherTotalSpecProp;
    qShowTotal?: boolean;
    /**
     * If set to true, all dimension values are shown.
     */
    qShowAll?: boolean;
    /**
     * This property is used when some dimension limits are set.
     * Label of the _Others_ group. The default label is _Others_ .
     * Example:
     * _"qOtherLabel":"= &lt;label&gt;"_
     * or
     * _"qOtherLabel":{"qExpr":"= &lt;label&gt;"}_
     * Where:
     * * &lt; _label_ &gt; is the label of the _Others_ group.
     */
    qOtherLabel?: StringExpr;
    /**
     * If this property is set, the total of the calculated values is returned.
     * The default label is _Total_ .
     * Example:
     * _"qTotalLabel":"= &lt;label&gt;"_
     * or
     * _"qTotalLabel":{"qExpr":"= &lt;label&gt;"}_
     * Where:
     * * &lt; _label_ &gt; is the label of the _Total_ group.
     */
    qTotalLabel?: StringExpr;
    /**
     * Specifies a calculation condition, which must be fulfilled for the dimension to be calculated.
     * If the calculation condition is not met, the dimension is excluded from the calculation.
     * By default, there is no calculation condition.
     * This property is optional.
     */
    qCalcCond?: ValueExpr;
    /**
     * List of attribute expressions.
     */
    qAttributeExpressions?: NxAttrExprDef[];
    /**
     * List of attribute dimensions.
     */
    qAttributeDimensions?: NxAttrDimDef[];
    /**
     * Specifies a calculation condition object.
     * If CalcCondition.Cond is not fulfilled, the dimension is excluded from the calculation and CalcCondition.Msg is evaluated.
     * By default, there is no calculation condition.
     * This property is optional.
     */
    qCalcCondition?: NxCalcCond;
};
type NxDimensionInfo = {
    /**
     * Corresponds to the label of the dimension that is selected.
     * If the label is not defined then the field name is used.
     */
    qFallbackTitle?: string;
    /**
     * Length of the longest value in the field.
     */
    qApprMaxGlyphCount?: number;
    /**
     * Number of distinct field values.
     *
     * @deprecated: This will be removed in a future version
     */
    qCardinal?: number;
    /**
     * Is set to true if the field is locked.
     */
    qLocked?: boolean;
    /**
     * Sort indicator.
     * The default value is no sorting.
     * This parameter is optional.
     *
     * One of:
     * * N or NX_SORT_INDICATE_NONE
     * * A or NX_SORT_INDICATE_ASC
     * * D or NX_SORT_INDICATE_DESC
     */
    qSortIndicator?: NxSortIndicatorType;
    /**
     * Array of dimension labels.
     * Contains the labels of all dimensions in a hierarchy group (for example the labels of all dimensions in a drill down group).
     */
    qGroupFallbackTitles?: string[];
    /**
     * Index of the dimension that is currently in use.
     * _qGroupPos_ is set to 0 if there are no hierarchical groups (drill-down groups) or cycle groups.
     */
    qGroupPos?: number;
    /**
     * Number of values in a particular state.
     */
    qStateCounts?: NxStateCounts;
    /**
     * Gives information on a field. For example, it can return the type of the field.
     * Examples: key, text, ASCII
     */
    qTags?: string[];
    /**
     * This parameter is optional.
     * Gives information on the error.
     */
    qError?: NxValidationError;
    /**
     * Binary format of the field.
     *
     * One of:
     * * D or NX_DIMENSION_TYPE_DISCRETE
     * * N or NX_DIMENSION_TYPE_NUMERIC
     * * T or NX_DIMENSION_TYPE_TIME
     */
    qDimensionType?: NxDimensionType;
    /**
     * If set to true, it inverts the sort criteria in the field.
     */
    qReverseSort?: boolean;
    /**
     * Defines the grouping.
     *
     * One of:
     * * N or GRP_NX_NONE
     * * H or GRP_NX_HIEARCHY
     * * C or GRP_NX_COLLECTION
     */
    qGrouping?: NxGrpType;
    /**
     * If set to true, it means that the field is a semantic.
     */
    qIsSemantic?: boolean;
    /**
     * Format of the field.
     * This parameter is optional.
     */
    qNumFormat?: FieldAttributes;
    /**
     * This parameter is set to true if _qNumFormat_ is set to _U_ (unknown). The engine guesses the type of the field based on the field's definition.
     */
    qIsAutoFormat?: boolean;
    /**
     * Array of field names.
     */
    qGroupFieldDefs?: string[];
    /**
     * Minimum value.
     */
    qMin?: number;
    /**
     * Maximum value.
     */
    qMax?: number;
    /**
     * Is continuous axis used.
     */
    qContinuousAxes?: boolean;
    /**
     * Is a cyclic dimension used.
     */
    qIsCyclic?: boolean;
    /**
     * Is derived field is used as a dimension.
     */
    qDerivedField?: boolean;
    /**
     * Array of attribute expressions.
     */
    qAttrExprInfo?: NxAttrExprInfo[];
    /**
     * Array of attribute dimensions.
     */
    qAttrDimInfo?: NxAttrDimInfo[];
    /**
     * The message displayed if calculation condition is not fulfilled.
     */
    qCalcCondMsg?: string;
    /**
     * True if this is a calculated dimension.
     */
    qIsCalculated?: boolean;
    /**
     * If set to true, it means that the field always has one and only one selected value.
     */
    qIsOneAndOnlyOne?: boolean;
    /**
     * Dimension Cardinalities
     */
    qCardinalities?: NxCardinalities;
    /**
     * Refers to a dimension stored in the library.
     */
    qLibraryId?: string;
};
type NxDimensionType = "D" | "NX_DIMENSION_TYPE_DISCRETE" | "N" | "NX_DIMENSION_TYPE_NUMERIC" | "T" | "NX_DIMENSION_TYPE_TIME";
type NxDownloadInfo = {
    /**
     * URL to download the reduced app on.
     */
    qUrl?: string;
    /**
     * The filesize of the reduced app.
     */
    qFileSize?: number;
};
type NxDownloadOptions = {
    /**
     * Bookmark Id to apply before reducing the application.
     */
    qBookmarkId?: string;
    /**
     * Time in seconds for how long the download link is valid.
     */
    qExpires?: number;
    qServeOnce?: boolean;
};
type NxEngineVersion = {
    /**
     * Version number of the Qlik engine component.
     */
    qComponentVersion?: string;
};
type NxExportFileType = "CSV_C" | "EXPORT_CSV_C" | "CSV_T" | "EXPORT_CSV_T" | "OOXML" | "EXPORT_OOXML" | "PARQUET" | "EXPORT_PARQUET";
type NxExportState = "P" | "EXPORT_POSSIBLE" | "A" | "EXPORT_ALL";
type NxFeature = "binningData" | "FEATURE_BINNING_DATA" | "bookmarks" | "FEATURE_BOOKMARKS" | "calculatedFields" | "FEATURE_CALCULATED_FIELDS" | "continuousData" | "FEATURE_CONTINUOUS_DATA" | "invertedSelections" | "FEATURE_INVERTED_SELECTIONS" | "rangeSelections" | "FEATURE_RANGE_SELECTIONS" | "reducingData" | "FEATURE_REDUCING_DATA" | "search" | "FEATURE_SEARCH" | "selectionCount" | "FEATURE_SELECTION_COUNT" | "selectionInsights" | "FEATURE_SELECTION_INSIGHTS" | "tableMiniChart" | "FEATURE_TABLE_MINI_CHART" | "trendlines" | "FEATURE_TRENDLINES" | "calculatedDimensions" | "FEATURE_CALCULATED_DIMENSIONS" | "includeZeroValues" | "FEATURE_INCLUDE_ZERO_VALUES" | "includeNullValues" | "FEATURE_INCLUDE_NULL_VALUES" | "filterPanePaging" | "FEATURE_FILTER_PANE_PAGING" | "filterPaneCustomSorting" | "FEATURE_FILTER_PANE_CUSTOM_SORTING" | "showFrequency" | "FEATURE_SHOW_FREQUENCY" | "limitation" | "FEATURE_LIMITATION" | "totals" | "FEATURE_TOTALS";
/**
 * ### NxDerivedFieldsdata
 * <table>
 * <tbody>
 * <tr>
 * <th>Name</th>
 * <th>Description</th>
 * <th>Type</th>
 * </tr>
 * <tr>
 * <td>qDerivedDefinitionName</td>
 * <td>Name of the derived definition.</td>
 * <td>String</td>
 * </tr>
 * <tr>
 * <td>qFieldDefs</td>
 * <td>List of the derived fields.</td>
 * <td>Array of    NxDerivedField    </td>
 * </tr>
 * <tr>
 * <td>qGroupDefs</td>
 * <td>List of the derived groups.</td>
 * <td>Array of    NxDerivedGroup    </td>
 * </tr>
 * <tr>
 * <td>qTags</td>
 * <td>List of tags on the derived fields.</td>
 * <td>Array of    String     </td>
 * </tr>
 * </tbody>
 * </table>
 */
type NxFieldDescription = {
    /**
     * If set to true, it means that the field is a semantic.
     */
    qIsSemantic?: boolean;
    /**
     * If set to true, it means that the field is hidden.
     */
    qIsHidden?: boolean;
    /**
     * If set to true, it means that the field is a system field.
     */
    qIsSystem?: boolean;
    /**
     * If set to true a logical AND (instead of a logical OR) is used when making selections in a field.
     * The default value is false.
     */
    qAndMode?: boolean;
    /**
     * Name of the field
     */
    qName?: string;
    /**
     * Number of distinct field values
     */
    qCardinal?: number;
    /**
     * Gives information on a field. For example, it can return the type of the field.
     * Examples: key, text, ASCII
     */
    qTags?: string[];
    /**
     * If set to true, it means that the field is a field on the fly.
     */
    qIsDefinitionOnly?: boolean;
    /**
     * Lists the derived fields if any.
     */
    qDerivedFieldData?: NxDerivedFieldDescriptionList;
    /**
     * Is used for Direct Discovery.
     * If set to true, it means that the type of the field is detail.
     */
    qIsDetail?: boolean;
    /**
     * Is used for Direct Discovery.
     * If set to true, it means that the type of the field is measure.
     */
    qIsImplicit?: boolean;
    qReadableName?: string;
};
type NxFieldProperties = {
    /**
     * This parameter is set to true, if the field has one and only one selection (not 0 and not more than 1).
     * If this property is set to true, the field cannot be cleared anymore and no more selections can be performed in that field.
     * <div class=note>The property _OneAndOnlyOne_ can be set to true if one and only value has been selected in the field prior to setting the property. </div>
     */
    qOneAndOnlyOne?: boolean;
};
type NxFieldResourceId = {
    /**
     * Name of the field to get the resource id for.
     */
    qName?: string;
    /**
     * Field level resource Id per table that the field is part of
     */
    qResourceIds?: NxFieldTableResourceId[];
};
type NxFieldSelectionInfo = {
    /**
     * Name of the field.
     */
    qName?: string;
    /**
     * Selection mode.
     * ### Properties
     * One of:
     * * NORMAL for a selection in normal mode.
     * * AND for a selection in AND mode.
     * * NOT for a selection NOT in AND mode.
     * One of:
     * * NORMAL or SELECTION_MODE_NORMAL
     * * AND or SELECTION_MODE_AND
     * * NOT or SELECTION_MODE_NOT
     */
    qFieldSelectionMode?: NxFieldSelectionMode;
};
type NxFieldSelectionMode = "NORMAL" | "SELECTION_MODE_NORMAL" | "AND" | "SELECTION_MODE_AND" | "NOT" | "SELECTION_MODE_NOT";
type NxFieldTableResourceId = {
    /**
     * Name of the table that the field belongs to get the resource id for
     */
    qTable?: string;
    /**
     * Resource identifier for the field
     */
    qResourceId?: string;
};
type NxFrequencyMode = "N" | "NX_FREQUENCY_NONE" | "V" | "NX_FREQUENCY_VALUE" | "P" | "NX_FREQUENCY_PERCENT" | "R" | "NX_FREQUENCY_RELATIVE";
type NxGetBookmarkOptions = {
    /**
     * List of object types.
     */
    qTypes?: string[];
    /**
     * Set of data.
     */
    qData?: Record<string, string>;
    /**
     * Include the bookmark patches. Patches can be very large and may make the list result unmanageable.
     */
    qIncludePatches?: boolean;
};
type NxGetObjectOptions = {
    /**
     * List of object types.
     */
    qTypes?: string[];
    /**
     * Set to true to include session objects.
     * The default value is false.
     */
    qIncludeSessionObjects?: boolean;
    /**
     * Set of data.
     */
    qData?: Record<string, string>;
};
type NxGroupTail = {
    /**
     * Number of elements that are part of the previous tail.
     * This number depends on the paging, more particularly it depends on the values defined in _qTop_ and _qHeight_ .
     * Is not shown if the value is 0.
     * This parameter is optional.
     */
    qUp?: number;
    /**
     * Number of elements that are part of the next tail.
     * This number depends on the paging, more particularly it depends on the values defined in _qTop_ and _qHeight_
     * Is not shown if the value is 0.
     * This parameter is optional.
     */
    qDown?: number;
};
type NxGrpType = "N" | "GRP_NX_NONE" | "H" | "GRP_NX_HIEARCHY" | "C" | "GRP_NX_COLLECTION";
type NxHighlightRanges = {
    /**
     * Ranges of highlighted values.
     */
    qRanges?: CharRange[];
};
type NxHypercubeMode = "S" | "DATA_MODE_STRAIGHT" | "P" | "DATA_MODE_PIVOT" | "K" | "DATA_MODE_PIVOT_STACK" | "T" | "DATA_MODE_TREE" | "D" | "DATA_MODE_DYNAMIC";
type NxInfo = {
    /**
     * Identifier of the object.
     * If the chosen identifier is already in use, the engine automatically sets another one.
     * If an identifier is not set, the engine automatically sets one.
     * This parameter is optional.
     */
    qId?: string;
    /**
     * Type of the object.
     * This parameter is mandatory.
     */
    qType?: string;
};
type NxInlineDimensionDef = {
    /**
     * Used to define a cyclic group or drill-down group.
     * Default value is no grouping.
     * This parameter is optional.
     *
     * One of:
     * * N or GRP_NX_NONE
     * * H or GRP_NX_HIEARCHY
     * * C or GRP_NX_COLLECTION
     */
    qGrouping?: NxGrpType;
    /**
     * Array of field names.
     * When creating a grouped dimension, more than one field name is defined.
     * This parameter is optional.
     */
    qFieldDefs?: string[];
    /**
     * Array of field labels.
     * This parameter is optional.
     */
    qFieldLabels?: string[];
    /**
     * Defines the sorting criteria in the field.
     * Default is to sort by alphabetical order, ascending.
     * This parameter is optional.
     */
    qSortCriterias?: SortCriteria[];
    /**
     * Defines the format of the value.
     * This parameter is optional.
     */
    qNumberPresentations?: FieldAttributes[];
    /**
     * If set to true, it inverts the sort criteria in the field.
     */
    qReverseSort?: boolean;
    /**
     * Index of the active field in a cyclic dimension.
     * This parameter is optional. The default value is 0.
     * This parameter is used in case of cyclic dimensions ( _qGrouping_ is C).
     */
    qActiveField?: number;
    /**
     * Label expression.
     * This parameter is optional.
     */
    qLabelExpression?: string;
    /**
     * Alias of the dimension.
     */
    qAlias?: string;
};
type NxInlineMeasureDef = {
    /**
     * Name of the measure.
     * An empty string is returned as a default value.
     * This parameter is optional.
     */
    qLabel?: string;
    /**
     * Description of the measure.
     * An empty string is returned as a default value.
     * This parameter is optional.
     */
    qDescription?: string;
    /**
     * Name connected to the measure that is used for search purposes.
     * A measure can have several tags.
     * This parameter is optional.
     */
    qTags?: string[];
    /**
     * Default value is no grouping.
     * This parameter is optional.
     *
     * One of:
     * * N or GRP_NX_NONE
     * * H or GRP_NX_HIEARCHY
     * * C or GRP_NX_COLLECTION
     */
    qGrouping?: NxGrpType;
    /**
     * Definition of the expression in the measure.
     * Example: _Sum (OrderTotal)_
     * This parameter is mandatory.
     */
    qDef?: string;
    /**
     * Format of the field.
     * This parameter is optional.
     */
    qNumFormat?: FieldAttributes;
    /**
     * If set to true, percentage values are returned instead of absolute numbers.
     * Default value is false.
     * This parameter is optional.
     */
    qRelative?: boolean;
    /**
     * If set to true, the sum of rows total should be used rather than real expression total.
     * This parameter is optional and applies to straight tables.
     * Default value is false.
     * If using the Qlik Sense interface, it means that the total mode is set to **Expression Total** .
     */
    qBrutalSum?: boolean;
    /**
     * Flag indicating how the measure should be aggregated to create a grand total.
     * "None" - No total calculation.
     * "Expr" - Calculate total according to the measure expression.
     * ""     - Empty string is default and has same effect as "Expr".
     * This parameter is optional.
     */
    qAggrFunc?: string;
    /**
     * * 0 means no accumulation
     *                             * 1 means full accumulation (each y-value accumulates all previous y-values of the expression)
     *                             * ≥ 2 means accumulate as many steps as the _qAccumulate_ value
     * Default value is 0.
     * This parameter is optional.
     */
    qAccumulate?: number;
    /**
     * If set to true, it inverts the sort criteria in the field.
     */
    qReverseSort?: boolean;
    /**
     * Index of the active expression in a cyclic measure. The indexing starts from 0.
     * The default value is 0.
     * This parameter is optional.
     */
    qActiveExpression?: number;
    /**
     * Array of expressions. This parameter is used in case of cyclic measures ( _qGrouping_ is C). List of the expressions in the cyclic group.
     */
    qExpressions?: string[];
    /**
     * Label expression.
     * This parameter is optional.
     */
    qLabelExpression?: string;
};
type NxLTrendlineType = "AVERAGE" | "Average" | "LINEAR" | "Linear" | "POLYNOMIAL2" | "Polynomial2" | "POLYNOMIAL3" | "Polynomial3" | "POLYNOMIAL4" | "Polynomial4" | "EXPONENTIAL" | "Exponential" | "POWER" | "Power" | "LOG" | "Logarithmic";
type NxLayoutErrors = {
    /**
     * Error code.
     */
    qErrorCode?: number;
};
type NxLibraryDimension = {
    /**
     * Information about the grouping.
     *
     * One of:
     * * N or GRP_NX_NONE
     * * H or GRP_NX_HIEARCHY
     * * C or GRP_NX_COLLECTION
     */
    qGrouping?: NxGrpType;
    /**
     * Array of dimension names.
     */
    qFieldDefs?: string[];
    /**
     * Array of dimension labels.
     */
    qFieldLabels?: string[];
    qLabelExpression?: string;
    /**
     * Alias of the dimension.
     */
    qAlias?: string;
};
type NxLibraryDimensionDef = {
    /**
     * Information about the grouping.
     *
     * One of:
     * * N or GRP_NX_NONE
     * * H or GRP_NX_HIEARCHY
     * * C or GRP_NX_COLLECTION
     */
    qGrouping?: NxGrpType;
    /**
     * Array of dimension names.
     */
    qFieldDefs?: string[];
    /**
     * Array of dimension labels.
     */
    qFieldLabels?: string[];
    qLabelExpression?: string;
    /**
     * Alias of the dimension.
     */
    qAlias?: string;
};
/**
 * Information about the library measure. Is the layout for _NxLibraryMeasureDef_.
 */
type NxLibraryMeasure = {
    qLabel?: string;
    qDef?: string;
    /**
     *
     * One of:
     * * N or GRP_NX_NONE
     * * H or GRP_NX_HIEARCHY
     * * C or GRP_NX_COLLECTION
     */
    qGrouping?: NxGrpType;
    qExpressions?: string[];
    qActiveExpression?: number;
    qLabelExpression?: string;
    /**
     * Format of the field.
     * This parameter is optional.
     */
    qNumFormat?: FieldAttributes;
};
type NxLibraryMeasureDef = {
    /**
     * Label of the measure.
     */
    qLabel?: string;
    /**
     * Definition of the measure.
     */
    qDef?: string;
    /**
     * Used to define a cyclic group or drill-down group.
     * Default value is no grouping.
     * This parameter is optional.
     *
     * One of:
     * * N or GRP_NX_NONE
     * * H or GRP_NX_HIEARCHY
     * * C or GRP_NX_COLLECTION
     */
    qGrouping?: NxGrpType;
    /**
     * Array of expressions.
     */
    qExpressions?: string[];
    /**
     * Index to the active expression in a measure.
     */
    qActiveExpression?: number;
    /**
     * Optional expression used for dynamic label.
     */
    qLabelExpression?: string;
    /**
     * Format of the field.
     * This parameter is optional.
     */
    qNumFormat?: FieldAttributes;
};
type NxLinkedObjectInfo = {
    /**
     * Identifier of the root object.
     * If the linked object is a child, the root identifier is the identifier of the parent.
     * If the linked object is an app object, the root identifier is the same than the identifier of the linked object since the linked object is a root object.
     */
    qRootId?: string;
    /**
     * Information about the linked object.
     */
    qInfo?: NxInfo;
};
type NxListObjectExpression = {
    /**
     * Value of the expression.
     */
    qExpr?: string;
    /**
     * Gives information on the error.
     * This parameter is optional.
     */
    qError?: NxLayoutErrors;
};
type NxListObjectExpressionDef = {
    /**
     * Value of the expression.
     */
    qExpr?: string;
    /**
     * Refers to an expression stored in the library.
     */
    qLibraryId?: string;
};
type NxLocalizedErrorCode = "LOCERR_INTERNAL_ERROR" | "LOCERR_GENERIC_UNKNOWN" | "LOCERR_GENERIC_OK" | "LOCERR_GENERIC_NOT_SET" | "LOCERR_GENERIC_NOT_FOUND" | "LOCERR_GENERIC_ALREADY_EXISTS" | "LOCERR_GENERIC_INVALID_PATH" | "LOCERR_GENERIC_ACCESS_DENIED" | "LOCERR_GENERIC_OUT_OF_MEMORY" | "LOCERR_GENERIC_NOT_INITIALIZED" | "LOCERR_GENERIC_INVALID_PARAMETERS" | "LOCERR_GENERIC_EMPTY_PARAMETERS" | "LOCERR_GENERIC_INTERNAL_ERROR" | "LOCERR_GENERIC_CORRUPT_DATA" | "LOCERR_GENERIC_MEMORY_INCONSISTENCY" | "LOCERR_GENERIC_INVISIBLE_OWNER_ABORT" | "LOCERR_GENERIC_PROHIBIT_VALIDATE" | "LOCERR_GENERIC_ABORTED" | "LOCERR_GENERIC_CONNECTION_LOST" | "LOCERR_GENERIC_UNSUPPORTED_IN_PRODUCT_VERSION" | "LOCERR_GENERIC_REST_CONNECTION_FAILURE" | "LOCERR_GENERIC_MEMORY_LIMIT_REACHED" | "LOCERR_GENERIC_NOT_IMPLEMENTED" | "LOCERR_HTTP_400" | "LOCERR_HTTP_401" | "LOCERR_HTTP_402" | "LOCERR_HTTP_403" | "LOCERR_HTTP_404" | "LOCERR_HTTP_405" | "LOCERR_HTTP_406" | "LOCERR_HTTP_407" | "LOCERR_HTTP_408" | "LOCERR_HTTP_409" | "LOCERR_HTTP_410" | "LOCERR_HTTP_411" | "LOCERR_HTTP_412" | "LOCERR_HTTP_413" | "LOCERR_HTTP_414" | "LOCERR_HTTP_415" | "LOCERR_HTTP_416" | "LOCERR_HTTP_417" | "LOCERR_HTTP_422" | "LOCERR_HTTP_423" | "LOCERR_HTTP_429" | "LOCERR_HTTP_500" | "LOCERR_HTTP_501" | "LOCERR_HTTP_502" | "LOCERR_HTTP_503" | "LOCERR_HTTP_504" | "LOCERR_HTTP_505" | "LOCERR_HTTP_509" | "LOCERR_HTTP_COULD_NOT_RESOLVE_HOST" | "LOCERR_APP_ALREADY_EXISTS" | "LOCERR_APP_INVALID_NAME" | "LOCERR_APP_ALREADY_OPEN" | "LOCERR_APP_NOT_FOUND" | "LOCERR_APP_IMPORT_FAILED" | "LOCERR_APP_SAVE_FAILED" | "LOCERR_APP_CREATE_FAILED" | "LOCERR_APP_INVALID" | "LOCERR_APP_CONNECT_FAILED" | "LOCERR_APP_ALREADY_OPEN_IN_DIFFERENT_MODE" | "LOCERR_APP_MIGRATION_COULD_NOT_CONTACT_MIGRATION_SERVICE" | "LOCERR_APP_MIGRATION_COULD_NOT_START_MIGRATION" | "LOCERR_APP_MIGRATION_FAILURE" | "LOCERR_APP_SCRIPT_MISSING" | "LOCERR_APP_EXPORT_FAILED" | "LOCERR_APP_SIZE_EXCEEDED" | "LOCERR_APP_DIRECT_QUERY_WORKLOAD_NOT_SUPPORTED" | "LOCERR_APP_NOT_OPEN" | "LOCERR_APP_EVENT_SOURCE_TIMEOUT" | "LOCERR_CONNECTION_ALREADY_EXISTS" | "LOCERR_CONNECTION_NOT_FOUND" | "LOCERR_CONNECTION_FAILED_TO_LOAD" | "LOCERR_CONNECTION_FAILED_TO_IMPORT" | "LOCERR_CONNECTION_NAME_IS_INVALID" | "LOCERR_CONNECTION_MISSING_CREDENTIALS" | "LOCERR_CONNECTOR_NO_FILE_STREAMING_SUPPORT" | "LOCERR_CONNECTOR_FILESIZE_EXCEEDED_BUFFER_SIZE" | "LOCERR_FILE_ACCESS_DENIED" | "LOCERR_FILE_NAME_INVALID" | "LOCERR_FILE_CORRUPT" | "LOCERR_FILE_NOT_FOUND" | "LOCERR_FILE_FORMAT_UNSUPPORTED" | "LOCERR_FILE_OPENED_IN_UNSUPPORTED_MODE" | "LOCERR_FILE_TABLE_NOT_FOUND" | "LOCERR_USER_ACCESS_DENIED" | "LOCERR_USER_IMPERSONATION_FAILED" | "LOCERR_SERVER_OUT_OF_SESSION_AND_USER_CALS" | "LOCERR_SERVER_OUT_OF_SESSION_CALS" | "LOCERR_SERVER_OUT_OF_USAGE_CALS" | "LOCERR_SERVER_OUT_OF_CALS" | "LOCERR_SERVER_OUT_OF_NAMED_CALS" | "LOCERR_SERVER_OFF_DUTY" | "LOCERR_SERVER_BUSY" | "LOCERR_SERVER_LICENSE_EXPIRED" | "LOCERR_SERVER_AJAX_DISABLED" | "LOCERR_SERVER_NO_TOKEN" | "LOCERR_HC_INVALID_OBJECT" | "LOCERR_HC_RESULT_TOO_LARGE" | "LOCERR_HC_INVALID_OBJECT_STATE" | "LOCERR_HC_MODAL_OBJECT_ERROR" | "LOCERR_CALC_INVALID_DEF" | "LOCERR_CALC_NOT_IN_LIB" | "LOCERR_CALC_HEAP_ERROR" | "LOCERR_CALC_TOO_LARGE" | "LOCERR_CALC_TIMEOUT" | "LOCERR_CALC_EVAL_CONDITION_FAILED" | "LOCERR_CALC_MIXED_LINKED_AGGREGATION" | "LOCERR_CALC_MISSING_LINKED" | "LOCERR_CALC_INVALID_COL_SORT" | "LOCERR_CALC_PAGES_TOO_LARGE" | "LOCERR_CALC_SEMANTIC_FIELD_NOT_ALLOWED" | "LOCERR_CALC_VALIDATION_STATE_INVALID" | "LOCERR_CALC_PIVOT_DIMENSIONS_ALREADY_EXISTS" | "LOCERR_CALC_MISSING_LINKED_FIELD" | "LOCERR_CALC_NOT_CALCULATED" | "LOCERR_LAYOUT_EXTENDS_INVALID_ID" | "LOCERR_LAYOUT_LINKED_OBJECT_NOT_FOUND" | "LOCERR_LAYOUT_LINKED_OBJECT_INVALID" | "LOCERR_PERSISTENCE_WRITE_FAILED" | "LOCERR_PERSISTENCE_READ_FAILED" | "LOCERR_PERSISTENCE_DELETE_FAILED" | "LOCERR_PERSISTENCE_NOT_FOUND" | "LOCERR_PERSISTENCE_UNSUPPORTED_VERSION" | "LOCERR_PERSISTENCE_MIGRATION_FAILED_READ_ONLY" | "LOCERR_PERSISTENCE_MIGRATION_CANCELLED" | "LOCERR_PERSISTENCE_MIGRATION_BACKUP_FAILED" | "LOCERR_PERSISTENCE_DISK_FULL" | "LOCERR_PERSISTENCE_NOT_SUPPORTED_FOR_SESSION_APP" | "LOCERR_PERSISTENCE_MOVE_FAILED" | "LOCERR_PERSISTENCE_OBJECT_LOCKED" | "LOCERR_PERSISTENCE_ENCRYPTION_KEY_MIGRATION_ONGOING" | "LOCERR_PERSISTENCE_SYNC_SET_CHUNK_INVALID_PARAMETERS" | "LOCERR_PERSISTENCE_SYNC_GET_CHUNK_INVALID_PARAMETERS" | "LOCERR_SCRIPT_DATASOURCE_ACCESS_DENIED" | "LOCERR_RELOAD_IN_PROGRESS" | "LOCERR_RELOAD_TABLE_X_NOT_FOUND" | "LOCERR_RELOAD_UNKNOWN_STATEMENT" | "LOCERR_RELOAD_EXPECTED_SOMETHING_FOUND_UNKNOWN" | "LOCERR_RELOAD_EXPECTED_NOTHING_FOUND_UNKNOWN" | "LOCERR_RELOAD_EXPECTED_ONE_OF_1_TOKENS_FOUND_UNKNOWN" | "LOCERR_RELOAD_EXPECTED_ONE_OF_2_TOKENS_FOUND_UNKNOWN" | "LOCERR_RELOAD_EXPECTED_ONE_OF_3_TOKENS_FOUND_UNKNOWN" | "LOCERR_RELOAD_EXPECTED_ONE_OF_4_TOKENS_FOUND_UNKNOWN" | "LOCERR_RELOAD_EXPECTED_ONE_OF_5_TOKENS_FOUND_UNKNOWN" | "LOCERR_RELOAD_EXPECTED_ONE_OF_6_TOKENS_FOUND_UNKNOWN" | "LOCERR_RELOAD_EXPECTED_ONE_OF_7_TOKENS_FOUND_UNKNOWN" | "LOCERR_RELOAD_EXPECTED_ONE_OF_8_OR_MORE_TOKENS_FOUND_UNKNOWN" | "LOCERR_RELOAD_FIELD_X_NOT_FOUND" | "LOCERR_RELOAD_MAPPING_TABLE_X_NOT_FOUND" | "LOCERR_RELOAD_LIB_CONNECTION_X_NOT_FOUND" | "LOCERR_RELOAD_NAME_ALREADY_TAKEN" | "LOCERR_RELOAD_WRONG_FILE_FORMAT_DIF" | "LOCERR_RELOAD_WRONG_FILE_FORMAT_BIFF" | "LOCERR_RELOAD_WRONG_FILE_FORMAT_ENCRYPTED" | "LOCERR_RELOAD_OPEN_FILE_ERROR" | "LOCERR_RELOAD_AUTO_GENERATE_COUNT" | "LOCERR_RELOAD_PE_ILLEGAL_PREFIX_COMB" | "LOCERR_RELOAD_MATCHING_CONTROL_STATEMENT_ERROR" | "LOCERR_RELOAD_MATCHING_LIBPATH_X_NOT_FOUND" | "LOCERR_RELOAD_MATCHING_LIBPATH_X_INVALID" | "LOCERR_RELOAD_MATCHING_LIBPATH_X_OUTSIDE" | "LOCERR_RELOAD_NO_QUALIFIED_PATH_FOR_FILE" | "LOCERR_RELOAD_MODE_STATEMENT_ONLY_FOR_LIB_PATHS" | "LOCERR_RELOAD_INCONSISTENT_USE_OF_SEMANTIC_FIELDS" | "LOCERR_RELOAD_NO_OPEN_DATABASE" | "LOCERR_RELOAD_AGGREGATION_REQUIRED_BY_GROUP_BY" | "LOCERR_RELOAD_CONNECT_MUST_USE_LIB_PREFIX_IN_THIS_MODE" | "LOCERR_RELOAD_ODBC_CONNECT_FAILED" | "LOCERR_RELOAD_OLEDB_CONNECT_FAILED" | "LOCERR_RELOAD_CUSTOM_CONNECT_FAILED" | "LOCERR_RELOAD_ODBC_READ_FAILED" | "LOCERR_RELOAD_OLEDB_READ_FAILED" | "LOCERR_RELOAD_CUSTOM_READ_FAILED" | "LOCERR_RELOAD_BINARY_LOAD_PROHIBITED" | "LOCERR_RELOAD_CONNECTOR_START_FAILED" | "LOCERR_RELOAD_CONNECTOR_NOT_RESPONDING" | "LOCERR_RELOAD_CONNECTOR_REPLY_ERROR" | "LOCERR_RELOAD_CONNECTOR_CONNECT_ERROR" | "LOCERR_RELOAD_CONNECTOR_NOT_FOUND_ERROR" | "LOCERR_RELOAD_INPUT_FIELD_WITH_DUPLICATE_KEYS" | "LOCERR_RELOAD_CONCATENATE_LOAD_NO_PREVIOUS_TABLE" | "LOCERR_RELOAD_WRONG_FILE_FORMAT_QVD" | "LOCERR_RELOAD_ACTION_BLOCKED_ENTITLEMENT" | "LOCERR_PERSONAL_NEW_VERSION_AVAILABLE" | "LOCERR_PERSONAL_VERSION_EXPIRED" | "LOCERR_PERSONAL_SECTION_ACCESS_DETECTED" | "LOCERR_PERSONAL_APP_DELETION_FAILED" | "LOCERR_USER_AUTHENTICATION_FAILURE" | "LOCERR_EXPORT_OUT_OF_MEMORY" | "LOCERR_EXPORT_NO_DATA" | "LOCERR_SYNC_INVALID_OFFSET" | "LOCERR_SEARCH_TIMEOUT" | "LOCERR_DIRECT_DISCOVERY_LINKED_EXPRESSION_FAIL" | "LOCERR_DIRECT_DISCOVERY_ROWCOUNT_OVERFLOW" | "LOCERR_DIRECT_DISCOVERY_EMPTY_RESULT" | "LOCERR_DIRECT_DISCOVERY_DB_CONNECTION_FAILED" | "LOCERR_DIRECT_DISCOVERY_MEASURE_NOT_ALLOWED" | "LOCERR_DIRECT_DISCOVERY_DETAIL_NOT_ALLOWED" | "LOCERR_DIRECT_DISCOVERY_NOT_SYNTH_CIRCULAR_ALLOWED" | "LOCERR_DIRECT_DISCOVERY_ONLY_ONE_DD_TABLE_ALLOWED" | "LOCERR_DIRECT_DISCOVERY_DB_AUTHORIZATION_FAILED" | "LOCERR_SMART_LOAD_TABLE_NOT_FOUND" | "LOCERR_SMART_LOAD_TABLE_DUPLICATED" | "LOCERR_VARIABLE_NO_NAME" | "LOCERR_VARIABLE_DUPLICATE_NAME" | "LOCERR_VARIABLE_INCONSISTENCY" | "LOCERR_MEDIA_LIBRARY_LIST_FAILED" | "LOCERR_MEDIA_LIBRARY_CONTENT_FAILED" | "LOCERR_MEDIA_BUNDLING_FAILED" | "LOCERR_MEDIA_UNBUNDLING_FAILED" | "LOCERR_MEDIA_LIBRARY_NOT_FOUND" | "LOCERR_FEATURE_DISABLED" | "LOCERR_JSON_RPC_INVALID_REQUEST" | "LOCERR_JSON_RPC_METHOD_NOT_FOUND" | "LOCERR_JSON_RPC_INVALID_PARAMETERS" | "LOCERR_JSON_RPC_INTERNAL_ERROR" | "LOCERR_JSON_RPC_PARSE_ERROR" | "LOCERR_MQ_SOCKET_CONNECT_FAILURE" | "LOCERR_MQ_SOCKET_OPEN_FAILURE" | "LOCERR_MQ_PROTOCOL_NO_RESPONE" | "LOCERR_MQ_PROTOCOL_LIBRARY_EXCEPTION" | "LOCERR_MQ_PROTOCOL_CONNECTION_CLOSED" | "LOCERR_MQ_PROTOCOL_CHANNEL_CLOSED" | "LOCERR_MQ_PROTOCOL_UNKNOWN_ERROR" | "LOCERR_MQ_PROTOCOL_INVALID_STATUS" | "LOCERR_EXTENGINE_GRPC_STATUS_OK" | "LOCERR_EXTENGINE_GRPC_STATUS_CANCELLED" | "LOCERR_EXTENGINE_GRPC_STATUS_UNKNOWN" | "LOCERR_EXTENGINE_GRPC_STATUS_INVALID_ARGUMENT" | "LOCERR_EXTENGINE_GRPC_STATUS_DEADLINE_EXCEEDED" | "LOCERR_EXTENGINE_GRPC_STATUS_NOT_FOUND" | "LOCERR_EXTENGINE_GRPC_STATUS_ALREADY_EXISTS" | "LOCERR_EXTENGINE_GRPC_STATUS_PERMISSION_DENIED" | "LOCERR_EXTENGINE_GRPC_STATUS_RESOURCE_EXHAUSTED" | "LOCERR_EXTENGINE_GRPC_STATUS_FAILED_PRECONDITION" | "LOCERR_EXTENGINE_GRPC_STATUS_ABORTED" | "LOCERR_EXTENGINE_GRPC_STATUS_OUT_OF_RANGE" | "LOCERR_EXTENGINE_GRPC_STATUS_UNIMPLEMENTED" | "LOCERR_EXTENGINE_GRPC_STATUS_INTERNAL" | "LOCERR_EXTENGINE_GRPC_STATUS_UNAVAILABLE" | "LOCERR_EXTENGINE_GRPC_STATUS_DATA_LOSS" | "LOCERR_EXTENGINE_GRPC_STATUS_UNAUTHENTICATED" | "LOCERR_LXW_INVALID_OBJ" | "LOCERR_LXW_INVALID_FILE" | "LOCERR_LXW_INVALID_SHEET" | "LOCERR_LXW_INVALID_EXPORT_RANGE" | "LOCERR_LXW_ERROR" | "LOCERR_LXW_ERROR_MEMORY_MALLOC_FAILED" | "LOCERR_LXW_ERROR_CREATING_XLSX_FILE" | "LOCERR_LXW_ERROR_CREATING_TMPFILE" | "LOCERR_LXW_ERROR_ZIP_FILE_OPERATION" | "LOCERR_LXW_ERROR_ZIP_FILE_ADD" | "LOCERR_LXW_ERROR_ZIP_CLOSE" | "LOCERR_LXW_ERROR_NULL_PARAMETER_IGNORED" | "LOCERR_LXW_ERROR_MAX_STRING_LENGTH_EXCEEDED" | "LOCERR_LXW_ERROR_255_STRING_LENGTH_EXCEEDED" | "LOCERR_LXW_ERROR_SHARED_STRING_INDEX_NOT_FOUND" | "LOCERR_LXW_ERROR_WORKSHEET_INDEX_OUT_OF_RANGE" | "LOCERR_LXW_ERROR_WORKSHEET_MAX_NUMBER_URLS_EXCEEDED" | "LOCERR_BDI_STATUS_OK" | "LOCERR_BDI_GENERIC_ERROR_NOT_TRANSLATED" | "LOCERR_TRENDLINE_INVALID_DEF" | "LOCERR_TRENDLINE_INVALID_MATH_ERROR" | "LOCERR_CURL_UNSUPPORTED_PROTOCOL" | "LOCERR_CURL_COULDNT_RESOLVE_PROXY" | "LOCERR_CURL_COULDNT_CONNECT" | "LOCERR_CURL_REMOTE_ACCESS_DENIED" | "LOCERR_CURL_FTP_ACCEPT_FAILED" | "LOCERR_CURL_FTP_ACCEPT_TIMEOUT" | "LOCERR_CURL_FTP_CANT_GET_HOST" | "LOCERR_CURL_PARTIAL_FILE" | "LOCERR_CURL_QUOTE_ERROR" | "LOCERR_CURL_WRITE_ERROR" | "LOCERR_CURL_UPLOAD_FAILED" | "LOCERR_CURL_OUT_OF_MEMORY" | "LOCERR_CURL_OPERATION_TIMEDOUT" | "LOCERR_CURL_FTP_COULDNT_USE_REST" | "LOCERR_CURL_HTTP_POST_ERROR" | "LOCERR_CURL_SSL_CONNECT_ERROR" | "LOCERR_CURL_FILE_COULDNT_READ_FILE" | "LOCERR_CURL_LDAP_CANNOT_BIND" | "LOCERR_CURL_LDAP_SEARCH_FAILED" | "LOCERR_CURL_TOO_MANY_REDIRECTS" | "LOCERR_CURL_PEER_FAILED_VERIFICATION" | "LOCERR_CURL_GOT_NOTHING" | "LOCERR_CURL_SSL_ENGINE_NOTFOUND" | "LOCERR_CURL_SSL_ENGINE_SETFAILED" | "LOCERR_CURL_SSL_CERTPROBLEM" | "LOCERR_CURL_SSL_CIPHER" | "LOCERR_CURL_SSL_CACERT" | "LOCERR_CURL_BAD_CONTENT_ENCODING" | "LOCERR_CURL_LDAP_INVALID_URL" | "LOCERR_CURL_USE_SSL_FAILED" | "LOCERR_CURL_SSL_ENGINE_INITFAILED" | "LOCERR_CURL_LOGIN_DENIED" | "LOCERR_CURL_TFTP_NOTFOUND" | "LOCERR_CURL_TFTP_ILLEGAL" | "LOCERR_CURL_SSH" | "LOCERR_SETEXPRESSION_TOO_LARGE" | "LOCERR_RELOAD_MERGE_LOAD_ERROR" | "LOCERR_WIN_FTP_DROPPED" | "LOCERR_WIN_FTP_NO_PASSIVE_MODE" | "LOCERR_WIN_HTTP_DOWNLEVEL_SERVER" | "LOCERR_WIN_HTTP_INVALID_SERVER_RESPONSE" | "LOCERR_WIN_HTTP_REDIRECT_NEEDS_CONFIRMATION" | "LOCERR_WIN_INTERNET_FORCE_RETRY" | "LOCERR_WIN_INTERNET_CANNOT_CONNECT" | "LOCERR_WIN_INTERNET_CONNECTION_ABORTED" | "LOCERR_WIN_INTERNET_CONNECTION_RESET" | "LOCERR_WIN_INTERNET_DISCONNECTED" | "LOCERR_WIN_INTERNET_INCORRECT_FORMAT" | "LOCERR_WIN_INTERNET_INVALID_CA" | "LOCERR_WIN_INTERNET_INVALID_OPERATION" | "LOCERR_WIN_INTERNET_INVALID_URL" | "LOCERR_WIN_INTERNET_ITEM_NOT_FOUND" | "LOCERR_WIN_INTERNET_LOGIN_FAILURE" | "LOCERR_WIN_INTERNET_NAME_NOT_RESOLVED" | "LOCERR_WIN_INTERNET_NEED_UI" | "LOCERR_WIN_INTERNET_SEC_CERT_CN_INVALID" | "LOCERR_WIN_INTERNET_SEC_CERT_DATE_INVALID" | "LOCERR_WIN_INTERNET_SEC_CERT_ERRORS" | "LOCERR_WIN_INTERNET_SEC_INVALID_CERT" | "LOCERR_WIN_INTERNET_SERVER_UNREACHABLE";
type NxLocalizedWarningCode = "LOCWARN_PERSONAL_RELOAD_REQUIRED" | "LOCWARN_PERSONAL_VERSION_EXPIRES_SOON" | "LOCWARN_EXPORT_DATA_TRUNCATED" | "LOCWARN_COULD_NOT_OPEN_ALL_OBJECTS" | "LOCWARN_SEARCH_INVALID_SEARCHFIELD_DETECTED";
type NxMatchingFieldInfo = {
    /**
     * Name of the field.
     */
    qName?: string;
    /**
     * List of tags.
     */
    qTags?: string[];
};
type NxMatchingFieldMode = "MATCHINGFIELDMODE_MATCH_ALL" | "MATCHINGFIELDMODE_MATCH_ONE";
/**
 * <div class=note>Either **qDef** or **qLibraryId** must be set, but not both. If both are set, the library measure's qDef and qLabel will be used. </div> <div class=note>If the measure is set in the hypercube and not in the library, this measure cannot be shared with other objects.</div> <div class=note>A measure that is set in the library can be used by many objects.</div> <div class=note>
 * expressions are complementary expressions associated to a measure. For example, you can decide to change the background color of a visualization depending on the values of the measure.
 * Attribute expressions do not affect the layout of an object. The sorting order is unchanged.
 * </div>
 */
type NxMeasure = {
    /**
     * Refers to a measure stored in the library.
     */
    qLibraryId?: string;
    /**
     * Refers to a measure stored in the hypercube.
     */
    qDef?: NxInlineMeasureDef;
    /**
     * Defines the sort criteria.
     * The default value is sort by ascending alphabetic order.
     * This property is optional.
     */
    qSortBy?: SortCriteria;
    /**
     * List of attribute expressions.
     */
    qAttributeExpressions?: NxAttrExprDef[];
    /**
     * List of attribute dimensions.
     */
    qAttributeDimensions?: NxAttrDimDef[];
    /**
     * Specifies a calculation condition, which must be fulfilled for the measure to be calculated.
     * If the calculation condition is not met, the measure is excluded from the calculation.
     * By default, there is no calculation condition.
     * This property is optional.
     */
    qCalcCond?: ValueExpr;
    /**
     * Specifies a calculation condition object.
     * If CalcCondition.Cond is not fulfilled, the measure is excluded from the calculation and CalcCondition.Msg is evaluated.
     * By default, there is no calculation condition.
     * This property is optional.
     */
    qCalcCondition?: NxCalcCond;
    /**
     * Specifies trendlines for this measure.
     */
    qTrendLines?: NxTrendlineDef[];
    qMiniChartDef?: NxMiniChartDef;
};
/**
 * Layout for _NxInlineMeasureDef_.
 */
type NxMeasureInfo = {
    /**
     * Corresponds to the label of the measure.
     * If the label is not defined then the measure name is used.
     */
    qFallbackTitle?: string;
    /**
     * Length of the longest value in the field.
     */
    qApprMaxGlyphCount?: number;
    /**
     * Number of distinct field values.
     */
    qCardinal?: number;
    /**
     * Sort indicator.
     * The default value is no sorting.
     * This parameter is optional.
     *
     * One of:
     * * N or NX_SORT_INDICATE_NONE
     * * A or NX_SORT_INDICATE_ASC
     * * D or NX_SORT_INDICATE_DESC
     */
    qSortIndicator?: NxSortIndicatorType;
    /**
     * Format of the field.
     * This parameter is optional.
     */
    qNumFormat?: FieldAttributes;
    /**
     * Lowest value in the range.
     */
    qMin?: number;
    /**
     * Highest value in the range.
     */
    qMax?: number;
    /**
     * This parameter is optional.
     * Gives information on the error.
     */
    qError?: NxValidationError;
    /**
     * If set to true, it inverts the sort criteria in the field.
     */
    qReverseSort?: boolean;
    /**
     * This parameter is set to true if _qNumFormat_ is set to _U_ (unknown). The engine guesses the type of the field based on the field's expression.
     */
    qIsAutoFormat?: boolean;
    /**
     * List of attribute expressions.
     */
    qAttrExprInfo?: NxAttrExprInfo[];
    /**
     * List of attribute dimensions.
     */
    qAttrDimInfo?: NxAttrDimInfo[];
    /**
     * The message displayed if calculation condition is not fulfilled.
     */
    qCalcCondMsg?: string;
    /**
     * Refers to a dimension stored in the library.
     */
    qLibraryId?: string;
    /**
     * Calculated trendlines
     */
    qTrendLines?: NxTrendline[];
    qMiniChart?: NxMiniChart;
};
/**
 * Layout for _NxMetaDef_.
 */
type NxMeta = {
    /**
     * Name.
     * This property is optional.
     */
    qName?: string;
};
/**
 * Used to collect meta data.
 *
 * ### Properties
 * Semantic type with an empty structure.
 */
type NxMetaDef = object;
type NxMiniChart = {
    qYMin?: number;
    qYMax?: number;
    qXMin?: number;
    qXMax?: number;
    /**
     * List of attribute expressions.
     */
    qAttrExprInfo?: NxAttrExprInfo[];
    /**
     * This parameter is optional and is displayed in case of error.
     */
    qError?: NxValidationError;
};
type NxMiniChartCell = {
    /**
     * Some text.
     */
    qText?: string;
    /**
     * A value.
     * This parameter is optional.
     */
    qNum?: number;
    /**
     * Rank number of the value, starting from 0.
     * If the element number is a negative number, it means that the returned value is not an element number.
     * You can get the following negative values:
     * * -1: the cell is a _Total_ cell. It shows a total.
     * * -2: the cell is a _Null_ cell.
     * * -3: the cell belongs to the group _Others_ .
     * * -4: the cell is empty. Applies to pivot tables.
     */
    qElemNumber?: number;
    /**
     * Attribute expressions values.
     */
    qAttrExps?: NxAttributeExpressionValues;
};
type NxMiniChartData = {
    /**
     * Array of data.
     */
    qMatrix?: NxMiniChartRows[];
    qMin?: number;
    qMax?: number;
    /**
     * This parameter is optional and is displayed in case of error.
     */
    qError?: NxValidationError;
};
type NxMiniChartDef = {
    /**
     * Expression or field name.
     */
    qDef?: string;
    /**
     * LibraryId for dimension.
     */
    qLibraryId?: string;
    /**
     * Sorting.
     */
    qSortBy?: SortCriteria;
    qOtherTotalSpec?: OtherTotalSpecProp;
    qMaxNumberPoints?: number;
    /**
     * List of attribute expressions.
     */
    qAttributeExpressions?: NxAttrExprDef[];
    /**
     * If set to true, no null values are returned.
     */
    qNullSuppression?: boolean;
};
type NxMiniChartRows = NxMiniChartCell[];
type NxMultiRangeSelectInfo = {
    qRanges?: NxRangeSelectInfo[];
    qColumnsToSelect?: number[];
};
type NxPage = {
    /**
     * Position from the left.
     * Corresponds to the first column.
     */
    qLeft?: number;
    /**
     * Position from the top.
     * Corresponds to the first row.
     */
    qTop?: number;
    /**
     * Number of columns in the page. The indexing of the columns may vary depending on whether the cells are expanded or not (parameter _qAlwaysFullyExpanded_ in _HyperCubeDef_ ).
     */
    qWidth?: number;
    /**
     * Number of rows or elements in the page. The indexing of the rows may vary depending on whether the cells are expanded or not (parameter _qAlwaysFullyExpanded_ in _HyperCubeDef_ ).
     */
    qHeight?: number;
};
type NxPageTreeLevel = {
    /**
     * The first dimension that is to be part of the tree, counted from the left. For example, if qLeft is equal to 1, omit nodes from the first dimension in the current sort order.
     */
    qLeft?: number;
    /**
     * Number of dimensions to include in the tree.
     */
    qDepth?: number;
};
/**
 * Defines an area of the tree to be fetched.
 *
 * Stability: *stable*
 */
type NxPageTreeNode = {
    /**
     * The area of the tree to be fetched. If no area is defined on a dimension, all existing nodes are included.
     */
    qArea?: Rect;
    /**
     * When set to true, generated nodes (based on current selection) will be inserted into the returned tree even when there is no actual value. For example, suppose you are looking for hybrid car sales at all car dealerships. Normally, only dealerships where hybrid cars are sold would be part of the returned tree but with qAllValues set to true, all available dealerships will be included regardless if they sold any hybrid cars or not.
     */
    qAllValues?: boolean;
};
type NxPatch = {
    /**
     * Operation to perform.
     *
     * One of:
     * * add or Add
     * * remove or Remove
     * * replace or Replace
     */
    qOp?: NxPatchOperationType;
    /**
     * Path to the property to add, remove or replace.
     */
    qPath?: string;
    /**
     * This parameter is not used in a remove operation.
     * Corresponds to the value of the property to add or to the new value of the property to update.
     * Examples:
     * "false", "2", "\"New title\""
     */
    qValue?: string;
};
type NxPatchOperationType = "add" | "Add" | "remove" | "Remove" | "replace" | "Replace";
type NxPatches = {
    /**
     * Identifier and type of the object.
     */
    qInfo?: NxInfo;
    /**
     * Array with patches.
     */
    qPatches?: NxPatch[];
    /**
     * Array with child objects and their patches.
     */
    qChildren?: NxPatches[];
};
type NxPivotDimensionCell = {
    /**
     * Some text.
     */
    qText?: string;
    /**
     * Rank number of the value.
     * If set to -1, it means that the value is not an element number.
     */
    qElemNo?: number;
    /**
     * Value of the cell.
     * Is set to _NaN_ , if the value is not a number.
     */
    qValue?: number;
    /**
     * If set to true, it means that the cell can be expanded.
     * This parameter is not returned if it is set to false.
     */
    qCanExpand?: boolean;
    /**
     * If set to true, it means that the cell can be collapsed.
     * This parameter is not returned if it is set to false.
     */
    qCanCollapse?: boolean;
    /**
     * Type of the cell.
     *
     * One of:
     * * V or NX_DIM_CELL_VALUE
     * * E or NX_DIM_CELL_EMPTY
     * * N or NX_DIM_CELL_NORMAL
     * * T or NX_DIM_CELL_TOTAL
     * * O or NX_DIM_CELL_OTHER
     * * A or NX_DIM_CELL_AGGR
     * * P or NX_DIM_CELL_PSEUDO
     * * R or NX_DIM_CELL_ROOT
     * * U or NX_DIM_CELL_NULL
     * * G or NX_DIM_CELL_GENERATED
     */
    qType?: NxDimCellType;
    /**
     * Number of elements that are part of the previous tail.
     * This number depends on the paging, more particularly it depends on the values defined in _qTop_ and _qHeight_ .
     */
    qUp?: number;
    /**
     * Number of elements that are part of the next tail.
     * This number depends on the paging, more particularly it depends on the values defined in _qTop_ and _qHeight_ .
     */
    qDown?: number;
    /**
     * Information about sub nodes (or sub cells).
     * The array is empty _[ ]_ when there is no sub nodes.
     */
    qSubNodes?: NxPivotDimensionCell[];
    /**
     * Information about attribute expressions.
     * The array is empty _[ ]_ when there is no attribute expressions.
     */
    qAttrExps?: NxAttributeExpressionValues;
    /**
     * Information about attribute dimensions.
     */
    qAttrDims?: NxAttributeDimValues;
};
type NxPivotPage = {
    /**
     * Information about the left dimension values of a pivot table.
     */
    qLeft?: NxPivotDimensionCell[];
    /**
     * Information about the top dimension values of a pivot table. If there is no top dimension in the pivot table, information about the measures are given.
     */
    qTop?: NxPivotDimensionCell[];
    /**
     * Array of data.
     */
    qData?: ArrayOfNxValuePoint[];
    /**
     * Size and offset of the data in the matrix.
     */
    qArea?: Rect;
};
type NxPivotValuePoint = {
    /**
     * Label of the cell.
     * This parameter is optional.
     */
    qLabel?: string;
    /**
     * Some text related to the cell.
     */
    qText?: string;
    /**
     * Value of the cell.
     */
    qNum?: number;
    /**
     * Type of the cell.
     *
     * One of:
     * * V or NX_DIM_CELL_VALUE
     * * E or NX_DIM_CELL_EMPTY
     * * N or NX_DIM_CELL_NORMAL
     * * T or NX_DIM_CELL_TOTAL
     * * O or NX_DIM_CELL_OTHER
     * * A or NX_DIM_CELL_AGGR
     * * P or NX_DIM_CELL_PSEUDO
     * * R or NX_DIM_CELL_ROOT
     * * U or NX_DIM_CELL_NULL
     * * G or NX_DIM_CELL_GENERATED
     */
    qType?: NxDimCellType;
    /**
     * Attribute expressions values.
     */
    qAttrExps?: NxAttributeExpressionValues;
    qAttrDims?: NxAttributeDimValues;
};
type NxRange = {
    /**
     * Position in the expression of the first character of the field name.
     */
    qFrom?: number;
    /**
     * Number of characters in the field name.
     */
    qCount?: number;
};
type NxRangeSelectInfo = {
    /**
     * Range of values.
     */
    qRange?: QRange;
    /**
     * Number of the measure to select.
     * Numbering starts from 0.
     */
    qMeasureIx?: number;
};
type NxSelectionCell = {
    /**
     * Type of cells to select.
     *
     * One of:
     * * D or NX_CELL_DATA
     * * T or NX_CELL_TOP
     * * L or NX_CELL_LEFT
     */
    qType?: NxSelectionCellType;
    /**
     * Column index to select.
     * Indexing starts from 0.
     * If the cell's type is:
     * * D, the index is based on the data matrix.
     * * T, the index is based on the data matrix.
     * * L, the index is based on the left dimensions indexes.
     */
    qCol?: number;
    /**
     * Row index to select.
     * Indexing starts from 0.
     * If the cell's type is:
     * * D, the index is based on the data matrix.
     * * T, the index is based on the top dimensions indexes.
     * * L, the index is based on the data matrix.
     */
    qRow?: number;
};
type NxSelectionCellType = "D" | "NX_CELL_DATA" | "T" | "NX_CELL_TOP" | "L" | "NX_CELL_LEFT";
type NxSelectionInfo = {
    /**
     * Is set to true if the visualization is in selection mode.
     * For more information about the selection mode, see _BeginSelections Method_.
     */
    qInSelections?: boolean;
    /**
     * Is set to true if the visualization is in selection mode and if some selections have been made while in selection mode.
     * For more information about the selection mode, see _BeginSelections Method_.
     */
    qMadeSelections?: boolean;
};
type NxSimpleDimValue = {
    /**
     * Text related to the attribute expression value.
     * This property is optional. No text is returned if the attribute expression value is a numeric.
     */
    qText?: string;
    /**
     * Element number.
     */
    qElemNo?: number;
};
type NxSimpleValue = {
    /**
     * Text related to the attribute expression value.
     */
    qText?: string;
    /**
     * Numeric value of the attribute expression.
     * Set to NaN (Not a Number) if the attribute expression value is not numeric.
     */
    qNum?: number;
};
type NxSortIndicatorType = "N" | "NX_SORT_INDICATE_NONE" | "A" | "NX_SORT_INDICATE_ASC" | "D" | "NX_SORT_INDICATE_DESC";
type NxStackPage = {
    /**
     * Array of data.
     */
    qData?: NxStackedPivotCell[];
    /**
     * Size and offset of the data in the matrix.
     */
    qArea?: Rect;
};
type NxStackedPivotCell = {
    /**
     * Some text.
     */
    qText?: string;
    /**
     * Rank number of the value.
     * If set to -1, it means that the value is not an element number.
     */
    qElemNo?: number;
    /**
     * Value of the cell.
     * Is set to _NaN_ , if the value is not a number.
     */
    qValue?: number;
    /**
     * If set to true, it means that the cell can be expanded.
     * This parameter is not returned if it is set to false.
     */
    qCanExpand?: boolean;
    /**
     * If set to true, it means that the cell can be collapsed.
     * This parameter is not returned if it is set to false.
     */
    qCanCollapse?: boolean;
    /**
     * Type of the cell.
     *
     * One of:
     * * V or NX_DIM_CELL_VALUE
     * * E or NX_DIM_CELL_EMPTY
     * * N or NX_DIM_CELL_NORMAL
     * * T or NX_DIM_CELL_TOTAL
     * * O or NX_DIM_CELL_OTHER
     * * A or NX_DIM_CELL_AGGR
     * * P or NX_DIM_CELL_PSEUDO
     * * R or NX_DIM_CELL_ROOT
     * * U or NX_DIM_CELL_NULL
     * * G or NX_DIM_CELL_GENERATED
     */
    qType?: NxDimCellType;
    /**
     * Total of the positive values in the current group of cells.
     */
    qMaxPos?: number;
    /**
     * Total of the negative values in the current group of cells.
     */
    qMinNeg?: number;
    /**
     * Number of elements that are part of the previous tail.
     */
    qUp?: number;
    /**
     * Number of elements that are part of the next tail.
     */
    qDown?: number;
    /**
     * Row index in the data matrix.
     * The indexing starts from 0.
     */
    qRow?: number;
    /**
     * Information about sub nodes (or sub cells).
     * The array is empty _[ ]_ when there are no sub nodes.
     */
    qSubNodes?: NxStackedPivotCell[];
    /**
     * Attribute expressions values.
     */
    qAttrExps?: NxAttributeExpressionValues;
    /**
     * Attribute dimensions values.
     */
    qAttrDims?: NxAttributeDimValues;
};
type NxStateCounts = {
    /**
     * Number of values in locked state.
     */
    qLocked?: number;
    /**
     * Number of values in selected state.
     */
    qSelected?: number;
    /**
     * Number of values in optional state.
     */
    qOption?: number;
    /**
     * Number of values in deselected state.
     */
    qDeselected?: number;
    /**
     * Number of values in alternative state.
     */
    qAlternative?: number;
    /**
     * Number of values in excluded state.
     */
    qExcluded?: number;
    /**
     * Number of values in selected excluded state.
     */
    qSelectedExcluded?: number;
    /**
     * Number of values in locked excluded state.
     */
    qLockedExcluded?: number;
};
/**
 * <div class=warning>This struct is deprecated (not recommended to use).</div>
 *
 * @deprecated: This will be removed in a future version
 */
type NxStreamListEntry = {
    /**
     * Name of the stream.
     */
    qName?: string;
    /**
     * Identifier of the stream.
     */
    qId?: string;
};
type NxTempBookmarkOptions = {
    /**
     * IncludeVariables If true all variables will be stored in the temporary bookmark
     */
    qIncludeVariables?: boolean;
    /**
     * IncludeAllPatches If true all patches will be stored in the temporary bookmark, if false ObjectIdsToPatch will determine what patches to include
     */
    qIncludeAllPatches?: boolean;
};
type NxTickCell = {
    /**
     * Tick's label.
     */
    qText?: string;
    /**
     * Start value.
     */
    qStart?: number;
    /**
     * End value.
     */
    qEnd?: number;
};
/**
 * Specifies all the paging filters needed to define the tree to be fetched.
 *
 * Stability: *stable*
 */
type NxTreeDataOption = {
    /**
     * Maximum number of nodes in the tree. If this limit is exceeded, no nodes are returned. All nodes are counted.
     */
    qMaxNbrOfNodes?: number;
    /**
     * Defines areas of the tree to be fetched. Areas must be defined left to right.
     */
    qTreeNodes?: NxPageTreeNode[];
    /**
     * Filters out complete dimensions from the fetched tree.
     */
    qTreeLevels?: NxPageTreeLevel;
};
type NxTreeDimensionDef = {
    /**
     * Refers to a dimension stored in the library.
     */
    qLibraryId?: string;
    /**
     * Refers to a dimension.
     */
    qDef?: NxInlineDimensionDef;
    /**
     * List of measures.
     */
    qValueExprs?: NxMeasure[];
    /**
     * If set to true, no null values are returned.
     */
    qNullSuppression?: boolean;
    /**
     * Sets the dimension limits. Each dimension of a hypercube is configured separately.
     * Defines if some values (grouped as _Others_ ) should be grouped together in the visualization.
     * For example in a pie chart all values lower than 200 could be grouped together.
     */
    qOtherTotalSpec?: OtherTotalSpecProp;
    /**
     * If set to true, all dimension values are shown.
     */
    qShowAll?: boolean;
    /**
     * This property is used when some dimension limits are set.
     * Label of the _Others_ group. The default label is _Others_ .
     * Example:
     * _"qOtherLabel":"= &lt;label&gt;"_
     * or
     * _"qOtherLabel":{"qExpr":"= &lt;label&gt;"}_
     * Where:
     * * &lt; _label_ &gt; is the label of the _Others_ group.
     */
    qOtherLabel?: StringExpr;
    /**
     * If this property is set, the total of the calculated values is returned.
     * The default label is _Total_ .
     * Example:
     * _"qTotalLabel":"= &lt;label&gt;"_
     * or
     * _"qTotalLabel":{"qExpr":"= &lt;label&gt;"}_
     * Where:
     * * &lt; _label_ &gt; is the label of the _Total_ group.
     */
    qTotalLabel?: StringExpr;
    /**
     * Specifies a calculation condition object.
     * If CalcCondition.Cond is not fulfilled, the dimension is excluded from the calculation and CalcCondition.Msg is evaluated.
     * By default, there is no calculation condition.
     * This property is optional.
     */
    qCalcCondition?: NxCalcCond;
    /**
     * List of attribute expressions.
     */
    qAttributeExpressions?: NxAttrExprDef[];
    /**
     * List of attribute dimensions.
     */
    qAttributeDimensions?: NxAttrDimDef[];
};
type NxTreeDimensionInfo = {
    /**
     * Corresponds to the label of the dimension that is selected.
     * If the label is not defined then the field name is used.
     */
    qFallbackTitle?: string;
    /**
     * Length of the longest value in the field.
     */
    qApprMaxGlyphCount?: number;
    /**
     * Number of distinct field values.
     *
     * @deprecated: This will be removed in a future version
     */
    qCardinal?: number;
    /**
     * Is set to true if the field is locked.
     */
    qLocked?: boolean;
    /**
     * Sort indicator.
     * The default value is no sorting.
     * This parameter is optional.
     *
     * One of:
     * * N or NX_SORT_INDICATE_NONE
     * * A or NX_SORT_INDICATE_ASC
     * * D or NX_SORT_INDICATE_DESC
     */
    qSortIndicator?: NxSortIndicatorType;
    /**
     * Array of dimension labels.
     * Contains the labels of all dimensions in a hierarchy group (for example the labels of all dimensions in a drill down group).
     */
    qGroupFallbackTitles?: string[];
    /**
     * Index of the dimension that is currently in use.
     * _qGroupPos_ is set to 0 if there are no hierarchical groups (drill-down groups) or cycle groups.
     */
    qGroupPos?: number;
    /**
     * Number of values in a particular state.
     */
    qStateCounts?: NxStateCounts;
    /**
     * Gives information on a field. For example, it can return the type of the field.
     * Examples: key, text, ASCII
     */
    qTags?: string[];
    /**
     * This parameter is optional.
     * Gives information on the error.
     */
    qError?: NxValidationError;
    /**
     * Binary format of the field.
     *
     * One of:
     * * D or NX_DIMENSION_TYPE_DISCRETE
     * * N or NX_DIMENSION_TYPE_NUMERIC
     * * T or NX_DIMENSION_TYPE_TIME
     */
    qDimensionType?: NxDimensionType;
    /**
     * If set to true, it inverts the sort criteria in the field.
     */
    qReverseSort?: boolean;
    /**
     * Defines the grouping.
     *
     * One of:
     * * N or GRP_NX_NONE
     * * H or GRP_NX_HIEARCHY
     * * C or GRP_NX_COLLECTION
     */
    qGrouping?: NxGrpType;
    /**
     * If set to true, it means that the field is a semantic.
     */
    qIsSemantic?: boolean;
    /**
     * Format of the field.
     * This parameter is optional.
     */
    qNumFormat?: FieldAttributes;
    /**
     * This parameter is set to true if _qNumFormat_ is set to _U_ (unknown). The engine guesses the type of the field based on the field's definition.
     */
    qIsAutoFormat?: boolean;
    /**
     * Array of field names.
     */
    qGroupFieldDefs?: string[];
    /**
     * Minimum value.
     */
    qMin?: number;
    /**
     * Maximum value.
     */
    qMax?: number;
    /**
     * Is continuous axis used.
     */
    qContinuousAxes?: boolean;
    /**
     * Is a cyclic dimension used.
     */
    qIsCyclic?: boolean;
    /**
     * Is derived field is used as a dimension.
     */
    qDerivedField?: boolean;
    /**
     * A List of measures to be calculated on this TreeDimension.
     */
    qMeasureInfo?: NxMeasureInfo[];
    /**
     * List of attribute expressions.
     */
    qAttrExprInfo?: NxAttrExprInfo[];
    /**
     * List of attribute dimensions.
     */
    qAttrDimInfo?: NxAttrDimInfo[];
    /**
     * The message displayed if calculation condition is not fulfilled.
     */
    qCalcCondMsg?: string;
    /**
     * True if this is a calculated dimension.
     */
    qIsCalculated?: boolean;
    /**
     * If set to true, it means that the field always has one and only one selected value.
     */
    qIsOneAndOnlyOne?: boolean;
    /**
     * Dimension Cardinalities
     */
    qCardinalities?: NxCardinalities;
    /**
     * Refers to a dimension stored in the library.
     */
    qLibraryId?: string;
};
type NxTreeMultiRangeSelectInfo = {
    /**
     * An array of Ranges.
     */
    qRanges?: NxTreeRangeSelectInfo[];
};
/**
 * Represents a dimension in the tree.
 *
 * Stability: *stable*
 */
type NxTreeNode = {
    /**
     * The text version of the value, if available.
     */
    qText?: string;
    /**
     * Value of the cell.
     * Is set to _NaN_ , if the value is not a number.
     */
    qValue?: number;
    /**
     * Element number.
     */
    qElemNo?: number;
    /**
     * The position of this node inside it's group in the complete tree, i.e. Not dependant om what part is fetched.
     */
    qGroupPos?: number;
    /**
     * Nbr of nodes connected to this node on the next level of the tree. Not dependant on what part is fetched.
     */
    qGroupSize?: number;
    /**
     * Row index in the data matrix.
     * The indexing starts from 0.
     */
    qRow?: number;
    /**
     * Type of the cell.
     *
     * One of:
     * * V or NX_DIM_CELL_VALUE
     * * E or NX_DIM_CELL_EMPTY
     * * N or NX_DIM_CELL_NORMAL
     * * T or NX_DIM_CELL_TOTAL
     * * O or NX_DIM_CELL_OTHER
     * * A or NX_DIM_CELL_AGGR
     * * P or NX_DIM_CELL_PSEUDO
     * * R or NX_DIM_CELL_ROOT
     * * U or NX_DIM_CELL_NULL
     * * G or NX_DIM_CELL_GENERATED
     */
    qType?: NxDimCellType;
    /**
     * The measures for this node.
     */
    qValues?: NxTreeValue[];
    /**
     * The children of this node in the fetched tree structure.
     */
    qNodes?: NxTreeNode[];
    /**
     * Attribute expression values.
     */
    qAttrExps?: NxAttributeExpressionValues;
    /**
     * Attribute dimension values.
     */
    qAttrDims?: NxAttributeDimValues;
    /**
     * Total of the positive values in the current group of cells.
     */
    qMaxPos?: number[];
    /**
     * Total of the negative values in the current group of cells.
     */
    qMinNeg?: number[];
    /**
     * If set to true, it means that the cell can be expanded.
     * This parameter is not returned if it is set to false.
     */
    qCanExpand?: boolean;
    /**
     * If set to true, it means that the cell can be collapsed.
     * This parameter is not returned if it is set to false.
     */
    qCanCollapse?: boolean;
    /**
     * Selection State of the value.
     * The default state for a measure is L(Locked).
     *
     * One of:
     * * L or LOCKED
     * * S or SELECTED
     * * O or OPTION
     * * D or DESELECTED
     * * A or ALTERNATIVE
     * * X or EXCLUDED
     * * XS or EXCL_SELECTED
     * * XL or EXCL_LOCKED
     * * NSTATES
     */
    qState?: StateEnumType;
    /**
     * The GroupPos of all prior nodes connected to this one, one position for each level of the tree.
     * If this node is attached directly to the root, this array is empty.
     */
    qTreePath?: number[];
};
type NxTreeRangeSelectInfo = {
    /**
     * Range of values.
     */
    qRange?: QRange;
    /**
     * Number of the measure to select.
     * Numbering starts from 0.
     */
    qMeasureIx?: number;
    /**
     * Number of the dimension to select
     * measure from.  Numbering starts from 0.
     */
    qDimensionIx?: number;
};
/**
 * Represents a measure.
 *
 * Stability: *stable*
 */
type NxTreeValue = {
    /**
     * The text version of the value, if available.
     */
    qText?: string;
    /**
     * Value of the cell.
     * Is set to _NaN_ , if the value is not a number.
     */
    qValue?: number;
    /**
     * Attribute expression values.
     */
    qAttrExps?: NxAttributeExpressionValues;
    /**
     * Attribute dimension values.
     */
    qAttrDims?: NxAttributeDimValues;
};
/**
 * Information about the calculated trendline.
 *
 * Stability: *experimental*
 */
type NxTrendline = {
    /**
     * Type of trendline
     *
     * One of:
     * * AVERAGE or Average
     * * LINEAR or Linear
     * * POLYNOMIAL2 or Polynomial2
     * * POLYNOMIAL3 or Polynomial3
     * * POLYNOMIAL4 or Polynomial4
     * * EXPONENTIAL or Exponential
     * * POWER or Power
     * * LOG or Logarithmic
     */
    qType?: NxLTrendlineType;
    /**
     * This parameter is optional and is displayed in case of error.
     */
    qError?: NxValidationError;
    /**
     * Coefficent c0..cN depending on the trendline type.
     */
    qCoeff?: number[];
    /**
     * R2 score. Value between 0..1 that shows the correlation between the trendline and the data. Higher value means higher correlation.
     */
    qR2?: number;
    /**
     * Trendline expression
     */
    qExpression?: string;
    /**
     * Inner Dim elem no
     */
    qElemNo?: number;
};
/**
 * Trendline input definition
 *
 * Stability: *experimental*
 */
type NxTrendlineDef = {
    /**
     * The type of trendline to calculate
     *
     * One of:
     * * AVERAGE or Average
     * * LINEAR or Linear
     * * POLYNOMIAL2 or Polynomial2
     * * POLYNOMIAL3 or Polynomial3
     * * POLYNOMIAL4 or Polynomial4
     * * EXPONENTIAL or Exponential
     * * POWER or Power
     * * LOG or Logarithmic
     */
    qType?: NxLTrendlineType;
    /**
     * The column in the hypercube to be used as x axis. Can point to either a dimension (numeric or text) or a measure
     */
    qXColIx?: number;
    /**
     * Set to true to calulatate the R2 score
     */
    qCalcR2?: boolean;
    /**
     * Set if the numerical value of x axis dimension should be used
     *
     * One of:
     * * Never or CONTINUOUS_NEVER
     * * Possible or CONTINUOUS_IF_POSSIBLE
     * * Time or CONTINUOUS_IF_TIME
     */
    qContinuousXAxis?: NxContinuousMode;
    /**
     * If you have a hypercube with two dimensions and qXColIx refers to a dimension
     * This determines if you get one trendline of each value in the other dimension or
     * Or trendline based on the sum of the value in the other dimension
     * The sum variant is only supported when qXColIx is 0 and qMode (on the hypercube) is K or T
     *
     * One of:
     * * Multi or TRENDLINE_MULTILINE
     * * Sum or TRENDLINE_SUM
     */
    qMultiDimMode?: NxTrendlineMode;
};
type NxTrendlineMode = "Multi" | "TRENDLINE_MULTILINE" | "Sum" | "TRENDLINE_SUM";
type NxValidationError = {
    /**
     * Error code.
     * This parameter is always displayed in case of error.
     */
    qErrorCode?: number;
    /**
     * Context related to the error, from the user app domain.
     * It can be the identifier of an object, a field name, a table name.
     * This parameter is optional.
     */
    qContext?: string;
    /**
     * Internal information from the server.
     * This parameter is optional.
     */
    qExtendedMessage?: string;
};
type NxVariableListItem<QData> = {
    /**
     * Name of the variable.
     */
    qName?: string;
    /**
     * Description of the variable.
     */
    qDescription?: string;
    /**
     * Definition of the variable. It can be a value or an expression.
     */
    qDefinition?: string;
    /**
     * If set to true, it means that the variable is a system variable.
     * A system variable provides information about the system and is set by the engine. The content cannot be changed by the user.
     * This parameter is optional.
     * The default value is false.
     */
    qIsConfig?: boolean;
    /**
     * If set to true, it means that the variable is reserved.
     * The default value is false.
     * This parameter is optional.
     * Examples:
     * * _ScriptError_ is a reserved variable, set by the engine.
     * * _DayNames_ is a reserved variable, set by the user.
     */
    qIsReserved?: boolean;
    /**
     * Information about publishing and permissions.
     * This parameter is optional.
     */
    qMeta?: NxMeta;
    /**
     * Identifier and type of the object.
     * This parameter is mandatory.
     */
    qInfo?: NxInfo;
    /**
     * Data.
     */
    qData?: QData;
    /**
     * If set to true, it means that the variable was defined via script.
     */
    qIsScriptCreated?: boolean;
};
type NxVariableProperties = {
    /**
     * Name of the variable.
     */
    qName?: string;
    /**
     * Defines the format of the value of a variable.
     */
    qNumberPresentation?: FieldAttributes;
    /**
     * Set this property to true to update the variable when applying a bookmark.
     * The value of a variable can affect the state of the selections.
     * The default value is false.
     */
    qIncludeInBookmark?: boolean;
    /**
     * The value of a variable can be an enumeration.
     * Set this property to true to reflect the predefined values in an enumeration.
     */
    qUsePredefListedValues?: boolean;
    /**
     * List of enumerations.
     * This property is used if _qUsePredefListedValues_ is set to true.
     */
    qPreDefinedList?: string[];
};
type NxViewPort = {
    /**
     * Width of the canvas in pixels.
     */
    qWidth?: number;
    /**
     * Height of the canvas in pixels.
     */
    qHeight?: number;
    /**
     * Zoom level.
     */
    qZoomLevel?: number;
};
type ObjectInterface = {
    /**
     * The native type of the object.
     */
    qType?: string;
    /**
     * The handle used to connect to object.
     */
    qHandle?: number;
    /**
     * The type of the object.
     */
    qGenericType?: string;
    /**
     * Object ID.
     */
    qGenericId?: string;
};
type OdbcDsn = {
    /**
     * Name of the ODBC connection.
     */
    qName?: string;
    /**
     * Description of the ODBC connection.
     */
    qDescription?: string;
    /**
     * Is set to true if the version of ODBC is 32-bit.
     * This parameter is optional. Default is false.
     */
    qBit32?: boolean;
    /**
     * Is set to true if the connection is User DSN. The connection works only for a specific user.
     * Default is false.
     * This parameter is optional.
     */
    qUserOnly?: boolean;
};
type OleDbProvider = {
    /**
     * Name of the OLEDB provider.
     */
    qName?: string;
    /**
     * Description of the OLEDB provider.
     */
    qDescription?: string;
    /**
     * Is set to true if the version of the OLEDB provider is 32-bit.
     * Default is false.
     * This parameter is optional.
     */
    qBit32?: boolean;
};
type OtherLimitMode = "OTHER_GE_LIMIT" | "OTHER_LE_LIMIT" | "OTHER_GT_LIMIT" | "OTHER_LT_LIMIT";
type OtherMode = "OTHER_OFF" | "OTHER_COUNTED" | "OTHER_ABS_LIMITED" | "OTHER_ABS_ACC_TARGET" | "OTHER_REL_LIMITED" | "OTHER_REL_ACC_TARGET";
type OtherSortMode = "OTHER_SORT_DEFAULT" | "OTHER_SORT_DESCENDING" | "OTHER_SORT_ASCENDING";
type OtherTotalSpecProp = {
    /**
     * Determines how many dimension values are displayed.
     * The default value is _OTHER_OFF_ .
     *
     * One of:
     * * OTHER_OFF
     * * OTHER_COUNTED
     * * OTHER_ABS_LIMITED
     * * OTHER_ABS_ACC_TARGET
     * * OTHER_REL_LIMITED
     * * OTHER_REL_ACC_TARGET
     */
    qOtherMode?: OtherMode;
    /**
     * Number of values to display. The number of values can be entered as a calculated formula.
     * This parameter is used when _qOtherMode_ is set to _OTHER_COUNTED_ .
     */
    qOtherCounted?: ValueExpr;
    /**
     * Value used to limit the dimension values. The limit can be entered as a calculated formula.
     * This parameter is used when _qOtherMode_ is set to:
     * * OTHER_ABS_LIMITED
     * * OTHER_REL_LIMITED
     * * OTHER_ABS_ACC_TARGET
     * OTHER_REL_ACC_TARGET
     */
    qOtherLimit?: ValueExpr;
    /**
     * Sets the limit for the _Others_ mode.
     * This parameter is used when _qOtherMode_ is set to:
     * * OTHER_ABS_LIMITED
     * * OTHER_REL_LIMITED
     * * OTHER_ABS_ACC_TARGET
     * OTHER_REL_ACC_TARGET
     *
     * One of:
     * * OTHER_GE_LIMIT
     * * OTHER_LE_LIMIT
     * * OTHER_GT_LIMIT
     * * OTHER_LT_LIMIT
     */
    qOtherLimitMode?: OtherLimitMode;
    /**
     * If set to true, the group _Others_ is not displayed as a dimension value.
     * The default value is false.
     */
    qSuppressOther?: boolean;
    /**
     * This parameter is used when _qOtherMode_ is set to:
     * * OTHER_ABS_LIMITED
     * * OTHER_REL_LIMITED
     * * OTHER_ABS_ACC_TARGET
     * OTHER_REL_ACC_TARGET
     *
     * and when the dimension values include not numeric values.
     * Set this parameter to true to include text values in the returned values.
     * The default value is true.
     */
    qForceBadValueKeeping?: boolean;
    /**
     * Set this parameter to true to allow the calculation of _Others_ even if the engine detects some potential mistakes.
     * For example the country Russia is part of the continent Europe and Asia. If you have an hypercube with two dimensions Country and Continent and one measure Population, the engine can detect that the population of Russia is included in both the continent Asia and Europe.
     * The default value is true.
     */
    qApplyEvenWhenPossiblyWrongResult?: boolean;
    /**
     * This parameter applies to inner dimensions.
     * If this parameter is set to true, the restrictions are calculated on the selected dimension only. All previous dimensions are ignored.
     * The default value is false.
     */
    qGlobalOtherGrouping?: boolean;
    /**
     * If set to true, it collapses the inner dimensions (if any) in the group _Others_ .
     * The default value is false.
     */
    qOtherCollapseInnerDimensions?: boolean;
    /**
     * Defines the sort order of the dimension values.
     * The default value is _OTHER_SORT_DESCENDING_ .
     *
     * One of:
     * * OTHER_SORT_DEFAULT
     * * OTHER_SORT_DESCENDING
     * * OTHER_SORT_ASCENDING
     */
    qOtherSortMode?: OtherSortMode;
    /**
     * If set to _TOTAL_EXPR_ , the total of the dimension values is returned.
     * The default value is _TOTAL_OFF_ .
     *
     * One of:
     * * TOTAL_OFF
     * * TOTAL_EXPR
     */
    qTotalMode?: TotalMode;
    /**
     * This parameter applies when there are several measures.
     * Name of the measure to use for the calculation of _Others_ for a specific dimension.
     */
    qReferencedExpression?: StringExpr;
};
type Point = {
    /**
     * x-coordinate in pixels.
     * The origin is the top left of the screen.
     */
    qx?: number;
    /**
     * y-coordinate in pixels.
     * The origin is the top left of the screen.
     */
    qy?: number;
};
type PositionMark = {
    qDimName?: string;
    qElemNo?: number[];
    qElemValues?: string[];
};
type ProgressData = {
    /**
     * True if the request is started.
     */
    qStarted?: boolean;
    /**
     * True if the request is finished.
     */
    qFinished?: boolean;
    /**
     * This property is not used.
     */
    qCompleted?: number;
    /**
     * This property is not used.
     */
    qTotal?: number;
    /**
     * This property is not used.
     */
    qKB?: number;
    /**
     * Request duration in milliseconds.
     */
    qMillisecs?: number;
    /**
     * True when the engine pauses the script execution and waits for a user interaction.
     */
    qUserInteractionWanted?: boolean;
    /**
     * A progress message is persistent when it informs about the start or end of a statement. For example, it can inform about the total number of lines fetched from a data source or tell that the app was saved. All persistent progress messages between two *GetProgress* calls are summarized in this string. Contrarily to *qPersistentProgressMessages*, the content of the localized message string is displayed (not its message code).
     */
    qPersistentProgress?: string;
    /**
     * A progress message is transient when it informs about the progress of an ongoing statement. For example, it can tell how many lines are currently fetched from a data source. All transient progress messages between two *GetProgress* calls are summarized in this string. Contrarily to *qTransientProgressMessage*, the content of the localized message string is displayed (not its message code).
     */
    qTransientProgress?: string;
    /**
     * Information about the error messages that occur during the script execution.
     */
    qErrorData?: ErrorData[];
    /**
     * List of persistent progress messages.
     */
    qPersistentProgressMessages?: ProgressMessage[];
    /**
     * Transient progress message.
     */
    qTransientProgressMessage?: ProgressMessage;
};
type ProgressMessage = {
    /**
     * Code number to the corresponding localized message string.
     */
    qMessageCode?: number;
    /**
     * Parameters to be inserted in the localized message string.
     */
    qMessageParameters?: string[];
};
type QRange = {
    /**
     * Lowest value in the range
     */
    qMin?: number;
    /**
     * Highest value in the range
     */
    qMax?: number;
    /**
     * If set to true, the range includes the lowest value in the range of selections (Equals to ). [bn(50500)]
     * Example:
     * The range is [1,10]. If _qMinInclEq_ is set to true it means that 1 is included in the range of selections.
     */
    qMinInclEq?: boolean;
    /**
     * If set to true, the range includes the highest value in the range of selections (Equals to ). [bn(50500)]
     * Example:
     * The range is [1,10]. If _qMinInclEq_ is set to true it means that 10 is included in the range of selections.
     */
    qMaxInclEq?: boolean;
};
type RangeSelectInfo = {
    /**
     * Lowest value in the range.
     */
    qRangeLo?: number;
    /**
     * Highest value in the range.
     */
    qRangeHi?: number;
    /**
     * Label of the measure.
     */
    qMeasure?: string;
};
type Rect = {
    /**
     * Position from the left.
     * Corresponds to the first column.
     */
    qLeft?: number;
    /**
     * Position from the top.
     * Corresponds to the first row.
     */
    qTop?: number;
    /**
     * Number of columns in the page. The indexing of the columns may vary depending on whether the cells are expanded or not (parameter _qAlwaysFullyExpanded_ in _HyperCubeDef_ ).
     */
    qWidth?: number;
    /**
     * Number of rows or elements in the page. The indexing of the rows may vary depending on whether the cells are expanded or not (parameter _qAlwaysFullyExpanded_ in _HyperCubeDef_ ).
     */
    qHeight?: number;
};
type SampleResult = {
    /**
     * Name of field or column.
     */
    qFieldOrColumn?: FieldOrColumn;
    /**
     * Matched values part of the sample.
     */
    qValues?: FieldValue[];
};
type ScriptSyntaxError = {
    /**
     * Length of the word where the error is located.
     */
    qErrLen?: number;
    /**
     * Number of the faulty section.
     */
    qTabIx?: number;
    /**
     * Line number in the section where the error is located.
     */
    qLineInTab?: number;
    /**
     * Position of the erroneous text from the beginning of the line.
     */
    qColInLine?: number;
    /**
     * Position of the erroneous text from the beginning of the script.
     */
    qTextPos?: number;
    /**
     * The default value is false.
     */
    qSecondaryFailure?: boolean;
};
type ScrollPosition = {
    qUsePosition?: boolean;
    qPos?: Point;
};
type SearchAssociationResult = {
    /**
     * List of the fields that contains search associations.
     */
    qFieldNames?: string[];
    /**
     * List of the search terms.
     */
    qSearchTerms?: string[];
    /**
     * Information about the fields containing search hits.
     */
    qFieldDictionaries?: SearchFieldDictionary[];
    /**
     * List of search results.
     * The maximum number of search results in this list is set by _qPage/qCount_ .
     */
    qSearchTermsMatched?: SearchMatchCombinations[];
    /**
     * Total number of search results.
     * This number is not limited by _qPage/qCount_ .
     */
    qTotalSearchResults?: number;
};
type SearchAttribute = {
    /**
     * String corresponding to _SearchObjectOptions.qAttributes_. It will be _qProperty_ for _SearchObjectOptions_.
     */
    qKey?: string;
    /**
     * String corresponding to _qKey_ for the current _SearchGroupItemMatch_. For example, if the match is _Make by Price_ found in the title of a generic object, _qValue_ will be _qMetaDef/title_.
     */
    qValue?: string;
};
type SearchCharRange = {
    /**
     * Starting position of the match in the search result, starting from 0.
     */
    qCharPos?: number;
    /**
     * Length of the match in the search result.
     */
    qCharCount?: number;
    /**
     * Position of the term in the list of search terms, starting from 0.
     */
    qTerm?: number;
};
type SearchCombinationOptions = {
    /**
     * List of the search fields.
     * If empty, the search is performed in all fields of the app.
     */
    qSearchFields?: string[];
    /**
     * Search context.
     * The default value is _LockedFieldsOnly_ .
     *
     * One of:
     * * Cleared or CONTEXT_CLEARED
     * * LockedFieldsOnly or CONTEXT_LOCKED_FIELDS_ONLY
     * * CurrentSelections or CONTEXT_CURRENT_SELECTIONS
     */
    qContext?: SearchContextType;
    /**
     * Encoding used to compute qRanges of type SearchCharRange.
     * <div class=note>Only affects the computation of the ranges. It does not impact the encoding of the text.</div>
     *
     * One of:
     * * Utf8 or CHAR_ENCODING_UTF8
     * * Utf16 or CHAR_ENCODING_UTF16
     */
    qCharEncoding?: CharEncodingType;
    /**
     * Optional.
     * * For SearchSuggest method, this array is empty.
     * * For SearchObjects method, this array is empty or contain _qProperty_ .
     * * For SearchResults method, this array is empty, or contains _qNum_ and/or _qElemNum_ . It allows the user to request details in the outputted _SearchGroupItemMatch_ . For more information, see _SearchGroupItemMatch_.
     */
    qAttributes?: string[];
};
type SearchContextType = "Cleared" | "CONTEXT_CLEARED" | "LockedFieldsOnly" | "CONTEXT_LOCKED_FIELDS_ONLY" | "CurrentSelections" | "CONTEXT_CURRENT_SELECTIONS";
type SearchFieldDictionary = {
    /**
     * Position of the field in the list of fields, starting from 0.
     * The list of fields is defined in _qResults/qFieldNames_ and contains the search associations.
     */
    qField?: number;
    /**
     * List of the matching values.
     * The maximum number of values in this list is set by _qMaxNbrFieldMatches_ .
     */
    qResult?: SearchTermResult[];
};
type SearchFieldMatch = {
    /**
     * Position of the field in the list of fields, starting from 0.
     * The list of fields is defined in _qResults/qFieldNames_ and contains the search associations.
     */
    qField?: number;
    /**
     * Positions of the matching values in the search results.
     * The maximum number of values in this list is defined by _qMaxNbrFieldMatches_ .
     */
    qValues?: number[];
    /**
     * Positions of the search terms, starting from 0.
     */
    qTerms?: number[];
    /**
     * Number of search hits in the field.
     * The number of values in _qValues_ and the value of _qNoOfMatches_ are equal if _qMaxNbrFieldMatches_ is -1.
     */
    qNoOfMatches?: number;
};
type SearchFieldMatchType = "FieldMatchNone" | "FM_NONE" | "FieldMatchSubString" | "FM_SUBSTRING" | "FieldMatchWord" | "FM_WORD" | "FieldMatchExact" | "FM_EXACT" | "FieldMatchLast" | "FM_LAST";
type SearchFieldMatchesItem = {
    qText?: string;
    qElemNo?: number;
    qSearchTermsMatched?: number[];
};
type SearchFieldSelectionMode = "OneAndOnlyOne" | "ONE_AND_ONLY_ONE";
type SearchFieldValueItem = {
    /**
     * Field name of matches.
     */
    qFieldName?: string;
    /**
     * List of search matches.
     */
    qValues?: SearchFieldMatchesItem[];
};
type SearchGroup = {
    /**
     * Identifier of the search group.
     */
    qId?: number;
    /**
     * Type of the search group.
     *
     * One of:
     * * DatasetType or DATASET_GROUP
     * * GenericObjectsType or GENERIC_OBJECTS_GROUP
     */
    qGroupType?: SearchGroupType;
    /**
     * Indexes of the search terms that are included in the group. These search terms are related to the list of terms defined in _SearchResult.qSearchTerms_ .
     */
    qSearchTermsMatched?: number[];
    /**
     * Total number of distinct items in the search group.
     */
    qTotalNumberOfItems?: number;
    /**
     * List of items in the search group.
     * The group items are numbered from the value of _SearchGroupOptions.qOffset_ to the value of _SearchGroupOptions.qOffset_ \+ _SearchGroupOptions.qCount_
     */
    qItems?: SearchGroupItem[];
};
type SearchGroupItem = {
    /**
     * Type of the group item.
     *
     * One of:
     * * Field or FIELD
     * * GenericObject or GENERIC_OBJECT
     */
    qItemType?: SearchGroupItemType;
    /**
     * Total number of distinct matches in the search group item.
     */
    qTotalNumberOfMatches?: number;
    /**
     * Identifier of the item.
     * It corresponds to:
     * * The name of the field, if the type of the search group is data set.
     * * The id of the generic object if the type of the search group is generic object.
     */
    qIdentifier?: string;
    /**
     * List of matches in the search group item.
     * The group item matches are numbered from the value of _SearchGroupItemOptions.qOffset_ to the value of _SearchGroupItemOptions.qOffset_ \+ _SearchGroupItemOptions.qCount_ .
     */
    qItemMatches?: SearchGroupItemMatch[];
    /**
     * Indexes of the search terms that are included in the group item. These search terms are related to the list of terms defined in _SearchResult.qSearchTerms_ .
     */
    qSearchTermsMatched?: number[];
    /**
     * Match type applied in this result group.
     *
     * One of:
     * * FieldMatchNone or FM_NONE
     * * FieldMatchSubString or FM_SUBSTRING
     * * FieldMatchWord or FM_WORD
     * * FieldMatchExact or FM_EXACT
     * * FieldMatchLast or FM_LAST
     */
    qMatchType?: SearchFieldMatchType;
};
type SearchGroupItemMatch = {
    /**
     * Search match value.
     * Value of the search group item.
     * If the match is found in a field, it corresponds to the value of the field.
     * If the match is found in a generic object property, it corresponds to the property value.
     */
    qText?: string;
    /**
     * Selection mode of a field.
     * Suppressed by default. One and always one field value is selected when set to _OneAndOnlyOne_.
     */
    qFieldSelectionMode?: SearchFieldSelectionMode;
    /**
     * List of ranges.
     * For example, if the search terms are Price and Make, and the search group item value is Make by Price vs Mileage, then there are two ranges: one for Price and one for Make.
     */
    qRanges?: SearchCharRange[];
    /**
     * Provides detail of the match as requested by the user in _SearchObjectsOptions.qAttributes_ or _SearchCombinationOptions.qAttributes_
     * If the user requests _SearchObjects_ or _SearchResults_ with an empty _qAttributes_ option, the outputted _qAttributes_ is returned empty.
     * For _SearchObjects_ requested with _qProperty_ , the _SearchGroupItemMatch.qAttributes_ return value contains _[“qProperty”, "qMetaDef/title”]_ if the match has been found in the title of the item. For dimension values, the returned _qProperty_ will be _“*”_ .
     * For _SearchResults_ requested with _qNum_ , the _SearchGroupItemMatch.qAttributes_ return value contains _["qNum", N]_ where _N_ is the numeric value of the element or _NaN_ if the value is not numeric.
     * For _SearchResults_ requested with _qElemNum_ , the _SearchGroupItemMatch.qAttributes_ return value contains _["qElemNum", N]_ where _N_ is the value index of the element.
     */
    qAttributes?: SearchAttribute[];
};
type SearchGroupItemOptions = {
    /**
     * Type of the group item. Can be:
     * * GenericObject: the type of the search group item is a generic object. Group items have this type when you are calling _SearchObjects_ .
     * * Field: the type of the search group item is a field. Group items have this type when you are calling _SearchResults_ .
     *
     * One of:
     * * Field or FIELD
     * * GenericObject or GENERIC_OBJECT
     */
    qGroupItemType?: SearchGroupItemType;
    /**
     * Position starting from 0.
     * The default value is 0.
     */
    qOffset?: number;
    /**
     * Maximum number of matches per item (in _qItemMatches[ ]_ ).
     * The default value is -1: all values are returned.
     */
    qCount?: number;
};
type SearchGroupItemType = "Field" | "FIELD" | "GenericObject" | "GENERIC_OBJECT";
type SearchGroupOptions = {
    /**
     * Type of the group. Can be:
     * * GenericObjectType: the type of the search group item is a generic object. Groups have this type when you are calling _SearchObjects_ .
     * * DatasetType: type of the search group item is a dataset association. Groups have this type when you are calling _SearchResults_ .
     *
     * One of:
     * * DatasetType or DATASET_GROUP
     * * GenericObjectsType or GENERIC_OBJECTS_GROUP
     */
    qGroupType?: SearchGroupType;
    /**
     * Position starting from 0.
     * The default value is 0.
     */
    qOffset?: number;
    /**
     * Maximum number of items per group (in _qItems[ ]_ ).
     * The default value is -1; all values are returned.
     */
    qCount?: number;
};
type SearchGroupType = "DatasetType" | "DATASET_GROUP" | "GenericObjectsType" | "GENERIC_OBJECTS_GROUP";
type SearchMatchCombination = {
    /**
     * Index of the search result, starting from 0.
     */
    qId?: number;
    /**
     * Information about the search matches.
     */
    qFieldMatches?: SearchFieldMatch[];
};
type SearchMatchCombinations = SearchMatchCombination[];
type SearchObjectOptions = {
    /**
     * This array is either empty or contains _qProperty_ .
     */
    qAttributes?: string[];
    /**
     * Encoding used to compute qRanges of type SearchCharRange.
     * <div class=note>Only affects the computation of the ranges. It does not impact the encoding of the text.</div>
     *
     * One of:
     * * Utf8 or CHAR_ENCODING_UTF8
     * * Utf16 or CHAR_ENCODING_UTF16
     */
    qCharEncoding?: CharEncodingType;
};
type SearchPage = {
    /**
     * Position from the top, starting from 0.
     * If the offset is set to 0, the first search result to be returned is at position 0.
     */
    qOffset?: number;
    /**
     * Number of search groups to return (in _qSearchGroupArray_ ).
     */
    qCount?: number;
    /**
     * Maximum number of matching values to return per search result.
     * The default value is -1; all values are returned.
     * This property is to be used with the _SearchAssociations method_.
     */
    qMaxNbrFieldMatches?: number;
    /**
     * Options of the search groups.
     * If this property is not set, all values are returned.
     * This property is to be used with the _SearchResults method_ or the _SearchObjects method_.
     */
    qGroupOptions?: SearchGroupOptions[];
    /**
     * Options of the search group items.
     * If this property is not set, all values are returned.
     * This property is to be used with the _SearchResults method_ or the _SearchObjects method_.
     */
    qGroupItemOptions?: SearchGroupItemOptions[];
};
type SearchResult = {
    /**
     * List of the search terms.
     */
    qSearchTerms?: string[];
    /**
     * Total number of groups.
     */
    qTotalNumberOfGroups?: number;
    /**
     * List of search groups.
     * The groups are numbered from the value of _SearchPage.qOffset_ to the value of _SearchPage.qOffset + SearchPage.qCount_ .
     */
    qSearchGroupArray?: SearchGroup[];
};
type SearchSuggestItem = {
    /**
     * Value of the suggestion.
     */
    qValue?: string;
    /**
     * Index of the suggestion value.
     * The indexing starts from 0 and from the left.
     */
    qTerm?: number;
};
type SearchSuggestionResult = {
    /**
     * List of suggestions.
     */
    qSuggestions?: SearchSuggestItem[];
    /**
     * List of field names that contain search hits.
     */
    qFieldNames?: string[];
};
type SearchTermResult = {
    /**
     * Text of the associated value.
     */
    qText?: string;
    /**
     * Element number of the associated value.
     */
    qElemNumber?: number;
    /**
     * List of ranges.
     * For example, if the user searches the term _read_ and the associative value is _Reading_ , then the corresponding range would be _Read_ in _Reading_ .
     */
    qRanges?: SearchCharRange[];
};
type SearchValueOptions = {
    /**
     * List of the search fields.
     * If empty, the search is performed in all fields of the app.
     */
    qSearchFields?: string[];
};
type SearchValuePage = {
    /**
     * Position from the top, starting from 0.
     * If the offset is set to 0, the first search result to be returned is at position 0.
     */
    qOffset?: number;
    /**
     * Number of search fields to return
     */
    qCount?: number;
    /**
     * Maximum number of matching values to return per search result.
     */
    qMaxNbrFieldMatches?: number;
};
type SearchValueResult = {
    /**
     * List of the search terms.
     */
    qSearchTerms?: string[];
    /**
     * List of search groups.
     * The groups are numbered from the value of _SearchPage.qOffset_ to the value of _SearchPage.qOffset + SearchPage.qCount_ .
     */
    qFieldMatches?: SearchFieldValueItem[];
};
type SelectInfo = {
    /**
     * Text search string.
     * Everything that matches the text is selected.
     * This parameter is optional.
     */
    qTextSearch?: string;
    /**
     * Lower value of the search range.
     * This parameter is used when performing range selections or text searches in dimensions.
     * Default is Null.
     */
    qRangeLo?: number;
    /**
     * Highest value of the search range.
     * This parameter is used when performing range selections or text searches in dimensions.
     * Default is Null.
     */
    qRangeHi?: number;
    /**
     * Gives information about the formatting of the range.
     * This parameter is used when performing range selections or text searches in dimensions.
     */
    qNumberFormat?: FieldAttributes;
    /**
     * This parameter is used when performing range selections or text searches in measures.
     * Gives information about the range of selections.
     */
    qRangeInfo?: RangeSelectInfo[];
    /**
     * Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     */
    qSoftLock?: boolean;
    /**
     * List of information about ranges for selections.
     */
    qContinuousRangeInfo?: QRange[];
    /**
     * This parameter is true if the TextSearch is a result of a Select Field operation.
     */
    qSelectFieldSearch?: boolean;
};
/**
 * Structure that holds information connecting an app object to a data model field represented by an NxCurrentSelectionItem in the SelectionObject.
 * The SelectionItemFieldReferenceInfo structure points to an app object, such as a GenericDimension, and also holds a label.
 *
 * Stability: *experimental*
 */
type SelectionItemFieldReferenceInfo = {
    /**
     * Identifier of the associated object.
     */
    qId?: string;
    /**
     * Type of object.
     */
    qType?: string;
    /**
     * Text label.
     */
    qLabel?: string;
};
/**
 * Indicates which selections are currently applied. It gives the current selections. Is the layout for _SelectionObjectDef_.
 */
type SelectionObject = {
    /**
     * Number of steps back.
     */
    qBackCount?: number;
    /**
     * Number of steps forward.
     */
    qForwardCount?: number;
    /**
     * Lists the fields that are selected.
     */
    qSelections?: NxCurrentSelectionItem[];
    /**
     * Name of the alternate state.
     * Default is current selections _$_ .
     */
    qStateName?: string;
};
/**
 * To display the current selections.
 * Can be added to any generic object but is particularly meaningful when using session objects to monitor an app.
 *
 * ### Properties
 * "qSelectionObjectDef": {}
 */
type SelectionObjectDef = {
    /**
     * Name of the alternate state.
     * Default is current selections _$_ .
     */
    qStateName?: string;
};
type Size = {
    /**
     * Number of pixels on the _x_ axis.
     */
    qcx?: number;
    /**
     * Number of pixels on the _y_ axis.
     */
    qcy?: number;
};
type SortCriteria = {
    /**
     * Sorts the field values according to their logical state (selected, optional, alternative or excluded).
     */
    qSortByState?: number;
    /**
     * Sorts the field values by frequency (number of occurrences in the field).
     */
    qSortByFrequency?: number;
    /**
     * Sorts the field values by numeric value.
     */
    qSortByNumeric?: number;
    /**
     * Sorts the field by alphabetical order.
     */
    qSortByAscii?: number;
    /**
     * Sorts the field values by the initial load order.
     */
    qSortByLoadOrder?: number;
    /**
     * Sorts the field by expression.
     */
    qSortByExpression?: number;
    /**
     * Sort by expression.
     */
    qExpression?: ValueExpr;
    qSortByGreyness?: number;
};
type SourceKeyRecord = {
    /**
     * Name of the key field.
     */
    qKeyFields?: string[];
    /**
     * Table the key belongs to.
     */
    qTables?: string[];
};
type StateEnumType = "L" | "LOCKED" | "S" | "SELECTED" | "O" | "OPTION" | "D" | "DESELECTED" | "A" | "ALTERNATIVE" | "X" | "EXCLUDED" | "XS" | "EXCL_SELECTED" | "XL" | "EXCL_LOCKED" | "NSTATES";
type StaticContentList = {
    /**
     * Information about the list of content files.
     */
    qItems?: StaticContentListItem[];
};
/**
 * <div class=note>In addition, this structure can return dynamic properties.</div>
 */
type StaticContentListItem = {
    /**
     * Relative path to the content file. The URL is static.
     * In Qlik Sense Enterprise, content files located:
     * * In the _/content/ &lt;content library name&gt;/_ folder are part of a global content library.
     * * In the _/appcontent/_ folder are part of the app specific library.
     * The content files are never embedded in the _qvf_ file.
     * In Qlik Sense Desktop, content files located:
     * * In the _/content/default/_ folder are outside the qvf file.
     * * In the _/media/ folder_ are embedded in the qvf file.
     */
    qUrlDef?: string;
    /**
     * Relative path to the content file. The URL is static.
     * In Qlik Sense Enterprise, content files located:
     * * In the _/content/ &lt;content library name&gt;/_ folder are part of a global content library.
     * * In the _/appcontent/_ folder are part of the app specific library.
     * The content files are never embedded in the _qvf_ file.
     * In Qlik Sense Desktop, content files located:
     * * In the _/content/default/_ folder are outside the qvf file.
     * * In the _/media/ folder_ are embedded in the qvf file.
     */
    qUrl?: string;
};
/**
 * <div class=note>In addition, this structure can return dynamic properties.</div>
 */
type StaticContentUrl = {
    /**
     * Relative path of the thumbnail.
     */
    qUrl?: string;
};
/**
 * <div class=note>In addition, this structure can contain dynamic properties.</div>
 */
type StaticContentUrlDef = {
    /**
     * Relative path of the thumbnail.
     */
    qUrl?: string;
};
type StringExpr = {
    /**
     * Expression evaluated to string.
     */
    qv?: string;
};
/**
 * ### Properties
 * Abbreviated syntax:
 * "qStringExpression":"=&lt;expression&gt;"
 * Extended object syntax:
 * "qStringExpression":{"qExpr":"=&lt;expression&gt;"}
 * Where:
 * * &lt; **expression** &gt; is a string
 *
 * <div class=note>The "=" sign in the string expression is not mandatory. Even if the "=" sign is not given, the expression is evaluated.</div> <div class=note>A string expression is not evaluated, if the expression is surrounded by simple quotes.</div>
 * The result of the evaluation of the expression can be of any type, as it is returned as a JSON (quoted) string.
 */
type StringExpression = {
    qExpr?: string;
};
type SymbolFrequency = {
    /**
     * Symbol. Either string and NaN or number alone
     */
    qSymbol?: SymbolValue;
    /**
     * Frequency of the above symbol in the field
     */
    qFrequency?: number;
};
type SymbolValue = {
    /**
     * String value of the symbol. This parameter is optional and present only if Symbol is a string.
     */
    qText?: string;
    /**
     * Numeric value of the symbol. NaN otherwise.
     */
    qNumber?: number;
};
type TableProfilingData = {
    /**
     * Number of rows in the table.
     */
    qNoOfRows?: number;
    /**
     * Field values profiling info
     */
    qFieldProfiling?: FieldInTableProfilingData[];
};
type TableRecord = {
    /**
     * Name of the table.
     */
    qName?: string;
    /**
     * This property is set to true if the table is loose.
     */
    qLoose?: boolean;
    /**
     * Number of rows in the table.
     */
    qNoOfRows?: number;
    /**
     * Information about the fields in the table.
     */
    qFields?: FieldInTableData[];
    /**
     * Information about the position of the table.
     */
    qPos?: Point;
    /**
     * Comment related to the table.
     */
    qComment?: string;
    /**
     * If set to true, Direct Discovery is used.
     * Direct Discovery fields are not loaded into memory and remain in the external database.
     */
    qIsDirectDiscovery?: boolean;
    /**
     * This property is set to true if the table contains a synthetic key.
     */
    qIsSynthetic?: boolean;
    /**
     * List of tags related to the table.
     */
    qTableTags?: string[];
    /**
     * Profiling information of the table.
     */
    qProfilingData?: TableProfilingData;
};
type TableRow = {
    /**
     * Array of field values.
     */
    qValue?: FieldValue[];
};
type TableViewBroomPointSaveInfo = {
    /**
     * Information about the position of the broom point.
     */
    qPos?: Point;
    /**
     * Name of the table.
     */
    qTable?: string;
    /**
     * List of fields in the table.
     */
    qFields?: string[];
};
type TableViewConnectionPointSaveInfo = {
    /**
     * Information about the position of the connection point.
     */
    qPos?: Point;
    /**
     * List of the fields in the table.
     */
    qFields?: string[];
};
type TableViewCtlSaveInfo = {
    /**
     * Internal view mode.
     */
    qInternalView?: TableViewSaveInfo;
    /**
     * Source view mode.
     */
    qSourceView?: TableViewSaveInfo;
};
type TableViewDlgSaveInfo = {
    /**
     * Information about the position of the dialog window.
     * Not used in Qlik Sense.
     */
    qPos?: Rect;
    /**
     * Set of data for internal and source view modes.
     */
    qCtlInfo?: TableViewCtlSaveInfo;
    /**
     * View mode to display when opening Qlik Sense data model viewer.
     * One of:
     * * 0 for internal view mode.
     * * 1 for source view mode.
     */
    qMode?: number;
};
type TableViewSaveInfo = {
    /**
     * List of the tables in the database model viewer.
     */
    qTables?: TableViewTableWinSaveInfo[];
    /**
     * List of the broom points in the database model viewer.
     * Not used in Qlik Sense.
     */
    qBroomPoints?: TableViewBroomPointSaveInfo[];
    /**
     * List of connection points in the database model viewer.
     * Not used in Qlik Sense.
     */
    qConnectionPoints?: TableViewConnectionPointSaveInfo[];
    /**
     * Zoom factor in the database model viewer.
     * The default value is 1.0.
     */
    qZoomFactor?: number;
};
type TableViewTableWinSaveInfo = {
    /**
     * Information about the position of the table.
     */
    qPos?: Rect;
    /**
     * Table name.
     */
    qCaption?: string;
};
type TextMacro = {
    /**
     * Name of the variable.
     */
    qTag?: string;
    /**
     * Order in which the variable was referenced during the script execution.
     * The same number sequence is used for both _qRefSeqNo_ and _qSetSeqNo_ .
     */
    qRefSeqNo?: number;
    /**
     * Order in which the variable was updated during the script execution.
     * The same number sequence is used for both _qRefSeqNo_ and _qSetSeqNo_ .
     */
    qSetSeqNo?: number;
    /**
     * Variable value.
     */
    qDisplayString?: string;
    /**
     * Is set to true if the variable is a system variable.
     */
    qIsSystem?: boolean;
    /**
     * Is set to true if the variable is a reserved variable.
     */
    qIsReserved?: boolean;
};
type TotalMode = "TOTAL_OFF" | "TOTAL_EXPR";
type TransformAppParameters = {
    /**
     * The name (title) of the application
     */
    qName?: string;
    /**
     * ID of the space where the app is to be created. Empty value implies Personal space
     */
    qSpaceId?: string;
    /**
     * Prefix to be used on inserted ScriptParameters, only applicable for template apps
     */
    qScriptParameterPrefix?: string;
};
type TransformAppResult = {
    /**
     * ID of created App
     */
    qAppId?: string;
};
/**
 * Renders the properties of a TreeData object. Is the layout for TreeDataDef.
 * For more information about the definition of TreeData, see _Generic object_.
 * <div class=note>To retrieve data from the TreeData object, use the method called GetHyperCubeTreeData.</div>
 *
 * Stability: *stable*
 */
type TreeData = {
    /**
     * Name of the alternate state.
     * Default is current selections _$_ .
     */
    qStateName?: string;
    /**
     * The total number of nodes on each dimension.
     */
    qNodesOnDim?: number[];
    /**
     * This parameter is optional and is displayed in case of error.
     */
    qError?: NxValidationError;
    /**
     * Information on the dimension.
     */
    qDimensionInfo?: NxTreeDimensionInfo[];
    /**
     * Defines the order of the dimenion levels/columns in the TreeData object.
     * Column numbers are separated by a comma.
     * Example: [1,0,2] means that the first level in the tree structure is dimension 1, followed by dimension 0 and dimension 2.
     */
    qEffectiveInterColumnSortOrder?: number[];
    /**
     * True if other row exists.
     */
    qHasOtherValues?: boolean;
    /**
     * Title of the TreeData object, for example the title of a chart.
     */
    qTitle?: string;
    /**
     * Position of the last expended cell.
     * This property is optional.
     */
    qLastExpandedPos?: NxCellPosition;
    /**
     * The message displayed if calculation condition is not fulfilled.
     */
    qCalcCondMsg?: string;
    /**
     * Set of data.
     * Is empty if nothing has been defined in **qInitialDataFetch** in _TreeDataDef_.
     */
    qTreeDataPages?: NxTreeNode[];
    /**
     * Information on the measures calculated on the whole tree.
     */
    qMeasureInfo?: NxMeasureInfo[];
};
/**
 * Defines the properties of a TreeData object.
 * For more information about the definition of a TreeData object, see _Generic object_.
 *
 * Stability: *stable*
 */
type TreeDataDef = {
    /**
     * Name of the alternate state.
     * Default is current selections _$_ .
     */
    qStateName?: string;
    /**
     * Array of dimensions.
     */
    qDimensions?: NxTreeDimensionDef[];
    /**
     * Defines the order of the dimension levels/columns in the TreeData object.
     * Column numbers are separated by a comma.
     * Example: [1,0,2] means that the first level in the tree structure is dimension 1, followed by dimension 0 and dimension 2.
     * The default sort order is the order in which the dimensions and measures have been defined in the TreeDataDef.
     */
    qInterColumnSortOrder?: number[];
    /**
     * Removes zero values.
     */
    qSuppressZero?: boolean;
    /**
     * Removes missing values.
     */
    qSuppressMissing?: boolean;
    /**
     * If this property is set to true, the cells are opened expanded. The default value is false.
     */
    qOpenFullyExpanded?: boolean;
    /**
     * If this property is set to true, the missing symbols (if any) are replaced by 0 if the value is a numeric and by an empty string if the value is a string.
     * The default value is false.
     */
    qPopulateMissing?: boolean;
    /**
     * Specifies a calculation condition object.
     * If CalcCondition.Cond is not fulfilled, the TreeData is excluded from the calculation and CalcCondition.Msg is evaluated.
     * By default, there is no calculation condition.
     * This property is optional.
     */
    qCalcCondition?: NxCalcCond;
    /**
     * Title of the TreeData object, for example the title of a chart.
     */
    qTitle?: StringExpr;
    /**
     * Initial data set.
     * This property is optional.
     */
    qInitialDataFetch?: NxTreeDataOption[];
    /**
     * Expansion state per dimension.
     *
     * Stability: *experimental*
     */
    qExpansionState?: ExpansionData[];
    /**
     * List of measures to calculate on the whole tree.
     */
    qValueExprs?: NxMeasure[];
    /**
     * Set Expression valid for the whole cube. Used to limit computations to the set specified.
     */
    qContextSetExpression?: string;
};
/**
 * Displays information about the number of possible undos and redos. Is the layout for _UndoInfoDef_.
 */
type UndoInfo = {
    /**
     * Number of possible undos.
     */
    qUndoCount?: number;
    /**
     * Number of possible redos.
     */
    qRedoCount?: number;
};
/**
 * Defines if an object should contain information on the number of possible undo and redo.
 *
 * ### Properties
 * "qUndoInfoDef": {}
 * The numbers of undos and redos are empty when an object is created. The number of possible undos is increased every time an action (for example, create a child, set some properties) on the object is performed. The number of possible redos is increased every time an undo action is performed.
 */
type UndoInfoDef = object;
type UsageEnum = "ANALYTICS" | "DATA_PREPARATION" | "DATAFLOW_PREP";
type ValueExpr = {
    /**
     * Expression evaluated to dual.
     */
    qv?: string;
};
/**
 * ### Properties
 * Abbreviated syntax:
 * "qValueExpression":"=&lt;expression&gt;"
 * Extended object syntax:
 * "qValueExpression":{"qExpr":"=&lt;expression&gt;"}
 * Where:
 * * &lt; **expression** &gt; is a string.
 *
 * <div class=note>The "=" sign in the value expression is not mandatory. Even if the "=" sign is not given, the expression is evaluated.</div>
 * The expression is evaluated as a numeric.
 */
type ValueExpression = {
    qExpr?: string;
};
/**
 * Lists the variables in an app. Is the layout for _VariableListDef_.
 */
type VariableList<QData> = {
    /**
     * List of the variables.
     */
    qItems?: NxVariableListItem<QData>[];
};
/**
 * Defines the list of variables in an app.
 */
type VariableListDef = {
    /**
     * Type of variables to include in the list.
     */
    qType?: string;
    /**
     * Shows the reserved variables if set to true.
     */
    qShowReserved?: boolean;
    /**
     * Shows the system variables if set to true.
     */
    qShowConfig?: boolean;
    /**
     * Data
     */
    qData?: Record<string, string>;
    /**
     * Shows the session variables if set to true.
     */
    qShowSession?: boolean;
};
type NativeDocFunctions<FieldRpcObject, GenericBookmarkRpcObject, GenericDimensionRpcObject, GenericMeasureRpcObject, GenericObjectRpcObject, GenericVariableRpcObject, DefaultGenericObjectProperties> = {
    /**
     * Aborts any selection mode in an app. For more information about selection mode, see _BeginSelections method_.
     *
     * Parameters:
     *
     * - `accept`   -   Set this parameter to true to accept the selections before exiting the selection mode.
     *
     * Stability: *locked*
     */
    abortModal: (accept: boolean) => Promise<void>;
    /**
     * Adds an alternate state in the app.
     * You can create multiple states within a Qlik Sense app and apply these states to specific objects within the app. Objects in a given state are not affected by user selections in the other states.
     *
     * Parameters:
     *
     * - `stateName`   -   Name of the alternate state.
     *
     * Stability: *locked*
     */
    addAlternateState: (stateName: string) => Promise<void>;
    /**
     * Adds a field on the fly.
     * <div class=note>The expression of a field on the fly is persisted but not its values. </div>
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `name`   -   Name of the field.
     * - `expr`   -   Expression value.
     * It is not possible to use all aggregation functions. For example, you cannot add a field on the fly with an expression that uses the _Sum_ or _Count_ aggregation functions.
     *
     * Stability: *locked*
     */
    addFieldFromExpression: (name: string, expr: string) => Promise<boolean>;
    /**
     * Adds an session alternate state in the app.
     * You can create multiple states within a Qlik Sense app and apply these states to specific objects within the app. Objects in a given state are not affected by user selections in the other states.
     * A session alternate state is not persisted and is not included in the StateNames array in the AppLayout.
     * You can use the optional second parameter to choose any other state to get the initial selection on the new state from
     *
     * Parameters:
     *
     * - `stateName`         -   Name of the alternate state.
     * - `sourceStateName`   -   Name of existing state to copy the initial selections from
     *
     * Stability: *locked*
     */
    addSessionAlternateState: (stateName: string, sourceStateName?: string) => Promise<void>;
    /**
     * Applies a bookmark and verifies result dataset against originally selected values.
     * <div class=note>The operation is successful if **qApplySuccess** is set to true. **qWarnings** lists state and field with unmatching values </div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the bookmark.
     *
     * Stability: *experimental*
     */
    applyAndVerifyBookmark: (id: string) => Promise<BookmarkApplyAndVerifyResult>;
    /**
     * Applies a bookmark.
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the bookmark.
     *
     * Stability: *locked*
     */
    applyBookmark: (id: string) => Promise<boolean>;
    applyGroupStates: (groupStates: GroupState[]) => Promise<ApplyGroupStatesResult>;
    /**
     * Apply temporary bookmark identified by Id.
     * <div class=note>ApplyTemporaryBookmark method is only supported in SaaS Editions of Qlik Sense.</div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the temporary selection state
     *
     * Stability: *locked*
     */
    applyTemporaryBookmark: (id: string) => Promise<boolean>;
    /**
     * Loads the last logical operation (if any).
     *
     * Stability: *locked*
     */
    back: () => Promise<void>;
    /**
     * Returns the number of entries on the back stack.
     *
     * Stability: *locked*
     */
    backCount: () => Promise<number>;
    /**
     * Change the owner of a session app.
     * <div class=note>Can be used by a privileged user when creating a session app to be consumed by another user.
     * Only useful in environments where it is possible to reconnect to a session app, currently only in cloud deployments. </div>
     *
     * Parameters:
     *
     * - `newOwnerId`   -   Identifier of the new app owner.
     *
     * Stability: *experimental*
     */
    changeSessionAppOwner: (newOwnerId: string) => Promise<boolean>;
    /**
     * Add a session app to a space.
     * <div class=note>Can be used by a privileged user when creating a session app to be consumed by other users.
     * Only useful in environments where it is possible to reconnect to a session app, currently only in cloud deployments. </div>
     *
     * Parameters:
     *
     * - `spaceId`   -   Identifier of the new space.
     *
     * Stability: *experimental*
     */
    changeSessionAppSpace: (spaceId: string) => Promise<boolean>;
    /**
     * Checks if a given expression is valid.
     * <div class=note>The expression is correct if the parameters _qErrorMsg_ , _qBadFieldNames_ and _qDangerousFieldNames_ are empty. </div>
     *
     * Parameters:
     *
     * - `expr`     -   Expression to check.
     * - `labels`   -   List of labels.
     *
     * Stability: *locked*
     */
    checkExpression: (expr: string, labels?: string[]) => Promise<unknown>;
    /**
     * Checks if:
     * * A given expression is valid.
     * * A number is correct according to the locale.
     *
     * Parameters:
     *
     * - `expr`   -   Expression to check.
     *
     * Stability: *locked*
     */
    checkNumberOrExpression: (expr: string) => Promise<unknown>;
    /**
     * Checks the syntax of a script.
     *
     * ### Example
     * "result": { "qErrors": [ { "qErrLen": 3, "qTabIx": 0, "qLineInTab": 0, "qColInLine": 0, "qTextPos": 0 }, { "qErrLen": 5, "qTabIx": 0, "qLineInTab": 0, "qColInLine": 1, "qTextPos": 4, "qSecondaryFailure": true } ] }
     * <div class=note>The first area is the primary error area, the second area is the secondary error area. The second area is optional and is shown only if qSecondaryFailure is set to true. The second area ends when the next statement in the script begins.</div>
     * The list of syntax errors in the script.
     * If there are no errors, the engine returns:
     * If there are errors, the engine returns the following properties in the response:
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Description</th>
     * <th>Type</th>
     * </tr>
     * <tr>
     * <td>qErrLen</td>
     * <td>Length of the word where the error is located.</td>
     * <td>Integer</td>
     * </tr>
     * <tr>
     * <td>qTabIx</td>
     * <td>Number of the faulty section.</td>
     * <td>Integer</td>
     * </tr>
     * <tr>
     * <td>qLineInTab</td>
     * <td>Line number in the section where the error is located.</td>
     * <td>Integer</td>
     * </tr>
     * <tr>
     * <td>qColInLine</td>
     * <td>Position of the erroneous text from the beginning of the line.</td>
     * <td>Integer</td>
     * </tr>
     * <tr>
     * <td>qTextPos</td>
     * <td>Position of the erroneous text from the beginning of the script.</td>
     * <td>Integer</td>
     * </tr>
     * <tr>
     * <td>qSecondaryFailure</td>
     * <td>The default value is false.</td>
     * <td>Boolean</td>
     * </tr>
     * </table>
     *
     * Stability: *locked*
     */
    checkScriptSyntax: () => Promise<ScriptSyntaxError[]>;
    /**
     * Clear selections in fields for current state. Locked fields are not cleared by default.
     *
     * Parameters:
     *
     * - `lockedAlso`   -   When true, clears the selection for locked fields.
     * - `stateName`    -   Alternate state name. When set, applies to alternate state instead of current
     *
     * Stability: *locked*
     */
    clearAll: (lockedAlso?: boolean, stateName?: string) => Promise<void>;
    /**
     * Clear the soft properties of all generic objects in the app
     *
     * Stability: *experimental*
     */
    clearAllSoftPatches: () => Promise<void>;
    /**
     * Clears entirely the undo and redo buffer.
     *
     * Stability: *locked*
     */
    clearUndoBuffer: () => Promise<void>;
    /**
     * Clones a bookmark.
     * <div class=note>The identifier is set by the engine.</div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the object to clone.
     *
     * Stability: *locked*
     */
    cloneBookmark: (id: string) => Promise<string>;
    /**
     * Clones a dimension.
     *
     * <div class=note>The identifier is set by the engine.</div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the object to clone.
     *
     * Stability: *locked*
     */
    cloneDimension: (id: string) => Promise<string>;
    /**
     * Clones a measure.
     *
     * <div class=note>The identifier is set by the engine.</div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the object to clone.
     *
     * Stability: *locked*
     */
    cloneMeasure: (id: string) => Promise<string>;
    /**
     * Clones root level objects, such as sheets and stories. The CloneObject method works for both app objects and child objects.
     * When you clone an object that contains children, the children are cloned as well.
     * If you for example want to clone a visualization, you must provide the qID of the root object, in this case the sheet since CloneObject clones root level objects.
     * <div class=note>It is not possible to clone a session object.</div>
     *
     * <div class=note>The identifier is set by the engine.</div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the object to clone. The identifier must be a root object.
     *
     * Stability: *locked*
     */
    cloneObject: (id: string) => Promise<string>;
    /**
     * Commits the draft of an object that was previously created by invoking the _CreateDraft method_.
     * Committing a draft replaces the corresponding published object.
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the draft to commit.
     *
     * @deprecated: This will be removed in a future version
     *
     * Stability: *locked*
     */
    commitDraft: (id: string) => Promise<void>;
    /**
     * Commits the current script version so that any future changes will be part of a new version.
     *
     * Parameters:
     *
     * - `commitMessage`   -   Name of the version.
     * <div class=note> Only applicable to QCS. </div>
     *
     * Stability: *experimental*
     */
    commitScript: (commitMessage?: string) => Promise<void>;
    /**
     * Creates a bookmark.
     *
     * Parameters:
     *
     * - `prop`   -   Properties for the object.
     *
     * Stability: *locked*
     */
    createBookmark: (prop: GenericBookmarkProperties) => Promise<GenericBookmarkRpcObject>;
    /**
     * Creates a bookmark with softpatches.
     *
     * Parameters:
     *
     * - `prop`               -   Properties for the object.
     * - `objectIdsToPatch`   -   Add softpatches for this objects if available. If empty all softpatches are added to the bookmark.
     *
     * Stability: *experimental*
     */
    createBookmarkEx: (prop: GenericBookmarkProperties, objectIdsToPatch?: string[]) => Promise<GenericBookmarkRpcObject>;
    /**
     * Creates a connection.
     * A connection indicates from which data source the data should be taken.
     *
     * Parameters:
     *
     * - `connection`   -   Information about the connection.
     *
     * Stability: *locked*
     */
    createConnection: (connection: Connection) => Promise<string>;
    /**
     * Creates a master dimension.
     * A master dimension is stored in the library of an app and can be used in many objects. Several generic objects can contain the same dimension.
     *
     * Parameters:
     *
     * - `prop`   -   Information about the properties.
     *
     * Stability: *locked*
     */
    createDimension: (prop: GenericDimensionProperties) => Promise<GenericDimensionRpcObject>;
    /**
     * Creates a draft of an object.
     * This method can be used to create a draft of a sheet or a story that is published. This is a way to continue working on a sheet or a story that is published.
     * Replace the published object by the content of the draft by invoking the _CommitDraft method_.
     *
     * <div class=note>The identifier is set by the engine.</div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the object to create a draft from.
     *
     * @deprecated: This will be removed in a future version
     *
     * Stability: *locked*
     */
    createDraft: (id: string) => Promise<string>;
    /**
     * Creates a master measure.
     * A master measure is stored in the library of an app and can be used in many objects. Several generic objects can contain the same measure.
     *
     * Parameters:
     *
     * - `prop`   -   Information about the properties.
     *
     * Stability: *locked*
     */
    createMeasure: (prop: GenericMeasureProperties) => Promise<GenericMeasureRpcObject>;
    /**
     * Creates a generic object at app level. For more information on generic objects, see _Generic object_.
     * It is possible to create a generic object that is linked to another object.
     * A linked object is an object that points to a linking object. The linking object is defined in the properties of the linked object (in _qExtendsId_ ).
     * The linked object has the same properties as the linking object.
     * <div class=note>The linking object cannot be a transient object.</div>
     *
     * Parameters:
     *
     * - `prop`   -   Information about the object.
     *
     * Stability: *locked*
     */
    createObject: <CustomProperties = DefaultGenericObjectProperties, CustomGenericObject = GenericObjectRpcObject>(prop: CustomProperties) => Promise<CustomGenericObject>;
    /**
     * Creates a transient object. For example, you can use a transient object to create an app overview or a story overview.
     * It is possible to create a transient object that is linked to another object.
     * A linked object is an object that points to a linking object. The linking object is defined in the properties of the linked object (in _qExtendsId_ ).
     * The linked object has the same properties as the linking object.
     * <div class=note>The linking object cannot be a transient object.</div>
     *
     * Parameters:
     *
     * - `prop`   -   Information about the object.
     *
     * Stability: *locked*
     */
    createSessionObject: <CustomProperties = DefaultGenericObjectProperties, CustomGenericObject = GenericObjectRpcObject>(prop: CustomProperties) => Promise<CustomGenericObject>;
    /**
     * Creates a transient variable.
     * <div class=note>To set some properties to the variable, use the _SetProperties method_. </div>
     *
     * ### Definition
     * A variable in Qlik Sense is a named entity, containing a data value. This value can be static or be the result of a calculation. A variable acquires its value at the same time that the variable is created or after when updating the properties of the variable. Variables can be used in bookmarks and can contain numeric or alphanumeric data. Any change made to the variable is applied everywhere the variable is used.
     * When a variable is used in an expression, it is substituted by its value or the variable's definition.
     *
     * ### Example
     * The variable _x_ contains the text string _Sum(Sales)_ .
     * In a chart, you define the expression _$(x)/12_ . The effect is exactly the same as having the chart expression _Sum(Sales)/12_ .
     * However, if you change the value of the variable _x_ to _Sum(Budget)_ , the data in the chart are immediately recalculated with the expression interpreted as _Sum(Budget)/12_ .
     *
     * Parameters:
     *
     * - `prop`   -   Name of the variable. Variable names are case sensitive.
     *
     * Stability: *locked*
     */
    createSessionVariable: (prop: GenericVariableProperties) => Promise<GenericVariableRpcObject>;
    /**
     * Create temporary bookmark
     * <div class=note>CreateTemporaryBookmark method is only supported in SaaS Editions of Qlik Sense.</div>
     *
     * Parameters:
     *
     * - `options`            -   Options for the temporary bookmark
     * - `objectIdsToPatch`   -   Add softpatches for these objects to the bookmark if available. If IncludePatches is true, softpatches are included for all objects.
     * Any session objects included are also added to the bookmark. IncludePatches has no effect on the patching of session objects.
     *
     * Stability: *locked*
     */
    createTemporaryBookmark: (options: NxTempBookmarkOptions, objectIdsToPatch?: string[]) => Promise<unknown>;
    /**
     * Creates a variable.
     *
     * Parameters:
     *
     * - `name`   -   Name of the variable. Variable names are case sensitive.
     *
     * @deprecated: Use _Doc::CreateVariableEx_ method instead
     *
     * Stability: *locked*
     */
    createVariable: (name: string) => Promise<boolean>;
    /**
     * Creates a variable.
     * To create a variable via a script, you need to use the _SetScript method_. For more information, see _Create a variable_.
     * <div class=note>To set some properties to the variable, use the _SetProperties method_. </div> <div class=note>In a published app, only transient variables can be created. See _CreateSessionVariable method_. </div>
     *
     * ### Definition
     * A variable in Qlik Sense is a named entity, containing a data value. This value can be static or be the result of a calculation. A variable acquires its value at the same time that the variable is created or after when updating the properties of the variable. Variables can be used in bookmarks and can contain numeric or alphanumeric data. Any change made to the variable is applied everywhere the variable is used.
     * When a variable is used in an expression, it is substituted by its value or the variable's definition.
     *
     * ### Example
     * The variable _x_ contains the text string _Sum(Sales)_ .
     * In a chart, you define the expression _$(x)/12_ . The effect is exactly the same as having the chart expression _Sum(Sales)/12_ .
     * However, if you change the value of the variable _x_ to _Sum(Budget)_ , the data in the chart are immediately recalculated with the expression interpreted as _Sum(Budget)/12_ .
     *
     * Parameters:
     *
     * - `prop`   -   Name of the variable. Variable names are case sensitive and must be unique.
     *
     * Stability: *locked*
     */
    createVariableEx: (prop: GenericVariableProperties) => Promise<GenericVariableRpcObject>;
    /**
     * Deletes a connection.
     * <div class=note>In Qlik Sense Enterprise, there is an additional file connection named _AttachedFiles_ . The AttachedFiles connection can only be removed by the administrator of the system. </div>
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection to remove.
     *
     * Stability: *locked*
     */
    deleteConnection: (connectionId: string) => Promise<void>;
    /**
     * Removes a bookmark.
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the bookmark.
     *
     * Stability: *locked*
     */
    destroyBookmark: (id: string) => Promise<boolean>;
    /**
     * Removes a dimension.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the dimension to remove.
     *
     * Stability: *locked*
     */
    destroyDimension: (id: string) => Promise<boolean>;
    /**
     * Removes the draft of an object.
     * The children of the draft object (if any) are removed as well.
     * This method can be used to cancel the work on the draft of an object. For example, if you had created a draft of a sheet that is published, you might not want anymore to replace the published sheet.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `id`         -   Identifier of the draft object to remove.
     * - `sourceId`   -   Identifier of the source object (the object from which a draft was created).
     *
     * @deprecated: This will be removed in a future version
     *
     * Stability: *locked*
     */
    destroyDraft: (id: string, sourceId: string) => Promise<boolean>;
    /**
     * Removes a generic measure.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the measure to remove.
     *
     * Stability: *locked*
     */
    destroyMeasure: (id: string) => Promise<boolean>;
    /**
     * Removes an app object.
     * The children of the object (if any) are removed as well.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the object to remove.
     *
     * Stability: *locked*
     */
    destroyObject: (id: string) => Promise<boolean>;
    /**
     * Removes a transient object.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the transient object to remove.
     *
     * Stability: *locked*
     */
    destroySessionObject: (id: string) => Promise<boolean>;
    /**
     * Removes a transient variable.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the variable.
     *
     * Stability: *locked*
     */
    destroySessionVariable: (id: string) => Promise<boolean>;
    /**
     * Removes a transient variable.
     *
     * <div class=note>**qSuccess** is set to true if the operation is successful. </div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the variable.
     *
     * Stability: *locked*
     */
    destroySessionVariableById: (id: string) => Promise<boolean>;
    /**
     * Removes a transient variable.
     *
     * <div class=note>**qSuccess** is set to true if the operation is successful. </div>
     *
     * Parameters:
     *
     * - `name`   -   Name of the variable.
     *
     * Stability: *locked*
     */
    destroySessionVariableByName: (name: string) => Promise<boolean>;
    /**
     * Removes a variable.
     * Script-defined variables cannot be removed using the _DestroyVariableById method_ or the _DestroyVariableByName method_. For more information, see _Remove a variable_.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the variable.
     *
     * Stability: *locked*
     */
    destroyVariableById: (id: string) => Promise<boolean>;
    /**
     * Removes a variable.
     * Script-defined variables cannot be removed using the _DestroyVariableById method_ or the _DestroyVariableByName method_. For more information, see _Remove a variable_.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `name`   -   Name of the variable.
     *
     * Stability: *locked*
     */
    destroyVariableByName: (name: string) => Promise<boolean>;
    /**
     * Reloads the script that is set in an app.
     *
     * ### Logs
     * When this method is called, audit activity logs are produced to track the user activity.
     * In the case of errors, both audit activity logs and system services logs are produced.
     * The log files are named as follows:
     * <table>
     * <tr>
     * <th>Audit activity log</th>
     * <th>System service log</th>
     * </tr>
     * <tr>
     * <td>   &lt;MachineName&gt;_AuditActivity_Engine.txt     in Qlik Sense Enterprise<br>   &lt;MachineName&gt;_AuditActivity_Engine.log     in Qlik Sense Desktop</td>
     * <td>   &lt;MachineName&gt;_Service_Engine.txt     in Qlik Sense Enterprise<br>   &lt;MachineName&gt;_Service_Engine.log     in Qlik Sense Desktop</td>
     * </tr>
     * </table>
     *
     * ### Where to find the log files
     * The location of the log files depends on whether you have installed Qlik Sense Enterprise or Qlik Sense Desktop.
     * <table>
     * <tr>
     * <th>Qlik Sense Enterprise </th>
     * <th>Qlik Sense Desktop </th>
     * </tr>
     * <tr>
     * <td>   %ProgramData%/Qlik/Sense/Log/Engine    </td>
     * <td>   %UserProfile%/Documents/Qlik/Sense/Log    </td>
     * </tr>
     * </table>
     *
     * Parameters:
     *
     * - `mode`      -   Error handling mode
     * One of:
     * * 0: for default mode.
     * * 1: for ABEND; the reload of the script ends if an error occurs.
     * * 2: for ignore; the reload of the script continues even if an error is detected in the script.
     * - `partial`   -   Set to true for partial reload.
     * The default value is false.
     * - `debug`     -   Set to true if debug breakpoints are to be honored. The execution of the script will be in debug mode.
     * The default value is false.
     *
     * Stability: *locked*
     */
    doReload: (mode?: number, partial?: boolean, debug?: boolean) => Promise<boolean>;
    /**
     * Reloads the script that is set in an app and returns the path to the script log file.
     * <div class=note>A log file is created per reload.</div>
     *
     * ### Logs
     * When this method is called, audit activity logs are produced to track the user activity.
     * In the case of errors, both audit activity logs and system services logs are produced.
     * The log files are named as follows:
     * <table>
     * <tbody>
     * <tr>
     * <th>Audit activity log</th>
     * <th>System service log</th>
     * </tr>
     * <tr>
     * <td>   &lt; MachineName&gt;    AuditActivity   Engine.txt     in Qlik Sense Enterprise<br>   &lt; MachineName&gt;    AuditActivity   Engine.log     in Qlik Sense Desktop</td>
     * <td>   &lt; MachineName&gt;    Service   Engine.txt     in Qlik Sense Enterprise<br>   &lt; MachineName&gt;    Service   Engine.log     in Qlik Sense Desktop</td>
     * </tr>
     * </tbody>
     * </table>
     *
     * ### Where to find the log files
     * The location of the log files depends on whether you have installed Qlik Sense Enterprise or Qlik Sense Desktop.
     * <table>
     * <tbody>
     * <tr>
     * <th>Qlik Sense Enterprise </th>
     * <th>Qlik Sense Desktop </th>
     * </tr>
     * <tr>
     * <td>   %ProgramData%/Qlik/Sense/Log/Engine    </td>
     * <td>   %UserProfile%/Documents/Qlik/Sense/Log    </td>
     * </tr>
     * </tbody>
     * </table>
     *
     * ### DoReloadExParams
     * <table>
     * <tbody>
     * <tr>
     * <th>Name</th>
     * <th>Description</th>
     * <th>Type</th>
     * </tr>
     * <tr>
     * <td>qMode</td>
     * <td>Error handling mode<br>One of:<br>
     * <ul>
     * <li>0: for default mode.</li>
     * <li>1: for ABEND; the reload of the script ends if an error occurs.</li>
     * <li>2: for ignore; the reload of the script continues even if an error is detected in the script.</li>
     * </ul>
     * </td>
     * <td>Integer</td>
     * </tr>
     * <tr>
     * <td>qPartial</td>
     * <td>Set to true for partial reload.<br>The default value is false.</td>
     * <td>Boolean</td>
     * </tr>
     * <tr>
     * <td>qDebug</td>
     * <td>Set to true if debug breakpoints are to be honored. The execution of the script will be in debug mode.<br>The default value is false.</td>
     * <td>Boolean</td>
     * </tr>
     * </tbody>
     * </table>
     *
     * ### DoReloadExResult
     * <table>
     * <tbody>
     * <tr>
     * <th>Name</th>
     * <th>Description</th>
     * <th>Type</th>
     * </tr>
     * <tr>
     * <td>qSuccess</td>
     * <td>The operation is successful if    qSuccess     is set to True.</td>
     * <td>Boolean</td>
     * </tr>
     * <tr>
     * <td>qScriptLogFile</td>
     * <td>Path to the script log file.</td>
     * <td>String</td>
     * </tr>
     * </tbody>
     * </table>
     *
     * If the data load has successfully finished, no matter how the indexing behaves, _true_ is returned. This happens even if there is a timeout, a memory limit is reached or any other error occurs during the indexing.
     *
     * Stability: *locked*
     */
    doReloadEx: (params?: DoReloadExParams) => Promise<DoReloadExResult>;
    /**
     * Saves an app. All objects and data in the data model are saved.
     *
     * Parameters:
     *
     * - `fileName`   -   Name of the file to save.
     *
     * Stability: *locked*
     */
    doSave: (fileName?: string) => Promise<void>;
    /**
     * Evaluates an expression and returns the result as a string.
     *
     * ### Example
     * The client sends:
     * ```
     * {
     *     "handle": 1,
     *     "method": "Evaluate",
     *     "params": {
     *         "qExpression": "Sum(Holes)"
     *     },
     *     "id": 6,
     *     "jsonrpc": "2.0"
     * }
     * ```
     * The engine returns:
     * ```
     * {
     *     "jsonrpc": "2.0",
     *     "id": 6,
     *     "result": {
     *         "qReturn": "361716"
     *     }
     * }
     * ```
     *
     * Parameters:
     *
     * - `expression`   -   Expression to evaluate.
     *
     * Stability: *locked*
     */
    evaluate: (expression: string) => Promise<string>;
    /**
     * Evaluates an expression and returns the result as a dual.
     *
     * ### Example
     * The client sends:
     * ```
     * {
     *     "handle": 1,
     *     "method": "EvaluateEx",
     *     "params": {
     *         "qExpression": "Sum(Holes)"
     *     },
     *     "id": 7,
     *     "jsonrpc": "2.0"
     * }
     * ```
     * The engine returns:
     * ```
     * {
     *     "jsonrpc": "2.0",
     *     "id": 7,
     *     "result": {
     *         "qReturn": "361716"
     *     }
     * }
     * ```
     *
     * Parameters:
     *
     * - `expression`   -   Expression to evaluate.
     *
     * Stability: *locked*
     */
    evaluateEx: (expression: string) => Promise<FieldValue>;
    /**
     * Expands the expression.
     *
     * Parameters:
     *
     * - `expression`   -   The expression string to expand.
     *
     * Stability: *locked*
     */
    expandExpression: (expression: string) => Promise<string>;
    /**
     * Applies a bookmark to reduce (slice) the data on. Returns a url and file size to the reduced application. Section Access is always applied.
     * <div class=note>This API is only available on Sense Enterprise on Windows</div>
     *
     * Parameters:
     *
     * - `options`   -   BookmarkId used to reduced the app on and an expire time.
     *
     * Stability: *locked*
     */
    exportReducedData: (options?: NxDownloadOptions) => Promise<NxDownloadInfo>;
    /**
     * Retrieves any fields that belong to the same archipelago as the specified field and that match at least one of the specified tags.
     * <div class=note>Tags set by Qlik Sense are prefixed by the _$_ sign.  </div>
     *
     * Parameters:
     *
     * - `fieldName`   -   Name of the field.
     * This method looks for fields that belong to the same archipelago as this specified field.
     * - `tags`        -   List of tags.
     * This method looks for fields that match at least one of the tags in this list.
     *
     * Stability: *locked*
     */
    findMatchingFields: (fieldName: string, tags: string[]) => Promise<NxMatchingFieldInfo[]>;
    /**
     * Loads the next logical operation (if any).
     *
     * Stability: *locked*
     */
    forward: () => Promise<void>;
    /**
     * Returns the number of entries on the Forward stack.
     *
     * Stability: *locked*
     */
    forwardCount: () => Promise<number>;
    /**
     * Returns the identifier and the type of any generic object in the app.
     *
     * Stability: *locked*
     */
    getAllInfos: () => Promise<NxInfo[]>;
    /**
     * Evaluates an app.
     * Returns dynamic properties (if any) in addition to the engine (fixed) properties.
     * A data set is returned.
     *
     * Stability: *locked*
     */
    getAppLayout: () => Promise<NxAppLayout>;
    /**
     * Gets the properties of an app.
     *
     * Stability: *locked*
     */
    getAppProperties: () => Promise<NxAppProperties>;
    /**
     * Computes a set of association scores for each pair of fields between two given tables that have been loaded in an app.
     * When a table contains some synthetic keys, all fields in the synthetic key tables are analyzed against fields in other tables. To denote that a field is a synthetic key, the field name is prefixed by _[Synthetic Key]:_ .
     *
     * Parameters:
     *
     * - `table1`   -   Name of the first table.
     * - `table2`   -   Name of the second table.
     *
     * Stability: *locked*
     */
    getAssociationScores: (table1: string, table2: string) => Promise<AssociationScore[]>;
    /**
     * Returns the handle of a bookmark.
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the bookmark.
     *
     * Stability: *locked*
     */
    getBookmark: (id: string) => Promise<GenericBookmarkRpcObject>;
    /**
     * Returns all bookmarks compatible with options.
     *
     * Parameters:
     *
     * - `options`   -   Bookmark type filter and requested properties.
     *
     * Stability: *locked*
     */
    getBookmarks: <QData>(options: NxGetBookmarkOptions) => Promise<NxContainerEntry<QData>[]>;
    /**
     * Retrieves a connection and returns:
     * * The creation time of the connection.
     * * The identifier of the connection.
     * * The type of the connection.
     * * The name of the connection.
     * * The connection string.
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection.
     *
     * Stability: *locked*
     */
    getConnection: (connectionId: string) => Promise<Connection>;
    /**
     * Lists the connections in an app.
     * <div class=note>In Qlik Sense Enterprise, there is an additional file connection named _AttachedFiles_ . This connection is stored in the Qlik Sense repository. </div>
     *
     * Stability: *locked*
     */
    getConnections: () => Promise<Connection[]>;
    /**
     * Lists the content libraries.
     * To differentiate a global content library from an app specific content library, you can check the property _qAppSpecific_ . If this property is set to true, it means that the content library is app specific.
     * <div class=note>There is always one specific content library per app.</div>
     *
     * ### Qlik Sense
     * Returns the global content libraries and the app specific content library.
     * When using Qlik Sense, you can have more than one global content library. The global content libraries are common to all apps in the Qlik Sense repository.
     * By default, there is one global content library named _Default_ .
     *
     * ### Qlik Sense Desktop
     * Returns the global content library and the app specific content library from the disk.
     *
     * Stability: *locked*
     */
    getContentLibraries: () => Promise<ContentLibraryList>;
    /**
     * Gives information about an ODBC, OLEDB or CUSTOM connection. See _Outputs_ for more details.
     *
     * Parameters:
     *
     * - `connectionId`   -   Name of the connection.
     *
     * Stability: *locked*
     */
    getDatabaseInfo: (connectionId: string) => Promise<DatabaseInfo>;
    /**
     * Lists the owners of a database for a ODBC, OLEDB or CUSTOM connection.
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection.
     * - `database`       -   Name of the database.
     *
     * Stability: *locked*
     */
    getDatabaseOwners: (connectionId: string, database?: string) => Promise<DatabaseOwner[]>;
    /**
     * Lists the fields inside a table of a database for a ODBC, OLEDB or CUSTOM connection.
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection.
     * - `database`       -   Name of the database.
     * If _qDatabase_ is not set then _qOwner_ must be set.
     * - `owner`          -   Owner of the database.
     * If _qOwner_ is not set then _qDatabase_ must be set.
     * - `table`          -   Name of the table.
     *
     * Stability: *locked*
     */
    getDatabaseTableFields: (connectionId: string, database: string | undefined, owner: string | undefined, table: string) => Promise<DataField[]>;
    /**
     * Retrieves the values of the specified table of a database for a ODBC, OLEDB or CUSTOM connection.
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection.
     * - `database`       -   Name of the database.
     * If _qDatabase_ is not set then _qOwner_ must be set.
     * - `owner`          -   Owner of the database.
     * If _qOwner_ is not set then _qDatabase_ must be set.
     * - `table`          -   Name of the table.
     * - `conditions`     -
     *
     * Stability: *locked*
     */
    getDatabaseTablePreview: (connectionId: string, database: string | undefined, owner: string | undefined, table: string, conditions?: FilterInfo) => Promise<unknown>;
    /**
     * Lists the tables inside a database for a ODBC, OLEDB or CUSTOM connection.
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection.
     * - `database`       -   Name of the database.
     * If _qDatabase_ is not set then _qOwner_ must be set.
     * - `owner`          -   Owner of the database.
     * If _qOwner_ is not set then _qDatabase_ must be set.
     *
     * Stability: *locked*
     */
    getDatabaseTables: (connectionId: string, database?: string, owner?: string) => Promise<DataTable[]>;
    /**
     * Lists the databases inside a ODBC, OLEDB or CUSTOM data source.
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection.
     *
     * Stability: *locked*
     */
    getDatabases: (connectionId: string) => Promise<Database[]>;
    /**
     * Returns the handle of a dimension.
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the dimension.
     *
     * Stability: *locked*
     */
    getDimension: (id: string) => Promise<GenericDimensionRpcObject>;
    /**
     * Creates a script that contains one section. This section contains **SET** statements that give localized information from the regional settings of the computer.
     * <div class=note>The computer regional settings are retrieved when the engine starts.</div>
     *
     * Parameters:
     *
     * - `localizedMainSection`   -   Name of the script section.
     * The default value is _Main_ .
     *
     * Stability: *locked*
     */
    getEmptyScript: (localizedMainSection?: string) => Promise<string>;
    /**
     * Gets the current Backus-Naur Form (BNF) grammar of the Qlik chart expressions supported within a given App.
     *
     * Stability: *experimental*
     */
    getExpressionBNF: () => Promise<unknown>;
    /**
     * Gets a string hash calculated from the current Backus-Naur Form (BNF) grammar  of the Qlik chart expressions supported within a given App.
     *
     * Stability: *experimental*
     */
    getExpressionBNFHash: () => Promise<string>;
    /**
     * Retrieves the variables that are tagged as favorite.
     *
     * Stability: *locked*
     */
    getFavoriteVariables: () => Promise<string[]>;
    /**
     * Returns a handle to a field.
     *
     * Parameters:
     *
     * - `fieldName`   -   Name of the field.
     * - `stateName`   -   Name of the alternate state.
     * Default state is current selections.
     *
     * Stability: *locked*
     */
    getField: (fieldName: string, stateName?: string) => Promise<FieldRpcObject>;
    /**
     * Get sample values from either a column in a table or from a field.
     * Supports wildcard matches in tables or field names:
     * - '*' for zero or more characters.
     * - '?' for one character.
     *
     * Parameters:
     *
     * - `fieldsOrColumnsWithWildcards`   -   Pairs of table (optionally) and field names. Support wildcard matches.
     * - `maxNumberOfValues`              -   Max number of sample values returned. Depending on the column or field size the number of returned samples can be less than MaxNumberOfValues. If MaxNumberOfValues is negative all sample values are returned.
     * - `randSeed`                       -   Optional. Sets the random number seed. Should only be set for test purposes.
     *
     * Stability: *locked*
     */
    getFieldAndColumnSamples: (fieldsOrColumnsWithWildcards: FieldOrColumn[], maxNumberOfValues: number, randSeed?: number) => Promise<SampleResult[]>;
    /**
     * Returns the description of a field.
     *
     * Parameters:
     *
     * - `fieldName`   -   Name of the field.
     *
     * Stability: *locked*
     */
    getFieldDescription: (fieldName: string) => Promise<FieldDescription>;
    /**
     * Find the field-on-the-fly by passing its readable name.
     *
     * Parameters:
     *
     * - `readableName`   -   Readable name of the field-on-the-fly.
     *
     * Stability: *locked*
     */
    getFieldOnTheFlyByName: (readableName: string) => Promise<string>;
    /**
     * Retrives any fields from an expression.
     *
     * Parameters:
     *
     * - `expr`   -   Expression to get fields from.
     *
     * Stability: *locked*
     */
    getFieldsFromExpression: (expr: string) => Promise<string[]>;
    /**
     * Returns a list of resource ids (QRI) for fields that belongs to the datamodel.
     * Key fields (that belongs to multiple tables), returns one resource identifier per table.
     * <div class=note>GetFieldsResourceIds method is only supported in SaaS Editions of Qlik Sense.</div>
     *
     * Parameters:
     *
     * - `fieldNames`   -   List of fields names that resource ids should be returned from.
     *
     * Stability: *locked*
     */
    getFieldsResourceIds: (fieldNames: string[]) => Promise<NxFieldResourceId[]>;
    /**
     * Lists the fields of a table for a folder connection.
     *
     * ### FileType
     * Recognized file formats are:
     * * _CSV_ for Delimited
     * * _FIX_ for Fixed Record
     * * _DIF_ for Data Interchange Format
     * * _EXCEL_BIFF_ for Microsoft Excel (XLS)
     * * _EXCEL_OOXML_ for Microsoft Excel (XLSX)
     * * _HTML_ for HTML
     * * _QVD_ for QVD file
     * * _XML_ for XML
     * * _QVX_ for QVX file
     * * _JSON_ for JSON format
     * * _KML_ for KML file
     * * _PARQUET_ for PARQUET file
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection.
     * - `relativePath`   -   Path of the connection file.
     * - `dataFormat`     -   Type of the file.
     * - `table`          -   Name of the table.
     * This parameter must be set for _XLS_ , _XLSX_ , _HTML  _ and _XML_ files.
     *
     * Stability: *locked*
     */
    getFileTableFields: (connectionId: string, relativePath: string | undefined, dataFormat: FileDataFormat, table: string) => Promise<unknown>;
    /**
     * Lists the values in a table for a folder connection.
     *
     * ### FileType
     * Recognized file formats are:
     * * _CSV_ for Delimited
     * * _FIX_ for Fixed Record
     * * _DIF_ for Data Interchange Format
     * * _EXCEL_BIFF_ for Microsoft Excel (XLS)
     * * _EXCEL_OOXML_ for Microsoft Excel (XLSX)
     * * _HTML_ for HTML
     * * _QVD_ for QVD file
     * * _XML_ for XML
     * * _QVX_ for QVX file
     * * _JSON_ for JSON format
     * * _KML_ for KML file
     * * _PARQUET_ for PARQUET file
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection.
     * - `relativePath`   -   Path of the connection file.
     * - `dataFormat`     -   Type of the file.
     * - `table`          -   Name of the table.
     * This parameter must be set for _XLS_ , _XLSX_ , _HTML  _ and _XML_ files.
     *
     * Stability: *locked*
     */
    getFileTablePreview: (connectionId: string, relativePath: string | undefined, dataFormat: FileDataFormat, table: string) => Promise<unknown>;
    /**
     * Lists the tables for a folder connection.
     *
     * ### FileType
     * Recognized file formats are:
     * * _CSV_ for Delimited
     * * _FIX_ for Fixed Record
     * * _DIF_ for Data Interchange Format
     * * _EXCEL_BIFF_ for Microsoft Excel (XLS)
     * * _EXCEL_OOXML_ for Microsoft Excel (XLSX)
     * * _HTML_ for HTML
     * * _QVD_ for QVD file
     * * _XML_ for XML
     * * _QVX_ for QVX file
     * * _JSON_ for JSON format
     * * _KML_ for KML file
     * * _PARQUET_ for PARQUET file
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection.
     * - `relativePath`   -   Path of the connection file.
     * - `dataFormat`     -   Type of the file.
     *
     * Stability: *locked*
     */
    getFileTables: (connectionId: string, relativePath: string | undefined, dataFormat: FileDataFormat) => Promise<DataTable[]>;
    /**
     * Lists the tables and fields of a JSON or XML file for a folder connection.
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection.
     * - `relativePath`   -   Path of the connection file.
     * - `dataFormat`     -   Type of the file.
     *
     * Stability: *locked*
     */
    getFileTablesEx: (connectionId: string, relativePath: string | undefined, dataFormat: FileDataFormat) => Promise<DataTableEx[]>;
    /**
     * Lists the items for a folder connection.
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection.
     * - `relativePath`   -   Relative path of the connection.
     *
     * Stability: *locked*
     */
    getFolderItemsForConnection: (connectionId: string, relativePath?: string) => Promise<FolderItem[]>;
    getGroupStates: () => Promise<GroupState[]>;
    /**
     * Gets the content of a file.
     *
     * Parameters:
     *
     * - `path`   -   ["lib://CONNECTION_NAME\\\&lt;the name of the file you want to use&gt;.txt"]
     * OR
     * ["lib://Connection_Name\\\&lt;Folder under your connection&gt;\\\&lt;the name of the file you want to use&gt;.txt"]
     * [ ] should be used when the first variable contains a lib reference.
     *
     * Stability: *locked*
     */
    getIncludeFileContent: (path: string) => Promise<string>;
    /**
     * Returns the content of a library.
     *
     * ### Global content library
     * In Qlik Sense Desktop, the content files are retrieved from:
     * _%userprofile%\Documents\Qlik\Sense\Content\Default_
     * In Qlik Sense Enterprise, the content files are retrieved from the Qlik Sense repository.
     *
     * ### App specific content library
     * The embedded files are returned.
     *
     * Parameters:
     *
     * - `name`   -   Name of the content library.
     * It corresponds to the property _qContentLibraryListItem/qName_ returned by the _GetContentLibraries method_.
     *
     * Stability: *locked*
     */
    getLibraryContent: (name: string) => Promise<StaticContentList>;
    /**
     * Gets the lineage information of the app. The lineage information includes the LOAD and STORE statements from the data load script associated with this app.
     * An array of lineage information.
     *
     * Stability: *locked*
     */
    getLineage: () => Promise<LineageInfo[]>;
    /**
     * Returns locale information.
     *
     * Stability: *locked*
     */
    getLocaleInfo: () => Promise<LocaleInfo>;
    /**
     * Returns a list of table states.
     *
     * The following states apply:
     * * 0 The table is not loosely coupled.
     * * 1 The table is loosely coupled.
     * * 2 The table is loosely coupled and cannot be changed to another state using the Qlik Engine API.
     *
     * <div class=note>The last three values in the vector are for internal use.</div>
     * <div class=note>In case of circular references, the engine automatically sets the table state to loosely coupled to avoid creating loops.</div>
     *
     * Stability: *locked*
     */
    getLooselyCoupledVector: () => Promise<number[]>;
    /**
     * Retrieves any fields that match all of the specified tags or just one of them in the data model of an app.
     * <div class=note>Tags set by Qlik Sense are prefixed by the _$_ sign.  </div>
     *
     * Parameters:
     *
     * - `tags`                -   List of tags.
     * The _GetMatchingFields_ method looks for fields that match one or all of the tags in this list, depending on the value of _qMatchingFieldMode_ .
     * - `matchingFieldMode`   -   Matching field mode.
     * The default value is MATCHINGFIELDMODE_MATCH_ALL.
     *
     * One of:
     * * MATCHINGFIELDMODE_MATCH_ALL
     * * MATCHINGFIELDMODE_MATCH_ONE
     *
     * Stability: *locked*
     */
    getMatchingFields: (tags: string[], matchingFieldMode?: string) => Promise<NxMatchingFieldInfo[]>;
    /**
     * Returns the handle of a measure.
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the measure.
     *
     * Stability: *locked*
     */
    getMeasure: (id: string) => Promise<GenericMeasureRpcObject>;
    /**
     * Returns the handle of a measure with a label.
     * If multiple measures has the same label the first is returned.
     *
     * Parameters:
     *
     * - `label`   -   is the label of the measure to be returned.
     *
     * Stability: *locked*
     */
    getMeasureWithLabel: (label: string) => Promise<GenericMeasureRpcObject>;
    /**
     * Lists the media files.
     *
     * @deprecated: Use _GetLibraryContent_ method instead
     *
     * Stability: *locked*
     */
    getMediaList: () => Promise<QMediaList>;
    /**
     * Returns the type of the app object and the corresponding handle.
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the object to retrieve.
     *
     * Stability: *locked*
     */
    getObject: <CustomGenericObject = GenericObjectRpcObject>(id: string) => Promise<CustomGenericObject>;
    /**
     * Returns all objects compatible with options.
     *
     * Parameters:
     *
     * - `options`   -   Object type filter and requested properties.
     *
     * Stability: *locked*
     */
    getObjects: <QData>(options: NxGetObjectOptions) => Promise<NxContainerEntry<QData>[]>;
    /**
     * Gets values in script.
     *
     * Stability: *locked*
     */
    getScript: () => Promise<string>;
    /**
     * Lists the breakpoints in the script of an app.
     *
     * Stability: *locked*
     */
    getScriptBreakpoints: () => Promise<EditorBreakpoint[]>;
    /**
     * Gets script and script meta-data.
     *
     * Stability: *locked*
     */
    getScriptEx: () => Promise<AppScript>;
    /**
     * Gets script meta-data.
     *
     * Stability: *experimental*
     */
    getScriptMeta: () => Promise<AppScriptMeta>;
    /**
     * Returns a set analysis expression from active selections or from a saved bookmark. Fields on the fly and Calculated dimensions will not be included in the generated expressions, instead a message indicating 'missing fields' will provided within the expression.
     *   |                       | BookmarkId empty                     | BookmarkId set                                     |
     *   |-----------------------|--------------------------------------|----------------------------------------------------|
     *   |StateName empty (or $) | Default selections state is returned.| Default state ($) in bookmark with id is returned. |
     *   |StateName set          | State selections is returned.        | State in bookmark with id is returned.             |
     *
     * Parameters:
     *
     * - `stateName`    -   Optional. The name of the state to get set analysis expression for. If left empty, the default state will be retrieved.
     * - `bookmarkId`   -   Optional. The Id of the bookmark to get the set analysis expression for. If left empty, the current selection will be retrieved.
     *
     * Stability: *locked*
     */
    getSetAnalysis: (stateName?: string, bookmarkId?: string) => Promise<string>;
    /**
     * Retrieves the data of a specific table.
     *
     * Parameters:
     *
     * - `offset`          -   Position from the top, starting from 0.
     * If the offset is set to 0, the rows starting from the position/index 0 are shown.
     * - `rows`            -   Number of rows to show.
     * - `syntheticMode`   -   If this parameter is set to true, the internal data/table representation is shown. Synthetic fields are present (if any).
     * - `tableName`       -   Name of the table.
     *
     * Stability: *locked*
     */
    getTableData: (offset: number, rows: number, syntheticMode: boolean, tableName: string) => Promise<TableRow[]>;
    /**
     * Returns profile data for a given table.
     *
     * Parameters:
     *
     * - `tableName`   -   Name of the table
     *
     * Stability: *experimental*
     */
    getTableProfileData: (tableName: string) => Promise<TableProfilingData>;
    /**
     * Returns:
     * * The list of tables in an app and the fields inside each table.
     * * The list of derived fields.
     * * The list of key fields.
     *
     * Parameters:
     *
     * - `windowSize`         -   Size of the window that is used to display the results.
     * - `nullSize`           -
     * - `cellHeight`         -   Height of a cell in a table in pixels.
     * - `syntheticMode`      -   One of:
     * * _true_ for internal table viewer:
     * Shows a more detailed view on how the Qlik engine defines the relations between fields and the quality of the keys.
     * * _false_ for source table viewer:
     * Shows the natural relation between fields without reference to synthetic keys and resultant linking synthetic tables. Instead synthetic keys are represented by multiple connectors between tables.
     * - `includeSysVars`     -   If set to true, the system variables are included.
     * - `includeProfiling`   -   If set to true, profiling information is included.
     *
     * Stability: *locked*
     */
    getTablesAndKeys: (windowSize: Size, nullSize: Size, cellHeight: number, syntheticMode: boolean, includeSysVars: boolean, includeProfiling?: boolean) => Promise<unknown>;
    /**
     * Fetches updated variables after a statement execution.
     *
     * <div class=note>If qRefSeqNo and qSetSeqNo are set to 0, it means that the variables were not updated.</div>
     *
     * Stability: *locked*
     */
    getTextMacros: () => Promise<TextMacro[]>;
    /**
     * Returns a handle to a variable.
     *
     * Parameters:
     *
     * - `name`   -   Name of the variable.
     *
     * @deprecated: Use _Doc::GetVariableById_ method or _Doc::GetVariableByName_ method instead
     *
     * Stability: *locked*
     */
    getVariable: (name: string) => Promise<GenericVariableRpcObject>;
    /**
     * Gets the handle of a variable.
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the variable.
     *
     * Stability: *locked*
     */
    getVariableById: (id: string) => Promise<GenericVariableRpcObject>;
    /**
     * Gets the handle of a variable.
     *
     * Parameters:
     *
     * - `name`   -   Name of the variable.
     *
     * Stability: *locked*
     */
    getVariableByName: (name: string) => Promise<GenericVariableRpcObject>;
    getVariables: <QData>(listDef: VariableListDef) => Promise<NxVariableListItem<QData>[]>;
    /**
     * Returns information about the position of the tables in the data model viewer.
     * <div class=note>The position of the broom points and the position of the connection points cannot be retrieved in Qlik Sense.</div>
     *
     * ### Representation of tables, broom points and connection points
     * ![](images/ui_gen_BroomConnectionPoints_dmv.png)<br>
     * The green circles represent the broom points.
     * The red circle represents a connection point.
     *
     * Stability: *locked*
     */
    getViewDlgSaveInfo: () => Promise<TableViewDlgSaveInfo>;
    /**
     * Guesses the data format for a given file.
     * Recognized file formats are:
     * * _CSV_ for Delimited
     * * _FIX_ for Fixed Record
     * * _DIF_ for Data Interchange Format
     * * _EXCEL_BIFF_ for Microsoft Excel (XLS)
     * * _EXCEL_OOXML_ for Microsoft Excel (XLSX)
     * * _HTML_ for HTML
     * * _QVD_ for QVD file
     * * _XML_ for XML
     * * _QVX_ for QVX file
     * * _JSON_ for JSON format
     * * _KML_ for KML file
     * * _PARQUET_ for PARQUET file
     *
     * ### FileType
     * Recognized file formats are:
     * * _CSV_ for Delimited
     * * _FIX_ for Fixed Record
     * * _DIF_ for Data Interchange Format
     * * _EXCEL_BIFF_ for Microsoft Excel (XLS)
     * * _EXCEL_OOXML_ for Microsoft Excel (XLSX)
     * * _HTML_ for HTML
     * * _QVD_ for QVD file
     * * _XML_ for XML
     * * _QVX_ for QVX file
     * * _JSON_ for JSON format
     * * _KML_ for KML file
     * * _PARQUET_ for PARQUET file
     *
     * Parameters:
     *
     * - `connectionId`   -   Identifier of the connection file.
     * - `relativePath`   -   Path of the connection file.
     *
     * Stability: *locked*
     */
    guessFileType: (connectionId: string, relativePath?: string) => Promise<FileDataFormat>;
    /**
     * Locks all selections in fields for current state.
     *
     * Parameters:
     *
     * - `stateName`   -   Alternate state name. When set, applies to alternate state instead of current.
     *
     * Stability: *locked*
     */
    lockAll: (stateName?: string) => Promise<void>;
    /**
     * Updates a connection.
     * <div class=note>The identifier of a connection cannot be updated. qType cannot be modified with the ModifyConnection method.</div>
     *
     * Parameters:
     *
     * - `connectionId`          -   Identifier of the connection.
     * - `connection`            -   Information about the connection.
     * Properties that can be updated.
     * - `overrideCredentials`   -   Set this parameter to true to override the user name and password.
     *
     * Stability: *locked*
     */
    modifyConnection: (connectionId: string, connection: Connection, overrideCredentials?: boolean) => Promise<void>;
    /**
     * Publishes an app.
     * All app objects are published. Generic objects, bookmarks, dimensions and measures inside the app are published.
     * <div class=note>An app can only be published once and cannot be published to more than one stream.</div>
     *
     * Parameters:
     *
     * - `streamId`   -   Identifier of the stream.
     * - `name`       -   Name of the published app.
     * If this parameter is not set, the engine automatically gives a new name to the published app.
     *
     * Stability: *locked*
     */
    publish: (streamId: string, name?: string) => Promise<void>;
    /**
     * Redoes the previous operation.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Stability: *locked*
     */
    redo: () => Promise<boolean>;
    /**
     * Removes an alternate state in the app.
     *
     * Parameters:
     *
     * - `stateName`   -   Name of the alternate state.
     *
     * Stability: *locked*
     */
    removeAlternateState: (stateName: string) => Promise<void>;
    /**
     * Removes an session alternate state in the app.
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `stateName`   -   Name of the alternate state.
     *
     * Stability: *locked*
     */
    removeSessionAlternateState: (stateName: string) => Promise<boolean>;
    /**
     * Removes a variable.
     *
     * Parameters:
     *
     * - `name`   -   Name of the variable. Variable names are case sensitive.
     *
     * @deprecated: Use _Doc::DestroyVariableById_ method or _Doc::DestroyVariableByName_ method instead
     *
     * Stability: *locked*
     */
    removeVariable: (name: string) => Promise<boolean>;
    /**
     * Replace a bookmark. Optional inparams to change the original bookmarks properties, original are kept if left out.
     *
     * Parameters:
     *
     * - `id`                 -   Identifier of the bookmark.
     * - `ignorePatches`      -   Set to true to exclude patches from the bookmark. Default is false.
     * - `objectIdsToPatch`   -   Add softpatches for this objects if available. If empty all softpatches are added to the bookmark. Ignored if IgnorePatches is set to true.
     *
     * Stability: *experimental*
     */
    replaceBookmark: (id: string, ignorePatches?: boolean, objectIdsToPatch?: string[]) => Promise<unknown>;
    /**
     * Restore a temporary selection state identified by Id.
     * <div class=note>RestoreTempSelectionState method is only supported in SaaS Editions of Qlik Sense.</div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the temporary selection state
     *
     * Stability: *locked*
     */
    restoreTempSelectionState: (id: string) => Promise<boolean>;
    /**
     * Resumes the app as the user left it.
     *
     * Stability: *locked*
     */
    resume: () => Promise<void>;
    /**
     * Save a copy of an app with a different name.
     * Can be used to save a session app as an ordinary app.
     *
     * Parameters:
     *
     * - `newAppName`   -   &lt;Name of the saved app&gt;
     *
     * Stability: *locked*
     */
    saveAs: (newAppName: string) => Promise<string>;
    /**
     * Saves all objects that were modified in the app.
     * <div class=note>Data from the data model are not saved.</div> <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * Stability: *locked*
     */
    saveObjects: () => Promise<void>;
    /**
     * Scrambles a field so the data is not recognizable. Some properties are retained to help debugging. For example, special characters are not changed, and small numbers are scrambled to another small number.
     * <div class=note>Update access is required to use the function in Qlik Sense Enterprise.</div>
     *
     * Parameters:
     *
     * - `fieldName`   -   Name of the field to scramble.
     *
     * Stability: *locked*
     */
    scramble: (fieldName: string) => Promise<void>;
    /**
     * Returns the search matches for one or more search terms.
     * The search results depend on the search context.
     * _SearchCombinationOptions_
     *
     * ### SearchMatchCombinations
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Description</th>
     * <th>Type</th>
     * </tr>
     * <tr>
     * <td>qSearchMatchCombinations</td>
     * <td>Array of search combinations.</td>
     * <td>Array of    SearchMatchCombination     </td>
     * </tr>
     * </table>
     *
     * Parameters:
     *
     * - `options`   -   Information about the search fields and the search context.
     * - `terms`     -   List of terms to search for.
     * - `page`      -   Array of pages to retrieve.
     *
     * @deprecated: Use _SearchResults_ method instead
     *
     * Stability: *locked*
     */
    searchAssociations: (options: SearchCombinationOptions, terms: string[], page: SearchPage) => Promise<SearchAssociationResult>;
    /**
     * Returns the generic objects corresponding to one or more search terms. The search is performed within the title, subtitle, footnote and type. In addition, associated dimension values are also searched in. For example, if the country “Japan” is selected and the object contains the dimension City, the object will appear in the results for “Osaka” but not for “Johannesburg”. The generic objects with the following types will never appear in the results: _slideitem_ , _sheet_ , _story_ , _slide_ , _masterobject_ , _snapshot_ , _LoadModel_ , _appprops_ and _searchhistory_ .
     *
     * Parameters:
     *
     * - `options`   -   Information about attributes.
     * - `terms`     -   Terms to search for.
     * - `page`      -   Array of pages to retrieve.
     *
     * Stability: *locked*
     */
    searchObjects: (options: SearchObjectOptions, terms: string[], page: SearchPage) => Promise<SearchResult>;
    /**
     * Returns the search matches for one or more search terms.
     * Search results are organized in search groups. The type of search group indicates where the search matches come from (from data for example).
     * Each search group contains search results that correspond to a combination of search terms.
     * For example, if the search terms are _organic_ , _pasta_ , and _America_ , the possible combination of search groups are:
     * * organic
     * * pasta
     * * America
     * * organic, pasta, America
     * * organic, pasta
     * * organic, America
     * * pasta, America
     *
     * For every search group, there are one or more search group items. Each subgroup item contains results that correspond to an item type (for example a field).
     * For every search group item, there are one or several search matches. The position of the match in each search result is given.
     *
     * Parameters:
     *
     * - `options`   -   Information about the search combinations.
     * - `terms`     -   Terms to search for.
     * - `page`      -   Array of pages to retrieve.
     *
     * Stability: *locked*
     */
    searchResults: (options: SearchCombinationOptions, terms: string[], page: SearchPage) => Promise<SearchResult>;
    /**
     * Returns search terms suggestions.
     *
     * Parameters:
     *
     * - `options`   -   Information about the search combinations.
     * - `terms`     -   Terms to search for.
     *
     * Stability: *locked*
     */
    searchSuggest: (options: SearchCombinationOptions, terms: string[]) => Promise<SearchSuggestionResult>;
    searchValues: (options: SearchValueOptions, terms: string[], page: SearchValuePage) => Promise<SearchValueResult>;
    /**
     * Selects all search hits for a specified group.
     * The results depend on the search context.
     * _SearchCombinationOptions_.
     *
     * Parameters:
     *
     * - `options`    -   Information about the search fields and the search context.
     * - `terms`      -   List of terms to search for.
     * - `matchIx`    -   Index (value of _qId_ ) of the search result to select.
     * - `softLock`   -   This parameter is deprecated and should not be set.
     *
     * Stability: *locked*
     */
    selectAssociations: (options: SearchCombinationOptions, terms: string[], matchIx: number, softLock?: boolean) => Promise<void>;
    /**
     * Sends a generic command to a custom connector.
     * For more information on the commands that can be sent to a custom connector, see the QVX SDK help.
     *
     * Parameters:
     *
     * - `provider`           -   Connector file name.
     * Command to be executed by the connector.
     * - `command`            -   One of:
     * * JsonRequest
     * * GetCustomCaption
     * * IsConnected
     * * DisableQlikViewSelectButton
     * * HaveStarField
     * - `method`             -   Method name to be used within the command.
     * The available methods depend on the chosen connector.
     * - `parameters`         -   Parameters of the command.
     * No parameters are required.
     * - `appendConnection`   -   Name of the connection.
     *
     * Stability: *locked*
     */
    sendGenericCommandToCustomConnector: (provider: string, command: string, method: string, parameters: string[], appendConnection: string) => Promise<string>;
    /**
     * Sets properties to an app.
     * <div class=note>The qLastReloadTime, qMigrationHash and qSavedInProductVersion properties does not need to be set but if they are, they should match the current values in the app layout. </div>
     *
     * Parameters:
     *
     * - `prop`   -   Information about the properties of an app.
     *
     * Stability: *locked*
     */
    setAppProperties: (prop: NxAppProperties) => Promise<void>;
    /**
     * Set some variables as favorite.
     *
     * Parameters:
     *
     * - `names`   -   Variables to set as favorite.
     *
     * Stability: *locked*
     */
    setFavoriteVariables: (names: string[]) => Promise<void>;
    /**
     * Limits the number of rows of data to load from a data source.
     * This method works when reloading in debug mode.
     *
     * Parameters:
     *
     * - `limit`   -   Fetch limit.
     * Number of rows to load.
     *
     * Stability: *locked*
     */
    setFetchLimit: (limit: number) => Promise<void>;
    /**
     * Sets a list of table states, one for each table.
     *
     * The following states apply:
     * * 0 The table is not loosely coupled.
     * * 1 The table is loosely coupled.
     * * 2 The table is loosely coupled and cannot be changed to another state using the Qlik Engine API.
     *
     * <div class=note>The last three values in the vector are for internal use.</div>
     *
     * Parameters:
     *
     * - `v`   -   The list of table states to set. A state will not be changed if already set to 2.
     *
     * Stability: *locked*
     */
    setLooselyCoupledVector: (v: number[]) => Promise<boolean>;
    /**
     * Prohibit binary load of this app.
     * An app with prohibit binary load set cannot be loaded binary. For the setting to have effect a save is required.
     *
     * Parameters:
     *
     * - `prohibit`   -   True or false.
     *
     * Stability: *locked*
     */
    setProhibitBinaryLoad: (prohibit: boolean) => Promise<void>;
    /**
     * Sets values in script.
     *
     * Parameters:
     *
     * - `script`   -   Script content.
     *
     * Stability: *locked*
     */
    setScript: (script: string) => Promise<void>;
    /**
     * Set some breakpoints in the script of an app.
     *
     * Parameters:
     *
     * - `breakpoints`   -   Information about the breakpoints.
     *
     * Stability: *locked*
     */
    setScriptBreakpoints: (breakpoints: EditorBreakpoint[]) => Promise<void>;
    /**
     * Sets the positions of the tables in the data model viewer.
     * <div class=note>The position of the broom points and the position of the connection points cannot be set in Qlik Sense.</div>
     *
     * ### Representation of tables, broom points and connection points
     * ![](images/ui_gen_BroomConnectionPoints_dmv.png)<br>
     * The green circles represent the broom points.
     * The red circle represents a connection point.
     *
     * Parameters:
     *
     * - `info`   -   Information about the table.
     *
     * Stability: *locked*
     */
    setViewDlgSaveInfo: (info: TableViewDlgSaveInfo) => Promise<void>;
    /**
     * Store current selection state temporarily.
     * <div class=note>The temporary selection state will be stored for 30min by default if TTL parameter is not present or positive. </div>
     * <div class=note>StoreTempSelectionState method is only supported in SaaS Editions of Qlik Sense.</div>
     *
     * Parameters:
     *
     * - `tTLOfTempState`   -   Time to live in seconds for stored selection state
     *
     * Stability: *locked*
     */
    storeTempSelectionState: (tTLOfTempState?: number) => Promise<unknown>;
    /**
     * Transform current app into an instance of the targeted mode
     *
     * Parameters:
     *
     * - `dstParameters`   -   Attributes that should be set in the new app.
     *
     * Stability: *locked*
     */
    transformApp: (dstParameters: TransformAppParameters) => Promise<TransformAppResult>;
    /**
     * Undoes the previous operation.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Stability: *locked*
     */
    undo: () => Promise<boolean>;
    /**
     * Unlocks all selections in fields for current state.
     *
     * Parameters:
     *
     * - `stateName`   -   Alternate state name. When set, applies to alternate state instead of current.
     *
     * Stability: *locked*
     */
    unlockAll: (stateName?: string) => Promise<void>;
};
type NativeFieldFunctions = {
    /**
     * Clears the selections in a specific field.
     *
     * Stability: *locked*
     */
    clear: () => Promise<boolean>;
    /**
     * Maintains the selections in the current field while clearing the selections in the other fields.
     *
     * Parameters:
     *
     * - `softLock`   -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    clearAllButThis: (softLock?: boolean) => Promise<boolean>;
    /**
     * Returns the AND mode status of a field.
     *
     * Stability: *locked*
     */
    getAndMode: () => Promise<boolean>;
    /**
     * Retrieves the number of distinct values in a field.
     *
     * Stability: *locked*
     */
    getCardinal: () => Promise<number>;
    /**
     * Gets the properties of a field.
     *
     * <div class=note>The property _OneAndOnlyOne_ is set to true if one and only value has been selected in the field prior setting the property. </div>
     *
     * Stability: *locked*
     */
    getNxProperties: () => Promise<NxFieldProperties>;
    /**
     * Locks all selected values of a specific field.
     *
     * Stability: *locked*
     */
    lock: () => Promise<boolean>;
    /**
     * Selects some values in a field, by entering the element numbers related to the values to select.
     *
     * Parameters:
     *
     * - `values`       -   Indexes (or element numbers) of the values to select.
     * - `toggleMode`   -   Set to true to keep any selections present in the list object.
     * If this parameter is set to false, selections made before accepting the list object search become alternative.
     * - `softLock`     -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    lowLevelSelect: (values: number[], toggleMode: boolean, softLock?: boolean) => Promise<boolean>;
    /**
     * Selects field values matching a search string.
     *
     * Parameters:
     *
     * - `match`                -   String to search for.
     * Can contain wild cards or numeric search criteria.
     * - `softLock`             -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     * - `excludedValuesMode`   -   Include excluded values in search.
     *
     * Stability: *locked*
     */
    select: (match: string, softLock?: boolean, excludedValuesMode?: number) => Promise<boolean>;
    /**
     * Selects all values of a field. Excluded values are also selected.
     *
     * Parameters:
     *
     * - `softLock`   -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectAll: (softLock?: boolean) => Promise<boolean>;
    /**
     * Selects all alternatives values in a specific field.
     * <div class=note>In a field that contains at least one selected value, the values that are neither selected nor excluded are alternatives values.</div>
     *
     * Parameters:
     *
     * - `softLock`   -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectAlternative: (softLock?: boolean) => Promise<boolean>;
    /**
     * Inverts the current selections.
     *
     * Parameters:
     *
     * - `softLock`   -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectExcluded: (softLock?: boolean) => Promise<boolean>;
    /**
     * Selects all possible values in a specific field.
     *
     * Parameters:
     *
     * - `softLock`   -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectPossible: (softLock?: boolean) => Promise<boolean>;
    /**
     * Selects some values in a field, by entering the values to select.
     *
     * Parameters:
     *
     * - `fieldValues`   -   List of the values to select.
     * - `toggleMode`    -   The default value is false.
     * - `softLock`      -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectValues: (fieldValues: FieldValue[], toggleMode?: boolean, softLock?: boolean) => Promise<boolean>;
    /**
     * Sets a field in the AND mode.
     *
     * Parameters:
     *
     * - `andMode`   -   Specifies if the AND mode applies to the field.
     * Set this parameter to true to enter the AND mode.
     *
     * Stability: *locked*
     */
    setAndMode: (andMode: boolean) => Promise<void>;
    /**
     * Sets some properties to a field.
     *
     * Parameters:
     *
     * - `properties`   -   Information about the properties of the field.
     *
     * Stability: *locked*
     */
    setNxProperties: (properties: NxFieldProperties) => Promise<void>;
    /**
     * Toggle selects field values matching a search string.
     *
     * Parameters:
     *
     * - `match`                -   String to search for.
     * Can contain wild cards or numeric search criteria.
     * - `softLock`             -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     * - `excludedValuesMode`   -   Include excluded values in search.
     *
     * Stability: *locked*
     */
    toggleSelect: (match: string, softLock?: boolean, excludedValuesMode?: number) => Promise<boolean>;
    /**
     * Unlocks all selected values of a specific field if the target (or handle ) is a field.
     *
     * Stability: *locked*
     */
    unlock: () => Promise<boolean>;
};
type NativeGenericBookmarkFunctions = {
    /**
     * Applies a bookmark.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Stability: *locked*
     */
    apply: () => Promise<boolean>;
    /**
     * Applies a bookmark and verify result dataset against originally selected values.
     *
     * <div class=note>The operation is successful if **qApplySuccess** is set to true. **qWarnings** lists state and field with unmatching values </div>
     *
     * Stability: *experimental*
     */
    applyAndVerify: () => Promise<BookmarkApplyAndVerifyResult>;
    /**
     * Applies a patch to the properties of an object. Allows an update to some of the properties. It should not be possible to patch "/qInfo/qId",
     * and it will be forbidden in the near future.
     * <div class=tip>Applying a patch takes less time than resetting all the properties.</div>
     *
     * Parameters:
     *
     * - `patches`   -   Array of patches.
     *
     * Stability: *locked*
     */
    applyPatches: (patches: NxPatch[]) => Promise<void>;
    /**
     * Adds the generic bookmark to the list of approved objects
     * <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * Stability: *locked*
     */
    approve: () => Promise<void>;
    /**
     * Retrieves the values of a field.
     *
     * ### Fieldvalue
     * <table>
     * <tbody>
     * <tr>
     * <th>Name</th>
     * <th>Description</th>
     * <th>Type</th>
     * </tr>
     * <tr>
     * <td>qText</td>
     * <td>Text related to the field value.</td>
     * <td>String</td>
     * </tr>
     * <tr>
     * <td>qIsNumeric</td>
     * <td>Is set to true if the value is a numeric.<br>Default is false.</td>
     * <td>Boolean</td>
     * </tr>
     * <tr>
     * <td>qNumber</td>
     * <td>Numeric value of the field.<br>This parameter is displayed if    qIsNumeric     is set to true.</td>
     * <td>Double</td>
     * </tr>
     * </tbody>
     * </table>
     *
     * Parameters:
     *
     * - `field`               -   Name of the field.
     * - `getExcludedValues`   -   If set to true, only excluded values are returned.
     * - `dataPage`            -   Range of returned values.
     *
     * Stability: *locked*
     */
    getFieldValues: (field: string, getExcludedValues: boolean, dataPage: BookmarkFieldPage) => Promise<FieldValue[]>;
    /**
     * Returns:
     * * The type of the object.
     * * The identifier of the object.
     *
     * Stability: *locked*
     */
    getInfo: () => Promise<NxInfo>;
    /**
     * Evaluates an object and displays its properties including the dynamic properties.
     * If the member _delta_ is set to true in the request object, only the delta is evaluated.
     *
     * Stability: *locked*
     */
    getLayout: () => Promise<GenericBookmarkLayout>;
    /**
     * Shows the properties of an object.
     * <div class=note>If the member delta is set to true in the request object, only the delta is retrieved.</div>
     * The following is always returned in the output:
     *
     * Stability: *locked*
     */
    getProperties: () => Promise<GenericBookmarkProperties>;
    /**
     * Publishes a bookmark.
     * <div class=note>This operation is not applicable for Qlik Sense Desktop.</div>
     *
     * Stability: *locked*
     */
    publish: () => Promise<void>;
    /**
     * Sets some properties for a bookmark.
     *
     * Parameters:
     *
     * - `prop`   -   Information about the bookmark.
     *
     * Stability: *locked*
     */
    setProperties: (prop: GenericBookmarkProperties) => Promise<void>;
    /**
     * Removes the generic bookmark from the list of approved objects
     * <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * Stability: *locked*
     */
    unApprove: () => Promise<void>;
    /**
     * Unpublishes a bookmark.
     * <div class=note>This operation is not applicable for Qlik Sense Desktop.</div>
     *
     * Stability: *locked*
     */
    unPublish: () => Promise<void>;
};
type NativeGenericDimensionFunctions = {
    /**
     * Applies a patch to the properties of an object. Allows an update to some of the properties. It should not be possible to patch "/qInfo/qId",
     * and it will be forbidden in the near future.
     * <div class=tip>Applying a patch takes less time than resetting all the properties.</div>
     *
     * Parameters:
     *
     * - `patches`   -   Array of patches.
     *
     * Stability: *locked*
     */
    applyPatches: (patches: NxPatch[]) => Promise<void>;
    /**
     * Adds the generic dimension to the list of approved objects
     * <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * Stability: *locked*
     */
    approve: () => Promise<void>;
    /**
     * Get a cyclic dimension's active field.
     * <div class=tip>This operation is only possible for cyclic dimensions.</div>
     *
     * Stability: *experimental*
     */
    getActiveField: () => Promise<number>;
    /**
     * Returns the definition of a dimension.
     *
     * The definition of the dimension is returned.
     *
     * Stability: *locked*
     */
    getDimension: () => Promise<NxLibraryDimensionDef>;
    /**
     * Returns the type and identifier of the object.
     *
     * Stability: *locked*
     */
    getInfo: () => Promise<NxInfo>;
    /**
     * Evaluates a dimension and displays its properties, including the dynamic properties.
     *
     * Stability: *locked*
     */
    getLayout: () => Promise<GenericDimensionLayout>;
    /**
     * Lists the linked objects to a generic object, a dimension or a measure.
     *
     * Stability: *locked*
     */
    getLinkedObjects: () => Promise<NxLinkedObjectInfo[]>;
    /**
     * Shows the properties of an object.
     * Returns the identifier and the definition of the dimension.
     * <div class=note>If the member delta is set to true in the request object, only the delta is retrieved.</div>
     *
     * Stability: *locked*
     */
    getProperties: () => Promise<GenericDimensionProperties>;
    /**
     * Publishes a dimension.
     * <div class=note>This operation is not applicable for Qlik Sense Desktop.</div>
     *
     * Stability: *locked*
     */
    publish: () => Promise<void>;
    /**
     * Set a cyclic dimension's active field directly.
     * <div class=tip>This operation is only possible for cyclic dimensions.</div>
     *
     * Parameters:
     *
     * - `ix`   -   Index of the new active field.
     *
     * Stability: *experimental*
     */
    setActiveField: (ix: number) => Promise<void>;
    /**
     * Sets some properties for a dimension.
     *
     * Parameters:
     *
     * - `prop`   -   Information about the dimension.
     *
     * Stability: *locked*
     */
    setProperties: (prop: GenericDimensionProperties) => Promise<void>;
    /**
     * Step active field in a cyclic dimension.
     * <div class=tip>This operation is only possible for cyclic dimensions.</div>
     *
     * Parameters:
     *
     * - `step`   -   The number of steps made through the dimension. Positive values step forward and negative values step backward.
     *
     * Stability: *experimental*
     */
    stepCycle: (step: number) => Promise<void>;
    /**
     * Removes the generic dimension from the list of approved objects
     * <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * Stability: *locked*
     */
    unApprove: () => Promise<void>;
    /**
     * Unpublishes a dimension.
     * <div class=note>This operation is not applicable for Qlik Sense Desktop.</div>
     *
     * Stability: *locked*
     */
    unPublish: () => Promise<void>;
};
type NativeGenericMeasureFunctions = {
    /**
     * Applies a patch to the properties of an object. Allows an update to some of the properties. It should not be possible to patch "/qInfo/qId",
     * and it will be forbidden in the near future.
     * <div class=tip>Applying a patch takes less time than resetting all the properties.</div>
     *
     * Parameters:
     *
     * - `patches`   -   Array of patches.
     *
     * Stability: *locked*
     */
    applyPatches: (patches: NxPatch[]) => Promise<void>;
    /**
     * Adds the generic measure to the list of approved objects
     * <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * Stability: *locked*
     */
    approve: () => Promise<void>;
    /**
     * Returns the type and identifier of the object.
     *
     * Stability: *locked*
     */
    getInfo: () => Promise<NxInfo>;
    /**
     * Evaluates a measure and displays its properties, including the dynamic properties.
     *
     * Stability: *locked*
     */
    getLayout: () => Promise<GenericMeasureLayout>;
    /**
     * Lists the linked objects to a generic object, a dimension or a measure.
     *
     * Stability: *locked*
     */
    getLinkedObjects: () => Promise<NxLinkedObjectInfo[]>;
    /**
     * Returns the definition of a measure.
     *
     * Stability: *locked*
     */
    getMeasure: () => Promise<NxLibraryMeasureDef>;
    /**
     * Shows the properties of an object.
     * Returns the identifier and the definition of the measure.
     * <div class=note>If the member delta is set to true in the request object, only the delta is retrieved.</div>
     * The following is always returned in the output:
     *
     * Stability: *locked*
     */
    getProperties: () => Promise<GenericMeasureProperties>;
    /**
     * Publishes a measure.
     * <div class=note>This operation is not applicable for Qlik Sense Desktop.</div>
     *
     * Stability: *locked*
     */
    publish: () => Promise<void>;
    /**
     * Sets some properties for a measure.
     *
     * Parameters:
     *
     * - `prop`   -   Information about the measure.
     *
     * Stability: *locked*
     */
    setProperties: (prop: GenericMeasureProperties) => Promise<void>;
    /**
     * Removes the generic measure from the list of approved objects
     * <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * Stability: *locked*
     */
    unApprove: () => Promise<void>;
    /**
     * Unpublishes a measure.
     * <div class=note>This operation is not applicable for Qlik Sense Desktop.</div>
     *
     * Stability: *locked*
     */
    unPublish: () => Promise<void>;
};
type NativeGenericObjectFunctions<CustomProperties, CustomLayout, GenericObjectRpcObject> = {
    /**
     * Aborts the results of a search in a list object.
     * <div class=note>This method applies to list objects (objects with one dimension).</div> <div class=note> After an abort on a list object search, the _GetLayout Method_ does not return any more search results but it does return the values in the field. </div>
     *
     * Parameters:
     *
     * - `path`   -   Path to the definition of the list object.
     * For example, _/qListObjectDef_ .
     *
     * Stability: *locked*
     */
    abortListObjectSearch: (path: string) => Promise<void>;
    /**
     * Accept the results of a search in a list object. The search results become selected in the field.
     * <div class=note>This method applies to list objects (objects with one dimension).</div> <div class=note>The search results are displayed using the _GetLayout Method_. </div>
     *
     * Parameters:
     *
     * - `path`         -   Path to the definition of the list object.
     * For example, _/qListObjectDef_ .
     * - `toggleMode`   -   Set to true to keep any selections present in the list object.
     * If this parameter is set to false, selections made before accepting the list object search become alternative.
     * - `softLock`     -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    acceptListObjectSearch: (path: string, toggleMode: boolean, softLock?: boolean) => Promise<void>;
    /**
     * Applies a patch to the properties of an object. Allows an update to some of the properties.
     * It is possible to apply a patch to the properties of a generic object, that is not persistent. Such a patch is called a soft patch.
     * In that case, the result of the operation on the properties (add, remove or delete) is not shown when doing _GetProperties_ , and only a _GetLayout_ call shows the result of the operation.
     * Properties that are not persistent are called soft properties. Once the engine session is over, soft properties are cleared. It should not be possible to patch "/qInfo/qId",
     * and it will be forbidden in the near future.
     * <div class=note>Soft properties apply only to generic objects.</div>
     *
     * Parameters:
     *
     * - `patches`     -   Array of patches.
     * - `softPatch`   -   If set to true, it means that the properties to be applied are not persistent. The patch is a soft patch.
     * The default value is false.
     *
     * Stability: *locked*
     */
    applyPatches: (patches: NxPatch[], softPatch?: boolean) => Promise<void>;
    /**
     * Adds the generic object to the list of approved objects
     * <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * Stability: *locked*
     */
    approve: () => Promise<void>;
    /**
     * Begins the selection mode. The app enters the modal state. The specified object enters the selection mode and a modal window is opened. The selection mode can apply to only one object in an app at a time.
     * When a visualization is in selection mode, selections can be made in this visualization. The visualization is not sorted until the selection mode is ended. Once the selection mode is ended and if the selections are accepted, the visualization is sorted according to the sort criteria. For more information about:
     * * Ending the selection mode, see _EndSelections Method_.
     * * The sort criteria, see _ListObjectDef_ or _HyperCubeDef_.
     *
     * ### Example
     * A sheet contains a list object and a chart. If the list object is in selection mode then the chart cannot be in selection mode. No selection on the chart can be made until the list object exits the selection mode.
     *
     * Parameters:
     *
     * - `paths`   -   List of the paths to the definition of the objects to enter selection mode.
     * For example, _/qListObjectDef_ .
     *
     * Stability: *locked*
     */
    beginSelections: (paths: string[]) => Promise<void>;
    /**
     * Clears the selections in a dimension of a visualization.
     *
     * Parameters:
     *
     * - `path`         -   Path to the definition of the visualization.
     * For example, _/qListObjectDef_ .
     * - `colIndices`   -   Array of dimension numbers or indexes. The selections are cleared in the specified dimensions.
     * Dimension numbers/indexes start from 0.
     * If this parameter is not set, all dimensions are cleared.
     *
     * Stability: *locked*
     */
    clearSelections: (path: string, colIndices?: number[]) => Promise<void>;
    /**
     * Clears the soft properties of a generic object.
     * For more information on how to add soft properties to a generic object, see _ApplyPatches Method_.
     *
     * Stability: *locked*
     */
    clearSoftPatches: () => Promise<void>;
    /**
     * Collapses the left dimensions of a pivot table. This method applies only to pivot tables that are not always fully expanded.
     * In the definition of the hypercube (in _HyperCubeDef_ ), the parameter _qAlwaysFullyExpanded_ must be set to false.
     *
     * Parameters:
     *
     * - `path`   -   Path to the definition of the object to be collapsed.
     * For example, _/qHyperCubeDef_ .
     * - `row`    -   Row index in the data matrix.
     * Indexing starts from 0.
     * - `col`    -   Column index. The index is based on the left dimension indexes.
     * Indexing starts from 0.
     * - `all`    -   If set to true, it collapses all cells.
     * Parameters _qRow_ and _qCol_ are not used if _qAll_ is set to true, but they need to be set (for example to 0).
     *
     * Stability: *locked*
     */
    collapseLeft: (path: string, row: number, col: number, all: boolean) => Promise<void>;
    /**
     * Collapses the top dimensions of a pivot table. This method applies only to pivot tables that are not always fully expanded.
     * In the definition of the hypercube (in _HyperCubeDef_ ), the parameter _qAlwaysFullyExpanded_ must be set to false.
     *
     * Parameters:
     *
     * - `path`   -   Path to the definition of the object to be collapsed
     * For example, _/qHyperCubeDef_ .
     * - `row`    -   Row index. The index is based on the top dimension indexes.
     * Indexing starts from 0.
     * - `col`    -   Column index in the data matrix.
     * Indexing starts from 0.
     * - `all`    -   If set to true, it collapses all cells.
     * Parameters _qRow_ and _qCol_ are not used if _qAll_ is set to true, but they need to be set (for example to 0).
     *
     * Stability: *locked*
     */
    collapseTop: (path: string, row: number, col: number, all: boolean) => Promise<void>;
    /**
     * Copies the properties of a generic object and its children.
     * The source object is specified by the parameter _qFromId_ and the destination object is referenced by its handle.
     * <div class=note>The identifier of the destination object is the same as before the copy takes place.</div>
     *
     * Parameters:
     *
     * - `fromId`   -   Identifier of the object to copy.
     *
     * Stability: *locked*
     */
    copyFrom: (fromId: string) => Promise<void>;
    /**
     * Creates a generic object that is a child of another generic object.
     * <div class=note>It is possible to update the properties of the child's parent at the same time that the child is created. Both operations are performed by the same call.</div> <div class=note>It is possible to create a child that is linked to another generic object. The two objects have the same properties.</div>
     *
     * Parameters:
     *
     * - `prop`          -   Information about the child.
     * It is possible to create a child that is linked to another object.
     * - `propForThis`   -   Identifier of the parent's object.
     * Should be set to update the properties of the parent's object at the same time the child is created.
     *
     * Stability: *locked*
     */
    createChild: <CustomChildProperties = GenericObjectProperties, CustomGenericObject = GenericObjectRpcObject>(prop: CustomChildProperties, propForThis?: CustomProperties) => Promise<CustomGenericObject>;
    /**
     * Removes all children and all children to the children on an object.
     *
     * Parameters:
     *
     * - `propForThis`   -   Identifier of the parent's object and property to update.
     * Should be set to update the properties of the parent's object at the same time the child is created.
     *
     * Stability: *locked*
     */
    destroyAllChildren: (propForThis?: CustomProperties) => Promise<void>;
    /**
     * Removes a child object.
     * <div class=note>It is possible to update the properties of the child's parent at the same time that the child is removed. Both operations are performed by the same call.</div> <div class=note>Removing a linked object, invalidate the linking object. </div>
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `id`            -   Identifier of the child to remove.
     * - `propForThis`   -   Identifier of the parent's object and property to update.
     * Should be set to update the properties of the parent's object at the same time the child is created.
     *
     * Stability: *locked*
     */
    destroyChild: (id: string, propForThis?: CustomProperties) => Promise<boolean>;
    /**
     * You can use the drillUp method with any object that contains a drill-down group as a dimension.
     * This method allows you to move between different levels of information (from a detailed level to a less detailed level of information). You can go back to previous visualizations up to the highest level of the hierarchy.
     * If you try to drill up more steps than there are available levels, the first level of the hierarchy is displayed.
     *
     * Parameters:
     *
     * - `path`       -   Path to the definition of the object to be selected.
     * For example, _/qHyperCubeDef_ .
     * - `dimNo`      -   Dimension number or index starting from 0.
     * The default value is 0.
     * - `nbrSteps`   -   Number of steps you want to drill up.
     * The default value is 0.
     *
     * Stability: *locked*
     */
    drillUp: (path: string, dimNo: number, nbrSteps: number) => Promise<void>;
    /**
     * Adds a snapshot to a generic object.
     * <div class=note>Only one snapshot can be embedded in a generic object.</div> <div class=note>If you embed a snapshot in an object that already contains a snapshot, the new snapshot overwrites the previous one.</div>
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the bookmark.
     *
     * Stability: *locked*
     */
    embedSnapshotObject: (id: string) => Promise<void>;
    /**
     * Ends the selection mode on a visualization. The selections are accepted or aborted when exiting the selection mode, depending on the _qAccept_ parameter value.
     *
     * Parameters:
     *
     * - `accept`   -   Set this parameter to true to accept the selections before exiting the selection mode.
     *
     * Stability: *locked*
     */
    endSelections: (accept: boolean) => Promise<void>;
    /**
     * Expands the left dimensions of a pivot table. This method applies only to pivot tables that are not always fully expanded.
     * In the definition of the hypercube (in _HyperCubeDef_ ), the parameter _qAlwaysFullyExpanded_ must be set to false.
     *
     * Parameters:
     *
     * - `path`   -   Path to the definition of the object to be expanded.
     * For example, _/qHyperCubeDef_ .
     * - `row`    -   Row index in the data matrix to expand.
     * Indexing starts from 0.
     * - `col`    -   Column index. The index is based on the left dimension indexes.
     * Indexing starts from 0.
     * - `all`    -   If set to true, it expands all cells.
     * Parameters _qRow_ and _qCol_ are not used if _qAll_ is set to true, but they need to be set (for example to 0).
     *
     * Stability: *locked*
     */
    expandLeft: (path: string, row: number, col: number, all: boolean) => Promise<void>;
    /**
     * Expands the top dimensions of a pivot table. This method applies only to pivot tables that are not always fully expanded.
     * In the definition of the hypercube (in _HyperCubeDef_ ), the parameter _qAlwaysFullyExpanded_ must be set to false.
     *
     * Parameters:
     *
     * - `path`   -   Path to the definition of the object to be expanded.
     * For example, _/qHyperCubeDef_ .
     * - `row`    -   Row index. The index is based on the top dimension indexes.
     * Indexing starts from 0.
     * - `col`    -   Column index in the data matrix.
     * Indexing starts from 0.
     * - `all`    -   If set to true, it expands all cells.
     * Parameters _qRow_ and _qCol_ are not used if _qAll_ is set to true, but they need to be set (for example to 0).
     *
     * Stability: *locked*
     */
    expandTop: (path: string, row: number, col: number, all: boolean) => Promise<void>;
    /**
     * Exports the data of any generic object to an Excel file or a open XML file. If the object contains excluded values, those excluded values are not exported.
     * This API has limited functionality and will not support CSV export from all types of objects. Consider using Excel export instead. Treemap and bar chart are not supported.
     * <div class=note>ExportData method is not supported in SaaS Editions of Qlik Sense.</div>
     *
     * ### Default limitations in number of rows and columns
     * The default maximum number of rows and columns in the Excel export file is:
     * * 1048566 rows per sheet. For pivot tables: 1048566 column dimensions. 10 rows can be added after the export.
     * * 16384 columns per sheet. If the number of columns exceeds the limit, the exported file is truncated and a warning message is sent.
     *
     * ### Default limitation in number of columns
     * The default maximum number of columns in the export file is:
     * * 1000 to export to a CSV file
     *
     * ### Default limitations in number of cells
     * The default maximum number of cells in the export file is:
     * * 5000000 to export to a CSV file
     *
     * The exported file is truncated if the number of cells exceeds the limit. A warning message with code 1000 is sent.
     * <div class=note>There is an option to export only the possible values ( _qExportState_ is P). </div>
     *
     * ### Default limitation in size
     * If the exported file is larger than the maximum value, then an out-of-memory error with code 13000 is returned.
     *
     * <div class=note>Exported files are temporary and are available only for a certain time span and only to the user who created them.</div>
     *
     * Parameters:
     *
     * - `fileType`      -   Type of the file to export.
     *
     * One of:
     * * CSV_C or EXPORT_CSV_C
     * * CSV_T or EXPORT_CSV_T
     * * OOXML or EXPORT_OOXML
     * * PARQUET or EXPORT_PARQUET
     * - `path`          -   Path to the definition of the object to be exported.
     * For example, _/qHyperCubeDef_ .
     * This parameter is mandatory if the file type is _CSV_C_ or _CSV_T_ .
     * - `fileName`      -   Name of the exported file after download from browser.
     * This parameter is optional and only used in Qlik Sense Desktop.
     * - `exportState`   -   Defines the values to be exported.
     * The default value is A.
     *
     * One of:
     * * P or EXPORT_POSSIBLE
     * * A or EXPORT_ALL
     * - `serveOnce`     -   If the exported file should be served only once
     * This parameter is optional and only used in Qlik Sense Enterprise (Windows)
     * Default value: false
     *
     * Stability: *locked*
     */
    exportData: (fileType: string, path?: string, fileName?: string, exportState?: string, serveOnce?: boolean) => Promise<unknown>;
    /**
     * Returns the type of the object and the corresponding handle.
     *
     * Parameters:
     *
     * - `id`   -   Identifier of the object.
     *
     * Stability: *locked*
     */
    getChild: <CustomGenericObject = GenericObjectRpcObject>(id: string) => Promise<CustomGenericObject>;
    /**
     * Returns the identifier and the type for each child in an app object. If the child contains extra properties in _qInfos_ , these properties are returned.
     *
     * Full dynamic properties are optional and are returned if they exist in the definition of the object.
     *
     * Stability: *locked*
     */
    getChildInfos: () => Promise<NxInfo[]>;
    /**
     * Returns the identifier, the type and the properties of the object.
     * If the object contains some soft properties, the soft properties are returned.
     * If the object is linked to another object, the properties of the linking object are returned.
     *
     * Stability: *locked*
     */
    getEffectiveProperties: () => Promise<CustomProperties>;
    /**
     * Gets the properties of:
     * * A generic object.
     * * The children of the generic object.
     * * The bookmarks/embedded snapshots of the generic object.
     *
     * Stability: *locked*
     */
    getFullPropertyTree: () => Promise<GenericObjectEntry>;
    /**
     * This method supports data binning.
     * When a generic object with two or three measures and one dimension contains a lot of data, groups of points (for example, cells) can be rendered instead of points.
     * A zone of interest can be refined (for zooming in) up to a maximum refinement level (set in the _qQueryLevel_ parameter) or coarsened (for zoom out).
     * The grid of cells is adaptive (not static), meaning that it adapts to different length scales.
     * The _GetHyperCubeBinnedData_ method gives information about the adaptive grid and the values of the generic object.
     * The number of points in a cell and the coordinates (expressed in the measure range) of each cell are returned.
     * Dimension values and measure values are rendered at point level (highest detailed level).
     * <div class=note>The generic object should contain two or three measures and one dimension. When the refinement is high, the first two measures are represented on the x-axis and on the y-axis, while the third measure is visualized as color or point size.</div>
     *
     * ### Adaptive Grid
     * More details about the properties of the adaptive grid are given in this paragraph.
     * When the refinement is not the highest (cells are rendered), information about the adaptive grid is returned through several arrays.
     * The first array contains the following properties:
     * <table>
     * <tbody>
     * <tr>
     * <th>Name</th>
     * <th>Description</th>
     * <th>Type</th>
     * </tr>
     * <tr>
     * <td>qNum</td>
     * <td>Maximum number of points that a cell can contain.</td>
     * <td>String</td>
     * </tr>
     * <tr>
     * <td>qElemNumber</td>
     * <td>Is set to 0.</td>
     * <td>Boolean</td>
     * </tr>
     * <tr>
     * <td>qState</td>
     * <td>The default value is L.</td>
     * <td>One of:
     * <ul>
     * <li>L for Locked</li>
     * <li>S for Selected</li>
     * <li>O for Optional</li>
     * <li>D for Deselected</li>
     * <li>A for Alternative</li>
     * <li>X for eXcluded</li>
     * <li>XS for eXcluded Selected</li>
     * <li>XL for eXcluded Locked</li>
     * </ul>
     * </td>
     * </tr>
     * </tbody>
     * </table>
     *
     * The next arrays give the coordinates of each cell in the page.
     * Each array contains the following properties:
     * <table>
     * <tbody>
     * <tr>
     * <th>Name</th>
     * <th>Description</th>
     * <th>Type</th>
     * </tr>
     * <tr>
     * <td>qText</td>
     * <td>Coordinates of a cell in the measure range.<br>“qText”: “[[&lt;left&gt;, &lt;top&gt;, &lt;right&gt;, &lt;bottom&gt;], [&lt;left&gt;, &lt;top&gt;, &lt;right&gt;, &lt;bottom&gt;], .... [&lt;left&gt;, &lt;top&gt;, &lt;right&gt;, &lt;bottom&gt;]]<br>Where:<br>&lt;    left     &gt;,    &lt; top     &gt;, &lt;    right     &gt; and &lt;    bottom     &gt; are the coordinates of the cell in the measure range.</td>
     * <td>String</td>
     * </tr>
     * <tr>
     * <td>qNum</td>
     * <td>Number of points in the cell.</td>
     * <td>Double precision floating point</td>
     * </tr>
     * <tr>
     * <td>qElemNumber</td>
     * <td>Unique identifier for each cell, calculated by the engine during the construction of the grid.<br>This element number is not stored in the database and can have a positive or a negative value.</td>
     * <td>Integer</td>
     * </tr>
     * <tr>
     * <td>qState</td>
     * <td>The default value is L.</td>
     * <td>One of:
     * <ul>
     * <li>L for Locked</li>
     * <li>S for Selected</li>
     * <li>O for Optional</li>
     * <li>D for Deselected</li>
     * <li>A for Alternative</li>
     * <li>X for eXcluded</li>
     * <li>XS for eXcluded Selected</li>
     * <li>XL for eXcluded Locked</li>
     * </ul>
     * </td>
     * </tr>
     * </tbody>
     * </table>
     *
     * <div class=note>Cells are represented as rectangles.</div>
     *
     * ### Dimension values and measures values
     * More details about the properties, when dimension and measure values are returned, are given in this paragraph.
     * When the refinement is high, points are rendered (not cells) and dimension and measure values for each cell are returned.
     * The first array is empty because no information on the adaptive grid is needed.
     * The next arrays bring information about the dimension and the measure values.
     * <table>
     * <tbody>
     * <tr>
     * <th>Name</th>
     * <th>Description</th>
     * <th>Type</th>
     * </tr>
     * <tr>
     * <td>qText</td>
     * <td>Text value of the dimension or the measure.</td>
     * <td>String</td>
     * </tr>
     * <tr>
     * <td>qNum</td>
     * <td>Numerical value of the dimension or the measure.<br>Is set to 0 if the value is only text.</td>
     * <td>Double precision floating point</td>
     * </tr>
     * <tr>
     * <td>qElemNumber</td>
     * <td>Unique identifier for each cell, calculated by the engine during the construction of the grid.<br>This element number is not stored in the database and can have a positive or a negative value.</td>
     * <td>Integer</td>
     * </tr>
     * <tr>
     * <td>qState</td>
     * <td>The default value is L.</td>
     * <td>One of:
     * <ul>
     * <li>L for Locked</li>
     * <li>S for Selected</li>
     * <li>O for Optional</li>
     * <li>D for Deselected</li>
     * <li>A for Alternative</li>
     * <li>X for eXcluded</li>
     * <li>XS for eXcluded Selected</li>
     * <li>XL for eXcluded Locked</li>
     * </ul>
     * </td>
     * </tr>
     * </tbody>
     * </table>
     *
     * Parameters:
     *
     * - `path`            -   Path to the definition of the object.
     * For example, _/qHyperCubeDef_ .
     * - `pages`           -   Array of pages to retrieve.
     * Since the generic object contains two measures and one dimension, _qWidth_ should be set to 3.
     * If the value of a measure is Null, the value cannot be rendered. Therefore, the number of elements rendered in a page can be less than the number defined in the property _qHeight_ .
     * - `viewport`        -   Defines the canvas and the zoom level.
     * This parameter is not yet used and is optional.
     * - `dataRanges`      -   Range of the data to render.
     * This range applies to the measure values.
     * The lowest and highest values of a measure can be retrieved by using the _GetLayout method_ (in _/qHyperCube/qMeasureInfo_ ).
     * - `maxNbrCells`     -   Maximum number of cells in the grid.
     * - `queryLevel`      -   Level of details. The higher the level, the more detailed information you get (zoom-in).
     * When the number of points to render falls below a certain threshold, the values are no longer rendered as cells but as points.
     * The query level should be no greater than 20.
     * - `binningMethod`   -   Selects the algorithm.
     * The default value is 0.
     * One of:
     * * 0: Adaptive grid
     * * 1: Hexagonal grid
     * * 2: Uniform grid
     *
     * Stability: *locked*
     */
    getHyperCubeBinnedData: (path: string, pages: NxPage[], viewport: NxViewPort, dataRanges: NxDataAreaPage[], maxNbrCells: number, queryLevel: number, binningMethod: number) => Promise<NxDataPage[]>;
    /**
     * Retrieves and packs compressed hypercube and axis data. It is possible to retrieve specific pages of data.
     * <div class=note>Binning is done on the time stamp data as well as the date. This means that you can zoom in to a level of granularity as low as seconds.</div>
     *
     * Parameters:
     *
     * - `path`          -   Path to the definition of the object.
     * For example, _/qHyperCubeDef_ .
     * - `options`       -   Defines the data to return.
     * - `reverseSort`   -   If set to true the returned data pages are reverse sorted.
     * Optional.
     *
     * Stability: *locked*
     */
    getHyperCubeContinuousData: (path: string, options: NxContinuousDataOptions, reverseSort?: boolean) => Promise<unknown>;
    /**
     * Retrieves the calculated data for a chart, a table, or a scatter plot. It is possible to retrieve specific pages of data.
     * <div class=note>This method works for a hypercube in DATA_MODE_STRAIGHT.</div>
     * A data set is returned.
     *
     * Parameters:
     *
     * - `path`    -   Path to the definition of the object to be selected.
     * For example, _/qHyperCubeDef_ .
     * - `pages`   -   Array of pages to retrieve.
     *
     * Stability: *locked*
     */
    getHyperCubeData: (path: string, pages: NxPage[]) => Promise<NxDataPage[]>;
    /**
     * Retrieves the values of a pivot table. It is possible to retrieve specific pages of data.
     * <div class=note>This method works for a hypercube in DATA_MODE_PIVOT.</div>
     *
     * Parameters:
     *
     * - `path`    -   Path to the definition of the object to be selected.
     * For example, _/qHyperCubeDef_ .
     * - `pages`   -   Array of pages to retrieve.
     *
     * Stability: *locked*
     */
    getHyperCubePivotData: (path: string, pages: NxPage[]) => Promise<NxPivotPage[]>;
    /**
     * Reduces the data of a bar chart, a line chart or a scatter plot chart and retrieves them.
     * The reduction is dependent on the zoom factor (parameter _qZoomFactor_ ) and on the reduction mode.
     * <div class=note>This method can be used to create mini charts.</div>
     *
     * ### Bar chart or line chart data reduction
     * For the data reduction to happen, the following conditions must be fulfilled:
     * * The values cannot fit in the defined page (parameter _qPages_ ).
     * * The zoom factor is not 0 (parameter _qZoomFactor_ ).
     * * The reduction mode must be set to D1.
     *
     * The reduction algorithm keeps the shape of the visualizations and works whatever the number of dimensions in the chart. The global profile of the chart is reduced, and not only a specific dimension. A visualization that has been reduced contains fewer values but its shape is the same. Data of all types can be reduced. Therefore it is hard to relate the values before and after a reduction especially when reducing string values.
     *
     * ### Example
     * If you have a chart with 1 million data, and you have set the zoom factor to 5, the _GetHyperCubeReducedData_ method reduces the chart and retrieves 200 000 data.
     *
     * ### Scatter plot chart data reduction
     * The reduction mode must be set to C.
     * This reduction mechanism follows the 2D K-Means algorithm. Data are reduced into a number of clusters. Each data is assigned to a specific centroid.
     * The number of centroids can be defined in the parameter _qZoomFactor_.
     *
     * ### Scatter plot chart resolution reduction
     * The reduction mode must be set to S.
     * The resolution is reduced according to the zoom factor (parameter _qZoomFactor_ ).
     *
     * ### Example
     * If you have a scatter plot chart and the zoom factor is set to 2, the scatter plot chart resolution is reduced by 4.
     *
     * Parameters:
     *
     * - `path`            -   Path to the definition of the object to be selected.
     * For example, _/qHyperCubeDef_ .
     * - `pages`           -   Array of pages.
     * - `zoomFactor`      -   Defines the zoom factor.
     * If set to -1, the engine decides of the zoom factor.
     * * If the reduction mode is _D1_ or _S_ , the zoom factor is 2ⁿ. If the zoom factor is 5, the data are reduced by a factor 32.
     * * If the reduction mode is _C_ , the zoom factor defines the number of centroids.
     * - `reductionMode`   -   Defines the reduction mode.
     *
     * One of:
     * * N or DATA_REDUCTION_NONE
     * * D1 or DATA_REDUCTION_ONEDIM
     * * S or DATA_REDUCTION_SCATTERED
     * * C or DATA_REDUCTION_CLUSTERED
     * * ST or DATA_REDUCTION_STACKED
     *
     * Stability: *locked*
     */
    getHyperCubeReducedData: (path: string, pages: NxPage[], zoomFactor: number, reductionMode: string) => Promise<NxDataPage[]>;
    /**
     * Retrieves the values of a stacked pivot table. It is possible to retrieve specific pages of data.
     * <div class=note>This method works for a hypercube in DATA_MODE_PIVOT_STACK.</div>
     *
     * Parameters:
     *
     * - `path`          -   Path to the definition of the object to be selected.
     * For example, _/qHyperCubeDef_ .
     * - `pages`         -   Array of pages to retrieve.
     * - `maxNbrCells`   -   Maximum number of cells at outer level.
     * The default value is 10 000.
     *
     * Stability: *locked*
     */
    getHyperCubeStackData: (path: string, pages: NxPage[], maxNbrCells?: number) => Promise<NxStackPage[]>;
    /**
     * Retrieves data for nodes in a tree structure. It is possible to retrieve specific pages of data.
     * <div class=note>This method works for a treedata object or a hypercube in DATA_MODE_TREE.</div>
     *
     * Parameters:
     *
     * - `path`          -   Path to the definition of the object to be selected.
     * - `nodeOptions`   -   Specifies all the paging filters needed to define the tree to be fetched. If left out the complete tree is returned.
     *
     * Stability: *stable*
     */
    getHyperCubeTreeData: (path: string, nodeOptions?: NxTreeDataOption) => Promise<NxTreeNode[]>;
    /**
     * Returns the type and identifier of the object.
     *
     * Stability: *locked*
     */
    getInfo: () => Promise<NxInfo>;
    /**
     * Evaluates an object and displays its properties including the dynamic properties.
     * If the member _delta_ is set to true in the request object, only the delta is evaluated. A _GetLayout_ call on a generic object, returns up to one level down in the hierarchy.
     *
     * ### Example:
     * _A_ is a generic object and is the parent of the objects B and C. _B_ is the parent of the objects D and E.
     * <br>![](images/dr_gen_QVCPMethodGetLayoutHierarchy.png)<br>
     * A _GetLayout_ call on A returns information on the objects A, B and C.
     * A _GetLayout_ call on B returns information on the objects B, D and E.
     * A  _GetLayout_ call on C returns information on the object C.
     *
     * <div class=note>
     * In addition to the parameters displayed above, the **GetLayout** method can return other properties according to what is defined in the generic object.
     * For example, if **qHyperCubeDef** is defined in the generic object, the **GetLayout** method returns the properties described in _HyperCube_.
     * </div>
     *
     * Stability: *locked*
     */
    getLayout: () => Promise<CustomLayout>;
    /**
     * Lists the linked objects to a generic object, a dimension or a measure.
     *
     * Stability: *locked*
     */
    getLinkedObjects: () => Promise<NxLinkedObjectInfo[]>;
    /**
     * Retrieves the values of a list object.
     * A data set is returned.
     *
     * Parameters:
     *
     * - `path`    -   Path to the definition of the object to be selected.
     * For example, _/qListObjectDef_ .
     * - `pages`   -   Array of pages you are interested in.
     *
     * Stability: *locked*
     */
    getListObjectData: (path: string, pages: NxPage[]) => Promise<NxDataPage[]>;
    /**
     * Returns the type of the object and the corresponding handle to the parent object in the hiearchy.
     *
     * Stability: *locked*
     */
    getParent: <CustomGenericObject = GenericObjectRpcObject>() => Promise<CustomGenericObject>;
    /**
     * Returns the identifier, the type and the properties of the object.
     * Because it is not mandatory to set all properties when you define an object, the _GetProperties_ method may show properties that were not set. In that case, default values are given.
     * If the object contains some soft properties, the soft properties are not returned by the _GetProperties_ method. Use the _GetEffectiveProperties method_ instead.
     * If the object is linked to another object, the properties of the linking object are not returned by the _GetProperties_ method. Use the _GetEffectiveProperties method_ instead.
     * <div class=note>The properties depends on the generic object type, see [properties](genericobject-layout.html).</div>
     * <div class=note>If the member delta is set to true in the request object, only the delta is retrieved.</div>
     *
     * Stability: *locked*
     */
    getProperties: () => Promise<CustomProperties>;
    /**
     * Returns the type of the object and the corresponding handle.
     *
     * Stability: *locked*
     */
    getSnapshotObject: <CustomGenericObject = GenericObjectRpcObject>() => Promise<CustomGenericObject>;
    /**
     * Locks the selected values of a generic object.
     *
     * Parameters:
     *
     * - `path`         -   Path to the definition of the object.
     * For example, _/qListObjectDef_ .
     * - `colIndices`   -   Dimension numbers or dimension indexes where the lock should apply.
     * Dimension numbers/indexes start from 0.
     * If this parameter is not set, the selected values in all dimensions are locked.
     *
     * Stability: *locked*
     */
    lock: (path: string, colIndices?: number[]) => Promise<void>;
    /**
     * Makes multiple range selections in measures.
     * <div class=note> This method applies to hypercubes. For example, bar charts, tables and scatter plots.</div>
     * The member **Change** returns the handles of the objects that are updated following the selections.
     * _qSuccess_ is set to _true_ if the selections are successful and is set to _false_ in the following cases:
     * * The object contains some invalid fields (fields that are not in the data model).
     * * The selection applies to a locked field.
     * * A range selection is performed and the parameter _OneAndOnlyOne_ is set to true in the definition of the object.
     *
     * Parameters:
     *
     * - `path`                      -   Path to the definition of the object to be selected.
     * For example, _/qHyperCubeDef_ .
     * - `ranges`                    -   Ranges of selections.
     * - `orMode`                    -   Applies to hypercubes with multiple measures.
     * If set to true, it means that at least one of the measures must be in the range of selections for the group of measures to be selected.
     * If set to false, it means that all measures must be in the range of selections for the group of measures to be selected.
     * The default value is false.
     * - `deselectOnlyOneSelected`   -   Set this parameter to true to unselect the last single selected value. There must be only one selected value in the field.
     * The default value is false.
     *
     * Stability: *locked*
     */
    multiRangeSelectHyperCubeValues: (path: string, ranges: NxMultiRangeSelectInfo[], orMode?: boolean, deselectOnlyOneSelected?: boolean) => Promise<boolean>;
    multiRangeSelectTreeDataValues: (path: string, ranges: NxTreeMultiRangeSelectInfo[], orMode?: boolean, deselectOnlyOneSelected?: boolean) => Promise<boolean>;
    /**
     * Publishes a generic object.
     * <div class=note>This operation is not applicable for Qlik Sense Desktop.</div>
     *
     * Stability: *locked*
     */
    publish: () => Promise<void>;
    /**
     * Makes range selections in measures.
     * <div class=note> This method applies to hypercubes. For example, bar charts, tables and scatter plots.</div>
     * The member **Change** returns the handles of the objects that are updated following the selections.
     * _qSuccess_ is set to _true_ if the selections are successful and is set to _false_ in the following cases:
     * * The object contains some invalid fields (fields that are not in the data model).
     * * The selection applies to a locked field.
     * * A range selection is performed and the parameter _OneAndOnlyOne_ is set to true in the definition of the object.
     *
     * Parameters:
     *
     * - `path`                      -   Path to the definition of the object to be selected.
     * For example, _/qHyperCubeDef_ .
     * - `ranges`                    -   Ranges of selections.
     * - `columnsToSelect`           -   Indicates which dimensions to select.
     * The dimensions numbering starts at 0 (first dimension is 0).
     * If the array is empty, all dimensions are selected.
     * - `orMode`                    -   Applies to hypercubes with multiple measures.
     * If set to true, it means that at least one of the measures must be in the range of selections for the group of measures to be selected.
     * If set to false, it means that all measures must be in the range of selections for the group of measures to be selected.
     * The default value is false.
     * - `deselectOnlyOneSelected`   -   Set this parameter to true to unselect the last single selected value. There must be only one selected value in the field.
     * The default value is false.
     *
     * Stability: *locked*
     */
    rangeSelectHyperCubeValues: (path: string, ranges: NxRangeSelectInfo[], columnsToSelect?: number[], orMode?: boolean, deselectOnlyOneSelected?: boolean) => Promise<boolean>;
    /**
     * Resets all selections made in selection mode.
     *
     * Stability: *locked*
     */
    resetMadeSelections: () => Promise<void>;
    /**
     * Searches for a string in a list object.
     * <div class=note>This method applies to list objects (objects with one dimension).</div> <div class=note>The search results can be displayed using the _GetLayout Method_. </div>
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `path`    -   Path to the definition of the list object.
     * For example, _/qListObjectDef_ .
     * - `match`   -   Search string.
     * Wild card characters are allowed. The search is not case sensitive.
     * Examples:
     * * `P*U*`: retrieves only values that start with P and contain U
     * * `P U S`: retrieves values that start with P, U or S
     *
     * Stability: *locked*
     */
    searchListObjectFor: (path: string, match: string) => Promise<boolean>;
    /**
     * Makes selections in multiple dimensions and measures.
     * <div class=note> This method applies to hypercubes, such as bar charts, tables and scatter plots.</div>
     * The member **Change** returns the handles of the objects that are updated following the selections.
     * _qSuccess_ is set to _true_ if the selections are successful and is set to _false_ in the following cases:
     * * The object contains some invalid fields (fields that are not in the data model).
     * * The selection applies to a locked field.
     * * A range selection is performed and the parameter _OneAndOnlyOne_ is set to true in the definition of the object.
     *
     * Parameters:
     *
     * - `path`                      -   Path to the definition of the object to be selected.
     * For example, _/qHyperCubeDef_ .
     * - `rowIndices`                -   Array of row indexes to select, starting from 0.
     * If the array is empty _[ ]_ , all rows are selected.
     * - `colIndices`                -   Indexes of the columns to select, starting from 0.
     * A column corresponds to a dimension in the order they are added to the hypercube.
     * If a column is hidden it is ignored, qColIndex n refers to the n:th visible column (starting from zero).
     * Example:
     * If the hypercube has two dimensions:
     * * [0] selects the first column (i.e the first dimension).
     * * [1] selects the second column (i.e the second dimension).
     *
     * If the array is empty _[ ]_ , all columns are selected.
     * - `softLock`                  -   Set to true to ignore locks; in that case, locked fields can be selected.
     * - `deselectOnlyOneSelected`   -   Set this parameter to true to unselect the last single selected value. There must be only one selected value in the field.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectHyperCubeCells: (path: string, rowIndices: number[], colIndices: number[], softLock?: boolean, deselectOnlyOneSelected?: boolean) => Promise<boolean>;
    /**
     * The following is returned in the output:
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `path`       -   Path to the definition of the object.
     * For example, _/qHyperCubeDef_ .
     * - `ranges`     -   Selects ranges in a hypercube in (Ranges[N].Min,Ranges[N].Max) intervals.
     * If either Ranges[N].MinInclEq or Ranges[N].MaxInclEq, or both flags are set to _true_ then _Min_ and _Max_ values will be selected.
     * - `softLock`   -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectHyperCubeContinuousRange: (path: string, ranges: NxContinuousRangeSelectInfo[], softLock?: boolean) => Promise<boolean>;
    /**
     * Selects some values in one dimension.
     * The values are identified by their element numbers.
     * <div class=note>This method applies to charts, tables and scatter plots.</div>
     * The member **Change** returns the handles of the objects that are updated following the selections.
     * _qSuccess_ is set to _true_ if the selections are successful and is set to _false_ in the following cases:
     * * The object contains some invalid fields (fields that are not in the data model).
     * * The selection applies to a locked field.
     * * A range selection is performed and the parameter _OneAndOnlyOne_ is set to true in the definition of the object.
     *
     * Parameters:
     *
     * - `path`         -   Path to the definition of the object to be selected.
     * For example, _/qHyperCubeDef_ .
     * - `dimNo`        -   Dimension number or index to select.
     * Dimension numbers/index start from 0.
     * - `values`       -   Element numbers of the field to select.
     * You can select multiple elements; the separator is the comma.
     * - `toggleMode`   -   Set to true to toggle.
     *
     * Stability: *locked*
     */
    selectHyperCubeValues: (path: string, dimNo: number, values: number[], toggleMode: boolean) => Promise<boolean>;
    /**
     * Selects all values of a field.
     * <div class=note>This method applies to list objects (objects with one dimension).</div>
     * The member **Change** returns the handles of the objects that are updated following the selections.
     * _qSuccess_ is set to _true_ if the selections are successful and is set to _false_ in the following cases:
     * * The object contains some invalid fields (fields that are not in the data model).
     * * The selection applies to a locked field.
     * * A range selection is performed and the parameter _OneAndOnlyOne_ is set to true in the definition of the object.
     *
     * Parameters:
     *
     * - `path`       -   Path to the definition of the object to be selected.
     * For example, _/qListObjectDef_ .
     * - `softLock`   -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectListObjectAll: (path: string, softLock?: boolean) => Promise<boolean>;
    /**
     * Selects all alternative values in a specific field.
     * <div class=note>This method applies to list objects (objects with one dimension).</div> <div class=note>If a field contains at least one selected value, the values that are neither selected nor excluded are alternatives values.</div>
     * The member **Change** returns the handles of the objects that are updated following the selections.
     * _qSuccess_ is set to _true_ if the selections are successful and is set to _false_ in the following cases:
     * * The object contains some invalid fields (fields that are not in the data model).
     * * The selection applies to a locked field.
     * * A range selection is performed and the parameter _OneAndOnlyOne_ is set to true in the definition of the object.
     *
     * Parameters:
     *
     * - `path`       -   Path to the definition of the object to be selected.
     * For example, _/qListObjectDef_ .
     * - `softLock`   -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectListObjectAlternative: (path: string, softLock?: boolean) => Promise<boolean>;
    /**
     * The following is returned in the output:
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `path`       -   Path to the definition of the object.
     * For example, _/qHyperCubeDef_ .
     * - `ranges`     -   Selects ranges in a hypercube in (Ranges[N].Min,Ranges[N].Max) intervals.
     * If either Ranges[N].MinInclEq or Ranges[N].MaxInclEq, or both flags are set to _true_ then _Min_ and _Max_ values will be selected.
     * - `softLock`   -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectListObjectContinuousRange: (path: string, ranges: QRange[], softLock?: boolean) => Promise<boolean>;
    /**
     * Inverts the current selections in a specific field.
     * <div class=note>This method applies to list objects (objects with one dimension).</div>
     * The member **Change** returns the handles of the objects that are updated following the selections.
     * _qSuccess_ is set to _true_ if the selections are successful and is set to _false_ in the following cases:
     * * The object contains some invalid fields (fields that are not in the data model).
     * * The selection applies to a locked field.
     * * A range selection is performed and the parameter _OneAndOnlyOne_ is set to true in the definition of the object.
     *
     * Parameters:
     *
     * - `path`       -   Path to the definition of the object to be selected.
     * For example, _/qListObjectDef_ .
     * - `softLock`   -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectListObjectExcluded: (path: string, softLock?: boolean) => Promise<boolean>;
    /**
     * Selects all possible values of a list object.
     * <div class=note>This method applies to list objects (objects with one dimension).</div>
     * The member **Change** returns the handles of the objects that are updated following the selections.
     * _qSuccess_ is set to _true_ if the selections are successful and is set to _false_ in the following cases:
     * * The object contains invalid fields (fields that are not in the data model).
     * * The selection applies to a locked field.
     * * A range selection is performed and the parameter _OneAndOnlyOne_ is set to true in the definition of the object.
     *
     * Parameters:
     *
     * - `path`       -   Path to the definition of the object to be selected.
     * For example, _/qListObjectDef_ .
     * - `softLock`   -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectListObjectPossible: (path: string, softLock?: boolean) => Promise<boolean>;
    /**
     * Makes single selections in dimensions.
     * <div class=note>This method applies to list objects only.</div>
     * The member **Change** returns the handles of the objects that are updated following the selections.
     * _qSuccess_ is set to _true_ if the selections are successful and is set to _false_ in the following cases:
     * * The object contains invalid fields (fields that are not in the data model).
     * * The selection applies to a locked field.
     * * A range selection is performed and the parameter _OneAndOnlyOne_ is set to true in the definition of the object.
     *
     * Parameters:
     *
     * - `path`         -   Path to the definition of the object to be selected.
     * For example, _/qListObjectDef_ .
     * - `values`       -   Element numbers to select.
     * You can select multiple values; the separator is the comma.
     * - `toggleMode`   -   Set to true to toggle.
     * - `softLock`     -   Set to true to ignore locks; in that case, locked fields can be selected.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectListObjectValues: (path: string, values: number[], toggleMode: boolean, softLock?: boolean) => Promise<boolean>;
    /**
     * <div class=note>This method only applies to hypercubes that are not represented as straight tables. The parameter _qMode_ in _HyperCubeDef_ must be set either to _P_  or _K_ . </div>
     *
     * ### Pivot table
     * Makes selections in the top or left dimension cells of a pivot table or in the data matrix. Only expanded dimensions can be selected.
     *
     * ### Stacked table
     * Makes selections in the left dimension cells of a stacked table or in the data matrix.
     * <div class=note>There is no top dimensions in a stacked table. A stacked table can only contain one measure.</div>
     *
     * ### Example of a pivot table
     * ![](images/ui_gen_ExampleQVCPPivotTableDescription.png)<br>
     * In the representation above:
     * <table>
     * <tbody>
     * <tr>
     * <td>Sum(OrderTotal)<br>Count(OrderTotal)</td>
     * <td>Are pseudo dimensions.</td>
     * </tr>
     * <tr>
     * <td>CategoryName</td>
     * <td>Is a left dimension.<br>   Beverages     ,    Condiments     ... are left dimension values.</td>
     * </tr>
     * <tr>
     * <td>ProductName</td>
     * <td>Is a top dimension.<br>   Chef Anton's Cajun Seasoning     is a top dimension value. </td>
     * </tr>
     * <tr>
     * <td>Numeric values</td>
     * <td>Are calculated values in the data matrix.<br>   626291,832     is a calculated value.</td>
     * </tr>
     * </tbody>
     * </table>
     *
     * The member **Change** returns the handles of the objects that are updated following the selections.
     * _qSuccess_ is set to _true_ if the selections are successful and is set to _false_ in the following cases:
     * * The object contains some invalid fields (fields that are not in the data model).
     * * The selection applies to a locked field.
     * * A range selection is performed and the parameter _OneAndOnlyOne_ is set to true in the definition of the object.
     *
     * Parameters:
     *
     * - `path`                      -   Path to the definition of the object.
     * For example, _/qHyperCubeDef_ .
     * - `selections`                -   Information about the selections to perform.
     * - `softLock`                  -   Set to true to ignore locks; in that case, locked fields can be selected.
     * - `deselectOnlyOneSelected`   -   Set this parameter to true to unselect the last single selected value. There must be only one selected value in the field.
     * The default value is false.
     *
     * Stability: *locked*
     */
    selectPivotCells: (path: string, selections: NxSelectionCell[], softLock?: boolean, deselectOnlyOneSelected?: boolean) => Promise<boolean>;
    /**
     * Sets the order of the children in a generic object.
     * <div class=note>To change the order of the children in a generic object, the identifiers of all the children must be included in the list of the identifiers (in _qIds_ ). </div>
     *
     * Parameters:
     *
     * - `ids`   -   List of the children identifiers.
     *
     * Stability: *locked*
     */
    setChildArrayOrder: (ids: string[]) => Promise<void>;
    /**
     * Sets the properties of:
     * * A generic object.
     * * The children of the generic object.
     * * The bookmarks/embedded snapshots of the generic object.
     *
     * <div class=note>If the _SetFullPropertyTree method_ is asked to set some properties to a child that does not exist, it creates the child. </div> <div class=note>The type of an object cannot be updated.</div>
     *
     * Parameters:
     *
     * - `propEntry`   -   Information about the generic object entry.
     *
     * Stability: *locked*
     */
    setFullPropertyTree: (propEntry: GenericObjectEntry) => Promise<void>;
    /**
     * Sets some properties for a generic object.
     * <div class=note>The properties depends on the generic object type, see [properties](genericobject-property.html).</div>
     *
     * Parameters:
     *
     * - `prop`   -   Information about the generic object.
     *
     * Stability: *locked*
     */
    setProperties: (prop: CustomProperties) => Promise<void>;
    /**
     * Removes the generic object from the list of approved objects
     * <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * Stability: *locked*
     */
    unApprove: () => Promise<void>;
    /**
     * Unpublishes a generic object.
     * <div class=note>This operation is not applicable for Qlik Sense Desktop.</div>
     *
     * Stability: *locked*
     */
    unPublish: () => Promise<void>;
    /**
     * Unlocks the selected values of a generic object if the target (or handle ) is a generic object
     *
     * Parameters:
     *
     * - `path`         -   Path to the definition of the object.
     * For example, _/qListObjectDef_ .
     * - `colIndices`   -   Dimension numbers/indexes where the unlock should apply.
     * Dimension numbers/indexes start from 0.
     * If this parameter is not set, the locked values in all dimensions are unlocked.
     *
     * Stability: *locked*
     */
    unlock: (path: string, colIndices?: number[]) => Promise<void>;
};
type NativeGenericVariableFunctions = {
    /**
     * Applies a patch to the properties of a variable. Allows an update to some of the properties. It should not be possible to patch "/qInfo/qId",
     * and it will be forbidden in the near future.
     * <div class=tip>Applying a patch takes less time than resetting all the properties.</div>
     *
     * Parameters:
     *
     * - `patches`   -   Array of patches.
     *
     * Stability: *locked*
     */
    applyPatches: (patches: NxPatch[]) => Promise<void>;
    /**
     * Returns the type and identifier of the object.
     *
     * Stability: *locked*
     */
    getInfo: () => Promise<NxInfo>;
    /**
     * Evaluates an object and displays its properties including the dynamic properties.
     * If the member _delta_ is set to true in the request object, only the delta is evaluated.
     *
     * Stability: *locked*
     */
    getLayout: () => Promise<GenericVariableLayout>;
    /**
     * Shows the properties of an object.
     * <div class=note>If the member **delta** is set to true in the request, only the delta is retrieved. </div>
     * The following is always returned in the output:
     *
     * Stability: *locked*
     */
    getProperties: () => Promise<GenericVariableProperties>;
    /**
     * Returns the raw value of a variable.
     *
     * Stability: *locked*
     */
    getRawContent: () => Promise<string>;
    /**
     * Sets the value of a dual variable.
     * <div class=note>These changes are not persistent. They only last the duration of the engine session.</div>
     *
     * Parameters:
     *
     * - `text`   -   String representation of a dual value. Set this parameter to "", if the string representation is to be Null.
     * - `num`    -   Numeric representation of a dual value.
     *
     * Stability: *locked*
     */
    setDualValue: (text: string, num: number) => Promise<void>;
    /**
     * Sets a numerical value to a variable.
     * <div class=note>These changes are not persistent. They only last the duration of the engine session.</div>
     *
     * Parameters:
     *
     * - `val`   -   Value of the variable.
     *
     * Stability: *locked*
     */
    setNumValue: (val: number) => Promise<void>;
    /**
     * Sets some properties for a variable.
     * <div class=note>The identifier of a variable cannot be modified.</div> <div class=note>You cannot update the properties of a script-defined variable using the _SetProperties method_. </div>
     *
     * Parameters:
     *
     * - `prop`   -   Information about the variable.
     *
     * Stability: *locked*
     */
    setProperties: (prop: GenericVariableProperties) => Promise<void>;
    /**
     * Sets a string value to a variable.
     * <div class=note>These changes are not persistent. They only last the duration of the engine session.</div>
     *
     * Parameters:
     *
     * - `val`   -   Value of the variable. The string can contain an expression.
     *
     * Stability: *locked*
     */
    setStringValue: (val: string) => Promise<void>;
};
type NativeGlobalFunctions<DocRpcObject> = {
    /**
     * Sets an abort flag on all pending and ongoing requests in the current engine session.
     * * If an abort flag is set on a pending request, the request is aborted.
     * * If an abort flag is set on an ongoing request, the engine checks to see if it is possible to abort the request.
     *
     * Stability: *locked*
     */
    abortAll: () => Promise<void>;
    /**
     * Sets an abort flag on a specific request in the current engine session.
     * * If an abort flag is set on a pending request, the request is aborted.
     * * If an abort flag is set on an ongoing request, the engine checks to see if it is possible to abort the request.
     *
     * Parameters:
     *
     * - `requestId`   -   Identifier of request to abort.
     *
     * Stability: *locked*
     */
    abortRequest: (requestId: number) => Promise<void>;
    /**
     * Indicates whether or not a user is able to create an app.
     *
     * Stability: *locked*
     */
    allowCreateApp: () => Promise<boolean>;
    /**
     * Cancels an ongoing reload. The reload of the app is stopped. The indexation can be canceled and _true_ is still the return value of the reload task.
     *
     * Parameters:
     *
     * - `reason`   -   Reason for why the reload was cancelled. This will be echoed back to the user in the script log.
     *
     * Stability: *locked*
     */
    cancelReload: (reason?: string) => Promise<void>;
    /**
     * Cancels an ongoing request. The request is stopped.
     *
     * Parameters:
     *
     * - `requestId`   -   Identifier of the request to stop.
     *
     * Stability: *locked*
     */
    cancelRequest: (requestId: number) => Promise<void>;
    /**
     * Configures the engine's behavior during a reload.
     * <div class=note>The _ConfigureReload method_ should be run before the _DoReload method_. </div>
     *
     * Parameters:
     *
     * - `cancelOnScriptError`   -   If set to true, the script execution is halted on error.
     * Otherwise, the engine continues the script execution.
     * This parameter is relevant only if the variable _ErrorMode_ is set to 1.
     * - `useErrorData`          -   If set to true, any script execution error is returned in _qErrorData_ by the _GetProgress method_.
     * - `interactOnError`       -   If set to true, the script execution is halted on error and the engine is waiting for an interaction to be performed. If the result from the interaction is 1 (_qDef.qResult_ is 1), the engine continues the script execution otherwise the execution is halted.
     * This parameter is relevant only if the variable _ErrorMode_ is set to 1 and the script is run in debug mode (_qDebug_ is set to true when calling the _DoReload method_).
     *
     * Stability: *locked*
     */
    configureReload: (cancelOnScriptError: boolean, useErrorData: boolean, interactOnError: boolean) => Promise<void>;
    /**
     * Copies an app that is in the Qlik Sense repository.
     * The engine copies the app into an app entity that was previously created by the repository.
     * <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * Parameters:
     *
     * - `targetAppId`   -   Identifier (GUID) of the app entity in the Qlik Sense repository.
     * The app entity must have been previously created by the Qlik Sense Repository Service (QRS) API.
     * - `srcAppId`      -   Identifier (GUID) of the source app in the Qlik Sense repository.
     * - `ids`           -   Array of QRS identifiers.
     * The list of all objects in the app to be copied must be given. This list must contain the GUIDs of all these objects.
     * If the list of the QRS identifiers is empty, the _CopyApp_ method copies all objects to the target app.
     * Script-defined variables are automatically copied when copying an app. To be able to copy variables not created via script, the GUID of each variable must be provided in the list of QRS identifiers.
     * To get the QRS identifiers of the objects in an app, you can use the QRS API. The GET method (from the QRS API) returns the identifiers of the objects in the app.
     * The following example returns the QRS identifiers of all the objects in a specified app:
     * GET /qrs/app/9c3f8634-6191-4a34-a114-a39102058d13
     * Where
     * _9c3f8634-6191-4a34-a114-a39102058d13_ is the identifier of the app.
     *
     * Stability: *locked*
     */
    copyApp: (targetAppId: string, srcAppId: string, ids: string[]) => Promise<boolean>;
    /**
     * Creates an app.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * ### Logs
     * When this method is called, audit activity logs are produced to track the user activity.
     * In the case of errors, both audit activity logs and system services logs are produced.
     * The log files are named as follows:
     * <table>
     * <tbody>
     * <tr>
     * <th>Audit activity log</th>
     * <th>System service log</th>
     * </tr>
     * <tr>
     * <td>   &lt;MachineName&gt;_AuditActivity_Engine.txt     in Qlik Sense Enterprise <br/>   &lt;MachineName&gt;_AuditActivity_Engine.log<i/> in Qlik Sense Desktop</td>
     * <td>   &lt;MachineName&gt;_ServiceEngine.txt     in Qlik Sense Enterprise <br/>   &lt;MachineName&gt;_ServiceEngine.log<i/> in Qlik Sense Desktop</td>
     * </tr>
     * </tbody>
     * </table>
     *
     * ### Where to find the log files
     * The location of the log files depends on whether you have installed Qlik Sense Enterprise or Qlik Sense Desktop.
     * <table>
     * <tbody>
     * <tr>
     * <th>Qlik Sense Enterprise </th>
     * <th>Qlik Sense Desktop </th>
     * </tr>
     * <tr>
     * <td>%ProgramData%/Qlik/Sense/Log/Engine</td>
     * <td>%UserProfile%/Documents/Qlik/Sense/Log</td>
     * </tr>
     * </tbody>
     * </table>
     *
     * Parameters:
     *
     * - `appName`                      -   Name of the app.
     * - `localizedScriptMainSection`   -   Name of the first section in the script editor.
     * The default value is _Main_.
     * - `locale`                       -   Set custom locale for the app instead of system default.
     *
     * Stability: *locked*
     */
    createApp: (appName: string, localizedScriptMainSection?: string, locale?: string) => Promise<unknown>;
    /**
     * Creates an app and opens an engine session.
     * <div class=note>This operation is possible only in Qlik Sense Desktop.</div>
     *
     * Parameters:
     *
     * - `docName`                      -   Name of the app.
     * - `userName`                     -   Name of the user.
     * - `password`                     -   Password of the user.
     * - `serial`                       -   Current Qlik Sense serial number.
     * - `localizedScriptMainSection`   -   Name of the first section in the script editor.
     * The default value is _Main_.
     *
     * Stability: *locked*
     */
    createDocEx: (docName: string, userName?: string, password?: string, serial?: string, localizedScriptMainSection?: string) => Promise<DocRpcObject>;
    /**
     * Creates an empty session app.
     * The following applies:
     * * The name of a session app cannot be chosen. The engine automatically assigns a unique identifier to the session app.
     * * A session app is not persisted and cannot be saved. Everything created during a session app is non-persisted; for example: objects, data connections.
     *
     * Stability: *locked*
     */
    createSessionApp: () => Promise<DocRpcObject>;
    /**
     * Creates a session app from a source app.
     * The following applies:
     * * The objects in the source app are copied into the session app.
     * * There is no data in the session app, unless it is reloaded.
     * * The script of the session app can be edited and reloaded.
     * * The name of a session app cannot be chosen. The engine automatically assigns a unique identifier to the session app.
     * * A session app is not persisted and cannot be saved. Everything created during a session app is non-persisted; for example: objects, data connections.
     *
     * Parameters:
     *
     * - `srcAppId`   -   App identifier of the source app.
     * It corresponds to _qAppId_ returned by the _CreateApp method_ when creating the source app.
     *
     * Stability: *locked*
     */
    createSessionAppFromApp: (srcAppId: string) => Promise<DocRpcObject>;
    /**
     * Deletes an app from the Qlik Sense repository or from the file system.
     *
     * #### Qlik Sense Enterprise
     * In addition to being removed from the repository, the app is removed from the directory as well:
     * *&lt;installation_directory&gt;\Qlik\Sense\Apps*
     * The default installation directory is _ProgramData_.
     *
     * #### Qlik Sense Desktop
     * The app is deleted from the directory _%userprofile%\Documents\Qlik\ \Apps_.
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * #### Logs
     * When this method is called, audit activity logs are produced to track the user activity.
     * In the case of errors, both audit activity logs and system services logs are produced.
     * The log files are named as follows:
     * <table>
     * <tbody>
     * <tr>
     * <th>Audit activity log</th>
     * <th>System service log</th>
     * </tr>
     * <tr>
     * <td>&lt;MachineName&gt;AuditActivityEngine.txt in Qlik Sense Enterprise &lt;MachineName&gt;AuditActivityEngine.log in Qlik Sense Desktop</td>
     * <td>&lt;MachineName&gt;ServiceEngine.txt in Qlik Sense Enterprise &lt;MachineName&gt;ServiceEngine.log in Qlik Sense Desktop</td>
     * </tr>
     * </tbody>
     * </table>
     *
     * #### Where to find the log files
     * The location of the log files depends on whether you have installed Qlik Sense Enterprise or Qlik Sense Desktop.
     * <table>
     * <tbody>
     * <tr>
     * <th>Qlik Sense Enterprise </th>
     * <th>Qlik Sense Desktop </th>
     * </tr>
     * <tr>
     * <td>%ProgramData%/Qlik/Sense/Log/Engine</td>
     * <td>%UserProfile%/Documents/Qlik/Sense/Log</td>
     * </tr>
     * </tbody>
     * </table>
     *
     * Parameters:
     *
     * - `appId`   -   Identifier of the app to delete.
     * In Qlik Sense Enterprise, the identifier of the app is a GUID in the Qlik Sense repository.
     * In Qlik Sense Desktop, the identifier of the app is the name of the app, as defined in the apps folder _%userprofile%\Documents\Qlik\Sense\Apps_.
     *
     * Stability: *locked*
     */
    deleteApp: (appId: string) => Promise<boolean>;
    /**
     * Returns the version number of the Qlik engine component.
     *
     * Stability: *locked*
     */
    engineVersion: () => Promise<NxEngineVersion>;
    /**
     * Exports an app from the Qlik Sense repository to the file system.
     * <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * #### Logs
     * When this method is called, audit activity logs are produced to track the user activity.
     * In the case of errors, both audit activity logs and system services logs are produced.
     * The log files are named as follows:
     * <table>
     * <tbody>
     * <tr>
     * <th>Audit activity log</th>
     * <th>System service log</th>
     * </tr>
     * <tr>
     * <td>*&lt;MachineName&gt;_AuditActivityEngine.txt*</td>
     * <td>*&lt;MachineName&gt;_ServiceEngine.txt*</td>
     * </tr>
     * </tbody>
     * </table>
     *
     * The log files are located in:
     * _%ProgramData%/Qlik/Sense/Log/Engine_
     *
     * Parameters:
     *
     * - `targetPath`   -   Path and name of the target app.
     * - `srcAppId`     -   Identifier of the source app. The identifier is a GUID from the Qlik Sense repository.
     * - `ids`          -   Array of identifiers.
     * The list of all the objects in the app to be exported must be given. This list must contain the GUIDs of all these objects.
     * - `noData`       -   Set this parameter to true if the data should be omitted in the exported app.
     *
     * Stability: *locked*
     */
    exportApp: (targetPath: string, srcAppId: string, ids: string[], noData?: boolean) => Promise<boolean>;
    /**
     * Returns the handle of the current app.
     *
     * Stability: *locked*
     */
    getActiveDoc: () => Promise<DocRpcObject>;
    /**
     * Retrieves the meta data of an app.
     *
     * Parameters:
     *
     * - `appID`   -   Identifier of the app, as returned by the _CreateApp method_.
     * One of:
     * * Path and name of the app (Qlik Sense Desktop)
     * * GUID (Qlik Sense Enterprise)
     *
     * Stability: *locked*
     */
    getAppEntry: (appID: string) => Promise<AppEntry>;
    /**
     * Retrieves information about the authenticated user.
     *
     * Stability: *locked*
     */
    getAuthenticatedUser: () => Promise<string>;
    /**
     * Gets the current Backus-Naur Form (BNF) grammar of the Qlik engine scripting language. The BNF rules define the syntax for the script statements and the script or chart functions.
     * In the Qlik engine BNF grammar, a token is a string of one or more characters that is significant as a group. For example, a token could be a function name, a number, a letter, a parenthesis, and so on.
     *
     * Parameters:
     *
     * - `bnfType`   -   Returns a set of rules defining the syntax for:
     * * The script statements and the script functions if _qBnfType_ is set to S.
     * * The chart functions if _qBnfType_ is set to E.
     *
     * One of:
     * * S or SCRIPT_TEXT_SCRIPT
     * * E or SCRIPT_TEXT_EXPRESSION
     *
     * @deprecated: Use the _GetBaseBNF_ method instead
     *
     * Stability: *locked*
     */
    getBNF: (bnfType: string) => Promise<BNFDef[]>;
    /**
     * Gets the current Backus-Naur Form (BNF) grammar of the Qlik engine scripting language, as well as a string hash calculated from that grammar. The BNF rules define the syntax for the script statements and the script or chart functions. If the hash changes between subsequent calls to this method, this indicates that the BNF has changed.
     * In the Qlik engine grammars, a token is a string of one or more characters that is significant as a group. For example, a token could be a function name, a number, a letter, a parenthesis, and so on.
     *
     * Parameters:
     *
     * - `bnfType`   -   The type of grammar to return:
     * * The script statements and the script functions if _qBnfType_ is set to S.
     * * The chart functions if _qBnfType_ is set to E.
     *
     * One of:
     * * S or SCRIPT_TEXT_SCRIPT
     * * E or SCRIPT_TEXT_EXPRESSION
     *
     * Stability: *locked*
     */
    getBaseBNF: (bnfType: string) => Promise<unknown>;
    /**
     * Gets a string hash calculated from the current Backus-Naur Form (BNF) grammar of the Qlik engine scripting language. If the hash changes between subsequent calls to this method, this indicates that the BNF grammar has changed.
     *
     * Parameters:
     *
     * - `bnfType`   -   The type of grammar to return:
     * * The script statements and the script functions if _qBnfType_ is set to S.
     * * The chart functions if _qBnfType_ is set to E.
     *
     * One of:
     * * S or SCRIPT_TEXT_SCRIPT
     * * E or SCRIPT_TEXT_EXPRESSION
     *
     * Stability: *locked*
     */
    getBaseBNFHash: (bnfType: string) => Promise<string>;
    /**
     * Gets the current Backus-Naur Form (BNF) grammar of the Qlik engine scripting language, as well as a string hash calculated from that grammar. The BNF rules define the syntax for the script statements and the script or chart functions. If the hash changes between subsequent calls to this method, this indicates that the BNF has changed.
     * In the Qlik engine grammars, a token is a string of one or more characters that is significant as a group. For example, a token could be a function name, a number, a letter, a parenthesis, and so on.
     *
     * Parameters:
     *
     * - `bnfType`   -   The type of grammar to return:
     * * S: returns the script statements and the script functions.
     * * E: returns the chart functions.
     *
     * One of:
     * * S or SCRIPT_TEXT_SCRIPT
     * * E or SCRIPT_TEXT_EXPRESSION
     *
     * Stability: *locked*
     */
    getBaseBNFString: (bnfType: string) => Promise<unknown>;
    /**
     * List the custom connectors available in the system.
     *
     * Parameters:
     *
     * - `reloadList`   -   Sets if the list of custom connectors should be reloaded or not.
     * If set to false, only the connectors that were returned the previous time are returned. If new connectors have been added since the last call to the _GetCustomConnectors_ method was made, the new connectors are not returned.
     * If set to true, the _GetCustomConnectors_ method looks for new connectors in the file system.
     * The default value is false.
     *
     * Stability: *locked*
     */
    getCustomConnectors: (reloadList?: boolean) => Promise<CustomConnector[]>;
    /**
     * Lists the databases in a ODBC, OLEDB or CUSTOM data source.
     *
     * Parameters:
     *
     * - `connection`   -   Information about the connection.
     *
     * Stability: *locked*
     */
    getDatabasesFromConnectionString: (connection: Connection) => Promise<Database[]>;
    /**
     * Returns the folder where the apps are stored.
     * <div class=note>This method applies only if running Qlik Sense Desktop.</div>
     *
     * Stability: *locked*
     */
    getDefaultAppFolder: () => Promise<string>;
    /**
     * Returns the list of apps.
     *
     * **In Qlik Sense Enterprise:**
     *
     * The list is generated by the QRS. The GetDocList method only returns documents the current user is allowed to access.
     *
     * **In Qlik Sense Desktop:**
     *
     * The apps are located in _C:\Users\&lt;user name&gt;\Documents\Qlik\Sense\Apps_.
     *
     * Stability: *locked*
     */
    getDocList: () => Promise<DocListEntry[]>;
    /**
     * Returns the files and folders located at a specified path.
     *
     * Parameters:
     *
     * - `path`   -   Absolute or relative path.
     * Relative paths are relative to the default _Apps_ folder.
     *
     * **In Qlik Sense Enterprise:**
     *
     * The list is generated by the QRS. The GetDocList method only returns documents the current user is allowed to access.
     *
     * **In Qlik Sense Desktop:**
     *
     * The apps are located in _C:\Users\&lt;user name&gt;\Documents\Qlik\Sense\Apps_.
     *
     * Stability: *locked*
     */
    getFolderItemsForPath: (path: string) => Promise<FolderItem[]>;
    /**
     * Gets the list of all the script functions.
     *
     * Parameters:
     *
     * - `group`   -   Name of the group.
     * Default is all groups.
     *
     * One of:
     * * ALL or FUNC_GROUP_ALL
     * * U or FUNC_GROUP_UNKNOWN
     * * NONE or FUNC_GROUP_NONE
     * * AGGR or FUNC_GROUP_AGGR
     * * NUM or FUNC_GROUP_NUMERIC
     * * RNG or FUNC_GROUP_RANGE
     * * EXP or FUNC_GROUP_EXPONENTIAL_AND_LOGARITHMIC
     * * TRIG or FUNC_GROUP_TRIGONOMETRIC_AND_HYPERBOLIC
     * * FIN or FUNC_GROUP_FINANCIAL
     * * MATH or FUNC_GROUP_MATH_CONSTANT_AND_PARAM_FREE
     * * COUNT or FUNC_GROUP_COUNTER
     * * STR or FUNC_GROUP_STRING
     * * MAPP or FUNC_GROUP_MAPPING
     * * RCRD or FUNC_GROUP_INTER_RECORD
     * * CND or FUNC_GROUP_CONDITIONAL
     * * LOG or FUNC_GROUP_LOGICAL
     * * NULL or FUNC_GROUP_NULL
     * * SYS or FUNC_GROUP_SYSTEM
     * * FILE or FUNC_GROUP_FILE
     * * TBL or FUNC_GROUP_TABLE
     * * DATE or FUNC_GROUP_DATE_AND_TIME
     * * NUMI or FUNC_GROUP_NUMBER_INTERPRET
     * * FRMT or FUNC_GROUP_FORMATTING
     * * CLR or FUNC_GROUP_COLOR
     * * RNK or FUNC_GROUP_RANKING
     * * GEO or FUNC_GROUP_GEO
     * * EXT or FUNC_GROUP_EXTERNAL
     * * PROB or FUNC_GROUP_PROBABILITY
     * * ARRAY or FUNC_GROUP_ARRAY
     * * LEG or FUNC_GROUP_LEGACY
     * * DB or FUNC_GROUP_DB_NATIVE
     * * WINDOW or FUNC_GROUP_WINDOW
     *
     * Stability: *locked*
     */
    getFunctions: (group?: string) => Promise<QFunction[]>;
    /**
     * Retrieves information on the user interaction that is requested by the engine.
     * Engine can request user interactions only during script reload and when the reload is performed in debug mode ( _qDebug_ is set to true when using the _DoReload method_ ).
     * When running reload in debug mode, the engine pauses the script execution to receive data about user interaction. The engine can pause:
     * * Before executing a new script statement.
     * * When an error occurs while executing the script.
     * * When the script execution is finished.
     *
     * To know if the engine is paused and waits for a response to an interaction request, the _GetProgress method_ should be used. The engine waits for a response if the property _qUserInteractionWanted_ is set to true in the response of the _GetProgress_ request.
     *
     * Parameters:
     *
     * - `requestId`   -   Identifier of the request.
     * Corresponds to the identifier of the _DoReload_ request.
     *
     * Stability: *locked*
     */
    getInteract: (requestId: number) => Promise<InteractDef>;
    /**
     * Lists the logical drives in the system.
     * <div class=note>This method applies only if running Qlik Sense Desktop.</div>
     *
     * Stability: *locked*
     */
    getLogicalDriveStrings: () => Promise<DriveInfo[]>;
    /**
     * Returns the list of the ODBC connectors that are installed in the system.
     *
     * Stability: *locked*
     */
    getOdbcDsns: () => Promise<OdbcDsn[]>;
    /**
     * Returns the list of the OLEDB providers installed on the system.
     *
     * Stability: *locked*
     */
    getOleDbProviders: () => Promise<OleDbProvider[]>;
    /**
     * Gives information about the progress of the _DoReload_ and _DoSave_ calls.
     * <div class=note>For more information on DoReload and DoSave, see the _DoReload Method_ and _DoSave Method_. </div>
     *
     * Parameters:
     *
     * - `requestId`   -   Identifier of the _DoReload_ or _DoSave_ request or 0.
     * Complete information is returned if the identifier of the request is given.
     * If the identifier is 0, less information is given. Progress messages and error messages are returned but information like when the request started and finished is not returned.
     *
     * Stability: *locked*
     */
    getProgress: (requestId: number) => Promise<ProgressData>;
    /**
     * Lists the streams.
     *
     * @deprecated: Use general purpose endpoint in [QRS API: GET qrs/stream/](/Subsystems/RepositoryServiceAPI/Content/Sense_RepositoryServiceAPI/RepositoryServiceAPI-Get.htm) instead.
     *
     * Stability: *locked*
     */
    getStreamList: () => Promise<NxStreamListEntry[]>;
    /**
     * Lists the supported code pages.
     *
     * Stability: *locked*
     */
    getSupportedCodePages: () => Promise<CodePage[]>;
    /**
     * Returns the unique identifier of the endpoint for the current user in the current app.
     * <div class=note>This unique identifier can be used for logging purposes.</div>
     *
     * Stability: *locked*
     */
    getUniqueID: () => Promise<string>;
    /**
     * Informs the engine that a user interaction (which was earlier requested by the engine) was performed and indicates to the engine what to do next.
     *
     * Parameters:
     *
     * - `requestId`   -   Identifier of the request.
     * Corresponds to the identifier of the _DoReload_ request.
     * - `def`         -   User response to the current interaction.
     *
     * Stability: *locked*
     */
    interactDone: (requestId: number, def: InteractDef) => Promise<void>;
    /**
     * Indicates whether the user is working in Qlik Sense Desktop.
     *
     * Stability: *locked*
     */
    isDesktopMode: () => Promise<boolean>;
    /**
     * Indicates whether or not the user is working in personal mode (Qlik Sense Desktop).
     *
     * @deprecated: Use _IsDesktopMode_ method instead
     *
     * Stability: *locked*
     */
    isPersonalMode: () => Promise<boolean>;
    /**
     * Checks if a connection string is valid.
     *
     * Parameters:
     *
     * - `connection`   -   Information about the connection.
     *
     * Stability: *locked*
     */
    isValidConnectionString: (connection: Connection) => Promise<boolean>;
    /**
     * Returns the name of the operating system.
     *
     * Stability: *locked*
     */
    oSName: () => Promise<string>;
    /**
     * Returns the version number of the operating system.
     *
     * Stability: *locked*
     */
    oSVersion: () => Promise<string>;
    /**
     * Opens an app and checks if the app needs to be migrated (if the app is deprecated).
     * The _OpenDoc method_ compares the version of the app with the version of Qlik Sense and migrates the app to the current version of Qlik Sense if necessary. Once the migration is done, the app is opened.
     * If no migration is needed, the app is opened immediately.
     * The following applies:
     * * The app version is lower than 0.95: no migration is done. Apps older than the version 0.95 are not supported.
     * * The app version is at least 0.95 and less than the Qlik Sense version: the app is migrated and then opened.
     * * Qlik Sense and the app have the same version: the app is opened, no migration is needed.
     *
     * <div class=note>If the app is read-only, the app migration cannot occur. An error message is sent.</div>
     *
     * #### Backups
     * In Qlik Sense Desktop, apps are automatically backed up before a migration.
     * The backup files are located in _%userprofile%\Documents\Qlik\Sense\AppsBackup\&lt;Qlik Sense Desktop version&gt;_.
     * In Qlik Sense Enterprise, no automatic back up is run. The back up should be done manually.
     *
     * Parameters:
     *
     * - `docName`    -   The GUID (in Qlik Sense Enterprise) or Name (in Qlik Sense Desktop) of the app to retrieve.
     * - `userName`   -   Name of the user that opens the app.
     * - `password`   -   Password of the user.
     * - `serial`     -   Current Qlik Sense serial number.
     * - `noData`     -   Set this parameter to true to be able to open an app without loading its data.
     * When this parameter is set to true, the objects in the app are present but contain no data. The script can be edited and reloaded.
     * The default value is false.
     *
     * Stability: *locked*
     */
    openDoc: (docName: string, userName?: string, password?: string, serial?: string, noData?: boolean) => Promise<DocRpcObject>;
    /**
     * Returns the Qlik Sense version number.
     *
     * @deprecated: Use _EngineVersion_ method instead
     *
     * Stability: *locked*
     */
    productVersion: () => Promise<string>;
    /**
     * Publishes an app to the supplied stream.
     *
     * Parameters:
     *
     * - `appId`      -   The Id of the app to publish.
     * - `name`       -   The name of the app to publish.
     * - `streamId`   -   The stream Id of the app to publish.
     *
     * Stability: *locked*
     */
    publishApp: (appId: string, name: string, streamId: string) => Promise<void>;
    /**
     * Returns the Qlik product name.
     *
     * Stability: *locked*
     */
    qTProduct: () => Promise<string>;
    /**
     * Returns the Qlik Sense version number.
     *
     * @deprecated: Use the _EngineVersion_ method instead
     *
     * Stability: *locked*
     */
    qvVersion: () => Promise<string>;
    /**
     * Reloads the list of extensions.
     *
     * Stability: *locked*
     */
    reloadExtensionList: () => Promise<void>;
    /**
     * Replaces objects of a target app with the objects from a source app.
     * The list of objects in the app to be replaced must be defined in _qIds_.
     * <div class=note>The data model of the app cannot be updated. </div> <div class=note>This operation is possible only in Qlik Sense Enterprise.</div>
     *
     * <div class=note>The operation is successful if **qSuccess** is set to true. </div>
     *
     * Parameters:
     *
     * - `targetAppId`   -   Identifier (GUID) of the target app.
     * The target app is the app to be replaced.
     * - `srcAppID`      -   Identifier (GUID) of the source app.
     * The objects in the source app will replace the objects in the target app.
     * - `ids`           -   QRS identifiers (GUID) of the objects in the target app to be replaced. Only QRS-approved GUIDs are applicable.
     * An object that is QRS-approved, is for example an object that has been published (for example, not private anymore).
     * If an object is private, it should not be included in this list.
     * If the array of identifiers contains objects that are not present in the source app, the objects related to these identifiers are removed from the target app.
     * If _qIds_ is empty, no objects are deleted in the target app.
     *
     * Stability: *locked*
     */
    replaceAppFromID: (targetAppId: string, srcAppID: string, ids: string[]) => Promise<boolean>;
    /**
     * Save a copy of an app with a different name.
     * Can be used to save a session app as an ordinary app.
     *
     * Parameters:
     *
     * - `newAppName`   -   &lt;Name of the saved app&gt;
     *
     * @deprecated: Use Document _SaveAs_ method instead
     *
     * Stability: *locked*
     */
    saveAs: (newAppName: string) => Promise<string>;
    /**
     * Shuts down the Qlik engine.
     * <div class=note>This operation is possible only in Qlik Sense Desktop.</div>
     *
     * Stability: *locked*
     */
    shutdownProcess: () => Promise<void>;
};
type NativeVariableFunctions = {
    /**
     * Sets the value of a dual variable overriding any input constraints.
     *
     * Parameters:
     *
     * - `s`   -   String representation of a dual value.
     * Set this parameter to "", if the string representation is to be Null.
     * - `d`   -   Numeric representation of a dual value.
     *
     * @deprecated: Use _GenericVariable::SetProperties_ method instead
     *
     * Stability: *locked*
     */
    forceContent: (s: string, d: number) => Promise<void>;
    /**
     * Returns the calculated value of a variable.
     *
     * @deprecated: Use _GenericVariable::GetProperties_ method instead
     *
     * Stability: *locked*
     */
    getContent: () => Promise<AlfaNumString>;
    /**
     * Gets the properties of a variable.
     *
     * @deprecated: Use _GetProperties_ method instead
     *
     * Stability: *locked*
     */
    getNxProperties: () => Promise<NxVariableProperties>;
    /**
     * Returns the raw value of a variable.
     *
     * @deprecated: Use _GenericVariable::GetProperties_ method instead
     *
     * Stability: *locked*
     */
    getRawContent: () => Promise<string>;
    /**
     * Sets a value to a variable.
     *
     * Parameters:
     *
     * - `content`     -   Value of the variable.
     * - `updateMRU`   -   If set to true, the value is added to the Most Recently Used (MRU) list.
     *
     * @deprecated: Use _GenericVariable::SetProperties_ method instead
     *
     * Stability: *locked*
     */
    setContent: (content: string, updateMRU: boolean) => Promise<boolean>;
    /**
     * Sets some properties to a variable.
     *
     * Parameters:
     *
     * - `properties`   -   Information about the properties of the variable
     *
     * @deprecated: Use _SetProperties_ method instead
     *
     * Stability: *locked*
     */
    setNxProperties: (properties: NxVariableProperties) => Promise<void>;
};

type ListItem<QData = Record<string, unknown>> = NxContainerEntry<QData>;
type ListBoxProperties = {
    qInfo?: NxInfo;
    qListBoxDef?: ListObjectDef;
    qAppObjectListDef?: AppObjectListDef;
};
type SheetListDataCellBounds = {
    x: number;
    y: number;
    width: number;
    height: number;
};
type SheetListDataCell = {
    bounds: SheetListDataCellBounds;
    col: number;
    colspan: number;
    name: string;
    row: number;
    rowspan: number;
    type: string;
};
type SheetListItem = ListItem<SheetListData>;
type SheetListData = {
    /** from /qMetaDef/title */
    title: string;
    labelExpression: string;
    showCondition: any;
    /** from /qMetaDef/description */
    description: string;
    descriptionExpression: string;
    thumbnail: any;
    cells: SheetListDataCell[];
    rank: number;
    columns: number;
    rows: number;
};
type VariableListItem = ListItem<VariableListData>;
type VariableListData = {
    tags: string[];
};
type MeasureListItem = ListItem<MeasureListData>;
type MeasureListData = {
    /** from  /qMetaDef/title */
    title: string;
    /** from  /qMetaDef/tags */
    tags: string[];
    /** from  /qMeasure/qLabelExpression */
    labelExpression: string;
};
type MasterObjectListItem = ListItem<MasterObjectListData>;
type MasterObjectListData = {
    /** from /qMetaDef/title */
    name: any;
    /** from /labelExpression */
    labelExpression: string;
    /** from /visualization */
    visualization: any;
    /** from /qMetaDef/tags */
    tags: string[];
};
type DimensionListItem = ListItem<DimensionListData>;
type DimensionListData = {
    /** from /qMetaDef/title */
    title: string;
    /** from /qMetaDef/tags */
    tags: string[];
    /** from /qDim/qGrouping */
    grouping: string;
    /** from /qDimInfos */
    info: GenericDimensionInfo[];
    /** from /qDim/qLabelExpression */
    labelExpression: string;
};
type BookmarkListItem = ListItem<BookmarkListData>;
type BookmarkListData = {
    /** /qMetaDef/title */
    title: string;
    /** /qMetaDef/description */
    description: string;
    /** /sheetId */
    sheetId: string;
    /** /selectionFields */
    selectionFields: any;
    /** /creationDate */
    creationDate: any;
};
type ODAGAppLinkListItem = ListItem<ODAGAppLinkListData>;
type ODAGAppLinkListData = {
    /** /qMetaDef/odagLinkRef */
    odagLinkRef: any;
    /** /qMetaDef/timestamp */
    timestamp: any;
};
type DynamicAppViewListItem = ListItem<DynamicAppViewListData>;
type DynamicAppViewListData = {
    /** /qMetaDef/odagLinkRef */
    odagLinkRef: any;
    /** /qMetaDef/timestamp */
    timestamp: any;
};
type StoryListItem = ListItem<StoryListData>;
type StoryListData = {
    /** /qMetaDef/title */
    title: string;
    /** /qMetaDef/description */
    description: string;
    /** /thumbnail */
    thumbnail: string;
    /** /rank */
    rank: any;
};
type ExpandedFieldListItem = {
    qName: string;
    qSrcTables: string[];
    qTags: string[];
    isDerived: boolean;
    sourceField: string;
    derivedDefinitionName: string;
};

type RpcObject = {
    id: string;
    type: string;
    genericType: string;
    handle: number;
    on(event: "changed" | "closed", func: () => void): void;
    emit(event: "changed" | "closed"): void;
    migrate: {
        properties(properties: any): any;
        snapshot(layout: any): any;
    };
    isValid: boolean;
    isValidating: boolean;
    isInvalid: boolean;
    isClosed: boolean;
    isClosing: boolean;
    isCancelled: boolean;
    Validated: StateNotification;
    Invalidated: StateNotification;
    Validating: StateNotification;
    Closed: StateNotification;
    Closing: StateNotification;
    Cancelled: StateNotification;
};
type StateNotification = {
    /**
     * Observe a Notification by sending in an observer function.
     *
     * Please note that if you want to proxy an notification to another object, for now
     * it's not possible to do:
     *
     * ```obj1.EventName.bind( obj2.OtherEvent.emit );```
     *
     * You have to do:
     *
     * ```obj1.EventName.bind( function() { obj2.OtherEvent.emit } );```
     *
     * @param {Function} observer The observer function to handle to notification.
     * @throws {Error} When the observer is not a {@link Function}.
     */
    bind(observer: Function): void;
    /**
     * Observe a Notification only once and then unbind automatically from any future notifications.
     *
     * @param {Function} observer The observer function to handle to notification.
     */
    once(observer: Function): void;
    /**
     * Stop observing a notification.
     *
     * @param {Function} observer The observer function that now should ignore any future notifications.
     */
    unbind(observer: Function): void;
};

type GenericObjectPropertiesNodeRec<NextLevel> = GenericObjectPropertiesAdditionalProperties & Record<string, NextLevel | Array<NextLevel | string | number | boolean> | string | number | boolean>;
type GenericObjectPropertiesNodeLevel5 = unknown;
type GenericObjectPropertiesNodeLevel4 = GenericObjectPropertiesNodeRec<GenericObjectPropertiesNodeLevel5>;
type GenericObjectPropertiesNodeLevel3 = GenericObjectPropertiesNodeRec<GenericObjectPropertiesNodeLevel4>;
type GenericObjectPropertiesNodeLevel2 = GenericObjectPropertiesNodeRec<GenericObjectPropertiesNodeLevel3>;
type GenericObjectPropertiesNode = GenericObjectPropertiesNodeRec<GenericObjectPropertiesNodeLevel2>;
type AnyGenericObjectProperties = GenericObjectPropertiesNode & GenericObjectProperties;
type GenericObjectLayoutNodeRec<NextLevel> = GenericObjectLayoutAdditionalProperties<Record<string, unknown>> & Record<string, NextLevel | Array<NextLevel | string | number | boolean> | string | number | boolean>;
type GenericObjectLayoutNodeLevel5 = unknown;
type GenericObjectLayoutNodeLevel4 = GenericObjectLayoutNodeRec<GenericObjectLayoutNodeLevel5>;
type GenericObjectLayoutNodeLevel3 = GenericObjectLayoutNodeRec<GenericObjectLayoutNodeLevel4>;
type GenericObjectLayoutNodeLevel2 = GenericObjectLayoutNodeRec<GenericObjectLayoutNodeLevel3>;
type GenericObjectLayoutNode = GenericObjectLayoutNodeRec<GenericObjectLayoutNodeLevel2>;
type AnyGenericObjectLayout = GenericObjectLayoutNode & GenericObjectLayout;
interface GenericObject<PropsType = AnyGenericObjectProperties, LayoutType = AnyGenericObjectLayout> extends RpcObject, NativeGenericObjectFunctions<PropsType, LayoutType, GenericObject> {
    app: Doc;
}
type Field = RpcObject & NativeFieldFunctions;
type GenericBookmark = RpcObject & NativeGenericBookmarkFunctions;
type GenericDimension = RpcObject & NativeGenericDimensionFunctions;
type GenericMeasure = RpcObject & NativeGenericMeasureFunctions;
type GenericVariable = RpcObject & NativeGenericVariableFunctions;
type GenericListObject<ItemType = ListItem<any>> = GenericObject<AnyGenericObjectProperties, ItemType[]>;
type CurrentSelections = GenericObject & {
    clearField(fieldName: string, state: string): Promise<boolean>;
    lockField(fieldName: string): Promise<boolean>;
    unlockField(fieldName: string): Promise<boolean>;
    clearAll(): Promise<void>;
    back(): Promise<void>;
    forward(): Promise<void>;
};
type UndoInfoObject = GenericObject & {
    undo(): Promise<void>;
    redo(): Promise<void>;
    reset(): Promise<void>;
    /**
     * Marks start of a group of operations in undo-stack
     *
     * @returns {Number} Unique group id which should be used when ending group (to avoid nested groups)
     */
    startGroup(): Promise<number>;
    /**
     * Marks end of a group of operations in undo-stack
     *
     * @param groupId - unique id to map against start marker (to avoid nested groups)
     */
    endGroup(groupId: number): Promise<void>;
};
type FieldListObject = GenericListObject<NxFieldDescription> & {
    expand(): Promise<(NxDerivedFieldsData | ExpandedFieldListItem)[]>;
};

type Doc = RpcObject & NativeDocFunctions<Field, GenericBookmark, GenericDimension, GenericMeasure, GenericObject, GenericVariable, AnyGenericObjectProperties> & StandardFunctions & ObjectHelperFunctions & ModalFunctions & ListFunctions & SpecialObjectFunctions;
type StandardFunctions = {
    /** Alias for getAppProperties */
    getProperties(): Promise<NxAppProperties>;
    /** Alias for setAppProperties */
    setProperties(props: NxAppProperties): Promise<void>;
    /** Alias for getAppLayout */
    getLayout(): Promise<NxAppLayout>;
};
type ModalFunctions = {
    /**
     * Aborts the modal selection state in Engine.
     *
     * @param {Boolean} accept Whether to apply the selections made while in modal state
     * @returns {Promise} A promise of a result
     */
    abortModalSelection(accept: boolean): Promise<void>;
    /**
     * Aborts the modal selection state in Engine.
     *
     * @param {Boolean} accept Whether to apply the selections made while in modal state
     * @returns {Promise} A promise of a result
     */
    abortModalSelection(accept: boolean): Promise<void>;
    /**
     * Switches the modal selection state in Engine.
     *
     * @param {RpcObject|null} [object] If defined, will switch modal state to that model, if null, will end selection modal state
     * @param {String|Array} [path] If defined, will use the given path(s) for which hypercube(s) to apply the modal state on
     * @param {Boolean} accept Whether to apply the selections made while in modal state
     * @returns {Promise} A promise of a result
     */
    switchModalSelection(object: RpcObject | undefined | null, path: string | string[] | undefined, accept: boolean): Promise<void>;
    /**
     * Switches the modal selection state in Engine.
     *
     * @param {RpcObject|null} [object] If defined, will switch modal state to that model, if null, will end selection modal state
     * @param {String|Array} [path] If defined, will use the given path(s) for which hypercube(s) to apply the modal state on
     * @param {Boolean} accept Whether to apply the selections made while in modal state
     * @returns {Promise} A promise of a result
     */
    switchModalSelection(object: RpcObject | undefined | null, path: string | string[] | undefined, accept: boolean): Promise<void>;
    /**
     * Sets an object as selection modal target.
     */
    setModalSelection(obj: RpcObject): Promise<void>;
    /**
     * Sets an object as selection modal target.
     */
    setModalSelection(obj: RpcObject): Promise<void>;
    /**
     * @returns {Boolean} whether the app is in selection modal state
     */
    isInModalSelection(): Promise<boolean>;
    /**
     * @returns {Boolean} whether the app is in selection modal state
     */
    isInModalSelection(): Promise<boolean>;
};
type ObjectHelperFunctions = {
    getOrCreateSessionObject<GenericObjectCustomType extends GenericObject = GenericObject>(props: ListBoxProperties): Promise<GenericObjectCustomType>;
    /**
     * Help method to fetch list objects from Engine through as session objects
     * @param {Object} listDef - specifications of which type of list to fetch
     * @param {Object} listDef.qInfo - qInfo object specifying a type and id for the session object
     * @returns {Promise<Object>} Promise containing the list handling object if resolved or Error if rejected
     */
    getListObject<ItemType>(listDef: ListBoxProperties): Promise<GenericListObject<ItemType>>;
    /**
     * Help method to fetch app object data from Engine through a session object
     * @param {Object} listDef - specifications of which type of list to fetch
     * @param {Object} listDef.qInfo - qInfo object specifying a type and id for the session object
     * @returns {Promise.<Array>} A Promise that when resolved holds a list of data objects of the specified type
     */
    getListData<ItemType>(listDef: ListBoxProperties): Promise<ItemType[]>;
};
type ListFunctions = {
    getFieldList(): Promise<NxFieldDescription[]>;
    getFieldListObject(): Promise<FieldListObject>;
    getOnTheFlyListObject(): Promise<GenericListObject<NxFieldDescription>>;
    getOnTheFlyWithHiddenListObject(): Promise<GenericListObject<NxFieldDescription>>;
    getDimensionList(): Promise<DimensionListItem[]>;
    getDimensionListObject(): Promise<GenericListObject<DimensionListItem>>;
    getMeasureList(): Promise<MeasureListItem[]>;
    getMeasureListObject(): Promise<GenericListObject<MeasureListItem>>;
    getMasterObjectList(): Promise<MasterObjectListItem[]>;
    getMasterObjectListObject(): Promise<GenericListObject<MasterObjectListItem>>;
    getVariableList(): Promise<VariableListItem[]>;
    getVariableListObject(): Promise<GenericListObject<VariableListItem>>;
    getBookmarkList(): Promise<BookmarkListItem[]>;
    getBookmarkListObject(): Promise<BookmarkListItem[]>;
    getSheetList(): Promise<SheetListItem[]>;
    getSheetListObject(): Promise<GenericListObject<SheetListItem>>;
    getStoryList(): Promise<StoryListItem[]>;
    getStoryListObject(): Promise<GenericListObject<StoryListItem>>;
    getODAGAppLinkList(): Promise<ODAGAppLinkListItem[]>;
    getODAGAppLinkListObject(): Promise<GenericListObject<ODAGAppLinkListItem>>;
    getDynamicAppViewList(): Promise<DynamicAppViewListItem[]>;
    getDynamicAppViewObject(): Promise<GenericListObject<DynamicAppViewListItem>>;
};
type SpecialObjectFunctions = {
    getUndoInfoObject(): Promise<UndoInfoObject>;
    getCurrentSelectionObject(): Promise<CurrentSelections>;
};

type Global = RpcObject & NativeGlobalFunctions<Doc>;

type WebSocketEventPayloads = {
    opened: object;
    suspended: {
        code: number;
        reason: string;
        initiator: "manual" | "network";
    };
    resuming: object;
    resumed: object;
    closed: {
        code: number;
        reason: string;
    };
};
type WebSocketEventType = keyof WebSocketEventPayloads;
type StateType = "open" | "suspended" | "resuming" | "closed";
type StateEvent = {
    state: StateType;
};

type OpenAppSessionProps = {
    /** App ID to open */
    appId: string;
    /** Set a value to open an individual session to the same app that is different from the default */
    identity?: string;
    /** Hostconfig to connect to a URL and authenticate an app session */
    hostConfig?: HostConfig;
    /** Set to true if app should be opened without loading the data blob */
    withoutData?: boolean;
    /** Use a separate reload engine to perform a reload */
    useReloadEngine?: boolean;
};
type DocAction = (doc: Doc) => Promise<unknown>;
type CloseProps = {
    /**
     * Defines after how much time the websocket is actually closed. Typically only used in test cases. By default a suitable small delay is used.
     * The reason for having a delay is to support unmounting a UI (which closes its app session) and mounting a new UI (which opens a new app session) in short succession without having
     * to recreate the underlying websocket.
     */
    websocketCloseDelay?: number;
};
/**
 * An object that represents one usage of an enigma websocket connected to the engine.
 */
type AppSession = {
    /**
     * Returns a promise of the Qix Doc object with a set of client-side Api extensions.
     * Note that while the AppSession object is returned immediately this promise might take a while
     * to resolve for bigger apps.
     */
    getDoc: () => Promise<Doc>;
    /**
     * @experimental
     * Add an event-listener for this app-session.
     */
    onWebSocketEvent: (listener: (event: WebSocketEvent) => void) => () => void;
    /**
     * @experimental
     * Resume a suspended session. This will resume exactly
     * once if the session is currently suspended, otherwise
     * nothing will be done.
     */
    resume: () => Promise<void>;
    /**
     * When the app session is no longer in use it must be closed using this function.
     * If the same underlying enigma websocket is used somewhere else in the browser
     * this is basically a no op, but if this is the last/only usage
     * of the underlying enigma websocket that websocket will be closed.
     */
    close: (props?: CloseProps) => Promise<void>;
};
type NativeReactHooks = {
    useEffect: Function;
    useState: Function;
};
/**
 * React hook that returns the `Doc` of an app based on the supplied app id
 * @param appId The app id of the app (referred to as resourceId in the items api)
 */
type UseAppHook = (appId: string) => Doc | undefined;
/**
 * @experimental
 * The type of event that is sent to any listeners added through onWebSocketEvent.
 */
type WebSocketEvent<ET extends WebSocketEventType = WebSocketEventType> = {
    [K in WebSocketEventType]: {
        eventType: K;
    } & WebSocketEventPayloads[K] & OpenAppSessionProps;
}[ET];
/**
 * @experimental
 * The type of event that is sent to listeners added through onCombinedWebSocketStateChange.
 */
type CombinedWebSocketStateEvent = StateEvent;

declare function openAppSession(appSessionProps: OpenAppSessionProps): {
    /**
     * Returns a promise of the Qix Doc object with a set of client-side Api extensions.
     * Note that while the AppSession object is returned immediately this promise might take a while
     * to resolve for bigger apps.
     */
    getDoc(): Promise<Doc>;
    /**
     * @experimental
     * Add an event-listener for this app-session.
     */
    onWebSocketEvent(listener: (event: WebSocketEvent) => void): () => void;
    /**
     * @experimental
     * Resume a suspended session. This will resume exactly
     * once if the session is currently suspended, otherwise
     * nothing will be done.
     */
    resume(): Promise<void>;
    /**
     * When the app session is no longer in use it must be closed using this function.
     * If the same underlying enigma websocket is used somewhere else in the browser
     * this is basically a no op, but if this is the last/only usage
     * of the underlying enigma websocket that websocket will be closed.
     */
    close(props?: CloseProps): Promise<void>;
};
declare const qix: {
    openAppSession: typeof openAppSession;
};

export { type AlfaNumString, type AlternateStateData, type AnyGenericObjectLayout, type AnyGenericObjectProperties, type AppEntry, type AppObjectList, type AppObjectListDef, type AppScript, type AppScriptMeta, type AppSession, type ApplyGroupStateWarning, type ApplyGroupStateWarningType, type ApplyGroupStatesResult, type ArrayOfNxValuePoint, type AssociationScore, type BNFDef, type BNFDefMetaType, type BNFType, type Blob, type Bookmark, type BookmarkApplyAndVerifyResult, type BookmarkFieldItem, type BookmarkFieldPage, type BookmarkFieldVerifyResultState, type BookmarkFieldVerifyWarning, type BookmarkList, type BookmarkListData, type BookmarkListDef, type BookmarkListItem, type BookmarkVariableItem, type CalendarStrings, type CharEncodingType, type CharRange, type ChildList, type ChildListDef, type CloseProps, type CodePage, type CombinedWebSocketStateEvent, type CondDef, type Connection, type ContentLibraryList, type ContentLibraryListItem, type CurrentSelections, type CustomConnector, type CyclicGroupPosition, type DataField, type DataRecord, type DataTable, type DataTableEx, type Database, type DatabaseInfo, type DatabaseOwner, type DelimiterInfo, type DerivedFieldsInTableData, type DimensionList, type DimensionListData, type DimensionListDef, type DimensionListItem, type DoReloadExParams, type DoReloadExResult, type Doc, type DocAction, type DocListEntry, type DriveInfo, type DriveType, type DynamicAppViewListData, type DynamicAppViewListItem, type EditorBreakpoint, type EmbeddedSnapshot, type EmbeddedSnapshotDef, type ErrorData, type ErrorDataCode, type ExpandedFieldListItem, type ExpansionData, type ExtendedLayoutBookmarkData, type ExtendedPivotStateData, type ExtensionList, type ExtensionListDef, type Field, type FieldAttrType, type FieldAttributes, type FieldDefEx, type FieldDescription, type FieldInTableData, type FieldInTableProfilingData, type FieldList, type FieldListDef, type FieldListObject, type FieldOrColumn, type FieldScores, type FieldType, type FieldValue, type FileDataFormat, type FileType, type FilterInfo, type FilterType, type FolderItem, type FolderItemType, type FrequencyDistributionData, type FunctionGroup, type GenericBookmark, type GenericBookmarkEntry, type GenericBookmarkLayout, type GenericBookmarkProperties, type GenericConnectMachine, type GenericDimension, type GenericDimensionInfo, type GenericDimensionLayout, type GenericDimensionProperties, type GenericListObject, type GenericMeasure, type GenericMeasureLayout, type GenericMeasureProperties, type GenericObject, type GenericObjectEntry, type GenericObjectLayout, type GenericObjectLayoutAdditionalProperties, type GenericObjectLayoutNode, type GenericObjectLayoutNodeLevel2, type GenericObjectLayoutNodeLevel3, type GenericObjectLayoutNodeLevel4, type GenericObjectLayoutNodeLevel5, type GenericObjectLayoutNodeRec, type GenericObjectProperties, type GenericObjectPropertiesAdditionalProperties, type GenericObjectPropertiesNode, type GenericObjectPropertiesNodeLevel2, type GenericObjectPropertiesNodeLevel3, type GenericObjectPropertiesNodeLevel4, type GenericObjectPropertiesNodeLevel5, type GenericObjectPropertiesNodeRec, type GenericVariable, type GenericVariableLayout, type GenericVariableProperties, type Global, type GraphMode, type GroupBookmarkData, type GroupState, type GroupStateInfo, type HyperCube, type HyperCubeDef, type InputFieldItem, type InterFieldSortData, type InteractDef, type InteractType, type KeyType, type LayoutBookmarkData, type LayoutExclude, type LayoutFieldInfo, type LineageInfo, type ListBoxProperties, type ListFunctions, type ListItem, type ListObject, type ListObjectDef, type LocaleInfo, type LogOnType, type MasterObjectListData, type MasterObjectListItem, type MeasureList, type MeasureListData, type MeasureListDef, type MeasureListItem, type MediaListDef, type MediaListItem, type MetaData, type ModalFunctions, type NativeDocFunctions, type NativeFieldFunctions, type NativeGenericBookmarkFunctions, type NativeGenericDimensionFunctions, type NativeGenericMeasureFunctions, type NativeGenericObjectFunctions, type NativeGenericVariableFunctions, type NativeGlobalFunctions, type NativeReactHooks, type NativeVariableFunctions, type NxAppLayout, type NxAppProperties, type NxAttrDimDef, type NxAttrDimInfo, type NxAttrExprDef, type NxAttrExprInfo, type NxAttributeDimValues, type NxAttributeExpressionValues, type NxAutoSortByStateDef, type NxAxisData, type NxAxisTicks, type NxBookmark, type NxCalcCond, type NxCardinalities, type NxCell, type NxCellPosition, type NxCellRows, type NxContainerEntry, type NxContinuousDataOptions, type NxContinuousMode, type NxContinuousRangeSelectInfo, type NxCurrentSelectionItem, type NxDataAreaPage, type NxDataPage, type NxDataReductionMode, type NxDerivedField, type NxDerivedFieldDescriptionList, type NxDerivedFieldsData, type NxDerivedGroup, type NxDimCellType, type NxDimension, type NxDimensionInfo, type NxDimensionType, type NxDownloadInfo, type NxDownloadOptions, type NxEngineVersion, type NxExportFileType, type NxExportState, type NxFeature, type NxFieldDescription, type NxFieldProperties, type NxFieldResourceId, type NxFieldSelectionInfo, type NxFieldSelectionMode, type NxFieldTableResourceId, type NxFrequencyMode, type NxGetBookmarkOptions, type NxGetObjectOptions, type NxGroupTail, type NxGrpType, type NxHighlightRanges, type NxHypercubeMode, type NxInfo, type NxInlineDimensionDef, type NxInlineMeasureDef, type NxLTrendlineType, type NxLayoutErrors, type NxLibraryDimension, type NxLibraryDimensionDef, type NxLibraryMeasure, type NxLibraryMeasureDef, type NxLinkedObjectInfo, type NxListObjectExpression, type NxListObjectExpressionDef, type NxLocalizedErrorCode, type NxLocalizedWarningCode, type NxMatchingFieldInfo, type NxMatchingFieldMode, type NxMeasure, type NxMeasureInfo, type NxMeta, type NxMetaDef, type NxMiniChart, type NxMiniChartCell, type NxMiniChartData, type NxMiniChartDef, type NxMiniChartRows, type NxMultiRangeSelectInfo, type NxPage, type NxPageTreeLevel, type NxPageTreeNode, type NxPatch, type NxPatchOperationType, type NxPatches, type NxPivotDimensionCell, type NxPivotPage, type NxPivotValuePoint, type NxRange, type NxRangeSelectInfo, type NxSelectionCell, type NxSelectionCellType, type NxSelectionInfo, type NxSimpleDimValue, type NxSimpleValue, type NxSortIndicatorType, type NxStackPage, type NxStackedPivotCell, type NxStateCounts, type NxStreamListEntry, type NxTempBookmarkOptions, type NxTickCell, type NxTreeDataOption, type NxTreeDimensionDef, type NxTreeDimensionInfo, type NxTreeMultiRangeSelectInfo, type NxTreeNode, type NxTreeRangeSelectInfo, type NxTreeValue, type NxTrendline, type NxTrendlineDef, type NxTrendlineMode, type NxValidationError, type NxVariableListItem, type NxVariableProperties, type NxViewPort, type ODAGAppLinkListData, type ODAGAppLinkListItem, type ObjectHelperFunctions, type ObjectInterface, type OdbcDsn, type OleDbProvider, type OpenAppSessionProps, type OtherLimitMode, type OtherMode, type OtherSortMode, type OtherTotalSpecProp, type Point, type PositionMark, type ProgressData, type ProgressMessage, type QFunction, QIX_SCHEMA_VERSION, type QMediaList, type QRange, type RangeSelectInfo, type Rect, type RpcObject, type SampleResult, type ScriptSyntaxError, type ScrollPosition, type SearchAssociationResult, type SearchAttribute, type SearchCharRange, type SearchCombinationOptions, type SearchContextType, type SearchFieldDictionary, type SearchFieldMatch, type SearchFieldMatchType, type SearchFieldMatchesItem, type SearchFieldSelectionMode, type SearchFieldValueItem, type SearchGroup, type SearchGroupItem, type SearchGroupItemMatch, type SearchGroupItemOptions, type SearchGroupItemType, type SearchGroupOptions, type SearchGroupType, type SearchMatchCombination, type SearchMatchCombinations, type SearchObjectOptions, type SearchPage, type SearchResult, type SearchSuggestItem, type SearchSuggestionResult, type SearchTermResult, type SearchValueOptions, type SearchValuePage, type SearchValueResult, type SelectInfo, type SelectionItemFieldReferenceInfo, type SelectionObject, type SelectionObjectDef, type SheetListData, type SheetListDataCell, type SheetListDataCellBounds, type SheetListItem, type Size, type SortCriteria, type SourceKeyRecord, type SpecialObjectFunctions, type StandardFunctions, type StateEnumType, type StaticContentList, type StaticContentListItem, type StaticContentUrl, type StaticContentUrlDef, type StoryListData, type StoryListItem, type StringExpr, type StringExpression, type SymbolFrequency, type SymbolValue, type TableProfilingData, type TableRecord, type TableRow, type TableViewBroomPointSaveInfo, type TableViewConnectionPointSaveInfo, type TableViewCtlSaveInfo, type TableViewDlgSaveInfo, type TableViewSaveInfo, type TableViewTableWinSaveInfo, type TextMacro, type TotalMode, type TransformAppParameters, type TransformAppResult, type TreeData, type TreeDataDef, type UndoInfo, type UndoInfoDef, type UndoInfoObject, type UsageEnum, type UseAppHook, type ValueExpr, type ValueExpression, type VariableList, type VariableListData, type VariableListDef, type VariableListItem, type WebSocketEvent, qix as default, openAppSession };
