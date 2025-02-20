/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class PlatformDeliveryDataSmsAllOf {
    /**
    * Number of messages reported as delivered successfully by the SMS service provider.
    */
    'provider_successful'?: number;
    /**
    * Number of recipients who didn\'t receive your message as reported by the SMS service provider.
    */
    'provider_failed'?: number;
    /**
    * Number of errors reported by the SMS service provider.
    */
    'provider_errored'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider_successful",
            "baseName": "provider_successful",
            "type": "number",
            "format": ""
        },
        {
            "name": "provider_failed",
            "baseName": "provider_failed",
            "type": "number",
            "format": ""
        },
        {
            "name": "provider_errored",
            "baseName": "provider_errored",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlatformDeliveryDataSmsAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

