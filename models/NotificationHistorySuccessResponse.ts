/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class NotificationHistorySuccessResponse {
    'success'?: boolean;
    'destination_url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "destination_url",
            "baseName": "destination_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotificationHistorySuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

