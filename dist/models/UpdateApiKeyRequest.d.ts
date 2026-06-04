export declare class UpdateApiKeyRequest {
    'name'?: string;
    'ip_allowlist_mode'?: UpdateApiKeyRequestIpAllowlistModeEnum;
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
export type UpdateApiKeyRequestIpAllowlistModeEnum = "disabled" | "explicit";
