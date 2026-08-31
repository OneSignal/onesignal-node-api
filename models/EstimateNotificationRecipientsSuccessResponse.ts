/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class EstimateNotificationRecipientsSuccessResponse {
    /**
    * The estimated audience size based on the user targeting method you\'ve set on the message, and the specific platforms the message is targeted to send to.
    */
    'count'?: number;
    /**
    * The estimated audience size before the plan\'s web push subscriber cap is applied. Present only when `cap_applied` is `true`; `null` otherwise.
    */
    'uncapped_count'?: number;
    /**
    * Whether `count` was reduced because the app is on a plan that caps the number of web push subscribers it can send to.
    */
    'cap_applied'?: boolean;
    /**
    * The mobile equivalent of `cap_applied`. Whether mobile push deliveries will be dropped for this send because the org is over its plan\'s mobile push subscriber cap. `false` when the notification doesn\'t target any mobile push platforms.
    */
    'mobile_suppressed'?: boolean;
    /**
    * How many mobile push recipients the `count` excludes due to the plan\'s mobile push subscriber cap. `0` when `mobile_suppressed` is `false`.
    */
    'mobile_excluded_count'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "uncapped_count",
            "baseName": "uncapped_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "cap_applied",
            "baseName": "cap_applied",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mobile_suppressed",
            "baseName": "mobile_suppressed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mobile_excluded_count",
            "baseName": "mobile_excluded_count",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EstimateNotificationRecipientsSuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

