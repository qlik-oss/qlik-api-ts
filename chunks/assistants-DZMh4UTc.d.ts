import { y as ApiCallOptions } from "./auth-types-CHOUViJI.js";

//#region src/public/rest/assistants.d.ts
type Assistant = {
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
type ChunksRefs = {
  chunkIds: string[];
};
type Feedback = {
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
type Interaction = {
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
type JSONPatch = {
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
type JSONPatchArray = JSONPatch[];
type Message = {
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
type MessageSource = {
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
type MessageSourceChunk = {
  /** Chunk unique identifier for "AI" generated message source. */
  chunkId: string;
  /** Chunk text for "AI" generated message source. */
  text?: string;
};
type Starter = {
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
type Thread = {
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
};
type ThreadWithMessages = {
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
};
type AssistantsResult = {
  data: Assistant[];
  links?: PageLinks;
  meta?: ResultMeta;
};
type Chunk = {
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
type CreateAssistant = {
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
type CreateAssistantWithAvatar = {
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
type CreateFeedback = {
  /** Optional comment for feedback. */
  comment?: string;
  /** Reason for feedback. */
  reason: string;
  /** Integer representation of feedback given (-1 = negative, 1 = positive). */
  vote: number;
};
type CreateInteraction = {
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
type CreateReview = {
  /** Review status. */
  reviewStatus: string;
};
type CreateStarter = {
  /** Optional context collected from curated meant to be leveraged by LLM-based question recommendation system. */
  additionalContext?: string;
  /** List of followups. */
  followups?: Followup[];
  /** Starter sample question. */
  question: string;
  recommendedAnswer?: RecommendedAnswer;
};
type CreateThread = {
  /** Datetime when the thread was created. */
  readonly createdAt?: string;
  /** The name of the thread. */
  name: string;
  /** Datetime when the thread was updated. */
  readonly updatedAt?: string;
};
type ErrorResponse = {
  errors?: ErrorResponseCode[];
  traceId?: string;
};
type ErrorResponseCode = {
  code?: string;
  detail?: string;
  title?: string;
};
type ErrorResponseCodeCopy = {
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
type ErrorResponseCopy = {
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
type FeedbackPatchArray = JSONPatch[];
type FeedbackSummary = {
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
type Followup = {
  /** Optional context collected from curated meant to be leveraged by LLM-based question recommendation system. */
  additionalContext: string;
  /** Unique identifier of the Followup. */
  id: string;
  /** Starter sample question. */
  question: string;
  recommendedAnswer: RecommendedAnswer;
};
type InteractionsResult = {
  data: Interaction[];
  links?: PageLinks;
  meta?: ResultMeta;
};
/**
 * Metadata about the chunk
 */
type KbChunkMeta = {
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
type PageLink = {
  href?: string;
};
type PageLinks = {
  next?: PageLink;
  prev?: PageLink;
  self?: PageLink;
};
type PromptInput = {
  input?: {
    /** Returns text from chunks in sources output. Default value is false. */
    includeText?: boolean;
    /** Input prompt string for the Assistant to respond to. */
    prompt?: string;
    /** Sets the prompt type to thread. */
    promptType?: "thread";
  };
};
type PromptOutput = {
  /** Assistant's response to the prompt */
  output?: string;
  /** List of sources used to generate AI messages */
  sources?: Source[];
};
type PromptOutputInvoke = {
  /** Assistant's response to the prompt */
  output?: string;
  /** Question asked by the user for assistant to answer */
  question?: string;
  /** List of sources used to generate AI messages */
  sources?: Source[];
};
type RecommendedAnswer = {
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
type RejectionReason = 1 | 2 | 3;
type ResultMeta = {
  countTotal?: number;
};
type SearchRequest = {
  /** Query text or question to search. */
  prompt: string;
  /** Search mode to use.   Allowed values: `SIMPLE` and `FULL`.   Default: `SIMPLE`. */
  searchMode?: "SIMPLE" | "FULL";
  /** Number of chunks to return in results. */
  topN?: number;
};
type SearchResponse = {
  /** Retrieved document chunks */
  chunks: Chunk[];
};
type Source = {
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
type SourcesPlaintext = {
  textByChunkId?: unknown;
};
type StartersResult = {
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
type ThreadPatchArray = JSONPatch[];
type ThreadsResult = {
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
declare function getAssistants(query: {
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
}, options?: ApiCallOptions): Promise<GetAssistantsHttpResponse>;
type GetAssistantsHttpResponse = {
  data: AssistantsResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetAssistantsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetAssistantsHttpResponse>;
};
type GetAssistantsHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403;
};
/**
 * Creates a new assistant.
 *
 * @param body an object with the body content
 * @throws CreateAssistantHttpError
 */
declare function createAssistant(body: CreateAssistant, options?: ApiCallOptions): Promise<CreateAssistantHttpResponse>;
type CreateAssistantHttpResponse = {
  data: Assistant;
  headers: Headers;
  status: 201;
};
type CreateAssistantHttpError = {
  data: ErrorResponse;
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
declare function searchAssistant(assistantId: string, body: SearchRequest, options?: ApiCallOptions): Promise<SearchAssistantHttpResponse>;
type SearchAssistantHttpResponse = {
  data: SearchResponse;
  headers: Headers;
  status: 200;
};
type SearchAssistantHttpError = {
  data: ErrorResponseCopy;
  headers: Headers;
  status: 400 | 403 | 404 | 405 | 500;
};
/**
 * Retrieves feedback summary for the assistant.
 *
 * @param assistantId The ID of the assistant from which to retrieve feedback summary.
 * @throws GetAssistantFeedbackHttpError
 */
declare function getAssistantFeedback(assistantId: string, options?: ApiCallOptions): Promise<GetAssistantFeedbackHttpResponse>;
type GetAssistantFeedbackHttpResponse = {
  data: FeedbackSummary;
  headers: Headers;
  status: 200;
};
type GetAssistantFeedbackHttpError = {
  data: ErrorResponse;
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
declare function getAssistantSources(assistantId: string, body: ChunksRefs, options?: ApiCallOptions): Promise<GetAssistantSourcesHttpResponse>;
type GetAssistantSourcesHttpResponse = {
  data: SourcesPlaintext;
  headers: Headers;
  status: 202;
};
type GetAssistantSourcesHttpError = {
  data: ErrorResponse;
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
declare function getAssistantStarters(assistantId: string, query: {
  /** The number of starters to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, case insensitive, e.g. `name`. Can be prefixed with `-` to set descending order; defaults to ascending. */
  sort?: "QUESTION" | "-QUESTION" | "CREATED" | "-CREATED" | "UPDATED" | "-UPDATED";
}, options?: ApiCallOptions): Promise<GetAssistantStartersHttpResponse>;
type GetAssistantStartersHttpResponse = {
  data: StartersResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetAssistantStartersHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetAssistantStartersHttpResponse>;
};
type GetAssistantStartersHttpError = {
  data: ErrorResponse;
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
declare function createAssistantStarter(assistantId: string, body: CreateStarter, options?: ApiCallOptions): Promise<CreateAssistantStarterHttpResponse>;
type CreateAssistantStarterHttpResponse = {
  data: Starter;
  headers: Headers;
  status: 201;
};
type CreateAssistantStarterHttpError = {
  data: ErrorResponse;
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
declare function deleteAssistantStarter(assistantId: string, starterId: string, options?: ApiCallOptions): Promise<DeleteAssistantStarterHttpResponse>;
type DeleteAssistantStarterHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteAssistantStarterHttpError = {
  data: ErrorResponse;
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
declare function getAssistantStarter(assistantId: string, starterId: string, options?: ApiCallOptions): Promise<GetAssistantStarterHttpResponse>;
type GetAssistantStarterHttpResponse = {
  data: Starter;
  headers: Headers;
  status: 200;
};
type GetAssistantStarterHttpError = {
  data: ErrorResponse;
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
declare function updateAssistantStarter(assistantId: string, starterId: string, body: Starter, options?: ApiCallOptions): Promise<UpdateAssistantStarterHttpResponse>;
type UpdateAssistantStarterHttpResponse = {
  data: Starter;
  headers: Headers;
  status: 200;
};
type UpdateAssistantStarterHttpError = {
  data: ErrorResponse;
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
declare function deleteAssistantStarterFollowup(assistantId: string, starterId: string, followupId: string, options?: ApiCallOptions): Promise<DeleteAssistantStarterFollowupHttpResponse>;
type DeleteAssistantStarterFollowupHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteAssistantStarterFollowupHttpError = {
  data: ErrorResponse;
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
declare function updateAssistantStarterFollowup(assistantId: string, starterId: string, followupId: string, body: Followup, options?: ApiCallOptions): Promise<UpdateAssistantStarterFollowupHttpResponse>;
type UpdateAssistantStarterFollowupHttpResponse = {
  data: Starter;
  headers: Headers;
  status: 200;
};
type UpdateAssistantStarterFollowupHttpError = {
  data: ErrorResponse;
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
declare function getAssistantThreads(assistantId: string, query: {
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
type GetAssistantThreadsHttpResponse = {
  data: ThreadsResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetAssistantThreadsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetAssistantThreadsHttpResponse>;
};
type GetAssistantThreadsHttpError = {
  data: ErrorResponse;
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
declare function createAssistantThread(assistantId: string, body: CreateThread, options?: ApiCallOptions): Promise<CreateAssistantThreadHttpResponse>;
type CreateAssistantThreadHttpResponse = {
  data: Thread;
  headers: Headers;
  status: 201;
};
type CreateAssistantThreadHttpError = {
  data: ErrorResponse;
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
declare function invokeAssistantThread(assistantId: string, threadId: string, body: PromptInput, options?: ApiCallOptions): Promise<InvokeAssistantThreadHttpResponse>;
type InvokeAssistantThreadHttpResponse = {
  data: PromptOutputInvoke;
  headers: Headers;
  status: 200;
};
type InvokeAssistantThreadHttpError = {
  data: ErrorResponseCopy;
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
declare function streamAssistantThread(assistantId: string, threadId: string, body: PromptInput, options?: ApiCallOptions): Promise<StreamAssistantThreadHttpResponse>;
type StreamAssistantThreadHttpResponse = {
  data: PromptOutput;
  headers: Headers;
  status: 200;
};
type StreamAssistantThreadHttpError = {
  data: ErrorResponseCopy;
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
declare function getAssistantThreadInteractions(assistantId: string, threadId: string, query: {
  /** The number of feedback to get. */
  limit?: number;
  /** Optional parameter to request the next page. */
  next?: string;
  /** Optional parameter to request the previous page. */
  prev?: string;
  /** Optional resource field name to sort on, case insensitive, e.g. `created`. Can be prefixed with `-` to set descending order; defaults to ascending. */
  sort?: "CREATED" | "-CREATED" | "UPDATED" | "-UPDATED";
}, options?: ApiCallOptions): Promise<GetAssistantThreadInteractionsHttpResponse>;
type GetAssistantThreadInteractionsHttpResponse = {
  data: InteractionsResult;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetAssistantThreadInteractionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetAssistantThreadInteractionsHttpResponse>;
};
type GetAssistantThreadInteractionsHttpError = {
  data: ErrorResponse;
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
declare function createAssistantThreadInteraction(assistantId: string, threadId: string, body: CreateInteraction, options?: ApiCallOptions): Promise<CreateAssistantThreadInteractionHttpResponse>;
type CreateAssistantThreadInteractionHttpResponse = {
  data: Interaction;
  headers: Headers;
  status: 201;
};
type CreateAssistantThreadInteractionHttpError = {
  data: ErrorResponse;
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
declare function deleteAssistantThreadInteraction(assistantId: string, threadId: string, interactionId: string, options?: ApiCallOptions): Promise<DeleteAssistantThreadInteractionHttpResponse>;
type DeleteAssistantThreadInteractionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteAssistantThreadInteractionHttpError = {
  data: ErrorResponse;
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
declare function getAssistantThreadInteraction(assistantId: string, threadId: string, interactionId: string, options?: ApiCallOptions): Promise<GetAssistantThreadInteractionHttpResponse>;
type GetAssistantThreadInteractionHttpResponse = {
  data: Interaction;
  headers: Headers;
  status: 200;
};
type GetAssistantThreadInteractionHttpError = {
  data: ErrorResponse;
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
declare function createAssistantThreadInteractionFeedback(assistantId: string, threadId: string, interactionId: string, body: CreateFeedback, options?: ApiCallOptions): Promise<CreateAssistantThreadInteractionFeedbackHttpResponse>;
type CreateAssistantThreadInteractionFeedbackHttpResponse = {
  data: Interaction;
  headers: Headers;
  status: 201;
};
type CreateAssistantThreadInteractionFeedbackHttpError = {
  data: ErrorResponse;
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
declare function patchAssistantThreadInteractionFeedback(assistantId: string, threadId: string, interactionId: string, feedbackId: string, body: FeedbackPatchArray, options?: ApiCallOptions): Promise<PatchAssistantThreadInteractionFeedbackHttpResponse>;
type PatchAssistantThreadInteractionFeedbackHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchAssistantThreadInteractionFeedbackHttpError = {
  data: ErrorResponse;
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
declare function createAssistantThreadInteractionReview(assistantId: string, threadId: string, interactionId: string, body: CreateReview, options?: ApiCallOptions): Promise<CreateAssistantThreadInteractionReviewHttpResponse>;
type CreateAssistantThreadInteractionReviewHttpResponse = {
  data: Interaction;
  headers: Headers;
  status: 201;
};
type CreateAssistantThreadInteractionReviewHttpError = {
  data: ErrorResponse;
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
declare function deleteAssistantThread(assistantid: string, threadid: string, options?: ApiCallOptions): Promise<DeleteAssistantThreadHttpResponse>;
type DeleteAssistantThreadHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteAssistantThreadHttpError = {
  data: ErrorResponse;
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
declare function getAssistantThread(assistantid: string, threadid: string, options?: ApiCallOptions): Promise<GetAssistantThreadHttpResponse>;
type GetAssistantThreadHttpResponse = {
  data: ThreadWithMessages;
  headers: Headers;
  status: 200;
};
type GetAssistantThreadHttpError = {
  data: ErrorResponse;
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
declare function patchAssistantThread(assistantid: string, threadid: string, body: ThreadPatchArray, options?: ApiCallOptions): Promise<PatchAssistantThreadHttpResponse>;
type PatchAssistantThreadHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchAssistantThreadHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429;
};
/**
 * Deletes the assistant and all of its resources.
 *
 * @param id The ID of the assistant to delete.
 * @throws DeleteAssistantHttpError
 */
declare function deleteAssistant(id: string, options?: ApiCallOptions): Promise<DeleteAssistantHttpResponse>;
type DeleteAssistantHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteAssistantHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 403 | 404;
};
/**
 * Retrieves the specified assistant.
 *
 * @param id The ID of the assistant to retrieve.
 * @throws GetAssistantHttpError
 */
declare function getAssistant(id: string, options?: ApiCallOptions): Promise<GetAssistantHttpResponse>;
type GetAssistantHttpResponse = {
  data: Assistant;
  headers: Headers;
  status: 200;
};
type GetAssistantHttpError = {
  data: ErrorResponse;
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
declare function patchAssistant(id: string, body: JSONPatchArray, options?: ApiCallOptions): Promise<PatchAssistantHttpResponse>;
type PatchAssistantHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchAssistantHttpError = {
  data: ErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 429;
};
/**
 * Clears the cache for assistants api requests.
 */
declare function clearCache(): void;
type AssistantsAPI = {
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
export { GetAssistantThreadHttpError as $, createAssistant as $t, DeleteAssistantStarterHttpResponse as A, RecommendedAnswer as At, FeedbackPatchArray as B, StartersResult as Bt, CreateStarter as C, patchAssistantThreadInteractionFeedback as Cn, PatchAssistantThreadHttpError as Ct, DeleteAssistantStarterFollowupHttpError as D, updateAssistantStarterFollowup as Dn, PromptInput as Dt, DeleteAssistantHttpResponse as E, updateAssistantStarter as En, PatchAssistantThreadInteractionFeedbackHttpResponse as Et, ErrorResponse as F, SearchRequest as Ft, GetAssistantHttpError as G, ThreadWithMessages as Gt, Followup as H, StreamAssistantThreadHttpResponse as Ht, ErrorResponseCode as I, SearchResponse as It, GetAssistantSourcesHttpResponse as J, UpdateAssistantStarterFollowupHttpResponse as Jt, GetAssistantHttpResponse as K, ThreadsResult as Kt, ErrorResponseCodeCopy as L, Source as Lt, DeleteAssistantThreadHttpResponse as M, ResultMeta as Mt, DeleteAssistantThreadInteractionHttpError as N, SearchAssistantHttpError as Nt, DeleteAssistantStarterFollowupHttpResponse as O, PromptOutput as Ot, DeleteAssistantThreadInteractionHttpResponse as P, SearchAssistantHttpResponse as Pt, GetAssistantStartersHttpResponse as Q, clearCache as Qt, ErrorResponseCopy as R, SourcesPlaintext as Rt, CreateReview as S, patchAssistantThread as Sn, PatchAssistantHttpResponse as St, DeleteAssistantHttpError as T, streamAssistantThread as Tn, PatchAssistantThreadInteractionFeedbackHttpError as Tt, GetAssistantFeedbackHttpError as U, Thread as Ut, FeedbackSummary as V, StreamAssistantThreadHttpError as Vt, GetAssistantFeedbackHttpResponse as W, ThreadPatchArray as Wt, GetAssistantStarterHttpResponse as X, UpdateAssistantStarterHttpResponse as Xt, GetAssistantStarterHttpError as Y, UpdateAssistantStarterHttpError as Yt, GetAssistantStartersHttpError as Z, assistantsExport as Zt, CreateAssistantThreadInteractionReviewHttpError as _, getAssistantThreadInteractions as _n, MessageSource as _t, ChunksRefs as a, deleteAssistant as an, GetAssistantThreadsHttpError as at, CreateFeedback as b, invokeAssistantThread as bn, PageLinks as bt, CreateAssistantHttpResponse as c, deleteAssistantThread as cn, GetAssistantsHttpResponse as ct, CreateAssistantThreadHttpError as d, getAssistantFeedback as dn, InvokeAssistantThreadHttpError as dt, createAssistantStarter as en, GetAssistantThreadHttpResponse as et, CreateAssistantThreadHttpResponse as f, getAssistantSources as fn, InvokeAssistantThreadHttpResponse as ft, CreateAssistantThreadInteractionHttpResponse as g, getAssistantThreadInteraction as gn, Message as gt, CreateAssistantThreadInteractionHttpError as h, getAssistantThread as hn, KbChunkMeta as ht, Chunk as i, createAssistantThreadInteractionReview as in, GetAssistantThreadInteractionsHttpResponse as it, DeleteAssistantThreadHttpError as j, RejectionReason as jt, DeleteAssistantStarterHttpError as k, PromptOutputInvoke as kt, CreateAssistantStarterHttpError as l, deleteAssistantThreadInteraction as ln, Interaction as lt, CreateAssistantThreadInteractionFeedbackHttpResponse as m, getAssistantStarters as mn, JSONPatchArray as mt, AssistantsAPI as n, createAssistantThreadInteraction as nn, GetAssistantThreadInteractionHttpResponse as nt, CreateAssistant as o, deleteAssistantStarter as on, GetAssistantThreadsHttpResponse as ot, CreateAssistantThreadInteractionFeedbackHttpError as p, getAssistantStarter as pn, JSONPatch as pt, GetAssistantSourcesHttpError as q, UpdateAssistantStarterFollowupHttpError as qt, AssistantsResult as r, createAssistantThreadInteractionFeedback as rn, GetAssistantThreadInteractionsHttpError as rt, CreateAssistantHttpError as s, deleteAssistantStarterFollowup as sn, GetAssistantsHttpError as st, Assistant as t, createAssistantThread as tn, GetAssistantThreadInteractionHttpError as tt, CreateAssistantStarterHttpResponse as u, getAssistant as un, InteractionsResult as ut, CreateAssistantThreadInteractionReviewHttpResponse as v, getAssistantThreads as vn, MessageSourceChunk as vt, CreateThread as w, searchAssistant as wn, PatchAssistantThreadHttpResponse as wt, CreateInteraction as x, patchAssistant as xn, PatchAssistantHttpError as xt, CreateAssistantWithAvatar as y, getAssistants as yn, PageLink as yt, Feedback as z, Starter as zt };