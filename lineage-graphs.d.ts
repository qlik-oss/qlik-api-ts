import { x as ApiCallOptions } from "./chunks/auth-types-DCwmQ7fk.js";
import "./chunks/invoke-fetch-eUbA2JSu.js";
//#region src/public/rest/lineage-graphs.d.ts
/**
 * The data integration data asset where the node belongs to
 */
export type DataAsset = {
  /** The id (QRI) of the data asset */
  id?: string;
  /** The lable of the data asset */
  label?: string;
  /** The subtype of the data asset */
  subtype?: string;
  /** The type of the data asset */
  type?: string;
};
export type Edge = {
  /** The index of edges. This is only used in the POST request. */
  id?: string | null;
  metadata?: {
    type?: string;
  };
  relation?: string;
  /** The id (QRI) of the source node on this edge. */
  source?: string;
  /** The id (QRI) of the target node on this edge. */
  target?: string;
};
export type EmptyReturn = unknown;
export type ErrorResponse400 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};
export type ErrorResponse403 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};
export type ErrorResponse404 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};
export type ErrorResponse429 = {
  code?: string;
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  title?: string;
};
export type ErrorResponse500 = {
  errors?: {
    code?: string;
    detail?: string;
    /** The meta contains additional information when requests fail due to internal errors. */
    meta?: unknown;
    title?: string;
  }[];
  traceId?: string;
};
export type ErrorResponse503 = {
  errors?: {
    code?: string;
    detail?: string;
    title?: string;
  }[];
  traceId?: string;
};
/**
 * The lineage graph containing the node.
 */
export type Graph = {
  /** Returns true if the graph is directed. */
  directed?: boolean;
  edges?: Edge[];
  /** Label string for this graph. */
  label?: string;
  metadata?: {
    /** The date and time when the graph is created. */
    createdAt?: string;
    /** The id (QRI) of the graph producer. */
    producerId?: string;
    /** The type of the graph producer. */
    producerType?: string;
    specVersion?: string;
    /** The total number of nodes retrieved in this graph. */
    total?: number;
  };
  /** All the nodes contained in a graph. */
  nodes?: Nodes;
  type?: string;
};
/**
 * Populating graph property on single level request and graphs property on multi level requests.
 */
export type GraphLevelsResponse = {
  /** The lineage graph containing the node. */
  graph?: Graph;
  /** The list of lineage graphs. */
  graphs?: Graphs;
};
export type GraphResponse = {
  /** The lineage graph containing the node. */
  graph?: Graph;
};
/**
 * The list of lineage graphs.
 */
export type Graphs = {
  graphs?: Graph[];
};
export type GraphsResponse = {
  /** The list of lineage graphs. */
  graphs?: Graphs;
};
export type LineageOverviewInfo = {
  /** Resource level label */
  resourceLabel?: string | null;
  /** Resource level QRI */
  resourceQRI?: string | null;
  /** Table level label */
  tableLabel?: string | null;
  /** Table level QRI that the field belongs to. */
  tableQRI?: string | null;
};
export type MultiStatusResponse = {
  data?: MultiStatusResponseItem[];
};
export type MultiStatusResponseItem = {
  code?: string;
  resource?: OverviewItem;
  status?: number;
  title?: string;
};
export type Node = {
  /** Name label of the node. */
  label?: string;
  /** This contains additional node information such as node types, subtypes, queryExpressions, etc. */
  metadata?: {
    /** The data integration data asset where the node belongs to */
    dataAsset?: DataAsset;
    /** The number of fields that are impacted.
     * This will be returned as part of the response from /impact/{id}/overview and /impact/{id}/actions/expand on the table level. */
    fields?: number;
    /** The file path of a node */
    filePath?: string;
    /** The id (QRI) of the node */
    id: string;
    /** The subtype of the node. */
    subtype?: string;
    /** The number of tables that are impacted.
     * This will be returned as part of the response from /impact/{id}/overview. */
    tables?: number;
    /** The type of the node. */
    type: string;
  };
};
/**
 * All the nodes contained in a graph.
 */
export type Nodes = Record<string, Node>;
export type OverviewItem = {
  lineage?: LineageOverviewInfo[];
  /** Input QRI that we are getting the overview for. */
  qri?: string;
};
export type OverviewItems = {
  resources?: OverviewItem[];
};
export type Qris = string[];
/**
 * Returns next-level nodes inside a specified node on an impact analysis graph retrieved using a base node.
 *
 * @param id The QRI for base node.
 * @param query an object with query parameters
 * @throws ExpandLineageGraphImpactHttpError
 */
