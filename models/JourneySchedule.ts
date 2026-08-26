/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* Optional future start and/or stop time. null means no scheduled activation.
*/
export class JourneySchedule {
    /**
    * ISO 8601 start time. Use UTC (Z or +00:00). Must be at least 5 minutes in the future.
    */
    'start_at'?: string;
    /**
    * ISO 8601 stop time. Use UTC (Z or +00:00). Must be in the future and later than start_at.
    */
    'stop_at'?: string;
    /**
    * Read-only. Present when a scheduling error occurred.
    */
    'error'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "start_at",
            "baseName": "start_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "stop_at",
            "baseName": "stop_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneySchedule.attributeTypeMap;
    }

    public constructor() {
    }
}

