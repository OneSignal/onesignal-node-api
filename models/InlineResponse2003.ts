/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class InlineResponse2003 {
    'in_app_messages'?: Array<object>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "in_app_messages",
            "baseName": "in_app_messages",
            "type": "Array<object>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2003.attributeTypeMap;
    }

    public constructor() {
    }
}

