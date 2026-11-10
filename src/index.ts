/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import { apiDefToApiPublic } from "./internal/runtime-api-generator/runtime-api-generator-public";
import _auth, { type AuthAPI, type HostConfig } from "./auth";
import _interceptors, { type InterceptorsAPI } from "./interceptors";
import _qix, { type QixAPI } from "./qix";
import type { AlertingAPI } from "./rest/alerting";
import type { SharingTasksAPI as AlertingSharingTasksAPI } from "./rest/alerting/sharing-tasks";
import type { AnalyticsAPI } from "./rest/analytics";
import type { AppsAPI as AnalyticsAppsAPI } from "./rest/analytics/apps";
import type { ChangeStoresAPI as AnalyticsChangeStoresAPI } from "./rest/analytics/change-stores";
import type { DiscoveryAgentAPI as AnalyticsDiscoveryAgentAPI } from "./rest/analytics/discovery-agent";
import type { AdaptiveCardsAPI as AnalyticsDiscoveryAgentAdaptiveCardsAPI } from "./rest/analytics/discovery-agent/adaptive-cards";
import type { OdagAppsAPI as AnalyticsOdagAppsAPI } from "./rest/analytics/odag-apps";
import type { OdagLinksAPI as AnalyticsOdagLinksAPI } from "./rest/analytics/odag-links";
import type { OdagRequestsAPI as AnalyticsOdagRequestsAPI } from "./rest/analytics/odag-requests";
import type { OdagSettingsAPI as AnalyticsOdagSettingsAPI } from "./rest/analytics/odag-settings";
import type { ApiKeysAPI } from "./rest/api-keys";
import type { AppsAPI } from "./rest/apps";
import type { AssistantsAPI } from "./rest/assistants";
import type { AuditsAPI } from "./rest/audits";
import type { AutomationConnectionsAPI } from "./rest/automation-connections";
import type { AutomationConnectorsAPI } from "./rest/automation-connectors";
import type { AutomationsAPI } from "./rest/automations";
import type { AutomlDeploymentsAPI } from "./rest/automl-deployments";
import type { AutomlPredictionsAPI } from "./rest/automl-predictions";
import type { BannersAPI } from "./rest/banners";
import type { BrandsAPI } from "./rest/brands";
import type { CollectionsAPI } from "./rest/collections";
import type { ConditionsAPI } from "./rest/conditions";
import type { ConnectivityAPI } from "./rest/connectivity";
import type { DataConnectionsAPI as ConnectivityDataConnectionsAPI } from "./rest/connectivity/data-connections";
import type { DataCredentialsAPI as ConnectivityDataCredentialsAPI } from "./rest/connectivity/data-credentials";
import type { DataSourcesAPI as ConnectivityDataSourcesAPI } from "./rest/connectivity/data-sources";
import type { DirectAccessAgentsAPI as ConnectivityDirectAccessAgentsAPI } from "./rest/connectivity/direct-access-agents";
import type { ConsumptionAPI } from "./rest/consumption";
import type { CoreAPI } from "./rest/core";
import type { AuthSettingsAPI as CoreAuthSettingsAPI } from "./rest/core/auth-settings";
import type { DataFilesAPI as CoreDataFilesAPI } from "./rest/core/data-files";
import type { IpPoliciesAPI as CoreIpPoliciesAPI } from "./rest/core/ip-policies";
import type { WebhooksAPI as CoreWebhooksAPI } from "./rest/core/webhooks";
import type { CspOriginsAPI } from "./rest/csp-origins";
import type { CsrfTokenAPI } from "./rest/csrf-token";
import type { DataAlertsAPI } from "./rest/data-alerts";
import type { DataAssetsAPI } from "./rest/data-assets";
import type { DataConnectionsAPI } from "./rest/data-connections";
import type { DataCredentialsAPI } from "./rest/data-credentials";
import type { DataFilesAPI } from "./rest/data-files";
import type { DataGovernanceAPI } from "./rest/data-governance";
import type { DataContractsAPI as DataGovernanceDataContractsAPI } from "./rest/data-governance/data-contracts";
import type { DataProductsAPI as DataGovernanceDataProductsAPI } from "./rest/data-governance/data-products";
import type { DataQualitiesAPI as DataGovernanceDataQualitiesAPI } from "./rest/data-governance/data-qualities";
import type { SemanticTypesAPI as DataGovernanceSemanticTypesAPI } from "./rest/data-governance/semantic-types";
import type { TrustScoresAPI as DataGovernanceTrustScoresAPI } from "./rest/data-governance/trust-scores";
import type { DataQualitiesAPI } from "./rest/data-qualities";
import type { DataSetsAPI } from "./rest/data-sets";
import type { DataSourcesAPI } from "./rest/data-sources";
import type { DataStoresAPI } from "./rest/data-stores";
import type { DcaasAPI } from "./rest/dcaas";
import type { DiProjectsAPI } from "./rest/di-projects";
import type { DirectAccessAgentsAPI } from "./rest/direct-access-agents";
import type { EncryptionAPI } from "./rest/encryption";
import type { ExtensionsAPI } from "./rest/extensions";
import type { GlossariesAPI } from "./rest/glossaries";
import type { GroupsAPI } from "./rest/groups";
import type { IdentityProvidersAPI } from "./rest/identity-providers";
import type { ItemsAPI } from "./rest/items";
import type { KnowledgebasesAPI } from "./rest/knowledgebases";
import type { LicensesAPI } from "./rest/licenses";
import type { LineageGraphsAPI } from "./rest/lineage-graphs";
import type { MlAPI } from "./rest/ml";
import type { NotesAPI } from "./rest/notes";
import type { NotificationsAPI } from "./rest/notifications";
import type { OauthClientsAPI } from "./rest/oauth-clients";
import type { OauthTokensAPI } from "./rest/oauth-tokens";
import type { QuestionsAPI } from "./rest/questions";
import type { QuotasAPI } from "./rest/quotas";
import type { ReloadTasksAPI } from "./rest/reload-tasks";
import type { ReloadsAPI } from "./rest/reloads";
import type { ReportTemplatesAPI } from "./rest/report-templates";
import type { ReportsAPI } from "./rest/reports";
import type { RolesAPI } from "./rest/roles";
import type { SchedulingAPI } from "./rest/scheduling";
import type { TasksAPI as SchedulingTasksAPI } from "./rest/scheduling/tasks";
import type { SharingTasksAPI } from "./rest/sharing-tasks";
import type { SpacesAPI } from "./rest/spaces";
import type { TasksAPI } from "./rest/tasks";
import type { TempContentsAPI } from "./rest/temp-contents";
import type { TenantSettingsAPI } from "./rest/tenant-settings";
import type { TenantsAPI } from "./rest/tenants";
import type { ThemesAPI } from "./rest/themes";
import type { TransportsAPI } from "./rest/transports";
import type { UiConfigAPI } from "./rest/ui-config";
import type { UsersAPI } from "./rest/users";
import type { WebIntegrationsAPI } from "./rest/web-integrations";
import type { WebNotificationsAPI } from "./rest/web-notifications";
import type { WebhooksAPI } from "./rest/webhooks";
import type { WorkflowsAPI } from "./rest/workflows";
import type { AutomationConnectionsAPI as WorkflowsAutomationConnectionsAPI } from "./rest/workflows/automation-connections";
import type { AutomationConnectorsAPI as WorkflowsAutomationConnectorsAPI } from "./rest/workflows/automation-connectors";
import type { AutomationsAPI as WorkflowsAutomationsAPI } from "./rest/workflows/automations";

const createAlertingSharingTasksRuntimeAPI = apiDefToApiPublic<AlertingSharingTasksAPI>("alerting/sharing-tasks", {
  api: {
    alerting: {
      "sharing-tasks": {
        "{taskId}": {
          "task-executions": {
            "": ["getSharingTaskTaskExecutions:GQ:"],
            "{taskExecutionId}": ["getSharingTaskTaskExecution:G:"],
          },
        },
      },
    },
  },
});
const createAlertingRuntimeAPI = apiDefToApiPublic<AlertingAPI & { sharingTasks: AlertingSharingTasksAPI }>(
  "alerting",
  {},
  { "sharing-tasks": createAlertingSharingTasksRuntimeAPI, sharingTasks: createAlertingSharingTasksRuntimeAPI },
);
const createAnalyticsAppsRuntimeAPI = apiDefToApiPublic<AnalyticsAppsAPI>("analytics/apps", {
  api: {
    analytics: {
      apps: {
        evaluations: {
          "{baselineId}": {
            compare: {
              "{comparisonId}": {
                "": ["getAppEvaluationComparison:GQ:"],
                actions: { download: ["getAppEvaluationComparisonXml:G:"] },
              },
            },
          },
          "{id}": { "": ["getAppEvaluation:GQ:"], actions: { download: ["getAppEvaluationXml:G:"] } },
        },
        "{appId}": { actions: { restore: ["restoreApp:P:"] } },
        "{guid}": {
          evaluations: ["getAppEvaluations:GQ:", "createAppEvaluationWithBody:PBJ:", "createAppEvaluation:P:"],
        },
      },
    },
  },
});
const createAnalyticsChangeStoresRuntimeAPI = apiDefToApiPublic<AnalyticsChangeStoresAPI>("analytics/change-stores", {
  api: {
    analytics: {
      "change-stores": {
        "": ["getChangeStores:GQ:"],
        "{storeId}": {
          "": ["getChangeStore:G:"],
          changes: { "": ["getChangeStoreChanges:GQ:"], "tabular-views": ["getChangeStoreChangesTabularViews:GQ:"] },
          "editable-columns": ["getChangeStoreEditableColumns:GQ:"],
        },
      },
    },
  },
});
const createAnalyticsDiscoveryAgentAdaptiveCardsRuntimeAPI = apiDefToApiPublic<AnalyticsDiscoveryAgentAdaptiveCardsAPI>(
  "analytics/discovery-agent/adaptive-cards",
  { api: { analytics: { "discovery-agent": { "adaptive-cards": ["getAdaptiveCards:GQ:"] } } } },
);
const createAnalyticsDiscoveryAgentRuntimeAPI = apiDefToApiPublic<
  AnalyticsDiscoveryAgentAPI & { adaptiveCards: AnalyticsDiscoveryAgentAdaptiveCardsAPI }
