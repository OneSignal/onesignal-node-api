/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.13.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* Request context at the time of the event. Absent if context was not captured.
*/
export class AuditLogContext {
    /**
    * Country code derived from the request IP.
    */
    'country'?: string;
    /**
    * IP address the request originated from.
    */
    'ip'?: string;
    /**
    * Additional context-specific data.
    */
    'metadata'?: object;
    /**
    * User agent of the client that made the request.
    */
    'user_agent'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "ip",
            "baseName": "ip",
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
            "name": "user_agent",
            "baseName": "user_agent",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuditLogContext.attributeTypeMap;
    }

    public constructor() {
    }
}

