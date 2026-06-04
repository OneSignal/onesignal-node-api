import { Purchase } from './Purchase';
export declare class PropertiesDeltas {
    'session_time'?: number;
    'session_count'?: number;
    'purchases'?: Array<Purchase>;
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