export declare function expandLineageGraphImpact(id: string, query: {
  /** The number of downstream resource levels nodes to retrieve. (5 if not provided, -1 means unlimited and 1 means direct lineage) */
  down?: number;
  /** The level to get the nodes on. */
  level: "field" | "table";
  /** The node in the downstream graph to get next-level nodes for. For instance, to get the TABLE level nodes inside a RESOURCE level node,
   * use the RESOURCE level QRI for the node. Similarly, use the TABLE level QRI to get the FIELD level nodes.
   * If a TABLE level QRI is used with `level` parameter being `TABLE`, only the RESOURCE level of the node will be
   * taken into consideration. */
  node: string;
}, options?: ApiCallOptions): Promise<ExpandLineageGraphImpactHttpResponse>;
export type ExpandLineageGraphImpactHttpResponse = {
  data: GraphResponse;
  headers: Headers;
  status: 200;
};
export type ExpandLineageGraphImpactHttpError = ExpandLineageGraphImpact400HttpError | ExpandLineageGraphImpact403HttpError | ExpandLineageGraphImpact404HttpError | ExpandLineageGraphImpact429HttpError | ExpandLineageGraphImpact500HttpError | ExpandLineageGraphImpact503HttpError;
export type ExpandLineageGraphImpact400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
export type ExpandLineageGraphImpact403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
export type ExpandLineageGraphImpact404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
export type ExpandLineageGraphImpact429HttpError = {
  data: ErrorResponse429;
  headers: Headers;
  status: 429;
};
export type ExpandLineageGraphImpact500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
export type ExpandLineageGraphImpact503HttpError = {
  data: ErrorResponse503;
  headers: Headers;
  status: 503;
};
/**
 * Searchs all labels within a impact graph on all available levels. Returns result per level.
 * @example
 * searchLineageGraphImpact(
 *   "qri:app:sense://e5c651d5-1198-45a2-be5d-f016cee0baf5",
 *   {
 *     filter: "label co \"label1\" or label co \"label2\""
 *   }
 * )
 *
 * @param id The qri for root node.
 * @param query an object with query parameters
 * @throws SearchLineageGraphImpactHttpError
 */
export declare function searchLineageGraphImpact(id: string, query: {
  /** The number of downstream resource levels nodes to search. (5 if not provided, -1 means unlimited) and 1 means direct lineage. */
  down?: number;
  /** The expression that matches the SCIM filter format. The filter has to be encoded.
   * The currently supported attribute is "label", attribute operator "co" (contains), and grouping operator "or". Example: 'label co "label1" or label co "label2"'. The search queries are case insensetive. */
  filter: string;
}, options?: ApiCallOptions): Promise<SearchLineageGraphImpactHttpResponse>;
export type SearchLineageGraphImpactHttpResponse = {
  data: GraphsResponse;
  headers: Headers;
  status: 200;
};
export type SearchLineageGraphImpactHttpError = SearchLineageGraphImpact400HttpError | SearchLineageGraphImpact403HttpError | SearchLineageGraphImpact404HttpError | SearchLineageGraphImpact429HttpError | SearchLineageGraphImpact500HttpError | SearchLineageGraphImpact503HttpError;
export type SearchLineageGraphImpact400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
export type SearchLineageGraphImpact403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
export type SearchLineageGraphImpact404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
export type SearchLineageGraphImpact429HttpError = {
  data: ErrorResponse429;
  headers: Headers;
  status: 429;
};
export type SearchLineageGraphImpact500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
export type SearchLineageGraphImpact503HttpError = {
  data: ErrorResponse503;
  headers: Headers;
  status: 503;
};
/**
 * Returns all RESOURCE level nodes that are impacted by a change in the source node. The number of tables and fields that are impacted for each resource are included as metadata. The id (QRI) can be on any level (FIELD, TABLE or RESOURCE) and the impact will be collected based on the starting QRI.
 *
 * @param id The qri for root node.
 * @param query an object with query parameters
 * @throws GetLineageGraphImpactOverviewHttpError
 */
