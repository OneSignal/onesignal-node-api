/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.0-alpha-01
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class RateLimitError {
    'errors'?: Array<string>;
    'limit'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RateLimitError.attributeTypeMap;
    }

    public constructor() {
    }
}

