/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class NotificationAllOf {
    /**
    * Channel: All Schedule notification for future delivery. API defaults to UTC -1100 Examples: All examples are the exact same date & time. \"Thu Sep 24 2015 14:00:00 GMT-0700 (PDT)\" \"September 24th 2015, 2:00:00 pm UTC-07:00\" \"2015-09-24 14:00:00 GMT-0700\" \"Sept 24 2015 14:00:00 GMT-0700\" \"Thu Sep 24 2015 14:00:00 GMT-0700 (Pacific Daylight Time)\" Note: SMS currently only supports send_after parameter. 
    */
    'send_after'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "send_after",
            "baseName": "send_after",
            "type": "string",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return NotificationAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

