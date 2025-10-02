/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.3.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class StartLiveActivitySuccessResponse {
    'notification_id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "notification_id",
            "baseName": "notification_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StartLiveActivitySuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

