import { FilterExpressions } from './FilterExpressions';
export declare class Segment {
    'id'?: string;
    'name': string;
    'filters': Array<FilterExpressions>;
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
