/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class DeliveryData {
    'successful'?: number;
    'failed'?: number;
    'errored'?: number;
    'converted'?: number;
    'received'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "successful",
            "baseName": "successful",
            "type": "number",
            "format": ""
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number",
            "format": ""
        },
        {
            "name": "errored",
            "baseName": "errored",
            "type": "number",
            "format": ""
        },
        {
            "name": "converted",
            "baseName": "converted",
            "type": "number",
            "format": ""
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeliveryData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

