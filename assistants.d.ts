import { x as ApiCallOptions } from "./chunks/auth-types-yKuw6LLB.js";
import "./chunks/invoke-fetch-DdmiOIkr.js";
//#region src/public/rest/assistants.d.ts
export type Assistant = {
  /** Datetime when the assistant was created. */
  readonly createdAt: string;
  /** Unique identifier of the user who created the assistant. */
  readonly createdBy: string;
  /** freeform JSON to allow custom customization options. */
  customProperties: unknown;
  /** Default prompt type for the assistant. */
  defaultPromptType?: "thread" | "oneshot";
  /** The description of the assistant. */
  description: string;
  /** Indicates if the assistant has an avatar. */
  hasAvatar?: boolean;
  /** Unique identifier of the assistant. */
  id: string;
  /** List of knowledgebases the assistant is using. */
  knowledgeBases: string[];
  /** The name of the assistant. */
  name: string;
  /** List of starter IDs in the order they will be sorted. */
  orderedStarterIds?: string[];
  /** Unique identifier of the assistant owner. */
  ownerId: string;
  /** Unique identifier of the space containing the assistant. */
  spaceId: string;
  /** @deprecated
   * System prompt setting up conversation context. */
  systemMessage?: string;
  /** The list of tags associated with the assistant. */
  tags: string[];
  /** Unique identifier of the assistant tenant. */
  tenantId: string;
  /** The title of the assistant. */
  title?: string;
  /** Datetime when the assistant was updated. */
  readonly updatedAt: string;
  /** Unique identifier of the user who last updated the assistant. */
  readonly updatedBy: string;
  /** Initial message in the chat conversation. */
  welcomeMessage: string;
};
/**
 * @example
 * {
 *   chunkIds: [
 *     "c2ef42d9-7164-4fb0-bdbb-6534ae37263e",
 *     "486ada2c-f895-4961-8ba5-7995f1026d26"
 *   ]
 * }
 */
export type ChunksRefs = {
  chunkIds: string[];
};
export type Feedback = {
  /** Optional comment for feedback. */
  comment: string;
  /** Unique feedback identifier. */
  id: string;
  /** Reason for feedback. */
  reason: string;
  /** Feedback review status. */
  reviewStatus: string;
  /** Datetime when the feedback was reviewed. */
  reviewedAt?: string;
  /** Unique feedback reviewer identifier. */
  reviewerId: string;
  /** Integer representation of feedback given (-1 = negative, 1 = positive). */
  vote: number;
};
export type Interaction = {
  /** Datetime when the interaction was created. */
  readonly createdAt: string;
  feedback?: Feedback;
  id: string;
  /** Unique identifier of user which created the interaction. */
  ownerId: string;
  /** Indicator the system marked request as suspicious. */
  rejected?: boolean;
  /** Interaction request content. */
  request: string;
  /** Interaction response content. */
  response: string;
  /** List of sources used to generate AI messages (interactions). */
  sources: MessageSource[];
  /** ID of the thread to which the interaction belongs. */
  threadId: string;
  /** Datetime when the interaction was updated. */
  readonly updatedAt: string;
};
/**
 * A JSON Patch document as defined in http://tools.ietf.org/html/rfc6902.
 */
export type JSONPatch = {
  /** The operation to be performed. */
  op: "replace" | "add";
  /** A JSON Pointer. */
  path: string;
  /** The value to be used for this operation. */
  value: string | number | boolean;
};
/**
 * An array of JSON Patch documents.
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
 *   },
 *   {
 *     op: "add",
 *     path: "/defaultPromptType",
 *     value: "thread"
 *   },
 *   {
 *     path: "/avatar"
 *   },
 *   {
 *     op: "add",
 *     path: "/avatar",
 *     value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlAQAAAAAsYlcCAAAACklEQVR4AWMYBQABAwABRUEDtQAAAABJRU5ErkJggg=="
 *   },
 *   {
 *     op: "replace",
 *     path: "/avatar",
 *     value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlAQAAAAAsYlcCAAAACklEQVR4AWMYBQABAwABRUEDtQAAAABJRU5ErkJggg=="
 *   }
 * ]
 */
