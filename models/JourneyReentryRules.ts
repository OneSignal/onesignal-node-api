/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.13.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* Controls whether and how soon a user can re-enter the journey. null means re-entry is not allowed.
*/
export class JourneyReentryRules {
    /**
    * Minimum seconds before a user can re-enter. Must be at least 600 (10 minutes).
    */
    'duration_seconds'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "duration_seconds",
            "baseName": "duration_seconds",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyReentryRules.attributeTypeMap;
    }

    public constructor() {
    }
}

