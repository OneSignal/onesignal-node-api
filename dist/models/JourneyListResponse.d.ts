import { JourneyListItem } from './JourneyListItem';
export declare class JourneyListResponse {
    'journeys'?: Array<JourneyListItem>;
    'has_more'?: boolean;
    'next_cursor'?: string;
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
