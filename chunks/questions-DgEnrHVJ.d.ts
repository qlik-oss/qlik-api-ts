import { y as ApiCallOptions } from "./auth-types-CJNqN_zp.js";

//#region src/public/rest/questions.d.ts
type Analysis = "breakdown" | "changePoint" | "comparison" | "contribution" | "correlation" | "fact" | "mutualInfo" | "rank" | "spike" | "trend" | "values";
type AnalysisGroup = "anomaly" | "brekadown" | "comparison" | "correl" | "fact" | "list" | "mutualInfo" | "rank";
/**
 * Metadata for app
 */
type AppMetadata = {
  id?: string;
  last_reload_date?: string;
  limited_access?: boolean;
  name?: string;
  space_id?: string;
  space_name?: string;
  space_type?: string;
};
/**
 * Chart type given to current recommendation
 */
type ChartType = "barchart" | "combochart" | "distributionplot" | "kpi" | "linechart" | "map" | "scatterplot" | "table";
type ConversationalResponsePart = {
  errorMessage?: string;
  followupSentence?: string;
  imageUrl?: string;
  infoType?: string;
  infoValues?: (string[] | QlikApp[])[];
  narrative?: NarrativeResponse;
  renderVisualization?: RenderVisualization;
  sentence?: {
    text?: string;
  };
  type?: string;
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
type Href = {
  href?: string;
};
type Links = {
  next?: Href;
  prev?: Href;
  self?: Href;
};
/**
 * Visualisation recommendation specs for the query
 */
type NLMetricRecommendation = {
  analysis?: Analysis;
  analysisGroup?: AnalysisGroup;
  /** Chart type given to current recommendation */
  chartType?: ChartType;
  /** Dimension(s) considered for recommendation */
  dims?: string[];
  /** Measure(s) considered for recommendation */
  msrs?: string[];
  relevance?: number;
};
type NLMetricRecord = {
  /** Qlik sense app id that is being used to answer the question */
  appId: string;
  /** Qlik sense app name that is being used to answer the question */
  appName?: string;
  apps?: AppMetadata[];
  /** Source from which conversation is happening */
  channelId?: string;
  /** Chart type for given query. For insight advisor it would be 'native' and for insight advisor chat, it could be 'static' or 'responsive' */
  chartType?: string;
  /** Record created date */
  createdAt: string;
  /** Qlik sense user id who is interacting with insight advisor or insight advisor chat or third party api */
  createdBy?: string;
  feedback?: RecFeedback[];
  /** Unique record id stored in database */
  id: string;
  /** Boolean value indicates whether given query is contextual or not. It would be false for insight advisor */
  isContextualQuery?: boolean;
  /** language selected for query from insight advisor or insight advisor chat or third party api */
  lang?: string;
  nluInfo?: PartialNluInfo[];
  queryError?: boolean;
  /** Refers to source from where narrative request is called */
  queryOrigin?: "askQuestion" | "iaAnalysis" | "iaAssetsPanel";
  /** Query asked by user in insight advisor or insight advisor or third party api */
  queryText?: string;
  /** Nature of query being asked during the conversation e.g. query, applist, measurelist, dimensionlist */
  queryType?: "appList" | "appSuggested" | "dimensionList" | "exploreThisFurther" | "followup" | "greetings" | "measureList" | "query" | "sampleQuestion";
  /** Unique id assigned to user query */
  questionId: string;
  recommendations?: NLMetricRecommendation[];
  /** Provides info what was included in response for given query */
  responses?: NLResponses;
  /** Tokens from question parsed which are ignored */
  stopWords?: string[];
  /** Qlik sense tenant Id */
  tenantId?: string;
  /** Tokens parsed as entities but not matched with app's field/dimension/measure */
  unmatchedEntities?: string[];
  /** Record modified date */
  updatedAt: string;
  /** Version of the metric model */
  version: string;
};
type NLMetricsRequest = {
  /** The advanced filtering to use for the query. Refer to [RFC 7644](https://www.rfc-editor.org/rfc/rfc7644#section-3.4.2.2) for the syntax.
   *
   * Filter on createdAt and updatedAt fields are encouraged and support `eq`, `ne`, `gt`, `ge`, `lt`, `le` comparison operators along with `and` and `or` logical operators.
   *
   * Filter on tenantId field is not supported.
   *
   * `co`, `sw` and `ew` operators are not supported.
   *
   * Examples:
   * ```
   * appId eq 'appId1'
   * ```
   * ```
   * (appId eq 'appId1' or appId eq 'appId2')
   * ```
   * ```
   * (appId eq 'appId1' or appId eq 'appId2') and (createdAt gt '2022-08-03T00:00:00.000Z' and createdAt lt '2022-08-04T00:00:00.000Z')
   * ```
   *
   * ```
   * (appId eq 'appId1') and (createdAt ge '2022-08-03T00:00:00.000Z')
   * ```
   *
   * ```
   * (appId eq 'appId1') and (createdAt le '2022-08-23:59:59.000Z')
   * ```
   *
   * ```
   * (appId eq 'appId1') and (questionId eq '12345')
   * ``` */
  filter: string;
};
type NLMetricsResponse = {
  data?: NLMetricRecord[];
  links?: Links;
  readonly meta?: {
    /** The total number of metrics matching the current filter. */
    total: number;
  };
};
/**
 * Provides info what was included in response for given query
 */
type NLResponses = {
  /** Chart was provided */
  hasChart?: boolean;
  /** Narrative was provided */
  hasInsights?: boolean;
  /** App list was provided */
  hasMetadataApps?: boolean;
  /** Dimensions list was provided */
  hasMetadataDimensions?: boolean;
  /** Measures list was provided */
  hasMetadataMeasures?: boolean;
  /** Sample questions was provided */
  hasSampleQueries?: boolean;
  /** Suggestion questions was provided */
  hasSuggestions?: boolean;
};
type NarrativeResponse = {
  text?: string;
};
type NluInfo = {
  elements?: NluInfoElements[];
};
type NluInfoElements = {
  entity?: boolean;
  errorText?: string;
  filterFieldName?: string;
  filterText?: string;
  isFilter?: boolean;
  text?: string;
  type?: string;
  typeName?: string;
  typeTranslated?: string;
};
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
type QlikApp = {
  id?: string;
  name?: string;
};
type QueryCreate = {
  app?: QlikApp;
  /** Flag that clears the entity context. */
  clearEntityContext?: boolean;
  /** Flag that specifies either to enable converastion context. */
  disableConversationContext?: boolean;
  /** The flag specifies whether to disable follow-up recommendations. */
  disableFollowups?: boolean;
  /** Flag that specifies whether the narratives should be generated for the user query or not. */
  disableNarrative?: boolean;
  /** Flag that specifies whether visualization object should be provided or not. */
  enableVisualizations?: boolean;
  /** The language to assume when parsing, specified as an ISO-639-1 code.
   * Defaults to 'en' (English). */
  lang?: string;
  /** property that contains the Id of the recommendation for which the response should be generated. */
  recommendationId?: string;
  /** The sentence that will be parsed. */
  text: string;
  /** Specify visualizationTypes for only which visualization object should be provided if enableVisualizations is set to true. For eg. ['linechart', 'barchart'] */
  visualizationTypes?: string[];
};
/**
 * The attributes of sentences.
 */
type QueryCreated = {
  apps?: QlikApp[];
  /** A list of conversational responses. */
  conversationalResponse?: QueryResponse[];
  nluInfo?: NluInfo;
};
type QueryNotCreated = {
  apps?: QlikApp[];
  conversationalResponse?: QueryResponse;
  errors?: Error[];
  nluInfo?: NluInfo;
};
type QueryResponse = {
  apps?: QlikApp[];
  /** For contextual responses, this string contains a list of entities that are used to produce the response. */
  contextInfo?: string;
  /** The URL with the query injected to insight advisor of the app to which the query belongs. */
  drillDownURI?: string;
  responses?: ConversationalResponsePart[];
  sentenceWithMatches?: string;
};
/**
 * Any feedback from the user about a given recommendation
 */
type RecFeedback = {
  analysisType?: string;
  chartType?: string;
  comment?: string;
  recommendationAddedToHub: boolean;
  recommendationAddedToSheet: boolean;
  recommendationDisliked: boolean;
  recommendationLiked: boolean;
};
type RenderVisualization = {
  /** Data object should be used to render visualization */
  data?: unknown;
  language?: string;
};
/**
 * Returns the generated response for parsed chat queries, if no app was specified nor present in conversation context, suggests matching apps.
 *
 * @param body an object with the body content
 * @throws AskQuestionsHttpError
 */
declare function askQuestions(body: QueryCreate, options?: ApiCallOptions): Promise<AskQuestionsHttpResponse>;
type AskQuestionsHttpResponse = AskQuestions200HttpResponse | AskQuestions201HttpResponse;
type AskQuestions200HttpResponse = {
  data: QueryNotCreated;
  headers: Headers;
  status: 200;
};
type AskQuestions201HttpResponse = {
  data: QueryCreated;
  headers: Headers;
  status: 201;
};
type AskQuestionsHttpError = {
  data: Errors;
  headers: Headers;
  status: number;
};
/**
 * Returns NL metrics based on provided app IDs the user has access to.
 *
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws FilterQuestionsHttpError
 */
declare function filterQuestions(query: {
  /** The preferred number of entries returned */
  limit?: number;
  /** A cursor pointing to the page of data to retrieve. */
  page?: string;
  /** A single field from the data model on which to sort the response. The '+' or '-' operator may be used to specify ascending or desending order. */
  sort?: "createdAt" | "updatedAt" | "+createdAt" | "+updatedAt" | "-createdAt" | "-updatedAt";
}, body: NLMetricsRequest, options?: ApiCallOptions): Promise<FilterQuestionsHttpResponse>;
type FilterQuestionsHttpResponse = {
  data: NLMetricsResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<FilterQuestionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<FilterQuestionsHttpResponse>;
};
type FilterQuestionsHttpError = {
  data: Errors;
  headers: Headers;
  status: 400 | 401 | 422 | 500;
};
/**
 * Clears the cache for questions api requests.
 */
declare function clearCache(): void;
type QuestionsAPI = {
  /**
   * Returns the generated response for parsed chat queries, if no app was specified nor present in conversation context, suggests matching apps.
   *
   * @param body an object with the body content
   * @throws AskQuestionsHttpError
   */
  askQuestions: typeof askQuestions;
  /**
   * Returns NL metrics based on provided app IDs the user has access to.
   *
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws FilterQuestionsHttpError
   */
  filterQuestions: typeof filterQuestions;
  /**
   * Clears the cache for questions api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the questions api
 */
declare const questionsExport: QuestionsAPI;
//#endregion
export { QuestionsAPI as A, NluInfoElements as C, QueryCreated as D, QueryCreate as E, filterQuestions as F, questionsExport as I, RenderVisualization as M, askQuestions as N, QueryNotCreated as O, clearCache as P, NluInfo as S, QlikApp as T, NLMetricRecord as _, AskQuestions201HttpResponse as a, NLResponses as b, ChartType as c, Errors as d, FilterQuestionsHttpError as f, NLMetricRecommendation as g, Links as h, AskQuestions200HttpResponse as i, RecFeedback as j, QueryResponse as k, ConversationalResponsePart as l, Href as m, AnalysisGroup as n, AskQuestionsHttpError as o, FilterQuestionsHttpResponse as p, AppMetadata as r, AskQuestionsHttpResponse as s, Analysis as t, Error as u, NLMetricsRequest as v, PartialNluInfo as w, NarrativeResponse as x, NLMetricsResponse as y };