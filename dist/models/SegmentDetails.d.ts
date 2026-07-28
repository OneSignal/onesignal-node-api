import { FilterExpression } from './FilterExpression';
export declare class SegmentDetails {
    'id'?: string;
    'name'?: string;
    'description'?: string;
    'created_at'?: number;
    'source'?: SegmentDetailsSourceEnum;
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
export type SegmentDetailsSourceEnum = "default" | "custom" | "quickstart";
