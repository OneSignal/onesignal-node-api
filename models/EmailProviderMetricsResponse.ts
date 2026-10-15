/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { EmailProviderMetrics } from './EmailProviderMetrics';
import { HttpFile } from '../http/http';

/**
* Email metrics for a sending domain, broken down by inbox provider.
*/
export class EmailProviderMetricsResponse {
    /**
    * One entry per inbox provider that received email from the domain during the reporting window. Empty when the domain is not found for the app or is not currently active for sending.
    */
    'providers'?: Array<EmailProviderMetrics>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "providers",
            "baseName": "providers",
            "type": "Array<EmailProviderMetrics>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailProviderMetricsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

