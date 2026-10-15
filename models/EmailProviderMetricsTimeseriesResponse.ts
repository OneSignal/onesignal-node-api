/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { EmailProviderMetricsEvent } from './EmailProviderMetricsEvent';
import { HttpFile } from '../http/http';

/**
* Email metrics for a sending domain over time.
*/
export class EmailProviderMetricsTimeseriesResponse {
    /**
    * One entry for every time bucket in the reporting window, oldest first. Buckets with no email activity are included with all metrics set to `0`. Empty when the domain is not found for the app or is not currently active for sending.
    */
    'events'?: Array<EmailProviderMetricsEvent>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<EmailProviderMetricsEvent>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailProviderMetricsTimeseriesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

