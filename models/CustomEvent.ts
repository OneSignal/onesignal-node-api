/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.3.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class CustomEvent {
    /**
    * The identifier or name of the event. Maximum 128 characters.
    */
    'name': string;
    /**
    * The external ID of the user targeted for the event. Either the user\'s External ID or OneSignal ID is required.
    */
    'external_id'?: string;
    /**
    * The OneSignal ID of the user targeted for the event. Either the user\'s External ID or OneSignal ID is required.
    */
    'onesignal_id'?: string;
    /**
    * Time the event occurred as an ISO8601 formatted string. Defaults to now if not included or past date provided.
    */
    'timestamp'?: string;
    /**
    * Properties or data related to the event, like {\"geography\": \"USA\"}
    */
    'payload'?: { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "onesignal_id",
            "baseName": "onesignal_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string",
            "format": "date-time"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomEvent.attributeTypeMap;
    }

    public constructor() {
    }
}

