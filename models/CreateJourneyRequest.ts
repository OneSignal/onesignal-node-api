/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.13.0
 * Contact: devrel@onesignal.com
 */

import { JourneyAudience } from './JourneyAudience';
import { JourneyEarlyExit } from './JourneyEarlyExit';
import { JourneyNode } from './JourneyNode';
import { JourneyReentryRules } from './JourneyReentryRules';
import { JourneySchedule } from './JourneySchedule';
import { HttpFile } from '../http/http';

/**
* Writable fields for Create journey. Journeys are always created in the draft state. Server-controlled fields such as state or id are rejected.
*/
export class CreateJourneyRequest {
    /**
    * Journey name, up to 300 characters.
    */
    'name': string;
    /**
    * Optional journey description, up to 1024 characters.
    */
    'description'?: string;
    'audience'?: JourneyAudience;
    'early_exit'?: JourneyEarlyExit;
    'reentry_rules'?: JourneyReentryRules;
    'schedule'?: JourneySchedule;
    /**
    * Ordered list of journey nodes. Server-assigned id fields are rejected on create.
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
        return CreateJourneyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