export type JSONPatchArray = JSONPatch[];
export type Message = {
  /** Message content. */
  content: string;
  /** Datetime when the interaction was created. */
  readonly createdAt: string;
  id: string;
  /** human or ai role. */
  role: string;
  /** List of sources used to generate AI messages (interactions). */
  sources: MessageSource[];
};
export type MessageSource = {
  /** List of Chunks used for "AI" generated messages. */
  chunks: MessageSourceChunk[];
  /** Reference to DataSource used for "AI" generated messages. */
  datasourceId: string;
  /** Reference to Document used for "AI" generated messages. */
  documentId: string;
  /** Reference to KnowledgeBase used for "AI" generated messages. */
  knowledgebaseId: string;
  /** Datetime when the knowledgebase was last indexed. */
  lastIndexedAt?: string;
  /** Path to the document used. */
  source: string;
};
export type MessageSourceChunk = {
  /** Chunk unique identifier for "AI" generated message source. */
  chunkId: string;
  /** Chunk text for "AI" generated message source. */
  text?: string;
};
export type Starter = {
  /** Optional context collected from curated meant to be leveraged by LLM-based question recommendation system. */
  additionalContext: string;
  /** Datetime when the starter was created. */
  readonly createdAt: string;
  /** List of followups. */
  followups?: Followup[];
  /** Unique identifier of the starter. */
  id: string;
  /** Starter sample question. */
  question: string;
  recommendedAnswer: RecommendedAnswer;
  /** Datetime when the starter was updated. */
  readonly updatedAt: string;
};
export type Thread = {
  /** Datetime when the thread was created. */
  readonly createdAt: string;
  /** Datetime when the thread was deleted. */
  readonly deletedAt?: string;
  /** If thread is marked as favorite. */
  favorite: boolean;
  /** If feedback was provided for a thread interaction. */
  hasFeedback: boolean;
  /** Unique identifier of the thread. */
  id: string;
  /** The name of the thread. */
  name: string;
  ownerId: string;
  summaryStats: FeedbackSummary;
  /** Datetime when the thread was updated. */
  readonly updatedAt: string;
  /** If the thread should respond in the user's preferred language. */
  useUserPreferredLanguage: boolean;
};
export type ThreadWithMessages = {
  /** Datetime when the thread was created. */
  readonly createdAt: string;
  /** Datetime when the thread was deleted. */
  readonly deletedAt?: string;
  /** If thread is marked as favorite. */
  favorite: boolean;
  /** If feedback was provided for a thread interaction. */
  hasFeedback: boolean;
  /** Unique identifier of the thread. */
  id: string;
  messages: Message[];
  /** The name of the thread. */
  name: string;
  /** Unique identifier of the thread owner. */
  ownerId: string;
  summaryStats: FeedbackSummary;
  /** Datetime when the thread was updated. */
  readonly updatedAt: string;
  /** If the thread should respond in the user's preferred language. */
  useUserPreferredLanguage: boolean;
};
export type AssistantsResult = {
  data: Assistant[];
  links?: PageLinks;
  meta?: ResultMeta;
};
export type Chunk = {
  /** Metadata about the chunk */
  chunkMeta: KbChunkMeta;
  /** search method for the chunk, e.g. `semantic search`, `keyword search` or `semantic and keyword search` */
  searchSource?: string;
  /** Similarity score from embedding match */
  semanticScore?: number;
  /** Text content of the chunk */
  text: string;
  /** Score from keyword search */
  tfidfScore?: number;
};
export type CreateAssistant = {
  /** freeform JSON to allow custom customization options. */
  customProperties: unknown;
  /** Default prompt type for the assistant. */
  defaultPromptType?: "thread" | "oneshot";
  /** The description of the assistant. */
  description: string;
  /** List of knowledgebases the assistant is using. */
  knowledgeBases: string[];
  /** The name of the assistant. */
  name: string;
  /** List of starter IDs in the order they will be sorted. */
  orderedStarterIds?: string[];
  /** Unique identifier of the space to contain the assistant. */
  spaceId: string;
  /** @deprecated
   * System prompt setting up conversation context. */
  systemMessage?: string;
  /** The list of tags for the assistant. */
  tags: string[];
  /** The title of the assistant. */
  title: string;
  /** Initial message in the chat conversation. */
  welcomeMessage: string;
};
export type CreateAssistantWithAvatar = {
  /** user uploaded avatar, filetype must be png */
  avatar?: string;
  /** freeform JSON to allow custom customization options. */
  customProperties: unknown;
  /** Default prompt type for the assistant. */
  defaultPromptType?: "thread" | "oneshot";
  /** The description of the assistant. */
  description: string;
  /** List of knowledgebases the assistant is using. */
  knowledgeBases: string[];
  /** The name of the assistant. */
  name: string;
  /** Unique identifier of the space to contain the assistant. */
  spaceId: string;
  /** @deprecated
   * System prompt setting up conversation context. */
  systemMessage?: string;
  /** The list of tags for the assistant. */
  tags: string[];
  /** The title of the assistant. */
  title: string;
  /** Initial message in the chat conversation. */
  welcomeMessage: string;
};
export type CreateFeedback = {
  /** Optional comment for feedback. */
  comment?: string;
  /** Reason for feedback. */
  reason: string;
  /** Integer representation of feedback given (-1 = negative, 1 = positive). */
  vote: number;
};
export type CreateInteraction = {
  /** Indicator the system marked request as suspicious. */
  rejected?: boolean;
  /** Rejection reason for a question:
   *   * 1 - PROMPT_INJECTION
   *   * 2 - OUT_OF_CONTEXT
   *   * 3 - TOO_COMPLEX */
  rejectionReason?: RejectionReason;
  /** Interaction request content. */
  request: string;
  /** Interaction response content. */
  response: string;
  /** List of sources used to generate AI messages (interactions). */
  sources: MessageSource[];
};
export type CreateReview = {
  /** Review status. */
  reviewStatus: string;
};
export type CreateStarter = {
  /** Optional context collected from curated meant to be leveraged by LLM-based question recommendation system. */
  additionalContext?: string;
  /** List of followups. */
  followups?: Followup[];
  /** Starter sample question. */
  question: string;
  recommendedAnswer?: RecommendedAnswer;
};
export type CreateThread = {
  /** Datetime when the thread was created. */
  readonly createdAt?: string;
  /** The name of the thread. */
  name: string;
  /** Datetime when the thread was updated. */
  readonly updatedAt?: string;
  /** Whether the thread should use the user's preferred language. */
  useUserPreferredLanguage?: boolean;
};
export type ErrorResponse = {
  errors?: ErrorResponseCode[];
  traceId?: string;
};
export type ErrorResponseCode = {
  /** Custom error codes
   * * AE-1 - Internal processing error
   * * AE-2 - Incorrect request
   * * AE-3 - Authentication issue
   * * AE-4 - Prompt is rejected
   * * AE-5 - Resource is not found
   * * AE-6 - API usage rate limit is exceeded
   * * AE-7 - Method is not allowed */
  code?: string;
  detail?: string;
  title?: string;
};
export type ErrorResponseCodeCopy = {
  code?: string;
  detail?: string;
  title?: string;
};
export type ErrorResponseCopy = {
  errors?: ErrorResponseCodeCopy[];
  traceId?: string;
};
/**
 * An array of JSON Patch documents.
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/reason",
 *     value: "irrelevant"
 *   }
 * ]
 */
