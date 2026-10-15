/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { EmailMetrics } from './EmailMetrics';
import { HttpFile } from '../http/http';

/**
* Email metrics for a single time bucket, totaled across the requested inbox providers.
*/
export class EmailProviderMetricsEvent {
    /**
    * The start of the time bucket, aligned to the hour, day, or month in UTC.
    */
    'date'?: string;
    'metrics'?: EmailMetrics;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": "date-time"
        },
        {
            "name": "metrics",
            "baseName": "metrics",
            "type": "EmailMetrics",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailProviderMetricsEvent.attributeTypeMap;
    }

    public constructor() {
    }
}