>(
  "analytics/discovery-agent",
  {},
  {
    "adaptive-cards": createAnalyticsDiscoveryAgentAdaptiveCardsRuntimeAPI,
    adaptiveCards: createAnalyticsDiscoveryAgentAdaptiveCardsRuntimeAPI,
  },
);
const createAnalyticsOdagAppsRuntimeAPI = apiDefToApiPublic<AnalyticsOdagAppsAPI>("analytics/odag-apps", {
  api: { analytics: { "odag-apps": ["getOdagApps:GQ:"] } },
});
const createAnalyticsOdagLinksRuntimeAPI = apiDefToApiPublic<AnalyticsOdagLinksAPI>("analytics/odag-links", {
  api: {
    analytics: {
      "odag-links": {
        "": ["getOdagLinks:GQ:", "createOdagLink:PQBJ:"],
        cancreate: ["getOdagLinkCreatePermission:GQ:"],
        "selection-app-link-usages": ["getOdagLinksSelectionAppUsages:PQBJ:"],
        "{linkId}": {
          "": ["getOdagLink:GQ:", "updateOdagLink:UQBJ:"],
          requests: ["getOdagLinkRequests:GQ:", "createOdagLinkRequest:PBJ:"],
        },
      },
    },
  },
});
const createAnalyticsOdagRequestsRuntimeAPI = apiDefToApiPublic<AnalyticsOdagRequestsAPI>("analytics/odag-requests", {
  api: {
    analytics: {
      "odag-requests": {
        "{requestId}": {
          "": ["getOdagRequest:G:", "updateOdagRequest:UQ:"],
          app: ["deleteOdagRequestApp:D:"],
          "reload-app": ["createOdagRequestReloadApp:PBJ:"],
          "rename-app": ["createOdagRequestRenameApp:PBJ:"],
          selections: ["getOdagRequestSelections:G:"],
        },
      },
    },
  },
});
const createAnalyticsOdagSettingsRuntimeAPI = apiDefToApiPublic<AnalyticsOdagSettingsAPI>("analytics/odag-settings", {
  api: {
    analytics: {
      "odag-settings": {
        "": ["getOdagSettings:G:", "putOdagSettings:UBJ:"],
        canupdate: ["getOdagSettingsUpdatePermission:G:"],
      },
    },
  },
});
const createAnalyticsRuntimeAPI = apiDefToApiPublic<
  AnalyticsAPI & {
    apps: AnalyticsAppsAPI;
    changeStores: AnalyticsChangeStoresAPI;
    discoveryAgent: AnalyticsDiscoveryAgentAPI & { adaptiveCards: AnalyticsDiscoveryAgentAdaptiveCardsAPI };
    odagApps: AnalyticsOdagAppsAPI;
    odagLinks: AnalyticsOdagLinksAPI;
    odagRequests: AnalyticsOdagRequestsAPI;
    odagSettings: AnalyticsOdagSettingsAPI;
  }
>(
  "analytics",
  {},
  {
    apps: createAnalyticsAppsRuntimeAPI,
    "change-stores": createAnalyticsChangeStoresRuntimeAPI,
    changeStores: createAnalyticsChangeStoresRuntimeAPI,
    "discovery-agent": createAnalyticsDiscoveryAgentRuntimeAPI,
    discoveryAgent: createAnalyticsDiscoveryAgentRuntimeAPI,
    "odag-apps": createAnalyticsOdagAppsRuntimeAPI,
    odagApps: createAnalyticsOdagAppsRuntimeAPI,
    "odag-links": createAnalyticsOdagLinksRuntimeAPI,
    odagLinks: createAnalyticsOdagLinksRuntimeAPI,
    "odag-requests": createAnalyticsOdagRequestsRuntimeAPI,
    odagRequests: createAnalyticsOdagRequestsRuntimeAPI,
    "odag-settings": createAnalyticsOdagSettingsRuntimeAPI,
    odagSettings: createAnalyticsOdagSettingsRuntimeAPI,
  },
);
const createApiKeysRuntimeAPI = apiDefToApiPublic<ApiKeysAPI>("api-keys", {
  api: {
    v1: {
      "api-keys": {
        "": ["getApiKeys:GQ:", "createApiKey:PBJ:"],
        configs: { "{tenantId}": ["getApiKeysConfig:G:", "patchApiKeysConfig:ABJ:"] },
        "{id}": ["deleteApiKey:D:", "getApiKey:G:", "patchApiKey:ABJ:"],
      },
    },
  },
});
const createAppsRuntimeAPI = apiDefToApiPublic<AppsAPI>("apps", {
  api: {
    v1: {
      apps: {
        "": ["createApp:PBJ:"],
        import: ["importApp:PQBO:"],
        privileges: ["getAppsPrivileges:G:"],
        validatescript: ["validateScript:PBJ:"],
        "{appId}": {
          "": ["deleteApp:D:", "getAppInfo:G:", "updateAppInfo:UBJ:"],
          copy: ["copyApp:PBJ:"],
          data: { lineage: ["getAppDataLineage:G:"], metadata: ["getAppDataMetadata:G:"] },
          export: ["exportApp:PQ:"],
          "insight-analyses": {
            "": ["getAppInsightAnalyses:G:"],
            actions: { recommend: ["getAppInsightAnalysisRecommendations:PBJ:"] },
            model: ["getAppInsightAnalysisModel:G:"],
          },
          media: {
            files: { "{path}": ["deleteAppMedia:D:", "getAppMedia:G:", "uploadAppMedia:UBO:"] },
            list: { "{path}": ["getAppMediaList:GQ:"] },
            thumbnail: ["getAppThumbnail:G:"],
          },
          objects: { "{objectId}": { actions: { "change-owner": ["updateAppObjectOwner:PBJ:"] } } },
          owner: ["updateAppOwner:UBJ:"],
          placement: ["deleteAppPlacement:D:", "getAppPlacement:G:", "replaceAppPlacement:UBJ:"],
          publish: ["publishApp:PBJ:", "republishApp:UBJ:"],
          reloads: {
            logs: { "": ["getAppReloadLogs:G:"], "{reloadId}": ["getAppReloadLog:G:"] },
            metadata: { "{reloadId}": ["getAppReloadMetadata:GQ:"] },
          },
          "report-filters": {
            "": ["getAppReportFilters:GQ:", "createAppReportFilter:PBJ:"],
            actions: { count: ["countAppReportFilters:GQ:"] },
            "{id}": [
              "deleteAppReportFilter:D:",
              "getAppReportFilterWithQuery:GQ:",
              "getAppReportFilter:G:",
              "patchAppReportFilter:ABJ:",
            ],
          },
          scripts: {
            "": ["getAppScriptHistory:GQ:", "updateAppScript:PBJ:"],
            "{id}": ["deleteAppScript:D:", "getAppScript:G:", "patchAppScript:ABJ:"],
          },
          space: ["removeAppFromSpace:D:", "moveAppToSpace:UBJ:"],
        },
      },
    },
  },
});
const createAssistantsRuntimeAPI = apiDefToApiPublic<AssistantsAPI>("assistants", {
  api: {
    v1: {
      assistants: {
        "": ["getAssistants:GQ:", "createAssistant:PBJ:"],
        "{assistantId}": {
          actions: { search: ["searchAssistant:PBJ:"] },
          feedback: ["getAssistantFeedback:G:"],
          sources: { plaintexts: ["getAssistantSources:PBJ:"] },
          starters: {
            "": ["getAssistantStarters:GQ:", "createAssistantStarter:PBJ:"],
            "{starterId}": {
              "": ["deleteAssistantStarter:D:", "getAssistantStarter:G:", "updateAssistantStarter:UBJ:"],
              followups: {
                "{followupId}": ["deleteAssistantStarterFollowup:D:", "updateAssistantStarterFollowup:UBJ:"],
              },
            },
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
                    "{feedbackId}": ["patchAssistantThreadInteractionFeedback:ABJ:"],
                  },
                  reviews: ["createAssistantThreadInteractionReview:PBJ:"],
                },
              },
            },
          },
        },
        "{assistantid}": {
          threads: { "{threadid}": ["deleteAssistantThread:D:", "getAssistantThread:G:", "patchAssistantThread:ABJ:"] },
        },
        "{id}": ["deleteAssistant:D:", "getAssistant:G:", "patchAssistant:ABJ:"],
      },
    },
  },
});
const createAuditsRuntimeAPI = apiDefToApiPublic<AuditsAPI>("audits", {
  api: {
    v1: {
      audits: {
        "": ["getAudits:GQ:"],
        actions: { "fetch-consumption-app": ["fetchConsumptionAppAudits:P:"] },
        archive: ["getArchivedAudits:GQ:"],
        settings: ["getAuditsSettings:G:"],
        sources: ["getAuditSources:G:"],
        types: ["getAuditTypes:G:"],
        "{id}": ["getAudit:G:"],
      },
    },
  },
});
const createAutomationConnectionsRuntimeAPI = apiDefToApiPublic<AutomationConnectionsAPI>("automation-connections", {
  api: {
    v1: {
      "automation-connections": {
        "": ["getAutomationConnections:GQ:", "createAutomationConnection:PBJ:"],
        "{id}": {
          "": ["deleteAutomationConnection:DQ:", "getAutomationConnection:G:", "updateAutomationConnection:UBJ:"],
          actions: {
            "change-owner": ["changeOwnerAutomationConnection:PBJ:"],
            "change-space": ["changeSpaceAutomationConnection:PBJ:"],
            check: ["checkAutomationConnection:P:"],
          },
        },
      },
    },
  },
});
const createAutomationConnectorsRuntimeAPI = apiDefToApiPublic<AutomationConnectorsAPI>("automation-connectors", {
  api: { v1: { "automation-connectors": ["getAutomationConnectors:GQ:"] } },
});
const createAutomationsRuntimeAPI = apiDefToApiPublic<AutomationsAPI>("automations", {
  api: {
    v1: {
      automations: {
        "": ["getAutomations:GQ:", "createAutomation:PBJ:"],
        usage: ["getAutomationsUsageMetrics:GQ:"],
        "{id}": {
          "": ["deleteAutomation:D:", "getAutomationWithQuery:GQ:", "getAutomation:G:", "updateAutomation:UBJ:"],
          actions: {
            "change-owner": ["changeOwnerAutomation:PBJ:"],
            "change-space": ["changeSpaceAutomation:PBJ:"],
            copy: ["copyAutomation:PBJ:"],
            disable: ["disableAutomation:P:"],
            enable: ["enableAutomation:P:"],
            move: ["moveAutomation:PBJ:"],
          },
          runs: {
            "": ["getAutomationRuns:GQ:", "queueAutomationRun:PBJ:"],
            "{runId}": {
              "": ["getAutomationRunWithQuery:GQ:", "getAutomationRun:G:"],
              actions: {
                export: ["getAutomationRunDetails:P:"],
                retry: ["retryAutomationRun:P:"],
                stop: ["stopAutomationRun:P:"],
              },
            },
          },
        },
      },
    },
  },
});
const createAutomlDeploymentsRuntimeAPI = apiDefToApiPublic<AutomlDeploymentsAPI>("automl-deployments", {
  api: {
    v1: {
      "automl-deployments": {
        "{deploymentId}": { "realtime-predictions": ["createAutomlDeploymentRealtimePrediction:PQBJ:"] },
      },
    },
  },
});
const createAutomlPredictionsRuntimeAPI = apiDefToApiPublic<AutomlPredictionsAPI>("automl-predictions", {
  api: {
    v1: {
      "automl-predictions": {
        "{predictionId}": {
          "coordinate-shap": ["getAutomlPredictionCoordinateShap:GQ:"],
          jobs: ["createAutomlPredictionJob:P:"],
          "not-predicted-reasons": ["getAutomlPredictionNotPredictedReasons:GQ:"],
          predictions: ["getAutomlPredictionPredictions:GQ:"],
          shap: ["getAutomlPredictionShap:GQ:"],
          source: ["getAutomlPredictionSource:GQ:"],
        },
      },
    },
  },
});
const createBannersRuntimeAPI = apiDefToApiPublic<BannersAPI>("banners", {
  api: { v1: { banners: { "": ["getBanners:G:"], actions: { upsert: ["upsertBanners:PBJ:"] } } } },
});
const createBrandsRuntimeAPI = apiDefToApiPublic<BrandsAPI>("brands", {
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
              "updateBrandFile:UBM:",
            ],
          },
        },
      },
    },
  },
});
const createCollectionsRuntimeAPI = apiDefToApiPublic<CollectionsAPI>("collections", {
  api: {
    v1: {
      collections: {
        "": ["getCollections:GQ:", "createCollection:PBJ:"],
        favorites: ["getFavoritesCollection:G:"],
        "{collectionId}": {
          "": ["deleteCollection:D:", "getCollection:G:", "patchCollection:ABJ:", "updateCollection:UBJ:"],
          items: {
            "": ["getCollectionItems:GQ:", "addCollectionItem:PBJ:"],
            "{itemId}": ["deleteCollectionItem:D:", "getCollectionItem:G:"],
          },
        },
      },
    },
  },
});
const createConditionsRuntimeAPI = apiDefToApiPublic<ConditionsAPI>("conditions", {
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
            "{evaluationId}": ["deleteConditionEvaluation:D:", "getConditionEvaluation:G:"],
          },
        },
      },
    },
  },
});
const createConnectivityDataConnectionsRuntimeAPI = apiDefToApiPublic<ConnectivityDataConnectionsAPI>(
  "connectivity/data-connections",
  {
    api: {
      connectivity: {
        "data-connections": {
          "": ["getDataConnections:GQ:", "createDataConnection:PBJ:"],
          actions: {
            delete: ["deleteDataConnections:PBJ:"],
            duplicate: ["duplicateDataConnections:PBJ:"],
            update: ["updateDataConnections:PBJ:"],
          },
          "{qID}": [
            "deleteDataConnection:DQ:",
            "getDataConnection:GQ:",
            "patchDataConnection:AQBJ:",
            "updateDataConnection:UQBJ:",
          ],
        },
      },
    },
  },
);
const createConnectivityDataCredentialsRuntimeAPI = apiDefToApiPublic<ConnectivityDataCredentialsAPI>(
  "connectivity/data-credentials",
  {
    api: {
      connectivity: {
        "data-credentials": {
          actions: { "filter-orphan": ["filterOrphanDataCredentials:PBJ:"] },
          "{qID}": [
            "deleteDataCredential:DQ:",
            "getDataCredential:GQ:",
            "patchDataCredential:AQBJ:",
            "updateDataCredential:UQBJ:",
          ],
        },
      },
    },
  },
);
const createConnectivityDataSourcesRuntimeAPI = apiDefToApiPublic<ConnectivityDataSourcesAPI>(
  "connectivity/data-sources",
  {
    api: {
      connectivity: {
        "data-sources": {
          "": ["getDataSources:GQ:"],
          actions: { "generate-qri": ["generateQriDataSources:PBJ:"] },
          endpoints: { "": ["getDataSourceEndpoints:G:"], actions: { filter: ["filterDataSourceEndpoints:PBJ:"] } },
          "{dataSourceId}": {
            "api-specs": ["getDataSourceApiSpecs:G:"],
            gateways: ["getDataSourceGateways:GQ:"],
            settings: ["getDataSourceSettings:G:", "putDataSourceSettings:UBJ:"],
          },
        },
      },
    },
  },
);
const createConnectivityDirectAccessAgentsRuntimeAPI = apiDefToApiPublic<ConnectivityDirectAccessAgentsAPI>(
  "connectivity/direct-access-agents",
  {
    api: {
      connectivity: {
        "direct-access-agents": {
          "{agentId}": {
            actions: { "{agentAction}": ["postDirectAccessAgent_FIX_THIS_QUIRKY_NAME:P:"] },
            benchmarks: {
              "": ["getDirectAccessAgentBenchmarks:GQ:", "createDirectAccessAgentBenchmark:PQ:"],
              "{benchmarkId}": {
                "": ["getDirectAccessAgentBenchmark:G:"],
                cancel: ["createDirectAccessAgentBenchmarkCancel:P:"],
              },
            },
            configurations: ["getDirectAccessAgentConfigurations:GQ:"],
            connectors: {
              "file-connector": {
                files: {
                  "allowed-paths": [
                    "getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAME:G:",
                    "putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths_FIX_THIS_QUIRKY_NAME:UBJ:",
                  ],
                },
              },
              "odbc-connector": {
                files: {
                  "custom-data-type-mappings": [
                    "getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAME:G:",
                    "putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings_FIX_THIS_QUIRKY_NAME:UBJ:",
                  ],
                },
              },
              "{connectorType}": {
                files: {
                  "": ["getDirectAccessAgentConnectorFiles:G:"],
                  "{fileType}": ["getDirectAccessAgentConnectorFile:G:", "updateDirectAccessAgentConnectorFile:UBJ:"],
                },
              },
            },
            "load-performance-metrics": ["getDirectAccessAgentLoadPerformanceMetrics:GQ:"],
            tools: {
              "metrics-collector": {
                configuration: [
                  "getDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAME:G:",
                  "putDirectAccessAgentToolsMetricsCollectorConfiguration_FIX_THIS_QUIRKY_NAME:UBJ:",
                ],
              },
            },
          },
        },
      },
    },
  },
);
const createConnectivityRuntimeAPI = apiDefToApiPublic<
  ConnectivityAPI & {
    dataConnections: ConnectivityDataConnectionsAPI;
    dataCredentials: ConnectivityDataCredentialsAPI;
    dataSources: ConnectivityDataSourcesAPI;
    directAccessAgents: ConnectivityDirectAccessAgentsAPI;
  }
