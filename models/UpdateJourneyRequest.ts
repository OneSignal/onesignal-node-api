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
* Partial update applied with JSON Merge Patch (RFC 7396). Send only the fields you want to change. A null value clears a nullable field. Arrays such as nodes are replaced wholesale.
*/
export class UpdateJourneyRequest {
    /**
    * Journey name.
    */
    'name'?: string;
    /**
    * Journey description. Send null to clear it.
    */
    'description'?: string;
    'audience'?: JourneyAudience;
    'early_exit'?: JourneyEarlyExit;
    'reentry_rules'?: JourneyReentryRules;
    'schedule'?: JourneySchedule;
    /**
    * Full ordered list of nodes, which replaces the existing graph wholesale. Preserve each node\'s server-assigned id from a prior fetch to keep in-flight users on that node; omit id to add a new node.
    */
    'nodes'?: Array<JourneyNode>;
    /**
    * Target state. Set active to activate a draft journey, or scheduled together with a future schedule.start_at to activate it later. Set archived to stop a running journey; archiving is permanent. Only scheduled and processing journeys can return to draft.
    */
    'state'?: UpdateJourneyRequestStateEnum;
    /**
    * Optional optimistic-concurrency token. Pass the concurrency_key from a prior fetch to reject the update with 409 if the journey changed. Omit to skip the check.
    */
    'concurrency_key'?: string;

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
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "UpdateJourneyRequestStateEnum",
            "format": ""
        },
        {
            "name": "concurrency_key",
            "baseName": "concurrency_key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateJourneyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UpdateJourneyRequestStateEnum = "draft" | "scheduled" | "active" | "archived" ;

