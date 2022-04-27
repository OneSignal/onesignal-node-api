export declare class FilterNotificationTarget {
    'last_session'?: string;
    'first_session'?: string;
    'session_count'?: string;
    'session_time'?: string;
    'amount_spent'?: string;
    'bought_sku'?: string;
    'tag'?: string;
    'language'?: string;
    'app_version'?: string;
    'location'?: string;
    'email'?: string;
    'country'?: string;
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
