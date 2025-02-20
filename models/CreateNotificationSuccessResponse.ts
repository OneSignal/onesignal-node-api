/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { Notification200Errors } from './Notification200Errors';
import { HttpFile } from '../http/http';

export class CreateNotificationSuccessResponse {
    'id'?: string;
    /**
    * Estimated number of subscribers targetted by notification.
    */
    'recipients'?: number;
    'external_id'?: string;
    'errors'?: Notification200Errors;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "number",
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
            "type": "Notification200Errors",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateNotificationSuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