>(
  "connectivity",
  {},
  {
    "data-connections": createConnectivityDataConnectionsRuntimeAPI,
    dataConnections: createConnectivityDataConnectionsRuntimeAPI,
    "data-credentials": createConnectivityDataCredentialsRuntimeAPI,
    dataCredentials: createConnectivityDataCredentialsRuntimeAPI,
    "data-sources": createConnectivityDataSourcesRuntimeAPI,
    dataSources: createConnectivityDataSourcesRuntimeAPI,
    "direct-access-agents": createConnectivityDirectAccessAgentsRuntimeAPI,
    directAccessAgents: createConnectivityDirectAccessAgentsRuntimeAPI,
  },
);
const createConsumptionRuntimeAPI = apiDefToApiPublic<ConsumptionAPI>("consumption", {
  api: { v1: { consumption: { executions: ["getConsumptionExecutions:GQ:"] } } },
});
const createCoreAuthSettingsRuntimeAPI = apiDefToApiPublic<CoreAuthSettingsAPI>("core/auth-settings", {
  api: { core: { "auth-settings": ["getAuthSettings:G:", "patchAuthSettings:ABJ:"] } },
});
const createCoreDataFilesRuntimeAPI = apiDefToApiPublic<CoreDataFilesAPI>("core/data-files", {
  api: {
    core: {
      "data-files": {
        actions: { "change-space": ["changeSpaceDataFiles:PBJ:"], post: ["postDataFiles:PBJ:"] },
        connections: { "": ["getDataFilesConnections:GQ:"], actions: { filter: ["filterDataFilesConnections:PBJ:"] } },
        deletes: ["getDataFilesDeletes:GQ:"],
        "{id}": {
          "": ["deleteDataFile:D:", "getDataFile:G:"],
          actions: { "change-owner": ["changeOwnerDataFile:PBJ:"], "change-space": ["changeSpaceDataFile:PBJ:"] },
          "folder-stats": ["getDataFileFolderStats:G:"],
        },
      },
    },
  },
});
const createCoreIpPoliciesRuntimeAPI = apiDefToApiPublic<CoreIpPoliciesAPI>("core/ip-policies", {
  api: {
    core: {
      "ip-policies": {
        "": ["getIpPolicies:GQ:", "createIpPolicy:PBJ:"],
        "{id}": ["deleteIpPolicy:D:", "getIpPolicy:G:", "patchIpPolicy:ABJ:"],
      },
    },
  },
});
const createCoreWebhooksRuntimeAPI = apiDefToApiPublic<CoreWebhooksAPI>("core/webhooks", {
  api: {
    core: {
      webhooks: {
        "": ["getWebhooks:GQ:", "createWebhook:PBJ:"],
        "event-types": ["getWebhookEventTypes:G:"],
        "{id}": {
          "": ["deleteWebhook:D:", "getWebhook:G:", "patchWebhook:ABJ:", "updateWebhook:UBJ:"],
          deliveries: {
            "": ["getWebhookDeliveries:GQ:"],
            "{deliveryId}": { "": ["getWebhookDelivery:G:"], actions: { resend: ["resendWebhookDelivery:P:"] } },
          },
        },
      },
    },
  },
});
const createCoreRuntimeAPI = apiDefToApiPublic<
  CoreAPI & {
    authSettings: CoreAuthSettingsAPI;
    dataFiles: CoreDataFilesAPI;
    ipPolicies: CoreIpPoliciesAPI;
    webhooks: CoreWebhooksAPI;
  }
