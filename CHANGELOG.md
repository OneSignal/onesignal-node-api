# Changelog

## [5.12.0](https://github.com/OneSignal/onesignal-node-api/compare/v5.11.0...v5.12.0) (2026-07-20)

## [5.11.0](https://github.com/OneSignal/onesignal-node-api/compare/v5.10.0...v5.11.0) (2026-07-09)

## [5.10.0](https://github.com/OneSignal/onesignal-node-api/compare/v5.9.0...v5.10.0) (2026-06-24)

### Features

* add v5.9.0 package updates ([c55a827](https://github.com/OneSignal/onesignal-node-api/commit/c55a82754de0fc53f2d62cfe7160cc11e55620ee))
* add v5.9.0 package updates ([#187](https://github.com/OneSignal/onesignal-node-api/issues/187)) ([37df7df](https://github.com/OneSignal/onesignal-node-api/commit/37df7df0bf9401324a1ac5c7ea962de02ddb1116)), closes [OneSignal/api-client-libraries#402](https://github.com/OneSignal/api-client-libraries/issues/402) [OneSignal/api-client-libraries#401](https://github.com/OneSignal/api-client-libraries/issues/401) [OneSignal/api-client-libraries#400](https://github.com/OneSignal/api-client-libraries/issues/400)

## [5.9.0](https://github.com/OneSignal/onesignal-node-api/compare/v5.8.0...v5.9.0) (2026-06-18)

### Features

* add v5.8.0 package updates ([11e06e6](https://github.com/OneSignal/onesignal-node-api/commit/11e06e648b3859e3d25a6140ea3ff088a1037d01))
* add v5.8.0 package updates ([#183](https://github.com/OneSignal/onesignal-node-api/issues/183)) ([f7fd2c0](https://github.com/OneSignal/onesignal-node-api/commit/f7fd2c08838c20059b363f92cd18228d0a0cf04c))

## [5.8.0](https://github.com/OneSignal/onesignal-node-api/compare/v5.7.0...v5.8.0) (2026-06-04)

### Features

* add v5.8.0 package updates ([#175](https://github.com/OneSignal/onesignal-node-api/issues/175)) ([5be56de](https://github.com/OneSignal/onesignal-node-api/commit/5be56dee35a43a0c374f58aee5e830b70aae8d85))

## [5.7.0](https://github.com/OneSignal/onesignal-node-api/compare/v5.6.0...v5.7.0) (2026-05-20)

### Features

* add v5.7.0 package updates ([#168](https://github.com/OneSignal/onesignal-node-api/issues/168)) ([374410b](https://github.com/OneSignal/onesignal-node-api/commit/374410b40c18e4c9632081783a81acb64245b666))

## [5.6.0](https://github.com/OneSignal/onesignal-node-api/compare/v5.5.0...v5.6.0) (2026-05-08)

### Features

* add `email_bcc` and `bcc_sent` to Notification and Template models ([#166](https://github.com/OneSignal/onesignal-node-api/issues/166)) ([2398cc2](https://github.com/OneSignal/onesignal-node-api/commit/2398cc2180d5f41c85025c37dbe9889304a3d7a6))

## [5.5.0](https://github.com/OneSignal/onesignal-node-api/compare/v5.4.0...v5.5.0) (2026-04-17)

### Features

* add v5.5.0 package updates ([#160](https://github.com/OneSignal/onesignal-node-api/issues/160)) ([e02ef2a](https://github.com/OneSignal/onesignal-node-api/commit/e02ef2a4a2ce8752d743c15ca0db3dc6509b0955))

## [5.4.0](https://github.com/OneSignal/onesignal-node-api/compare/v5.3.0...v5.4.0) (2026-03-24)

### Features

* add Huawei and `email_reply_to_address` parameters to `Notification` ([#153](https://github.com/OneSignal/onesignal-node-api/issues/153)) ([0ce3682](https://github.com/OneSignal/onesignal-node-api/commit/0ce36826522831f0eabbc6343bccb151b065bb22))

All notable changes to this project will be documented in this file.

## January 2023
### `1.0.0-beta9` - 09/06/2023
- Added User model endpoints
  - Limitations
    - Recommend using only in development and staging environments for Alpha releases.
    - Aliases will be available in a future release
    - Outcomes will be available in a future release
    - Users are deleted when the last subscription is removed
  - Known issues
    - User properties may not update when Subscriptions are transferred
    - Identity Verification
    - We will be introducing JWT in follow up Alpha or Beta release
    - Extra disabled subscriptions are created when switching Users in the SDK.

## December 2022
### `1.0.0-beta8` - 11/14/2022
- Added Live Activity endpoints
- Fixed various bugs

## November 2022
### `1.0.0-beta5` - 11/14/2022
#### Api Changes
- Configuration setup has been simplified and streamlined. Now it looks like this:
  ```js
    const configuration = OneSignal.createConfiguration({
        userKey: USER_KEY_TOKEN,
        appKey: APP_KEY_TOKEN,
    });
  ```
- Player ID is no longer required when creating a player

#### Fixed
- Bug in the OpenAPI schema not allowing users to use filters when creating a notification.
- Bug in the OpenAPI schema not allowing to set the notification name.


## February 2022

### `1.0.0-beta4` - 02/25/2022
#### Added
- .npmignore file

#### Fixed
- Missing `dist` directory since npm was ignoring it due to lack of .npmignore
