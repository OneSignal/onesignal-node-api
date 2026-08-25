/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.13.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* Delivery stats for a message-sending node. Present only on send_push, send_email, send_sms, send_iam, and send_webhook nodes. The keys inside totals depend on the node\'s channel.
*/
export class JourneyMessageStats {
    /**
    * All-time totals for this node, keyed by channel-specific stat name.
    */
    'totals'?: { [key: string]: number; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totals",
            "baseName": "totals",
            "type": "{ [key: string]: number; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyMessageStats.attributeTypeMap;
    }

    public constructor() {
    }
}

