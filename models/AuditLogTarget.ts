/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.11.1
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* A resource the action was performed on.
*/
export class AuditLogTarget {
    /**
    * UUID of the resource.
    */
    'id'?: string;
    /**
    * Additional resource-specific data.
    */
    'metadata'?: object;
    /**
    * Display name of the resource. Absent if unavailable.
    */
    'name'?: string;
    /**
    * Resource type (e.g. notification, segment, journey, app).
    */
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuditLogTarget.attributeTypeMap;
    }

    public constructor() {
    }
}

