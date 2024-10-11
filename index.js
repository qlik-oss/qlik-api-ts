import {
  qix_default
} from "./chunks/WTOPYVRD.js";
import {
  auth_default
} from "./chunks/I3BKKY53.js";
import "./chunks/7RHSSS4W.js";
import {
  clearApiCache,
  invokeFetch
} from "./chunks/YORZLVSA.js";
import "./chunks/EFU3HQQZ.js";
import "./chunks/2ZQ3ZX7F.js";

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
    interceptors: {},
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
}, operationInterceptors, hostConfig, enableConsoleWarnings, invokeFetchFnGetter) {
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
      operationInterceptors
    );
  };
}

// src/runtime-api-generator/runtime-api-generator-public.ts
var parsedMiniApis = {};
function apiDefToApiPublic(namespace, def) {
  parsedMiniApis[namespace] = parsedMiniApis[namespace] || parseMiniApi(namespace, def);
  const parsedMiniApi = parsedMiniApis[namespace];
  return (hostConfig) => {
    const lazyApi = {
      clearCache: () => clearApiCache(namespace)
    };
    const initFunc = () => {
      Object.entries(parsedMiniApi.operations).forEach(([operationName, operation]) => {
        lazyApi[operationName] = createClassicApiFn(operation, void 0, hostConfig, true, () => invokeFetch);
        operation.oldOperationNames.forEach((oldOperationName) => {
          lazyApi[oldOperationName] = lazyApi[operationName];
        });
      });
    };
    const proxy = createLazyApiProxy(lazyApi, initFunc);
    return proxy;
  };
}

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
var automationsMiniModule = apiDefToApiPublic("automations", {
  api: {
    v1: {
      automations: {
        "": ["getAutomations:GQ:", "createAutomation:PBJ:"],
        settings: ["getAutomationsSettings:G:", "updateAutomationsSettings:UBJ:"],
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
var reportsMiniModule = apiDefToApiPublic("reports", {
  api: { v1: { reports: { "": ["createReport:PBJ:"], "{id}": { status: ["getReportStatus:G:"] } } } }
});
var rolesMiniModule = apiDefToApiPublic("roles", {
  api: { v1: { roles: { "": ["getRoles:GQ:"], "{id}": ["getRole:G:"] } } }
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
          }
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
var usersMiniModule = apiDefToApiPublic("users", {
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
var apiKeys = apiKeysMiniModule();
var apps = appsMiniModule();
var audits = auditsMiniModule();
var auth = auth_default;
var automations = automationsMiniModule();
var brands = brandsMiniModule();
var collections = collectionsMiniModule();
var cspOrigins = cspOriginsMiniModule();
var dataAssets = dataAssetsMiniModule();
var dataConnections = dataConnectionsMiniModule();
var dataCredentials = dataCredentialsMiniModule();
var dataFiles = dataFilesMiniModule();
var extensions = extensionsMiniModule();
var glossaries = glossariesMiniModule();
var groups = groupsMiniModule();
var identityProviders = identityProvidersMiniModule();
var items = itemsMiniModule();
var licenses = licensesMiniModule();
var qix = qix_default;
var quotas = quotasMiniModule();
var reloadTasks = reloadTasksMiniModule();
var reloads = reloadsMiniModule();
var reports = reportsMiniModule();
var roles = rolesMiniModule();
var spaces = spacesMiniModule();
var tempContents = tempContentsMiniModule();
var tenants = tenantsMiniModule();
var themes = themesMiniModule();
var transports = transportsMiniModule();
var users = usersMiniModule();
var webIntegrations = webIntegrationsMiniModule();
var webNotifications = webNotificationsMiniModule();
var webhooks = webhooksMiniModule();
var createQlikApi = (props) => ({
  apiKeys: apiKeysMiniModule(props?.hostConfig),
  apps: appsMiniModule(props?.hostConfig),
  audits: auditsMiniModule(props?.hostConfig),
  auth: auth_default,
  automations: automationsMiniModule(props?.hostConfig),
  brands: brandsMiniModule(props?.hostConfig),
  collections: collectionsMiniModule(props?.hostConfig),
  cspOrigins: cspOriginsMiniModule(props?.hostConfig),
  dataAssets: dataAssetsMiniModule(props?.hostConfig),
  dataConnections: dataConnectionsMiniModule(props?.hostConfig),
  dataCredentials: dataCredentialsMiniModule(props?.hostConfig),
  dataFiles: dataFilesMiniModule(props?.hostConfig),
  extensions: extensionsMiniModule(props?.hostConfig),
  glossaries: glossariesMiniModule(props?.hostConfig),
  groups: groupsMiniModule(props?.hostConfig),
  identityProviders: identityProvidersMiniModule(props?.hostConfig),
  items: itemsMiniModule(props?.hostConfig),
  licenses: licensesMiniModule(props?.hostConfig),
  qix: qix_default.withHostConfig(props?.hostConfig),
  quotas: quotasMiniModule(props?.hostConfig),
  reloadTasks: reloadTasksMiniModule(props?.hostConfig),
  reloads: reloadsMiniModule(props?.hostConfig),
  reports: reportsMiniModule(props?.hostConfig),
  roles: rolesMiniModule(props?.hostConfig),
  spaces: spacesMiniModule(props?.hostConfig),
  tempContents: tempContentsMiniModule(props?.hostConfig),
  tenants: tenantsMiniModule(props?.hostConfig),
  themes: themesMiniModule(props?.hostConfig),
  transports: transportsMiniModule(props?.hostConfig),
  users: usersMiniModule(props?.hostConfig),
  webIntegrations: webIntegrationsMiniModule(props?.hostConfig),
  webNotifications: webNotificationsMiniModule(props?.hostConfig),
  webhooks: webhooksMiniModule(props?.hostConfig)
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
  reports,
  roles,
  spaces,
  tempContents,
  tenants,
  themes,
  transports,
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
  audits,
  auth,
  automations,
  brands,
  collections,
  createQlikApi,
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
  reports,
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
