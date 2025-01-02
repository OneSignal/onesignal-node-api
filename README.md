<h1 align="center">Welcome to @onesignal/node-onesignal 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@onesignal/node-onesignal" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@onesignal/node-onesignal.svg">
  </a>
  <a href="https://github.com/OneSignal/node-onesignal#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/OneSignal/node-onesignal/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://twitter.com/onesignal" target="_blank">
    <img alt="Twitter: onesignal" src="https://img.shields.io/twitter/follow/onesignal.svg?style=social" />
  </a>
</p>

> OpenAPI client for node-onesignal

### 🏠 [Homepage](https://github.com/OneSignal/node-onesignal#readme)
### 🖤 [npm](https://www.npmjs.com/package/@onesignal/node-onesignal)

# Node Client SDK
The OneSignal Node client is a server OneSignal SDK for NodeJS. Integrate OneSignal with your backend events, data, and 
more.


# Install

```sh
# yarn
yarn add @onesignal/node-onesignal

# npm
npm install @onesignal/node-onesignal --save
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
We can configure the client using the `createConfiguration` function. You can find more info on each configuration 
parameter [here](https://github.com/OpenAPITools/openapi-generator/pull/10283/files).

```js
const configuration = OneSignal.createConfiguration(configParams);
```

### Initializing the Client
```js
const client = new OneSignal.DefaultApi(configuration);
```

### Authentication
You can configure auth parameters passing them like this:

```js
const configuration = OneSignal.createConfiguration({
    userKey: '<YOUR_USER_KEY_TOKEN>',
    appKey: '<YOUR_APP_KEY_TOKEN>',
});

const client = new OneSignal.DefaultApi(configuration);
```

#### Advanced Usage: Creating a brand-new app
If creating a new app via the client, the response will return the app's API key via the `basic_auth_key` response 
parameter. You can then use this to modify your configuration object and create a new client that will have both user-level and app-level authentication set up.

```js
const response = await client.createApp(newapp);

const configuration = OneSignal.createConfiguration({
    userKey: '<YOUR_USER_KEY_TOKEN>',
    appKey: response.basic_auth_key,
});

const client = new OneSignal.DefaultApi(configuration);
```

---
## API Reference

> See the full list of [API Endpoints](DefaultApi.MD).

To make stateful changes requests should take on the following pattern:
1. create or get an object
2. make changes to that object
3. pass the object to the request function to make the changes

Examples of important OneSignal objects include `App`, `Notification`, `Player`, and `Segment`.

For example, see the section below on creating an app. First an app object is created via the instantiation of the `App`
class. Then, the app instance is modified directly. Finally, we use the `client` to create the app via a remote request.

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
const app = await client.getApp('<app id>');
```

### Getting multiple apps
View apps.

**Example**
```js
const apps = await client.getApps();
```

### Updating an app
Updates the name or configuration settings of an existing OneSignal app.

**Example**
```js
const app = new OneSignal.App();
app.name = 'modified_app_name';

const udpateAppResponse = await client.updateApp('<existing_app_id>', app);
```

### Creating a notification
Sends a notification to your users.

**Example**
```js
const notification = new OneSignal.Notification();
notification.app_id = app.id;
// Name property may be required in some case, for instance when sending an SMS.
notification.name = "test_notification_name";
notification.contents = {
  en: "Gig'em Ags"
}

// required for Huawei
notification.headings = {
  en: "Gig'em Ags"
}
const notification = await client.createNotification(notification);
```
### Creating a notification using Filters
Sends a notification to your users filtered by specific criteria.

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

// Find all the users that have not spent any amount in USD on IAP.
// https://documentation.onesignal.com/reference/create-notification#send-to-users-based-on-filters
notification.filters = [
    {
        field: 'amount_spent',
        relation: '=',
        value: "0"
    },
];

