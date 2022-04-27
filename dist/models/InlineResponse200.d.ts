import { Notification200Errors } from './Notification200Errors';
export declare class InlineResponse200 {
    'id': string;
    'recipients': number;
    'external_id'?: string;
    'errors'?: Notification200Errors;
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
