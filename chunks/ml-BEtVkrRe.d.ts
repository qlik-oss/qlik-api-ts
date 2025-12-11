import { y as ApiCallOptions } from "./auth-types-CJNqN_zp.js";

//#region src/public/rest/ml.d.ts

/**
 * An error object
 */
type APIError = {
  /** Qlik error code (not HTTP response status code) */
  code: string;
  /** Description of the error */
  detail?: string;
  /** Additional details about the error. These may vary by error. */
  meta?: {
    /** The argument */
    argument?: string;
    /** Extra details for what may have caused the error */
    details?: string;
    /** The unique id of the error instance */
    errorId?: string;
    /** The issue code */
    issue?: string;
    /** The resource type that the error occurred on */
    resource?: string;
    /** The resource id that the error occurred on */
    resourceId?: string;
  };
  /** Short summary of error */
  title: string;
};
/**
 * An AutoML alias
 */
type Alias = {
  /** Timestamp when this was created */
  createdAt: CreatedAt;
  /** ID of the owner/user that created this entity */
  createdBy: string;
  /** ID of a model deployment */
  deploymentId: DeploymentId;
  /** ID of this entity */
  id: EntityId;
  /** The mode of an alias. Default mode means the model assigned to that alias will be used if alias is not specified */
  mode: AliasMode;
  models: ModelsInfo;
  /** Name of this entity */
  name: EntityName;
  /** Timestamp when this was updated */
  updatedAt: UpdatedAt;
};
type AliasFindResponse = {
  data: {
    /** An AutoML alias */
    attributes: Alias;
    /** ID of this entity */
    id: EntityId;
    type: "alias";
  }[];
  /** Resource links included in paginated responses */
  links: ResponseLinks;
  /** Meta for FIND operations */
  meta?: FindResponseMeta;
};
type AliasGetResponse = {
  data: {
    /** An AutoML alias */
    attributes: Alias;
    /** ID of this entity */
    id: EntityId;
    type: "alias";
  };
};
/**
 * ID of an alias
 */
type AliasId = string;
/**
 * Input for creating a new alias
 */
type AliasInput = {
  data: {
    attributes: {
      models: ModelsInfo;
      /** Name of this entity */
      name: EntityName;
    };
    type: "alias";
  };
};
/**
 * The mode of an alias. Default mode means the model assigned to that alias will be used if alias is not specified
 */
type AliasMode = "default" | "undefined";
/**
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/name"
 *   },
 *   {
 *     op: "replace",
 *     path: "/models"
 *   }
 * ]
 */
type AliasPatch = AliasPatchItem[];
/**
 * Alias values that can be patched.
 */
type AliasPatchItem = {
  /** All patch requests use the replace operation */
  op: "replace";
  /** Path for the property you want to update */
  path: "/name" | "/models";
  /** Use for fields that can be `any` type (string, number, etc.) */
  value: AnyType;
};
type AliasPostResponse = {
  data: {
    /** An AutoML alias */
    attributes: Alias;
    /** ID of this entity */
    id: EntityId;
    type: "alias";
  };
};
/**
 * Use for fields that can be `any` type (string, number, etc.)
 */
type AnyType = unknown;
/**
 * A batch prediction job configuration
 */
type BatchPrediction = {
  /** ID of an alias */
  aliasId?: AliasId;
  /** Timestamp when this was created */
  createdAt?: CreatedAt;
  /** ID of the owner/user that ran this prediction batch */
  createdBy?: string;
  /** The Qlik catalog dataset ID */
  dataSetId?: DataSetId;
  /** ID of the dataset with the prediction results */
  datasetId?: string;
  /** ID of a model deployment */
  deploymentId?: DeploymentId;
  /** JSON string of error object */
  errorMessage?: ErrorMessage;
  /** JSON string with list of error objects */
  errors?: Errors;
  /** ID of this entity */
  id?: EntityId;
  /** A optional column name upon which to create an index. Must be unique for
   * every row. If not included, Qlik will create a unique index column. */
  indexColumn?: IndexColumn;
  /** Name of this entity */
  name?: EntityName;
  /** Where to output dataset */
  outputDataset?: string;
  /** ID of owner/user for this entity */
  ownerId?: OwnerId;
  /** Batch prediction job schedule */
  schedule?: BatchPredictionSchedule;
  /** Status of this batch prediction */
  status?: BatchPredictionStatus;
  /** Timestamp when this was updated */
  updatedAt?: UpdatedAt;
  /** Sets which files, file names, and spaces are used to write results of
   * batch predictions (output files) to the catalog.
   *
   * Note that for predictions based on time series models, `dstShapName`
   * and `dstCoordShapName` do not apply and will be ignored if set. */
  writeback?: BatchPredictionWriteback;
};
/**
 * Response for batch prediction predict action that indicates job and status
 */
type BatchPredictionActionResponse = {
  data: {
    attributes: PredictionJobResponse;
    /** ID of this entity */
    id: EntityId;
    type: "job";
  };
};
type BatchPredictionFindResponse = {
  data: {
    /** A batch prediction job configuration */
    attributes: BatchPrediction;
    /** ID of this entity */
    id: EntityId;
    type: "batch-prediction";
  }[];
  /** Resource links included in paginated responses */
  links: ResponseLinks;
  /** Meta for FIND operations */
  meta?: FindResponseMeta;
};
type BatchPredictionGetResponse = {
  data: {
    /** A batch prediction job configuration */
    attributes: BatchPrediction;
    /** ID of this entity */
    id: EntityId;
    type: "batch-prediction";
  };
};
/**
 * Input values for creating a batch prediction configuration
 */
type BatchPredictionInput = {
  data?: {
    attributes?: {
      /** ID of an alias */
      aliasId?: AliasId;
      /** The Qlik catalog dataset ID */
      dataSetId?: DataSetId;
      /** ID of a model deployment */
      deploymentId?: DeploymentId;
      description?: string;
      /** A optional column name upon which to create an index. Must be unique for
       * every row. If not included, Qlik will create a unique index column. */
      indexColumn?: IndexColumn;
      /** Name of this entity */
      name?: EntityName;
      /** Configuration to schedule a batch prediction */
      schedule?: BatchPredictionScheduleInputAttributes;
      /** Sets which files, file names, and spaces are used to write results of
       * batch predictions (output files) to the catalog.
       *
       * Note that for predictions based on time series models, `dstShapName`
       * and `dstCoordShapName` do not apply and will be ignored if set. */
      writeback?: BatchPredictionWriteback;
    };
    type?: "batch-prediction";
  };
};
type BatchPredictionPatch = {
  /** All patch requests use the replace operation */
  op: "replace";
  /** Path for the property you want to update */
  path: "/name" | "/description" | "/dataSetId" | "/indexColumn" | "/applyDatasetChangeOnly" | "/ownerId" | "/writeback/spaceId" | "/writeback/format" | "/writeback/dstName" | "/writeback/dstShapName" | "/writeback/dstCoordShapName" | "/writeback/dstNotPredictedName" | "/writeback/dstSourceName";
  /** Use for fields that can be `any` type (string, number, etc.) */
  value: AnyType;
}[];
type BatchPredictionPostResponse = {
  data: {
    /** A batch prediction job configuration */
    attributes: BatchPrediction;
    /** ID of this entity */
    id: EntityId;
    type: "batch-prediction";
  };
};
/**
 * Batch prediction job schedule
 */
type BatchPredictionSchedule = {
  /** If true, only run prediction if dataset has changed to avoid
   * duplicates. If set to false, re-runs predictions on unchanged
   * datasets. */
  applyDatasetChangeOnly?: boolean;
  /** The ID of the chronos job */
  chronosJobId?: string;
  /** When the job finished */
  endDateTime?: string;
  /** Number of times a scheduled prediction job has failed */
  failureAttempts?: number;
  /** When the last successful job happened */
  lastSuccessfulDateTime?: string;
  /** Recurrence rules. Maximum is DAILY but you can specify the
   * hour, minute, and second it runs each day.
   * One string per rule. */
  recurrence?: string[];
  /** When the job is scheduled to start */
  startDateTime?: string;
  /** The status of the schedule */
  status?: "pending" | "active" | "error" | "error_scheduler_unreachable" | "error_scheduler_callback_error" | "licence_advanced_features_required" | "failing_schedule_permission";
  /** Timezone used for the date-time fields */
  timezone?: string;
};
type BatchPredictionScheduleGetResponse = {
  data: {
    /** Batch prediction job schedule */
    attributes: BatchPredictionSchedule;
    /** ID of this entity */
    id: EntityId;
    type: "batch-prediction-schedule";
  };
};
/**
 * Input values for a batch prediction schedule
 */
type BatchPredictionScheduleInput = {
  data?: {
    /** Configuration to schedule a batch prediction */
    attributes?: BatchPredictionScheduleInputAttributes;
    type?: "batch-prediction-schedule";
  };
};
/**
 * Configuration to schedule a batch prediction
 */
type BatchPredictionScheduleInputAttributes = {
  /** If true, only run prediction if dataset has changed to avoid
   * duplicates. If set to false, re-runs predictions on unchanged
   * datasets. */
  applyDatasetChangeOnly?: boolean;
  /** When the job is scheduled to finish */
  endDateTime?: string;
  /** Recurrence rules. Maximum is DAILY but you can specify the
   * hour, minute, and second it runs each day.
   * One string per rule. */
  recurrence?: string[];
  /** When the job is scheduled to start */
  startDateTime: string;
  /** Timezone used for the date-time fields */
  timezone: string;
};
type BatchPredictionSchedulePatch = {
  /** All patch requests use the replace operation */
  op: "replace";
  /** Path for the property you want to update */
  path: "/startDateTime" | "/endDateTime" | "/timezone" | "/recurrence" | "/applyDatasetChangeOnly";
  /** Use for fields that can be `any` type (string, number, etc.) */
  value: AnyType;
}[];
type BatchPredictionSchedulePutResponse = {
  data: {
    /** Batch prediction job schedule */
    attributes: BatchPredictionSchedule;
    /** ID of this entity */
    id: EntityId;
    type: "batch-prediction-schedule";
  };
};
/**
 * Status of this batch prediction
 */
type BatchPredictionStatus = "modified" | "ready" | "error" | "cancelled" | "pending";
/**
 * Sets which files, file names, and spaces are used to write results of
 * batch predictions (output files) to the catalog.
 *
 * Note that for predictions based on time series models, `dstShapName`
 * and `dstCoordShapName` do not apply and will be ignored if set.
 */
type BatchPredictionWriteback = {
  dstCoordShapName?: string;
  dstName: string;
  dstNotPredictedName?: string;
  dstShapName?: string;
  dstSourceName?: string;
  /** File format for write back files (this applies to all) */
  format: "qvd" | "parquet" | "csv";
  /** Space ID where you want to save batch prediction writebacks or
   * empty string ('') save them to your personal space. */
  spaceId: string;
};
type BinaryImbalanceSampling = {
  sampleClass?: string;
  sampleDirection?: "up" | "down";
  sampleRatio?: number;
};
/**
 * Indicates if you want to change the featureType for this
 * feature within the experiment version
 */
type ChangeType = "categorical" | "numeric" | "date" | "freetext";
type ColumnTransform = {
  changeType: string;
  name: string;
};
/**
 * The ID of a correlated resource of corrType
 */
type CorrId = string;
/**
 * Types names of correlated resources (batch 'prediction' and
 * experiment_version)
 */
type CorrType = "batch-prediction" | "experiment-version";
/**
 * Timestamp when this was created
 */
type CreatedAt = string;
/**
 * ID of the owner/user that created this entity.
 */
type CreatedBy = string;
/**
 * The Qlik catalog dataset ID
 * @example
 * "672e55cfcadfb8a18281523e"
 */
type DataSetId = string;
/**
 * The data type of this feature in your dataset
 * @example
 * "STRING"
 */
type DataType = "DATE" | "TIME" | "DATETIME" | "TIMESTAMP" | "STRING" | "DOUBLE" | "DECIMAL" | "INTEGER" | "BOOLEAN" | "BINARY" | "CUSTOM" | "FLOAT" | "OBJECT";
/**
 * Whether this is a new or other dataset
 */
type DatasetOrigin = "new" | "changed" | "refreshed" | "same";
/**
 * A optional date column name to index
 */
type DateIndexes = string[];
/**
 * Timestamp when this is deleted
 */
