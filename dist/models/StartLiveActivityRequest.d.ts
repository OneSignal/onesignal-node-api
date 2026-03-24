import { FilterExpression } from './FilterExpression';
import { LanguageStringMap } from './LanguageStringMap';
export declare class StartLiveActivityRequest {
    'name': string;
    'event': StartLiveActivityRequestEventEnum;
    'activity_id': string;
    'event_attributes': object;
    'event_updates': object;
    'contents': LanguageStringMap;
    'headings': LanguageStringMap;
    'stale_date'?: number;
    'priority'?: number;
    'ios_relevance_score'?: number;
    'idempotency_key'?: string;
    'include_aliases'?: {
        [key: string]: Array<string>;
    };
    'include_subscription_ids'?: Array<string>;
    'included_segments'?: Array<string>;
    'excluded_segments'?: Array<string>;
    'filters'?: Array<FilterExpression>;
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
export type StartLiveActivityRequestEventEnum = "start";
