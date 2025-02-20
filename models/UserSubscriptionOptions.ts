/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class UserSubscriptionOptions {
    'retain_previous_owner'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "retain_previous_owner",
            "baseName": "retain_previous_owner",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserSubscriptionOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

