<h1 align="center">Welcome to @onesignal/node-onesignal</h1>
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
</p>

The OneSignal Node client is a server SDK for NodeJS. A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at [onesignal.com](https://onesignal.com).

## Installation

```sh
# npm
npm install @onesignal/node-onesignal

# pnpm
pnpm add @onesignal/node-onesignal

# bun
bun add @onesignal/node-onesignal

# yarn
yarn add @onesignal/node-onesignal
```

## Configuration

Every SDK requires authentication via API keys. Two key types are available:

- **REST API Key** — required for most endpoints (sending notifications, managing users, etc.). Found in your app's **Settings > Keys & IDs**.
- **Organization API Key** — only required for organization-level endpoints like creating or listing apps. Found in **Organization Settings**.

> **Warning:** Store your API keys in environment variables or a secrets manager. Never commit them to source control.

```javascript
const OneSignal = require('@onesignal/node-onesignal');

const configuration = OneSignal.createConfiguration({
    restApiKey: 'YOUR_REST_API_KEY',
    organizationApiKey: 'YOUR_ORGANIZATION_API_KEY',
});

const client = new OneSignal.DefaultApi(configuration);
```

## Send a push notification

```javascript
const notification = new OneSignal.Notification();
notification.app_id = 'YOUR_APP_ID';
notification.contents = { en: 'Hello from OneSignal!' };
notification.headings = { en: 'Push Notification' };
notification.included_segments = ['Subscribed Users'];

const response = await client.createNotification(notification);
console.log('Notification ID:', response.id);
```

## Send a push notification by External ID

Target specific users with the alias label `external_id` (snake_case). This is different from the notification-level `external_id` field, which is only for [idempotent requests](https://documentation.onesignal.com/docs/idempotent-notification-requests).

You must set `target_channel` when sending push (or email/SMS) to alias targets.

```javascript
const notification = new OneSignal.Notification();
notification.app_id = 'YOUR_APP_ID';
notification.contents = { en: 'Hello from OneSignal!' };
notification.headings = { en: 'Push Notification' };
// Keys under include_aliases must match API alias labels exactly (e.g. external_id, not externalId).
notification.include_aliases = { external_id: ['YOUR_USER_EXTERNAL_ID'] };
notification.target_channel = 'push';

const response = await client.createNotification(notification);
if (!response.id) {
  console.error('Notification was not created:', response.errors);
} else {
  console.log('Notification ID:', response.id);
}
```

The API may return HTTP 200 with an empty `id` when no matching subscribed recipients are found; always check `response.id` and `response.errors`.

## Send an email

```javascript
const notification = new OneSignal.Notification();
notification.app_id = 'YOUR_APP_ID';
notification.email_subject = 'Important Update';
notification.email_body = '<h1>Hello!</h1><p>This is an HTML email.</p>';
notification.included_segments = ['Subscribed Users'];
notification.channel_for_external_user_ids = 'email';

const response = await client.createNotification(notification);
```

## Send an SMS

```javascript
const notification = new OneSignal.Notification();
notification.app_id = 'YOUR_APP_ID';
notification.contents = { en: 'Your SMS message content here' };
notification.included_segments = ['Subscribed Users'];
notification.channel_for_external_user_ids = 'sms';
notification.sms_from = '+15551234567';

const response = await client.createNotification(notification);
```

## Full API reference

The complete list of API endpoints and their parameters is available in the [DefaultApi documentation](https://github.com/OneSignal/node-onesignal/blob/main/DefaultApi.md).

For the underlying REST API, see the [OneSignal API reference](https://documentation.onesignal.com/reference).
