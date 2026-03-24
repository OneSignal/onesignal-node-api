export declare class CreateApiKeyRequest {
    'name'?: string;
    'ip_allowlist_mode'?: CreateApiKeyRequestIpAllowlistModeEnum;
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
export type CreateApiKeyRequestIpAllowlistModeEnum = "disabled" | "explicit";
