import { d as HostConfig } from "./chunks/auth-types-CHOUViJI.js";
import "./chunks/invoke-fetch-C1Z0RJYU.js";
import { a as createInterceptors, t as InterceptorsAPI } from "./chunks/interceptors-BoGH3CGy.js";
import { c as setDefaultHostConfig, i as getWebResourceAuthParams, l as unregisterHostConfig, o as registerAuthModule, r as getAccessToken, s as registerHostConfig, t as AuthAPI } from "./chunks/auth-BYyDvXka.js";
import { t as QixAPI } from "./chunks/qix-BJgISmMN.js";
import { s as ApiKeysAPI } from "./chunks/api-keys-DS7LkwI8.js";
import { y as AppsAPI } from "./chunks/apps-BR3gTz4F.js";
import { n as AssistantsAPI } from "./chunks/assistants-C_a4uNnT.js";
import { n as AuditsAPI } from "./chunks/audits-BC_9Nsc3.js";
import { d as AutomationConnectionsAPI } from "./chunks/automation-connections-Cyhb0FaN.js";
import { t as AutomationConnectorsAPI } from "./chunks/automation-connectors-LrawaoDq.js";
import { s as AutomationsAPI } from "./chunks/automations-BYujmPxM.js";
import { n as AutomlDeploymentsAPI } from "./chunks/automl-deployments-Bz4hIBQD.js";
import { n as AutomlPredictionsAPI } from "./chunks/automl-predictions-DnnHn5n_.js";
import { r as BannersAPI } from "./chunks/banners-C8iUbLA2.js";
import { d as BrandsAPI } from "./chunks/brands-C_VLS_bl.js";
import { c as CollectionsAPI } from "./chunks/collections-tmWJxgrt.js";
import { y as ConditionsAPI } from "./chunks/conditions-XN35BSPh.js";
import { t as ConsumptionAPI } from "./chunks/consumption-DX2Ei4od.js";
import { s as CspOriginsAPI } from "./chunks/csp-origins-fyrVQMkf.js";
import { t as CsrfTokenAPI } from "./chunks/csrf-token-VrKslIAO.js";
import { M as DataAlertsAPI } from "./chunks/data-alerts-Db2z8nxG.js";
import { a as DataAssetsAPI } from "./chunks/data-assets-COFtmbYv.js";
import { f as DataConnectionsAPI } from "./chunks/data-connections-CZmEfGNG.js";
import { a as DataCredentialsAPI } from "./chunks/data-credentials-BJteSNF-.js";
import { p as DataFilesAPI } from "./chunks/data-files-E3LDdwu9.js";
import { i as DataQualitiesAPI } from "./chunks/data-qualities-CDgLWYzn.js";
import { u as DataSetsAPI } from "./chunks/data-sets-DS9oCHyh.js";
import { o as DataSourcesAPI } from "./chunks/data-sources-CsARydcs.js";
import { u as DataStoresAPI } from "./chunks/data-stores-BrMPbFTB.js";
import { d as DcaasAPI } from "./chunks/dcaas-BOgO88is.js";
import { _ as DiProjectsAPI } from "./chunks/di-projects-6CTj-fZS.js";
import { f as DirectAccessAgentsAPI } from "./chunks/direct-access-agents-DqkZJgCw.js";
import { a as EncryptionAPI } from "./chunks/encryption-38eI7xaM.js";
import { d as ExtensionsAPI } from "./chunks/extensions-BY1bBIwI.js";
import { it as GlossariesAPI } from "./chunks/glossaries-DOGETgAy.js";
import { T as GroupsAPI } from "./chunks/groups-B5ZSHoU7.js";
import { z as IdentityProvidersAPI } from "./chunks/identity-providers-B95UphQ7.js";
import { E as ItemsAPI } from "./chunks/items-prd2PJHL.js";
import { nt as KnowledgebasesAPI } from "./chunks/knowledgebases-nV7L0G3L.js";
import { D as LicensesAPI } from "./chunks/licenses-CVBtRLsB.js";
import { dt as LineageGraphsAPI } from "./chunks/lineage-graphs-DH3iZ45F.js";
import { Un as MlAPI } from "./chunks/ml-C4ZfC5E0.js";
import { c as NotesAPI } from "./chunks/notes-BmZ3kWFF.js";
import { a as NotificationsAPI } from "./chunks/notifications-DpmHo21D.js";
import { F as OauthClientsAPI } from "./chunks/oauth-clients-lKvXqnlf.js";
import { u as OauthTokensAPI } from "./chunks/oauth-tokens-I1GXV-Pm.js";
import { A as QuestionsAPI } from "./chunks/questions-DPgcX6l6.js";
import { u as QuotasAPI } from "./chunks/quotas-ja_K_-Na.js";
import { h as ReloadTasksAPI } from "./chunks/reload-tasks-BiMX4_zH.js";
import { _ as ReloadsAPI } from "./chunks/reloads-BhEQHvZ_.js";
import { x as ReportTemplatesAPI } from "./chunks/report-templates-CC5GHDZP.js";
import { U as ReportsAPI } from "./chunks/reports-gdDevE7G.js";
import { y as RolesAPI } from "./chunks/roles-CI51tqVy.js";
import { dt as SharingTasksAPI } from "./chunks/sharing-tasks-OVGdU-Zj.js";
import { et as SpacesAPI } from "./chunks/spaces-mALfyUk6.js";
import { H as TasksAPI } from "./chunks/tasks-C5LAAjFh.js";
import { p as TempContentsAPI } from "./chunks/temp-contents-BetQz-oE.js";
import { O as TenantsAPI } from "./chunks/tenants-BxH2KOTB.js";
import { _ as ThemesAPI } from "./chunks/themes-39I0zONl.js";
import { P as TransportsAPI } from "./chunks/transports-Dw6UqnWY.js";
import { P as UiConfigAPI } from "./chunks/ui-config-Dn289HpY.js";
import { G as UsersAPI } from "./chunks/users-dL3ip5Hd.js";
import { y as WebIntegrationsAPI } from "./chunks/web-integrations-Cl2WklQh.js";
import { x as WebNotificationsAPI } from "./chunks/web-notifications-B5An9uEB.js";
import { P as WebhooksAPI } from "./chunks/webhooks-CrKlLCv7.js";

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
declare const cspOrigins: CspOriginsAPI;
declare const csrfToken: CsrfTokenAPI;
declare const dataAlerts: DataAlertsAPI;
declare const dataAssets: DataAssetsAPI;
declare const dataConnections: DataConnectionsAPI;
declare const dataCredentials: DataCredentialsAPI;
declare const dataFiles: DataFilesAPI;
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
export { CreateQlikApiProps, QlikAPI, apiKeys, apps, assistants, audits, auth, automationConnections, automationConnectors, automations, automlDeployments, automlPredictions, banners, brands, collections, conditions, consumption, createQlikApi, cspOrigins, csrfToken, dataAlerts, dataAssets, dataConnections, dataCredentials, dataFiles, dataQualities, dataSets, dataSources, dataStores, dcaas, api as default, diProjects, directAccessAgents, encryption, extensions, glossaries, groups, identityProviders, interceptors, items, knowledgebases, licenses, lineageGraphs, ml, notes, notifications, oauthClients, oauthTokens, qix, questions, quotas, reloadTasks, reloads, reportTemplates, reports, roles, sharingTasks, spaces, tasks, tempContents, tenants, themes, transports, uiConfig, users, webIntegrations, webNotifications, webhooks };