type DeletedAt = string;
/**
 * IDs of all models deployed to the deployment
 */
type DeployedModelIds = string[];
/**
 * Input values for adding deployed models to a deployment
 */
type DeployedModelsInput = {
  data: {
    attributes: {
      /** IDs of all models deployed to the deployment */
      deployedModelIds: DeployedModelIds;
    };
    type: "deployed-models";
  };
};
/**
 * A deployed model against which you can run predictions
 */
type Deployment = {
  /** Timestamp when this was created */
  createdAt: CreatedAt;
  /** ID of the owner/user that created this entity. */
  createdBy: CreatedBy;
  /** IDs of all models deployed to the deployment */
  deployedModelIds?: DeployedModelIds;
  /** Whether this deployment is deprecated */
  deprecated: boolean;
  /** Description of this entity */
  description: EntityDescription;
  /** Whether to allow predictions */
  enablePredictions: boolean;
  /** JSON string of error object */
  errorMessage?: ErrorMessage;
  /** JSON string with list of error objects */
  errors?: Errors;
  /** ID of this entity */
  id: EntityId;
  /** ID of the model */
  modelId: ModelId;
  /** Name of this entity */
  name: EntityName;
  /** ID of owner/user for this entity */
  ownerId: OwnerId;
  /** Space ID for this entity (empty string for personal space) */
  spaceId: SpaceId;
  /** Timestamp when this was updated */
  updatedAt: UpdatedAt;
};
type DeploymentFindResponse = {
  data: {
    /** A deployed model against which you can run predictions */
    attributes: Deployment;
    /** ID of this entity */
    id: EntityId;
    type: "deployment";
  }[];
  /** Resource links included in paginated responses */
  links: ResponseLinks;
  /** Meta for FIND operations */
  meta?: FindResponseMeta;
};
type DeploymentGetResponse = {
  data: {
    /** A deployed model against which you can run predictions */
    attributes: Deployment;
    /** ID of this entity */
    id: EntityId;
    type: "deployment";
  };
};
/**
 * ID of a model deployment
 */
type DeploymentId = string;
/**
 * Input for creating a new deployment
 */
type DeploymentInput = {
  data?: {
    attributes?: {
      /** Whether this deployment is deprecated */
      deprecated?: boolean;
      /** Description of this entity */
      description?: EntityDescription;
      /** Whether to allow real-time predictions */
      enablePredictions?: boolean;
      /** ID of the model */
      modelId: ModelId;
      /** Name of this entity */
      name: EntityName;
      /** Space ID for this entity (empty string for personal space) */
      spaceId: SpaceId;
    };
    type?: "deployment";
  };
};
type DeploymentPatch = {
  /** All patch requests use the replace operation */
  op: "replace";
  /** Path for the property you want to update */
  path: "/name" | "/description" | "/spaceId";
  /** Use for fields that can be `any` type (string, number, etc.) */
  value: AnyType;
}[];
type DeploymentPostResponse = {
  data: {
    /** A deployed model against which you can run predictions */
    attributes: Deployment;
    /** ID of this entity */
    id: EntityId;
    type: "deployment";
  };
};
/**
 * Feature dropped during preprocessing
 */
type DroppedFeature = {
  /** Name of dropped feature in the dataset */
  name?: string;
  /** Reason the feature was dropped */
  reason?: "highly_correlated" | "has_target_leakage" | "is_date_engineered" | "feature_with_low_importance";
};
/**
 * Description of this entity
 */
type EntityDescription = string;
/**
 * ID of this entity
 */
type EntityId = string;
/**
 * Name of this entity
 */
type EntityName = string;
type EnumSortAliases = "name" | "+name" | "-name";
type EnumSortBatchPredictions = "createdAt" | "+createdAt" | "-createdAt" | "description" | "+description" | "-description" | "name" | "+name" | "-name" | "updatedAt" | "+updatedAt" | "-updatedAt";
type EnumSortDeployments = "createdAt" | "+createdAt" | "-createdAt" | "name" | "+name" | "-name" | "updatedAt" | "+updatedAt" | "-updatedAt";
type EnumSortExperimentVersions = "createdAt" | "+createdAt" | "-createdAt" | "description" | "+description" | "-description" | "experimentMode" | "+experimentMode" | "-experimentMode" | "experimentType" | "+experimentType" | "-experimentType" | "name" | "+name" | "-name" | "status" | "+status" | "-status" | "updatedAt" | "+updatedAt" | "-updatedAt" | "versionNumber" | "+versionNumber" | "-versionNumber";
type EnumSortExperiments = "createdAt" | "+createdAt" | "-createdAt" | "description" | "+description" | "-description" | "name" | "+name" | "-name" | "updatedAt" | "+updatedAt" | "-updatedAt";
type EnumSortModels = "createdAt" | "+createdAt" | "-createdAt" | "description" | "+description" | "-description" | "name" | "+name" | "-name" | "updatedAt" | "+updatedAt" | "-updatedAt";
/**
 * JSON string of error object
 */
type ErrorMessage = string;
/**
 * JSON string with list of error objects
 */
type Errors = APIError[];
/**
 * An AutoML experiment
 */
type Experiment = {
  /** Timestamp when this was created */
  createdAt: CreatedAt;
  /** Description of this entity */
  description?: EntityDescription;
  /** ID of this entity */
  id: EntityId;
  /** Name of this entity */
  name?: EntityName;
  /** ID of owner/user for this entity */
  ownerId: OwnerId;
  /** Space ID for this entity (empty string for personal space) */
  spaceId: SpaceId;
  /** Tenant ID for this entity */
  tenantId: TenantId;
  /** Timestamp when this was updated */
  updatedAt: UpdatedAt;
};
type ExperimentFindResponse = {
  data: {
    /** An AutoML experiment */
    attributes: Experiment;
    /** ID of this entity */
    id: EntityId;
    type: "experiment";
  }[];
  /** Resource links included in paginated responses */
  links: ResponseLinks;
  /** Meta for FIND operations */
  meta?: FindResponseMeta;
};
type ExperimentGetResponse = {
  data: {
    /** An AutoML experiment */
    attributes: Experiment;
    /** ID of this entity */
    id: EntityId;
    type: "experiment";
  };
};
/**
 * ID of the experiment
 */
type ExperimentId = string;
/**
 * Input for creating this entity
 */
type ExperimentInput = {
  /** Data container for ExperimentInput */
  data?: {
    /** Experiment input attributes */
    attributes?: {
      /** Description of this entity */
      description?: EntityDescription;
      /** Name of this entity */
      name: EntityName;
      /** Space ID for this entity (empty string for personal space) */
      spaceId: SpaceId;
    };
    type?: "experiment";
  };
};
/**
 * The model training mode for the experiment version
 */
type ExperimentMode = "intelligent" | "manual" | "manual_hpo";
/**
 * Criteria to determine which pool of models to provide recommendations from
 */
type ExperimentModelRecommendationFilter = {
  /** The model algorithms to consider */
  algorithms?: ModelAlgorithm[];
  /** Whether to only consider models that are already deployed */
  deployed?: boolean;
  /** Whether to only consider models with 100% sampling */
  fullSampling?: boolean;
  /** The versionNumbers of the experiment versions to consider models from */
  versionNumbers?: number[];
};
type ExperimentModelRecommendationPostResponse = {
  data: {
    /** Model recommendations */
    attributes: {
      bestModel?: ModelForRecommendations;
      fastestModel?: ModelForRecommendations;
      mostAccurateModel?: ModelForRecommendations;
    };
    type: "model-recommendation";
  };
};
/**
 * @example
 * [
 *   {
 *     op: "replace",
 *     path: "/name"
 *   },
 *   {
 *     op: "replace",
 *     path: "/description"
 *   },
 *   {
 *     op: "replace",
 *     path: "/spaceId"
 *   }
 * ]
 */
type ExperimentPatch = ExperimentPatchItem[];
/**
 * Experiment fields that can be patched. The following paths all require `value` to be a string: `/name`, `/spaceId`, and `/description`
 */
type ExperimentPatchItem = {
  /** All patch requests use the replace operation */
  op: "replace";
  /** Path for the property you want to update */
  path: "/name" | "/description" | "/spaceId";
  /** Use for fields that can be `any` type (string, number, etc.) */
  value: AnyType;
};
type ExperimentPostResponse = {
  data: {
    /** An AutoML experiment */
    attributes: Experiment;
    /** ID of this entity */
    id: EntityId;
    type: "experiment";
  };
};
/**
 * Experiment type
 */
type ExperimentType = "binary" | "multiclass" | "regression";
/**
 * An AutoML experiment version. This is a configuration for training
 * models within an experiment.
 */
type ExperimentVersion = {
  /** List of algorithms selected for model training in this version */
  algorithms?: ModelAlgorithm[];
  /** Timestamp when this was created */
  createdAt: CreatedAt;
  /** ID of owner/user for this entity */
  createdByUserId: OwnerId;
  /** The Qlik catalog dataset ID */
  dataSetId: DataSetId;
  /** Whether this is a new or other dataset */
  datasetOrigin?: DatasetOrigin;
  /** A optional date column name to index */
  dateIndexes?: DateIndexes;
  /** JSON string of error object */
  errorMessage?: ErrorMessage;
  /** JSON string with list of error objects */
  errors?: Errors;
  /** ID of the experiment */
  experimentId: ExperimentId;
  /** The model training mode for the experiment version */
  experimentMode?: ExperimentMode;
  /** Experiment type */
  experimentType: ExperimentType;
  /** List of features from your dataset for creating Experiment
   * Versions. This appears in from ProfileInsights response (in the
   * defaultVersionConfig). You can adjust the default settings before
   * using it as input to create or update Experiment Versions. */
  featuresList?: FeaturesList;
  /** ID of this entity */
  id: EntityId;
  /** Number of the last batch */
  lastBatchNum?: number;
  /** Name of this entity */
  name?: EntityName;
  /** Pipeline metadata including transformations to apply to columns and
   * specific schema configuration data */
  pipeline?: Pipeline;
  /** Preprocessed insights. Like feature insights but with fewer details. */
  preprocessedInsights?: PreprocessedInsightColumn[];
  /** ID of the dataset profile with metadata about source data */
  profileId?: string;
  /** Current status of this entity */
  status: "ready" | "error" | "cancelled" | "pending" | "dataprep_requested" | "datasync_requested" | "datasync_done";
  /** The target field in the dataset */
  target: string;
  /** ID of the top model (based on training scores) in this experiment
   * version */
  topModelId?: string;
  /** Optional training duration in seconds. If not provided, max value used.
   * If provided, min 900 (15m) and max 21600 (6h). */
  trainingDuration?: TrainingDuration;
  /** Timestamp when this was updated */
  updatedAt: UpdatedAt;
  /** 1-based sequential version number within the experiment */
  versionNumber?: number;
};
type ExperimentVersionFindResponse = {
  data: {
    /** An AutoML experiment version. This is a configuration for training
     * models within an experiment. */
    attributes: ExperimentVersion;
    /** ID of this entity */
    id: EntityId;
    type: "experiment-version";
  }[];
  /** Resource links included in paginated responses */
  links: ResponseLinks;
  /** Meta for FIND operations */
  meta?: FindResponseMeta;
};
type ExperimentVersionGetResponse = {
  data: {
    /** An AutoML experiment version. This is a configuration for training
     * models within an experiment. */
    attributes: ExperimentVersion;
    /** ID of this entity */
    id: EntityId;
    type: "experiment-version";
  };
};
/**
 * ID of the experiment version
 */
type ExperimentVersionId = string;
/**
 * Input for creating a new experiment version. Defaults provided in the
 * ProfileInsights response.
 */
