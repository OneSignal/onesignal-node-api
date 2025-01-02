# .DefaultApi

All URIs are relative to *https://api.onesignal.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beginLiveActivity**](DefaultApi.md#beginLiveActivity) | **POST** /apps/{app_id}/live_activities/{activity_id}/token | Start Live Activity
[**cancelNotification**](DefaultApi.md#cancelNotification) | **DELETE** /notifications/{notification_id} | Stop a scheduled or currently outgoing notification
[**createApp**](DefaultApi.md#createApp) | **POST** /apps | Create an app
[**createNotification**](DefaultApi.md#createNotification) | **POST** /notifications | Create notification
[**createPlayer**](DefaultApi.md#createPlayer) | **POST** /players | Add a device
[**createSegments**](DefaultApi.md#createSegments) | **POST** /apps/{app_id}/segments | Create Segments
[**createSubscription**](DefaultApi.md#createSubscription) | **POST** /apps/{app_id}/users/by/{alias_label}/{alias_id}/subscriptions | 
[**createUser**](DefaultApi.md#createUser) | **POST** /apps/{app_id}/users | 
[**deleteAlias**](DefaultApi.md#deleteAlias) | **DELETE** /apps/{app_id}/users/by/{alias_label}/{alias_id}/identity/{alias_label_to_delete} | 
[**deletePlayer**](DefaultApi.md#deletePlayer) | **DELETE** /players/{player_id} | Delete a user record
[**deleteSegments**](DefaultApi.md#deleteSegments) | **DELETE** /apps/{app_id}/segments/{segment_id} | Delete Segments
[**deleteSubscription**](DefaultApi.md#deleteSubscription) | **DELETE** /apps/{app_id}/subscriptions/{subscription_id} | 
[**deleteUser**](DefaultApi.md#deleteUser) | **DELETE** /apps/{app_id}/users/by/{alias_label}/{alias_id} | 
[**endLiveActivity**](DefaultApi.md#endLiveActivity) | **DELETE** /apps/{app_id}/live_activities/{activity_id}/token/{subscription_id} | Stop Live Activity
[**exportEvents**](DefaultApi.md#exportEvents) | **POST** /notifications/{notification_id}/export_events?app_id&#x3D;{app_id} | Export CSV of Events
[**exportPlayers**](DefaultApi.md#exportPlayers) | **POST** /players/csv_export?app_id&#x3D;{app_id} | Export CSV of Players
[**fetchAliases**](DefaultApi.md#fetchAliases) | **GET** /apps/{app_id}/subscriptions/{subscription_id}/user/identity | 
[**fetchUser**](DefaultApi.md#fetchUser) | **GET** /apps/{app_id}/users/by/{alias_label}/{alias_id} | 
[**fetchUserIdentity**](DefaultApi.md#fetchUserIdentity) | **GET** /apps/{app_id}/users/by/{alias_label}/{alias_id}/identity | 
[**getApp**](DefaultApi.md#getApp) | **GET** /apps/{app_id} | View an app
[**getApps**](DefaultApi.md#getApps) | **GET** /apps | View apps
[**getEligibleIams**](DefaultApi.md#getEligibleIams) | **GET** /apps/{app_id}/subscriptions/{subscription_id}/iams | 
[**getNotification**](DefaultApi.md#getNotification) | **GET** /notifications/{notification_id} | View notification
[**getNotificationHistory**](DefaultApi.md#getNotificationHistory) | **POST** /notifications/{notification_id}/history | Notification History
[**getNotifications**](DefaultApi.md#getNotifications) | **GET** /notifications | View notifications
[**getOutcomes**](DefaultApi.md#getOutcomes) | **GET** /apps/{app_id}/outcomes | View Outcomes
[**getPlayer**](DefaultApi.md#getPlayer) | **GET** /players/{player_id} | View device
[**getPlayers**](DefaultApi.md#getPlayers) | **GET** /players | View devices
[**identifyUserByAlias**](DefaultApi.md#identifyUserByAlias) | **PATCH** /apps/{app_id}/users/by/{alias_label}/{alias_id}/identity | 
[**identifyUserBySubscriptionId**](DefaultApi.md#identifyUserBySubscriptionId) | **PATCH** /apps/{app_id}/subscriptions/{subscription_id}/user/identity | 
[**transferSubscription**](DefaultApi.md#transferSubscription) | **PATCH** /apps/{app_id}/subscriptions/{subscription_id}/owner | 
[**updateApp**](DefaultApi.md#updateApp) | **PUT** /apps/{app_id} | Update an app
[**updateLiveActivity**](DefaultApi.md#updateLiveActivity) | **POST** /apps/{app_id}/live_activities/{activity_id}/notifications | Update a Live Activity via Push
[**updatePlayer**](DefaultApi.md#updatePlayer) | **PUT** /players/{player_id} | Edit device
[**updatePlayerTags**](DefaultApi.md#updatePlayerTags) | **PUT** /apps/{app_id}/users/{external_user_id} | Edit tags with external user id
[**updateSubscription**](DefaultApi.md#updateSubscription) | **PATCH** /apps/{app_id}/subscriptions/{subscription_id} | 
[**updateUser**](DefaultApi.md#updateUser) | **PATCH** /apps/{app_id}/users/by/{alias_label}/{alias_id} | 


# **beginLiveActivity**
> void beginLiveActivity(beginLiveActivityRequest)

Starts a Live Activity

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiBeginLiveActivityRequest = {
  // string | The OneSignal App ID for your app.  Available in Keys & IDs.
  appId: "app_id_example",
  // string | Live Activity record ID
  activityId: "activity_id_example",
  // BeginLiveActivityRequest
  beginLiveActivityRequest: {
    push_token: "push_token_example",
    subscription_id: "subscription_id_example",
  },
};

apiInstance.beginLiveActivity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beginLiveActivityRequest** | **BeginLiveActivityRequest**|  |
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **activityId** | [**string**] | Live Activity record ID | defaults to undefined


### Return type

**void**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelNotification**
> CancelNotificationSuccessResponse cancelNotification()

Used to stop a scheduled or currently outgoing notification

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCancelNotificationRequest = {
  // string
  appId: "app_id_example",
  // string
  notificationId: "notification_id_example",
};

apiInstance.cancelNotification(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **notificationId** | [**string**] |  | defaults to undefined


### Return type

**CancelNotificationSuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createApp**
> App createApp(app)

Creates a new OneSignal app

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateAppRequest = {
  // App
  app: {
    name: "name_example",
    android_gcm_sender_id: "android_gcm_sender_id_example",
    gcm_key: "gcm_key_example",
    chrome_web_origin: "chrome_web_origin_example",
    chrome_key: "chrome_key_example",
    chrome_web_default_notification_icon: "chrome_web_default_notification_icon_example",
    chrome_web_sub_domain: "chrome_web_sub_domain_example",
    apns_env: "sandbox",
    apns_p12: "apns_p12_example",
    apns_p12_password: "apns_p12_password_example",
    safari_apns_p12: "safari_apns_p12_example",
    safari_apns_p12_password: "safari_apns_p12_password_example",
    apns_key_id: "apns_key_id_example",
    apns_team_id: "apns_team_id_example",
    apns_bundle_id: "apns_bundle_id_example",
    apns_p8: "apns_p8_example",
    safari_site_origin: "safari_site_origin_example",
    safari_icon_256_256: "safari_icon_256_256_example",
    site_name: "site_name_example",
    organization_id: "organization_id_example",
    additional_data_is_root_payload: true,
  },
};

apiInstance.createApp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **App**|  |


### Return type

**App**

### Authorization

[user_key](README.md#user_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNotification**
> CreateNotificationSuccessResponse createNotification(notification)

Sends notifications to your users 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateNotificationRequest = {
  // Notification
  notification: null,
};

apiInstance.createNotification(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification** | **Notification**|  |


### Return type

**CreateNotificationSuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK, invalid_player_ids, invalid_external_user_ids or No Subscribed Players If a message was successfully created, you will get a 200 response and an id for the notification. If the 200 response contains \&quot;invalid_player_ids\&quot; or \&quot;invalid_external_user_ids\&quot; this will mark devices that exist in the provided app_id but are no longer subscribed. If no id is returned, then a message was not created and the targeted User IDs do not exist under the provided app_id. Any User IDs sent in the request that do not exist under the specified app_id will be ignored.  |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPlayer**
> CreatePlayerSuccessResponse createPlayer(player)

Register a new device to one of your OneSignal apps &#x1F6A7; Don\'t use this This API endpoint is designed to be used from our open source Mobile and Web Push SDKs. It is not designed for developers to use it directly, unless instructed to do so by OneSignal support. If you use this method instead of our SDKs, many OneSignal features such as conversion tracking, timezone tracking, language detection, and rich-push won\'t work out of the box. It will also make it harder to identify possible setup issues. This method is used to register a new device with OneSignal. If a device is already registered with the specified identifier, then this will update the existing device record instead of creating a new one. The returned player is a player / user ID. Use the returned ID to send push notifications to this specific user later, or to include this player when sending to a set of users. &#x1F6A7; iOS Must set test_type to 1 when building your iOS app as development. Omit this field in your production app builds. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreatePlayerRequest = {
  // Player
  player: {
    app_id: "app_id_example",
    device_type: 1,
    external_user_id: "external_user_id_example",
    external_user_id_auth_hash: "external_user_id_auth_hash_example",
    email_auth_hash: "email_auth_hash_example",
    identifier: "identifier_example",
    language: "language_example",
    timezone: 1,
    game_version: "game_version_example",
    device_model: "device_model_example",
    device_os: "device_os_example",
    ad_id: "ad_id_example",
    sdk: "sdk_example",
    session_count: 1,
    tags: {},
    amount_spent: 3.14,
    created_at: 1,
    playtime: 1,
    badge_count: 1,
    last_active: 1,
    notification_types: 1,
    test_type: 1,
    long: 3.14,
    lat: 3.14,
    country: "country_example",
  },
};

apiInstance.createPlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **Player**|  |


### Return type

**CreatePlayerSuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSegments**
> CreateSegmentSuccessResponse createSegments()

Create segments visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator\'s. &#x1F6A7; Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segments endpoint and re-create it with this endpoint to edit. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateSegmentsRequest = {
  // string | The OneSignal App ID for your app.  Available in Keys & IDs.
  appId: "app_id_example",
  // Segment (optional)
  segment: {
    id: "id_example",
    name: "name_example",
    filters: [
      null,
    ],
  },
};

apiInstance.createSegments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segment** | **Segment**|  |
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined


### Return type

**CreateSegmentSuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSubscription**
> InlineResponse201 createSubscription(createSubscriptionRequestBody)

Creates a new Subscription under the User provided. Useful to add email addresses and SMS numbers to the User.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateSubscriptionRequest = {
  // string
  appId: "app_id_example",
  // string
  aliasLabel: "alias_label_example",
  // string
  aliasId: "alias_id_example",
  // CreateSubscriptionRequestBody
  createSubscriptionRequestBody: {
    subscription: {
      id: "id_example",
      type: "iOSPush",
      token: "token_example",
      enabled: true,
      notification_types: 3.14,
      session_time: 3.14,
      session_count: 3.14,
      sdk: "sdk_example",
      device_model: "device_model_example",
      device_os: "device_os_example",
      rooted: true,
      test_type: 3.14,
      app_version: "app_version_example",
      net_type: 3.14,
      carrier: "carrier_example",
      web_auth: "web_auth_example",
      web_p256: "web_p256_example",
    },
    retain_previous_owner: true,
  },
};

apiInstance.createSubscription(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSubscriptionRequestBody** | **CreateSubscriptionRequestBody**|  |
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined


### Return type

**InlineResponse201**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | CREATED |  -  |
**202** | ACCEPTED |  -  |
**400** | Bad Request |  -  |
**409** | Operation is not permitted due to user having the maximum number of subscriptions assigned |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createUser**
> User createUser(user)

Creates a User, optionally Subscriptions owned by the User as well as Aliases. Aliases provided in the payload will be used to look up an existing User.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateUserRequest = {
  // string
  appId: "app_id_example",
  // User
  user: {
    properties: {
      tags: {},
      language: "language_example",
      timezone_id: "timezone_id_example",
      lat: 3.14,
      long: 3.14,
      country: "country_example",
      first_active: 3.14,
      last_active: 3.14,
      amount_spent: 3.14,
      purchases: [
        {
          sku: "sku_example",
          amount: "amount_example",
          iso: "iso_example",
          count: 3.14,
        },
      ],
      ip: "ip_example",
    },
    identity: {},
    subscriptions: [
      {
        id: "id_example",
        type: "iOSPush",
        token: "token_example",
        enabled: true,
        notification_types: 3.14,
        session_time: 3.14,
        session_count: 3.14,
        sdk: "sdk_example",
        device_model: "device_model_example",
        device_os: "device_os_example",
        rooted: true,
        test_type: 3.14,
        app_version: "app_version_example",
        net_type: 3.14,
        carrier: "carrier_example",
        web_auth: "web_auth_example",
        web_p256: "web_p256_example",
      },
    ],
    subscription_options: {
      retain_previous_owner: true,
    },
  },
};

apiInstance.createUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |
 **appId** | [**string**] |  | defaults to undefined


### Return type

**User**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CREATED |  -  |
**201** | CREATED |  -  |
**202** | ACCEPTED |  -  |
**400** | Bad Request |  -  |
**409** | Multiple User Identity Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAlias**
> InlineResponse200 deleteAlias()

Deletes an alias by alias label

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteAliasRequest = {
  // string
  appId: "app_id_example",
  // string
  aliasLabel: "alias_label_example",
  // string
  aliasId: "alias_id_example",
  // string
  aliasLabelToDelete: "alias_label_to_delete_example",
};

apiInstance.deleteAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined
 **aliasLabelToDelete** | [**string**] |  | defaults to undefined


### Return type

**InlineResponse200**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePlayer**
> DeletePlayerSuccessResponse deletePlayer()

Delete player - Required: Used to delete a single, specific Player ID record from a specific OneSignal app. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeletePlayerRequest = {
  // string | The OneSignal App ID for your app.  Available in Keys & IDs.
  appId: "app_id_example",
  // string | The OneSignal player_id
  playerId: "player_id_example",
};

apiInstance.deletePlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **playerId** | [**string**] | The OneSignal player_id | defaults to undefined


### Return type

**DeletePlayerSuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteSegments**
> DeleteSegmentSuccessResponse deleteSegments()

Delete segments (not user devices) - Required: OneSignal Paid Plan You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app. The segment_id can be found in the URL of the segment when viewing it in the dashboard. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteSegmentsRequest = {
  // string | The OneSignal App ID for your app.  Available in Keys & IDs.
  appId: "app_id_example",
  // string | The segment_id can be found in the URL of the segment when viewing it in the dashboard.
  segmentId: "segment_id_example",
};

apiInstance.deleteSegments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **segmentId** | [**string**] | The segment_id can be found in the URL of the segment when viewing it in the dashboard. | defaults to undefined


### Return type

**DeleteSegmentSuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteSubscription**
> void deleteSubscription()

Deletes the Subscription.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteSubscriptionRequest = {
  // string
  appId: "app_id_example",
  // string
  subscriptionId: "subscription_id_example",
};

apiInstance.deleteSubscription(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | ACCEPTED |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteUser**
> void deleteUser()

Removes the User identified by (:alias_label, :alias_id), and all Subscriptions and Aliases

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteUserRequest = {
  // string
  appId: "app_id_example",
  // string
  aliasLabel: "alias_label_example",
  // string
  aliasId: "alias_id_example",
};

apiInstance.deleteUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **endLiveActivity**
> void endLiveActivity()

Stops a Live Activity

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiEndLiveActivityRequest = {
  // string | The OneSignal App ID for your app.  Available in Keys & IDs.
  appId: "app_id_example",
  // string | Live Activity record ID
  activityId: "activity_id_example",
  // string | Subscription ID
  subscriptionId: "subscription_id_example",
};

apiInstance.endLiveActivity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **activityId** | [**string**] | Live Activity record ID | defaults to undefined
 **subscriptionId** | [**string**] | Subscription ID | defaults to undefined


### Return type

**void**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exportEvents**
> ExportEventsSuccessResponse exportEvents()

Generate a compressed CSV report of all of the events data for a notification. This will return a URL immediately upon success but it may take several minutes for the CSV to become available at that URL depending on the volume of data. Only one export can be in-progress per OneSignal account at any given time.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiExportEventsRequest = {
  // string | The ID of the notification to export events from.
  notificationId: "notification_id_example",
  // string | The ID of the app that the notification belongs to.
  appId: "app_id_example",
};

apiInstance.exportEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationId** | [**string**] | The ID of the notification to export events from. | defaults to undefined
 **appId** | [**string**] | The ID of the app that the notification belongs to. | defaults to undefined


### Return type

**ExportEventsSuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exportPlayers**
> ExportPlayersSuccessResponse exportPlayers()

Generate a compressed CSV export of all of your current user data This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the /players API endpoint. The file will be compressed using GZip. The file may take several minutes to generate depending on the number of users in your app. The URL generated will be available for 3 days and includes random v4 uuid as part of the resource name to be unguessable. &#x1F6A7; 403 Error Responses          You can test if it is complete by making a GET request to the csv_file_url value. This file may take time to generate depending on how many device records are being pulled. If the file is not ready, a 403 error will be returned. Otherwise the file itself will be returned. &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs. &#x1F6A7; Concurrent Exports Only one concurrent export is allowed per OneSignal account. Please ensure you have successfully downloaded the .csv.gz file before exporting another app. CSV File Format: - Default Columns:   | Field | Details |   | --- | --- |   | id | OneSignal Player Id |   | identifier | Push Token |   | session_count | Number of times they visited the app or site   | language | Device language code |   | timezone | Number of seconds away from UTC. Example: -28800 |   | game_version | Version of your mobile app gathered from Android Studio versionCode in your App/build.gradle and iOS uses kCFBundleVersionKey in Xcode. |   | device_os | Device Operating System Version. Example: 80 = Chrome 80, 9 = Android 9 |   | device_type | Device Operating System Type |   | device_model | Device Hardware String Code. Example: Mobile Web Subscribers will have `Linux armv` |   | ad_id | Based on the Google Advertising Id for Android, identifierForVendor for iOS. OptedOut means user turned off Advertising tracking on the device. |   | tags | Current OneSignal Data Tags on the device. |   | last_active | Date and time the user last opened the mobile app or visited the site. |   | playtime | Total amount of time in seconds the user had the mobile app open. |   | amount_spent |  Mobile only - amount spent in USD on In-App Purchases. |    | created_at | Date and time the device record was created in OneSignal. Mobile - first time they opened the app with OneSignal SDK. Web - first time the user subscribed to the site. |   | invalid_identifier | t = unsubscribed, f = subscibed |   | badge_count | Current number of badges on the device | - Extra Columns:   | Field | Details |   | --- | --- |   | external_user_id | Your User Id set on the device |   | notification_types | Notification types |   | location | Location points (Latitude and Longitude) set on the device. |   | country | Country code |   | rooted | Android device rooted or not |   | ip | IP Address of the device if being tracked. See Handling Personal Data. |   | web_auth | Web Only authorization key. |   | web_p256 | Web Only p256 key. | 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiExportPlayersRequest = {
  // string | The app ID that you want to export devices from
  appId: "app_id_example",
  // ExportPlayersRequestBody (optional)
  exportPlayersRequestBody: {
    extra_fields: [
      "extra_fields_example",
    ],
    last_active_since: "last_active_since_example",
    segment_name: "segment_name_example",
  },
};

apiInstance.exportPlayers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportPlayersRequestBody** | **ExportPlayersRequestBody**|  |
 **appId** | [**string**] | The app ID that you want to export devices from | defaults to undefined


### Return type

**ExportPlayersSuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **fetchAliases**
> UserIdentityResponse fetchAliases()

Lists all Aliases for the User identified by :subscription_id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiFetchAliasesRequest = {
  // string
  appId: "app_id_example",
  // string
  subscriptionId: "subscription_id_example",
};

apiInstance.fetchAliases(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined


### Return type

**UserIdentityResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **fetchUser**
> User fetchUser()

Returns the User’s properties, Aliases, and Subscriptions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiFetchUserRequest = {
  // string
  appId: "app_id_example",
  // string
  aliasLabel: "alias_label_example",
  // string
  aliasId: "alias_id_example",
};

apiInstance.fetchUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined


### Return type

**User**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **fetchUserIdentity**
> InlineResponse200 fetchUserIdentity()

Lists all Aliases for the User identified by (:alias_label, :alias_id).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiFetchUserIdentityRequest = {
  // string
  appId: "app_id_example",
  // string
  aliasLabel: "alias_label_example",
  // string
  aliasId: "alias_id_example",
};

apiInstance.fetchUserIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined


### Return type

**InlineResponse200**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApp**
> App getApp()

View the details of a single OneSignal app

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAppRequest = {
  // string | An app id
  appId: "app_id_example",
};

apiInstance.getApp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | An app id | defaults to undefined


### Return type

**App**

### Authorization

[user_key](README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApps**
> Array<App> getApps()

View the details of all of your current OneSignal apps

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getApps(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<App>**

### Authorization

[user_key](README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEligibleIams**
> InlineResponse2003 getEligibleIams()

Manifest of In-App Messages the Subscription is eligible to display by the SDK.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetEligibleIamsRequest = {
  // string
  appId: "app_id_example",
  // string
  subscriptionId: "subscription_id_example",
};

apiInstance.getEligibleIams(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined


### Return type

**InlineResponse2003**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNotification**
> NotificationWithMeta getNotification()

View the details of a single notification and outcomes associated with it

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetNotificationRequest = {
  // string
  appId: "app_id_example",
  // string
  notificationId: "notification_id_example",
};

apiInstance.getNotification(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **notificationId** | [**string**] |  | defaults to undefined


### Return type

**NotificationWithMeta**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNotificationHistory**
> NotificationHistorySuccessResponse getNotificationHistory(getNotificationRequestBody)

-> View the devices sent a message - OneSignal Paid Plan Required This method will return all devices that were sent the given notification_id of an Email or Push Notification if used within 7 days of the date sent. After 7 days of the sending date, the message history data will be unavailable. After a successful response is received, the destination url may be polled until the file becomes available. Most exports are done in ~1-3 minutes, so setting a poll interval of 10 seconds should be adequate. For use cases that are not meant to be consumed by a script, an email will be sent to the supplied email address. &#x1F6A7; Requirements A OneSignal Paid Plan. Turn on Send History via OneSignal API in Settings -> Analytics. Cannot get data before this was turned on. Must be called within 7 days after sending the message. Messages targeting under 1000 recipients will not have \"sent\" events recorded, but will show \"clicked\" events. Requires your OneSignal App\'s REST API Key, available in Keys & IDs.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetNotificationHistoryRequest = {
  // string | The \"id\" of the message found in the Notification object
  notificationId: "notification_id_example",
  // GetNotificationRequestBody
  getNotificationRequestBody: {
    events: "sent",
    email: "email_example",
    app_id: "app_id_example",
  },
};

apiInstance.getNotificationHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNotificationRequestBody** | **GetNotificationRequestBody**|  |
 **notificationId** | [**string**] | The \&quot;id\&quot; of the message found in the Notification object | defaults to undefined


### Return type

**NotificationHistorySuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNotifications**
> NotificationSlice getNotifications()

View the details of multiple notifications

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetNotificationsRequest = {
  // string | The app ID that you want to view notifications from
  appId: "app_id_example",
  // number | How many notifications to return.  Max is 50.  Default is 50. (optional)
  limit: 1,
  // number | Page offset.  Default is 0.  Results are sorted by queued_at in descending order.  queued_at is a representation of the time that the notification was queued at. (optional)
  offset: 1,
  // 0 | 1 | 3 | Kind of notifications returned:   * unset - All notification types (default)   * `0` - Dashboard only   * `1` - API only   * `3` - Automated only  (optional)
  kind: 0,
};

apiInstance.getNotifications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The app ID that you want to view notifications from | defaults to undefined
 **limit** | [**number**] | How many notifications to return.  Max is 50.  Default is 50. | (optional) defaults to undefined
 **offset** | [**number**] | Page offset.  Default is 0.  Results are sorted by queued_at in descending order.  queued_at is a representation of the time that the notification was queued at. | (optional) defaults to undefined
 **kind** | [**0 | 1 | 3**]**Array<0 &#124; 1 &#124; 3>** | Kind of notifications returned:   * unset - All notification types (default)   * &#x60;0&#x60; - Dashboard only   * &#x60;1&#x60; - API only   * &#x60;3&#x60; - Automated only  | (optional) defaults to undefined


### Return type

**NotificationSlice**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOutcomes**
> OutcomesData getOutcomes()

View the details of all the outcomes associated with your app  &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs.  &#x1F6A7; Outcome Data Limitations Outcomes are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetOutcomesRequest = {
  // string | The OneSignal App ID for your app.  Available in Keys & IDs.
  appId: "app_id_example",
  // string | Required Comma-separated list of names and the value (sum/count) for the returned outcome data. Note: Clicks only support count aggregation. For out-of-the-box OneSignal outcomes such as click and session duration, please use the \"os\" prefix with two underscores. For other outcomes, please use the name specified by the user. Example:os__session_duration.count,os__click.count,CustomOutcomeName.sum 
  outcomeNames: "outcome_names_example",
  // string | Optional If outcome names contain any commas, then please specify only one value at a time. Example: outcome_names[]=os__click.count&outcome_names[]=Sales, Purchase.count where \"Sales, Purchase\" is the custom outcomes with a comma in the name.  (optional)
  outcomeNames2: "outcome_names[]_example",
  // string | Optional Time range for the returned data. The values can be 1h (for the last 1 hour data), 1d (for the last 1 day data), or 1mo (for the last 1 month data). Default is 1h if the parameter is omitted.  (optional)
  outcomeTimeRange: "outcome_time_range_example",
  // string | Optional Platform id. Refer device\'s platform ids for values. Example: outcome_platform=0 for iOS outcome_platform=7,8 for Safari and Firefox Default is data from all platforms if the parameter is omitted.  (optional)
  outcomePlatforms: "outcome_platforms_example",
  // string | Optional Attribution type for the outcomes. The values can be direct or influenced or unattributed. Example: outcome_attribution=direct Default is total (returns direct+influenced+unattributed) if the parameter is omitted.  (optional)
  outcomeAttribution: "outcome_attribution_example",
};

apiInstance.getOutcomes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **outcomeNames** | [**string**] | Required Comma-separated list of names and the value (sum/count) for the returned outcome data. Note: Clicks only support count aggregation. For out-of-the-box OneSignal outcomes such as click and session duration, please use the \&quot;os\&quot; prefix with two underscores. For other outcomes, please use the name specified by the user. Example:os__session_duration.count,os__click.count,CustomOutcomeName.sum  | defaults to undefined
 **outcomeNames2** | [**string**] | Optional If outcome names contain any commas, then please specify only one value at a time. Example: outcome_names[]&#x3D;os__click.count&amp;outcome_names[]&#x3D;Sales, Purchase.count where \&quot;Sales, Purchase\&quot; is the custom outcomes with a comma in the name.  | (optional) defaults to undefined
 **outcomeTimeRange** | [**string**] | Optional Time range for the returned data. The values can be 1h (for the last 1 hour data), 1d (for the last 1 day data), or 1mo (for the last 1 month data). Default is 1h if the parameter is omitted.  | (optional) defaults to undefined
 **outcomePlatforms** | [**string**] | Optional Platform id. Refer device\&#39;s platform ids for values. Example: outcome_platform&#x3D;0 for iOS outcome_platform&#x3D;7,8 for Safari and Firefox Default is data from all platforms if the parameter is omitted.  | (optional) defaults to undefined
 **outcomeAttribution** | [**string**] | Optional Attribution type for the outcomes. The values can be direct or influenced or unattributed. Example: outcome_attribution&#x3D;direct Default is total (returns direct+influenced+unattributed) if the parameter is omitted.  | (optional) defaults to undefined


### Return type

**OutcomesData**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPlayer**
> Player getPlayer()

View the details of an existing device in one of your OneSignal apps

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetPlayerRequest = {
  // string | Your app_id for this device
  appId: "app_id_example",
  // string | Player\'s OneSignal ID
  playerId: "player_id_example",
  // string | Email - Only required if you have enabled Identity Verification and device_type is email (11). (optional)
  emailAuthHash: "email_auth_hash_example",
};

apiInstance.getPlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | Your app_id for this device | defaults to undefined
 **playerId** | [**string**] | Player\&#39;s OneSignal ID | defaults to undefined
 **emailAuthHash** | [**string**] | Email - Only required if you have enabled Identity Verification and device_type is email (11). | (optional) defaults to undefined


### Return type

**Player**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPlayers**
> PlayerSlice getPlayers()

View the details of multiple devices in one of your OneSignal apps Unavailable for Apps Over 80,000 Users For performance reasons, this method is not available for larger apps. Larger apps should use the CSV export API endpoint, which is much more performant. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetPlayersRequest = {
  // string | The app ID that you want to view players from
  appId: "app_id_example",
  // number | How many devices to return. Max is 300. Default is 300 (optional)
  limit: 1,
  // number | Result offset. Default is 0. Results are sorted by id; (optional)
  offset: 1,
};

apiInstance.getPlayers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The app ID that you want to view players from | defaults to undefined
 **limit** | [**number**] | How many devices to return. Max is 300. Default is 300 | (optional) defaults to undefined
 **offset** | [**number**] | Result offset. Default is 0. Results are sorted by id; | (optional) defaults to undefined


### Return type

**PlayerSlice**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **identifyUserByAlias**
> InlineResponse200 identifyUserByAlias(userIdentityRequestBody)

Upserts one or more Aliases to an existing User identified by (:alias_label, :alias_id).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiIdentifyUserByAliasRequest = {
  // string
  appId: "app_id_example",
  // string
  aliasLabel: "alias_label_example",
  // string
  aliasId: "alias_id_example",
  // UserIdentityRequestBody
  userIdentityRequestBody: {
    identity: {},
  },
};

apiInstance.identifyUserByAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdentityRequestBody** | **UserIdentityRequestBody**|  |
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined


### Return type

**InlineResponse200**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **identifyUserBySubscriptionId**
> UserIdentityResponse identifyUserBySubscriptionId(userIdentityRequestBody)

Upserts one or more Aliases for the User identified by :subscription_id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiIdentifyUserBySubscriptionIdRequest = {
  // string
  appId: "app_id_example",
  // string
  subscriptionId: "subscription_id_example",
  // UserIdentityRequestBody
  userIdentityRequestBody: {
    identity: {},
  },
};

apiInstance.identifyUserBySubscriptionId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdentityRequestBody** | **UserIdentityRequestBody**|  |
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined


### Return type

**UserIdentityResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transferSubscription**
> UserIdentityResponse transferSubscription(transferSubscriptionRequestBody)

Transfers this Subscription to the User identified by the identity in the payload.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTransferSubscriptionRequest = {
  // string
  appId: "app_id_example",
  // string
  subscriptionId: "subscription_id_example",
  // TransferSubscriptionRequestBody
  transferSubscriptionRequestBody: {
    identity: {},
  },
};

apiInstance.transferSubscription(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferSubscriptionRequestBody** | **TransferSubscriptionRequestBody**|  |
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined


### Return type

**UserIdentityResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApp**
> App updateApp(app)

Updates the name or configuration settings of an existing OneSignal app

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateAppRequest = {
  // string | An app id
  appId: "app_id_example",
  // App
  app: {
    name: "name_example",
    android_gcm_sender_id: "android_gcm_sender_id_example",
    gcm_key: "gcm_key_example",
    chrome_web_origin: "chrome_web_origin_example",
    chrome_key: "chrome_key_example",
    chrome_web_default_notification_icon: "chrome_web_default_notification_icon_example",
    chrome_web_sub_domain: "chrome_web_sub_domain_example",
    apns_env: "sandbox",
    apns_p12: "apns_p12_example",
    apns_p12_password: "apns_p12_password_example",
    safari_apns_p12: "safari_apns_p12_example",
    safari_apns_p12_password: "safari_apns_p12_password_example",
    apns_key_id: "apns_key_id_example",
    apns_team_id: "apns_team_id_example",
    apns_bundle_id: "apns_bundle_id_example",
    apns_p8: "apns_p8_example",
    safari_site_origin: "safari_site_origin_example",
    safari_icon_256_256: "safari_icon_256_256_example",
    site_name: "site_name_example",
    organization_id: "organization_id_example",
    additional_data_is_root_payload: true,
  },
};

apiInstance.updateApp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **App**|  |
 **appId** | [**string**] | An app id | defaults to undefined


### Return type

**App**

### Authorization

[user_key](README.md#user_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateLiveActivity**
> UpdateLiveActivitySuccessResponse updateLiveActivity(updateLiveActivityRequest)

Updates a specified live activity.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateLiveActivityRequest = {
  // string | The OneSignal App ID for your app.  Available in Keys & IDs.
  appId: "app_id_example",
  // string | Live Activity record ID
  activityId: "activity_id_example",
  // UpdateLiveActivityRequest
  updateLiveActivityRequest: {
    name: "headings",
    event: "update",
    event_updates: {},
    dismiss_at: 3.14,
  },
};

apiInstance.updateLiveActivity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateLiveActivityRequest** | **UpdateLiveActivityRequest**|  |
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **activityId** | [**string**] | Live Activity record ID | defaults to undefined


### Return type

**UpdateLiveActivitySuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePlayer**
> UpdatePlayerSuccessResponse updatePlayer(player)

Update an existing device in one of your OneSignal apps

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdatePlayerRequest = {
  // string | Player\'s OneSignal ID
  playerId: "player_id_example",
  // Player
  player: {
    app_id: "app_id_example",
    device_type: 1,
    external_user_id: "external_user_id_example",
    external_user_id_auth_hash: "external_user_id_auth_hash_example",
    email_auth_hash: "email_auth_hash_example",
    identifier: "identifier_example",
    language: "language_example",
    timezone: 1,
    game_version: "game_version_example",
    device_model: "device_model_example",
    device_os: "device_os_example",
    ad_id: "ad_id_example",
    sdk: "sdk_example",
    session_count: 1,
    tags: {},
    amount_spent: 3.14,
    created_at: 1,
    playtime: 1,
    badge_count: 1,
    last_active: 1,
    notification_types: 1,
    test_type: 1,
    long: 3.14,
    lat: 3.14,
    country: "country_example",
  },
};

apiInstance.updatePlayer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **Player**|  |
 **playerId** | [**string**] | Player\&#39;s OneSignal ID | defaults to undefined


### Return type

**UpdatePlayerSuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePlayerTags**
> UpdatePlayerTagsSuccessResponse updatePlayerTags()

Update an existing device\'s tags in one of your OneSignal apps using the External User ID. Warning - Android SDK Data Synchronization Tags added through the Android SDK tagging methods may not update if using the API to change or update the same tag. For example, if you use SDK method sendTag(\"key\", \"value1\") then update the tag value to \"value2\" with this API endpoint. You will not be able to set the value back to \"value1\" through the SDK, you will need to change it to something different through the SDK to be reset. Recommendations if using this Endpoint on Android Mobile Apps: 1 - Do not use the same tag keys for SDK and API updates 2 - If you want to use the same key for both SDK and API updates, call the SDK getTags method first to update the device\'s tags. This is only applicable on the Android Mobile App SDKs. &#128216; Deleting Tags To delete a tag, include its key and set its value to blank. Omitting a key/value will not delete it. For example, if I wanted to delete two existing tags rank and category while simultaneously adding a new tag class, the tags JSON would look like the following: \"tags\": {    \"rank\": \"\",    \"category\": \"\",    \"class\": \"my_new_value\" } 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdatePlayerTagsRequest = {
  // string | The OneSignal App ID the user record is found under.
  appId: "app_id_example",
  // string | The External User ID mapped to teh device record in OneSignal.  Must be actively set on the device to be updated.
  externalUserId: "external_user_id_example",
  // UpdatePlayerTagsRequestBody (optional)
  updatePlayerTagsRequestBody: {
    tags: {},
  },
};

apiInstance.updatePlayerTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePlayerTagsRequestBody** | **UpdatePlayerTagsRequestBody**|  |
 **appId** | [**string**] | The OneSignal App ID the user record is found under. | defaults to undefined
 **externalUserId** | [**string**] | The External User ID mapped to teh device record in OneSignal.  Must be actively set on the device to be updated. | defaults to undefined


### Return type

**UpdatePlayerTagsSuccessResponse**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSubscription**
> void updateSubscription(updateSubscriptionRequestBody)

Updates an existing Subscription’s properties.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateSubscriptionRequest = {
  // string
  appId: "app_id_example",
  // string
  subscriptionId: "subscription_id_example",
  // UpdateSubscriptionRequestBody
  updateSubscriptionRequestBody: {
    subscription: {
      id: "id_example",
      type: "iOSPush",
      token: "token_example",
      enabled: true,
      notification_types: 3.14,
      session_time: 3.14,
      session_count: 3.14,
      sdk: "sdk_example",
      device_model: "device_model_example",
      device_os: "device_os_example",
      rooted: true,
      test_type: 3.14,
      app_version: "app_version_example",
      net_type: 3.14,
      carrier: "carrier_example",
      web_auth: "web_auth_example",
      web_p256: "web_p256_example",
    },
  },
};

apiInstance.updateSubscription(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSubscriptionRequestBody** | **UpdateSubscriptionRequestBody**|  |
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | ACCEPTED |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUser**
> InlineResponse202 updateUser(updateUserRequest)

Updates an existing User’s properties.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateUserRequest = {
  // string
  appId: "app_id_example",
  // string
  aliasLabel: "alias_label_example",
  // string
  aliasId: "alias_id_example",
  // UpdateUserRequest
  updateUserRequest: {
    properties: {
      tags: {},
      language: "language_example",
      timezone_id: "timezone_id_example",
      lat: 3.14,
      long: 3.14,
      country: "country_example",
      first_active: 3.14,
      last_active: 3.14,
      amount_spent: 3.14,
      purchases: [
        {
          sku: "sku_example",
          amount: "amount_example",
          iso: "iso_example",
          count: 3.14,
        },
      ],
      ip: "ip_example",
    },
    refresh_device_metadata: false,
    deltas: {
      session_time: 3.14,
      session_count: 3.14,
      purchases: [
        {
          sku: "sku_example",
          amount: "amount_example",
          iso: "iso_example",
          count: 3.14,
        },
      ],
    },
  },
};

apiInstance.updateUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserRequest** | **UpdateUserRequest**|  |
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined


### Return type

**InlineResponse202**

### Authorization

[app_key](README.md#app_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | ACCEPTED |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


