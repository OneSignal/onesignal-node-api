export declare class EstimateNotificationRecipientsSuccessResponse {
    'count'?: number;
    'uncapped_count'?: number;
    'cap_applied'?: boolean;
    'mobile_suppressed'?: boolean;
    'mobile_excluded_count'?: number;
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
