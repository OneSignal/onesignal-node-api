/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class DeliveryData {
    /**
    * Number of messages delivered to push servers, mobile carriers, or email service providers.
    */
    'successful'?: number;
    /**
    * Number of messages sent to unsubscribed devices.
    */
    'failed'?: number;
    /**
    * Number of errors reported.
    */
    'errored'?: number;
    /**
    * Number of messages that were clicked.
    */
    'converted'?: number;
    /**
    * Number of devices that received the message.
    */
    'received'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "successful",
            "baseName": "successful",
            "type": "number",
            "format": ""
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number",
            "format": ""
        },
        {
            "name": "errored",
            "baseName": "errored",
            "type": "number",
            "format": ""
        },
        {
            "name": "converted",
            "baseName": "converted",
            "type": "number",
            "format": ""
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeliveryData.attributeTypeMap;
    }

    public constructor() {
    }
}