type ExperimentVersionInput = {
  data: {
    attributes: {
      /** Algorithms used for model training in this version. See
       * documentation for valid algorithms for each
       * `experimentType`.
       *
       * If not provided, defaults to all valid algorithms for your
       * experimentType. */
      algorithms?: ModelAlgorithm[];
      /** The Qlik catalog dataset ID */
      dataSetId: DataSetId;
      /** Whether this is a new or other dataset */
      datasetOrigin?: DatasetOrigin;
      /** A optional date column name to index */
      dateIndexes?: DateIndexes;
      /** The model training mode for the experiment version */
      experimentMode: ExperimentMode;
      /** Experiment type */
      experimentType: ExperimentType;
      /** List of features from your dataset for creating Experiment
       * Versions. This appears in from ProfileInsights response (in the
       * defaultVersionConfig). You can adjust the default settings before
       * using it as input to create or update Experiment Versions. */
      featuresList: FeaturesList;
      name: string;
      /** Pipeline metadata including transformations to apply to columns and
       * specific schema configuration data */
      pipeline?: Pipeline;
      /** The target field in the dataset. Set in first experiment
       * version and can't be changed in subsequent versions. */
      target: string;
      /** Optional training duration in seconds. If not provided, max value used.
       * If provided, min 900 (15m) and max 21600 (6h). */
      trainingDuration?: TrainingDuration;
    };
    type: "experiment-version";
  };
};
type ExperimentVersionPatch = {
  /** All patch requests use the replace operation */
  op: "replace";
  /** Path for the properties you can update. */
  path: "/name";
  /** Use for fields that can be `any` type (string, number, etc.) */
  value: AnyType;
}[];
type ExperimentVersionPostResponse = {
  data: {
    /** An AutoML experiment version. This is a configuration for training
     * models within an experiment. */
    attributes: ExperimentVersion;
    /** ID of this entity */
    id: EntityId;
    type: "experiment-version";
  };
};
type Failure = {
  errors: APIError[];
  traceId?: string;
};
/**
 * A feature (column) from your dataset
 */
type Feature = {
  /** Indicates if you want to change the featureType for this
   * feature within the experiment version */
  changeType?: ChangeType;
  /** The data type of this feature in your dataset */
  dataType?: DataType;
  /** The default feature type based on the feature's data type.
   * If you want a value to be interpreted differently (e.g. 0/1
   * as categorical/boolean instead of numeric), use `changeType`. */
  featureType?: FeatureType;
  /** Include this feature in your experiment version? Default
   * here is based on insights for this feature
   * (e.g. willBeDropped). */
  include?: boolean;
  /** Name of the feature column */
  name?: string;
  /** The parent feature name for engineered features. e.g. `OrderDate` may be the parent of its engineered features (features extracted from parent) like `OrderDate.YEAR`, `OrderDate.MONTH`, etc. */
  parentFeature?: string;
};
/**
 * Metadata about the features in your dataset, generated when you create
 * ProfileInsights.
 */
type FeatureInsights = {
  /** Whether a feature cannot be the target field */
  cannotBeTarget: boolean;
  /** The default feature type based on the feature's data type.
   * If you want a value to be interpreted differently (e.g. 0/1
   * as categorical/boolean instead of numeric), use `changeType`. */
  defaultFeatureType?: FeatureType;
  /** Preliminary list of engineered features as strings. If subsequent
   * processing validates them, they'll be converted to EngineeredFeature
   * objects within a NestedColumn, each of which may contain its own
   * FeatureInsights. */
  engineeredFeatures?: string[];
  /** Only applies for time series experiment types. This intial estimate
   * of the combined max forecast window and gap (aka - horizon). It only
   * applies to possible date index columns. After the experiment version
   * is created, we get a more precise number for subsequent versions.
   * When training data is grouped, this estimate may be less accurate. */
  estimatedMaxForecastHorizon?: number;
  /** Experiment types in this feature insight */
  experimentTypes: ExperimentType[];
  /** List of insights about this feature. */
  insights: Insights[];
  /** Name of the feature insight */
  name: string;
  /** Whether this feature will be dropped. Traits like high cardinality
   * make some features less predictive or too costly to merit use. */
  willBeDropped: boolean;
};
/**
 * The default feature type based on the feature's data type.
 * If you want a value to be interpreted differently (e.g. 0/1
 * as categorical/boolean instead of numeric), use `changeType`.
 */
type FeatureType = "categorical" | "numeric" | "date" | "freetext";
/**
 * List of features from your dataset for creating Experiment
 * Versions. This appears in from ProfileInsights response (in the
 * defaultVersionConfig). You can adjust the default settings before
 * using it as input to create or update Experiment Versions.
 */
type FeaturesList = Feature[];
/**
 * Dataset file type
 * @example
 * "qvd, parquet, csv"
 */
type FileType = string;
/**
 * Meta for FIND operations
 */
type FindResponseMeta = {
  count: number;
};
/**
 * A optional column name upon which to create an index. Must be unique for
 * every row. If not included, Qlik will create a unique index column.
 */
type IndexColumn = string;
/**
 * Insights about a feature, such as why it's not included in a model
 */
type Insights = "constant" | "high_cardinality" | "high_cardinality_integer" | "too_many_nulls" | "will_be_impact_encoded" | "will_be_one_hot_encoded" | "possible_free_text_encoded" | "valid_index" | "underrepresented_class" | "invalid_column_name" | "will_be_date_engineered";
/**
 * The type for this job
 */
type JobType = "prediction";
/**
 * A model based on an algorithm within an experiment version.
 */
type Model = {
  /** Model algorithm name abbreviation */
  algoAbbrv?: ModelAlgorithmAbbreviation;
  /** The algorithm used by this model */
  algorithm?: string;
  anomalyRatio?: number;
  /** Batch number indicates the index of the experiment version fold
   * (most relevant when HPO is enabled) */
  batchNum?: number;
  binaryImbalanceSampling?: BinaryImbalanceSampling;
  binningFeatures?: string[];
  /** Dataset columns selected as features */
  columns?: string[];
  /** Timestamp when this was created */
  createdAt?: CreatedAt;
  /** Description of this entity */
  description?: EntityDescription;
  /** Features dropped because they're unsuitable */
  droppedFeatures?: DroppedFeature[];
  /** JSON string of error object */
  errorMessage?: ErrorMessage;
  /** JSON string with list of error objects */
  errors?: Errors;
  /** ID of the experiment version */
  experimentVersionId?: ExperimentVersionId;
  /** Version number of the hyperparameter optimization */
  hpoNum?: number;
  /** ID of this entity */
  id?: EntityId;
  /** Model metrics based on the type of model */
  metrics?: ModelMetrics;
  /** Model state. These are the state of the model in relation to
   * deployments. */
  modelState?: ModelState;
  /** Name of this entity */
  name?: EntityName;
  powerTransformFeatures?: string[];
  /** Ratio of sample data in relation to the dataset */
  samplingRatio?: number;
  /** Model sequence number within the experiment version */
  seqNum?: number;
  /** Model status. These are the status of the model in relation to
   * experiments (i.e. training status). */
  status?: ModelStatus;
  /** Timestamp when this was updated */
  updatedAt?: UpdatedAt;
};
/**
 * Enumeration of model algorithms.
 *
 * A subset of these may be provided based on your ExperimentType. This is
 * based on your target's featureType. When you select a target feature
 * from your ProfileInsights response (defaultVersionConfig.featuresList),
 * it tells you which algorithms will be available if you choose it as your
 * target.
 */
type ModelAlgorithm = "catboost_classifier" | "catboost_regression" | "elasticnet_regression" | "gaussian_nb" | "kneighbors_classifier" | "lasso_regression" | "lasso" | "lgbm_classifier" | "lgbm_regression" | "linear_regression" | "logistic_regression" | "random_forest_classifier" | "random_forest_regression" | "sgd_regression" | "xgb_classifier" | "xgb_regression";
/**
 * Model algorithm name abbreviation
 */
type ModelAlgorithmAbbreviation = "CATBC" | "CATBR" | "ELNC" | "GNBC" | "LGBMC" | "LGBMR" | "LINR" | "LOGC" | "LSOC" | "RAFC" | "RAFR" | "SGDR" | "XGBC" | "XGBR";
type ModelFindResponse = {
  data: {
    /** A model based on an algorithm within an experiment version. */
    attributes: Model;
    /** ID of this entity */
    id: EntityId;
    type: "model";
  }[];
  /** Resource links included in paginated responses */
  links: ResponseLinks;
  /** Meta for FIND operations */
  meta?: FindResponseMeta;
};
type ModelForRecommendations = Model & {
  metrics?: {
    /** This represents model prediction speed in rows/second */
    predictionSpeed: number;
  };
};
type ModelGetResponse = {
  data: {
    /** A model based on an algorithm within an experiment version. */
    attributes: Model;
    /** ID of this entity */
    id: EntityId;
    type: "model";
  };
};
/**
 * ID of the model
 */
type ModelId = string;
/**
 * Model information stored on an alias
 */
type ModelInfo = {
  /** ID of this entity */
  id?: EntityId;
};
/**
 * Model metrics based on the type of model
 */
type ModelMetrics = {
  /** Binary metrics for categorical values with two options. Details:
   * https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/AutoML/scoring-binary-classification.htm */
  binary?: ModelMetricsBinary;
  /** Multiclass metrics for categorical values with 3+ options. Details:
   * https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/AutoML/scoring-multiclass-classification.htm */
  multiclass?: ModelMetricsMulticlass;
  /** Regression metrics for numeric values. Details:
   * https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/AutoML/scoring-regression.htm */
  regression?: ModelMetricsRegression;
  /** Timeseries metrics experiments valid for timeseries forecasting. */
  timeseries?: ModelMetricsTimeseries;
};
/**
 * Binary metrics for categorical values with two options. Details:
 * https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/AutoML/scoring-binary-classification.htm
 */
type ModelMetricsBinary = {
  /** Average measure of how often the model made correct predictions
   * (training data) */
  accuracy?: number;
  /** Average measure of how often the model made correct predictions
   * (test data) */
  accuracyTest?: number;
  /** Area under curve (training data) */
  auc?: number;
  /** Area under curve (test data) */
  aucTest?: number;
  /** The harmonic mean of precision and recall for training data */
  f1?: number;
  /** The harmonic mean of precision and recall for test data */
  f1Test?: number;
  /** The false positive rate (training data) */
  fallout?: number;
  /** The false positive rate (test data) */
  falloutTest?: number;
  /** Actual true values incorrectly predicted as false (training data) */
  falseNegative?: number;
  /** Actual true values incorrectly predicted as false (test data) */
  falseNegativeTest?: number;
  /** Actual false values incorrectly predicted as true (training data) */
  falsePositive?: number;
  /** Actual false values incorrectly predicted as true (test data) */
  falsePositiveTest?: number;
  /** Measures accuracy in logistic regression (training data) */
  logLoss?: number;
  /** Measures accuracy in logistic regression (test data) */
  logLossTest?: number;
  /** Matthews correlation coefficient (training data) */
  mcc?: number;
  /** Matthews correlation coefficient (test data) */
  mccTest?: number;
  /** The false negative rate (training data) */
  missRate?: number;
  /** The false negative rate (test data) */
  missRateTest?: number;
  /** Negative predictive value (training data) */
  npv?: number;
  /** Negative predictive value (test data) */
  npvTest?: number;
  /** Positive predictive value. Probability that the model was correct
   * when it predicted something was true. (training data) */
  precision?: number;
  /** Positive predictive value. Probability that the model was correct
   * when it predicted something was true. (test data) */
  precisionTest?: number;
  /** The true positive rate (training data) */
  recall?: number;
  /** The true positive rate (test data) */
  recallTest?: number;
  /** The true negative rate (training data) */
  specificity?: number;
  /** The true negative rate (test data) */
  specificityTest?: number;
  /** Probability that a prediction is true (training data) */
  threshold?: number;
  /** Probability that a prediction is true (test data) */
  thresholdTest?: number;
  /** Actual false values correctly predicted as false (training data) */
  trueNegative?: number;
  /** Actual false values correctly predicted as false (test data) */
  trueNegativeTest?: number;
  /** Actual true values correctly predicted as true (training data) */
  truePositive?: number;
  /** Actual true values correctly predicted as true (test data) */
  truePositiveTest?: number;
};
/**
 * Multiclass metrics for categorical values with 3+ options. Details:
 * https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/AutoML/scoring-multiclass-classification.htm
 */
