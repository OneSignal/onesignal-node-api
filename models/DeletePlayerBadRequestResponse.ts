/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.1
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class DeletePlayerBadRequestResponse {
    'erorrs'?: Array<boolean>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "erorrs",
            "baseName": "erorrs",
            "type": "Array<boolean>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeletePlayerBadRequestResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

