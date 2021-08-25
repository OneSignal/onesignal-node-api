/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { DeliveryData } from './DeliveryData';
import { HttpFile } from '../http/http';

/**
* Hash of delivery statistics broken out by target device platform.
*/
export class PlatformDeliveryData {
    'edge_web_push'?: DeliveryData;
    'chrome_web_push'?: DeliveryData;
    'firefox_web_push'?: DeliveryData;
    'safari_web_push'?: DeliveryData;
    'android'?: DeliveryData;
    'ios'?: DeliveryData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "edge_web_push",
            "baseName": "edge_web_push",
            "type": "DeliveryData",
            "format": ""
        },
        {
            "name": "chrome_web_push",
            "baseName": "chrome_web_push",
            "type": "DeliveryData",
            "format": ""
        },
        {
            "name": "firefox_web_push",
            "baseName": "firefox_web_push",
            "type": "DeliveryData",
            "format": ""
        },
        {
            "name": "safari_web_push",
            "baseName": "safari_web_push",
            "type": "DeliveryData",
            "format": ""
        },
        {
            "name": "android",
            "baseName": "android",
            "type": "DeliveryData",
            "format": ""
        },
        {
            "name": "ios",
            "baseName": "ios",
            "type": "DeliveryData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlatformDeliveryData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

