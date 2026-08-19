/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.12.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* Optional expiration timer. null waits indefinitely.
*/
export class JourneyWaitUntilExpiration {
    /**
    * Seconds to wait before the timer fires. Minimum 60, maximum 31556952 (1 year).
    */
    'duration_seconds'?: number;
    /**
    * When true, the user exits the journey when the timer fires; when false, the user continues to convergence.
    */
    'exits'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "duration_seconds",
            "baseName": "duration_seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "exits",
            "baseName": "exits",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyWaitUntilExpiration.attributeTypeMap;
    }

    public constructor() {
    }
}

