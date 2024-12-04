/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.3.0
 * Contact: devrel@onesignal.com
 */

import { SubscriptionObject } from './SubscriptionObject';
import { HttpFile } from '../http/http';

export class CreateSubscriptionRequestBody {
    'subscription'?: SubscriptionObject;
    'retain_previous_owner'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "SubscriptionObject",
            "format": ""
        },
        {
            "name": "retain_previous_owner",
            "baseName": "retain_previous_owner",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateSubscriptionRequestBody.attributeTypeMap;
    }

    public constructor() {
    }
}

