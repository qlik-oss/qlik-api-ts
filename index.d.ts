import { HostConfig } from "./chunks/auth-types-ua5FEdjz.js";
import { InterceptorsAPI, createInterceptors } from "./chunks/interceptors-DHkfs1ua.js";
import { AuthAPI, getAccessToken, getWebResourceAuthParams, registerAuthModule, registerHostConfig, setDefaultHostConfig, unregisterHostConfig } from "./chunks/auth-DKv6n_GN.js";
import { QixAPI } from "./chunks/qix-8oI6W8Iq.js";
import { ApiKeysAPI } from "./chunks/api-keys-D0c8ujRu.js";
import { AppsAPI } from "./chunks/apps-CdqN0t8i.js";
import { AssistantsAPI } from "./chunks/assistants-BW8V6f0F.js";
import { AuditsAPI } from "./chunks/audits-D0ad6UDR.js";
import { AutomationConnectionsAPI } from "./chunks/automation-connections-BJuPyGkj.js";
import { AutomationsAPI } from "./chunks/automations-DDzikXsW.js";
import { AutomlDeploymentsAPI } from "./chunks/automl-deployments-RC6MYluL.js";
import { AutomlPredictionsAPI } from "./chunks/automl-predictions-BC_cxfIy.js";
import { BrandsAPI } from "./chunks/brands-JtflEMN1.js";
import { CollectionsAPI } from "./chunks/collections-B17vc2zP.js";
import { ConditionsAPI } from "./chunks/conditions-JgsgLbSx.js";
import { ConsumptionAPI } from "./chunks/consumption-BBGQgCsU.js";
import { CspOriginsAPI } from "./chunks/csp-origins-C2z2ryaw.js";
import { CsrfTokenAPI } from "./chunks/csrf-token-Cwz241tT.js";
import { DataAlertsAPI } from "./chunks/data-alerts-rxwsP4C7.js";
import { DataAssetsAPI } from "./chunks/data-assets-BRJ0MQgV.js";
import { DataConnectionsAPI } from "./chunks/data-connections-9H_4Pih5.js";
import { DataCredentialsAPI } from "./chunks/data-credentials-AULREOtn.js";
import { DataFilesAPI } from "./chunks/data-files-CDxGxSIx.js";
import { DataQualitiesAPI } from "./chunks/data-qualities-B-v0Njga.js";
import { DataSetsAPI } from "./chunks/data-sets-ChmF7dI4.js";
import { DataSourcesAPI } from "./chunks/data-sources-oBO7aHct.js";
import { DataStoresAPI } from "./chunks/data-stores-C2RE1Aos.js";
import { DcaasAPI } from "./chunks/dcaas-D4iZGtLn.js";
import { DiProjectsAPI } from "./chunks/di-projects-BxX0b3lC.js";
import { DirectAccessAgentsAPI } from "./chunks/direct-access-agents-XxiAo3y9.js";
import { EncryptionAPI } from "./chunks/encryption-1JNNXFB7.js";
import { ExtensionsAPI } from "./chunks/extensions-qbclNpnA.js";
import { GlossariesAPI } from "./chunks/glossaries-g1PPnHoM.js";
import { GroupsAPI } from "./chunks/groups-DrqKqkAv.js";
import { IdentityProvidersAPI } from "./chunks/identity-providers-iRAccwIg.js";
import { ItemsAPI } from "./chunks/items-N3gAR5AS.js";
import { KnowledgebasesAPI } from "./chunks/knowledgebases-B0tcNrg8.js";
import { LicensesAPI } from "./chunks/licenses-CrB0eiUU.js";
import { LineageGraphsAPI } from "./chunks/lineage-graphs-BL1kIsvQ.js";
import { MlAPI } from "./chunks/ml-CQQZV57e.js";
import { NotesAPI } from "./chunks/notes-BWDOf71L.js";
import { NotificationsAPI } from "./chunks/notifications--FW8kp8T.js";
import { OauthClientsAPI } from "./chunks/oauth-clients-BDI9_NJw.js";
import { OauthTokensAPI } from "./chunks/oauth-tokens-CqViLZD0.js";
import { QuestionsAPI } from "./chunks/questions-DAXXmfTM.js";
import { QuotasAPI } from "./chunks/quotas-BV0q47cU.js";
import { ReloadTasksAPI } from "./chunks/reload-tasks-DORwZo4c.js";
import { ReloadsAPI } from "./chunks/reloads-C7RAAgAu.js";
import { ReportTemplatesAPI } from "./chunks/report-templates-C3P0_-D3.js";
import { ReportsAPI } from "./chunks/reports-C7saF89N.js";
import { RolesAPI } from "./chunks/roles-DBdOYajz.js";
import { SharingTasksAPI } from "./chunks/sharing-tasks-Dm9L1sMF.js";
import { SpacesAPI } from "./chunks/spaces-CjF6Q30z.js";
import { TasksAPI } from "./chunks/tasks-CX1ohkzr.js";
import { TempContentsAPI } from "./chunks/temp-contents-D-NhmvhI.js";
import { TenantsAPI } from "./chunks/tenants-BbFJ4gEC.js";
import { ThemesAPI } from "./chunks/themes-DCHwpvan.js";
import { TransportsAPI } from "./chunks/transports-CQoT2abX.js";
import { UiConfigAPI } from "./chunks/ui-config-8gkgFE8J.js";
import { UsersAPI } from "./chunks/users-D7kk0z77.js";
import { WebIntegrationsAPI } from "./chunks/web-integrations-BMiMloLY.js";
import { WebNotificationsAPI } from "./chunks/web-notifications-CGGnIRRw.js";
import { WebhooksAPI } from "./chunks/webhooks-tylLbUkb.js";

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
declare const automations: AutomationsAPI;
declare const automlDeployments: AutomlDeploymentsAPI;
declare const automlPredictions: AutomlPredictionsAPI;
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
  /** Functions for the automations api */
  automations: AutomationsAPI;
  /** Functions for the automlDeployments api */
  automlDeployments: AutomlDeploymentsAPI;
  /** Functions for the automlPredictions api */
  automlPredictions: AutomlPredictionsAPI;
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
export { CreateQlikApiProps, QlikAPI, apiKeys, apps, assistants, audits, auth, automationConnections, automations, automlDeployments, automlPredictions, brands, collections, conditions, consumption, createQlikApi, cspOrigins, csrfToken, dataAlerts, dataAssets, dataConnections, dataCredentials, dataFiles, dataQualities, dataSets, dataSources, dataStores, dcaas, api as default, diProjects, directAccessAgents, encryption, extensions, glossaries, groups, identityProviders, interceptors, items, knowledgebases, licenses, lineageGraphs, ml, notes, notifications, oauthClients, oauthTokens, qix, questions, quotas, reloadTasks, reloads, reportTemplates, reports, roles, sharingTasks, spaces, tasks, tempContents, tenants, themes, transports, uiConfig, users, webIntegrations, webNotifications, webhooks };