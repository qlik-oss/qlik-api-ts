import { A as ApiCallOptions } from './invoke-fetch-types-0Dw3a71T.js';
import './auth-types-PkN9CAF_.js';

/**
 * Error in resource handling
 */
type AppError = {
    /** app id */
    appId?: string;
    /** The method that is failing. */
    method?: string;
    /** Parameters of method that fails. */
    parameters?: unknown;
};
/**
 * Errors occurring when dealing with the app.
 */
type AppErrors = AppError[];
/**
 * The callback to be performed once the report is done.
 */
type CallBackAction = {
    /** Http callback. The provided uri will be called once the report is done. */
    httpRequest?: HttpRequest;
};
type ChainableSelection = {
    persistentBookmark?: SensePersistentBookmark;
    selectionFilter?: SelectionFilter;
    selectionType: ChainableSelectionType;
    /** The temporary bookmark to apply. Patches and Variables are ignored if passed to the API, because they already are applied in the backend. */
    temporaryBookmarkV2?: SenseTemporaryBookmarkV2;
};
type ChainableSelectionType = "selectionFilter" | "persistentBookmark" | "temporaryBookmarkV2";
type ComposableTemplate = {
    /** Used to export a single visualization as pdf, pptx or png. */
    senseImageTemplate?: SenseImageTemplate;
    /** Used to export a sheet as pdf or pptx. */
    senseSheetTemplate?: SenseSheetTemplate;
    /** Template type and version using semantic versioning. It must have the following name convention, dashed-separated-template-name-MAJOR.MINOR */
    type: "sense-image-1.0" | "sense-sheet-1.0";
};
/**
 * Definitions of common properties that are shared between templates, e.g. selectionsByState can be the same for all templates within a composition of templates.
 */
type Definitions = {
    /** It maps an ID to a selectionsByState object. */
    selectionsByState?: unknown;
};
/**
 * Properties of the document. In case of multiple composition, only properties specified in the composition output are taken and the ones specified in each output item are ignored.
 */
type DocProperties = {
    author?: string;
    subject?: string;
    title?: string;
};
type Error = {
    /** Errors occured during report generation. */
    errors?: ExportErrors;
};
/**
 * Output to be used to export a excel template.
 */
type ExcelOutput = {
    /** The image format of the report to be produced. */
    outFormat?: "xlsx";
};
/**
 * Error occured during report generation.
 */
