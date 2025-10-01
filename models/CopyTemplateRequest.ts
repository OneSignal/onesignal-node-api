/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.3.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class CopyTemplateRequest {
    /**
    * Destination OneSignal App ID in UUID v4 format.
    */
    'target_app_id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "target_app_id",
            "baseName": "target_app_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CopyTemplateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

