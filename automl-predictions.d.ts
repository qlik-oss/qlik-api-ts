import { ApiCallOptions } from "./invoke-fetch-types.js";
import "./chunks/invoke-fetch-DFc3yzaj.js";

//#region src/public/rest/automl-predictions.d.ts
type AppErrorResponse = {
  errors?: Error[];
};
type Error = {
  /** The argument */argument?: string; /** The unique code for the error */
  code: string; /** The unique id of the error instance */
  errorId?: string; /** The issue code */
  issue?: string;
  meta?: {
    /** The argument */argument?: string; /** Extra details for what may have caused the error */
    details?: string; /** The unique id of the error instance */
    errorId?: string; /** The resource type that the error occurred on */
    resource?: string; /** The resource id that the error occurred on */
    resourceId?: string;
  }; /** The resource type that the error occurred on */
  resource?: string; /** The resource id that the error occurred on */
  resourceId?: string; /** A summary of what went wrong */
  title?: string;
};
/**
 * @deprecated
 *
 * Returns a file containing the shapley values in coordinate form that are associated with a prediction ID.
 *
 * @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
 * @param query an object with query parameters
 * @throws GetAutomlPredictionCoordinateShapHttpError
 */
declare function getAutomlPredictionCoordinateShap(predictionId: string, query: {
  refId?: string;
}, options?: ApiCallOptions): Promise<GetAutomlPredictionCoordinateShapHttpResponse>;
type GetAutomlPredictionCoordinateShapHttpResponse = {
  data: string;
  headers: Headers;
  status: 200;
};
type GetAutomlPredictionCoordinateShapHttpError = {
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
declare function createAutomlPredictionJob(predictionId: string, options?: ApiCallOptions): Promise<CreateAutomlPredictionJobHttpResponse>;
type CreateAutomlPredictionJobHttpResponse = {
  data: void;
  headers: Headers;
  status: 200;
};
type CreateAutomlPredictionJobHttpError = {
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
declare function getAutomlPredictionNotPredictedReasons(predictionId: string, query: {
  refId?: string;
}, options?: ApiCallOptions): Promise<GetAutomlPredictionNotPredictedReasonsHttpResponse>;
type GetAutomlPredictionNotPredictedReasonsHttpResponse = {
  data: string;
  headers: Headers;
  status: 200;
};
type GetAutomlPredictionNotPredictedReasonsHttpError = {
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
declare function getAutomlPredictionPredictions(predictionId: string, query: {
  refId?: string;
}, options?: ApiCallOptions): Promise<GetAutomlPredictionPredictionsHttpResponse>;
type GetAutomlPredictionPredictionsHttpResponse = {
  data: void;
  headers: Headers;
  status: 200;
};
type GetAutomlPredictionPredictionsHttpError = {
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
declare function getAutomlPredictionShap(predictionId: string, query: {
  refId?: string;
}, options?: ApiCallOptions): Promise<GetAutomlPredictionShapHttpResponse>;
type GetAutomlPredictionShapHttpResponse = {
  data: void;
  headers: Headers;
  status: 200;
};
type GetAutomlPredictionShapHttpError = {
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
declare function getAutomlPredictionSource(predictionId: string, query: {
  refId?: string;
}, options?: ApiCallOptions): Promise<GetAutomlPredictionSourceHttpResponse>;
type GetAutomlPredictionSourceHttpResponse = {
  data: string;
  headers: Headers;
  status: 200;
};
type GetAutomlPredictionSourceHttpError = {
  data: AppErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 503;
};
/**
 * Clears the cache for automl-predictions api requests.
 */
declare function clearCache(): void;
type AutomlPredictionsAPI = {
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
declare const automlPredictionsExport: AutomlPredictionsAPI;
//#endregion
export { AppErrorResponse, AutomlPredictionsAPI, CreateAutomlPredictionJobHttpError, CreateAutomlPredictionJobHttpResponse, Error, GetAutomlPredictionCoordinateShapHttpError, GetAutomlPredictionCoordinateShapHttpResponse, GetAutomlPredictionNotPredictedReasonsHttpError, GetAutomlPredictionNotPredictedReasonsHttpResponse, GetAutomlPredictionPredictionsHttpError, GetAutomlPredictionPredictionsHttpResponse, GetAutomlPredictionShapHttpError, GetAutomlPredictionShapHttpResponse, GetAutomlPredictionSourceHttpError, GetAutomlPredictionSourceHttpResponse, clearCache, createAutomlPredictionJob, automlPredictionsExport as default, getAutomlPredictionCoordinateShap, getAutomlPredictionNotPredictedReasons, getAutomlPredictionPredictions, getAutomlPredictionShap, getAutomlPredictionSource };