>(
  "core",
  {},
  {
    "auth-settings": createCoreAuthSettingsRuntimeAPI,
    authSettings: createCoreAuthSettingsRuntimeAPI,
    "data-files": createCoreDataFilesRuntimeAPI,
    dataFiles: createCoreDataFilesRuntimeAPI,
    "ip-policies": createCoreIpPoliciesRuntimeAPI,
    ipPolicies: createCoreIpPoliciesRuntimeAPI,
    webhooks: createCoreWebhooksRuntimeAPI,
  },
);
const createCspOriginsRuntimeAPI = apiDefToApiPublic<CspOriginsAPI>("csp-origins", {
  api: {
    v1: {
      "csp-origins": {
        "": ["getCSPEntries:GQ:", "createCSPEntry:PBJ:"],
        actions: { "generate-header": ["getCSPHeader:G:"] },
        "{id}": ["deleteCSPEntry:D:", "getCSPEntry:G:", "updateCSPEntry:UBJ:"],
      },
    },
  },
});
const createCsrfTokenRuntimeAPI = apiDefToApiPublic<CsrfTokenAPI>("csrf-token", {
  api: { v1: { "csrf-token": ["getCsrfToken:G:"] } },
});
const createDataAlertsRuntimeAPI = apiDefToApiPublic<DataAlertsAPI>("data-alerts", {
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
          "recipient-stats": ["getDataAlertRecipientStats:GQ:"],
        },
        "{taskId}": {
          executions: {
            "": ["getDataAlertExecutions:GQ:"],
            stats: ["getDataAlertExecutionsStats:GQ:"],
            "{executionId}": { evaluations: ["getDataAlertExecutionEvaluations:G:"] },
          },
        },
      },
    },
  },
});
const createDataAssetsRuntimeAPI = apiDefToApiPublic<DataAssetsAPI>("data-assets", {
  api: {
    v1: {
      "data-assets": {
        "": ["deleteDataAssets:DBJ:", "createDataAsset:PBJ:"],
        "{data-asset-id}": ["getDataAsset:GQ:", "patchDataAsset:ABJ:", "updateDataAsset:UBJ:"],
      },
    },
  },
});
const createDataConnectionsRuntimeAPI = apiDefToApiPublic<DataConnectionsAPI>("data-connections", {
  api: {
    v1: {
      "data-connections": {
        "": ["getDataConnections:GQ:", "createDataConnection:PBJ:"],
        actions: {
          delete: ["deleteDataConnections:PBJ:"],
          duplicate: ["duplicateDataAConnection:PBJ:"],
          update: ["updateDataConnections:PBJ:"],
        },
        "{qID}": [
          "deleteDataConnection:DQ:",
          "getDataConnection:GQ:",
          "patchDataConnection:AQBJ:",
          "updateDataConnection:UQBJ:",
        ],
      },
    },
  },
});
const createDataCredentialsRuntimeAPI = apiDefToApiPublic<DataCredentialsAPI>("data-credentials", {
  api: {
    v1: {
      "data-credentials": {
        actions: { "filter-orphan": ["filterOrphanedDataCredentials:PBJ:"] },
        "{qID}": [
          "deleteDataCredential:DQ:",
          "getDataCredential:GQ:",
          "patchDataCredential:AQBJ:",
          "updateDataCredential:UQBJ:",
        ],
      },
    },
  },
});
const createDataFilesRuntimeAPI = apiDefToApiPublic<DataFilesAPI>("data-files", {
  api: {
    v1: {
      "data-files": {
        "": ["getDataFiles:GQ:", "uploadDataFile:PBM:"],
        actions: { "change-space": ["moveDataFiles:PBJ:"], delete: ["deleteDataFiles:PBJ:"] },
        connections: { "": ["getDataFilesConnections:GQ:"], "{id}": ["getDataFileConnection:G:"] },
        quotas: ["getDataFilesQuotas:G:"],
        "{id}": {
          "": ["deleteDataFile:D:", "getDataFile:G:", "reuploadDataFile:UBM:"],
          actions: { "change-owner": ["changeDataFileOwner:PBJ:"], "change-space": ["moveDataFile:PBJ:"] },
        },
      },
    },
  },
});
const createDataGovernanceDataContractsRuntimeAPI = apiDefToApiPublic<DataGovernanceDataContractsAPI>(
  "data-governance/data-contracts",
  {
    api: {
      "data-governance": {
        "data-contracts": {
          datasets: {
            actions: { create: ["createDataContractsDatasets:PBJ:"] },
            "{datasetId}": {
              "": ["deleteDataContractsDataset:D:"],
              expectations: ["getDataContractsDatasetExpectations:G:", "patchDataContractsDatasetExpectations:ABJ:"],
            },
          },
        },
      },
    },
  },
);
const createDataGovernanceDataProductsRuntimeAPI = apiDefToApiPublic<DataGovernanceDataProductsAPI>(
  "data-governance/data-products",
  {
    api: {
      "data-governance": {
        "data-products": {
          "": ["createDataProduct:PBJ:"],
          actions: { "generate-provider-url": ["generateProviderUrlDataProducts:PQ:"] },
          "{dataProductId}": {
            "": ["deleteDataProduct:D:", "getDataProduct:G:", "patchDataProduct:ABJ:"],
            actions: {
              activate: ["activateDataProduct:PBJ:"],
              "compute-datasets-data-quality": ["computeDatasetsDataQualityDataProduct:P:"],
              deactivate: ["deactivateDataProduct:P:"],
              "export-documentation": ["exportDocumentationDataProduct:G:"],
              move: ["moveDataProduct:PBJ:"],
            },
            changelogs: ["getDataProductChangelogs:GQ:"],
          },
        },
      },
    },
  },
);
const createDataGovernanceDataQualitiesRuntimeAPI = apiDefToApiPublic<DataGovernanceDataQualitiesAPI>(
  "data-governance/data-qualities",
  {
    api: {
      "data-governance": {
        "data-qualities": {
          "batch-computations": { "{batchComputationId}": ["getDataQualitiesBatchComputation:G:"] },
          computations: {
            "": ["createDataQualityComputation:PBJ:"],
            "{computationId}": ["getDataQualityComputation:G:"],
          },
          "field-qualities": { actions: { filter: ["filterDataQualitiesFieldQualities:PBJ:"] } },
          "fields-structures": ["putDataQualitiesFieldsStructures:UBJ:"],
          "global-results": {
            "": ["getDataQualityGlobalResults:GQ:"],
            actions: { filter: ["filterDataQualitiesGlobalResults:PBJ:"] },
            "data-quality-rules": {
              actions: { filter: ["filterDataQualitiesGlobalResultsDataQualityRules_FIX_THIS_QUIRKY_NAME:PQBJ:"] },
            },
          },
        },
      },
    },
  },
);
const createDataGovernanceSemanticTypesRuntimeAPI = apiDefToApiPublic<DataGovernanceSemanticTypesAPI>(
  "data-governance/semantic-types",
  {
    api: {
      "data-governance": {
        "semantic-types": {
          "": ["getSemanticTypes:GQ:", "createSemanticType:PBJ:"],
          actions: { export: ["exportSemanticTypes:PBJ:"], import: ["importSemanticTypes:PBJ:"] },
          "{semanticTypeId}": {
            "": ["deleteSemanticType:D:", "getSemanticType:GQ:", "patchSemanticType:ABJ:"],
            "dataset-fields": ["getSemanticTypeDatasetFields:GQ:"],
          },
        },
      },
    },
  },
);
const createDataGovernanceTrustScoresRuntimeAPI = apiDefToApiPublic<DataGovernanceTrustScoresAPI>(
  "data-governance/trust-scores",
  {
    api: {
      "data-governance": {
        "trust-scores": { results: { "data-sets": { actions: { filter: ["filterDatasetsTrustScore:PBJ:"] } } } },
      },
    },
  },
);
const createDataGovernanceRuntimeAPI = apiDefToApiPublic<
  DataGovernanceAPI & {
    dataContracts: DataGovernanceDataContractsAPI;
    dataProducts: DataGovernanceDataProductsAPI;
    dataQualities: DataGovernanceDataQualitiesAPI;
    semanticTypes: DataGovernanceSemanticTypesAPI;
    trustScores: DataGovernanceTrustScoresAPI;
  }
