"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNO4RCUJYjs = require('./chunk-NO4RCUJY.js');


var _chunkUT6IPB4Ajs = require('./chunk-UT6IPB4A.js');



var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/public-runtime-api-generator/public-runtime-api-generator.ts
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
  } catch (e) {
    throw new Error(`Unknown short hand method:${method}`);
  }
}
var ignoredProps = /* @__PURE__ */ new Set(["$$typeof", "then", "__esmodule"]);
function createLazyApi(api2, initFunc) {
  const lazyApi = {
    initiated: false,
    init: () => {
      if (!lazyApi.initiated) {
        initFunc();
        lazyApi.initiated = true;
      }
    },
    ownKeys(target) {
      if (!lazyApi.initiated) {
        lazyApi.init();
      }
      return Object.keys(target);
    },
    has(target, key) {
      if (ignoredProps.has(key)) {
        return false;
      }
      if (!lazyApi.initiated) {
        lazyApi.init();
      }
      return !!target[key];
    },
    get(target, key) {
      if (!ignoredProps.has(key) && !lazyApi.initiated) {
        lazyApi.init();
      }
      return target[key];
    }
  };
  return new Proxy(api2, lazyApi);
}
var runtimeApiCache = {};
function apiDefToApi(namespace, def, newFormat = false) {
  if (namespace in runtimeApiCache) {
    return runtimeApiCache[namespace];
  }
  const api2 = {
    clearCache: () => _chunkWA4O4PMUjs.clearApiCache.call(void 0, namespace)
  };
  const initFunc = () => {
    traverse(namespace, "", def, api2);
  };
  const lazyApi = createLazyApi(api2, initFunc);
  runtimeApiCache[namespace] = lazyApi;
  return lazyApi;
}
function traverse(namespace, parentPath, node, resultingApi) {
  Object.entries(node).forEach(([key, value]) => {
    const pathTemplate = key ? `${parentPath}/${key}` : parentPath;
    if (Array.isArray(value)) {
      value.forEach((operationString) => {
        const argNames = [...pathTemplate.matchAll(/\{([\w\-_]+)\}/g)].map((match) => match[1]);
        const [operationNames, options, useInstead] = operationString.split(":");
        const method = methodCharToMethodName(options[0]);
        const [operationName, ...oldOperationNames] = operationNames.split(",");
        const hasQuery = options.indexOf("Q") >= 0;
        const hasBody = options.indexOf("B") >= 0;
        const apiFunction = createClassicApiFn(
          namespace,
          operationName,
          pathTemplate,
          method,
          argNames,
          hasQuery,
          hasBody,
          useInstead
        );
        resultingApi[operationName] = apiFunction;
        oldOperationNames.forEach((oldOperationName) => {
          resultingApi[oldOperationName] = resultingApi[operationName];
        });
      });
    } else {
      traverse(namespace, pathTemplate, value, resultingApi);
    }
  });
}
function createClassicApiFn(namespace, operationName, pathTemplate, method, argNames, hasQuery, hasBody, useInstead) {
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
    if (useInstead) {
      console.warn(`${namespace}.${operationName} is deprecated, use ${useInstead} instead`);
    }
    return _chunkWA4O4PMUjs.invokeFetch.call(void 0, namespace, {
      method,
      pathTemplate,
      pathVariables,
      query,
      body,
      options
    });
  };
}

