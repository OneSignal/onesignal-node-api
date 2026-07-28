import { FilterExpression } from './FilterExpression';
export declare class UpdateSegmentRequest {
    'name': string;
    'description'?: string;
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