type ExportError = {
    /** The unique code for the error
     *
     * - "REP-400000" Bad request. The server could not understand the request due to invalid syntax.
     * - "REP-400008" Selections error.
     * - "REP-400009" Maximum 16384 columns limit exceeded. Download data in a visualization can't generate an .xlsx file due to limitations to the number of columns you can download.
     * - "REP-400010" Maximum 1048566 rows limit exceeded. Download data in a visualization can't generate an .xlsx file due to limitations to the number of rows you can download.
     * - "REP-400011" The size of the downloaded Excel file exceed 100 MB limit. Download data in a visualization can't generate an .xlsx file due to limitations to the amount of data you can download.
     * - "REP-400015" Bad request in enigma request. The patch value has invalid JSON format.
     * - "REP-401000" Unauthorized. The client must authenticate itself to get the requested response.
     * - "REP-401001" Unauthorized, bad JWT.
     * - "REP-403000" Forbidden. The client does not have access rights to the content.
     * - "REP-403001" App forbidden, the user does not have read permission on the app.
     * - "REP-403002" Chart type not supported.
     * - "REP-404000" Not found. The server can not find the requested resource.
     * - "REP-404001" App not found, the app does not exist or it has been deleted.
     * - "REP-404002" Chart not found, the chart does not exist or it has been deleted.
     * - "REP-404003" Sheet not found, the sheet does not exist or it has been deleted or it is unavailable.
     * - "REP-404004" Story not found, the story does not exist or it has been deleted or it is unavailable.
     * - "REP-429000" Too many request. The user has sent too many requests in a given amount of time ("rate limiting").
     * - "REP-429012" Exceeded max session tenant quota. A tenant has opened too many different sessions at the same time.
     * - "REP-429014" The export could not be completed within the requested deadline.
     * - "REP-429016" Exceeded max session tenant quota per day.
     * - "REP-500000" Fail to resolve resource.
     * - "REP-500006" Fail to get report session parameters.
     * - "REP-503005" Engine unavailable, qix-sessions error no engines available.
     * - "REP-503013" Session unavailable. The engine session used to create the report is unavailable.
     * - "REP-500100" Image rendering generic error on Sense client.
     * - "REP-500101" Image rendering could not set cookies error on Sense client.
     * - "REP-400102" Image rendering invalid strategy error on Sense client.
     * - "REP-500103" Image rendering JS timeout error on Sense client.
     * - "REP-500104" Image rendering load URL timeout error on Sense client.
     * - "REP-500105" Image rendering max paint attempts exceeded error on Sense client.
     * - "REP-500106" Image rendering max JS attempts exceeded error on Sense client.
     * - "REP-500107" Image rendering render timeout error on Sense client.
     * - "REP-500108" Image rendering JS failure due to timeout error on Sense client.
     * - "REP-500109" Image rendering generic JS failure error on Sense client.
     * - "REP-400029" Reload Entitlement Limit Reached.
     * - "REP-409046" Report aborted due to app reload.
     * - "REP-500047" Error setting GroupState.
     * - "REP-403048" Forbidden. User does not have permission to export the report (access control usePermission)
     * - "REP-422051" There is no report to produce due to empty dataset or missing fields (the measure/dimension was removed or omitted in Section Access)
     * - "REP-500014" The app did not open within 10 minutes.
     * - "REP-400017" Static App size exceeded.
     * - "REP-400018" Excel string length exceeded.
     * - "REP-403019" Export is not available for app with enabled directQuery feature.
     * - "REP-409001" App conflict.
     * - "REP-503001" Rest Engine Error.
     * - "REP-400020" Invalid Issuer.
     * - "REP-400028" Invalid Tags.
     * - "REP-409021" Reload timestamp constraint not met.
     * - "REP-429022" Enigma generic abort.
     * - "REP-500023" Validate Report Request Tags failure.
     * - "REP-400024" Cannot extract claims from JWT.
     * - "REP-403025" No entitlement to perform the operation.
     * - "REP-403026" No entitlement to perform the operation. Export capability is off.
     * - "REP-403027" Object without Hypercube or unsupported object type.
     * - "REP-422030" Apply variables error.
     * - "REP-500200" Report Generator error.
     * - "REP-400035" Multiple selections detected in a field having OneAndOnlyone attribute.
     * - "REP-400036" No selection detected in a field having OneAndOnlyone attribute.
     * - "REP-400037" Max number of images exceeded in a report.
     * - "REP-400038" Max number of nested levels exceeded in report.
     * - "REP-400039" Max number of objects exceeded in a report.
     * - "REP-400040" Max number of templates exceeded in a report.
     * - "REP-400041" Unsupported dimension type for level tag.
     * - "REP-500240" Engine Global generic closure error.
     * - "REP-500260" Engine Websocket generic closure error.
     * - "REP-500280" Engine proxy generic closure error.
     * - "REP-400240" Engine Client Global generic closure error
     * - "REP-400260" Engine Client generic closure error.
     * - "REP-400280" Engine Client proxy generic closure error.
     * - "REP-500045" Failure setting Bookmark timestamp.
     * - "REP-400050" Error retrieving outputs.
     * - "REP-400052" Report Request Aborted from internal error.
     * - "REP-500053" Unexpected number of generated cycle reports.
     * - "REP-400054" The number of generated cycle reports exceeds the maximum allowed. */
    code: string;
    /** Optional. MAY be used to provide more concrete details. */
    detail?: string;
    /** Define the export error metadata. Each property is filled if it is related to the export error type. */
    meta?: MetaExportError;
    /** A summary in english explaining what went wrong. */
    title: string;
};
/**
 * Errors occured during report generation.
 */
type ExportErrors = ExportError[];
type Float64 = number;
/**
 * Http callback. The provided uri will be called once the report is done.
 */
type HttpRequest = {
    /** URI of the request. */
    uri?: string;
};
/**
 * Output to be used to export a single visualization as image.
 */
type ImageOutput = {
    /** Image resolution in DPI (default 96 DPI). */
    outDpi?: number;
    /** The image format of the report to be produced. */
    outFormat?: "png" | "jsondata";
    /** The scale factor to be applied in image scaling. A zoom greater than 5 will not be applied to the device pixel ratio which will remain fixed at 5. */
    outZoom?: number;
};
/**
 * Define the request metadata. It includes priority, deadline and future settings on execution policy of the request.
 */
