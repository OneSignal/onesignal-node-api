# Changelog
All notable changes to this project will be documented in this file.

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

