export declare class Filter {
    'field': string;
    'key'?: string;
    'value'?: string;
    'relation': FilterRelationEnum;
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
export declare type FilterRelationEnum = "&gt;" | "&lt;" | "&#x3D;" | "!&#x3D;" | "exists" | "not_exists" | "time_elapsed_gt" | "time_elapsed_lt";
