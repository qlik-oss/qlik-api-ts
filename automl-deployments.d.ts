import { y as ApiCallOptions } from "./chunks/auth-types-YrlH_R9f.js";
import "./chunks/invoke-fetch-C1Z0RJYU.js";

//#region src/public/rest/automl-deployments.d.ts
type AppErrorResponse = {
  errors?: Error[];
};
type Error = {
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
type RealTimePredictionInputSchema = {
  /** The name of a feature in the dataset. */
  name?: string;
};
type RealtimePredictionInput = {
  /** The rows of the dataset to produce predictions from. Date features must be in ISO 8601 format. */
  rows?: string[][];
  /** The schema of the input dataset. */
  schema?: RealTimePredictionInputSchema[];
};
/**
 * @deprecated
 *
 * Generates predictions in a synchronous request and response.
 *
 * @param deploymentId The ID of the ML deployed model that will be employed to produce predictions.
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws CreateAutomlDeploymentRealtimePredictionHttpError
 */
declare function createAutomlDeploymentRealtimePrediction(deploymentId: string, query: {
  /** If true, will include a column with the reason why a prediction was not produced. */
  includeNotPredictedReason?: boolean;
  /** If true, the shapley values will be included in the response. */
  includeShap?: boolean;
  /** If true, the source data will be included in the response */
  includeSource?: boolean;
  /** The name of the feature in the source data to use as an index in the response data. The column will be included with its original name and values. This is intended to allow the caller to join results with source data. */
  index?: string;
}, body: RealtimePredictionInput, options?: ApiCallOptions): Promise<CreateAutomlDeploymentRealtimePredictionHttpResponse>;
type CreateAutomlDeploymentRealtimePredictionHttpResponse = {
  data: void;
  headers: Headers;
  status: 200;
};
type CreateAutomlDeploymentRealtimePredictionHttpError = {
  data: AppErrorResponse;
  headers: Headers;
  status: 400 | 401 | 403 | 404 | 409 | 503;
};
/**
 * Clears the cache for automl-deployments api requests.
 */
declare function clearCache(): void;
type AutomlDeploymentsAPI = {
  /**
   * @deprecated
   *
   * Generates predictions in a synchronous request and response.
   *
   * @param deploymentId The ID of the ML deployed model that will be employed to produce predictions.
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws CreateAutomlDeploymentRealtimePredictionHttpError
   */
  createAutomlDeploymentRealtimePrediction: typeof createAutomlDeploymentRealtimePrediction;
  /**
   * Clears the cache for automl-deployments api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the automl-deployments api
 */
declare const automlDeploymentsExport: AutomlDeploymentsAPI;
//#endregion
export { AppErrorResponse, AutomlDeploymentsAPI, CreateAutomlDeploymentRealtimePredictionHttpError, CreateAutomlDeploymentRealtimePredictionHttpResponse, Error, RealTimePredictionInputSchema, RealtimePredictionInput, clearCache, createAutomlDeploymentRealtimePrediction, automlDeploymentsExport as default };