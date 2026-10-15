export declare class EmailMetrics {
    'sent'?: number;
    'delivered'?: number;
    'opened'?: number;
    'clicked'?: number;
    'unique_opened'?: number;
    'unique_clicked'?: number;
    'failed'?: number;
    'bounced'?: number;
    'complained'?: number;
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