type Meta = {
    /** The maximum interval, starting from the time the API request is received, within which a report must be produced, past this interval the report generation fails. The default value is 10 minutes, the maximum allowed value is 4 hours. */
    exportDeadline?: string;
    /** Time to live of the final result artifacts in ISO8601 duration format. After that duration the request and underlying output files will not be guaranteed to be available. Default is 1 hour. */
    outputTtl?: string;
};
/**
 * Define the export error metadata. Each property is filled if it is related to the export error type.
 */
type MetaExportError = {
    /** Errors occurring when dealing with the app. */
    appErrors?: AppErrors;
    /** Errors occurring in selections. */
    selectionErrors?: SelectionErrors;
};
/**
 * Patches to apply to sense charts. Patches are soft properties meaning that are not persistent and they live within a session.
 */
type NxPatch = {
    qOp: "add" | "remove" | "replace";
    /** Path to the property to add, remove or replace. */
    qPath: string;
    /** Corresponds to the value of the property to add or to the new value of the property to update. */
    qValue?: string;
};
type OutputItem = {
    /** The callback to be performed once the report is done. */
    callBackAction?: CallBackAction;
    /** Output to be used to export a excel template. */
    excelOutput?: ExcelOutput;
    /** Output to be used to export a single visualization as image. */
    imageOutput?: ImageOutput;
    /** The output identifier which uniquely identifies an output (PDF, image etc.) within the same request. It does not need to be a GUID. No spaces and colons are allowed in the outputId string. */
    outputId: string;
    /** Output to be used to export a composition of templates as pdf. */
    pdfCompositionOutput?: PdfCompositionOutput;
    /** Output to be used to export a single visualization, a sheet, Sense Excel template as pdf. For Sense Excel template (sense-excel-template-1.0) no properties are needed, any property specified has no effect. */
    pdfOutput?: PdfOutput;
    /** Output to be used to export a composition of templates as pptx. */
    pptxCompositionOutput?: PptxCompositionOutput;
    /** Output to be used to export a single visualization or a sheet as PowerPoint presentation. */
    pptxOutput?: PptxOutput;
    /** The generated report type.
     *
     * Each template type supports specific output types:
     *    - composition-1.0 supports only pdfcomposition and pptxcomposition output types
     *    - sense-excel-template-1.0 supports only excel and pdf output type
     *    - sense-image-1.0 supports pdf, pptx and image output types
     *    - sense-sheet-1.0 supports pdf and pptx output type
     *    - sense-data-1.0 supports xlsx output type
     *
     * Each output type requires a specific output to be provided:
     *    - excel requires excelOutput to be set
     *    - pdfcomposition requires pdfCompositionOutput to be set
     *    - pptxcomposition requires pptxCompositionOutput to be set
     *    - pdf requires pdfOuput to be set
     *    - pptx requires pptxOuput to be set
     *    - image requires imageOutput to be set
     *    - csv doesn't have csv output
     *    - xlsx requires xlsxOutput to be set */
    type: "image" | "pdf" | "xlsx" | "jsondata" | "pdfcomposition" | "excel" | "pptx" | "pptxcomposition" | "csv" | "cycle";
};
/**
 * Output to be used to export a composition of templates as pdf.
 */
type PdfCompositionOutput = {
    /** The ordered list of PDF outputs, the number must match the composable templates. */
    pdfOutputs?: PdfOutput[];
    /** Properties of the document. In case of multiple composition, only properties specified in the composition output are taken and the ones specified in each output item are ignored. */
    properties?: DocProperties;
};
/**
 * Output to be used to export a single visualization, a sheet, Sense Excel template as pdf. For Sense Excel template (sense-excel-template-1.0) no properties are needed, any property specified has no effect.
 */