const notification = await client.createNotification(notification);
```

### Canceling a notification
Stop a scheduled or currently outgoing notification.

**Example**

```js
const cancelNotificationResponse = await client.cancelNotification('<app id>', '<notification id>');
```


### Getting a notification
View the details of a single notification and outcomes associated with it.

**Example**
```js
await client.getNotification('<app id>', '<notification id>');
```

### Getting notifications
View the details of multiple notifications.

| Param  | Type   | Description                                                                                                                                                                      |
|--------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| app_id | string | The OneSignal App ID for your app.  Available in Keys &amp; IDs.                                                                                                                 |
| limit  | string | How many notifications to return.  Max is 50.  Default is 50.                                                                                                                    |
| offset | number | Page offset. Default is 0. Results are sorted by queued_at in descending order. `queued_at` is a representation of the time that the notification was queued at.                 |
| kind   | number | Kind of notifications returned:   * unset - All notification types (default)   * `0` - Dashboard only   * `1` - API only    * `3` - Automated only |


**Example**
```js
const notifications = await client.getNotifications('<app id>', '50', 0, 1);
```

### Getting notification history
View the devices sent a message - **OneSignal Paid Plan Required**
This method will return all devices that were sent the given `notification_id` of an Email or Push Notification if used 
within 7 days of the date sent.

**Example**
```js
const notificationHistory = await client.getNotificationHistory('<notification id>');
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

const segment = await client.createSegments(app.id, segment);
```

### Deleting a segment
Delete segments (not user devices) - **Required: OneSignal Paid Plan**
You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header 
that has admin access on the app.
The `segment_id` can be found in the URL of the segment when viewing it in the dashboard.

**Example**
```js
const deleteSegmentsResponse = await client.deleteSegments('<app id>', '<segment id>');
```

### Creating a player
Add a device.

**Example**
```js
const player = new OneSignal.Player();
player.device_type = 1;
player.app_id = app_id;
player.identifier = '<identifier>';
const player = await client.createPlayer(player);
```

### Getting a player
View the details of an existing device in one of your OneSignal apps.
The email and the hash is **only required if you have enabled Identity Verification and `device_type` is email**.

**Example**
```js
const player = await client.getPlayer('<app id>', '<player id>', '<email auth hash>');
```

### Getting players
View the details of multiple devices in one of your OneSignal apps. 

⚠️ Unavailable for Apps Over 80,000 Users.

| Param  | Type   | Description                                                      |
|--------|--------|------------------------------------------------------------------|
| app_id | string | The OneSignal App ID for your app.  Available in Keys &amp; IDs. |
| limit  | string | How many devices to return. Max is 300. Default is 300           |
| offset | number | Result offset. Default is 0. Results are sorted by id;           |


**Example**
```js
const players = await client.getPlayers('<app id>', '300', 0);
```

### Exporting a player
Generate a compressed CSV export of all of your current user data. This method can be used to generate a compressed CSV
export of all of your existing user data and is a better alternative to retrieving this data using the /players API endpoint.

See [full CSV Export Reference](https://documentation.onesignal.com/reference/csv-export)

**Example**
```js
const exportPlayerResponse = await client.exportPlayer('<app id>', {
  extra_fields: ['location', 'external_user_id'],
  last_active_since: 1469392779,
  segment_name: "Subscribed Users"
});
```


### Updating a player
Update an existing device in one of your OneSignal apps.

**Example**
```js
const updatePlayerResponse = await client.updatePlayer('<player id>', player);
```

### Updating player tags
Update an existing device's tags in one of your OneSignal apps using the External User ID.

```js
const playerToUpdate = new OneSignal.Player();

player.app_id = APP_ID;
player.device_type = 1;

