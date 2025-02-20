/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { Notification200Errors } from './Notification200Errors';
import { HttpFile } from '../http/http';

export class UpdateLiveActivitySuccessResponse {
    'notification_id'?: string;
    'errors'?: Notification200Errors;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "notification_id",
            "baseName": "notification_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Notification200Errors",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateLiveActivitySuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

