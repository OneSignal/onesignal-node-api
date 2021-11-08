/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class UpdatePlayerTagsRequestBody {
    /**
    * Custom tags for the device record.  Only support string key value pairs.  Does not support arrays or other nested objects.  Example `{\"foo\":\"bar\",\"this\":\"that\"}`. Limitations: - 100 tags per call - Android SDK users: tags cannot be removed or changed via API if set through SDK sendTag methods. Recommended to only tag devices with 1 kilobyte of ata Please consider using your own Database to save more than 1 kilobyte of data.  See: Internal Database & CRM 
    */
    'tags'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdatePlayerTagsRequestBody.attributeTypeMap;
    }
    
    public constructor() {
    }
}

