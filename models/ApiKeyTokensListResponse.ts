/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.3.0
 * Contact: devrel@onesignal.com
 */

import { ApiKeyToken } from './ApiKeyToken';
import { HttpFile } from '../http/http';

export class ApiKeyTokensListResponse {
    'tokens'?: Array<ApiKeyToken>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<ApiKeyToken>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiKeyTokensListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

