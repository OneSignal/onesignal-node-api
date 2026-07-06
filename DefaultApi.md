# Onesignal.DefaultApi

All URIs are relative to *https://api.onesignal.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelNotification**](DefaultApi.md#cancelNotification) | **DELETE** /notifications/{notification_id} | Stop a scheduled or currently outgoing notification
[**copyTemplateToApp**](DefaultApi.md#copyTemplateToApp) | **POST** /templates/{template_id}/copy_to_app | Copy template to another app
[**createAlias**](DefaultApi.md#createAlias) | **PATCH** /apps/{app_id}/users/by/{alias_label}/{alias_id}/identity | 
[**createAliasBySubscription**](DefaultApi.md#createAliasBySubscription) | **PATCH** /apps/{app_id}/subscriptions/{subscription_id}/user/identity | 
[**createApiKey**](DefaultApi.md#createApiKey) | **POST** /apps/{app_id}/auth/tokens | Create API key
[**createApp**](DefaultApi.md#createApp) | **POST** /apps | Create an app
[**createCustomEvents**](DefaultApi.md#createCustomEvents) | **POST** /apps/{app_id}/integrations/custom_events | Create custom events
[**createNotification**](DefaultApi.md#createNotification) | **POST** /notifications | Create notification
[**createSegment**](DefaultApi.md#createSegment) | **POST** /apps/{app_id}/segments | Create Segment
[**createSubscription**](DefaultApi.md#createSubscription) | **POST** /apps/{app_id}/users/by/{alias_label}/{alias_id}/subscriptions | 
[**createTemplate**](DefaultApi.md#createTemplate) | **POST** /templates | Create template
[**createUser**](DefaultApi.md#createUser) | **POST** /apps/{app_id}/users | 
[**deleteAlias**](DefaultApi.md#deleteAlias) | **DELETE** /apps/{app_id}/users/by/{alias_label}/{alias_id}/identity/{alias_label_to_delete} | 
[**deleteApiKey**](DefaultApi.md#deleteApiKey) | **DELETE** /apps/{app_id}/auth/tokens/{token_id} | Delete API key
[**deleteSegment**](DefaultApi.md#deleteSegment) | **DELETE** /apps/{app_id}/segments/{segment_id} | Delete Segment
[**deleteSubscription**](DefaultApi.md#deleteSubscription) | **DELETE** /apps/{app_id}/subscriptions/{subscription_id} | 
[**deleteTemplate**](DefaultApi.md#deleteTemplate) | **DELETE** /templates/{template_id} | Delete template
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
[**rotateApiKey**](DefaultApi.md#rotateApiKey) | **POST** /apps/{app_id}/auth/tokens/{token_id}/rotate | Rotate API key
[**startLiveActivity**](DefaultApi.md#startLiveActivity) | **POST** /apps/{app_id}/activities/activity/{activity_type} | Start Live Activity
[**transferSubscription**](DefaultApi.md#transferSubscription) | **PATCH** /apps/{app_id}/subscriptions/{subscription_id}/owner | 
[**unsubscribeEmailWithToken**](DefaultApi.md#unsubscribeEmailWithToken) | **POST** /apps/{app_id}/notifications/{notification_id}/unsubscribe | Unsubscribe with token
[**updateApiKey**](DefaultApi.md#updateApiKey) | **PATCH** /apps/{app_id}/auth/tokens/{token_id} | Update API key
[**updateApp**](DefaultApi.md#updateApp) | **PUT** /apps/{app_id} | Update an app
[**updateLiveActivity**](DefaultApi.md#updateLiveActivity) | **POST** /apps/{app_id}/live_activities/{activity_id}/notifications | Update a Live Activity via Push
[**updateSubscription**](DefaultApi.md#updateSubscription) | **PATCH** /apps/{app_id}/subscriptions/{subscription_id} | 
[**updateSubscriptionByToken**](DefaultApi.md#updateSubscriptionByToken) | **PATCH** /apps/{app_id}/subscriptions_by_token/{token_type}/{token} | Update subscription by token
[**updateTemplate**](DefaultApi.md#updateTemplate) | **PATCH** /templates/{template_id} | Update template
[**updateUser**](DefaultApi.md#updateUser) | **PATCH** /apps/{app_id}/users/by/{alias_label}/{alias_id} | 
[**viewApiKeys**](DefaultApi.md#viewApiKeys) | **GET** /apps/{app_id}/auth/tokens | View API keys
[**viewTemplate**](DefaultApi.md#viewTemplate) | **GET** /templates/{template_id} | View template
[**viewTemplates**](DefaultApi.md#viewTemplates) | **GET** /templates | View templates


## Common patterns

The per-endpoint examples below illustrate one specific call each. This section covers patterns that apply to most operations.

### Authentication

Every operation requires either a **REST API Key** (App-scoped, used by ~77% of endpoints) or an **Organization API Key** (used by the remaining ~23% — the app-management endpoints `getApps` / `createApp` / `getApp` / `updateApp` / `copyTemplateToApp`, plus the API-key administration endpoints `viewApiKeys` / `createApiKey` / `deleteApiKey` / `updateApiKey` / `rotateApiKey`). The two are not interchangeable. The "Authorization" row on each endpoint below lists the exact scheme.

### Idempotency

`POST /notifications` accepts a top-level `idempotency_key` (UUIDv4) that the server uses for request dedup within a **30-day window**. Pass a freshly-generated UUID per logical send so that network-level retries are safe. Never reuse a key across distinct sends — the server returns the original response instead of acting on the new payload. The hero `createNotification` example below demonstrates the call.

Prefer the bundled `createNotificationWithRetry` helper over wiring this up by hand: it generates the key when absent (a caller-provided key is respected), retries 429 / 503 / transport errors with the **same** key (honoring `Retry-After`, exponential backoff otherwise; `maxRetries` / `baseDelayMs` configurable via the options object), fails fast on other errors, and reports via `wasReplayed` whether the server answered from a previously completed request (`Idempotent-Replayed` response header). It is available as a `DefaultApi` method so the call mirrors `createNotification`:

```typescript
const result = await client.createNotificationWithRetry(notification);
console.log(result.response.id, result.wasReplayed);
```

### Error handling

When a request fails, the SDK rejects the returned Promise with an `Onesignal.ApiException`. Wrap each call in `try { ... } catch (e) { ... }` and narrow with `e instanceof Onesignal.ApiException`. The HTTP status code is `e.code` (number); the parsed error body is `e.body`. Most envelopes match `{ "errors": ["..."] }` (an array of strings) but a few endpoints return `{ "errors": [{"code": ..., "title": ..., "meta": {...}}] }` (an array of structured error objects — used by `POST /apps/{app_id}/users` 409 conflict, see `CreateUserConflictResponse`), `{ "errors": "..." }` (string), or `{ "success": false }` (no `errors` field at all). Robust error-handling code should tolerate all four shapes. The `e.errorMessages` getter does this for you, normalizing every shape to a flat `string[]` (empty when the body carries no `errors`). To branch on a specific error without hard-coding message strings, test membership against the generated [`OneSignalErrors`](https://github.com/OneSignal/node-onesignal/blob/main/errors.ts) catalog — e.g. `e.errorMessages.includes(Onesignal.OneSignalErrors.NO_TARGETING_SPECIFIED)`.

### Polymorphic 200 from POST /notifications

`CreateNotificationSuccessResponse` has two distinct shapes that share the same schema; branch on `id`:
- **Success** — `id` is a non-empty UUID. `errors`, if present, is an object keyed by recipient-identifier type (`invalid_player_ids`, `invalid_external_user_ids`, `invalid_aliases`, ...) listing recipients that were skipped (partial-success path).
- **No-send** — `id` is the empty string `""`. `errors` is a string array with the sentinel reason, typically `["All included players are not subscribed"]`.

The hero `createNotification` example below demonstrates the branch pattern explicitly.

### Targeting users by External ID

Set `include_aliases.external_id` to a list of External IDs and set `target_channel` to `push` / `email` / `sms`. The alias label must be the literal string `external_id` — camelCase variants such as `externalId` are silently ignored and yield zero recipients. **Do not confuse** this with the deprecated top-level `external_id` notification field — a separate correlation/idempotency field with its own 30-day dedup keyspace (parallel to `idempotency_key`, not an alias) and no targeting effect.

### `…Enum` types are string unions, not enums

Generated type aliases whose names end in `Enum` — e.g. `FilterRelationEnum` (`">" | "<" | "=" | …`), `OperatorOperatorEnum` (`"OR" | "AND"`), and the `target_channel` types `NotificationTargetChannelEnum` / `BasicNotificationTargetChannelEnum` (`"push" | "email" | "sms"`) — are **TypeScript string-literal unions, not runtime `enum`s**. Assign the literal string directly; there is no enum object to import and no cast is required:

```typescript
const filter: Onesignal.Filter = { field: 'tag', key: 'level', relation: '>', value: '10' };
const operator: Onesignal.Operator = { operator: 'AND' };

const notification = new Onesignal.Notification();
notification.target_channel = 'push'; // not NotificationTargetChannelEnum.Push
```

TypeScript still checks the literal against the allowed set — `relation: '>'` compiles, `relation: 'gt'` is a compile error — so you keep autocomplete and type-safety without `enum` syntax or casts.

# **cancelNotification**
> GenericSuccessBoolResponse cancelNotification(appId, notificationId)

Used to stop a scheduled or currently outgoing notification

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const notificationId: string = "b3a0c8bd-3a4c-4b22-9a73-3f1a8c2d1b88";

try {
  const response = await apiInstance.cancelNotification(appId, notificationId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("cancelNotification failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **notificationId** | [**string**] |  | defaults to undefined

### Return type

**GenericSuccessBoolResponse**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **copyTemplateToApp**
> TemplateResource copyTemplateToApp(templateId, appId, copyTemplateRequest)

Copy a template to a destination app.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    organizationApiKey: 'YOUR_ORGANIZATION_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const templateId: string = "e4d3c2b1-a09f-4f1e-8d7c-6b5a4f3e2d1c";
// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// CopyTemplateRequest
const copyTemplateRequest: Onesignal.CopyTemplateRequest = {
    target_app_id: "target_app_id_example",
  };

try {
  const response = await apiInstance.copyTemplateToApp(templateId, appId, copyTemplateRequest);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("copyTemplateToApp failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined
 **appId** | [**string**] |  | defaults to undefined
 **copyTemplateRequest** | **CopyTemplateRequest** |  |

### Return type

**TemplateResource**

### Authorization

[organization_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **createAlias**
> UserIdentityBody createAlias(appId, aliasLabel, aliasId, userIdentityBody)

Upserts one or more Aliases to an existing User identified by (:alias_label, :alias_id).

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const aliasLabel: string = "external_id";
// string
const aliasId: string = "YOUR_USER_EXTERNAL_ID";
// UserIdentityBody
const userIdentityBody: Onesignal.UserIdentityBody = {
    identity: {
      "key": "key_example",
    },
  };

try {
  const response = await apiInstance.createAlias(appId, aliasLabel, aliasId, userIdentityBody);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("createAlias failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined
 **userIdentityBody** | **UserIdentityBody** |  |

### Return type

**UserIdentityBody**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **createAliasBySubscription**
> UserIdentityBody createAliasBySubscription(appId, subscriptionId, userIdentityBody)

Upserts one or more Aliases for the User identified by :subscription_id.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const subscriptionId: string = "7e4c5b9a-1f60-4d07-9b1a-2e8c8d2cae51";
// UserIdentityBody
const userIdentityBody: Onesignal.UserIdentityBody = {
    identity: {
      "key": "key_example",
    },
  };

try {
  const response = await apiInstance.createAliasBySubscription(appId, subscriptionId, userIdentityBody);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("createAliasBySubscription failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined
 **userIdentityBody** | **UserIdentityBody** |  |

### Return type

**UserIdentityBody**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **createApiKey**
> CreateApiKeyResponse createApiKey(appId, createApiKeyRequest)

Use this API to create a new App API Key (also called a Rich Authentication Token) for a specific OneSignal app. These keys are used to authenticate API requests at the app level and offer enhanced security features, including optional IP allowlisting.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    organizationApiKey: 'YOUR_ORGANIZATION_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// CreateApiKeyRequest
const createApiKeyRequest: Onesignal.CreateApiKeyRequest = {
    name: "name_example",
    ip_allowlist_mode: "disabled",
    ip_allowlist: [
      "ip_allowlist_example",
    ],
  };

try {
  const response = await apiInstance.createApiKey(appId, createApiKeyRequest);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("createApiKey failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **createApiKeyRequest** | **CreateApiKeyRequest** |  |

### Return type

**CreateApiKeyResponse**

### Authorization

[organization_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **createApp**
> App createApp(app)

Creates a new OneSignal app

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    organizationApiKey: 'YOUR_ORGANIZATION_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// App
const app: Onesignal.App = {
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
  };

try {
  const response = await apiInstance.createApp(app);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("createApp failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **App** |  |

### Return type

**App**

### Authorization

[organization_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **createCustomEvents**
> object createCustomEvents(appId, customEventsRequest)

The Custom Events API allows you to record user events. Custom events can represent any action users take in your application, such as completing a purchase, viewing content, or achieving milestones.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | Your OneSignal App ID in UUID v4 format.
const appId: string = "00000000-0000-0000-0000-000000000000";
// CustomEventsRequest
const customEventsRequest: Onesignal.CustomEventsRequest = {
    events: [
      {
        name: "name_example",
        external_id: "external_id_example",
        onesignal_id: "onesignal_id_example",
        timestamp: '1970-01-01T00:00:00.00Z',
        payload: {},
      },
    ],
  };

try {
  const response = await apiInstance.createCustomEvents(appId, customEventsRequest);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("createCustomEvents failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | Your OneSignal App ID in UUID v4 format. | defaults to undefined
 **customEventsRequest** | **CustomEventsRequest** |  |

### Return type

**object**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **createNotification**
> CreateNotificationSuccessResponse createNotification(notification)

Sends notifications to your users.  **Target by External ID (push example):** set `include_aliases` to `{ \"external_id\": [\"your-user-id\"] }` and set `target_channel` to `push` (or `email` / `sms` for those channels). Alias object keys must match API labels exactly (for example `external_id`, not camelCase).  **Do not confuse** the notification-level `external_id` field with External ID targeting: top-level `external_id` / `idempotency_key` are for idempotent notification requests only, not for selecting recipients.  **Targeting compatibility:** `include_aliases` must not be combined with other targeting modes (segments, filters, subscription IDs, legacy player IDs, etc.). Clients should send only one targeting strategy per request. 

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';
import { randomUUID } from 'node:crypto';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

const notification = new Onesignal.Notification();
notification.app_id = 'YOUR_APP_ID';
notification.contents = { en: 'Hello from OneSignal!' };
notification.headings = { en: 'Push Notification' };
// Target by External ID: alias keys must match the API (external_id, not externalId).
notification.include_aliases = { external_id: ['YOUR_USER_EXTERNAL_ID'] };
notification.target_channel = 'push';
// Idempotency key: a client-generated UUID that lets you safely retry on network failure.
// If two requests arrive with the same key inside the 30-day window, only the first is sent
// and the second returns the original response. `randomUUID` is imported from `node:crypto`
// (available on Node 14.17+) — DO NOT reuse keys across logically distinct sends.
notification.idempotency_key = randomUUID();

try {
  const response = await apiInstance.createNotification(notification);
  // `response.id` discriminates the two HTTP 200 shapes. A falsy value (empty string,
  // null, or undefined) means no notification was created (e.g. all targets were
  // unreachable / not subscribed). `response.errors` is polymorphic: a `string[]` in the
  // no-subscribers case, or an object keyed by recipient-identifier type
  // (`invalid_player_ids`, `invalid_external_user_ids`, `invalid_aliases`, …) when the
  // notification WAS created but some recipients were skipped.
  if (!response.id) {
    console.warn("Notification was not sent:", response.errors);
  } else if (response.errors) {
    console.log("Notification created:", response.id, "(partial failures:", response.errors, ")");
  } else {
    console.log("Notification created:", response.id);
  }
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("createNotification failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```

#### Using `createNotificationWithRetry` (preferred for safe, idempotent retries)

The `createNotificationWithRetry` method mirrors `createNotification` but generates the `idempotency_key` for you, transparently retries transient failures (HTTP 429 / 503 / transport errors) with the **same** key, and reports via `wasReplayed` whether the server answered from a previously-completed request.

```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const client = new Onesignal.DefaultApi(configuration);

const notification = new Onesignal.Notification();
notification.app_id = 'YOUR_APP_ID';
notification.contents = { en: 'Hello from OneSignal!' };
notification.include_aliases = { external_id: ['YOUR_USER_EXTERNAL_ID'] };
notification.target_channel = 'push';
// No idempotency_key set: the helper generates a UUIDv4 and reuses it across retries.
// Set your own (e.g. an order ID) to also dedup across process restarts.

try {
  // maxRetries / baseDelayMs are optional (defaults: 3 retries, 1000ms backoff base).
  const result = await client.createNotificationWithRetry(notification, { maxRetries: 5, baseDelayMs: 500 });
  if (result.wasReplayed) {
    console.log("Server replayed a prior send (no duplicate):", result.response.id);
  } else {
    console.log("Notification created:", result.response.id);
  }
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    console.error("createNotificationWithRetry failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification** | **Notification** |  |

### Return type

**CreateNotificationSuccessResponse**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK, invalid_aliases, or No Subscribed Players If a message was successfully created, you will get a 200 response with a non-empty &#x60;id&#x60; for the notification. If the 200 response contains &#x60;invalid_aliases&#x60;, that marks devices that exist in the provided app_id but are no longer subscribed. If &#x60;id&#x60; is an empty string, no notification was created: check the &#x60;errors&#x60; array (for example messages such as \&quot;All included players are not subscribed\&quot;) even though HTTP status is still 200. This can happen when alias keys are wrong, External IDs do not resolve to subscribed users, or other validation issues. If no id is returned, then a message was not created and the targeted User IDs do not exist under the provided app_id. Any User IDs sent in the request that do not exist under the specified app_id will be ignored.  |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **createSegment**
> CreateSegmentSuccessResponse createSegment(appId, segment)

Create a segment visible and usable in the dashboard and API - Required: OneSignal Paid Plan The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating Segments from the dashboard you can pass in filters with multiple \"AND\" or \"OR\" operator\'s. &#x1F6A7; Does Not Update Segments This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the Delete Segment endpoint and re-create it with this endpoint to edit. 

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | The OneSignal App ID for your app.  Available in Keys & IDs.
const appId: string = "00000000-0000-0000-0000-000000000000";
// Segment (optional)
const segment: Onesignal.Segment = {
    id: "id_example",
    name: "name_example",
    filters: [
      {
        field: "field_example",
        key: "key_example",
        value: "value_example",
        hours_ago: "hours_ago_example",
        radius: 3.14,
        lat: 3.14,
        long: 3.14,
        relation: ">",
      },
    ],
  };

try {
  const response = await apiInstance.createSegment(appId, segment);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("createSegment failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **segment** | **Segment** |  |

### Return type

**CreateSegmentSuccessResponse**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **createSubscription**
> SubscriptionBody createSubscription(appId, aliasLabel, aliasId, subscriptionBody)

Creates a new Subscription under the User provided. Useful to add email addresses and SMS numbers to the User.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const aliasLabel: string = "external_id";
// string
const aliasId: string = "YOUR_USER_EXTERNAL_ID";
// SubscriptionBody
const subscriptionBody: Onesignal.SubscriptionBody = {
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
  };

try {
  const response = await apiInstance.createSubscription(appId, aliasLabel, aliasId, subscriptionBody);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("createSubscription failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined
 **subscriptionBody** | **SubscriptionBody** |  |

### Return type

**SubscriptionBody**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **createTemplate**
> TemplateResource createTemplate(createTemplateRequest)

Create reusable message templates for push, email, and SMS channels.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// CreateTemplateRequest
const createTemplateRequest: Onesignal.CreateTemplateRequest = {
    app_id: "app_id_example",
    name: "name_example",
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
    subtitle: {
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
    is_email: true,
    email_subject: "email_subject_example",
    email_body: "email_body_example",
    email_bcc: [
      "email_bcc_example",
    ],
    is_sms: true,
    dynamic_content: "dynamic_content_example",
  };

try {
  const response = await apiInstance.createTemplate(createTemplateRequest);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("createTemplate failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTemplateRequest** | **CreateTemplateRequest** |  |

### Return type

**TemplateResource**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**422** | Unprocessable Entity |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **createUser**
> User createUser(appId, user)

Creates a User, optionally Subscriptions owned by the User as well as Aliases. Aliases provided in the payload will be used to look up an existing User.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// User
const user: Onesignal.User = {
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
  };

try {
  const response = await apiInstance.createUser(appId, user);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("createUser failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Reading the 409 conflict metadata

A `409` from this endpoint deserializes to a typed `Onesignal.CreateUserConflictResponse` on `e.body`. The `e.errorMessages` getter flattens each error to its `title`/`code` and omits the structured `meta` object (currently `conflicting_aliases`); read it from the typed body:

```typescript
if (e instanceof Onesignal.ApiException && e.code === 409) {
  const conflict = e.body as Onesignal.CreateUserConflictResponse;
  conflict.errors?.forEach((err) =>
    console.log(err.title, err.meta?.conflicting_aliases));
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **user** | **User** |  |

### Return type

**User**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **deleteAlias**
> UserIdentityBody deleteAlias(appId, aliasLabel, aliasId, aliasLabelToDelete)

Deletes an alias by alias label

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const aliasLabel: string = "external_id";
// string
const aliasId: string = "YOUR_USER_EXTERNAL_ID";
// string
const aliasLabelToDelete: string = "external_id";

try {
  const response = await apiInstance.deleteAlias(appId, aliasLabel, aliasId, aliasLabelToDelete);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("deleteAlias failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
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

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **deleteApiKey**
> object deleteApiKey(appId, tokenId)

Delete a specific Rich Authentication Token (App API Key) for a OneSignal app. Requires your Organization API Key and the token’s unique ID, not the token value itself.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    organizationApiKey: 'YOUR_ORGANIZATION_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const tokenId: string = "0aa1b2c3-d4e5-46f7-8899-aabbccddeeff";

try {
  const response = await apiInstance.deleteApiKey(appId, tokenId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("deleteApiKey failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **tokenId** | [**string**] |  | defaults to undefined

### Return type

**object**

### Authorization

[organization_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **deleteSegment**
> GenericSuccessBoolResponse deleteSegment(appId, segmentId)

Delete a segment (not user devices) - Required: OneSignal Paid Plan You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app. The segment_id can be found in the URL of the segment when viewing it in the dashboard. 

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | The OneSignal App ID for your app.  Available in Keys & IDs.
const appId: string = "00000000-0000-0000-0000-000000000000";
// string | The segment_id can be found in the URL of the segment when viewing it in the dashboard.
const segmentId: string = "d6c5a3e1-9f17-44a1-9d10-7c0e4a2b1c8e";

try {
  const response = await apiInstance.deleteSegment(appId, segmentId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("deleteSegment failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **segmentId** | [**string**] | The segment_id can be found in the URL of the segment when viewing it in the dashboard. | defaults to undefined

### Return type

**GenericSuccessBoolResponse**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **deleteSubscription**
> void deleteSubscription(appId, subscriptionId)

Deletes the Subscription.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const subscriptionId: string = "7e4c5b9a-1f60-4d07-9b1a-2e8c8d2cae51";

try {
  const response = await apiInstance.deleteSubscription(appId, subscriptionId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("deleteSubscription failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined

### Return type

**void**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **deleteTemplate**
> GenericSuccessBoolResponse deleteTemplate(templateId, appId)

Delete a template by id.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const templateId: string = "e4d3c2b1-a09f-4f1e-8d7c-6b5a4f3e2d1c";
// string
const appId: string = "00000000-0000-0000-0000-000000000000";

try {
  const response = await apiInstance.deleteTemplate(templateId, appId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("deleteTemplate failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined
 **appId** | [**string**] |  | defaults to undefined

### Return type

**GenericSuccessBoolResponse**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **deleteUser**
> void deleteUser(appId, aliasLabel, aliasId)

Removes the User identified by (:alias_label, :alias_id), and all Subscriptions and Aliases

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const aliasLabel: string = "external_id";
// string
const aliasId: string = "YOUR_USER_EXTERNAL_ID";

try {
  const response = await apiInstance.deleteUser(appId, aliasLabel, aliasId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("deleteUser failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
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

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **exportEvents**
> ExportEventsSuccessResponse exportEvents(notificationId, appId)

Generate a compressed CSV report of all of the events data for a notification. This will return a URL immediately upon success but it may take several minutes for the CSV to become available at that URL depending on the volume of data. Only one export can be in-progress per OneSignal account at any given time.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | The ID of the notification to export events from.
const notificationId: string = "b3a0c8bd-3a4c-4b22-9a73-3f1a8c2d1b88";
// string | The ID of the app that the notification belongs to.
const appId: string = "00000000-0000-0000-0000-000000000000";

try {
  const response = await apiInstance.exportEvents(notificationId, appId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("exportEvents failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationId** | [**string**] | The ID of the notification to export events from. | defaults to undefined
 **appId** | [**string**] | The ID of the app that the notification belongs to. | defaults to undefined

### Return type

**ExportEventsSuccessResponse**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **exportSubscriptions**
> ExportSubscriptionsSuccessResponse exportSubscriptions(appId, exportSubscriptionsRequestBody)

Generate a compressed CSV export of all of your current user data This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the /players API endpoint. The file will be compressed using GZip. The file may take several minutes to generate depending on the number of users in your app. The URL generated will be available for 3 days and includes random v4 uuid as part of the resource name to be unguessable. &#x1F6A7; 403 Error Responses          You can test if it is complete by making a GET request to the csv_file_url value. This file may take time to generate depending on how many device records are being pulled. If the file is not ready, a 403 error will be returned. Otherwise the file itself will be returned. &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs. &#x1F6A7; Concurrent Exports Only one concurrent export is allowed per OneSignal account. Please ensure you have successfully downloaded the .csv.gz file before exporting another app. CSV File Format: - Default Columns:   | Field | Details |   | --- | --- |   | id | OneSignal Player Id |   | identifier | Push Token |   | session_count | Number of times they visited the app or site   | language | Device language code |   | timezone | Number of seconds away from UTC. Example: -28800 |   | game_version | Version of your mobile app gathered from Android Studio versionCode in your App/build.gradle and iOS uses kCFBundleVersionKey in Xcode. |   | device_os | Device Operating System Version. Example: 80 = Chrome 80, 9 = Android 9 |   | device_type | Device Operating System Type |   | device_model | Device Hardware String Code. Example: Mobile Web Subscribers will have `Linux armv` |   | ad_id | Based on the Google Advertising Id for Android, identifierForVendor for iOS. OptedOut means user turned off Advertising tracking on the device. |   | tags | Current OneSignal Data Tags on the device. |   | last_active | Date and time the user last opened the mobile app or visited the site. |   | playtime | Total amount of time in seconds the user had the mobile app open. |   | amount_spent |  Mobile only - amount spent in USD on In-App Purchases. |    | created_at | Date and time the device record was created in OneSignal. Mobile - first time they opened the app with OneSignal SDK. Web - first time the user subscribed to the site. |   | invalid_identifier | t = unsubscribed, f = subscibed |   | badge_count | Current number of badges on the device | - Extra Columns:   | Field | Details |   | --- | --- |   | external_user_id | Your User Id set on the device |   | notification_types | Notification types |   | location | Location points (Latitude and Longitude) set on the device. |   | country | Country code |   | rooted | Android device rooted or not |   | ip | IP Address of the device if being tracked. See Handling Personal Data. |   | web_auth | Web Only authorization key. |   | web_p256 | Web Only p256 key. | 

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | The app ID that you want to export devices from
const appId: string = "00000000-0000-0000-0000-000000000000";
// ExportSubscriptionsRequestBody (optional)
const exportSubscriptionsRequestBody: Onesignal.ExportSubscriptionsRequestBody = {
    extra_fields: [
      "extra_fields_example",
    ],
    last_active_since: "last_active_since_example",
    segment_name: "segment_name_example",
  };

try {
  const response = await apiInstance.exportSubscriptions(appId, exportSubscriptionsRequestBody);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("exportSubscriptions failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The app ID that you want to export devices from | defaults to undefined
 **exportSubscriptionsRequestBody** | **ExportSubscriptionsRequestBody** |  |

### Return type

**ExportSubscriptionsSuccessResponse**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **getAliases**
> UserIdentityBody getAliases(appId, aliasLabel, aliasId)

Lists all Aliases for the User identified by (:alias_label, :alias_id).

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const aliasLabel: string = "external_id";
// string
const aliasId: string = "YOUR_USER_EXTERNAL_ID";

try {
  const response = await apiInstance.getAliases(appId, aliasLabel, aliasId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("getAliases failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
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

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **getAliasesBySubscription**
> UserIdentityBody getAliasesBySubscription(appId, subscriptionId)

Lists all Aliases for the User identified by :subscription_id.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const subscriptionId: string = "7e4c5b9a-1f60-4d07-9b1a-2e8c8d2cae51";

try {
  const response = await apiInstance.getAliasesBySubscription(appId, subscriptionId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("getAliasesBySubscription failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined

### Return type

**UserIdentityBody**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **getApp**
> App getApp(appId)

View the details of a single OneSignal app

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    organizationApiKey: 'YOUR_ORGANIZATION_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | An app id
const appId: string = "00000000-0000-0000-0000-000000000000";

try {
  const response = await apiInstance.getApp(appId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("getApp failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | An app id | defaults to undefined

### Return type

**App**

### Authorization

[organization_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **getApps**
> Array<App> getApps()

View the details of all of your current OneSignal apps

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    organizationApiKey: 'YOUR_ORGANIZATION_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

try {
  const response = await apiInstance.getApps();
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("getApps failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters
This endpoint does not need any parameter.

### Return type

**Array<App>**

### Authorization

[organization_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **getNotification**
> NotificationWithMeta getNotification(appId, notificationId)

View the details of a single notification and outcomes associated with it

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const notificationId: string = "b3a0c8bd-3a4c-4b22-9a73-3f1a8c2d1b88";

try {
  const response = await apiInstance.getNotification(appId, notificationId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("getNotification failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **notificationId** | [**string**] |  | defaults to undefined

### Return type

**NotificationWithMeta**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **getNotificationHistory**
> NotificationHistorySuccessResponse getNotificationHistory(notificationId, getNotificationHistoryRequestBody)

-> View the devices sent a message - OneSignal Paid Plan Required This method will return all devices that were sent the given notification_id of an Email or Push Notification if used within 7 days of the date sent. After 7 days of the sending date, the message history data will be unavailable. After a successful response is received, the destination url may be polled until the file becomes available. Most exports are done in ~1-3 minutes, so setting a poll interval of 10 seconds should be adequate. For use cases that are not meant to be consumed by a script, an email will be sent to the supplied email address. &#x1F6A7; Requirements A OneSignal Paid Plan. Turn on Send History via OneSignal API in Settings -> Analytics. Cannot get data before this was turned on. Must be called within 7 days after sending the message. Messages targeting under 1000 recipients will not have \"sent\" events recorded, but will show \"clicked\" events. Requires your OneSignal App\'s REST API Key, available in Keys & IDs.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | The \"id\" of the message found in the Notification object
const notificationId: string = "b3a0c8bd-3a4c-4b22-9a73-3f1a8c2d1b88";
// GetNotificationHistoryRequestBody
const getNotificationHistoryRequestBody: Onesignal.GetNotificationHistoryRequestBody = {
    events: "sent",
    email: "email_example",
    app_id: "app_id_example",
  };

try {
  const response = await apiInstance.getNotificationHistory(notificationId, getNotificationHistoryRequestBody);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("getNotificationHistory failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationId** | [**string**] | The \&quot;id\&quot; of the message found in the Notification object | defaults to undefined
 **getNotificationHistoryRequestBody** | **GetNotificationHistoryRequestBody** |  |

### Return type

**NotificationHistorySuccessResponse**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **getNotifications**
> NotificationSlice getNotifications(appId, limit, offset, kind, timeOffset)

View the details of multiple notifications

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | The app ID that you want to view notifications from
const appId: string = "00000000-0000-0000-0000-000000000000";
// number | How many notifications to return.  Max is 50.  Default is 50. (optional)
const limit: number = 10;
// number | Page offset.  Default is 0.  Results are sorted by queued_at in descending order.  queued_at is a representation of the time that the notification was queued at. (optional)
const offset: number = 0;
// 0 | 1 | 3 | Kind of notifications returned:   * unset - All notification types (default)   * `0` - Dashboard only   * `1` - API only   * `3` - Automated only  (optional)
const kind: 0 | 1 | 3 = 0;
// string | Time-offset pagination cursor for sequential pulls of all messages.  Accepts either an ISO 8601 formatted timestamp (e.g. `2025-01-01T00:00:00.000Z`) or the opaque Base64 cursor token returned as `next_time_offset` in a prior response.  When set, results are sorted ascending by send_after and the standard `offset` parameter cannot be used.  Repeat the request with each `next_time_offset` until an empty notifications array is returned. (optional)
const timeOffset: string = "2025-01-01T00:00:00.000Z";

try {
  const response = await apiInstance.getNotifications(appId, limit, offset, kind, timeOffset);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("getNotifications failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The app ID that you want to view notifications from | defaults to undefined
 **limit** | [**number**] | How many notifications to return.  Max is 50.  Default is 50. | (optional) defaults to undefined
 **offset** | [**number**] | Page offset.  Default is 0.  Results are sorted by queued_at in descending order.  queued_at is a representation of the time that the notification was queued at. | (optional) defaults to undefined
 **kind** | [**0 | 1 | 3**]**Array<0 &#124; 1 &#124; 3>** | Kind of notifications returned:   * unset - All notification types (default)   * &#x60;0&#x60; - Dashboard only   * &#x60;1&#x60; - API only   * &#x60;3&#x60; - Automated only  | (optional) defaults to undefined
 **timeOffset** | [**string**] | Time-offset pagination cursor for sequential pulls of all messages.  Accepts either an ISO 8601 formatted timestamp (e.g. &#x60;2025-01-01T00:00:00.000Z&#x60;) or the opaque Base64 cursor token returned as &#x60;next_time_offset&#x60; in a prior response.  When set, results are sorted ascending by send_after and the standard &#x60;offset&#x60; parameter cannot be used.  Repeat the request with each &#x60;next_time_offset&#x60; until an empty notifications array is returned. | (optional) defaults to undefined

### Return type

**NotificationSlice**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **getOutcomes**
> OutcomesData getOutcomes(appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution)

View the details of all the outcomes associated with your app  &#x1F6A7; Requires Authentication Key Requires your OneSignal App\'s REST API Key, available in Keys & IDs.  &#x1F6A7; Outcome Data Limitations Outcomes are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it. 

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | The OneSignal App ID for your app.  Available in Keys & IDs.
const appId: string = "00000000-0000-0000-0000-000000000000";
// string | Required Comma-separated list of names and the value (sum/count) for the returned outcome data. Note: Clicks only support count aggregation. For out-of-the-box OneSignal outcomes such as click and session duration, please use the \"os\" prefix with two underscores. For other outcomes, please use the name specified by the user. Example:os__session_duration.count,os__click.count,CustomOutcomeName.sum 
const outcomeNames: string = "os__session_duration.count,os__click.count";
// string | Optional If outcome names contain any commas, then please specify only one value at a time. Example: outcome_names[]=os__click.count&outcome_names[]=Sales, Purchase.count where \"Sales, Purchase\" is the custom outcomes with a comma in the name.  (optional)
const outcomeNames2: string = "os__session_duration.count";
// string | Optional Time range for the returned data. The values can be 1h (for the last 1 hour data), 1d (for the last 1 day data), or 1mo (for the last 1 month data). Default is 1h if the parameter is omitted.  (optional)
const outcomeTimeRange: string = "1d";
// string | Optional Platform id. Refer device\'s platform ids for values. Example: outcome_platform=0 for iOS outcome_platform=7,8 for Safari and Firefox Default is data from all platforms if the parameter is omitted.  (optional)
const outcomePlatforms: string = "0,1";
// string | Optional Attribution type for the outcomes. The values can be direct or influenced or unattributed. Example: outcome_attribution=direct Default is total (returns direct+influenced+unattributed) if the parameter is omitted.  (optional)
const outcomeAttribution: string = "direct";

try {
  const response = await apiInstance.getOutcomes(appId, outcomeNames, outcomeNames2, outcomeTimeRange, outcomePlatforms, outcomeAttribution);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("getOutcomes failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
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

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **getSegments**
> GetSegmentsSuccessResponse getSegments(appId, offset, limit)

Returns an array of segments from an app.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | The OneSignal App ID for your app.  Available in Keys & IDs.
const appId: string = "00000000-0000-0000-0000-000000000000";
// number | Segments are listed in ascending order of created_at date. offset will omit that number of segments from the beginning of the list. Eg offset 5, will remove the 5 earliest created Segments. (optional)
const offset: number = 0;
// number | The amount of Segments in the response. Maximum 300. (optional)
const limit: number = 10;

try {
  const response = await apiInstance.getSegments(appId, offset, limit);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("getSegments failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
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

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **getUser**
> User getUser(appId, aliasLabel, aliasId)

Returns the User’s properties, Aliases, and Subscriptions.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const aliasLabel: string = "external_id";
// string
const aliasId: string = "YOUR_USER_EXTERNAL_ID";

try {
  const response = await apiInstance.getUser(appId, aliasLabel, aliasId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("getUser failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
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

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **rotateApiKey**
> CreateApiKeyResponse rotateApiKey(appId, tokenId)

Rotate a Rich Authentication Token (App API Key) for a OneSignal app. Rotating a key revokes the current token and generates a new one under the same configuration—ideal when a token is lost or compromised but you don’t want to recreate and reconfigure it from scratch.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    organizationApiKey: 'YOUR_ORGANIZATION_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const tokenId: string = "0aa1b2c3-d4e5-46f7-8899-aabbccddeeff";

try {
  const response = await apiInstance.rotateApiKey(appId, tokenId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("rotateApiKey failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **tokenId** | [**string**] |  | defaults to undefined

### Return type

**CreateApiKeyResponse**

### Authorization

[organization_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **startLiveActivity**
> StartLiveActivitySuccessResponse startLiveActivity(appId, activityType, startLiveActivityRequest)

Remotely start a Live Activity on iOS devices via OneSignal’s REST API.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | Your OneSignal App ID in UUID v4 format.
const appId: string = "00000000-0000-0000-0000-000000000000";
// string | The name of the Live Activity defined in your app. This should match the attributes struct used in your app\'s Live Activity implementation.
const activityType: string = "order_status";
// StartLiveActivityRequest
const startLiveActivityRequest: Onesignal.StartLiveActivityRequest = {
    name: "name_example",
    event: "start",
    activity_id: "activity_id_example",
    event_attributes: {},
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
    stale_date: 1,
    priority: 1,
    ios_relevance_score: 3.14,
    idempotency_key: "idempotency_key_example",
    include_aliases: {
      "key": [
        "key_example",
      ],
    },
    include_subscription_ids: [
      "include_subscription_ids_example",
    ],
    included_segments: [
      "included_segments_example",
    ],
    excluded_segments: [
      "excluded_segments_example",
    ],
    filters: [
      {
        field: "field_example",
        key: "key_example",
        value: "value_example",
        hours_ago: "hours_ago_example",
        radius: 3.14,
        lat: 3.14,
        long: 3.14,
        relation: ">",
      },
    ],
  };

try {
  const response = await apiInstance.startLiveActivity(appId, activityType, startLiveActivityRequest);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("startLiveActivity failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | Your OneSignal App ID in UUID v4 format. | defaults to undefined
 **activityType** | [**string**] | The name of the Live Activity defined in your app. This should match the attributes struct used in your app\&#39;s Live Activity implementation. | defaults to undefined
 **startLiveActivityRequest** | **StartLiveActivityRequest** |  |

### Return type

**StartLiveActivitySuccessResponse**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **transferSubscription**
> UserIdentityBody transferSubscription(appId, subscriptionId, transferSubscriptionRequestBody)

Transfers this Subscription to the User identified by the identity in the payload.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const subscriptionId: string = "7e4c5b9a-1f60-4d07-9b1a-2e8c8d2cae51";
// TransferSubscriptionRequestBody
const transferSubscriptionRequestBody: Onesignal.TransferSubscriptionRequestBody = {
    identity: {
      "key": "key_example",
    },
  };

try {
  const response = await apiInstance.transferSubscription(appId, subscriptionId, transferSubscriptionRequestBody);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("transferSubscription failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined
 **transferSubscriptionRequestBody** | **TransferSubscriptionRequestBody** |  |

### Return type

**UserIdentityBody**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **unsubscribeEmailWithToken**
> GenericSuccessBoolResponse unsubscribeEmailWithToken(appId, notificationId, token)

Unsubscribe an email with a token when using your own custom email unsubscribe landing page

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | The OneSignal App ID for your app.  Available in Keys & IDs.
const appId: string = "00000000-0000-0000-0000-000000000000";
// string | The id of the message found in the creation notification POST response, View Notifications GET response, or URL within the Message Report.
const notificationId: string = "b3a0c8bd-3a4c-4b22-9a73-3f1a8c2d1b88";
// string | The unsubscribe token that is generated via liquid syntax in {{subscription.unsubscribe_token}} when personalizing an email.
const token: string = "YOUR_TOKEN_ID";

try {
  const response = await apiInstance.unsubscribeEmailWithToken(appId, notificationId, token);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("unsubscribeEmailWithToken failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
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

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **updateApiKey**
> object updateApiKey(appId, tokenId, updateApiKeyRequest)

Update a Rich Authentication Token (App API Key) for a OneSignal app.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    organizationApiKey: 'YOUR_ORGANIZATION_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const tokenId: string = "0aa1b2c3-d4e5-46f7-8899-aabbccddeeff";
// UpdateApiKeyRequest
const updateApiKeyRequest: Onesignal.UpdateApiKeyRequest = {
    name: "name_example",
    ip_allowlist_mode: "disabled",
    ip_allowlist: [
      "ip_allowlist_example",
    ],
  };

try {
  const response = await apiInstance.updateApiKey(appId, tokenId, updateApiKeyRequest);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("updateApiKey failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **tokenId** | [**string**] |  | defaults to undefined
 **updateApiKeyRequest** | **UpdateApiKeyRequest** |  |

### Return type

**object**

### Authorization

[organization_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **updateApp**
> App updateApp(appId, app)

Updates the name or configuration settings of an existing OneSignal app

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    organizationApiKey: 'YOUR_ORGANIZATION_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | An app id
const appId: string = "00000000-0000-0000-0000-000000000000";
// App
const app: Onesignal.App = {
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
  };

try {
  const response = await apiInstance.updateApp(appId, app);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("updateApp failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | An app id | defaults to undefined
 **app** | **App** |  |

### Return type

**App**

### Authorization

[organization_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **updateLiveActivity**
> UpdateLiveActivitySuccessResponse updateLiveActivity(appId, activityId, updateLiveActivityRequest)

Updates a specified live activity.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | The OneSignal App ID for your app.  Available in Keys & IDs.
const appId: string = "00000000-0000-0000-0000-000000000000";
// string | Live Activity record ID
const activityId: string = "12345";
// UpdateLiveActivityRequest
const updateLiveActivityRequest: Onesignal.UpdateLiveActivityRequest = {
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
  };

try {
  const response = await apiInstance.updateLiveActivity(appId, activityId, updateLiveActivityRequest);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("updateLiveActivity failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | The OneSignal App ID for your app.  Available in Keys &amp; IDs. | defaults to undefined
 **activityId** | [**string**] | Live Activity record ID | defaults to undefined
 **updateLiveActivityRequest** | **UpdateLiveActivityRequest** |  |

### Return type

**UpdateLiveActivitySuccessResponse**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **updateSubscription**
> void updateSubscription(appId, subscriptionId, subscriptionBody)

Updates an existing Subscription’s properties.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const subscriptionId: string = "7e4c5b9a-1f60-4d07-9b1a-2e8c8d2cae51";
// SubscriptionBody
const subscriptionBody: Onesignal.SubscriptionBody = {
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
  };

try {
  const response = await apiInstance.updateSubscription(appId, subscriptionId, subscriptionBody);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("updateSubscription failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **subscriptionId** | [**string**] |  | defaults to undefined
 **subscriptionBody** | **SubscriptionBody** |  |

### Return type

**void**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **updateSubscriptionByToken**
> object updateSubscriptionByToken(appId, tokenType, token, subscriptionBody)

Update properties on an existing OneSignal subscription using its token.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | Your OneSignal App ID in UUID v4 format.
const appId: string = "00000000-0000-0000-0000-000000000000";
// string | The type of token to use when looking up the subscription. See Subscription Types.
const tokenType: string = "Email";
// string | The value of the token to lookup by (e.g., email address, phone number).
const token: string = "user@example.com";
// SubscriptionBody
const subscriptionBody: Onesignal.SubscriptionBody = {
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
  };

try {
  const response = await apiInstance.updateSubscriptionByToken(appId, tokenType, token, subscriptionBody);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("updateSubscriptionByToken failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | Your OneSignal App ID in UUID v4 format. | defaults to undefined
 **tokenType** | [**string**] | The type of token to use when looking up the subscription. See Subscription Types. | defaults to undefined
 **token** | [**string**] | The value of the token to lookup by (e.g., email address, phone number). | defaults to undefined
 **subscriptionBody** | **SubscriptionBody** |  |

### Return type

**object**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | ACCEPTED |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **updateTemplate**
> TemplateResource updateTemplate(templateId, appId, updateTemplateRequest)

Update an existing template.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const templateId: string = "e4d3c2b1-a09f-4f1e-8d7c-6b5a4f3e2d1c";
// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// UpdateTemplateRequest
const updateTemplateRequest: Onesignal.UpdateTemplateRequest = {
    name: "name_example",
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
    subtitle: {
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
    is_email: true,
    email_subject: "email_subject_example",
    email_body: "email_body_example",
    email_bcc: [
      "email_bcc_example",
    ],
    is_sms: true,
    dynamic_content: "dynamic_content_example",
  };

try {
  const response = await apiInstance.updateTemplate(templateId, appId, updateTemplateRequest);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("updateTemplate failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined
 **appId** | [**string**] |  | defaults to undefined
 **updateTemplateRequest** | **UpdateTemplateRequest** |  |

### Return type

**TemplateResource**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **updateUser**
> PropertiesBody updateUser(appId, aliasLabel, aliasId, updateUserRequest)

Updates an existing User’s properties.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";
// string
const aliasLabel: string = "external_id";
// string
const aliasId: string = "YOUR_USER_EXTERNAL_ID";
// UpdateUserRequest
const updateUserRequest: Onesignal.UpdateUserRequest = {
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
  };

try {
  const response = await apiInstance.updateUser(appId, aliasLabel, aliasId, updateUserRequest);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("updateUser failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined
 **aliasLabel** | [**string**] |  | defaults to undefined
 **aliasId** | [**string**] |  | defaults to undefined
 **updateUserRequest** | **UpdateUserRequest** |  |

### Return type

**PropertiesBody**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

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
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **viewApiKeys**
> ApiKeyTokensListResponse viewApiKeys(appId)

View the details of all of your current app API keys (Rich Authentication Token) for a single OneSignal app.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    organizationApiKey: 'YOUR_ORGANIZATION_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const appId: string = "00000000-0000-0000-0000-000000000000";

try {
  const response = await apiInstance.viewApiKeys(appId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("viewApiKeys failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] |  | defaults to undefined

### Return type

**ApiKeyTokensListResponse**

### Authorization

[organization_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **viewTemplate**
> TemplateResource viewTemplate(templateId, appId)

Fetch a single template by id.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string
const templateId: string = "e4d3c2b1-a09f-4f1e-8d7c-6b5a4f3e2d1c";
// string
const appId: string = "00000000-0000-0000-0000-000000000000";

try {
  const response = await apiInstance.viewTemplate(templateId, appId);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("viewTemplate failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] |  | defaults to undefined
 **appId** | [**string**] |  | defaults to undefined

### Return type

**TemplateResource**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)

# **viewTemplates**
> TemplatesListResponse viewTemplates(appId, limit, offset, channel)

List templates for an app.

### Example


```typescript
import Onesignal from '@onesignal/node-onesignal';

const configuration = Onesignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
});
const apiInstance = new Onesignal.DefaultApi(configuration);

// string | Your OneSignal App ID in UUID v4 format.
const appId: string = "00000000-0000-0000-0000-000000000000";
// number | Maximum number of templates. Default and max is 50. (optional)
const limit: number = 10;
// number | Pagination offset. (optional)
const offset: number = 0;
// 'push' | 'email' | 'sms' | Filter by delivery channel. (optional)
const channel: 'push' | 'email' | 'sms' = "push";

try {
  const response = await apiInstance.viewTemplates(appId, limit, offset, channel);
  console.log(response);
} catch (e) {
  if (e instanceof Onesignal.ApiException) {
    // `e.errorMessages` flattens any error-envelope shape to a `string[]`;
    // the raw parsed body remains on `e.body`.
    console.error("viewTemplates failed: HTTP " + e.code, e.errorMessages);
  } else {
    throw e;
  }
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | Your OneSignal App ID in UUID v4 format. | defaults to undefined
 **limit** | [**number**] | Maximum number of templates. Default and max is 50. | (optional) defaults to 50
 **offset** | [**number**] | Pagination offset. | (optional) defaults to 0
 **channel** | [**&#39;push&#39; | &#39;email&#39; | &#39;sms&#39;**]**Array<&#39;push&#39; &#124; &#39;email&#39; &#124; &#39;sms&#39;>** | Filter by delivery channel. | (optional) defaults to undefined

### Return type

**TemplatesListResponse**

### Authorization

[rest_api_key](https://github.com/OneSignal/node-onesignal#configuration)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Exceeded |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](https://github.com/OneSignal/node-onesignal#full-api-reference) [[Back to README]](https://github.com/OneSignal/node-onesignal)