type PdfOutput = {
    /** Content alignment. */
    align?: {
        horizontal?: "left" | "center" | "right";
        vertical?: "top" | "middle" | "bottom";
    };
    /** This value is used for rendered images only, set to a default of 300 dpi. */
    imageRenderingDpi?: number;
    /** P for portrait, L for landscape and A for auto-detect. Auto-detect sets the orientation depending on the content width and height proportions: if content width > height the orientation is automatically set to landscape, portrait otherwise. */
    orientation?: "P" | "L" | "A";
    /** Properties of the document. In case of multiple composition, only properties specified in the composition output are taken and the ones specified in each output item are ignored. */
    properties?: DocProperties;
    /** The area where the object (eg. sheet, chart) is printed. Required in case of "fit" resizeType. */
    resizeData?: {
        /** The size of the area in the following format "{width}{cm|mm}x{height}{cm|mm}" (e.g. "297mmx210mm"). Please remember that PDF page orientation (landscape or portrait) should match the width and height set for this field (eg. A4 landscape is "297mmx210mm", A4 portrait is "210mmx287mm"). Note that the minimum printable area is 1.5cmx1.5cm (corresponding to 0.6x0.6 inches at 96 DPI). */
        fit?: string;
    };
    /** The type of resize to be performed:
     *   - none is used to export a visualization, sheet or story as is (e.g. normal size), regardless of its size. This may result in cropping.
     *   - autofit automatically fits the visualization, sheet or story into the output size (i.e. A4, A3 etc.). Any provided resizeData parameter will be ignored for this configuration.
     *   - fit fits the visualization, sheet or story into the area specified in resizeData. The content will be rescaled to fit in that area. */
    resizeType?: "none" | "autofit" | "fit";
    /** Size of the pdf page. */
    size?: "A1" | "A2" | "A3" | "A4" | "A5" | "A6" | "Letter" | "Legal" | "Tabloid";
};
/**
 * Output to be used to export a composition of templates as pptx.
 */
type PptxCompositionOutput = {
    /** Output to be used to export a single visualization or a sheet as PowerPoint presentation. */
    pptxOutput?: PptxOutput;
};
/**
 * Output to be used to export a single visualization or a sheet as PowerPoint presentation.
 */
type PptxOutput = {
    /** This value is used for rendered images only, set to a default of 300 dpi. */
    imageRenderingDpi?: number;
    /** L for landscape, P for portrait and A for auto-detect. Auto-detect sets landscape, the default PowerPoint orientation. */
    orientation?: "L" | "P" | "A";
    /** Properties of the document. In case of multiple composition, only properties specified in the composition output are taken and the ones specified in each output item are ignored. */
    properties?: DocProperties;
    /** The type of resize to be performed. Autofit automatically fits the visualization, sheet or story into the output size (i.e. Widescreen, OnScreen etc.). */
    resizeType?: "autofit";
    /** Size of the PowerPoint slide:
     *   - Widescreen: 960x540
     *   - OnScreen: 720x540
     *   - OnScreen16x9: 720x405
     *   - OnScreen16x10: 720x450 */
    size?: "Widescreen" | "OnScreen" | "OnScreen16x9" | "OnScreen16x10";
};
/**
 * In order to apply a selection just one of text/number needs to be set, this must be associated with the correct isNumeric bool. In some scenarios both text and number may be set.
 */
