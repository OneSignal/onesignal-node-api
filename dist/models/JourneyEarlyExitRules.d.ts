import { JourneyEarlyExitRulesOnEvent } from './JourneyEarlyExitRulesOnEvent';
import { JourneyEarlyExitRulesOnSegment } from './JourneyEarlyExitRulesOnSegment';
export declare class JourneyEarlyExitRules {
    'on_segment'?: JourneyEarlyExitRulesOnSegment;
    'when_not_in_audience'?: boolean;
    'on_session'?: boolean;
    'on_event'?: JourneyEarlyExitRulesOnEvent;
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
