/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.2.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class TransferSubscriptionRequestBody {
    'identity'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "identity",
            "baseName": "identity",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransferSubscriptionRequestBody.attributeTypeMap;
    }

    public constructor() {
    }
}