type QFieldValue = {
    /** IsNumeric tells whether the field value is text or number. Default value is equal to defaultIsNumeric property in QSelection. */
    isNumeric?: boolean;
    number?: Float64;
    /** String value of the field value. */
    text?: string;
};
type QSelection = {
    /** Default value that QFieldValue isNumeric property takes if missing. */
    defaultIsNumeric: boolean;
    /** The name of the field to be selected. */
    fieldName: string;
    /** The values of the field to be selected. */
    values: QFieldValue[];
};
type Reason = {
    /** Errors occured during report generation. */
    exportErrors?: ExportErrors;
    /** The output identifier which uniquely identifies an output (PDF, image etc.) within the same request. */
    outputId?: string;
    traceId?: string;
};
type ReportRequest = {
    /** Composition of senseSheetTemplate and/or senseImageTemplate templates. */
    compositionTemplates?: ComposableTemplate[];
    /** Definitions of common properties that are shared between templates, e.g. selectionsByState can be the same for all templates within a composition of templates. */
    definitions?: Definitions;
    /** Define the request metadata. It includes priority, deadline and future settings on execution policy of the request. */
    meta?: Meta;
    output: OutputItem;
    /** The callback to be performed once the report is done. */
    requestCallBackAction?: CallBackAction;
    senseDataTemplate?: SenseDataTemplate;
    /** Used to produce reports from a template file. */
    senseExcelTemplate?: SenseFileTemplate;
    /** Used to export a single visualization as pdf, pptx or png. */
    senseImageTemplate?: SenseImageTemplate;
    /** Used to produce reports from a template file. */
    sensePixelPerfectTemplate?: SenseFileTemplate;
    /** Used to export a sheet as pdf or pptx. */
    senseSheetTemplate?: SenseSheetTemplate;
    /** Template type and version using semantic versioning. It must have the following name convention: dashed-separated-template-name-MAJOR.MINOR.
     * Please note that sense-pixel-perfect-template-1.0, sense-story-x.0 and qv-data-x.0 are only for internal use.
     *
     * Each type requires a specific template to be provided:
     *   - composition-1.0 requires compositionTemplates to be set
     *   - sense-excel-template-1.0 requires senseExcelTemplate to be set
     *   - sense-image-1.0 requires senseImageTemplate to be set
     *   - sense-sheet-1.0 requires senseSheetTemplate to be set
     *   - sense-data-1.0 requires senseDataTemplate to be set
     *
     * Each template type supports specific output types:
     *   - composition-1.0 supports pdfcomposition and pptxComposition output type
     *   - sense-excel-template-1.0 supports excel and pdf output type
     *   - sense-image-1.0 supports pdf, pptx and png output types
     *   - sense-sheet-1.0 supports pdf, pptx output type
     *   - sense-data-1.0 supports xlsx output type */
    type: "composition-1.0" | "sense-image-1.0" | "sense-data-1.0" | "sense-sheet-1.0" | "sense-story-1.0" | "qv-data-1.0" | "qv-data-2.0" | "sense-excel-template-1.0" | "sense-pixel-perfect-template-1.0";
};
type ReportStatus = {
    /** @deprecated
     * Present when status is failed. Deprecated. Use /reports/{id}/outputs instead. */
    reasons?: Reason[];
    /** Errors occured during report generation. */
    requestErrors?: ExportErrors;
    /** Count how many times the resolution of this report was attempted. */
    resolutionAttempts?: number;
    /** @deprecated
     * Present when the status is "done". Deprecated. Use /reports/{id}/outputs instead. */
    results?: Result[];
    /** Status of the requested report. */
    status: "queued" | "processing" | "done" | "failed" | "aborted" | "visiting" | "aborting";
    /** Relative path to status location. */
    statusLocation?: string;
};
/**
 * Result and info about the generated report.
 */
type Result = {
    /** Errors occured during report generation. */
    exportErrors?: ExportErrors;
    /** Location to download the generated report. */
    location: string;
    /** The output identifier which uniquely identifies an output (PDF, image etc.) within the same request. */
    outputId: string;
};
/**
 * Array of ChainableSelection
 */
type SelectionChain = ChainableSelection[];
/**
 * Selection error related to a fieldName. The field name is missing or some of his selection values are missing or a state is missing
 */
type SelectionError = {
    /** Details about the field selection error. */
    detail?: string;
    errorType?: "fieldMissing" | "fieldValuesMissing" | "stateMissing" | "groupStateGroupMissing" | "groupStateGroupNotApplicable" | "groupStateFieldDefMissing";
    /** The field name that is missing. */
    fieldName?: string;
    /** @deprecated
     * Deprecated, use errorType instead. True if the fieldName is missing. The missingValues array is empty in this case */
    isFieldNameMissing?: boolean;
    missingValues?: QFieldValue[];
    /** The state name that is missing. */
    stateName?: string;
};
/**
 * Errors occurring in selections.
 */
type SelectionErrors = SelectionError[];
type SelectionFilter = {
    /** A map for applying soft properties, aka patches, to specific visualization IDs within the sheet. */
    patchesById?: unknown;
    /** Map of selections to apply by state. Maximum number of states allowed is 125. Maximum number of fields allowed is 125 and Maximum number of overall field values allowed is 150000. */
    selectionsByState?: unknown;
    variables?: unknown[];
};
type SelectionStrategy = "failOnErrors" | "ignoreErrorsReturnDetails" | "ignoreErrorsNoDetails";
type SenseDataTemplate = {
    appId: string;
    /** Sense visualization id. Visualizations created "on the fly" are not supported. */
    id: string;
    patches?: NxPatch[];
    persistentBookmark?: SensePersistentBookmark;
    /** Choose the reloadTimestamp constraint to apply. An empty value leads to the default noCheck. */
    reloadTimestampMatchType?: ReloadTimestampMatchType;
    selectionStrategy?: SelectionStrategy;
    selectionType?: SenseSelectionType;
    /** Map of selections to apply by state. Maximum number of states allowed is 125. Maximum number of fields allowed is 125 and maximum number of overall field values allowed is 150000. */
    selectionsByState?: unknown;
    /** The temporary bookmark to apply. Patches and Variables are ignored if passed to the API, because they already are applied in the backend. */
    temporaryBookmarkV2?: SenseTemporaryBookmarkV2;
    variables?: unknown[];
};
/**
 * Used to produce reports from a template file.
 */