export type FeedbackPatchArray = JSONPatch[];
export type FeedbackSummary = {
  /** Amount of dislikes for a thread or an assistant. */
  dislikes: number;
  /** Count of answers which users marked as "inaccurate". */
  inaccurate?: number;
  /** Amount of interactions for a thread or an assistant. */
  interactions: number;
  /** Count of answers which users marked as "irrelevant". */
  irrelevant?: number;
  /** Amount of likes for a thread or an assistant. */
  likes: number;
  /** Count of answers which users disliked and gave "other" as reason. */
  other?: number;
  /** Count of answers which users marked as "repetitive". */
  repetitive?: number;
  /** Amount of reviews for a thread or an assistant. */
  reviews: number;
  /** Count of questions for which the assistant provided no answer. */
  unanswered?: number;
  /** Count of answers which users marked as "unhelpful". */
  unhelpful?: number;
};
export type Followup = {
  /** Optional context collected from curated meant to be leveraged by LLM-based question recommendation system. */
  additionalContext: string;
  /** Unique identifier of the Followup. */
  id: string;
  /** Starter sample question. */
  question: string;
  recommendedAnswer: RecommendedAnswer;
};
export type InteractionsResult = {
  data: Interaction[];
  links?: PageLinks;
  meta?: ResultMeta;
};
/**
 * Metadata about the chunk
 */
export type KbChunkMeta = {
  /** chunkId */
  chunkId: string;
  /** datasourceId of chunk */
  datasourceId: string;
  /** documentId of chunk */
  documentId: string;
  /** knowledgeBaseId of chunk */
  knowledgeBaseId: string;
  /** source of chunk */
  source: string;
};
export type PageLink = {
  href?: string;
};
export type PageLinks = {
  next?: PageLink;
  prev?: PageLink;
  self?: PageLink;
};
export type PromptInput = {
  input?: {
    /** Returns text from chunks in sources output. Default value is false. */
    includeText?: boolean;
    /** Input prompt string for the Assistant to respond to. */
    prompt?: string;
    /** Sets the prompt type to thread. */
    promptType?: "thread";
  };
};
export type PromptOutput = {
  /** Assistant's response to the prompt */
  output?: string;
  /** List of sources used to generate AI messages */
  sources?: Source[];
};
export type PromptOutputInvoke = {
  /** Assistant's response to the prompt */
  output?: string;
  /** Question asked by the user for assistant to answer */
  question?: string;
  /** List of sources used to generate AI messages */
  sources?: Source[];
};
export type RecommendedAnswer = {
  /** Starter answer content. */
  content: string;
  /** Answer type of content. */
  contentType: string;
};
/**
 * Rejection reason for a question:
 *   * 1 - PROMPT_INJECTION
 *   * 2 - OUT_OF_CONTEXT
 *   * 3 - TOO_COMPLEX
 * @example
 * 1
 */
export type RejectionReason = 1 | 2 | 3;
export type ResultMeta = {
  countTotal?: number;
};
export type SearchRequest = {
  /** Query text or question to search. */
  prompt: string;
  /** Search mode to use.   Allowed values: `SIMPLE` and `FULL`.   Default: `SIMPLE`. */
  searchMode?: "SIMPLE" | "FULL";
  /** Number of chunks to return in results. */
  topN?: number;
};
export type SearchResponse = {
  /** Retrieved document chunks */
  chunks: Chunk[];
};
export type Source = {
  /** List of Chunks used for "AI" generated messages */
  chunks?: unknown[];
  /** reference to DataSource used for "AI" generated messages */
  datasourceId?: string;
  /** reference to Document used for "AI" generated messages */
  documentId?: string;
  /** reference to KnowledgeBase used for "AI" generated messages */
  knowledgebaseId?: string;
  /** path to the document used */
  source?: string;
};
export type SourcesPlaintext = {
  textByChunkId?: unknown;
};
export type StartersResult = {
  data: Starter[];
  links?: PageLinks;
  meta?: ResultMeta;
};
/**
 * An array of JSON Patch documents.
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/name",
 *     value: "new name"
 *   }
 * ]
 */
export type ThreadPatchArray = JSONPatch[];
export type ThreadsResult = {
  data: Thread[];
  links?: PageLinks;
  meta?: ResultMeta;
};
/**
 * Retrieves the list of assistants. The result can be filtered, sorted, and paginated.
 *
 * @param query an object with query parameters
 * @throws GetAssistantsHttpError
 */
