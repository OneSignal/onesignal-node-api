import { DuplicateJourneyOverrides } from './DuplicateJourneyOverrides';
export declare class DuplicateJourneyRequest {
    'overrides'?: DuplicateJourneyOverrides;
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
