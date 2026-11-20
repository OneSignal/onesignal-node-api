import { JourneyValidationError } from './JourneyValidationError';
export declare class JourneyValidationErrorResponse {
    'errors'?: Array<JourneyValidationError>;
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
