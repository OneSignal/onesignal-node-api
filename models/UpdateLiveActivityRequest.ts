/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.13.0
 * Contact: devrel@onesignal.com
 */

import { LanguageStringMap } from './LanguageStringMap';
import { HttpFile } from '../http/http';

export class UpdateLiveActivityRequest {
    /**
    * An internal name to assist with your campaign organization. This does not get displayed in the message itself.
    */
    'name': string;
    'event': UpdateLiveActivityRequestEventEnum;
    /**
    * This must match the ContentState interface you have defined within your Live Activity in your app.
    */
    'event_updates': object;
    'contents'?: LanguageStringMap;
    'headings'?: LanguageStringMap;
    /**
    * Deprecated. The API ignores this field. Use `ios_sound`.
    */
    'sound'?: string;
    /**
    * Sound file that is included in your app to play instead of the default device notification sound. Omit to disable vibration and sound for the notification. Requires `headings` on the same request: ActivityKit ignores an update whose alert has no title, which silently drops the sound. Supersedes the deprecated `sound` field. 
    */
    'ios_sound'?: string;
    /**
    * Accepts Unix timestamp in seconds. When time reaches the configured stale date, the system considers the Live Activity out of date, and the ActivityState of the Live Activity changes to ActivityState.stale.
    */
    'stale_date'?: number;
    /**
    * Accepts Unix timestamp in seconds; only allowed if event is \"end\"
    */
    'dismissal_date'?: number;
    /**
    * Delivery priority through the push provider (APNs). Pass 10 for higher priority notifications, or 5 for lower priority notifications. Lower priority notifications are sent based on the power considerations of the end user\'s device. If not set, defaults to 10. Some providers (APNs) allow for a limited budget of high priority notifications per hour, and if that budget is exceeded, the provider may throttle notification delivery.
    */
    'priority'?: number;
    /**
    * A value between 0 and 1. When more than one Live Activity is active for your app, the one with the highest relevance score shows in the Dynamic Island. If the scores are equal, the system shows the Live Activity that started first. The score also sets the order of Live Activities on the Lock Screen. Only available on iOS 16.2 and later.
    */
    'ios_relevance_score'?: number;

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
            "type": "UpdateLiveActivityRequestEventEnum",
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
            "name": "sound",
            "baseName": "sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "ios_sound",
            "baseName": "ios_sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "stale_date",
            "baseName": "stale_date",
            "type": "number",
            "format": ""
        },
        {
            "name": "dismissal_date",
            "baseName": "dismissal_date",
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
        }    ];

    static getAttributeTypeMap() {
        return UpdateLiveActivityRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UpdateLiveActivityRequestEventEnum = "update" | "end" ;