export declare function getAssistants(query: {
  /** @deprecated
   * Optional parameter to request total count for query. */
  countTotal?: boolean;
  /** The number of assistants to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, case insensitive, e.g. `name`. Can be prefixed with `-` to set descending order; defaults to ascending. */
  sort?: "NAME" | "-NAME" | "DESCRIPTION" | "-DESCRIPTION" | "CREATED" | "-CREATED" | "UPDATED" | "-UPDATED";
  /** Optional parameter to filter assistants by space ID. */
  spaceId?: string;
}, options?: ApiCallOptions): Promise<GetAssistantsHttpResponse>;
export type GetAssistantsHttpResponse = {
  data: AssistantsResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetAssistantsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetAssistantsHttpResponse>;
};
export type GetAssistantsHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Creates a new assistant.
 *
 * @param body an object with the body content
 * @throws CreateAssistantHttpError
 */
export declare function createAssistant(body: CreateAssistant, options?: ApiCallOptions): Promise<CreateAssistantHttpResponse>;
export type CreateAssistantHttpResponse = {
  data: Assistant;
  headers: Headers;
  status: 201;
};
export type CreateAssistantHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Perform search with either `SIMPLE` or `FULL` mode. SIMPLE does semantic search while FULL does semantic search, reranking and hybrid search. Use topN to control number of chunks in response, max limit is 50. Default to 5.
 *
 * @param assistantId The ID for the Assistant of interest
 * @param body an object with the body content
 * @throws SearchAssistantHttpError
 */
export declare function searchAssistant(assistantId: string, body: SearchRequest, options?: ApiCallOptions): Promise<SearchAssistantHttpResponse>;
export type SearchAssistantHttpResponse = {
  data: SearchResponse;
  headers: Headers;
  status: 200;
};
export type SearchAssistantHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 405 | 500;
};
/**
 * Retrieves feedback summary for the assistant.
 *
 * @param assistantId The ID of the assistant from which to retrieve feedback summary.
 * @throws GetAssistantFeedbackHttpError
 */
export declare function getAssistantFeedback(assistantId: string, options?: ApiCallOptions): Promise<GetAssistantFeedbackHttpResponse>;
export type GetAssistantFeedbackHttpResponse = {
  data: FeedbackSummary;
  headers: Headers;
  status: 200;
};
export type GetAssistantFeedbackHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Perform a bulk search for the plaintext of source chunks for the assistant.
 *
 * @param assistantId The ID of the assistant in which to search for source chunks.
 * @param body an object with the body content
 * @throws GetAssistantSourcesHttpError
 */
export declare function getAssistantSources(assistantId: string, body: ChunksRefs, options?: ApiCallOptions): Promise<GetAssistantSourcesHttpResponse>;
export type GetAssistantSourcesHttpResponse = {
  data: SourcesPlaintext;
  headers: Headers;
  status: 202;
};
export type GetAssistantSourcesHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves the list of starters for the assistant.
 *
 * @param assistantId The ID of the assistant from which to retrieve starters.
 * @param query an object with query parameters
 * @throws GetAssistantStartersHttpError
 */
export declare function getAssistantStarters(assistantId: string, query: {
  /** The number of starters to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, case insensitive, e.g. `name`. Can be prefixed with `-` to set descending order; defaults to ascending. */
  sort?: "QUESTION" | "-QUESTION" | "CREATED" | "-CREATED" | "UPDATED" | "-UPDATED";
}, options?: ApiCallOptions): Promise<GetAssistantStartersHttpResponse>;
export type GetAssistantStartersHttpResponse = {
  data: StartersResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetAssistantStartersHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetAssistantStartersHttpResponse>;
};
export type GetAssistantStartersHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Creates a new starter for the assistant.
 *
 * @param assistantId The ID of the assistant in which to create the starter.
 * @param body an object with the body content
 * @throws CreateAssistantStarterHttpError
 */
export declare function createAssistantStarter(assistantId: string, body: CreateStarter, options?: ApiCallOptions): Promise<CreateAssistantStarterHttpResponse>;
export type CreateAssistantStarterHttpResponse = {
  data: Starter;
  headers: Headers;
  status: 201;
};
export type CreateAssistantStarterHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Deletes the starter and all of its resources.
 *
 * @param assistantId The ID of the assistant containing the requested starter.
 * @param starterId The ID of the starter to delete.
 * @throws DeleteAssistantStarterHttpError
 */
export declare function deleteAssistantStarter(assistantId: string, starterId: string, options?: ApiCallOptions): Promise<DeleteAssistantStarterHttpResponse>;
export type DeleteAssistantStarterHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteAssistantStarterHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves the specified starter.
 *
 * @param assistantId The ID of the assistant containing the requested starter.
 * @param starterId The ID of the starter to retrieve.
 * @throws GetAssistantStarterHttpError
 */
export declare function getAssistantStarter(assistantId: string, starterId: string, options?: ApiCallOptions): Promise<GetAssistantStarterHttpResponse>;
export type GetAssistantStarterHttpResponse = {
  data: Starter;
  headers: Headers;
  status: 200;
};
export type GetAssistantStarterHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Updates the specified starter.
 *
 * @param assistantId The ID of the assistant containing the requested starter.
 * @param starterId The ID of the starter to retrieve.
 * @param body an object with the body content
 * @throws UpdateAssistantStarterHttpError
 */
