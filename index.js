import {
  qix_default
} from "./chunks/QZKOA6VR.js";
import {
  auth_default
} from "./chunks/6C6WMV7V.js";
import {
  interceptors_default
} from "./chunks/ZCTVPXGO.js";
import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/runtime-api-generator/runtime-api-generator-common.ts
var methodAbbreviations = {
  G: "GET",
  P: "POST",
  U: "PUT",
  A: "PATCH",
  D: "DELETE",
  O: "OPTIONS",
  H: "HEAD",
  C: "CONNECT",
  T: "TRACE"
};
function methodCharToMethodName(method) {
  try {
    return methodAbbreviations[method];
  } catch {
    throw new Error(`Unknown short hand method:${method}`);
  }
}
var contentTypeAbbreviations = {
  "": "",
  J: "application/json",
  M: "multipart/form-data",
  O: "application/octet-stream",
  T: "text/plain"
};
function contentTypeCharToContentType(typeChar) {
  try {
    return contentTypeAbbreviations[typeChar];
  } catch {
    throw new Error(`Unknown short hand content-type: ${typeChar}`);
  }
}
var ignoredProps = /* @__PURE__ */ new Set(["$$typeof", "then", "__esmodule"]);
function createLazyApiProxy(api2, initFunc) {
  const handler = {
    initiated: false,
    init: () => {
      if (!handler.initiated) {
        initFunc();
        handler.initiated = true;
      }
    },
    ownKeys(target) {
      if (!handler.initiated) {
        handler.init();
      }
      return Object.keys(target);
    },
    has(target, key) {
      if (ignoredProps.has(key)) {
        return false;
      }
      if (!handler.initiated) {
        handler.init();
      }
      return !!target[key];
    },
    get(target, key) {
      if (!ignoredProps.has(key) && !handler.initiated) {
        handler.init();
      }
      return target[key];
    }
  };
  return new Proxy(api2, handler);
}
function parseMiniApi(namespace, def) {
  const api2 = {
    operations: {}
  };
  traverse(namespace, "", def, api2.operations);
  return api2;
}
function traverse(namespace, parentPath, node, operations) {
  Object.entries(node).forEach(([key, value]) => {
    const pathTemplate = key ? `${parentPath}/${key}` : parentPath;
    if (Array.isArray(value)) {
      value.forEach((operationString) => {
        const argNames = [...pathTemplate.matchAll(/\{([\w\-_]+)\}/g)].map((match) => match[1]);
        const [operationNames, options, useInstead] = operationString.split(":");
        const method = methodCharToMethodName(options[0]);
        const [operationName, ...oldOperationNames] = operationNames.split(",");
        const hasQuery = options.indexOf("Q") >= 0;
        const bodyIndex = options.indexOf("B");
        const hasBody = bodyIndex >= 0;
        let contentType = "";
        if (bodyIndex >= 0) {
          if (options.length > bodyIndex) {
            contentType = contentTypeCharToContentType(options[bodyIndex + 1]);
          }
        }
        operations[operationName] = {
          namespace,
          operationName,
          pathTemplate,
          method,
          argNames,
          hasQuery,
          hasBody,
          contentType,
          useInstead,
          oldOperationNames
        };
      });
    } else {
      traverse(namespace, pathTemplate, value, operations);
    }
  });
}
function createClassicApiFn({
  namespace,
  operationName,
  pathTemplate,
  method,
  argNames,
  hasQuery,
  hasBody,
  contentType,
  useInstead
}, hostConfig, interceptors2, enableConsoleWarnings, invokeFetchFnGetter) {
  return (...args) => {
    const pathVariables = {};
    argNames.forEach((argName, index) => {
      pathVariables[argName] = args[index];
    });
    let argPos = argNames.length;
    let query;
    let body;
    if (hasQuery) {
      query = args[argPos];
      argPos++;
    }
    if (hasBody) {
      body = args[argPos];
      argPos++;
    }
    const options = args.length > argPos ? args[argPos] : void 0;
    if (enableConsoleWarnings && useInstead) {
      let fullUseInstead;
      if (useInstead.includes(".")) {
        fullUseInstead = useInstead;
      } else {
        fullUseInstead = `${useInstead}.${operationName}`;
      }
      console.warn(`${namespace}.${operationName} is deprecated, use ${fullUseInstead} instead`);
    }
    const optionsIncludingDefaultHostConfig = hostConfig ? {
      hostConfig,
      ...options
    } : options;
    return invokeFetchFnGetter()(
      namespace,
      {
        method,
        pathTemplate,
        pathVariables,
        query,
        body,
        ...contentType ? { contentType } : {},
        options: optionsIncludingDefaultHostConfig
      },
      interceptors2?.getInterceptors()
    );
  };
}

// src/runtime-api-generator/runtime-api-generator-public.ts
var parsedMiniApis = {};
function apiDefToApiPublic(namespace, def) {
  parsedMiniApis[namespace] = parsedMiniApis[namespace] || parseMiniApi(namespace, def);
  const parsedMiniApi = parsedMiniApis[namespace];
  return (hostConfig, interceptors2) => {
    const lazyApi = {
      clearCache: () => clearApiCache(namespace)
    };
    const initFunc = () => {
      Object.entries(parsedMiniApi.operations).forEach(([operationName, operation]) => {
        lazyApi[operationName] = createClassicApiFn(operation, hostConfig, interceptors2, true, () => invokeFetch);
        operation.oldOperationNames.forEach((oldOperationName) => {
          lazyApi[oldOperationName] = lazyApi[operationName];
        });
      });
    };
    const proxy = createLazyApiProxy(lazyApi, initFunc);
    return proxy;
  };
}

// src/public/interceptors.ts
var interceptors_default2 = interceptors_default;

