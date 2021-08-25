/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class InlineResponse4001 {
    'success'?: string;
    'errors'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse4001.attributeTypeMap;
    }
    
    public constructor() {
    }
}

