/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.3.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class TemplateResource {
    'id'?: string;
    'name'?: string;
    'created_at'?: string;
    'updated_at'?: string;
    'channel'?: TemplateResourceChannelEnum;
    /**
    * Rendered content and channel/platform flags for the template.
    */
    'content'?: { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "string",
            "format": "date-time"
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "string",
            "format": "date-time"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "TemplateResourceChannelEnum",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplateResource.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TemplateResourceChannelEnum = "push" | "email" | "sms" ;

