# @qlik/api

## 2.28.0

### Minor Changes

- Update from the latest API specs

- Update the internal QIX runtime. The public QIX API is unchanged.

- Update from the latest API specs

- Update from the latest API specs

### Patch Changes

- OAuth2 no longer requests the `user_default` scope when `scope` is not set, so the access token gets all scopes of the oauth client. Set `scope` to a space-separated list, for example `"users apps"`, to request fewer.

  The keys under which OAuth2 tokens are stored with `accessTokenStorage` (`"local"`, `"session"` or a custom `SecretStorage`) have a new format. The same applies to `-refresh-token` keys:

  | Host config                                  | Before                                            | Now                                                 |
  | -------------------------------------------- | ------------------------------------------------- | --------------------------------------------------- |
  | `clientId: "abc"`                            | `qlik-qmfe-api-abc_user_default-access-token`     | `qlik-qmfe-api-abc-access-token`                    |
  | `clientId: "abc", scope: "users apps"`       | `qlik-qmfe-api-abc_users apps-access-token`       | `qlik-qmfe-api-abc_scope-users-20apps-access-token` |
  | `clientId: "abc", subject: "x", userId: "y"` | `qlik-qmfe-api-abc_user_default_x_y-access-token` | `qlik-qmfe-api-abc_subject-x_userid-y-access-token` |

  The scope, subject and user ID are labelled, and every character of a value other than a letter or digit is written as `-XX` per UTF-8 byte in hex. Before, the parts were joined with `_` unencoded, so different host configs could share a key, for example `scope: "a", subject: "b"` and `scope: "a_b"`, or `subject: "x"` and `userId: "x"`. Keys now only contain letters, digits, `_` and `-`.

  After upgrading:

  - Tokens stored by earlier versions are not read, so users sign in once more.
  - The old entries are not removed, and `logout` does not clear them. To remove them, delete the keys in the old format, for example `qlik-qmfe-api-<clientId>_user_default-access-token` and `qlik-qmfe-api-<clientId>_user_default-refresh-token` for a host config without `scope`, `subject` or `userId`.
  - A full-page login that is in progress during the upgrade starts over.

  Concurrent authentication failures no longer start full-page logins that fail state validation on return.

## 2.27.0

### Minor Changes

- Rename `filterDataQualitiesGlobalResultsDataQualityRules_FIX_THIS_QUIRKY_NAME` in `dataQualities` to `filterDataQualitiesGlobalResultsDataQualityRules`, and its `HttpResponse` and `HttpError` types to match.

- Update from the latest API specs

- Update from the latest API specs

- OAuth2 `logout` now clears stored tokens and revokes them on a best-effort basis without navigating by default. Set `endTenantSession: true` to navigate to the tenant's `/logout` endpoint. Auth modules can implement an optional `logout` hook.

- Update from the latest API specs

### Patch Changes

- Update dependencies

## 2.26.0

### Minor Changes

- Update from the latest API specs

### Patch Changes

- Update dependencies

## 2.25.0

### Minor Changes

- Update from the latest API specs

- Update from the latest API specs

### Patch Changes

- Fix grouped undo/redo behavior and isolate UndoInfo state between apps.

## 2.24.0

### Minor Changes

- Update from the latest API specs

### Patch Changes

- Update dependencies

- Fix QIX sheet, story and master object creation helpers.

## 2.23.0

### Minor Changes

- Update from the latest API specs

### Patch Changes

- Clarify non-secret OAuth storage namespaces; preserve token storage settings and existing keys.

## 2.22.0

### Minor Changes

- Update from the latest API specs

- Update from the latest API specs (#1867)

- Update from the latest API specs (API version 2026-11) and update dependencies

- Update from the latest API specs

- Update from the latest API specs and QIX engine 12.2982.0

- Update from the latest API specs (direct-access-agents) and update dependencies
