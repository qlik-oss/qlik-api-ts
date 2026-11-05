/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import { clearApiCache, invokeFetch, type ApiCallOptions } from "#public/invoke-fetch";

/* -------------------------------------------------------------------------- */
/*                                Public types                                */
/* -------------------------------------------------------------------------- */

export type AppErrorResponse = {
  errors?: Error[];
};

export type Error = {
  /** The argument */
  argument?: string;
  /** The unique code for the error */
  code: string;
  /** The unique id of the error instance */
  errorId?: string;
  /** The issue code */
  issue?: string;
  meta?: {
    /** The argument */
    argument?: string;
    /** Extra details for what may have caused the error */
    details?: string;
    /** The unique id of the error instance */
    errorId?: string;
    /** The resource type that the error occurred on */
    resource?: string;
    /** The resource id that the error occurred on */
    resourceId?: string;
  };
  /** The resource type that the error occurred on */
  resource?: string;
  /** The resource id that the error occurred on */
  resourceId?: string;
  /** A summary of what went wrong */
  title?: string;
};

/* -------------------------------------------------------------------------- */
/*                              Public functions                              */
/* -------------------------------------------------------------------------- */

/**
 * @deprecated
 *
 * Returns a file containing the shapley values in coordinate form that are associated with a prediction ID.
 *
 * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
 * @param query an object with query parameters
 * @throws GetAutomlPredictionCoordinateShapHttpError
 */
export async function getAutomlPredictionCoordinateShap(
  predictionId: string,
  query: {
    refId?: string;
  },
  options?: ApiCallOptions,
): Promise<GetAutomlPredictionCoordinateShapHttpResponse> {
  return invokeFetch("automl-predictions", {
    method: "get",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/coordinate-shap",
    pathVariables: { predictionId },
    query,
    options,
  });
}

export type GetAutomlPredictionCoordinateShapHttpResponse = {
  data: string;
  headers: Headers;
  status: 200;
};

export type GetAutomlPredictionCoordinateShapHttpError = {
  data: AppErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 503;
};

/**
 * @deprecated
 *
 * Retrieve jobs that are associated with a prediction. Job with correlation type `prediction`.
 *
 * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
 * @throws CreateAutomlPredictionJobHttpError
 */
export async function createAutomlPredictionJob(
  predictionId: string,
  options?: ApiCallOptions,
): Promise<CreateAutomlPredictionJobHttpResponse> {
  return invokeFetch("automl-predictions", {
    method: "post",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/jobs",
    pathVariables: { predictionId },
    options,
  });
}

export type CreateAutomlPredictionJobHttpResponse = {
  data: void;
  headers: Headers;
  status: 200;
};

export type CreateAutomlPredictionJobHttpError = {
  data: AppErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 503;
};

/**
 * @deprecated
 *
 * Returns a file containing any rows in a prediction operation where a prediction was unable to be produced.
 *
 * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
 * @param query an object with query parameters
 * @throws GetAutomlPredictionNotPredictedReasonsHttpError
 */
export async function getAutomlPredictionNotPredictedReasons(
  predictionId: string,
  query: {
    refId?: string;
  },
  options?: ApiCallOptions,
): Promise<GetAutomlPredictionNotPredictedReasonsHttpResponse> {
  return invokeFetch("automl-predictions", {
    method: "get",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/not-predicted-reasons",
    pathVariables: { predictionId },
    query,
    options,
  });
}

export type GetAutomlPredictionNotPredictedReasonsHttpResponse = {
  data: string;
  headers: Headers;
  status: 200;
};

export type GetAutomlPredictionNotPredictedReasonsHttpError = {
  data: AppErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 503;
};

/**
 * @deprecated
 *
 * Returns a file containing the predicted values that are associated with a prediction ID.
 *
 * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
 * @param query an object with query parameters
 * @throws GetAutomlPredictionPredictionsHttpError
 */
export async function getAutomlPredictionPredictions(
  predictionId: string,
  query: {
    refId?: string;
  },
  options?: ApiCallOptions,
): Promise<GetAutomlPredictionPredictionsHttpResponse> {
  return invokeFetch("automl-predictions", {
    method: "get",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/predictions",
    pathVariables: { predictionId },
    query,
    options,
  });
}

export type GetAutomlPredictionPredictionsHttpResponse = {
  data: void;
  headers: Headers;
  status: 200;
};

