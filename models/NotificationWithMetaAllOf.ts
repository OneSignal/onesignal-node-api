/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { PlatformDeliveryData } from './PlatformDeliveryData';
import { HttpFile } from '../http/http';

export class NotificationWithMetaAllOf {
    /**
    * Number of notifications that have not been sent out yet. This can mean either our system is still processing the notification or you have delayed options set.
    */
    'remaining'?: number;
    /**
    * Number of notifications that were successfully delivered.
    */
    'successful'?: number;
    /**
    * Number of notifications that could not be delivered due to those devices being unsubscribed.
    */
    'failed'?: number;
    /**
    * Number of notifications that could not be delivered due to an error. You can find more information by viewing the notification in the dashboard.
    */
    'errored'?: number;
    /**
    * Number of users who have clicked / tapped on your notification.
    */
    'converted'?: number;
    /**
    * Unix timestamp indicating when the notification was created.
    */
    'queued_at'?: number;
    /**
    * Unix timestamp indicating when notification delivery should begin.
    */
    'send_after'?: number;
    /**
    * Unix timestamp indicating when notification delivery completed. The delivery duration from start to finish can be calculated with completed_at - send_after.
    */
    'completed_at'?: number;
    'platform_delivery_stats'?: PlatformDeliveryData;
    /**
    * Confirmed Deliveries number of devices that received the push notification. Paid Feature Only. Free accounts will see 0.
    */
    'received'?: number;
    /**
    * number of push notifications sent per minute. Paid Feature Only. If throttling is not enabled for the app or the notification, and for free accounts, null is returned. Refer to Throttling for more details.
    */
    'throttle_rate_per_minute'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "remaining",
            "baseName": "remaining",
            "type": "number",
            "format": ""
        },
        {
            "name": "successful",
            "baseName": "successful",
            "type": "number",
            "format": ""
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number",
            "format": ""
        },
        {
            "name": "errored",
            "baseName": "errored",
            "type": "number",
            "format": ""
        },
        {
            "name": "converted",
            "baseName": "converted",
            "type": "number",
            "format": ""
        },
        {
            "name": "queued_at",
            "baseName": "queued_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "send_after",
            "baseName": "send_after",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "completed_at",
            "baseName": "completed_at",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "platform_delivery_stats",
            "baseName": "platform_delivery_stats",
            "type": "PlatformDeliveryData",
            "format": ""
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "number",
            "format": ""
        },
        {
            "name": "throttle_rate_per_minute",
            "baseName": "throttle_rate_per_minute",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotificationWithMetaAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