export declare function getLineageGraphImpactOverview(id: string, query: {
  /** The number of downstream resource levels nodes to retrieve. (5 if not provided, -1 means unlimited and 1 means direct lineage) */
  down?: number;
}, options?: ApiCallOptions): Promise<GetLineageGraphImpactOverviewHttpResponse>;
export type GetLineageGraphImpactOverviewHttpResponse = {
  data: GraphResponse;
  headers: Headers;
  status: 200;
};
export type GetLineageGraphImpactOverviewHttpError = GetLineageGraphImpactOverview400HttpError | GetLineageGraphImpactOverview403HttpError | GetLineageGraphImpactOverview404HttpError | GetLineageGraphImpactOverview429HttpError | GetLineageGraphImpactOverview500HttpError | GetLineageGraphImpactOverview503HttpError;
export type GetLineageGraphImpactOverview400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
export type GetLineageGraphImpactOverview403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
export type GetLineageGraphImpactOverview404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
export type GetLineageGraphImpactOverview429HttpError = {
  data: ErrorResponse429;
  headers: Headers;
  status: 429;
};
export type GetLineageGraphImpactOverview500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
export type GetLineageGraphImpactOverview503HttpError = {
  data: ErrorResponse503;
  headers: Headers;
  status: 503;
};
/**
 * Returns all levels of the requested root node. Only node information will be returned.
 * @example
 * getLineageGraphImpactSource(
 *   "qri:app:sense://e5c651d5-1198-45a2-be5d-f016cee0baf5"
 * )
 *
 * @param id The id (QRI) for root node.
 * @throws GetLineageGraphImpactSourceHttpError
 */
export declare function getLineageGraphImpactSource(id: string, options?: ApiCallOptions): Promise<GetLineageGraphImpactSourceHttpResponse>;
export type GetLineageGraphImpactSourceHttpResponse = {
  data: GraphsResponse;
  headers: Headers;
  status: 200;
};
export type GetLineageGraphImpactSourceHttpError = GetLineageGraphImpactSource400HttpError | GetLineageGraphImpactSource403HttpError | GetLineageGraphImpactSource404HttpError | GetLineageGraphImpactSource429HttpError | GetLineageGraphImpactSource500HttpError | GetLineageGraphImpactSource503HttpError;
export type GetLineageGraphImpactSource400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
export type GetLineageGraphImpactSource403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
export type GetLineageGraphImpactSource404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
export type GetLineageGraphImpactSource429HttpError = {
  data: ErrorResponse429;
  headers: Headers;
  status: 429;
};
export type GetLineageGraphImpactSource500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
export type GetLineageGraphImpactSource503HttpError = {
  data: ErrorResponse503;
  headers: Headers;
  status: 503;
};
/**
 * Returns lineage graphs of a source node. The id (QRI) can point to an item on the field, table and resource level.
 *
 * @param id The id (QRI) for the source node.
 * @param query an object with query parameters
 * @throws GetLineageGraphNodeHttpError
 */
export declare function getLineageGraphNode(id: string, query: {
  /** To collapse internal nodes, set to true, false otherwise. */
  collapse?: boolean;
  /** The graph level to retrieve. */
  level?: "field" | "table" | "resource" | "all";
  /** The number of upstream levels of nodes to retrieve. (5 if not provided, -1 means unlimited) */
  up?: number;
}, options?: ApiCallOptions): Promise<GetLineageGraphNodeHttpResponse>;
export type GetLineageGraphNodeHttpResponse = {
  data: GraphLevelsResponse;
  headers: Headers;
  status: 200;
};
export type GetLineageGraphNodeHttpError = GetLineageGraphNode400HttpError | GetLineageGraphNode403HttpError | GetLineageGraphNode404HttpError | GetLineageGraphNode429HttpError | GetLineageGraphNode500HttpError | GetLineageGraphNode503HttpError;
export type GetLineageGraphNode400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
export type GetLineageGraphNode403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
export type GetLineageGraphNode404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
export type GetLineageGraphNode429HttpError = {
  data: ErrorResponse429;
  headers: Headers;
  status: 429;
};
export type GetLineageGraphNode500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
export type GetLineageGraphNode503HttpError = {
  data: ErrorResponse503;
  headers: Headers;
  status: 503;
};
/**
 * Returns the expanded node and its edges. Up and downstream nodes are not part of the response, edges are. The id is the root node that lineage is requested for. The QRI of the node to expand is sent as the query parameter "node" for expansion.
 *
 * @param id The id (QRI) for the source node.
 * @param query an object with query parameters
 * @throws ExpandLineageGraphNodeHttpError
 */
