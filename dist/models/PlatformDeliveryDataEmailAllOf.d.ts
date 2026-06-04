export declare class PlatformDeliveryDataEmailAllOf {
    'opened'?: number;
    'unique_opens'?: number;
    'clicks'?: number;
    'unique_clicks'?: number;
    'bounced'?: number;
    'reported_spam'?: number;
    'unsubscribed'?: number;
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
