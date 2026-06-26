# AGENTS.md — OneSignal Node (TypeScript) SDK

Integration guide for AI agents and LLMs using `@onesignal/node-onesignal`, the OneSignal server SDK for Node.js. Human-oriented docs are in the [README](./README.md).

## What this SDK does

Server-side access to the OneSignal REST API: send push / email / SMS, manage users, subscriptions, segments, templates and live activities, and administer apps & API keys.

- Package: `@onesignal/node-onesignal`
- Repository: https://github.com/OneSignal/node-onesignal

## Install

```sh
npm install @onesignal/node-onesignal
```

## Authentication — two key types

OneSignal uses two bearer credentials; each endpoint requires a specific one:

- **REST API key** — used by almost every endpoint (notifications, users, subscriptions, segments, templates, live activities, custom events). Found in **App Settings → Keys & IDs**.
- **Organization API key** — required *only* for organization-level endpoints: app management (list / create / get / update apps), API-key management (view / create / update / rotate / delete API keys), and copying a template to another app. Found in **Organization Settings**.

Set both on one configuration; the SDK sends the correct credential per endpoint. Never hard-code keys — read them from environment variables or a secrets manager.

```javascript
const OneSignal = require('@onesignal/node-onesignal');

const configuration = OneSignal.createConfiguration({
    restApiKey: process.env.ONESIGNAL_REST_API_KEY,
    organizationApiKey: process.env.ONESIGNAL_ORGANIZATION_API_KEY,
});

const client = new OneSignal.DefaultApi(configuration);
```

## Calling convention

Methods take **positional arguments**. Build the model object and pass it directly — do **not** wrap arguments in a request/options object.

```javascript
const notification = new OneSignal.Notification();
notification.app_id = 'YOUR_APP_ID';
notification.contents = { en: 'Hello from OneSignal!' };
notification.include_aliases = { external_id: ['YOUR_USER_EXTERNAL_ID'] };
notification.target_channel = 'push';

const response = await client.createNotification(notification);
```

## Idempotent sends & retries

Set `idempotency_key` (a UUID) so a create-notification request can be safely retried — the server returns the original result instead of sending twice. The `createNotificationWithRetry` helper handles this for you: it generates an `idempotency_key` when absent, retries `429` / `503` / transport errors with the **same** key (honoring `Retry-After`), and reports via `wasReplayed` whether the server answered from a previously completed request.

```javascript
const result = await client.createNotificationWithRetry(notification, { maxRetries: 5, baseDelayMs: 1000 });
console.log('id:', result.response.id, 'replayed:', result.wasReplayed);
```

> The notification-level `external_id` field is the **deprecated** idempotency mechanism — prefer `idempotency_key`. Don't confuse it with the `external_id` **alias label** (under `include_aliases`) used to target users.

## Full API reference

- [DefaultApi.md](https://github.com/OneSignal/node-onesignal/blob/main/DefaultApi.md) — every endpoint, parameter, and model, with runnable examples.
- [OneSignal REST API reference](https://documentation.onesignal.com/reference)