export declare function updateAssistantStarter(assistantId: string, starterId: string, body: Starter, options?: ApiCallOptions): Promise<UpdateAssistantStarterHttpResponse>;
export type UpdateAssistantStarterHttpResponse = {
  data: Starter;
  headers: Headers;
  status: 200;
};
export type UpdateAssistantStarterHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Deletes the specified Followup.
 *
 * @param assistantId The ID of the assistant containing the requested Followup.
 * @param starterId The ID of the starter containing the requested Followup.
 * @param followupId The ID of the Followup to delete.
 * @throws DeleteAssistantStarterFollowupHttpError
 */
export declare function deleteAssistantStarterFollowup(assistantId: string, starterId: string, followupId: string, options?: ApiCallOptions): Promise<DeleteAssistantStarterFollowupHttpResponse>;
export type DeleteAssistantStarterFollowupHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteAssistantStarterFollowupHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Updates the specified Followup.
 *
 * @param assistantId The ID of the assistant containing the requested Followup.
 * @param starterId The ID of the starter containing the requested Followup.
 * @param followupId The ID of the Followup to update.
 * @param body an object with the body content
 * @throws UpdateAssistantStarterFollowupHttpError
 */
export declare function updateAssistantStarterFollowup(assistantId: string, starterId: string, followupId: string, body: Followup, options?: ApiCallOptions): Promise<UpdateAssistantStarterFollowupHttpResponse>;
export type UpdateAssistantStarterFollowupHttpResponse = {
  data: Starter;
  headers: Headers;
  status: 200;
};
export type UpdateAssistantStarterFollowupHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves the list of threads for the assistant.
 *
 * @param assistantId The ID of the assistant from which to retrieve threads.
 * @param query an object with query parameters
 * @throws GetAssistantThreadsHttpError
 */
export declare function getAssistantThreads(assistantId: string, query: {
  /** Optional parameter to filter threads. */
  filter?: string;
  /** The number of assistants to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, case insensitive, e.g. `name`. Can be prefixed with `-` to set descending order; defaults to ascending. */
  sort?: "NAME" | "-NAME" | "CREATED" | "-CREATED" | "UPDATED" | "-UPDATED";
}, options?: ApiCallOptions): Promise<GetAssistantThreadsHttpResponse>;
export type GetAssistantThreadsHttpResponse = {
  data: ThreadsResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetAssistantThreadsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetAssistantThreadsHttpResponse>;
};
export type GetAssistantThreadsHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Creates a new thread for the assistant.
 *
 * @param assistantId The ID of the assistant in which to create the thread.
 * @param body an object with the body content
 * @throws CreateAssistantThreadHttpError
 */
export declare function createAssistantThread(assistantId: string, body: CreateThread, options?: ApiCallOptions): Promise<CreateAssistantThreadHttpResponse>;
export type CreateAssistantThreadHttpResponse = {
  data: Thread;
  headers: Headers;
  status: 201;
};
export type CreateAssistantThreadHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Execute prompt in synchronous non-streaming mode.
 *
 * @param assistantId The ID of the Assistant containing requested Thread
 * @param threadId The ID of the Thread to retrieve
 * @param body an object with the body content
 * @throws InvokeAssistantThreadHttpError
 */
export declare function invokeAssistantThread(assistantId: string, threadId: string, body: PromptInput, options?: ApiCallOptions): Promise<InvokeAssistantThreadHttpResponse>;
export type InvokeAssistantThreadHttpResponse = {
  data: PromptOutputInvoke;
  headers: Headers;
  status: 200;
};
export type InvokeAssistantThreadHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 500;
};
/**
 * Execute prompt in asynchronous streaming mode.
 *
 * @param assistantId The ID of the Assistant containing requested Thread
 * @param threadId The ID of the Thread to retrieve
 * @param body an object with the body content
 * @throws StreamAssistantThreadHttpError
 */
export declare function streamAssistantThread(assistantId: string, threadId: string, body: PromptInput, options?: ApiCallOptions): Promise<StreamAssistantThreadHttpResponse>;
export type StreamAssistantThreadHttpResponse = {
  data: PromptOutput;
  headers: Headers;
  status: 200;
};
export type StreamAssistantThreadHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404 | 405 | 500;
};
/**
 * Retrieves the list of interactions for the thread.
 *
 * @param assistantId The ID of the assistant from which to retrieve the interactions.
 * @param threadId The ID of the thread from which to retrieve the interactions.
 * @param query an object with query parameters
 * @throws GetAssistantThreadInteractionsHttpError
 */
export declare function getAssistantThreadInteractions(assistantId: string, threadId: string, query: {
  /** The number of feedback to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, case insensitive, e.g. `created`. Can be prefixed with `-` to set descending order; defaults to ascending. */
  sort?: "CREATED" | "-CREATED" | "UPDATED" | "-UPDATED";
}, options?: ApiCallOptions): Promise<GetAssistantThreadInteractionsHttpResponse>;
export type GetAssistantThreadInteractionsHttpResponse = {
  data: InteractionsResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetAssistantThreadInteractionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetAssistantThreadInteractionsHttpResponse>;
};
export type GetAssistantThreadInteractionsHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Creates a new interaction for the thread.
 *
 * @param assistantId The ID of the assistant in which to create the interaction.
 * @param threadId The ID of the thread in which to create the interaction.
 * @param body an object with the body content
 * @throws CreateAssistantThreadInteractionHttpError
 */