>(
  "data-governance",
  {},
  {
    "data-contracts": createDataGovernanceDataContractsRuntimeAPI,
    dataContracts: createDataGovernanceDataContractsRuntimeAPI,
    "data-products": createDataGovernanceDataProductsRuntimeAPI,
    dataProducts: createDataGovernanceDataProductsRuntimeAPI,
    "data-qualities": createDataGovernanceDataQualitiesRuntimeAPI,
    dataQualities: createDataGovernanceDataQualitiesRuntimeAPI,
    "semantic-types": createDataGovernanceSemanticTypesRuntimeAPI,
    semanticTypes: createDataGovernanceSemanticTypesRuntimeAPI,
    "trust-scores": createDataGovernanceTrustScoresRuntimeAPI,
    trustScores: createDataGovernanceTrustScoresRuntimeAPI,
  },
);
const createDataQualitiesRuntimeAPI = apiDefToApiPublic<DataQualitiesAPI>("data-qualities", {
  api: {
    v1: {
      "data-qualities": {
        computations: {
          "": ["triggerDataQualitiesComputation:PBJ:"],
          "{computationId}": ["getDataQualitiesComputation:G:"],
        },
        "global-results": ["getDataQualitiesGlobalResults:GQ:"],
      },
    },
  },
});
const createDataSetsRuntimeAPI = apiDefToApiPublic<DataSetsAPI>("data-sets", {
  api: {
    v1: {
      "data-sets": {
        "": ["deleteDataSets:DBJ:", "createDataSet:PBJ:"],
        "{data-set-id}": {
          "": ["getDataSet:GQ:", "patchDataSet:ABJ:", "updateDataSet:UBJ:"],
          profiles: ["getDataSetProfiles:GQ:"],
        },
      },
    },
  },
});
const createDataSourcesRuntimeAPI = apiDefToApiPublic<DataSourcesAPI>("data-sources", {
  api: {
    v1: {
      "data-sources": {
        "": ["getDataSources:GQ:"],
        "{dataSourceId}": {
          "api-specs": ["getDataSourceApiSpecs:G:"],
          gateways: ["getDataSourceGateways:GQ:"],
          settings: ["getDataSourceSettings:G:", "putDataSourceSettings:UBJ:"],
        },
      },
    },
  },
});
const createDataStoresRuntimeAPI = apiDefToApiPublic<DataStoresAPI>("data-stores", {
  api: {
    v1: {
      "data-stores": {
        "": ["deleteDataStores:DBJ:", "getDataStores:GQ:", "createDataStore:PBJ:"],
        "{data-store-ids}": {
          "data-assets": {
            "": ["deleteDataStoreDataAssets:D:", "getDataStoreDataAssets:GQ:"],
            "{data-asset-ids}": {
              "data-sets": ["deleteDataStoreDataAssetDataSets:D:", "getDataStoreDataAssetDataSets:GQ:"],
            },
          },
        },
        "{data-store-id}": ["getDataStore:GQ:", "patchDataStore:ABJ:", "updateDataStore:UBJ:"],
      },
    },
  },
});
const createDcaasRuntimeAPI = apiDefToApiPublic<DcaasAPI>("dcaas", {
  api: {
    v1: {
      dcaas: {
        actions: {
          "data-connections": {
            "": ["dataConnectionsDcaas:PBJ:"],
            "api-specs": ["dataConnectionsDcaasApiSpecs:GQ:"],
            "{connectionId}": ["dataConnectionsDcaa:G:"],
          },
        },
      },
    },
  },
});
const createDiProjectsRuntimeAPI = apiDefToApiPublic<DiProjectsAPI>("di-projects", {
  api: {
    v1: {
      "di-projects": {
        "": ["getDiProjects:GQ:", "createDiProject:PBJ:"],
        actions: { "{actionId}": ["getDiProject:GQ:"] },
        utils: { actions: { "validate-project-definitions": ["validateProjectDefinitions:PBM:"] } },
        "{projectId}": {
          actions: {
            export: ["exportDiProject:PBJ:"],
            import: ["importDiProject:PBM:"],
            "import-async": ["importAsyncDiProject:PBM:"],
            prepare: ["prepareDiProject:PBJ:"],
            validate: ["validateDiProject:PBJ:"],
          },
          bindings: ["getDiProjectExportVariables:GQ:", "setDiProjectExportVariables:UBJ:"],
          "di-tasks": {
            "": ["getDiProjectDiTasks:G:"],
            "{dataTaskId}": {
              "": ["getDiProjectDiTask:G:"],
              actions: {
                prepare: ["prepareDiProjectDiTask:PBJ:"],
                "recreate-datasets": ["recreateDatasetsDiProjectDiTask:PBJ:"],
                "request-reload": ["requestReloadDiProjectDiTask:PBJ:"],
                validate: ["validateDiProjectDiTask:PBJ:"],
              },
              runtime: {
                actions: {
                  start: ["startDiProjectDiTaskRuntimeWithBody:PBJ:", "startDiProjectDiTaskRuntime:P:"],
                  stop: ["stopDiProjectDiTaskRuntime:P:"],
                },
                runs: {
                  actions: { search: ["searchDiProjectDiTaskRuntimeRuns:PBJ:"] },
                  "{runId}": {
                    state: {
                      "": ["getDiProjectDiTaskRuntimeRunState:G:"],
                      datasets: ["getDiProjectDiTaskRuntimeRunStateDatasets:G:"],
                    },
                  },
                },
                state: {
                  "": ["getDiProjectDiTaskRuntimeState:G:"],
                  datasets: ["getDiProjectDiTaskRuntimeStateDatasets:G:"],
                },
              },
            },
          },
        },
      },
    },
  },
});
const createDirectAccessAgentsRuntimeAPI = apiDefToApiPublic<DirectAccessAgentsAPI>("direct-access-agents", {
  api: {
    v1: {
      "direct-access-agents": {
        "{agentId}": {
          actions: { "{agentAction}": ["restartDirectAccessAgent:P:"] },
          benchmarks: {
            "": ["createDirectAccessAgentBenchmark:PQ:"],
            "{benchmarkId}": {
              "": ["getDirectAccessAgentBenchmark:G:"],
              cancel: ["createDirectAccessAgentBenchmarkCancel:P:"],
            },
          },
          configurations: ["getDirectAccessAgentConfiguration:GQ:", "patchDirectAccessAgentConfiguration:ABJ:"],
          connectors: {
            "file-connector": {
              files: {
                "allowed-paths": [
                  "getDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths:G:",
                  "putDirectAccessAgentConnectorsFileConnectorFilesAllowedPaths:UBJ:",
                ],
              },
            },
            "odbc-connector": {
              files: {
                "custom-data-type-mappings": [
                  "getDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings:G:",
                  "putDirectAccessAgentConnectorsOdbcConnectorFilesCustomDataTypeMappings:UBJ:",
                ],
              },
            },
            "{connectorType}": {
              files: {
                "": ["getDirectAccessAgentConnectorFiles:GQ:", "getDirectAccessAgentConnectorFilesWithoutQuery:G:"],
                "{fileType}": [
                  "getDirectAccessAgentConnectorFile:G:",
                  "updateDirectAccessAgentConnectorFile:UQBJ:",
                  "updateDirectAccessAgentConnectorFileWithoutQuery:UBJ:",
                ],
              },
            },
          },
          tools: {
            "metrics-collector": {
              configuration: [
                "getDirectAccessAgentToolsMetricsCollectorConfiguration:G:",
                "setDirectAccessAgentToolsMetricsCollectorConfiguration:UBJ:",
              ],
            },
          },
        },
      },
    },
  },
});
const createEncryptionRuntimeAPI = apiDefToApiPublic<EncryptionAPI>("encryption", {
  api: {
    v1: {
      encryption: {
        keyproviders: {
          "": ["getEncryptionKeyproviders:G:", "createEncryptionKeyprovider:PBJ:"],
          actions: {
            list: ["listEncryptionKeyproviders:G:"],
            "reset-to-default-provider": ["resetEncryptionKeyproviders:P:"],
          },
          migration: { actions: { details: ["getEncryptionKeyprovidersMigrationDetails:G:"] } },
          "{arnFingerPrint}": {
            "": ["deleteEncryptionKeyprovider:D:", "getEncryptionKeyprovider:G:", "patchEncryptionKeyprovider:ABJ:"],
            actions: { migrate: ["migrateEncryptionKeyprovider:P:"], test: ["testEncryptionKeyprovider:P:"] },
          },
        },
      },
    },
  },
});
const createExtensionsRuntimeAPI = apiDefToApiPublic<ExtensionsAPI>("extensions", {
  api: {
    v1: {
      extensions: {
        "": ["getExtensions:G:", "uploadExtension:PBM:"],
        "{id}": {
          "": ["deleteExtension:D:", "getExtension:G:", "patchExtension:ABM:"],
          file: { "": ["downloadExtension:G:"], "{filepath}": ["downloadFileFromExtension:G:"] },
        },
      },
    },
  },
});
const createGlossariesRuntimeAPI = apiDefToApiPublic<GlossariesAPI>("glossaries", {
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
              "updateGlossaryCategory:UBJ:",
            ],
          },
          terms: {
            "": ["getGlossaryTerms:GQ:", "createGlossaryTerm:PBJ:"],
            "{termId}": {
              "": ["deleteGlossaryTerm:D:", "getGlossaryTerm:G:", "patchGlossaryTerm:ABJ:", "updateGlossaryTerm:UBJ:"],
              actions: { "change-status": ["changeGlossaryTermStatus:PQ:"] },
              links: ["getGlossaryTermLinks:GQ:", "createGlossaryTermLink:PBJ:"],
              revisions: ["getGlossaryTermRevisions:GQ:"],
            },
          },
        },
      },
    },
  },
});
const createGroupsRuntimeAPI = apiDefToApiPublic<GroupsAPI>("groups", {
  api: {
    v1: {
      groups: {
        "": ["getGroups:GQ:", "createGroup:PBJ:"],
        actions: { filter: ["filterGroups:PQBJ:"] },
        settings: ["getGroupsSettings:G:", "patchGroupsSettings:ABJ:"],
        "{groupId}": ["deleteGroup:D:", "getGroup:G:", "patchGroup:ABJ:"],
      },
    },
  },
});
const createIdentityProvidersRuntimeAPI = apiDefToApiPublic<IdentityProvidersAPI>("identity-providers", {
  api: {
    v1: {
      "identity-providers": {
        "": ["getIdps:GQ:", "createIdp:PBJ:"],
        ".well-known": { "metadata.json": ["getIdpWellKnownMetaData:G:"] },
        me: { meta: ["getMyIdpMeta:G:"] },
        status: ["getIdpStatuses:G:"],
        "{id}": ["deleteIdp:D:", "getIdp:G:", "patchIdp:ABJ:"],
      },
    },
  },
});
const createItemsRuntimeAPI = apiDefToApiPublic<ItemsAPI>("items", {
  api: {
    v1: {
      items: {
        "": ["getItems:GQ:"],
        settings: ["getItemsSettings:G:", "patchItemsSettings:ABJ:"],
        "{itemId}": {
          "": ["deleteItem:D:", "getItem:G:", "updateItem:UBJ:"],
          collections: ["getItemCollections:GQ:"],
          publisheditems: ["getPublishedItems:GQ:"],
        },
      },
    },
  },
});
const createKnowledgebasesRuntimeAPI = apiDefToApiPublic<KnowledgebasesAPI>("knowledgebases", {
  api: {
    v1: {
      knowledgebases: {
        "": ["getKnowledgebases:GQ:", "createKnowledgebase:PBJ:"],
        "{id}": {
          "": ["deleteKnowledgebase:D:", "getKnowledgebase:G:", "patchKnowledgebase:ABJ:"],
          actions: { search: ["searchKnowledgebase:PBJ:"] },
          datasources: {
            "": ["createKnowledgebaseDatasource:PBJ:"],
            "{datasourceId}": {
              "": ["deleteKnowledgebaseDatasource:D:", "updateKnowledgebaseDatasource:UBJ:"],
              actions: {
                cancel: ["cancelKnowledgebaseDatasource:P:"],
                download: ["downloadKnowledgebaseDatasource:PBJ:"],
                sync: ["syncKnowledgebaseDatasource:PQ:"],
              },
              histories: {
                "": ["getKnowledgebaseDatasourceHistories:GQ:"],
                "{syncId}": ["getKnowledgebaseDatasourceHistory:G:"],
              },
              schedules: [
                "deleteKnowledgebaseDatasourceSchedule:D:",
                "getKnowledgebaseDatasourceSchedule:G:",
                "createKnowledgebaseDatasourceSchedule:PBJ:",
              ],
            },
          },
          histories: ["getKnowledgebaseHistories:GQ:"],
        },
      },
    },
  },
});
const createLicensesRuntimeAPI = apiDefToApiPublic<LicensesAPI>("licenses", {
  api: {
    v1: {
      licenses: {
        assignments: {
          "": ["getLicenseAssignments:GQ:"],
          actions: {
            add: ["addLicenseAssignments:PBJ:"],
            delete: ["deleteLicenseAssignments:PBJ:"],
            update: ["updateLicenseAssignments:PBJ:"],
          },
        },
        consumption: ["getLicenseConsumption:GQ:"],
        overview: ["getLicenseOverview:G:"],
        settings: ["getLicenseSettings:G:", "updateLicenseSettings:UBJ:"],
        status: ["getLicenseStatus:G:"],
      },
    },
  },
});
const createLineageGraphsRuntimeAPI = apiDefToApiPublic<LineageGraphsAPI>("lineage-graphs", {
  api: {
    v1: {
      "lineage-graphs": {
        impact: {
          "{id}": {
            actions: { expand: ["expandLineageGraphImpact:GQ:"], search: ["searchLineageGraphImpact:GQ:"] },
            overview: ["getLineageGraphImpactOverview:GQ:"],
            source: ["getLineageGraphImpactSource:G:"],
          },
        },
        nodes: {
          "{id}": {
            "": ["getLineageGraphNode:GQ:"],
            actions: { expand: ["expandLineageGraphNode:GQ:"], search: ["searchLineageGraphNode:GQ:"] },
            overview: ["createLineageGraphNodeOverview:PQBJ:"],
          },
        },
      },
    },
  },
});
const createMlRuntimeAPI = apiDefToApiPublic<MlAPI>("ml", {
  api: {
    v1: {
      ml: {
        deployments: {
          "": ["getMlDeployments:GQ:", "createMlDeployment:PBJ:"],
          "{deploymentId}": {
            "": ["deleteMlDeployment:D:", "getMlDeployment:G:", "patchMlDeployment:ABJ:"],
            actions: {
              "activate-models": ["activateModelsMlDeploymentWithBody:PBJ:", "activateModelsMlDeployment:P:"],
              "deactivate-models": ["deactivateModelsMlDeploymentWithBody:PBJ:", "deactivateModelsMlDeployment:P:"],
            },
            aliases: {
              "": ["getMlDeploymentAliases:GQ:", "createMlDeploymentAliase:PBJ:"],
              "{aliasId}": ["deleteMlDeploymentAliase:D:", "getMlDeploymentAliase:G:", "patchMlDeploymentAliase:ABJ:"],
              "{aliasName}": {
                "realtime-predictions": { actions: { run: ["runMlDeploymentAliaseRealtimePredictions:PQBJ:"] } },
              },
            },
            "batch-predictions": {
              "": ["getMlDeploymentBatchPredictions:GQ:", "createMlDeploymentBatchPrediction:PBJ:"],
              "{batchPredictionId}": {
                "": [
                  "deleteMlDeploymentBatchPrediction:D:",
                  "getMlDeploymentBatchPrediction:G:",
                  "patchMlDeploymentBatchPrediction:ABJ:",
                ],
                actions: { predict: ["predictMlDeploymentBatchPrediction:P:"] },
                schedule: [
                  "deleteMlDeploymentBatchPredictionSchedule:D:",
                  "getMlDeploymentBatchPredictionSchedule:G:",
                  "updateMlDeploymentBatchPredictionSchedule:ABJ:",
                  "setMlDeploymentBatchPredictionSchedule:UBJ:",
                ],
              },
            },
            models: { actions: { add: ["addMlDeploymentModels:PBJ:"], remove: ["removeMlDeploymentModels:PBJ:"] } },
            "realtime-predictions": { actions: { run: ["runMlDeploymentRealtimePredictions:PQBJ:"] } },
          },
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
                "patchMlExperimentVersion:ABJ:",
              ],
            },
          },
        },
        jobs: { "{corrType}": { "{corrId}": { actions: { cancel: ["cancelMlJob:P:"] } } } },
        "profile-insights": {
          "": ["createMlProfileInsight:PBJ:"],
          "{dataSetId}": ["getMlProfileInsightWithQuery:GQ:", "getMlProfileInsight:G:"],
        },
      },
    },
  },
});
const createNotesRuntimeAPI = apiDefToApiPublic<NotesAPI>("notes", {
  api: { v1: { notes: { settings: ["getNotesSettings:G:", "setNotesSettings:UBJ:"] } } },
});
const createNotificationsRuntimeAPI = apiDefToApiPublic<NotificationsAPI>("notifications", {
  api: { v1: { notifications: ["getNotifications:GQ:"] } },
});
const createOauthClientsRuntimeAPI = apiDefToApiPublic<OauthClientsAPI>("oauth-clients", {
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
              "patchOAuthClientConnectionConfig:ABJ:",
            ],
          },
        },
      },
    },
  },
});
const createOauthTokensRuntimeAPI = apiDefToApiPublic<OauthTokensAPI>("oauth-tokens", {
  api: { v1: { "oauth-tokens": { "": ["getOauthTokens:GQ:"], "{tokenId}": ["deleteOauthToken:D:"] } } },
});
const createQuestionsRuntimeAPI = apiDefToApiPublic<QuestionsAPI>("questions", {
  api: { v1: { questions: { actions: { ask: ["askQuestions:PBJ:"], filter: ["filterQuestions:PQBJ:"] } } } },
});
const createQuotasRuntimeAPI = apiDefToApiPublic<QuotasAPI>("quotas", {
  api: { v1: { quotas: { "": ["getQuotas:GQ:"], "{id}": ["getQuota:GQ:"] } } },
});
const createReloadTasksRuntimeAPI = apiDefToApiPublic<ReloadTasksAPI>("reload-tasks", {
  api: {
    v1: {
      "reload-tasks": {
        "": ["getReloadTasks:GQ:", "createReloadTask:PBJ:"],
        "{taskId}": ["deleteReloadTask:D:", "getReloadTask:G:", "updateReloadTask:UBJ:"],
      },
    },
  },
});
const createReloadsRuntimeAPI = apiDefToApiPublic<ReloadsAPI>("reloads", {
  api: {
    v1: {
      reloads: {
        "": ["getReloads:GQ:", "queueReload:PBJ:"],
        "{reloadId}": { "": ["getReload:G:"], actions: { cancel: ["cancelReload:P:"] } },
      },
    },
  },
});
const createReportTemplatesRuntimeAPI = apiDefToApiPublic<ReportTemplatesAPI>("report-templates", {
  api: {
    v1: {
      "report-templates": {
        "": ["getReportTemplates:GQ:", "createReportTemplate:PBJ:"],
        "{id}": {
          "": [
            "deleteReportTemplate:D:",
            "getReportTemplate:G:",
            "patchReportTemplate:ABJ:",
            "updateReportTemplate:UBJ:",
          ],
          actions: { download: ["downloadReportTemplate:P:"] },
        },
      },
    },
  },
});
const createReportsRuntimeAPI = apiDefToApiPublic<ReportsAPI>("reports", {
  api: {
    v1: {
      reports: {
        "": ["createReport:PBJ:"],
        "{id}": { outputs: ["getReportOutputs:GQ:"], status: ["getReportStatus:G:"] },
      },
    },
  },
});
const createRolesRuntimeAPI = apiDefToApiPublic<RolesAPI>("roles", {
  api: {
    v1: {
      roles: { "": ["getRoles:GQ:", "createRole:PBJ:"], "{id}": ["deleteRole:D:", "getRole:G:", "patchRole:ABJ:"] },
    },
  },
});
const createSchedulingTasksRuntimeAPI = apiDefToApiPublic<SchedulingTasksAPI>("scheduling/tasks", {
  api: {
    scheduling: {
      tasks: {
        "": ["getTasks:GQ:", "createTask:PQBJ:", "createTaskWithoutQuery:PBJ:"],
        resources: {
          "{id}": {
            actions: {
              reload: {
                "on-dataset-updated": ["reloadTasksResourceOnDatasetUpdated_FIX_THIS_QUIRKY_NAME:PBJ:"],
                "on-task-event": ["reloadTasksResourceOnTaskEvent_FIX_THIS_QUIRKY_NAME:PBJ:"],
                "on-time-schedule": ["reloadTasksResourceOnTimeSchedule_FIX_THIS_QUIRKY_NAME:PBJ:"],
              },
            },
            runs: ["getTaskResourceRuns:GQ:"],
          },
        },
        "{id}": {
          "": ["deleteTask:D:", "getTask:G:", "patchTask:ABJ:", "updateTask:UBJ:"],
          actions: { start: ["startTask:PQ:"] },
          graphs: {
            ancestors: ["getTaskGraphAncestors:GQ:"],
            children: ["getTaskGraphChildren:GQ:"],
            descendants: ["getTaskGraphDescendants:GQ:"],
            parents: ["getTaskGraphParents:GQ:"],
            subgraph: ["getTaskSubgraph:GQ:"],
          },
          runs: { "": ["getTaskRuns:GQ:"], last: ["getTaskLastRun:G:"], "{runId}": { log: ["getTaskRunLog:G:"] } },
        },
      },
    },
  },
});
const createSchedulingRuntimeAPI = apiDefToApiPublic<SchedulingAPI & { tasks: SchedulingTasksAPI }>(
  "scheduling",
  {},
  { tasks: createSchedulingTasksRuntimeAPI },
);
const createSharingTasksRuntimeAPI = apiDefToApiPublic<SharingTasksAPI>("sharing-tasks", {
  api: {
    v1: {
      "sharing-tasks": {
        "": ["getSharingTasks:GQ:", "createSharingTask:PBJ:"],
        actions: { execute: ["executeSharingTasks:PBJ:"] },
        settings: [
          "getSharingTasksSettings:G:",
          "updateSharingTasksSettings:ABJ:",
          "configureSharingTasksSettings:UBJ:",
        ],
        "{taskId}": {
          "": ["deleteSharingTask:D:", "getSharingTask:GQ:", "patchSharingTask:ABJ:"],
          actions: { cancel: ["cancelSharingTask:P:"] },
          executions: {
            "": ["getSharingTaskExecutions:GQ:"],
            "{executionId}": {
              "": ["getSharingTaskExecution:GQ:"],
              files: { "{fileAlias}": ["getSharingTaskExecutionFile:GQ:"] },
            },
          },
        },
      },
    },
  },
});
const createSpacesRuntimeAPI = apiDefToApiPublic<SpacesAPI>("spaces", {
  api: {
    v1: {
      spaces: {
        "": ["getSpaces:GQ:", "createSpace:PBJ:"],
        types: ["getSpaceTypes:G:"],
        "{spaceId}": {
          "": ["deleteSpace:D:", "getSpace:G:", "patchSpace:ABJ:", "updateSpace:UBJ:"],
          assignments: {
            "": ["getSpaceAssignments:GQ:", "createSpaceAssignment:PBJ:"],
            "{assignmentId}": ["deleteSpaceAssignment:D:", "getSpaceAssignment:G:", "updateSpaceAssignment:UBJ:"],
          },
          shares: {
            "": ["getSpaceShares:GQ:", "createSpaceShare:PBJ:"],
            "{shareId}": ["deleteSpaceShare:D:", "getSpaceShare:G:", "patchShare:ABJ:"],
          },
        },
      },
    },
  },
});
const createTasksRuntimeAPI = apiDefToApiPublic<TasksAPI>("tasks", {
  api: {
    v1: {
      tasks: {
        "": ["getTasks:GQ:", "createTask:PQBJ:"],
        resources: { "{id}": { runs: ["getTasksResourceRuns:GQ:"] } },
        "{id}": {
          "": ["deleteTask:D:", "getTask:G:", "updateTask:UBJ:"],
          actions: { start: ["startTask:PQ:"] },
          runs: { "": ["getTaskRuns:GQ:"], last: ["getLastTaskRun:G:"], "{runId}": { log: ["getTaskRunLog:G:"] } },
        },
      },
    },
  },
});
const createTempContentsRuntimeAPI = apiDefToApiPublic<TempContentsAPI>("temp-contents", {
  api: {
    v1: {
      "temp-contents": {
        "": ["uploadTempFile:PQBO:"],
        "{id}": { "": ["downloadTempFile:GQ:"], details: ["getTempFileDetails:G:"] },
      },
    },
  },
});
const createTenantSettingsRuntimeAPI = apiDefToApiPublic<TenantSettingsAPI>("tenant-settings", {
  api: {
    v1: {
      "tenant-settings": {
        "": [
          "deleteTenantSettings:D:",
          "getTenantSettings:G:",
          "updateTenantSettings:ABJ:",
          "createTenantSettings:PBJ:",
        ],
        actions: {
          "toggle-cross-region-data-processing": ["toggleCrossRegionDataProcessingTenantSettings:PBJ:"],
          "toggle-cross-region-inference": ["toggleCrossRegionInferenceTenantSettings:PBJ:"],
        },
        "start-pages": ["getStartPages:G:"],
      },
    },
  },
});
const createTenantsRuntimeAPI = apiDefToApiPublic<TenantsAPI>("tenants", {
  api: {
    v1: {
      tenants: {
        "": ["createTenant:PBJ:"],
        me: ["getMyTenant:G:"],
        "{tenantId}": {
          "": ["getTenant:G:", "patchTenant:ABJ:"],
          actions: { deactivate: ["deactivateTenant:PBJ:"], reactivate: ["reactivateTenant:PBJ:"] },
        },
      },
    },
  },
});
const createThemesRuntimeAPI = apiDefToApiPublic<ThemesAPI>("themes", {
  api: {
    v1: {
      themes: {
        "": ["getThemes:G:", "uploadTheme:PBM:"],
        "{id}": {
          "": ["deleteTheme:D:", "getTheme:G:", "patchTheme:ABM:"],
          file: { "": ["downloadTheme:G:"], "{filepath}": ["downloadFileFromTheme:G:"] },
        },
      },
    },
  },
});
const createTransportsRuntimeAPI = apiDefToApiPublic<TransportsAPI>("transports", {
  api: {
    v1: {
      transports: {
        "email-config": {
          "": ["deleteEmailConfig:D:", "getEmailConfig:G:", "patchEmailConfig:ABJ:", "updateEmailConfig:UBJ:"],
          actions: {
            "send-test-email": ["sendTestEmail:PBJ:"],
            validate: ["validateEmailConfig:P:"],
            "verify-connection": ["verifyEmailConfigConnection:P:"],
          },
        },
      },
    },
  },
});
const createUiConfigRuntimeAPI = apiDefToApiPublic<UiConfigAPI>("ui-config", {
  api: {
    v1: {
      "ui-config": {
        "pinned-links": {
          "": ["getUiConfigPinnedLinks:G:", "createUiConfigPinnedLink:PBJ:"],
          actions: {
            "bulk-create-pinned-links": ["createUiConfigPinnedLinks:PBJ:"],
            "delete-all-pinned-links": ["deleteAllUiConfigPinnedLinks:P:"],
          },
          "{id}": ["deleteUiConfigPinnedLink:D:", "getUiConfigPinnedLink:G:", "patchUiConfigPinnedLink:ABJ:"],
        },
      },
    },
  },
});
const createUsersRuntimeAPI = apiDefToApiPublic<UsersAPI>("users", {
  api: {
    v1: {
      users: {
        "": ["getUsers:GQ:", "createUser:PBJ:"],
        actions: {
          count: ["countUsers:GQ:", "countUsersWithoutQuery:G:"],
          filter: ["filterUsers:PQBJ:"],
          invite: ["inviteUsers:PBJ:"],
        },
        me: ["getMyUser:G:"],
        "{userId}": ["deleteUser:D:", "getUser:GQ:", "patchUser:ABJ:"],
      },
    },
  },
});
const createWebIntegrationsRuntimeAPI = apiDefToApiPublic<WebIntegrationsAPI>("web-integrations", {
  api: {
    v1: {
      "web-integrations": {
        "": ["getWebIntegrations:GQ:", "createWebIntegration:PBJ:"],
        "{id}": ["deleteWebIntegration:D:", "getWebIntegration:G:", "patchWebIntegration:ABJ:"],
      },
    },
  },
});
const createWebNotificationsRuntimeAPI = apiDefToApiPublic<WebNotificationsAPI>("web-notifications", {
  api: {
    v1: {
      "web-notifications": {
        "": ["getNotifications:GQ:"],
        all: ["deleteNotifications:D:", "patchNotifications:ABJ:"],
        "{notificationId}": ["deleteNotification:D:", "getNotification:G:", "patchNotification:ABJ:"],
      },
    },
  },
});
const createWebhooksRuntimeAPI = apiDefToApiPublic<WebhooksAPI>("webhooks", {
  api: {
    v1: {
      webhooks: {
        "": ["getWebhooks:GQ:", "createWebhook:PBJ:"],
        "event-types": ["getWebhookEventTypes:G:"],
        "{id}": {
          "": ["deleteWebhook:D:", "getWebhook:G:", "patchWebhook:ABJ:", "updateWebhook:UBJ:"],
          deliveries: {
            "": ["getWebhookDeliveries:GQ:"],
            "{deliveryId}": { "": ["getWebhookDelivery:G:"], actions: { resend: ["resendWebhookDelivery:P:"] } },
          },
        },
      },
    },
  },
});
const createWorkflowsAutomationConnectionsRuntimeAPI = apiDefToApiPublic<WorkflowsAutomationConnectionsAPI>(
  "workflows/automation-connections",
  {
    api: {
      workflows: {
        "automation-connections": {
          "": ["getAutomationConnections:GQ:", "createAutomationConnection:PBJ:"],
          "{id}": {
            "": ["deleteAutomationConnection:DQ:", "getAutomationConnection:G:", "updateAutomationConnection:UBJ:"],
            actions: {
              "change-owner": ["changeOwnerAutomationConnection:PBJ:"],
              "change-space": ["changeSpaceAutomationConnection:PBJ:"],
              check: ["checkAutomationConnection:P:"],
            },
          },
        },
      },
    },
  },
);
const createWorkflowsAutomationConnectorsRuntimeAPI = apiDefToApiPublic<WorkflowsAutomationConnectorsAPI>(
  "workflows/automation-connectors",
  {
    api: {
      workflows: {
        "automation-connectors": {
          "": ["getAutomationConnectors:GQ:"],
          "{connectorId}": {
            "": ["getAutomationConnector:G:"],
            webhooks: { configuration: ["getAutomationConnectorWebhooksConfiguration:G:"] },
          },
        },
      },
    },
  },
);
const createWorkflowsAutomationsRuntimeAPI = apiDefToApiPublic<WorkflowsAutomationsAPI>("workflows/automations", {
  api: {
    workflows: {
      automations: {
        "": ["getAutomations:GQ:", "createAutomation:PBJ:"],
        settings: ["getAutomationsSettings:G:", "updateAutomationsSettings:UBJ:"],
        usage: ["getAutomationsUsageMetrics:GQ:"],
        "{id}": {
          "": ["deleteAutomation:D:", "getAutomation:G:", "updateAutomation:UBJ:"],
          actions: {
            "change-owner": ["changeOwnerAutomation:PBJ:"],
            "change-space": ["changeSpaceAutomation:PBJ:"],
            copy: ["copyAutomation:PBJ:"],
            disable: ["disableAutomation:P:"],
            enable: ["enableAutomation:P:"],
            move: ["moveAutomation:PBJ:"],
          },
          runs: {
            "": ["getAutomationRuns:GQ:", "createAutomationRun:PBJ:"],
            "{runId}": {
              "": ["getAutomationRun:G:"],
              actions: {
                export: ["exportAutomationRun:P:"],
                retry: ["retryAutomationRun:P:"],
                stop: ["stopAutomationRun:P:"],
              },
              debug: ["getAutomationRunDebug:G:"],
            },
          },
        },
      },
    },
  },
});
const createWorkflowsRuntimeAPI = apiDefToApiPublic<
  WorkflowsAPI & {
    automationConnections: WorkflowsAutomationConnectionsAPI;
    automationConnectors: WorkflowsAutomationConnectorsAPI;
    automations: WorkflowsAutomationsAPI;
  }
