# Changelog
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

