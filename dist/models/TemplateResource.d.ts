export declare class TemplateResource {
    'id'?: string;
    'name'?: string;
    'created_at'?: string;
    'updated_at'?: string;
    'channel'?: TemplateResourceChannelEnum;
    'content'?: {
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
export type TemplateResourceChannelEnum = "push" | "email" | "sms";
