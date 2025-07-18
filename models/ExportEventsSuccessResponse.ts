/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.2.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class ExportEventsSuccessResponse {
    'csv_file_url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "csv_file_url",
            "baseName": "csv_file_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExportEventsSuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

