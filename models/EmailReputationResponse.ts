/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { EmailReputationWindow } from './EmailReputationWindow';
import { HttpFile } from '../http/http';

/**
* App-wide email bounce and spam complaint rates, broken out by time window. `last_24_hours`, `last_7_days`, and `last_30_days` each hold the bounce and complaint rates for email delivered in that window.
*/
export class EmailReputationResponse {
    'last_24_hours'?: EmailReputationWindow;
    'last_7_days'?: EmailReputationWindow;
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

