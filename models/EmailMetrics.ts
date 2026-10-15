/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* Email delivery and engagement counts for the reporting window.
*/
export class EmailMetrics {
    /**
    * The number of emails sent.
    */
    'sent'?: number;
    /**
    * The number of emails successfully delivered.
    */
    'delivered'?: number;
    /**
    * The total number of email opens, including repeat opens by the same recipient.
    */
    'opened'?: number;
    /**
    * The total number of email link clicks, including repeat clicks by the same recipient.
    */
    'clicked'?: number;
    /**
    * The number of emails opened at least once.
    */
    'unique_opened'?: number;
    /**
    * The number of emails with at least one link click.
    */
    'unique_clicked'?: number;
    /**
    * The number of emails that failed to send.
    */
    'failed'?: number;
    /**
    * The number of emails that bounced.
    */
    'bounced'?: number;
    /**
    * The number of emails that recipients reported as spam.
    */
    'complained'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sent",
            "baseName": "sent",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "delivered",
            "baseName": "delivered",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "opened",
            "baseName": "opened",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "clicked",
            "baseName": "clicked",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "unique_opened",
            "baseName": "unique_opened",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "unique_clicked",
            "baseName": "unique_clicked",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "bounced",
            "baseName": "bounced",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "complained",
            "baseName": "complained",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return EmailMetrics.attributeTypeMap;
    }

    public constructor() {
    }
}

