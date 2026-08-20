export declare class JourneyEventAttribute {
    'key': string;
    'operator': JourneyEventAttributeOperatorEnum;
    'value'?: string;
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
export type JourneyEventAttributeOperatorEnum = "equal" | "not_equal" | "less" | "less_or_equal" | "greater_or_equal" | "greater" | "is" | "is_not" | "exists" | "not_exists" | "before" | "after";
