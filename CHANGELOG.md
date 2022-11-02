# Changelog
All notable changes to this project will be documented in this file.

## January 2022

### `1.0.0-beta4` - 02/25/2022
#### Added
- .npmignore file

#### Fixed
- Missing `dist` directory since npm was ignoring it due to lack of .npmignore

### `1.0.0-beta5` - 10/1/2022
#### Api Changes
- Configuration setup has been simplified and streamlined. Now it looks like this:
  ```js
    const configuration = OneSignal.createConfiguration({
        userKey: USER_KEY_TOKEN,
        appKey: APP_KEY_TOKEN,
    });
  ```

#### Fixed
- Various bugs related to the problems in the OpenAPI schema we generate this library from