>(
  "workflows",
  {},
  {
    "automation-connections": createWorkflowsAutomationConnectionsRuntimeAPI,
    automationConnections: createWorkflowsAutomationConnectionsRuntimeAPI,
    "automation-connectors": createWorkflowsAutomationConnectorsRuntimeAPI,
    automationConnectors: createWorkflowsAutomationConnectorsRuntimeAPI,
    automations: createWorkflowsAutomationsRuntimeAPI,
  },
);

export const auth = _auth;
export const interceptors = _interceptors;
export const qix = _qix;
export const alerting = createAlertingRuntimeAPI(undefined, _interceptors);
export const analytics = createAnalyticsRuntimeAPI(undefined, _interceptors);
export const apiKeys = createApiKeysRuntimeAPI(undefined, _interceptors);
export const apps = createAppsRuntimeAPI(undefined, _interceptors);
export const assistants = createAssistantsRuntimeAPI(undefined, _interceptors);
export const audits = createAuditsRuntimeAPI(undefined, _interceptors);
export const automationConnections = createAutomationConnectionsRuntimeAPI(undefined, _interceptors);
export const automationConnectors = createAutomationConnectorsRuntimeAPI(undefined, _interceptors);
export const automations = createAutomationsRuntimeAPI(undefined, _interceptors);
export const automlDeployments = createAutomlDeploymentsRuntimeAPI(undefined, _interceptors);
export const automlPredictions = createAutomlPredictionsRuntimeAPI(undefined, _interceptors);
export const banners = createBannersRuntimeAPI(undefined, _interceptors);
export const brands = createBrandsRuntimeAPI(undefined, _interceptors);
export const collections = createCollectionsRuntimeAPI(undefined, _interceptors);
export const conditions = createConditionsRuntimeAPI(undefined, _interceptors);
export const connectivity = createConnectivityRuntimeAPI(undefined, _interceptors);
export const consumption = createConsumptionRuntimeAPI(undefined, _interceptors);
export const core = createCoreRuntimeAPI(undefined, _interceptors);
export const cspOrigins = createCspOriginsRuntimeAPI(undefined, _interceptors);
export const csrfToken = createCsrfTokenRuntimeAPI(undefined, _interceptors);
export const dataAlerts = createDataAlertsRuntimeAPI(undefined, _interceptors);
export const dataAssets = createDataAssetsRuntimeAPI(undefined, _interceptors);
export const dataConnections = createDataConnectionsRuntimeAPI(undefined, _interceptors);
export const dataCredentials = createDataCredentialsRuntimeAPI(undefined, _interceptors);
export const dataFiles = createDataFilesRuntimeAPI(undefined, _interceptors);
export const dataGovernance = createDataGovernanceRuntimeAPI(undefined, _interceptors);
export const dataQualities = createDataQualitiesRuntimeAPI(undefined, _interceptors);
export const dataSets = createDataSetsRuntimeAPI(undefined, _interceptors);
export const dataSources = createDataSourcesRuntimeAPI(undefined, _interceptors);
export const dataStores = createDataStoresRuntimeAPI(undefined, _interceptors);
export const dcaas = createDcaasRuntimeAPI(undefined, _interceptors);
export const diProjects = createDiProjectsRuntimeAPI(undefined, _interceptors);
export const directAccessAgents = createDirectAccessAgentsRuntimeAPI(undefined, _interceptors);
export const encryption = createEncryptionRuntimeAPI(undefined, _interceptors);
export const extensions = createExtensionsRuntimeAPI(undefined, _interceptors);
export const glossaries = createGlossariesRuntimeAPI(undefined, _interceptors);
export const groups = createGroupsRuntimeAPI(undefined, _interceptors);
export const identityProviders = createIdentityProvidersRuntimeAPI(undefined, _interceptors);
export const items = createItemsRuntimeAPI(undefined, _interceptors);
export const knowledgebases = createKnowledgebasesRuntimeAPI(undefined, _interceptors);
export const licenses = createLicensesRuntimeAPI(undefined, _interceptors);
export const lineageGraphs = createLineageGraphsRuntimeAPI(undefined, _interceptors);
export const ml = createMlRuntimeAPI(undefined, _interceptors);
export const notes = createNotesRuntimeAPI(undefined, _interceptors);
export const notifications = createNotificationsRuntimeAPI(undefined, _interceptors);
export const oauthClients = createOauthClientsRuntimeAPI(undefined, _interceptors);
export const oauthTokens = createOauthTokensRuntimeAPI(undefined, _interceptors);
export const questions = createQuestionsRuntimeAPI(undefined, _interceptors);
export const quotas = createQuotasRuntimeAPI(undefined, _interceptors);
export const reloadTasks = createReloadTasksRuntimeAPI(undefined, _interceptors);
export const reloads = createReloadsRuntimeAPI(undefined, _interceptors);
export const reportTemplates = createReportTemplatesRuntimeAPI(undefined, _interceptors);
export const reports = createReportsRuntimeAPI(undefined, _interceptors);
export const roles = createRolesRuntimeAPI(undefined, _interceptors);
export const scheduling = createSchedulingRuntimeAPI(undefined, _interceptors);
export const sharingTasks = createSharingTasksRuntimeAPI(undefined, _interceptors);
export const spaces = createSpacesRuntimeAPI(undefined, _interceptors);
export const tasks = createTasksRuntimeAPI(undefined, _interceptors);
export const tempContents = createTempContentsRuntimeAPI(undefined, _interceptors);
export const tenantSettings = createTenantSettingsRuntimeAPI(undefined, _interceptors);
export const tenants = createTenantsRuntimeAPI(undefined, _interceptors);
export const themes = createThemesRuntimeAPI(undefined, _interceptors);
export const transports = createTransportsRuntimeAPI(undefined, _interceptors);
export const uiConfig = createUiConfigRuntimeAPI(undefined, _interceptors);
export const users = createUsersRuntimeAPI(undefined, _interceptors);
export const webIntegrations = createWebIntegrationsRuntimeAPI(undefined, _interceptors);
export const webNotifications = createWebNotificationsRuntimeAPI(undefined, _interceptors);
export const webhooks = createWebhooksRuntimeAPI(undefined, _interceptors);
export const workflows = createWorkflowsRuntimeAPI(undefined, _interceptors);