export type GetAutomlPredictionPredictionsHttpError = {
  data: AppErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 503;
};

/**
 * @deprecated
 *
 * Returns a file containing the shapley values that are associated with a prediction ID.
 *
 * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
 * @param query an object with query parameters
 * @throws GetAutomlPredictionShapHttpError
 */
export async function getAutomlPredictionShap(
  predictionId: string,
  query: {
    refId?: string;
  },
  options?: ApiCallOptions,
): Promise<GetAutomlPredictionShapHttpResponse> {
  return invokeFetch("automl-predictions", {
    method: "get",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/shap",
    pathVariables: { predictionId },
    query,
    options,
  });
}

export type GetAutomlPredictionShapHttpResponse = {
  data: void;
  headers: Headers;
  status: 200;
};

export type GetAutomlPredictionShapHttpError = {
  data: AppErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 503;
};

/**
 * @deprecated
 *
 * Returns a file containing the source values and an index field that are associated with a prediction ID.
 *
 * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
 * @param query an object with query parameters
 * @throws GetAutomlPredictionSourceHttpError
 */
export async function getAutomlPredictionSource(
  predictionId: string,
  query: {
    refId?: string;
  },
  options?: ApiCallOptions,
): Promise<GetAutomlPredictionSourceHttpResponse> {
  return invokeFetch("automl-predictions", {
    method: "get",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/source",
    pathVariables: { predictionId },
    query,
    options,
  });
}

export type GetAutomlPredictionSourceHttpResponse = {
  data: string;
  headers: Headers;
  status: 200;
};

export type GetAutomlPredictionSourceHttpError = {
  data: AppErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 503;
};

/**
 * Clears the cache for automl-predictions api requests.
 */
export function clearCache() {
  return clearApiCache("automl-predictions");
}

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

export type AutomlPredictionsAPI = {
  /**
   * @deprecated
   *
   * Returns a file containing the shapley values in coordinate form that are associated with a prediction ID.
   *
   * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
   * @param query an object with query parameters
   * @throws GetAutomlPredictionCoordinateShapHttpError
   */
  getAutomlPredictionCoordinateShap: typeof getAutomlPredictionCoordinateShap;
  /**
   * @deprecated
   *
   * Retrieve jobs that are associated with a prediction. Job with correlation type `prediction`.
   *
   * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
   * @throws CreateAutomlPredictionJobHttpError
   */
  createAutomlPredictionJob: typeof createAutomlPredictionJob;
  /**
   * @deprecated
   *
   * Returns a file containing any rows in a prediction operation where a prediction was unable to be produced.
   *
   * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
   * @param query an object with query parameters
   * @throws GetAutomlPredictionNotPredictedReasonsHttpError
   */
  getAutomlPredictionNotPredictedReasons: typeof getAutomlPredictionNotPredictedReasons;
  /**
   * @deprecated
   *
   * Returns a file containing the predicted values that are associated with a prediction ID.
   *
   * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
   * @param query an object with query parameters
   * @throws GetAutomlPredictionPredictionsHttpError
   */
  getAutomlPredictionPredictions: typeof getAutomlPredictionPredictions;
  /**
   * @deprecated
   *
   * Returns a file containing the shapley values that are associated with a prediction ID.
   *
   * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
   * @param query an object with query parameters
   * @throws GetAutomlPredictionShapHttpError
   */
  getAutomlPredictionShap: typeof getAutomlPredictionShap;
  /**
   * @deprecated
   *
   * Returns a file containing the source values and an index field that are associated with a prediction ID.
   *
   * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
   * @param query an object with query parameters
   * @throws GetAutomlPredictionSourceHttpError
   */
  getAutomlPredictionSource: typeof getAutomlPredictionSource;
  /**
   * Clears the cache for automl-predictions api requests.
   */
  clearCache: typeof clearCache;
};

/**
 * Functions for the automl-predictions api
 */
const automlPredictionsExport: AutomlPredictionsAPI = {
  getAutomlPredictionCoordinateShap,
  createAutomlPredictionJob,
  getAutomlPredictionNotPredictedReasons,
  getAutomlPredictionPredictions,
  getAutomlPredictionShap,
  getAutomlPredictionSource,
  clearCache,
};
export default automlPredictionsExport;
