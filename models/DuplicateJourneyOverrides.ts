/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { JourneyAudience } from './JourneyAudience';
import { JourneyEarlyExit } from './JourneyEarlyExit';
import { JourneyNode } from './JourneyNode';
import { JourneyReentryRules } from './JourneyReentryRules';
import { JourneySchedule } from './JourneySchedule';
import { HttpFile } from '../http/http';

/**
* Journey fields to apply over the copy as a JSON Merge Patch (RFC 7396). Accepts the same writable fields as Create journey, and none of them are required. The patch merges into the copy, not the source. The copy starts without a schedule, so an omitted schedule leaves the copy unscheduled. An object merges key by key. A null value clears a nullable field. An array such as nodes replaces the copied array. Server-controlled fields such as id or state are rejected.
*/
export class DuplicateJourneyOverrides {
    /**
    * Name for the copy, up to 300 characters. If you omit it, the copy takes the name of the source plus \" (Copy)\".
    */
    'name'?: string;
    /**
    * Optional journey description, up to 1024 characters. If you omit it, the copy takes the description of the source. Send null to clear it.
    */
    'description'?: string;
    'audience'?: JourneyAudience;
    'early_exit'?: JourneyEarlyExit;
    'reentry_rules'?: JourneyReentryRules;
    'schedule'?: JourneySchedule;
    /**
    * Full ordered list of nodes. Replaces the copied graph. Server-assigned id fields are rejected.
    */
    'nodes'?: Array<JourneyNode>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "audience",
            "baseName": "audience",
            "type": "JourneyAudience",
            "format": ""
        },
        {
            "name": "early_exit",
            "baseName": "early_exit",
            "type": "JourneyEarlyExit",
            "format": ""
        },
        {
            "name": "reentry_rules",
            "baseName": "reentry_rules",
            "type": "JourneyReentryRules",
            "format": ""
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "JourneySchedule",
            "format": ""
        },
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "Array<JourneyNode>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DuplicateJourneyOverrides.attributeTypeMap;
    }

    public constructor() {
    }
}

