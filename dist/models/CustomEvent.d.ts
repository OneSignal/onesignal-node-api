export declare class CustomEvent {
    'name': string;
    'external_id'?: string;
    'onesignal_id'?: string;
    'timestamp'?: string;
    'payload'?: {
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
