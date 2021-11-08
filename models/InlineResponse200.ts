/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class InlineResponse200 {
    'id': string;
    /**
    * Estimated number of subscribers targetted by notification.
    */
    'recipients': number;
    'external_id'?: string;
    'errors'?: any | Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "number",
            "format": ""
        },
        {
            "name": "external_id",
            "baseName": "external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "any | Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse200.attributeTypeMap;
    }
    
    public constructor() {
    }
}