type ModelMetricsMulticlass = {
  /** Average of how often the model made a correct prediction (training
   * data) */
  accuracy?: number;
  /** Average of how often the model made a correct prediction (test data) */
  accuracyTest?: number;
  /** A matrix summary of the accuracy of predictions in a classification
   * model (training data) */
  confusionMatrix?: string;
  /** A matrix summary of the accuracy of predictions in a classification
   * model (training data) */
  confusionMatrixTest?: string;
  /** Macro F1 is the averaged F1 value for each class without weighting
   * (training data) */
  f1Macro?: number;
  /** Macro F1 is the averaged F1 value for each class without weighting
   * (test data) */
  f1MacroTest?: number;
  /** Micro F1 is the F1 value calculated across the entire confusion
   * matrix (training data) */
  f1Micro?: number;
  /** Micro F1 is the F1 value calculated across the entire confusion
   * matrix (test data) */
  f1MicroTest?: number;
  /** Weighted F1 (training data) */
  f1Weighted?: number;
  /** Weighted F1 (test data) */
  f1WeightedTest?: number;
};
/**
 * Regression metrics for numeric values. Details:
 * https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/AutoML/scoring-regression.htm
 */
type ModelMetricsRegression = {
  /** Mean absolute error (training data) */
  mae?: number;
  /** Mean absolute error (test data) */
  maeTest?: number;
  /** Mean squared error (training data) */
  mse?: number;
  /** Mean squared error (test data) */
  mseTest?: number;
  /** R squared (training data) */
  r2?: number;
  /** R squared (test data) */
  r2Test?: number;
  /** Root mean squared error (training data) */
  rmse?: number;
  /** Root mean squared error (test data) */
  rmseTest?: number;
};
/**
 * Timeseries metrics experiments valid for timeseries forecasting.
 */
type ModelMetricsTimeseries = {
  /** Mean absolute error (training data) */
  mae?: number;
  /** Mean absolute error (test data) */
  maeTest?: number;
  /** Mean absolute percentage error (training data) */
  mape?: number;
  /** Mean absolute percentage error (test data) */
  mapeTest?: number;
  /** Mean absolute scaled error (training data) */
  mase?: number;
  /** Mean absolute scaled error (test data) */
  maseTest?: number;
  /** Median absolute percentage error (training data) */
  mdape?: number;
  /** Median absolute percentage error (test data) */
  mdapeTest?: number;
  /** Median root mean squared error (training data) */
  mdnrmse?: number;
  /** Median root mean squared error (test data) */
  mdnrmseTest?: number;
  /** Mean root mean squared error (training data) */
  mnrmse?: number;
  /** Mean root mean squared error (test data) */
  mnrmseTest?: number;
  /** Root mean squared error (training data) */
  rmse?: number;
  /** Root mean squared error (test data) */
  rmseTest?: number;
  /** Symmetric mean absolute percentage error (training data) */
  smape?: number;
  /** Symmetric mean absolute percentage error (test data) */
  smapeTest?: number;
  /** Weighted mean absolute percentage error (training data) */
  wmape?: number;
  /** Weighted mean absolute percentage error (test data) */
  wmapeTest?: number;
};
/**
 * Model state. These are the state of the model in relation to
 * deployments.
 */
type ModelState = "pending" | "enabled" | "disabled" | "inactive";
/**
 * Model status. These are the status of the model in relation to
 * experiments (i.e. training status).
 */
type ModelStatus = "pending" | "training_requested" | "training_done" | "ready" | "error";
type ModelsInfo = ModelInfo[];
type OutputFile = {
  fileName: string;
  /** Dataset file type */
  fileType: FileType;
  key: string;
  path: string;
  /** Space ID for this entity (empty string for personal space) */
  spaceId: SpaceId;
};
/**
 * ID of owner/user for this entity
 */
type OwnerId = string;
/**
 * ID of the current job's parent
 */
type ParentJobId = string;
/**
 * Pipeline metadata including transformations to apply to columns and
 * specific schema configuration data
 */
type Pipeline = {
  transforms?: Transform[];
};
type PredictionJobResponse = {
  /** The ID of a correlated resource of corrType */
  corrId: CorrId;
  /** Types names of correlated resources (batch 'prediction' and
   * experiment_version) */
  corrType: CorrType;
  /** Timestamp when this was created */
  createdAt: CreatedAt;
  /** ID of the owner/user that created this entity */
  createdBy: string;
  /** Timestamp when this is deleted */
  deletedAt: DeletedAt;
  /** ID of a model deployment */
  deploymentId: DeploymentId;
  details: {
    isScheduled: boolean;
    lineageSchemaUpdated: boolean;
    outputFiles: OutputFile[];
  };
  experimentVersionNumber: string;
  /** ID of this entity */
  id: EntityId;
  /** The type for this job */
  jobType: JobType;
  /** ID of the model */
  modelId: ModelId;
  name: string;
  /** ID of the current job's parent */
  parentJobId: ParentJobId;
  parentName: string;
  rowsPredicted: number;
  /** Status of this job */
  status: "pending" | "completed" | "cancelled" | "error";
  success: boolean;
  /** Tenant ID for this entity */
  tenantId: TenantId;
  trigger: string;
  /** Timestamp when this was updated */
  updatedAt: UpdatedAt;
};
/**
 * Metadata about features/columns from dataset after preprocessing
 */
type PreprocessedInsightColumn = {
  /** Preliminary list of column/feature insights available after
   * preprocessing but before feature insights are available */
  insights: ("is_free_text" | "cannot_be_processed_as_free_text" | "is_date_engineered" | "has_target_leakage" | "feature_type_change_invalid" | "feature_type_change_failed" | "feature_type_change_successful" | "data_bias_detected" | "representation_bias_detected")[];
  /** Name of the preprocessed insight column */
  name: string;
  /** Whether this feature insight will be dropped due to free text or
   * high cardinality that makes it less useful */
  willBeDropped: boolean;
};
/**
 * Insights (metadata) about an experiment dataset
 */
type ProfileInsights = {
  /** List of algorithms available for the selected experiment type */
  algorithms?: ModelAlgorithm[];
  defaultVersionConfig?: {
    /** The Qlik catalog dataset ID */
    dataSetId: DataSetId;
    /** Whether this is a new or other dataset */
    datasetOrigin: DatasetOrigin;
    /** The model training mode for the experiment version */
    experimentMode: ExperimentMode;
    /** List of features from your dataset for creating Experiment
     * Versions. This appears in from ProfileInsights response (in the
     * defaultVersionConfig). You can adjust the default settings before
     * using it as input to create or update Experiment Versions. */
    featuresList?: FeaturesList;
    name: string;
  };
  /** Optional experiment version ID. When included, it indicates that
   * this dataset profile is a snapshot from a previous version. */
  experimentVersionId?: string;
  /** List of feature insights object, one per feature in the dataset */
  insights?: FeatureInsights[];
  /** Is this a CSV dataset > 1GB? */
  isLargeCsv?: boolean;
  /** Number of rows in the dataset.
   *
   * When isLargeCsv is true, this is an estimate since their metadata is
   * based on a sample rather than the full dataset.
   *
   * For datasets over 1GB, multiply `rows` (this) by `columns` (features
   * included in experiment version) to calculate total `cells` to
   * ensure it stays under your license limit. Large CSVs have a hard
   * 100M cell limit. */
  numberOfRows?: number;
  /** ID of owner/user for this entity */
  ownerId: OwnerId;
  /** Size of the profiled dataset in bytes. */
  sizeInBytes?: number;
  /** Status of profile insights. Not available until `ready`. */
  status: "pending" | "error" | "ready";
  /** Tenant ID for this entity */
  tenantId: TenantId;
};
type ProfileInsightsGetResponse = {
  data: {
    /** Insights (metadata) about an experiment dataset */
    attributes: ProfileInsights;
    /** ID of this entity */
    id: EntityId;
    type: "profile-insights";
  };
};
/**
 * Input to get dataset and feature metadata needed to create
 * experiment versions
 */
type ProfileInsightsInput = {
  /** Data wrapper for request input */
  data?: {
    /** The request body for this resource */
    attributes?: {
      /** The Qlik catalog dataset ID */
      dataSetId?: DataSetId;
      /** Experiment type */
      experimentType?: ExperimentType;
      /** Whether the server should or client should manage polling/waiting */
      shouldWait?: boolean;
      /** Optional selected target provided on subsequent requests */
      target?: string;
    };
    type?: "profile-insights";
  };
};
type RealTimePredictionInputSchema = {
  /** The name of a feature in the dataset */
  name?: string;
};
type RealTimePredictionSchema = {
  /** The name of a feature in the dataset */
  name?: string;
};
/**
 * Input values for creating realtime predictions
 */
type RealtimePrediction = {
  data?: {
    attributes?: {
      /** Rows of the dataset from which to produce predictions */
      rows?: string[][];
      /** List of features in the dataset */
      schema?: RealTimePredictionSchema[];
    };
    type?: "realtime-prediction";
  };
};
/**
 * Input values for creating realtime predictions
 */
type RealtimePredictionInput = {
  /** Rows of the dataset from which to produce predictions.
   * Date features must be in ISO 8601 format. */
  rows?: string[][];
  /** List of features in the dataset. */
  schema?: RealTimePredictionInputSchema[];
};
/**
 * Resource links included in paginated responses
 */
type ResponseLinks = {
  first: {
    /** Link to the first set of responses from `offset` 0 to count `limit`` */
    href?: string;
  };
  last: {
    /** Link to the last set of responses from `limit` minus `offset` to
     * `limit` */
    href?: string;
  };
  next: {
    /** Link to the next set of responses */
    href?: string;
  };
  prev: {
    /** Link to the previous set of responses */
    href?: string;
  };
  self: {
    /** Link to the current set of responses */
    href?: string;
  };
};
/**
 * Space ID for this entity (empty string for personal space)
 */
type SpaceId = string;
/**
 * Tenant ID for this entity
 */
type TenantId = string;
/**
 * Optional training duration in seconds. If not provided, max value used.
 * If provided, min 900 (15m) and max 21600 (6h).
 */
type TrainingDuration = number;
type Transform = {
  column?: ColumnTransform;
};
/**
 * Timestamp when this was updated
 */
type UpdatedAt = string;
/**
 * List deployments
 * @example
 * getMlDeployments(
 *   {
 *     filter: "`filter=spaceId eq \"UUID\" and predictionEnabled eq \"true\" and nameContains co \"abc\"`",
 *     limit: 10,
 *     offset: 32
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetMlDeploymentsHttpError
 */
declare function getMlDeployments(query: {
  /** Deployment fields by which you can filter responses.<br><br>
   * - `spaceId` ID string (or empty string for personal space) - ID of space in which deployment(s) exist
   * - `modelId` UUID string - By model ID
   * - `createdBy` ID string
   * - `ownerId` ID string
   * - `experimentId` UUID string - ID of experiment in which model(s) exist
   * - `experimentVersionId` UUID string - ID of experiment version in which model(s) exist
   * - `predictionId` UUID string - ID of prediction which exists on deployment
   * - `predictionEnabled` boolean - Are predictions enabled
   * - `exactName` string - Deployments with exact name. Names may not be unique.
   * - `nameContains` string - Deployments where name includes this. Names may not be unique
   * - `experimentType` string - Deployments that have models of the experiment type */
  filter?: string;
  /** Number of results per page. Default is 32. */
  limit?: number;
  /** Number of rows to skip before getting page[size] */
  offset?: number;
  /** Field(s) by which to sort response */
  sort?: EnumSortDeployments;
}, options?: ApiCallOptions): Promise<GetMlDeploymentsHttpResponse>;
type GetMlDeploymentsHttpResponse = {
  data: DeploymentFindResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetMlDeploymentsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetMlDeploymentsHttpResponse>;
};
type GetMlDeploymentsHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Create a deployment
 *
 * @param body an object with the body content
 * @throws CreateMlDeploymentHttpError
 */
declare function createMlDeployment(body: DeploymentInput, options?: ApiCallOptions): Promise<CreateMlDeploymentHttpResponse>;
type CreateMlDeploymentHttpResponse = {
  data: DeploymentPostResponse;
  headers: Headers;
  status: 201;
};
type CreateMlDeploymentHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Delete a deployment
 *
 * @param deploymentId ID of the deployment
 * @throws DeleteMlDeploymentHttpError
 */
declare function deleteMlDeployment(deploymentId: string, options?: ApiCallOptions): Promise<DeleteMlDeploymentHttpResponse>;
type DeleteMlDeploymentHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteMlDeploymentHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Get a deployment
 *
 * @param deploymentId ID of the deployment
 * @throws GetMlDeploymentHttpError
 */
