/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.10.0
 * Contact: devrel@onesignal.com
 */

import { SegmentDetails } from './SegmentDetails';
import { HttpFile } from '../http/http';

export class GetSegmentSuccessResponse {
    /**
    * The number of subscribers matching this segment.
    */
    'subscriber_count'?: number;
    'payload'?: SegmentDetails;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subscriber_count",
            "baseName": "subscriber_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "SegmentDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetSegmentSuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

