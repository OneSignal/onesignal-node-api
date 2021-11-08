/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class Purchase {
    /**
    * The unique identifier of the purchased item.
    */
    'sku': string;
    /**
    * The amount, in USD, spent purchasing the item.
    */
    'amount': number;
    /**
    * The 3-letter ISO 4217 currency code. Required for correct storage and conversion of amount.
    */
    'iso': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sku",
            "baseName": "sku",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "iso",
            "baseName": "iso",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Purchase.attributeTypeMap;
    }
    
    public constructor() {
    }
}

