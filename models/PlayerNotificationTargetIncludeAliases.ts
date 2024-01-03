/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.2.2
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class PlayerNotificationTargetIncludeAliases {
    'alias_label'?: Array<string>;
    'external_id'?: Array<string>;
    'onesignal_id'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "alias_label",
            "baseName": "alias_label",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "external_id",
            "baseName": "external_id",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "onesignal_id",
            "baseName": "onesignal_id",
            "type": "Array<string>",
            "format": ""
        }
    ];

    static getAttributeTypeMap() {
        return PlayerNotificationTargetIncludeAliases.attributeTypeMap;
    }

    public constructor() {
    }
}

