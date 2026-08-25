/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.13.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class JourneyTimePoint {
    /**
    * Hour of day, 0-23.
    */
    'hour'?: number;
    /**
    * Minute of hour, 0-59. Defaults to 0.
    */
    'minute'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hour",
            "baseName": "hour",
            "type": "number",
            "format": ""
        },
        {
            "name": "minute",
            "baseName": "minute",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyTimePoint.attributeTypeMap;
    }

    public constructor() {
    }
}

