/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class InlineResponse4002 {
    'erorrs'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "erorrs",
            "baseName": "erorrs",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse4002.attributeTypeMap;
    }
    
    public constructor() {
    }
}

