export declare class OutcomeData {
    'id': string;
    'value': number;
    'aggregation': OutcomeDataAggregationEnum;
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
export declare type OutcomeDataAggregationEnum = "sum" | "count";
