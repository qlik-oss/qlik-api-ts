import { openAppSession } from './qix.js';
import { registerAuthModule, setDefaultHostConfig, getAccessToken } from './auth.js';
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
import './global.types-Xt6XzwlN.js';
import './auth-types-Bqw3vbLs.js';

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
declare const qix: {
    openAppSession: typeof openAppSession;
};
declare const quotas: QuotasAPI;
declare const reloadTasks: ReloadTasksAPI;
declare const reloads: ReloadsAPI;
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
    apiKeys: typeof apiKeys;
    /** Functions for the apps api */
    apps: typeof apps;
    /** Functions for the audits api */
    audits: typeof audits;
    /** Functions for the auth api */
    auth: typeof auth;
    /** Functions for the automations api */
    automations: typeof automations;
    /** Functions for the brands api */
    brands: typeof brands;
    /** Functions for the collections api */
    collections: typeof collections;
    /** Functions for the cspOrigins api */
    cspOrigins: typeof cspOrigins;
    /** Functions for the dataAssets api */
    dataAssets: typeof dataAssets;
    /** Functions for the dataConnections api */
    dataConnections: typeof dataConnections;
    /** Functions for the dataCredentials api */
    dataCredentials: typeof dataCredentials;
    /** Functions for the dataFiles api */
    dataFiles: typeof dataFiles;
    /** Functions for the extensions api */
    extensions: typeof extensions;
    /** Functions for the glossaries api */
    glossaries: typeof glossaries;
    /** Functions for the groups api */
    groups: typeof groups;
    /** Functions for the identityProviders api */
    identityProviders: typeof identityProviders;
    /** Functions for the items api */
    items: typeof items;
    /** Functions for the licenses api */
    licenses: typeof licenses;
    /** Functions for the qix api */
    qix: typeof qix;
    /** Functions for the quotas api */
    quotas: typeof quotas;
    /** Functions for the reloadTasks api */
    reloadTasks: typeof reloadTasks;
    /** Functions for the reloads api */
    reloads: typeof reloads;
    /** Functions for the roles api */
    roles: typeof roles;
    /** Functions for the spaces api */
    spaces: typeof spaces;
    /** Functions for the tempContents api */
    tempContents: typeof tempContents;
    /** Functions for the tenants api */
    tenants: typeof tenants;
    /** Functions for the themes api */
    themes: typeof themes;
    /** Functions for the transports api */
    transports: typeof transports;
    /** Functions for the users api */
    users: typeof users;
    /** Functions for the webIntegrations api */
    webIntegrations: typeof webIntegrations;
    /** Functions for the webNotifications api */
    webNotifications: typeof webNotifications;
    /** Functions for the webhooks api */
    webhooks: typeof webhooks;
}
/** Javascript/Typescript bindings to Qlik's platform API's */
declare const api: QlikAPI;

export { type QlikAPI, apiKeys, apps, audits, auth, automations, brands, collections, cspOrigins, dataAssets, dataConnections, dataCredentials, dataFiles, api as default, extensions, glossaries, groups, identityProviders, items, licenses, qix, quotas, reloadTasks, reloads, roles, spaces, tempContents, tenants, themes, transports, users, webIntegrations, webNotifications, webhooks };