export declare function expandLineageGraphNode(id: string, query: {
  /** To collapse internal nodes, set to true, false otherwise. */
  collapse?: boolean;
  /** The level to expand to. */
  level: "field" | "table";
  /** The QRI of the node in the upstream graph for expansion. */
  node: string;
  /** The number of upstream levels of nodes retrieved to expand. (5 if not provided, -1 means unlimited) */
  up?: number;
}, options?: ApiCallOptions): Promise<ExpandLineageGraphNodeHttpResponse>;
export type ExpandLineageGraphNodeHttpResponse = {
  data: GraphResponse;
  headers: Headers;
  status: 200;
};
export type ExpandLineageGraphNodeHttpError = ExpandLineageGraphNode400HttpError | ExpandLineageGraphNode403HttpError | ExpandLineageGraphNode404HttpError | ExpandLineageGraphNode429HttpError | ExpandLineageGraphNode500HttpError | ExpandLineageGraphNode503HttpError;
export type ExpandLineageGraphNode400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
export type ExpandLineageGraphNode403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
export type ExpandLineageGraphNode404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
export type ExpandLineageGraphNode429HttpError = {
  data: ErrorResponse429;
  headers: Headers;
  status: 429;
};
export type ExpandLineageGraphNode500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
export type ExpandLineageGraphNode503HttpError = {
  data: ErrorResponse503;
  headers: Headers;
  status: 503;
};
/**
 * Returns result per level by searching all labels within a lineage graph on all available levels.
 * @example
 * searchLineageGraphNode(
 *   "qri:app:sense://e5c651d5-1198-45a2-be5d-f016cee0baf5",
 *   {
 *     filter: "label co \"label1\" or label co \"label2\""
 *   }
 * )
 *
 * @param id The qri for root node.
 * @param query an object with query parameters
 * @throws SearchLineageGraphNodeHttpError
 */
export declare function searchLineageGraphNode(id: string, query: {
  /** To collapse internal nodes, set to true, false otherwise. */
  collapse?: boolean;
  /** The expression that matches the SCIM filter format. The filter has to be encoded.
   * The currently supported attribute is "label", attribute operator "co" (contains), and grouping operator "or". Example: 'label co "label1" or label co "label2"'. The search queries are case insensitive. */
  filter: string;
  /** The number of upstream levels of nodes retrieved to search. (5 if not provided, -1 means unlimited) */
  up?: number;
}, options?: ApiCallOptions): Promise<SearchLineageGraphNodeHttpResponse>;
export type SearchLineageGraphNodeHttpResponse = {
  data: GraphsResponse;
  headers: Headers;
  status: 200;
};
export type SearchLineageGraphNodeHttpError = SearchLineageGraphNode400HttpError | SearchLineageGraphNode403HttpError | SearchLineageGraphNode404HttpError | SearchLineageGraphNode429HttpError | SearchLineageGraphNode500HttpError | SearchLineageGraphNode503HttpError;
export type SearchLineageGraphNode400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
export type SearchLineageGraphNode403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
export type SearchLineageGraphNode404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
export type SearchLineageGraphNode429HttpError = {
  data: ErrorResponse429;
  headers: Headers;
  status: 429;
};
export type SearchLineageGraphNode500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
export type SearchLineageGraphNode503HttpError = {
  data: ErrorResponse503;
  headers: Headers;
  status: 503;
};
/**
 * Returns the first generation upstream direct lineage. For each field QRI, will find any direct linege dataset or application.
 *
 * @param id The qri for root node.
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws CreateLineageGraphNodeOverviewHttpError
 */
export declare function createLineageGraphNodeOverview(id: string, query: {
  /** To collapse internal nodes, set to true, false otherwise. */
  collapse?: boolean;
  /** The number of upstream levels of nodes retrieved to get overview from. (5 if not provided, -1 means unlimited) */
  up?: number;
}, body: Qris, options?: ApiCallOptions): Promise<CreateLineageGraphNodeOverviewHttpResponse>;
export type CreateLineageGraphNodeOverviewHttpResponse = CreateLineageGraphNodeOverview200HttpResponse | CreateLineageGraphNodeOverview201HttpResponse | CreateLineageGraphNodeOverview207HttpResponse;
export type CreateLineageGraphNodeOverview200HttpResponse = {
  data: OverviewItems;
  headers: Headers;
  status: 200;
};
export type CreateLineageGraphNodeOverview201HttpResponse = {
  data: EmptyReturn;
  headers: Headers;
  status: 201;
};
export type CreateLineageGraphNodeOverview207HttpResponse = {
  data: MultiStatusResponse;
  headers: Headers;
  status: 207;
};
export type CreateLineageGraphNodeOverviewHttpError = CreateLineageGraphNodeOverview400HttpError | CreateLineageGraphNodeOverview403HttpError | CreateLineageGraphNodeOverview404HttpError | CreateLineageGraphNodeOverview500HttpError | CreateLineageGraphNodeOverview503HttpError;
export type CreateLineageGraphNodeOverview400HttpError = {
  data: ErrorResponse400;
  headers: Headers;
  status: 400;
};
export type CreateLineageGraphNodeOverview403HttpError = {
  data: ErrorResponse403;
  headers: Headers;
  status: 403;
};
export type CreateLineageGraphNodeOverview404HttpError = {
  data: ErrorResponse404;
  headers: Headers;
  status: 404;
};
export type CreateLineageGraphNodeOverview500HttpError = {
  data: ErrorResponse500;
  headers: Headers;
  status: 500;
};
export type CreateLineageGraphNodeOverview503HttpError = {
  data: ErrorResponse503;
  headers: Headers;
  status: 503;
};
/**
 * Clears the cache for lineage-graphs api requests.
 */
