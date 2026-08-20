import { JourneyListAudience } from './JourneyListAudience';
import { JourneyReentryRules } from './JourneyReentryRules';
import { JourneySchedule } from './JourneySchedule';
export declare class JourneyListItem {
    'id'?: string;
    'app_id'?: string;
    'name'?: string;
    'state'?: JourneyListItemStateEnum;
    'created_at'?: string;
    'updated_at'?: string;
    'started_at'?: string;
    'archived_at'?: string;
    'created_source'?: string;
    'schedule'?: JourneySchedule;
    'audience'?: JourneyListAudience;
    'reentry_rules'?: JourneyReentryRules;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export type JourneyListItemStateEnum = "draft" | "scheduled" | "processing" | "active" | "archived";
