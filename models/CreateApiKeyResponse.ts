/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.3.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class CreateApiKeyResponse {
    'token_id'?: string;
    'formatted_token'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "token_id",
            "baseName": "token_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "formatted_token",
            "baseName": "formatted_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateApiKeyResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

