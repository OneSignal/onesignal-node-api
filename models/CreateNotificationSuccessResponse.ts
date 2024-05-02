/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.0-alpha-01
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class CreateNotificationSuccessResponse {
    'id'?: string;
    'external_id'?: string;
    /**
    * Errors include the identifiers that are invalid, or that there are no subscribers.
    */
    'errors'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "external_id",
            "baseName": "external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateNotificationSuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