export interface QlikAPI {
  /** Functions for the auth api */
  auth: AuthAPI;
  /** Functions for the interceptors api */
  interceptors: InterceptorsAPI;
  /** Functions for the qix api */
  qix: QixAPI;
  /** Functions for the alerting api */
  alerting: AlertingAPI & { sharingTasks: AlertingSharingTasksAPI };
  /** Functions for the analytics api */
  analytics: AnalyticsAPI & {
    apps: AnalyticsAppsAPI;
    changeStores: AnalyticsChangeStoresAPI;
    discoveryAgent: AnalyticsDiscoveryAgentAPI & { adaptiveCards: AnalyticsDiscoveryAgentAdaptiveCardsAPI };
    odagApps: AnalyticsOdagAppsAPI;
    odagLinks: AnalyticsOdagLinksAPI;
    odagRequests: AnalyticsOdagRequestsAPI;
    odagSettings: AnalyticsOdagSettingsAPI;
  };
  /** Functions for the apiKeys api */
  apiKeys: ApiKeysAPI;
  /** Functions for the apps api */
  apps: AppsAPI;
  /** Functions for the assistants api */
  assistants: AssistantsAPI;
  /** Functions for the audits api */
  audits: AuditsAPI;
  /** Functions for the automationConnections api */
  automationConnections: AutomationConnectionsAPI;
  /** Functions for the automationConnectors api */
  automationConnectors: AutomationConnectorsAPI;
  /** Functions for the automations api */
  automations: AutomationsAPI;
  /** Functions for the automlDeployments api */
  automlDeployments: AutomlDeploymentsAPI;
  /** Functions for the automlPredictions api */
  automlPredictions: AutomlPredictionsAPI;
  /** Functions for the banners api */
  banners: BannersAPI;
  /** Functions for the brands api */
  brands: BrandsAPI;
  /** Functions for the collections api */
  collections: CollectionsAPI;
  /** Functions for the conditions api */
  conditions: ConditionsAPI;
  /** Functions for the connectivity api */
  connectivity: ConnectivityAPI & {
    dataConnections: ConnectivityDataConnectionsAPI;
    dataCredentials: ConnectivityDataCredentialsAPI;
    dataSources: ConnectivityDataSourcesAPI;
    directAccessAgents: ConnectivityDirectAccessAgentsAPI;
  };
  /** Functions for the consumption api */
  consumption: ConsumptionAPI;
  /** Functions for the core api */
  core: CoreAPI & {
    authSettings: CoreAuthSettingsAPI;
    dataFiles: CoreDataFilesAPI;
    ipPolicies: CoreIpPoliciesAPI;
    webhooks: CoreWebhooksAPI;
  };
  /** Functions for the cspOrigins api */
  cspOrigins: CspOriginsAPI;
  /** Functions for the csrfToken api */
  csrfToken: CsrfTokenAPI;
  /** Functions for the dataAlerts api */
  dataAlerts: DataAlertsAPI;
  /** Functions for the dataAssets api */
  dataAssets: DataAssetsAPI;
  /** Functions for the dataConnections api */
  dataConnections: DataConnectionsAPI;
  /** Functions for the dataCredentials api */
  dataCredentials: DataCredentialsAPI;
  /** Functions for the dataFiles api */
  dataFiles: DataFilesAPI;
  /** Functions for the dataGovernance api */
  dataGovernance: DataGovernanceAPI & {
    dataContracts: DataGovernanceDataContractsAPI;
    dataProducts: DataGovernanceDataProductsAPI;
    dataQualities: DataGovernanceDataQualitiesAPI;
    semanticTypes: DataGovernanceSemanticTypesAPI;
    trustScores: DataGovernanceTrustScoresAPI;
  };
  /** Functions for the dataQualities api */
  dataQualities: DataQualitiesAPI;
  /** Functions for the dataSets api */
  dataSets: DataSetsAPI;
  /** Functions for the dataSources api */
  dataSources: DataSourcesAPI;
  /** Functions for the dataStores api */
  dataStores: DataStoresAPI;
  /** Functions for the dcaas api */
  dcaas: DcaasAPI;
  /** Functions for the diProjects api */
  diProjects: DiProjectsAPI;
  /** Functions for the directAccessAgents api */
  directAccessAgents: DirectAccessAgentsAPI;
  /** Functions for the encryption api */
  encryption: EncryptionAPI;
  /** Functions for the extensions api */
  extensions: ExtensionsAPI;
  /** Functions for the glossaries api */
  glossaries: GlossariesAPI;
  /** Functions for the groups api */
  groups: GroupsAPI;
  /** Functions for the identityProviders api */
  identityProviders: IdentityProvidersAPI;
  /** Functions for the items api */
  items: ItemsAPI;
  /** Functions for the knowledgebases api */
  knowledgebases: KnowledgebasesAPI;
  /** Functions for the licenses api */
  licenses: LicensesAPI;
  /** Functions for the lineageGraphs api */
  lineageGraphs: LineageGraphsAPI;
  /** Functions for the ml api */
  ml: MlAPI;
  /** Functions for the notes api */
  notes: NotesAPI;
  /** Functions for the notifications api */
  notifications: NotificationsAPI;
  /** Functions for the oauthClients api */
  oauthClients: OauthClientsAPI;
  /** Functions for the oauthTokens api */
  oauthTokens: OauthTokensAPI;
  /** Functions for the questions api */
  questions: QuestionsAPI;
  /** Functions for the quotas api */
  quotas: QuotasAPI;
  /** Functions for the reloadTasks api */
  reloadTasks: ReloadTasksAPI;
  /** Functions for the reloads api */
  reloads: ReloadsAPI;
  /** Functions for the reportTemplates api */
  reportTemplates: ReportTemplatesAPI;
  /** Functions for the reports api */
  reports: ReportsAPI;
  /** Functions for the roles api */
  roles: RolesAPI;
  /** Functions for the scheduling api */
  scheduling: SchedulingAPI & { tasks: SchedulingTasksAPI };
  /** Functions for the sharingTasks api */
  sharingTasks: SharingTasksAPI;
  /** Functions for the spaces api */
  spaces: SpacesAPI;
  /** Functions for the tasks api */
  tasks: TasksAPI;
  /** Functions for the tempContents api */
  tempContents: TempContentsAPI;
  /** Functions for the tenantSettings api */
  tenantSettings: TenantSettingsAPI;
  /** Functions for the tenants api */
  tenants: TenantsAPI;
  /** Functions for the themes api */
  themes: ThemesAPI;
  /** Functions for the transports api */
  transports: TransportsAPI;
  /** Functions for the uiConfig api */
  uiConfig: UiConfigAPI;
  /** Functions for the users api */
  users: UsersAPI;
  /** Functions for the webIntegrations api */
  webIntegrations: WebIntegrationsAPI;
  /** Functions for the webNotifications api */
  webNotifications: WebNotificationsAPI;
  /** Functions for the webhooks api */
  webhooks: WebhooksAPI;
  /** Functions for the workflows api */
  workflows: WorkflowsAPI & {
    automationConnections: WorkflowsAutomationConnectionsAPI;
    automationConnectors: WorkflowsAutomationConnectorsAPI;
    automations: WorkflowsAutomationsAPI;
  };
}

