import { JourneyEventAttribute } from './JourneyEventAttribute';
export declare class JourneyAudience {
    'kind': JourneyAudienceKindEnum;
    'included_segment_ids'?: Array<string>;
    'excluded_segment_ids'?: Array<string>;
    'future_additions_only'?: boolean;
    'name'?: string;
    'attributes'?: Array<Array<JourneyEventAttribute>>;
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
export type JourneyAudienceKindEnum = "segment" | "event_trigger";