export declare function createAssistantThreadInteraction(assistantId: string, threadId: string, body: CreateInteraction, options?: ApiCallOptions): Promise<CreateAssistantThreadInteractionHttpResponse>;
export type CreateAssistantThreadInteractionHttpResponse = {
  data: Interaction;
  headers: Headers;
  status: 201;
};
export type CreateAssistantThreadInteractionHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Deletes the specified interaction and all of its resources.
 *
 * @param assistantId The ID of the assistant in which to delete the interaction.
 * @param threadId The ID of the thread in which to delete the interaction.
 * @param interactionId The ID of the interaction to delete.
 * @throws DeleteAssistantThreadInteractionHttpError
 */
export declare function deleteAssistantThreadInteraction(assistantId: string, threadId: string, interactionId: string, options?: ApiCallOptions): Promise<DeleteAssistantThreadInteractionHttpResponse>;
export type DeleteAssistantThreadInteractionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteAssistantThreadInteractionHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves an interaction for the thread.
 *
 * @param assistantId The ID of the assistant in which to retrieve the interaction.
 * @param threadId The ID of the thread in which to retrieve the interaction.
 * @param interactionId The ID of the interaction to retrieve.
 * @throws GetAssistantThreadInteractionHttpError
 */
export declare function getAssistantThreadInteraction(assistantId: string, threadId: string, interactionId: string, options?: ApiCallOptions): Promise<GetAssistantThreadInteractionHttpResponse>;
export type GetAssistantThreadInteractionHttpResponse = {
  data: Interaction;
  headers: Headers;
  status: 200;
};
export type GetAssistantThreadInteractionHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Creates feedback for the thread.
 *
 * @param assistantId The ID of the assistant in which to create the feedback.
 * @param threadId The ID of the thread in which to create the feedback.
 * @param interactionId The ID of the interaction in which to create the feedback.
 * @param body an object with the body content
 * @throws CreateAssistantThreadInteractionFeedbackHttpError
 */
export declare function createAssistantThreadInteractionFeedback(assistantId: string, threadId: string, interactionId: string, body: CreateFeedback, options?: ApiCallOptions): Promise<CreateAssistantThreadInteractionFeedbackHttpResponse>;
export type CreateAssistantThreadInteractionFeedbackHttpResponse = {
  data: Interaction;
  headers: Headers;
  status: 201;
};
export type CreateAssistantThreadInteractionFeedbackHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Updates feedback for the thread.
 *
 * @param assistantId The ID of the assistant containing the requested feedback.
 * @param threadId The ID of the thread containing the requested feedback.
 * @param interactionId The ID of the interaction containing the requested Feedback.
 * @param feedbackId The ID of the feedback to update.
 * @param body an object with the body content
 * @throws PatchAssistantThreadInteractionFeedbackHttpError
 */
export declare function patchAssistantThreadInteractionFeedback(assistantId: string, threadId: string, interactionId: string, feedbackId: string, body: FeedbackPatchArray, options?: ApiCallOptions): Promise<PatchAssistantThreadInteractionFeedbackHttpResponse>;
export type PatchAssistantThreadInteractionFeedbackHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type PatchAssistantThreadInteractionFeedbackHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Creates feedback review for the thread.
 *
 * @param assistantId The ID of the assistant in which to create the feedback review.
 * @param threadId The ID of the thread in which to create the feedback review.
 * @param interactionId The ID of the interaction in which to create the feedback review.
 * @param body an object with the body content
 * @throws CreateAssistantThreadInteractionReviewHttpError
 */
export declare function createAssistantThreadInteractionReview(assistantId: string, threadId: string, interactionId: string, body: CreateReview, options?: ApiCallOptions): Promise<CreateAssistantThreadInteractionReviewHttpResponse>;
export type CreateAssistantThreadInteractionReviewHttpResponse = {
  data: Interaction;
  headers: Headers;
  status: 201;
};
export type CreateAssistantThreadInteractionReviewHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Deletes the specified thread and all of its resources.
 *
 * @param assistantid The ID of the assistant containing the requested thread.
 * @param threadid The ID of the thread to retrieve.
 * @throws DeleteAssistantThreadHttpError
 */
export declare function deleteAssistantThread(assistantid: string, threadid: string, options?: ApiCallOptions): Promise<DeleteAssistantThreadHttpResponse>;
export type DeleteAssistantThreadHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteAssistantThreadHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves a thread for the assistant.
 *
 * @param assistantid The ID of the assistant containing the requested thread.
 * @param threadid The ID of the thread to retrieve.
 * @throws GetAssistantThreadHttpError
 */
export declare function getAssistantThread(assistantid: string, threadid: string, options?: ApiCallOptions): Promise<GetAssistantThreadHttpResponse>;
export type GetAssistantThreadHttpResponse = {
  data: ThreadWithMessages;
  headers: Headers;
  status: 200;
};
export type GetAssistantThreadHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Updates the properties of an existing thread with JSON Patch-formatted data.
 *
 * @param assistantid The ID of the assistant containing the requested thread.
 * @param threadid The ID of the thread to retrieve.
 * @param body an object with the body content
 * @throws PatchAssistantThreadHttpError
 */
export declare function patchAssistantThread(assistantid: string, threadid: string, body: ThreadPatchArray, options?: ApiCallOptions): Promise<PatchAssistantThreadHttpResponse>;
export type PatchAssistantThreadHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type PatchAssistantThreadHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429;
};
/**
 * Deletes the assistant and all of its resources.
 *
 * @param id The ID of the assistant to delete.
 * @throws DeleteAssistantHttpError
 */
