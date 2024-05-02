/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.0-alpha-01
 * Contact: devrel@onesignal.com
 */

import { PropertiesObject } from './PropertiesObject';
import { Subscription } from './Subscription';
import { HttpFile } from '../http/http';

export class User {
    'properties'?: PropertiesObject;
    'identity'?: { [key: string]: string; };
    'subscriptions'?: Array<Subscription>;

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
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "Array<Subscription>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }

    public constructor() {
    }
}

