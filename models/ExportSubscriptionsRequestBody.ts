/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.1.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class ExportSubscriptionsRequestBody {
    /**
    * Additional fields that you wish to include. Currently supports location, country, rooted, notification_types, ip, external_user_id, web_auth, and web_p256.
    */
    'extra_fields'?: Array<string>;
    /**
    * Export all devices with a last_active timestamp greater than this time.  Unixtime in seconds.
    */
    'last_active_since'?: string;
    /**
    * Export all devices belonging to the segment.
    */
    'segment_name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "extra_fields",
            "baseName": "extra_fields",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "last_active_since",
            "baseName": "last_active_since",
            "type": "string",
            "format": ""
        },
        {
            "name": "segment_name",
            "baseName": "segment_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExportSubscriptionsRequestBody.attributeTypeMap;
    }

    public constructor() {
    }
}

