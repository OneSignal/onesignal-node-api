import { PropertiesDeltas } from './PropertiesDeltas';
import { PropertiesObject } from './PropertiesObject';
export declare class UpdateUserRequest {
    'properties'?: PropertiesObject;
    'refresh_device_metadata'?: boolean;
    'deltas'?: PropertiesDeltas;
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
