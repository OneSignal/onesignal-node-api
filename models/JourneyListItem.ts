/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.13.0
 * Contact: devrel@onesignal.com
 */

import { JourneyListAudience } from './JourneyListAudience';
import { JourneyReentryRules } from './JourneyReentryRules';
import { JourneySchedule } from './JourneySchedule';
import { HttpFile } from '../http/http';

/**
* Summary journey representation returned by the list endpoint. Excludes description, nodes, early-exit configuration, and concurrency_key.
*/
export class JourneyListItem {
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
    * Journey state. New journeys are created as draft. processing is transient while activation is in progress. archived is a journey that has been stopped. Change it through the state field on Update journey.
    */
    'state'?: JourneyListItemStateEnum;
    /**
    * ISO 8601 creation time. Read-only.
    */
    'created_at'?: string;
    /**
    * ISO 8601 last-update time. Read-only.
    */
    'updated_at'?: string;
    /**
    * ISO 8601 time the journey was activated, or null. Read-only.
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
    'schedule'?: JourneySchedule;
    'audience'?: JourneyListAudience;
    'reentry_rules'?: JourneyReentryRules;

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
            "name": "state",
            "baseName": "state",
            "type": "JourneyListItemStateEnum",
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
            "name": "schedule",
            "baseName": "schedule",
            "type": "JourneySchedule",
            "format": ""
        },
        {
            "name": "audience",
            "baseName": "audience",
            "type": "JourneyListAudience",
            "format": ""
        },
        {
            "name": "reentry_rules",
            "baseName": "reentry_rules",
            "type": "JourneyReentryRules",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyListItem.attributeTypeMap;
    }

    public constructor() {
    }
}


export type JourneyListItemStateEnum = "draft" | "scheduled" | "processing" | "active" | "archived" ;

