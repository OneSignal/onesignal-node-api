/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class BeginLiveActivityRequest {
    'push_token': string;
    'subscription_id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "push_token",
            "baseName": "push_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscription_id",
            "baseName": "subscription_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BeginLiveActivityRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

