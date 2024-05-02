/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.0-alpha-01
 * Contact: devrel@onesignal.com
 */

import { Subscription } from './Subscription';
import { HttpFile } from '../http/http';

export class SubscriptionBody {
    'subscription'?: Subscription;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "Subscription",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionBody.attributeTypeMap;
    }

    public constructor() {
    }
}

