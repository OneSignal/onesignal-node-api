/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.1
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class BeginLiveActivitySuccessResponse {
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
        return BeginLiveActivitySuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
