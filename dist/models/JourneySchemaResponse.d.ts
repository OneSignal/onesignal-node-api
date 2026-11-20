export declare class JourneySchemaResponse {
    'operation': JourneySchemaResponseOperationEnum;
    'document': JourneySchemaResponseDocumentEnum;
    'schema': {
        [key: string]: any;
    };
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
export type JourneySchemaResponseOperationEnum = "create" | "duplicate" | "update" | "update_node";
export type JourneySchemaResponseDocumentEnum = "body" | "overrides" | "patch" | "merged_node";