playerToUpdate.external_user_id = 'your_player_external_id'; // setting the same external_user_id as before
const updatePlayerTagsRequestBody = new OneSignal.UpdatePlayerTagsRequestBody();
updatePlayerTagsRequestBody.tags = {'typescript_test_tag': 1};
const updatePlayerResponse = await api.updatePlayerTags(APP_ID, PLAYER_EXTERNAL_USER_ID, updatePlayerTagsRequestBody);
```
#### Deleting Tags
To delete a tag, include its key and set its value to blank (""). Omitting a key/value will not delete it.

For example, if you wanted to delete two existing tags rank and category while simultaneously adding a new tag class, the 
tags JSON would look like the following:

**Example**
```json
"tags": {
   "rank": "",
   "category": "",
   "class": "my_new_value"
}
```

### Deleting a player
Deletes a user record.

**Example**
```js
const deletePlayerResponse = await client.deletePlayer(app.id, '<player id>')
```

### Getting outcomes
View the details of all the outcomes associated with your app.

🚧  **Requires your OneSignal App's REST API Key, available in Keys & IDs** 🚧

Outcome data are accessible for 30 days before being deleted from our servers. You can export this data monthly if you need it for a more extended period.

| Param               | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                     |
|---------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| app_id              | string | The OneSignal App ID for your app.  Available in Keys &amp; IDs.                                                                                                                                                                                                                                                                                                                                                |
| outcome_names       | string | Required Comma-separated list of names and the value (sum/count) for the returned outcome data. Note: Clicks only support count aggregation. For out-of-the-box OneSignal outcomes such as click and session duration, please use the “os” prefix with two underscores. For other outcomes, please use the name specified by the user. Example:os__session_duration.count,os__click.count,CustomOutcomeName.sum |
| outcome_names2      | string | If outcome names contain any commas, then please specify only one value at a time. Example: `outcome_names[]=os__click.count&outcome_names[]=Sales, Purchase.count` where “Sales, Purchase” is the custom outcomes with a comma in the name.                                                                                                                                                                                                        |
| outcome_time_range  | string | Optional Time range for the returned data. The values can be `1h` (for the last 1 hour data), `1d` (for the last 1 day data), or `1mo` (for the last 1 month data). Default is 1h if the parameter is omitted.                                                                                                                                                                                                        |
| outcome_platforms   | string | Optional Platform id. Refer device&#39;s platform ids for values. **Example:** `outcome_platform=0` for iOS `outcome_platform=7`, `8` for Safari and Firefox Default is data from all platforms if the parameter is omitted.                                                                                                                                                                                     |
| outcome_attribution | string | Optional Attribution type for the outcomes. The values can be direct or influenced or unattributed. Example: outcome_attribution=direct Default is total (returns direct+influenced+unattributed) if the parameter is omitted.                                                                                                                                                                             |

**Example**
```js
const outcomes = await client.getOutcomes(app.id, 'os__click.count,os_session_duration.count,my_outcome.sum');
```

### Begin Live Activity
Starts a Live Activity event
```js
// Create a player first
const player = new OneSignal.Player();
player.device_type = 0;
player.app_id = '<app id>';
const playerResponse = await api.createPlayer(player);

// Prepare a request
const beginLiveActivityRequest: BeginLiveActivityRequest = {
    push_token: '<push_token>',
    subscription_id: playerResponse.id!,
};
const activityId = '<activity_id>'; // any string

// Begin activity
await api.beginLiveActivity('<app_id>', activityId, beginLiveActivityRequest);
```

### Update Live Activity
Updates a Live Activity event
```js
const updateLiveActivityRequest: UpdateLiveActivityRequest = {
    event_updates: {
        data: 'test'
    },
    event: "update",
    name: "contents"
};

await api.updateLiveActivity('<app_id>', '<activity_id>', updateLiveActivityRequest);
```

### End Live Activity
Stops a Live Activity event
```js
const subscriptionId = '<subscription_id>'; // player id
await api.endLiveActivity('<app_id>', '<activity_id>', subscriptionId);
```

### Subscription types
* iOSPush
* AndroidPush
* FireOSPush
* ChromeExtensionPush
* ChromePush
* WindowsPush
* SafariLegacyPush
* FirefoxPush
* macOSPush
* HuaweiPush
* SafariPush
* Email
* SMS

## Users
### Creating a OneSignal User
```js
const user = new OneSignal.User();

