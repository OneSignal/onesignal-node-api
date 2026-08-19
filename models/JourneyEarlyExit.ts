/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.12.0
 * Contact: devrel@onesignal.com
 */

import { JourneyEarlyExitRules } from './JourneyEarlyExitRules';
import { HttpFile } from '../http/http';

/**
* Conditions that remove a user from the journey before it completes. At least one rule must be set under rules. Send null to remove early exit entirely.
*/
export class JourneyEarlyExit {
    'rules'?: JourneyEarlyExitRules;
    /**
    * Tag key-value pairs applied when a user exits early.
    */
    'tag_on_early_exit'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rules",
            "baseName": "rules",
            "type": "JourneyEarlyExitRules",
            "format": ""
        },
        {
            "name": "tag_on_early_exit",
            "baseName": "tag_on_early_exit",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyEarlyExit.attributeTypeMap;
    }

    public constructor() {
    }
}

