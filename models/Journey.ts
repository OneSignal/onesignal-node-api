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
* Full journey representation returned by the detail, create, and update endpoints.
*/
export class Journey {
    /**
    * Journey UUID. Read-only.
    */
    'id'?: string;
    /**
    * UUID of the app the journey belongs to. Read-only.
    */
    'app_id'?: string;
    /**
    * Journey name, up to 300 characters.
    */
    'name'?: string;
    /**
    * Journey description, up to 1024 characters. Defaults to an empty string.
    */
    'description'?: string;
    /**
    * Journey state. New journeys are created as draft. processing is transient while activation is in progress. archived is a journey that has been stopped. Change it through the state field on Update journey.
    */
    'state'?: JourneyStateEnum;
    /**
    * ISO 8601 creation time. Read-only.
    */
    'created_at'?: string;
    /**
    * ISO 8601 last-update time. Read-only.
    */
    'updated_at'?: string;
    /**
    * ISO 8601 time the journey was activated, or null. Read-only. May stay null briefly after you set state to active: activation is enqueued, and started_at populates once the journey finishes processing.
    */
    'started_at'?: string;
    /**
    * ISO 8601 time the journey was archived, or null. Read-only.
    */
    'archived_at'?: string;
    /**
    * Origin of the journey, for example public_api or dashboard. Read-only.
    */
    'created_source'?: string;
    'audience'?: JourneyAudience;
    'early_exit'?: JourneyEarlyExit;
    'reentry_rules'?: JourneyReentryRules;
    'schedule'?: JourneySchedule;
    /**
    * Ordered list of journey nodes.
    */
    'nodes'?: Array<JourneyNode>;
    /**
    * Opaque optimistic-concurrency token. Read-only. Pass it back on update to guard against overwriting a concurrent change (409). Send it back exactly as read; do not construct or parse it.
    */
    'concurrency_key'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        },
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
            "name": "state",
            "baseName": "state",
            "type": "JourneyStateEnum",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "started_at",
            "baseName": "started_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "archived_at",
            "baseName": "archived_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "created_source",
            "baseName": "created_source",
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
            "name": "concurrency_key",
            "baseName": "concurrency_key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Journey.attributeTypeMap;
    }

    public constructor() {
    }
}


export type JourneyStateEnum = "draft" | "scheduled" | "processing" | "active" | "archived" ;

