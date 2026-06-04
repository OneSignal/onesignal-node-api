export declare class SegmentData {
    'id'?: string;
    'name'?: string;
    'created_at'?: string;
    'updated_at'?: string;
    'app_id'?: string;
    'read_only'?: boolean;
    'is_active'?: boolean;
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
