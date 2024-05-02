# .DefaultApi

All URIs are relative to *https://api.onesignal.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelNotification**](DefaultApi.md#cancelNotification) | **DELETE** /notifications/{notification_id} | Stop a scheduled or currently outgoing notification
[**createAlias**](DefaultApi.md#createAlias) | **PATCH** /apps/{app_id}/users/by/{alias_label}/{alias_id}/identity | 
[**createAliasBySubscription**](DefaultApi.md#createAliasBySubscription) | **PATCH** /apps/{app_id}/subscriptions/{subscription_id}/user/identity | 
[**createApp**](DefaultApi.md#createApp) | **POST** /apps | Create an app
[**createNotification**](DefaultApi.md#createNotification) | **POST** /notifications | Create notification
[**createSegment**](DefaultApi.md#createSegment) | **POST** /apps/{app_id}/segments | Create Segment
[**createSubscription**](DefaultApi.md#createSubscription) | **POST** /apps/{app_id}/users/by/{alias_label}/{alias_id}/subscriptions | 
[**createUser**](DefaultApi.md#createUser) | **POST** /apps/{app_id}/users | 
[**deleteAlias**](DefaultApi.md#deleteAlias) | **DELETE** /apps/{app_id}/users/by/{alias_label}/{alias_id}/identity/{alias_label_to_delete} | 
[**deleteSegment**](DefaultApi.md#deleteSegment) | **DELETE** /apps/{app_id}/segments/{segment_id} | Delete Segment
[**deleteSubscription**](DefaultApi.md#deleteSubscription) | **DELETE** /apps/{app_id}/subscriptions/{subscription_id} | 
[**deleteUser**](DefaultApi.md#deleteUser) | **DELETE** /apps/{app_id}/users/by/{alias_label}/{alias_id} | 
[**exportEvents**](DefaultApi.md#exportEvents) | **POST** /notifications/{notification_id}/export_events?app_id&#x3D;{app_id} | Export CSV of Events
[**exportSubscriptions**](DefaultApi.md#exportSubscriptions) | **POST** /players/csv_export?app_id&#x3D;{app_id} | Export CSV of Subscriptions
[**getAliases**](DefaultApi.md#getAliases) | **GET** /apps/{app_id}/users/by/{alias_label}/{alias_id}/identity | 
[**getAliasesBySubscription**](DefaultApi.md#getAliasesBySubscription) | **GET** /apps/{app_id}/subscriptions/{subscription_id}/user/identity | 
[**getApp**](DefaultApi.md#getApp) | **GET** /apps/{app_id} | View an app
[**getApps**](DefaultApi.md#getApps) | **GET** /apps | View apps
[**getNotification**](DefaultApi.md#getNotification) | **GET** /notifications/{notification_id} | View notification
[**getNotificationHistory**](DefaultApi.md#getNotificationHistory) | **POST** /notifications/{notification_id}/history | Notification History
[**getNotifications**](DefaultApi.md#getNotifications) | **GET** /notifications | View notifications
[**getOutcomes**](DefaultApi.md#getOutcomes) | **GET** /apps/{app_id}/outcomes | View Outcomes
[**getSegments**](DefaultApi.md#getSegments) | **GET** /apps/{app_id}/segments | Get Segments
[**getUser**](DefaultApi.md#getUser) | **GET** /apps/{app_id}/users/by/{alias_label}/{alias_id} | 
[**transferSubscription**](DefaultApi.md#transferSubscription) | **PATCH** /apps/{app_id}/subscriptions/{subscription_id}/owner | 
[**unsubscribeEmailWithToken**](DefaultApi.md#unsubscribeEmailWithToken) | **POST** /apps/{app_id}/notifications/{notification_id}/unsubscribe | Unsubscribe with token
[**updateApp**](DefaultApi.md#updateApp) | **PUT** /apps/{app_id} | Update an app
[**updateLiveActivity**](DefaultApi.md#updateLiveActivity) | **POST** /apps/{app_id}/live_activities/{activity_id}/notifications | Update a Live Activity via Push
[**updateSubscription**](DefaultApi.md#updateSubscription) | **PATCH** /apps/{app_id}/subscriptions/{subscription_id} | 
[**updateUser**](DefaultApi.md#updateUser) | **PATCH** /apps/{app_id}/users/by/{alias_label}/{alias_id} | 


# **cancelNotification**
> GenericSuccessBoolResponse cancelNotification()

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

**GenericSuccessBoolResponse**

### Authorization

[rest_api_key](README.md#rest_api_key)

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

# **createAlias**
> UserIdentityBody createAlias(userIdentityBody)

Upserts one or more Aliases to an existing User identified by (:alias_label, :alias_id).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateAliasRequest = {
  // string
  appId: "app_id_example",
  // string
  aliasLabel: "alias_label_example",
  // string
  aliasId: "alias_id_example",
  // UserIdentityBody
  userIdentityBody: {
    identity: {
      "key": "key_example",
    },
  },
};

apiInstance.createAlias(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdentityBody** | **UserIdentityBody**|  |
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined


### Return type

**UserIdentityBody**

### Authorization

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAliasBySubscription**
> UserIdentityBody createAliasBySubscription(userIdentityBody)

Upserts one or more Aliases for the User identified by :subscription_id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateAliasBySubscriptionRequest = {
  // string
  appId: "app_id_example",
  // string
  subscriptionId: "subscription_id_example",
  // UserIdentityBody
  userIdentityBody: {
    identity: {
      "key": "key_example",
    },
  },
};

apiInstance.createAliasBySubscription(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdentityBody** | **UserIdentityBody**|  |
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined


### Return type

**UserIdentityBody**

### Authorization

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
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

[user_auth_key](README.md#user_auth_key)

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

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK, invalid_aliases, or No Subscribed Players If a message was successfully created, you will get a 200 response and an id for the notification. If the 200 response contains \&quot;invalid_aliases\&quot; this will mark devices that exist in the provided app_id but are no longer subscribed. If no id is returned, then a message was not created and the targeted User IDs do not exist under the provided app_id. Any User IDs sent in the request that do not exist under the specified app_id will be ignored.  |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSegment**
> CreateSegmentSuccessResponse createSegment()

Create a segment visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator\'s. &#x1F6A7; Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segment endpoint and re-create it with this endpoint to edit. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateSegmentRequest = {
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

apiInstance.createSegment(body).then((data:any) => {
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

[rest_api_key](README.md#rest_api_key)

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
> SubscriptionBody createSubscription(subscriptionBody)

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
  // SubscriptionBody
  subscriptionBody: {
    subscription: {
      id: "id_example",
      type: "iOSPush",
      token: "token_example",
      enabled: true,
      notification_types: 1,
      session_time: 1,
      session_count: 1,
      sdk: "sdk_example",
      device_model: "device_model_example",
      device_os: "device_os_example",
      rooted: true,
      test_type: 1,
      app_version: "app_version_example",
      net_type: 1,
      carrier: "carrier_example",
      web_auth: "web_auth_example",
      web_p256: "web_p256_example",
    },
  },
};

apiInstance.createSubscription(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionBody** | **SubscriptionBody**|  |
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined


### Return type

**SubscriptionBody**

### Authorization

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | CREATED |  -  |
**202** | ACCEPTED |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
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
      first_active: 1,
      last_active: 1,
      amount_spent: 3.14,
      purchases: [
        {
          sku: "sku_example",
          amount: "amount_example",
          iso: "iso_example",
          count: 1,
        },
      ],
      ip: "ip_example",
    },
    identity: {
      "key": "key_example",
    },
    subscriptions: [
      {
        id: "id_example",
        type: "iOSPush",
        token: "token_example",
        enabled: true,
        notification_types: 1,
        session_time: 1,
        session_count: 1,
        sdk: "sdk_example",
        device_model: "device_model_example",
        device_os: "device_os_example",
        rooted: true,
        test_type: 1,
        app_version: "app_version_example",
        net_type: 1,
        carrier: "carrier_example",
        web_auth: "web_auth_example",
        web_p256: "web_p256_example",
      },
    ],
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

[rest_api_key](README.md#rest_api_key)

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
> UserIdentityBody deleteAlias()

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

**UserIdentityBody**

### Authorization

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteSegment**
> GenericSuccessBoolResponse deleteSegment()

Delete a segment (not user devices) - Required: OneSignal Paid Plan You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app. The segment_id can be found in the URL of the segment when viewing it in the dashboard. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteSegmentRequest = {
  // string | The OneSignal App ID for your app.  Available in Keys & IDs.
  appId: "app_id_example",
  // string | The segment_id can be found in the URL of the segment when viewing it in the dashboard.
  segmentId: "segment_id_example",
};

apiInstance.deleteSegment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **segmentId** | [**string**] | The segment_id can be found in the URL of the segment when viewing it in the dashboard. | defaults to undefined


### Return type

**GenericSuccessBoolResponse**

### Authorization

[rest_api_key](README.md#rest_api_key)

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

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | ACCEPTED |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
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

No authorization required

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

[rest_api_key](README.md#rest_api_key)

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

# **exportSubscriptions**
> ExportSubscriptionsSuccessResponse exportSubscriptions()

Generate a compressed CSV export of all of your current user data This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the /players API endpoint. The file will be compressed using GZip. The file may take several minutes to generate depending on the number of users in your app. The URL generated will be available for 3 days and includes random v4 uuid as part of the resource name to be unguessable. &#x1F6A7; 403 Error Responses          You can test if it is complete by making a GET request to the csv_file_url value. This file may take time to generate depending on how many device records are being pulled. If the file is not ready, a 403 error will be returned. Otherwise the file itself will be returned. &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs. &#x1F6A7; Concurrent Exports Only one concurrent export is allowed per OneSignal account. Please ensure you have successfully downloaded the .csv.gz file before exporting another app. CSV File Format: - Default Columns:   | Field | Details |   | --- | --- |   | id | OneSignal Player Id |   | identifier | Push Token |   | session_count | Number of times they visited the app or site   | language | Device language code |   | timezone | Number of seconds away from UTC. Example: -28800 |   | game_version | Version of your mobile app gathered from Android Studio versionCode in your App/build.gradle and iOS uses kCFBundleVersionKey in Xcode. |   | device_os | Device Operating System Version. Example: 80 = Chrome 80, 9 = Android 9 |   | device_type | Device Operating System Type |   | device_model | Device Hardware String Code. Example: Mobile Web Subscribers will have `Linux armv` |   | ad_id | Based on the Google Advertising Id for Android, identifierForVendor for iOS. OptedOut means user turned off Advertising tracking on the device. |   | tags | Current OneSignal Data Tags on the device. |   | last_active | Date and time the user last opened the mobile app or visited the site. |   | playtime | Total amount of time in seconds the user had the mobile app open. |   | amount_spent |  Mobile only - amount spent in USD on In-App Purchases. |    | created_at | Date and time the device record was created in OneSignal. Mobile - first time they opened the app with OneSignal SDK. Web - first time the user subscribed to the site. |   | invalid_identifier | t = unsubscribed, f = subscibed |   | badge_count | Current number of badges on the device | - Extra Columns:   | Field | Details |   | --- | --- |   | external_user_id | Your User Id set on the device |   | notification_types | Notification types |   | location | Location points (Latitude and Longitude) set on the device. |   | country | Country code |   | rooted | Android device rooted or not |   | ip | IP Address of the device if being tracked. See Handling Personal Data. |   | web_auth | Web Only authorization key. |   | web_p256 | Web Only p256 key. | 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiExportSubscriptionsRequest = {
  // string | The app ID that you want to export devices from
  appId: "app_id_example",
  // ExportSubscriptionsRequestBody (optional)
  exportSubscriptionsRequestBody: {
    extra_fields: [
      "extra_fields_example",
    ],
    last_active_since: "last_active_since_example",
    segment_name: "segment_name_example",
  },
};

apiInstance.exportSubscriptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportSubscriptionsRequestBody** | **ExportSubscriptionsRequestBody**|  |
 **appId** | [**string**] | The app ID that you want to export devices from | defaults to undefined


### Return type

**ExportSubscriptionsSuccessResponse**

### Authorization

[rest_api_key](README.md#rest_api_key)

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

# **getAliases**
> UserIdentityBody getAliases()

Lists all Aliases for the User identified by (:alias_label, :alias_id).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAliasesRequest = {
  // string
  appId: "app_id_example",
  // string
  aliasLabel: "alias_label_example",
  // string
  aliasId: "alias_id_example",
};

apiInstance.getAliases(body).then((data:any) => {
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

**UserIdentityBody**

### Authorization

[rest_api_key](README.md#rest_api_key)

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

# **getAliasesBySubscription**
> UserIdentityBody getAliasesBySubscription()

Lists all Aliases for the User identified by :subscription_id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetAliasesBySubscriptionRequest = {
  // string
  appId: "app_id_example",
  // string
  subscriptionId: "subscription_id_example",
};

apiInstance.getAliasesBySubscription(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined


### Return type

**UserIdentityBody**

### Authorization

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

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

[user_auth_key](README.md#user_auth_key)

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

[user_auth_key](README.md#user_auth_key)

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

[rest_api_key](README.md#rest_api_key)

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

# **getNotificationHistory**
> NotificationHistorySuccessResponse getNotificationHistory(getNotificationHistoryRequestBody)

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
  // GetNotificationHistoryRequestBody
  getNotificationHistoryRequestBody: {
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
 **getNotificationHistoryRequestBody** | **GetNotificationHistoryRequestBody**|  |
 **notificationId** | [**string**] | The \&quot;id\&quot; of the message found in the Notification object | defaults to undefined


### Return type

**NotificationHistorySuccessResponse**

### Authorization

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
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

[rest_api_key](README.md#rest_api_key)

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

[rest_api_key](README.md#rest_api_key)

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

# **getSegments**
> GetSegmentsSuccessResponse getSegments()

Returns an array of segments from an app.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetSegmentsRequest = {
  // string | The OneSignal App ID for your app.  Available in Keys & IDs.
  appId: "app_id_example",
  // number | Segments are listed in ascending order of created_at date. offset will omit that number of segments from the beginning of the list. Eg offset 5, will remove the 5 earliest created Segments. (optional)
  offset: 1,
  // number | The amount of Segments in the response. Maximum 300. (optional)
  limit: 1,
};

apiInstance.getSegments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **offset** | [**number**] | Segments are listed in ascending order of created_at date. offset will omit that number of segments from the beginning of the list. Eg offset 5, will remove the 5 earliest created Segments. | (optional) defaults to undefined
 **limit** | [**number**] | The amount of Segments in the response. Maximum 300. | (optional) defaults to undefined


### Return type

**GetSegmentsSuccessResponse**

### Authorization

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUser**
> User getUser()

Returns the User’s properties, Aliases, and Subscriptions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetUserRequest = {
  // string
  appId: "app_id_example",
  // string
  aliasLabel: "alias_label_example",
  // string
  aliasId: "alias_id_example",
};

apiInstance.getUser(body).then((data:any) => {
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

[rest_api_key](README.md#rest_api_key)

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

# **transferSubscription**
> UserIdentityBody transferSubscription(transferSubscriptionRequestBody)

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
    identity: {
      "key": "key_example",
    },
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

**UserIdentityBody**

### Authorization

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unsubscribeEmailWithToken**
> GenericSuccessBoolResponse unsubscribeEmailWithToken()

Unsubscribe an email with a token when using your own custom email unsubscribe landing page

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUnsubscribeEmailWithTokenRequest = {
  // string | The OneSignal App ID for your app.  Available in Keys & IDs.
  appId: "app_id_example",
  // string | The id of the message found in the creation notification POST response, View Notifications GET response, or URL within the Message Report.
  notificationId: "notification_id_example",
  // string | The unsubscribe token that is generated via liquid syntax in {{subscription.unsubscribe_token}} when personalizing an email.
  token: "token_example",
};

apiInstance.unsubscribeEmailWithToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **notificationId** | [**string**] | The id of the message found in the creation notification POST response, View Notifications GET response, or URL within the Message Report. | defaults to undefined
 **token** | [**string**] | The unsubscribe token that is generated via liquid syntax in {{subscription.unsubscribe_token}} when personalizing an email. | defaults to undefined


### Return type

**GenericSuccessBoolResponse**

### Authorization

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | OK |  -  |
**400** | Bad Request |  -  |
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

[user_auth_key](README.md#user_auth_key)

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
    name: "name_example",
    event: "update",
    event_updates: {},
    contents: {
      en: "en_example",
      ar: "ar_example",
      bs: "bs_example",
      bg: "bg_example",
      ca: "ca_example",
      zh_hans: "zh_hans_example",
      zh_hant: "zh_hant_example",
      zh: "zh_example",
      hr: "hr_example",
      cs: "cs_example",
      da: "da_example",
      nl: "nl_example",
      et: "et_example",
      fi: "fi_example",
      fr: "fr_example",
      ka: "ka_example",
      de: "de_example",
      el: "el_example",
      hi: "hi_example",
      he: "he_example",
      hu: "hu_example",
      id: "id_example",
      it: "it_example",
      ja: "ja_example",
      ko: "ko_example",
      lv: "lv_example",
      lt: "lt_example",
      ms: "ms_example",
      nb: "nb_example",
      pl: "pl_example",
      fa: "fa_example",
      pt: "pt_example",
      pa: "pa_example",
      ro: "ro_example",
      ru: "ru_example",
      sr: "sr_example",
      sk: "sk_example",
      es: "es_example",
      sv: "sv_example",
      th: "th_example",
      tr: "tr_example",
      uk: "uk_example",
      vi: "vi_example",
    },
    headings: {
      en: "en_example",
      ar: "ar_example",
      bs: "bs_example",
      bg: "bg_example",
      ca: "ca_example",
      zh_hans: "zh_hans_example",
      zh_hant: "zh_hant_example",
      zh: "zh_example",
      hr: "hr_example",
      cs: "cs_example",
      da: "da_example",
      nl: "nl_example",
      et: "et_example",
      fi: "fi_example",
      fr: "fr_example",
      ka: "ka_example",
      de: "de_example",
      el: "el_example",
      hi: "hi_example",
      he: "he_example",
      hu: "hu_example",
      id: "id_example",
      it: "it_example",
      ja: "ja_example",
      ko: "ko_example",
      lv: "lv_example",
      lt: "lt_example",
      ms: "ms_example",
      nb: "nb_example",
      pl: "pl_example",
      fa: "fa_example",
      pt: "pt_example",
      pa: "pa_example",
      ro: "ro_example",
      ru: "ru_example",
      sr: "sr_example",
      sk: "sk_example",
      es: "es_example",
      sv: "sv_example",
      th: "th_example",
      tr: "tr_example",
      uk: "uk_example",
      vi: "vi_example",
    },
    sound: "sound_example",
    stale_date: 1,
    dismissal_date: 1,
    priority: 1,
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

[rest_api_key](README.md#rest_api_key)

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

# **updateSubscription**
> void updateSubscription(subscriptionBody)

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
  // SubscriptionBody
  subscriptionBody: {
    subscription: {
      id: "id_example",
      type: "iOSPush",
      token: "token_example",
      enabled: true,
      notification_types: 1,
      session_time: 1,
      session_count: 1,
      sdk: "sdk_example",
      device_model: "device_model_example",
      device_os: "device_os_example",
      rooted: true,
      test_type: 1,
      app_version: "app_version_example",
      net_type: 1,
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
 **subscriptionBody** | **SubscriptionBody**|  |
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[rest_api_key](README.md#rest_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**429** | Rate Limit Exceeded |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUser**
> PropertiesBody updateUser(updateUserRequest)

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
      first_active: 1,
      last_active: 1,
      amount_spent: 3.14,
      purchases: [
        {
          sku: "sku_example",
          amount: "amount_example",
          iso: "iso_example",
          count: 1,
        },
      ],
      ip: "ip_example",
    },
    refresh_device_metadata: false,
    deltas: {
      session_time: 1,
      session_count: 1,
      purchases: [
        {
          sku: "sku_example",
          amount: "amount_example",
          iso: "iso_example",
          count: 1,
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

**PropertiesBody**

### Authorization

[rest_api_key](README.md#rest_api_key)

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


