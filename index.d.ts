import { d as HostConfig } from "./chunks/auth-types-yKuw6LLB.js";
import { InterceptorsAPI, createInterceptors } from "./interceptors.js";
import { AuthAPI, getAccessToken, getWebResourceAuthParams, registerAuthModule, registerHostConfig, setDefaultHostConfig, unregisterHostConfig } from "./auth.js";
import { t as QixAPI } from "./chunks/qix-CnLwp1Tz.js";
import { AppsAPI } from "./analytics/apps.js";
import { ChangeStoresAPI } from "./analytics/change-stores.js";
import { r as AdaptiveCardsAPI } from "./chunks/adaptive-cards-BnD5L1JE.js";
import { DiscoveryAgentAPI } from "./analytics/discovery-agent.js";
import { OdagAppsAPI } from "./analytics/odag-apps.js";
import { OdagLinksAPI } from "./analytics/odag-links.js";
import { OdagRequestsAPI } from "./analytics/odag-requests.js";
import { OdagSettingsAPI } from "./analytics/odag-settings.js";
import { AnalyticsAPI } from "./analytics.js";
import { ApiKeysAPI } from "./api-keys.js";
import { AppsAPI as AppsAPI$1 } from "./apps.js";
import { AssistantsAPI } from "./assistants.js";
import { AuditsAPI } from "./audits.js";
import { AutomationConnectionsAPI } from "./automation-connections.js";
import { AutomationConnectorsAPI } from "./automation-connectors.js";
import { AutomationsAPI } from "./automations.js";
import { AutomlDeploymentsAPI } from "./automl-deployments.js";
import { AutomlPredictionsAPI } from "./automl-predictions.js";
import { BannersAPI } from "./banners.js";
import { BrandsAPI } from "./brands.js";
import { CollectionsAPI } from "./collections.js";
import { ConditionsAPI } from "./conditions.js";
import { DataConnectionsAPI } from "./connectivity/data-connections.js";
import { DataCredentialsAPI } from "./connectivity/data-credentials.js";
import { DataSourcesAPI } from "./connectivity/data-sources.js";
import { DirectAccessAgentsAPI } from "./connectivity/direct-access-agents.js";
import { ConnectivityAPI } from "./connectivity.js";
import { ConsumptionAPI } from "./consumption.js";
import { AuthSettingsAPI } from "./core/auth-settings.js";
import { DataFilesAPI } from "./core/data-files.js";
import { IpPoliciesAPI } from "./core/ip-policies.js";
import { CoreAPI } from "./core.js";
import { CspOriginsAPI } from "./csp-origins.js";
import { CsrfTokenAPI } from "./csrf-token.js";
import { DataAlertsAPI } from "./data-alerts.js";
import { DataAssetsAPI } from "./data-assets.js";
import { DataConnectionsAPI as DataConnectionsAPI$1 } from "./data-connections.js";
import { DataCredentialsAPI as DataCredentialsAPI$1 } from "./data-credentials.js";
import { DataFilesAPI as DataFilesAPI$1 } from "./data-files.js";
import { DataProductsAPI } from "./data-governance/data-products.js";
import { DataQualitiesAPI } from "./data-governance/data-qualities.js";
import { SemanticTypesAPI } from "./data-governance/semantic-types.js";
import { TrustScoresAPI } from "./data-governance/trust-scores.js";
import { DataGovernanceAPI } from "./data-governance.js";
import { DataQualitiesAPI as DataQualitiesAPI$1 } from "./data-qualities.js";
import { DataSetsAPI } from "./data-sets.js";
import { DataSourcesAPI as DataSourcesAPI$1 } from "./data-sources.js";
import { DataStoresAPI } from "./data-stores.js";
import { DcaasAPI } from "./dcaas.js";
import { DiProjectsAPI } from "./di-projects.js";
import { DirectAccessAgentsAPI as DirectAccessAgentsAPI$1 } from "./direct-access-agents.js";
import { EncryptionAPI } from "./encryption.js";
import { ExtensionsAPI } from "./extensions.js";
import { GlossariesAPI } from "./glossaries.js";
import { GroupsAPI } from "./groups.js";
import { IdentityProvidersAPI } from "./identity-providers.js";
import { ItemsAPI } from "./items.js";
import { KnowledgebasesAPI } from "./knowledgebases.js";
import { LicensesAPI } from "./licenses.js";
import { LineageGraphsAPI } from "./lineage-graphs.js";
import { MlAPI } from "./ml.js";
import { NotesAPI } from "./notes.js";
import { NotificationsAPI } from "./notifications.js";
import { OauthClientsAPI } from "./oauth-clients.js";
import { OauthTokensAPI } from "./oauth-tokens.js";
import { QuestionsAPI } from "./questions.js";
import { QuotasAPI } from "./quotas.js";
import { ReloadTasksAPI } from "./reload-tasks.js";
import { ReloadsAPI } from "./reloads.js";
import { ReportTemplatesAPI } from "./report-templates.js";
import { ReportsAPI } from "./reports.js";
import { RolesAPI } from "./roles.js";
import { TasksAPI } from "./scheduling/tasks.js";
import { SchedulingAPI } from "./scheduling.js";
import { SharingTasksAPI } from "./sharing-tasks.js";
import { SpacesAPI } from "./spaces.js";
import { TasksAPI as TasksAPI$1 } from "./tasks.js";
import { TempContentsAPI } from "./temp-contents.js";
import { TenantSettingsAPI } from "./tenant-settings.js";
import { TenantsAPI } from "./tenants.js";
import { ThemesAPI } from "./themes.js";
import { TransportsAPI } from "./transports.js";
import { UiConfigAPI } from "./ui-config.js";
import { UsersAPI } from "./users.js";
import { WebIntegrationsAPI } from "./web-integrations.js";
import { WebNotificationsAPI } from "./web-notifications.js";
import { WebhooksAPI } from "./webhooks.js";
import { AutomationConnectionsAPI as AutomationConnectionsAPI$1 } from "./workflows/automation-connections.js";
import { AutomationConnectorsAPI as AutomationConnectorsAPI$1 } from "./workflows/automation-connectors.js";
import { AutomationsAPI as AutomationsAPI$1 } from "./workflows/automations.js";
import { WorkflowsAPI } from "./workflows.js";
//#region src/public/index.d.ts
export declare const auth: {
  registerAuthModule: typeof registerAuthModule;
  setDefaultHostConfig: typeof setDefaultHostConfig;
  registerHostConfig: typeof registerHostConfig;
  unregisterHostConfig: typeof unregisterHostConfig;
  getAccessToken: typeof getAccessToken;
  getWebResourceAuthParams: typeof getWebResourceAuthParams;
};
export declare const interceptors: InterceptorsAPI & {
  createInterceptors: typeof createInterceptors;
};
export declare const qix: QixAPI & {
  withHostConfig: (hostConfig: HostConfig | undefined) => QixAPI;
};
export declare const analytics: {
  apps: AppsAPI;
  changeStores: ChangeStoresAPI;
  discoveryAgent: DiscoveryAgentAPI & {
    adaptiveCards: AdaptiveCardsAPI;
  };
  odagApps: OdagAppsAPI;
  odagLinks: OdagLinksAPI;
  odagRequests: OdagRequestsAPI;
  odagSettings: OdagSettingsAPI;
};
export declare const apiKeys: ApiKeysAPI;
export declare const apps: AppsAPI$1;
export declare const assistants: AssistantsAPI;
export declare const audits: AuditsAPI;
export declare const automationConnections: AutomationConnectionsAPI;
export declare const automationConnectors: AutomationConnectorsAPI;
export declare const automations: AutomationsAPI;
export declare const automlDeployments: AutomlDeploymentsAPI;
export declare const automlPredictions: AutomlPredictionsAPI;
export declare const banners: BannersAPI;
export declare const brands: BrandsAPI;
export declare const collections: CollectionsAPI;
export declare const conditions: ConditionsAPI;
export declare const connectivity: {
  dataConnections: DataConnectionsAPI;
  dataCredentials: DataCredentialsAPI;
  dataSources: DataSourcesAPI;
  directAccessAgents: DirectAccessAgentsAPI;
};
export declare const consumption: ConsumptionAPI;
export declare const core: {
  authSettings: AuthSettingsAPI;
  dataFiles: DataFilesAPI;
  ipPolicies: IpPoliciesAPI;
};
export declare const cspOrigins: CspOriginsAPI;
export declare const csrfToken: CsrfTokenAPI;
export declare const dataAlerts: DataAlertsAPI;
export declare const dataAssets: DataAssetsAPI;
export declare const dataConnections: DataConnectionsAPI$1;
export declare const dataCredentials: DataCredentialsAPI$1;
export declare const dataFiles: DataFilesAPI$1;
export declare const dataGovernance: {
  dataProducts: DataProductsAPI;
  dataQualities: DataQualitiesAPI;
  semanticTypes: SemanticTypesAPI;
  trustScores: TrustScoresAPI;
};
export declare const dataQualities: DataQualitiesAPI$1;
export declare const dataSets: DataSetsAPI;
export declare const dataSources: DataSourcesAPI$1;
export declare const dataStores: DataStoresAPI;
export declare const dcaas: DcaasAPI;
export declare const diProjects: DiProjectsAPI;
export declare const directAccessAgents: DirectAccessAgentsAPI$1;
export declare const encryption: EncryptionAPI;
export declare const extensions: ExtensionsAPI;
export declare const glossaries: GlossariesAPI;
export declare const groups: GroupsAPI;
export declare const identityProviders: IdentityProvidersAPI;
export declare const items: ItemsAPI;
export declare const knowledgebases: KnowledgebasesAPI;
export declare const licenses: LicensesAPI;
export declare const lineageGraphs: LineageGraphsAPI;
export declare const ml: MlAPI;
export declare const notes: NotesAPI;
export declare const notifications: NotificationsAPI;
export declare const oauthClients: OauthClientsAPI;
export declare const oauthTokens: OauthTokensAPI;
export declare const questions: QuestionsAPI;
export declare const quotas: QuotasAPI;
export declare const reloadTasks: ReloadTasksAPI;
export declare const reloads: ReloadsAPI;
export declare const reportTemplates: ReportTemplatesAPI;
export declare const reports: ReportsAPI;
export declare const roles: RolesAPI;
export declare const scheduling: {
  tasks: TasksAPI;
};
export declare const sharingTasks: SharingTasksAPI;
export declare const spaces: SpacesAPI;
export declare const tasks: TasksAPI$1;
export declare const tempContents: TempContentsAPI;
export declare const tenantSettings: TenantSettingsAPI;
export declare const tenants: TenantsAPI;
export declare const themes: ThemesAPI;
export declare const transports: TransportsAPI;
export declare const uiConfig: UiConfigAPI;
export declare const users: UsersAPI;
export declare const webIntegrations: WebIntegrationsAPI;
export declare const webNotifications: WebNotificationsAPI;
export declare const webhooks: WebhooksAPI;
export declare const workflows: {
  automationConnections: AutomationConnectionsAPI$1;
  automationConnectors: AutomationConnectorsAPI$1;
  automations: AutomationsAPI$1;
};
export interface QlikAPI {
  /** Functions for the auth api */
  auth: AuthAPI;
  /** Functions for the interceptors api */
  interceptors: InterceptorsAPI;
  /** Functions for the qix api */
  qix: QixAPI;
  /** Functions for the analytics api */
  analytics: AnalyticsAPI & {
    apps: AppsAPI;
    changeStores: ChangeStoresAPI;
    discoveryAgent: DiscoveryAgentAPI & {
      adaptiveCards: AdaptiveCardsAPI;
    };
    odagApps: OdagAppsAPI;
    odagLinks: OdagLinksAPI;
    odagRequests: OdagRequestsAPI;
    odagSettings: OdagSettingsAPI;
  };
  /** Functions for the apiKeys api */
  apiKeys: ApiKeysAPI;
  /** Functions for the apps api */
  apps: AppsAPI$1;
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
    dataConnections: DataConnectionsAPI;
    dataCredentials: DataCredentialsAPI;
    dataSources: DataSourcesAPI;
    directAccessAgents: DirectAccessAgentsAPI;
  };
  /** Functions for the consumption api */
  consumption: ConsumptionAPI;
  /** Functions for the core api */
  core: CoreAPI & {
    authSettings: AuthSettingsAPI;
    dataFiles: DataFilesAPI;
    ipPolicies: IpPoliciesAPI;
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
  dataConnections: DataConnectionsAPI$1;
  /** Functions for the dataCredentials api */
  dataCredentials: DataCredentialsAPI$1;
  /** Functions for the dataFiles api */
  dataFiles: DataFilesAPI$1;
  /** Functions for the dataGovernance api */
  dataGovernance: DataGovernanceAPI & {
    dataProducts: DataProductsAPI;
    dataQualities: DataQualitiesAPI;
    semanticTypes: SemanticTypesAPI;
    trustScores: TrustScoresAPI;
  };
  /** Functions for the dataQualities api */
  dataQualities: DataQualitiesAPI$1;
  /** Functions for the dataSets api */
  dataSets: DataSetsAPI;
  /** Functions for the dataSources api */
  dataSources: DataSourcesAPI$1;
  /** Functions for the dataStores api */
  dataStores: DataStoresAPI;
  /** Functions for the dcaas api */
  dcaas: DcaasAPI;
  /** Functions for the diProjects api */
  diProjects: DiProjectsAPI;
  /** Functions for the directAccessAgents api */
  directAccessAgents: DirectAccessAgentsAPI$1;
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
  scheduling: SchedulingAPI & {
    tasks: TasksAPI;
  };
  /** Functions for the sharingTasks api */
  sharingTasks: SharingTasksAPI;
  /** Functions for the spaces api */
  spaces: SpacesAPI;
  /** Functions for the tasks api */
  tasks: TasksAPI$1;
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
    automationConnections: AutomationConnectionsAPI$1;
    automationConnectors: AutomationConnectorsAPI$1;
    automations: AutomationsAPI$1;
  };
}
export type CreateQlikApiProps = {
  hostConfig?: HostConfig;
};
export declare const createQlikApi: (props?: CreateQlikApiProps) => QlikAPI;
/** Javascript/Typescript bindings to Qlik's platform API's */
declare const api: QlikAPI & {
  createQlikApi: (props?: {
    hostConfig?: HostConfig;
  }) => QlikAPI;
};
//#endregion
export { api as default };