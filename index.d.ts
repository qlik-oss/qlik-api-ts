import { HostConfig } from "./auth-types.js";
import "./chunks/invoke-fetch-DFc3yzaj.js";
import { InterceptorsAPI, createInterceptors } from "./interceptors.js";
import { AuthAPI, getAccessToken, getWebResourceAuthParams, registerAuthModule, registerHostConfig, setDefaultHostConfig, unregisterHostConfig } from "./auth.js";
import "./chunks/qix-types-CQzxiZIV.js";
import { QixAPI } from "./qix.js";
import { ChangeStoresAPI } from "./analytics/change-stores.js";
import { AnalyticsAPI } from "./analytics.js";
import { ApiKeysAPI } from "./api-keys.js";
import { AppsAPI } from "./apps.js";
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
import { ConsumptionAPI } from "./consumption.js";
import { IpPoliciesAPI } from "./core/ip-policies.js";
import { CoreAPI } from "./core.js";
import { CspOriginsAPI } from "./csp-origins.js";
import { CsrfTokenAPI } from "./csrf-token.js";
import { DataAlertsAPI } from "./data-alerts.js";
import { DataAssetsAPI } from "./data-assets.js";
import { DataConnectionsAPI } from "./data-connections.js";
import { DataCredentialsAPI } from "./data-credentials.js";
import { DataFilesAPI } from "./data-files.js";
import { DataProductsAPI } from "./data-governance/data-products.js";
import { DataGovernanceAPI } from "./data-governance.js";
import { DataQualitiesAPI } from "./data-qualities.js";
import { DataSetsAPI } from "./data-sets.js";
import { DataSourcesAPI } from "./data-sources.js";
import { DataStoresAPI } from "./data-stores.js";
import { DcaasAPI } from "./dcaas.js";
import { DiProjectsAPI } from "./di-projects.js";
import { DirectAccessAgentsAPI } from "./direct-access-agents.js";
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
import { SharingTasksAPI } from "./sharing-tasks.js";
import { SpacesAPI } from "./spaces.js";
import { TasksAPI } from "./tasks.js";
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

