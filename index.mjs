import {
  auth_default
} from "./chunks/Y6SXFWTP.mjs";
import {
  qix_default
} from "./chunks/LMXH25GK.mjs";
import {
  clearApiCache,
  invokeFetch
} from "./chunks/SCVPVNNI.mjs";
import "./chunks/LRHYLFQX.mjs";
import "./chunks/VSY5YIQY.mjs";

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
function apiDefToApi(namespace, def) {
  if (namespace in runtimeApiCache) {
    return runtimeApiCache[namespace];
  }
  const api2 = {
    clearCache: () => clearApiCache(namespace)
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
        const bodyIndex = options.indexOf("B");
        const hasBody = bodyIndex >= 0;
        let contentType = "";
        if (bodyIndex >= 0) {
          if (options.length > bodyIndex) {
            contentType = contentTypeCharToContentType(options[bodyIndex + 1]);
          }
        }
        const apiFunction = createClassicApiFn(
          namespace,
          operationName,
          pathTemplate,
          method,
          argNames,
          hasQuery,
          hasBody,
          contentType,
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
function createClassicApiFn(namespace, operationName, pathTemplate, method, argNames, hasQuery, hasBody, contentType, useInstead) {
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
    return invokeFetch(namespace, {
      method,
      pathTemplate,
      pathVariables,
      query,
      body,
      ...contentType ? { contentType } : {},
      options
    });
  };
}

// src/public/index.ts
var apiKeys = apiDefToApi("api-keys", {
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
var apps = apiDefToApi("apps", {
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
            "{id}": ["deleteAppReportFilter:D:", "getAppReportFilter:G:"]
          },
          scripts: {
            "": ["getAppScriptHistory:GQ:", "updateAppScript:PBJ:"],
            "{version}": ["deleteAppScript:D:", "getAppScript:G:", "patchAppScript:ABJ:"]
          },
          space: ["removeAppFromSpace:D:", "moveAppToSpace:UBJ:"]
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
var auth = auth_default;
var automations = apiDefToApi("automations", {
  api: {
    v1: {
      automations: {
        "": ["getAutomations:GQ:", "createAutomation:PBJ:"],
        settings: ["getAutomationsSettings:G:", "updateAutomationsSettings:UBJ:"],
        usage: ["getAutomationsUsageMetrics:GQ:"],
        "{id}": {
          "": ["deleteAutomation:D:", "getAutomation:G:", "updateAutomation:UBJ:"],
          actions: {
            copy: ["copyAutomation:PBJ:"],
            disable: ["disableAutomation:P:"],
            enable: ["enableAutomation:P:"],
            move: ["moveAutomation:PBJ:"]
          },
          runs: {
            "": ["getAutomationRuns:GQ:", "queueAutomationRun:PBJ:"],
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
var collections = apiDefToApi("collections", {
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
var cspOrigins = apiDefToApi("csp-origins", {
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
var dataAssets = apiDefToApi("data-assets", {
  api: {
    v1: {
      "data-assets": {
        "": ["deleteDataAssets:DBJ:", "createDataAsset:PBJ:"],
        "{data-asset-id}": ["getDataAsset:GQ:", "patchDataAsset:ABJ:", "updateDataAsset:UBJ:"]
      }
    }
  }
});
var dataConnections = apiDefToApi("data-connections", {
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
var dataCredentials = apiDefToApi("data-credentials", {
  api: {
    v1: {
      "data-credentials": {
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
var dataFiles = apiDefToApi("data-files", {
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
var extensions = apiDefToApi("extensions", {
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
var glossaries = apiDefToApi("glossaries", {
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
var groups = apiDefToApi("groups", {
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
var identityProviders = apiDefToApi("identity-providers", {
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
var items = apiDefToApi("items", {
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
var licenses = apiDefToApi("licenses", {
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
var qix = qix_default;
var quotas = apiDefToApi("quotas", {
  api: { v1: { quotas: { "": ["getQuotas:GQ:"], "{id}": ["getQuota:GQ:"] } } }
});
var reloadTasks = apiDefToApi("reload-tasks", {
  api: {
    v1: {
      "reload-tasks": {
        "": ["getReloadTasks:GQ:", "createReloadTask:PBJ:"],
        "{taskId}": ["deleteReloadTask:D:", "getReloadTask:G:", "updateReloadTask:UBJ:"]
      }
    }
  }
});
var reloads = apiDefToApi("reloads", {
  api: {
    v1: {
      reloads: {
        "": ["getReloads:GQ:", "queueReload:PBJ:"],
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
        "": ["getSpaces:GQ:", "createSpace:PBJ:"],
        types: ["getSpaceTypes:G:"],
        "{spaceId}": {
          "": ["deleteSpace:D:", "getSpace:G:", "patchSpace:ABJ:", "updateSpace:UBJ:"],
          assignments: {
            "": ["getSpaceAssignments:GQ:", "createSpaceAssignment:PBJ:"],
            "{assignmentId}": ["deleteSpaceAssignment:D:", "getSpaceAssignment:G:", "updateSpaceAssignment:UBJ:"]
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
        "": ["uploadTempFile:PQBO:"],
        "{id}": { "": ["downloadTempFile:GQ:"], details: ["getTempFileDetails:G:"] }
      }
    }
  }
});
var tenants = apiDefToApi("tenants", {
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
var themes = apiDefToApi("themes", {
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
var transports = apiDefToApi("transports", {
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
var users = apiDefToApi("users", {
  api: {
    v1: {
      users: {
        "": ["getUsers:GQ:", "createUser:PBJ:"],
        actions: { count: ["countUsers:GQ:"], filter: ["filterUsers:PQBJ:"], invite: ["inviteUsers:PBJ:"] },
        me: ["getMyUser:G:"],
        metadata: ["getUsersMetadata:G:"],
        "{userId}": ["deleteUser:D:", "getUser:GQ:", "patchUser:ABJ:"]
      }
    }
  }
});
var webIntegrations = apiDefToApi("web-integrations", {
  api: {
    v1: {
      "web-integrations": {
        "": ["getWebIntegrations:GQ:", "createWebIntegration:PBJ:"],
        "{id}": ["deleteWebIntegration:D:", "getWebIntegration:G:", "patchWebIntegration:ABJ:"]
      }
    }
  }
});
var webNotifications = apiDefToApi("web-notifications", {
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
var webhooks = apiDefToApi("webhooks", {
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
export {
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
  public_default as default,
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
