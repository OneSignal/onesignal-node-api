export declare class FilterExpression {
    'field'?: string;
    'key'?: string;
    'value'?: string;
    'hours_ago'?: string;
    'radius'?: number;
    'lat'?: number;
    'long'?: number;
    'relation'?: FilterExpressionRelationEnum;
    'operator'?: FilterExpressionOperatorEnum;
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
export type FilterExpressionRelationEnum = ">" | "<" | "=" | "!=" | "exists" | "not_exists" | "time_elapsed_gt" | "time_elapsed_lt";
export type FilterExpressionOperatorEnum = "OR" | "AND";
