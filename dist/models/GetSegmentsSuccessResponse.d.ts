import { SegmentData } from './SegmentData';
export declare class GetSegmentsSuccessResponse {
    'total_count'?: number;
    'offset'?: number;
    'limit'?: number;
    'segments'?: Array<SegmentData>;
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
