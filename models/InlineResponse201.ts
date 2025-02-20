/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { SubscriptionObject } from './SubscriptionObject';
import { HttpFile } from '../http/http';

export class InlineResponse201 {
    'subscription'?: SubscriptionObject;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "SubscriptionObject",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse201.attributeTypeMap;
    }

    public constructor() {
    }
}

