import { HostConfig } from "./chunks/auth-types-B1c_1Nca.js";
import { InterceptorsAPI, createInterceptors } from "./chunks/interceptors-BF556LaK.js";
import { AuthAPI, getAccessToken, getWebResourceAuthParams, registerAuthModule, registerHostConfig, setDefaultHostConfig, unregisterHostConfig } from "./chunks/auth-DFOXWfqh.js";
import { QixAPI } from "./chunks/qix-CbiHOu7Z.js";
import { ApiKeysAPI } from "./chunks/api-keys-C-ZqA-wl.js";
import { AppsAPI } from "./chunks/apps-k7oY1h_6.js";
import { AssistantsAPI } from "./chunks/assistants-BsDbpzl4.js";
import { AuditsAPI } from "./chunks/audits-5CBpwcdx.js";
import { AutomationConnectionsAPI } from "./chunks/automation-connections-DRQDgw7Q.js";
import { AutomationsAPI } from "./chunks/automations-C0rperoU.js";
import { AutomlDeploymentsAPI } from "./chunks/automl-deployments-B-WuR_zE.js";
import { AutomlPredictionsAPI } from "./chunks/automl-predictions-CewW0eZn.js";
import { BrandsAPI } from "./chunks/brands-C4eALPrs.js";
import { CollectionsAPI } from "./chunks/collections-Djmd9gof.js";
import { ConditionsAPI } from "./chunks/conditions-BRDxUbgu.js";
import { ConsumptionAPI } from "./chunks/consumption-UNw8R7jN.js";
import { CspOriginsAPI } from "./chunks/csp-origins-_4HBSdgU.js";
import { CsrfTokenAPI } from "./chunks/csrf-token-CsvbqXyY.js";
import { DataAlertsAPI } from "./chunks/data-alerts-DSV3VOnW.js";
import { DataAssetsAPI } from "./chunks/data-assets-C3U3T_lj.js";
import { DataConnectionsAPI } from "./chunks/data-connections-CYbObLbP.js";
import { DataCredentialsAPI } from "./chunks/data-credentials-CgCjw_Cn.js";
import { DataFilesAPI } from "./chunks/data-files-DH19MfYE.js";
import { DataQualitiesAPI } from "./chunks/data-qualities-BogHQw4I.js";
import { DataSetsAPI } from "./chunks/data-sets-B27GmshO.js";
import { DataSourcesAPI } from "./chunks/data-sources-3oHpGsDR.js";
import { DataStoresAPI } from "./chunks/data-stores-BjfzMp9W.js";
import { DcaasAPI } from "./chunks/dcaas-A7hfpAI5.js";
import { DiProjectsAPI } from "./chunks/di-projects-BmqI8HAl.js";
import { DirectAccessAgentsAPI } from "./chunks/direct-access-agents-CfUpbi73.js";
import { EncryptionAPI } from "./chunks/encryption-CjBmNQDZ.js";
import { ExtensionsAPI } from "./chunks/extensions-D05y2FWk.js";
import { GlossariesAPI } from "./chunks/glossaries-vYbykU3r.js";
import { GroupsAPI } from "./chunks/groups-BapgngJf.js";
import { IdentityProvidersAPI } from "./chunks/identity-providers-CAxsp9hP.js";
import { ItemsAPI } from "./chunks/items-CjVrNg57.js";
import { KnowledgebasesAPI } from "./chunks/knowledgebases-BFiV7Fwh.js";
import { LicensesAPI } from "./chunks/licenses-yZKgQ2k6.js";
import { LineageGraphsAPI } from "./chunks/lineage-graphs-Bkc04N-t.js";
import { MlAPI } from "./chunks/ml-CPzq_j0K.js";
import { NotesAPI } from "./chunks/notes-C5HjmBeI.js";
import { NotificationsAPI } from "./chunks/notifications-DfP7aWPH.js";
import { OauthClientsAPI } from "./chunks/oauth-clients-BmMEDuET.js";
import { OauthTokensAPI } from "./chunks/oauth-tokens-Dimf19DE.js";
import { QuestionsAPI } from "./chunks/questions-CFN7BgWt.js";
import { QuotasAPI } from "./chunks/quotas-BUH2e2K_.js";
import { ReloadTasksAPI } from "./chunks/reload-tasks-DN3X2-30.js";
import { ReloadsAPI } from "./chunks/reloads-CpY6F3Y0.js";
import { ReportTemplatesAPI } from "./chunks/report-templates-D5KOFkRi.js";
import { ReportsAPI } from "./chunks/reports-CRwCogRL.js";
import { RolesAPI } from "./chunks/roles-DCzyiLdU.js";
import { SharingTasksAPI } from "./chunks/sharing-tasks-DsxFrADQ.js";
import { SpacesAPI } from "./chunks/spaces-B0cx23Nc.js";
import { TasksAPI } from "./chunks/tasks-DWfE5JM_.js";
import { TempContentsAPI } from "./chunks/temp-contents-CU94UTZU.js";
import { TenantsAPI } from "./chunks/tenants-DvtbiwAP.js";
import { ThemesAPI } from "./chunks/themes-BPkyCLWS.js";
import { TransportsAPI } from "./chunks/transports-DlRmSWLj.js";
import { UiConfigAPI } from "./chunks/ui-config-BqX-bPjf.js";
import { UsersAPI } from "./chunks/users-CuQ0nboa.js";
import { WebIntegrationsAPI } from "./chunks/web-integrations-D54LCd0Z.js";
import { WebNotificationsAPI } from "./chunks/web-notifications-sUlHGnmy.js";
import { WebhooksAPI } from "./chunks/webhooks-Dw0FIeFq.js";

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