declare function getMlDeployment(deploymentId: string, options?: ApiCallOptions): Promise<GetMlDeploymentHttpResponse>;
type GetMlDeploymentHttpResponse = {
  data: DeploymentGetResponse;
  headers: Headers;
  status: 200;
};
type GetMlDeploymentHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Update a deployment
 *
 * @param deploymentId ID of the deployment
 * @param body an object with the body content
 * @throws PatchMlDeploymentHttpError
 */
declare function patchMlDeployment(deploymentId: string, body: DeploymentPatch, options?: ApiCallOptions): Promise<PatchMlDeploymentHttpResponse>;
type PatchMlDeploymentHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchMlDeploymentHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Activate the model for this deployment
 *
 * @param deploymentId ID of the deployment
 * @throws ActivateModelsMlDeploymentHttpError
 */
declare function activateModelsMlDeployment(deploymentId: string, options?: ApiCallOptions): Promise<ActivateModelsMlDeploymentHttpResponse>;
type ActivateModelsMlDeploymentHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type ActivateModelsMlDeploymentHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Deactivate the model for this deployment
 *
 * @param deploymentId ID of the deployment
 * @throws DeactivateModelsMlDeploymentHttpError
 */
declare function deactivateModelsMlDeployment(deploymentId: string, options?: ApiCallOptions): Promise<DeactivateModelsMlDeploymentHttpResponse>;
type DeactivateModelsMlDeploymentHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeactivateModelsMlDeploymentHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Retrieves a list of aliases based on filter parameters for a deployment.
 *
 * @param deploymentId ID of the deployment
 * @param query an object with query parameters
 * @throws GetMlDeploymentAliasesHttpError
 */
declare function getMlDeploymentAliases(deploymentId: string, query: {
  /** Alias fields by which you can filter responses
   * - `name` string - Aliases with exact name
   * - `modelId` UUID string - By model ID
   * - `mode` enum string - Mode by which alias is set to */
  filter?: string;
  /** Number of results per page. Default is 32. */
  limit?: number;
  /** Number of rows to skip before getting page[size] */
  offset?: number;
  /** Field(s) by which to sort response */
  sort?: EnumSortAliases;
}, options?: ApiCallOptions): Promise<GetMlDeploymentAliasesHttpResponse>;
type GetMlDeploymentAliasesHttpResponse = {
  data: AliasFindResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetMlDeploymentAliasesHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetMlDeploymentAliasesHttpResponse>;
};
type GetMlDeploymentAliasesHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Creates an alias for a deployment.
 *
 * @param deploymentId ID of the deployment
 * @param body an object with the body content
 * @throws CreateMlDeploymentAliaseHttpError
 */
declare function createMlDeploymentAliase(deploymentId: string, body: AliasInput, options?: ApiCallOptions): Promise<CreateMlDeploymentAliaseHttpResponse>;
type CreateMlDeploymentAliaseHttpResponse = {
  data: AliasPostResponse;
  headers: Headers;
  status: 201;
};
type CreateMlDeploymentAliaseHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Delete an alias from a deployment.
 *
 * @param deploymentId ID of the deployment
 * @param aliasId ID of the alias
 * @throws DeleteMlDeploymentAliaseHttpError
 */
declare function deleteMlDeploymentAliase(deploymentId: string, aliasId: string, options?: ApiCallOptions): Promise<DeleteMlDeploymentAliaseHttpResponse>;
type DeleteMlDeploymentAliaseHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteMlDeploymentAliaseHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Retrieves an alias that exists on the deployment.
 *
 * @param deploymentId ID of the deployment
 * @param aliasId ID of the alias
 * @throws GetMlDeploymentAliaseHttpError
 */
declare function getMlDeploymentAliase(deploymentId: string, aliasId: string, options?: ApiCallOptions): Promise<GetMlDeploymentAliaseHttpResponse>;
type GetMlDeploymentAliaseHttpResponse = {
  data: AliasGetResponse;
  headers: Headers;
  status: 200;
};
type GetMlDeploymentAliaseHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Updates an alias for a deployment.
 *
 * @param deploymentId ID of the deployment
 * @param aliasId ID of the alias
 * @param body an object with the body content
 * @throws PatchMlDeploymentAliaseHttpError
 */
declare function patchMlDeploymentAliase(deploymentId: string, aliasId: string, body: AliasPatch, options?: ApiCallOptions): Promise<PatchMlDeploymentAliaseHttpResponse>;
type PatchMlDeploymentAliaseHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchMlDeploymentAliaseHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Generate predictions in a synchronous request/response
 *
 * @param deploymentId ID of the deployment
 * @param aliasName The name of the ML Deployment Alias that will be used to determine which model should be used to produce predictions
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws RunMlDeploymentAliaseRealtimePredictionsHttpError
 */
declare function runMlDeploymentAliaseRealtimePredictions(deploymentId: string, aliasName: string, query: {
  /** If true, reason why a prediction was not produced included response */
  includeNotPredictedReason?: boolean;
  /** If true, shap values included in response */
  includeShap?: boolean;
  /** If true, source data included in response */
  includeSource?: boolean;
  /** The name of the feature in the source data to use as an index in the
   * response data. The column will be included with its original name
   * and values. This is intended to allow the caller to join results
   * with source data. */
  index?: string;
}, body: RealtimePredictionInput, options?: ApiCallOptions): Promise<RunMlDeploymentAliaseRealtimePredictionsHttpResponse>;
type RunMlDeploymentAliaseRealtimePredictionsHttpResponse = {
  data: RealtimePrediction;
  headers: Headers;
  status: 200;
};
type RunMlDeploymentAliaseRealtimePredictionsHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * List batch prediction configurations
 *
 * @param deploymentId ID of the deployment
 * @param query an object with query parameters
 * @throws GetMlDeploymentBatchPredictionsHttpError
 */
declare function getMlDeploymentBatchPredictions(deploymentId: string, query: {
  /** Batch prediction fields by which you can filter responses.<br><br>
   * - `aliasId` UUID string - ID of an alias within the batch prediction
   * - `createdBy` ID string
   * - `deploymentId` UUID string - ID of a deployment of a model associated with the experiment
   * - `experimentId` UUID string - ID of experiment in which model(s) exist
   * - `experimentVersionId` UUID string - ID of experiment version in which model(s) exist
   * - `modelId` UUID string - By model ID
   * - `ownerId` ID string of batch prediction owner */
  filter?: string;
  /** Number of results per page. Default is 32. */
  limit?: number;
  /** Number of rows to skip before getting page[size] */
  offset?: number;
  /** Field(s) by which to sort response */
  sort?: EnumSortBatchPredictions;
}, options?: ApiCallOptions): Promise<GetMlDeploymentBatchPredictionsHttpResponse>;
type GetMlDeploymentBatchPredictionsHttpResponse = {
  data: BatchPredictionFindResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetMlDeploymentBatchPredictionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetMlDeploymentBatchPredictionsHttpResponse>;
};
type GetMlDeploymentBatchPredictionsHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Create a prediction configuration
 *
 * @param deploymentId ID of the deployment
 * @param body an object with the body content
 * @throws CreateMlDeploymentBatchPredictionHttpError
 */
declare function createMlDeploymentBatchPrediction(deploymentId: string, body: BatchPredictionInput, options?: ApiCallOptions): Promise<CreateMlDeploymentBatchPredictionHttpResponse>;
type CreateMlDeploymentBatchPredictionHttpResponse = {
  data: BatchPredictionPostResponse;
  headers: Headers;
  status: 201;
};
type CreateMlDeploymentBatchPredictionHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Delete a batch prediction
 *
 * @param deploymentId ID of the deployment
 * @param batchPredictionId ID of the batch prediction
 * @throws DeleteMlDeploymentBatchPredictionHttpError
 */
declare function deleteMlDeploymentBatchPrediction(deploymentId: string, batchPredictionId: string, options?: ApiCallOptions): Promise<DeleteMlDeploymentBatchPredictionHttpResponse>;
type DeleteMlDeploymentBatchPredictionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteMlDeploymentBatchPredictionHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Retrieve a batch prediction
 *
 * @param deploymentId ID of the deployment
 * @param batchPredictionId ID of the batch prediction
 * @throws GetMlDeploymentBatchPredictionHttpError
 */
declare function getMlDeploymentBatchPrediction(deploymentId: string, batchPredictionId: string, options?: ApiCallOptions): Promise<GetMlDeploymentBatchPredictionHttpResponse>;
type GetMlDeploymentBatchPredictionHttpResponse = {
  data: BatchPredictionGetResponse;
  headers: Headers;
  status: 200;
};
type GetMlDeploymentBatchPredictionHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Updates a batch prediction
 *
 * @param deploymentId ID of the deployment
 * @param batchPredictionId ID of the batch prediction
 * @param body an object with the body content
 * @throws PatchMlDeploymentBatchPredictionHttpError
 */
declare function patchMlDeploymentBatchPrediction(deploymentId: string, batchPredictionId: string, body: BatchPredictionPatch, options?: ApiCallOptions): Promise<PatchMlDeploymentBatchPredictionHttpResponse>;
type PatchMlDeploymentBatchPredictionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchMlDeploymentBatchPredictionHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Run a batch prediction
 *
 * @param deploymentId ID of the deployment
 * @param batchPredictionId ID of the batch prediction
 * @throws PredictMlDeploymentBatchPredictionHttpError
 */
declare function predictMlDeploymentBatchPrediction(deploymentId: string, batchPredictionId: string, options?: ApiCallOptions): Promise<PredictMlDeploymentBatchPredictionHttpResponse>;
type PredictMlDeploymentBatchPredictionHttpResponse = {
  data: BatchPredictionActionResponse;
  headers: Headers;
  status: 202;
};
type PredictMlDeploymentBatchPredictionHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Deletes the schedule from a batch prediction.
 *
 * @param deploymentId ID of the deployment
 * @param batchPredictionId ID of the batch prediction
 * @throws DeleteMlDeploymentBatchPredictionScheduleHttpError
 */
declare function deleteMlDeploymentBatchPredictionSchedule(deploymentId: string, batchPredictionId: string, options?: ApiCallOptions): Promise<DeleteMlDeploymentBatchPredictionScheduleHttpResponse>;
type DeleteMlDeploymentBatchPredictionScheduleHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteMlDeploymentBatchPredictionScheduleHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Retrieves the schedule for a batch prediction.
 *
 * @param deploymentId ID of the deployment
 * @param batchPredictionId ID of the batch prediction
 * @throws GetMlDeploymentBatchPredictionScheduleHttpError
 */
declare function getMlDeploymentBatchPredictionSchedule(deploymentId: string, batchPredictionId: string, options?: ApiCallOptions): Promise<GetMlDeploymentBatchPredictionScheduleHttpResponse>;
type GetMlDeploymentBatchPredictionScheduleHttpResponse = {
  data: BatchPredictionScheduleGetResponse;
  headers: Headers;
  status: 200;
};
type GetMlDeploymentBatchPredictionScheduleHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Updates the schedule for a batch prediction.
 *
 * @param deploymentId ID of the deployment
 * @param batchPredictionId ID of the batch prediction
 * @param body an object with the body content
 * @throws UpdateMlDeploymentBatchPredictionScheduleHttpError
 */
declare function updateMlDeploymentBatchPredictionSchedule(deploymentId: string, batchPredictionId: string, body: BatchPredictionSchedulePatch, options?: ApiCallOptions): Promise<UpdateMlDeploymentBatchPredictionScheduleHttpResponse>;
type UpdateMlDeploymentBatchPredictionScheduleHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type UpdateMlDeploymentBatchPredictionScheduleHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Adds a schedule to a batch prediction.
 *
 * @param deploymentId ID of the deployment
 * @param batchPredictionId ID of the batch prediction
 * @param body an object with the body content
 * @throws SetMlDeploymentBatchPredictionScheduleHttpError
 */
declare function setMlDeploymentBatchPredictionSchedule(deploymentId: string, batchPredictionId: string, body: BatchPredictionScheduleInput, options?: ApiCallOptions): Promise<SetMlDeploymentBatchPredictionScheduleHttpResponse>;
type SetMlDeploymentBatchPredictionScheduleHttpResponse = {
  data: BatchPredictionSchedulePutResponse;
  headers: Headers;
  status: 201;
};
type SetMlDeploymentBatchPredictionScheduleHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Add deployed models for this deployment
 *
 * @param deploymentId ID of the deployment
 * @param body an object with the body content
 * @throws AddMlDeploymentModelsHttpError
 */
