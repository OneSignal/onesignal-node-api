import { PropertiesObject } from './PropertiesObject';
import { Subscription } from './Subscription';
export declare class User {
    'properties'?: PropertiesObject;
    'identity'?: {
        [key: string]: string;
    };
    'subscriptions'?: Array<Subscription>;
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
