/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.2.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class UpdateLiveActivitySuccessResponse {
    'id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateLiveActivitySuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