declare function addMlDeploymentModels(deploymentId: string, body: DeployedModelsInput, options?: ApiCallOptions): Promise<AddMlDeploymentModelsHttpResponse>;
type AddMlDeploymentModelsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type AddMlDeploymentModelsHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Remove deployed models from this deployment
 *
 * @param deploymentId ID of the deployment
 * @param body an object with the body content
 * @throws RemoveMlDeploymentModelsHttpError
 */
declare function removeMlDeploymentModels(deploymentId: string, body: DeployedModelsInput, options?: ApiCallOptions): Promise<RemoveMlDeploymentModelsHttpResponse>;
type RemoveMlDeploymentModelsHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type RemoveMlDeploymentModelsHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Generate predictions in a synchronous request/response
 *
 * @param deploymentId ID of the deployment
 * @param query an object with query parameters
 * @param body an object with the body content
 * @throws RunMlDeploymentRealtimePredictionsHttpError
 */
declare function runMlDeploymentRealtimePredictions(deploymentId: string, query: {
  /** If true, reason why a prediction was not produced included response */
  includeNotPredictedReason?: boolean;
  /** If true, shapley values included in response */
  includeShap?: boolean;
  /** If true, source data included in response */
  includeSource?: boolean;
  /** The name of the feature in the source data to use as an index in the
   * response data. The column will be included with its original name
   * and values. This is intended to allow the caller to join results
   * with source data. */
  index?: string;
}, body: RealtimePredictionInput, options?: ApiCallOptions): Promise<RunMlDeploymentRealtimePredictionsHttpResponse>;
type RunMlDeploymentRealtimePredictionsHttpResponse = {
  data: RealtimePrediction;
  headers: Headers;
  status: 200;
};
type RunMlDeploymentRealtimePredictionsHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Retrieves a list of experiments based on provided filter and sort
 * parameters.
 * @example
 * getMlExperiments(
 *   {
 *     filter: "`filter=ownerId eq UUID and experimentVersionId eq UUID`",
 *     limit: 10,
 *     offset: 32
 *   }
 * )
 *
 * @param query an object with query parameters
 * @throws GetMlExperimentsHttpError
 */
declare function getMlExperiments(query: {
  /** Experiment fields by which you can filter responses within this tenant
   * - `ownerId` ID string - ID of the owner/user that created the experiment
   * - `spaceId` ID string (or empty string for personal space) - ID of the space where the experiment is saved.
   * - `experimentVersionId` UUID string - ID of an experiment version in the experiment
   * - `modelId` UUID string - ID of a model associated with the experiment
   * - `deploymentId` UUID string - ID of a deployment of a model associated with the experiment */
  filter?: string;
  /** Number of results per page. Default is 32. */
  limit?: number;
  /** Number of rows to skip before getting page[size] */
  offset?: number;
  /** Field(s) by which to sort response */
  sort?: EnumSortExperiments;
}, options?: ApiCallOptions): Promise<GetMlExperimentsHttpResponse>;
type GetMlExperimentsHttpResponse = {
  data: ExperimentFindResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetMlExperimentsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetMlExperimentsHttpResponse>;
};
type GetMlExperimentsHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Create an experiment
 *
 * @param body an object with the body content
 * @throws CreateMlExperimentHttpError
 */
declare function createMlExperiment(body: ExperimentInput, options?: ApiCallOptions): Promise<CreateMlExperimentHttpResponse>;
type CreateMlExperimentHttpResponse = {
  data: ExperimentPostResponse;
  headers: Headers;
  status: 201;
};
type CreateMlExperimentHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Delete an experiment
 *
 * @param experimentId ID of the experiment
 * @throws DeleteMlExperimentHttpError
 */
declare function deleteMlExperiment(experimentId: string, options?: ApiCallOptions): Promise<DeleteMlExperimentHttpResponse>;
type DeleteMlExperimentHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteMlExperimentHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Get an experiment
 *
 * @param experimentId ID of the experiment
 * @throws GetMlExperimentHttpError
 */
declare function getMlExperiment(experimentId: string, options?: ApiCallOptions): Promise<GetMlExperimentHttpResponse>;
type GetMlExperimentHttpResponse = {
  data: ExperimentGetResponse;
  headers: Headers;
  status: 200;
};
type GetMlExperimentHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Update an experiment
 *
 * @param experimentId ID of the experiment
 * @param body an object with the body content
 * @throws PatchMlExperimentHttpError
 */
declare function patchMlExperiment(experimentId: string, body: ExperimentPatch, options?: ApiCallOptions): Promise<PatchMlExperimentHttpResponse>;
type PatchMlExperimentHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchMlExperimentHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Returns model recommendations for a specified experiment, including the best-performing, fastest, and most accurate models based on evaluation metrics.
 *
 * @param experimentId ID of the experiment
 * @param body an object with the body content
 * @throws RecommendModelsMlExperimentHttpError
 */
declare function recommendModelsMlExperiment(experimentId: string, body: ExperimentModelRecommendationFilter, options?: ApiCallOptions): Promise<RecommendModelsMlExperimentHttpResponse>;
type RecommendModelsMlExperimentHttpResponse = {
  data: ExperimentModelRecommendationPostResponse;
  headers: Headers;
  status: 200;
};
type RecommendModelsMlExperimentHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * List models
 *
 * @param experimentId ID of the experiment
 * @param query an object with query parameters
 * @throws GetMlExperimentModelsHttpError
 */
declare function getMlExperimentModels(experimentId: string, query: {
  /** Model fields you can filter by:<br><br>
   *
   * - `experimentVersionId` UUID string - Find by experiment version ID
   * - `batchNum` UUID string - Search by batch number
   * - `isHpo` boolean - Is hyperparameter optimization used?
   * - `isMetrics` boolean - Are metrics for regression, binary, or multiclass are used?
   * - `id` UUID string - Find by model ID
   * - `algorithm` enum string - Find by algorithm<br><br>
   *
   *   - Valid algorithms: catboost_classifier, catboost_regression,
   *     elasticnet_regression, gaussian_nb, kneighbors_classifier,
   *     lasso_regression, lasso, lgbm_classifier, lgbm_regression,
   *     linear_regression, logistic_regression, random_forest_classifier,
   *     random_forest_regression, sgd_regression, xgb_classifier,
   *     xgb_regression<br><br>
   *
   * - `status` enum string - find by status<br><br>
   *   - Valid statuses: pending, training_requested, training_done, ready, error<br><br>
   * - `hasDeployment` boolean - Models that are part of a deployment
   * - `nameContains` string - Models with name includes this case-insensitive string
   * - `exactName` string - Models with exact name. Model names may not be unique
   * - `samplingRatio` number - Find models by sampling ratio
   * - `modelState` enum string - State by which to find models<br><br>
   *   - Valid states: `pending, enabled, disabled, inactive` */
  filter?: string;
  /** Number of results per page. Default is 32. */
  limit?: number;
  /** Number of rows to skip before getting page[size] */
  offset?: number;
  /** Field(s) by which to sort response */
  sort?: EnumSortModels;
}, options?: ApiCallOptions): Promise<GetMlExperimentModelsHttpResponse>;
type GetMlExperimentModelsHttpResponse = {
  data: ModelFindResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetMlExperimentModelsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetMlExperimentModelsHttpResponse>;
};
type GetMlExperimentModelsHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Get a model
 *
 * @param experimentId ID of the experiment
 * @param modelId ID of the model
 * @throws GetMlExperimentModelHttpError
 */
declare function getMlExperimentModel(experimentId: string, modelId: string, options?: ApiCallOptions): Promise<GetMlExperimentModelHttpResponse>;
type GetMlExperimentModelHttpResponse = {
  data: ModelGetResponse;
  headers: Headers;
  status: 200;
};
type GetMlExperimentModelHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * List experiment versions
 *
 * @param experimentId ID of the experiment
 * @param query an object with query parameters
 * @throws GetMlExperimentVersionsHttpError
 */
declare function getMlExperimentVersions(experimentId: string, query: {
  /** Experiment version filter options
   * - `isRunning` boolean - Is the experiment version running (training models)?
   * - `isSettled` boolean - Is the experiment version settled?
   * - `status` enum string - Status to filter by. Omit to get models of any status.
   *   - Valid statuses: pending, ready, error, cancelled
   * - `modelId` UUID string - ID of a model associated with the experiment */
  filter?: string;
  /** Number of results per page. Default is 32. */
  limit?: number;
  /** Number of rows to skip before getting page[size] */
  offset?: number;
  /** Field(s) by which to sort response */
  sort?: EnumSortExperimentVersions;
}, options?: ApiCallOptions): Promise<GetMlExperimentVersionsHttpResponse>;
type GetMlExperimentVersionsHttpResponse = {
  data: ExperimentVersionFindResponse;
  headers: Headers;
  status: 200;
  prev?: (options?: ApiCallOptions) => Promise<GetMlExperimentVersionsHttpResponse>;
  next?: (options?: ApiCallOptions) => Promise<GetMlExperimentVersionsHttpResponse>;
};
type GetMlExperimentVersionsHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Creates an experiment version.
 * Poll this version and check its `status` field to determine when models
 * are finished training.
 *
 * @param experimentId ID of the experiment
 * @param body an object with the body content
 * @throws CreateMlExperimentVersionHttpError
 */
declare function createMlExperimentVersion(experimentId: string, body: ExperimentVersionInput, options?: ApiCallOptions): Promise<CreateMlExperimentVersionHttpResponse>;
type CreateMlExperimentVersionHttpResponse = {
  data: ExperimentVersionPostResponse;
  headers: Headers;
  status: 201;
};
type CreateMlExperimentVersionHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Delete an experiment version
 *
 * @param experimentId ID of the experiment
 * @param experimentVersionId ID of the experiment version
 * @throws DeleteMlExperimentVersionHttpError
 */
declare function deleteMlExperimentVersion(experimentId: string, experimentVersionId: string, options?: ApiCallOptions): Promise<DeleteMlExperimentVersionHttpResponse>;
type DeleteMlExperimentVersionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type DeleteMlExperimentVersionHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Get an experiment version
 *
 * @param experimentId ID of the experiment
 * @param experimentVersionId ID of the experiment version
 * @throws GetMlExperimentVersionHttpError
 */
declare function getMlExperimentVersion(experimentId: string, experimentVersionId: string, options?: ApiCallOptions): Promise<GetMlExperimentVersionHttpResponse>;
type GetMlExperimentVersionHttpResponse = {
  data: ExperimentVersionGetResponse;
  headers: Headers;
  status: 200;
};
type GetMlExperimentVersionHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Update an experiment version
 *
 * @param experimentId ID of the experiment
 * @param experimentVersionId ID of the experiment version
 * @param body an object with the body content
 * @throws PatchMlExperimentVersionHttpError
 */
declare function patchMlExperimentVersion(experimentId: string, experimentVersionId: string, body: ExperimentVersionPatch, options?: ApiCallOptions): Promise<PatchMlExperimentVersionHttpResponse>;
type PatchMlExperimentVersionHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type PatchMlExperimentVersionHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Cancels jobs for an experiment version or batch prediction.
 *
 * @param corrType The type of a resource paired with a corrId
 * @param corrId The ID of a correlated resource of corrType
 * @throws CancelMlJobHttpError
 */
declare function cancelMlJob(corrType: string, corrId: string, options?: ApiCallOptions): Promise<CancelMlJobHttpResponse>;
type CancelMlJobHttpResponse = {
  data: void;
  headers: Headers;
  status: 204;
};
type CancelMlJobHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Starts creating profile insights for an experiment dataset.
 * This is an asynchronous operation. A `202 Accepted` response indicates
 * that the process has started successfully. Use the link in the response
 * to check the status.
 *
 * @param body an object with the body content
 * @throws CreateMlProfileInsightHttpError
 */
declare function createMlProfileInsight(body: ProfileInsightsInput, options?: ApiCallOptions): Promise<CreateMlProfileInsightHttpResponse>;
type CreateMlProfileInsightHttpResponse = {
  data: ProfileInsightsGetResponse;
  headers: Headers;
  status: 200 | 202;
};
type CreateMlProfileInsightHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Retrieves profile insights for the specified dataset. If you received a
 * `202 Accepted` response from `POST /ml/profile-insights`, poll this
 * endpoint until a `200 OK` response with `ready` status is returned.
 *
 * @param dataSetId The Qlik catalog dataset ID
 * @param query an object with query parameters
 * @throws GetMlProfileInsightWithQueryHttpError
 */
