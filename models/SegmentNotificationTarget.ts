/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class SegmentNotificationTarget {
    /**
    * The segment names you want to target. Users in these segments will receive a notification. This targeting parameter is only compatible with excluded_segments. Example: [\"Active Users\", \"Inactive Users\"] 
    */
    'included_segments'?: Array<string>;
    /**
    * Segment that will be excluded when sending. Users in these segments will not receive a notification, even if they were included in included_segments. This targeting parameter is only compatible with included_segments. Example: [\"Active Users\", \"Inactive Users\"] 
    */
    'excluded_segments'?: Array<string>;

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
        }    ];

    static getAttributeTypeMap() {
        return SegmentNotificationTarget.attributeTypeMap;
    }
    
    public constructor() {
    }
}

