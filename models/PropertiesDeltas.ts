/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { Purchase } from './Purchase';
import { HttpFile } from '../http/http';

export class PropertiesDeltas {
    'session_time'?: number;
    'session_count'?: number;
    'purchases'?: Array<Purchase>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "session_time",
            "baseName": "session_time",
            "type": "number",
            "format": ""
        },
        {
            "name": "session_count",
            "baseName": "session_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "purchases",
            "baseName": "purchases",
            "type": "Array<Purchase>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PropertiesDeltas.attributeTypeMap;
    }

    public constructor() {
    }
}