declare function getMlProfileInsightWithQuery(dataSetId: string, query: {
  /** The optional experiment type for profile-insights GET requests after
   * this is known. */
  experimentType?: ExperimentType;
  /** The optional experimentVersionId query parameter for profile-insights
   * GET requests. When provided after a version has been trained, it gets
   * the profile insights snapshot used in previous versions rather than
   * new results. */
  experimentVersionId?: string;
  /** The optional target feature for profile-insights GET requests after this
   * is known. */
  target?: string;
}, options?: ApiCallOptions): Promise<GetMlProfileInsightWithQueryHttpResponse>;
type GetMlProfileInsightWithQueryHttpResponse = {
  data: ProfileInsightsGetResponse;
  headers: Headers;
  status: 200;
};
type GetMlProfileInsightWithQueryHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Retrieves profile insights for the specified dataset. If you received a
 * `202 Accepted` response from `POST /ml/profile-insights`, poll this
 * endpoint until a `200 OK` response with `ready` status is returned.
 *
 * @param dataSetId The Qlik catalog dataset ID
 * @throws GetMlProfileInsightHttpError
 */
declare function getMlProfileInsight(dataSetId: string, options?: ApiCallOptions): Promise<GetMlProfileInsightHttpResponse>;
type GetMlProfileInsightHttpResponse = {
  data: ProfileInsightsGetResponse;
  headers: Headers;
  status: 200;
};
type GetMlProfileInsightHttpError = {
  data: Failure;
  headers: Headers;
  status: number;
};
/**
 * Clears the cache for ml api requests.
 */
declare function clearCache(): void;
type MlAPI = {
  /**
   * List deployments
   * @example
   * getMlDeployments(
   *   {
   *     filter: "`filter=spaceId eq \"UUID\" and predictionEnabled eq \"true\" and nameContains co \"abc\"`",
   *     limit: 10,
   *     offset: 32
   *   }
   * )
   *
   * @param query an object with query parameters
   * @throws GetMlDeploymentsHttpError
   */
  getMlDeployments: typeof getMlDeployments;
  /**
   * Create a deployment
   *
   * @param body an object with the body content
   * @throws CreateMlDeploymentHttpError
   */
  createMlDeployment: typeof createMlDeployment;
  /**
   * Delete a deployment
   *
   * @param deploymentId ID of the deployment
   * @throws DeleteMlDeploymentHttpError
   */
  deleteMlDeployment: typeof deleteMlDeployment;
  /**
   * Get a deployment
   *
   * @param deploymentId ID of the deployment
   * @throws GetMlDeploymentHttpError
   */
  getMlDeployment: typeof getMlDeployment;
  /**
   * Update a deployment
   *
   * @param deploymentId ID of the deployment
   * @param body an object with the body content
   * @throws PatchMlDeploymentHttpError
   */
  patchMlDeployment: typeof patchMlDeployment;
  /**
   * Activate the model for this deployment
   *
   * @param deploymentId ID of the deployment
   * @throws ActivateModelsMlDeploymentHttpError
   */
  activateModelsMlDeployment: typeof activateModelsMlDeployment;
  /**
   * Deactivate the model for this deployment
   *
   * @param deploymentId ID of the deployment
   * @throws DeactivateModelsMlDeploymentHttpError
   */
  deactivateModelsMlDeployment: typeof deactivateModelsMlDeployment;
  /**
   * Retrieves a list of aliases based on filter parameters for a deployment.
   *
   * @param deploymentId ID of the deployment
   * @param query an object with query parameters
   * @throws GetMlDeploymentAliasesHttpError
   */
  getMlDeploymentAliases: typeof getMlDeploymentAliases;
  /**
   * Creates an alias for a deployment.
   *
   * @param deploymentId ID of the deployment
   * @param body an object with the body content
   * @throws CreateMlDeploymentAliaseHttpError
   */
  createMlDeploymentAliase: typeof createMlDeploymentAliase;
  /**
   * Delete an alias from a deployment.
   *
   * @param deploymentId ID of the deployment
   * @param aliasId ID of the alias
   * @throws DeleteMlDeploymentAliaseHttpError
   */
  deleteMlDeploymentAliase: typeof deleteMlDeploymentAliase;
  /**
   * Retrieves an alias that exists on the deployment.
   *
   * @param deploymentId ID of the deployment
   * @param aliasId ID of the alias
   * @throws GetMlDeploymentAliaseHttpError
   */
  getMlDeploymentAliase: typeof getMlDeploymentAliase;
  /**
   * Updates an alias for a deployment.
   *
   * @param deploymentId ID of the deployment
   * @param aliasId ID of the alias
   * @param body an object with the body content
   * @throws PatchMlDeploymentAliaseHttpError
   */
  patchMlDeploymentAliase: typeof patchMlDeploymentAliase;
  /**
   * Generate predictions in a synchronous request/response
   *
   * @param deploymentId ID of the deployment
   * @param aliasName The name of the ML Deployment Alias that will be used to determine which model should be used to produce predictions
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws RunMlDeploymentAliaseRealtimePredictionsHttpError
   */
  runMlDeploymentAliaseRealtimePredictions: typeof runMlDeploymentAliaseRealtimePredictions;
  /**
   * List batch prediction configurations
   *
   * @param deploymentId ID of the deployment
   * @param query an object with query parameters
   * @throws GetMlDeploymentBatchPredictionsHttpError
   */
  getMlDeploymentBatchPredictions: typeof getMlDeploymentBatchPredictions;
  /**
   * Create a prediction configuration
   *
   * @param deploymentId ID of the deployment
   * @param body an object with the body content
   * @throws CreateMlDeploymentBatchPredictionHttpError
   */
  createMlDeploymentBatchPrediction: typeof createMlDeploymentBatchPrediction;
  /**
   * Delete a batch prediction
   *
   * @param deploymentId ID of the deployment
   * @param batchPredictionId ID of the batch prediction
   * @throws DeleteMlDeploymentBatchPredictionHttpError
   */
  deleteMlDeploymentBatchPrediction: typeof deleteMlDeploymentBatchPrediction;
  /**
   * Retrieve a batch prediction
   *
   * @param deploymentId ID of the deployment
   * @param batchPredictionId ID of the batch prediction
   * @throws GetMlDeploymentBatchPredictionHttpError
   */
  getMlDeploymentBatchPrediction: typeof getMlDeploymentBatchPrediction;
  /**
   * Updates a batch prediction
   *
   * @param deploymentId ID of the deployment
   * @param batchPredictionId ID of the batch prediction
   * @param body an object with the body content
   * @throws PatchMlDeploymentBatchPredictionHttpError
   */
  patchMlDeploymentBatchPrediction: typeof patchMlDeploymentBatchPrediction;
  /**
   * Run a batch prediction
   *
   * @param deploymentId ID of the deployment
   * @param batchPredictionId ID of the batch prediction
   * @throws PredictMlDeploymentBatchPredictionHttpError
   */
  predictMlDeploymentBatchPrediction: typeof predictMlDeploymentBatchPrediction;
  /**
   * Deletes the schedule from a batch prediction.
   *
   * @param deploymentId ID of the deployment
   * @param batchPredictionId ID of the batch prediction
   * @throws DeleteMlDeploymentBatchPredictionScheduleHttpError
   */
  deleteMlDeploymentBatchPredictionSchedule: typeof deleteMlDeploymentBatchPredictionSchedule;
  /**
   * Retrieves the schedule for a batch prediction.
   *
   * @param deploymentId ID of the deployment
   * @param batchPredictionId ID of the batch prediction
   * @throws GetMlDeploymentBatchPredictionScheduleHttpError
   */
  getMlDeploymentBatchPredictionSchedule: typeof getMlDeploymentBatchPredictionSchedule;
  /**
   * Updates the schedule for a batch prediction.
   *
   * @param deploymentId ID of the deployment
   * @param batchPredictionId ID of the batch prediction
   * @param body an object with the body content
   * @throws UpdateMlDeploymentBatchPredictionScheduleHttpError
   */
  updateMlDeploymentBatchPredictionSchedule: typeof updateMlDeploymentBatchPredictionSchedule;
  /**
   * Adds a schedule to a batch prediction.
   *
   * @param deploymentId ID of the deployment
   * @param batchPredictionId ID of the batch prediction
   * @param body an object with the body content
   * @throws SetMlDeploymentBatchPredictionScheduleHttpError
   */
  setMlDeploymentBatchPredictionSchedule: typeof setMlDeploymentBatchPredictionSchedule;
  /**
   * Add deployed models for this deployment
   *
   * @param deploymentId ID of the deployment
   * @param body an object with the body content
   * @throws AddMlDeploymentModelsHttpError
   */
  addMlDeploymentModels: typeof addMlDeploymentModels;
  /**
   * Remove deployed models from this deployment
   *
   * @param deploymentId ID of the deployment
   * @param body an object with the body content
   * @throws RemoveMlDeploymentModelsHttpError
   */
  removeMlDeploymentModels: typeof removeMlDeploymentModels;
  /**
   * Generate predictions in a synchronous request/response
   *
   * @param deploymentId ID of the deployment
   * @param query an object with query parameters
   * @param body an object with the body content
   * @throws RunMlDeploymentRealtimePredictionsHttpError
   */
  runMlDeploymentRealtimePredictions: typeof runMlDeploymentRealtimePredictions;
  /**
   * Retrieves a list of experiments based on provided filter and sort
   * parameters.
   * @example
   * getMlExperiments(
   *   {
   *     filter: "`filter=ownerId eq UUID and experimentVersionId eq UUID`",
   *     limit: 10,
   *     offset: 32
   *   }
   * )
   *
   * @param query an object with query parameters
   * @throws GetMlExperimentsHttpError
   */
  getMlExperiments: typeof getMlExperiments;
  /**
   * Create an experiment
   *
   * @param body an object with the body content
   * @throws CreateMlExperimentHttpError
   */
  createMlExperiment: typeof createMlExperiment;
  /**
   * Delete an experiment
   *
   * @param experimentId ID of the experiment
   * @throws DeleteMlExperimentHttpError
   */
  deleteMlExperiment: typeof deleteMlExperiment;
  /**
   * Get an experiment
   *
   * @param experimentId ID of the experiment
   * @throws GetMlExperimentHttpError
   */
  getMlExperiment: typeof getMlExperiment;
  /**
   * Update an experiment
   *
   * @param experimentId ID of the experiment
   * @param body an object with the body content
   * @throws PatchMlExperimentHttpError
   */
  patchMlExperiment: typeof patchMlExperiment;
  /**
   * Returns model recommendations for a specified experiment, including the best-performing, fastest, and most accurate models based on evaluation metrics.
   *
   * @param experimentId ID of the experiment
   * @param body an object with the body content
   * @throws RecommendModelsMlExperimentHttpError
   */
  recommendModelsMlExperiment: typeof recommendModelsMlExperiment;
  /**
   * List models
   *
   * @param experimentId ID of the experiment
   * @param query an object with query parameters
   * @throws GetMlExperimentModelsHttpError
   */
  getMlExperimentModels: typeof getMlExperimentModels;
  /**
   * Get a model
   *
   * @param experimentId ID of the experiment
   * @param modelId ID of the model
   * @throws GetMlExperimentModelHttpError
   */
  getMlExperimentModel: typeof getMlExperimentModel;
  /**
   * List experiment versions
   *
   * @param experimentId ID of the experiment
   * @param query an object with query parameters
   * @throws GetMlExperimentVersionsHttpError
   */
  getMlExperimentVersions: typeof getMlExperimentVersions;
  /**
   * Creates an experiment version.
   * Poll this version and check its `status` field to determine when models
   * are finished training.
   *
   * @param experimentId ID of the experiment
   * @param body an object with the body content
   * @throws CreateMlExperimentVersionHttpError
   */
  createMlExperimentVersion: typeof createMlExperimentVersion;
  /**
   * Delete an experiment version
   *
   * @param experimentId ID of the experiment
   * @param experimentVersionId ID of the experiment version
   * @throws DeleteMlExperimentVersionHttpError
   */
  deleteMlExperimentVersion: typeof deleteMlExperimentVersion;
  /**
   * Get an experiment version
   *
   * @param experimentId ID of the experiment
   * @param experimentVersionId ID of the experiment version
   * @throws GetMlExperimentVersionHttpError
   */
  getMlExperimentVersion: typeof getMlExperimentVersion;
  /**
   * Update an experiment version
   *
   * @param experimentId ID of the experiment
   * @param experimentVersionId ID of the experiment version
   * @param body an object with the body content
   * @throws PatchMlExperimentVersionHttpError
   */
  patchMlExperimentVersion: typeof patchMlExperimentVersion;
  /**
   * Cancels jobs for an experiment version or batch prediction.
   *
   * @param corrType The type of a resource paired with a corrId
   * @param corrId The ID of a correlated resource of corrType
   * @throws CancelMlJobHttpError
   */
  cancelMlJob: typeof cancelMlJob;
  /**
   * Starts creating profile insights for an experiment dataset.
   * This is an asynchronous operation. A `202 Accepted` response indicates
   * that the process has started successfully. Use the link in the response
   * to check the status.
   *
   * @param body an object with the body content
   * @throws CreateMlProfileInsightHttpError
   */
  createMlProfileInsight: typeof createMlProfileInsight;
  /**
   * Retrieves profile insights for the specified dataset. If you received a
   * `202 Accepted` response from `POST /ml/profile-insights`, poll this
   * endpoint until a `200 OK` response with `ready` status is returned.
   *
   * @param dataSetId The Qlik catalog dataset ID
   * @param query an object with query parameters
   * @throws GetMlProfileInsightWithQueryHttpError
   */
  getMlProfileInsightWithQuery: typeof getMlProfileInsightWithQuery;
  /**
   * Retrieves profile insights for the specified dataset. If you received a
   * `202 Accepted` response from `POST /ml/profile-insights`, poll this
   * endpoint until a `200 OK` response with `ready` status is returned.
   *
   * @param dataSetId The Qlik catalog dataset ID
   * @throws GetMlProfileInsightHttpError
   */
  getMlProfileInsight: typeof getMlProfileInsight;
  /**
   * Clears the cache for ml api requests.
   */
  clearCache: typeof clearCache;
};
/**
 * Functions for the ml api
 */
