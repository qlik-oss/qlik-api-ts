import { HostConfig } from "./chunks/auth-types-BlCWK0FP.js";
import { InterceptorsAPI, createInterceptors } from "./chunks/interceptors-e6hoYE8W.js";
import { AuthAPI, getAccessToken, getWebResourceAuthParams, registerAuthModule, registerHostConfig, setDefaultHostConfig, unregisterHostConfig } from "./chunks/auth-B5Hx9GeQ.js";
import { QixAPI } from "./chunks/qix-J4MO8SAa.js";
import { ApiKeysAPI } from "./chunks/api-keys-CI44OuNR.js";
import { AppsAPI } from "./chunks/apps-BiGof9WJ.js";
import { AssistantsAPI } from "./chunks/assistants-CDtI99Yr.js";
import { AuditsAPI } from "./chunks/audits-C-UDFprK.js";
import { AutomationConnectionsAPI } from "./chunks/automation-connections-keN9CuNO.js";
import { AutomationsAPI } from "./chunks/automations-CFRnQ8sX.js";
import { AutomlDeploymentsAPI } from "./chunks/automl-deployments-D05clUGa.js";
import { AutomlPredictionsAPI } from "./chunks/automl-predictions-Ddp6PdpE.js";
import { BrandsAPI } from "./chunks/brands-hEcnkdfg.js";
import { CollectionsAPI } from "./chunks/collections-CuX8Cp8Z.js";
import { ConditionsAPI } from "./chunks/conditions-DUmPB4Ej.js";
import { ConsumptionAPI } from "./chunks/consumption-CSptDhk9.js";
import { CspOriginsAPI } from "./chunks/csp-origins-v_UyOSK9.js";
import { CsrfTokenAPI } from "./chunks/csrf-token-DZK6GX6Z.js";
import { DataAlertsAPI } from "./chunks/data-alerts-DwPcCvHP.js";
import { DataAssetsAPI } from "./chunks/data-assets-BPMOGSO7.js";
import { DataConnectionsAPI } from "./chunks/data-connections-DK1AhSi4.js";
import { DataCredentialsAPI } from "./chunks/data-credentials-BDCHbRwM.js";
import { DataFilesAPI } from "./chunks/data-files-D7mlQnrw.js";
import { DataQualitiesAPI } from "./chunks/data-qualities-Z554f_p6.js";
import { DataSetsAPI } from "./chunks/data-sets-AcCLu1zw.js";
import { DataSourcesAPI } from "./chunks/data-sources-DNnmr1Qi.js";
import { DataStoresAPI } from "./chunks/data-stores-Bofu7fl5.js";
import { DcaasAPI } from "./chunks/dcaas-DK4f7Rrs.js";
import { DiProjectsAPI } from "./chunks/di-projects-uem8xKkX.js";
import { DirectAccessAgentsAPI } from "./chunks/direct-access-agents-BbSiWlMD.js";
import { EncryptionAPI } from "./chunks/encryption-CMJWtMcm.js";
import { ExtensionsAPI } from "./chunks/extensions-Ct2JAsbk.js";
import { GlossariesAPI } from "./chunks/glossaries-Drx-EwiU.js";
import { GroupsAPI } from "./chunks/groups-C-R5oUEa.js";
import { IdentityProvidersAPI } from "./chunks/identity-providers-Bj88evsO.js";
import { ItemsAPI } from "./chunks/items-BnN6gI0J.js";
import { KnowledgebasesAPI } from "./chunks/knowledgebases-tmPZVD6i.js";
import { LicensesAPI } from "./chunks/licenses-DAPVQuFJ.js";
import { LineageGraphsAPI } from "./chunks/lineage-graphs-Q4LiGGtL.js";
import { MlAPI } from "./chunks/ml-C80TkK1J.js";
import { NotesAPI } from "./chunks/notes-CHvadRai.js";
import { NotificationsAPI } from "./chunks/notifications-BhS8s4Eo.js";
import { OauthClientsAPI } from "./chunks/oauth-clients-D1f8xiFC.js";
import { OauthTokensAPI } from "./chunks/oauth-tokens-DteoDifd.js";
import { QuestionsAPI } from "./chunks/questions-BiR5-mZ4.js";
import { QuotasAPI } from "./chunks/quotas-GTQL9uPt.js";
import { ReloadTasksAPI } from "./chunks/reload-tasks-CmXJp5va.js";
import { ReloadsAPI } from "./chunks/reloads-3XgvVnbq.js";
import { ReportTemplatesAPI } from "./chunks/report-templates-BowaTti4.js";
import { ReportsAPI } from "./chunks/reports-oosnUaFo.js";
import { RolesAPI } from "./chunks/roles-D93ENaRt.js";
import { SharingTasksAPI } from "./chunks/sharing-tasks-BMDAjWTj.js";
import { SpacesAPI } from "./chunks/spaces-DZI6zKZi.js";
import { TasksAPI } from "./chunks/tasks-BWmS6L8Y.js";
import { TempContentsAPI } from "./chunks/temp-contents-CZVb5P0V.js";
import { TenantsAPI } from "./chunks/tenants-BDH4DmcO.js";
import { ThemesAPI } from "./chunks/themes-BkubWfOE.js";
import { TransportsAPI } from "./chunks/transports-CO9kRJg5.js";
import { UiConfigAPI } from "./chunks/ui-config-DIOnLEV9.js";
import { UsersAPI } from "./chunks/users-DM-ZfzQB.js";
import { WebIntegrationsAPI } from "./chunks/web-integrations-BjVMC88M.js";
import { WebNotificationsAPI } from "./chunks/web-notifications-D-eA8h1I.js";
import { WebhooksAPI } from "./chunks/webhooks-Dytyr5nk.js";

//#region src/public/index.d.ts
declare const apiKeys: ApiKeysAPI;
declare const apps: AppsAPI;
declare const assistants: AssistantsAPI;
declare const audits: AuditsAPI;
declare const auth: {
  registerAuthModule: typeof registerAuthModule;
  setDefaultHostConfig: typeof setDefaultHostConfig;
  registerHostConfig: typeof registerHostConfig;
  unregisterHostConfig: typeof unregisterHostConfig;
  getAccessToken: typeof getAccessToken;
  getWebResourceAuthParams: typeof getWebResourceAuthParams;
};
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
declare const interceptors: InterceptorsAPI & {
  createInterceptors: typeof createInterceptors;
};
declare const items: ItemsAPI;
declare const knowledgebases: KnowledgebasesAPI;
declare const licenses: LicensesAPI;
declare const lineageGraphs: LineageGraphsAPI;
declare const ml: MlAPI;
declare const notes: NotesAPI;
declare const notifications: NotificationsAPI;
declare const oauthClients: OauthClientsAPI;
declare const oauthTokens: OauthTokensAPI;
declare const qix: QixAPI & {
  withHostConfig: (hostConfig: HostConfig | undefined) => QixAPI;
};
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
  /** Functions for the apiKeys api */
  apiKeys: ApiKeysAPI;
  /** Functions for the apps api */
  apps: AppsAPI;
  /** Functions for the assistants api */
  assistants: AssistantsAPI;
  /** Functions for the audits api */
  audits: AuditsAPI;
  /** Functions for the auth api */
  auth: AuthAPI;
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
  /** Functions for the interceptors api */
  interceptors: InterceptorsAPI;
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
  /** Functions for the qix api */
  qix: QixAPI;
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