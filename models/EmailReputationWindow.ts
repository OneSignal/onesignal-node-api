/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* Email reputation rates for a single time window. Each rate is a fraction of successfully delivered emails (for example, `0.02` means 2%). Both rates are `0` when no email was successfully delivered in the window.
*/
export class EmailReputationWindow {
    /**
    * The fraction of successfully delivered emails that hard or soft bounced during the window.
    */
    'bounce_rate'?: number;
    /**
    * The fraction of successfully delivered emails that recipients reported as spam during the window.
    */
    'complaint_rate'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bounce_rate",
            "baseName": "bounce_rate",
            "type": "number",
            "format": "double"
        },
        {
            "name": "complaint_rate",
            "baseName": "complaint_rate",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return EmailReputationWindow.attributeTypeMap;
    }

    public constructor() {
    }
}

