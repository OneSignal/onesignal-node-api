/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* The user or service that performed the action. Absent if the actor is unknown.
*/
export class AuditLogActor {
    /**
    * Email address of the actor. Absent if unavailable.
    */
    'email'?: string;
    /**
    * UUID of the actor.
    */
    'id'?: string;
    /**
    * Additional actor-specific data.
    */
    'metadata'?: object;
    /**
    * Display name of the actor. Absent if unavailable.
    */
    'name'?: string;
    /**
    * Actor type (e.g. member, api_key, system).
    */
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
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
        return AuditLogActor.attributeTypeMap;
    }

    public constructor() {
    }
}