// src/public/index.ts
var apiKeysMiniModule = apiDefToApiPublic("api-keys", {
  api: {
    v1: {
      "api-keys": {
        "": ["getApiKeys:GQ:", "createApiKey:PBJ:"],
        configs: { "{tenantId}": ["getApiKeysConfig:G:", "patchApiKeysConfig:ABJ:"] },
        "{id}": ["deleteApiKey:D:", "getApiKey:G:", "patchApiKey:ABJ:"]
      }
    }
  }
});
var appsMiniModule = apiDefToApiPublic("apps", {
  api: {
    v1: {
      apps: {
        "": ["createApp:PBJ:"],
        evaluations: {
          "{baseid}": {
            actions: {
              compare: {
                "{comparisonid}": {
                  "": ["getAppEvaluationComparison:GQ:"],
                  actions: { download: ["getAppEvaluationComparisonXml:G:"] }
                }
              }
            }
          },
          "{id}": { "": ["getAppEvaluation:GQ:"], actions: { download: ["getAppEvaluationXml:G:"] } }
        },
        import: ["importApp:PQBO:"],
        privileges: ["getAppsPrivileges:G:"],
        "{appId}": {
          "": ["deleteApp:D:", "getAppInfo:G:", "updateAppInfo:UBJ:"],
          copy: ["copyApp:PBJ:"],
          data: { lineage: ["getAppDataLineage:G:"], metadata: ["getAppDataMetadata:G:"] },
          export: ["exportApp:PQ:"],
          "insight-analyses": {
            "": ["getAppInsightAnalyses:G:"],
            actions: { recommend: ["getAppInsightAnalysisRecommendations:PBJ:"] },
            model: ["getAppInsightAnalysisModel:G:"]
          },
          media: {
            files: { "{path}": ["deleteAppMedia:D:", "getAppMedia:G:", "uploadAppMedia:UBO:"] },
            list: { "{path}": ["getAppMediaList:GQ:"] },
            thumbnail: ["getAppThumbnail:G:"]
          },
          objects: { "{objectId}": { actions: { "change-owner": ["updateAppObjectOwner:PBJ:"] } } },
          owner: ["updateAppOwner:UBJ:"],
          publish: ["publishApp:PBJ:", "republishApp:UBJ:"],
          reloads: {
            logs: { "": ["getAppReloadLogs:G:"], "{reloadId}": ["getAppReloadLog:G:"] },
            metadata: { "{reloadId}": ["getAppReloadMetadata:GQ:"] }
          },
          "report-filters": {
            "": ["getAppReportFilters:GQ:", "createAppReportFilter:PBJ:"],
            actions: { count: ["countAppReportFilters:GQ:"] },
            "{id}": ["deleteAppReportFilter:D:", "getAppReportFilter:G:", "patchAppReportFilter:ABJ:"]
          },
          scripts: {
            "": ["getAppScriptHistory:GQ:", "updateAppScript:PBJ:"],
            "{id}": ["deleteAppScript:D:", "getAppScript:G:", "patchAppScript:ABJ:"]
          },
          space: ["removeAppFromSpace:D:", "moveAppToSpace:UBJ:"]
        },
        "{guid}": { evaluations: ["getAppEvaluations:GQ:", "queueAppEvaluation:P:"] }
      }
    }
  }
});
var assistantsMiniModule = apiDefToApiPublic("assistants", {
  api: {
    v1: {
      assistants: {
        "": ["getAssistants:GQ:", "createAssistant:PBJ:"],
        "{assistantId}": {
          feedback: ["getAssistantFeedback:G:"],
          sources: { plaintexts: ["getAssistantSources:PBJ:"] },
          starters: {
            "": ["getAssistantStarters:GQ:", "createAssistantStarter:PBJ:"],
            "{starterId}": {
              "": ["deleteAssistantStarter:D:", "getAssistantStarter:G:", "updateAssistantStarter:UBJ:"],
              followups: {
                "{followupId}": ["deleteAssistantStarterFollowup:D:", "updateAssistantStarterFollowup:UBJ:"]
              }
            }
          },
          threads: {
            "": ["getAssistantThreads:GQ:", "createAssistantThread:PBJ:"],
            "{threadId}": {
              actions: { invoke: ["invokeAssistantThread:PBJ:"], stream: ["streamAssistantThread:PBJ:"] },
              interactions: {
                "": ["getAssistantThreadInteractions:GQ:", "createAssistantThreadInteraction:PBJ:"],
                "{interactionId}": {
                  "": ["deleteAssistantThreadInteraction:D:", "getAssistantThreadInteraction:G:"],
                  feedback: {
                    "": ["createAssistantThreadInteractionFeedback:PBJ:"],
                    "{feedbackId}": ["patchAssistantThreadInteractionFeedback:ABJ:"]
                  },
                  reviews: ["createAssistantThreadInteractionReview:PBJ:"]
                }
              }
            }
          }
        },
        "{assistantid}": {
          threads: { "{threadid}": ["deleteAssistantThread:D:", "getAssistantThread:G:", "patchAssistantThread:ABJ:"] }
        },
        "{id}": ["deleteAssistant:D:", "getAssistant:G:", "patchAssistant:ABJ:"]
      }
    }
  }
});
var auditsMiniModule = apiDefToApiPublic("audits", {
  api: {
    v1: {
      audits: {
        "": ["getAudits:GQ:"],
        archive: ["getArchivedAudits:GQ:"],
        settings: ["getAuditsSettings:G:"],
        sources: ["getAuditSources:G:"],
        types: ["getAuditTypes:G:"],
        "{id}": ["getAudit:G:"]
      }
    }
  }
});
var automationConnectionsMiniModule = apiDefToApiPublic("automation-connections", {
  api: {
    v1: {
      "automation-connections": {
        "": ["getAutomationConnections:GQ:", "createAutomationConnection:PBJ:"],
        "{id}": {
          "": ["deleteAutomationConnection:DQ:", "getAutomationConnection:G:", "updateAutomationConnection:UBJ:"],
          actions: {
            "change-owner": ["changeOwnerAutomationConnection:PBJ:"],
            "change-space": ["changeSpaceAutomationConnection:PBJ:"],
            check: ["checkAutomationConnection:P:"]
          }
        }
      }
    }
  }
});
var automationsMiniModule = apiDefToApiPublic("automations", {
  api: {
    v1: {
      automations: {
        "": ["getAutomations:GQ:", "createAutomation:PBJ:"],
        usage: ["getAutomationsUsageMetrics:GQ:"],
        "{id}": {
          "": ["deleteAutomation:D:", "getAutomationWithQuery:GQ:", "getAutomation:G:", "updateAutomation:UBJ:"],
          actions: {
            copy: ["copyAutomation:PBJ:"],
            disable: ["disableAutomation:P:"],
            enable: ["enableAutomation:P:"],
            move: ["moveAutomation:PBJ:"]
          },
          runs: {
            "": ["getAutomationRuns:GQ:", "queueAutomationRun:PBJ:"],
            "{runId}": {
              "": ["getAutomationRunWithQuery:GQ:", "getAutomationRun:G:"],
              actions: {
                export: ["getAutomationRunDetails:P:"],
                retry: ["retryAutomationRun:P:"],
                stop: ["stopAutomationRun:P:"]
              }
            }
          }
        }
      }
    }
  }
});
var automlDeploymentsMiniModule = apiDefToApiPublic("automl-deployments", {
  api: {
    v1: {
      "automl-deployments": {
        "{deploymentId}": { "realtime-predictions": ["createAutomlDeploymentRealtimePrediction:PQBJ:"] }
      }
    }
  }
});
var automlPredictionsMiniModule = apiDefToApiPublic("automl-predictions", {
  api: {
    v1: {
      "automl-predictions": {
        "{predictionId}": {
          "coordinate-shap": ["getAutomlPredictionCoordinateShap:GQ:"],
          jobs: ["createAutomlPredictionJob:P:"],
          "not-predicted-reasons": ["getAutomlPredictionNotPredictedReasons:GQ:"],
          predictions: ["getAutomlPredictionPredictions:GQ:"],
          shap: ["getAutomlPredictionShap:GQ:"],
          source: ["getAutomlPredictionSource:GQ:"]
        }
      }
    }
  }
});
var brandsMiniModule = apiDefToApiPublic("brands", {
  api: {
    v1: {
      brands: {
        "": ["getBrands:GQ:", "createBrand:PBM:"],
        active: ["getActiveBrand:G:"],
        "{brand-id}": {
          "": ["deleteBrand:D:", "getBrand:G:", "patchBrand:ABJ:"],
          actions: { activate: ["activateBrand:PB:"], deactivate: ["deactivateBrand:PB:"] },
          files: {
            "{brand-file-id}": [
              "deleteBrandFile:D:",
              "getBrandFile:G:",
              "createBrandFile:PBM:",
              "updateBrandFile:UBM:"
            ]
          }
        }
      }
    }
  }
});
var collectionsMiniModule = apiDefToApiPublic("collections", {
  api: {
    v1: {
      collections: {
        "": ["getCollections:GQ:", "createCollection:PBJ:"],
        favorites: ["getFavoritesCollection:G:"],
        "{collectionId}": {
          "": ["deleteCollection:D:", "getCollection:G:", "patchCollection:ABJ:", "updateCollection:UBJ:"],
          items: {
            "": ["getCollectionItems:GQ:", "addCollectionItem:PBJ:"],
            "{itemId}": ["deleteCollectionItem:D:", "getCollectionItem:G:"]
          }
        }
      }
    }
  }
});
var conditionsMiniModule = apiDefToApiPublic("conditions", {
  api: {
    v1: {
      conditions: {
        "": ["createCondition:PBJ:"],
        previews: { "": ["createConditionPreview:PBJ:"], "{id}": ["getConditionPreview:G:"] },
        settings: ["getConditionsSettings:G:", "setConditionsSettings:UBJ:"],
        "{id}": {
          "": ["deleteCondition:D:", "getCondition:G:", "patchCondition:ABJ:"],
          evaluations: {
            "": ["createConditionEvaluation:PBJ:"],
            "{evaluationId}": ["deleteConditionEvaluation:D:", "getConditionEvaluation:G:"]
          }
        }
      }
    }
  }
});
var consumptionMiniModule = apiDefToApiPublic("consumption", {
  api: { v1: { consumption: { executions: ["getConsumptionExecutions:GQ:"] } } }
});
var cspOriginsMiniModule = apiDefToApiPublic("csp-origins", {
  api: {
    v1: {
      "csp-origins": {
        "": ["getCSPEntries:GQ:", "createCSPEntry:PBJ:"],
        actions: { "generate-header": ["getCSPHeader:G:"] },
        "{id}": ["deleteCSPEntry:D:", "getCSPEntry:G:", "updateCSPEntry:UBJ:"]
      }
    }
  }
});
var csrfTokenMiniModule = apiDefToApiPublic("csrf-token", {
  api: { v1: { "csrf-token": ["getCsrfToken:G:"] } }
});
var dataAlertsMiniModule = apiDefToApiPublic("data-alerts", {
  api: {
    v1: {
      "data-alerts": {
        "": ["getDataAlerts:GQ:", "createDataAlert:PBJ:"],
        actions: { trigger: ["triggerDataAlerts:PBJ:"], validate: ["validateDataAlerts:PBJ:"] },
        settings: ["getDataAlertsSettings:G:", "setDataAlertsSettings:UBJ:"],
        "{alertId}": {
          "": ["deleteDataAlert:D:", "getDataAlert:G:", "patchDataAlert:ABJ:"],
          condition: ["getDataAlertCondition:G:"],
          executions: { "{executionId}": ["deleteDataAlertExecution:D:", "getDataAlertExecution:G:"] },
          "recipient-stats": ["getDataAlertRecipientStats:GQ:"]
        },
        "{taskId}": {
          executions: {
            "": ["getDataAlertExecutions:GQ:"],
            stats: ["getDataAlertExecutionsStats:GQ:"],
            "{executionId}": { evaluations: ["getDataAlertExecutionEvaluations:G:"] }
          }
        }
      }
    }
  }
});
var dataAssetsMiniModule = apiDefToApiPublic("data-assets", {
  api: {
    v1: {
      "data-assets": {
        "": ["deleteDataAssets:DBJ:", "createDataAsset:PBJ:"],
        "{data-asset-id}": ["getDataAsset:GQ:", "patchDataAsset:ABJ:", "updateDataAsset:UBJ:"]
      }
    }
  }
});
var dataConnectionsMiniModule = apiDefToApiPublic("data-connections", {
  api: {
    v1: {
      "data-connections": {
        "": ["getDataConnections:GQ:", "createDataConnection:PBJ:"],
        actions: {
          delete: ["deleteDataConnections:PBJ:"],
          duplicate: ["duplicateDataAConnection:PBJ:"],
          update: ["updateDataConnections:PBJ:"]
        },
        "{qID}": [
          "deleteDataConnection:DQ:",
          "getDataConnection:GQ:",
          "patchDataConnection:AQBJ:",
          "updateDataConnection:UQBJ:"
        ]
      }
    }
  }
});
var dataCredentialsMiniModule = apiDefToApiPublic("data-credentials", {
  api: {
    v1: {
      "data-credentials": {
        actions: { "filter-orphan": ["filterOrphanedDataCredentials:PBJ:"] },
        "{qID}": [
          "deleteDataCredential:DQ:",
          "getDataCredential:GQ:",
          "patchDataCredential:AQBJ:",
          "updateDataCredential:UQBJ:"
        ]
      }
    }
  }
});
var dataFilesMiniModule = apiDefToApiPublic("data-files", {
  api: {
    v1: {
      "data-files": {
        "": ["getDataFiles:GQ:", "uploadDataFile:PBM:"],
        actions: { "change-space": ["moveDataFiles:PBJ:"], delete: ["deleteDataFiles:PBJ:"] },
        connections: { "": ["getDataFilesConnections:GQ:"], "{id}": ["getDataFileConnection:G:"] },
        quotas: ["getDataFilesQuotas:G:"],
        "{id}": {
          "": ["deleteDataFile:D:", "getDataFile:G:", "reuploadDataFile:UBM:"],
          actions: { "change-owner": ["changeDataFileOwner:PBJ:"], "change-space": ["moveDataFile:PBJ:"] }
        }
      }
    }
  }
});
var dataQualitiesMiniModule = apiDefToApiPublic("data-qualities", {
  api: {
    v1: {
      "data-qualities": {
        computations: {
          "": ["triggerDataQualitiesComputation:PBJ:"],
          "{computationId}": ["getDataQualitiesComputation:G:"]
        },
        "global-results": ["getDataQualitiesGlobalResults:GQ:"]
      }
    }
  }
});
var dataSetsMiniModule = apiDefToApiPublic("data-sets", {
  api: {
    v1: {
      "data-sets": {
        "": ["deleteDataSets:DBJ:", "createDataSet:PBJ:"],
        "{data-set-id}": {
          "": ["getDataSet:GQ:", "patchDataSet:ABJ:", "updateDataSet:UBJ:"],
          profiles: ["getDataSetProfiles:GQ:"]
        }
      }
    }
  }
});
var dataSourcesMiniModule = apiDefToApiPublic("data-sources", {
  api: {
    v1: {
      "data-sources": {
        "": ["getDataSources:GQ:"],
        "{dataSourceId}": { "api-specs": ["getDataSourceApiSpecs:G:"], gateways: ["getDataSourceGateways:GQ:"] }
      }
    }
  }
});
var dataStoresMiniModule = apiDefToApiPublic("data-stores", {
  api: {
    v1: {
      "data-stores": {
        "": ["deleteDataStores:DBJ:", "getDataStores:GQ:", "createDataStore:PBJ:"],
        "{data-store-ids}": {
          "data-assets": {
            "": ["deleteDataStoreDataAssets:D:", "getDataStoreDataAssets:GQ:"],
            "{data-asset-ids}": {
              "data-sets": ["deleteDataStoreDataAssetDataSets:D:", "getDataStoreDataAssetDataSets:GQ:"]
            }
          }
        },
        "{data-store-id}": ["getDataStore:GQ:", "patchDataStore:ABJ:", "updateDataStore:UBJ:"]
      }
    }
  }
});
var dcaasMiniModule = apiDefToApiPublic("dcaas", {
  api: {
    v1: {
      dcaas: {
        actions: {
          "data-connections": {
            "": ["dataConnectionsDcaas:PBJ:"],
            "api-specs": ["dataConnectionsDcaasApiSpecs:GQ:"],
            "{connectionId}": ["dataConnectionsDcaa:G:"]
          }
        }
      }
    }
  }
});
var diProjectsMiniModule = apiDefToApiPublic("di-projects", {
  api: {
    v1: {
      "di-projects": {
        "": ["getDiProjects:GQ:", "createDiProject:PBJ:"],
        actions: { "{actionId}": ["getDiProject:GQ:"] },
        "{projectId}": {
          actions: {
            export: ["exportDiProject:PBJ:"],
            import: ["importDiProject:PBM:"],
            prepare: ["prepareDiProject:PBJ:"],
            validate: ["validateDiProject:PBJ:"]
          },
          bindings: ["getDiProjectExportVariables:GQ:", "setDiProjectExportVariables:UBJ:"],
          "di-tasks": {
            "": ["getDiProjectDiTasks:G:"],
            "{dataTaskId}": {
              "": ["getDiProjectDiTask:G:"],
              actions: { prepare: ["prepareDiProjectDiTask:PBJ:"], validate: ["validateDiProjectDiTask:PBJ:"] },
              runtime: {
                actions: { start: ["startDiProjectDiTaskRuntime:P:"], stop: ["stopDiProjectDiTaskRuntime:P:"] },
                state: ["getDiProjectDiTaskRuntimeState:G:"]
              }
            }
          }
        }
      }
    }
  }
});
var directAccessAgentsMiniModule = apiDefToApiPublic("direct-access-agents", {
  api: {
    v1: {
      "direct-access-agents": {
        "{agentId}": {
          actions: { "{agentAction}": ["restartDirectAccessAgent:P:"] },
          configurations: ["getDirectAccessAgentConfiguration:GQ:", "patchDirectAccessAgentConfiguration:ABJ:"],
          connectors: {
            "{connectorType}": {
              files: {
                "": ["getDirectAccessAgentConnectorFiles:GQ:", "getDirectAccessAgentConnectorFilesWithoutQuery:G:"],
                "{fileType}": [
                  "getDirectAccessAgentConnectorFile:G:",
                  "updateDirectAccessAgentConnectorFile:UQBJ:",
                  "updateDirectAccessAgentConnectorFileWithoutQuery:UBJ:"
                ]
              }
            }
          }
        }
      }
    }
  }
});
var encryptionMiniModule = apiDefToApiPublic("encryption", {
  api: {
    v1: {
      encryption: {
        keyproviders: {
          "": ["getEncryptionKeyproviders:G:", "createEncryptionKeyprovider:PBJ:"],
          actions: {
            list: ["listEncryptionKeyproviders:G:"],
            "reset-to-default-provider": ["resetEncryptionKeyproviders:P:"]
          },
          migration: { actions: { details: ["getEncryptionKeyprovidersMigrationDetails:G:"] } },
          "{arnFingerPrint}": {
            "": ["deleteEncryptionKeyprovider:D:", "getEncryptionKeyprovider:G:", "patchEncryptionKeyprovider:ABJ:"],
            actions: { migrate: ["migrateEncryptionKeyprovider:P:"], test: ["testEncryptionKeyprovider:P:"] }
          }
        }
      }
    }
  }
});
var extensionsMiniModule = apiDefToApiPublic("extensions", {
  api: {
    v1: {
      extensions: {
        "": ["getExtensions:G:", "uploadExtension:PBM:"],
        "{id}": {
          "": ["deleteExtension:D:", "getExtension:G:", "patchExtension:ABM:"],
          file: { "": ["downloadExtension:G:"], "{filepath}": ["downloadFileFromExtension:G:"] }
        }
      }
    }
  }
});
var glossariesMiniModule = apiDefToApiPublic("glossaries", {
  api: {
    v1: {
      glossaries: {
        "": ["getGlossaries:GQ:", "createGlossary:PBJ:"],
        actions: { import: ["importGlossary:PQBJ:"] },
        "{id}": {
          "": ["deleteGlossary:D:", "getGlossary:G:", "patchGlossary:ABJ:", "updateGlossary:UBJ:"],
          actions: { export: ["exportGlossary:G:"] },
          categories: {
            "": ["getGlossaryCategories:GQ:", "createGlossaryCategory:PBJ:"],
            "{categoryId}": [
              "deleteGlossaryCategory:D:",
              "getGlossaryCategory:G:",
              "patchGlossaryCategory:ABJ:",
              "updateGlossaryCategory:UBJ:"
            ]
          },
          terms: {
            "": ["getGlossaryTerms:GQ:", "createGlossaryTerm:PBJ:"],
            "{termId}": {
              "": ["deleteGlossaryTerm:D:", "getGlossaryTerm:G:", "patchGlossaryTerm:ABJ:", "updateGlossaryTerm:UBJ:"],
              actions: { "change-status": ["changeGlossaryTermStatus:PQ:"] },
              links: ["getGlossaryTermLinks:GQ:", "createGlossaryTermLink:PBJ:"],
              revisions: ["getGlossaryTermRevisions:GQ:"]
            }
          }
        }
      }
    }
  }
});
var groupsMiniModule = apiDefToApiPublic("groups", {
  api: {
    v1: {
      groups: {
        "": ["getGroups:GQ:", "createGroup:PBJ:"],
        actions: { filter: ["filterGroups:PQBJ:"] },
        settings: ["getGroupsSettings:G:", "patchGroupsSettings:ABJ:"],
        "{groupId}": ["deleteGroup:D:", "getGroup:G:", "patchGroup:ABJ:"]
      }
    }
  }
});
var identityProvidersMiniModule = apiDefToApiPublic("identity-providers", {
  api: {
    v1: {
      "identity-providers": {
        "": ["getIdps:GQ:", "createIdp:PBJ:"],
        ".well-known": { "metadata.json": ["getIdpWellKnownMetaData:G:"] },
        me: { meta: ["getMyIdpMeta:G:"] },
        status: ["getIdpStatuses:G:"],
        "{id}": ["deleteIdp:D:", "getIdp:G:", "patchIdp:ABJ:"]
      }
    }
  }
});
var itemsMiniModule = apiDefToApiPublic("items", {
  api: {
    v1: {
      items: {
        "": ["getItems:GQ:"],
        settings: ["getItemsSettings:G:", "patchItemsSettings:ABJ:"],
        "{itemId}": {
          "": ["deleteItem:D:", "getItem:G:", "updateItem:UBJ:"],
          collections: ["getItemCollections:GQ:"],
          publisheditems: ["getPublishedItems:GQ:"]
        }
      }
    }
  }
});
var knowledgebasesMiniModule = apiDefToApiPublic("knowledgebases", {
  api: {
    v1: {
      knowledgebases: {
        "": ["getKnowledgebases:GQ:", "createKnowledgebase:PBJ:"],
        "{id}": {
          "": ["deleteKnowledgebase:D:", "getKnowledgebase:G:", "patchKnowledgebase:ABJ:"],
          datasources: {
            "": ["createKnowledgebaseDatasource:PBJ:"],
            "{datasourceId}": {
              "": ["deleteKnowledgebaseDatasource:D:", "updateKnowledgebaseDatasource:UBJ:"],
              actions: {
                cancel: ["cancelKnowledgebaseDatasource:P:"],
                download: ["downloadKnowledgebaseDatasource:PBJ:"],
                sync: ["syncKnowledgebaseDatasource:PQ:"]
              },
              histories: {
                "": ["getKnowledgebaseDatasourceHistories:GQ:"],
                "{syncId}": ["getKnowledgebaseDatasourceHistory:G:"]
              },
              schedules: [
                "deleteKnowledgebaseDatasourceSchedule:D:",
                "getKnowledgebaseDatasourceSchedule:G:",
                "createKnowledgebaseDatasourceSchedule:PBJ:"
              ]
            }
          },
          histories: ["getKnowledgebaseHistories:GQ:"]
        }
      }
    }
  }
});
var licensesMiniModule = apiDefToApiPublic("licenses", {
  api: {
    v1: {
      licenses: {
        assignments: {
          "": ["getLicenseAssignments:GQ:"],
          actions: {
            add: ["addLicenseAssignments:PBJ:"],
            delete: ["deleteLicenseAssignments:PBJ:"],
            update: ["updateLicenseAssignments:PBJ:"]
          }
        },
        consumption: ["getLicenseConsumption:GQ:"],
        overview: ["getLicenseOverview:G:"],
        settings: ["getLicenseSettings:G:", "updateLicenseSettings:UBJ:"],
        status: ["getLicenseStatus:G:"]
      }
    }
  }
});
var lineageGraphsMiniModule = apiDefToApiPublic("lineage-graphs", {
  api: {
    v1: {
      "lineage-graphs": {
        impact: {
          "{id}": {
            actions: { expand: ["expandLineageGraphImpact:GQ:"], search: ["searchLineageGraphImpact:GQ:"] },
            overview: ["getLineageGraphImpactOverview:GQ:"],
            source: ["getLineageGraphImpactSource:G:"]
          }
        },
        nodes: {
          "{id}": {
            "": ["getLineageGraphNode:GQ:"],
            actions: { expand: ["expandLineageGraphNode:GQ:"], search: ["searchLineageGraphNode:GQ:"] },
            overview: ["createLineageGraphNodeOverview:PQBJ:"]
          }
        }
      }
    }
  }
});
var mlMiniModule = apiDefToApiPublic("ml", {
  api: {
    v1: {
      ml: {
        deployments: {
          "": ["getMlDeployments:GQ:", "createMlDeployment:PBJ:"],
          "{deploymentId}": {
            "": ["deleteMlDeployment:D:", "getMlDeployment:G:", "patchMlDeployment:ABJ:"],
            actions: {
              "activate-models": ["activateModelsMlDeployment:P:"],
              "deactivate-models": ["deactivateModelsMlDeployment:P:"]
            },
            aliases: {
              "": ["getMlDeploymentAliases:GQ:", "createMlDeploymentAliase:PBJ:"],
              "{aliasId}": ["deleteMlDeploymentAliase:D:", "getMlDeploymentAliase:G:", "patchMlDeploymentAliase:ABJ:"],
              "{aliasName}": {
                "realtime-predictions": { actions: { run: ["runMlDeploymentAliaseRealtimePredictions:PQBJ:"] } }
              }
            },
            "batch-predictions": {
              "": ["getMlDeploymentBatchPredictions:GQ:", "createMlDeploymentBatchPrediction:PBJ:"],
              "{batchPredictionId}": {
                "": [
                  "deleteMlDeploymentBatchPrediction:D:",
                  "getMlDeploymentBatchPrediction:G:",
                  "patchMlDeploymentBatchPrediction:ABJ:"
                ],
                actions: { predict: ["predictMlDeploymentBatchPrediction:P:"] },
                schedule: [
                  "deleteMlDeploymentBatchPredictionSchedule:D:",
                  "getMlDeploymentBatchPredictionSchedule:G:",
                  "updateMlDeploymentBatchPredictionSchedule:ABJ:",
                  "setMlDeploymentBatchPredictionSchedule:UBJ:"
                ]
              }
            },
            models: { actions: { add: ["addMlDeploymentModels:PBJ:"], remove: ["removeMlDeploymentModels:PBJ:"] } },
            "realtime-predictions": { actions: { run: ["runMlDeploymentRealtimePredictions:PQBJ:"] } }
          }
        },
        experiments: {
          "": ["getMlExperiments:GQ:", "createMlExperiment:PBJ:"],
          "{experimentId}": {
            "": ["deleteMlExperiment:D:", "getMlExperiment:G:", "patchMlExperiment:ABJ:"],
            actions: { "recommend-models": ["recommendModelsMlExperiment:PBJ:"] },
            models: { "": ["getMlExperimentModels:GQ:"], "{modelId}": ["getMlExperimentModel:G:"] },
            versions: {
              "": ["getMlExperimentVersions:GQ:", "createMlExperimentVersion:PBJ:"],
              "{experimentVersionId}": [
                "deleteMlExperimentVersion:D:",
                "getMlExperimentVersion:G:",
                "patchMlExperimentVersion:ABJ:"
              ]
            }
          }
        },
        jobs: { "{corrType}": { "{corrId}": { actions: { cancel: ["cancelMlJob:P:"] } } } },
        "profile-insights": {
          "": ["createMlProfileInsight:PBJ:"],
          "{dataSetId}": ["getMlProfileInsightWithQuery:GQ:", "getMlProfileInsight:G:"]
        }
      }
    }
  }
});
var notesMiniModule = apiDefToApiPublic("notes", {
  api: { v1: { notes: { settings: ["getNotesSettings:G:", "setNotesSettings:UBJ:"] } } }
});
var notificationsMiniModule = apiDefToApiPublic("notifications", {
  api: { v1: { notifications: ["getNotifications:GQ:"] } }
});
var oauthClientsMiniModule = apiDefToApiPublic("oauth-clients", {
  api: {
    v1: {
      "oauth-clients": {
        "": ["getOAuthClients:GQ:", "createOAuthClient:PBJ:"],
        "{id}": {
          "": ["deleteOAuthClient:D:", "getOAuthClient:G:", "patchOAuthClient:ABJ:"],
          actions: { publish: ["publishOAuthClient:P:"] },
          "client-secrets": { "": ["createOAuthClientSecret:P:"], "{hint}": ["deleteOAuthClientSecret:D:"] },
          "connection-configs": {
            me: [
              "deleteOAuthClientConnectionConfig:D:",
              "getOAuthClientConnectionConfig:G:",
              "patchOAuthClientConnectionConfig:ABJ:"
            ]
          }
        }
      }
    }
  }
});
var oauthTokensMiniModule = apiDefToApiPublic("oauth-tokens", {
  api: { v1: { "oauth-tokens": { "": ["getOauthTokens:GQ:"], "{tokenId}": ["deleteOauthToken:D:"] } } }
});
var questionsMiniModule = apiDefToApiPublic("questions", {
  api: { v1: { questions: { actions: { ask: ["askQuestions:PBJ:"], filter: ["filterQuestions:PQBJ:"] } } } }
});
var quotasMiniModule = apiDefToApiPublic("quotas", {
  api: { v1: { quotas: { "": ["getQuotas:GQ:"], "{id}": ["getQuota:GQ:"] } } }
});
var reloadTasksMiniModule = apiDefToApiPublic("reload-tasks", {
  api: {
    v1: {
      "reload-tasks": {
        "": ["getReloadTasks:GQ:", "createReloadTask:PBJ:"],
        "{taskId}": ["deleteReloadTask:D:", "getReloadTask:G:", "updateReloadTask:UBJ:"]
      }
    }
  }
});
var reloadsMiniModule = apiDefToApiPublic("reloads", {
  api: {
    v1: {
      reloads: {
        "": ["getReloads:GQ:", "queueReload:PBJ:"],
        "{reloadId}": { "": ["getReload:G:"], actions: { cancel: ["cancelReload:P:"] } }
      }
    }
  }
});
var reportTemplatesMiniModule = apiDefToApiPublic("report-templates", {
  api: {
    v1: {
      "report-templates": {
        "": ["getReportTemplates:GQ:", "createReportTemplate:PBJ:"],
        "{id}": {
          "": [
            "deleteReportTemplate:D:",
            "getReportTemplate:G:",
            "patchReportTemplate:ABJ:",
            "updateReportTemplate:UBJ:"
          ],
          actions: { download: ["downloadReportTemplate:P:"] }
        }
      }
    }
  }
});
var reportsMiniModule = apiDefToApiPublic("reports", {
  api: { v1: { reports: { "": ["createReport:PBJ:"], "{id}": { status: ["getReportStatus:G:"] } } } }
});
var rolesMiniModule = apiDefToApiPublic("roles", {
  api: {
    v1: {
      roles: { "": ["getRoles:GQ:", "createRole:PBJ:"], "{id}": ["deleteRole:D:", "getRole:G:", "patchRole:ABJ:"] }
    }
  }
});
var sharingTasksMiniModule = apiDefToApiPublic("sharing-tasks", {
  api: {
    v1: {
      "sharing-tasks": {
        "": ["getSharingTasks:GQ:", "createSharingTask:PBJ:"],
        actions: { execute: ["executeSharingTasks:PBJ:"] },
        settings: [
          "getSharingTasksSettings:G:",
          "updateSharingTasksSettings:ABJ:",
          "configureSharingTasksSettings:UBJ:"
        ],
        "{taskId}": {
          "": ["deleteSharingTask:D:", "getSharingTask:GQ:", "patchSharingTask:ABJ:"],
          actions: { cancel: ["cancelSharingTask:P:"] }
        }
      }
    }
  }
});
var spacesMiniModule = apiDefToApiPublic("spaces", {
  api: {
    v1: {
      spaces: {
        "": ["getSpaces:GQ:", "createSpace:PBJ:"],
        types: ["getSpaceTypes:G:"],
        "{spaceId}": {
          "": ["deleteSpace:D:", "getSpace:G:", "patchSpace:ABJ:", "updateSpace:UBJ:"],
          assignments: {
            "": ["getSpaceAssignments:GQ:", "createSpaceAssignment:PBJ:"],
            "{assignmentId}": ["deleteSpaceAssignment:D:", "getSpaceAssignment:G:", "updateSpaceAssignment:UBJ:"]
          },
          shares: {
            "": ["getSpaceShares:GQ:", "createSpaceShare:PBJ:"],
            "{shareId}": ["deleteSpaceShare:D:", "getSpaceShare:G:", "patchShare:ABJ:"]
          }
        }
      }
    }
  }
});
var tasksMiniModule = apiDefToApiPublic("tasks", {
  api: {
    v1: {
      tasks: {
        "": ["getTasks:GQ:", "createTask:PQBJ:"],
        resources: { "{id}": { runs: ["getTasksResourceRuns:GQ:"] } },
        "{id}": {
          "": ["deleteTask:D:", "getTask:G:", "updateTask:UBJ:"],
          actions: { start: ["startTask:PQ:"] },
          runs: { "": ["getTaskRuns:GQ:"], last: ["getLastTaskRun:G:"], "{runId}": { log: ["getTaskRunLog:G:"] } }
        }
      }
    }
  }
});
var tempContentsMiniModule = apiDefToApiPublic("temp-contents", {
  api: {
    v1: {
      "temp-contents": {
        "": ["uploadTempFile:PQBO:"],
        "{id}": { "": ["downloadTempFile:GQ:"], details: ["getTempFileDetails:G:"] }
      }
    }
  }
});
var tenantsMiniModule = apiDefToApiPublic("tenants", {
  api: {
    v1: {
      tenants: {
        "": ["createTenant:PBJ:"],
        me: ["getMyTenant:G:"],
        "{tenantId}": {
          "": ["getTenant:G:", "patchTenant:ABJ:"],
          actions: { deactivate: ["deactivateTenant:PBJ:"], reactivate: ["reactivateTenant:PBJ:"] }
        }
      }
    }
  }
});
var themesMiniModule = apiDefToApiPublic("themes", {
  api: {
    v1: {
      themes: {
        "": ["getThemes:G:", "uploadTheme:PBM:"],
        "{id}": {
          "": ["deleteTheme:D:", "getTheme:G:", "patchTheme:ABM:"],
          file: { "": ["downloadTheme:G:"], "{filepath}": ["downloadFileFromTheme:G:"] }
        }
      }
    }
  }
});
var transportsMiniModule = apiDefToApiPublic("transports", {
  api: {
    v1: {
      transports: {
        "email-config": {
          "": ["deleteEmailConfig:D:", "getEmailConfig:G:", "patchEmailConfig:ABJ:"],
          actions: {
            "send-test-email": ["sendTestEmail:PBJ:"],
            validate: ["validateEmailConfig:P:"],
            "verify-connection": ["verifyEmailConfigConnection:P:"]
          }
        }
      }
    }
  }
});
var uiConfigMiniModule = apiDefToApiPublic("ui-config", {
  api: {
    v1: {
      "ui-config": {
        "pinned-links": {
          "": ["getUiConfigPinnedLinks:G:", "createUiConfigPinnedLink:PBJ:"],
          actions: {
            "bulk-create-pinned-links": ["createUiConfigPinnedLinks:PBJ:"],
            "delete-all-pinned-links": ["deleteAllUiConfigPinnedLinks:P:"]
          },
          "{id}": ["deleteUiConfigPinnedLink:D:", "getUiConfigPinnedLink:G:", "patchUiConfigPinnedLink:ABJ:"]
        }
      }
    }
  }
});
var usersMiniModule = apiDefToApiPublic("users", {
  api: {
    v1: {
      users: {
        "": ["getUsers:GQ:", "createUser:PBJ:"],
        actions: { count: ["countUsers:GQ:"], filter: ["filterUsers:PQBJ:"], invite: ["inviteUsers:PBJ:"] },
        me: ["getMyUser:G:"],
        "{userId}": ["deleteUser:D:", "getUser:GQ:", "patchUser:ABJ:"]
      }
    }
  }
});
var webIntegrationsMiniModule = apiDefToApiPublic("web-integrations", {
  api: {
    v1: {
      "web-integrations": {
        "": ["getWebIntegrations:GQ:", "createWebIntegration:PBJ:"],
        "{id}": ["deleteWebIntegration:D:", "getWebIntegration:G:", "patchWebIntegration:ABJ:"]
      }
    }
  }
});
var webNotificationsMiniModule = apiDefToApiPublic("web-notifications", {
  api: {
    v1: {
      "web-notifications": {
        "": ["getNotifications:GQ:"],
        all: ["deleteNotifications:D:", "patchNotifications:ABJ:"],
        "{notificationId}": ["deleteNotification:D:", "getNotification:G:", "patchNotification:ABJ:"]
      }
    }
  }
});
var webhooksMiniModule = apiDefToApiPublic("webhooks", {
  api: {
    v1: {
      webhooks: {
        "": ["getWebhooks:GQ:", "createWebhook:PBJ:"],
        "event-types": ["getWebhookEventTypes:G:"],
        "{id}": {
          "": ["deleteWebhook:D:", "getWebhook:G:", "patchWebhook:ABJ:", "updateWebhook:UBJ:"],
          deliveries: {
            "": ["getWebhookDeliveries:GQ:"],
            "{deliveryId}": { "": ["getWebhookDelivery:G:"], actions: { resend: ["resendWebhookDelivery:P:"] } }
          }
        }
      }
    }
  }
});
var apiKeys = apiKeysMiniModule(void 0, interceptors_default2);
var apps = appsMiniModule(void 0, interceptors_default2);
var assistants = assistantsMiniModule(void 0, interceptors_default2);
var audits = auditsMiniModule(void 0, interceptors_default2);
var auth = auth_default;
var automationConnections = automationConnectionsMiniModule(void 0, interceptors_default2);
var automations = automationsMiniModule(void 0, interceptors_default2);
var automlDeployments = automlDeploymentsMiniModule(void 0, interceptors_default2);
var automlPredictions = automlPredictionsMiniModule(void 0, interceptors_default2);
var brands = brandsMiniModule(void 0, interceptors_default2);
var collections = collectionsMiniModule(void 0, interceptors_default2);
var conditions = conditionsMiniModule(void 0, interceptors_default2);
var consumption = consumptionMiniModule(void 0, interceptors_default2);
var cspOrigins = cspOriginsMiniModule(void 0, interceptors_default2);
var csrfToken = csrfTokenMiniModule(void 0, interceptors_default2);
var dataAlerts = dataAlertsMiniModule(void 0, interceptors_default2);
var dataAssets = dataAssetsMiniModule(void 0, interceptors_default2);
var dataConnections = dataConnectionsMiniModule(void 0, interceptors_default2);
var dataCredentials = dataCredentialsMiniModule(void 0, interceptors_default2);
var dataFiles = dataFilesMiniModule(void 0, interceptors_default2);
var dataQualities = dataQualitiesMiniModule(void 0, interceptors_default2);
var dataSets = dataSetsMiniModule(void 0, interceptors_default2);
var dataSources = dataSourcesMiniModule(void 0, interceptors_default2);
var dataStores = dataStoresMiniModule(void 0, interceptors_default2);
var dcaas = dcaasMiniModule(void 0, interceptors_default2);
var diProjects = diProjectsMiniModule(void 0, interceptors_default2);
var directAccessAgents = directAccessAgentsMiniModule(void 0, interceptors_default2);
var encryption = encryptionMiniModule(void 0, interceptors_default2);
var extensions = extensionsMiniModule(void 0, interceptors_default2);
var glossaries = glossariesMiniModule(void 0, interceptors_default2);
var groups = groupsMiniModule(void 0, interceptors_default2);
var identityProviders = identityProvidersMiniModule(void 0, interceptors_default2);
var interceptors = interceptors_default2;
var items = itemsMiniModule(void 0, interceptors_default2);
var knowledgebases = knowledgebasesMiniModule(void 0, interceptors_default2);
var licenses = licensesMiniModule(void 0, interceptors_default2);
var lineageGraphs = lineageGraphsMiniModule(void 0, interceptors_default2);
var ml = mlMiniModule(void 0, interceptors_default2);
var notes = notesMiniModule(void 0, interceptors_default2);
var notifications = notificationsMiniModule(void 0, interceptors_default2);
var oauthClients = oauthClientsMiniModule(void 0, interceptors_default2);
var oauthTokens = oauthTokensMiniModule(void 0, interceptors_default2);
var qix = qix_default;
var questions = questionsMiniModule(void 0, interceptors_default2);
var quotas = quotasMiniModule(void 0, interceptors_default2);
var reloadTasks = reloadTasksMiniModule(void 0, interceptors_default2);
var reloads = reloadsMiniModule(void 0, interceptors_default2);
var reportTemplates = reportTemplatesMiniModule(void 0, interceptors_default2);
var reports = reportsMiniModule(void 0, interceptors_default2);
var roles = rolesMiniModule(void 0, interceptors_default2);
var sharingTasks = sharingTasksMiniModule(void 0, interceptors_default2);
var spaces = spacesMiniModule(void 0, interceptors_default2);
var tasks = tasksMiniModule(void 0, interceptors_default2);
var tempContents = tempContentsMiniModule(void 0, interceptors_default2);
var tenants = tenantsMiniModule(void 0, interceptors_default2);
var themes = themesMiniModule(void 0, interceptors_default2);
var transports = transportsMiniModule(void 0, interceptors_default2);
var uiConfig = uiConfigMiniModule(void 0, interceptors_default2);
var users = usersMiniModule(void 0, interceptors_default2);
var webIntegrations = webIntegrationsMiniModule(void 0, interceptors_default2);
var webNotifications = webNotificationsMiniModule(void 0, interceptors_default2);
var webhooks = webhooksMiniModule(void 0, interceptors_default2);
var createQlikApi = (props) => {
  const scopedInterceptors = interceptors_default2.createInterceptors();
  return {
    apiKeys: apiKeysMiniModule(props?.hostConfig, scopedInterceptors),
    apps: appsMiniModule(props?.hostConfig, scopedInterceptors),
    assistants: assistantsMiniModule(props?.hostConfig, scopedInterceptors),
    audits: auditsMiniModule(props?.hostConfig, scopedInterceptors),
    auth: auth_default,
    automationConnections: automationConnectionsMiniModule(props?.hostConfig, scopedInterceptors),
    automations: automationsMiniModule(props?.hostConfig, scopedInterceptors),
    automlDeployments: automlDeploymentsMiniModule(props?.hostConfig, scopedInterceptors),
    automlPredictions: automlPredictionsMiniModule(props?.hostConfig, scopedInterceptors),
    brands: brandsMiniModule(props?.hostConfig, scopedInterceptors),
    collections: collectionsMiniModule(props?.hostConfig, scopedInterceptors),
    conditions: conditionsMiniModule(props?.hostConfig, scopedInterceptors),
    consumption: consumptionMiniModule(props?.hostConfig, scopedInterceptors),
    cspOrigins: cspOriginsMiniModule(props?.hostConfig, scopedInterceptors),
    csrfToken: csrfTokenMiniModule(props?.hostConfig, scopedInterceptors),
    dataAlerts: dataAlertsMiniModule(props?.hostConfig, scopedInterceptors),
    dataAssets: dataAssetsMiniModule(props?.hostConfig, scopedInterceptors),
    dataConnections: dataConnectionsMiniModule(props?.hostConfig, scopedInterceptors),
    dataCredentials: dataCredentialsMiniModule(props?.hostConfig, scopedInterceptors),
    dataFiles: dataFilesMiniModule(props?.hostConfig, scopedInterceptors),
    dataQualities: dataQualitiesMiniModule(props?.hostConfig, scopedInterceptors),
    dataSets: dataSetsMiniModule(props?.hostConfig, scopedInterceptors),
    dataSources: dataSourcesMiniModule(props?.hostConfig, scopedInterceptors),
    dataStores: dataStoresMiniModule(props?.hostConfig, scopedInterceptors),
    dcaas: dcaasMiniModule(props?.hostConfig, scopedInterceptors),
    diProjects: diProjectsMiniModule(props?.hostConfig, scopedInterceptors),
    directAccessAgents: directAccessAgentsMiniModule(props?.hostConfig, scopedInterceptors),
    encryption: encryptionMiniModule(props?.hostConfig, scopedInterceptors),
    extensions: extensionsMiniModule(props?.hostConfig, scopedInterceptors),
    glossaries: glossariesMiniModule(props?.hostConfig, scopedInterceptors),
    groups: groupsMiniModule(props?.hostConfig, scopedInterceptors),
    identityProviders: identityProvidersMiniModule(props?.hostConfig, scopedInterceptors),
    interceptors: scopedInterceptors,
    items: itemsMiniModule(props?.hostConfig, scopedInterceptors),
    knowledgebases: knowledgebasesMiniModule(props?.hostConfig, scopedInterceptors),
    licenses: licensesMiniModule(props?.hostConfig, scopedInterceptors),
    lineageGraphs: lineageGraphsMiniModule(props?.hostConfig, scopedInterceptors),
    ml: mlMiniModule(props?.hostConfig, scopedInterceptors),
    notes: notesMiniModule(props?.hostConfig, scopedInterceptors),
    notifications: notificationsMiniModule(props?.hostConfig, scopedInterceptors),
    oauthClients: oauthClientsMiniModule(props?.hostConfig, scopedInterceptors),
    oauthTokens: oauthTokensMiniModule(props?.hostConfig, scopedInterceptors),
    qix: qix_default.withHostConfig(props?.hostConfig),
    questions: questionsMiniModule(props?.hostConfig, scopedInterceptors),
    quotas: quotasMiniModule(props?.hostConfig, scopedInterceptors),
    reloadTasks: reloadTasksMiniModule(props?.hostConfig, scopedInterceptors),
    reloads: reloadsMiniModule(props?.hostConfig, scopedInterceptors),
    reportTemplates: reportTemplatesMiniModule(props?.hostConfig, scopedInterceptors),
    reports: reportsMiniModule(props?.hostConfig, scopedInterceptors),
    roles: rolesMiniModule(props?.hostConfig, scopedInterceptors),
    sharingTasks: sharingTasksMiniModule(props?.hostConfig, scopedInterceptors),
    spaces: spacesMiniModule(props?.hostConfig, scopedInterceptors),
    tasks: tasksMiniModule(props?.hostConfig, scopedInterceptors),
    tempContents: tempContentsMiniModule(props?.hostConfig, scopedInterceptors),
    tenants: tenantsMiniModule(props?.hostConfig, scopedInterceptors),
    themes: themesMiniModule(props?.hostConfig, scopedInterceptors),
    transports: transportsMiniModule(props?.hostConfig, scopedInterceptors),
    uiConfig: uiConfigMiniModule(props?.hostConfig, scopedInterceptors),
    users: usersMiniModule(props?.hostConfig, scopedInterceptors),
    webIntegrations: webIntegrationsMiniModule(props?.hostConfig, scopedInterceptors),
    webNotifications: webNotificationsMiniModule(props?.hostConfig, scopedInterceptors),
    webhooks: webhooksMiniModule(props?.hostConfig, scopedInterceptors)
  };
};
var api = {
  apiKeys,
  apps,
  assistants,
  audits,
  auth,
  automationConnections,
  automations,
  automlDeployments,
  automlPredictions,
  brands,
  collections,
  conditions,
  consumption,
  cspOrigins,
  csrfToken,
  dataAlerts,
  dataAssets,
  dataConnections,
  dataCredentials,
  dataFiles,
  dataQualities,
  dataSets,
  dataSources,
  dataStores,
  dcaas,
  diProjects,
  directAccessAgents,
  encryption,
  extensions,
  glossaries,
  groups,
  identityProviders,
  interceptors,
  items,
  knowledgebases,
  licenses,
  lineageGraphs,
  ml,
  notes,
  notifications,
  oauthClients,
  oauthTokens,
  qix,
  questions,
  quotas,
  reloadTasks,
  reloads,
  reportTemplates,
  reports,
  roles,
  sharingTasks,
  spaces,
  tasks,
  tempContents,
  tenants,
  themes,
  transports,
  uiConfig,
  users,
  webIntegrations,
  webNotifications,
  webhooks,
  createQlikApi
};
var public_default = api;
export {
  apiKeys,
  apps,
  assistants,
  audits,
  auth,
  automationConnections,
  automations,
  automlDeployments,
  automlPredictions,
  brands,
  collections,
  conditions,
  consumption,
  createQlikApi,
  cspOrigins,
  csrfToken,
  dataAlerts,
  dataAssets,
  dataConnections,
  dataCredentials,
  dataFiles,
  dataQualities,
  dataSets,
  dataSources,
  dataStores,
  dcaas,
  public_default as default,
  diProjects,
  directAccessAgents,
  encryption,
  extensions,
  glossaries,
  groups,
  identityProviders,
  interceptors,
  items,
  knowledgebases,
  licenses,
  lineageGraphs,
  ml,
  notes,
  notifications,
  oauthClients,
  oauthTokens,
  qix,
  questions,
  quotas,
  reloadTasks,
  reloads,
  reportTemplates,
  reports,
  roles,
  sharingTasks,
  spaces,
  tasks,
  tempContents,
  tenants,
  themes,
  transports,
  uiConfig,
  users,
  webIntegrations,
  webNotifications,
  webhooks
};