export declare function deleteAssistant(id: string, options?: ApiCallOptions): Promise<DeleteAssistantHttpResponse>;
export type DeleteAssistantHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type DeleteAssistantHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves the specified assistant.
 *
 * @param id The ID of the assistant to retrieve.
 * @throws GetAssistantHttpError
 */
export declare function getAssistant(id: string, options?: ApiCallOptions): Promise<GetAssistantHttpResponse>;
export type GetAssistantHttpResponse = {
  data: Assistant;
  headers: Headers;
  status: 200;
};
export type GetAssistantHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Updates the properties of an existing assistant with JSON Patch-formatted data.
 *
 * @param id The assistant ID.
 * @param body an object with the body content
 * @throws PatchAssistantHttpError
 */
export declare function patchAssistant(id: string, body: JSONPatchArray, options?: ApiCallOptions): Promise<PatchAssistantHttpResponse>;
export type PatchAssistantHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
export type PatchAssistantHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429;
};
/**
 * Clears the cache for assistants api requests.
 */
export declare function clearCache(): void;
export type AssistantsAPI = {
  /**
   * Retrieves the list of assistants. The result can be filtered, sorted, and paginated.
   *
   * @param query an object with query parameters
   * @throws GetAssistantsHttpError
   */
  getAssistants: typeof getAssistants;
  /**
   * Creates a new assistant.
   *
   * @param body an object with the body content
   * @throws CreateAssistantHttpError
   */
  createAssistant: typeof createAssistant;
  /**
   * Perform search with either `SIMPLE` or `FULL` mode. SIMPLE does semantic search while FULL does semantic search, reranking and hybrid search. Use topN to control number of chunks in response, max limit is 50. Default to 5.
   *
   * @param assistantId The ID for the Assistant of interest
   * @param body an object with the body content
   * @throws SearchAssistantHttpError
   */
  searchAssistant: typeof searchAssistant;
  /**
   * Retrieves feedback summary for the assistant.
   *
   * @param assistantId The ID of the assistant from which to retrieve feedback summary.
   * @throws GetAssistantFeedbackHttpError
   */
  getAssistantFeedback: typeof getAssistantFeedback;
  /**
   * Perform a bulk search for the plaintext of source chunks for the assistant.
   *
   * @param assistantId The ID of the assistant in which to search for source chunks.
   * @param body an object with the body content
   * @throws GetAssistantSourcesHttpError
   */
  getAssistantSources: typeof getAssistantSources;
  /**
   * Retrieves the list of starters for the assistant.
   *
   * @param assistantId The ID of the assistant from which to retrieve starters.
   * @param query an object with query parameters
   * @throws GetAssistantStartersHttpError
   */
  getAssistantStarters: typeof getAssistantStarters;
  /**
   * Creates a new starter for the assistant.
   *
   * @param assistantId The ID of the assistant in which to create the starter.
   * @param body an object with the body content
   * @throws CreateAssistantStarterHttpError
   */
  createAssistantStarter: typeof createAssistantStarter;
  /**
   * Deletes the starter and all of its resources.
   *
   * @param assistantId The ID of the assistant containing the requested starter.
   * @param starterId The ID of the starter to delete.
   * @throws DeleteAssistantStarterHttpError
   */
  deleteAssistantStarter: typeof deleteAssistantStarter;
  /**
   * Retrieves the specified starter.
   *
   * @param assistantId The ID of the assistant containing the requested starter.
   * @param starterId The ID of the starter to retrieve.
   * @throws GetAssistantStarterHttpError
   */
  getAssistantStarter: typeof getAssistantStarter;
  /**
   * Updates the specified starter.
   *
   * @param assistantId The ID of the assistant containing the requested starter.
   * @param starterId The ID of the starter to retrieve.
   * @param body an object with the body content
   * @throws UpdateAssistantStarterHttpError
   */
  updateAssistantStarter: typeof updateAssistantStarter;
  /**
   * Deletes the specified Followup.
   *
   * @param assistantId The ID of the assistant containing the requested Followup.
   * @param starterId The ID of the starter containing the requested Followup.
   * @param followupId The ID of the Followup to delete.
   * @throws DeleteAssistantStarterFollowupHttpError
   */
  deleteAssistantStarterFollowup: typeof deleteAssistantStarterFollowup;
  /**
   * Updates the specified Followup.
   *
   * @param assistantId The ID of the assistant containing the requested Followup.
   * @param starterId The ID of the starter containing the requested Followup.
   * @param followupId The ID of the Followup to update.
   * @param body an object with the body content
   * @throws UpdateAssistantStarterFollowupHttpError
   */
  updateAssistantStarterFollowup: typeof updateAssistantStarterFollowup;
  /**
   * Retrieves the list of threads for the assistant.
   *
   * @param assistantId The ID of the assistant from which to retrieve threads.
   * @param query an object with query parameters
   * @throws GetAssistantThreadsHttpError
   */
  getAssistantThreads: typeof getAssistantThreads;
  /**
   * Creates a new thread for the assistant.
   *
   * @param assistantId The ID of the assistant in which to create the thread.
   * @param body an object with the body content
   * @throws CreateAssistantThreadHttpError
   */
  createAssistantThread: typeof createAssistantThread;
  /**
   * Execute prompt in synchronous non-streaming mode.
   *
   * @param assistantId The ID of the Assistant containing requested Thread
   * @param threadId The ID of the Thread to retrieve
   * @param body an object with the body content
   * @throws InvokeAssistantThreadHttpError
   */
  invokeAssistantThread: typeof invokeAssistantThread;
  /**
   * Execute prompt in asynchronous streaming mode.
   *
   * @param assistantId The ID of the Assistant containing requested Thread
   * @param threadId The ID of the Thread to retrieve
   * @param body an object with the body content
   * @throws StreamAssistantThreadHttpError
   */
  streamAssistantThread: typeof streamAssistantThread;
  /**
   * Retrieves the list of interactions for the thread.
   *
   * @param assistantId The ID of the assistant from which to retrieve the interactions.
   * @param threadId The ID of the thread from which to retrieve the interactions.
   * @param query an object with query parameters
   * @throws GetAssistantThreadInteractionsHttpError
   */
  getAssistantThreadInteractions: typeof getAssistantThreadInteractions;
  /**
   * Creates a new interaction for the thread.
   *
   * @param assistantId The ID of the assistant in which to create the interaction.
   * @param threadId The ID of the thread in which to create the interaction.
   * @param body an object with the body content
   * @throws CreateAssistantThreadInteractionHttpError
   */
  createAssistantThreadInteraction: typeof createAssistantThreadInteraction;
  /**
   * Deletes the specified interaction and all of its resources.
   *
   * @param assistantId The ID of the assistant in which to delete the interaction.
   * @param threadId The ID of the thread in which to delete the interaction.
   * @param interactionId The ID of the interaction to delete.
   * @throws DeleteAssistantThreadInteractionHttpError
   */
  deleteAssistantThreadInteraction: typeof deleteAssistantThreadInteraction;
  /**
   * Retrieves an interaction for the thread.
   *
   * @param assistantId The ID of the assistant in which to retrieve the interaction.
   * @param threadId The ID of the thread in which to retrieve the interaction.
   * @param interactionId The ID of the interaction to retrieve.
   * @throws GetAssistantThreadInteractionHttpError
   */
  getAssistantThreadInteraction: typeof getAssistantThreadInteraction;
  /**
   * Creates feedback for the thread.
   *
   * @param assistantId The ID of the assistant in which to create the feedback.
   * @param threadId The ID of the thread in which to create the feedback.
   * @param interactionId The ID of the interaction in which to create the feedback.
   * @param body an object with the body content
   * @throws CreateAssistantThreadInteractionFeedbackHttpError
   */
  createAssistantThreadInteractionFeedback: typeof createAssistantThreadInteractionFeedback;
  /**
   * Updates feedback for the thread.
   *
   * @param assistantId The ID of the assistant containing the requested feedback.
   * @param threadId The ID of the thread containing the requested feedback.
   * @param interactionId The ID of the interaction containing the requested Feedback.
   * @param feedbackId The ID of the feedback to update.
   * @param body an object with the body content
   * @throws PatchAssistantThreadInteractionFeedbackHttpError
   */
  patchAssistantThreadInteractionFeedback: typeof patchAssistantThreadInteractionFeedback;
  /**
   * Creates feedback review for the thread.
   *
   * @param assistantId The ID of the assistant in which to create the feedback review.
   * @param threadId The ID of the thread in which to create the feedback review.
   * @param interactionId The ID of the interaction in which to create the feedback review.
   * @param body an object with the body content
   * @throws CreateAssistantThreadInteractionReviewHttpError
   */
  createAssistantThreadInteractionReview: typeof createAssistantThreadInteractionReview;
  /**
   * Deletes the specified thread and all of its resources.
   *
   * @param assistantid The ID of the assistant containing the requested thread.
   * @param threadid The ID of the thread to retrieve.
   * @throws DeleteAssistantThreadHttpError
   */
  deleteAssistantThread: typeof deleteAssistantThread;
  /**
   * Retrieves a thread for the assistant.
   *
   * @param assistantid The ID of the assistant containing the requested thread.
   * @param threadid The ID of the thread to retrieve.
   * @throws GetAssistantThreadHttpError
   */
  getAssistantThread: typeof getAssistantThread;
  /**
   * Updates the properties of an existing thread with JSON Patch-formatted data.
   *
   * @param assistantid The ID of the assistant containing the requested thread.
   * @param threadid The ID of the thread to retrieve.
   * @param body an object with the body content
   * @throws PatchAssistantThreadHttpError
   */
  patchAssistantThread: typeof patchAssistantThread;
  /**
   * Deletes the assistant and all of its resources.
   *
   * @param id The ID of the assistant to delete.
   * @throws DeleteAssistantHttpError
   */
  deleteAssistant: typeof deleteAssistant;
  /**
   * Retrieves the specified assistant.
   *
   * @param id The ID of the assistant to retrieve.
   * @throws GetAssistantHttpError
   */
  getAssistant: typeof getAssistant;
  /**
   * Updates the properties of an existing assistant with JSON Patch-formatted data.
   *
   * @param id The assistant ID.
   * @param body an object with the body content
   * @throws PatchAssistantHttpError
   */
  patchAssistant: typeof patchAssistant;
  /**
   * Clears the cache for assistants api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the assistants api
 */
declare const assistantsExport: AssistantsAPI;
//#endregion
export { assistantsExport as default };