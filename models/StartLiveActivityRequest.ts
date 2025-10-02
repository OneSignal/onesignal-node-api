/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.3.0
 * Contact: devrel@onesignal.com
 */

import { FilterExpression } from './FilterExpression';
import { LanguageStringMap } from './LanguageStringMap';
import { HttpFile } from '../http/http';

export class StartLiveActivityRequest {
    /**
    * An internal name to assist with your campaign organization. This does not get displayed in the message itself.
    */
    'name': string;
    'event': StartLiveActivityRequestEventEnum;
    /**
    * Set a unique activity_id to track and manage the Live Activity.
    */
    'activity_id': string;
    /**
    * Default/static data to initialize the Live Activity upon start.
    */
    'event_attributes': object;
    /**
    * Dynamic content used to update the running Live Activity at start. Must match the ContentState interface defined in your app.
    */
    'event_updates': object;
    'contents': LanguageStringMap;
    'headings': LanguageStringMap;
    /**
    * Accepts Unix timestamp in seconds. When time reaches the configured stale date, the system considers the Live Activity out of date, and the ActivityState of the Live Activity changes to ActivityState.stale.
    */
    'stale_date'?: number;
    /**
    * Delivery priority through the push provider (APNs). Pass 10 for higher priority notifications, or 5 for lower priority notifications. Lower priority notifications are sent based on the power considerations of the end user\'s device. If not set, defaults to 10.
    */
    'priority'?: number;
    /**
    * iOS 15+. A score to indicate how a notification should be displayed when grouped. Use a float between 0-1.
    */
    'ios_relevance_score'?: number;
    /**
    * Correlation and idempotency key. A request received with this parameter will first look for another notification with the same idempotency key. If one exists, a notification will not be sent, and result of the previous operation will instead be returned. Therefore, if you plan on using this feature, it\'s important to use a good source of randomness to generate the UUID passed here. This key is only idempotent for 30 days. After 30 days, the notification could be removed from our system and a notification with the same idempotency key will be sent again.   See Idempotent Notification Requests for more details writeOnly: true 
    */
    'idempotency_key'?: string;
    /**
    * Target specific users by aliases assigned via API. An alias can be an external_id, onesignal_id, or a custom alias. Accepts an object where keys are alias labels and values are arrays of alias IDs to include Example usage: { \"external_id\": [\"exId1\", \"extId2\"], \"internal_label\": [\"id1\", \"id2\"] } Not compatible with any other targeting parameters. REQUIRED: REST API Key Authentication Limit of 2,000 entries per REST API call Note: If targeting push, email, or sms subscribers with same ids, use with target_channel to indicate you are sending a push or email or sms.
    */
    'include_aliases'?: { [key: string]: Array<string>; };
    /**
    * Specific subscription ids to target. Not compatible with other targeting parameters.
    */
    'include_subscription_ids'?: Array<string>;
    /**
    * Segment names to include. Only compatible with excluded_segments.
    */
    'included_segments'?: Array<string>;
    /**
    * Segment names to exclude. Only compatible with included_segments.
    */
    'excluded_segments'?: Array<string>;
    'filters'?: Array<FilterExpression>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "StartLiveActivityRequestEventEnum",
            "format": ""
        },
        {
            "name": "activity_id",
            "baseName": "activity_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "event_attributes",
            "baseName": "event_attributes",
            "type": "object",
            "format": ""
        },
        {
            "name": "event_updates",
            "baseName": "event_updates",
            "type": "object",
            "format": ""
        },
        {
            "name": "contents",
            "baseName": "contents",
            "type": "LanguageStringMap",
            "format": ""
        },
        {
            "name": "headings",
            "baseName": "headings",
            "type": "LanguageStringMap",
            "format": ""
        },
        {
            "name": "stale_date",
            "baseName": "stale_date",
            "type": "number",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": ""
        },
        {
            "name": "ios_relevance_score",
            "baseName": "ios_relevance_score",
            "type": "number",
            "format": ""
        },
        {
            "name": "idempotency_key",
            "baseName": "idempotency_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "include_aliases",
            "baseName": "include_aliases",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "include_subscription_ids",
            "baseName": "include_subscription_ids",
            "type": "Array<string>",
            "format": ""
        },
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
            "name": "filters",
            "baseName": "filters",
            "type": "Array<FilterExpression>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StartLiveActivityRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type StartLiveActivityRequestEventEnum = "start" ;

