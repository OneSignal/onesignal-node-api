/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class PlatformDeliveryDataEmailAllOf {
    /**
    * Number of times an email has been opened.
    */
    'opened'?: number;
    /**
    * Number of unique recipients who have opened your email.
    */
    'unique_opens'?: number;
    /**
    * Number of clicked links from your email. This can include the recipient clicking email links multiple times.
    */
    'clicks'?: number;
    /**
    * Number of unique clicks that your recipients have made on links from your email.
    */
    'unique_clicks'?: number;
    /**
    * Number of recipients who registered as a hard or soft bounce and didn\'t receive your email.
    */
    'bounced'?: number;
    /**
    * Number of recipients who reported this email as spam.
    */
    'reported_spam'?: number;
    /**
    * Number of recipients who opted out of your emails using the unsubscribe link in this email.
    */
    'unsubscribed'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "opened",
            "baseName": "opened",
            "type": "number",
            "format": ""
        },
        {
            "name": "unique_opens",
            "baseName": "unique_opens",
            "type": "number",
            "format": ""
        },
        {
            "name": "clicks",
            "baseName": "clicks",
            "type": "number",
            "format": ""
        },
        {
            "name": "unique_clicks",
            "baseName": "unique_clicks",
            "type": "number",
            "format": ""
        },
        {
            "name": "bounced",
            "baseName": "bounced",
            "type": "number",
            "format": ""
        },
        {
            "name": "reported_spam",
            "baseName": "reported_spam",
            "type": "number",
            "format": ""
        },
        {
            "name": "unsubscribed",
            "baseName": "unsubscribed",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlatformDeliveryDataEmailAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

