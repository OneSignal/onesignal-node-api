/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { PropertiesObject } from './PropertiesObject';
import { SubscriptionObject } from './SubscriptionObject';
import { UserSubscriptionOptions } from './UserSubscriptionOptions';
import { HttpFile } from '../http/http';

export class User {
    'properties'?: PropertiesObject;
    'identity'?: { [key: string]: any; };
    'subscriptions'?: Array<SubscriptionObject>;
    'subscription_options'?: UserSubscriptionOptions;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "PropertiesObject",
            "format": ""
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "Array<SubscriptionObject>",
            "format": ""
        },
        {
            "name": "subscription_options",
            "baseName": "subscription_options",
            "type": "UserSubscriptionOptions",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }

    public constructor() {
    }
}

