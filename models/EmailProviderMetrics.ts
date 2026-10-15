/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { EmailMetrics } from './EmailMetrics';
import { HttpFile } from '../http/http';

/**
* Email metrics for a single inbox provider.
*/
export class EmailProviderMetrics {
    /**
    * The inbox provider. Known values include `apple`, `att`, `canadian`, `chinese`, `comcast`, `free_fr`, `french`, `german`, `gmail`, `google_workspace`, `googlers`, `inbox_lv`, `italian`, `japanese`, `outlook_365`, `outlook_eu`, `outlook_us`, `proton`, `rackspace`, `russian`, `uk`, `united_online`, `yahoo_eu`, `yahoo_us`, `other_eu`, `other_us`, and `other`. New providers may be added over time.
    */
    'provider'?: string;
    'metrics'?: EmailMetrics;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "metrics",
            "baseName": "metrics",
            "type": "EmailMetrics",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailProviderMetrics.attributeTypeMap;
    }

    public constructor() {
    }
}