export type CreateQlikApiProps = {
  hostConfig?: HostConfig;
};

export const createQlikApi = (props?: CreateQlikApiProps): QlikAPI => {
  const scopedInterceptors = _interceptors.createInterceptors();
  return {
    auth: _auth,
    interceptors: scopedInterceptors,
    qix: _qix.withHostConfig(props?.hostConfig),
    alerting: createAlertingRuntimeAPI(props?.hostConfig, scopedInterceptors),
    analytics: createAnalyticsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    apiKeys: createApiKeysRuntimeAPI(props?.hostConfig, scopedInterceptors),
    apps: createAppsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    assistants: createAssistantsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    audits: createAuditsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    automationConnections: createAutomationConnectionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    automationConnectors: createAutomationConnectorsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    automations: createAutomationsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    automlDeployments: createAutomlDeploymentsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    automlPredictions: createAutomlPredictionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    banners: createBannersRuntimeAPI(props?.hostConfig, scopedInterceptors),
    brands: createBrandsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    collections: createCollectionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    conditions: createConditionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    connectivity: createConnectivityRuntimeAPI(props?.hostConfig, scopedInterceptors),
    consumption: createConsumptionRuntimeAPI(props?.hostConfig, scopedInterceptors),
    core: createCoreRuntimeAPI(props?.hostConfig, scopedInterceptors),
    cspOrigins: createCspOriginsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    csrfToken: createCsrfTokenRuntimeAPI(props?.hostConfig, scopedInterceptors),
    dataAlerts: createDataAlertsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    dataAssets: createDataAssetsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    dataConnections: createDataConnectionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    dataCredentials: createDataCredentialsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    dataFiles: createDataFilesRuntimeAPI(props?.hostConfig, scopedInterceptors),
    dataGovernance: createDataGovernanceRuntimeAPI(props?.hostConfig, scopedInterceptors),
    dataQualities: createDataQualitiesRuntimeAPI(props?.hostConfig, scopedInterceptors),
    dataSets: createDataSetsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    dataSources: createDataSourcesRuntimeAPI(props?.hostConfig, scopedInterceptors),
    dataStores: createDataStoresRuntimeAPI(props?.hostConfig, scopedInterceptors),
    dcaas: createDcaasRuntimeAPI(props?.hostConfig, scopedInterceptors),
    diProjects: createDiProjectsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    directAccessAgents: createDirectAccessAgentsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    encryption: createEncryptionRuntimeAPI(props?.hostConfig, scopedInterceptors),
    extensions: createExtensionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    glossaries: createGlossariesRuntimeAPI(props?.hostConfig, scopedInterceptors),
    groups: createGroupsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    identityProviders: createIdentityProvidersRuntimeAPI(props?.hostConfig, scopedInterceptors),
    items: createItemsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    knowledgebases: createKnowledgebasesRuntimeAPI(props?.hostConfig, scopedInterceptors),
    licenses: createLicensesRuntimeAPI(props?.hostConfig, scopedInterceptors),
    lineageGraphs: createLineageGraphsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    ml: createMlRuntimeAPI(props?.hostConfig, scopedInterceptors),
    notes: createNotesRuntimeAPI(props?.hostConfig, scopedInterceptors),
    notifications: createNotificationsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    oauthClients: createOauthClientsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    oauthTokens: createOauthTokensRuntimeAPI(props?.hostConfig, scopedInterceptors),
    questions: createQuestionsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    quotas: createQuotasRuntimeAPI(props?.hostConfig, scopedInterceptors),
    reloadTasks: createReloadTasksRuntimeAPI(props?.hostConfig, scopedInterceptors),
    reloads: createReloadsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    reportTemplates: createReportTemplatesRuntimeAPI(props?.hostConfig, scopedInterceptors),
    reports: createReportsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    roles: createRolesRuntimeAPI(props?.hostConfig, scopedInterceptors),
    scheduling: createSchedulingRuntimeAPI(props?.hostConfig, scopedInterceptors),
    sharingTasks: createSharingTasksRuntimeAPI(props?.hostConfig, scopedInterceptors),
    spaces: createSpacesRuntimeAPI(props?.hostConfig, scopedInterceptors),
    tasks: createTasksRuntimeAPI(props?.hostConfig, scopedInterceptors),
    tempContents: createTempContentsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    tenantSettings: createTenantSettingsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    tenants: createTenantsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    themes: createThemesRuntimeAPI(props?.hostConfig, scopedInterceptors),
    transports: createTransportsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    uiConfig: createUiConfigRuntimeAPI(props?.hostConfig, scopedInterceptors),
    users: createUsersRuntimeAPI(props?.hostConfig, scopedInterceptors),
    webIntegrations: createWebIntegrationsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    webNotifications: createWebNotificationsRuntimeAPI(props?.hostConfig, scopedInterceptors),
    webhooks: createWebhooksRuntimeAPI(props?.hostConfig, scopedInterceptors),
    workflows: createWorkflowsRuntimeAPI(props?.hostConfig, scopedInterceptors),
  };
};

/** Javascript/Typescript bindings to Qlik's platform API's */
const api: QlikAPI & { createQlikApi: (props?: { hostConfig?: HostConfig }) => QlikAPI } = {
  auth,
  interceptors,
  qix,
  alerting,
  analytics,
  apiKeys,
  apps,
  assistants,
  audits,
  automationConnections,
  automationConnectors,
  automations,
  automlDeployments,
  automlPredictions,
  banners,
  brands,
  collections,
  conditions,
  connectivity,
  consumption,
  core,
  cspOrigins,
  csrfToken,
  dataAlerts,
  dataAssets,
  dataConnections,
  dataCredentials,
  dataFiles,
  dataGovernance,
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
  items,
  knowledgebases,
  licenses,
  lineageGraphs,
  ml,
  notes,
  notifications,
  oauthClients,
  oauthTokens,
  questions,
  quotas,
  reloadTasks,
  reloads,
  reportTemplates,
  reports,
  roles,
  scheduling,
  sharingTasks,
  spaces,
  tasks,
  tempContents,
  tenantSettings,
  tenants,
  themes,
  transports,
  uiConfig,
  users,
  webIntegrations,
  webNotifications,
  webhooks,
  workflows,
  createQlikApi,
};

export default api;
