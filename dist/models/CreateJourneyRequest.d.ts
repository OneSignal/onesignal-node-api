import { JourneyAudience } from './JourneyAudience';
import { JourneyEarlyExit } from './JourneyEarlyExit';
import { JourneyNode } from './JourneyNode';
import { JourneyReentryRules } from './JourneyReentryRules';
import { JourneySchedule } from './JourneySchedule';
export declare class CreateJourneyRequest {
    'name': string;
    'description'?: string;
    'audience'?: JourneyAudience;
    'early_exit'?: JourneyEarlyExit;
    'reentry_rules'?: JourneyReentryRules;
    'schedule'?: JourneySchedule;
    'nodes'?: Array<JourneyNode>;
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
