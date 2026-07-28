import { SegmentDetails } from './SegmentDetails';
export declare class GetSegmentSuccessResponse {
    'subscriber_count'?: number;
    'payload'?: SegmentDetails;
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