//#region src/public/index.d.ts
declare const auth: {
  registerAuthModule: typeof registerAuthModule;
  setDefaultHostConfig: typeof setDefaultHostConfig;
  registerHostConfig: typeof registerHostConfig;
  unregisterHostConfig: typeof unregisterHostConfig;
  getAccessToken: typeof getAccessToken;
  getWebResourceAuthParams: typeof getWebResourceAuthParams;
};
declare const interceptors: InterceptorsAPI & {
  createInterceptors: typeof createInterceptors;
};
declare const qix: QixAPI & {
  withHostConfig: (hostConfig: HostConfig | undefined) => QixAPI;
};
declare const analytics: {
  changeStores: ChangeStoresAPI;
};
declare const apiKeys: ApiKeysAPI;
declare const apps: AppsAPI;
declare const assistants: AssistantsAPI;
declare const audits: AuditsAPI;
declare const automationConnections: AutomationConnectionsAPI;
declare const automationConnectors: AutomationConnectorsAPI;
declare const automations: AutomationsAPI;
declare const automlDeployments: AutomlDeploymentsAPI;
declare const automlPredictions: AutomlPredictionsAPI;
declare const banners: BannersAPI;
declare const brands: BrandsAPI;
declare const collections: CollectionsAPI;
declare const conditions: ConditionsAPI;
declare const consumption: ConsumptionAPI;
declare const core: {
  ipPolicies: IpPoliciesAPI;
};
declare const cspOrigins: CspOriginsAPI;
declare const csrfToken: CsrfTokenAPI;
declare const dataAlerts: DataAlertsAPI;
declare const dataAssets: DataAssetsAPI;
declare const dataConnections: DataConnectionsAPI;
declare const dataCredentials: DataCredentialsAPI;
declare const dataFiles: DataFilesAPI;
declare const dataGovernance: {
  dataProducts: DataProductsAPI;
};
declare const dataQualities: DataQualitiesAPI;
declare const dataSets: DataSetsAPI;
declare const dataSources: DataSourcesAPI;
declare const dataStores: DataStoresAPI;
declare const dcaas: DcaasAPI;
declare const diProjects: DiProjectsAPI;
declare const directAccessAgents: DirectAccessAgentsAPI;
declare const encryption: EncryptionAPI;
declare const extensions: ExtensionsAPI;
declare const glossaries: GlossariesAPI;
declare const groups: GroupsAPI;
declare const identityProviders: IdentityProvidersAPI;
declare const items: ItemsAPI;
declare const knowledgebases: KnowledgebasesAPI;
declare const licenses: LicensesAPI;
declare const lineageGraphs: LineageGraphsAPI;
declare const ml: MlAPI;
declare const notes: NotesAPI;
declare const notifications: NotificationsAPI;
declare const oauthClients: OauthClientsAPI;
declare const oauthTokens: OauthTokensAPI;
declare const questions: QuestionsAPI;
declare const quotas: QuotasAPI;
declare const reloadTasks: ReloadTasksAPI;
declare const reloads: ReloadsAPI;
declare const reportTemplates: ReportTemplatesAPI;
declare const reports: ReportsAPI;
declare const roles: RolesAPI;
declare const sharingTasks: SharingTasksAPI;
declare const spaces: SpacesAPI;
declare const tasks: TasksAPI;
declare const tempContents: TempContentsAPI;
declare const tenantSettings: TenantSettingsAPI;
declare const tenants: TenantsAPI;
declare const themes: ThemesAPI;
declare const transports: TransportsAPI;
declare const uiConfig: UiConfigAPI;
declare const users: UsersAPI;
declare const webIntegrations: WebIntegrationsAPI;
declare const webNotifications: WebNotificationsAPI;
declare const webhooks: WebhooksAPI;
interface QlikAPI {
  /** Functions for the auth api */
  auth: AuthAPI;
  /** Functions for the interceptors api */
  interceptors: InterceptorsAPI;
  /** Functions for the qix api */
  qix: QixAPI;
  /** Functions for the analytics api */
  analytics: AnalyticsAPI & {
    changeStores: ChangeStoresAPI;
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
  /** Functions for the consumption api */
  consumption: ConsumptionAPI;
  /** Functions for the core api */
  core: CoreAPI & {
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
  dataConnections: DataConnectionsAPI;
  /** Functions for the dataCredentials api */
  dataCredentials: DataCredentialsAPI;
  /** Functions for the dataFiles api */
  dataFiles: DataFilesAPI;
  /** Functions for the dataGovernance api */
  dataGovernance: DataGovernanceAPI & {
    dataProducts: DataProductsAPI;
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
}
type CreateQlikApiProps = {
  hostConfig?: HostConfig;
};
declare const createQlikApi: (props?: CreateQlikApiProps) => QlikAPI;
/** Javascript/Typescript bindings to Qlik's platform API's */
declare const api: QlikAPI & {
  createQlikApi: (props?: {
    hostConfig?: HostConfig;
  }) => QlikAPI;
};
//#endregion
export { CreateQlikApiProps, QlikAPI, analytics, apiKeys, apps, assistants, audits, auth, automationConnections, automationConnectors, automations, automlDeployments, automlPredictions, banners, brands, collections, conditions, consumption, core, createQlikApi, cspOrigins, csrfToken, dataAlerts, dataAssets, dataConnections, dataCredentials, dataFiles, dataGovernance, dataQualities, dataSets, dataSources, dataStores, dcaas, api as default, diProjects, directAccessAgents, encryption, extensions, glossaries, groups, identityProviders, interceptors, items, knowledgebases, licenses, lineageGraphs, ml, notes, notifications, oauthClients, oauthTokens, qix, questions, quotas, reloadTasks, reloads, reportTemplates, reports, roles, sharingTasks, spaces, tasks, tempContents, tenantSettings, tenants, themes, transports, uiConfig, users, webIntegrations, webNotifications, webhooks };