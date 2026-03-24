export declare class ApiKeyToken {
    'token_id'?: string;
    'updated_at'?: string;
    'created_at'?: string;
    'name'?: string;
    'ip_allowlist_mode'?: ApiKeyTokenIpAllowlistModeEnum;
    'ip_allowlist'?: Array<string>;
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
export type ApiKeyTokenIpAllowlistModeEnum = "disabled" | "explicit";
