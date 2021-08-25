/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* Channel: Push Notifications Platform: Android Allowing setting a background image for the notification. This is a JSON object containing the following keys. See our Background Image documentation for image sizes. 
*/
export class NotificationAllOfAndroidBackgroundLayout {
    /**
    * Asset file, android resource name, or URL to remote image.
    */
    'image'?: string;
    /**
    * Title text color ARGB Hex format. Example(Blue) \"FF0000FF\".
    */
    'headings_color'?: string;
    /**
    * Body text color ARGB Hex format. Example(Red) \"FFFF0000\".
    */
    'contents_color'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "headings_color",
            "baseName": "headings_color",
            "type": "string",
            "format": ""
        },
        {
            "name": "contents_color",
            "baseName": "contents_color",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotificationAllOfAndroidBackgroundLayout.attributeTypeMap;
    }
    
    public constructor() {
    }
}

