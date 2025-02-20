/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { Purchase } from './Purchase';
import { HttpFile } from '../http/http';

export class PropertiesObject {
    'tags'?: { [key: string]: any; };
    'language'?: string;
    'timezone_id'?: string;
    'lat'?: number;
    'long'?: number;
    'country'?: string;
    'first_active'?: number;
    'last_active'?: number;
    'amount_spent'?: number;
    'purchases'?: Array<Purchase>;
    'ip'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "timezone_id",
            "baseName": "timezone_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lat",
            "baseName": "lat",
            "type": "number",
            "format": ""
        },
        {
            "name": "long",
            "baseName": "long",
            "type": "number",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "first_active",
            "baseName": "first_active",
            "type": "number",
            "format": ""
        },
        {
            "name": "last_active",
            "baseName": "last_active",
            "type": "number",
            "format": ""
        },
        {
            "name": "amount_spent",
            "baseName": "amount_spent",
            "type": "number",
            "format": ""
        },
        {
            "name": "purchases",
            "baseName": "purchases",
            "type": "Array<Purchase>",
            "format": ""
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PropertiesObject.attributeTypeMap;
    }

    public constructor() {
    }
}

