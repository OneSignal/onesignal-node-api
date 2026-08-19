/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.12.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class UpdateSegmentSuccessResponse {
    /**
    * true if the segment was updated successfully, false otherwise.
    */
    'success'?: boolean;
    /**
    * UUID of the updated segment.
    */
    'id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateSegmentSuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