type SenseFileTemplate = {
    /** A JSON object that is passed as-is to the mashup page while rendering, this will be applied to all charts within the sheet. It includes properties of the whole sheet such as theme, gradient etc. Currently only the "theme" property is supported. */
    jsOpts?: unknown;
    /** Choose the reloadTimestamp constraint to apply. An empty value leads to the default noCheck. */
    reloadTimestampMatchType?: ReloadTimestampMatchType;
    /** Array of ChainableSelection */
    selectionChain?: SelectionChain;
    /** The location of the report template. Currently it can be an absolute or relative URL to a persisted report template, or to a template file saved as temporary content, as in the following examples: - https://qlikcloud.com:443/api/v1/report-templates/223940f7-3170-46b7-91ea-e0c81230adf7 - https://qlikcloud.com:443/api/v1/temp-contents/653bb4acae966r0730da15fc */
    templateLocation: TemplateLocation;
};
/**
 * Used to export a single visualization as pdf, pptx or png.
 */
type SenseImageTemplate = {
    appId: string;
    persistentBookmark?: SensePersistentBookmark;
    /** Choose the reloadTimestamp constraint to apply. An empty value leads to the default noCheck. */
    reloadTimestampMatchType?: ReloadTimestampMatchType;
    selectionStrategy?: SelectionStrategy;
    selectionType?: SenseSelectionType;
    /** Map of selections to apply by state. Maximum number of states allowed is 125. Maximum number of fields allowed is 125 and maximum number of overall field values allowed is 150000. */
    selectionsByState?: unknown;
    /** The definition ID referring to a selectionsByState definition declared in definitions. */
    selectionsByStateDef?: string;
    /** The temporary bookmark to apply. Patches and Variables are ignored if passed to the API, because they already are applied in the backend. */
    temporaryBookmarkV2?: SenseTemporaryBookmarkV2;
    visualization: Visualization;
};
type SensePersistentBookmark = {
    /** Sense Persistence Bookmark id. */
    id: string;
};
type SenseSelectionType = "selectionsByState" | "temporaryBookmark" | "persistentBookmark" | "temporaryBookmarkV2";
/**
 * Used to export a sheet as pdf or pptx.
 */
type SenseSheetTemplate = {
    appId: string;
    persistentBookmark?: SensePersistentBookmark;
    /** Choose the reloadTimestamp constraint to apply. An empty value leads to the default noCheck. */
    reloadTimestampMatchType?: ReloadTimestampMatchType;
    selectionStrategy?: SelectionStrategy;
    selectionType?: SenseSelectionType;
    /** Map of selections to apply by state. Maximum number of states allowed is 125. Maximum number of fields allowed is 125 and maximum number of overall field values allowed is 150000. */
    selectionsByState?: unknown;
    /** The definition ID referring to a selectionsByState definition declared in definitions. */
    selectionsByStateDef?: string;
    /** It refers to the Sense Sheet to be exported. Note that if widthPx and heightPx are not specified, default values will be applied depending on the actual size and layout properties of the Sense Sheet object. */
    sheet: Sheet;
    /** The temporary bookmark to apply. Patches and Variables are ignored if passed to the API, because they already are applied in the backend. */
    temporaryBookmarkV2?: SenseTemporaryBookmarkV2;
};
/**
 * The temporary bookmark to apply. Patches and Variables are ignored if passed to the API, because they already are applied in the backend.
 */
type SenseTemporaryBookmarkV2 = {
    /** Sense Temporary Bookmark id. */
    id: string;
};
/**
 * It refers to the Sense Sheet to be exported. Note that if widthPx and heightPx are not specified, default values will be applied depending on the actual size and layout properties of the Sense Sheet object.
 */
