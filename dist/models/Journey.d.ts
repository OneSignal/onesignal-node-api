import { JourneyAudience } from './JourneyAudience';
import { JourneyEarlyExit } from './JourneyEarlyExit';
import { JourneyNode } from './JourneyNode';
import { JourneyReentryRules } from './JourneyReentryRules';
import { JourneySchedule } from './JourneySchedule';
export declare class Journey {
    'id'?: string;
    'app_id'?: string;
    'name'?: string;
    'description'?: string;
    'state'?: JourneyStateEnum;
    'created_at'?: string;
    'updated_at'?: string;
    'started_at'?: string;
    'archived_at'?: string;
    'created_source'?: string;
    'audience'?: JourneyAudience;
    'early_exit'?: JourneyEarlyExit;
    'reentry_rules'?: JourneyReentryRules;
    'schedule'?: JourneySchedule;
    'nodes'?: Array<JourneyNode>;
    'concurrency_key'?: string;
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
export type JourneyStateEnum = "draft" | "scheduled" | "processing" | "active" | "archived";
