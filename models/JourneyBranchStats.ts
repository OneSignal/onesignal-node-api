/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* Stats for a single branch of a branching node. Keyed in the response by the branch\'s server-assigned id.
*/
export class JourneyBranchStats {
    /**
    * Users who took this branch.
    */
    'completed'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "completed",
            "baseName": "completed",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyBranchStats.attributeTypeMap;
    }

    public constructor() {
    }
}

