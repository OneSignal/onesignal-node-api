export declare class JourneyListAudience {
    'kind'?: JourneyListAudienceKindEnum;
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
export type JourneyListAudienceKindEnum = "segment" | "event_trigger";
