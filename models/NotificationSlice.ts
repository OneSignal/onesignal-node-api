/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.8.0
 * Contact: devrel@onesignal.com
 */

import { NotificationWithMeta } from './NotificationWithMeta';
import { HttpFile } from '../http/http';

export class NotificationSlice {
    'total_count'?: number;
    'offset'?: number;
    'limit'?: number;
    /**
    * The time_offset cursor specified in the request, if any.
    */
    'time_offset'?: string;
    /**
    * An opaque Base64 cursor token representing the next page of messages to fetch.  Present when time_offset was provided in the request.  Pass this value as time_offset on the next request to continue paginating.
    */
    'next_time_offset'?: string;
    'notifications'?: Array<NotificationWithMeta>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total_count",
            "baseName": "total_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "time_offset",
            "baseName": "time_offset",
            "type": "string",
            "format": ""
        },
        {
            "name": "next_time_offset",
            "baseName": "next_time_offset",
            "type": "string",
            "format": ""
        },
        {
            "name": "notifications",
            "baseName": "notifications",
            "type": "Array<NotificationWithMeta>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotificationSlice.attributeTypeMap;
    }

    public constructor() {
    }
}