type Sheet = {
    /** The height of the sheet in pixels. Default value is: - 1120 pixels for responsive sheet - 1680 pixels for extended sheet - same height set in sheet properties for custom sheet */
    heightPx?: number;
    /** The id of the sheet. */
    id: string;
    /** A JSON object that is passed as-is to the mashup page while rendering, this will be applied to all charts within the sheet. It includes properties of the whole sheet such as theme, gradient etc. */
    jsOpts?: unknown;
    /** A map for applying jsOpts to specific visualization IDs within the sheet. */
    jsOptsById?: unknown;
    /** A map for applying soft properties, aka patches, to specific visualization IDs within the sheet. */
    patchesById?: unknown;
    /** The width of the sheet in pixels. Default value is: - 1680 pixels for responsive sheet - 1120 pixels for extended sheet - same width set in sheet properties for custom sheet */
    widthPx?: number;
};
/**
 * The location of the report template. Currently it can be an absolute or relative URL to a persisted report template, or to a template file saved as temporary content, as in the following examples: - https://qlikcloud.com:443/api/v1/report-templates/223940f7-3170-46b7-91ea-e0c81230adf7 - https://qlikcloud.com:443/api/v1/temp-contents/653bb4acae966r0730da15fc
 */
type TemplateLocation = {
    format?: "url";
    /** The report template location path. */
    path: string;
};
type Visualization = {
    /** Height in pixels. */
    heightPx: number;
    /** The sense visualization id or json definition. */
    id: string;
    /** A JSON object that is passed as-is to the mashup page while rendering. */
    jsOpts?: unknown;
    /** Soft properties, aka patches, to be applied to the visualization. */
    patches?: NxPatch[];
    /** Choose visualization to export an image of a sense chart, sessionobject for a visualization to be created on-the-fly. An empty value leads to the type being inferred by its id. */
    type?: "visualization" | "sessionobject";
    /** Width in pixels. */
    widthPx: number;
};
/**
 * Choose the reloadTimestamp constraint to apply. An empty value leads to the default noCheck.
 */
type ReloadTimestampMatchType = "noCheck" | "requestTimeExact";
/**
 * Queue a new report request generation.
 *
 * @param body an object with the body content
 * @throws CreateReportHttpError
 */
declare const createReport: (body: ReportRequest, options?: ApiCallOptions) => Promise<CreateReportHttpResponse>;
type CreateReportHttpResponse = {
    data: void;
    headers: Headers;
    status: number;
};
type CreateReportHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Get report request processing status.
 *
 * @param id Identifier of the request.
 * @throws GetReportStatusHttpError
 */
declare const getReportStatus: (id: string, options?: ApiCallOptions) => Promise<GetReportStatusHttpResponse>;
type GetReportStatusHttpResponse = {
    data: ReportStatus;
    headers: Headers;
    status: number;
};
type GetReportStatusHttpError = {
    data: Error;
    headers: Headers;
    status: number;
};
/**
 * Clears the cache for reports api requests.
 */
declare function clearCache(): void;
interface ReportsAPI {
    /**
     * Queue a new report request generation.
     *
     * @param body an object with the body content
     * @throws CreateReportHttpError
     */
    createReport: typeof createReport;
    /**
     * Get report request processing status.
     *
     * @param id Identifier of the request.
     * @throws GetReportStatusHttpError
     */
    getReportStatus: typeof getReportStatus;
    /**
     * Clears the cache for reports api requests.
     */
    clearCache: typeof clearCache;
}
/**
 * Functions for the reports api
 */
declare const reportsExport: ReportsAPI;

export { type AppError, type AppErrors, type CallBackAction, type ChainableSelection, type ChainableSelectionType, type ComposableTemplate, type CreateReportHttpError, type CreateReportHttpResponse, type Definitions, type DocProperties, type Error, type ExcelOutput, type ExportError, type ExportErrors, type Float64, type GetReportStatusHttpError, type GetReportStatusHttpResponse, type HttpRequest, type ImageOutput, type Meta, type MetaExportError, type NxPatch, type OutputItem, type PdfCompositionOutput, type PdfOutput, type PptxCompositionOutput, type PptxOutput, type QFieldValue, type QSelection, type Reason, type ReloadTimestampMatchType, type ReportRequest, type ReportStatus, type ReportsAPI, type Result, type SelectionChain, type SelectionError, type SelectionErrors, type SelectionFilter, type SelectionStrategy, type SenseDataTemplate, type SenseFileTemplate, type SenseImageTemplate, type SensePersistentBookmark, type SenseSelectionType, type SenseSheetTemplate, type SenseTemporaryBookmarkV2, type Sheet, type TemplateLocation, type Visualization, clearCache, createReport, reportsExport as default, getReportStatus };