// src/public/index.ts
var apiKeys = apiDefToApi("api-keys", {
  api: {
    v1: {
      "api-keys": {
        "": ["getApiKeys:GQ:", "createApiKey:PB:"],
        configs: { "{tenantId}": ["getApiKeysConfig:G:", "patchApiKeysConfig:AB:"] },
        "{id}": ["deleteApiKey:D:", "getApiKey:G:", "patchApiKey:AB:"]
      }
    }
  }
});
var apps = apiDefToApi("apps", {
  api: {
    v1: {
      apps: {
        "": ["createApp:PB:"],
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
        import: ["importApp:PQB:"],
        privileges: ["getAppsPrivileges:G:"],
        "{appId}": {
          "": ["deleteApp:D:", "getAppInfo:G:", "updateAppInfo:UB:"],
          copy: ["copyApp:PB:"],
          data: { lineage: ["getAppDataLineage:G:"], metadata: ["getAppDataMetadata:G:"] },
          export: ["exportApp:PQ:"],
          "insight-analyses": {
            "": ["getAppInsightAnalyses:G:"],
            actions: { recommend: ["getAppInsightAnalysisRecommendations:PB:"] },
            model: ["getAppInsightAnalysisModel:G:"]
          },
          media: {
            files: { "{path}": ["deleteAppMedia:D:", "getAppMedia:G:", "uploadAppMedia:UB:"] },
            list: { "{path}": ["getAppMediaList:GQ:"] },
            thumbnail: ["getAppThumbnail:G:"]
          },
          objects: { "{objectId}": { actions: { "change-owner": ["updateAppObjectOwner:PB:"] } } },
          owner: ["updateAppOwner:UB:"],
          publish: ["publishApp:PB:", "republishApp:UB:"],
          reloads: {
            logs: { "": ["getAppReloadLogs:G:"], "{reloadId}": ["getAppReloadLog:G:"] },
            metadata: { "{reloadId}": ["getAppReloadMetadata:GQ:"] }
          },
          scripts: {
            "": ["getAppScriptHistory:GQ:", "updateAppScript:PB:"],
            "{version}": ["deleteAppScript:D:", "getAppScript:G:", "patchAppScript:AB:"]
          },
          space: ["removeAppFromSpace:D:", "moveAppToSpace:UB:"]
        },
        "{guid}": { evaluations: ["getAppEvaluations:GQ:", "queueAppEvaluation:P:"] }
      }
    }
  }
});
var audits = apiDefToApi("audits", {
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
var auth = _chunkNO4RCUJYjs.auth_default;
var automations = apiDefToApi("automations", {
  api: {
    v1: {
      automations: {
        "": ["getAutomations:GQ:", "createAutomation:PB:"],
        settings: ["getAutomationsSettings:G:", "updateAutomationsSettings:UB:"],
        usage: ["getAutomationsUsageMetrics:GQ:"],
        "{id}": {
          "": ["deleteAutomation:D:", "getAutomation:G:", "updateAutomation:UB:"],
          actions: {
            copy: ["copyAutomation:PB:"],
            disable: ["disableAutomation:P:"],
            enable: ["enableAutomation:P:"],
            move: ["moveAutomation:PB:"]
          },
          runs: {
            "": ["getAutomationRuns:GQ:", "queueAutomationRun:PB:"],
            "{runId}": {
              "": ["getAutomationRun:G:"],
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
var brands = apiDefToApi("brands", {
  api: {
    v1: {
      brands: {
        "": ["getBrands:GQ:", "createBrand:PB:"],
        active: ["getActiveBrand:G:"],
        "{brand-id}": {
          "": ["deleteBrand:D:", "getBrand:G:", "patchBrand:AB:"],
          actions: { activate: ["activateBrand:PB:"], deactivate: ["deactivateBrand:PB:"] },
          files: {
            "{brand-file-id}": ["deleteBrandFile:D:", "getBrandFile:G:", "createBrandFile:PB:", "updateBrandFile:UB:"]
          }
        }
      }
    }
  }
});
var collections = apiDefToApi("collections", {
  api: {
    v1: {
      collections: {
        "": ["getCollections:GQ:", "createCollection:PB:"],
        favorites: ["getFavoritesCollection:G:"],
        "{collectionId}": {
          "": ["deleteCollection:D:", "getCollection:G:", "patchCollection:AB:", "updateCollection:UB:"],
          items: {
            "": ["getCollectionItems:GQ:", "addCollectionItem:PB:"],
            "{itemId}": ["deleteCollectionItem:D:", "getCollectionItem:G:"]
          }
        }
      }
    }
  }
});
var cspOrigins = apiDefToApi("csp-origins", {
  api: {
    v1: {
      "csp-origins": {
        "": ["getCSPEntries:GQ:", "createCSPEntry:PB:"],
        actions: { "generate-header": ["getCSPHeader:G:"] },
        "{id}": ["deleteCSPEntry:D:", "getCSPEntry:G:", "updateCSPEntry:UB:"]
      }
    }
  }
});
var dataAssets = apiDefToApi("data-assets", {
  api: {
    v1: {
      "data-assets": {
        "": ["deleteDataAssets:DB:", "createDataAsset:PB:"],
        "{data-asset-id}": ["getDataAsset:GQ:", "patchDataAsset:AB:", "updateDataAsset:UB:"]
      }
    }
  }
});
var dataConnections = apiDefToApi("data-connections", {
  api: {
    v1: {
      "data-connections": {
        "": ["getDataConnections:GQ:", "createDataConnection:PB:"],
        actions: {
          delete: ["deleteDataConnections:PB:"],
          duplicate: ["duplicateDataAConnection:PB:"],
          update: ["updateDataConnections:PB:"]
        },
        "{qID}": [
          "deleteDataConnection:DQ:",
          "getDataConnection:GQ:",
          "patchDataConnection:AQB:",
          "updateDataConnection:UQB:"
        ]
      }
    }
  }
});
var dataCredentials = apiDefToApi("data-credentials", {
  api: {
    v1: {
      "data-credentials": {
        "{qID}": [
          "deleteDataCredential:DQ:",
          "getDataCredential:GQ:",
          "patchDataCredential:AQB:",
          "updateDataCredential:UQB:"
        ]
      }
    }
  }
});
var dataFiles = apiDefToApi("data-files", {
  api: {
    v1: {
      "data-files": {
        "": ["getDataFiles:GQ:", "uploadDataFile:PB:"],
        actions: { "change-space": ["moveDataFiles:PB:"], delete: ["deleteDataFiles:PB:"] },
        connections: { "": ["getDataFilesConnections:GQ:"], "{id}": ["getDataFileConnection:G:"] },
        quotas: ["getDataFilesQuotas:G:"],
        "{id}": {
          "": ["deleteDataFile:D:", "getDataFile:G:", "reuploadDataFile:UB:"],
          actions: { "change-owner": ["changeDataFileOwner:PB:"], "change-space": ["moveDataFile:PB:"] }
        }
      }
    }
  }
});
var extensions = apiDefToApi("extensions", {
  api: {
    v1: {
      extensions: {
        "": ["getExtensions:G:", "uploadExtension:PB:"],
        "{id}": {
          "": ["deleteExtension:D:", "getExtension:G:", "patchExtension:AB:"],
          file: { "": ["downloadExtension:G:"], "{filepath}": ["downloadFileFromExtension:G:"] }
        }
      }
    }
  }
});
var glossaries = apiDefToApi("glossaries", {
  api: {
    v1: {
      glossaries: {
        "": ["getGlossaries:GQ:", "createGlossary:PB:"],
        actions: { import: ["importGlossary:PQB:"] },
        "{id}": {
          "": ["deleteGlossary:D:", "getGlossary:G:", "patchGlossary:AB:", "updateGlossary:UB:"],
          actions: { export: ["exportGlossary:G:"] },
          categories: {
            "": ["getGlossaryCategories:GQ:", "createGlossaryCategory:PB:"],
            "{categoryId}": [
              "deleteGlossaryCategory:D:",
              "getGlossaryCategory:G:",
              "patchGlossaryCategory:AB:",
              "updateGlossaryCategory:UB:"
            ]
          },
          terms: {
            "": ["getGlossaryTerms:GQ:", "createGlossaryTerm:PB:"],
            "{termId}": {
              "": ["deleteGlossaryTerm:D:", "getGlossaryTerm:G:", "patchGlossaryTerm:AB:", "updateGlossaryTerm:UB:"],
              actions: { "change-status": ["changeGlossaryTermStatus:PQ:"] },
              links: ["getGlossaryTermLinks:GQ:", "createGlossaryTermLink:PB:"],
              revisions: ["getGlossaryTermRevisions:GQ:"]
            }
          }
        }
      }
    }
  }
});
var groups = apiDefToApi("groups", {
  api: {
    v1: {
      groups: {
        "": ["getGroups:GQ:", "createGroup:PB:"],
        actions: { filter: ["filterGroups:PQB:"] },
        settings: ["getGroupsSettings:G:", "patchGroupsSettings:AB:"],
        "{groupId}": ["deleteGroup:D:", "getGroup:G:", "patchGroup:AB:"]
      }
    }
  }
});
var identityProviders = apiDefToApi("identity-providers", {
  api: {
    v1: {
      "identity-providers": {
        "": ["getIdps:GQ:", "createIdp:PB:"],
        ".well-known": { "metadata.json": ["getIdpWellKnownMetaData:G:"] },
        me: { meta: ["getMyIdpMeta:G:"] },
        status: ["getIdpStatuses:G:"],
        "{id}": ["deleteIdp:D:", "getIdp:G:", "patchIdp:AB:"]
      }
    }
  }
});
var items = apiDefToApi("items", {
  api: {
    v1: {
      items: {
        "": ["getItems:GQ:"],
        settings: ["getItemsSettings:G:", "patchItemsSettings:AB:"],
        "{itemId}": {
          "": ["deleteItem:D:", "getItem:G:", "updateItem:UB:"],
          collections: ["getItemCollections:GQ:"],
          publisheditems: ["getPublishedItems:GQ:"]
        }
      }
    }
  }
});
var licenses = apiDefToApi("licenses", {
  api: {
    v1: {
      licenses: {
        assignments: {
          "": ["getLicenseAssignments:GQ:"],
          actions: {
            add: ["addLicenseAssignments:PB:"],
            delete: ["deleteLicenseAssignments:PB:"],
            update: ["updateLicenseAssignments:PB:"]
          }
        },
        consumption: ["getLicenseConsumption:GQ:"],
        overview: ["getLicenseOverview:G:"],
        settings: ["getLicenseSettings:G:", "updateLicenseSettings:UB:"],
        status: ["getLicenseStatus:G:"]
      }
    }
  }
});
var qix = _chunkUT6IPB4Ajs.qix_default;
var quotas = apiDefToApi("quotas", {
  api: { v1: { quotas: { "": ["getQuotas:GQ:"], "{id}": ["getQuota:GQ:"] } } }
});
var reloadTasks = apiDefToApi("reload-tasks", {
  api: {
    v1: {
      "reload-tasks": {
        "": ["getReloadTasks:GQ:", "createReloadTask:PB:"],
        "{taskId}": ["deleteReloadTask:D:", "getReloadTask:G:", "updateReloadTask:UB:"]
      }
    }
  }
});
var reloads = apiDefToApi("reloads", {
  api: {
    v1: {
      reloads: {
        "": ["getReloads:GQ:", "queueReload:PB:"],
        "{reloadId}": { "": ["getReload:G:"], actions: { cancel: ["cancelReload:P:"] } }
      }
    }
  }
});
var roles = apiDefToApi("roles", {
  api: { v1: { roles: { "": ["getRoles:GQ:"], "{id}": ["getRole:G:"] } } }
});
var spaces = apiDefToApi("spaces", {
  api: {
    v1: {
      spaces: {
        "": ["getSpaces:GQ:", "createSpace:PB:"],
        types: ["getSpaceTypes:G:"],
        "{spaceId}": {
          "": ["deleteSpace:D:", "getSpace:G:", "patchSpace:AB:", "updateSpace:UB:"],
          assignments: {
            "": ["getSpaceAssignments:GQ:", "createSpaceAssignment:PB:"],
            "{assignmentId}": ["deleteSpaceAssignment:D:", "getSpaceAssignment:G:", "updateSpaceAssignment:UB:"]
          }
        }
      }
    }
  }
});
var tempContents = apiDefToApi("temp-contents", {
  api: {
    v1: {
      "temp-contents": {
        "": ["uploadTempFile:PQB:"],
        "{id}": { "": ["downloadTempFile:GQ:"], details: ["getTempFileDetails:G:"] }
      }
    }
  }
});
var tenants = apiDefToApi("tenants", {
  api: {
    v1: {
      tenants: {
        "": ["createTenant:PB:"],
        me: ["getMyTenant:G:"],
        "{tenantId}": {
          "": ["getTenant:G:", "patchTenant:AB:"],
          actions: { deactivate: ["deactivateTenant:PB:"], reactivate: ["reactivateTenant:PB:"] }
        }
      }
    }
  }
});
var themes = apiDefToApi("themes", {
  api: {
    v1: {
      themes: {
        "": ["getThemes:G:", "uploadTheme:PB:"],
        "{id}": {
          "": ["deleteTheme:D:", "getTheme:G:", "patchTheme:AB:"],
          file: { "": ["downloadTheme:G:"], "{filepath}": ["downloadFileFromTheme:G:"] }
        }
      }
    }
  }
});
var transports = apiDefToApi("transports", {
  api: {
    v1: {
      transports: {
        "email-config": {
          "": ["deleteEmailConfig:D:", "getEmailConfig:G:", "patchEmailConfig:AB:"],
          actions: {
            "send-test-email": ["sendTestEmail:PB:"],
            validate: ["validateEmailConfig:P:"],
            "verify-connection": ["verifyEmailConfigConnection:P:"]
          }
        }
      }
    }
  }
});
var users = apiDefToApi("users", {
  api: {
    v1: {
      users: {
        "": ["getUsers:GQ:", "createUser:PB:"],
        actions: { count: ["countUsers:GQ:"], filter: ["filterUsers:PQB:"], invite: ["inviteUsers:PB:"] },
        me: ["getMyUser:G:"],
        metadata: ["getUsersMetadata:G:"],
        "{userId}": ["deleteUser:D:", "getUser:GQ:", "patchUser:AB:"]
      }
    }
  }
});
var webIntegrations = apiDefToApi("web-integrations", {
  api: {
    v1: {
      "web-integrations": {
        "": ["getWebIntegrations:GQ:", "createWebIntegration:PB:"],
        "{id}": ["deleteWebIntegration:D:", "getWebIntegration:G:", "patchWebIntegration:AB:"]
      }
    }
  }
});
var webNotifications = apiDefToApi("web-notifications", {
  api: {
    v1: {
      "web-notifications": {
        "": ["getNotifications:GQ:"],
        all: ["deleteNotifications:D:", "patchNotifications:AB:"],
        "{notificationId}": ["deleteNotification:D:", "getNotification:G:", "patchNotification:AB:"]
      }
    }
  }
});
var webhooks = apiDefToApi("webhooks", {
  api: {
    v1: {
      webhooks: {
        "": ["getWebhooks:GQ:", "createWebhook:PB:"],
        "event-types": ["getWebhookEventTypes:G:"],
        "{id}": {
          "": ["deleteWebhook:D:", "getWebhook:G:", "patchWebhook:AB:", "updateWebhook:UB:"],
          deliveries: {
            "": ["getWebhookDeliveries:GQ:"],
            "{deliveryId}": { "": ["getWebhookDelivery:G:"], actions: { resend: ["resendWebhookDelivery:P:"] } }
          }
        }
      }
    }
  }
});
var api = {
  apiKeys,
  apps,
  audits,
  auth,
  automations,
  brands,
  collections,
  cspOrigins,
  dataAssets,
  dataConnections,
  dataCredentials,
  dataFiles,
  extensions,
  glossaries,
  groups,
  identityProviders,
  items,
  licenses,
  qix,
  quotas,
  reloadTasks,
  reloads,
  roles,
  spaces,
  tempContents,
  tenants,
  themes,
  transports,
  users,
  webIntegrations,
  webNotifications,
  webhooks
};
var public_default = api;


































exports.apiKeys = apiKeys; exports.apps = apps; exports.audits = audits; exports.auth = auth; exports.automations = automations; exports.brands = brands; exports.collections = collections; exports.cspOrigins = cspOrigins; exports.dataAssets = dataAssets; exports.dataConnections = dataConnections; exports.dataCredentials = dataCredentials; exports.dataFiles = dataFiles; exports.default = public_default; exports.extensions = extensions; exports.glossaries = glossaries; exports.groups = groups; exports.identityProviders = identityProviders; exports.items = items; exports.licenses = licenses; exports.qix = qix; exports.quotas = quotas; exports.reloadTasks = reloadTasks; exports.reloads = reloads; exports.roles = roles; exports.spaces = spaces; exports.tempContents = tempContents; exports.tenants = tenants; exports.themes = themes; exports.transports = transports; exports.users = users; exports.webIntegrations = webIntegrations; exports.webNotifications = webNotifications; exports.webhooks = webhooks;
