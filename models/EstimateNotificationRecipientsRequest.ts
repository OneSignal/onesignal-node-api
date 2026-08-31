/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { EstimateNotificationRecipientsRequestAllOf } from './EstimateNotificationRecipientsRequestAllOf';
import { FilterExpression } from './FilterExpression';
import { SegmentNotificationTarget } from './SegmentNotificationTarget';
import { HttpFile } from '../http/http';

/**
* The targeting subset of notification fields this endpoint honors. `included_segments` (or its `\"All\"` shorthand) is required. `excluded_segments`, `filters`, `include_aliases`, and `target_channel` narrow that segment-based audience further when present. Use `target_channel` to select which platforms to count. Other notification targeting fields (`include_subscription_ids` and the other raw subscription id/token fields, and the individual `isIos` / `isAndroid` / etc. platform flags) are not read by this endpoint. All non-targeting notification fields (content, delivery options, and so on) are accepted, but ignored. 
*/
export class EstimateNotificationRecipientsRequest {
    /**
    * The segment names you want to target. Users in these segments will receive a notification. This targeting parameter is only compatible with excluded_segments. Example: [\"Active Users\", \"Inactive Users\"] `\"All\"` is a shorthand for every subscribed user: if the array includes the string `\"All\"` and the app has no segment actually named `All`, it targets all subscribers instead of a literal segment lookup. 
    */
    'included_segments'?: Array<string>;
    /**
    * Segment that will be excluded when sending. Users in these segments will not receive a notification, even if they were included in included_segments. This targeting parameter is only compatible with included_segments. Example: [\"Active Users\", \"Inactive Users\"] 
    */
    'excluded_segments'?: Array<string>;
    /**
    * The OneSignal App ID for your app, which can be found in Keys & IDs.
    */
    'app_id': string;
    'filters'?: Array<FilterExpression>;
    /**
    * Target specific users by aliases assigned via API. An alias can be an external_id, onesignal_id, or a custom alias. Accepts an object where keys are alias labels and values are arrays of alias IDs to include Example usage: { \"external_id\": [\"exId1\", \"extId2\"], \"internal_label\": [\"id1\", \"id2\"] } Keys must match API spellings exactly (for example the label for External ID is the string `external_id`; arbitrary keys such as camelCase variants are not aliases and may yield no recipients). Not compatible with any other targeting parameters. REQUIRED: REST API Key Authentication Limit of 2,000 entries per REST API call Note: If targeting push, email, or sms subscribers with same ids, use with target_channel to indicate you are sending a push or email or sms.
    */
    'include_aliases'?: { [key: string]: Array<string>; };
    /**
    * Which platforms to count recipients for. Selects the same default platforms Create notification would use for the channel. Individual platform flags (`isIos`, `isAndroid`, etc.) are not supported by this endpoint.
    */
    'target_channel'?: EstimateNotificationRecipientsRequestTargetChannelEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "included_segments",
            "baseName": "included_segments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "excluded_segments",
            "baseName": "excluded_segments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<FilterExpression>",
            "format": ""
        },
        {
            "name": "include_aliases",
            "baseName": "include_aliases",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "target_channel",
            "baseName": "target_channel",
            "type": "EstimateNotificationRecipientsRequestTargetChannelEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EstimateNotificationRecipientsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EstimateNotificationRecipientsRequestTargetChannelEnum = "push" | "email" | "sms" ;

