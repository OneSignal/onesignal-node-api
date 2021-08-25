# Overview
This is a Node.js wrapper library over OneSignal REST API. You can create notifications, view apps, edit a device and all other actions you can take on OneSignal REST API. Includes Typescript support.

# Installation

```
npm install @onesignal/node-onesignal --save
```

```
yarn add @onesignal/node-onesignal
```

# Usage
```js
const OneSignal = require('@onesignal/node-onesignal');
```
```js
import * as OneSignal from '@onesignal/node-onesignal';
```

## Creating a client
### Configuration
We can configure the client using the `createConfiguration` function. You can find more info on each configuration parameter [here](https://github.com/OpenAPITools/openapi-generator/pull/10283/files).

```js
const configuration = OneSignal.createConfiguration(configParams);
```
The returned `configuration` object is what is passed to the `DefaultApi` constructor to initialize the client.

### Initializing the Client
```js
const client = new OneSignal.DefaultApi(configuration);
```

### Authentication
#### User
For managing operations outside of a OneSignal app (e.g: creating a OneSignal app), you will need to use your OneSignal account [user auth key](https://documentation.onesignal.com/docs/accounts-and-keys#user-auth-key). Create a key provider object with a function `getToken` that returns your key.
```js
const user_key_provider = {
    getToken() {
        return  "************************************************";
    }
};
```

#### App
Create a key provider object with a function `getToken` that returns your OneSignal [app's API key](https://documentation.onesignal.com/docs/accounts-and-keys#rest-api-key).

```js
const app_key_provider = {
    getToken() {
        return "************************************************";
    }
};
```

#### Putting it together
```js
// configuration object
let configuration = OneSignal.createConfiguration({
    authMethods: {
        user_key: {
            tokenProvider: user_key_provider
        },
        app_key: {
            tokenProvider: app_key_provider
        }
    }
});

client = new OneSignal.DefaultApi(configuration);
```

#### Advanced Usage: Creating a brand new app
If creating a new app via the client, the response will return the app's API key via the `basic_auth_key` response parameter. You can then use this to modify your configuration object and create a new client that will have both user-level and app-level authentication set up.

```js
let response = await client.createApp(newapp);
const app_key_provider = {
    getToken() {
        return response.basic_auth_key;
    }
};

configuration = OneSignal.createConfiguration({
    authMethods: {
        user_key: {
            tokenProvider: user_key_provider
        },
        app_key: {
            tokenProvider: app_key_provider
        }
    }
});

client = new OneSignal.DefaultApi(configuration);
```

---
## API Reference
To understand this API, know that requests that change state will follow the following format:
1. create or get an object
2. make changes to that object
3. pass the object to the request function to make the changes.

Examples of important OneSignal objects include `App`, `Notification`, `Player`, and `Segment`.

For example, see the section below on creating an app. First an app object is created via the instantiation of the `App` class. Then, the app instance is modified directly. Finally, we use the `client` to create the app via a remote request.

### Creating an app
Creates a new OneSignal app.

**Example**
```js
const app = new OneSignal.App();

// configure your application
app.name = 'app_name';
app.gcm_key = '<your key here>';
app.android_gcm_sender_id = '<your id here>';

const response = await client.createApp(app);
```

### Getting an app
View the details of a single OneSignal app.

**Example**
```js
client.getApp('<app id>');
```

### Updating an app
Updates the name or configuration settings of an existing OneSignal app.

**Example**
```js
client.updateApp('<app id>', app);
```

### Creating a notification
Sends a notification to your users.

**Example**
```js
const notification = new OneSignal.Notification();
notification.app_id = app.id;

notification.contents = {
  en: "Gig'em Ags"
}

// required for Huawei
notification.headings = {
  en: "Gig'em Ags"
}
client.createNotification(notification);
```

### Getting a notification
View the details of a single notification and outcomes associated with it.

**Example**
```js
client.getNotification('<app id>', '<notification id>');
```

### Getting notifications
View the details of multiple notifications.

| Param  | Type   | Description                                                                                                                                                                      |
|--------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| app_id* | string | The OneSignal App ID for your app.  Available in Keys &amp; IDs.                                                                                                                 |
| limit  | string | How many notifications to return.  Max is 50.  Default is 50.                                                                                                                    |
| offset | number | Page offset. Default is 0. Results are sorted by queued_at in descending order. `queued_at` is a representation of the time that the notification was queued at.                 |
| kind   | number | Kind of notifications returned:   * unset - All notification types (default)   * `0` - Dashboard only   * `1` - API only    * `3` - Automated only |


**Example**
```js
client.getNotifications('<app id>', '50', 0, 1);
```

### Getting notification history
View the devices sent a message - **OneSignal Paid Plan Required**
This method will return all devices that were sent the given `notification_id` of an Email or Push Notification if used within 7 days of the date sent.

**Example**
```js
client.getNotificationHistory('<notification id>');
```

### Creating a segment
Create segments visible and usable in the dashboard and API - **Required: OneSignal Paid Plan**

**Example**
```js
const segment = new OneSignal.Segment();

segment.filters = [
  { field: 'session_count', relation: '&gt;', value: '1' },
  { field: 'tag', key: 'my_tag', relation: 'exists' }
]

client.createSegments(app.id, segment)
```

### Deleting a segment
Delete segments (not user devices) - **Required: OneSignal Paid Plan**
You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app.
The `segment_id` can be found in the URL of the segment when viewing it in the dashboard.

**Example**
```js
client.deleteSegments('<app id>', '<segment id>');
```

### Getting a player
View the details of an existing device in one of your OneSignal apps. The email a th hash is **only required if you have enabled Identity Verification and `device_type` is email**.

**Example**
```js
client.getPlayer('<app id>', '<player id>', '<email auth hash>');
```

### Getting players
View the details of multiple devices in one of your OneSignal apps. Unavailable for Apps Over 80,000 Users.

| Param   | Type   | Description                                                      |
|---------|--------|------------------------------------------------------------------|
| app_id* | string | The OneSignal App ID for your app.  Available in Keys &amp; IDs. |
| limit   | string | How many devices to return. Max is 300. Default is 300           |
| offset  | number | Result offset. Default is 0. Results are sorted by id;           |


**Example**
```js
client.getPlayers('<app id>', '300', 0);
```

### Exporting a player
Generate a compressed CSV export of all of your current user data. This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the /players API endpoint.

See [full CSV Export Reference](https://documentation.onesignal.com/reference/csv-export)

**Example**
```js
client.exportPlayer('<app id>', {
  extra_fields: ['location', 'external_user_id'],
  last_active_since: 1469392779,
  segment_name: "Subscribed Users"
});
```


### Updating a player
Update an existing device in one of your OneSignal apps.

**Example**
```js
client.updatePlayer('<player id>', player);
```

### Updating player tags
Update an existing device's tags in one of your OneSignal apps using the External User ID.
#### Warning - Android SDK Data Synchronization
Tags added through the Android SDK tagging methods may not update if using the API to change or update the same tag.
For example, if you use SDK method sendTag("key", "value1") then update the tag value to "value2" with this API endpoint. You will not be able to set the value back to "value1" through the SDK, you will need to change it to something different through the SDK to be reset.

Recommendations if using this Endpoint on Android Mobile Apps:
1 - Do not use the same tag keys for SDK and API updates
2 - If you want to use the same key for both SDK and API updates, call the SDK getTags method first to update the device's tags.

This is only applicable on the Android Mobile App SDKs.

#### Deleting Tags
To delete a tag, include its key and set its value to blank. Omitting a key/value will not delete it.
For example, if I wanted to delete two existing tags rank and category while simultaneously adding a new tag class, the tags JSON would look like the following:

**Example**
```json
"tags": {
   "rank": "",
   "category": "",
   "class": "my_new_value"
}
```

### Deleting a player
Delets a user record.

**Example**
```js
client.deletePlayer(app.id, '<player id>')
```

### Getting outcomes
View the details of all the outcomes associated with your app.

🚧  **Requires Authentication Key Requires your OneSignal App's REST API Key, available in Keys & IDs** 🚧

Outcome Data Limitations Outcomes are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it.

| Param               | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                     |
|---------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| app_id*              | string | The OneSignal App ID for your app.  Available in Keys &amp; IDs.                                                                                                                                                                                                                                                                                                                                                |
| outcome_names       | string | Required Comma-separated list of names and the value (sum/count) for the returned outcome data. Note: Clicks only support count aggregation. For out-of-the-box OneSignal outcomes such as click and session duration, please use the “os” prefix with two underscores. For other outcomes, please use the name specified by the user. Example:os__session_duration.count,os__click.count,CustomOutcomeName.sum |
| outcome_names2      | string | If outcome names contain any commas, then please specify only one value at a time. Example: `outcome_names[]=os__click.count&outcome_names[]=Sales, Purchase.count` where “Sales, Purchase” is the custom outcomes with a comma in the name.                                                                                                                                                                                                        |
| outcome_time_range  | string | Optional Time range for the returned data. The values can be `1h` (for the last 1 hour data), `1d` (for the last 1 day data), or `1mo` (for the last 1 month data). Default is 1h if the parameter is omitted.                                                                                                                                                                                                        |
| outcome_platforms   | string | Optional Platform id. Refer device&#39;s platform ids for values. **Example:** `outcome_platform=0` for iOS `outcome_platform=7`, `8` for Safari and Firefox Default is data from all platforms if the parameter is omitted.                                                                                                                                                                                     |
| outcome_attribution | string | Optional Attribution type for the outcomes. The values can be direct or influenced or unattributed. Example: outcome_attribution=direct Default is total (returns direct+influenced+unattributed) if the parameter is omitted.                                                                                                                                                                             |

**Example**
```js
client.getOutcomes(app.id, 'os__click.count,os_session_duration.count,my_outcome.sum');
```
