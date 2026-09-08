/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { EmailReputationWindow } from './EmailReputationWindow';
import { HttpFile } from '../http/http';

/**
* App-wide email bounce and spam complaint rates, broken out by time window.
*/
export class EmailReputationResponse {
    /**
    * Bounce and complaint rates for email delivered over the last 24 hours.
    */
    'last_24_hours'?: EmailReputationWindow;
    /**
    * Bounce and complaint rates for email delivered over the last 7 days.
    */
    'last_7_days'?: EmailReputationWindow;
    /**
    * Bounce and complaint rates for email delivered over the last 30 days.
    */
    'last_30_days'?: EmailReputationWindow;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "last_24_hours",
            "baseName": "last_24_hours",
            "type": "EmailReputationWindow",
            "format": ""
        },
        {
            "name": "last_7_days",
            "baseName": "last_7_days",
            "type": "EmailReputationWindow",
            "format": ""
        },
        {
            "name": "last_30_days",
            "baseName": "last_30_days",
            "type": "EmailReputationWindow",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailReputationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

