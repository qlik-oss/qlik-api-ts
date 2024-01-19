import { openAppSession } from './qix.mjs';
import { registerAuthModule, setDefaultHostConfig } from './auth.mjs';
import { ApiKeysAPI } from './api-keys.mjs';
import { AppsAPI } from './apps.mjs';
import { AuditsAPI } from './audits.mjs';
import { AutomationsAPI } from './automations.mjs';
import { BrandsAPI } from './brands.mjs';
import { CollectionsAPI } from './collections.mjs';
import { CspOriginsAPI } from './csp-origins.mjs';
import { DataAssetsAPI } from './data-assets.mjs';
import { DataConnectionsAPI } from './data-connections.mjs';
import { DataCredentialsAPI } from './data-credentials.mjs';
import { DataFilesAPI } from './data-files.mjs';
import { ExtensionsAPI } from './extensions.mjs';
import { GlossariesAPI } from './glossaries.mjs';
import { GroupsAPI } from './groups.mjs';
import { IdentityProvidersAPI } from './identity-providers.mjs';
import { ItemsAPI } from './items.mjs';
import { LicensesAPI } from './licenses.mjs';
import { QuotasAPI } from './quotas.mjs';
import { ReloadTasksAPI } from './reload-tasks.mjs';
import { ReloadsAPI } from './reloads.mjs';
import { RolesAPI } from './roles.mjs';
import { SpacesAPI } from './spaces.mjs';
import { TempContentsAPI } from './temp-contents.mjs';
import { TenantsAPI } from './tenants.mjs';
import { ThemesAPI } from './themes.mjs';
import { TransportsAPI } from './transports.mjs';
import { UsersAPI } from './users.mjs';
import { WebIntegrationsAPI } from './web-integrations.mjs';
import { WebNotificationsAPI } from './web-notifications.mjs';
import { WebhooksAPI } from './webhooks.mjs';
import './global.types-5iFvFJvX.mjs';
import './auth-types-nnUcWhuU.mjs';

declare const apiKeys: ApiKeysAPI;
declare const apps: AppsAPI;
declare const audits: AuditsAPI;
declare const auth: {
    registerAuthModule: typeof registerAuthModule;
    setDefaultHostConfig: typeof setDefaultHostConfig;
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
