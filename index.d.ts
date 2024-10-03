import { registerAuthModule, setDefaultHostConfig, getAccessToken, AuthAPI } from './auth.js';
import { QixAPI } from './qix.js';
import { ApiKeysAPI } from './api-keys.js';
import { AppsAPI } from './apps.js';
import { AuditsAPI } from './audits.js';
import { AutomationsAPI } from './automations.js';
import { BrandsAPI } from './brands.js';
import { CollectionsAPI } from './collections.js';
import { CspOriginsAPI } from './csp-origins.js';
import { DataAssetsAPI } from './data-assets.js';
import { DataConnectionsAPI } from './data-connections.js';
import { DataCredentialsAPI } from './data-credentials.js';
import { DataFilesAPI } from './data-files.js';
import { ExtensionsAPI } from './extensions.js';
import { GlossariesAPI } from './glossaries.js';
import { GroupsAPI } from './groups.js';
import { IdentityProvidersAPI } from './identity-providers.js';
import { ItemsAPI } from './items.js';
import { LicensesAPI } from './licenses.js';
import { QuotasAPI } from './quotas.js';
import { ReloadTasksAPI } from './reload-tasks.js';
import { ReloadsAPI } from './reloads.js';
import { ReportsAPI } from './reports.js';
import { RolesAPI } from './roles.js';
import { SpacesAPI } from './spaces.js';
import { TempContentsAPI } from './temp-contents.js';
import { TenantsAPI } from './tenants.js';
import { ThemesAPI } from './themes.js';
import { TransportsAPI } from './transports.js';
import { UsersAPI } from './users.js';
import { WebIntegrationsAPI } from './web-integrations.js';
import { WebNotificationsAPI } from './web-notifications.js';
import { WebhooksAPI } from './webhooks.js';
import { H as HostConfig } from './auth-types-PkN9CAF_.js';
import './global.types-qsBNouXJ.js';

declare const apiKeys: ApiKeysAPI;
declare const apps: AppsAPI;
declare const audits: AuditsAPI;
declare const auth: {
    registerAuthModule: typeof registerAuthModule;
    setDefaultHostConfig: typeof setDefaultHostConfig;
    getAccessToken: typeof getAccessToken;
};
declare const automations: AutomationsAPI;
declare const brands: BrandsAPI;
declare const collections: CollectionsAPI;
declare const cspOrigins: CspOriginsAPI;
declare const dataAssets: DataAssetsAPI;
declare const dataConnections: DataConnectionsAPI;
declare const dataCredentials: DataCredentialsAPI;
declare const dataFiles: DataFilesAPI;
declare const extensions: ExtensionsAPI;
declare const glossaries: GlossariesAPI;
declare const groups: GroupsAPI;
declare const identityProviders: IdentityProvidersAPI;
declare const items: ItemsAPI;
declare const licenses: LicensesAPI;
declare const qix: QixAPI & {
    withHostConfig: (hostConfig: HostConfig | undefined) => QixAPI;
};
declare const quotas: QuotasAPI;
declare const reloadTasks: ReloadTasksAPI;
declare const reloads: ReloadsAPI;
declare const reports: ReportsAPI;
declare const roles: RolesAPI;
declare const spaces: SpacesAPI;
declare const tempContents: TempContentsAPI;
declare const tenants: TenantsAPI;
declare const themes: ThemesAPI;
declare const transports: TransportsAPI;
declare const users: UsersAPI;
declare const webIntegrations: WebIntegrationsAPI;
declare const webNotifications: WebNotificationsAPI;
declare const webhooks: WebhooksAPI;
interface QlikAPI {
    /** Functions for the apiKeys api */
    apiKeys: ApiKeysAPI;
    /** Functions for the apps api */
    apps: AppsAPI;
    /** Functions for the audits api */
    audits: AuditsAPI;
    /** Functions for the auth api */
    auth: AuthAPI;
    /** Functions for the automations api */
    automations: AutomationsAPI;
    /** Functions for the brands api */
    brands: BrandsAPI;
    /** Functions for the collections api */
    collections: CollectionsAPI;
    /** Functions for the cspOrigins api */
    cspOrigins: CspOriginsAPI;
    /** Functions for the dataAssets api */
    dataAssets: DataAssetsAPI;
    /** Functions for the dataConnections api */
    dataConnections: DataConnectionsAPI;
    /** Functions for the dataCredentials api */
    dataCredentials: DataCredentialsAPI;
    /** Functions for the dataFiles api */
    dataFiles: DataFilesAPI;
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
    /** Functions for the licenses api */
    licenses: LicensesAPI;
    /** Functions for the qix api */
    qix: QixAPI;
    /** Functions for the quotas api */
    quotas: QuotasAPI;
    /** Functions for the reloadTasks api */
    reloadTasks: ReloadTasksAPI;
    /** Functions for the reloads api */
    reloads: ReloadsAPI;
    /** Functions for the reports api */
    reports: ReportsAPI;
    /** Functions for the roles api */
    roles: RolesAPI;
    /** Functions for the spaces api */
    spaces: SpacesAPI;
    /** Functions for the tempContents api */
    tempContents: TempContentsAPI;
    /** Functions for the tenants api */
    tenants: TenantsAPI;
    /** Functions for the themes api */
    themes: ThemesAPI;
    /** Functions for the transports api */
    transports: TransportsAPI;
    /** Functions for the users api */
    users: UsersAPI;
    /** Functions for the webIntegrations api */
    webIntegrations: WebIntegrationsAPI;
    /** Functions for the webNotifications api */
    webNotifications: WebNotificationsAPI;
    /** Functions for the webhooks api */
    webhooks: WebhooksAPI;
}
declare const createQlikApi: (props?: {
    hostConfig?: HostConfig;
}) => QlikAPI;
/** Javascript/Typescript bindings to Qlik's platform API's */
declare const api: QlikAPI & {
    createQlikApi: (props?: {
        hostConfig?: HostConfig;
    }) => QlikAPI;
};

export { type QlikAPI, apiKeys, apps, audits, auth, automations, brands, collections, createQlikApi, cspOrigins, dataAssets, dataConnections, dataCredentials, dataFiles, api as default, extensions, glossaries, groups, identityProviders, items, licenses, qix, quotas, reloadTasks, reloads, reports, roles, spaces, tempContents, tenants, themes, transports, users, webIntegrations, webNotifications, webhooks };
