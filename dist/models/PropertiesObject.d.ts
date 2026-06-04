import { Purchase } from './Purchase';
export declare class PropertiesObject {
    'tags'?: {
        [key: string]: any;
    };
    'language'?: string;
    'timezone_id'?: string;
    'lat'?: number;
    'long'?: number;
    'country'?: string;
    'first_active'?: number;
    'last_active'?: number;
    'amount_spent'?: number;
    'purchases'?: Array<Purchase>;
    'ip'?: string;
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