declare const mlExport: MlAPI;
//#endregion
export { DataType as $, ModelMetricsBinary as $n, createMlDeployment as $r, ExperimentVersionId as $t, BatchPredictionWriteback as A, patchMlDeploymentBatchPrediction as Ai, GetMlExperimentVersionHttpError as An, RealtimePredictionInput as Ar, EnumSortAliases as At, CreateMlDeploymentBatchPredictionHttpError as B, IndexColumn as Bn, SetMlDeploymentBatchPredictionScheduleHttpError as Br, ExperimentGetResponse as Bt, BatchPredictionSchedule as C, getMlExperimentVersions as Ci, GetMlDeploymentsHttpResponse as Cn, PreprocessedInsightColumn as Cr, DeploymentInput as Ct, BatchPredictionSchedulePatch as D, mlExport as Di, GetMlExperimentModelHttpResponse as Dn, RealTimePredictionInputSchema as Dr, EntityDescription as Dt, BatchPredictionScheduleInputAttributes as E, getMlProfileInsightWithQuery as Ei, GetMlExperimentModelHttpError as En, ProfileInsightsInput as Er, DroppedFeature as Et, ColumnTransform as F, removeMlDeploymentModels as Fi, GetMlExperimentsHttpResponse as Fn, ResponseLinks as Fr, EnumSortModels as Ft, CreateMlExperimentHttpResponse as G, ModelAlgorithm as Gn, Transform as Gr, ExperimentModelRecommendationPostResponse as Gt, CreateMlDeploymentHttpError as H, JobType as Hn, SpaceId as Hr, ExperimentInput as Ht, CorrId as I, runMlDeploymentAliaseRealtimePredictions as Ii, GetMlProfileInsightHttpError as In, RunMlDeploymentAliaseRealtimePredictionsHttpError as Ir, ErrorMessage as It, CreateMlProfileInsightHttpError as J, ModelForRecommendations as Jn, UpdatedAt as Jr, ExperimentPostResponse as Jt, CreateMlExperimentVersionHttpError as K, ModelAlgorithmAbbreviation as Kn, UpdateMlDeploymentBatchPredictionScheduleHttpError as Kr, ExperimentPatch as Kt, CorrType as L, runMlDeploymentRealtimePredictions as Li, GetMlProfileInsightHttpResponse as Ln, RunMlDeploymentAliaseRealtimePredictionsHttpResponse as Lr, Errors as Lt, CancelMlJobHttpError as M, patchMlExperimentVersion as Mi, GetMlExperimentVersionsHttpError as Mn, RecommendModelsMlExperimentHttpResponse as Mr, EnumSortDeployments as Mt, CancelMlJobHttpResponse as N, predictMlDeploymentBatchPrediction as Ni, GetMlExperimentVersionsHttpResponse as Nn, RemoveMlDeploymentModelsHttpError as Nr, EnumSortExperimentVersions as Nt, BatchPredictionSchedulePutResponse as O, patchMlDeployment as Oi, GetMlExperimentModelsHttpError as On, RealTimePredictionSchema as Or, EntityId as Ot, ChangeType as P, recommendModelsMlExperiment as Pi, GetMlExperimentsHttpError as Pn, RemoveMlDeploymentModelsHttpResponse as Pr, EnumSortExperiments as Pt, DataSetId as Q, ModelMetrics as Qn, clearCache as Qr, ExperimentVersionGetResponse as Qt, CreateMlDeploymentAliaseHttpError as R, setMlDeploymentBatchPredictionSchedule as Ri, GetMlProfileInsightWithQueryHttpError as Rn, RunMlDeploymentRealtimePredictionsHttpError as Rr, Experiment as Rt, BatchPredictionPostResponse as S, getMlExperimentVersion as Si, GetMlDeploymentsHttpError as Sn, PredictionJobResponse as Sr, DeploymentId as St, BatchPredictionScheduleInput as T, getMlProfileInsight as Ti, GetMlExperimentHttpResponse as Tn, ProfileInsightsGetResponse as Tr, DeploymentPostResponse as Tt, CreateMlDeploymentHttpResponse as U, MlAPI as Un, TenantId as Ur, ExperimentMode as Ut, CreateMlDeploymentBatchPredictionHttpResponse as V, Insights as Vn, SetMlDeploymentBatchPredictionScheduleHttpResponse as Vr, ExperimentId as Vt, CreateMlExperimentHttpError as W, Model as Wn, TrainingDuration as Wr, ExperimentModelRecommendationFilter as Wt, CreatedAt as X, ModelId as Xn, addMlDeploymentModels as Xr, ExperimentVersion as Xt, CreateMlProfileInsightHttpResponse as Y, ModelGetResponse as Yn, activateModelsMlDeployment as Yr, ExperimentType as Yt, CreatedBy as Z, ModelInfo as Zn, cancelMlJob as Zr, ExperimentVersionFindResponse as Zt, BatchPredictionActionResponse as _, getMlDeploymentBatchPredictions as _i, GetMlDeploymentBatchPredictionScheduleHttpResponse as _n, PatchMlExperimentVersionHttpError as _r, DeployedModelIds as _t, AddMlDeploymentModelsHttpResponse as a, deactivateModelsMlDeployment as ai, FeatureInsights as an, ModelsInfo as ar, DeleteMlDeploymentAliaseHttpResponse as at, BatchPredictionInput as b, getMlExperimentModel as bi, GetMlDeploymentHttpError as bn, PredictMlDeploymentBatchPredictionHttpError as br, DeploymentFindResponse as bt, AliasGetResponse as c, deleteMlDeploymentBatchPrediction as ci, FileType as cn, ParentJobId as cr, DeleteMlDeploymentBatchPredictionScheduleHttpError as ct, AliasMode as d, deleteMlExperimentVersion as di, GetMlDeploymentAliaseHttpResponse as dn, PatchMlDeploymentBatchPredictionHttpError as dr, DeleteMlDeploymentHttpResponse as dt, createMlDeploymentAliase as ei, ExperimentVersionInput as en, ModelMetricsMulticlass as er, DatasetOrigin as et, AliasPatch as f, getMlDeployment as fi, GetMlDeploymentAliasesHttpError as fn, PatchMlDeploymentBatchPredictionHttpResponse as fr, DeleteMlExperimentHttpError as ft, BatchPrediction as g, getMlDeploymentBatchPredictionSchedule as gi, GetMlDeploymentBatchPredictionScheduleHttpError as gn, PatchMlExperimentHttpResponse as gr, DeletedAt as gt, AnyType as h, getMlDeploymentBatchPrediction as hi, GetMlDeploymentBatchPredictionHttpResponse as hn, PatchMlExperimentHttpError as hr, DeleteMlExperimentVersionHttpResponse as ht, AddMlDeploymentModelsHttpError as i, createMlProfileInsight as ii, Feature as in, ModelStatus as ir, DeleteMlDeploymentAliaseHttpError as it, BinaryImbalanceSampling as j, patchMlExperiment as ji, GetMlExperimentVersionHttpResponse as jn, RecommendModelsMlExperimentHttpError as jr, EnumSortBatchPredictions as jt, BatchPredictionStatus as k, patchMlDeploymentAliase as ki, GetMlExperimentModelsHttpResponse as kn, RealtimePrediction as kr, EntityName as kt, AliasId as l, deleteMlDeploymentBatchPredictionSchedule as li, FindResponseMeta as ln, PatchMlDeploymentAliaseHttpError as lr, DeleteMlDeploymentBatchPredictionScheduleHttpResponse as lt, AliasPostResponse as m, getMlDeploymentAliases as mi, GetMlDeploymentBatchPredictionHttpError as mn, PatchMlDeploymentHttpResponse as mr, DeleteMlExperimentVersionHttpError as mt, ActivateModelsMlDeploymentHttpError as n, createMlExperiment as ni, ExperimentVersionPostResponse as nn, ModelMetricsTimeseries as nr, DeactivateModelsMlDeploymentHttpError as nt, Alias as o, deleteMlDeployment as oi, FeatureType as on, OutputFile as or, DeleteMlDeploymentBatchPredictionHttpError as ot, AliasPatchItem as p, getMlDeploymentAliase as pi, GetMlDeploymentAliasesHttpResponse as pn, PatchMlDeploymentHttpError as pr, DeleteMlExperimentHttpResponse as pt, CreateMlExperimentVersionHttpResponse as q, ModelFindResponse as qn, UpdateMlDeploymentBatchPredictionScheduleHttpResponse as qr, ExperimentPatchItem as qt, ActivateModelsMlDeploymentHttpResponse as r, createMlExperimentVersion as ri, Failure as rn, ModelState as rr, DeactivateModelsMlDeploymentHttpResponse as rt, AliasFindResponse as s, deleteMlDeploymentAliase as si, FeaturesList as sn, OwnerId as sr, DeleteMlDeploymentBatchPredictionHttpResponse as st, APIError as t, createMlDeploymentBatchPrediction as ti, ExperimentVersionPatch as tn, ModelMetricsRegression as tr, DateIndexes as tt, AliasInput as u, deleteMlExperiment as ui, GetMlDeploymentAliaseHttpError as un, PatchMlDeploymentAliaseHttpResponse as ur, DeleteMlDeploymentHttpError as ut, BatchPredictionFindResponse as v, getMlDeployments as vi, GetMlDeploymentBatchPredictionsHttpError as vn, PatchMlExperimentVersionHttpResponse as vr, DeployedModelsInput as vt, BatchPredictionScheduleGetResponse as w, getMlExperiments as wi, GetMlExperimentHttpError as wn, ProfileInsights as wr, DeploymentPatch as wt, BatchPredictionPatch as x, getMlExperimentModels as xi, GetMlDeploymentHttpResponse as xn, PredictMlDeploymentBatchPredictionHttpResponse as xr, DeploymentGetResponse as xt, BatchPredictionGetResponse as y, getMlExperiment as yi, GetMlDeploymentBatchPredictionsHttpResponse as yn, Pipeline as yr, Deployment as yt, CreateMlDeploymentAliaseHttpResponse as z, updateMlDeploymentBatchPredictionSchedule as zi, GetMlProfileInsightWithQueryHttpResponse as zn, RunMlDeploymentRealtimePredictionsHttpResponse as zr, ExperimentFindResponse as zt };