const aliasLabel = '<alias_label>';
const aliasId = '<alias_id>';
const subscriptionToken = '<subscription_token>';

user.identity = {
    [aliasLabel]: aliasId,
};

user.subscriptions = [
  {
    type: "iOSPush",
    token: subscriptionToken,
  }
];

const createdUser = await api.createUser('<app_id>', user);
assert(createdUser.identity!['onesignal_id'] != null);
```

### Getting a user by `onesignal_id`
```js
const oneisgnalAliasLabel = "onesignal_id";
const onesignalAliasId = createdUser.identity!['onesignal_id'];

const fetchedUser = await api.fetchUser('<app_id>', oneisgnalAliasLabel, onesignalAliasId);
```

### Getting a user by an alias
```js
const fetchedUser = await api.fetchUser('<app_id>', alias_label, alias_id);
```

### Updating a user
```js
const updateUserRequest: UpdateUserRequest = {
    properties: {
        language: 'fr'
    }
};

const updatedUser = await api.updateUser('<app_id>', aliasLabel, aliasId, updateUserRequest);
```

### Deleting a user
```js
await api.deleteUser('<app_id>', aliasLabel, aliasId);
```

## Subscriptions
### Creating a subscription for existing user
```js
const createSubscriptionRequestBody: CreateSubscriptionRequestBody = {
    subscription: {
        type: "AndroidPush",
        token: '<subscription_token>',
    }
};

const response = await api.createSubscription('<app_id>', '<alias_label>', '<alias_id>', createSubscriptionRequestBody);
```

### Updating a subscription
```js
const updateSubscriptionRequestBody: UpdateSubscriptionRequestBody = {
    subscription: {
        type: "iOSPush",
        token: '<new-subscription-token>',
    }
};

await api.updateSubscription('<app_id>', '<existing_subscription_id>', updateSubscriptionRequestBody);
```

### Deleting a subscription
```js
await api.deleteSubscription('<app_id>', '<subscription_id>');
```

### Transfer subscription ownership
Transfers the subscription from one user to another.
```js
// Setting the user for transfering the subscription to. User is identyfied by an IdentityObject.
const transferSubscriptionRequestBody: TransferSubscriptionRequestBody = {
    identity: otherUserIdentityObject
};

const transferResponse = await api.transferSubscription('<app_id>', '<subscription_id>', transferSubscriptionRequestBody);
```

## Aliases
### Fetching aliases for a user
```js
const fetchResponse = await api.fetchAliases('<app_id>', '<subscription_id>');
```

### Fetching user identity
```js
const fetchResponse = await api.fetchUserIdentity('<app_id>', '<alias_label>', '<alias_id>');
```
### Identifying user by alias
```js
const userIdentityRequestBody: UserIdentityRequestBody = {
    identity: {
        ['<new_alias_label>']: '<new_alias_id>'
    }
};

const identifyResponse = await api.identifyUserByAlias('<app_id>', 
                                                       '<existing_alias_label>', 
                                                       '<existing_alias_id>',
                                                       userIdentityRequestBody);
```

### Identifying user by subscription id
```js
const userIdentityRequestBody: UserIdentityRequestBody = {
    identity: {
        ['<new_alias_label>']: '<new_alias_id>'
    }
};

const identifyResponse = await api.identifyUserBySubscriptionId('<app_id>', '<existing_subscription_id>', userIdentityRequestBody);
```

### Deleting an alias
```js
await api.deleteAlias('<app_id>', '<alias_label>', '<alias_id>', '<alias_label_to_delete>');
```
## Author

* Website: https://onesignal.com
* Twitter: [@onesignal](https://twitter.com/onesignal)
* Github: [@OneSignal](https://github.com/OneSignal)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/OneSignal/node-onesignal/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [OneSignal](https://github.com/OneSignal).

This project is [MIT](https://github.com/OneSignal/node-onesignal/blob/main/LICENSE) licensed.
