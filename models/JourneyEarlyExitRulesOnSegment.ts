/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.12.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class JourneyEarlyExitRulesOnSegment {
    /**
    * Exit when the user enters any of these segments.
    */
    'included_segment_ids'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "included_segment_ids",
            "baseName": "included_segment_ids",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyEarlyExitRulesOnSegment.attributeTypeMap;
    }

    public constructor() {
    }
}