export declare function clearCache(): void;
export type LineageGraphsAPI = {
  /**
   * Returns next-level nodes inside a specified node on an impact analysis graph retrieved using a base node.
   *
   * @param id The QRI for base node.
   * @param query an object with query parameters
   * @throws ExpandLineageGraphImpactHttpError
   */
  expandLineageGraphImpact: typeof expandLineageGraphImpact;
  /**
   * Searchs all labels within a impact graph on all available levels. Returns result per level.
   * @example
   * searchLineageGraphImpact(
   *   "qri:app:sense://e5c651d5-1198-45a2-be5d-f016cee0baf5",
   *   {
   *     filter: "label co \"label1\" or label co \"label2\""
   *   }
   * )
   *
   * @param id The qri for root node.
   * @param query an object with query parameters
   * @throws SearchLineageGraphImpactHttpError
   */
  searchLineageGraphImpact: typeof searchLineageGraphImpact;
  /**
   * Returns all RESOURCE level nodes that are impacted by a change in the source node. The number of tables and fields that are impacted for each resource are included as metadata. The id (QRI) can be on any level (FIELD, TABLE or RESOURCE) and the impact will be collected based on the starting QRI.
   *
   * @param id The qri for root node.
   * @param query an object with query parameters
   * @throws GetLineageGraphImpactOverviewHttpError
   */
  getLineageGraphImpactOverview: typeof getLineageGraphImpactOverview;
  /**
   * Returns all levels of the requested root node. Only node information will be returned.
   * @example
   * getLineageGraphImpactSource(
   *   "qri:app:sense://e5c651d5-1198-45a2-be5d-f016cee0baf5"
   * )
   *
   * @param id The id (QRI) for root node.
   * @throws GetLineageGraphImpactSourceHttpError
   */
  getLineageGraphImpactSource: typeof getLineageGraphImpactSource;
  /**
   * Returns lineage graphs of a source node. The id (QRI) can point to an item on the field, table and resource level.
   *
   * @param id The id (QRI) for the source node.
   * @param query an object with query parameters
   * @throws GetLineageGraphNodeHttpError
   */
  getLineageGraphNode: typeof getLineageGraphNode;
  /**
   * Returns the expanded node and its edges. Up and downstream nodes are not part of the response, edges are. The id is the root node that lineage is requested for. The QRI of the node to expand is sent as the query parameter "node" for expansion.
   *
   * @param id The id (QRI) for the source node.
   * @param query an object with query parameters
   * @throws ExpandLineageGraphNodeHttpError
   */
  expandLineageGraphNode: typeof expandLineageGraphNode;
  /**
   * Returns result per level by searching all labels within a lineage graph on all available levels.
   * @example
   * searchLineageGraphNode(
   *   "qri:app:sense://e5c651d5-1198-45a2-be5d-f016cee0baf5",
   *   {
   *     filter: "label co \"label1\" or label co \"label2\""
   *   }
   * )
   *
   * @param id The qri for root node.
   * @param query an object with query parameters
   * @throws SearchLineageGraphNodeHttpError
   */
  searchLineageGraphNode: typeof searchLineageGraphNode;
  /**
   * Returns the first generation upstream direct lineage. For each field QRI, will find any direct linege dataset or application.
   *
   * @param id The qri for root node.
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws CreateLineageGraphNodeOverviewHttpError
   */
  createLineageGraphNodeOverview: typeof createLineageGraphNodeOverview;
  /**
   * Clears the cache for lineage-graphs api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the lineage-graphs api
 */
declare const lineageGraphsExport: LineageGraphsAPI;
//#endregion
export { lineageGraphsExport as default };