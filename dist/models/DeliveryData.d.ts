export declare class DeliveryData {
    'successful'?: number;
    'failed'?: number;
    'errored'?: number;
    'converted'?: number;
    'received'?: number;
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
